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
        this.getAllSuggestions = (features, params, searchedFieldArr) => {
            var _a;
            const searchItem = (_a = params === null || params === void 0 ? void 0 : params.suggestTerm) !== null && _a !== void 0 ? _a : " ";
            const suggestions = features.reduce((newSuggestions, { attributes }) => {
                const keys = searchedFieldArr;
                if (keys.length) {
                    keys.forEach((keyVal) => {
                        const obj = {};
                        let status = false;
                        if (typeof attributes[keyVal] === "number") {
                            status = attributes[keyVal] === parseInt(searchItem);
                        }
                        else if (typeof attributes[keyVal] === "string") {
                            const toLowerCase = attributes[keyVal].toLowerCase();
                            status = toLowerCase.includes(searchItem.toLowerCase());
                        }
                        if (status) {
                            obj["key"] = attributes["OBJECTID"],
                                obj["text"] = `${attributes[keyVal]}`,
                                obj["sourceIndex"] = params.sourceIndex;
                            newSuggestions.push(obj);
                        }
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
            let searchFieldArr = [];
            const searchedField = this.props.config.service.searchField;
            const newSearchField = searchedField.split(",");
            if (newSearchField === null || newSearchField === void 0 ? void 0 : newSearchField.length) {
                newSearchField.forEach((field) => searchFieldArr.push(`${field}`));
            }
            else {
                searchFieldArr.push(`${searchedField}`);
            }
            if (!unrequiredValue.includes(layerId))
                url = url + "/" + layerId.trim();
            if (url) {
                const featureLayer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"](url);
                if (featureLayer) {
                    featureLayer.load().then(() => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_8__["default"]();
                        query.returnGeometry = true;
                        query.outFields = searchFieldArr;
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
                            placeholder: 'Search by value',
                            minSuggestCharacters: 0,
                            getSuggestions: (params) => {
                                return results.then((data) => {
                                    var _a;
                                    let defaultSuggestions = [];
                                    if ((_a = data === null || data === void 0 ? void 0 : data.features) === null || _a === void 0 ? void 0 : _a.length) {
                                        const features = data.features;
                                        defaultSuggestions = _helper_helper__WEBPACK_IMPORTED_MODULE_9__["default"].getAllSuggestions(features, params, searchFieldArr);
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
                                            let keys = searchFieldArr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE1BQU07SUFBWjtRQUVJLHNCQUFpQixHQUFHLENBQUMsUUFBYyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxFQUFFOztZQUMxRCxNQUFNLFVBQVUsR0FBRyxZQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsV0FBVyxtQ0FBRSxHQUFHO1lBQzNDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxFQUFFO2dCQUMvRCxNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDO29CQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTt3QkFDbkIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNmLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDbkIsSUFBSSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUM7NEJBQ3ZDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUN4RDs2QkFBSyxJQUFJLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBQzs0QkFDN0MsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRTs0QkFDcEQsTUFBTSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUMxRDt3QkFFRCxJQUFJLE1BQU0sRUFBQzs0QkFD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RUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsZ0NBRWxFLENBQ0osQ0FDVCxDQUVILENBQ1Q7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2VhcmNoLXZhbHVlLXdpZGdldC9zcmMvaGVscGVyL2hlbHBlci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2VcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlYXJjaC12YWx1ZS13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2xhc3MgSGVscGVyIHtcclxuXHJcbiAgICBnZXRBbGxTdWdnZXN0aW9ucyA9IChmZWF0dXJlczphbnlbXSxwYXJhbXMsc2VhcmNoZWRGaWVsZEFycik9PntcclxuICAgICAgICBjb25zdCBzZWFyY2hJdGVtID0gcGFyYW1zPy5zdWdnZXN0VGVybT8/XCIgXCJcclxuICAgICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IGZlYXR1cmVzLnJlZHVjZSgobmV3U3VnZ2VzdGlvbnMse2F0dHJpYnV0ZXN9KT0+e1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gc2VhcmNoZWRGaWVsZEFycjtcclxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoa2V5VmFsKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gcGFyc2VJbnQoc2VhcmNoSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0xvd2VyQ2FzZSA9IGF0dHJpYnV0ZXNba2V5VmFsXS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRvTG93ZXJDYXNlLmluY2x1ZGVzKHNlYXJjaEl0ZW0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcImtleVwiXSA9IGF0dHJpYnV0ZXNbXCJPQkpFQ1RJRFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW1widGV4dFwiXSA9IGAke2F0dHJpYnV0ZXNba2V5VmFsXX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJzb3VyY2VJbmRleFwiXSA9IHBhcmFtcy5zb3VyY2VJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdWdnZXN0aW9ucy5wdXNoKG9iailcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdTdWdnZXN0aW9uc1xyXG4gICAgICAgIH0sW10pIFxyXG4gICAgICAgIHJldHVybiBzdWdnZXN0aW9ucztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWxwZXIoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVzdF9zdXBwb3J0X1F1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX1NlYXJjaF9TZWFyY2hTb3VyY2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1JlYWN0LGpzeH0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCI7XHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XHJcbmltcG9ydCBTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2UnO1xyXG5pbXBvcnQgUXVlcnkgZnJvbSAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxhbnksYW55PntcclxuXHJcbiAgICBpbml0aWFsWm9vbVZhbHVlID0gMDtcclxuICAgIHNlYXJjaFdpZGdldCA9IG51bGw7XHJcbiAgICBjbGVhcmVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6YW55KXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtqbXY6bnVsbCxsb2FkZXI6dHJ1ZX1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWVsZEluZm9zID0gKGZpZWxkczphbnlbXSk9PntcclxuICAgICAgICBjb25zdCBuZXdGaWVsZHMgPSBbXVxyXG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKWZpZWxkcy5mb3JFYWNoKGVsPT57bmV3RmllbGRzLnB1c2goe2ZpZWxkTmFtZTplbC5uYW1lLGxhYmVsOmVsLmFsaWFzfSl9KVxyXG4gICAgICAgIHJldHVybiBuZXdGaWVsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RmVhdHVyZUxheWVyID0gKGdlb21ldHJ5OmFueSk9PntcclxuICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5zdGF0ZS5qbXY7XHJcbiAgICAgICAgaWYgKGFjdGl2ZVZpZXcpe1xyXG4gICAgICAgICAgICBhY3RpdmVWaWV3Py5zZWxlY3RGZWF0dXJlc0J5R3JhcGhpYyhnZW9tZXRyeSxcImNvbnRhaW5zXCIpLnRoZW4oKHJlc3VsdHMpPT57fSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57fSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSBhc3luYyhqbXY6SmltdU1hcFZpZXcpPT57XHJcbiAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFpvb21WYWx1ZSA9ICBqbXYudmlldy56b29tO1xyXG4gICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHVucmVxdWlyZWRWYWx1ZSA9IFtcIlwiLFwiIFwiXTtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS51cmw7XHJcbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2UubGF5ZXJJZDtcclxuICAgICAgICBsZXQgc2VhcmNoRmllbGRBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBzZWFyY2hlZEZpZWxkID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS5zZWFyY2hGaWVsZDtcclxuICAgICAgICBjb25zdCBuZXdTZWFyY2hGaWVsZCA9IHNlYXJjaGVkRmllbGQuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGlmIChuZXdTZWFyY2hGaWVsZD8ubGVuZ3RoKXtcclxuICAgICAgICAgICAgbmV3U2VhcmNoRmllbGQuZm9yRWFjaCgoZmllbGQpPT5zZWFyY2hGaWVsZEFyci5wdXNoKGAke2ZpZWxkfWApKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2VhcmNoRmllbGRBcnIucHVzaChgJHtzZWFyY2hlZEZpZWxkfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdW5yZXF1aXJlZFZhbHVlLmluY2x1ZGVzKGxheWVySWQpKXVybCA9IHVybCtcIi9cIitsYXllcklkLnRyaW0oKVxyXG4gICAgICAgIGlmICh1cmwpe1xyXG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlTGF5ZXIgPSAgbmV3IEZlYXR1cmVMYXllcih1cmwpO1xyXG4gICAgICAgICAgICBpZiAoZmVhdHVyZUxheWVyKXtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVMYXllci5sb2FkKCkudGhlbihhc3luYygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gc2VhcmNoRmllbGRBcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFxdWVyeS5vdXRGaWVsZHMuaW5jbHVkZXMoXCJPQkpFQ1RJRFwiKSlxdWVyeS5vdXRGaWVsZHMucHVzaChcIk9CSkVDVElEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVMYXllci5xdWVyeUZlYXR1cmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IGZlYXR1cmVMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF5ZXJWaWV3ID0gYXdhaXQgam12LnZpZXcud2hlbkxheWVyVmlldyhmZWF0dXJlTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZXMpcmVzdWx0cyA9IGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOmZhbHNlLGptdjpqbXZ9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSB0aGlzLmdldEZpZWxkSW5mb3MoZmVhdHVyZUxheWVyLmZpZWxkcz8/W10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVNlYXJjaFNvdXJjZSA9IG5ldyBTZWFyY2hTb3VyY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBieSB2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblN1Z2dlc3RDaGFyYWN0ZXJzOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRTdWdnZXN0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGE/LmZlYXR1cmVzPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzID0gZGF0YS5mZWF0dXJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U3VnZ2VzdGlvbnMgPSBoZWxwZXIuZ2V0QWxsU3VnZ2VzdGlvbnMoZmVhdHVyZXMscGFyYW1zLHNlYXJjaEZpZWxkQXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0U3VnZ2VzdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvU2VhcmNoID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlSW5kZXggPSBwYXJhbXMuc3VnZ2VzdFJlc3VsdC5zb3VyY2VJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodG9TZWFyY2gpKSAmJiB0eXBlb2YgcGFyc2VJbnQodG9TZWFyY2gpID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b1NlYXJjaCA9IHBhcnNlSW50KHRvU2VhcmNoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzID0gZGF0YT8uZmVhdHVyZXM/P1tdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IGZlYXR1cmVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gZmVhdHVyZXNbaV0/LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlzID0gc2VhcmNoRmllbGRBcnJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvU2VhcmNoID09PSBhdHRyaWJ1dGVzW2tleV0pc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKXJlc3VsdHMucHVzaChmZWF0dXJlc1tpXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRJdGVtID0gcmVzdWx0c1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRHZW9tZXRyeSA9IHNlYXJjaGVkSXRlbS5nZW9tZXRyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaGVkR2VvbWV0cnkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlHZW9tZXRyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihzZWFyY2hlZEdlb21ldHJ5LDEsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlHZW9tZXRyeS5wdXNoKG5ld0dlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtnZW9tZXRyeTpuZXdHZW9tZXRyeSxzeW1ib2w6bnVsbH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmVhdHVyZUxheWVyKHBvbHlnb25HcmFwaGljKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycil7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5R2VvbWV0cnkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bmlmaWVkR2VvbXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqbXYpam12LnZpZXcucG9wdXAudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh1bmlmaWVkR2VvbXRyeS5leHRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcImV4dGVudFwiXSA9IHVuaWZpZWRHZW9tdHJ5LmV4dGVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcImZlYXR1cmVcIl0gPSBzZWFyY2hlZEl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJ0YXJnZXRcIl0gPSBzZWFyY2hlZEl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wia2V5XCJdID0gZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJuYW1lXCJdID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJzb3VyY2VJbmRleFwiXSA9IHNvdXJjZUluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3NlYXJjaFJlc3VsdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwRW5hYmxlZDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFRlbXBsYXRlOnt0aXRsZTpcIlNlYXJjaCB2YWx1ZSB3aWRnZXRcIixjb250ZW50Olt7dHlwZTpcImZpZWxkc1wiLGZpZWxkSW5mb3M6ZmllbGRJbmZvc31dfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Omptdi52aWV3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6XCJzZWFyY2gtd2lkZ2V0LXNlYXJjaC12YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlRGVmYXVsdFNvdXJjZXM6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6W2N1c3RvbVNlYXJjaFNvdXJjZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwVGVtcGxhdGU6e3RpdGxlOlwiU2VhcmNoIHZhbHVlIHdpZGdldFwiLGNvbnRlbnQ6W3t0eXBlOlwiZmllbGRzXCIsZmllbGRJbmZvczpmaWVsZEluZm9zfV19XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWxlY3QtcmVzdWx0XCIsIChldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnQgJiYgZXZlbnQucmVzdWx0ICYmIGV2ZW50LnJlc3VsdC5mZWF0dXJlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5yZXN1bHQuZmVhdHVyZS5nZW9tZXRyeSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlHZW9tZXRyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5LDEsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChuZXdHZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7Z2VvbWV0cnk6bmV3R2VvbWV0cnksc3ltYm9sOm51bGx9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGZWF0dXJlTGF5ZXIocG9seWdvbkdyYXBoaWMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycil7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaWZpZWRHZW9tdHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VhcmNoLWNsZWFyXCIsIChldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNsZWFyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFdpZGdldCA9IHNlYXJjaFdpZGdldDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuXHJcbiAgICAgICAgbGV0IGNsb3NlZENoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb3BlbkNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0YXRlID09PSBcIkNMT1NFRFwiICYmICFjbG9zZWRDaGVja2VkKXtcclxuICAgICAgICAgICAgY29uc3Qgam12ID0gdGhpcy5zdGF0ZS5qbXY7XHJcbiAgICAgICAgICAgIGlmIChqbXYpe1xyXG4gICAgICAgICAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xyXG4gICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hXaWRnZXQuY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbG9zZWRDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3BlbkNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0YXRlID09PSBcIk9QRU5FRFwiICYmICFvcGVuQ2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNsb3NlZENoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgb3BlbkNoZWNrZWQgPSB0cnVlOyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNlYXJjaC12YWx1ZSBqaW11LXdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZSA9IHt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPD48ZGl2IGlkPVwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWVcIiBjbGFzc05hbWU9XCJ3LTEwMFwiPjwvZGl2PjwvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsaGVpZ2h0OlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0Oic4MHB4Jyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOicxMDAlJyxtYXJnaW5MZWZ0OlwiYXV0b1wiLG1hcmdpblJpZ2h0OlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7Zm9udFNpemU6MTQsY29sb3I6XCJncmV5XCIsd2lkdGg6JzEwMCUnLHRleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZyBzZWFyY2ggd2lkZ2V0Li4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9