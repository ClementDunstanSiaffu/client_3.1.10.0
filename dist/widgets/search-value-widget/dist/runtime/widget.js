System.register(["jimu-core","jimu-arcgis","esri/widgets/Search","esri/layers/FeatureLayer","jimu-ui","esri/geometry/geometryEngine","esri/Graphic","esri/widgets/Search/SearchSource","esri/rest/support/Query"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search_SearchSource__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search_SearchSource__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Graphic__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search_SearchSource__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/search-value-widget/src/helper/helper.ts":
/*!**************************************************************************!*\
  !*** ./your-extensions/widgets/search-value-widget/src/helper/helper.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Helper {
    constructor() {
        this.getAllSuggestions = (features, params, searchedField) => {
            var _a;
            // const suggestions = [];
            const searchItem = (_a = params === null || params === void 0 ? void 0 : params.suggestTerm) !== null && _a !== void 0 ? _a : " ";
            const suggestions = features.reduce((newSuggestions, { attributes }) => {
                // const keys = Object.keys(attributes);
                const keys = [searchedField];
                if (keys.length) {
                    keys.forEach((keyVal) => {
                        const obj = {};
                        // let key,text,sourceIndex;
                        let status = false;
                        if (typeof attributes[keyVal] === "number") {
                            status = attributes[keyVal] === parseInt(searchItem);
                        }
                        else if (typeof attributes[keyVal] === "string") {
                            status = attributes[keyVal].includes(searchItem);
                        }
                        if (status) {
                            obj["key"] = attributes["OBJECTID"],
                                obj["text"] = `${attributes[keyVal]}`,
                                obj["sourceIndex"] = params.sourceIndex;
                            newSuggestions.push(obj);
                        }
                        // if (typeof attributes[keyVal] === "number"){
                        //     if (attributes[keyVal] === searchItem){
                        //         obj["key"] = "name",
                        //         obj["text"] = attributes[keyVal],
                        //         obj["sourceIndex"] = params.sourceIndex
                        //         newSuggestions.push(obj)
                        //     }
                        // }else if (typeof attributes[keyVal] === "string"){
                        //     if (attributes[keyVal].includes(searchItem)){
                        //         obj["key"] = "name",
                        //         obj["text"] = attributes[keyVal],
                        //         obj["sourceIndex"] = params.sourceIndex
                        //         newSuggestions.push(obj)
                        //     }
                        // }
                    });
                }
                return newSuggestions;
            }, []);
            return suggestions;
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Helper());


/***/ }),

/***/ "esri/Graphic":
/*!*******************************!*\
  !*** external "esri/Graphic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Graphic__;

/***/ }),

/***/ "esri/geometry/geometryEngine":
/*!***********************************************!*\
  !*** external "esri/geometry/geometryEngine" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__;

/***/ }),

/***/ "esri/layers/FeatureLayer":
/*!*******************************************!*\
  !*** external "esri/layers/FeatureLayer" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__;

/***/ }),

/***/ "esri/rest/support/Query":
/*!******************************************!*\
  !*** external "esri/rest/support/Query" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__;

/***/ }),

/***/ "esri/widgets/Search":
/*!**************************************!*\
  !*** external "esri/widgets/Search" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__;

/***/ }),

/***/ "esri/widgets/Search/SearchSource":
/*!***************************************************!*\
  !*** external "esri/widgets/Search/SearchSource" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search_SearchSource__;

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
/*!****************************************************************************!*\
  !*** ./your-extensions/widgets/search-value-widget/src/runtime/widget.tsx ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var esri_widgets_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/widgets/Search */ "esri/widgets/Search");
