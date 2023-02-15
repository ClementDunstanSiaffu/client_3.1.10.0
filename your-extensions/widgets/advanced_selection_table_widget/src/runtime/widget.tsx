import {React,jsx,AllWidgetProps,IMState, appActions} from 'jimu-core';
import CreateLayer from '../component/create_layer';
import LayersTable from '../component/layer_table';
import Options from '../component/options';
import StatisticsModal from '../component/statistics';
import { AdvancedSelectionTableContext } from '../context/context';
import { JimuMapViewComponent,JimuMapView} from 'jimu-arcgis';
import helper from '../helper/helper'
import defaultMessages from "../../../advanced_selection_table_widget/src/runtime/translations/default";
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import CSVLayer from 'esri/layers/CSVLayer';
import Polygon from 'esri/geometry/Polygon';
import AlertComponent from '../component/common/alert';
import reactiveUtils from 'esri/core/reactiveUtils';

type StateValueType = {stateValue:any}

let sketchLayer = new GraphicsLayer()

export default class AdvancedSelectionTable extends React.PureComponent<AllWidgetProps<any>&StateValueType,any>{

    static mapExtraStateProps(state:IMState){return {stateValue:state.widgetsState}};
    static activeView = null;
    static deleteStatus = false;
    static jimuLayerViews = null;
    static initialZoomValue = 0;
    static selectedGraphic = null

    constructor(props:AllWidgetProps<any>&StateValueType){
        super(props);
        this.getAllCheckedLayers = this.getAllCheckedLayers.bind(this);
        this.onCloseAlert = this.onCloseAlert.bind(this);
        this.controlCheckedLayers = this.controlCheckedLayers.bind(this);
        this.removeAttributes = this.removeAttributes.bind(this);
    }

    state = {
        popup:false,
        layers:[],
        layerContents:[],
        openStatistics:false,
        selectedAttributes:[],
        isItemSelected:false,
        layerId:" ",
        layerTitle:" ",
        component_type:"LAYERS_CONTENTS",
        anchorEl:null,
        opencreateLayer:false,
        layerName:" ",
        csvFile:" ",
        createdLayerTitle:" ",
        isMapLoaded:false,
        widgetStateIsClosed:false,
        widgetStateIsOpenend:false
    }

    sketch = null;

    componentDidUpdate = ()=>{
        if (this.props.state === "CLOSED" && !this.state.widgetStateIsClosed){
            this.restoreMap();
            this.setState({widgetStateIsClosed:true,widgetStateIsOpenend:false})
        }
        if (this.props.state === "OPENED"){
            this.setState({widgetStateIsClosed:false,widgetStateIsOpenend:true})
        }
    }

