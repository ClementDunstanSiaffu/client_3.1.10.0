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
                                    .catch((err) => { });
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
                                        searchResult["sourceIndex"] = sourceIndex;
                                    }
                                    return [searchResult];
                                });
                            },
                            popupEnabled: true,
                            popupTemplate: {
                                title: "Search value widget",
                                content: [{ type: "fields", fieldInfos: fieldInfos }]
                            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE1BQU07SUFBWjtRQUVJLHNCQUFpQixHQUFHLENBQUMsUUFBYyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxFQUFFOztZQUMxRCxNQUFNLFVBQVUsR0FBRyxZQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsV0FBVyxtQ0FBRSxHQUFHO1lBQzNDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxFQUFFO2dCQUMvRCxNQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDO29CQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTt3QkFDbkIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNmLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDbkIsSUFBSSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUM7NEJBQ3ZDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUN4RDs2QkFBSyxJQUFJLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBQzs0QkFDN0MsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRTs0QkFDcEQsTUFBTSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO3lCQUMxRDt3QkFFRCxJQUFJLE1BQU0sRUFBQzs0QkFD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QyxNQUFNLEVBQUMsTUFBTSxFQUFDO2dCQUNsRyxvRUFBSyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUM7b0JBQzdGLDJEQUFDLDRDQUFPLE9BQUcsQ0FDVDtnQkFDTixvRUFBSyxLQUFLLEVBQUksRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGdDQUVsRSxDQUNKLENBQ1QsQ0FFSCxDQUNUO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlYXJjaC12YWx1ZS13aWRnZXQvc3JjL2hlbHBlci9oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2gvU2VhcmNoU291cmNlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNsYXNzIEhlbHBlciB7XHJcblxyXG4gICAgZ2V0QWxsU3VnZ2VzdGlvbnMgPSAoZmVhdHVyZXM6YW55W10scGFyYW1zLHNlYXJjaGVkRmllbGRBcnIpPT57XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHBhcmFtcz8uc3VnZ2VzdFRlcm0/P1wiIFwiXHJcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBmZWF0dXJlcy5yZWR1Y2UoKG5ld1N1Z2dlc3Rpb25zLHthdHRyaWJ1dGVzfSk9PntcclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IHNlYXJjaGVkRmllbGRBcnI7XHJcbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goKGtleVZhbCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IHBhcnNlSW50KHNlYXJjaEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmICh0eXBlb2YgYXR0cmlidXRlc1trZXlWYWxdID09PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9Mb3dlckNhc2UgPSBhdHRyaWJ1dGVzW2tleVZhbF0udG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSB0b0xvd2VyQ2FzZS5pbmNsdWRlcyhzZWFyY2hJdGVtLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJrZXlcIl0gPSBhdHRyaWJ1dGVzW1wiT0JKRUNUSURcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcInRleHRcIl0gPSBgPGI+JHtrZXlWYWx9PC9iPjoke2F0dHJpYnV0ZXNba2V5VmFsXX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJzb3VyY2VJbmRleFwiXSA9IHBhcmFtcy5zb3VyY2VJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdWdnZXN0aW9ucy5wdXNoKG9iailcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdTdWdnZXN0aW9uc1xyXG4gICAgICAgIH0sW10pIFxyXG4gICAgICAgIHJldHVybiBzdWdnZXN0aW9ucztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWxwZXIoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVzdF9zdXBwb3J0X1F1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX1NlYXJjaF9TZWFyY2hTb3VyY2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1JlYWN0LGpzeH0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCI7XHJcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XHJcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XHJcbmltcG9ydCBTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2UnO1xyXG5pbXBvcnQgUXVlcnkgZnJvbSAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxhbnksYW55PntcclxuXHJcbiAgICBpbml0aWFsWm9vbVZhbHVlID0gMDtcclxuICAgIHNlYXJjaFdpZGdldCA9IG51bGw7XHJcbiAgICBjbGVhcmVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6YW55KXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtqbXY6bnVsbCxsb2FkZXI6dHJ1ZX1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWVsZEluZm9zID0gKGZpZWxkczphbnlbXSk9PntcclxuICAgICAgICBjb25zdCBuZXdGaWVsZHMgPSBbXVxyXG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKWZpZWxkcy5mb3JFYWNoKGVsPT57bmV3RmllbGRzLnB1c2goe2ZpZWxkTmFtZTplbC5uYW1lLGxhYmVsOmVsLmFsaWFzfSl9KVxyXG4gICAgICAgIHJldHVybiBuZXdGaWVsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RmVhdHVyZUxheWVyID0gKGdlb21ldHJ5OmFueSk9PntcclxuICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5zdGF0ZS5qbXY7XHJcbiAgICAgICAgaWYgKGFjdGl2ZVZpZXcpe1xyXG4gICAgICAgICAgICBhY3RpdmVWaWV3Py5zZWxlY3RGZWF0dXJlc0J5R3JhcGhpYyhnZW9tZXRyeSxcImNvbnRhaW5zXCIpLnRoZW4oKHJlc3VsdHMpPT57fSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57fSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSBhc3luYyhqbXY6SmltdU1hcFZpZXcpPT57XHJcbiAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFpvb21WYWx1ZSA9ICBqbXYudmlldy56b29tO1xyXG4gICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHVucmVxdWlyZWRWYWx1ZSA9IFtcIlwiLFwiIFwiXTtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS51cmw7XHJcbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2UubGF5ZXJJZDtcclxuICAgICAgICBsZXQgc2VhcmNoRmllbGRBcnIgPSBbXTtcclxuICAgICAgICBjb25zdCBzZWFyY2hlZEZpZWxkID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS5zZWFyY2hGaWVsZDtcclxuICAgICAgICBjb25zdCBuZXdTZWFyY2hGaWVsZCA9IHNlYXJjaGVkRmllbGQuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIGlmIChuZXdTZWFyY2hGaWVsZD8ubGVuZ3RoKXtcclxuICAgICAgICAgICAgbmV3U2VhcmNoRmllbGQuZm9yRWFjaCgoZmllbGQpPT5zZWFyY2hGaWVsZEFyci5wdXNoKGAke2ZpZWxkfWApKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2VhcmNoRmllbGRBcnIucHVzaChgJHtzZWFyY2hlZEZpZWxkfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdW5yZXF1aXJlZFZhbHVlLmluY2x1ZGVzKGxheWVySWQpKXVybCA9IHVybCtcIi9cIitsYXllcklkLnRyaW0oKVxyXG4gICAgICAgIGlmICh1cmwpe1xyXG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlTGF5ZXIgPSAgbmV3IEZlYXR1cmVMYXllcih1cmwpO1xyXG4gICAgICAgICAgICBpZiAoZmVhdHVyZUxheWVyKXtcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVMYXllci5sb2FkKCkudGhlbihhc3luYygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gc2VhcmNoRmllbGRBcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFxdWVyeS5vdXRGaWVsZHMuaW5jbHVkZXMoXCJPQkpFQ1RJRFwiKSlxdWVyeS5vdXRGaWVsZHMucHVzaChcIk9CSkVDVElEXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVMYXllci5xdWVyeUZlYXR1cmVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IGZlYXR1cmVMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF5ZXJWaWV3ID0gYXdhaXQgam12LnZpZXcud2hlbkxheWVyVmlldyhmZWF0dXJlTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZXMpcmVzdWx0cyA9IGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOmZhbHNlLGptdjpqbXZ9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSB0aGlzLmdldEZpZWxkSW5mb3MoZmVhdHVyZUxheWVyLmZpZWxkcz8/W10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVNlYXJjaFNvdXJjZSA9IG5ldyBTZWFyY2hTb3VyY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBieSB2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblN1Z2dlc3RDaGFyYWN0ZXJzOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRTdWdnZXN0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGE/LmZlYXR1cmVzPy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzID0gZGF0YS5mZWF0dXJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U3VnZ2VzdGlvbnMgPSBoZWxwZXIuZ2V0QWxsU3VnZ2VzdGlvbnMoZmVhdHVyZXMscGFyYW1zLHNlYXJjaEZpZWxkQXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0U3VnZ2VzdGlvbnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycik9Pnt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvU2VhcmNoID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dC5zcGxpdChcIjpcIilbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LmtleTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUluZGV4ID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQuc291cmNlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHRvU2VhcmNoKSkgJiYgdHlwZW9mIHBhcnNlSW50KHRvU2VhcmNoKSA9PT0gXCJudW1iZXJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9TZWFyY2ggPSBwYXJzZUludCh0b1NlYXJjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlcyA9IGRhdGE/LmZlYXR1cmVzPz9bXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2kgPCBmZWF0dXJlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IGZlYXR1cmVzW2ldPy5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5cyA9IHNlYXJjaEZpZWxkQXJyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5PT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b1NlYXJjaCA9PT0gYXR0cmlidXRlc1trZXldKXN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cylyZXN1bHRzLnB1c2goZmVhdHVyZXNbaV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaGVkSXRlbSA9IHJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaGVkR2VvbWV0cnkgPSBzZWFyY2hlZEl0ZW0uZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hlZEdlb21ldHJ5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoc2VhcmNoZWRHZW9tZXRyeSwxLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChuZXdHZW9tZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7Z2VvbWV0cnk6bmV3R2VvbWV0cnksc3ltYm9sOm51bGx9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZlYXR1cmVMYXllcihwb2x5Z29uR3JhcGhpYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1jYXRjaChlcnIpe31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoam12KWptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8odW5pZmllZEdlb210cnkuZXh0ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJleHRlbnRcIl0gPSB1bmlmaWVkR2VvbXRyeS5leHRlbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJmZWF0dXJlXCJdID0gc2VhcmNoZWRJdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1widGFyZ2V0XCJdID0gc2VhcmNoZWRJdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcImtleVwiXSA9IGZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wibmFtZVwiXSA9IHRvU2VhcmNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcInNvdXJjZUluZGV4XCJdID0gc291cmNlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbc2VhcmNoUmVzdWx0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBFbmFibGVkOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwVGVtcGxhdGU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJTZWFyY2ggdmFsdWUgd2lkZ2V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50Olt7dHlwZTpcImZpZWxkc1wiLGZpZWxkSW5mb3M6ZmllbGRJbmZvc31dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlldzpqbXYudmlldyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOlwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZURlZmF1bHRTb3VyY2VzOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzOltjdXN0b21TZWFyY2hTb3VyY2VdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFRlbXBsYXRlOnt0aXRsZTpcIlNlYXJjaCB2YWx1ZSB3aWRnZXRcIixjb250ZW50Olt7dHlwZTpcImZpZWxkc1wiLGZpZWxkSW5mb3M6ZmllbGRJbmZvc31dfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VsZWN0LXJlc3VsdFwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50ICYmIGV2ZW50LnJlc3VsdCAmJiBldmVudC5yZXN1bHQuZmVhdHVyZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWUtaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57ZWwudmFsdWUgPSBgJHtldmVudD8ucmVzdWx0Lm5hbWV9YH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihldmVudC5yZXN1bHQuZmVhdHVyZS5nZW9tZXRyeSwxLCBcIm1ldGVyc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe2dlb21ldHJ5Om5ld0dlb21ldHJ5LHN5bWJvbDpudWxsfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmVhdHVyZUxheWVyKHBvbHlnb25HcmFwaGljKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1jYXRjaChlcnIpe31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bmlmaWVkR2VvbXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5wb3B1cC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh1bmlmaWVkR2VvbXRyeS5leHRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlYXJjaC1jbGVhclwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jbGVhcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8oe2NlbnRlcjpqbXYudmlldy5jZW50ZXIsem9vbTp0aGlzLmluaXRpYWxab29tVmFsdWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hXaWRnZXQgPSBzZWFyY2hXaWRnZXQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcblxyXG4gICAgICAgIGxldCBjbG9zZWRDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG9wZW5DaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJDTE9TRURcIiAmJiAhY2xvc2VkQ2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGptdiA9IHRoaXMuc3RhdGUuam12O1xyXG4gICAgICAgICAgICBpZiAoam12KXtcclxuICAgICAgICAgICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcclxuICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8oe2NlbnRlcjpqbXYudmlldy5jZW50ZXIsem9vbTp0aGlzLmluaXRpYWxab29tVmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hXaWRnZXQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0LmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xvc2VkQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG9wZW5DaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJPUEVORURcIiAmJiAhb3BlbkNoZWNrZWQpe1xyXG4gICAgICAgICAgICBjbG9zZWRDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9wZW5DaGVja2VkID0gdHJ1ZTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZWFyY2gtdmFsdWUgamltdS13aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSB7dGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDw+PGRpdiBpZD1cInNlYXJjaC13aWRnZXQtc2VhcmNoLXZhbHVlXCIgY2xhc3NOYW1lPVwidy0xMDBcIj48L2Rpdj48Lz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixkaXNwbGF5OlwiZmxleFwiLGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLGhlaWdodDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonODBweCcscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDonMTAwJScsbWFyZ2luTGVmdDpcImF1dG9cIixtYXJnaW5SaWdodDpcImF1dG9cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e2ZvbnRTaXplOjE0LGNvbG9yOlwiZ3JleVwiLHdpZHRoOicxMDAlJyx0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcgc2VhcmNoIHdpZGdldC4uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==