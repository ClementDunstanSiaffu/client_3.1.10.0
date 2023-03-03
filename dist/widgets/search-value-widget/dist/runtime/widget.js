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
                        if (!query.outFields.includes("OBJECTID"))
                            query.outFields.push("OBJECTID");
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
                                        defaultSuggestions = _helper_helper__WEBPACK_IMPORTED_MODULE_9__["default"].getAllSuggestions(features, params, searchedField);
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
                                            // let keys = [];
                                            // if (attributes){
                                            //     keys = Object.keys(attributes);
                                            // }
                                            let keys = [searchedField];
                                            if (keys.length) {
                                                keys.forEach(key => {
                                                    let status = false;
                                                    if (toSearch === attributes[key])
                                                        status = true;
                                                    // if (typeof toSearch === "number"){
                                                    //     if (toSearch === attributes[key]){
                                                    //         status = true
                                                    //     }
                                                    // }else if (typeof toSearch === "string"){
                                                    //     if (toSearch === attributes[key]){
                                                    //         console.log(toSearch.includes(attributes[key]),toSearch,attributes[key],key)
                                                    //         status = true;
                                                    //     }
                                                    // }
                                                    if (status)
                                                        results.push(features[i]);
                                                });
                                            }
                                            // if (features[i].indexOf(toSearch) !== -1)results.push()
                                        }
                                        if (results.length) {
                                            const searchedItem = results[0];
                                            console.log(searchedItem, "check searched item");
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
                                    return [searchResult];
                                });
                            },
                            popupEnabled: true,
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
                            popupTemplate: { title: "Search value widget", content: [{ type: "fields", fieldInfos: fieldInfos }] }
                        });
                        // searchWidget.on("suggest-start",(event)=>{
                        //     // searchWidget.suggest(event.searchTerm)
                        // })
                        // searchWidget.on("suggest-complete",(event)=>{
                        //     event.results[0].source.filter.where =  `${searchedField} LIKE '%${event.searchTerm}'` 
                        // })
                        searchWidget.on("select-result", (event) => {
                            if (event && event.result && event.result.feature) {
                                // console.log(event.result,"check feature")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxNQUFNLE1BQU07SUFBWjtRQUVJLHNCQUFpQixHQUFHLENBQUMsUUFBYyxFQUFDLE1BQU0sRUFBQyxhQUFhLEVBQUMsRUFBRTs7WUFDdkQsMEJBQTBCO1lBQzFCLE1BQU0sVUFBVSxHQUFHLFlBQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxXQUFXLG1DQUFFLEdBQUc7WUFDM0MsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLEVBQUU7Z0JBQy9ELHdDQUF3QztnQkFDeEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDO29CQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTt3QkFDbkIsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO3dCQUNmLDRCQUE0Qjt3QkFDNUIsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUNuQixJQUFJLE9BQU8sVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBQzs0QkFDdkMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQ3hEOzZCQUFLLElBQUksT0FBTyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFDOzRCQUM3QyxNQUFNLEdBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7eUJBQ3BEO3dCQUVELElBQUksTUFBTSxFQUFDOzRCQUNQLEdBQUcsQ0FB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Q2xDLDJEQUFDLDZEQUFvQixJQUNqQixjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQzdDLGtCQUFrQixFQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FDL0M7WUFFTjtnQkFBRSxvRUFBSyxFQUFFLEVBQUMsNEJBQTRCLEVBQUMsU0FBUyxFQUFDLE9BQU8sR0FBTyxDQUFHO1lBRTlELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQ2pCLG9FQUNNLEtBQUssRUFBRTtvQkFDSCxLQUFLLEVBQUMsTUFBTTtvQkFDWixPQUFPLEVBQUMsTUFBTTtvQkFDZCxhQUFhLEVBQUMsUUFBUTtvQkFDdEIsY0FBYyxFQUFDLFFBQVE7b0JBQ3ZCLE1BQU0sRUFBQyxNQUFNO2lCQUNoQjtnQkFFSCxvRUFDSSxLQUFLLEVBQUU7d0JBQ0gsTUFBTSxFQUFDLE1BQU07d0JBQ2IsUUFBUSxFQUFDLFVBQVU7d0JBQ25CLEtBQUssRUFBQyxNQUFNO3dCQUNaLFVBQVUsRUFBQyxNQUFNO3dCQUNqQixXQUFXLEVBQUMsTUFBTTtxQkFDckI7b0JBRUQsMkRBQUMsNENBQU8sT0FBRyxDQUNUO2dCQUNOLG9FQUFLLEtBQUssRUFBSSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsZ0NBRWxFLENBQ0osQ0FDVCxDQUVILENBQ1Q7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvc2VhcmNoLXZhbHVlLXdpZGdldC9zcmMvaGVscGVyL2hlbHBlci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL1NlYXJjaFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS93aWRnZXRzL1NlYXJjaC9TZWFyY2hTb3VyY2VcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlYXJjaC12YWx1ZS13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEhlbHBlciB7XG5cbiAgICBnZXRBbGxTdWdnZXN0aW9ucyA9IChmZWF0dXJlczphbnlbXSxwYXJhbXMsc2VhcmNoZWRGaWVsZCk9PntcbiAgICAgICAgLy8gY29uc3Qgc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VhcmNoSXRlbSA9IHBhcmFtcz8uc3VnZ2VzdFRlcm0/P1wiIFwiXG4gICAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gZmVhdHVyZXMucmVkdWNlKChuZXdTdWdnZXN0aW9ucyx7YXR0cmlidXRlc30pPT57XG4gICAgICAgICAgICAvLyBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gW3NlYXJjaGVkRmllbGRdO1xuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goKGtleVZhbCk9PntcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBrZXksdGV4dCxzb3VyY2VJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBhdHRyaWJ1dGVzW2tleVZhbF0gPT09IHBhcnNlSW50KHNlYXJjaEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZiAodHlwZW9mIGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSAgYXR0cmlidXRlc1trZXlWYWxdLmluY2x1ZGVzKHNlYXJjaEl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW1wia2V5XCJdID0gYXR0cmlidXRlc1tcIk9CSkVDVElEXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW1widGV4dFwiXSA9IGAke2F0dHJpYnV0ZXNba2V5VmFsXX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW1wic291cmNlSW5kZXhcIl0gPSBwYXJhbXMuc291cmNlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1N1Z2dlc3Rpb25zLnB1c2gob2JqKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIGF0dHJpYnV0ZXNba2V5VmFsXSA9PT0gXCJudW1iZXJcIil7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoYXR0cmlidXRlc1trZXlWYWxdID09PSBzZWFyY2hJdGVtKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmpbXCJrZXlcIl0gPSBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBvYmpbXCJ0ZXh0XCJdID0gYXR0cmlidXRlc1trZXlWYWxdLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9ialtcInNvdXJjZUluZGV4XCJdID0gcGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3U3VnZ2VzdGlvbnMucHVzaChvYmopXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1lbHNlIGlmICh0eXBlb2YgYXR0cmlidXRlc1trZXlWYWxdID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChhdHRyaWJ1dGVzW2tleVZhbF0uaW5jbHVkZXMoc2VhcmNoSXRlbSkpe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9ialtcImtleVwiXSA9IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG9ialtcInRleHRcIl0gPSBhdHRyaWJ1dGVzW2tleVZhbF0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb2JqW1wic291cmNlSW5kZXhcIl0gPSBwYXJhbXMuc291cmNlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdTdWdnZXN0aW9ucy5wdXNoKG9iailcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdTdWdnZXN0aW9uc1xuICAgICAgICB9LFtdKSBcbiAgICAgICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVscGVyKCk7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3Jlc3Rfc3VwcG9ydF9RdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfU2VhcmNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfU2VhcmNoU291cmNlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuaW1wb3J0IFNlYXJjaFNvdXJjZSBmcm9tICdlc3JpL3dpZGdldHMvU2VhcmNoL1NlYXJjaFNvdXJjZSc7XG5pbXBvcnQgUXVlcnkgZnJvbSAnZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnknO1xuaW1wb3J0IGhlbHBlciBmcm9tICcuLi9oZWxwZXIvaGVscGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxhbnksYW55PntcblxuICAgIGluaXRpYWxab29tVmFsdWUgPSAwO1xuICAgIHNlYXJjaFdpZGdldCA9IG51bGw7XG4gICAgY2xlYXJlZCA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6YW55KXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge2ptdjpudWxsLGxvYWRlcjp0cnVlfVxuICAgIH1cblxuICAgIGdldEZpZWxkSW5mb3MgPSAoZmllbGRzOmFueVtdKT0+e1xuICAgICAgICBjb25zdCBuZXdGaWVsZHMgPSBbXVxuICAgICAgICBpZiAoZmllbGRzLmxlbmd0aClmaWVsZHMuZm9yRWFjaChlbD0+e25ld0ZpZWxkcy5wdXNoKHtmaWVsZE5hbWU6ZWwubmFtZSxsYWJlbDplbC5hbGlhc30pfSlcbiAgICAgICAgcmV0dXJuIG5ld0ZpZWxkcztcbiAgICB9XG5cbiAgICBzZWxlY3RGZWF0dXJlTGF5ZXIgPSAoZ2VvbWV0cnk6YW55KT0+e1xuICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5zdGF0ZS5qbXY7XG4gICAgICAgIGlmIChhY3RpdmVWaWV3KXtcbiAgICAgICAgICAgIGFjdGl2ZVZpZXc/LnNlbGVjdEZlYXR1cmVzQnlHcmFwaGljKGdlb21ldHJ5LFwiY29udGFpbnNcIikudGhlbigocmVzdWx0cyk9Pnt9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57fSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgb25BY3RpdmVWaWV3Q2hhbmdlID0gYXN5bmMoam12OkppbXVNYXBWaWV3KT0+e1xuICAgICAgICBqbXYuY2xlYXJTZWxlY3RlZEZlYXR1cmVzKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFpvb21WYWx1ZSA9ICBqbXYudmlldy56b29tO1xuICAgICAgICBqbXYudmlldy5wb3B1cC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdW5yZXF1aXJlZFZhbHVlID0gW1wiXCIsXCIgXCJdO1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS51cmw7XG4gICAgICAgIGNvbnN0IGxheWVySWQgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlLmxheWVySWQ7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVkRmllbGQgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlLnNlYXJjaEZpZWxkO1xuICAgICAgICBpZiAoIXVucmVxdWlyZWRWYWx1ZS5pbmNsdWRlcyhsYXllcklkKSl7XG4gICAgICAgICAgICB1cmwgPSB1cmwrXCIvXCIrbGF5ZXJJZC50cmltKClcbiAgICAgICAgfVxuICAgICAgICBpZiAodXJsKXtcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVMYXllciA9ICBuZXcgRmVhdHVyZUxheWVyKHVybCk7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZUxheWVyKXtcbiAgICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXIubG9hZCgpLnRoZW4oYXN5bmMoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgICAgICAgICAgICAgICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtzZWFyY2hlZEZpZWxkfWBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXF1ZXJ5Lm91dEZpZWxkcy5pbmNsdWRlcyhcIk9CSkVDVElEXCIpKXF1ZXJ5Lm91dEZpZWxkcy5wdXNoKFwiT0JKRUNUSURcIilcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxheWVyLnF1ZXJ5RmVhdHVyZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IGZlYXR1cmVMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFub3RoZXJSZXN1bHRzID0gYXdhaXQgZmVhdHVyZUxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyVmlldyA9IGF3YWl0IGptdi52aWV3LndoZW5MYXllclZpZXcoZmVhdHVyZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllclZpZXcucXVlcnlGZWF0dXJlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZXI6ZmFsc2Usam12Omptdn0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSB0aGlzLmdldEZpZWxkSW5mb3MoZmVhdHVyZUxheWVyLmZpZWxkcz8/W10pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21TZWFyY2hTb3VyY2UgPSBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblN1Z2dlc3RDaGFyYWN0ZXJzOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRTdWdnZXN0aW9uczogKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cy50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRTdWdnZXN0aW9ucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhPy5mZWF0dXJlcz8ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBkYXRhLmZlYXR1cmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0U3VnZ2VzdGlvbnMgPSBoZWxwZXIuZ2V0QWxsU3VnZ2VzdGlvbnMoZmVhdHVyZXMscGFyYW1zLHNlYXJjaGVkRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFN1Z2dlc3Rpb25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciByZXN1bHRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIHRvU2VhcmNoID0gcGFyYW1zLnN1Z2dlc3RUZXJtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVyblt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGtleTpcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dDpcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzb3VyY2VJbmRleDpwYXJhbXMuc291cmNlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhdGEgPSBkYXRhW1wiYWxsSUJMb2NhdGlvbnNcIl1bXCJkYXRhXCJdO1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvcih2YXIgaT0wOyBpPGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGlmKGRhdGFbaV1bXCJuYW1lXCJdLmluZGV4T2YodG9TZWFyY2gpIT0tMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZXN1bHRzLnB1c2goZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiByZXN1bHRzLm1hcCgoZmVhdHVyZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dDogZmVhdHVyZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzb3VyY2VJbmRleDogcGFyYW1zLnNvdXJjZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFJlc3VsdHM6IChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHMudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvU2VhcmNoID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LmtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VJbmRleCA9IHBhcmFtcy5zdWdnZXN0UmVzdWx0LnNvdXJjZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQodG9TZWFyY2gpKSAmJiB0eXBlb2YgcGFyc2VJbnQodG9TZWFyY2gpID09PSBcIm51bWJlclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9TZWFyY2ggPSBwYXJzZUludCh0b1NlYXJjaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVzID0gZGF0YT8uZmVhdHVyZXM/P1tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgZmVhdHVyZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gZmVhdHVyZXNbaV0/LmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQga2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGF0dHJpYnV0ZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlzID0gW3NlYXJjaGVkRmllbGRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5cy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9TZWFyY2ggPT09IGF0dHJpYnV0ZXNba2V5XSlzdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIHRvU2VhcmNoID09PSBcIm51bWJlclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICh0b1NlYXJjaCA9PT0gYXR0cmlidXRlc1trZXldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzdGF0dXMgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1lbHNlIGlmICh0eXBlb2YgdG9TZWFyY2ggPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHRvU2VhcmNoID09PSBhdHRyaWJ1dGVzW2tleV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRvU2VhcmNoLmluY2x1ZGVzKGF0dHJpYnV0ZXNba2V5XSksdG9TZWFyY2gsYXR0cmlidXRlc1trZXldLGtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBzdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMpcmVzdWx0cy5wdXNoKGZlYXR1cmVzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoZmVhdHVyZXNbaV0uaW5kZXhPZih0b1NlYXJjaCkgIT09IC0xKXJlc3VsdHMucHVzaCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaGVkSXRlbSA9IHJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWFyY2hlZEl0ZW0sXCJjaGVjayBzZWFyY2hlZCBpdGVtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hlZEdlb21ldHJ5ID0gc2VhcmNoZWRJdGVtLmdlb21ldHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaGVkR2VvbWV0cnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihzZWFyY2hlZEdlb21ldHJ5LDEsIFwibWV0ZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChuZXdHZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7Z2VvbWV0cnk6bmV3R2VvbWV0cnksc3ltYm9sOm51bGx9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGZWF0dXJlTGF5ZXIocG9seWdvbkdyYXBoaWMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycil7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaWZpZWRHZW9tdHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqbXYpam12LnZpZXcucG9wdXAudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8odW5pZmllZEdlb210cnkuZXh0ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wiZXh0ZW50XCJdID0gdW5pZmllZEdlb210cnkuZXh0ZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJmZWF0dXJlXCJdID0gc2VhcmNoZWRJdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdFtcInRhcmdldFwiXSA9IHNlYXJjaGVkSXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJrZXlcIl0gPSBmaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRbXCJuYW1lXCJdID0gcGFyYW1zLnN1Z2dlc3RSZXN1bHQudGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0W1wic291cmNlSW5kZXhcIl0gPSBzb3VyY2VJbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkYXRhID0gZGF0YVtcImFsbElCTG9jYXRpb25zXCJdW1wiZGF0YVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IodmFyIGk9MDsgaTxkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBpZihkYXRhW2ldW1wibmFtZVwiXS5pbmRleE9mKHRvU2VhcmNoKSE9LTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVzdWx0cy5wdXNoKGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzZWFyY2hSZXN1bHRzID0gcmVzdWx0cy5tYXAoKGZlYXR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IGdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGdlb21ldHJ5OiBuZXcgUG9pbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGxhdGl0dWRlOiBmZWF0dXJlLmdlb0NvZGUubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgbG9uZ2l0dWRlOiBmZWF0dXJlLmdlb0NvZGUubG9uZ2l0dWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhdHRyaWJ1dGVzOiBmZWF0dXJlLmFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc3QgYnVmZmVyID0gZ2VvbWV0cnlFbmdpbmUuZ2VvZGVzaWNCdWZmZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGdyYXBoaWMuZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJtZXRlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZXh0ZW50OiBidWZmZXIuZXh0ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBmZWF0dXJlOiBncmFwaGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBuYW1lOiBmZWF0dXJlW1wibmFtZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHJldHVybiBzZWFyY2hSZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtzZWFyY2hSZXN1bHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cEVuYWJsZWQ6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwVGVtcGxhdGU6e3RpdGxlOlwiU2VhcmNoIHZhbHVlIHdpZGdldFwiLGNvbnRlbnQ6W3t0eXBlOlwiZmllbGRzXCIsZmllbGRJbmZvczpmaWVsZEluZm9zfV19XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGN1c3RvbVNlYXJjaFNvdXJjZXMgPSBuZXcgU2VhcmNoU291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGdldFN1Z2dlc3Rpb25zOihwYXJhbXMpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmVzdWx0cy50aGVuKChkYXRhKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGV4dDogXCJraWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNvdXJjZUluZGV4OiBwYXJhbXMuc291cmNlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNlYXJjaEV4dGVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdoZXJlOiBgJHtzZWFyY2hlZEZpZWxkfSBMSUtFICclJ2BcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyOiBmZWF0dXJlTGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJMb2NhdGluZyBieSB1c2luZyB2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4UmVzdWx0czo1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U3VnZ2VzdGlvbnM6NixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGaWVsZDpzZWFyY2hlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoZWRGaWVsZDpbYCR7c2VhcmNoZWRGaWVsZH1gXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblN1Z2dlc3RDaGFyYWN0ZXJzOjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uc0VuYWJsZWQ6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0TWF0Y2g6ZmFsc2UsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbHRlcjpzZWFyY2hFeHRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaFRlcm06IFwiJVwiICsgc2VhcmNoZWRGaWVsZCArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6am12LnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6XCJzZWFyY2gtd2lkZ2V0LXNlYXJjaC12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZURlZmF1bHRTb3VyY2VzOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlczpbY3VzdG9tU2VhcmNoU291cmNlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvdXJjZXM6c291cmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwVGVtcGxhdGU6e3RpdGxlOlwiU2VhcmNoIHZhbHVlIHdpZGdldFwiLGNvbnRlbnQ6W3t0eXBlOlwiZmllbGRzXCIsZmllbGRJbmZvczpmaWVsZEluZm9zfV19XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaFdpZGdldC5vbihcInN1Z2dlc3Qtc3RhcnRcIiwoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBzZWFyY2hXaWRnZXQuc3VnZ2VzdChldmVudC5zZWFyY2hUZXJtKVxuICAgICAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2hXaWRnZXQub24oXCJzdWdnZXN0LWNvbXBsZXRlXCIsKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZXZlbnQucmVzdWx0c1swXS5zb3VyY2UuZmlsdGVyLndoZXJlID0gIGAke3NlYXJjaGVkRmllbGR9IExJS0UgJyUke2V2ZW50LnNlYXJjaFRlcm19J2AgXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlbGVjdC1yZXN1bHRcIiwgKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnQgJiYgZXZlbnQucmVzdWx0ICYmIGV2ZW50LnJlc3VsdC5mZWF0dXJlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5yZXN1bHQsXCJjaGVjayBmZWF0dXJlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlHZW9tZXRyeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksMSwgXCJtZXRlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChuZXdHZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7Z2VvbWV0cnk6bmV3R2VvbWV0cnksc3ltYm9sOm51bGx9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmVhdHVyZUxheWVyKHBvbHlnb25HcmFwaGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKXt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bmlmaWVkR2VvbXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGptdilqbXYudmlldy5wb3B1cC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8odW5pZmllZEdlb210cnkuZXh0ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlYXJjaC1jbGVhclwiLCAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2xlYXJlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHtjZW50ZXI6am12LnZpZXcuY2VudGVyLHpvb206dGhpcy5pbml0aWFsWm9vbVZhbHVlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hXaWRnZXQgPSBzZWFyY2hXaWRnZXQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuXG4gICAgICAgIGxldCBjbG9zZWRDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBvcGVuQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJDTE9TRURcIiAmJiAhY2xvc2VkQ2hlY2tlZCl7XG4gICAgICAgICAgICBjb25zdCBqbXYgPSB0aGlzLnN0YXRlLmptdjtcbiAgICAgICAgICAgIGlmIChqbXYpe1xuICAgICAgICAgICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHtjZW50ZXI6am12LnZpZXcuY2VudGVyLHpvb206dGhpcy5pbml0aWFsWm9vbVZhbHVlfSk7XG4gICAgICAgICAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoV2lkZ2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0LmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbG9zZWRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wZW5DaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJPUEVORURcIiAmJiAhb3BlbkNoZWNrZWQpe1xuICAgICAgICAgICAgY2xvc2VkQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgb3BlbkNoZWNrZWQgPSB0cnVlOyAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZWFyY2gtdmFsdWUgamltdS13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggJiYgXG4gICAgICAgICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZSA9IHt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPD48ZGl2IGlkPVwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWVcIiBjbGFzc05hbWU9XCJ3LTEwMFwiPjwvZGl2PjwvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Oic4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OlwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7Zm9udFNpemU6MTQsY29sb3I6XCJncmV5XCIsd2lkdGg6JzEwMCUnLHRleHRBbGlnbjpcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcgc2VhcmNoIHdpZGdldC4uLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9