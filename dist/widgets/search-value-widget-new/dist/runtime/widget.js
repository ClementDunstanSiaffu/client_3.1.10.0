System.register(["jimu-core","jimu-arcgis","esri/widgets/Search","esri/layers/FeatureLayer","jimu-ui","esri/geometry/geometryEngine","esri/Graphic"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Graphic__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Graphic__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/search-value-widget-new/src/runtime/widget.tsx ***!
  \********************************************************************************/
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
        // https://test-portalgis.italferr.it/server/rest/services/ARCHEOGIS/ARCHEOGIS_WEB_LAYER/FeatureServer
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
            // jmv.view.popup.visible = true;
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
                    featureLayer.load().then(() => {
                        var _a;
                        this.setState({ loader: false, jmv: jmv });
                        const fieldInfos = this.getFieldInfos((_a = featureLayer.fields) !== null && _a !== void 0 ? _a : []);
                        debugger;
                        const sources = [{
                                layer: featureLayer,
                                placeholder: "Inserisci la commessa o il nome del progetto",
                                maxResults: 5,
                                maxSuggestions: 6,
                                displayField: searchedField,
                                searchedField: [` ${searchedField}`],
                                minSuggestCharacters: 0,
                            }];
                        const sources1 = [{
                                layer: featureLayer,
                                placeholder: "Inserisci la commessa o il nome del progetto",
                                maxResults: 5,
                                maxSuggestions: 6,
                                displayField: searchedField,
                                searchedField: [` descrizione_progetto`],
                                minSuggestCharacters: 0,
                            }];
                        const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_2__["default"]({
                            view: jmv.view,
                            locationEnabled: false,
                            container: "search-widget-search-value",
                            includeDefaultSources: false,
                            sources: [{
                                    layer: featureLayer,
                                    placeholder: "Inserisci la commessa o il nome del progetto",
                                    maxResults: 5,
                                    maxSuggestions: 6,
                                    displayField: searchedField,
                                    searchedField: ["%" + searchedField + "%"],
                                    minSuggestCharacters: 1,
                                    searchTerm: "%" + searchedField + "%"
                                },
                                {
                                    layer: featureLayer,
                                    placeholder: "Inserisci la commessa o il nome del progetto",
                                    maxResults: 5,
                                    maxSuggestions: 6,
                                    displayField: "descrizione_progetto",
                                    searchedField: "%descrizione_progetto%",
                                    minSuggestCharacters: 1,
                                    searchTerm: "%" + searchedField + "%"
                                }],
                            popupTemplate: { title: "Ricerca progetti", content: [{ type: "fields", fieldInfos: fieldInfos }] }
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
                    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0LW5ldy9kaXN0L3J1bnRpbWUvd2lkZ2V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mO0FBQzRCO0FBQ3ZCO0FBQ1c7QUFDbEI7QUFDd0I7QUFDdkI7QUFFcEIsTUFBTSxNQUFPLFNBQVEsMERBQTRCO0lBTzVELFlBQVksS0FBUztRQUNqQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFQakIsc0dBQXNHO1FBRXRHLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBT2hCLGtCQUFhLEdBQUcsQ0FBQyxNQUFZLEVBQUMsRUFBRTtZQUM1QixNQUFNLFNBQVMsR0FBRyxFQUFFO1lBQ3BCLElBQUks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cGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0LW5ldy9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX0dyYXBoaWNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX1NlYXJjaF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsImltcG9ydCB7UmVhY3QsanN4fSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcyc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIjtcclxuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnamltdS11aSc7XHJcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJztcclxuaW1wb3J0IEdyYXBoaWMgZnJvbSAnZXNyaS9HcmFwaGljJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8YW55LGFueT57XHJcbiAgICAvLyBodHRwczovL3Rlc3QtcG9ydGFsZ2lzLml0YWxmZXJyLml0L3NlcnZlci9yZXN0L3NlcnZpY2VzL0FSQ0hFT0dJUy9BUkNIRU9HSVNfV0VCX0xBWUVSL0ZlYXR1cmVTZXJ2ZXJcclxuXHJcbiAgICBpbml0aWFsWm9vbVZhbHVlID0gMDtcclxuICAgIHNlYXJjaFdpZGdldCA9IG51bGw7XHJcbiAgICBjbGVhcmVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6YW55KXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtqbXY6bnVsbCxsb2FkZXI6dHJ1ZX1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWVsZEluZm9zID0gKGZpZWxkczphbnlbXSk9PntcclxuICAgICAgICBjb25zdCBuZXdGaWVsZHMgPSBbXVxyXG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKWZpZWxkcy5mb3JFYWNoKGVsPT57bmV3RmllbGRzLnB1c2goe2ZpZWxkTmFtZTplbC5uYW1lLGxhYmVsOmVsLmFsaWFzfSl9KVxyXG4gICAgICAgIHJldHVybiBuZXdGaWVsZHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RmVhdHVyZUxheWVyID0gKGdlb21ldHJ5OmFueSk9PntcclxuICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5zdGF0ZS5qbXY7XHJcbiAgICAgICAgaWYgKGFjdGl2ZVZpZXcpe1xyXG4gICAgICAgICAgICBhY3RpdmVWaWV3Py5zZWxlY3RGZWF0dXJlc0J5R3JhcGhpYyhnZW9tZXRyeSxcImNvbnRhaW5zXCIpLnRoZW4oKHJlc3VsdHMpPT57fSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57fSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSBhc3luYyhqbXY6SmltdU1hcFZpZXcpPT57XHJcbiAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFpvb21WYWx1ZSA9ICBqbXYudmlldy56b29tO1xyXG4gICAgICAgIC8vIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHVucmVxdWlyZWRWYWx1ZSA9IFtcIlwiLFwiIFwiXTtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS51cmw7XHJcbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2UubGF5ZXJJZDtcclxuICAgICAgICBjb25zdCBzZWFyY2hlZEZpZWxkID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS5zZWFyY2hGaWVsZDtcclxuICAgICAgICBpZiAoIXVucmVxdWlyZWRWYWx1ZS5pbmNsdWRlcyhsYXllcklkKSl7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCtcIi9cIitsYXllcklkLnRyaW0oKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsKXtcclxuICAgICAgICAgICAgY29uc3QgZmVhdHVyZUxheWVyID0gIG5ldyBGZWF0dXJlTGF5ZXIodXJsKTtcclxuICAgICAgICAgICAgaWYgKGZlYXR1cmVMYXllcil7XHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXIubG9hZCgpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZXI6ZmFsc2Usam12Omptdn0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRJbmZvcyA9IHRoaXMuZ2V0RmllbGRJbmZvcyhmZWF0dXJlTGF5ZXIuZmllbGRzPz9bXSlcclxuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlcyA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyOiBmZWF0dXJlTGF5ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkluc2VyaXNjaSBsYSBjb21tZXNzYSBvIGlsIG5vbWUgZGVsIHByb2dldHRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFJlc3VsdHM6NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U3VnZ2VzdGlvbnM6NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZpZWxkOnNlYXJjaGVkRmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGVkRmllbGQ6W2AgJHtzZWFyY2hlZEZpZWxkfWAgXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluU3VnZ2VzdENoYXJhY3RlcnM6MCxcclxuICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VzMSA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyOiBmZWF0dXJlTGF5ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkluc2VyaXNjaSBsYSBjb21tZXNzYSBvIGlsIG5vbWUgZGVsIHByb2dldHRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFJlc3VsdHM6NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U3VnZ2VzdGlvbnM6NixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZpZWxkOnNlYXJjaGVkRmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGVkRmllbGQ6W2AgZGVzY3JpemlvbmVfcHJvZ2V0dG9gIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblN1Z2dlc3RDaGFyYWN0ZXJzOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6am12LnZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjpcInNlYXJjaC13aWRnZXQtc2VhcmNoLXZhbHVlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVEZWZhdWx0U291cmNlczpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI6IGZlYXR1cmVMYXllcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnNlcmlzY2kgbGEgY29tbWVzc2EgbyBpbCBub21lIGRlbCBwcm9nZXR0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJlc3VsdHM6NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhTdWdnZXN0aW9uczo2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGaWVsZDpzZWFyY2hlZEZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGVkRmllbGQ6W1wiJVwiK3NlYXJjaGVkRmllbGQrXCIlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblN1Z2dlc3RDaGFyYWN0ZXJzOjEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGVybTogXCIlXCIgKyBzZWFyY2hlZEZpZWxkICsgXCIlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI6IGZlYXR1cmVMYXllcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJJbnNlcmlzY2kgbGEgY29tbWVzc2EgbyBpbCBub21lIGRlbCBwcm9nZXR0b1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJlc3VsdHM6NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhTdWdnZXN0aW9uczo2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGaWVsZDpcImRlc2NyaXppb25lX3Byb2dldHRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoZWRGaWVsZDpcIiVkZXNjcml6aW9uZV9wcm9nZXR0byVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5TdWdnZXN0Q2hhcmFjdGVyczoxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFRlcm06IFwiJVwiICsgc2VhcmNoZWRGaWVsZCArIFwiJVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBUZW1wbGF0ZTp7dGl0bGU6XCJSaWNlcmNhIHByb2dldHRpXCIsY29udGVudDpbe3R5cGU6XCJmaWVsZHNcIixmaWVsZEluZm9zOmZpZWxkSW5mb3N9XX1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlbGVjdC1yZXN1bHRcIiwgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihldmVudCAmJiBldmVudC5yZXN1bHQgJiYgZXZlbnQucmVzdWx0LmZlYXR1cmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUdlb21ldHJ5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksMSwgXCJtZXRlcnNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlHZW9tZXRyeS5wdXNoKG5ld0dlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2x5Z29uR3JhcGhpYyA9IG5ldyBHcmFwaGljKHtnZW9tZXRyeTpuZXdHZW9tZXRyeSxzeW1ib2w6bnVsbH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZlYXR1cmVMYXllcihwb2x5Z29uR3JhcGhpYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKXt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5R2VvbWV0cnkubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGptdilqbXYudmlldy5wb3B1cC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh1bmlmaWVkR2VvbXRyeS5leHRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlYXJjaC1jbGVhclwiLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jbGVhcmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8oe2NlbnRlcjpqbXYudmlldy5jZW50ZXIsem9vbTp0aGlzLmluaXRpYWxab29tVmFsdWV9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hXaWRnZXQgPSBzZWFyY2hXaWRnZXQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcblxyXG4gICAgICAgIGxldCBjbG9zZWRDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG9wZW5DaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJDTE9TRURcIiAmJiAhY2xvc2VkQ2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGptdiA9IHRoaXMuc3RhdGUuam12O1xyXG4gICAgICAgICAgICBpZiAoam12KXtcclxuICAgICAgICAgICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcclxuICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8oe2NlbnRlcjpqbXYudmlldy5jZW50ZXIsem9vbTp0aGlzLmluaXRpYWxab29tVmFsdWV9KTtcclxuICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hXaWRnZXQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0LmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xvc2VkQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG9wZW5DaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJPUEVORURcIiAmJiAhb3BlbkNoZWNrZWQpe1xyXG4gICAgICAgICAgICBjbG9zZWRDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9wZW5DaGVja2VkID0gdHJ1ZTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZWFyY2gtdmFsdWUgamltdS13aWRnZXRcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSB7dGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDw+PGRpdiBpZD1cInNlYXJjaC13aWRnZXQtc2VhcmNoLXZhbHVlXCIgY2xhc3NOYW1lPVwidy0xMDBcIj48L2Rpdj48Lz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmxvYWRlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6JzgwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6XCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OlwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tmb250U2l6ZToxNCxjb2xvcjpcImdyZXlcIix3aWR0aDonMTAwJScsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIHNlYXJjaCB3aWRnZXQuLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=