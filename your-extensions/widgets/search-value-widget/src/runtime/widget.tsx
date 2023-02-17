
import {React,jsx} from 'jimu-core';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import Search from "esri/widgets/Search";


export default class Widget extends React.PureComponent<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            jmv:null
        }
    }

    onActiveViewChange = (jmv:JimuMapView)=>{
        jmv.view.when(()=>{
            const searchWidget = new Search({
                view:jmv.view
            })
            jmv.view.ui.add(searchWidget,{position:"top-right"})
        })
        this.setState({jmv:jmv})
    }

    render(): React.ReactNode {
        return(
            <div className="widget-search-value jimu-widget">
                {
                    this.props.uuseMapWidgetIds?.length && 
                    <JimuMapViewComponent 
                        useMapWidgetId={this.props.uuseMapWidgetIds[0]}
                        onActiveViewChange = {this.onActiveViewChange}
                    />
                }
                
            </div>
        )
    }
}