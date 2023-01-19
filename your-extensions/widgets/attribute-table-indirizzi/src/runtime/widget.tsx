/** @jsx jsx */
import { React, AllWidgetProps, jsx,IMState} from 'jimu-core'

import {JimuMapView, JimuMapViewComponent} from "jimu-arcgis";
import FeatureTable from "esri/widgets/FeatureTable";
import '../style.css';
import {Tabs, Tab, Dropdown, DropdownButton, DropdownMenu, DropdownItem, Button, ButtonGroup} from "jimu-ui";
import {WidgetFilterOutlined} from "jimu-icons/outlined/brand/widget-filter";
import {CloseOutlined} from 'jimu-icons/outlined/editor/close'
import {ColorsOutlined} from 'jimu-icons/outlined/application/colors'
import {ExportOutlined} from 'jimu-icons/outlined/editor/export'
import { ClearSelectionOutlined } from 'jimu-icons/outlined/gis/clear-selection'
import { ClearOutlined } from 'jimu-icons/outlined/editor/clear'
import { BrushOutlined } from 'jimu-icons/outlined/editor/brush'
import { ColorPicker } from 'jimu-ui/basic/color-picker'

import Query from "esri/rest/support/Query";
import esriRequest from "esri/request";
import Polygon from "esri/geometry/Polygon";
import Graphic from "esri/Graphic";
import FeatureLayer from "esri/layers/FeatureLayer";

class Download{
    static downloadFile(content,filename){
        const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    static CSV(object,filename = "download.csv") {
        const array = [Object.keys(object[0])].concat(object)
        Download.downloadFile(array.map(it => {
            return Object.values(it).toString()
        }).join('\n'),filename);
    }
}

export default class Widget extends React.PureComponent<AllWidgetProps<any>&any, any> {


    static mapExtraStateProps(state:IMState){return {stateValue:state.widgetsState}};


    filterTimeReceiveData = new Date().getTime();
    defaultValue = "";
    tabs = [];
    saveFeatures = [];
    arrayTable = [];

    uniqueValuesInfosSave = [];
    saveOldRenderer = [];

    constructor (props) {
        super(props)

        this.state = {
            geometryFilter: null,
            listServices:[]
        }

        this.tabsClose = this.tabsClose.bind(this);

        this.optionClickDownload = this.optionClickDownload.bind(this);
        this.optionFilterExtentions = this.optionFilterExtentions.bind(this);
        this.optionCloseAllTabs = this.optionCloseAllTabs.bind(this);
        this.optionOpenFilter = this.optionOpenFilter.bind(this);
        this.setButtonFilter = this.setButtonFilter.bind(this);
        this.optionFilterRemove = this.optionFilterRemove.bind(this);
        this.createListTable = this.createListTable.bind(this);

        this.optionColorRandom = this.optionColorRandom.bind(this);
        this.optionColorFound = this.optionColorFound.bind(this);
        this.optionColorCleanSelected = this.optionColorCleanSelected.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<AllWidgetProps<any>>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props.hasOwnProperty("stateValue") && this.props.stateValue?.value?.layerOpen){
            const newTimeReceive = new Date().getTime();
            if(newTimeReceive - this.filterTimeReceiveData < 5000){
                return;
            }else{
                this.filterTimeReceiveData = newTimeReceive;
            }

            if(this.state.jimuMapView){
                if(this.props.stateValue?.value.layerOpen?.listServiceUrl){
                    for(let i=0;i<=this.props.stateValue?.value.layerOpen.listServices.length;i++){
                        let serviceUrl = this.props.stateValue?.value.layerOpen.listServices[i];

                        const foundLayer = this.state.jimuMapView.view.map.allLayers.items.find(f=>serviceUrl === f.url + "/" + f.layerId);
                        if(!foundLayer){
                            let layer = new FeatureLayer({url:serviceUrl});
                            this.state.jimuMapView.view.map.add(layer);
                        }
                    }

                    this.createListTable(this.props.stateValue?.value?.layerOpen);

                }else{
                    this.createListTable(this.props.stateValue?.value?.layerOpen);
                }

            }

            this.openSideBar();
        }
    }

    openSideBar(){
        const sidebar = document.querySelector(".sidebar-controller");
        //@ts-ignore
        if(sidebar?.getAttribute("aria-expanded") === "false"){
            //@ts-ignore
            if(sidebar) sidebar.click();
        }
    }

