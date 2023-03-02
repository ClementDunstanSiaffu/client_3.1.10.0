/** @jsx jsx */
import {AllWidgetProps, appActions, jsx, React} from 'jimu-core'
import {IMConfig} from '../config'
import { Button,Loading,Alert} from 'jimu-ui'
import GraphicsLayer from "esri/layers/GraphicsLayer";
import {JimuMapView, JimuMapViewComponent} from 'jimu-arcgis'
import Graphic from 'esri/Graphic';
import request from   "esri/request";
import {ListValue} from "../config";
import JSZip from '../lib/zip';
import toGeoJson from '../lib/toGeoJson';
import GeoJSONLayer from 'esri/layers/GeoJSONLayer';
import Query from 'esri/rest/support/Query';
import defaultMessages from "../runtime/translations/default";


export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, any> {
    graphicLayerFound = new GraphicsLayer({id:"indirizzi-found-sketch",listMode:"hide",visible:true});
    graphicLayerSelected = new GraphicsLayer({id:"indirizzi-selected-sketch",listMode:"hide",visible:true});
    symbolFound = {
        type: "simple-fill",
        color: [51, 51, 204, 0.5],
        style: "solid",
        outline: {style: "short-dash",color: "white",width: 3}
    };

    arrayView:ListValue[];
    constructor (props) {
      super(props)
      this.state = {
        jimuMapView: null,
        labelVisible:true,
        viewSelectDraw: true,
        formExtraUrbano:{
            //TODO
        },
        arrayLayer: [],
        portalUrl:  "https://www.arcgis.com",
        loadingIndicator:false,
        failedToLoad:false,
        errorMessage:" ",
        layerName:null,
        addedLayerIds:[],
        widgetStateOpenedChecked: false,
        widgetStateClosedChecked: false,
      };
      this.arrayView = Object.assign([], this.props.config.listvalues)
      this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);
      this.saveState = this.saveState.bind(this);
      this.onChangeFileUpload = this.onChangeFileUpload.bind(this);
      this.errorHandler = this.errorHandler.bind(this)
    }
    componentWillUnmount() {
        console.log('Il componente sta per essere rimosso dalla pagina.');
    }

    nls = (id:string)=>{
        return this.props.intl ? this.props.intl.formatMessage({id:id,defaultMessage:defaultMessages[id]}):id
    }

    activeViewChangeHandler (jmv: JimuMapView) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            let arraySup = [];
            this.arrayView.forEach((el, index) => {arraySup.push({label:el.name,value:el})});
            this.setState({arrayLayer: arraySup,jimuMapView: jmv,});
        }
    }

    saveState(key,e){
        const stateNew = {}
        stateNew[key] = e.target ? e.target.value: e;
        this.setState(stateNew);
    }

    getExtension = (filePath:string)=>filePath.split(".").pop();

    getDom = (xml) =>{
        const newXml = xml.trim();
        const xmlVal = (new DOMParser()).parseFromString(newXml,"text/xml");
        return xmlVal;
    }

    async onChangeFileUpload(e){
        this.loadingIndicator();
        const fileName = e.target.value.toLowerCase();
        if (fileName.indexOf(".zip") !== -1) {
            //is file a zip - if not notify user
            this.generateFeatureCollection(fileName);
        }else if(fileName.indexOf(".kmz") !== -1){
            const  files = e.target.files;
            this.generateLayerFromKMZ(files,fileName);
        }else {
            this.failedAddingLayer({message:"failed to load"})
        }
    }

    generateLayerFromKMZ(files:any[],fileName:string){
        let name = fileName.split(".");
        //@ts-ignore
        name = name[0].replace("c:\\fakepath\\", "");
        const query = new Query();
        const zip = new JSZip();
        if (files?.length){
            for(let i = 0;i < files.length;i++){
                const f = files[i];
                //@ts-ignore
                zip.loadAsync(f).then((zippedFile)=>{
                    let kmlDom = null
                    zippedFile.forEach((filePath,file) => {
                        if (this.getExtension(filePath) === "kml"){
                            kmlDom = file.async("string").then(this.getDom);
                            kmlDom.then(async(domVal)=>{
                                const geoJsonObject = toGeoJson.kml(domVal);
                                const blob = new Blob([JSON.stringify(geoJsonObject)], {type: "application/json"});
                                const url  = URL.createObjectURL(blob);
                                //@ts-ignore
                                const layer = new GeoJSONLayer({ url,title:name});
                                query.outFields = ['*']
                                const results = await layer.queryFeatures(query);
                                if (results.features.length){
                                    if (results.fields.length){
                                        const fieldInfos = []
                                        for (let i = 0;i < results.fields.length;i++){
                                            const currentField = results.fields[i];
                                            fieldInfos.push({
                                                fieldName:currentField.name,
                                                label:currentField.alias
                                            })
                                        }
                                        layer.popupTemplate = {
                                            title:"Add file layer",
                                            //@ts-ignore
                                            content:[{type:"fields",fieldInfos:fieldInfos}]
                                        }
                                    }
                                    try{
                                        this.state.jimuMapView.view.map.add(layer);
                                        this.state.jimuMapView.view.goTo(layer.fullExtent);
                                        // debugger;
                                        this.succefullyAddingLayer(layer.title);
                                        this.setAddedLayerIds(layer)
                                    }catch(err){
                                        this.failedAddingLayer(err);
                                    }
                                }else{
                                    this.failedAddingLayer({message:this.nls("noFeatures")});
                                }
                            })
                        }
                    });
                })
            }
        }else{
            this.failedAddingLayer({message:this.nls("noFilesFound")});
        }
    }

    setAddedLayerIds = (layer)=>{
        const copiedLayerIds = [...this.state.addedLayerIds];
        copiedLayerIds.push(layer);
        this.setState({addedLayerIds:copiedLayerIds});
    }

    loadingIndicator = ()=>this.setState({loadingIndicator:true,failedToLoad:false,errorMessage:" ",layerName:null});

    succefullyAddingLayer = (layerTitle)=>this.setState({
        loadingIndicator:false,
        failedToLoad:false,
        errorMessage:" ",
        layerName:layerTitle
    });

    failedAddingLayer = (error)=>this.setState({loadingIndicator:false,failedToLoad:true,errorMessage:error?.message,layerName:null});

    generateFeatureCollection(fileName) {
        let name = fileName.split(".");
        // Chrome adds c:\fakepath to the value - we need to remove it
        name = name[0].replace("c:\\fakepath\\", "");
        // define the input params for generate see the rest doc for details
        // https://developers.arcgis.com/rest/users-groups-and-items/generate.htm
        const params = {
            name: name,
            targetSR: this.state.jimuMapView.view.spatialReference,
            maxRecordCount: 1000,
            enforceInputFileSizeLimit: true,
            enforceOutputJsonSizeLimit: true
        };

        const myContent = {
            filetype: "shapefile",
            publishParameters: JSON.stringify(params),
            f: "json"
        };

        // use the REST generate operation to generate a feature collection from the zipped shapefile
        request(this.state.portalUrl + "/sharing/rest/content/features/generate", {
            query: myContent,
            //@ts-ignore
            body: document.getElementById("uploadForm"),
            responseType: "json"
        })
        .then((response) => {this.addShapefileToMap(response.data.featureCollection);})
        .catch(this.errorHandler);
    }

    errorHandler(error) {this.failedAddingLayer(error)}

    addShapefileToMap(featureCollection) {
        // add the shapefile to the map and zoom to the feature collection extent
        // if you want to persist the feature collection when you reload browser, you could store the
        // collection in local storage by serializing the layer using featureLayer.toJson()
        // see the 'Feature Collection in Local Storage' sample for an example of how to work with local storage
        let sourceGraphics = [];

        featureCollection.layers.map((layer) => {
            const graphics = layer.featureSet.features.map((feature) => {return Graphic.fromJSON(feature);});
            sourceGraphics = sourceGraphics.concat(graphics);
            let layerToAdd = new GraphicsLayer({graphics: sourceGraphics, title: layer.layerDefinition.name});
            this.state.jimuMapView.view.map.add(layerToAdd);
            this.state.jimuMapView.view.goTo(sourceGraphics)
            .catch((error) => {
                if (error.name != "AbortError") {}
            });
            this.setAddedLayerIds(layerToAdd)
            // associate the feature with the popup on click to enable highlight and zoom to
        });
        const layerName = featureCollection.layers[0].layerDefinition.name;
        this.succefullyAddingLayer(layerName);
    }

    clearFileInput(id) { 
        const oldInput = document.getElementById(id); 
        const newInput = document.createElement("input"); 
        newInput.type = "file"; 
        newInput.id = oldInput.id; 
        newInput.name = oldInput.name; 
        newInput.className = oldInput.className; 
        newInput.onchange = this.onChangeFileUpload
        newInput.style.cssText = oldInput.style.cssText; 
        oldInput.parentNode.replaceChild(newInput, oldInput); 
    }

    render () {

        if (this.props.state === "CLOSED" && !this.state.widgetStateClosedChecked){
            const jmv = this.state.jimuMapView;
            const addedLayerIds = this.state.addedLayerIds;
            if (jmv && addedLayerIds.length )addedLayerIds.forEach((layerId)=>{
                jmv.view.map.remove(layerId)
            });
            const element = document.getElementsByTagName("input");
            const currentId = element[0].id;
            this.setState({
                widgetStateClosedChecked:true,
                widgetStateOpenedChecked:false,
                addedLayerIds:[],
                layerName:null,
                errorMessage:" ",
                failedToLoad:false,
                loadingIndicator:false
            });
            this.clearFileInput(currentId);
        }

        if (this.props.state === "OPENED" && !this.state.widgetStateOpenedChecked){
            this.setState({widgetStateOpenedChecked:true,widgetStateClosedChecked:false})
        }

        return (
            <div className="widget-address jimu-widget  container-fluid" style={{overflow:"auto"}}>
                {this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
                    <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
                )}

                <div id="search-advanced-tab-Coord-file" className="d-flex flex-column p-1" title="Multicoordinate da file">
                    <div className="container-fluid mt-3 mb-3">
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <Alert className="w-100" form="basic" open text="Lo Shape file va inserito all'interno di uno zip, mentre per il file KMZ inserire direttamente il file" type="info" withIcon/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="w-100 form-label">Aggiungi file KMZ o SHAPE FILE</label>
                            <form encType="multipart/form-data" method="post"  id="uploadForm"  >
                                <div className="field">
                                    <label className="file-upload">
                                        <span><strong>Add File</strong></span>
                                        <input type="file" name="file" id="inFile" onChange={this.onChangeFileUpload}/>
                                    </label>
                                </div>
                            </form>
                            {
                                !this.state.loadingIndicator && this.state.layerName && (
                                    <div style = {{fontSize:14,color:"black",textAlign:"start",marginTop:20}}>
                                        <b>Layer Name </b> : {this.state.layerName}
                                    </div>
                                )
                            }
                            {this.state.loadingIndicator && <div 
                                style={{
                                    width:"100%",
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"center",
                                    height:"auto"
                                }}
                            >
                                <div 
                                    style={{
                                        height:'80px',
                                        position:'relative',
                                        width:'100%',
                                        marginLeft:"auto",
                                        marginRight:"auto"
                                    }}
                                >
                                    <Loading />
                                </div>
                                <div style = {{fontSize:14,color:"grey",width:'100%',textAlign:"center"}}>
                                    Adding layer on the map....
                                </div>
                            </div>}
                            {this.state.failedToLoad && <div 
                                style={{
                                    width:"100%",
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"center",
                                    marginTop:20,
                                    height:"auto"
                                }}
                            >
                                <Alert 
                                    text={this.state.errorMessage}
                                    type = "error"
                                    closable = {true}
                                    onClose = {()=>this.succefullyAddingLayer(null)}
                                />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
