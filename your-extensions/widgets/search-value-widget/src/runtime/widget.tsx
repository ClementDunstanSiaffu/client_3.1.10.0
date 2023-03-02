import {React,jsx} from 'jimu-core';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import Search from "esri/widgets/Search";
import FeatureLayer from 'esri/layers/FeatureLayer';
import { Loading } from 'jimu-ui';
import geometryEngine from 'esri/geometry/geometryEngine';
import Graphic from 'esri/Graphic';
import SearchSource from 'esri/widgets/Search/SearchSource';
import Query from 'esri/rest/support/Query';
import helper from '../helper/helper';

export default class Widget extends React.PureComponent<any,any>{

    initialZoomValue = 0;
    searchWidget = null;
    cleared = false;

    constructor(props:any){
        super(props);
        this.state = {jmv:null,loader:true}
    }

    getFieldInfos = (fields:any[])=>{
        const newFields = []
        if (fields.length)fields.forEach(el=>{newFields.push({fieldName:el.name,label:el.alias})})
        return newFields;
    }

    selectFeatureLayer = (geometry:any)=>{
        const activeView = this.state.jmv;
        if (activeView){
            activeView?.selectFeaturesByGraphic(geometry,"contains").then((results)=>{})
            .catch((err)=>{})
        }
      }