    createListTable(layerOpen){
        this.defaultValue = "";
        this.tabs = [];
        this.arrayTable = [];

        for(let i=0;i<this.state.jimuMapView.view.map.allLayers.items.length;i++){
            const f = this.state.jimuMapView.view.map.allLayers.items[i];
            if(f.type==="feature" &&
                (layerOpen.listServices.indexOf(i) !== -1 || layerOpen.listServices.indexOf(f.url + "/" + f.layerId) !== -1)
                || f.sublayers ){
                if(f.sublayers){
                    for(let j=0;i<f.sublayers.items.length;i++){
                        // const fs = f.sublayers[j];
                        const fs = f.sublayers.items[j];
                        this.tabs.push(
                            <Tab closeable id={"tab-"+fs.uid} title={f.title + " - "+ fs.title}>
                                <div id={"container-"+fs.uid} className="tabClassControl"></div>
                            </Tab>
                        );

                        this.createTable(fs,layerOpen,"tab-"+fs.uid).then((featureTable)=>{
                            if(!featureTable){
                                console.log("Table not results: "+fs.title);
                            }else{
                                console.log("Table Loaded: "+fs.title);
                            }
                        });
                    }
                }else{
                    if(i === 0) this.defaultValue = "tab-"+f.uid;
                    this.tabs.push(
                        <Tab closeable id={"tab-"+f.uid} title={f.title}>
                            <div id={"container-"+f.uid} className="tabClassControl"></div>
                        </Tab>
                    );

                    this.createTable(f,layerOpen,"tab-"+f.uid).then((featureTable)=>{
                        if(!featureTable){
                            console.log("Table not results: "+f.title);
                        }else{
                            console.log("Table Loaded: "+f.title);
                        }
                    });
                }

            }
        }
        this.setState({
            geometryFilter: layerOpen.geometry,
            listServices: layerOpen.listServices
        });
    }

    activeViewChangeHandler = (jmv: JimuMapView) => {
        if (jmv) this.setState({jimuMapView: jmv});
    };

    createFeatureTable(layer,layerView){
        const div = document.createElement("div");
        let checkExist = setInterval(()=>{
            const container = document.getElementById("container-"+layer.uid);
            if (container) {
                container.innerHTML = '';
                container.appendChild(div);
                clearInterval(checkExist);
            }
        }, 100);

        const featureTable = new FeatureTable({
            id: "T"+layer.id,
            label:layer.title,
            view: this.state.jimuMapView.view,
            multiSortEnabled: true,
            layer: layer,
            container: div
        });

        featureTable.visibleElements = {
            header: true,
            menu: true,
            menuItems: {
                clearSelection: true,
                refreshData: true,
                toggleColumns: true,
                selectedRecordsShowAllToggle: true,
                zoomToSelection: true
            },
            selectionColumn: true,
            columnMenus: true
        }

        featureTable.highlightIds.on("change", (event) => {
            if(event.added.length){
                try{
                    const query = layer.createQuery();
                    query.where = layer.objectIdField + " = " + event.added[0];
                    query.returnGeometry = true;
                    layer.queryFeatures(query).then((results)=>{
                        const features = results.features;
                        if(features.length){
                            //layerView.highlight(features[0]);
                            this.state.jimuMapView.view.goTo(features[0].geometry);
                        }else{
                            console.error("not found");
                        }

                    });
                }catch (e){
                    console.error(e);
                }

            }
        });

        this.arrayTable.push(featureTable);

        return featureTable;
    }

    async createTable(layer,pass,identificationTable) {
        //try{

            layer.visible = true;
            const layerView = await this.state.jimuMapView.view.whenLayerView(layer);
            //await new Promise(resolve => setTimeout(resolve, 1500));

            let query = new Query();
            if(pass.geometry){
                query.geometry = new Polygon(pass.geometry);
                query.spatialRelationship = pass.typeSelected;

                layerView.filter = {
                    geometry: query.geometry,
                    spatialRelationship: pass.typeSelected
                };
            }

            if(pass.where){
                query.where = pass.where;
                layerView.filter = {
                    where: query.where,
                }
            }

            if(!pass.geometry && !pass.where){
                query.where = "1=1";
                layerView.filter = {
                    where: query.where,
                }
            }

            query.outFields = ["*"];

            const results = await layer.queryFeatures(query);
            let features = results.features;
            if(features?.length){
                this.saveFeatures[layer.uid] = features;

                const featureTable = this.createFeatureTable(layer,layerView);
                if(query.geometry) featureTable.filterGeometry = query.geometry;
                featureTable.filterBySelection();
                return featureTable;
            }

        //}catch (e){
        //    console.error(e.message);
        //    this.tabsClose(identificationTable, true);
        //    return null;
        //}
    }

