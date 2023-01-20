System.register(["jimu-core","jimu-ui","esri/layers/GraphicsLayer","esri/geometry/geometryEngine","jimu-arcgis","calcite-components","esri/Graphic","esri/widgets/Search","esri/geometry/coordinateFormatter","esri/geometry/support/webMercatorUtils","esri/layers/FeatureLayer"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_calcite_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__ = {};
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

/***/ "./your-extensions/widgets/indirizzi/src/helper/helper.ts":
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi/src/helper/helper.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");

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
                            selectedIds.push(object);
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

/***/ "./your-extensions/widgets/indirizzi/src/runtime/translations/default.ts":
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi/src/runtime/translations/default.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: "Indirizzi",
    viewDrawingSelection: "Visualizza disegno selezione",
    viewLabels: "Visualizza etichette",
    searchByAddress: "Ricerca per indirizzo",
    selectLayerQuery: "Seleziona layers da interrogare",
    selectedLayers: "Layer selezionati",
    listServices: "Lista servizi",
    researchOption: "Opzione di ricerca",
    bufferValue: "Valore di buffer",
    typeOfSelection: "Tipo di selezione",
    typeSelection: "Selezione tipo...",
    searchInLayers: "Ricerca nei layer",
    selectService: "Seleziona almeno un servizio",
    selectSelection: "Seleziona una tipologia di selezione",
    layerOnAddress: "I livelli controllati non sono stati trovati all'indirizzo cercato",
    addCsvFile: "Aggiungi un file CSV",
    formattedXYZ: "Il file deve essere formattato con tre campi ID,Y,X.",
    example: "Esempio",
    selectGeometryAlert: "Seleziona una geometria in mappa"
});


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************************************************!*\
  !*** ./your-extensions/widgets/indirizzi/src/runtime/widget.tsx ***!
  \******************************************************************/
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
/* harmony import */ var esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/geometry/coordinateFormatter */ "esri/geometry/coordinateFormatter");
/* harmony import */ var esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! esri/geometry/support/webMercatorUtils */ "esri/geometry/support/webMercatorUtils");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper/helper */ "./your-extensions/widgets/indirizzi/src/helper/helper.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/indirizzi/src/runtime/translations/default.ts");
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
        this.nls = (id) => {
            return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_12__["default"][id] }) : id;
        };
        this.getActiveView = () => Widget.activeView;
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
            layersIds: [],
            searchedLayers: []
        };
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
    getAllCheckedLayers() {
        const activeView = Widget.activeView;
        let allCheckedLayers = [];
        if (activeView) {
            const allLayers = activeView.view.map.allLayers.items;
            const layersIds = this.state.layersIds;
            const listServices = this.state.listServices;
            if (layersIds.length) {
                for (let i = 0; i < layersIds.length; i++) {
                    const currentLayerIds = layersIds[i];
                    const serviceKey = currentLayerIds.serviceKey;
                    if (listServices.includes(serviceKey)) {
                        const layerIds = currentLayerIds.layerIds;
                        for (let j = 0; j < allLayers.length; j++) {
                            const currentLayer = allLayers[i];
                            if (layerIds.includes(currentLayer.id)) {
                                allCheckedLayers.push(currentLayer);
                            }
                        }
                    }
                }
            }
        }
        return allCheckedLayers;
    }
    getFeatureLayer() {
        const featureUrl = this.props.config.services.service_1.url;
        return new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_10__["default"]({ url: featureUrl, outFields: ["*"] });
    }
    activeViewChangeHandler(jmv) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            Widget.activeView = jmv;
            let arraySup = [];
            let layersIds = [];
            const services = this.props.config.services;
            const serviceItems = Object.keys(services);
            serviceItems.forEach((key) => {
                arraySup.push({
                    label: services[key].title,
                    value: key
                });
            });
            const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_7__["default"]({
                view: jmv.view,
                resultGraphicEnabled: true,
                container: "search-widget-address" //TODO migliorare senza id cablato
            });
            searchWidget.on("select-result", (event) => {
                if (event && event.result && event.result.feature) {
                    jmv.view.graphics.removeAll();
                    this.graphicLayerFound.removeAll();
                    //@ts-ignore
                    const geometryBuffer = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(event.result.feature.geometry, 1000, "meters");
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
            this.setState({
                arrayLayer: arraySup,
                jimuMapView: jmv,
                searchWidget: searchWidget,
                layersIds: layersIds
                // sketchWidget:sketch
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
        return __awaiter(this, void 0, void 0, function* () {
            if (e.target.checked) {
                const copiedListServices = [...this.state.listServices, n];
                this.setState({ listServices: copiedListServices });
            }
            else {
                let index = this.state.listServices.indexOf(n);
                if (index > -1) {
                    const copiedListServices = [...this.state.listServices];
                    copiedListServices.splice(index, 1);
                    this.setState({ listServices: copiedListServices });
                }
            }
        });
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
            yield esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_8__["default"].load();
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
            let configErrors = [];
            //TODO PRENDERE GEOMETRIA
            this.graphicLayerFound.graphics.forEach(g => {
                const services = this.props.config.services;
                const serviceKeys = Object.keys(services);
                if (serviceKeys.length) {
                    for (let i = 0; i < serviceKeys.length; i++) {
                        const currentService = services[serviceKeys[i]];
                        const searchedLayers = this.state.searchedLayers;
                        if (searchedLayers.length) {
                            const item = searchedLayers.find((item) => {
                                if (item.featureServer === currentService.url &&
                                    currentService.layerListIds.includes(item.id)) {
                                    return item;
                                }
                            });
                            if (Boolean(item)) {
                                //@ts-ignore
                                g.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(g.geometry, this.state.valueBufferAddress, "meters");
                                arrayGeometry.push(g.geometry);
                            }
                        }
                    }
                }
            });
            //controllo errori
            let arrayErrors = [];
            if (arrayGeometry.length) { // @ts-ignore
                this.state.geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].union(arrayGeometry);
            }
            else
                arrayErrors.push(this.nls("selectGeometryAlert"));
            if (!this.state.listServices.length)
                arrayErrors.push(this.nls("selectService"));
            if (!this.state.typeSelected)
                arrayErrors.push(this.nls("selectSelection"));
            if (!arrayGeometry.length && configErrors.length > 0)
                arrayErrors = configErrors;
            this.setState({ errorMessage: arrayErrors.join() });
            if (arrayErrors.length === 0 && this.props.config.settings.idWidgetTable !== "") {
                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                    var _a;
                    if (f && f.type === "feature" && this.state.listServices.indexOf(index) !== -1) {
                        if ((_a = f.labelingInfo) === null || _a === void 0 ? void 0 : _a.length) {
                            f.labelingInfo[0].symbol.font.family = "Arial"; //fix font verdana not in static esri
                            f.labelsVisible = this.state.labelVisible;
                        }
                    }
                });
                const idWidgetTable = this.props.config.settings.idWidgetTable !== " " ? this.props.config.settings.idWidgetTable : "value";
                //mando layerid ad TableList
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "layerOpen", {
                    typeSelected: this.state.typeSelected,
                    geometry: this.state.geometry.toJSON(),
                    listServices: this.state.listServices,
                    activeView: this.getActiveView,
                    getAllLayers: this.getAllCheckedLayers
                }));
            }
        });
    }
    onClickResearchfromCoord() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state.jimuMapView.view.map.tables.removeAll();
            let long = this.state.long_e_1 + "." + this.state.long_e_2 + this.state.long_e_3 + "*";
            let lat = this.state.lat_e_1 + "." + this.state.lat_e_2 + this.state.lat_e_3 + "*";
            yield esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_8__["default"].load();
            let pointGeographic = esri_geometry_coordinateFormatter__WEBPACK_IMPORTED_MODULE_8__["default"].fromLatitudeLongitude(lat + "|" + long);
            let point = esri_geometry_support_webMercatorUtils__WEBPACK_IMPORTED_MODULE_9__["default"].geographicToWebMercator(pointGeographic);
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
            if (arrayErrors.length === 0 && this.props.config.settings.idWidgetTable !== "") {
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
                this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange(this.props.config.settings.idWidgetTable, "layerOpen", {
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
                        this.nls("viewDrawingSelection")))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-3 mb-3" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { centric: true, check: true },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { className: "mr-2", "aria-label": "Visualizza disegno selezione", checked: this.state.labelVisible, onChange: this._viewLabels }),
                        this.nls("viewLabels")))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tabs, { defaultValue: "tab-1", onChange: this.onChangeTabs, type: "tabs" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "search-advanced-tab-Urbano", className: " p-1", title: "Urbano" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null, this.nls("searchByAddress")),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "search-widget-address", className: "w-100" }))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordion, { className: "mt-4 mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: this.nls("selectLayerQuery") },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                                            this.nls("selectedLayers"),
                                            ": ",
                                            this.state.listServices.length,
                                            " / ",
                                            this.state.arrayLayer.length),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { items: this.state.arrayLayer, onClickItem: this.onChangeSelectLayer, placeholder: this.nls("listServices") })))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: this.nls("researchOption") },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            this.nls("bufferValue"),
                                            " ",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferAddress, value: this.state.valueBufferAddress, onChange: this.onChangeSliderAddress, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferAddress, defaultValue: this.state.valueBufferAddress, max: 5000, min: 0, onChange: this.onChangeSliderAddress, step: 1 }))),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            this.nls("typeOfSelection"),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { className: "w-100 mt-2", onChange: this.onChangeSelectTypeGeometry, placeholder: this.nls("typeSelection") },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "intersects", selected: "selected" }, "Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "contains" }, "Contains"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "crosses" }, "Crosses"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "envelope-intersects" }, "Envelope Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "index-intersects" }, "Index Intersects"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "Overlaps" }, "Overlaps"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "touches" }, "Touches"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "within" }, "Within"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "relation" }, "Relation"))))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "w-100", onClick: this.onClickResearchfromAddress }, this.nls("searchInLayers")),
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
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                                            this.nls("selectedLayers"),
                                            ": ",
                                            this.state.listServices.length,
                                            " / ",
                                            this.state.arrayLayer.length),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { items: this.state.arrayLayer, onClickItem: this.onChangeSelectLayer, placeholder: this.nls("listServices") })))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: this.nls("researchOption") },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            this.nls("bufferValue"),
                                            " ",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferCoord, value: this.state.valueBufferCoord, onChange: this.onChangeSliderCoord, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferCoord, defaultValue: this.state.valueBufferCoord, max: 5000, min: 0, onChange: this.onChangeSliderCoord, step: 1 }))),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            this.nls("typeOfSelection"),
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
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "w-100", onClick: this.onClickResearchfromCoord }, this.nls("searchInLayers")),
                        this.state.errorMessage && this.state.errorMessage !== "" ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: "basic", open: true, text: this.state.errorMessage, type: "warning", className: "mt-2 w-100", withIcon: true })) : (""))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Tab, { id: "search-advanced-tab-Coord-file", className: "d-flex flex-column p-1", title: "Multicoordinate da file" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100 form-label" }, this.nls("addCsvFile")),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: "form-control", type: "file", onChange: this.onChangeFileCsvCoordinate }),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-2 form-text" },
                                    this.nls("formattedXYZ"),
                                    "(",
                                    this.nls("example"),
                                    ": Punto_1,38.72323056,16.49598056)"))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordion, { className: "mt-4 mb-2" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Seleziona layers da interrogare" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                                            this.nls("selectedLayers"),
                                            ": ",
                                            this.state.listServices.length,
                                            " / ",
                                            this.state.arrayLayer.length),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, { items: this.state.arrayLayer, onClickItem: this.onChangeSelectLayer, placeholder: this.nls("listServices") })))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(calcite_components__WEBPACK_IMPORTED_MODULE_5__.CalciteAccordionItem, { "icon-start": "car", itemTitle: "Opzione di ricerca" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "container-fluid mt-3 mb-3" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            this.nls("bufferValue"),
                                            " ",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferCoord, value: this.state.valueBufferCoord, onChange: this.onChangeSliderCoord, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferCoord, defaultValue: this.state.valueBufferCoord, max: 5000, min: 0, onChange: this.onChangeSliderCoord, step: 1 }))),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mb-3" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "w-100" },
                                            this.nls("typeOfSelection"),
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
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { type: "primary", className: "w-100", onClick: this.onClickResearchfromCoord }, this.nls("searchInLayers")),
                        this.state.errorMessage && this.state.errorMessage !== "" ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { form: "basic", open: true, text: this.state.errorMessage, type: "warning", className: "mt-2 w-100", withIcon: true })) : (""))))));
    }
}
Widget.activeView = null;

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmRpcml6emkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdvRDtBQUdwRCxNQUFNLE1BQU07SUFBWjtRQUVJLG1CQUFjLEdBQUcsQ0FBQyxVQUFpQixFQUFDLFVBQWlCLEVBQUMsRUFBRTtZQUNwRCxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDN0IsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUNwQixJQUFJLFdBQVcsQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFDLEVBQUM7b0JBQzVCLFdBQVcsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3QzthQUNKO1lBQ0QsT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVELHdCQUFtQixHQUFHLENBQUMsR0FBVSxFQUFDLEVBQUU7WUFDaEMsbUNBQW1DO1lBQ25DLHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsa0VBQWtFO1lBQ2xFLElBQUc7Z0JBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxnRUFBWSxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sS0FBSzthQUNmO1lBQ0QsT0FBTSxHQUFHLEVBQUM7Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7UUFFRCwrQkFBMEIsR0FBRyxDQUFDLE9BQWEsRUFBQyxFQUFFO1lBQzFDLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLE9B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TSxJQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLHdCQUF3QixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBVTt3QkFFckgsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUN6RCwrQ0FBQywwQ0FBSyxJQUNGLElBQUksRUFBQyxPQUFPLEVBQ1osSUFBSSxRQUNKLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDN0IsSUFBSSxFQUFDLFNBQVMsRUFDZCxTQUFTLEVBQUMsWUFBWSxFQUN0QixRQUFRLFNBQ1YsQ0FDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUNOLENBRUosQ0FDSCxDQUNMLENBRVQ7SUFDSCxDQUFDOztBQTFxQlEsaUJBQVUsR0FBRyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvaW5kaXJpenppL3NyYy9oZWxwZXIvaGVscGVyLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9pbmRpcml6emkvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJjYWxjaXRlLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9jb29yZGluYXRlRm9ybWF0dGVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9pbmRpcml6emkvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBRdWVyeSBmcm9tIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIjtcbmltcG9ydCBxdWVyeSBmcm9tICdlc3JpL3Jlc3QvcXVlcnknO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCI7XG5cblxuY2xhc3MgSGVscGVyIHtcblxuICAgIGdldFNlcnZpY2VOYW1lID0gKHNlcnZpY2VVcmw6c3RyaW5nLHNlcnZpY2VLZXk6c3RyaW5nKT0+e1xuICAgICAgICBsZXQgc2VydmljZU5hbWUgPSBzZXJ2aWNlS2V5O1xuICAgICAgICBjb25zdCBzdHJpbmdBcnJheSA9IHNlcnZpY2VVcmwuc3BsaXQoXCIvXCIpO1xuICAgICAgICBjb25zdCBzZXJ2aWNlSW5kZXggPSBzdHJpbmdBcnJheS5pbmRleE9mKFwic2VydmljZXNcIik7XG4gICAgICAgIGlmIChzZXJ2aWNlSW5kZXggIT09IC0xKXtcbiAgICAgICAgICAgIGlmIChzdHJpbmdBcnJheVtzZXJ2aWNlSW5kZXgrMV0pe1xuICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lID0gc3RyaW5nQXJyYXlbc2VydmljZUluZGV4KzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJ2aWNlTmFtZTtcbiAgICB9XG5cbiAgICBxdWVyeUZlYXR1cmVTZXJ2aWNlID0gKHVybDpzdHJpbmcpPT57XG4gICAgICAgIC8vIGNvbnN0IHF1ZXJ5T2JqZWN0ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICAgIC8vIHF1ZXJ5T2JqZWN0LnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcbiAgICAgICAgLy8gcXVlcnlPYmplY3Qud2hlcmUgPSBcIjE9MVwiXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBxdWVyeS5leGVjdXRlUXVlcnlKU09OKHVybCwgcXVlcnlPYmplY3QpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDp1cmx9KTtcbiAgICAgICAgICAgIHJldHVybiBsYXllclxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlbGVjdGVkTGF5ZXJGcm9tU2VhcmNoID0gKHJlc3VsdHM6YW55W10pPT57XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gW107XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9MDtpIDwgcmVzdWx0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lclJlc3VsdHMgPSByZXN1bHRzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpbm5lclJlc3VsdHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7aiA8IGlubmVyUmVzdWx0cy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyID0gaW5uZXJSZXN1bHRzW2pdLmxheWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge2ZlYXR1cmVTZXJ2ZXI6bGF5ZXIudXJsLGlkOmxheWVyLmxheWVySWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZElkcy5wdXNoKG9iamVjdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRJZHM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVscGVyKCk7IiwiXG5leHBvcnQgZGVmYXVsdCAoe1xuICAgIF93aWRnZXRMYWJlbDpcIkluZGlyaXp6aVwiLFxuICAgIHZpZXdEcmF3aW5nU2VsZWN0aW9uOlwiVmlzdWFsaXp6YSBkaXNlZ25vIHNlbGV6aW9uZVwiLFxuICAgIHZpZXdMYWJlbHM6XCJWaXN1YWxpenphIGV0aWNoZXR0ZVwiLFxuICAgIHNlYXJjaEJ5QWRkcmVzczpcIlJpY2VyY2EgcGVyIGluZGlyaXp6b1wiLFxuICAgIHNlbGVjdExheWVyUXVlcnk6XCJTZWxlemlvbmEgbGF5ZXJzIGRhIGludGVycm9nYXJlXCIsXG4gICAgc2VsZWN0ZWRMYXllcnM6XCJMYXllciBzZWxlemlvbmF0aVwiLFxuICAgIGxpc3RTZXJ2aWNlczpcIkxpc3RhIHNlcnZpemlcIixcbiAgICByZXNlYXJjaE9wdGlvbjpcIk9wemlvbmUgZGkgcmljZXJjYVwiLFxuICAgIGJ1ZmZlclZhbHVlOlwiVmFsb3JlIGRpIGJ1ZmZlclwiLFxuICAgIHR5cGVPZlNlbGVjdGlvbjpcIlRpcG8gZGkgc2VsZXppb25lXCIsXG4gICAgdHlwZVNlbGVjdGlvbjpcIlNlbGV6aW9uZSB0aXBvLi4uXCIsXG4gICAgc2VhcmNoSW5MYXllcnM6XCJSaWNlcmNhIG5laSBsYXllclwiLFxuICAgIHNlbGVjdFNlcnZpY2U6XCJTZWxlemlvbmEgYWxtZW5vIHVuIHNlcnZpemlvXCIsXG4gICAgc2VsZWN0U2VsZWN0aW9uOlwiU2VsZXppb25hIHVuYSB0aXBvbG9naWEgZGkgc2VsZXppb25lXCIsXG4gICAgbGF5ZXJPbkFkZHJlc3M6XCJJIGxpdmVsbGkgY29udHJvbGxhdGkgbm9uIHNvbm8gc3RhdGkgdHJvdmF0aSBhbGwnaW5kaXJpenpvIGNlcmNhdG9cIixcbiAgICBhZGRDc3ZGaWxlOlwiQWdnaXVuZ2kgdW4gZmlsZSBDU1ZcIixcbiAgICBmb3JtYXR0ZWRYWVo6XCJJbCBmaWxlIGRldmUgZXNzZXJlIGZvcm1hdHRhdG8gY29uIHRyZSBjYW1waSBJRCxZLFguXCIsXG4gICAgZXhhbXBsZTpcIkVzZW1waW9cIixcbiAgICBzZWxlY3RHZW9tZXRyeUFsZXJ0OlwiU2VsZXppb25hIHVuYSBnZW9tZXRyaWEgaW4gbWFwcGFcIlxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2FsY2l0ZV9jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2Nvb3JkaW5hdGVGb3JtYXR0ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X3N1cHBvcnRfd2ViTWVyY2F0b3JVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfR3JhcGhpY3NMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfU2VhcmNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7QWxsV2lkZ2V0UHJvcHMsIGFwcEFjdGlvbnMsIGpzeCwgUmVhY3R9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtJTUNvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge0FsZXJ0LCBCdXR0b24sIENoZWNrYm94LCBMYWJlbCwgTXVsdGlTZWxlY3QsIE51bWVyaWNJbnB1dCwgT3B0aW9uLCBTZWxlY3QsIFNsaWRlciwgVGFiLCBUYWJzfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiO1xyXG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIjtcclxuaW1wb3J0IHtKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnR9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQge0NhbGNpdGVBY2NvcmRpb24sIENhbGNpdGVBY2NvcmRpb25JdGVtfSBmcm9tIFwiY2FsY2l0ZS1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIjtcclxuaW1wb3J0IGNvb3JkaW5hdGVGb3JtYXR0ZXIgZnJvbSBcImVzcmkvZ2VvbWV0cnkvY29vcmRpbmF0ZUZvcm1hdHRlclwiO1xyXG5pbXBvcnQgd2ViTWVyY2F0b3JVdGlscyBmcm9tIFwiZXNyaS9nZW9tZXRyeS9zdXBwb3J0L3dlYk1lcmNhdG9yVXRpbHNcIjtcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xyXG5pbXBvcnQgUG9seWdvbiBmcm9tICdlc3JpL2dlb21ldHJ5L1BvbHlnb24nO1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiwgYW55PiB7XHJcblxyXG4gICAgc3RhdGljIGFjdGl2ZVZpZXcgPSBudWxsO1xyXG4gICAgXHJcbiAgICBncmFwaGljTGF5ZXJGb3VuZCA9IG5ldyBHcmFwaGljc0xheWVyKHtpZDpcImluZGlyaXp6aS1mb3VuZC1za2V0Y2hcIixsaXN0TW9kZTpcImhpZGVcIix2aXNpYmxlOnRydWV9KTtcclxuICAgIGdyYXBoaWNMYXllclNlbGVjdGVkID0gbmV3IEdyYXBoaWNzTGF5ZXIoe2lkOlwiaW5kaXJpenppLXNlbGVjdGVkLXNrZXRjaFwiLGxpc3RNb2RlOlwiaGlkZVwiLHZpc2libGU6dHJ1ZX0pO1xyXG5cclxuICAgIHN5bWJvbEZvdW5kID0ge1xyXG4gICAgICAgIHR5cGU6IFwic2ltcGxlLWZpbGxcIixcclxuICAgICAgICBjb2xvcjogWzUxLCA1MSwgMjA0LCAwLjVdLFxyXG4gICAgICAgIHN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICBzdHlsZTogXCJzaG9ydC1kYXNoXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiAzXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBqaW11TWFwVmlldzogbnVsbCxcclxuICAgICAgICAgIGxhYmVsVmlzaWJsZTp0cnVlLFxyXG4gICAgICAgICAgdmlld1NlbGVjdERyYXc6IHRydWUsXHJcblxyXG4gICAgICAgICAgZm9ybUV4dHJhVXJiYW5vOntcclxuICAgICAgICAgICAgICAvL1RPRE9cclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgLy9DT09SRFxyXG4gICAgICAgICAgbG9uZ19lXzE6MTIsXHJcbiAgICAgICAgICBsb25nX2VfMjo2MixcclxuICAgICAgICAgIGxvbmdfZV8zOjg2LFxyXG4gICAgICAgICAgbGF0X2VfMTo0MSxcclxuICAgICAgICAgIGxhdF9lXzI6ODAsXHJcbiAgICAgICAgICBsYXRfZV8zOjY2LFxyXG5cclxuICAgICAgICAgIGFycmF5TGF5ZXI6IFtdLFxyXG4gICAgICAgICAgdmFsdWVCdWZmZXJBZGRyZXNzOiAwLFxyXG4gICAgICAgICAgdmFsdWVCdWZmZXJDb29yZDogMCxcclxuICAgICAgICAgIGdlb21ldHJ5Om51bGwsXHJcbiAgICAgICAgICB0eXBlU2VsZWN0ZWQ6bnVsbCxcclxuICAgICAgICAgIGxpc3RTZXJ2aWNlczogW10sXHJcbiAgICAgICAgICBsYXllcnNJZHM6W10sXHJcbiAgICAgICAgICBzZWFyY2hlZExheWVyczpbXVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5fdmlld0xhYmVscyA9IHRoaXMuX3ZpZXdMYWJlbHMuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5fdmlld1NlbGVjdERyYXcgPSB0aGlzLl92aWV3U2VsZWN0RHJhdy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gdGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnNhdmVTdGF0ZSA9IHRoaXMuc2F2ZVN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VUYWJzID0gdGhpcy5vbkNoYW5nZVRhYnMuYmluZCh0aGlzKVxyXG5cclxuICAgICAgdGhpcy5vbkNoYW5nZVNsaWRlckFkZHJlc3MgPSB0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzcy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmQgPSB0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmQuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeSA9IHRoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnkuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZUZpbGVDc3ZDb29yZGluYXRlID0gdGhpcy5vbkNoYW5nZUZpbGVDc3ZDb29yZGluYXRlLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VTZWxlY3RMYXllciA9IHRoaXMub25DaGFuZ2VTZWxlY3RMYXllci5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzID0gdGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQWRkcmVzcy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21Db29yZCA9IHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmxzID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsID8gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogaWQsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXNbaWRdIH0pIDogaWRcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVWaWV3ID0gKCk9PiBXaWRnZXQuYWN0aXZlVmlldztcclxuXHJcbiAgICBnZXRBbGxDaGVja2VkTGF5ZXJzKCl7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVmlldyA9IFdpZGdldC5hY3RpdmVWaWV3O1xyXG4gICAgICAgIGxldCBhbGxDaGVja2VkTGF5ZXJzID0gW107XHJcbiAgICAgICAgaWYgKGFjdGl2ZVZpZXcpe1xyXG4gICAgICAgICAgICBjb25zdCBhbGxMYXllcnMgPSBhY3RpdmVWaWV3LnZpZXcubWFwLmFsbExheWVycy5pdGVtcztcclxuICAgICAgICAgICAgY29uc3QgbGF5ZXJzSWRzID0gdGhpcy5zdGF0ZS5sYXllcnNJZHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RTZXJ2aWNlcyA9IHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzO1xyXG4gICAgICAgICAgICBpZiAobGF5ZXJzSWRzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgbGF5ZXJzSWRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMYXllcklkcyA9IGxheWVyc0lkc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlS2V5ID0gY3VycmVudExheWVySWRzLnNlcnZpY2VLZXlcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFNlcnZpY2VzLmluY2x1ZGVzKHNlcnZpY2VLZXkpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF5ZXJJZHMgPSBjdXJyZW50TGF5ZXJJZHMubGF5ZXJJZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwO2ogPCBhbGxMYXllcnMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TGF5ZXIgPSBhbGxMYXllcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJJZHMuaW5jbHVkZXMoY3VycmVudExheWVyLmlkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ2hlY2tlZExheWVycy5wdXNoKGN1cnJlbnRMYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENoZWNrZWRMYXllcnM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEZlYXR1cmVMYXllciAoKXtcclxuICAgICAgICBjb25zdCBmZWF0dXJlVXJsID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZXMuc2VydmljZV8xLnVybDtcclxuICAgICAgICByZXR1cm4gbmV3IEZlYXR1cmVMYXllcih7dXJsOmZlYXR1cmVVcmwsb3V0RmllbGRzOiBbXCIqXCJdfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyIChqbXY6IEppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgaWYgKGptdikge1xyXG4gICAgICAgICAgICBqbXYudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY0xheWVyRm91bmQpO1xyXG4gICAgICAgICAgICBqbXYudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY0xheWVyU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBXaWRnZXQuYWN0aXZlVmlldyA9IGptdjtcclxuICAgICAgICAgICAgbGV0IGFycmF5U3VwID0gW107XHJcbiAgICAgICAgICAgIGxldCBsYXllcnNJZHMgPSBbXVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZXMgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlc1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlSXRlbXMgPSBPYmplY3Qua2V5cyhzZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgIHNlcnZpY2VJdGVtcy5mb3JFYWNoKChrZXkpPT57XHJcbiAgICAgICAgICAgICAgICBhcnJheVN1cC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDpzZXJ2aWNlc1trZXldLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmtleVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xyXG4gICAgICAgICAgICAgICAgdmlldzogam12LnZpZXcsXHJcbiAgICAgICAgICAgICAgICByZXN1bHRHcmFwaGljRW5hYmxlZDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcInNlYXJjaC13aWRnZXQtYWRkcmVzc1wiLy9UT0RPIG1pZ2xpb3JhcmUgc2VuemEgaWQgY2FibGF0b1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlbGVjdC1yZXN1bHRcIiwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQgJiYgZXZlbnQucmVzdWx0ICYmIGV2ZW50LnJlc3VsdC5mZWF0dXJlKXtcclxuICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeUJ1ZmZlcjogUG9seWdvbiA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlciggZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksIDEwMDAsIFwibWV0ZXJzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5QnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sRm91bmRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgam12LnNlbGVjdEZlYXR1cmVzQnlHcmFwaGljKHBvbHlnb25HcmFwaGljLFwiY29udGFpbnNcIikudGhlbigocmVzdWx0cyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRMYXllcnMgPSBoZWxwZXIuZ2V0U2VsZWN0ZWRMYXllckZyb21TZWFyY2gocmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaGVkTGF5ZXJzOnNlYXJjaGVkTGF5ZXJzfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmFkZChwb2x5Z29uR3JhcGhpYyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlYXJjaC1jbGVhclwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlMYXllcjogYXJyYXlTdXAsXHJcbiAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12LFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0OnNlYXJjaFdpZGdldCxcclxuICAgICAgICAgICAgICAgIGxheWVyc0lkczpsYXllcnNJZHNcclxuICAgICAgICAgICAgICAgIC8vIHNrZXRjaFdpZGdldDpza2V0Y2hcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlVGFicygpe1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJTZWxlY3RlZC5yZW1vdmVBbGwoKTtcclxuICAgIH1cclxuICAgIF92aWV3TGFiZWxzKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxhYmVsVmlzaWJsZTogIXRoaXMuc3RhdGUubGFiZWxWaXNpYmxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZpZXdTZWxlY3REcmF3KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpZXdTZWxlY3REcmF3OiAhdGhpcy5zdGF0ZS52aWV3U2VsZWN0RHJhd1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQudmlzaWJsZSA9IHRoaXMuc3RhdGUudmlld1NlbGVjdERyYXc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9FeHRyYVVyYmFub1xyXG4gICAgb25DaGFuZ2VFeHRyYVVyYmFubyhlLHR5cGUpe1xyXG4gICAgICBpZih0eXBlPT1cImluZGlyaXp6b1wiKXtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZm9ybUV4dHJhVXJiYW5vLmluZGlyaXp6byA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtRXh0cmFVcmJhbm8ua20gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzYXZlU3RhdGUoa2V5LGUpe1xyXG4gICAgICAgIGNvbnN0IHN0YXRlTmV3ID0ge31cclxuICAgICAgICBzdGF0ZU5ld1trZXldID0gZS50YXJnZXQgPyBlLnRhcmdldC52YWx1ZTogZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZU5ldyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkNoYW5nZVNlbGVjdExheWVyIChlLG4scyl7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcGllZExpc3RTZXJ2aWNlcyA9IFsuLi50aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcyxuXTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdFNlcnZpY2VzOmNvcGllZExpc3RTZXJ2aWNlc30pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmluZGV4T2Yobik7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3BpZWRMaXN0U2VydmljZXMgPSBbLi4udGhpcy5zdGF0ZS5saXN0U2VydmljZXNdO1xyXG4gICAgICAgICAgICAgICAgY29waWVkTGlzdFNlcnZpY2VzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RTZXJ2aWNlczpjb3BpZWRMaXN0U2VydmljZXN9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5KGUpe1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3N2VG9BcnJheShzdHIsIGRlbGltaXRlciA9IFwiLFwiKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHN0ci5zbGljZSgwLCBzdHIuaW5kZXhPZihcIlxcblwiKSkuc2xpY2UoMCwgc3RyLmluZGV4T2YoXCJcXHJcIikpLnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IHN0ci5zbGljZShzdHIuaW5kZXhPZihcIlxcblwiKSArIDEpLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIHJldHVybiByb3dzLm1hcChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHJvdy5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5yZWR1Y2UoZnVuY3Rpb24gKG9iamVjdCwgaGVhZGVyLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0W2hlYWRlcl0gPSB2YWx1ZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGUoZSl7XHJcbiAgICAgICAgYXdhaXQgY29vcmRpbmF0ZUZvcm1hdHRlci5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VTbGlkZXJBZGRyZXNzKGUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZUJ1ZmZlckFkZHJlc3M6IHBhcnNlSW50KGlzTmFOKGUpID8gZS50YXJnZXQudmFsdWU6IGUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVNsaWRlckNvb3JkKGUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZUJ1ZmZlckNvb3JkOiBwYXJzZUludChpc05hTihlKSA/IGUudGFyZ2V0LnZhbHVlOiBlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgb25DbGlja1Jlc2VhcmNoZnJvbUFkZHJlc3MoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnRhYmxlcy5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICAgICAgLy9wYXJhbWV0cmkgZm9ybVxyXG4gICAgICAgIGxldCBhcnJheUdlb21ldHJ5ID0gW107XHJcbiAgICAgICAgbGV0IGNvbmZpZ0Vycm9ycyA9IFtdO1xyXG4gICAgICAgIC8vVE9ETyBQUkVOREVSRSBHRU9NRVRSSUFcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmdyYXBoaWNzLmZvckVhY2goZz0+e1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2VzO1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlS2V5cyA9IE9iamVjdC5rZXlzKHNlcnZpY2VzKTtcclxuICAgICAgICAgICAgaWYgKHNlcnZpY2VLZXlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgc2VydmljZUtleXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNlcnZpY2UgPSBzZXJ2aWNlc1tzZXJ2aWNlS2V5c1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRMYXllcnMgPSB0aGlzLnN0YXRlLnNlYXJjaGVkTGF5ZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hlZExheWVycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc2VhcmNoZWRMYXllcnMuZmluZCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5mZWF0dXJlU2VydmVyID09PSBjdXJyZW50U2VydmljZS51cmwgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZXJ2aWNlLmxheWVyTGlzdElkcy5pbmNsdWRlcyhpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJvb2xlYW4oaXRlbSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGcuZ2VvbWV0cnksIHRoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChnLmdlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2NvbnRyb2xsbyBlcnJvcmlcclxuICAgICAgICBsZXQgYXJyYXlFcnJvcnMgPSBbXTtcclxuICAgICAgICBpZihhcnJheUdlb21ldHJ5Lmxlbmd0aCkgeyAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZ2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBhcnJheUVycm9ycy5wdXNoKHRoaXMubmxzKFwic2VsZWN0R2VvbWV0cnlBbGVydFwiKSk7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmxlbmd0aCkgYXJyYXlFcnJvcnMucHVzaCh0aGlzLm5scyhcInNlbGVjdFNlcnZpY2VcIikpO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCkgYXJyYXlFcnJvcnMucHVzaCh0aGlzLm5scyhcInNlbGVjdFNlbGVjdGlvblwiKSk7XHJcbiAgICAgICAgaWYgKCFhcnJheUdlb21ldHJ5Lmxlbmd0aCAmJiBjb25maWdFcnJvcnMubGVuZ3RoID4gMCkgYXJyYXlFcnJvcnMgPSBjb25maWdFcnJvcnNcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOmFycmF5RXJyb3JzLmpvaW4oKX0pO1xyXG5cclxuICAgICAgICBpZihhcnJheUVycm9ycy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5jb25maWcuc2V0dGluZ3MuaWRXaWRnZXRUYWJsZSAhPT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgICAgICBpZihmICYmIGYudHlwZT09PVwiZmVhdHVyZVwiICYmIHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmluZGV4T2YoaW5kZXgpICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZi5sYWJlbGluZ0luZm8/Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYubGFiZWxpbmdJbmZvWzBdLnN5bWJvbC5mb250LmZhbWlseSA9IFwiQXJpYWxcIjsvL2ZpeCBmb250IHZlcmRhbmEgbm90IGluIHN0YXRpYyBlc3JpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYubGFiZWxzVmlzaWJsZSA9IHRoaXMuc3RhdGUubGFiZWxWaXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkV2lkZ2V0VGFibGUgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXR0aW5ncy5pZFdpZGdldFRhYmxlICE9PSBcIiBcIiA/IHRoaXMucHJvcHMuY29uZmlnLnNldHRpbmdzLmlkV2lkZ2V0VGFibGUgOlwidmFsdWVcIlxyXG4gICAgICAgICAgICAvL21hbmRvIGxheWVyaWQgYWQgVGFibGVMaXN0XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICBhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXllck9wZW5cIixcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVTZWxlY3RlZDp0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6dGhpcy5zdGF0ZS5nZW9tZXRyeS50b0pTT04oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFNlcnZpY2VzOnRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVWaWV3OnRoaXMuZ2V0QWN0aXZlVmlldyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QWxsTGF5ZXJzOnRoaXMuZ2V0QWxsQ2hlY2tlZExheWVyc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmQoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnRhYmxlcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICBsZXQgbG9uZyA9IHRoaXMuc3RhdGUubG9uZ19lXzEgKyBcIi5cIiArIHRoaXMuc3RhdGUubG9uZ19lXzIgKyB0aGlzLnN0YXRlLmxvbmdfZV8zICsgXCIqXCI7XHJcbiAgICAgICAgbGV0IGxhdCA9IHRoaXMuc3RhdGUubGF0X2VfMSArIFwiLlwiICsgdGhpcy5zdGF0ZS5sYXRfZV8yICsgdGhpcy5zdGF0ZS5sYXRfZV8zICsgXCIqXCI7XHJcblxyXG4gICAgICAgIGF3YWl0IGNvb3JkaW5hdGVGb3JtYXR0ZXIubG9hZCgpO1xyXG4gICAgICAgIGxldCBwb2ludEdlb2dyYXBoaWMgPSBjb29yZGluYXRlRm9ybWF0dGVyLmZyb21MYXRpdHVkZUxvbmdpdHVkZShsYXQgKyBcInxcIiArIGxvbmcpO1xyXG4gICAgICAgIGxldCBwb2ludCA9IHdlYk1lcmNhdG9yVXRpbHMuZ2VvZ3JhcGhpY1RvV2ViTWVyY2F0b3IocG9pbnRHZW9ncmFwaGljKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8ocG9pbnQpO1xyXG5cclxuICAgICAgICBsZXQgZ2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIocG9pbnQsIDEsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5LFxyXG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sRm91bmRcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuYWRkKHBvbHlnb25HcmFwaGljKTtcclxuXHJcbiAgICAgICAgbGV0IGFycmF5R2VvbWV0cnkgPSBbXTtcclxuICAgICAgICAvL1RPRE8gUFJFTkRFUkUgR0VPTUVUUklBXHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5ncmFwaGljcy5mb3JFYWNoKGc9PntcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBnLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGcuZ2VvbWV0cnksIHRoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZCwgXCJtZXRlcnNcIik7XHJcbiAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChnLmdlb21ldHJ5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9jb250cm9sbG8gZXJyb3JpXHJcbiAgICAgICAgbGV0IGFycmF5RXJyb3JzID0gW107XHJcbiAgICAgICAgaWYoYXJyYXlHZW9tZXRyeS5sZW5ndGgpIHsgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgYXJyYXlFcnJvcnMucHVzaChcIlNlbGV6aW9uYSB1bmEgZ2VvbWV0cmlhIGluIG1hcHBhXCIpO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5sZW5ndGgpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgYWxtZW5vIHVuIHNlcnZpemlvXCIpO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCkgYXJyYXlFcnJvcnMucHVzaChcIlNlbGV6aW9uYSB1bmEgdGlwb2xvZ2lhIGRpIHNlbGV6aW9uZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTphcnJheUVycm9ycy5qb2luKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoYXJyYXlFcnJvcnMubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMuY29uZmlnLnNldHRpbmdzLmlkV2lkZ2V0VGFibGUgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZiAmJiBmLnR5cGU9PT1cImZlYXR1cmVcIiAmJiB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGYubGFiZWxpbmdJbmZvPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsaW5nSW5mb1swXS5zeW1ib2wuZm9udC5mYW1pbHkgPSBcIkFyaWFsXCI7Ly9maXggZm9udCB2ZXJkYW5hIG5vdCBpbiBzdGF0aWMgZXNyaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsc1Zpc2libGUgPSB0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL21hbmRvIGxheWVyaWQgYWQgVGFibGVMaXN0XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICBhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5zZXR0aW5ncy5pZFdpZGdldFRhYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGF5ZXJPcGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6dGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OnRoaXMuc3RhdGUuZ2VvbWV0cnkudG9KU09OKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTZXJ2aWNlczp0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRyZXNzIGppbXUtd2lkZ2V0ICBjb250YWluZXItZmx1aWRcIiBzdHlsZT17e292ZXJmbG93OlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJiB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJiB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19IG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjZW50cmljIGNoZWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwibXItMlwiIGFyaWEtbGFiZWw9XCJWaXN1YWxpenphIGRpc2Vnbm8gc2VsZXppb25lXCIgY2hlY2tlZD17dGhpcy5ncmFwaGljTGF5ZXJGb3VuZC52aXNpYmxlfSBvbkNoYW5nZT17dGhpcy5fdmlld1NlbGVjdERyYXd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwidmlld0RyYXdpbmdTZWxlY3Rpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjZW50cmljIGNoZWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwibXItMlwiIGFyaWEtbGFiZWw9XCJWaXN1YWxpenphIGRpc2Vnbm8gc2VsZXppb25lXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5sYWJlbFZpc2libGV9IG9uQ2hhbmdlPXt0aGlzLl92aWV3TGFiZWxzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcInZpZXdMYWJlbHNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cInRhYi0xXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVGFic31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0YWJzXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItVXJiYW5vXCIgY2xhc3NOYW1lPVwiIHAtMVwiIHRpdGxlPVwiVXJiYW5vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGhpcy5ubHMoXCJzZWFyY2hCeUFkZHJlc3NcIil9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLXdpZGdldC1hZGRyZXNzXCIgY2xhc3NOYW1lPVwidy0xMDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb24gY2xhc3NOYW1lPVwibXQtNCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT17dGhpcy5ubHMoXCJzZWxlY3RMYXllclF1ZXJ5XCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGhpcy5ubHMoXCJzZWxlY3RlZExheWVyc1wiKX06IHt0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5sZW5ndGh9IC8ge3RoaXMuc3RhdGUuYXJyYXlMYXllci5sZW5ndGh9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmFycmF5TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0l0ZW09e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5ubHMoXCJsaXN0U2VydmljZXNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT17dGhpcy5ubHMoXCJyZXNlYXJjaE9wdGlvblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJidWZmZXJWYWx1ZVwiKX0gPE51bWVyaWNJbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy01MFwiLz4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcInR5cGVPZlNlbGVjdGlvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cInctMTAwIG10LTJcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeX0gcGxhY2Vob2xkZXI9e3RoaXMubmxzKFwidHlwZVNlbGVjdGlvblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQWRkcmVzc30+e3RoaXMubmxzKFwic2VhcmNoSW5MYXllcnNcIil9PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIHsvKjxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUV4dHJhdXJiYW5vXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHAtMVwiIHRpdGxlPVwiRXh0cmF1cmJhbm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjVcIj5JbmRpcml6em86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmRpcml6em9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI1XCI+S206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiPiovfVxyXG4gICAgICAgICAgICAgICAgPFRhYiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItQ29vcmRcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gcC0xXCIgdGl0bGU9XCJDb29yZGluYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb25nLiAoWCk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbG9uZ19lXzEnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sb25nX2VfMX0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsb25nX2VfMicsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxvbmdfZV8yfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xvbmdfZV8zJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubG9uZ19lXzN9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0yNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF0LiAoWSk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbGF0X2VfMScsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxhdF9lXzF9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbGF0X2VfMicsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxhdF9lXzJ9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbGF0X2VfMycsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxhdF9lXzN9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uIGNsYXNzTmFtZT1cIm10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJTZWxlemlvbmEgbGF5ZXJzIGRhIGludGVycm9nYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMubmxzKFwic2VsZWN0ZWRMYXllcnNcIil9OiB7dGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RofSAvIHt0aGlzLnN0YXRlLmFycmF5TGF5ZXIubGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMubmxzKFwibGlzdFNlcnZpY2VzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9e3RoaXMubmxzKFwicmVzZWFyY2hPcHRpb25cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwiYnVmZmVyVmFsdWVcIil9IDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJ0eXBlT2ZTZWxlY3Rpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LTEwMCBtdC0yXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnl9IHBsYWNlaG9sZGVyPVwiU2VsZXppb25lIHRpcG8uLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImludGVyc2VjdHNcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+SW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY29udGFpbnNcIj5Db250YWluczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY3Jvc3Nlc1wiPkNyb3NzZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVudmVsb3BlLWludGVyc2VjdHNcIj5FbnZlbG9wZSBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbmRleC1pbnRlcnNlY3RzXCI+SW5kZXggSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT3ZlcmxhcHNcIj5PdmVybGFwczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidG91Y2hlc1wiPlRvdWNoZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIndpdGhpblwiPldpdGhpbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicmVsYXRpb25cIj5SZWxhdGlvbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwidy0xMDBcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21Db29yZH0+e3RoaXMubmxzKFwic2VhcmNoSW5MYXllcnNcIil9PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1Db29yZC1maWxlXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHAtMVwiIHRpdGxlPVwiTXVsdGljb29yZGluYXRlIGRhIGZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDAgZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJhZGRDc3ZGaWxlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGV9Lz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZvcm0tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJmb3JtYXR0ZWRYWVpcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh7dGhpcy5ubHMoXCJleGFtcGxlXCIpfTogUHVudG9fMSwzOC43MjMyMzA1NiwxNi40OTU5ODA1NilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb24gY2xhc3NOYW1lPVwibXQtNCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT1cIlNlbGV6aW9uYSBsYXllcnMgZGEgaW50ZXJyb2dhcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGhpcy5ubHMoXCJzZWxlY3RlZExheWVyc1wiKX06IHt0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5sZW5ndGh9IC8ge3RoaXMuc3RhdGUuYXJyYXlMYXllci5sZW5ndGh9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmFycmF5TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0l0ZW09e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5ubHMoXCJsaXN0U2VydmljZXNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT1cIk9wemlvbmUgZGkgcmljZXJjYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwiYnVmZmVyVmFsdWVcIil9IDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJ0eXBlT2ZTZWxlY3Rpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LTEwMCBtdC0yXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnl9IHBsYWNlaG9sZGVyPVwiU2VsZXppb25lIHRpcG8uLi5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImludGVyc2VjdHNcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+SW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY29udGFpbnNcIj5Db250YWluczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY3Jvc3Nlc1wiPkNyb3NzZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVudmVsb3BlLWludGVyc2VjdHNcIj5FbnZlbG9wZSBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbmRleC1pbnRlcnNlY3RzXCI+SW5kZXggSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT3ZlcmxhcHNcIj5PdmVybGFwczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidG91Y2hlc1wiPlRvdWNoZXM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIndpdGhpblwiPldpdGhpbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwicmVsYXRpb25cIj5SZWxhdGlvbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwidy0xMDBcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21Db29yZH0+e3RoaXMubmxzKFwic2VhcmNoSW5MYXllcnNcIil9PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==