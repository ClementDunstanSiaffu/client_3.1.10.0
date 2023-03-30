System.register(["jimu-core","jimu-ui","esri/layers/GraphicsLayer","esri/geometry/geometryEngine","jimu-arcgis","calcite-components","esri/Graphic","esri/widgets/Search","esri/widgets/Sketch","esri/geometry/coordinateFormatter","esri/geometry/support/webMercatorUtils","esri/layers/FeatureLayer"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Sketch__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_calcite_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Sketch__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_calcite_components__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Sketch__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-core/lib/set-public-path.ts":
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;


/***/ }),

/***/ "./your-extensions/widgets/indirizzi_new/src/helper/helper.ts":
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi_new/src/helper/helper.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var _runtime_widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../runtime/widget */ "./your-extensions/widgets/indirizzi_new/src/runtime/widget.tsx");


class Helper {
    constructor() {
        this.getServiceName = (serviceUrl, serviceKey) => {
            let serviceName = serviceKey;
            const stringArray = serviceUrl.split("/");
            const serviceIndex = stringArray.indexOf("services");
            if (serviceIndex !== -1) {
                if (stringArray[serviceIndex + 1]) {
                    serviceName = stringArray[serviceIndex + 1];
                }
            }
            return serviceName;
        };
        this.queryFeatureService = (url) => {
            // const queryObject = new Query();
            // queryObject.returnGeometry = true;
            // queryObject.where = "1=1"
            // const results = await query.executeQueryJSON(url, queryObject);
            try {
                const layer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__["default"]({ url: url });
                return layer;
            }
            catch (err) {
                return null;
            }
        };
        this.getSelectedLayerFromSearch = (results) => {
            const selectedIds = [];
            if (results.length > 0) {
                for (let i = 0; i < results.length; i++) {
                    const innerResults = results[i];
                    if (innerResults.length) {
                        for (let j = 0; j < innerResults.length; j++) {
                            const layer = innerResults[j].layer;
                            const object = { featureServer: layer.url, id: layer.layerId };
                            _runtime_widget__WEBPACK_IMPORTED_MODULE_1__["default"].layers.push({ url: layer.url, layer: layer });
                            const index = selectedIds.findIndex((item) => item.id === layer.layerId && item.featureServer === layer.url);
                            if (index === -1) {
                                selectedIds.push(object);
                            }
                        }
                    }
                }
            }
            return selectedIds;
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Helper());


/***/ }),

/***/ "./your-extensions/widgets/indirizzi_new/src/runtime/widget.tsx":
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi_new/src/runtime/widget.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/geometry/geometryEngine */ "esri/geometry/geometryEngine");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var calcite_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! calcite-components */ "calcite-components");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_widgets_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/widgets/Search */ "esri/widgets/Search");
/* harmony import */ var esri_widgets_Sketch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/widgets/Sketch */ "esri/widgets/Sketch");
/* harmony import */ var esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/geometry/coordinateFormatter */ "esri/geometry/coordinateFormatter");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper/helper */ "./your-extensions/widgets/indirizzi_new/src/helper/helper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */












