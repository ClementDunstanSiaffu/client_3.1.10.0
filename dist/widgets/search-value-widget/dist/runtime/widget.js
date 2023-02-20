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
                    featureLayer.load().then(() => {
                        var _a;
                        this.setState({ loader: false, jmv: jmv });
                        const fieldInfos = this.getFieldInfos((_a = featureLayer.fields) !== null && _a !== void 0 ? _a : []);
                        const sources = [{
                                layer: featureLayer,
                                placeholder: "Locating by using value",
                                maxResults: 5,
                                maxSuggestions: 6,
                                displayField: searchedField,
                                searchedField: [`${searchedField}`],
                                minSuggestCharacters: 0,
                            }];
                        const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_2__["default"]({
                            view: jmv.view,
                            container: "search-widget-search-value",
                            includeDefaultSources: false,
                            sources: sources,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmY7QUFDNEI7QUFDdkI7QUFDVztBQUNsQjtBQUN3QjtBQUN2QjtBQUVwQixNQUFNLE1BQU8sU0FBUSwwREFBNEI7SUFNNUQsWUFBWSxLQUFTO1FBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUxqQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQU9oQixrQkFBYSxHQUFHLENBQUMsTUFBWSxFQUFDLEVBQUU7WUFDNUIsTUFBTSxTQUFTLEdBQUcsRUFBRTtZQUNwQixJQUFJLE1BQU0sQ0FBQyxNQUFNO2dC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QU8sT0FBRyxDQUNUO2dCQUNOLG9FQUFLLEtBQUssRUFBSSxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsZ0NBRWxFLENBQ0osQ0FDVCxDQUVILENBQ1Q7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvR3JhcGhpY1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfR3JhcGhpY19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0ZlYXR1cmVMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfU2VhcmNoX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XG5pbXBvcnQgR3JhcGhpYyBmcm9tICdlc3JpL0dyYXBoaWMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PGFueSxhbnk+e1xuXG4gICAgaW5pdGlhbFpvb21WYWx1ZSA9IDA7XG4gICAgc2VhcmNoV2lkZ2V0ID0gbnVsbDtcbiAgICBjbGVhcmVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczphbnkpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7am12Om51bGwsbG9hZGVyOnRydWV9XG4gICAgfVxuXG4gICAgZ2V0RmllbGRJbmZvcyA9IChmaWVsZHM6YW55W10pPT57XG4gICAgICAgIGNvbnN0IG5ld0ZpZWxkcyA9IFtdXG4gICAgICAgIGlmIChmaWVsZHMubGVuZ3RoKWZpZWxkcy5mb3JFYWNoKGVsPT57bmV3RmllbGRzLnB1c2goe2ZpZWxkTmFtZTplbC5uYW1lLGxhYmVsOmVsLmFsaWFzfSl9KVxuICAgICAgICByZXR1cm4gbmV3RmllbGRzO1xuICAgIH1cblxuICAgIHNlbGVjdEZlYXR1cmVMYXllciA9IChnZW9tZXRyeTphbnkpPT57XG4gICAgICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSB0aGlzLnN0YXRlLmptdjtcbiAgICAgICAgaWYgKGFjdGl2ZVZpZXcpe1xuICAgICAgICAgICAgYWN0aXZlVmlldz8uc2VsZWN0RmVhdHVyZXNCeUdyYXBoaWMoZ2VvbWV0cnksXCJjb250YWluc1wiKS50aGVuKChyZXN1bHRzKT0+e30pXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9Pnt9KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSBhc3luYyhqbXY6SmltdU1hcFZpZXcpPT57XG4gICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsWm9vbVZhbHVlID0gIGptdi52aWV3Lnpvb207XG4gICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICBjb25zdCB1bnJlcXVpcmVkVmFsdWUgPSBbXCJcIixcIiBcIl07XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlLnVybDtcbiAgICAgICAgY29uc3QgbGF5ZXJJZCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2UubGF5ZXJJZDtcbiAgICAgICAgY29uc3Qgc2VhcmNoZWRGaWVsZCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2Uuc2VhcmNoRmllbGQ7XG4gICAgICAgIGlmICghdW5yZXF1aXJlZFZhbHVlLmluY2x1ZGVzKGxheWVySWQpKXtcbiAgICAgICAgICAgIHVybCA9IHVybCtcIi9cIitsYXllcklkLnRyaW0oKVxuICAgICAgICB9XG4gICAgICAgIGlmICh1cmwpe1xuICAgICAgICAgICAgY29uc3QgZmVhdHVyZUxheWVyID0gIG5ldyBGZWF0dXJlTGF5ZXIodXJsKTtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlTGF5ZXIpe1xuICAgICAgICAgICAgICAgIGZlYXR1cmVMYXllci5sb2FkKCkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZXI6ZmFsc2Usam12Omptdn0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSB0aGlzLmdldEZpZWxkSW5mb3MoZmVhdHVyZUxheWVyLmZpZWxkcz8/W10pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZXMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXI6IGZlYXR1cmVMYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkxvY2F0aW5nIGJ5IHVzaW5nIHZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhSZXN1bHRzOjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhTdWdnZXN0aW9uczo2LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUZpZWxkOnNlYXJjaGVkRmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hlZEZpZWxkOltgJHtzZWFyY2hlZEZpZWxkfWBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluU3VnZ2VzdENoYXJhY3RlcnM6MCxcbiAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlldzpqbXYudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjpcInNlYXJjaC13aWRnZXQtc2VhcmNoLXZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlRGVmYXVsdFNvdXJjZXM6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzOnNvdXJjZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFRlbXBsYXRlOnt0aXRsZTpcIlNlYXJjaCB2YWx1ZSB3aWRnZXRcIixjb250ZW50Olt7dHlwZTpcImZpZWxkc1wiLGZpZWxkSW5mb3M6ZmllbGRJbmZvc31dfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWxlY3QtcmVzdWx0XCIsIChldmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50ICYmIGV2ZW50LnJlc3VsdCAmJiBldmVudC5yZXN1bHQuZmVhdHVyZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlHZW9tZXRyeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksMSwgXCJtZXRlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChuZXdHZW9tZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9seWdvbkdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7Z2VvbWV0cnk6bmV3R2VvbWV0cnksc3ltYm9sOm51bGx9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmVhdHVyZUxheWVyKHBvbHlnb25HcmFwaGljKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9Y2F0Y2goZXJyKXt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bmlmaWVkR2VvbXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGptdilqbXYudmlldy5wb3B1cC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8odW5pZmllZEdlb210cnkuZXh0ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlYXJjaC1jbGVhclwiLCAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2xlYXJlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LmNsZWFyU2VsZWN0ZWRGZWF0dXJlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHtjZW50ZXI6am12LnZpZXcuY2VudGVyLHpvb206dGhpcy5pbml0aWFsWm9vbVZhbHVlfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hXaWRnZXQgPSBzZWFyY2hXaWRnZXQ7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuXG4gICAgICAgIGxldCBjbG9zZWRDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBvcGVuQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJDTE9TRURcIiAmJiAhY2xvc2VkQ2hlY2tlZCl7XG4gICAgICAgICAgICBjb25zdCBqbXYgPSB0aGlzLnN0YXRlLmptdjtcbiAgICAgICAgICAgIGlmIChqbXYpe1xuICAgICAgICAgICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHtjZW50ZXI6am12LnZpZXcuY2VudGVyLHpvb206dGhpcy5pbml0aWFsWm9vbVZhbHVlfSk7XG4gICAgICAgICAgICAgICAgam12LnZpZXcucG9wdXAudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VhcmNoV2lkZ2V0KXtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0LmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbG9zZWRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wZW5DaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJPUEVORURcIiAmJiAhb3BlbkNoZWNrZWQpe1xuICAgICAgICAgICAgY2xvc2VkQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgb3BlbkNoZWNrZWQgPSB0cnVlOyAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZWFyY2gtdmFsdWUgamltdS13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggJiYgXG4gICAgICAgICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZSA9IHt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPD48ZGl2IGlkPVwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWVcIiBjbGFzc05hbWU9XCJ3LTEwMFwiPjwvZGl2PjwvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Oic4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OlwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7Zm9udFNpemU6MTQsY29sb3I6XCJncmV5XCIsd2lkdGg6JzEwMCUnLHRleHRBbGlnbjpcImNlbnRlclwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmcgc2VhcmNoIHdpZGdldC4uLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9