/** @jsx jsx */
import {AllWidgetProps, appActions, jsx, React} from 'jimu-core'
import {IMConfig} from '../config'
import { Button,} from 'jimu-ui'
import GraphicsLayer from "esri/layers/GraphicsLayer";
import {JimuMapView, JimuMapViewComponent} from 'jimu-arcgis'
import Graphic from 'esri/Graphic';
import request from   "esri/request";
import {ListValue} from "../config";
import JSZip from '../lib/zip';
import toGeoJson from '../lib/toGeoJson';
import zipShp from '../lib/convertGeoJsonToShp/zip';
import {getCsvUri} from '../lib/convertGeoJsonToCsv/'
import FeatureLayer from 'esri/layers/FeatureLayer';
import GeoJSONLayer from 'esri/layers/GeoJSONLayer';
import Query from 'esri/rest/support/Query';

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, any> {
    graphicLayerFound = new GraphicsLayer({id:"indirizzi-found-sketch",listMode:"hide",visible:true});
    graphicLayerSelected = new GraphicsLayer({id:"indirizzi-selected-sketch",listMode:"hide",visible:true});
    symbolFound = {
        type: "simple-fill",
        color: [51, 51, 204, 0.5],
        style: "solid",
        outline: {
            style: "short-dash",
            color: "white",
            width: 3
        }
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
      };
      this.arrayView = Object.assign([], this.props.config.listvalues)
      this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);
      this.saveState = this.saveState.bind(this);
      this.onChangeFileUpload = this.onChangeFileUpload.bind(this);

  }

    activeViewChangeHandler (jmv: JimuMapView) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            let arraySup = [];
            this.arrayView.forEach((el, index) => {
                arraySup.push({
                    label:el.name,
                    value:el
                })
            });

            this.setState({
                arrayLayer: arraySup,
                jimuMapView: jmv,
            });
        }
    }

    saveState(key,e){
        const stateNew = {}
        stateNew[key] = e.target ? e.target.value: e;
        this.setState(stateNew);
    }

    getExtension = (filePath:string)=>filePath.split(".").pop();

    getDom = xml =>(new DOMParser()).parseFromString(xml,"text/xml")
    

    async onChangeFileUpload(e){
        // const query = new Query();
        // var zip = new JSZip();
        const fileName = e.target.value.toLowerCase();
        // const  files = e.target.files;
        // if (files?.length){
        //     for(let i = 0;i < files.length;i++){
        //         const f = files[i];
        //         //@ts-ignore
        //         zip.loadAsync(f).then((zip)=>{
        //             let kmlDom = null
        //             zip.forEach((filePath,file) => {
        //                 if (this.getExtension(filePath) === "kml"){
        //                     kmlDom = file.async("string").then(this.getDom);
        //                     kmlDom.then(async(domVal)=>{
        //                         const geoJsonObject = toGeoJson.kml(domVal);
        //                         const blob = new Blob([JSON.stringify(geoJsonObject)], {type: "application/json"});
        //                         const url  = URL.createObjectURL(blob);
        //                         const layer = new GeoJSONLayer({ url });
        //                         const results = await layer.queryFeatures(query);
        //                         if (results.features.length){
        //                             try{
        //                                 this.state.jimuMapView.view.map.add(layer);
        //                             }catch(err){
        //                             }
        //                             try{
        //                                 this.state.jimuMapView.view.goTo(layer.fullExtent)
        //                             }catch(err){
        //                             }
        //                         }
                         
        //                         // this.state.jimuMapView.view.goTo(layer.fullExtent)

        //                         // const geoJsonLayer = new GeoJSONLayer({
                                    
        //                         // })

        //                         // const uri = getCsvUri([geoJsonObject]);
        //                         // console.log(geoJsonObject,"check uri")
        //                         // const featureCollection = {
        //                         //     layerDefinition:null,
        //                         //     featureSets:geoJsonObject.features
        //                         // }
        //                         // const feature = new FeatureLayer();

        //                         // const newGeoJsonObject = JSON.stringify(geoJsonObject);
        //                         // const zippedShpFile = zipShp(geoJsonObject);
        //                         // console.log(zippedShpFile,"check zippe shp file")
        //                         // console.log(geoJsonObject,"check newGeoJsonObject");
        //                         // let sourceGraphics = [];
        //                         // const graphics = geoJsonObject.features.map(el=>{
        //                         //     const geometry = {
        //                         //         type:el.geometry.type,
        //                         //         longitude:el.geometry.coordinates[0],
        //                         //         latitude:el.geometry.coordinates[1]
        //                         //     }
        //                         //     console.log(geometry)
        //                         //     const newObject = {
        //                         //         attributes:el.properties,
        //                         //         geometry:geometry
        //                         //     }
        //                         //     // console.log(el.geometry,newObject,"check el value")
        //                         //     return Graphic.fromJSON(newObject);
        //                         // })
        //                         // // console.log(graphics,"check graphics")
        //                         // sourceGraphics = sourceGraphics.concat(graphics);
        //                         // let layerToAdd = new GraphicsLayer({graphics: sourceGraphics});
        //                         // this.state.jimuMapView.view.map.add(layerToAdd);
        //                         // console.log(sourceGraphics,"check sources")
        //                         // // this.state.jimuMapView.view.goTo(sourceGraphics).catch((error) => {
        //                         // //     if (error.name != "AbortError") {
        //                         // //         console.error(error);
        //                         // //     }
        //                         // // });
        //                     })
        //                 }
        //             });
        //         })
        //     }
        // }
        if (fileName.indexOf(".zip") !== -1) {
            //is file a zip - if not notify user
            this.generateFeatureCollection(fileName);
        }else if(fileName.indexOf(".kmz") !== -1){
            const  files = e.target.files;
            this.generateLayerFromKMZ(files);
        }else {
            document.getElementById("upload-status").innerHTML =
                '<p style="color:red">Add shapefile as .zip file</p>';
        }
    }

    generateLayerFromKMZ(files:any[]){
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
                                const layer = new GeoJSONLayer({ url });
                                const results = await layer.queryFeatures(query);
                                if (results.features.length){
                                    try{
                                        this.state.jimuMapView.view.map.add(layer);
                                    }catch(err){
                                    }
                                    try{
                                        this.state.jimuMapView.view.goTo(layer.fullExtent)
                                    }catch(err){
                                    }
                                }
                         
                                // this.state.jimuMapView.view.goTo(layer.fullExtent)

                                // const geoJsonLayer = new GeoJSONLayer({
                                    
                                // })

                                // const uri = getCsvUri([geoJsonObject]);
                                // console.log(geoJsonObject,"check uri")
                                // const featureCollection = {
                                //     layerDefinition:null,
                                //     featureSets:geoJsonObject.features
                                // }
                                // const feature = new FeatureLayer();

                                // const newGeoJsonObject = JSON.stringify(geoJsonObject);
                                // const zippedShpFile = zipShp(geoJsonObject);
                                // console.log(zippedShpFile,"check zippe shp file")
                                // console.log(geoJsonObject,"check newGeoJsonObject");
                                // let sourceGraphics = [];
                                // const graphics = geoJsonObject.features.map(el=>{
                                //     const geometry = {
                                //         type:el.geometry.type,
                                //         longitude:el.geometry.coordinates[0],
                                //         latitude:el.geometry.coordinates[1]
                                //     }
                                //     console.log(geometry)
                                //     const newObject = {
                                //         attributes:el.properties,
                                //         geometry:geometry
                                //     }
                                //     // console.log(el.geometry,newObject,"check el value")
                                //     return Graphic.fromJSON(newObject);
                                // })
                                // // console.log(graphics,"check graphics")
                                // sourceGraphics = sourceGraphics.concat(graphics);
                                // let layerToAdd = new GraphicsLayer({graphics: sourceGraphics});
                                // this.state.jimuMapView.view.map.add(layerToAdd);
                                // console.log(sourceGraphics,"check sources")
                                // // this.state.jimuMapView.view.goTo(sourceGraphics).catch((error) => {
                                // //     if (error.name != "AbortError") {
                                // //         console.error(error);
                                // //     }
                                // // });
                            })
                        }
                    });
                })
            }
        }
    }

    generateFeatureCollection(fileName) {
        let name = fileName.split(".");
        // Chrome adds c:\fakepath to the value - we need to remove it
        name = name[0].replace("c:\\fakepath\\", "");
        document.getElementById("upload-status").innerHTML =
            "<b>Loading </b>" + name;

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
            body: document.getElementById("uploadForm"),
            responseType: "json"
        })
            .then((response) => {
                console.log(response,"check response")
                const layerName =
                    response.data.featureCollection.layers[0].layerDefinition.name;
                document.getElementById("upload-status").innerHTML =
                    "<b>Loaded: </b>" + layerName;
                this.addShapefileToMap(response.data.featureCollection);
            })
            .catch(this.errorHandler);
    }

    errorHandler(error) {
        document.getElementById("upload-status").innerHTML =
            "<p style='color:red;max-width: 500px;'>" + error.message + "</p>";
    }

    addShapefileToMap(featureCollection) {
        // add the shapefile to the map and zoom to the feature collection extent
        // if you want to persist the feature collection when you reload browser, you could store the
        // collection in local storage by serializing the layer using featureLayer.toJson()
        // see the 'Feature Collection in Local Storage' sample for an example of how to work with local storage
        let sourceGraphics = [];

         featureCollection.layers.map((layer) => {
            const graphics = layer.featureSet.features.map((feature) => {
                return Graphic.fromJSON(feature);
            });
            sourceGraphics = sourceGraphics.concat(graphics);
             let layerToAdd = new GraphicsLayer({
                 graphics: sourceGraphics
             });

             this.state.jimuMapView.view.map.add(layerToAdd);
             this.state.jimuMapView.view.goTo(sourceGraphics).catch((error) => {
                 if (error.name != "AbortError") {
                     console.error(error);
                 }
             });
            // associate the feature with the popup on click to enable highlight and zoom to
        });
        document.getElementById("upload-status").innerHTML = "";
    }


  render () {
    return (
        <div className="widget-address jimu-widget  container-fluid" style={{overflow:"auto"}}>
            {this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
                <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
            )}

                <div id="search-advanced-tab-Coord-file" className="d-flex flex-column p-1" title="Multicoordinate da file">
                        <div className="container-fluid mt-3 mb-3">
                            <div className="row mb-3">
                                <label className="w-100 form-label">
                                    Aggiungi file KMZ o SHAPE FILE
                                </label>
                                <form encType="multipart/form-data" method="post"  id="uploadForm"  >
                                    <div className="field">
                                        <label className="file-upload">
                                            <span><strong>Add File</strong></span>
                                            <input type="file" name="file" id="inFile" onChange={this.onChangeFileUpload}/>
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <span
                                className="file-upload-status"
                                style={{ opacity: 1 }}
                                id="upload-status"
                            ></span>
                        </div>
                </div>
        </div>

    )
  }
}