class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.graphicLayerFound = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({ id: "indirizzi-found-sketch", listMode: "hide", visible: true });
        this.graphicLayerSelected = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({ id: "indirizzi-selected-sketch", listMode: "hide", visible: true });
        this.symbolFound = {
            type: "simple-fill",
            color: [51, 51, 204, 0.5],
            style: "solid",
            outline: {
                style: "short-dash",
                color: "white",
                width: 3
            }
        };
        this.getActiveView = () => Widget.activeView;
        this.getAllCheckedLayers = () => Widget.allCheckedLayers;
        this.state = {
            jimuMapView: null,
            labelVisible: true,
            viewSelectDraw: true,
            formExtraUrbano: {
            //TODO
            },
            //COORD
            long_e_1: 12,
            long_e_2: 62,
            long_e_3: 86,
            lat_e_1: 41,
            lat_e_2: 80,
            lat_e_3: 66,
            arrayLayer: [],
            valueBufferAddress: 0,
            valueBufferCoord: 0,
            geometry: null,
            typeSelected: null,
            listServices: [],
            selectedCount: 0,
            searchedLayers: []
        };
        this.arrayView = Object.assign([], this.props.config.listvalues);
        this._viewLabels = this._viewLabels.bind(this);
        this._viewSelectDraw = this._viewSelectDraw.bind(this);
        this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);
        this.saveState = this.saveState.bind(this);
        this.onChangeTabs = this.onChangeTabs.bind(this);
        this.onChangeSliderAddress = this.onChangeSliderAddress.bind(this);
        this.onChangeSliderCoord = this.onChangeSliderCoord.bind(this);
        this.onChangeSelectTypeGeometry = this.onChangeSelectTypeGeometry.bind(this);
        this.onChangeFileCsvCoordinate = this.onChangeFileCsvCoordinate.bind(this);
        this.onChangeSelectLayer = this.onChangeSelectLayer.bind(this);
        this.onClickResearchfromAddress = this.onClickResearchfromAddress.bind(this);
        this.onClickResearchfromCoord = this.onClickResearchfromCoord.bind(this);
        this.getAllCheckedLayers = this.getAllCheckedLayers.bind(this);
    }
    activeViewChangeHandler(jmv) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            let arraySup = [];
            this.arrayView.forEach((el, index) => {
                arraySup.push({
                    label: el.name,
                    value: el
                });
            });
            const sketch = new esri_widgets_Sketch__WEBPACK_IMPORTED_MODULE_8__["default"]({
                layer: this.graphicLayerFound,
                view: jmv.view,
                creationMode: "single",
                container: "sketch-widget-address",
                availableCreateTools: ["polygon", "rectangle", "circle", "point"],
                visibleElements: {
                    selectionTools: {
                        "lasso-selection": false
                    },
                    settingsMenu: false
                }
            });
            sketch.on("create", (event) => {
                jmv.view.graphics.removeAll();
                this.graphicLayerFound.removeAll();
                if (event.state === "complete") {
                    const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        geometry: event.graphic.geometry,
                        symbol: this.symbolFound
                    });
                    this.graphicLayerFound.add(polygonGraphic);
                }
            });
            const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_7__["default"]({
                view: jmv.view,
                container: "search-widget-address" //TODO migliorare senza id cablato
            });
            searchWidget.on("select-result", (event) => {
                if (event && event.result && event.result.feature) {
                    jmv.view.graphics.removeAll();
                    this.graphicLayerFound.removeAll();
                    //@ts-ignore
                    const geometryBuffer = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(event.result.feature.geometry, 1000, "meters");
                    // const geometryBuffer: Polygon = geometryEngine.buffer( event.result.feature.geometry, 1, "meters");
                    const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
                        geometry: geometryBuffer,
                        symbol: this.symbolFound
                    });
                    jmv.selectFeaturesByGraphic(polygonGraphic, "contains").then((results) => {
                        const searchedLayers = _helper_helper__WEBPACK_IMPORTED_MODULE_11__["default"].getSelectedLayerFromSearch(results);
                        this.setState({ searchedLayers: searchedLayers });
                    });
                    this.graphicLayerFound.add(polygonGraphic);
                }
            });
            searchWidget.on("search-clear", (event) => {
                this.graphicLayerFound.removeAll();
            });
            Widget.activeView = jmv;
            this.setState({
                arrayLayer: arraySup,
                jimuMapView: jmv,
                searchWidget: searchWidget,
                sketchWidget: sketch
            });
        }
    }
    onChangeTabs() {
        this.graphicLayerFound.removeAll();
        this.graphicLayerSelected.removeAll();
    }
    _viewLabels() {
        this.setState({
            labelVisible: !this.state.labelVisible
        });
    }
    _viewSelectDraw() {
        this.setState({
            viewSelectDraw: !this.state.viewSelectDraw
        });
        this.graphicLayerFound.visible = this.state.viewSelectDraw;
    }
    //ExtraUrbano
    onChangeExtraUrbano(e, type) {
        if (type == "indirizzo") {
            this.state.formExtraUrbano.indirizzo = e.target.value;
            this.setState(this.state);
        }
        else {
            this.state.formExtraUrbano.km = e.target.value;
            this.setState(this.state);
        }
    }
    saveState(key, e) {
        const stateNew = {};
        stateNew[key] = e.target ? e.target.value : e;
        this.setState(stateNew);
    }
    onChangeSelectLayer(e, n, s) {
        const arrayId = n.listIds.split(",");
        for (let i = 0; i < arrayId.length; i++) {
            const id = arrayId[i];
            const url = n.link.slice(-1) !== "/" ? n.link + "/" + id : n.link + id;
            if (e.target.checked) {
                this.state.listServices.push(url);
            }
            else {
                let index = this.state.listServices.indexOf(url);
                if (index > -1) {
                    this.state.listServices.splice(index, 1);
                }
            }
        }
        this.setState(this.state);
    }
    onChangeSelectTypeGeometry(e) {
        // @ts-ignore
        this.state.typeSelected = e.target.value;
        this.setState(this.state);
    }
    csvToArray(str, delimiter = ",") {
        const headers = str.slice(0, str.indexOf("\n")).slice(0, str.indexOf("\r")).split(delimiter);
        const rows = str.slice(str.indexOf("\n") + 1).split("\n");
        return rows.map(function (row) {
            const values = row.split(delimiter);
            return headers.reduce(function (object, header, index) {
                object[header] = values[index];
                return object;
            }, {});
        });
    }
    onChangeFileCsvCoordinate(e) {
        return __awaiter(this, void 0, void 0, function* () {
            yield esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__["default"].load();
        });
    }
    onChangeSliderAddress(e) {
        this.setState({
            valueBufferAddress: parseInt(isNaN(e) ? e.target.value : e)
        });
    }
    onChangeSliderCoord(e) {
        this.setState({
            valueBufferCoord: parseInt(isNaN(e) ? e.target.value : e)
        });
    }
    onClickResearchfromAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.jimuMapView.view.map.tables.removeAll();
            //parametri form
            let arrayGeometry = [];
            const urls = [];
            const listServices = this.state.listServices;
            if (listServices.length) {
                listServices.forEach((el, index) => {
                    const currentUrl = el.substr(0, el.length - 3);
                    if (urls.length) {
                        if (!urls.includes(currentUrl)) {
                            urls.push(currentUrl);
                        }
                    }
                    else {
                        urls.push(currentUrl);
                    }
                });
            }
            //TODO PRENDERE GEOMETRIA
            this.graphicLayerFound.graphics.forEach(g => {
                const searchedLayers = this.state.searchedLayers;
                if (searchedLayers.length && urls.length) {
                    searchedLayers.forEach((el) => {
                        if (urls.includes(el.featureServer)) {
                            const layer = this.arrayView.find((item) => item.link === el.featureServer);
                            const layersIds = layer ? layer.listIds : [];
                            if (layersIds.length && layersIds.includes(el.id)) {
                                let checkedLayers = null;
                                if (Widget.layers.length) {
                                    checkedLayers = Widget.layers.find((layer) => layer.url === el.featureServer);
                                }
                                if (checkedLayers) {
                                    Widget.allCheckedLayers.push(checkedLayers);
                                }
                                // @ts-ignore
                                g.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(g.geometry, this.state.valueBufferAddress, "meters");
                                arrayGeometry.push(g.geometry);
                            }
                        }
                    });
                }
                // // @ts-ignore
                // g.geometry = geometryEngine.buffer(g.geometry, this.state.valueBufferAddress, "meters");
                // arrayGeometry.push(g.geometry);
            });
            //controllo errori
            let arrayErrors = [];
            if (arrayGeometry.length) { // @ts-ignore
                this.state.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].union(arrayGeometry);
            }
            else
                arrayErrors.push("Seleziona una geometria in mappa");
            if (!this.state.listServices.length)
                arrayErrors.push("Seleziona almeno un servizio");
            if (!this.state.typeSelected)
                arrayErrors.push("Seleziona una tipologia di selezione");
            this.setState({
                errorMessage: arrayErrors.join()
            });
            if (arrayErrors.length === 0 && this.props.config.idWidgetTable !== "") {
                // TODO Qui rende visibile la corrispondenza dell'indice trovato ma adesso bisogna farla sul layer inserito nel config
                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                    var _a;
                    if (f && f.type === "feature" && this.state.listServices.indexOf(index) !== -1) {
                        if ((_a = f.labelingInfo) === null || _a === void 0 ? void 0 : _a.length) {
                            console.log(f);
                            f.labelingInfo[0].symbol.font.family = "Arial"; //fix font verdana not in static esri
                            f.labelsVisible = this.state.labelVisible;
                        }
                    }
                });
                console.log(this.state.geometry.toJSON());
                //mando layerid ad TableList
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "layerOpen", {
                    listServiceUrl: true,
                    typeSelected: this.state.typeSelected,
                    geometry: this.state.geometry.toJSON(),
                    listServices: this.state.listServices,
                }));
            }
        });
    }
    onClickResearchfromCoord() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.jimuMapView.view.map.tables.removeAll();
            let long = this.state.long_e_1 + "." + this.state.long_e_2 + this.state.long_e_3 + "*";
            let lat = this.state.lat_e_1 + "." + this.state.lat_e_2 + this.state.lat_e_3 + "*";
            yield esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__["default"].load();
            let pointGeographic = esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_9__["default"].fromLatitudeLongitude(lat + "|" + long);
            let point = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_10__["default"].geographicToWebMercator(pointGeographic);
            this.state.jimuMapView.view.goTo(point);
            let geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(point, 1, "meters");
            const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
                //@ts-ignore
                geometry: geometry,
                symbol: this.symbolFound
            });
            this.graphicLayerFound.add(polygonGraphic);
            let arrayGeometry = [];
            //TODO PRENDERE GEOMETRIA
            this.graphicLayerFound.graphics.forEach(g => {
                // @ts-ignore
                g.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(g.geometry, this.state.valueBufferCoord, "meters");
                arrayGeometry.push(g.geometry);
            });
            //controllo errori
            let arrayErrors = [];
            if (arrayGeometry.length) { // @ts-ignore
                this.state.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].union(arrayGeometry);
            }
            else
                arrayErrors.push("Seleziona una geometria in mappa");
            if (!this.state.listServices.length)
                arrayErrors.push("Seleziona almeno un servizio");
            if (!this.state.typeSelected)
                arrayErrors.push("Seleziona una tipologia di selezione");
            this.setState({
                errorMessage: arrayErrors.join()
            });
            if (arrayErrors.length === 0 && this.props.config.idWidgetTable !== "") {
                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                    var _a;
                    if (f && f.type === "feature" && this.state.listServices.indexOf(index) !== -1) {
                        if ((_a = f.labelingInfo) === null || _a === void 0 ? void 0 : _a.length) {
                            f.labelingInfo[0].symbol.font.family = "Arial"; //fix font verdana not in static esri
                            f.labelsVisible = this.state.labelVisible;
                        }
                    }
                });
                //mando layerid ad TableList
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.props.config.idWidgetTable, "layerOpen", {
                    listServiceUrl: true,
                    typeSelected: this.state.typeSelected,
                    geometry: this.state.geometry.toJSON(),
                    listServices: this.state.listServices
                }));
            }
        });
    }
    render() {
        var _a;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-address jimu-widget  container-fluid", style: { overflow: "auto" } },
            this.props.hasOwnProperty('useMapWidgetIds') && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_4__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-3 mb-1" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { centric: true, check: true },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { className: "mr-2", "aria-label": "Visualizza disegno selezione", checked: this.graphicLayerFound.visible, onChange: this._viewSelectDraw }),
                        "Visualizza disegno selezione"))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-3 mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { centric: true, check: true },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { className: "mr-2", "aria-label": "Visualizza disegno selezione", checked: this.state.labelVisible, onChange: this._viewLabels }),
                        "Visualizza etichette"))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, { defaultValue: "tab-1", onChange: this.onChangeTabs, type: "tabs" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "search-advanced-tab-Urbano", className: " p-1", title: "Urbano" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null, "Ricerca per indirizzo"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "search-widget-address", className: "w-100" }))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordion, { className: "mt-4 mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Seleziona layers da interrogare" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { items: this.state.arrayLayer, onClickItem: this.onChangeSelectLayer, placeholder: "Lista servizi" })))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Opzione di ricerca" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Valore di buffer ",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferAddress, value: this.state.valueBufferAddress, onChange: this.onChangeSliderAddress, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferAddress, defaultValue: this.state.valueBufferAddress, max: 5000, min: 0, onChange: this.onChangeSliderAddress, step: 1 }))),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Tipo di selezione",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { className: "w-100 mt-2", onChange: this.onChangeSelectTypeGeometry, placeholder: "Selezione tipo..." },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "intersects", selected: "selected" }, "Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "contains" }, "Contains"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "crosses" }, "Crosses"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "envelope-intersects" }, "Envelope Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "index-intersects" }, "Index Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "Overlaps" }, "Overlaps"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "touches" }, "Touches"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "within" }, "Within"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "relation" }, "Relation"))))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "w-100", onClick: this.onClickResearchfromAddress }, "Ricerca nei layer"),
                        this.state.errorMessage && this.state.errorMessage !== "" ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: "basic", open: true, text: this.state.errorMessage, type: "warning", className: "mt-2 w-100", withIcon: true })) : (""))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "search-advanced-tab-Coord", className: "d-flex flex-column p-1", title: "Coordinate" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-2 mb-1" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12 mb-2" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-25" }, "Long. (X):"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('long_e_1', e), value: this.state.long_e_1, className: "d-inline-block w-25" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('long_e_2', e), value: this.state.long_e_2, className: "d-inline-block w-25" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('long_e_3', e), value: this.state.long_e_3, className: "d-inline-block w-25" }))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-1" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-25" }, "Lat. (Y):"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('lat_e_1', e), value: this.state.lat_e_1, className: "d-inline-block w-25" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('lat_e_2', e), value: this.state.lat_e_2, className: "d-inline-block w-25" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { onChange: (e) => this.saveState('lat_e_3', e), value: this.state.lat_e_3, className: "d-inline-block w-25" })))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordion, { className: "mt-4 mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Seleziona layers da interrogare" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { items: this.state.arrayLayer, onClickItem: this.onChangeSelectLayer, placeholder: "Lista servizi" })))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Opzione di ricerca" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Valore di buffer ",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferCoord, value: this.state.valueBufferCoord, onChange: this.onChangeSliderCoord, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferCoord, defaultValue: this.state.valueBufferCoord, max: 5000, min: 0, onChange: this.onChangeSliderCoord, step: 1 }))),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Tipo di selezione",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { className: "w-100 mt-2", onChange: this.onChangeSelectTypeGeometry, placeholder: "Selezione tipo..." },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "intersects", selected: "selected" }, "Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "contains" }, "Contains"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "crosses" }, "Crosses"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "envelope-intersects" }, "Envelope Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "index-intersects" }, "Index Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "Overlaps" }, "Overlaps"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "touches" }, "Touches"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "within" }, "Within"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "relation" }, "Relation"))))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "w-100", onClick: this.onClickResearchfromCoord }, "Ricerca nei layer"),
                        this.state.errorMessage && this.state.errorMessage !== "" ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: "basic", open: true, text: this.state.errorMessage, type: "warning", className: "mt-2 w-100", withIcon: true })) : (""))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "search-advanced-tab-Coord-file", className: "d-flex flex-column p-1", title: "Multicoordinate da file" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100 form-label" }, "Aggiungi un file CSV"),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: "form-control", type: "file", onChange: this.onChangeFileCsvCoordinate }),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-2 form-text" }, "Il file deve essere formattato con tre campi ID,Y,X. (Esempio: Punto_1,38.72323056,16.49598056)"))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordion, { className: "mt-4 mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Seleziona layers da interrogare" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { items: this.state.arrayLayer, onClickItem: this.onChangeSelectLayer, placeholder: "Lista servizi" })))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Opzione di ricerca" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Valore di buffer ",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferCoord, value: this.state.valueBufferCoord, onChange: this.onChangeSliderCoord, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferCoord, defaultValue: this.state.valueBufferCoord, max: 5000, min: 0, onChange: this.onChangeSliderCoord, step: 1 }))),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            "Tipo di selezione",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { className: "w-100 mt-2", onChange: this.onChangeSelectTypeGeometry, placeholder: "Selezione tipo..." },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "intersects", selected: "selected" }, "Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "contains" }, "Contains"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "crosses" }, "Crosses"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "envelope-intersects" }, "Envelope Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "index-intersects" }, "Index Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "Overlaps" }, "Overlaps"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "touches" }, "Touches"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "within" }, "Within"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "relation" }, "Relation"))))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "w-100", onClick: this.onClickResearchfromCoord }, "Ricerca nei layer"),
                        this.state.errorMessage && this.state.errorMessage !== "" ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: "basic", open: true, text: this.state.errorMessage, type: "warning", className: "mt-2 w-100", withIcon: true })) : (""))))));
    }
}
Widget.activeView = null;
Widget.allCheckedLayers = [];
Widget.layers = [];


