
import {React,jsx} from 'jimu-core';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import Search from "esri/widgets/Search";
import FeatureLayer from 'esri/layers/FeatureLayer';
import { Loading } from 'jimu-ui';
import geometryEngine from 'esri/geometry/geometryEngine';

export default class Widget extends React.PureComponent<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            jmv:null,
            loader:true
        }
    }

    getSearchFields = (fields:any[])=>{
        const newFields = []
        if (fields.length){
            fields.forEach(el=>{
                newFields.push(`${el.name}`)
            })
        }
        return newFields;
    }

    getFieldInfos = (fields:any[])=>{
        const newFields = []
        if (fields.length){
            fields.forEach(el=>{
                newFields.push({
                    fieldName:el.name,
                    label:el.alias
                })
            })
        }
        return newFields;
    }

    onActiveViewChange = async(jmv:JimuMapView)=>{
            const url = this.props.config.service.url;
            // let featureLayer;
            if (url){
                const featureLayer =  new FeatureLayer(url);
                if (featureLayer){
                    featureLayer.load().then(()=>{
                        this.setState({loader:false,jmv:jmv})
                        // const searchedFields = this.getSearchFields(featureLayer.fields??[]);
                        const fieldInfos = this.getFieldInfos(featureLayer.fields??[])
                        const sources = [{
                            layer: featureLayer,
                            placeholder: "Locating by using value",
                            maxResults: 5,
                            // searchFields: searchedFields,
                            maxSuggestions:6,
                            minSuggestCharacters:0,
                        }];
                        const searchWidget = new Search({
                            view:jmv.view,
                            container:"search-widget-search-value",
                            sources:sources,
                            popupTemplate:{
                                title:"Search value widget",
                                content:[{
                                    type:"fields",
                                    fieldInfos:fieldInfos
                                }]
                            }
                        })
                        searchWidget.on("select-result", (event)=>{
                            if(event && event.result && event.result.feature){
                                if (event.result.feature.geometry){
                                    const arrayGeometry = [];
                                    const newGeometry = geometryEngine.buffer(event.result.feature.geometry,1, "meters");
                                    arrayGeometry.push(newGeometry);
                                    if (arrayGeometry.length){
                                      const unifiedGeomtry = geometryEngine.union(arrayGeometry);
                                      jmv.view.goTo(unifiedGeomtry.extent);
                                    }
                                  }
                            }
                          });
                        
                        // jmv.view.ui.add(searchWidget,{position:"top-right"})
                    })
                }
             
            }
            // if (featureLayer){
            //     const searchedFields = this.getSearchFields(featureLayer.fields??[]);
            //     console.log(featureLayer,featureLayer.fields,searchedFields,"trueueu")
            //     const sources = [{
            //         layer: featureLayer,
            //         placeholder: "Darwin",
            //         maxResults: 5,
            //         searchFields: searchedFields,
            //       }];
            //       const searchWidget = new Search({
            //         view:jmv.view,
            //         container:"search-widget-search-value",
            //         sources:sources
            //     })
            //     // jmv.view.ui.add(searchWidget,{position:"top-right"})
            // }else{
            //     throw("Put service on the service")
            // }
          
        
        // this.setState({jmv:jmv})
    }

    render(): React.ReactNode {
        return(
            <div className="widget-search-value jimu-widget">
                {
                    this.props.useMapWidgetIds?.length && 
                    <JimuMapViewComponent 
                        useMapWidgetId={this.props.useMapWidgetIds[0]}
                        onActiveViewChange = {this.onActiveViewChange}
                    />
                }
                <>
                    <div id="search-widget-search-value" className="w-100"></div>
                </>
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