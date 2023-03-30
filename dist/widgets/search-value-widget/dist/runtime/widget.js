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
                                obj["text"] = `<b>${keyVal}</b>:${attributes[keyVal]}`,
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
                                    let toSearch = params.suggestResult.text.split(":")[1];
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
                                        searchResult["name"] = toSearch;
                                        // searchResult["name"] = params.suggestResult.text;
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
                                const el = document.getElementById("search-widget-search-value-input");
                                setTimeout(() => { el.value = `${event === null || event === void 0 ? void 0 : event.result.name}`; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE1BQU07SUFBWjtRQUVJLHNCQUFpQixHQUFHLENBQUMsUUFBYyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxFQUFFOztZQUMxRCxNQUFNLFVBQVUsR0FBRyxZQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsV0FBVyxtQ0FBRSxHQUFHO1lBQzNDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxFQUFFO2dCQUMvRCxNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDO29CQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTt3QkFDbkIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNmLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDbkIsSUFBSSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUM7NEJBQ3ZDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUN4RDs2QkFBSyxJQUFJLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBQzs0QkFDN0MsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRTs0QkFDcEQsTUFBTSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUMxRDt3QkFFRCxJQUFJLE1BQU0sRUFBQzs0QkFD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QyxRQUFRLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQztnQkFDbEcsb0VBQUssS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDO29CQUM3RiwyREFBQyw0Q0FBTyxPQUFHLENBQ1Q7Z0JBQ04sb0VBQUssS0FBSyxFQUFJLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxnQ0FFbEUsQ0FDSixDQUNULENBRUgsQ0FDVDtJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L3NyYy9oZWxwZXIvaGVscGVyLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvU2VhcmNoL1NlYXJjaFNvdXJjZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2VhcmNoLXZhbHVlLXdpZGdldC9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5jbGFzcyBIZWxwZXIge1xyXG5cclxuICAgIGdldEFsbFN1Z2dlc3Rpb25zID0gKGZlYXR1cmVzOmFueVtdLHBhcmFtcyxzZWFyY2hlZEZpZWxkQXJyKT0+e1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEl0ZW0gPSBwYXJhbXM/LnN1Z2dlc3RUZXJtPz9cIiBcIlxyXG4gICAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gZmVhdHVyZXMucmVkdWNlKChuZXdTdWdnZXN0aW9ucyx7YXR0cmlidXRlc30pPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBzZWFyY2hlZEZpZWxkQXJyO1xyXG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKChrZXlWYWwpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc1trZXlWYWxdID09PSBcIm51bWJlclwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gYXR0cmlidXRlc1trZXlWYWxdID09PSBwYXJzZUludChzZWFyY2hJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiAodHlwZW9mIGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gXCJzdHJpbmdcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvTG93ZXJDYXNlID0gYXR0cmlidXRlc1trZXlWYWxdLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gdG9Mb3dlckNhc2UuaW5jbHVkZXMoc2VhcmNoSXRlbS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW1wia2V5XCJdID0gYXR0cmlidXRlc1tcIk9CSkVDVElEXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJ0ZXh0XCJdID0gYDxiPiR7a2V5VmFsfTwvYj46JHthdHRyaWJ1dGVzW2tleVZhbF19YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW1wic291cmNlSW5kZXhcIl0gPSBwYXJhbXMuc291cmNlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3VnZ2VzdGlvbnMucHVzaChvYmopXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3U3VnZ2VzdGlvbnNcclxuICAgICAgICB9LFtdKSBcclxuICAgICAgICByZXR1cm4gc3VnZ2VzdGlvbnM7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVscGVyKCk7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3Jlc3Rfc3VwcG9ydF9RdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfU2VhcmNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfU2VhcmNoU291cmNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiO1xyXG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICdqaW11LXVpJztcclxuaW1wb3J0IGdlb21ldHJ5RW5naW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnO1xyXG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xyXG5pbXBvcnQgU2VhcmNoU291cmNlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gvU2VhcmNoU291cmNlJztcclxuaW1wb3J0IFF1ZXJ5IGZyb20gJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5JztcclxuaW1wb3J0IGhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8YW55LGFueT57XHJcblxyXG4gICAgaW5pdGlhbFpvb21WYWx1ZSA9IDA7XHJcbiAgICBzZWFyY2hXaWRnZXQgPSBudWxsO1xyXG4gICAgY2xlYXJlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOmFueSl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7am12Om51bGwsbG9hZGVyOnRydWV9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmllbGRJbmZvcyA9IChmaWVsZHM6YW55W10pPT57XHJcbiAgICAgICAgY29uc3QgbmV3RmllbGRzID0gW11cclxuICAgICAgICBpZiAoZmllbGRzLmxlbmd0aClmaWVsZHMuZm9yRWFjaChlbD0+e25ld0ZpZWxkcy5wdXNoKHtmaWVsZE5hbWU6ZWwubmFtZSxsYWJlbDplbC5hbGlhc30pfSlcclxuICAgICAgICByZXR1cm4gbmV3RmllbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEZlYXR1cmVMYXllciA9IChnZW9tZXRyeTphbnkpPT57XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuc3RhdGUuam12O1xyXG4gICAgICAgIGlmIChhY3RpdmVWaWV3KXtcclxuICAgICAgICAgICAgYWN0aXZlVmlldz8uc2VsZWN0RmVhdHVyZXNCeUdyYXBoaWMoZ2VvbWV0cnksXCJjb250YWluc1wiKS50aGVuKChyZXN1bHRzKT0+e30pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+e30pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgb25BY3RpdmVWaWV3Q2hhbmdlID0gYXN5bmMoam12OkppbXVNYXBWaWV3KT0+e1xyXG4gICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxab29tVmFsdWUgPSAgam12LnZpZXcuem9vbTtcclxuICAgICAgICBqbXYudmlldy5wb3B1cC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCB1bnJlcXVpcmVkVmFsdWUgPSBbXCJcIixcIiBcIl07XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2UudXJsO1xyXG4gICAgICAgIGNvbnN0IGxheWVySWQgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlLmxheWVySWQ7XHJcbiAgICAgICAgbGV0IHNlYXJjaEZpZWxkQXJyID0gW107XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoZWRGaWVsZCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2Uuc2VhcmNoRmllbGQ7XHJcbiAgICAgICAgY29uc3QgbmV3U2VhcmNoRmllbGQgPSBzZWFyY2hlZEZpZWxkLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICBpZiAobmV3U2VhcmNoRmllbGQ/Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgIG5ld1NlYXJjaEZpZWxkLmZvckVhY2goKGZpZWxkKT0+c2VhcmNoRmllbGRBcnIucHVzaChgJHtmaWVsZH1gKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkQXJyLnB1c2goYCR7c2VhcmNoZWRGaWVsZH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXVucmVxdWlyZWRWYWx1ZS5pbmNsdWRlcyhsYXllcklkKSl1cmwgPSB1cmwrXCIvXCIrbGF5ZXJJZC50cmltKClcclxuICAgICAgICBpZiAodXJsKXtcclxuICAgICAgICAgICAgY29uc3QgZmVhdHVyZUxheWVyID0gIG5ldyBGZWF0dXJlTGF5ZXIodXJsKTtcclxuICAgICAgICAgICAgaWYgKGZlYXR1cmVMYXllcil7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXIubG9hZCgpLnRoZW4oYXN5bmMoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IHNlYXJjaEZpZWxkQXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcXVlcnkub3V0RmllbGRzLmluY2x1ZGVzKFwiT0JKRUNUSURcIikpcXVlcnkub3V0RmllbGRzLnB1c2goXCJPQkpFQ1RJRFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gXCIxPTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGF5ZXIucXVlcnlGZWF0dXJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBmZWF0dXJlTGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyVmlldyA9IGF3YWl0IGptdi52aWV3LndoZW5MYXllclZpZXcoZmVhdHVyZUxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKXJlc3VsdHMgPSBsYXllclZpZXcucXVlcnlGZWF0dXJlcyhxdWVyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlcjpmYWxzZSxqbXY6am12fSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEluZm9zID0gdGhpcy5nZXRGaWVsZEluZm9zKGZlYXR1cmVMYXllci5maWVsZHM/P1tdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21TZWFyY2hTb3VyY2UgPSBuZXcgU2VhcmNoU291cmNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggYnkgdmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5TdWdnZXN0Q2hhcmFjdGVyczowLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0U3VnZ2VzdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhPy5mZWF0dXJlcz8ubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlcyA9IGRhdGEuZmVhdHVyZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFN1Z2dlc3Rpb25zID0gaGVscGVyLmdldEFsbFN1Z2dlc3Rpb25zKGZlYXR1cmVzLHBhcmFtcyxzZWFyY2hGaWVsZEFycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFN1Z2dlc3Rpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmVzdWx0czogKHBhcmFtcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWFyY2hSZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b1NlYXJjaCA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQuc3BsaXQoXCI6XCIpWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBwYXJhbXMuc3VnZ2VzdFJlc3VsdC5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbmRleCA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LnNvdXJjZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludCh0b1NlYXJjaCkpICYmIHR5cGVvZiBwYXJzZUludCh0b1NlYXJjaCkgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvU2VhcmNoID0gcGFyc2VJbnQodG9TZWFyY2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBkYXRhPy5mZWF0dXJlcz8/W107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgZmVhdHVyZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBmZWF0dXJlc1tpXT8uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleXMgPSBzZWFyY2hGaWVsZEFyclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9TZWFyY2ggPT09IGF0dHJpYnV0ZXNba2V5XSlzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpcmVzdWx0cy5wdXNoKGZlYXR1cmVzW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hlZEl0ZW0gPSByZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hlZEdlb21ldHJ5ID0gc2VhcmNoZWRJdGVtLmdlb21ldHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoZWRHZW9tZXRyeSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUdlb21ldHJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKHNlYXJjaGVkR2VvbWV0cnksMSwgXCJtZXRlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe2dlb21ldHJ5Om5ld0dlb21ldHJ5LHN5bWJvbDpudWxsfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGZWF0dXJlTGF5ZXIocG9seWdvbkdyYXBoaWMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKXt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaWZpZWRHZW9tdHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGptdilqbXYudmlldy5wb3B1cC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wiZXh0ZW50XCJdID0gdW5pZmllZEdlb210cnkuZXh0ZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wiZmVhdHVyZVwiXSA9IHNlYXJjaGVkSXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcInRhcmdldFwiXSA9IHNlYXJjaGVkSXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJrZXlcIl0gPSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcIm5hbWVcIl0gPSB0b1NlYXJjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2hSZXN1bHRbXCJuYW1lXCJdID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJzb3VyY2VJbmRleFwiXSA9IHNvdXJjZUluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3NlYXJjaFJlc3VsdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwRW5hYmxlZDp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFRlbXBsYXRlOnt0aXRsZTpcIlNlYXJjaCB2YWx1ZSB3aWRnZXRcIixjb250ZW50Olt7dHlwZTpcImZpZWxkc1wiLGZpZWxkSW5mb3M6ZmllbGRJbmZvc31dfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Omptdi52aWV3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6XCJzZWFyY2gtd2lkZ2V0LXNlYXJjaC12YWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlRGVmYXVsdFNvdXJjZXM6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6W2N1c3RvbVNlYXJjaFNvdXJjZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwVGVtcGxhdGU6e3RpdGxlOlwiU2VhcmNoIHZhbHVlIHdpZGdldFwiLGNvbnRlbnQ6W3t0eXBlOlwiZmllbGRzXCIsZmllbGRJbmZvczpmaWVsZEluZm9zfV19XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWxlY3QtcmVzdWx0XCIsIChldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnQgJiYgZXZlbnQucmVzdWx0ICYmIGV2ZW50LnJlc3VsdC5mZWF0dXJlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtd2lkZ2V0LXNlYXJjaC12YWx1ZS1pbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntlbC52YWx1ZSA9IGAke2V2ZW50Py5yZXN1bHQubmFtZX1gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5yZXN1bHQuZmVhdHVyZS5nZW9tZXRyeSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlHZW9tZXRyeSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5LDEsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChuZXdHZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7Z2VvbWV0cnk6bmV3R2VvbWV0cnksc3ltYm9sOm51bGx9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGZWF0dXJlTGF5ZXIocG9seWdvbkdyYXBoaWMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycil7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaWZpZWRHZW9tdHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VhcmNoLWNsZWFyXCIsIChldmVudCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNsZWFyZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFdpZGdldCA9IHNlYXJjaFdpZGdldDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuXHJcbiAgICAgICAgbGV0IGNsb3NlZENoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb3BlbkNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BzLnN0YXRlID09PSBcIkNMT1NFRFwiICYmICFjbG9zZWRDaGVja2VkKXtcclxuICAgICAgICAgICAgY29uc3Qgam12ID0gdGhpcy5zdGF0ZS5qbXY7XHJcbiAgICAgICAgICAgIGlmIChqbXYpe1xyXG4gICAgICAgICAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xyXG4gICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hXaWRnZXQuY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbG9zZWRDaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3BlbkNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0YXRlID09PSBcIk9QRU5FRFwiICYmICFvcGVuQ2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNsb3NlZENoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgb3BlbkNoZWNrZWQgPSB0cnVlOyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNlYXJjaC12YWx1ZSBqaW11LXdpZGdldFwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZSA9IHt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPD48ZGl2IGlkPVwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWVcIiBjbGFzc05hbWU9XCJ3LTEwMFwiPjwvZGl2PjwvPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiMTAwJVwiLGRpc3BsYXk6XCJmbGV4XCIsZmxleERpcmVjdGlvbjpcImNvbHVtblwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsaGVpZ2h0OlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0Oic4MHB4Jyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOicxMDAlJyxtYXJnaW5MZWZ0OlwiYXV0b1wiLG1hcmdpblJpZ2h0OlwiYXV0b1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7Zm9udFNpemU6MTQsY29sb3I6XCJncmV5XCIsd2lkdGg6JzEwMCUnLHRleHRBbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZyBzZWFyY2ggd2lkZ2V0Li4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9