/***/ }),

/***/ "calcite-components":
/*!*************************************!*\
  !*** external "calcite-components" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_calcite_components__;

/***/ }),

/***/ "esri/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ }),

/***/ "esri/geometry/coordinateFormatter":
/*!****************************************************!*\
  !*** external "esri/geometry/coordinateFormatter" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_coordinateFormatter__;

/***/ }),

/***/ "esri/geometry/geometryEngine":
/*!***********************************************!*\
  !*** external "esri/geometry/geometryEngine" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__;

/***/ }),

/***/ "esri/geometry/support/webMercatorUtils":
/*!*********************************************************!*\
  !*** external "esri/geometry/support/webMercatorUtils" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_support_webMercatorUtils__;

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ }),

/***/ "esri/layers/GraphicsLayer":
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/widgets/Search":
/*!**************************************!*\
  !*** external "esri/widgets/Search" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__;

/***/ }),

/***/ "esri/widgets/Sketch":
/*!**************************************!*\
  !*** external "esri/widgets/Sketch" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Sketch__;

/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./jimu-core/lib/set-public-path.ts");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./your-extensions/widgets/indirizzi_new/src/runtime/widget.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmRpcml6emlfbmV3L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZDO0FBQ2I7QUFHdkMsTUFBTSxNQUFNO0lBQVo7UUFFSSxtQkFBYyxHQUFHLENBQUMsVUFBaUIsRUFBQyxVQUFpQixFQUFDLEVBQUU7WUFDcEQsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBQzdCLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRCxJQUFJLFlBQVksS0FBSyxDQUFDLENBQUMsRUFBQztnQkFDcEIsSUFBSSxXQUFXLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxFQUFDO29CQUM1QixXQUFXLEdBQUcsV0FBVyxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7YUFDSjtZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCx3QkFBbUIsR0FBRyxDQUFDLEdBQVUsRUFBQyxFQUFFO1lBQ2hDLG1DQUFtQztZQUNuQyxxQ0FBcUM7WUFDckMsNEJBQTRCO1lBQzVCLGtFQUFrRTtZQUNsRSxJQUFHO2dCQUNDLE1BQU0sS0FBSyxHQUFHLElBQUksZ0VBQVksQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLEtBQUs7YUFDZjtZQUNELE9BQU0sR0FBRyxFQUFDO2dCQUNOLE9BQU8sSUFB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dEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aV9uZXcvc3JjL2hlbHBlci9oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aV9uZXcvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2Nvb3JkaW5hdGVGb3JtYXR0ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9Ta2V0Y2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJcclxuXHJcbmltcG9ydCBRdWVyeSBmcm9tIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIjtcclxuaW1wb3J0IHF1ZXJ5IGZyb20gJ2VzcmkvcmVzdC9xdWVyeSc7XHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi9ydW50aW1lL3dpZGdldFwiO1xyXG5cclxuXHJcbmNsYXNzIEhlbHBlciB7XHJcblxyXG4gICAgZ2V0U2VydmljZU5hbWUgPSAoc2VydmljZVVybDpzdHJpbmcsc2VydmljZUtleTpzdHJpbmcpPT57XHJcbiAgICAgICAgbGV0IHNlcnZpY2VOYW1lID0gc2VydmljZUtleTtcclxuICAgICAgICBjb25zdCBzdHJpbmdBcnJheSA9IHNlcnZpY2VVcmwuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2VJbmRleCA9IHN0cmluZ0FycmF5LmluZGV4T2YoXCJzZXJ2aWNlc1wiKTtcclxuICAgICAgICBpZiAoc2VydmljZUluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgIGlmIChzdHJpbmdBcnJheVtzZXJ2aWNlSW5kZXgrMV0pe1xyXG4gICAgICAgICAgICAgICAgc2VydmljZU5hbWUgPSBzdHJpbmdBcnJheVtzZXJ2aWNlSW5kZXgrMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VOYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXJ5RmVhdHVyZVNlcnZpY2UgPSAodXJsOnN0cmluZyk9PntcclxuICAgICAgICAvLyBjb25zdCBxdWVyeU9iamVjdCA9IG5ldyBRdWVyeSgpO1xyXG4gICAgICAgIC8vIHF1ZXJ5T2JqZWN0LnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcclxuICAgICAgICAvLyBxdWVyeU9iamVjdC53aGVyZSA9IFwiMT0xXCJcclxuICAgICAgICAvLyBjb25zdCByZXN1bHRzID0gYXdhaXQgcXVlcnkuZXhlY3V0ZVF1ZXJ5SlNPTih1cmwsIHF1ZXJ5T2JqZWN0KTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7dXJsOnVybH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkTGF5ZXJGcm9tU2VhcmNoID0gKHJlc3VsdHM6YW55W10pPT57XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBbXTtcclxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9MDtpIDwgcmVzdWx0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyUmVzdWx0cyA9IHJlc3VsdHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5uZXJSZXN1bHRzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7aiA8IGlubmVyUmVzdWx0cy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBpbm5lclJlc3VsdHNbal0ubGF5ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IHtmZWF0dXJlU2VydmVyOmxheWVyLnVybCxpZDpsYXllci5sYXllcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaWRnZXQubGF5ZXJzLnB1c2goe3VybDpsYXllci51cmwsbGF5ZXI6bGF5ZXJ9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZElkcy5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09PSBsYXllci5sYXllcklkICYmIGl0ZW0uZmVhdHVyZVNlcnZlciA9PT0gbGF5ZXIudXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZElkcy5wdXNoKG9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSWRzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVscGVyKCk7IiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7QWxsV2lkZ2V0UHJvcHMsIGFwcEFjdGlvbnMsIGpzeCwgUmVhY3R9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtJTUNvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge0FsZXJ0LCBCdXR0b24sIENoZWNrYm94LCBMYWJlbCwgTXVsdGlTZWxlY3QsIE51bWVyaWNJbnB1dCwgT3B0aW9uLCBTZWxlY3QsIFNsaWRlciwgVGFiLCBUYWJzfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiO1xyXG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIjtcclxuaW1wb3J0IHtKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnR9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQge0NhbGNpdGVBY2NvcmRpb24sIENhbGNpdGVBY2NvcmRpb25JdGVtfSBmcm9tIFwiY2FsY2l0ZS1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIjtcclxuaW1wb3J0IFNrZXRjaCBmcm9tIFwiZXNyaS93aWRnZXRzL1NrZXRjaFwiO1xyXG5pbXBvcnQgY29vcmRpbmF0ZUZvcm1hdHRlciBmcm9tIFwiZXNyaS9nZW9tZXRyeS9jb29yZGluYXRlRm9ybWF0dGVyXCI7XHJcbmltcG9ydCB3ZWJNZXJjYXRvclV0aWxzIGZyb20gXCJlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiO1xyXG5pbXBvcnQge0xpc3RWYWx1ZX0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sIGFueT4ge1xyXG5cclxuICAgIHN0YXRpYyBhY3RpdmVWaWV3ID0gbnVsbDtcclxuICAgIHN0YXRpYyBhbGxDaGVja2VkTGF5ZXJzID0gW107XHJcbiAgICBzdGF0aWMgbGF5ZXJzID0gW11cclxuXHJcbiAgICBncmFwaGljTGF5ZXJGb3VuZCA9IG5ldyBHcmFwaGljc0xheWVyKHtpZDpcImluZGlyaXp6aS1mb3VuZC1za2V0Y2hcIixsaXN0TW9kZTpcImhpZGVcIix2aXNpYmxlOnRydWV9KTtcclxuICAgIGdyYXBoaWNMYXllclNlbGVjdGVkID0gbmV3IEdyYXBoaWNzTGF5ZXIoe2lkOlwiaW5kaXJpenppLXNlbGVjdGVkLXNrZXRjaFwiLGxpc3RNb2RlOlwiaGlkZVwiLHZpc2libGU6dHJ1ZX0pO1xyXG4gICAgc3ltYm9sRm91bmQgPSB7XHJcbiAgICAgICAgdHlwZTogXCJzaW1wbGUtZmlsbFwiLFxyXG4gICAgICAgIGNvbG9yOiBbNTEsIDUxLCAyMDQsIDAuNV0sXHJcbiAgICAgICAgc3R5bGU6IFwic29saWRcIixcclxuICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcInNob3J0LWRhc2hcIixcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgd2lkdGg6IDNcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGFycmF5VmlldzpMaXN0VmFsdWVbXTtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBqaW11TWFwVmlldzogbnVsbCxcclxuICAgICAgICAgIGxhYmVsVmlzaWJsZTp0cnVlLFxyXG4gICAgICAgICAgdmlld1NlbGVjdERyYXc6IHRydWUsXHJcblxyXG4gICAgICAgICAgZm9ybUV4dHJhVXJiYW5vOntcclxuICAgICAgICAgICAgICAvL1RPRE9cclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgLy9DT09SRFxyXG4gICAgICAgICAgbG9uZ19lXzE6MTIsXHJcbiAgICAgICAgICBsb25nX2VfMjo2MixcclxuICAgICAgICAgIGxvbmdfZV8zOjg2LFxyXG4gICAgICAgICAgbGF0X2VfMTo0MSxcclxuICAgICAgICAgIGxhdF9lXzI6ODAsXHJcbiAgICAgICAgICBsYXRfZV8zOjY2LFxyXG5cclxuICAgICAgICAgIGFycmF5TGF5ZXI6IFtdLFxyXG4gICAgICAgICAgdmFsdWVCdWZmZXJBZGRyZXNzOiAwLFxyXG4gICAgICAgICAgdmFsdWVCdWZmZXJDb29yZDogMCxcclxuICAgICAgICAgIGdlb21ldHJ5Om51bGwsXHJcbiAgICAgICAgICB0eXBlU2VsZWN0ZWQ6bnVsbCxcclxuICAgICAgICAgIGxpc3RTZXJ2aWNlczogW10sXHJcbiAgICAgICAgICBzZWxlY3RlZENvdW50OiAwLFxyXG4gICAgICAgICAgc2VhcmNoZWRMYXllcnM6W11cclxuICAgICAgfTtcclxuICAgICAgdGhpcy5hcnJheVZpZXcgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzKVxyXG4gICAgICB0aGlzLl92aWV3TGFiZWxzID0gdGhpcy5fdmlld0xhYmVscy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLl92aWV3U2VsZWN0RHJhdyA9IHRoaXMuX3ZpZXdTZWxlY3REcmF3LmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuc2F2ZVN0YXRlID0gdGhpcy5zYXZlU3RhdGUuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVRhYnMgPSB0aGlzLm9uQ2hhbmdlVGFicy5iaW5kKHRoaXMpXHJcblxyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzcyA9IHRoaXMub25DaGFuZ2VTbGlkZXJBZGRyZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VTbGlkZXJDb29yZCA9IHRoaXMub25DaGFuZ2VTbGlkZXJDb29yZC5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5ID0gdGhpcy5vbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGUgPSB0aGlzLm9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGUuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyID0gdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUFkZHJlc3MgPSB0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkID0gdGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmQuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzLmJpbmQodGhpcyk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIFxyXG4gICAgZ2V0QWN0aXZlVmlldyA9ICgpPT5XaWRnZXQuYWN0aXZlVmlldztcclxuXHJcbiAgICBnZXRBbGxDaGVja2VkTGF5ZXJzID0oKT0+V2lkZ2V0LmFsbENoZWNrZWRMYXllcnM7XHJcblxyXG4gICAgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgKGptdjogSmltdU1hcFZpZXcpIHtcclxuICAgICAgICBpZiAoam12KSB7XHJcbiAgICAgICAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJGb3VuZCk7XHJcbiAgICAgICAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXJyYXlTdXAgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5hcnJheVZpZXcuZm9yRWFjaCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVN1cC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDplbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmVsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNrZXRjaCA9IG5ldyBTa2V0Y2goe1xyXG4gICAgICAgICAgICAgICAgbGF5ZXI6IHRoaXMuZ3JhcGhpY0xheWVyRm91bmQsXHJcbiAgICAgICAgICAgICAgICB2aWV3OiBqbXYudmlldyxcclxuICAgICAgICAgICAgICAgIGNyZWF0aW9uTW9kZTpcInNpbmdsZVwiLFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcInNrZXRjaC13aWRnZXQtYWRkcmVzc1wiLC8vVE9ETyBtaWdsaW9yYXJlIHNlbnphIGlkIGNhYmxhdG9cclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZUNyZWF0ZVRvb2xzOltcInBvbHlnb25cIiwgXCJyZWN0YW5nbGVcIiwgXCJjaXJjbGVcIixcInBvaW50XCJdLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZUVsZW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uVG9vbHM6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhc3NvLXNlbGVjdGlvblwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3NNZW51OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNrZXRjaC5vbihcImNyZWF0ZVwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICBqbXYudmlldy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQucmVtb3ZlQWxsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IGV2ZW50LmdyYXBoaWMuZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2xGb3VuZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmFkZChwb2x5Z29uR3JhcGhpYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XHJcbiAgICAgICAgICAgICAgICB2aWV3OiBqbXYudmlldyxcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJzZWFyY2gtd2lkZ2V0LWFkZHJlc3NcIi8vVE9ETyBtaWdsaW9yYXJlIHNlbnphIGlkIGNhYmxhdG9cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWxlY3QtcmVzdWx0XCIsIChldmVudCk9PntcclxuICAgICAgICAgICAgICAgIGlmKGV2ZW50ICYmIGV2ZW50LnJlc3VsdCAmJiBldmVudC5yZXN1bHQuZmVhdHVyZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnlCdWZmZXI6IFBvbHlnb24gPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoIGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5LCAxMDAwLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBnZW9tZXRyeUJ1ZmZlcjogUG9seWdvbiA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlciggZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksIDEsIFwibWV0ZXJzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5QnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sRm91bmRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgam12LnNlbGVjdEZlYXR1cmVzQnlHcmFwaGljKHBvbHlnb25HcmFwaGljLFwiY29udGFpbnNcIikudGhlbigocmVzdWx0cyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRMYXllcnMgPSBoZWxwZXIuZ2V0U2VsZWN0ZWRMYXllckZyb21TZWFyY2gocmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaGVkTGF5ZXJzOnNlYXJjaGVkTGF5ZXJzfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmFkZChwb2x5Z29uR3JhcGhpYyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlYXJjaC1jbGVhclwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFdpZGdldC5hY3RpdmVWaWV3ID0gam12O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhcnJheUxheWVyOiBhcnJheVN1cCxcclxuICAgICAgICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXYsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQ6c2VhcmNoV2lkZ2V0LFxyXG4gICAgICAgICAgICAgICAgc2tldGNoV2lkZ2V0OnNrZXRjaFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VUYWJzKCl7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllclNlbGVjdGVkLnJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG4gICAgX3ZpZXdMYWJlbHMoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGFiZWxWaXNpYmxlOiAhdGhpcy5zdGF0ZS5sYWJlbFZpc2libGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfdmlld1NlbGVjdERyYXcoKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmlld1NlbGVjdERyYXc6ICF0aGlzLnN0YXRlLnZpZXdTZWxlY3REcmF3XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC52aXNpYmxlID0gdGhpcy5zdGF0ZS52aWV3U2VsZWN0RHJhdztcclxuICAgIH1cclxuXHJcbiAgICAvL0V4dHJhVXJiYW5vXHJcbiAgICBvbkNoYW5nZUV4dHJhVXJiYW5vKGUsdHlwZSl7XHJcbiAgICAgIGlmKHR5cGU9PVwiaW5kaXJpenpvXCIpe1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtRXh0cmFVcmJhbm8uaW5kaXJpenpvID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmZvcm1FeHRyYVVyYmFuby5rbSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNhdmVTdGF0ZShrZXksZSl7XHJcbiAgICAgICAgY29uc3Qgc3RhdGVOZXcgPSB7fVxyXG4gICAgICAgIHN0YXRlTmV3W2tleV0gPSBlLnRhcmdldCA/IGUudGFyZ2V0LnZhbHVlOiBlO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlTmV3KTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlU2VsZWN0TGF5ZXIgKGUsbixzKXtcclxuICAgICAgICBjb25zdCBhcnJheUlkID0gbi5saXN0SWRzLnNwbGl0KFwiLFwiKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxhcnJheUlkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGFycmF5SWRbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IG4ubGluay5zbGljZSgtMSkgIT09IFwiL1wiID8gbi5saW5rICsgXCIvXCIgKyBpZCA6IG4ubGluayArIGlkO1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLnB1c2godXJsKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5pbmRleE9mKHVybCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5KGUpe1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3N2VG9BcnJheShzdHIsIGRlbGltaXRlciA9IFwiLFwiKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHN0ci5zbGljZSgwLCBzdHIuaW5kZXhPZihcIlxcblwiKSkuc2xpY2UoMCwgc3RyLmluZGV4T2YoXCJcXHJcIikpLnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IHN0ci5zbGljZShzdHIuaW5kZXhPZihcIlxcblwiKSArIDEpLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIHJldHVybiByb3dzLm1hcChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHJvdy5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5yZWR1Y2UoZnVuY3Rpb24gKG9iamVjdCwgaGVhZGVyLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0W2hlYWRlcl0gPSB2YWx1ZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGUoZSl7XHJcbiAgICAgICAgYXdhaXQgY29vcmRpbmF0ZUZvcm1hdHRlci5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VTbGlkZXJBZGRyZXNzKGUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZUJ1ZmZlckFkZHJlc3M6IHBhcnNlSW50KGlzTmFOKGUpID8gZS50YXJnZXQudmFsdWU6IGUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVNsaWRlckNvb3JkKGUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZUJ1ZmZlckNvb3JkOiBwYXJzZUludChpc05hTihlKSA/IGUudGFyZ2V0LnZhbHVlOiBlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgb25DbGlja1Jlc2VhcmNoZnJvbUFkZHJlc3MoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnRhYmxlcy5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICAgICAgLy9wYXJhbWV0cmkgZm9ybVxyXG4gICAgICAgIGxldCBhcnJheUdlb21ldHJ5ID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHVybHMgPSBbXTtcclxuICAgICAgICBjb25zdCBsaXN0U2VydmljZXMgPSB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcztcclxuICAgICAgICBpZiAobGlzdFNlcnZpY2VzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGxpc3RTZXJ2aWNlcy5mb3JFYWNoKChlbCxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBlbC5zdWJzdHIoMCxlbC5sZW5ndGgtMyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJscy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF1cmxzLmluY2x1ZGVzKGN1cnJlbnRVcmwpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJscy5wdXNoKGN1cnJlbnRVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHVybHMucHVzaChjdXJyZW50VXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL1RPRE8gUFJFTkRFUkUgR0VPTUVUUklBXHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5ncmFwaGljcy5mb3JFYWNoKGc9PntcclxuICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRMYXllcnMgPSB0aGlzLnN0YXRlLnNlYXJjaGVkTGF5ZXJzO1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoZWRMYXllcnMubGVuZ3RoICYmIHVybHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHNlYXJjaGVkTGF5ZXJzLmZvckVhY2goKGVsOntmZWF0dXJlU2VydmVyOnN0cmluZyxpZDpzdHJpbmd9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybHMuaW5jbHVkZXMoZWwuZmVhdHVyZVNlcnZlcikpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXllciA9IHRoaXMuYXJyYXlWaWV3LmZpbmQoKGl0ZW0pPT5pdGVtLmxpbmsgPT09IGVsLmZlYXR1cmVTZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXllcnNJZHMgPSBsYXllciA/IGxheWVyLmxpc3RJZHMgOiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyc0lkcy5sZW5ndGggJiYgbGF5ZXJzSWRzLmluY2x1ZGVzKGVsLmlkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZExheWVycyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoV2lkZ2V0LmxheWVycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnMgPSBXaWRnZXQubGF5ZXJzLmZpbmQoKGxheWVyKT0+bGF5ZXIudXJsID09PSBlbC5mZWF0dXJlU2VydmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMYXllcnMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpZGdldC5hbGxDaGVja2VkTGF5ZXJzLnB1c2goY2hlY2tlZExheWVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGcuZ2VvbWV0cnksIHRoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChnLmdlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgLy8gZy5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihnLmdlb21ldHJ5LCB0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzcywgXCJtZXRlcnNcIik7XHJcbiAgICAgICAgICAgIC8vIGFycmF5R2VvbWV0cnkucHVzaChnLmdlb21ldHJ5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2NvbnRyb2xsbyBlcnJvcmlcclxuICAgICAgICBsZXQgYXJyYXlFcnJvcnMgPSBbXTtcclxuICAgICAgICBpZihhcnJheUdlb21ldHJ5Lmxlbmd0aCkgeyAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZ2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIHVuYSBnZW9tZXRyaWEgaW4gbWFwcGFcIik7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmxlbmd0aCkgYXJyYXlFcnJvcnMucHVzaChcIlNlbGV6aW9uYSBhbG1lbm8gdW4gc2Vydml6aW9cIik7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUudHlwZVNlbGVjdGVkKSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIHVuYSB0aXBvbG9naWEgZGkgc2VsZXppb25lXCIpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOmFycmF5RXJyb3JzLmpvaW4oKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihhcnJheUVycm9ycy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5jb25maWcuaWRXaWRnZXRUYWJsZSAhPT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPIFF1aSByZW5kZSB2aXNpYmlsZSBsYSBjb3JyaXNwb25kZW56YSBkZWxsJ2luZGljZSB0cm92YXRvIG1hIGFkZXNzbyBiaXNvZ25hIGZhcmxhIHN1bCBsYXllciBpbnNlcml0byBuZWwgY29uZmlnXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgIGlmKGYgJiYgZi50eXBlPT09XCJmZWF0dXJlXCIgJiYgdGhpcy5zdGF0ZS5saXN0U2VydmljZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihmLmxhYmVsaW5nSW5mbz8ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZilcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbGluZ0luZm9bMF0uc3ltYm9sLmZvbnQuZmFtaWx5ID0gXCJBcmlhbFwiOy8vZml4IGZvbnQgdmVyZGFuYSBub3QgaW4gc3RhdGljIGVzcmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbHNWaXNpYmxlID0gdGhpcy5zdGF0ZS5sYWJlbFZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5nZW9tZXRyeS50b0pTT04oKSlcclxuICAgICAgICAgICAgLy9tYW5kbyBsYXllcmlkIGFkIFRhYmxlTGlzdFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGF5ZXJPcGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0U2VydmljZVVybDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6dGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OnRoaXMuc3RhdGUuZ2VvbWV0cnkudG9KU09OKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTZXJ2aWNlczp0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC50YWJsZXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgbGV0IGxvbmcgPSB0aGlzLnN0YXRlLmxvbmdfZV8xICsgXCIuXCIgKyB0aGlzLnN0YXRlLmxvbmdfZV8yICsgdGhpcy5zdGF0ZS5sb25nX2VfMyArIFwiKlwiO1xyXG4gICAgICAgIGxldCBsYXQgPSB0aGlzLnN0YXRlLmxhdF9lXzEgKyBcIi5cIiArIHRoaXMuc3RhdGUubGF0X2VfMiArIHRoaXMuc3RhdGUubGF0X2VfMyArIFwiKlwiO1xyXG5cclxuICAgICAgICBhd2FpdCBjb29yZGluYXRlRm9ybWF0dGVyLmxvYWQoKTtcclxuICAgICAgICBsZXQgcG9pbnRHZW9ncmFwaGljID0gY29vcmRpbmF0ZUZvcm1hdHRlci5mcm9tTGF0aXR1ZGVMb25naXR1ZGUobGF0ICsgXCJ8XCIgKyBsb25nKTtcclxuICAgICAgICBsZXQgcG9pbnQgPSB3ZWJNZXJjYXRvclV0aWxzLmdlb2dyYXBoaWNUb1dlYk1lcmNhdG9yKHBvaW50R2VvZ3JhcGhpYyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHBvaW50KTtcclxuXHJcbiAgICAgICAgbGV0IGdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKHBvaW50LCAxLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGdlb21ldHJ5OiBnZW9tZXRyeSxcclxuICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbEZvdW5kXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmFkZChwb2x5Z29uR3JhcGhpYyk7XHJcblxyXG4gICAgICAgIGxldCBhcnJheUdlb21ldHJ5ID0gW107XHJcbiAgICAgICAgLy9UT0RPIFBSRU5ERVJFIEdFT01FVFJJQVxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuZ3JhcGhpY3MuZm9yRWFjaChnPT57XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgZy5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihnLmdlb21ldHJ5LCB0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmQsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2goZy5nZW9tZXRyeSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vY29udHJvbGxvIGVycm9yaVxyXG4gICAgICAgIGxldCBhcnJheUVycm9ycyA9IFtdO1xyXG4gICAgICAgIGlmKGFycmF5R2VvbWV0cnkubGVuZ3RoKSB7IC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIGdlb21ldHJpYSBpbiBtYXBwYVwiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RoKSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIGFsbWVubyB1biBzZXJ2aXppb1wiKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIHRpcG9sb2dpYSBkaSBzZWxlemlvbmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6YXJyYXlFcnJvcnMuam9pbigpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGFycmF5RXJyb3JzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLmNvbmZpZy5pZFdpZGdldFRhYmxlICE9PSBcIlwiKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgIGlmKGYgJiYgZi50eXBlPT09XCJmZWF0dXJlXCIgJiYgdGhpcy5zdGF0ZS5saXN0U2VydmljZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihmLmxhYmVsaW5nSW5mbz8ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbGluZ0luZm9bMF0uc3ltYm9sLmZvbnQuZmFtaWx5ID0gXCJBcmlhbFwiOy8vZml4IGZvbnQgdmVyZGFuYSBub3QgaW4gc3RhdGljIGVzcmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbHNWaXNpYmxlID0gdGhpcy5zdGF0ZS5sYWJlbFZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9tYW5kbyBsYXllcmlkIGFkIFRhYmxlTGlzdFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuaWRXaWRnZXRUYWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBcImxheWVyT3BlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFNlcnZpY2VVcmw6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNlbGVjdGVkOnRoaXMuc3RhdGUudHlwZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTp0aGlzLnN0YXRlLmdlb21ldHJ5LnRvSlNPTigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0U2VydmljZXM6dGhpcy5zdGF0ZS5saXN0U2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYWRkcmVzcyBqaW11LXdpZGdldCAgY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3tvdmVyZmxvdzpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndXNlTWFwV2lkZ2V0SWRzJykgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0gJiYgKFxyXG4gICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2VudHJpYyBjaGVjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cIm1yLTJcIiBhcmlhLWxhYmVsPVwiVmlzdWFsaXp6YSBkaXNlZ25vIHNlbGV6aW9uZVwiIGNoZWNrZWQ9e3RoaXMuZ3JhcGhpY0xheWVyRm91bmQudmlzaWJsZX0gb25DaGFuZ2U9e3RoaXMuX3ZpZXdTZWxlY3REcmF3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgZGlzZWdubyBzZWxlemlvbmVcclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNlbnRyaWMgY2hlY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJtci0yXCIgYXJpYS1sYWJlbD1cIlZpc3VhbGl6emEgZGlzZWdubyBzZWxlemlvbmVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZX0gb25DaGFuZ2U9e3RoaXMuX3ZpZXdMYWJlbHN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBldGljaGV0dGVcclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwidGFiLTFcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUYWJzfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRhYnNcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1VcmJhbm9cIiBjbGFzc05hbWU9XCIgcC0xXCIgdGl0bGU9XCJVcmJhbm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJpY2VyY2EgcGVyIGluZGlyaXp6bzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC13aWRnZXQtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInctMTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uIGNsYXNzTmFtZT1cIm10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJTZWxlemlvbmEgbGF5ZXJzIGRhIGludGVycm9nYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaXN0YSBzZXJ2aXppXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiT3B6aW9uZSBkaSByaWNlcmNhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxvcmUgZGkgYnVmZmVyIDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc30gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckFkZHJlc3N9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17NTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvIGRpIHNlbGV6aW9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy0xMDAgbXQtMlwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5fSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uZSB0aXBvLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQWRkcmVzc30+UmljZXJjYSBuZWkgbGF5ZXI8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgey8qPFRhYiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItRXh0cmF1cmJhbm9cIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gcC0xXCIgdGl0bGU9XCJFeHRyYXVyYmFub1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTIgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNVwiPkluZGlyaXp6bzo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy03NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZGlyaXp6b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjVcIj5LbTo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy03NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkttXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+Ki99XHJcbiAgICAgICAgICAgICAgICA8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1Db29yZFwiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBwLTFcIiB0aXRsZT1cIkNvb3JkaW5hdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTIgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvbmcuIChYKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsb25nX2VfMScsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxvbmdfZV8xfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xvbmdfZV8yJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubG9uZ19lXzJ9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbG9uZ19lXzMnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sb25nX2VfM30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXQuIChZKTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsYXRfZV8xJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubGF0X2VfMX0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsYXRfZV8yJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubGF0X2VfMn0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsYXRfZV8zJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubGF0X2VfM30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb24gY2xhc3NOYW1lPVwibXQtNCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT1cIlNlbGV6aW9uYSBsYXllcnMgZGEgaW50ZXJyb2dhcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmFycmF5TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0l0ZW09e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpc3RhIHNlcnZpemlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJPcHppb25lIGRpIHJpY2VyY2FcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZhbG9yZSBkaSBidWZmZXIgPE51bWVyaWNJbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTbGlkZXJDb29yZH0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy01MFwiLz4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezUwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTbGlkZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcG8gZGkgc2VsZXppb25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LTEwMCBtdC0yXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnl9IHBsYWNlaG9sZGVyPVwiU2VsZXppb25lIHRpcG8uLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImludGVyc2VjdHNcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+SW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY29udGFpbnNcIj5Db250YWluczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY3Jvc3Nlc1wiPkNyb3NzZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVudmVsb3BlLWludGVyc2VjdHNcIj5FbnZlbG9wZSBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbmRleC1pbnRlcnNlY3RzXCI+SW5kZXggSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT3ZlcmxhcHNcIj5PdmVybGFwczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidG91Y2hlc1wiPlRvdWNoZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIndpdGhpblwiPldpdGhpbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicmVsYXRpb25cIj5SZWxhdGlvbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwidy0xMDBcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21Db29yZH0+UmljZXJjYSBuZWkgbGF5ZXI8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUNvb3JkLWZpbGVcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gcC0xXCIgdGl0bGU9XCJNdWx0aWNvb3JkaW5hdGUgZGEgZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMCBmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZ2l1bmdpIHVuIGZpbGUgQ1NWXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VGaWxlQ3N2Q29vcmRpbmF0ZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZm9ybS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElsIGZpbGUgZGV2ZSBlc3NlcmUgZm9ybWF0dGF0byBjb24gdHJlIGNhbXBpIElELFksWC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEVzZW1waW86IFB1bnRvXzEsMzguNzIzMjMwNTYsMTYuNDk1OTgwNTYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uIGNsYXNzTmFtZT1cIm10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJTZWxlemlvbmEgbGF5ZXJzIGRhIGludGVycm9nYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaXN0YSBzZXJ2aXppXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiT3B6aW9uZSBkaSByaWNlcmNhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWYWxvcmUgZGkgYnVmZmVyIDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvIGRpIHNlbGV6aW9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy0xMDAgbXQtMlwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5fSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uZSB0aXBvLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmR9PlJpY2VyY2EgbmVpIGxheWVyPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYWxjaXRlX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfY29vcmRpbmF0ZUZvcm1hdHRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfc3VwcG9ydF93ZWJNZXJjYXRvclV0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX1NrZXRjaF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW5kaXJpenppX25ldy9zcmMvcnVudGltZS93aWRnZXQudHN4XCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9