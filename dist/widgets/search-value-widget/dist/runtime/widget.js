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
        this.getAllSuggestions = (features, params) => {
            var _a;
            // const suggestions = [];
            const searchItem = (_a = params === null || params === void 0 ? void 0 : params.suggestTerm) !== null && _a !== void 0 ? _a : " ";
            const suggestions = features.reduce((newSuggestions, { attributes }) => {
                const keys = Object.keys(attributes);
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
                            obj["key"] = attributes[keyVal],
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
            if (!unrequiredValue.includes(layerId)) {
                url = url + "/" + layerId.trim();
            }
            if (url) {
                const featureLayer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"](url);
                if (featureLayer) {
                    featureLayer.load().then(() => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_8__["default"]();
                        query.returnGeometry = true;
                        query.outFields = [`${searchedField}`];
                        query.where = "1=1";
                        let results;
                        if (featureLayer.queryFeatures) {
                            results = featureLayer.queryFeatures(query);
                            const anotherResults = yield featureLayer.queryFeatures(query);
                        }
                        else {
                            const layerView = yield jmv.view.whenLayerView(featureLayer);
                            if (layerView.queryFeatures) {
                                results = layerView.queryFeatures(query);
                            }
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
                                        defaultSuggestions = _helper_helper__WEBPACK_IMPORTED_MODULE_9__["default"].getAllSuggestions(features, params);
                                    }
                                    return defaultSuggestions;
                                    // var results = [];
                                    // var toSearch = params.suggestTerm;
                                    // return[{
                                    //     key:"name",
                                    //     text:"",
                                    //     sourceIndex:params.sourceIndex
                                    // }]
                                    // data = data["allIBLocations"]["data"];
                                    // for(var i=0; i<data.length; i++) {
                                    //   if(data[i]["name"].indexOf(toSearch)!=-1) {
                                    //     results.push(data[i]);
                                    //   }
                                    // }
                                    // return results.map((feature) => {
                                    //   return {
                                    //     key: "name",
                                    //     text: feature.name,
                                    //     sourceIndex: params.sourceIndex
                                    //   };
                                    // })
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
                                            let keys = [];
                                            if (attributes) {
                                                keys = Object.keys(attributes);
                                            }
                                            if (keys.length) {
                                                keys.forEach(key => {
                                                    let status = false;
                                                    if (typeof toSearch === "number") {
                                                        if (toSearch === attributes[key]) {
                                                            status = true;
                                                        }
                                                    }
                                                    else if (typeof toSearch === "string") {
                                                        if (toSearch.includes(attributes[key])) {
                                                            status = true;
                                                        }
                                                    }
                                                    if (status) {
                                                        results.push(features[i]);
                                                    }
                                                });
                                            }
                                            // if (features[i].indexOf(toSearch) !== -1)results.push()
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
                                    // data = data["allIBLocations"]["data"];
                                    // for(var i=0; i<data.length; i++) {
                                    //   if(data[i]["name"].indexOf(toSearch)!=-1) {
                                    //     results.push(data[i]);
                                    //   }}
                                    // const searchResults = results.map((feature) => {
                                    //   const graphic = new Graphic({
                                    //     geometry: new Point({
                                    //       latitude: feature.geoCode.latitude,
                                    //       longitude: feature.geoCode.longitude
                                    //     }),
                                    //     attributes: feature.address
                                    //   });
                                    //   const buffer = geometryEngine.geodesicBuffer(
                                    //     graphic.geometry,
                                    //     100,
                                    //     "meters"
                                    //   );
                                    //   const searchResult = {
                                    //     extent: buffer.extent,
                                    //     feature: graphic,
                                    //     name: feature["name"]
                                    //   };
                                    //   return searchResult;
                                    // });
                                    return searchResult;
                                });
                            },
                            // popupEnabled:true,
                            popupTemplate: { title: "Search value widget", content: [{ type: "fields", fieldInfos: fieldInfos }] }
                        });
                        // const customSearchSources = new SearchSource({
                        //     getSuggestions:(params)=>{
                        //         results.then((data)=>{
                        //         })
                        //         return [{
                        //             key: "name",
                        //             text: "kile",
                        //             sourceIndex: params.sourceIndex
                        //         }]
                        //     }
                        // })
                        // const searchExtent = {
                        //     where: `${searchedField} LIKE '%'`
                        // }
                        const sources = [{
                                layer: featureLayer,
                                placeholder: "Locating by using value",
                                maxResults: 5,
                                maxSuggestions: 6,
                                displayField: searchedField,
                                searchedField: [`${searchedField}`],
                                minSuggestCharacters: 0,
                                suggestionsEnabled: true,
                                exactMatch: false,
                                // filter:searchExtent
                                // searchTerm: "%" + searchedField + "%"
                            }];
                        const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_2__["default"]({
                            view: jmv.view,
                            container: "search-widget-search-value",
                            includeDefaultSources: false,
                            sources: [customSearchSource],
                            // sources:sources,
                            // popupTemplate:{title:"Search value widget",content:[{type:"fields",fieldInfos:fieldInfos}]}
                        });
                        // searchWidget.on("suggest-start",(event)=>{
                        //     // searchWidget.suggest(event.searchTerm)
                        // })
                        // searchWidget.on("suggest-complete",(event)=>{
                        //     event.results[0].source.filter.where =  `${searchedField} LIKE '%${event.searchTerm}'` 
                        // })
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
                                        if (jmv)
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
            this.state.loader && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "auto"
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                        height: '80px',
                        position: 'relative',
                        width: '100%',
                        marginLeft: "auto",
                        marginRight: "auto"
                    } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE1BQU07SUFBWjtRQUVJLHNCQUFpQixHQUFHLENBQUMsUUFBYyxFQUFDLE1BQU0sRUFBQyxFQUFFOztZQUN6QywwQkFBMEI7WUFDMUIsTUFBTSxVQUFVLEdBQUcsWUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFdBQVcsbUNBQUUsR0FBRztZQUMzQyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsRUFBRTtnQkFDL0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDO29CQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTt3QkFDbkIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNmLDRCQUE0Qjt3QkFDNUIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUNuQixJQUFJLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBQzs0QkFDdkMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQ3hEOzZCQUFLLElBQUksT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFDOzRCQUM3QyxNQUFNLEdBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7eUJBQ3BEO3dCQUVELElBQUksTUFBTSxFQUFDOzRCQUNQLEdBQUcsQ0FBQyxLQUFLLENB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QUNqQixvRUFDTSxLQUFLLEVBQUU7b0JBQ0gsS0FBSyxFQUFDLE1BQU07b0JBQ1osT0FBTyxFQUFDLE1BQU07b0JBQ2QsYUFBYSxFQUFDLFFBQVE7b0JBQ3RCLGNBQWMsRUFBQyxRQUFRO29CQUN2QixNQUFNLEVBQUMsTUFBTTtpQkFDaEI7Z0JBRUgsb0VBQ0ksS0FBSyxFQUFFO3dCQUNILE1BQU0sRUFBQyxNQUFNO3dCQUNiLFFBQVEsRUFBQyxVQUFVO3dCQUNuQixLQUFLLEVBQUMsTUFBTTt3QkFDWixVQUFVLEVBQUMsTUFBTTt3QkFDakIsV0FBVyxFQUFDLE1BQU07cUJBQ3JCO29CQUVELDJEQUFDLDRDQUFPLE9BQUcsQ0FDVDtnQkFDTixvRUFBSyxLQUFLLEVBQUksRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGdDQUVsRSxDQUNKLENBQ1QsQ0FFSCxDQUNUO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlYXJjaC12YWx1ZS13aWRnZXQvc3JjL2hlbHBlci9oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL0dyYXBoaWNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2gvU2VhcmNoU291cmNlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBIZWxwZXIge1xuXG4gICAgZ2V0QWxsU3VnZ2VzdGlvbnMgPSAoZmVhdHVyZXM6YW55W10scGFyYW1zKT0+e1xuICAgICAgICAvLyBjb25zdCBzdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBzZWFyY2hJdGVtID0gcGFyYW1zPy5zdWdnZXN0VGVybT8/XCIgXCJcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBmZWF0dXJlcy5yZWR1Y2UoKG5ld1N1Z2dlc3Rpb25zLHthdHRyaWJ1dGVzfSk9PntcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAga2V5cy5mb3JFYWNoKChrZXlWYWwpPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQga2V5LHRleHQsc291cmNlSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gYXR0cmlidXRlc1trZXlWYWxdID09PSBwYXJzZUludChzZWFyY2hJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gIGF0dHJpYnV0ZXNba2V5VmFsXS5pbmNsdWRlcyhzZWFyY2hJdGVtKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcImtleVwiXSA9IGF0dHJpYnV0ZXNba2V5VmFsXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcInRleHRcIl0gPSBgJHthdHRyaWJ1dGVzW2tleVZhbF19YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcInNvdXJjZUluZGV4XCJdID0gcGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdWdnZXN0aW9ucy5wdXNoKG9iailcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHR5cGVvZiBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gc2VhcmNoSXRlbSl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2JqW1wia2V5XCJdID0gXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2JqW1widGV4dFwiXSA9IGF0dHJpYnV0ZXNba2V5VmFsXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmpbXCJzb3VyY2VJbmRleFwiXSA9IHBhcmFtcy5zb3VyY2VJbmRleFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld1N1Z2dlc3Rpb25zLnB1c2gob2JqKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9ZWxzZSBpZiAodHlwZW9mIGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoYXR0cmlidXRlc1trZXlWYWxdLmluY2x1ZGVzKHNlYXJjaEl0ZW0pKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmpbXCJrZXlcIl0gPSBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmpbXCJ0ZXh0XCJdID0gYXR0cmlidXRlc1trZXlWYWxdLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9ialtcInNvdXJjZUluZGV4XCJdID0gcGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3U3VnZ2VzdGlvbnMucHVzaChvYmopXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3U3VnZ2VzdGlvbnNcbiAgICAgICAgfSxbXSkgXG4gICAgICAgIHJldHVybiBzdWdnZXN0aW9ucztcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhlbHBlcigpOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZXN0X3N1cHBvcnRfUXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX1NlYXJjaF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfU2VhcmNoX1NlYXJjaFNvdXJjZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7UmVhY3QsanN4fSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHsgSmltdU1hcFZpZXcsIEppbXVNYXBWaWV3Q29tcG9uZW50IH0gZnJvbSAnamltdS1hcmNnaXMnO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJ2ppbXUtdWknO1xuaW1wb3J0IGdlb21ldHJ5RW5naW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcbmltcG9ydCBTZWFyY2hTb3VyY2UgZnJvbSAnZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2UnO1xuaW1wb3J0IFF1ZXJ5IGZyb20gJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5JztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vaGVscGVyL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8YW55LGFueT57XG5cbiAgICBpbml0aWFsWm9vbVZhbHVlID0gMDtcbiAgICBzZWFyY2hXaWRnZXQgPSBudWxsO1xuICAgIGNsZWFyZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOmFueSl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtqbXY6bnVsbCxsb2FkZXI6dHJ1ZX1cbiAgICB9XG5cbiAgICBnZXRGaWVsZEluZm9zID0gKGZpZWxkczphbnlbXSk9PntcbiAgICAgICAgY29uc3QgbmV3RmllbGRzID0gW11cbiAgICAgICAgaWYgKGZpZWxkcy5sZW5ndGgpZmllbGRzLmZvckVhY2goZWw9PntuZXdGaWVsZHMucHVzaCh7ZmllbGROYW1lOmVsLm5hbWUsbGFiZWw6ZWwuYWxpYXN9KX0pXG4gICAgICAgIHJldHVybiBuZXdGaWVsZHM7XG4gICAgfVxuXG4gICAgc2VsZWN0RmVhdHVyZUxheWVyID0gKGdlb21ldHJ5OmFueSk9PntcbiAgICAgICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuc3RhdGUuam12O1xuICAgICAgICBpZiAoYWN0aXZlVmlldyl7XG4gICAgICAgICAgICBhY3RpdmVWaWV3Py5zZWxlY3RGZWF0dXJlc0J5R3JhcGhpYyhnZW9tZXRyeSxcImNvbnRhaW5zXCIpLnRoZW4oKHJlc3VsdHMpPT57fSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+e30pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIG9uQWN0aXZlVmlld0NoYW5nZSA9IGFzeW5jKGptdjpKaW11TWFwVmlldyk9PntcbiAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xuICAgICAgICB0aGlzLmluaXRpYWxab29tVmFsdWUgPSAgam12LnZpZXcuem9vbTtcbiAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHVucmVxdWlyZWRWYWx1ZSA9IFtcIlwiLFwiIFwiXTtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2UudXJsO1xuICAgICAgICBjb25zdCBsYXllcklkID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS5sYXllcklkO1xuICAgICAgICBjb25zdCBzZWFyY2hlZEZpZWxkID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS5zZWFyY2hGaWVsZDtcbiAgICAgICAgaWYgKCF1bnJlcXVpcmVkVmFsdWUuaW5jbHVkZXMobGF5ZXJJZCkpe1xuICAgICAgICAgICAgdXJsID0gdXJsK1wiL1wiK2xheWVySWQudHJpbSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybCl7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlTGF5ZXIgPSAgbmV3IEZlYXR1cmVMYXllcih1cmwpO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVMYXllcil7XG4gICAgICAgICAgICAgICAgZmVhdHVyZUxheWVyLmxvYWQoKS50aGVuKGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7c2VhcmNoZWRGaWVsZH1gXTtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxheWVyLnF1ZXJ5RmVhdHVyZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IGZlYXR1cmVMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFub3RoZXJSZXN1bHRzID0gYXdhaXQgZmVhdHVyZUxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyVmlldyA9IGF3YWl0IGptdi52aWV3LndoZW5MYXllclZpZXcoZmVhdHVyZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllclZpZXcucXVlcnlGZWF0dXJlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZXI6ZmFsc2Usam12Omptdn0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSB0aGlzLmdldEZpZWxkSW5mb3MoZmVhdHVyZUxheWVyLmZpZWxkcz8/W10pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21TZWFyY2hTb3VyY2UgPSBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblN1Z2dlc3RDaGFyYWN0ZXJzOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRTdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhPy5mZWF0dXJlcz8ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBkYXRhLmZlYXR1cmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U3VnZ2VzdGlvbnMgPSBoZWxwZXIuZ2V0QWxsU3VnZ2VzdGlvbnMoZmVhdHVyZXMscGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRTdWdnZXN0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciB0b1NlYXJjaCA9IHBhcmFtcy5zdWdnZXN0VGVybTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm5be1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBrZXk6XCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRleHQ6XCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc291cmNlSW5kZXg6cGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkYXRhID0gZGF0YVtcImFsbElCTG9jYXRpb25zXCJdW1wiZGF0YVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IodmFyIGk9MDsgaTxkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBpZihkYXRhW2ldW1wibmFtZVwiXS5pbmRleE9mKHRvU2VhcmNoKSE9LTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVzdWx0cy5wdXNoKGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVzdWx0cy5tYXAoKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGtleTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRleHQ6IGZlYXR1cmUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgc291cmNlSW5kZXg6IHBhcmFtcy5zb3VyY2VJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRSZXN1bHRzOiAocGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b1NlYXJjaCA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBwYXJhbXMuc3VnZ2VzdFJlc3VsdC5rZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlSW5kZXggPSBwYXJhbXMuc3VnZ2VzdFJlc3VsdC5zb3VyY2VJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KHRvU2VhcmNoKSkgJiYgdHlwZW9mIHBhcnNlSW50KHRvU2VhcmNoKSA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvU2VhcmNoID0gcGFyc2VJbnQodG9TZWFyY2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlcyA9IGRhdGE/LmZlYXR1cmVzPz9bXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7aSA8IGZlYXR1cmVzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IGZlYXR1cmVzW2ldPy5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRvU2VhcmNoID09PSBcIm51bWJlclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b1NlYXJjaCA9PT0gYXR0cmlidXRlc1trZXldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmICh0eXBlb2YgdG9TZWFyY2ggPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvU2VhcmNoLmluY2x1ZGVzKGF0dHJpYnV0ZXNba2V5XSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZmVhdHVyZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGZlYXR1cmVzW2ldLmluZGV4T2YodG9TZWFyY2gpICE9PSAtMSlyZXN1bHRzLnB1c2goKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hlZEl0ZW0gPSByZXN1bHRzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoZWRHZW9tZXRyeSA9IHNlYXJjaGVkSXRlbS5nZW9tZXRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2hlZEdlb21ldHJ5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUdlb21ldHJ5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoc2VhcmNoZWRHZW9tZXRyeSwxLCBcIm1ldGVyc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe2dlb21ldHJ5Om5ld0dlb21ldHJ5LHN5bWJvbDpudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmVhdHVyZUxheWVyKHBvbHlnb25HcmFwaGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1jYXRjaChlcnIpe31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bmlmaWVkR2VvbXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoam12KWptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcImV4dGVudFwiXSA9IHVuaWZpZWRHZW9tdHJ5LmV4dGVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wiZmVhdHVyZVwiXSA9IHNlYXJjaGVkSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJ0YXJnZXRcIl0gPSBzZWFyY2hlZEl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wia2V5XCJdID0gZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wibmFtZVwiXSA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcInNvdXJjZUluZGV4XCJdID0gc291cmNlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGF0YSA9IGRhdGFbXCJhbGxJQkxvY2F0aW9uc1wiXVtcImRhdGFcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yKHZhciBpPTA7IGk8ZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgaWYoZGF0YVtpXVtcIm5hbWVcIl0uaW5kZXhPZih0b1NlYXJjaCkhPS0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJlc3VsdHMucHVzaChkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qgc2VhcmNoUmVzdWx0cyA9IHJlc3VsdHMubWFwKChmZWF0dXJlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBncmFwaGljID0gbmV3IEdyYXBoaWMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBnZW9tZXRyeTogbmV3IFBvaW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBsYXRpdHVkZTogZmVhdHVyZS5nZW9Db2RlLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGxvbmdpdHVkZTogZmVhdHVyZS5nZW9Db2RlLmxvbmdpdHVkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXR0cmlidXRlczogZmVhdHVyZS5hZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IGJ1ZmZlciA9IGdlb21ldHJ5RW5naW5lLmdlb2Rlc2ljQnVmZmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBncmFwaGljLmdlb21ldHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwibWV0ZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zdCBzZWFyY2hSZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGV4dGVudDogYnVmZmVyLmV4dGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmVhdHVyZTogZ3JhcGhpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmFtZTogZmVhdHVyZVtcIm5hbWVcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICByZXR1cm4gc2VhcmNoUmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvcHVwRW5hYmxlZDp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBUZW1wbGF0ZTp7dGl0bGU6XCJTZWFyY2ggdmFsdWUgd2lkZ2V0XCIsY29udGVudDpbe3R5cGU6XCJmaWVsZHNcIixmaWVsZEluZm9zOmZpZWxkSW5mb3N9XX1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgY3VzdG9tU2VhcmNoU291cmNlcyA9IG5ldyBTZWFyY2hTb3VyY2Uoe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZ2V0U3VnZ2VzdGlvbnM6KHBhcmFtcyk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXN1bHRzLnRoZW4oKGRhdGEpPT57XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0ZXh0OiBcImtpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgc291cmNlSW5kZXg6IHBhcmFtcy5zb3VyY2VJbmRleFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qgc2VhcmNoRXh0ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgd2hlcmU6IGAke3NlYXJjaGVkRmllbGR9IExJS0UgJyUnYFxuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZXMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI6IGZlYXR1cmVMYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkxvY2F0aW5nIGJ5IHVzaW5nIHZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhSZXN1bHRzOjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhTdWdnZXN0aW9uczo2LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZpZWxkOnNlYXJjaGVkRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hlZEZpZWxkOltgJHtzZWFyY2hlZEZpZWxkfWBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluU3VnZ2VzdENoYXJhY3RlcnM6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zRW5hYmxlZDp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RNYXRjaDpmYWxzZSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlsdGVyOnNlYXJjaEV4dGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VhcmNoVGVybTogXCIlXCIgKyBzZWFyY2hlZEZpZWxkICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlldzpqbXYudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjpcInNlYXJjaC13aWRnZXQtc2VhcmNoLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlRGVmYXVsdFNvdXJjZXM6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzOltjdXN0b21TZWFyY2hTb3VyY2VdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc291cmNlczpzb3VyY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcG9wdXBUZW1wbGF0ZTp7dGl0bGU6XCJTZWFyY2ggdmFsdWUgd2lkZ2V0XCIsY29udGVudDpbe3R5cGU6XCJmaWVsZHNcIixmaWVsZEluZm9zOmZpZWxkSW5mb3N9XX1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VhcmNoV2lkZ2V0Lm9uKFwic3VnZ2VzdC1zdGFydFwiLChldmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIHNlYXJjaFdpZGdldC5zdWdnZXN0KGV2ZW50LnNlYXJjaFRlcm0pXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaFdpZGdldC5vbihcInN1Z2dlc3QtY29tcGxldGVcIiwoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBldmVudC5yZXN1bHRzWzBdLnNvdXJjZS5maWx0ZXIud2hlcmUgPSAgYCR7c2VhcmNoZWRGaWVsZH0gTElLRSAnJSR7ZXZlbnQuc2VhcmNoVGVybX0nYCBcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VsZWN0LXJlc3VsdFwiLCAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihldmVudCAmJiBldmVudC5yZXN1bHQgJiYgZXZlbnQucmVzdWx0LmZlYXR1cmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5yZXN1bHQuZmVhdHVyZS5nZW9tZXRyeSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5LDEsIFwibWV0ZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe2dlb21ldHJ5Om5ld0dlb21ldHJ5LHN5bWJvbDpudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZlYXR1cmVMYXllcihwb2x5Z29uR3JhcGhpYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycil7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqbXYpam12LnZpZXcucG9wdXAudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWFyY2gtY2xlYXJcIiwgKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNsZWFyZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5wb3B1cC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0ID0gc2VhcmNoV2lkZ2V0O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcblxuICAgICAgICBsZXQgY2xvc2VkQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgb3BlbkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RhdGUgPT09IFwiQ0xPU0VEXCIgJiYgIWNsb3NlZENoZWNrZWQpe1xuICAgICAgICAgICAgY29uc3Qgam12ID0gdGhpcy5zdGF0ZS5qbXY7XG4gICAgICAgICAgICBpZiAoam12KXtcbiAgICAgICAgICAgICAgICBqbXYuY2xlYXJTZWxlY3RlZEZlYXR1cmVzKCk7XG4gICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xuICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFdpZGdldC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xvc2VkQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBvcGVuQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RhdGUgPT09IFwiT1BFTkVEXCIgJiYgIW9wZW5DaGVja2VkKXtcbiAgICAgICAgICAgIGNsb3NlZENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG9wZW5DaGVja2VkID0gdHJ1ZTsgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2VhcmNoLXZhbHVlIGppbXUtd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoICYmIFxuICAgICAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSB7dGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDw+PGRpdiBpZD1cInNlYXJjaC13aWRnZXQtc2VhcmNoLXZhbHVlXCIgY2xhc3NOYW1lPVwidy0xMDBcIj48L2Rpdj48Lz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDonODBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDpcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e2ZvbnRTaXplOjE0LGNvbG9yOlwiZ3JleVwiLHdpZHRoOicxMDAlJyx0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIHNlYXJjaCB3aWRnZXQuLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==