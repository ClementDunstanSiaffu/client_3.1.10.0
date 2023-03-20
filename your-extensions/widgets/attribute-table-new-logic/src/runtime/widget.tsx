/** @jsx jsx */
import { React, AllWidgetProps, jsx } from 'jimu-core'

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
import SpatialReference from "esri/geometry/SpatialReference";

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

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
    filterTimeReceiveData = new Date().getTime();
    defaultValue = "";
    tabs = [];

    uniqueValuesInfosSave = [];
    saveOldRenderer = [];
    objectIdSaveColor = [];
    controlColor = false;
    colorObjects = [];
    layersAdded = [];

    constructor(props) {
        super(props)

        this.state = {
            geometryFilter: null,
            listServices: [],
            actualColor: '#000',
            colorObjects: [],
            controlbool: false,
            canUpdate: true,
            featureTable: null,
            layerToHighlight: null
        }

        this.tabsClose = this.tabsClose.bind(this);

        this.optionClickDownload = this.optionClickDownload.bind(this);
        this.optionFilterExtentions = this.optionFilterExtentions.bind(this);
        this.optionCloseAllTabs = this.optionCloseAllTabs.bind(this);
        this.optionOpenFilter = this.optionOpenFilter.bind(this);
        this.setButtonFilter = this.setButtonFilter.bind(this);
        this.setButtonColors = this.setButtonColors.bind(this);
        this.optionFilterRemove = this.optionFilterRemove.bind(this);
        this.createListTable = this.createListTable.bind(this);

        this.optionColorRandom = this.optionColorRandom.bind(this);
        this.optionColorFound = this.optionColorFound.bind(this);
        this.optionColorCleanSelected = this.optionColorCleanSelected.bind(this);
        this.seeColoredItems = this.seeColoredItems.bind(this);
    }

    componentDidUpdate(prevProps: Readonly<AllWidgetProps<any>>, prevState: Readonly<any>, snapshot?: any) {
        if (this.controlColor) {
            this.controlColor = false;
            return;
        }
        if (this.props.hasOwnProperty("stateProps") && this.props.stateProps.layerOpen) {
            const newTimeReceive = new Date().getTime();
            if (newTimeReceive - this.filterTimeReceiveData < 5000) {
                return;
            } else {
                this.filterTimeReceiveData = newTimeReceive;
            }

            if (this.state.jimuMapView) {
                if (!this.state.canUpdate) {
                    return;
                }
                if (this.props.stateProps.layerOpen?.listServiceUrl) {
                    for (let i = 0; i < this.props.stateProps.layerOpen.listServices.length; i++) {
                        let serviceUrl = this.props.stateProps.layerOpen.listServices[i];

                        const foundLayer = this.state.jimuMapView.view.map.allLayers.items.find(f => serviceUrl === f.url + "/" + f.layerId);
                        if (!foundLayer) {
                            let layer = new FeatureLayer({url: serviceUrl});
                            this.layersAdded.push(layer)
                            this.state.jimuMapView.view.map.add(layer);
                        }
                    }

                    this.createListTable(this.props.stateProps.layerOpen);

                } else {
                    this.createListTable(this.props.stateProps.layerOpen);
                }
            }

            this.openSideBar();
        }
    }

    openSideBar() {
        const sidebar = document.querySelector(".sidebar-controller");
        //@ts-ignore
        if (sidebar?.getAttribute("aria-expanded") === "false") {
            //@ts-ignore
            if (sidebar) sidebar.click();
            this.setState({
                colorObjects: this.colorObjects,
            });
            if (this.layersAdded.length) return
            for (let i = 0; i < this.layersAdded.length; i++)
                if (this.layersAdded[i].listMode && this.layersAdded[i].listMode === "hide")
                    this.layersAdded[i].listMode = 'show'
        }
    }

    async createListTable(layerOpen) {
        for (let i = 0; i < this.layersAdded.length; i++)
            if (this.layersAdded[i].listMode && this.layersAdded[i].listMode === "hide")
                this.layersAdded[i].listMode = 'show'
        this.defaultValue = "";
        this.tabs = [];
        for (let i = 0; i < this.state.jimuMapView.view.map.allLayers.items.length; i++) {
            const f = this.state.jimuMapView.view.map.allLayers.items[i];
            if (f.type === "feature" &&
                (layerOpen.listServices.indexOf(i) !== -1 || layerOpen.listServices.indexOf(f.url + "/" + f.layerId) !== -1)
                || f.sublayers) {
                if (f.sublayers) {
                    for (let j = 0; i < f.sublayers.length; i++) {
                        const fs = f.sublayers._items[j];

                        this.tabs.push({
                            id: "tab-" + fs.uid,
                            el: <Tab closeable id={"tab-" + fs.uid} title={f.title + " - " + fs.title}>
                                <div id={"container-" + fs.uid} className="tabClassControl"></div>
                            </Tab>,
                            table: null
                        });

                        const featureTable = await this.createTable(fs, layerOpen, "tab-" + fs.uid);
                        this.tabs[this.tabs.length - 1].table = featureTable;
                        if (!featureTable) {
                            if (!this.props.config.tabEmptyNotShow) {
                                this.tabs.pop();
                            }
                            console.log("Table not results: " + fs.title);
                        } else {
                            console.log("Table Loaded: " + fs.title);
                        }
                    }
                } else {
                    if (i === 0) this.defaultValue = "tab-" + f.uid;
                    this.tabs.push({
                        id: "tab-" + f.uid,
                        el: <Tab closeable id={"tab-" + f.uid} title={f.title}>
                            <div id={"container-" + f.uid} className="tabClassControl"></div>
                        </Tab>,
                        table: false
                    });

                    try {
                        const featureTable = await this.createTable(f, layerOpen, "tab-" + f.uid);
                        this.tabs[this.tabs.length - 1].table = featureTable;
                        if (!featureTable) {
                            if (!this.props.config.tabEmptyNotShow) {
                                this.tabs.pop();
                            }
                            console.log("Table not results: " + f.title);
                        } else {
                            console.log("Table Loaded: " + f.title);
                        }
                    } catch (e) {
                        console.error(e.message);
                        continue;

                    }
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

    createFeatureTable(layer, layerView) {
        const div = document.createElement("div");
        let checkExist = setInterval(() => {
            const container = document.getElementById("container-" + layer.uid);
            if (container) {
                container.innerHTML = '<input type="checkbox"> Seleziona tutti </input>';
                const checkbox = container.querySelector<HTMLInputElement>('input[type="checkbox"]');
                checkbox.addEventListener("change", () => {
                    if (checkbox.checked) {
                        console.log("checked");
                    } else {
                        console.log("unchecked");
                    }
                });
                container.appendChild(div);
                clearInterval(checkExist);
            }
        }, 100);

        //TODO
        /*const tableTemplate = { // autocastable to TableTemplate
            columnTemplates: Object.assign([],layer.fields.map(f=>{
                return {
                    fieldName: f.name
                }
            }))
        };

        tableTemplate.columnTemplates.unshift({
            fieldName:"Colore"
        });*/

        const featureTable = new FeatureTable({
            id: "T" + layer.id,
            label: layer.title,
            view: this.state.jimuMapView.view,
            multiSortEnabled: true,
            layer: layer,
            //tableTemplate:tableTemplate,
            container: div,
        });

        featureTable.visibleElements = {
            header: true,
            menu: true,
            menuItems: {
                clearSelection: true,
                refreshData: true,
                toggleColumns: true,
                selectedRecordsShowAllToggle: true,
                // @ts-ignore
                selectedRecordShowSelectedToggle: true,
                zoomToSelection: true
            },
            selectionColumn: true,
            columnMenus: true
        }
        // featureTable.viewModel.watch("state", function (state) {
        //     if (state === "ready") {
        //         layer.queryObjectIds().then(function (ids) {
        //             console.log(ids)
        //             //featureTable.highlightIds.push(ids);
        //         });
        //     }
        // });
        debugger;
        featureTable.highlightIds.on("change", (event) => {
            console.log(event)
            if (event.added.length) {
                try {
                    const query = layer.createQuery();
                    query.where = layer.objectIdField + " = " + event.added[0];
                    query.returnGeometry = true;
                    layer.queryFeatures(query).then((results) => {
                        const features = results.features;
                        if (features.length) {
                            //layerView.highlight(features);
                            this.state.jimuMapView.view.goTo(features[0].geometry);
                        } else {
                            console.error("not found");
                        }
                    });
                } catch (e) {
                    console.error(e);
                }
            }
        });

        return featureTable;
    }

    async createTable(layer, pass, identificationTable) {
        try {
            layer.visible = true;
            const layerView = await this.state.jimuMapView.view.whenLayerView(layer);
            //await new Promise(resolve => setTimeout(resolve, 1500));

            let query = new Query();
            if (pass.geometry) {
                query.geometry = new Polygon(pass.geometry);
                query.spatialRelationship = pass.typeSelected;

                layerView.filter = {
                    geometry: query.geometry,
                    spatialRelationship: pass.typeSelected
                };
            }

            if (pass.where) {
                query.where = pass.where;
                layerView.filter = {
                    where: query.where,
                }
            }

            if (!pass.geometry && !pass.where) {
                query.where = "1=1";
                layerView.filter = {
                    where: query.where,
                }
            }

            query.outFields = ["*"];

            const results = await layer.queryFeatures(query);
            let features = results.features;
            if (features?.length) {
                const featureTable = this.createFeatureTable(layer, layerView);
                if (query.geometry) featureTable.filterGeometry = query.geometry;
                featureTable.filterBySelection();
                return featureTable;
            }

        } catch (e) {
            return null;
        }
    }

    tabsClose(e, noControlTable = false) {
        this.optionColorCleanSelected();

        let foundIndex = null;
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].el.props.id === e) {
                if (!noControlTable) this.tabs[i].table.layer.visible = false;
                foundIndex = i;
                break;
            }
        }
        this.tabs.splice(foundIndex, 1);
        if (!noControlTable) this.props.stateProps.layerOpen.listServices.splice(foundIndex, 1);

        this.setState({
            tabsLength: this.tabs.length,
            listServices: this.props.stateProps.layerOpen.listServices
        });
    }

    getActiveTable() {
        for (let i = 0; i < this.tabs.length; i++) {
            const el = document.querySelector("#" + this.tabs[i].el.props.children.props.id);
            //@ts-ignore
            if (el && el.checkVisibility()) {
                return [this.tabs[i].table, el];
            }
        }
        return null;
    }

    getStoreClean(table) {
        let arrayNew = [];
        if (table && table.grid && table.grid.store && table.grid.store.itemCache && table.grid.store.itemCache.items?.length) {
            for (let i = 0; i < table.grid.store.itemCache.items.length; i++) {
                let attr = table.grid.store.itemCache.items[i].feature.attributes;
                arrayNew.push(attr);
            }
        }
        return arrayNew;
    }

    getStoreSingleAttributes(table, attribute) {
        let arrayNew = [];
        if (table && table.grid && table.grid.store && table.grid.store.itemCache && table.grid.store.itemCache.items?.length) {
            for (let i = 0; i < table.grid.store.itemCache.items.length; i++) {
                let attr = table.grid.store.itemCache.items[i].feature.attributes;
                let newAttr = {};
                newAttr[attribute] = attr[attribute]
                arrayNew.push(newAttr);
            }
        }
        return arrayNew;
    }

    async getKmzFile(layer, found) {
        const objIds = found.map(f => f.OBJECTID);
        const formData = new FormData();

        formData.append("f", "kmz");
        formData.append("where", `OBJECTID IN (${objIds.join(',')})`);
        formData.append("outFields", "*");

        const response = await esriRequest(layer.url.replace("FeatureServer", "MapServer") + "/" + layer.layerId + "/query", {
            responseType: "blob",
            body: formData
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

    optionClickDownload(selected) {
        const activeTable = this.getActiveTable()[0];

        switch (selected) {
            case "KMZ":
                if (activeTable) {
                    const cleanArrayStore = this.getStoreSingleAttributes(activeTable, "OBJECTID")
                    this.getKmzFile(activeTable.layer, cleanArrayStore)
                }
                break;
            case "eCGI_CSV":
                if (activeTable) {
                    const cleanArrayStore = this.getStoreSingleAttributes(activeTable, "eCGI_28bit");
                    if (cleanArrayStore) Download.CSV(cleanArrayStore);
                }
                break;
            case "CGI_CSV":
                if (activeTable) {
                    const cleanArrayStore = this.getStoreSingleAttributes(activeTable, "CGI");
                    if (cleanArrayStore) Download.CSV(cleanArrayStore);
                }
                break;
            case "EXCEL_TABLE":
                break;
            case "CSV_TABLE":
                if (activeTable) {
                    const cleanArrayStore = this.getStoreClean(activeTable);
                    if (cleanArrayStore) Download.CSV(cleanArrayStore);
                }
                break;
            case "ALL_TABLE":
                for (let i = 0; i < this.tabs.length; i++) {
                    const item = this.tabs[i].table;
                    const cleanArrayStore = this.getStoreClean(item);
                    if (cleanArrayStore) Download.CSV(cleanArrayStore, item.layer.title + ".csv");
                }
                break;
        }

    }

    optionFilterRemove() {
        delete this.props.stateProps.layerOpen.where;
        delete this.props.stateProps.layerOpen.geometry;
        delete this.props.stateProps.layerOpen.typeSelected;
        this.createListTable(this.props.stateProps.layerOpen);

        //pulisco eventuali graphicLayerSketch
        this.state.jimuMapView.view.map.layers.items.filter(f => f.id.indexOf("sketch") !== -1).forEach(f => f.removeAll());
    }

    optionFilterExtentions() {
        this.props.stateProps.layerOpen.geometry = Polygon.fromExtent(this.state.jimuMapView.view.extent).toJSON();
        this.props.stateProps.layerOpen.typeSelected = "contains";
        this.createListTable(this.props.stateProps.layerOpen);
    }

    optionOpenFilter(e) {

    }

    optionCloseAllTabs() {
        if(this.tabs.length)
            for (let i = 0; i < this.tabs.length; i++) {
                if(this.tabs[i].table.highlightIds)
                    this.tabs[i].table.highlightIds.removeAll();
                this.tabs[i].table.layer.renderer = this.saveOldRenderer[this.tabs[i].table.layer.uid];
                if(this.tabs[i].table.layer.labelingInfo)
                    this.tabs[i].table.layer.labelingInfo=null;
            }
        this.tabs = [];
        this.colorObjects = [];
        this.setState({
            tabsLength: this.tabs.length,
            canUpdate: true
        });
        setTimeout(()=>{
            for (let i = 0; i < this.layersAdded.length; i++)
                if (this.layersAdded[i].listMode && this.layersAdded[i].listMode === "show")
                    this.layersAdded[i].listMode = 'hide'
        },2000)

        //TODO MIGLIORARE
        //chiudi sidebar
        const sidebar = document.querySelector(".sidebar-controller");
        //@ts-ignore
        if (sidebar) sidebar.click();

    }

    setButtonFilter() {
        let buttonFilter;

        if (this.state.geometryFilter) {
            buttonFilter = <div>
                <Button onClick={this.optionFilterRemove} size="default">
                    <WidgetFilterOutlined/> Cancella filtro
                </Button>
                <Button onClick={this.optionCloseAllTabs} size="default">
                    <CloseOutlined/> Chiudi tutti i tab
                </Button>
            </div>;
        } else {
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

    setButtonColors() {
        let buttonColors;
        if (this.state.colorObjects.length !== 0) {
            buttonColors =
                <Dropdown direction="down">
                    <DropdownButton>
                        Colori evidenziati
                    </DropdownButton>
                    <DropdownMenu>
                        {
                            this.state.colorObjects.map((elem, index) => {
                                return (
                                    <DropdownItem key={index} onClick={() => {
                                        this.seeColoredItems(elem);
                                    }}>
                                        <div style={{
                                            background: elem.color,
                                            width: "16px",
                                            height: "16px",
                                            marginRight: "1rem"
                                        }}></div>
                                        {elem.cella}
                                    </DropdownItem>
                                );
                            })
                        }
                    </DropdownMenu>
                </Dropdown>

        } else {
            buttonColors = <div></div>
        }
        return buttonColors

    }

    async optionColorRandom() {
        const found = this.getActiveTable();
        const activeTable = found[0];
        const activeTabs = found[1];

        if (activeTable && activeTable.highlightIds.items) {
            let arrayItemSelected = activeTable.highlightIds?.items;

            if (arrayItemSelected) {
                if (!this.uniqueValuesInfosSave[activeTable.layer.uid]) this.uniqueValuesInfosSave[activeTable.layer.uid] = [];

                //salvo vecchio renderer
                if (!this.saveOldRenderer[activeTable.layer.uid]) {
                    this.saveOldRenderer[activeTable.layer.uid] = activeTable.layer.renderer;
                }

                for (let i = 0; i < arrayItemSelected.length; i++) {
                    let objectid = arrayItemSelected[i];
                    if (!this.objectIdSaveColor.find(f => f === objectid)) this.objectIdSaveColor.push(objectid);
                    const symbol = this.createSymbol(activeTable.layer.geometryType, [
                        Math.floor(Math.random() * 256),
                        Math.floor(Math.random() * 256),
                        Math.floor(Math.random() * 256),
                        0.6
                    ])
                    const uniqueColor = {
                        label: objectid,
                        value: objectid,
                        symbol: symbol
                    };
                    let indexFound = null;
                    for (let j = 0; j < this.uniqueValuesInfosSave[activeTable.layer.uid].length; j++) {
                        let uniqueFound = this.uniqueValuesInfosSave[activeTable.layer.uid][j].value;
                        if (uniqueFound === objectid) {
                            indexFound = j;
                            break;
                        }
                    }
                    if (indexFound) {
                        this.uniqueValuesInfosSave[activeTable.layer.uid][indexFound] = uniqueColor;
                    } else {
                        this.uniqueValuesInfosSave[activeTable.layer.uid].push(uniqueColor);
                    }

                    let query = new Query()
                    query.where = "OBJECTID=" + objectid
                    query.outFields = ['*']
                    let result
                    try {
                        await activeTable.layer.queryFeatures(query).then((results) => {
                            result = results.features
                        }, (err) => {
                            console.log(err)
                        })
                    } catch (e) {
                        result = []
                    }

                    let cella = result[0].attributes.CELLA

                    let obj = {
                        objectid: objectid,
                        color: "rgb(" + symbol.color.join() + ")",
                        cella: cella,
                        uid: activeTable.layer.uid
                    }
                    let bool = true
                    for (let it = 0; it < this.colorObjects.length; it++) {
                        if (this.colorObjects[it].objectid === objectid) {
                            bool = false;
                            this.colorObjects[it].color = "rgb(" + symbol.color.join() + ")";
                        }
                    }
                    if (bool)
                        this.colorObjects.push(obj)

                }

                this.setState({
                    colorObjects: this.colorObjects,
                    controlbool: !this.state.controlbool,
                    canUpdate: false
                })


                activeTable.layer.renderer = {
                    type: "unique-value",
                    field: activeTable.layer.objectIdField,
                    uniqueValueInfos: this.uniqueValuesInfosSave[activeTable.layer.uid]
                };

                this.activeLabel(activeTable.layer)
            }
        }
    }

    activeLabel(layer) {
        if (layer.labelingInfo?.length) {
            layer.labelingInfo[0].where = layer.objectIdField + " IN (" + this.objectIdSaveColor.join() + ")";
            layer.labelsVisible = true;
        } else {
            if (layer.fields.find(f => f.name === "CELLA")) {
                layer.labelingInfo = [{
                    labelExpressionInfo: {
                        expression: "$feature.CELLA"
                    },
                    labelPlacement: "always-horizontal",
                    symbol: {
                        type: "text",
                        color: [0, 0, 0],
                        font: {
                            family: "Arial",
                            weight: "bold",
                            size: 11
                        }
                    },
                    where: layer.objectIdField + " IN (" + this.objectIdSaveColor.join() + ")"
                }];
                layer.labelsVisible = true;
            }

        }

    }

    createSymbol(type, color) {
        const typeSymbol =
            type === 'point' ? "simple-marker" :
                type === 'polyline' ? "simple-line" :
                    "simple-fill";

        return {
            type: typeSymbol,
            style: "solid",
            color,
            outline: null
        };
    }

    async optionColorFound(event) {
        this.controlColor = true;
        //event.preventDefault();
        //event.stopPropagation();
        this.setState({
            actualColor: event
        })
        const found = this.getActiveTable();
        const activeTable = found[0];
        const activeTabs = found[1];

        if (activeTable && activeTable.highlightIds.items) {
            let arrayItemSelected = activeTable.highlightIds?.items;
            if (arrayItemSelected) {
                if (!this.uniqueValuesInfosSave[activeTable.layer.uid]) this.uniqueValuesInfosSave[activeTable.layer.uid] = [];

                //salvo vecchio renderer
                if (!this.saveOldRenderer[activeTable.layer.uid]) {
                    this.saveOldRenderer[activeTable.layer.uid] = activeTable.layer.renderer;
                }

                for (let i = 0; i < arrayItemSelected.length; i++) {
                    let objectid = arrayItemSelected[i];
                    if (!this.objectIdSaveColor.find(f => f === objectid)) this.objectIdSaveColor.push(objectid);
                    const symbol = this.createSymbol(activeTable.layer.geometryType, event);
                    const uniqueColor = {
                        label: objectid,
                        value: objectid,
                        symbol: symbol
                    };
                    let indexFound = null;
                    for (let j = 0; j < this.uniqueValuesInfosSave[activeTable.layer.uid].length; j++) {
                        let uniqueFound = this.uniqueValuesInfosSave[activeTable.layer.uid][j].value;
                        if (uniqueFound === objectid) {
                            indexFound = j;
                            break;
                        }
                    }
                    if (indexFound) {
                        this.uniqueValuesInfosSave[activeTable.layer.uid][indexFound] = uniqueColor;
                    } else {
                        this.uniqueValuesInfosSave[activeTable.layer.uid].push(uniqueColor);
                    }
                    let query = new Query()
                    query.where = "OBJECTID=" + objectid
                    query.outFields = ['*']
                    let result
                    try {
                        await activeTable.layer.queryFeatures(query).then((results) => {
                            result = results.features
                        }, (err) => {
                            console.log(err)
                        })
                    } catch (e) {
                        result = []
                    }

                    let cella = result[0].attributes.CELLA

                    let obj = {
                        objectid: objectid,
                        color: symbol.color,
                        cella: cella,
                        uid: activeTable.layer.uid
                    }
                    let bool = true
                    for (let it = 0; it < this.colorObjects.length; it++) {
                        if (this.colorObjects[it].objectid === objectid) {
                            bool = false;
                            this.colorObjects[it].color = symbol.color;
                        }
                    }
                    if (bool)
                        this.colorObjects.push(obj)

                }
                this.setState({
                    colorObjects: this.colorObjects,
                    controlbool: !this.state.controlbool
                })

                activeTable.layer.renderer = {
                    type: "unique-value",
                    field: activeTable.layer.objectIdField,
                    uniqueValueInfos: this.uniqueValuesInfosSave[activeTable.layer.uid]
                };

                this.activeLabel(activeTable.layer)
            }
        }
    }

    optionColorCleanSelected(cleanHighLightIds = true) {
        const activeTable = this.getActiveTable()[0];
        this.objectIdSaveColor = [];
        if (activeTable) {
            if (this.saveOldRenderer[activeTable.layer.uid]) {
                delete this.uniqueValuesInfosSave[activeTable.layer.uid];
                activeTable.layer.renderer = this.saveOldRenderer[activeTable.layer.uid];
                delete this.saveOldRenderer[activeTable.layer.uid];
                if (activeTable.layer.labelingInfo?.length) {
                    activeTable.layer.labelsVisible = false;
                }
                /*if(cleanHighLightIds){
                    this.state.jimuMapView.view.graphics.removeAll();
                    activeTable.highlightIds.removeAll();
                }*/
                let ind = this.colorObjects.length
                while (ind--) {
                    if (this.colorObjects[ind].uid === activeTable.layer.uid) {
                        this.colorObjects.splice(ind, 1);
                    }
                }
                this.setState({
                    colorObjects: this.colorObjects,
                    controlbool: !this.state.controlbool
                });
                activeTable.highlightIds.removeAll();
                this.state.jimuMapView.view.graphics.removeAll();
            }
        }
    }

    seeColoredItems(elem) {
        console.log(elem)
        let feature = this.state.featureTable
        // feature.selectRows(elem.objectid)
        feature.highlightIds.push(elem.objectid);
        feature.highlightIds.on("change", (event) => {
            console.log("features selected", event.added);
            console.log("features deselected", event.removed);
        });
    }

    render() {
        let buttonFilter = this.setButtonFilter();
        let buttonColors = this.setButtonColors();
        return (
            <div className="widget-attribute-table jimu-widget">
                {this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
                    <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]}
                                          onActiveViewChange={this.activeViewChangeHandler}/>
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
                                        {this.props.config.downloadKMZ && (<DropdownItem onClick={() => {
                                            this.optionClickDownload("KMZ")
                                        }}>
                                            <ExportOutlined className="mr-2"/> Esporta Selezione in KMZ
                                        </DropdownItem>)}

                                        {this.props.config.downloadECGI && (<DropdownItem onClick={() => {
                                            this.optionClickDownload("eCGI_CSV")
                                        }}>
                                            <ExportOutlined className="mr-2"/> Esporta Colonna eCGI in CSV
                                        </DropdownItem>)}
                                        {this.props.config.downloadCGI && (<DropdownItem onClick={() => {
                                            this.optionClickDownload("CGI_CSV")
                                        }}>
                                            <ExportOutlined className="mr-2"/> Esporta Colonna CGI in CSV
                                        </DropdownItem>)}
                                        <DropdownItem onClick={() => {
                                            this.optionClickDownload("CSV_TABLE")
                                        }}>
                                            <ExportOutlined className="mr-2"/> Esporta CSV tabella selezionata
                                        </DropdownItem>
                                        <DropdownItem onClick={() => {
                                            this.optionClickDownload("ALL_TABLE")
                                        }}>
                                            <ExportOutlined className="mr-2"/> Esporta CSV tutte le tabelle
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                <Dropdown direction="down">
                                    <DropdownButton>
                                        <ColorsOutlined className="mr-2"/> Colore evidenziazione
                                    </DropdownButton>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => {
                                            this.optionColorRandom()
                                        }}>
                                            <ClearSelectionOutlined className="mr-2"/> Colore casuale
                                        </DropdownItem>
                                        <button
                                            className="jimu-dropdown-item app-root-emotion-cache-ltr-1vl5tzn dropdown-item">
                                            <BrushOutlined className="mr-2"/> <ColorPicker
                                            id="colorPickerAttributeTable" className="color-picker-block mr-2"
                                            onChange={(e) => {
                                                this.optionColorFound(e)
                                            }} color={this.state.actualColor} placement="top"/> Scegli il colore
                                        </button>
                                        <DropdownItem onClick={() => {
                                            this.optionColorCleanSelected()
                                        }}>
                                            <ClearOutlined className="mr-2"/> Cancella le evidenziazioni
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                {buttonColors}
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
                        {this.tabs.map(f => f.el)}
                    </Tabs>
                }
            </div>
        )
    }
}