/* harmony import */ var esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/layers/FeatureLayer */ "esri/layers/FeatureLayer");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/geometry/geometryEngine */ "esri/geometry/geometryEngine");
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_widgets_Search_SearchSource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/widgets/Search/SearchSource */ "esri/widgets/Search/SearchSource");
/* harmony import */ var esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/rest/support/Query */ "esri/rest/support/Query");
/* harmony import */ var _helper_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helper/helper */ "./your-extensions/widgets/search-value-widget/src/helper/helper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.initialZoomValue = 0;
        this.searchWidget = null;
        this.cleared = false;
        this.getFieldInfos = (fields) => {
            const newFields = [];
            if (fields.length)
                fields.forEach(el => { newFields.push({ fieldName: el.name, label: el.alias }); });
            return newFields;
        };
        this.selectFeatureLayer = (geometry) => {
            const activeView = this.state.jmv;
            if (activeView) {
                activeView === null || activeView === void 0 ? void 0 : activeView.selectFeaturesByGraphic(geometry, "contains").then((results) => { }).catch((err) => { });
            }
        };
        this.onActiveViewChange = (jmv) => __awaiter(this, void 0, void 0, function* () {
            jmv.clearSelectedFeatures();
            this.initialZoomValue = jmv.view.zoom;
            jmv.view.popup.visible = true;
            const unrequiredValue = ["", " "];
            let url = this.props.config.service.url;
            const layerId = this.props.config.service.layerId;
            const searchedField = this.props.config.service.searchField;
            if (!unrequiredValue.includes(layerId))
                url = url + "/" + layerId.trim();
            if (url) {
                const featureLayer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"](url);
                if (featureLayer) {
                    featureLayer.load().then(() => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_8__["default"]();
                        query.returnGeometry = true;
                        query.outFields = [`${searchedField}`];
                        if (!query.outFields.includes("OBJECTID"))
                            query.outFields.push("OBJECTID");
                        query.where = "1=1";
                        let results;
                        if (featureLayer.queryFeatures) {
                            results = featureLayer.queryFeatures(query);
                        }
                        else {
                            const layerView = yield jmv.view.whenLayerView(featureLayer);
                            if (layerView.queryFeatures)
                                results = layerView.queryFeatures(query);
                        }
                        this.setState({ loader: false, jmv: jmv });
                        const fieldInfos = this.getFieldInfos((_a = featureLayer.fields) !== null && _a !== void 0 ? _a : []);
                        const customSearchSource = new esri_widgets_Search_SearchSource__WEBPACK_IMPORTED_MODULE_7__["default"]({
                            placeholder: 'Search',
                            minSuggestCharacters: 0,
                            getSuggestions: (params) => {
                                return results.then((data) => {
                                    var _a;
                                    let defaultSuggestions = [];
                                    if ((_a = data === null || data === void 0 ? void 0 : data.features) === null || _a === void 0 ? void 0 : _a.length) {
                                        const features = data.features;
                                        defaultSuggestions = _helper_helper__WEBPACK_IMPORTED_MODULE_9__["default"].getAllSuggestions(features, params, searchedField);
                                    }
                                    return defaultSuggestions;
                                })
                                    .catch((err) => {
                                });
                            },
                            getResults: (params) => {
                                return results.then((data) => {
                                    var _a, _b;
                                    const results = [];
                                    let searchResult = {};
                                    let toSearch = params.suggestResult.text;
                                    const field = params.suggestResult.key;
                                    const sourceIndex = params.suggestResult.sourceIndex;
                                    if (!isNaN(parseInt(toSearch)) && typeof parseInt(toSearch) === "number") {
                                        toSearch = parseInt(toSearch);
                                    }
                                    const features = (_a = data === null || data === void 0 ? void 0 : data.features) !== null && _a !== void 0 ? _a : [];
                                    if (features.length) {
                                        for (let i = 0; i < features.length; i++) {
                                            const attributes = (_b = features[i]) === null || _b === void 0 ? void 0 : _b.attributes;
                                            let keys = [searchedField];
                                            if (keys.length) {
                                                keys.forEach(key => {
                                                    let status = false;
                                                    if (toSearch === attributes[key])
                                                        status = true;
                                                    if (status)
                                                        results.push(features[i]);
                                                });
                                            }
                                        }
                                        if (results.length) {
                                            const searchedItem = results[0];
                                            const searchedGeometry = searchedItem.geometry;
                                            if (searchedGeometry) {
                                                const arrayGeometry = [];
                                                this.cleared = false;
                                                const newGeometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_5__["default"].buffer(searchedGeometry, 1, "meters");
                                                arrayGeometry.push(newGeometry);
                                                try {
                                                    //@ts-ignore
                                                    const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({ geometry: newGeometry, symbol: null });
                                                    this.selectFeatureLayer(polygonGraphic);
                                                }
                                                catch (err) { }
                                                if (arrayGeometry.length) {
                                                    const unifiedGeomtry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_5__["default"].union(arrayGeometry);
                                                    if (jmv)
                                                        jmv.view.popup.visible = true;
                                                    jmv.view.goTo(unifiedGeomtry.extent);
                                                    searchResult["extent"] = unifiedGeomtry.extent;
                                                }
                                                searchResult["feature"] = searchedItem;
                                                searchResult["target"] = searchedItem;
                                            }
                                        }
                                        searchResult["key"] = field;
                                        searchResult["name"] = params.suggestResult.text;
                                        searchResult["sourceIndex"] = sourceIndex;
                                    }
                                    return [searchResult];
                                });
                            },
                            popupEnabled: true,
                            popupTemplate: { title: "Search value widget", content: [{ type: "fields", fieldInfos: fieldInfos }] }
                        });
                        const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_2__["default"]({
                            view: jmv.view,
                            container: "search-widget-search-value",
                            includeDefaultSources: false,
                            sources: [customSearchSource],
                            popupTemplate: { title: "Search value widget", content: [{ type: "fields", fieldInfos: fieldInfos }] }
                        });
                        searchWidget.on("select-result", (event) => {
                            if (event && event.result && event.result.feature) {
                                if (event.result.feature.geometry) {
                                    const arrayGeometry = [];
                                    this.cleared = false;
                                    const newGeometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_5__["default"].buffer(event.result.feature.geometry, 1, "meters");
                                    arrayGeometry.push(newGeometry);
                                    try {
                                        //@ts-ignore
                                        const polygonGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_6__["default"]({ geometry: newGeometry, symbol: null });
                                        this.selectFeatureLayer(polygonGraphic);
                                    }
                                    catch (err) { }
                                    if (arrayGeometry.length) {
                                        const unifiedGeomtry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_5__["default"].union(arrayGeometry);
                                        jmv.view.popup.visible = true;
                                        jmv.view.goTo(unifiedGeomtry.extent);
                                    }
                                }
                            }
                        });
                        searchWidget.on("search-clear", (event) => {
                            if (!this.cleared) {
                                jmv.clearSelectedFeatures();
                                jmv.view.popup.visible = false;
                                jmv.view.goTo({ center: jmv.view.center, zoom: this.initialZoomValue });
                                this.cleared = true;
                                searchWidget.clear();
                            }
                        });
                        this.searchWidget = searchWidget;
                    }));
                }
            }
        });
        this.state = { jmv: null, loader: true };
    }
    render() {
        var _a;
        let closedChecked = false;
        let openChecked = false;
        if (this.props.state === "CLOSED" && !closedChecked) {
            const jmv = this.state.jmv;
            if (jmv) {
                jmv.clearSelectedFeatures();
                jmv.view.goTo({ center: jmv.view.center, zoom: this.initialZoomValue });
                jmv.view.popup.visible = false;
            }
            if (this.searchWidget) {
                this.cleared = true;
                this.searchWidget.clear();
            }
            closedChecked = true;
            openChecked = false;
        }
        if (this.props.state === "OPENED" && !openChecked) {
            closedChecked = false;
            openChecked = true;
        }
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-search-value jimu-widget" },
            ((_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a.length) &&
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: this.props.useMapWidgetIds[0], onActiveViewChange: this.onActiveViewChange }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { id: "search-widget-search-value", className: "w-100" })),
            this.state.loader && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", height: "auto" } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { height: '80px', position: 'relative', width: '100%', marginLeft: "auto", marginRight: "auto" } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_4__.Loading, null)),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { fontSize: 14, color: "grey", width: '100%', textAlign: "center" } }, "Loading search widget....")))));
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE1BQU07SUFBWjtRQUVJLHNCQUFpQixHQUFHLENBQUMsUUFBYyxFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsRUFBRTs7WUFDdkQsMEJBQTBCO1lBQzFCLE1BQU0sVUFBVSxHQUFHLFlBQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxXQUFXLG1DQUFFLEdBQUc7WUFDM0MsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLEVBQUU7Z0JBQy9ELHdDQUF3QztnQkFDeEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDO29CQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTt3QkFDbkIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNmLDRCQUE0Qjt3QkFDNUIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUNuQixJQUFJLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBQzs0QkFDdkMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQ3hEOzZCQUFLLElBQUksT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFDOzRCQUM3QyxNQUFNLEdBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7eUJBQ3BEO3dCQUVELElBQUksTUFBTSxFQUFDOzRCQUNQLEdBQUcsQ0FB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RSxDQUNKLENBQ1QsQ0FFSCxDQUNUO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlYXJjaC12YWx1ZS13aWRnZXQvc3JjL2hlbHBlci9oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2gvU2VhcmNoU291cmNlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBIZWxwZXIge1xuXG4gICAgZ2V0QWxsU3VnZ2VzdGlvbnMgPSAoZmVhdHVyZXM6YW55W10scGFyYW1zLHNlYXJjaGVkRmllbGQpPT57XG4gICAgICAgIC8vIGNvbnN0IHN1Z2dlc3Rpb25zID0gW107XG4gICAgICAgIGNvbnN0IHNlYXJjaEl0ZW0gPSBwYXJhbXM/LnN1Z2dlc3RUZXJtPz9cIiBcIlxuICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IGZlYXR1cmVzLnJlZHVjZSgobmV3U3VnZ2VzdGlvbnMse2F0dHJpYnV0ZXN9KT0+e1xuICAgICAgICAgICAgLy8gY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IFtzZWFyY2hlZEZpZWxkXTtcbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKChrZXlWYWwpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQga2V5LHRleHQsc291cmNlSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gYXR0cmlidXRlc1trZXlWYWxdID09PSBwYXJzZUludChzZWFyY2hJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gIGF0dHJpYnV0ZXNba2V5VmFsXS5pbmNsdWRlcyhzZWFyY2hJdGVtKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcImtleVwiXSA9IGF0dHJpYnV0ZXNbXCJPQkpFQ1RJRFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcInRleHRcIl0gPSBgJHthdHRyaWJ1dGVzW2tleVZhbF19YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcInNvdXJjZUluZGV4XCJdID0gcGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdWdnZXN0aW9ucy5wdXNoKG9iailcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gc2VhcmNoSXRlbSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2JqW1wia2V5XCJdID0gXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2JqW1widGV4dFwiXSA9IGF0dHJpYnV0ZXNba2V5VmFsXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmpbXCJzb3VyY2VJbmRleFwiXSA9IHBhcmFtcy5zb3VyY2VJbmRleFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld1N1Z2dlc3Rpb25zLnB1c2gob2JqKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9ZWxzZSBpZiAodHlwZW9mIGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoYXR0cmlidXRlc1trZXlWYWxdLmluY2x1ZGVzKHNlYXJjaEl0ZW0pKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmpbXCJrZXlcIl0gPSBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmpbXCJ0ZXh0XCJdID0gYXR0cmlidXRlc1trZXlWYWxdLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9ialtcInNvdXJjZUluZGV4XCJdID0gcGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3U3VnZ2VzdGlvbnMucHVzaChvYmopXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3U3VnZ2VzdGlvbnNcbiAgICAgICAgfSxbXSkgXG4gICAgICAgIHJldHVybiBzdWdnZXN0aW9ucztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhlbHBlcigpOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZXN0X3N1cHBvcnRfUXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX1NlYXJjaF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfU2VhcmNoX1NlYXJjaFNvdXJjZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7UmVhY3QsanN4fSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHsgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknO1xuaW1wb3J0IGdlb21ldHJ5RW5naW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2UnO1xuaW1wb3J0IFF1ZXJ5IGZyb20gJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5JztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8YW55LGFueT57XG5cbiAgICBpbml0aWFsWm9vbVZhbHVlID0gMDtcbiAgICBzZWFyY2hXaWRnZXQgPSBudWxsO1xuICAgIGNsZWFyZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOmFueSl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtqbXY6bnVsbCxsb2FkZXI6dHJ1ZX1cbiAgICB9XG5cbiAgICBnZXRGaWVsZEluZm9zID0gKGZpZWxkczphbnlbXSk9PntcbiAgICAgICAgY29uc3QgbmV3RmllbGRzID0gW11cbiAgICAgICAgaWYgKGZpZWxkcy5sZW5ndGgpZmllbGRzLmZvckVhY2goZWw9PntuZXdGaWVsZHMucHVzaCh7ZmllbGROYW1lOmVsLm5hbWUsbGFiZWw6ZWwuYWxpYXN9KX0pXG4gICAgICAgIHJldHVybiBuZXdGaWVsZHM7XG4gICAgfVxuXG4gICAgc2VsZWN0RmVhdHVyZUxheWVyID0gKGdlb21ldHJ5OmFueSk9PntcbiAgICAgICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuc3RhdGUuam12O1xuICAgICAgICBpZiAoYWN0aXZlVmlldyl7XG4gICAgICAgICAgICBhY3RpdmVWaWV3Py5zZWxlY3RGZWF0dXJlc0J5R3JhcGhpYyhnZW9tZXRyeSxcImNvbnRhaW5zXCIpLnRoZW4oKHJlc3VsdHMpPT57fSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+e30pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIG9uQWN0aXZlVmlld0NoYW5nZSA9IGFzeW5jKGptdjpKaW11TWFwVmlldyk9PntcbiAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxab29tVmFsdWUgPSAgam12LnZpZXcuem9vbTtcbiAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHVucmVxdWlyZWRWYWx1ZSA9IFtcIlwiLFwiIFwiXTtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2UudXJsO1xuICAgICAgICBjb25zdCBsYXllcklkID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS5sYXllcklkO1xuICAgICAgICBjb25zdCBzZWFyY2hlZEZpZWxkID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS5zZWFyY2hGaWVsZDtcbiAgICAgICAgaWYgKCF1bnJlcXVpcmVkVmFsdWUuaW5jbHVkZXMobGF5ZXJJZCkpdXJsID0gdXJsK1wiL1wiK2xheWVySWQudHJpbSgpXG4gICAgICAgIGlmICh1cmwpe1xuICAgICAgICAgICAgY29uc3QgZmVhdHVyZUxheWVyID0gIG5ldyBGZWF0dXJlTGF5ZXIodXJsKTtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlTGF5ZXIpe1xuICAgICAgICAgICAgICAgIGZlYXR1cmVMYXllci5sb2FkKCkudGhlbihhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake3NlYXJjaGVkRmllbGR9YF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghcXVlcnkub3V0RmllbGRzLmluY2x1ZGVzKFwiT0JKRUNUSURcIikpcXVlcnkub3V0RmllbGRzLnB1c2goXCJPQkpFQ1RJRFwiKVxuICAgICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IFwiMT0xXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGF5ZXIucXVlcnlGZWF0dXJlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gZmVhdHVyZUxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyVmlldyA9IGF3YWl0IGptdi52aWV3LndoZW5MYXllclZpZXcoZmVhdHVyZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllclZpZXcucXVlcnlGZWF0dXJlcylyZXN1bHRzID0gbGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlcjpmYWxzZSxqbXY6am12fSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRJbmZvcyA9IHRoaXMuZ2V0RmllbGRJbmZvcyhmZWF0dXJlTGF5ZXIuZmllbGRzPz9bXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVNlYXJjaFNvdXJjZSA9IG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluU3VnZ2VzdENoYXJhY3RlcnM6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFN1Z2dlc3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGE/LmZlYXR1cmVzPy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlcyA9IGRhdGEuZmVhdHVyZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdWdnZXN0aW9ucyA9IGhlbHBlci5nZXRBbGxTdWdnZXN0aW9ucyhmZWF0dXJlcyxwYXJhbXMsc2VhcmNoZWRGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0U3VnZ2VzdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvU2VhcmNoID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbmRleCA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LnNvdXJjZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodG9TZWFyY2gpKSAmJiB0eXBlb2YgcGFyc2VJbnQodG9TZWFyY2gpID09PSBcIm51bWJlclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9TZWFyY2ggPSBwYXJzZUludCh0b1NlYXJjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzID0gZGF0YT8uZmVhdHVyZXM/P1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgZmVhdHVyZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gZmVhdHVyZXNbaV0/LmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5cyA9IFtzZWFyY2hlZEZpZWxkXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5PT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvU2VhcmNoID09PSBhdHRyaWJ1dGVzW2tleV0pc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cylyZXN1bHRzLnB1c2goZmVhdHVyZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRJdGVtID0gcmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaGVkR2VvbWV0cnkgPSBzZWFyY2hlZEl0ZW0uZ2VvbWV0cnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoZWRHZW9tZXRyeSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlHZW9tZXRyeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKHNlYXJjaGVkR2VvbWV0cnksMSwgXCJtZXRlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlHZW9tZXRyeS5wdXNoKG5ld0dlb21ldHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtnZW9tZXRyeTpuZXdHZW9tZXRyeSxzeW1ib2w6bnVsbH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZlYXR1cmVMYXllcihwb2x5Z29uR3JhcGhpYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKXt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5R2VvbWV0cnkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGptdilqbXYudmlldy5wb3B1cC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh1bmlmaWVkR2VvbXRyeS5leHRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJleHRlbnRcIl0gPSB1bmlmaWVkR2VvbXRyeS5leHRlbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcImZlYXR1cmVcIl0gPSBzZWFyY2hlZEl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1widGFyZ2V0XCJdID0gc2VhcmNoZWRJdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcImtleVwiXSA9IGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcIm5hbWVcIl0gPSBwYXJhbXMuc3VnZ2VzdFJlc3VsdC50ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJzb3VyY2VJbmRleFwiXSA9IHNvdXJjZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbc2VhcmNoUmVzdWx0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBFbmFibGVkOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFRlbXBsYXRlOnt0aXRsZTpcIlNlYXJjaCB2YWx1ZSB3aWRnZXRcIixjb250ZW50Olt7dHlwZTpcImZpZWxkc1wiLGZpZWxkSW5mb3M6ZmllbGRJbmZvc31dfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Omptdi52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOlwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVEZWZhdWx0U291cmNlczpmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6W2N1c3RvbVNlYXJjaFNvdXJjZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFRlbXBsYXRlOnt0aXRsZTpcIlNlYXJjaCB2YWx1ZSB3aWRnZXRcIixjb250ZW50Olt7dHlwZTpcImZpZWxkc1wiLGZpZWxkSW5mb3M6ZmllbGRJbmZvc31dfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWxlY3QtcmVzdWx0XCIsIChldmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50ICYmIGV2ZW50LnJlc3VsdCAmJiBldmVudC5yZXN1bHQuZmVhdHVyZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlHZW9tZXRyeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksMSwgXCJtZXRlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChuZXdHZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7Z2VvbWV0cnk6bmV3R2VvbWV0cnksc3ltYm9sOm51bGx9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmVhdHVyZUxheWVyKHBvbHlnb25HcmFwaGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKXt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bmlmaWVkR2VvbXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWFyY2gtY2xlYXJcIiwgKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNsZWFyZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5wb3B1cC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0ID0gc2VhcmNoV2lkZ2V0O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcblxuICAgICAgICBsZXQgY2xvc2VkQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgb3BlbkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RhdGUgPT09IFwiQ0xPU0VEXCIgJiYgIWNsb3NlZENoZWNrZWQpe1xuICAgICAgICAgICAgY29uc3Qgam12ID0gdGhpcy5zdGF0ZS5qbXY7XG4gICAgICAgICAgICBpZiAoam12KXtcbiAgICAgICAgICAgICAgICBqbXYuY2xlYXJTZWxlY3RlZEZlYXR1cmVzKCk7XG4gICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xuICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFdpZGdldC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xvc2VkQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBvcGVuQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RhdGUgPT09IFwiT1BFTkVEXCIgJiYgIW9wZW5DaGVja2VkKXtcbiAgICAgICAgICAgIGNsb3NlZENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG9wZW5DaGVja2VkID0gdHJ1ZTsgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2VhcmNoLXZhbHVlIGppbXUtd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoICYmIFxuICAgICAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSB7dGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDw+PGRpdiBpZD1cInNlYXJjaC13aWRnZXQtc2VhcmNoLXZhbHVlXCIgY2xhc3NOYW1lPVwidy0xMDBcIj48L2Rpdj48Lz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGhlaWdodDpcImF1dG9cIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6JzgwcHgnLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6JzEwMCUnLG1hcmdpbkxlZnQ6XCJhdXRvXCIsbWFyZ2luUmlnaHQ6XCJhdXRvXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tmb250U2l6ZToxNCxjb2xvcjpcImdyZXlcIix3aWR0aDonMTAwJScsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZyBzZWFyY2ggd2lkZ2V0Li4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=