    nls = (id: string) => {
        return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: defaultMessages[id] }) : id
    }

    onCloseAlert = ()=>this.props.dispatch(appActions.widgetStatePropChange("value","showAlert",false));


    getAllCheckedLayers = ()=>{
        const activeView = AdvancedSelectionTable.activeView;
        const allMapLayers = activeView.view.map.allLayers?.items;
        const checkedLayers = this.props.stateValue?.value?.checkedLayers??[];
        let newMapLayer = [];
        if (allMapLayers?.length > 0 && checkedLayers.length > 0){
            newMapLayer = allMapLayers.reduce((newArray,item)=>{
                if (checkedLayers.includes(item.id)){
                    newArray.push(item);
                }
                return newArray;
            },[])
        }
        return newMapLayer;
    }

    getActiveView = ()=>{
        const activeView = AdvancedSelectionTable.activeView;
        return activeView;
    }

    getAllJimuLayerViews = ()=>{
        const jimuLayerViews = AdvancedSelectionTable.jimuLayerViews;
        return jimuLayerViews
    }

    getMapLayers = (activeView:JimuMapView)=>{
        if (activeView){
            console.log(activeView.jimuLayerViews,"check jimulayer views")
            const newLayersArray = Object.keys(activeView?.jimuLayerViews)?.reduce((newLayerArray,item)=>{
                if (activeView?.jimuLayerViews[item]?.view && activeView?.jimuLayerViews[item]?.layer?.type === "feature"){
                    let object = {
                        layerName:activeView?.jimuLayerViews[item]?.layer?.title??item,
                        layerId:activeView?.jimuLayerViews[item]?.jimuLayerId??" ",
                        keyName:item,
                        id:activeView?.jimuLayerViews[item]?.layer?.id,
                    };
                    newLayerArray.push(object);
                }
                return newLayerArray;
            },[])
            newLayersArray.reverse();
            this.setState({layers:newLayersArray});
            AdvancedSelectionTable.activeView = activeView;
            let view = activeView?.view;
            const sketchViewlModel = new SketchViewModel({layer:sketchLayer,view:view})
            this.sketch = sketchViewlModel;
            let zoomOut = {
                title:"Zoom Out",
                id:"zoom-out",
                class:"esri-icon-zoom-out-magnifying-glass"
            }
            //@ts-ignore
            view?.popup.actions.push(zoomOut);
            view?.popup.watch("visible",(visible)=>{
                if(visible && !this.state.popup){
                    view.popup.visible = false;
                }else{
                    this.setState({popup:false});
                }
            })
            AdvancedSelectionTable.jimuLayerViews = activeView?.jimuLayerViews;
            AdvancedSelectionTable.initialZoomValue = activeView.view.zoom;
            this.props.dispatch(appActions.widgetStatePropChange("value","initialMapZoom",activeView.view.zoom));
            view.when(()=>{
                this.setState({isMapLoaded:true});
            })
            reactiveUtils.watch(
                () => view.map.allLayers.map( layer => layer.visible),
                (boolean) => {
                    let checkedLayers = [];
                        //@ts-ignore
                    view.map.allLayers?.items.map((f)=>{
                        const selected = this.props.stateValue?.value?.checkedLayers;
                        if (selected?.length <= 0 || !selected)helper.activateLayerOnTheMap(f.id,f.visible);
                        // console.log(selected,this.props.stateValue,"check selected")
                        // if (f.type === "feature"){
                        //     if (selected?.length){
                        //         if (selected.includes(f.id)){
                        //             console.log("true it is included")
                        //         }
                        //     }else{
                        //         if (f.visible)checkedLayers.push(f.id);
                        //     } 
                        // }
                    
                    }) 
                    
            });
        }
    }

    controlCheckedLayers = (id:string)=>{
        const selected = this.props.stateValue?.value?.checkedLayers;
        let newSelected = [];
        if (selected?.length){
            const selectedIndex = selected?.indexOf(id);
            const copiedSelected = [...selected];
            if (selectedIndex === -1){
                copiedSelected.push(id);
                // helper.activateLayerOnTheMap(id,true) 
            }else{
                copiedSelected.splice(selectedIndex,1);
                // helper.activateLayerOnTheMap(id,false) ;
                this.props.dispatch(appActions.widgetStatePropChange("value","createTable",true));
                this.removeAttributes(id);
            }
            newSelected = copiedSelected;
        }else{
            newSelected.push(id);
        }
        console.log(newSelected,"check new selected")
        this.props.dispatch(appActions.widgetStatePropChange("value","checkedLayers",newSelected));
    }

    removeAttributes = (id:string)=>{
        const numberOfAttribute = this.props.stateValue?.value?.numberOfAttribute
        const currentLayerContents = this.props.stateValue?.value?.layerContents??[];
        const copiedLayerContents = [...currentLayerContents];
        const newNumberOfAttribute = {...numberOfAttribute};
        const newLayerContents = copiedLayerContents.reduce((newArray,item:{id:string,attributes:any[]})=>{
          if (item?.id !== id){
            newArray.push(item);
          }else{
            if (newNumberOfAttribute[id]){
              delete newNumberOfAttribute[id];
            }
          }
          return newArray;
        },[])
        this.setState({layerContents:newLayerContents});
        this.props.dispatch(appActions.widgetStatePropChange("value","numberOfAttribute",newNumberOfAttribute))
        helper.unhighlightLayer(id);
      }

    selectFeatureLayer = (geometry:any)=>{
        const checkedLayers = this.props.stateValue?.value?.checkedLayers??[];
        const activeView = AdvancedSelectionTable.activeView;
        if (activeView){
            activeView?.selectFeaturesByGraphic(geometry,"contains").then((results)=>{
                helper.highlightOnlyCheckedLayer(checkedLayers);
                const selectedLayersContents = helper.getSelectedContentsLayer(results,checkedLayers);
                const numberOfAttributes = helper.getNumberOfAttributes(selectedLayersContents);
                this.setState({layerContents:selectedLayersContents});
                const activeView = AdvancedSelectionTable.activeView;
                const geometry = Polygon.fromExtent(activeView.view.extent).toJSON();
                const layerOpen = {
                    geometry:geometry,
                    typeSelected:"contains",
                }
                if (Object.keys(numberOfAttributes).length > 0){
                    this.props.dispatch(appActions.widgetStatePropChange("value","createTable",true));
                    this.props.dispatch(appActions.widgetStatePropChange("value","numberOfAttribute",numberOfAttributes));
                    this.props.dispatch(appActions.widgetStatePropChange("value","layerOpen",layerOpen));
                    this.props.dispatch(appActions.widgetStatePropChange("value","getAllLayers",this.getAllCheckedLayers));
                    this.props.dispatch(appActions.widgetStatePropChange("value","getActiveView",this.getActiveView));
                    this.props.dispatch(appActions.widgetStatePropChange("value","getAllJimuLayerViews",this.getAllJimuLayerViews));
                }else{
                    this.props.dispatch(appActions.widgetStatePropChange("value","showAlert",true));
                }
            })
            .catch((err)=>{})
        }
    }

    startSketching = (currentGeometry="rectangle")=>{
        let mode = "hybrid";
        const activeView = AdvancedSelectionTable.activeView;
        let limitedGeometryArray = ["rectangle","circle"];
        if (limitedGeometryArray.includes(currentGeometry)){
            mode = "freehand";
        }
        if (this.sketch){
            this.sketch.create(currentGeometry,{mode:mode});
            if (activeView){
                activeView.view.map.add(sketchLayer);
                this.sketch.on("create", async(event) => {
                    if (event?.state === "complete"){
                        this.selectFeatureLayer(event?.graphic);
                        AdvancedSelectionTable.selectedGraphic = event?.graphic;
                        this.sketch?.update([event?.graphic],{
                            enableScaling:false,
                            preserveAspectRatio: true,
                            toggleToolOnClick:false,
                        })
                    }
                });
                this.sketch.on("update",(event)=>{
                    this.sketch?.delete();
                })
            }
        }
    }

    zoomOut(zoomValue?:number) {
        const activeView = AdvancedSelectionTable.activeView;
        const view = activeView?.view;
        const currentZoomValue = zoomValue??view?.zoom - 2;
        view?.goTo({center: view?.center,zoom: currentZoomValue});
      }

    openPopup = (popupcontents:{title:string,contents:any,location?:number[]})=>{
        const activeView = AdvancedSelectionTable.activeView;
        const location = popupcontents.location;
        let currentLocation = activeView?.view?.center;
        if (location){
            currentLocation = {latitude:location[0],longitude:location[1]}
        }
        if (activeView?.view?.popup){
            const popup = activeView.view.popup;
            popup.visible = true;
            popup.title = popupcontents.title;
            popup.content = popupcontents.contents;
            popup.location = currentLocation;
            try{
                popup.open();
            }
            catch(err){

            }
            popup?.on("trigger-action",(event)=>{
                if(event.action.id === "zoom-out"){
                    this.zoomOut();
                }
            })
        }
    }

    onClickZoomIn = ()=>{
        const activeView = AdvancedSelectionTable.activeView;
        const view = activeView?.view;
        const geometry = AdvancedSelectionTable.selectedGraphic?.geometry;
        const extent = geometry?.extent;
        if (view && extent){
            view.goTo(extent);
        }
    }

    addCreatedLayer = ()=>{
        const csvFile = this.state.csvFile;
        const activeView = AdvancedSelectionTable.activeView;
        const view = activeView?.view;
        if (csvFile && view){
            const layerTitle = this.state.createdLayerTitle
            const blob = new Blob([csvFile],{type:"plain/text"});
            let url = URL.createObjectURL(blob);
            const layer = new CSVLayer({url: url,title:layerTitle,id:layerTitle})
            try{
                view?.map.add(layer);
            }catch(err){
                
            }
            const items = view?.map?.layers?.items;
            let status = helper.checkIfLayerWasAdded(layerTitle,items);
            if (status){
                this.appendAddedLayer(layerTitle);
            }
        }
        this.setState({opencreateLayer:false});
    }

    appendAddedLayer = (layerTitle:string)=>{
        let object = {
            layerName:layerTitle,
            layerId:layerTitle,
            keyName:layerTitle,
            id:layerTitle
        };
        const layers = this.state.layers
        const currentLayers = [...layers,object];
        this.setState({layers:currentLayers,csvFile:null,createdLayerTitle:null})
    }

    restoreMap = ()=>{
        const activeView = AdvancedSelectionTable.activeView;
        if (activeView){
            activeView.clearSelectedFeatures();
            const zoomVal = AdvancedSelectionTable.initialZoomValue
            this.zoomOut(zoomVal);
            this.setState({layerContents:[],selectedAttributes:[]});
            this.props.dispatch(appActions.widgetStatePropChange("value","numberOfAttribute",{}));
            this.props.dispatch(appActions.widgetStatePropChange("value","checkedLayers",[]));
            if (activeView?.view?.popup){
                activeView.view.popup.visible = false;
            }
        }
        if (this.sketch){
            this.sketch?.cancel();
        }
        // helper.deactivateAllLayer();
        this.props.dispatch(appActions.widgetStatePropChange("value","createTable",true));
    }

    onClickRefresh = ()=>{
        this.restoreMap();
    }
 
    render(): React.ReactNode {
        const open = Boolean(this.state.anchorEl);
        const showAlert = this.props.stateValue?.value?.showAlert??false;
        const alertText = this.nls("noSelectedItem")
        return(
            <>
                {
                    this.props?.useMapWidgetIds?.length > 0 &&
                    <JimuMapViewComponent 
                        useMapWidgetId={this.props.useMapWidgetIds[0]}
                        onActiveViewChange = {this.getMapLayers}
                    />
                }
                <AdvancedSelectionTableContext.Provider value = {{...this.state,"parent":this,...this.props.stateValue?.value}}>
                    <AlertComponent open = {showAlert} text = {alertText} onClose = {this.onCloseAlert}/>
                    <LayersTable />
                    {this.state.openStatistics && <StatisticsModal />}
                    {open && <Options />}
                    <CreateLayer />
                </AdvancedSelectionTableContext.Provider>
            </>
        )
    }
}