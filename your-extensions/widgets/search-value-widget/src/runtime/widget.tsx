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
                        sources:sources,
                        popupTemplate:{title:"Search value widget",content:[{type:"fields",fieldInfos:fieldInfos}]}
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
                })
            }
             
        }
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
                            <div style = {{fontSize:14,color:"grey",width:'100%',textAlign:"center"}}>Loading search widget....</div>
                        </div>
                    )
                }
                
            </div>
        )
    }
}