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
                            const index = selectedIds.findIndex((item) => item.id === layer.layerId);
                            if (index === -1)
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
        this.graphicLayerFound = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({ listMode: "hide", visible: true });
        this.graphicLayerSelected = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_2__["default"]({ listMode: "hide", visible: true });
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
            const listServices = this.state.listServices;
            if (listServices.length && allLayers.length) {
                for (let i = 0; i < listServices.length; i++) {
                    const serviceKey = listServices[i];
                    const services = this.props.config.services;
                    const currentService = services[serviceKey];
                    allLayers.forEach(el => {
                        if (el.url === currentService.url && currentService.layerListIds.includes(el.layerId)) {
                            allCheckedLayers.push(el);
                        }
                    });
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
            let geometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_3__["default"].buffer(point, 10000, "meters");
            const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({
                //@ts-ignore
                geometry: geometry,
                symbol: this.symbolFound
            });
            let searchedLayers = [];
            this.state.jimuMapView.selectFeaturesByGraphic(polygonGraphic, "contains").then((results) => {
                searchedLayers = _helper_helper__WEBPACK_IMPORTED_MODULE_11__["default"].getSelectedLayerFromSearch(results);
                let arrayGeometry = [];
                //TODO PRENDERE GEOMETRIA
                this.graphicLayerFound.graphics.forEach(g => {
                    const services = this.props.config.services;
                    const serviceKeys = Object.keys(services);
                    if (serviceKeys.length) {
                        for (let i = 0; i < serviceKeys.length; i++) {
                            const currentService = services[serviceKeys[i]];
                            if (searchedLayers === null || searchedLayers === void 0 ? void 0 : searchedLayers.length) {
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
                    this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "layerOpen", {
                        typeSelected: this.state.typeSelected,
                        geometry: this.state.geometry.toJSON(),
                        listServices: this.state.listServices,
                        activeView: this.getActiveView,
                        getAllLayers: this.getAllCheckedLayers
                    }));
                }
            });
            this.graphicLayerFound.add(polygonGraphic);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmRpcml6emkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdvRDtBQUdwRCxNQUFNLE1BQU07SUFBWjtRQUVJLG1CQUFjLEdBQUcsQ0FBQyxVQUFpQixFQUFDLFVBQWlCLEVBQUMsRUFBRTtZQUNwRCxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDN0IsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUNwQixJQUFJLFdBQVcsQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFDLEVBQUM7b0JBQzVCLFdBQVcsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3QzthQUNKO1lBQ0QsT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVELHdCQUFtQixHQUFHLENBQUMsR0FBVSxFQUFDLEVBQUU7WUFDaEMsbUNBQW1DO1lBQ25DLHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsa0VBQWtFO1lBQ2xFLElBQUc7Z0JBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxnRUFBWSxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sS0FBSzthQUNmO1lBQ0QsT0FBTSxHQUFHLEVBQUM7Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7UUFFRCwrQkFBMEIsR0FBRyxDQUFDLE9BQWEsRUFBQyxFQUFFO1lBQzFDLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLE9B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QUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsd0JBQXdCLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFVO3dCQUVySCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pELCtDQUFDLDBDQUFLLElBQ0YsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLFFBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM3QixJQUFJLEVBQUMsU0FBUyxFQUNkLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLFFBQVEsU0FDVixDQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ04sQ0FFSixDQUNILENBQ0wsQ0FFVDtJQUNILENBQUM7O0FBbHNCUSxpQkFBVSxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9pbmRpcml6emkvc3JjL2hlbHBlci9oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aS9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2Nvb3JkaW5hdGVGb3JtYXR0ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUXVlcnkgZnJvbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCI7XHJcbmltcG9ydCBxdWVyeSBmcm9tICdlc3JpL3Jlc3QvcXVlcnknO1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcclxuXHJcblxyXG5jbGFzcyBIZWxwZXIge1xyXG5cclxuICAgIGdldFNlcnZpY2VOYW1lID0gKHNlcnZpY2VVcmw6c3RyaW5nLHNlcnZpY2VLZXk6c3RyaW5nKT0+e1xyXG4gICAgICAgIGxldCBzZXJ2aWNlTmFtZSA9IHNlcnZpY2VLZXk7XHJcbiAgICAgICAgY29uc3Qgc3RyaW5nQXJyYXkgPSBzZXJ2aWNlVXJsLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBjb25zdCBzZXJ2aWNlSW5kZXggPSBzdHJpbmdBcnJheS5pbmRleE9mKFwic2VydmljZXNcIik7XHJcbiAgICAgICAgaWYgKHNlcnZpY2VJbmRleCAhPT0gLTEpe1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nQXJyYXlbc2VydmljZUluZGV4KzFdKXtcclxuICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lID0gc3RyaW5nQXJyYXlbc2VydmljZUluZGV4KzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBxdWVyeUZlYXR1cmVTZXJ2aWNlID0gKHVybDpzdHJpbmcpPT57XHJcbiAgICAgICAgLy8gY29uc3QgcXVlcnlPYmplY3QgPSBuZXcgUXVlcnkoKTtcclxuICAgICAgICAvLyBxdWVyeU9iamVjdC5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XHJcbiAgICAgICAgLy8gcXVlcnlPYmplY3Qud2hlcmUgPSBcIjE9MVwiXHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0cyA9IGF3YWl0IHF1ZXJ5LmV4ZWN1dGVRdWVyeUpTT04odXJsLCBxdWVyeU9iamVjdCk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCBsYXllciA9IG5ldyBGZWF0dXJlTGF5ZXIoe3VybDp1cmx9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3RlZExheWVyRnJvbVNlYXJjaCA9IChyZXN1bHRzOmFueVtdKT0+e1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gW107XHJcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPTA7aSA8IHJlc3VsdHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lclJlc3VsdHMgPSByZXN1bHRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlubmVyUmVzdWx0cy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwO2ogPCBpbm5lclJlc3VsdHMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyID0gaW5uZXJSZXN1bHRzW2pdLmxheWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSB7ZmVhdHVyZVNlcnZlcjpsYXllci51cmwsaWQ6bGF5ZXIubGF5ZXJJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZElkcy5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLmlkID09PSBsYXllci5sYXllcklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSlzZWxlY3RlZElkcy5wdXNoKG9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkSWRzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVscGVyKCk7IiwiXHJcbmV4cG9ydCBkZWZhdWx0ICh7XHJcbiAgICBfd2lkZ2V0TGFiZWw6XCJJbmRpcml6emlcIixcclxuICAgIHZpZXdEcmF3aW5nU2VsZWN0aW9uOlwiVmlzdWFsaXp6YSBkaXNlZ25vIHNlbGV6aW9uZVwiLFxyXG4gICAgdmlld0xhYmVsczpcIlZpc3VhbGl6emEgZXRpY2hldHRlXCIsXHJcbiAgICBzZWFyY2hCeUFkZHJlc3M6XCJSaWNlcmNhIHBlciBpbmRpcml6em9cIixcclxuICAgIHNlbGVjdExheWVyUXVlcnk6XCJTZWxlemlvbmEgbGF5ZXJzIGRhIGludGVycm9nYXJlXCIsXHJcbiAgICBzZWxlY3RlZExheWVyczpcIkxheWVyIHNlbGV6aW9uYXRpXCIsXHJcbiAgICBsaXN0U2VydmljZXM6XCJMaXN0YSBzZXJ2aXppXCIsXHJcbiAgICByZXNlYXJjaE9wdGlvbjpcIk9wemlvbmUgZGkgcmljZXJjYVwiLFxyXG4gICAgYnVmZmVyVmFsdWU6XCJWYWxvcmUgZGkgYnVmZmVyXCIsXHJcbiAgICB0eXBlT2ZTZWxlY3Rpb246XCJUaXBvIGRpIHNlbGV6aW9uZVwiLFxyXG4gICAgdHlwZVNlbGVjdGlvbjpcIlNlbGV6aW9uZSB0aXBvLi4uXCIsXHJcbiAgICBzZWFyY2hJbkxheWVyczpcIlJpY2VyY2EgbmVpIGxheWVyXCIsXHJcbiAgICBzZWxlY3RTZXJ2aWNlOlwiU2VsZXppb25hIGFsbWVubyB1biBzZXJ2aXppb1wiLFxyXG4gICAgc2VsZWN0U2VsZWN0aW9uOlwiU2VsZXppb25hIHVuYSB0aXBvbG9naWEgZGkgc2VsZXppb25lXCIsXHJcbiAgICBsYXllck9uQWRkcmVzczpcIkkgbGl2ZWxsaSBjb250cm9sbGF0aSBub24gc29ubyBzdGF0aSB0cm92YXRpIGFsbCdpbmRpcml6em8gY2VyY2F0b1wiLFxyXG4gICAgYWRkQ3N2RmlsZTpcIkFnZ2l1bmdpIHVuIGZpbGUgQ1NWXCIsXHJcbiAgICBmb3JtYXR0ZWRYWVo6XCJJbCBmaWxlIGRldmUgZXNzZXJlIGZvcm1hdHRhdG8gY29uIHRyZSBjYW1waSBJRCxZLFguXCIsXHJcbiAgICBleGFtcGxlOlwiRXNlbXBpb1wiLFxyXG4gICAgc2VsZWN0R2VvbWV0cnlBbGVydDpcIlNlbGV6aW9uYSB1bmEgZ2VvbWV0cmlhIGluIG1hcHBhXCJcclxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2FsY2l0ZV9jb21wb25lbnRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2Nvb3JkaW5hdGVGb3JtYXR0ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X3N1cHBvcnRfd2ViTWVyY2F0b3JVdGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfR3JhcGhpY3NMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfU2VhcmNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7QWxsV2lkZ2V0UHJvcHMsIGFwcEFjdGlvbnMsIGpzeCwgUmVhY3R9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtJTUNvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQge0FsZXJ0LCBCdXR0b24sIENoZWNrYm94LCBMYWJlbCwgTXVsdGlTZWxlY3QsIE51bWVyaWNJbnB1dCwgT3B0aW9uLCBTZWxlY3QsIFNsaWRlciwgVGFiLCBUYWJzfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiO1xyXG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIjtcclxuaW1wb3J0IHtKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnR9IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5pbXBvcnQge0NhbGNpdGVBY2NvcmRpb24sIENhbGNpdGVBY2NvcmRpb25JdGVtfSBmcm9tIFwiY2FsY2l0ZS1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIjtcclxuaW1wb3J0IGNvb3JkaW5hdGVGb3JtYXR0ZXIgZnJvbSBcImVzcmkvZ2VvbWV0cnkvY29vcmRpbmF0ZUZvcm1hdHRlclwiO1xyXG5pbXBvcnQgd2ViTWVyY2F0b3JVdGlscyBmcm9tIFwiZXNyaS9nZW9tZXRyeS9zdXBwb3J0L3dlYk1lcmNhdG9yVXRpbHNcIjtcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xyXG5pbXBvcnQgUG9seWdvbiBmcm9tICdlc3JpL2dlb21ldHJ5L1BvbHlnb24nO1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEFsbFdpZGdldFByb3BzPElNQ29uZmlnPiwgYW55PiB7XHJcblxyXG4gICAgc3RhdGljIGFjdGl2ZVZpZXcgPSBudWxsO1xyXG4gICAgXHJcbiAgICBncmFwaGljTGF5ZXJGb3VuZCA9IG5ldyBHcmFwaGljc0xheWVyKHtsaXN0TW9kZTpcImhpZGVcIix2aXNpYmxlOnRydWV9KTtcclxuICAgIGdyYXBoaWNMYXllclNlbGVjdGVkID0gbmV3IEdyYXBoaWNzTGF5ZXIoe2xpc3RNb2RlOlwiaGlkZVwiLHZpc2libGU6dHJ1ZX0pO1xyXG5cclxuICAgIHN5bWJvbEZvdW5kID0ge1xyXG4gICAgICAgIHR5cGU6IFwic2ltcGxlLWZpbGxcIixcclxuICAgICAgICBjb2xvcjogWzUxLCA1MSwgMjA0LCAwLjVdLFxyXG4gICAgICAgIHN0eWxlOiBcInNvbGlkXCIsXHJcbiAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICBzdHlsZTogXCJzaG9ydC1kYXNoXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiAzXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBqaW11TWFwVmlldzogbnVsbCxcclxuICAgICAgICAgIGxhYmVsVmlzaWJsZTp0cnVlLFxyXG4gICAgICAgICAgdmlld1NlbGVjdERyYXc6IHRydWUsXHJcblxyXG4gICAgICAgICAgZm9ybUV4dHJhVXJiYW5vOntcclxuICAgICAgICAgICAgICAvL1RPRE9cclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgLy9DT09SRFxyXG4gICAgICAgICAgbG9uZ19lXzE6MTIsXHJcbiAgICAgICAgICBsb25nX2VfMjo2MixcclxuICAgICAgICAgIGxvbmdfZV8zOjg2LFxyXG4gICAgICAgICAgbGF0X2VfMTo0MSxcclxuICAgICAgICAgIGxhdF9lXzI6ODAsXHJcbiAgICAgICAgICBsYXRfZV8zOjY2LFxyXG5cclxuICAgICAgICAgIGFycmF5TGF5ZXI6IFtdLFxyXG4gICAgICAgICAgdmFsdWVCdWZmZXJBZGRyZXNzOiAwLFxyXG4gICAgICAgICAgdmFsdWVCdWZmZXJDb29yZDogMCxcclxuICAgICAgICAgIGdlb21ldHJ5Om51bGwsXHJcbiAgICAgICAgICB0eXBlU2VsZWN0ZWQ6bnVsbCxcclxuICAgICAgICAgIGxpc3RTZXJ2aWNlczogW10sXHJcbiAgICAgICAgICBsYXllcnNJZHM6W10sXHJcbiAgICAgICAgICBzZWFyY2hlZExheWVyczpbXVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5fdmlld0xhYmVscyA9IHRoaXMuX3ZpZXdMYWJlbHMuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5fdmlld1NlbGVjdERyYXcgPSB0aGlzLl92aWV3U2VsZWN0RHJhdy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gdGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLnNhdmVTdGF0ZSA9IHRoaXMuc2F2ZVN0YXRlLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VUYWJzID0gdGhpcy5vbkNoYW5nZVRhYnMuYmluZCh0aGlzKVxyXG5cclxuICAgICAgdGhpcy5vbkNoYW5nZVNsaWRlckFkZHJlc3MgPSB0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzcy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmQgPSB0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmQuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeSA9IHRoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnkuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZUZpbGVDc3ZDb29yZGluYXRlID0gdGhpcy5vbkNoYW5nZUZpbGVDc3ZDb29yZGluYXRlLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VTZWxlY3RMYXllciA9IHRoaXMub25DaGFuZ2VTZWxlY3RMYXllci5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzID0gdGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQWRkcmVzcy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21Db29yZCA9IHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmxzID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsID8gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2UoeyBpZDogaWQsIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXNbaWRdIH0pIDogaWRcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVWaWV3ID0gKCk9PiBXaWRnZXQuYWN0aXZlVmlldztcclxuICAgIFxyXG4gICAgZ2V0QWxsQ2hlY2tlZExheWVycygpe1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBXaWRnZXQuYWN0aXZlVmlldztcclxuICAgICAgICBsZXQgYWxsQ2hlY2tlZExheWVycyA9IFtdO1xyXG4gICAgICAgIGlmIChhY3RpdmVWaWV3KXtcclxuICAgICAgICAgICAgY29uc3QgYWxsTGF5ZXJzID0gYWN0aXZlVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuaXRlbXM7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RTZXJ2aWNlcyA9IHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzO1xyXG4gICAgICAgICAgICBpZiAobGlzdFNlcnZpY2VzLmxlbmd0aCAmJiBhbGxMYXllcnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPTA7aSA8IGxpc3RTZXJ2aWNlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlS2V5ID0gbGlzdFNlcnZpY2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNlcnZpY2UgPSBzZXJ2aWNlc1tzZXJ2aWNlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxMYXllcnMuZm9yRWFjaChlbD0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwudXJsID09PSBjdXJyZW50U2VydmljZS51cmwgJiYgY3VycmVudFNlcnZpY2UubGF5ZXJMaXN0SWRzLmluY2x1ZGVzKGVsLmxheWVySWQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbENoZWNrZWRMYXllcnMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxDaGVja2VkTGF5ZXJzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRGZWF0dXJlTGF5ZXIgKCl7XHJcbiAgICAgICAgY29uc3QgZmVhdHVyZVVybCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2VzLnNlcnZpY2VfMS51cmw7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGZWF0dXJlTGF5ZXIoe3VybDpmZWF0dXJlVXJsLG91dEZpZWxkczogW1wiKlwiXX0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciAoam12OiBKaW11TWFwVmlldykge1xyXG4gICAgICAgIGlmIChqbXYpIHtcclxuICAgICAgICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNMYXllckZvdW5kKTtcclxuICAgICAgICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNMYXllclNlbGVjdGVkKTtcclxuICAgICAgICAgICAgV2lkZ2V0LmFjdGl2ZVZpZXcgPSBqbXY7XHJcbiAgICAgICAgICAgIGxldCBhcnJheVN1cCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbGF5ZXJzSWRzID0gW11cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VzID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZXNcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZUl0ZW1zID0gT2JqZWN0LmtleXMoc2VydmljZXMpO1xyXG4gICAgICAgICAgICBzZXJ2aWNlSXRlbXMuZm9yRWFjaCgoa2V5KT0+e1xyXG4gICAgICAgICAgICAgICAgYXJyYXlTdXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6c2VydmljZXNba2V5XS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTprZXlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoKHtcclxuICAgICAgICAgICAgICAgIHZpZXc6IGptdi52aWV3LFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0R3JhcGhpY0VuYWJsZWQ6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJzZWFyY2gtd2lkZ2V0LWFkZHJlc3NcIi8vVE9ETyBtaWdsaW9yYXJlIHNlbnphIGlkIGNhYmxhdG9cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWxlY3QtcmVzdWx0XCIsIChldmVudCk9PntcclxuICAgICAgICAgICAgICAgIGlmKGV2ZW50ICYmIGV2ZW50LnJlc3VsdCAmJiBldmVudC5yZXN1bHQuZmVhdHVyZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ3JhcGhpY3MucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnlCdWZmZXI6IFBvbHlnb24gPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoIGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5LCAxMDAwLCBcIm1ldGVyc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBnZW9tZXRyeUJ1ZmZlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbEZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGptdi5zZWxlY3RGZWF0dXJlc0J5R3JhcGhpYyhwb2x5Z29uR3JhcGhpYyxcImNvbnRhaW5zXCIpLnRoZW4oKHJlc3VsdHMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaGVkTGF5ZXJzID0gaGVscGVyLmdldFNlbGVjdGVkTGF5ZXJGcm9tU2VhcmNoKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hlZExheWVyczpzZWFyY2hlZExheWVyc30pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5hZGQocG9seWdvbkdyYXBoaWMpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWFyY2gtY2xlYXJcIiwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFycmF5TGF5ZXI6IGFycmF5U3VwLFxyXG4gICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdixcclxuICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldDpzZWFyY2hXaWRnZXQsXHJcbiAgICAgICAgICAgICAgICBsYXllcnNJZHM6bGF5ZXJzSWRzXHJcbiAgICAgICAgICAgICAgICAvLyBza2V0Y2hXaWRnZXQ6c2tldGNoXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZVRhYnMoKXtcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyU2VsZWN0ZWQucmVtb3ZlQWxsKCk7XHJcbiAgICB9XHJcbiAgICBfdmlld0xhYmVscygpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsYWJlbFZpc2libGU6ICF0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF92aWV3U2VsZWN0RHJhdygpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2aWV3U2VsZWN0RHJhdzogIXRoaXMuc3RhdGUudmlld1NlbGVjdERyYXdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnZpc2libGUgPSB0aGlzLnN0YXRlLnZpZXdTZWxlY3REcmF3O1xyXG4gICAgfVxyXG5cclxuICAgIC8vRXh0cmFVcmJhbm9cclxuICAgIG9uQ2hhbmdlRXh0cmFVcmJhbm8oZSx0eXBlKXtcclxuICAgICAgaWYodHlwZT09XCJpbmRpcml6em9cIil7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmZvcm1FeHRyYVVyYmFuby5pbmRpcml6em8gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZm9ybUV4dHJhVXJiYW5vLmttID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgc2F2ZVN0YXRlKGtleSxlKXtcclxuICAgICAgICBjb25zdCBzdGF0ZU5ldyA9IHt9XHJcbiAgICAgICAgc3RhdGVOZXdba2V5XSA9IGUudGFyZ2V0ID8gZS50YXJnZXQudmFsdWU6IGU7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGVOZXcpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgb25DaGFuZ2VTZWxlY3RMYXllciAoZSxuLHMpe1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpe1xyXG4gICAgICAgICAgICBjb25zdCBjb3BpZWRMaXN0U2VydmljZXMgPSBbLi4udGhpcy5zdGF0ZS5saXN0U2VydmljZXMsbl07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RTZXJ2aWNlczpjb3BpZWRMaXN0U2VydmljZXN9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5pbmRleE9mKG4pO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29waWVkTGlzdFNlcnZpY2VzID0gWy4uLnRoaXMuc3RhdGUubGlzdFNlcnZpY2VzXTtcclxuICAgICAgICAgICAgICAgIGNvcGllZExpc3RTZXJ2aWNlcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsaXN0U2VydmljZXM6Y29waWVkTGlzdFNlcnZpY2VzfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeShlKXtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNzdlRvQXJyYXkoc3RyLCBkZWxpbWl0ZXIgPSBcIixcIikge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBzdHIuc2xpY2UoMCwgc3RyLmluZGV4T2YoXCJcXG5cIikpLnNsaWNlKDAsIHN0ci5pbmRleE9mKFwiXFxyXCIpKS5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgICAgIGNvbnN0IHJvd3MgPSBzdHIuc2xpY2Uoc3RyLmluZGV4T2YoXCJcXG5cIikgKyAxKS5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICByZXR1cm4gcm93cy5tYXAoZnVuY3Rpb24gKHJvdykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSByb3cuc3BsaXQoZGVsaW1pdGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnMucmVkdWNlKGZ1bmN0aW9uIChvYmplY3QsIGhlYWRlciwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdFtoZWFkZXJdID0gdmFsdWVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBvbkNoYW5nZUZpbGVDc3ZDb29yZGluYXRlKGUpe1xyXG4gICAgICAgIGF3YWl0IGNvb3JkaW5hdGVGb3JtYXR0ZXIubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlU2xpZGVyQWRkcmVzcyhlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVCdWZmZXJBZGRyZXNzOiBwYXJzZUludChpc05hTihlKSA/IGUudGFyZ2V0LnZhbHVlOiBlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25DaGFuZ2VTbGlkZXJDb29yZChlKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdmFsdWVCdWZmZXJDb29yZDogcGFyc2VJbnQoaXNOYU4oZSkgPyBlLnRhcmdldC52YWx1ZTogZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIG9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC50YWJsZXMucmVtb3ZlQWxsKCk7XHJcblxyXG4gICAgICAgIC8vcGFyYW1ldHJpIGZvcm1cclxuICAgICAgICBsZXQgYXJyYXlHZW9tZXRyeSA9IFtdO1xyXG4gICAgICAgIGxldCBjb25maWdFcnJvcnMgPSBbXTtcclxuICAgICAgICAvL1RPRE8gUFJFTkRFUkUgR0VPTUVUUklBXHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5ncmFwaGljcy5mb3JFYWNoKGc9PntcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZXMgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlcztcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZUtleXMgPSBPYmplY3Qua2V5cyhzZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlS2V5cy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IHNlcnZpY2VLZXlzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlID0gc2VydmljZXNbc2VydmljZUtleXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaGVkTGF5ZXJzID0gdGhpcy5zdGF0ZS5zZWFyY2hlZExheWVycztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoZWRMYXllcnMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHNlYXJjaGVkTGF5ZXJzLmZpbmQoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZmVhdHVyZVNlcnZlciA9PT0gY3VycmVudFNlcnZpY2UudXJsICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VydmljZS5sYXllckxpc3RJZHMuaW5jbHVkZXMoaXRlbS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCb29sZWFuKGl0ZW0pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihnLmdlb21ldHJ5LCB0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzcywgXCJtZXRlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2goZy5nZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9jb250cm9sbG8gZXJyb3JpXHJcbiAgICAgICAgbGV0IGFycmF5RXJyb3JzID0gW107XHJcbiAgICAgICAgaWYoYXJyYXlHZW9tZXRyeS5sZW5ndGgpIHsgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgYXJyYXlFcnJvcnMucHVzaCh0aGlzLm5scyhcInNlbGVjdEdlb21ldHJ5QWxlcnRcIikpO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5sZW5ndGgpIGFycmF5RXJyb3JzLnB1c2godGhpcy5ubHMoXCJzZWxlY3RTZXJ2aWNlXCIpKTtcclxuICAgICAgICBpZighdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQpIGFycmF5RXJyb3JzLnB1c2godGhpcy5ubHMoXCJzZWxlY3RTZWxlY3Rpb25cIikpO1xyXG4gICAgICAgIGlmICghYXJyYXlHZW9tZXRyeS5sZW5ndGggJiYgY29uZmlnRXJyb3JzLmxlbmd0aCA+IDApIGFycmF5RXJyb3JzID0gY29uZmlnRXJyb3JzXHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTphcnJheUVycm9ycy5qb2luKCl9KTtcclxuXHJcbiAgICAgICAgaWYoYXJyYXlFcnJvcnMubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMuY29uZmlnLnNldHRpbmdzLmlkV2lkZ2V0VGFibGUgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZiAmJiBmLnR5cGU9PT1cImZlYXR1cmVcIiAmJiB0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5pbmRleE9mKGluZGV4KSAhPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGYubGFiZWxpbmdJbmZvPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsaW5nSW5mb1swXS5zeW1ib2wuZm9udC5mYW1pbHkgPSBcIkFyaWFsXCI7Ly9maXggZm9udCB2ZXJkYW5hIG5vdCBpbiBzdGF0aWMgZXNyaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsc1Zpc2libGUgPSB0aGlzLnN0YXRlLmxhYmVsVmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpZFdpZGdldFRhYmxlID0gdGhpcy5wcm9wcy5jb25maWcuc2V0dGluZ3MuaWRXaWRnZXRUYWJsZSAhPT0gXCIgXCIgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXR0aW5ncy5pZFdpZGdldFRhYmxlIDpcInZhbHVlXCJcclxuICAgICAgICAgICAgLy9tYW5kbyBsYXllcmlkIGFkIFRhYmxlTGlzdFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGF5ZXJPcGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6dGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OnRoaXMuc3RhdGUuZ2VvbWV0cnkudG9KU09OKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTZXJ2aWNlczp0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVmlldzp0aGlzLmdldEFjdGl2ZVZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEFsbExheWVyczp0aGlzLmdldEFsbENoZWNrZWRMYXllcnNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgb25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkKCl7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC50YWJsZXMucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgbGV0IGxvbmcgPSB0aGlzLnN0YXRlLmxvbmdfZV8xICsgXCIuXCIgKyB0aGlzLnN0YXRlLmxvbmdfZV8yICsgdGhpcy5zdGF0ZS5sb25nX2VfMyArIFwiKlwiO1xyXG4gICAgICAgIGxldCBsYXQgPSB0aGlzLnN0YXRlLmxhdF9lXzEgKyBcIi5cIiArIHRoaXMuc3RhdGUubGF0X2VfMiArIHRoaXMuc3RhdGUubGF0X2VfMyArIFwiKlwiO1xyXG5cclxuICAgICAgICBhd2FpdCBjb29yZGluYXRlRm9ybWF0dGVyLmxvYWQoKTtcclxuICAgICAgICBsZXQgcG9pbnRHZW9ncmFwaGljID0gY29vcmRpbmF0ZUZvcm1hdHRlci5mcm9tTGF0aXR1ZGVMb25naXR1ZGUobGF0ICsgXCJ8XCIgKyBsb25nKTtcclxuICAgICAgICBsZXQgcG9pbnQgPSB3ZWJNZXJjYXRvclV0aWxzLmdlb2dyYXBoaWNUb1dlYk1lcmNhdG9yKHBvaW50R2VvZ3JhcGhpYyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHBvaW50KTtcclxuXHJcbiAgICAgICAgbGV0IGdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKHBvaW50LDEwMDAwLFwibWV0ZXJzXCIpO1xyXG4gICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5LFxyXG4gICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sRm91bmRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHNlYXJjaGVkTGF5ZXJzID0gW11cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy5zZWxlY3RGZWF0dXJlc0J5R3JhcGhpYyhwb2x5Z29uR3JhcGhpYyxcImNvbnRhaW5zXCIpLnRoZW4oKHJlc3VsdHMpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZWFyY2hlZExheWVycyA9IGhlbHBlci5nZXRTZWxlY3RlZExheWVyRnJvbVNlYXJjaChyZXN1bHRzKTtcclxuICAgICAgICAgICAgbGV0IGFycmF5R2VvbWV0cnkgPSBbXTtcclxuICAgICAgICAgICAgLy9UT0RPIFBSRU5ERVJFIEdFT01FVFJJQVxyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmdyYXBoaWNzLmZvckVhY2goZz0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZXMgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VLZXlzID0gT2JqZWN0LmtleXMoc2VydmljZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcnZpY2VLZXlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IHNlcnZpY2VLZXlzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2VydmljZSA9IHNlcnZpY2VzW3NlcnZpY2VLZXlzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaGVkTGF5ZXJzPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHNlYXJjaGVkTGF5ZXJzLmZpbmQoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5mZWF0dXJlU2VydmVyID09PSBjdXJyZW50U2VydmljZS51cmwgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2VydmljZS5sYXllckxpc3RJZHMuaW5jbHVkZXMoaXRlbS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJvb2xlYW4oaXRlbSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcuZ2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZy5nZW9tZXRyeSwgdGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3MsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChnLmdlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vY29udHJvbGxvIGVycm9yaVxyXG4gICAgICAgICAgICBsZXQgYXJyYXlFcnJvcnMgPSBbXTtcclxuICAgICAgICAgICAgaWYoYXJyYXlHZW9tZXRyeS5sZW5ndGgpIHsgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgYXJyYXlFcnJvcnMucHVzaChcIlNlbGV6aW9uYSB1bmEgZ2VvbWV0cmlhIGluIG1hcHBhXCIpO1xyXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RoKSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIGFsbWVubyB1biBzZXJ2aXppb1wiKTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGUudHlwZVNlbGVjdGVkKSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIHVuYSB0aXBvbG9naWEgZGkgc2VsZXppb25lXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6YXJyYXlFcnJvcnMuam9pbigpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoYXJyYXlFcnJvcnMubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMuY29uZmlnLnNldHRpbmdzLmlkV2lkZ2V0VGFibGUgIT09IFwiXCIpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihmICYmIGYudHlwZT09PVwiZmVhdHVyZVwiICYmIHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmluZGV4T2YoaW5kZXgpICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGYubGFiZWxpbmdJbmZvPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbGluZ0luZm9bMF0uc3ltYm9sLmZvbnQuZmFtaWx5ID0gXCJBcmlhbFwiOy8vZml4IGZvbnQgdmVyZGFuYSBub3QgaW4gc3RhdGljIGVzcmlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYubGFiZWxzVmlzaWJsZSA9IHRoaXMuc3RhdGUubGFiZWxWaXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvL21hbmRvIGxheWVyaWQgYWQgVGFibGVMaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGF5ZXJPcGVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVTZWxlY3RlZDp0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OnRoaXMuc3RhdGUuZ2VvbWV0cnkudG9KU09OKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0U2VydmljZXM6dGhpcy5zdGF0ZS5saXN0U2VydmljZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVWaWV3OnRoaXMuZ2V0QWN0aXZlVmlldyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldEFsbExheWVyczp0aGlzLmdldEFsbENoZWNrZWRMYXllcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmFkZChwb2x5Z29uR3JhcGhpYyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYWRkcmVzcyBqaW11LXdpZGdldCAgY29udGFpbmVyLWZsdWlkXCIgc3R5bGU9e3tvdmVyZmxvdzpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndXNlTWFwV2lkZ2V0SWRzJykgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiYgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0gJiYgKFxyXG4gICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfSBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2VudHJpYyBjaGVjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cIm1yLTJcIiBhcmlhLWxhYmVsPVwiVmlzdWFsaXp6YSBkaXNlZ25vIHNlbGV6aW9uZVwiIGNoZWNrZWQ9e3RoaXMuZ3JhcGhpY0xheWVyRm91bmQudmlzaWJsZX0gb25DaGFuZ2U9e3RoaXMuX3ZpZXdTZWxlY3REcmF3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcInZpZXdEcmF3aW5nU2VsZWN0aW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2VudHJpYyBjaGVjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cIm1yLTJcIiBhcmlhLWxhYmVsPVwiVmlzdWFsaXp6YSBkaXNlZ25vIHNlbGV6aW9uZVwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUubGFiZWxWaXNpYmxlfSBvbkNoYW5nZT17dGhpcy5fdmlld0xhYmVsc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJ2aWV3TGFiZWxzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJ0YWItMVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVRhYnN9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGFic1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLVVyYmFub1wiIGNsYXNzTmFtZT1cIiBwLTFcIiB0aXRsZT1cIlVyYmFub1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMubmxzKFwic2VhcmNoQnlBZGRyZXNzXCIpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC13aWRnZXQtYWRkcmVzc1wiIGNsYXNzTmFtZT1cInctMTAwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uIGNsYXNzTmFtZT1cIm10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9e3RoaXMubmxzKFwic2VsZWN0TGF5ZXJRdWVyeVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMubmxzKFwic2VsZWN0ZWRMYXllcnNcIil9OiB7dGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RofSAvIHt0aGlzLnN0YXRlLmFycmF5TGF5ZXIubGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMubmxzKFwibGlzdFNlcnZpY2VzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9e3RoaXMubmxzKFwicmVzZWFyY2hPcHRpb25cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwiYnVmZmVyVmFsdWVcIil9IDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc30gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckFkZHJlc3N9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17NTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJ0eXBlT2ZTZWxlY3Rpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LTEwMCBtdC0yXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnl9IHBsYWNlaG9sZGVyPXt0aGlzLm5scyhcInR5cGVTZWxlY3Rpb25cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW50ZXJzZWN0c1wiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5JbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjb250YWluc1wiPkNvbnRhaW5zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjcm9zc2VzXCI+Q3Jvc3NlczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZW52ZWxvcGUtaW50ZXJzZWN0c1wiPkVudmVsb3BlIEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImluZGV4LWludGVyc2VjdHNcIj5JbmRleCBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJPdmVybGFwc1wiPk92ZXJsYXBzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ0b3VjaGVzXCI+VG91Y2hlczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwid2l0aGluXCI+V2l0aGluPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJyZWxhdGlvblwiPlJlbGF0aW9uPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ3LTEwMFwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1Jlc2VhcmNoZnJvbUFkZHJlc3N9Pnt0aGlzLm5scyhcInNlYXJjaEluTGF5ZXJzXCIpfTwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICB7Lyo8VGFiIGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1FeHRyYXVyYmFub1wiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBwLTFcIiB0aXRsZT1cIkV4dHJhdXJiYW5vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI1XCI+SW5kaXJpenpvOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5kaXJpenpvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNVwiPkttOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTc1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj4qL31cclxuICAgICAgICAgICAgICAgIDxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUNvb3JkXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHAtMVwiIHRpdGxlPVwiQ29vcmRpbmF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMiBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0yNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9uZy4gKFgpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xvbmdfZV8xJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubG9uZ19lXzF9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbG9uZ19lXzInLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sb25nX2VfMn0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsb25nX2VfMycsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxvbmdfZV8zfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhdC4gKFkpOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzEnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8xfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzInLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8yfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xhdF9lXzMnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXRfZV8zfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbiBjbGFzc05hbWU9XCJtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiU2VsZXppb25hIGxheWVycyBkYSBpbnRlcnJvZ2FyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLm5scyhcInNlbGVjdGVkTGF5ZXJzXCIpfToge3RoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmxlbmd0aH0gLyB7dGhpcy5zdGF0ZS5hcnJheUxheWVyLmxlbmd0aH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuYXJyYXlMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrSXRlbT17dGhpcy5vbkNoYW5nZVNlbGVjdExheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLm5scyhcImxpc3RTZXJ2aWNlc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPXt0aGlzLm5scyhcInJlc2VhcmNoT3B0aW9uXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcImJ1ZmZlclZhbHVlXCIpfSA8TnVtZXJpY0lucHV0IGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTUwXCIvPiBtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17NTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwidHlwZU9mU2VsZWN0aW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy0xMDAgbXQtMlwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5fSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uZSB0aXBvLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmR9Pnt0aGlzLm5scyhcInNlYXJjaEluTGF5ZXJzXCIpfTwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItQ29vcmQtZmlsZVwiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBwLTFcIiB0aXRsZT1cIk11bHRpY29vcmRpbmF0ZSBkYSBmaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwIGZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwiYWRkQ3N2RmlsZVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUZpbGVDc3ZDb29yZGluYXRlfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmb3JtLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwiZm9ybWF0dGVkWFlaXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoe3RoaXMubmxzKFwiZXhhbXBsZVwiKX06IFB1bnRvXzEsMzguNzIzMjMwNTYsMTYuNDk1OTgwNTYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uIGNsYXNzTmFtZT1cIm10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJTZWxlemlvbmEgbGF5ZXJzIGRhIGludGVycm9nYXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMubmxzKFwic2VsZWN0ZWRMYXllcnNcIil9OiB7dGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RofSAvIHt0aGlzLnN0YXRlLmFycmF5TGF5ZXIubGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMubmxzKFwibGlzdFNlcnZpY2VzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9XCJPcHppb25lIGRpIHJpY2VyY2FcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcImJ1ZmZlclZhbHVlXCIpfSA8TnVtZXJpY0lucHV0IGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTUwXCIvPiBtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17NTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNsaWRlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwidHlwZU9mU2VsZWN0aW9uXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPVwidy0xMDAgbXQtMlwiIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5fSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uZSB0aXBvLi4uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmR9Pnt0aGlzLm5scyhcInNlYXJjaEluTGF5ZXJzXCIpfTwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICYmIHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFwiXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=