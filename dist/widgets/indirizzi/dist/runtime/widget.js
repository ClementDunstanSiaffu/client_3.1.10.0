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
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.NumericInput, { defaultValue: this.state.valueBufferCoord, value: this.state.valueBufferCoord, onChange: this.onChangeSliderCoord, className: "d-inline-block w-50" }),
                                            " m",
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Slider, { className: "w-100 mt-1", "aria-label": "Range", value: this.state.valueBufferCoord, defaultValue: this.state.valueBufferCoord, max: 5000, min: 0, onChange: this.onChangeSliderCoord, step: 1 }))),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9pbmRpcml6emkvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdvRDtBQUdwRCxNQUFNLE1BQU07SUFBWjtRQUVJLG1CQUFjLEdBQUcsQ0FBQyxVQUFpQixFQUFDLFVBQWlCLEVBQUMsRUFBRTtZQUNwRCxJQUFJLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDN0IsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JELElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFDO2dCQUNwQixJQUFJLFdBQVcsQ0FBQyxZQUFZLEdBQUMsQ0FBQyxDQUFDLEVBQUM7b0JBQzVCLFdBQVcsR0FBRyxXQUFXLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3QzthQUNKO1lBQ0QsT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVELHdCQUFtQixHQUFHLENBQUMsR0FBVSxFQUFDLEVBQUU7WUFDaEMsbUNBQW1DO1lBQ25DLHFDQUFxQztZQUNyQyw0QkFBNEI7WUFDNUIsa0VBQWtFO1lBQ2xFLElBQUc7Z0JBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSSxnRUFBWSxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sS0FBSzthQUNmO1lBQ0QsT0FBTSxHQUFHLEVBQUM7Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUM7UUFFRCwrQkFBMEIsR0FBRyxDQUFDLE9BQWEsRUFBQyxFQUFFO1lBQzFDLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLE9B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LDJDQUFNLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsd0JBQXdCLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFVO3dCQUVySCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pELCtDQUFDLDBDQUFLLElBQ0YsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLFFBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM3QixJQUFJLEVBQUMsU0FBUyxFQUNkLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLFFBQVEsU0FDVixDQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ04sQ0FFSixDQUNILENBQ0wsQ0FFVDtJQUNILENBQUM7O0FBbHNCUSxpQkFBVSxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9pbmRpcml6emkvc3JjL2hlbHBlci9oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aS9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImNhbGNpdGUtY29tcG9uZW50c1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2Nvb3JkaW5hdGVGb3JtYXR0ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvc3VwcG9ydC93ZWJNZXJjYXRvclV0aWxzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2luZGlyaXp6aS9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFF1ZXJ5IGZyb20gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJ2VzcmkvcmVzdC9xdWVyeSc7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcblxuXG5jbGFzcyBIZWxwZXIge1xuXG4gICAgZ2V0U2VydmljZU5hbWUgPSAoc2VydmljZVVybDpzdHJpbmcsc2VydmljZUtleTpzdHJpbmcpPT57XG4gICAgICAgIGxldCBzZXJ2aWNlTmFtZSA9IHNlcnZpY2VLZXk7XG4gICAgICAgIGNvbnN0IHN0cmluZ0FycmF5ID0gc2VydmljZVVybC5zcGxpdChcIi9cIik7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VJbmRleCA9IHN0cmluZ0FycmF5LmluZGV4T2YoXCJzZXJ2aWNlc1wiKTtcbiAgICAgICAgaWYgKHNlcnZpY2VJbmRleCAhPT0gLTEpe1xuICAgICAgICAgICAgaWYgKHN0cmluZ0FycmF5W3NlcnZpY2VJbmRleCsxXSl7XG4gICAgICAgICAgICAgICAgc2VydmljZU5hbWUgPSBzdHJpbmdBcnJheVtzZXJ2aWNlSW5kZXgrMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlcnZpY2VOYW1lO1xuICAgIH1cblxuICAgIHF1ZXJ5RmVhdHVyZVNlcnZpY2UgPSAodXJsOnN0cmluZyk9PntcbiAgICAgICAgLy8gY29uc3QgcXVlcnlPYmplY3QgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgLy8gcXVlcnlPYmplY3QucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xuICAgICAgICAvLyBxdWVyeU9iamVjdC53aGVyZSA9IFwiMT0xXCJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0cyA9IGF3YWl0IHF1ZXJ5LmV4ZWN1dGVRdWVyeUpTT04odXJsLCBxdWVyeU9iamVjdCk7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gbmV3IEZlYXR1cmVMYXllcih7dXJsOnVybH0pO1xuICAgICAgICAgICAgcmV0dXJuIGxheWVyXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWRMYXllckZyb21TZWFyY2ggPSAocmVzdWx0czphbnlbXSk9PntcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZHMgPSBbXTtcbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0wO2kgPCByZXN1bHRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyUmVzdWx0cyA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlubmVyUmVzdWx0cy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDtqIDwgaW5uZXJSZXN1bHRzLmxlbmd0aDtqKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBpbm5lclJlc3VsdHNbal0ubGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSB7ZmVhdHVyZVNlcnZlcjpsYXllci51cmwsaWQ6bGF5ZXIubGF5ZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRJZHMuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PT0gbGF5ZXIubGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKXNlbGVjdGVkSWRzLnB1c2gob2JqZWN0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZElkcztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWxwZXIoKTsiLCJcbmV4cG9ydCBkZWZhdWx0ICh7XG4gICAgX3dpZGdldExhYmVsOlwiSW5kaXJpenppXCIsXG4gICAgdmlld0RyYXdpbmdTZWxlY3Rpb246XCJWaXN1YWxpenphIGRpc2Vnbm8gc2VsZXppb25lXCIsXG4gICAgdmlld0xhYmVsczpcIlZpc3VhbGl6emEgZXRpY2hldHRlXCIsXG4gICAgc2VhcmNoQnlBZGRyZXNzOlwiUmljZXJjYSBwZXIgaW5kaXJpenpvXCIsXG4gICAgc2VsZWN0TGF5ZXJRdWVyeTpcIlNlbGV6aW9uYSBsYXllcnMgZGEgaW50ZXJyb2dhcmVcIixcbiAgICBzZWxlY3RlZExheWVyczpcIkxheWVyIHNlbGV6aW9uYXRpXCIsXG4gICAgbGlzdFNlcnZpY2VzOlwiTGlzdGEgc2Vydml6aVwiLFxuICAgIHJlc2VhcmNoT3B0aW9uOlwiT3B6aW9uZSBkaSByaWNlcmNhXCIsXG4gICAgYnVmZmVyVmFsdWU6XCJWYWxvcmUgZGkgYnVmZmVyXCIsXG4gICAgdHlwZU9mU2VsZWN0aW9uOlwiVGlwbyBkaSBzZWxlemlvbmVcIixcbiAgICB0eXBlU2VsZWN0aW9uOlwiU2VsZXppb25lIHRpcG8uLi5cIixcbiAgICBzZWFyY2hJbkxheWVyczpcIlJpY2VyY2EgbmVpIGxheWVyXCIsXG4gICAgc2VsZWN0U2VydmljZTpcIlNlbGV6aW9uYSBhbG1lbm8gdW4gc2Vydml6aW9cIixcbiAgICBzZWxlY3RTZWxlY3Rpb246XCJTZWxlemlvbmEgdW5hIHRpcG9sb2dpYSBkaSBzZWxlemlvbmVcIixcbiAgICBsYXllck9uQWRkcmVzczpcIkkgbGl2ZWxsaSBjb250cm9sbGF0aSBub24gc29ubyBzdGF0aSB0cm92YXRpIGFsbCdpbmRpcml6em8gY2VyY2F0b1wiLFxuICAgIGFkZENzdkZpbGU6XCJBZ2dpdW5naSB1biBmaWxlIENTVlwiLFxuICAgIGZvcm1hdHRlZFhZWjpcIklsIGZpbGUgZGV2ZSBlc3NlcmUgZm9ybWF0dGF0byBjb24gdHJlIGNhbXBpIElELFksWC5cIixcbiAgICBleGFtcGxlOlwiRXNlbXBpb1wiLFxuICAgIHNlbGVjdEdlb21ldHJ5QWxlcnQ6XCJTZWxlemlvbmEgdW5hIGdlb21ldHJpYSBpbiBtYXBwYVwiXG59KSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYWxjaXRlX2NvbXBvbmVudHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfY29vcmRpbmF0ZUZvcm1hdHRlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfc3VwcG9ydF93ZWJNZXJjYXRvclV0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtBbGxXaWRnZXRQcm9wcywgYXBwQWN0aW9ucywganN4LCBSZWFjdH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge0lNQ29uZmlnfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7QWxlcnQsIEJ1dHRvbiwgQ2hlY2tib3gsIExhYmVsLCBNdWx0aVNlbGVjdCwgTnVtZXJpY0lucHV0LCBPcHRpb24sIFNlbGVjdCwgU2xpZGVyLCBUYWIsIFRhYnN9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCI7XHJcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiO1xyXG5pbXBvcnQge0ppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudH0gZnJvbSAnamltdS1hcmNnaXMnXHJcbmltcG9ydCB7Q2FsY2l0ZUFjY29yZGlvbiwgQ2FsY2l0ZUFjY29yZGlvbkl0ZW19IGZyb20gXCJjYWxjaXRlLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiO1xyXG5pbXBvcnQgY29vcmRpbmF0ZUZvcm1hdHRlciBmcm9tIFwiZXNyaS9nZW9tZXRyeS9jb29yZGluYXRlRm9ybWF0dGVyXCI7XHJcbmltcG9ydCB3ZWJNZXJjYXRvclV0aWxzIGZyb20gXCJlc3JpL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiO1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XHJcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XHJcbmltcG9ydCBQb2x5Z29uIGZyb20gJ2VzcmkvZ2VvbWV0cnkvUG9seWdvbic7XHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LCBhbnk+IHtcclxuXHJcbiAgICBzdGF0aWMgYWN0aXZlVmlldyA9IG51bGw7XHJcbiAgICBcclxuICAgIGdyYXBoaWNMYXllckZvdW5kID0gbmV3IEdyYXBoaWNzTGF5ZXIoe2xpc3RNb2RlOlwiaGlkZVwiLHZpc2libGU6dHJ1ZX0pO1xyXG4gICAgZ3JhcGhpY0xheWVyU2VsZWN0ZWQgPSBuZXcgR3JhcGhpY3NMYXllcih7bGlzdE1vZGU6XCJoaWRlXCIsdmlzaWJsZTp0cnVlfSk7XHJcblxyXG4gICAgc3ltYm9sRm91bmQgPSB7XHJcbiAgICAgICAgdHlwZTogXCJzaW1wbGUtZmlsbFwiLFxyXG4gICAgICAgIGNvbG9yOiBbNTEsIDUxLCAyMDQsIDAuNV0sXHJcbiAgICAgICAgc3R5bGU6IFwic29saWRcIixcclxuICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBcInNob3J0LWRhc2hcIixcclxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgd2lkdGg6IDNcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGppbXVNYXBWaWV3OiBudWxsLFxyXG4gICAgICAgICAgbGFiZWxWaXNpYmxlOnRydWUsXHJcbiAgICAgICAgICB2aWV3U2VsZWN0RHJhdzogdHJ1ZSxcclxuXHJcbiAgICAgICAgICBmb3JtRXh0cmFVcmJhbm86e1xyXG4gICAgICAgICAgICAgIC8vVE9ET1xyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAvL0NPT1JEXHJcbiAgICAgICAgICBsb25nX2VfMToxMixcclxuICAgICAgICAgIGxvbmdfZV8yOjYyLFxyXG4gICAgICAgICAgbG9uZ19lXzM6ODYsXHJcbiAgICAgICAgICBsYXRfZV8xOjQxLFxyXG4gICAgICAgICAgbGF0X2VfMjo4MCxcclxuICAgICAgICAgIGxhdF9lXzM6NjYsXHJcblxyXG4gICAgICAgICAgYXJyYXlMYXllcjogW10sXHJcbiAgICAgICAgICB2YWx1ZUJ1ZmZlckFkZHJlc3M6IDAsXHJcbiAgICAgICAgICB2YWx1ZUJ1ZmZlckNvb3JkOiAwLFxyXG4gICAgICAgICAgZ2VvbWV0cnk6bnVsbCxcclxuICAgICAgICAgIHR5cGVTZWxlY3RlZDpudWxsLFxyXG4gICAgICAgICAgbGlzdFNlcnZpY2VzOiBbXSxcclxuICAgICAgICAgIGxheWVyc0lkczpbXSxcclxuICAgICAgICAgIHNlYXJjaGVkTGF5ZXJzOltdXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLl92aWV3TGFiZWxzID0gdGhpcy5fdmlld0xhYmVscy5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLl92aWV3U2VsZWN0RHJhdyA9IHRoaXMuX3ZpZXdTZWxlY3REcmF3LmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMuc2F2ZVN0YXRlID0gdGhpcy5zYXZlU3RhdGUuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVRhYnMgPSB0aGlzLm9uQ2hhbmdlVGFicy5iaW5kKHRoaXMpXHJcblxyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzcyA9IHRoaXMub25DaGFuZ2VTbGlkZXJBZGRyZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VTbGlkZXJDb29yZCA9IHRoaXMub25DaGFuZ2VTbGlkZXJDb29yZC5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5ID0gdGhpcy5vbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeS5iaW5kKHRoaXMpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGUgPSB0aGlzLm9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGUuYmluZCh0aGlzKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyID0gdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUFkZHJlc3MgPSB0aGlzLm9uQ2xpY2tSZXNlYXJjaGZyb21BZGRyZXNzLmJpbmQodGhpcyk7XHJcbiAgICAgIHRoaXMub25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkID0gdGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgIHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycyA9IHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycy5iaW5kKHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBubHMgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmludGwgPyB0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7IGlkOiBpZCwgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0gfSkgOiBpZFxyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2ZVZpZXcgPSAoKT0+IFdpZGdldC5hY3RpdmVWaWV3O1xyXG4gICAgXHJcbiAgICBnZXRBbGxDaGVja2VkTGF5ZXJzKCl7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVmlldyA9IFdpZGdldC5hY3RpdmVWaWV3O1xyXG4gICAgICAgIGxldCBhbGxDaGVja2VkTGF5ZXJzID0gW107XHJcbiAgICAgICAgaWYgKGFjdGl2ZVZpZXcpe1xyXG4gICAgICAgICAgICBjb25zdCBhbGxMYXllcnMgPSBhY3RpdmVWaWV3LnZpZXcubWFwLmFsbExheWVycy5pdGVtcztcclxuICAgICAgICAgICAgY29uc3QgbGlzdFNlcnZpY2VzID0gdGhpcy5zdGF0ZS5saXN0U2VydmljZXM7XHJcbiAgICAgICAgICAgIGlmIChsaXN0U2VydmljZXMubGVuZ3RoICYmIGFsbExheWVycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9MDtpIDwgbGlzdFNlcnZpY2VzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VLZXkgPSBsaXN0U2VydmljZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZXMgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2VydmljZSA9IHNlcnZpY2VzW3NlcnZpY2VLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbExheWVycy5mb3JFYWNoKGVsPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC51cmwgPT09IGN1cnJlbnRTZXJ2aWNlLnVybCAmJiBjdXJyZW50U2VydmljZS5sYXllckxpc3RJZHMuaW5jbHVkZXMoZWwubGF5ZXJJZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsQ2hlY2tlZExheWVycy5wdXNoKGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENoZWNrZWRMYXllcnM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEZlYXR1cmVMYXllciAoKXtcclxuICAgICAgICBjb25zdCBmZWF0dXJlVXJsID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZXMuc2VydmljZV8xLnVybDtcclxuICAgICAgICByZXR1cm4gbmV3IEZlYXR1cmVMYXllcih7dXJsOmZlYXR1cmVVcmwsb3V0RmllbGRzOiBbXCIqXCJdfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyIChqbXY6IEppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgaWYgKGptdikge1xyXG4gICAgICAgICAgICBqbXYudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY0xheWVyRm91bmQpO1xyXG4gICAgICAgICAgICBqbXYudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY0xheWVyU2VsZWN0ZWQpO1xyXG4gICAgICAgICAgICBXaWRnZXQuYWN0aXZlVmlldyA9IGptdjtcclxuICAgICAgICAgICAgbGV0IGFycmF5U3VwID0gW107XHJcbiAgICAgICAgICAgIGxldCBsYXllcnNJZHMgPSBbXVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZXMgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlc1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlSXRlbXMgPSBPYmplY3Qua2V5cyhzZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgIHNlcnZpY2VJdGVtcy5mb3JFYWNoKChrZXkpPT57XHJcbiAgICAgICAgICAgICAgICBhcnJheVN1cC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDpzZXJ2aWNlc1trZXldLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOmtleVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xyXG4gICAgICAgICAgICAgICAgdmlldzogam12LnZpZXcsXHJcbiAgICAgICAgICAgICAgICByZXN1bHRHcmFwaGljRW5hYmxlZDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcInNlYXJjaC13aWRnZXQtYWRkcmVzc1wiLy9UT0RPIG1pZ2xpb3JhcmUgc2VuemEgaWQgY2FibGF0b1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlbGVjdC1yZXN1bHRcIiwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQgJiYgZXZlbnQucmVzdWx0ICYmIGV2ZW50LnJlc3VsdC5mZWF0dXJlKXtcclxuICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5ncmFwaGljcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeUJ1ZmZlcjogUG9seWdvbiA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlciggZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksIDEwMDAsIFwibWV0ZXJzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5QnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sRm91bmRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgam12LnNlbGVjdEZlYXR1cmVzQnlHcmFwaGljKHBvbHlnb25HcmFwaGljLFwiY29udGFpbnNcIikudGhlbigocmVzdWx0cyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRMYXllcnMgPSBoZWxwZXIuZ2V0U2VsZWN0ZWRMYXllckZyb21TZWFyY2gocmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaGVkTGF5ZXJzOnNlYXJjaGVkTGF5ZXJzfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmFkZChwb2x5Z29uR3JhcGhpYyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlYXJjaC1jbGVhclwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlMYXllcjogYXJyYXlTdXAsXHJcbiAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12LFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0OnNlYXJjaFdpZGdldCxcclxuICAgICAgICAgICAgICAgIGxheWVyc0lkczpsYXllcnNJZHNcclxuICAgICAgICAgICAgICAgIC8vIHNrZXRjaFdpZGdldDpza2V0Y2hcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlVGFicygpe1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljTGF5ZXJTZWxlY3RlZC5yZW1vdmVBbGwoKTtcclxuICAgIH1cclxuICAgIF92aWV3TGFiZWxzKCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxhYmVsVmlzaWJsZTogIXRoaXMuc3RhdGUubGFiZWxWaXNpYmxlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgX3ZpZXdTZWxlY3REcmF3KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHZpZXdTZWxlY3REcmF3OiAhdGhpcy5zdGF0ZS52aWV3U2VsZWN0RHJhd1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQudmlzaWJsZSA9IHRoaXMuc3RhdGUudmlld1NlbGVjdERyYXc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9FeHRyYVVyYmFub1xyXG4gICAgb25DaGFuZ2VFeHRyYVVyYmFubyhlLHR5cGUpe1xyXG4gICAgICBpZih0eXBlPT1cImluZGlyaXp6b1wiKXtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuZm9ybUV4dHJhVXJiYW5vLmluZGlyaXp6byA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLnN0YXRlKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5mb3JtRXh0cmFVcmJhbm8ua20gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBzYXZlU3RhdGUoa2V5LGUpe1xyXG4gICAgICAgIGNvbnN0IHN0YXRlTmV3ID0ge31cclxuICAgICAgICBzdGF0ZU5ld1trZXldID0gZS50YXJnZXQgPyBlLnRhcmdldC52YWx1ZTogZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZU5ldyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkNoYW5nZVNlbGVjdExheWVyIChlLG4scyl7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvcGllZExpc3RTZXJ2aWNlcyA9IFsuLi50aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcyxuXTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bGlzdFNlcnZpY2VzOmNvcGllZExpc3RTZXJ2aWNlc30pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmluZGV4T2Yobik7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3BpZWRMaXN0U2VydmljZXMgPSBbLi4udGhpcy5zdGF0ZS5saXN0U2VydmljZXNdO1xyXG4gICAgICAgICAgICAgICAgY29waWVkTGlzdFNlcnZpY2VzLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xpc3RTZXJ2aWNlczpjb3BpZWRMaXN0U2VydmljZXN9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uQ2hhbmdlU2VsZWN0VHlwZUdlb21ldHJ5KGUpe1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3N2VG9BcnJheShzdHIsIGRlbGltaXRlciA9IFwiLFwiKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHN0ci5zbGljZSgwLCBzdHIuaW5kZXhPZihcIlxcblwiKSkuc2xpY2UoMCwgc3RyLmluZGV4T2YoXCJcXHJcIikpLnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICAgICAgY29uc3Qgcm93cyA9IHN0ci5zbGljZShzdHIuaW5kZXhPZihcIlxcblwiKSArIDEpLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIHJldHVybiByb3dzLm1hcChmdW5jdGlvbiAocm93KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHJvdy5zcGxpdChkZWxpbWl0ZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gaGVhZGVycy5yZWR1Y2UoZnVuY3Rpb24gKG9iamVjdCwgaGVhZGVyLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0W2hlYWRlcl0gPSB2YWx1ZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2hhbmdlRmlsZUNzdkNvb3JkaW5hdGUoZSl7XHJcbiAgICAgICAgYXdhaXQgY29vcmRpbmF0ZUZvcm1hdHRlci5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VTbGlkZXJBZGRyZXNzKGUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZUJ1ZmZlckFkZHJlc3M6IHBhcnNlSW50KGlzTmFOKGUpID8gZS50YXJnZXQudmFsdWU6IGUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNoYW5nZVNsaWRlckNvb3JkKGUpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICB2YWx1ZUJ1ZmZlckNvb3JkOiBwYXJzZUludChpc05hTihlKSA/IGUudGFyZ2V0LnZhbHVlOiBlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgb25DbGlja1Jlc2VhcmNoZnJvbUFkZHJlc3MoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnRhYmxlcy5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICAgICAgLy9wYXJhbWV0cmkgZm9ybVxyXG4gICAgICAgIGxldCBhcnJheUdlb21ldHJ5ID0gW107XHJcbiAgICAgICAgbGV0IGNvbmZpZ0Vycm9ycyA9IFtdO1xyXG4gICAgICAgIC8vVE9ETyBQUkVOREVSRSBHRU9NRVRSSUFcclxuICAgICAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLmdyYXBoaWNzLmZvckVhY2goZz0+e1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2VzO1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlS2V5cyA9IE9iamVjdC5rZXlzKHNlcnZpY2VzKTtcclxuICAgICAgICAgICAgaWYgKHNlcnZpY2VLZXlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgc2VydmljZUtleXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNlcnZpY2UgPSBzZXJ2aWNlc1tzZXJ2aWNlS2V5c1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRMYXllcnMgPSB0aGlzLnN0YXRlLnNlYXJjaGVkTGF5ZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hlZExheWVycy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc2VhcmNoZWRMYXllcnMuZmluZCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5mZWF0dXJlU2VydmVyID09PSBjdXJyZW50U2VydmljZS51cmwgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZXJ2aWNlLmxheWVyTGlzdElkcy5pbmNsdWRlcyhpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJvb2xlYW4oaXRlbSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGcuZ2VvbWV0cnksIHRoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChnLmdlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2NvbnRyb2xsbyBlcnJvcmlcclxuICAgICAgICBsZXQgYXJyYXlFcnJvcnMgPSBbXTtcclxuICAgICAgICBpZihhcnJheUdlb21ldHJ5Lmxlbmd0aCkgeyAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZ2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBhcnJheUVycm9ycy5wdXNoKHRoaXMubmxzKFwic2VsZWN0R2VvbWV0cnlBbGVydFwiKSk7XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmxlbmd0aCkgYXJyYXlFcnJvcnMucHVzaCh0aGlzLm5scyhcInNlbGVjdFNlcnZpY2VcIikpO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCkgYXJyYXlFcnJvcnMucHVzaCh0aGlzLm5scyhcInNlbGVjdFNlbGVjdGlvblwiKSk7XHJcbiAgICAgICAgaWYgKCFhcnJheUdlb21ldHJ5Lmxlbmd0aCAmJiBjb25maWdFcnJvcnMubGVuZ3RoID4gMCkgYXJyYXlFcnJvcnMgPSBjb25maWdFcnJvcnNcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOmFycmF5RXJyb3JzLmpvaW4oKX0pO1xyXG5cclxuICAgICAgICBpZihhcnJheUVycm9ycy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5jb25maWcuc2V0dGluZ3MuaWRXaWRnZXRUYWJsZSAhPT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT57XHJcbiAgICAgICAgICAgICAgICBpZihmICYmIGYudHlwZT09PVwiZmVhdHVyZVwiICYmIHRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmluZGV4T2YoaW5kZXgpICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZi5sYWJlbGluZ0luZm8/Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYubGFiZWxpbmdJbmZvWzBdLnN5bWJvbC5mb250LmZhbWlseSA9IFwiQXJpYWxcIjsvL2ZpeCBmb250IHZlcmRhbmEgbm90IGluIHN0YXRpYyBlc3JpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYubGFiZWxzVmlzaWJsZSA9IHRoaXMuc3RhdGUubGFiZWxWaXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkV2lkZ2V0VGFibGUgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXR0aW5ncy5pZFdpZGdldFRhYmxlICE9PSBcIiBcIiA/IHRoaXMucHJvcHMuY29uZmlnLnNldHRpbmdzLmlkV2lkZ2V0VGFibGUgOlwidmFsdWVcIlxyXG4gICAgICAgICAgICAvL21hbmRvIGxheWVyaWQgYWQgVGFibGVMaXN0XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICBhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsYXllck9wZW5cIixcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVTZWxlY3RlZDp0aGlzLnN0YXRlLnR5cGVTZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6dGhpcy5zdGF0ZS5nZW9tZXRyeS50b0pTT04oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFNlcnZpY2VzOnRoaXMuc3RhdGUubGlzdFNlcnZpY2VzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVWaWV3OnRoaXMuZ2V0QWN0aXZlVmlldyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QWxsTGF5ZXJzOnRoaXMuZ2V0QWxsQ2hlY2tlZExheWVyc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBvbkNsaWNrUmVzZWFyY2hmcm9tQ29vcmQoKXtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnRhYmxlcy5yZW1vdmVBbGwoKTtcclxuICAgICAgICBsZXQgbG9uZyA9IHRoaXMuc3RhdGUubG9uZ19lXzEgKyBcIi5cIiArIHRoaXMuc3RhdGUubG9uZ19lXzIgKyB0aGlzLnN0YXRlLmxvbmdfZV8zICsgXCIqXCI7XHJcbiAgICAgICAgbGV0IGxhdCA9IHRoaXMuc3RhdGUubGF0X2VfMSArIFwiLlwiICsgdGhpcy5zdGF0ZS5sYXRfZV8yICsgdGhpcy5zdGF0ZS5sYXRfZV8zICsgXCIqXCI7XHJcblxyXG4gICAgICAgIGF3YWl0IGNvb3JkaW5hdGVGb3JtYXR0ZXIubG9hZCgpO1xyXG4gICAgICAgIGxldCBwb2ludEdlb2dyYXBoaWMgPSBjb29yZGluYXRlRm9ybWF0dGVyLmZyb21MYXRpdHVkZUxvbmdpdHVkZShsYXQgKyBcInxcIiArIGxvbmcpO1xyXG4gICAgICAgIGxldCBwb2ludCA9IHdlYk1lcmNhdG9yVXRpbHMuZ2VvZ3JhcGhpY1RvV2ViTWVyY2F0b3IocG9pbnRHZW9ncmFwaGljKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8ocG9pbnQpO1xyXG5cclxuICAgICAgICBsZXQgZ2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIocG9pbnQsMTAwMDAsXCJtZXRlcnNcIik7XHJcbiAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnksXHJcbiAgICAgICAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2xGb3VuZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc2VhcmNoZWRMYXllcnMgPSBbXVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnNlbGVjdEZlYXR1cmVzQnlHcmFwaGljKHBvbHlnb25HcmFwaGljLFwiY29udGFpbnNcIikudGhlbigocmVzdWx0cyk9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNlYXJjaGVkTGF5ZXJzID0gaGVscGVyLmdldFNlbGVjdGVkTGF5ZXJGcm9tU2VhcmNoKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlHZW9tZXRyeSA9IFtdO1xyXG4gICAgICAgICAgICAvL1RPRE8gUFJFTkRFUkUgR0VPTUVUUklBXHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuZ3JhcGhpY3MuZm9yRWFjaChnPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2VzO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZUtleXMgPSBPYmplY3Qua2V5cyhzZXJ2aWNlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VydmljZUtleXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgc2VydmljZUtleXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlID0gc2VydmljZXNbc2VydmljZUtleXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoZWRMYXllcnM/Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gc2VhcmNoZWRMYXllcnMuZmluZCgoaXRlbSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmZlYXR1cmVTZXJ2ZXIgPT09IGN1cnJlbnRTZXJ2aWNlLnVybCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZXJ2aWNlLmxheWVyTGlzdElkcy5pbmNsdWRlcyhpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQm9vbGVhbihpdGVtKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZy5nZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihnLmdlb21ldHJ5LCB0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzcywgXCJtZXRlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlHZW9tZXRyeS5wdXNoKGcuZ2VvbWV0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy9jb250cm9sbG8gZXJyb3JpXHJcbiAgICAgICAgICAgIGxldCBhcnJheUVycm9ycyA9IFtdO1xyXG4gICAgICAgICAgICBpZihhcnJheUdlb21ldHJ5Lmxlbmd0aCkgeyAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBhcnJheUVycm9ycy5wdXNoKFwiU2VsZXppb25hIHVuYSBnZW9tZXRyaWEgaW4gbWFwcGFcIik7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5sZW5ndGgpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgYWxtZW5vIHVuIHNlcnZpemlvXCIpO1xyXG4gICAgICAgICAgICBpZighdGhpcy5zdGF0ZS50eXBlU2VsZWN0ZWQpIGFycmF5RXJyb3JzLnB1c2goXCJTZWxlemlvbmEgdW5hIHRpcG9sb2dpYSBkaSBzZWxlemlvbmVcIik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTphcnJheUVycm9ycy5qb2luKClcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZihhcnJheUVycm9ycy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5jb25maWcuc2V0dGluZ3MuaWRXaWRnZXRUYWJsZSAhPT0gXCJcIil7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGYgJiYgZi50eXBlPT09XCJmZWF0dXJlXCIgJiYgdGhpcy5zdGF0ZS5saXN0U2VydmljZXMuaW5kZXhPZihpbmRleCkgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZi5sYWJlbGluZ0luZm8/Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLmxhYmVsaW5nSW5mb1swXS5zeW1ib2wuZm9udC5mYW1pbHkgPSBcIkFyaWFsXCI7Ly9maXggZm9udCB2ZXJkYW5hIG5vdCBpbiBzdGF0aWMgZXNyaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5sYWJlbHNWaXNpYmxlID0gdGhpcy5zdGF0ZS5sYWJlbFZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vbWFuZG8gbGF5ZXJpZCBhZCBUYWJsZUxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXllck9wZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVNlbGVjdGVkOnRoaXMuc3RhdGUudHlwZVNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6dGhpcy5zdGF0ZS5nZW9tZXRyeS50b0pTT04oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RTZXJ2aWNlczp0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVZpZXc6dGhpcy5nZXRBY3RpdmVWaWV3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0QWxsTGF5ZXJzOnRoaXMuZ2V0QWxsQ2hlY2tlZExheWVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY0xheWVyRm91bmQuYWRkKHBvbHlnb25HcmFwaGljKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRyZXNzIGppbXUtd2lkZ2V0ICBjb250YWluZXItZmx1aWRcIiBzdHlsZT17e292ZXJmbG93OlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJiB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJiB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19IG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjZW50cmljIGNoZWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwibXItMlwiIGFyaWEtbGFiZWw9XCJWaXN1YWxpenphIGRpc2Vnbm8gc2VsZXppb25lXCIgY2hlY2tlZD17dGhpcy5ncmFwaGljTGF5ZXJGb3VuZC52aXNpYmxlfSBvbkNoYW5nZT17dGhpcy5fdmlld1NlbGVjdERyYXd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwidmlld0RyYXdpbmdTZWxlY3Rpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjZW50cmljIGNoZWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwibXItMlwiIGFyaWEtbGFiZWw9XCJWaXN1YWxpenphIGRpc2Vnbm8gc2VsZXppb25lXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5sYWJlbFZpc2libGV9IG9uQ2hhbmdlPXt0aGlzLl92aWV3TGFiZWxzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcInZpZXdMYWJlbHNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRhYnNcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cInRhYi0xXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlVGFic31cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0YWJzXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRhYiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItVXJiYW5vXCIgY2xhc3NOYW1lPVwiIHAtMVwiIHRpdGxlPVwiVXJiYW5vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGhpcy5ubHMoXCJzZWFyY2hCeUFkZHJlc3NcIil9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLXdpZGdldC1hZGRyZXNzXCIgY2xhc3NOYW1lPVwidy0xMDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb24gY2xhc3NOYW1lPVwibXQtNCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT17dGhpcy5ubHMoXCJzZWxlY3RMYXllclF1ZXJ5XCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0zIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGhpcy5ubHMoXCJzZWxlY3RlZExheWVyc1wiKX06IHt0aGlzLnN0YXRlLmxpc3RTZXJ2aWNlcy5sZW5ndGh9IC8ge3RoaXMuc3RhdGUuYXJyYXlMYXllci5sZW5ndGh9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmFycmF5TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0l0ZW09e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5ubHMoXCJsaXN0U2VydmljZXNcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbkl0ZW0gaWNvbi1zdGFydD1cImNhclwiIGl0ZW1UaXRsZT17dGhpcy5ubHMoXCJyZXNlYXJjaE9wdGlvblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJidWZmZXJWYWx1ZVwiKX0gPE51bWVyaWNJbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJBZGRyZXNzfSB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckFkZHJlc3N9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc30gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy01MFwiLz4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcInR5cGVPZlNlbGVjdGlvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cInctMTAwIG10LTJcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeX0gcGxhY2Vob2xkZXI9e3RoaXMubmxzKFwidHlwZVNlbGVjdGlvblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJpbnRlcnNlY3RzXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNvbnRhaW5zXCI+Q29udGFpbnM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNyb3NzZXNcIj5Dcm9zc2VzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlbnZlbG9wZS1pbnRlcnNlY3RzXCI+RW52ZWxvcGUgSW50ZXJzZWN0czwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW5kZXgtaW50ZXJzZWN0c1wiPkluZGV4IEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk92ZXJsYXBzXCI+T3ZlcmxhcHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInRvdWNoZXNcIj5Ub3VjaGVzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ3aXRoaW5cIj5XaXRoaW48L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJlbGF0aW9uXCI+UmVsYXRpb248L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInctMTAwXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUmVzZWFyY2hmcm9tQWRkcmVzc30+e3RoaXMubmxzKFwic2VhcmNoSW5MYXllcnNcIil9PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgJiYgdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwid2FybmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXCJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIHsvKjxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUV4dHJhdXJiYW5vXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHAtMVwiIHRpdGxlPVwiRXh0cmF1cmJhbm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjVcIj5JbmRpcml6em86PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmRpcml6em9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI1XCI+S206PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiPiovfVxyXG4gICAgICAgICAgICAgICAgPFRhYiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItQ29vcmRcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gcC0xXCIgdGl0bGU9XCJDb29yZGluYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb25nLiAoWCk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbG9uZ19lXzEnLGUpfSB2YWx1ZT17dGhpcy5zdGF0ZS5sb25nX2VfMX0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy0yNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWVyaWNJbnB1dCBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCdsb25nX2VfMicsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxvbmdfZV8yfSBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayB3LTI1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtZXJpY0lucHV0IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zYXZlU3RhdGUoJ2xvbmdfZV8zJyxlKX0gdmFsdWU9e3RoaXMuc3RhdGUubG9uZ19lXzN9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0yNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF0LiAoWSk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbGF0X2VfMScsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxhdF9lXzF9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbGF0X2VfMicsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxhdF9lXzJ9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1lcmljSW5wdXQgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnbGF0X2VfMycsZSl9IHZhbHVlPXt0aGlzLnN0YXRlLmxhdF9lXzN9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctMjVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uIGNsYXNzTmFtZT1cIm10LTQgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9e3RoaXMubmxzKFwic2VsZWN0TGF5ZXJRdWVyeVwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMubmxzKFwic2VsZWN0ZWRMYXllcnNcIil9OiB7dGhpcy5zdGF0ZS5saXN0U2VydmljZXMubGVuZ3RofSAvIHt0aGlzLnN0YXRlLmFycmF5TGF5ZXIubGVuZ3RofTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5hcnJheUxheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tJdGVtPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMubmxzKFwibGlzdFNlcnZpY2VzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhbGNpdGVBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhbGNpdGVBY2NvcmRpb25JdGVtIGljb24tc3RhcnQ9XCJjYXJcIiBpdGVtVGl0bGU9e3RoaXMubmxzKFwicmVzZWFyY2hPcHRpb25cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMubmxzKFwiYnVmZmVyVmFsdWVcIil9IDxOdW1lcmljSW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9IGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHctNTBcIi8+IG1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs1MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2xpZGVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJ0eXBlT2ZTZWxlY3Rpb25cIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBjbGFzc05hbWU9XCJ3LTEwMCBtdC0yXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RUeXBlR2VvbWV0cnl9IHBsYWNlaG9sZGVyPXt0aGlzLm5scyhcInR5cGVTZWxlY3Rpb25cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW50ZXJzZWN0c1wiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5JbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjb250YWluc1wiPkNvbnRhaW5zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjcm9zc2VzXCI+Q3Jvc3NlczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZW52ZWxvcGUtaW50ZXJzZWN0c1wiPkVudmVsb3BlIEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImluZGV4LWludGVyc2VjdHNcIj5JbmRleCBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJPdmVybGFwc1wiPk92ZXJsYXBzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ0b3VjaGVzXCI+VG91Y2hlczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwid2l0aGluXCI+V2l0aGluPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJyZWxhdGlvblwiPlJlbGF0aW9uPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ3LTEwMFwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkfT57dGhpcy5ubHMoXCJzZWFyY2hJbkxheWVyc1wiKX08L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgIDxUYWIgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUNvb3JkLWZpbGVcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gcC0xXCIgdGl0bGU9XCJNdWx0aWNvb3JkaW5hdGUgZGEgZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMCBmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcImFkZENzdkZpbGVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VGaWxlQ3N2Q29vcmRpbmF0ZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZm9ybS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcImZvcm1hdHRlZFhZWlwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHt0aGlzLm5scyhcImV4YW1wbGVcIil9OiBQdW50b18xLDM4LjcyMzIzMDU2LDE2LjQ5NTk4MDU2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FsY2l0ZUFjY29yZGlvbiBjbGFzc05hbWU9XCJtdC00IG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiU2VsZXppb25hIGxheWVycyBkYSBpbnRlcnJvZ2FyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTMgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLm5scyhcInNlbGVjdGVkTGF5ZXJzXCIpfToge3RoaXMuc3RhdGUubGlzdFNlcnZpY2VzLmxlbmd0aH0gLyB7dGhpcy5zdGF0ZS5hcnJheUxheWVyLmxlbmd0aH08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuYXJyYXlMYXllcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrSXRlbT17dGhpcy5vbkNoYW5nZVNlbGVjdExheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLm5scyhcImxpc3RTZXJ2aWNlc1wiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYWxjaXRlQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxjaXRlQWNjb3JkaW9uSXRlbSBpY29uLXN0YXJ0PVwiY2FyXCIgaXRlbVRpdGxlPVwiT3B6aW9uZSBkaSByaWNlcmNhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5ubHMoXCJidWZmZXJWYWx1ZVwiKX0gPE51bWVyaWNJbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH0gdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVCdWZmZXJDb29yZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTbGlkZXJDb29yZH0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgdy01MFwiLz4gbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlQnVmZmVyQ29vcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUJ1ZmZlckNvb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezUwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTbGlkZXJDb29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLm5scyhcInR5cGVPZlNlbGVjdGlvblwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT1cInctMTAwIG10LTJcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNlbGVjdFR5cGVHZW9tZXRyeX0gcGxhY2Vob2xkZXI9XCJTZWxlemlvbmUgdGlwby4uLlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaW50ZXJzZWN0c1wiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5JbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjb250YWluc1wiPkNvbnRhaW5zPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjcm9zc2VzXCI+Q3Jvc3NlczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZW52ZWxvcGUtaW50ZXJzZWN0c1wiPkVudmVsb3BlIEludGVyc2VjdHM8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImluZGV4LWludGVyc2VjdHNcIj5JbmRleCBJbnRlcnNlY3RzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJPdmVybGFwc1wiPk92ZXJsYXBzPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ0b3VjaGVzXCI+VG91Y2hlczwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwid2l0aGluXCI+V2l0aGluPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJyZWxhdGlvblwiPlJlbGF0aW9uPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsY2l0ZUFjY29yZGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBjbGFzc05hbWU9XCJ3LTEwMFwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1Jlc2VhcmNoZnJvbUNvb3JkfT57dGhpcy5ubHMoXCJzZWFyY2hJbkxheWVyc1wiKX08L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAmJiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSAhPT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcIlwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9