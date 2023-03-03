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
            // const suggestions = [];
            const searchItem = (_a = params === null || params === void 0 ? void 0 : params.suggestTerm) !== null && _a !== void 0 ? _a : " ";
            const suggestions = features.reduce((newSuggestions, { attributes }) => {
                // const keys = Object.keys(attributes);
                // const keys = [searchedField];
                const keys = searchedFieldArr;
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
            let searchFieldArr = [];
            const searchedField = this.props.config.service.searchField;
            const newSearchField = searchedField.split(",");
            if (newSearchField === null || newSearchField === void 0 ? void 0 : newSearchField.length) {
                newSearchField.forEach((field) => searchFieldArr.push(`${field}`));
            }
            else {
                searchFieldArr.push(`${searchedField}`);
            }
            // const searchedField = this.props.config.service.searchField;
            if (!unrequiredValue.includes(layerId))
                url = url + "/" + layerId.trim();
            if (url) {
                const featureLayer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"](url);
                if (featureLayer) {
                    featureLayer.load().then(() => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_8__["default"]();
                        query.returnGeometry = true;
                        // query.outFields = [`${searchedField}`];
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
                            placeholder: 'Search',
                            minSuggestCharacters: 0,
                            getSuggestions: (params) => {
                                return results.then((data) => {
                                    var _a;
                                    let defaultSuggestions = [];
                                    if ((_a = data === null || data === void 0 ? void 0 : data.features) === null || _a === void 0 ? void 0 : _a.length) {
                                        const features = data.features;
                                        defaultSuggestions = _helper_helper__WEBPACK_IMPORTED_MODULE_9__["default"].getAllSuggestions(features, params, searchFieldArr);
                                        // defaultSuggestions = helper.getAllSuggestions(features,params,searchedField);
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
                                            // let keys = [searchedField]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE1BQU07SUFBWjtRQUVJLHNCQUFpQixHQUFHLENBQUMsUUFBYyxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBQyxFQUFFOztZQUMxRCwwQkFBMEI7WUFDMUIsTUFBTSxVQUFVLEdBQUcsWUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsbUNBQUUsR0FBRztZQUMzQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsRUFBRTtnQkFDL0Qsd0NBQXdDO2dCQUN4QyxnQ0FBZ0M7Z0JBQ2hDLE1BQU0sSUFBSSxHQUFHLGdCQUFnQixDQUFDO2dCQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7b0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBQyxFQUFFO3dCQUNuQixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7d0JBQ2YsNEJBQTRCO3dCQUM1QixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQ25CLElBQUksT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFDOzRCQUN2QyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzt5QkFDeEQ7NkJBQUssSUFBSSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUM7NEJBQzdDLE1BQU0sR0FBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzt5QkFDcEQ7d0JBRUQsSUFBSSxNQUFNLEVBQUM7NEJBQ1AsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7Z0NBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQ0FDckMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXOzRCQUN2QyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDM0I7d0JBRUQsK0NBQStDO3dCQUMvQyw4Q0FBOEM7d0JBQzlDLCtCQUErQjt3QkFDL0IsNENBQTRDO3dCQUM1QyxrREFBa0Q7d0JBQ2xELG1DQUFtQzt3QkFDbkMsUUFBUTt3QkFDUixxREFBcUQ7d0JBQ3JELG9EQUFvRDt3QkFDcEQsK0JBQStCO3dCQUMvQiw0Q0FBNEM7d0JBQzVDLGtEQUFrRDt3QkFDbEQsbUNBQW1DO3dCQUNuQyxRQUFRO3dCQUNSLElBQUk7b0JBRVIsQ0FBQyxDQUFDO2lCQUNMO2dCQUNELE9BQU8sY0FBYztZQUN6QixDQUFDLEVBQUMsRUFBRSxDQUFDO1lBQ0wsT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQztJQUVMLENBQUM7Q0FBQTtBQUVELGlFQUFlLElBQUksTUFBTSxFQUFFLEVBQUM7Ozs7Ozs7Ozs7OztBQ3JENUI7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mO0FBQzRCO0FBQ3ZCO0FBQ1c7QUFDbEI7QUFDd0I7QUFDdkI7QUFDeUI7QUFDaEI7QUFDTjtBQUV2QixNQUFNLE1BQU8sU0FBUSwwREFBNEI7SUFNNUQsWUFBWSxLQUFTO1FBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUxqQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQU9oQixrQkFBYSxHQUFHLENBQUMsTUFBWSxFQUFDLEVBQUU7WUFDNUIsTUFBTSxTQUFTLEdBQUcsRUFBRTtZQUNwQixJQUFJLE1BQU0sQ0FBQyxNQUFNO2dCQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFFLEdBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsS0FBSyxFQUFDLENBQUMsR0FBQyxDQUFDO1lBQzFGLE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFFRCx1QkFBa0IsR0FBRyxDQUFDLFFBQVksRUFBQyxFQUFFO1lBQ2pDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2xDLElBQUksVUFBVSxFQUFDO2dCQUNYLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSx1QkFBdUIsQ0FBQyxRQUFRLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBQyxFQUFFLEdBQUMsQ0FBQyxFQUMxRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQzthQUNwQjtRQUNILENBQUM7UUFFSCx1QkFBa0IsR0FBRyxDQUFNLEdBQWUsRUFBQyxFQUFFO1lBQ3pDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsR0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzlCLE1BQU0sZUFBZSxHQUFHLENBQUMsRUFBRSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDeEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNsRCxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDeEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUM1RCxNQUFNLGNBQWMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELElBQUksY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLE1BQU0sRUFBQztnQkFDdkIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBQyxFQUFFLGVBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDcEU7aUJBQUk7Z0JBQ0QsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDO2FBQzFDO1lBQ0QsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFBQyxHQUFHLEdBQUcsR0FBRyxHQUFDLEdBQUcsR0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ25FLElBQUksR0FBRyxFQUFDO2dCQUNKLE1BQU0sWUFBWSxHQUFJLElBQUksZ0VBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxZQUFZLEVBQUM7b0JBQ2IsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFPLEVBQUU7O3dCQUM5QixNQUFNLEtBQUssR0FBRyxJQUFJLCtEQUFLLEVBQUUsQ0FBQzt3QkFDMUIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7d0JBQzVCLDBDQUEwQzt3QkFDMUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7NEJBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUMxRSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUs7d0JBQ25CLElBQUksT0FBTyxDQUFDO3dCQUNaLElBQUksWUFBWSxDQUFDLGFBQWEsRUFBQzs0QkFDM0IsT0FBTyxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQy9DOzZCQUFJOzRCQUNELE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQzdELElBQUksU0FBUyxDQUFDLGFBQWE7Z0NBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7eUJBQ3hFO3dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsQ0FBQzt3QkFDckMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBWSxDQUFDLE1BQU0sbUNBQUUsRUFBRSxDQUFDLENBQUM7d0JBQy9ELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx3RUFBWSxDQUFDOzRCQUN4QyxXQUFXLEVBQUUsUUFBUTs0QkFDckIsb0JBQW9CLEVBQUMsQ0FBQzs0QkFDdEIsY0FBYyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0NBQ3pCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFOztvQ0FDM0IsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7b0NBQzVCLElBQUksVUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLFFBQVEsMENBQUUsTUFBTSxFQUFDO3dDQUN2QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3dDQUMvQixrQkFBa0IsR0FBRyx3RUFBd0IsQ0FBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUM5RSxnRkFBZ0Y7cUNBQ25GO29DQUNELE9BQU8sa0JBQWtCLENBQUM7Z0NBQzVCLENBQUMsQ0FBQztxQ0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRTtnQ0FDZCxDQUFDLENBQUM7NEJBQ0osQ0FBQzs0QkFDRCxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQ0FDckIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7O29DQUMzQixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7b0NBQ25CLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztvQ0FDdEIsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7b0NBQ3pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO29DQUN2QyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztvQ0FDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLEVBQUM7d0NBQ3JFLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7cUNBQ2pDO29DQUNELE1BQU0sUUFBUSxHQUFHLFVBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxRQUFRLG1DQUFFLEVBQUUsQ0FBQztvQ0FDcEMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFDO3dDQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQzs0Q0FDbkMsTUFBTSxVQUFVLEdBQUcsY0FBUSxDQUFDLENBQUMsQ0FBQywwQ0FBRSxVQUFVLENBQUM7NENBQzNDLDZCQUE2Qjs0Q0FDN0IsSUFBSSxJQUFJLEdBQUcsY0FBYzs0Q0FDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDO2dEQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFFO29EQUNkLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztvREFDbkIsSUFBSSxRQUFRLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQzt3REFBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29EQUMvQyxJQUFJLE1BQU07d0RBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0RBQ3hDLENBQUMsQ0FBQzs2Q0FDTDt5Q0FDSjt3Q0FDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUM7NENBQ2YsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRDQUNoQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7NENBQy9DLElBQUksZ0JBQWdCLEVBQUM7Z0RBQ2pCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztnREFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0RBQ3JCLE1BQU0sV0FBVyxHQUFHLDJFQUFxQixDQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztnREFDeEUsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnREFDaEMsSUFBRztvREFDQyxZQUFZO29EQUNaLE1BQU0sY0FBYyxHQUFHLElBQUksb0RBQU8sQ0FBQyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7b0RBQ3ZFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7aURBQzFDO2dEQUFBLE9BQU0sR0FBRyxFQUFDLEdBQUU7Z0RBQ2IsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFDO29EQUNyQixNQUFNLGNBQWMsR0FBRywwRUFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztvREFDM0QsSUFBSSxHQUFHO3dEQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0RBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvREFDckMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxNQUFNO2lEQUNqRDtnREFDRCxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsWUFBWSxDQUFDO2dEQUN2QyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsWUFBWSxDQUFDOzZDQUN6Qzt5Q0FDSjt3Q0FDRCxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSzt3Q0FDM0IsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO3dDQUNqRCxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsV0FBVztxQ0FDNUM7b0NBQ0QsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dDQUN4QixDQUFDLENBQUMsQ0FBQzs0QkFDTCxDQUFDOzRCQUNELFlBQVksRUFBQyxJQUFJOzRCQUNqQixhQUFhLEVBQUMsRUFBQyxLQUFLLEVBQUMscUJBQXFCLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDO3lCQUM5RixDQUFDLENBQUM7d0JBQ0gsTUFBTSxZQUFZLEdBQUcsSUFBSSwyREFBTSxDQUFDOzRCQUM1QixJQUFJLEVBQUMsR0FBRyxDQUFDLElBQUk7NEJBQ2IsU0FBUyxFQUFDLDRCQUE0Qjs0QkFDdEMscUJBQXFCLEVBQUMsS0FBSzs0QkFDM0IsT0FBTyxFQUFDLENBQUMsa0JBQWtCLENBQUM7NEJBQzVCLGFBQWEsRUFBQyxFQUFDLEtBQUssRUFBQyxxQkFBcUIsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUM7eUJBQzlGLENBQUM7d0JBQ0YsWUFBWSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUMsRUFBRTs0QkFDdEMsSUFBRyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQztnQ0FDN0MsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUM7b0NBQzlCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztvQ0FDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0NBQ3JCLE1BQU0sV0FBVyxHQUFHLDJFQUFxQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7b0NBQ3JGLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0NBQ2hDLElBQUc7d0NBQ0MsWUFBWTt3Q0FDWixNQUFNLGNBQWMsR0FBRyxJQUFJLG9EQUFPLENBQUMsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO3dDQUN2RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDO3FDQUMxQztvQ0FBQSxPQUFNLEdBQUcsRUFBQyxHQUFFO29DQUNiLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBQzt3Q0FDckIsTUFBTSxjQUFjLEdBQUcsMEVBQW9CLENBQUMsYUFBYSxDQUFDLENBQUM7d0NBQzNELEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7d0NBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQ0FDeEM7aUNBQ0o7NkJBQ0o7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUMsRUFBRTs0QkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7Z0NBQ2QsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0NBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0NBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO2dDQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQ0FDcEIsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDOzZCQUN4Qjt3QkFDTCxDQUFDLENBQUMsQ0FBQzt3QkFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztvQkFDckMsQ0FBQyxFQUFDO2lCQUNMO2FBRUo7UUFDTCxDQUFDO1FBdktHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUM7SUFDdkMsQ0FBQztJQXdLRCxNQUFNOztRQUVGLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxhQUFhLEVBQUM7WUFDL0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDM0IsSUFBSSxHQUFHLEVBQUM7Z0JBQ0osR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO2dCQUNuRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ2xDO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFDO2dCQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUM3QjtZQUNELGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDckIsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQzlDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDdEIsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUVELE9BQU0sQ0FDRixvRUFBSyxTQUFTLEVBQUMsaUNBQWlDO1lBRXhDLFdBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSwwQ0FBRSxNQUFNO2dCQUNsQywyREFBQyw2REFBb0IsSUFDakIsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUM3QyxrQkFBa0IsRUFBSSxJQUFJLENBQUMsa0JBQWtCLEdBQy9DO1lBRU47Z0JBQUUsb0VBQUssRUFBRSxFQUFDLDRCQUE0QixFQUFDLFNBQVMsRUFBQyxPQUFPLEdBQU8sQ0FBRztZQUU5RCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUNqQixvRUFBSyxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUM7Z0JBQ2xHLG9FQUFLLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQztvQkFDN0YsMkRBQUMsNENBQU8sT0FBRyxDQUNUO2dCQUNOLG9FQUFLLEtBQUssRUFBSSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsZ0NBRWxFLENBQ0osQ0FDVCxDQUVILENBQ1Q7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2VhcmNoLXZhbHVlLXdpZGdldC9zcmMvaGVscGVyL2hlbHBlci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2VcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlYXJjaC12YWx1ZS13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEhlbHBlciB7XG5cbiAgICBnZXRBbGxTdWdnZXN0aW9ucyA9IChmZWF0dXJlczphbnlbXSxwYXJhbXMsc2VhcmNoZWRGaWVsZEFycik9PntcbiAgICAgICAgLy8gY29uc3Qgc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHBhcmFtcz8uc3VnZ2VzdFRlcm0/P1wiIFwiXG4gICAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gZmVhdHVyZXMucmVkdWNlKChuZXdTdWdnZXN0aW9ucyx7YXR0cmlidXRlc30pPT57XG4gICAgICAgICAgICAvLyBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAvLyBjb25zdCBrZXlzID0gW3NlYXJjaGVkRmllbGRdO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IHNlYXJjaGVkRmllbGRBcnI7XG4gICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoa2V5VmFsKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGtleSx0ZXh0LHNvdXJjZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc1trZXlWYWxdID09PSBcIm51bWJlclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gcGFyc2VJbnQoc2VhcmNoSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmICh0eXBlb2YgYXR0cmlidXRlc1trZXlWYWxdID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9ICBhdHRyaWJ1dGVzW2tleVZhbF0uaW5jbHVkZXMoc2VhcmNoSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJrZXlcIl0gPSBhdHRyaWJ1dGVzW1wiT0JKRUNUSURcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJ0ZXh0XCJdID0gYCR7YXR0cmlidXRlc1trZXlWYWxdfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJzb3VyY2VJbmRleFwiXSA9IHBhcmFtcy5zb3VyY2VJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3U3VnZ2VzdGlvbnMucHVzaChvYmopXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgYXR0cmlidXRlc1trZXlWYWxdID09PSBcIm51bWJlclwiKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChhdHRyaWJ1dGVzW2tleVZhbF0gPT09IHNlYXJjaEl0ZW0pe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9ialtcImtleVwiXSA9IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9ialtcInRleHRcIl0gPSBhdHRyaWJ1dGVzW2tleVZhbF0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2JqW1wic291cmNlSW5kZXhcIl0gPSBwYXJhbXMuc291cmNlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdTdWdnZXN0aW9ucy5wdXNoKG9iailcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfWVsc2UgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGF0dHJpYnV0ZXNba2V5VmFsXS5pbmNsdWRlcyhzZWFyY2hJdGVtKSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2JqW1wia2V5XCJdID0gXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2JqW1widGV4dFwiXSA9IGF0dHJpYnV0ZXNba2V5VmFsXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmpbXCJzb3VyY2VJbmRleFwiXSA9IHBhcmFtcy5zb3VyY2VJbmRleFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld1N1Z2dlc3Rpb25zLnB1c2gob2JqKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld1N1Z2dlc3Rpb25zXG4gICAgICAgIH0sW10pIFxuICAgICAgICByZXR1cm4gc3VnZ2VzdGlvbnM7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIZWxwZXIoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVzdF9zdXBwb3J0X1F1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX1NlYXJjaF9TZWFyY2hTb3VyY2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1JlYWN0LGpzeH0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbmltcG9ydCBTZWFyY2ggZnJvbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICdqaW11LXVpJztcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5pbXBvcnQgU2VhcmNoU291cmNlIGZyb20gJ2Vzcmkvd2lkZ2V0cy9TZWFyY2gvU2VhcmNoU291cmNlJztcbmltcG9ydCBRdWVyeSBmcm9tICdlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeSc7XG5pbXBvcnQgaGVscGVyIGZyb20gJy4uL2hlbHBlci9oZWxwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PGFueSxhbnk+e1xuXG4gICAgaW5pdGlhbFpvb21WYWx1ZSA9IDA7XG4gICAgc2VhcmNoV2lkZ2V0ID0gbnVsbDtcbiAgICBjbGVhcmVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczphbnkpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7am12Om51bGwsbG9hZGVyOnRydWV9XG4gICAgfVxuXG4gICAgZ2V0RmllbGRJbmZvcyA9IChmaWVsZHM6YW55W10pPT57XG4gICAgICAgIGNvbnN0IG5ld0ZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKWZpZWxkcy5mb3JFYWNoKGVsPT57bmV3RmllbGRzLnB1c2goe2ZpZWxkTmFtZTplbC5uYW1lLGxhYmVsOmVsLmFsaWFzfSl9KVxuICAgICAgICByZXR1cm4gbmV3RmllbGRzO1xuICAgIH1cblxuICAgIHNlbGVjdEZlYXR1cmVMYXllciA9IChnZW9tZXRyeTphbnkpPT57XG4gICAgICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSB0aGlzLnN0YXRlLmptdjtcbiAgICAgICAgaWYgKGFjdGl2ZVZpZXcpe1xuICAgICAgICAgICAgYWN0aXZlVmlldz8uc2VsZWN0RmVhdHVyZXNCeUdyYXBoaWMoZ2VvbWV0cnksXCJjb250YWluc1wiKS50aGVuKChyZXN1bHRzKT0+e30pXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pnt9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSBhc3luYyhqbXY6SmltdU1hcFZpZXcpPT57XG4gICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsWm9vbVZhbHVlID0gIGptdi52aWV3Lnpvb207XG4gICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBjb25zdCB1bnJlcXVpcmVkVmFsdWUgPSBbXCJcIixcIiBcIl07XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlLnVybDtcbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2UubGF5ZXJJZDtcbiAgICAgICAgbGV0IHNlYXJjaEZpZWxkQXJyID0gW107XG4gICAgICAgIGNvbnN0IHNlYXJjaGVkRmllbGQgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlLnNlYXJjaEZpZWxkO1xuICAgICAgICBjb25zdCBuZXdTZWFyY2hGaWVsZCA9IHNlYXJjaGVkRmllbGQuc3BsaXQoXCIsXCIpO1xuICAgICAgICBpZiAobmV3U2VhcmNoRmllbGQ/Lmxlbmd0aCl7XG4gICAgICAgICAgICBuZXdTZWFyY2hGaWVsZC5mb3JFYWNoKChmaWVsZCk9PnNlYXJjaEZpZWxkQXJyLnB1c2goYCR7ZmllbGR9YCkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlYXJjaEZpZWxkQXJyLnB1c2goYCR7c2VhcmNoZWRGaWVsZH1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IHNlYXJjaGVkRmllbGQgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlLnNlYXJjaEZpZWxkO1xuICAgICAgICBpZiAoIXVucmVxdWlyZWRWYWx1ZS5pbmNsdWRlcyhsYXllcklkKSl1cmwgPSB1cmwrXCIvXCIrbGF5ZXJJZC50cmltKClcbiAgICAgICAgaWYgKHVybCl7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlTGF5ZXIgPSAgbmV3IEZlYXR1cmVMYXllcih1cmwpO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVMYXllcil7XG4gICAgICAgICAgICAgICAgZmVhdHVyZUxheWVyLmxvYWQoKS50aGVuKGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7c2VhcmNoZWRGaWVsZH1gXTtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gc2VhcmNoRmllbGRBcnI7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcXVlcnkub3V0RmllbGRzLmluY2x1ZGVzKFwiT0JKRUNUSURcIikpcXVlcnkub3V0RmllbGRzLnB1c2goXCJPQkpFQ1RJRFwiKVxuICAgICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IFwiMT0xXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlTGF5ZXIucXVlcnlGZWF0dXJlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gZmVhdHVyZUxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyVmlldyA9IGF3YWl0IGptdi52aWV3LndoZW5MYXllclZpZXcoZmVhdHVyZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllclZpZXcucXVlcnlGZWF0dXJlcylyZXN1bHRzID0gbGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlcjpmYWxzZSxqbXY6am12fSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRJbmZvcyA9IHRoaXMuZ2V0RmllbGRJbmZvcyhmZWF0dXJlTGF5ZXIuZmllbGRzPz9bXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVNlYXJjaFNvdXJjZSA9IG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluU3VnZ2VzdENoYXJhY3RlcnM6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFN1Z2dlc3Rpb25zOiAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdFN1Z2dlc3Rpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGE/LmZlYXR1cmVzPy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlcyA9IGRhdGEuZmVhdHVyZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdWdnZXN0aW9ucyA9IGhlbHBlci5nZXRBbGxTdWdnZXN0aW9ucyhmZWF0dXJlcyxwYXJhbXMsc2VhcmNoRmllbGRBcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0U3VnZ2VzdGlvbnMgPSBoZWxwZXIuZ2V0QWxsU3VnZ2VzdGlvbnMoZmVhdHVyZXMscGFyYW1zLHNlYXJjaGVkRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFN1Z2dlc3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b1NlYXJjaCA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBwYXJhbXMuc3VnZ2VzdFJlc3VsdC5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlSW5kZXggPSBwYXJhbXMuc3VnZ2VzdFJlc3VsdC5zb3VyY2VJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHRvU2VhcmNoKSkgJiYgdHlwZW9mIHBhcnNlSW50KHRvU2VhcmNoKSA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvU2VhcmNoID0gcGFyc2VJbnQodG9TZWFyY2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlcyA9IGRhdGE/LmZlYXR1cmVzPz9bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IGZlYXR1cmVzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IGZlYXR1cmVzW2ldPy5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGtleXMgPSBbc2VhcmNoZWRGaWVsZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlzID0gc2VhcmNoRmllbGRBcnJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b1NlYXJjaCA9PT0gYXR0cmlidXRlc1trZXldKXN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpcmVzdWx0cy5wdXNoKGZlYXR1cmVzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaGVkSXRlbSA9IHJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hlZEdlb21ldHJ5ID0gc2VhcmNoZWRJdGVtLmdlb21ldHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaGVkR2VvbWV0cnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihzZWFyY2hlZEdlb21ldHJ5LDEsIFwibWV0ZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChuZXdHZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7Z2VvbWV0cnk6bmV3R2VvbWV0cnksc3ltYm9sOm51bGx9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGZWF0dXJlTGF5ZXIocG9seWdvbkdyYXBoaWMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycil7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaWZpZWRHZW9tdHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqbXYpam12LnZpZXcucG9wdXAudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8odW5pZmllZEdlb210cnkuZXh0ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wiZXh0ZW50XCJdID0gdW5pZmllZEdlb210cnkuZXh0ZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJmZWF0dXJlXCJdID0gc2VhcmNoZWRJdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcInRhcmdldFwiXSA9IHNlYXJjaGVkSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJrZXlcIl0gPSBmaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJuYW1lXCJdID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wic291cmNlSW5kZXhcIl0gPSBzb3VyY2VJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3NlYXJjaFJlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwRW5hYmxlZDp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBUZW1wbGF0ZTp7dGl0bGU6XCJTZWFyY2ggdmFsdWUgd2lkZ2V0XCIsY29udGVudDpbe3R5cGU6XCJmaWVsZHNcIixmaWVsZEluZm9zOmZpZWxkSW5mb3N9XX1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlldzpqbXYudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjpcInNlYXJjaC13aWRnZXQtc2VhcmNoLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlRGVmYXVsdFNvdXJjZXM6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzOltjdXN0b21TZWFyY2hTb3VyY2VdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBUZW1wbGF0ZTp7dGl0bGU6XCJTZWFyY2ggdmFsdWUgd2lkZ2V0XCIsY29udGVudDpbe3R5cGU6XCJmaWVsZHNcIixmaWVsZEluZm9zOmZpZWxkSW5mb3N9XX1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VsZWN0LXJlc3VsdFwiLCAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihldmVudCAmJiBldmVudC5yZXN1bHQgJiYgZXZlbnQucmVzdWx0LmZlYXR1cmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5yZXN1bHQuZmVhdHVyZS5nZW9tZXRyeSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5LDEsIFwibWV0ZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe2dlb21ldHJ5Om5ld0dlb21ldHJ5LHN5bWJvbDpudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZlYXR1cmVMYXllcihwb2x5Z29uR3JhcGhpYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycil7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh1bmlmaWVkR2VvbXRyeS5leHRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VhcmNoLWNsZWFyXCIsIChldmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jbGVhcmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYuY2xlYXJTZWxlY3RlZEZlYXR1cmVzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8oe2NlbnRlcjpqbXYudmlldy5jZW50ZXIsem9vbTp0aGlzLmluaXRpYWxab29tVmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFdpZGdldCA9IHNlYXJjaFdpZGdldDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG5cbiAgICAgICAgbGV0IGNsb3NlZENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG9wZW5DaGVja2VkID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnByb3BzLnN0YXRlID09PSBcIkNMT1NFRFwiICYmICFjbG9zZWRDaGVja2VkKXtcbiAgICAgICAgICAgIGNvbnN0IGptdiA9IHRoaXMuc3RhdGUuam12O1xuICAgICAgICAgICAgaWYgKGptdil7XG4gICAgICAgICAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xuICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8oe2NlbnRlcjpqbXYudmlldy5jZW50ZXIsem9vbTp0aGlzLmluaXRpYWxab29tVmFsdWV9KTtcbiAgICAgICAgICAgICAgICBqbXYudmlldy5wb3B1cC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hXaWRnZXQpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hXaWRnZXQuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsb3NlZENoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgb3BlbkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnN0YXRlID09PSBcIk9QRU5FRFwiICYmICFvcGVuQ2hlY2tlZCl7XG4gICAgICAgICAgICBjbG9zZWRDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBvcGVuQ2hlY2tlZCA9IHRydWU7ICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNlYXJjaC12YWx1ZSBqaW11LXdpZGdldFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCAmJiBcbiAgICAgICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlID0ge3RoaXMub25BY3RpdmVWaWV3Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8PjxkaXYgaWQ9XCJzZWFyY2gtd2lkZ2V0LXNlYXJjaC12YWx1ZVwiIGNsYXNzTmFtZT1cInctMTAwXCI+PC9kaXY+PC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsZGlzcGxheTpcImZsZXhcIixmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixoZWlnaHQ6XCJhdXRvXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0Oic4MHB4Jyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOicxMDAlJyxtYXJnaW5MZWZ0OlwiYXV0b1wiLG1hcmdpblJpZ2h0OlwiYXV0b1wifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7Zm9udFNpemU6MTQsY29sb3I6XCJncmV5XCIsd2lkdGg6JzEwMCUnLHRleHRBbGlnbjpcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcgc2VhcmNoIHdpZGdldC4uLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9