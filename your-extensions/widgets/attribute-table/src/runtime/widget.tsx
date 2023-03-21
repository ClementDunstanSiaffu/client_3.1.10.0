/** @jsx jsx */
import { React, AllWidgetProps, jsx ,IMState, appActions} from 'jimu-core'
import '../style.css';
import {Tabs, Tab} from "jimu-ui";
import helper from '../helper/helper';
import ButtonGroupComponent from '../components/button_groups';
import reactiveUtils from 'esri/core/reactiveUtils';
import Polygon from 'esri/geometry/Polygon';
import Query from 'esri/rest/support/Query';
import FeatureTable from 'esri/widgets/FeatureTable';
import defaultMessages from './translations/default';
import geometryEngine from "esri/geometry/geometryEngine";
import { stateValueType,spatialRelationshipType} from '../types/type';
import NoItemSelected from '../components/no_item_selected_modal';

export default class Widget extends React.PureComponent<AllWidgetProps<any>&stateValueType, any> {

    static mapExtraStateProps(state:IMState){return {stateValue:state.widgetsState}};
    static initialMapZoom = 0;
    static currentViewExtent = null;
    arrayTable = [];
    uniqueValuesInfosSave = [];
    saveOldRenderer = [];
    filterTimeReceiveData = new Date().getTime();
    defaultValue = "";
    saveFeatures = [];
   
    constructor (props) {
        super(props)
        this.state = {
            geometryFilter: null,
            listServices:[],
            tabs:[],
            selectedColor:" ",
            viewExtent:null,
            features:null,
            showColorButtonGroup:true,
            tabChanged:false,
            highlightState:{},
            openNoItemModal:false
        }

        this.tabsClose = this.tabsClose.bind(this);
        this.optionFilterExtentions = this.optionFilterExtentions.bind(this);
        this.optionCloseAllTabs = this.optionCloseAllTabs.bind(this);
        this.optionOpenFilter = this.optionOpenFilter.bind(this);
        this.createListTable = this.createListTable.bind(this);
        this.optionColorFound = this.optionColorFound.bind(this);
        this.createFeatureTable = this.createFeatureTable.bind(this);
        this.createTable = this.createTable.bind(this);
        this.getActiveTable = this.getActiveTable.bind(this);
        this.optionColorCleanSelected = this.optionColorCleanSelected.bind(this);
        this.closeNoItemSelectedModal = this.closeNoItemSelectedModal.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<AllWidgetProps<any>>, prevState: Readonly<any>, snapshot?: any) {
        const callTable = helper.checkingAllRequiredProps(this.props)
        if(callTable)helper.startCreatingTable(this.props,this)
    }

