

import { JimuMapView } from "jimu-arcgis";
import { appActions } from "jimu-core";
import Widget from "../runtime/widget";
import { stateValueType } from "../types/type";

type createTableType = {
    activeView:JimuMapView,
    allLayers:any,
    jimuLayerView:any,
    checkedLayers:string[]
}

class Helper {

    checkingAllRequiredProps = (props:stateValueType):boolean=>{
        let callTable = false;
        if (
            props.hasOwnProperty("stateValue") &&
            props.stateValue?.value?.layerOpen &&
            props.stateValue?.value?.getAllLayers &&
            props.stateValue?.value?.getActiveView &&
            props.stateValue?.value?.checkedLayers &&
            props.stateValue?.value?.numberOfAttribute&&
            props.stateValue?.value?.createTable
        ){
            callTable = true;
        }
        return callTable;
    }


    checkTableRequiredProps = (val:createTableType):boolean=>{
        let createTable = false;
        const {activeView,allLayers,jimuLayerView,checkedLayers} = val;
        if (activeView && allLayers?.length > 0 && Object.keys(jimuLayerView).length > 0 && checkedLayers.length > 0)createTable = true; 
        return createTable;
    }

    startCreatingTable = (props:stateValueType,self:Widget)=>{

        const activeView = props.stateValue?.value?.getActiveView();
        const allLayers = props.stateValue?.value?.getAllLayers();
        const jimuLayerView = activeView?.jimuLayerViews
        const checkedLayers = props.stateValue?.value?.checkedLayers??[];
        const numberOfAttribute = props.stateValue?.value?.numberOfAttribute??{};
        const val = {activeView,allLayers,jimuLayerView,checkedLayers};
        const createTable = this.checkTableRequiredProps(val);

        if (createTable)self.createListTable();
        if (checkedLayers.length <= 0)self.setState({tabs:[]});
        this.openSideBar(checkedLayers,numberOfAttribute);
        self.props.dispatch(appActions.widgetStatePropChange("value","createTable",false));

        // if (
        //     activeView && 
        //     allLayers?.length > 0 && 
        //     Object.keys(jimuLayerView).length > 0 && 
        //     checkedLayers.length > 0 
        // ){
        //    createTable = true; 
        // }
        // return createTable;
    }

    openSideBar(checkedLayers:string[],numberOfAttributes:{[id:string]:number}){
        const currentCheckedLayer = checkedLayers ??[];
        const sidebar = document.querySelector(".sidebar-controller");
        if (currentCheckedLayer.length > 0 && Object.keys(numberOfAttributes).length > 0){
             //@ts-ignore
            if(sidebar?.getAttribute("aria-expanded") === "false"){
                //@ts-ignore
                if(sidebar) sidebar.click();
            }
        }
       
        if (currentCheckedLayer.length <= 0){
            if (sidebar){
                if (sidebar.getAttribute("aria-expanded") === "true"){
                    //@ts-ignore
                    sidebar.click();
                }
            }
        }
    }

    hideLayer = (jimuLayerViews:any,id:string)=>{
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                if (id === jimuLayerViews[key]?.layer?.id){
                    if (jimuLayerViews[key].hasOwnProperty("highLightHandle")){
                        jimuLayerViews[key]?.highLightHandle?.remove()
                    }
                    if(jimuLayerViews[key].layer?.hasOwnProperty("visible")){
                        jimuLayerViews[key].layer.visible = false;
                    }
                    if (jimuLayerViews[key].hasOwnProperty("view")){
                        if (jimuLayerViews[key].view?.hasOwnProperty("visible")){
                            jimuLayerViews[key].view.visible = false;
                        }
                    }
                }
            })
        } 
    }

    getNewNumberOfAttributes = (currentNumberOfAttribute:{[id:string]:number},id:string)=>{
        let copiedNumberOfAttribute = {...currentNumberOfAttribute};
        if (Object.keys(copiedNumberOfAttribute).length > 0 && copiedNumberOfAttribute[id]){
            delete copiedNumberOfAttribute[id];
        }
        return copiedNumberOfAttribute;
    }

    getNewCheckedLayer = (checkedLayers:string[],id:string)=>{
        let newCheckedLayer = [...checkedLayers];
        let index = -1;
        if (newCheckedLayer?.length > 0){
            index = newCheckedLayer.indexOf(id);
            if (index != -1){
                newCheckedLayer.splice(index,1);
            }
        }
        return newCheckedLayer;
    }

    unhighlightAllLayer = (jimuLayerViews)=>{
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                jimuLayerViews[key]?.highLightHandle?.remove()
            })
        } 
    }

    deactivateAllLayer = (jimuLayerViews)=>{
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                    if(jimuLayerViews[key].layer?.hasOwnProperty("visible")){
                        jimuLayerViews[key].layer.visible = false;
                        
                    }
                    if (jimuLayerViews[key].hasOwnProperty("view")){
                        if (jimuLayerViews[key].view?.hasOwnProperty("visible")){
                            jimuLayerViews[key].view.visible = false;
                            
                        }
                    }
                
            })
        } 
    }
}

export default new Helper();