    tabsClose(e,noControlTable = false){
        this.optionColorCleanSelected();

        let foundIndex = null;
        for(let i=0;i<this.tabs.length;i++){
            if(this.tabs[i].props.id === e){
                foundIndex = i;
                break;
            }
        }
        this.tabs.splice(foundIndex, 1);

        if(!noControlTable){
            const table = this.arrayTable[foundIndex];
            if(table && table.layer){
                this.arrayTable.splice(foundIndex,1);
                this.props.stateProps.layerOpen.listServices.splice(foundIndex,1);
                table.layer.visible = false;
            }
        }

        this.setState({
            tabsLength: this.tabs.length,
            listServices: this.props.stateProps.layerOpen.listServices
        });
    }

    getActiveTable(){
        for(let i=0;i<this.tabs.length;i++){
            const el = document.querySelector("#"+this.tabs[i].props.children.props.id);
            //@ts-ignore
            if(el.checkVisibility()){
                return this.arrayTable[i];
            }
        }
        return null;
    }

    getStoreClean(table){
        let arrayNew = [];
        if(table && table.grid && table.grid.store && table.grid.store.itemCache && table.grid.store.itemCache.items?.length){
            for(let i=0;i<table.grid.store.itemCache.items.length;i++){
                let attr = table.grid.store.itemCache.items[i].feature.attributes;
                arrayNew.push(attr);
            }
        }
        return arrayNew;
    }

    getStoreSingleAttributes(table,attribute){
        let arrayNew = [];
        if(table && table.grid && table.grid.store && table.grid.store.itemCache && table.grid.store.itemCache.items?.length){
            for(let i=0;i<table.grid.store.itemCache.items.length;i++){
                let attr = table.grid.store.itemCache.items[i].feature.attributes;
                let newAttr = {};
                newAttr[attribute] = attr[attribute]
                arrayNew.push(newAttr);
            }
        }
        return arrayNew;
    }

    async getKmzFile(layer,found){
        const objIds = found.map(f=>f.OBJECTID);
        const formData = new FormData();

        formData.append("f", "kmz");
        formData.append("where", `OBJECTID IN (${objIds.join(',')})`);
        formData.append("outFields", "*");

        const response = await esriRequest(layer.url.replace("FeatureServer","MapServer") + "/" + layer.layerId + "/query", {
            responseType: "blob",
            body:formData
        });

        const url = window.URL.createObjectURL(response.data);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = 'result.kmz';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

    }

    optionClickDownload(selected){
        const activeTable = this.getActiveTable();

        switch (selected){
            case "KMZ":
                if(activeTable){
                    const cleanArrayStore = this.getStoreSingleAttributes(activeTable,"OBJECTID")
                    this.getKmzFile(activeTable.layer,cleanArrayStore)
                }
                break;
            case "eCGI_CSV":
                if(activeTable){
                    const cleanArrayStore = this.getStoreSingleAttributes(activeTable,"eCGI_28bit");
                    if(cleanArrayStore) Download.CSV(cleanArrayStore);
                }
                break;
            case "CGI_CSV":
                if(activeTable){
                    const cleanArrayStore = this.getStoreSingleAttributes(activeTable,"CGI");
                    if(cleanArrayStore) Download.CSV(cleanArrayStore);
                }
                break;
            case "EXCEL_TABLE":break;
            case "CSV_TABLE":
                if(activeTable){
                    const cleanArrayStore = this.getStoreClean(activeTable);
                    if(cleanArrayStore) Download.CSV(cleanArrayStore);
                }
                break;
            case "ALL_TABLE":
                for(let i=0;i<this.tabs.length;i++){
                    const item = this.arrayTable[i];
                    const cleanArrayStore = this.getStoreClean(item);
                    if(cleanArrayStore) Download.CSV(cleanArrayStore,item.layer.title+".csv");
                }
            break;
        }

    }

    optionFilterRemove(){
        delete this.props.stateProps.layerOpen.where;
        delete this.props.stateProps.layerOpen.geometry;
        delete this.props.stateProps.layerOpen.typeSelected;
        this.createListTable(this.props.stateProps.layerOpen);

        //pulisco eventuali graphicLayerSketch
        this.state.jimuMapView.view.map.layers.items.filter(f=>f.id.indexOf("sketch") !== -1).forEach(f=>f.removeAll());
    }