    nls = (id: string) => {
        return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: defaultMessages[id] }) : id
    }

    onClickTab = ()=>this.setState({tabChanged:!this.state.tabChanged});

    createListTable(){
        const allLayers = this.props.stateValue?.value?.getAllLayers()??[];
        const checkedLayers = this.props.stateValue?.value?.checkedLayers??[];
        const numberOfAttribute = this.props.stateValue?.value?.numberOfAttribute??{};
        const layerOpen = this.props.stateValue?.value?.layerOpen
        this.defaultValue = "";
        const tabs = [];
        this.arrayTable = [];
        if (allLayers?.length > 0){
            for (let i=0;i < allLayers?.length;i++){
                const f = allLayers[i];
                if (f.type === "feature" && checkedLayers.includes(f.id) && numberOfAttribute[f.id] > 0){
                    if (f?.sublayers?.length > 0){
                        for(let j=0;i<f.sublayers.length;i++){
                            const fs = f.sublayers[j];
                            const newId = fs.id.split(" ").join("-");
                            tabs.push(
                                <Tab closeable id={"tab-"+newId} title={f.title + " - "+ fs.title}>
                                    <div id={"container-"+newId} className="tabClassControl"></div>
                                </Tab>
                            );
                            this.createTable(fs,layerOpen).then((featureTable)=>{
                                if(!featureTable){
                                }else{
                                }
                            });
                        }
                    }else{
                        const newId = f.id.split(" ").join("-");
                        tabs.push(
                            <Tab closeable id={"tab-"+newId} title={f.title + " - "+ f.title}>
                                <div id={"container-"+newId} className="tabClassControl"></div>
                            </Tab>
                        );
                        this.createTable(f,layerOpen).then((featureTable)=>{
                            if(!featureTable){
                            }else{
                            }
                        });
                    }
                }
            }
        }
        this.setState({geometryFilter: layerOpen.geometry,listServices:checkedLayers,tabs:tabs});
    }

    replaceCurrentTableWithNewTable = (newFeatureTable:FeatureTable)=>{
        const activeTable = this.getActiveTable();
        if (activeTable.layer.id === newFeatureTable.layer.id){
            const index = this.arrayTable.findIndex((item)=>item.layer.id === newFeatureTable.layer.id );
            if (index !== -1){
                const copiedArrayTable = [...this.arrayTable];
                copiedArrayTable.splice(index,1,newFeatureTable);
                this.arrayTable = copiedArrayTable;
            }
        }
    }
    
    createFeatureTable(layer,highlightIds:any,layerView:any,geometry?:any){
        const activeView = this.props.stateValue?.value?.getActiveView();
        const initialMapZoom = this.props.stateValue?.value?.initialMapZoom;
        const div = document.createElement("div");
        let checkExist = setInterval(()=>{
            const id = layer.id.split(" ").join("-");
            const container = document.getElementById("container-"+id);
            if (container) {
                container.innerHTML = '';
                container.appendChild(div);
                clearInterval(checkExist);
            }
        }, 100);
        let view = null;
        if (activeView)view = activeView?.view;
        const id = layer.id
        const featureTable = new FeatureTable({
            id:id,
            label:layer.title,
            view:view,
            multiSortEnabled: true,
            layer: layer,
            container: div,
            highlightEnabled:true,
            highlightIds:highlightIds,
        });
        featureTable.visibleElements = {
            header: true,
            menu: true,
            menuItems: {
                clearSelection: true,
                refreshData: true,
                toggleColumns: true,
                zoomToSelection: true,
            },
            selectionColumn: true,
            columnMenus: true,
        } 
        const domTimeOut = setTimeout(()=>{
            const checkboxElement = featureTable.domNode.getElementsByTagName("vaadin-grid-cell-content")
            if (checkboxElement.length){
                for (let i = 0;i < checkboxElement.length;i++){
                    const el = checkboxElement.item(i);
                    if (el?.slot === "vaadin-grid-cell-content-0"){
                        const inputEl = document.createElement("input");
                        inputEl.type = "checkbox";
                        inputEl.className = "select-all-checkbox";
                        inputEl.id = id
                        if (featureTable.highlightIds.items.length)inputEl.checked = true;
                        inputEl.onchange = (e)=>{
                            if (e.target.checked){
                                const currentHighlight = this.state.highlightState[id];
                                featureTable.highlightIds.removeAll();
                                currentHighlight.forEach(el => {featureTable.highlightIds.push(el)});
                            }else{
                                if (featureTable.highlightIds)featureTable.highlightIds.removeAll()
                            }
                        }
                        el.appendChild(inputEl); 
                    }
                }          
            }
            clearTimeout(domTimeOut);
        },1000)

        featureTable.on("selection-change", (event) => {
            if(event.added.length){
                try{
                    const query = layer.createQuery();
                    if (event.added.length > 0){
                        query.where = layer.objectIdField + " = " + event.added[0]?.objectId;
                        query.returnGeometry = true;
                        layer.queryFeatures(query).then((results)=>{
                            const features = results.features;
                            if(features.length)activeView.view.goTo(features[0].geometry)
                        });
                        const currentHightlight = this.state.highlightState[id];
                        if (currentHightlight?.length === featureTable.highlightIds.items.length){
                            const checkAllEl = document.getElementById(id);
                            if (checkAllEl)checkAllEl.checked = true;
                        }
                        this.replaceCurrentTableWithNewTable(featureTable);
                    }
                }catch (e){
                }
            }
            if (event.removed.length > 0 && initialMapZoom){
                const view = activeView.view;
                view.goTo({center: view.center,zoom:initialMapZoom });
            }
            if (event.removed.length){
                helper.removeObjectId(layerView,event.removed[0].objectId);
                const checkAllEl = document.getElementById(id);
                if (checkAllEl)checkAllEl.checked = false;
                this.replaceCurrentTableWithNewTable(featureTable);
            }
        });

        reactiveUtils.when(()=>view.stationary,()=>{
            let filterByExtention = true;
            if (
                this.props.stateValue?.value.hasOwnProperty("filterValue") && 
                this.props.stateValue?.value.filterValue === 2
            ){
                filterByExtention = false;
            }
            if (view.extent && filterByExtention)this.setState({viewExtent:view.extent});
        },{initial:true})

        this.arrayTable.push(featureTable);
        let colorButtonGroupStatus = true;
        // if (!highlightIds.length)colorButtonGroupStatus = false;--- this was used to show color only when there is highlight
        if (this.state.showColorButtonGroup !== colorButtonGroupStatus){
            this.setState({showColorButtonGroup:colorButtonGroupStatus});
        }
        if (featureTable.highlightIds.items.length){
            const currentHightlight = [...featureTable.highlightIds.items];
            const newHighlightState = {...this.state.highlightState,[id]:currentHightlight};
            this.setState({highlightState:newHighlightState});
        }else{
            const query = new Query();
            if (geometry)query.geometry = geometry;
            featureTable.layer.queryObjectIds(query).then((ids)=> {
                const newHighlightState = {...this.state.highlightState,[id]:ids};
                this.setState({highlightState:newHighlightState})
            });
        }
        return featureTable;
    }

    async createTable(
        layer,
        pass:{
            geometry:any,
            typeSelected:spatialRelationshipType,
            where?:string,
            graphicsFound?:any,
            valueBuffer?:any
        }
    ) {
        const activeView = this.props.stateValue.value.getActiveView();
        const checkedLayers = this.props.stateValue?.value?.checkedLayers??[];
        const filterValue = this.props.stateValue?.value?.filterValue??1;
        layer.visible = true;
        let featureTable = null;
        let query = new Query();
        const highlightIds = [];
        const arrayGeometry = [];
        let geometry = null;

        if(pass.graphicsFound && typeof pass.valueBuffer === "number"){
            const graphicsFound =  pass.graphicsFound();
            graphicsFound?.graphics.forEach(g=>{
                // @ts-ignore
                g?.geometry = geometryEngine.buffer(g.geometry, pass?.valueBuffer, "meters");
                arrayGeometry.push(g.geometry);
            });
            if(arrayGeometry.length) { // @ts-ignore
                geometry = geometryEngine.union(arrayGeometry);
            }
            if (geometry)query.geometry = new Polygon(geometry);
            query.spatialRelationship = pass.typeSelected;
            query.returnGeometry = true;
        }
        let layerView = layer;
        try{
            const currentLayerView = await activeView.view.whenLayerView(layer);
            if (currentLayerView?._highlightIds){
                for (const key of currentLayerView._highlightIds.keys()){
                    highlightIds.push(key);
                }  
            }
            if (currentLayerView?.queryFeatures){
                layerView = currentLayerView;
                if (query.geometry){
                    currentLayerView.filter = {geometry: query.geometry,spatialRelationship: pass.typeSelected};
                }
                if(pass.where){
                    query.where = pass.where;
                    currentLayerView.filter = {where: query.where,}
                }
                if(!pass.geometry && !pass.where){
                    query.where = "1=1";
                    currentLayerView.filter = {where: query.where}
                }
            }
            query.outFields = ["*"];
        }catch(err){}

        const results = await layerView.queryFeatures(query);
        const features = results?.features??[];
        if(layer && features.length ){
            this.setState({features:features})
            featureTable = this.createFeatureTable(layer,highlightIds,layerView,geometry);
            if (activeView.view.stationary && this.state.viewExtent && filterValue === 1){
                setTimeout(()=>{featureTable.filterGeometry = this.state.viewExtent;},10)
            }
            if (geometry && filterValue === 2)featureTable.filterGeometry = geometry;
            featureTable.filterBySelection();
            return featureTable;
        }else{
            if (features.length <= 0 && !checkedLayers.length){
                helper.openSideBar([],{});
                this.props.dispatch(appActions.widgetStatePropChange("value","numberOfAttribute",{}));
                this.props.dispatch(appActions.widgetStatePropChange("value","checkedLayers",[]));
                const jimuLayerViews = activeView?.jimuLayerViews;
                helper.unhighlightAllLayer(jimuLayerViews);
            }else{
                this.props.dispatch(appActions.widgetStatePropChange("value","showAlert",true));
            } 
        }
        return featureTable;
    }

    tabsClose(e,noControlTable = false){
        const activeView = this.props.stateValue?.value?.getActiveView();
        this.optionColorCleanSelected();
        const tabs = this.state.tabs;
        const arrayTable = this.arrayTable;
        let foundIndex = -1;
        for(let i=0;i<tabs.length;i++){
            if(tabs[i].props.id === e){
                foundIndex = i;
                break;
            }
        }
        if (foundIndex !== -1){
            let tableIndex = -1;
            const copiedTabs = [...this.state.tabs];
            copiedTabs.splice(foundIndex,1);
            let table = null;
            if (arrayTable.length){
                tableIndex = arrayTable.findIndex((currentTable)=>{
                    const id = currentTable.id.split(" ").join("-");
                    if ("tab-"+id === e){
                        return currentTable;
                    }
                  
                });
                if (tableIndex !== -1){
                    table = arrayTable[tableIndex];
                }
            }
            const jimuLayerViews = activeView?.jimuLayerViews 
            const numberOfAttribute = this.props.stateValue?.value?.numberOfAttribute??{};
            const checkedLayers = this.props.stateValue?.value?.checkedLayers??[];
            if (table && table.layer){
                const id = table.layer.id;
                helper.hideLayer(jimuLayerViews,id);
                const newNumberOfAttribute = helper.getNewNumberOfAttributes(numberOfAttribute,id);
                const newCheckedLayers = helper.getNewCheckedLayer(checkedLayers,id);
                this.props.dispatch(appActions.widgetStatePropChange("value","numberOfAttribute",newNumberOfAttribute));
                this.props.dispatch(appActions.widgetStatePropChange("value","checkedLayers",newCheckedLayers));
                if (newCheckedLayers.length <= 0){
                    helper.openSideBar(newCheckedLayers,newNumberOfAttribute);
                }
                if(table.highlightIds)table.highlightIds.removeAll();
            }
            if (tableIndex !== -1){
                arrayTable.splice(tableIndex,1);
            }
    
            this.setState({tabsLength:tabs.length,tabs:copiedTabs});
        }
    }

    getActiveTable(){
        const tabs = this.state.tabs;
        const arrayTable = this.arrayTable;
        for(let i=0;i<tabs.length;i++){
            const el = document.querySelector("#"+tabs[i].props.children.props.id);
             //@ts-ignore
             if(el?.checkVisibility()){
                return arrayTable.find((item)=>{
                    if ("container"+"-"+item.layer.id.split(" ").join("-") === tabs[i].props.children.props.id){
                        return item;
                    }
                })
            }
        }
        return null;
    }

    optionFilterExtentions(){this.props.dispatch(appActions.widgetStatePropChange("value","createTable",true));}

    optionOpenFilter(e){}

    optionCloseAllTabs(){
        const activeView = this.props.stateValue?.value?.getActiveView();
        const tabs = this.state.tabs;
        const copiedArrayTable = [...this.arrayTable];
        this.arrayTable = [];
        this.setState({tabsLength: tabs.length,tabs:[]});
        this.props.dispatch(appActions.widgetStatePropChange("value","numberOfAttribute",{}));
        this.props.dispatch(appActions.widgetStatePropChange("value","checkedLayers",[]));
        const jimuLayerViews = activeView?.jimuLayerViews;
        helper.unhighlightAllLayer(jimuLayerViews);
        helper.deactivateAllLayer(jimuLayerViews);
        helper.removeAllTableHighlight(copiedArrayTable)
        //TODO MIGLIORARE
        //chiudi sidebar
        const sidebar = document.querySelector(".sidebar-controller");
        //@ts-ignore
        if(sidebar) sidebar.click();
    }

    createSymbol(type, color){
        const typeSymbol = type === 'point'? "simple-marker":type === 'polyline'? "simple-line":"simple-fill";
        return {
            type: typeSymbol,
            style: "solid",
            color,
            outline:{width:30}
        };
    }

    optionColorFound(event){
        const activeView = this.props.stateValue?.value?.getActiveView();
        const activeTable = this.getActiveTable();
        const uniqueValuesInfosSave = this.uniqueValuesInfosSave;
        const saveOldRenderer = this.saveOldRenderer;
        const jimuLayerViews = activeView?.jimuLayerViews;
        if(activeTable && jimuLayerViews){
            let arrayItemSelected = activeTable.highlightIds;
            if(arrayItemSelected){
                const keys = Object.keys(jimuLayerViews)
                if (keys.length){
                    keys.forEach((key)=>{
                        if (jimuLayerViews[key].layer.id === activeTable.layer.id){
                            if (jimuLayerViews[key].layer)jimuLayerViews[key].layer.opacity = 1;
                            if (jimuLayerViews[key].view)jimuLayerViews[key].view.fullOpacity = 1;
                        }
                    })
                }

                if(!uniqueValuesInfosSave[activeTable.layer.id]) uniqueValuesInfosSave[activeTable.layer.id] = [];

                //salvo vecchio renderer
                if(!saveOldRenderer[activeTable.layer.id]){
                    this.saveOldRenderer[activeTable.layer.id] = activeTable.layer.renderer;
                }
                const items = arrayItemSelected?.items??[];
                if (items.length){
                    for (let i =0;i <items.length;i++){
                        let objectid = items[i];
                        let color = event;
                        if (!color){
                            color = [
                                Math.floor(Math.random() * 256),
                                Math.floor(Math.random() * 256),
                                Math.floor(Math.random() * 256)
                            ]
                        }
                        const uniqueColor = {
                            label: objectid,
                            value: objectid,
                            symbol: this.createSymbol(activeTable.layer.geometryType,color)
                        };
                        let indexFound = null;
                        if (uniqueValuesInfosSave[activeTable.layer.id]?.length){
                            for(let j=0;j< uniqueValuesInfosSave[activeTable.layer.id].length;j++){
                                let uniqueFound = uniqueValuesInfosSave[activeTable.layer.id][j].value;
                                if(uniqueFound === objectid){
                                    indexFound = j;
                                    break;
                                }
                            }
                        }
                        if(indexFound){
                            uniqueValuesInfosSave[activeTable.layer.id][indexFound] = uniqueColor;
                        }else{
                            uniqueValuesInfosSave[activeTable.layer.id].push(uniqueColor);
                        }
                        activeTable.layer.renderer = {
                            type: "unique-value",
                            field: activeTable.layer.objectIdField,
                            uniqueValueInfos:uniqueValuesInfosSave[activeTable.layer.id]
                        };
                    }
                }else{
                    this.setState({openNoItemModal:true});
                }
            }
        }
        if (event)this.setState({selectedColor:event})
    }

    optionColorCleanSelected(cleanHighLightIds = true){
        const activeTable = this.getActiveTable();
        const saveOldRenderer = this.saveOldRenderer;
        if(activeTable){
            if(saveOldRenderer[activeTable.layer.id]){
                delete this.uniqueValuesInfosSave[activeTable.layer.id];
                activeTable.layer.renderer = saveOldRenderer[activeTable.layer.id];
                delete saveOldRenderer[activeTable.layer.id];
                if(cleanHighLightIds && activeTable.highlightIds) activeTable.highlightIds.removeAll();
            }
        }
    }

    closeNoItemSelectedModal = ()=>this.setState({openNoItemModal:false});

    render () {
        const filterValue = this.props.stateValue?.value?.filterValue??1;
        return (
            <React.Fragment>
                <NoItemSelected 
                    isOpen = {this.state.openNoItemModal} 
                    onclose = {this.closeNoItemSelectedModal}
                    parent = {this}
                />
                <div className="widget-attribute-table jimu-widget">
                    <ButtonGroupComponent 
                        parent = {this} 
                        selectedColor = {this.state.selectedColor}
                        filterValue = {filterValue}
                        showColorButtonGroup = {this.state.showColorButtonGroup}
                    />
                    {this.state.tabs.length === 0 ?
                        <div className="text-center container-fluid">
                            <div className="row">
                                <div className="col-md-12 mt-2 font-weight-bold">
                                    {this.nls("noTableOpened")}
                                </div>
                            </div>
                        </div>
                        :
                        <Tabs scrollable defaultValue={this.defaultValue} type="tabs" onClose={this.tabsClose}>
                            {this.state.tabs}
                        </Tabs>
                    }
                </div>
            </React.Fragment>
        )
    }
}
