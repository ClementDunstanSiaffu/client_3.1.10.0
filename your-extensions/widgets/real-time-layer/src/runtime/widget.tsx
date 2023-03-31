
import {React,jsx,AllWidgetProps} from 'jimu-core';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import Home from 'esri/widgets/Home';

export default class TimeBasedLayer extends React.PureComponent<AllWidgetProps<any>,any>{

    componentDidMount(): void {
        const traficLayer = new MapImageLayer({
            url: "https://traffic.arcgis.com/arcgis/rest/services/World/Traffic/MapServer",
            dpi:48,
            imageFormat:"png32",
            refreshInterval:1,
            useViewTime:false
        })
        // const traficLayer = new GraphicsLayer()
        const map = new Map({
            basemap:"topo-vector",
            layers:[traficLayer]
        })
        const view = new MapView({
            map:map,
            container:"time_based_widget_map",
            center: [-118.2, 34.047],
            zoom:10
        })
        const homeWidget = new Home({view:view});
        view.ui.add(homeWidget);
        console.log(map,view,"called")
    }

    render(): React.ReactNode {
        return(
            <div 
                id = "time_based_widget_map"
                style={{
                    height:"100vh",
                    width:"100vw",
                    padding:0,
                    margin:0
                }}
            >
                <div id = "time-based-clock"></div>
            </div>
        )
    }
}
