import {React,jsx} from 'jimu-core';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import Search from "esri/widgets/Search";
import FeatureLayer from 'esri/layers/FeatureLayer';
import { Loading } from 'jimu-ui';
import geometryEngine from 'esri/geometry/geometryEngine';
import Graphic from 'esri/Graphic';

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
                featureLayer.load().then(()=>{
                    this.setState({loader:false,jmv:jmv})
                    const fieldInfos = this.getFieldInfos(featureLayer.fields??[])
                    const sources = [{
                        layer: featureLayer,
                        placeholder: "Locating by using value",
                        maxResults:5,
                        maxSuggestions:6,
                        displayField:searchedField,
                        searchedField:[`${searchedField}`],
                        minSuggestCharacters:0,
                    }];
                    const searchWidget = new Search({
                        view:jmv.view,
                        container:"search-widget-search-value",
                        includeDefaultSources:false,
                        sources:sources,
                        popupTemplate:{title:"Search value widget",content:[{type:"fields",fieldInfos:fieldInfos}]}
                    })
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