    onActiveViewChange = async(jmv:JimuMapView)=>{
        jmv.clearSelectedFeatures();
        this.initialZoomValue =  jmv.view.zoom;
        jmv.view.popup.visible = true;
        const unrequiredValue = [""," "];
        let url = this.props.config.service.url;
        const layerId = this.props.config.service.layerId;
        const searchedField = this.props.config.service.searchField;
        if (!unrequiredValue.includes(layerId)){
            url = url+"/"+layerId.trim()
        }
        if (url){
            const featureLayer =  new FeatureLayer(url);
            if (featureLayer){
                featureLayer.load().then(async()=>{
                    const query = new Query();
                    query.returnGeometry = true;
                    query.outFields = [`${searchedField}`];
                    query.where = "1=1"
                    let results;
                    if (featureLayer.queryFeatures){
                        results = featureLayer.queryFeatures(query);
                        const anotherResults = await featureLayer.queryFeatures(query);
                    }else{
                        const layerView = await jmv.view.whenLayerView(featureLayer);
                        if (layerView.queryFeatures){
                            results = layerView.queryFeatures(query);
                        }
                    }
                    this.setState({loader:false,jmv:jmv})
                    const fieldInfos = this.getFieldInfos(featureLayer.fields??[]);
                    const customSearchSource = new SearchSource({
                        placeholder: 'Search',
                        minSuggestCharacters:0,
                        getSuggestions: (params) => {
                            // console.log(params,"check params")
                          return results.then((data) => {
                            console.log(data,"check inside results")
                            let defaultSuggestions = [];
                            if (data?.features?.length){
                                const features = data.features;
                                defaultSuggestions = helper.getAllSuggestions(features,params);
                                // console.log(defaultSuggestions,"check default suggestions")
                            }
                            return defaultSuggestions;
                            // console.log(data,"check data")
                            // var results = [];
                            // var toSearch = params.suggestTerm;
                            // return[{
                            //     key:"name",
                            //     text:"",
                            //     sourceIndex:params.sourceIndex
                            // }]
                            // data = data["allIBLocations"]["data"];
                      
                            // for(var i=0; i<data.length; i++) {
                            //   if(data[i]["name"].indexOf(toSearch)!=-1) {
                            //     results.push(data[i]);
                            //   }
                            // }
                            // return results.map((feature) => {
                            //   return {
                            //     key: "name",
                            //     text: feature.name,
                            //     sourceIndex: params.sourceIndex
                            //   };
                            // })
                          })
                          .catch((err)=>{
                            console.log(err,"check error")
                          })
                        },
                        getResults: (params) => {
                          return results.then((data) => {
                            const results = [];
                            let toSearch = params.suggestResult.text;
                            const field = params.key;
                            if (!isNaN(parseInt(toSearch)) && typeof parseInt(toSearch) === "number"){
                                toSearch = parseInt(toSearch);
                            }
                            const features = data?.features??[];
                            if (features.length){
                                for (let i = 0;i < features.length;i++){
                                    const attributes = features[i]?.attributes;
                                    let keys = [];
                                    if (attributes){
                                        keys = Object.keys(attributes);
                                    }
                                    if (keys.length){
                                        keys.forEach(key=>{
                                            let status = false;
                                            if (typeof toSearch === "number"){
                                                if (toSearch === attributes[key]){
                                                    status = true
                                                }
                                            }else if (typeof toSearch === "string"){
                                                if (toSearch.includes(attributes[key])){
                                                    status = true;
                                                }
                                            }
                                            if (status){
                                                results.push(features[i])
                                            }
                                        })
                                    }
                                    console.log(features[i]);
                                    // if (features[i].indexOf(toSearch) !== -1)results.push()
                                }
                                if (results.length){
                                    const searchedItem = results[0];
                                    const searchedGeometry = searchedItem.geometry;
                                    if (searchedGeometry){
                                        const arrayGeometry = [];
                                        this.cleared = false;
                                        const newGeometry = geometryEngine.buffer(searchedGeometry,1, "meters");
                                        arrayGeometry.push(newGeometry);
                                        try{
                                            //@ts-ignore
                                            const polygonGraphic = new Graphic({geometry:newGeometry,symbol:null});
                                            this.selectFeatureLayer(polygonGraphic)
                                        }catch(err){}
                                        if (arrayGeometry.length){
                                            const unifiedGeomtry = geometryEngine.union(arrayGeometry);
                                            if (jmv)jmv.view.popup.visible = true;
                                            jmv.view.goTo(unifiedGeomtry.extent);
                                        }
                                    }
                                }
                            }
                            // data = data["allIBLocations"]["data"];
                            // for(var i=0; i<data.length; i++) {
                            //   if(data[i]["name"].indexOf(toSearch)!=-1) {
                            //     results.push(data[i]);
                            //   }}
                            
                            // const searchResults = results.map((feature) => {
                            //   console.log(feature)
                            //   const graphic = new Graphic({
                            //     geometry: new Point({
                            //       latitude: feature.geoCode.latitude,
                            //       longitude: feature.geoCode.longitude
                            //     }),
                            //     attributes: feature.address
                            //   });
                            //   const buffer = geometryEngine.geodesicBuffer(
                            //     graphic.geometry,
                            //     100,
                            //     "meters"
                            //   );
                            //   const searchResult = {
                            //     extent: buffer.extent,
                            //     feature: graphic,
                            //     name: feature["name"]
                            //   };
                            //   return searchResult;
                            // });
                            return [];
                          });
                        }
                      });
                    // const customSearchSources = new SearchSource({
                    //     getSuggestions:(params)=>{
                    //         results.then((data)=>{

                    //         })
                    //         console.log(params,"check params")
                    //         return [{
                    //             key: "name",
                    //             text: "kile",
                    //             sourceIndex: params.sourceIndex
                    //         }]
                    //     }
                    // })

                    // const searchExtent = {
                    //     where: `${searchedField} LIKE '%'`
                    // }
                    const sources = [{
                        layer: featureLayer,
                        placeholder: "Locating by using value",
                        maxResults:5,
                        maxSuggestions:6,
                        displayField:searchedField,
                        searchedField:[`${searchedField}`],
                        minSuggestCharacters:0,
                        suggestionsEnabled:true,
                        exactMatch:false,

                        // filter:searchExtent
                        // searchTerm: "%" + searchedField + "%"
                    }];
                    const searchWidget = new Search({
                        view:jmv.view,
                        container:"search-widget-search-value",
                        includeDefaultSources:false,
                        sources:[customSearchSource],
                        // sources:sources,
                        popupTemplate:{title:"Search value widget",content:[{type:"fields",fieldInfos:fieldInfos}]}
                    })

                    // console.log(searchWidget,"check search widget")
                    
                    // searchWidget.on("suggest-start",(event)=>{
                    //     // searchWidget.suggest(event.searchTerm)
                    //     console.log(event,"check event on search start")
                    // })
                    // searchWidget.on("suggest-complete",(event)=>{
                    //     event.results[0].source.filter.where =  `${searchedField} LIKE '%${event.searchTerm}'` 
                    //     console.log(event.results[0].source,"suggestion completet")
                    // })
                    searchWidget.on("select-result", (event)=>{
                        if(event && event.result && event.result.feature){
                            if (event.result.feature.geometry){
                                const arrayGeometry = [];
                                this.cleared = false;
                                const newGeometry = geometryEngine.buffer(event.result.feature.geometry,1, "meters");
                                arrayGeometry.push(newGeometry);
                                try{
                                    //@ts-ignore
                                    const polygonGraphic = new Graphic({geometry:newGeometry,symbol:null});
                                    this.selectFeatureLayer(polygonGraphic)
                                }catch(err){}
                                if (arrayGeometry.length){
                                    const unifiedGeomtry = geometryEngine.union(arrayGeometry);
                                    if (jmv)jmv.view.popup.visible = true;
                                    jmv.view.goTo(unifiedGeomtry.extent);
                                }
                            }
                        }
                    });
                    searchWidget.on("search-clear", (event)=>{
                        if (!this.cleared){
                            jmv.clearSelectedFeatures();
                            jmv.view.popup.visible = false;
                            jmv.view.goTo({center:jmv.view.center,zoom:this.initialZoomValue});
                            this.cleared = true;
                            searchWidget.clear();
                        }                       
                    });
                    this.searchWidget = searchWidget;
                })
            }
             
        }
    }

    render(): React.ReactNode {

        let closedChecked = false;
        let openChecked = false;
        
        if(this.props.state === "CLOSED" && !closedChecked){
            const jmv = this.state.jmv;
            if (jmv){
                jmv.clearSelectedFeatures();
                jmv.view.goTo({center:jmv.view.center,zoom:this.initialZoomValue});
                jmv.view.popup.visible = false;
            }
            if (this.searchWidget){
                this.cleared = true;
                this.searchWidget.clear();
            }
            closedChecked = true;
            openChecked = false;
        }

        if (this.props.state === "OPENED" && !openChecked){
            closedChecked = false;
            openChecked = true;  
        }

        return(
            <div className="widget-search-value jimu-widget">
                {
                    this.props.useMapWidgetIds?.length && 
                    <JimuMapViewComponent 
                        useMapWidgetId={this.props.useMapWidgetIds[0]}
                        onActiveViewChange = {this.onActiveViewChange}
                    />
                }
                <><div id="search-widget-search-value" className="w-100"></div></>
                {
                    this.state.loader && (
                        <div 
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
                                Loading search widget....
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}