    optionFilterExtentions(){
        this.props.stateProps.layerOpen.geometry = Polygon.fromExtent(this.state.jimuMapView.view.extent).toJSON();
        this.props.stateProps.layerOpen.typeSelected = "contains";
        this.createListTable(this.props.stateProps.layerOpen);
    }

    optionOpenFilter(e){

    }

    optionCloseAllTabs(){
        this.tabs = [];
        this.arrayTable = [];
        this.setState({
            tabsLength: this.tabs.length
        });

        //TODO MIGLIORARE
        //chiudi sidebar
        const sidebar = document.querySelector(".sidebar-controller");
        //@ts-ignore
        if(sidebar) sidebar.click();

    }

    setButtonFilter(){
        let buttonFilter;

        if(this.state.geometryFilter){
            buttonFilter = <div>
                <Button onClick={this.optionFilterRemove} size="default">
                    <WidgetFilterOutlined/> Cancella filtro
                </Button>
            </div>;
        }else{
            buttonFilter = <div>
                <Button onClick={this.optionFilterExtentions} size="default">
                    <WidgetFilterOutlined/> Filtra per estenzione mappa
                </Button>
                {this.props.config.buttonFilter && (<Button onClick={this.optionOpenFilter} size="default">
                    <WidgetFilterOutlined/> Filtra
                </Button>)}
                <Button onClick={this.optionCloseAllTabs} size="default">
                    <CloseOutlined/> Chiudi tutti i tab
                </Button>
            </div>;
        }
        return buttonFilter;
    }

    optionColorRandom(){
        const activeTable = this.getActiveTable();

        if(activeTable && activeTable.highlightIds.items){
            let arrayItemSelected = activeTable.highlightIds?.items;

            if(arrayItemSelected){
                if(!this.uniqueValuesInfosSave[activeTable.layer.uid]) this.uniqueValuesInfosSave[activeTable.layer.uid] = [];

                //salvo vecchio renderer
                if(!this.saveOldRenderer[activeTable.layer.uid]){
                    this.saveOldRenderer[activeTable.layer.uid] = activeTable.layer.renderer;
                }

                for(let i=0;i<arrayItemSelected.length;i++){
                    let objectid = arrayItemSelected[i];
                    this.uniqueValuesInfosSave[activeTable.layer.uid].push({
                        label: objectid,
                        value: objectid,
                        symbol: this.createSymbol(activeTable.layer.geometryType,[
                            Math.floor(Math.random() * 256),
                            Math.floor(Math.random() * 256),
                            Math.floor(Math.random() * 256)
                        ])
                    });
                }

                activeTable.highlightIds.removeAll();

                activeTable.layer.renderer = {
                    type: "unique-value",
                    field: activeTable.layer.objectIdField,
                    uniqueValueInfos: this.uniqueValuesInfosSave[activeTable.layer.uid]
                };
            }
        }
    }

    createSymbol(type, color){
        const typeSymbol =
            type === 'point'? "simple-marker":
                type === 'polyline'? "simple-line":
                    "simple-fill";

        return {
            type: typeSymbol,
            style: "solid",
            color,
            outline: null
        };
    }

    optionColorFound(event){
        //event.preventDefault();
        //event.stopPropagation();

        const activeTable = this.getActiveTable();

        if(activeTable && activeTable.highlightIds.items){
            let arrayItemSelected = activeTable.highlightIds?.items;

            if(arrayItemSelected){
                if(!this.uniqueValuesInfosSave[activeTable.layer.uid]) this.uniqueValuesInfosSave[activeTable.layer.uid] = [];

                //salvo vecchio renderer
                if(!this.saveOldRenderer[activeTable.layer.uid]){
                    this.saveOldRenderer[activeTable.layer.uid] = activeTable.layer.renderer;
                }

                for(let i=0;i<arrayItemSelected.length;i++){
                    let objectid = arrayItemSelected[i];
                    const uniqueColor = {
                        label: objectid,
                        value: objectid,
                        symbol: this.createSymbol(activeTable.layer.geometryType,event)
                    };
                    let indexFound = null;
                    for(let j=0;j<this.uniqueValuesInfosSave[activeTable.layer.uid].length;j++){
                        let uniqueFound = this.uniqueValuesInfosSave[activeTable.layer.uid][j].value;
                        if(uniqueFound === objectid){
                            indexFound = j;
                            break;
                        }
                    }
                    if(indexFound){
                        this.uniqueValuesInfosSave[activeTable.layer.uid][indexFound] = uniqueColor;
                    }else{
                        this.uniqueValuesInfosSave[activeTable.layer.uid].push(uniqueColor);
                    }

                }

                activeTable.layer.renderer = {
                    type: "unique-value",
                    field: activeTable.layer.objectIdField,
                    uniqueValueInfos: this.uniqueValuesInfosSave[activeTable.layer.uid]
                };
            }
        }
    }

