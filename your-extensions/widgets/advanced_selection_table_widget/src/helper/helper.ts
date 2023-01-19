import AdvancedSelectionTable from "../runtime/widget"

type layerContentsObjectType = {
    id:string,
    attributes:any[]
}

type selectedLayerType = {
    id:string,
    attributes:any[]
}

class Helper {

    getLayerAttributes = (selectedLayerId:string,layerContents:layerContentsObjectType[]):any[]=>{
        let attributes = [];
        if (layerContents?.length > 0){
            const attributesObject = layerContents.find((layerContent:layerContentsObjectType)=>{
                if (layerContent?.id === selectedLayerId){
                    return layerContent?.attributes;
                }
            })
            attributes = attributesObject?.attributes;
        }
    
        return attributes;
    }

    getAttributeKeyArray = (attributes:any):string[]=>{
        let returnedKeys = [];
        if (attributes && Object.keys(attributes).length > 0){
            returnedKeys = Object.keys(attributes);
        }
        return returnedKeys;
    }

    getSelectedContentsLayer =(results:any,checkedLayers:string[]):selectedLayerType[]=>{
        let selectedLayersArray = [];
        if (results?.length > 0){
            selectedLayersArray = results.reduce((newArray,items:any[])=>{
                if (items?.length > 0){
                    let selectedLayerContents = {};
                    let currentLayerId = items[0]?.layer?.id;
                    if (checkedLayers.indexOf(currentLayerId) !== -1){
                        selectedLayerContents["id"] = items[0]?.layer?.id;
                        selectedLayerContents["attributes"] = this.getAttributes(items);
                        newArray.push(selectedLayerContents)
                    }
                }
                return newArray;
            },[])
        }
        return selectedLayersArray;
    }

    getAttributes = (items:any[]):any[]=>{
        const attributesArray = items.reduce((newArray,item)=>{
            if (item?.attributes){
                if (item.geometry){
                    const geometry = item.geometry;
                    const latitude = geometry?.latitude??geometry?.extent?.center?.latitude;
                    const longitude = geometry?.longitude??geometry?.extent?.center?.longitude;
                    if (longitude && latitude){
                        newArray.push({...item.attributes,location:[latitude,longitude]});
                    }else{
                        newArray.push(item.attributes);
                    }       
                }else{
                    newArray.push(item.attributes);
                }
               
            }
            return newArray;
        },[])
        return attributesArray;
    }

    getNumberOfAttributes = (layersContents:{id:string,attributes:any[]}[])=>{
        let layerContentsObject = {};
        for (let i=0;i < layersContents.length;i++){
             layerContentsObject = {...layerContentsObject,[layersContents[i]?.id]:layersContents[i]?.attributes?.length??0}
        }
        return layerContentsObject;
    }

    highlightOnlyCheckedLayer = (checkedLayersArr:string[])=>{
        const jimuLayerViews = AdvancedSelectionTable.jimuLayerViews??[];
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                if (!checkedLayersArr.includes(jimuLayerViews[key]?.layer?.id)){
                    jimuLayerViews[key]?.highLightHandle?.remove()
                }
            })
        }
    }

    unhighlightLayer = (id:string)=>{
        const jimuLayerViews = AdvancedSelectionTable.jimuLayerViews??[];
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                if (id === jimuLayerViews[key]?.layer?.id){
                    jimuLayerViews[key]?.highLightHandle?.remove()
                }
            })
        } 
    }

    getClickedLayerStatus = (results:any[],selectedLayer:selectedLayerType[]):boolean=>{
        let status = false;
        let index = -1;
        if (results?.length > 0 && selectedLayer?.length > 0){
            for (let i = 0;i < results.length;i++){
                let layerId = results[i]?.graphic?.layer?.id;
                index = selectedLayer.findIndex((item)=>item.id === layerId);
                if (index != -1){
                    return true;
                }
            }
        }
        return status;
    }

    checkIfLayerWasAdded = (layerId:string,mapLayersItems:any[])=>{
        let index = -1;
        let status = false;
        if (mapLayersItems?.length > 0){
            index = mapLayersItems.findIndex((item)=>item?.id === layerId);
            if (index !== -1){
                status = true;
            }
        }
        return status;
    }


    openTableAttribute = ()=>{
        const ariaExpandedElement = document.querySelector(".sidebar-controller");
        if (ariaExpandedElement.ariaExpanded === "false"){
            //@ts-ignore
            ariaExpandedElement.click();
        }
    }

    closeAttributeTable = ()=>{
        const ariaExpandedElement = document.querySelector(".sidebar-controller");
        if (ariaExpandedElement.ariaExpanded === "true"){
            //@ts-ignore
            ariaExpandedElement.click();
        }
    }

    getNumberOfItemsInField = (field:string,selectedAttributes:any[])=>{
        let numberOfItems = 0;
        if (selectedAttributes?.length > 0){
            let valueArr = [];
            for (let i=0;i< selectedAttributes.length;i++){
                valueArr.push(selectedAttributes[i][field]);
            }
            numberOfItems = valueArr.length;
        }
        return numberOfItems;
    }

    getSumOfValues = (field:string,selectedAttributes:any[])=>{
        let numberToAdd = 0;
        if (selectedAttributes?.length > 0){
            for (let i =0;i < selectedAttributes.length;i++){
                const val = selectedAttributes[i][field];
                if (typeof val === "number" && !isNaN(val)){
                    numberToAdd += val;
                }
            }
        }
        return numberToAdd;
    }

    activateLayerOnTheMap = (id:string,selected:boolean)=>{
        const jimuLayerViews = AdvancedSelectionTable.jimuLayerViews??[];
        const keys = Object.keys(jimuLayerViews);
        if (keys.length > 0){
            keys.forEach((key)=>{
                if (id === jimuLayerViews[key]?.layer?.id){
                    if(jimuLayerViews[key].layer?.hasOwnProperty("visible")){
                        if(selected){
                            jimuLayerViews[key].layer.visible = true;
                        }else{
                            jimuLayerViews[key].layer.visible = false;
                        }
                    }
                    if (jimuLayerViews[key].hasOwnProperty("view")){
                        if (jimuLayerViews[key].view?.hasOwnProperty("visible")){
                            if (selected){
                                jimuLayerViews[key].view.visible = true;
                            }else{
                                jimuLayerViews[key].view.visible = false;
                            }
                        }
                    }
                }
            })
        } 
    }

    deactivateAllLayer = ()=>{
        const jimuLayerViews = AdvancedSelectionTable.jimuLayerViews??[];
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