    optionColorCleanSelected(cleanHighLightIds = true){
        const activeTable = this.getActiveTable();
        if(activeTable){
            if(this.saveOldRenderer[activeTable.layer.uid]){
                delete this.uniqueValuesInfosSave[activeTable.layer.uid];
                activeTable.layer.renderer = this.saveOldRenderer[activeTable.layer.uid];
                delete this.saveOldRenderer[activeTable.layer.uid];
                if(cleanHighLightIds) activeTable.highlightIds.removeAll();
            }
        }
    }

    render () {
        let buttonFilter = this.setButtonFilter();
        return (
            <div className="widget-attribute-table jimu-widget">
                {this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
                    <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
                )}
                <div className="container-fluid bg-primary h-auto">
                    <div className="row">
                        <div className="col-md-12">
                            <ButtonGroup className="w-100">
                                <Dropdown direction="down">
                                    <DropdownButton>
                                        <ExportOutlined className="mr-2"/> Download
                                    </DropdownButton>
                                    <DropdownMenu>
                                        {this.props.config.downloadKMZ && (<DropdownItem onClick={()=>{this.optionClickDownload("KMZ")}}>
                                            <ExportOutlined className="mr-2"/> Esporta Selezione in KMZ
                                        </DropdownItem>)}

                                        {this.props.config.downloadECGI && (<DropdownItem onClick={()=>{this.optionClickDownload("eCGI_CSV")}}>
                                            <ExportOutlined className="mr-2"/> Esporta Colonna eCGI in CSV
                                        </DropdownItem>)}
                                        {this.props.config.downloadCGI && (<DropdownItem onClick={()=>{this.optionClickDownload("CGI_CSV")}}>
                                            <ExportOutlined className="mr-2"/> Esporta Colonna CGI in CSV
                                        </DropdownItem>)}
                                        <DropdownItem onClick={()=>{this.optionClickDownload("CSV_TABLE")}}>
                                            <ExportOutlined className="mr-2"/> Esporta CSV tabella selezionata
                                        </DropdownItem>
                                        <DropdownItem onClick={()=>{this.optionClickDownload("ALL_TABLE")}}>
                                            <ExportOutlined className="mr-2"/> Esporta CSV tutte le tabelle
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                <Dropdown direction="down">
                                    <DropdownButton>
                                        <ColorsOutlined className="mr-2"/> Colore evidenziazione
                                    </DropdownButton>
                                    <DropdownMenu>
                                        <DropdownItem onClick={()=>{this.optionColorRandom()}}>
                                            <ClearSelectionOutlined className="mr-2"/> Colore casuale
                                        </DropdownItem>
                                        <button className="jimu-dropdown-item app-root-emotion-cache-ltr-1vl5tzn dropdown-item">
                                            <BrushOutlined className="mr-2"/> <ColorPicker id="colorPickerAttributeTable" className="color-picker-block mr-2" onChange={(e)=>{this.optionColorFound(e)}} placement="top"/> Scegli il colore
                                        </button>
                                        <DropdownItem onClick={()=>{this.optionColorCleanSelected()}}>
                                            <ClearOutlined className="mr-2"/> Cancella le evidenziazioni
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                {buttonFilter}

                            </ButtonGroup>
                        </div>
                    </div>
                </div>

                {this.tabs.length === 0 ?
                    <div className="text-center container-fluid">
                        <div className="row">
                            <div className="col-md-12 mt-2 font-weight-bold">
                                Nessuna tabella aperta o nessun risultato trovato
                            </div>
                        </div>
                    </div>
                    :
                    <Tabs scrollable defaultValue={this.defaultValue} type="tabs" onClose={this.tabsClose}>
                        {this.tabs}
                    </Tabs>
                }
            </div>
        )
    }
}
