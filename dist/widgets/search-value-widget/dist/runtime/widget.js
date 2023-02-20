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
            if (fields.length) {
                fields.forEach(el => {
                    newFields.push({
                        fieldName: el.name,
                        label: el.alias
                    });
                });
            }
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
                                // searchWidget.clear();
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
        this.state = {
            jmv: null,
            loader: true
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmY7QUFDNEI7QUFDdkI7QUFDVztBQUNsQjtBQUN3QjtBQUN2QjtBQUVwQixNQUFNLE1BQU8sU0FBUSwwREFBNEI7SUFNNUQsWUFBWSxLQUFTO1FBQ2pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUxqQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVVoQixrQkFBYSxHQUFHLENBQUMsTUFBWSxFQUFDLEVBQUU7WUFDNUIsTUFBTSxTQUFTLEdBQUcsRUFBRTtZQUNwQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVB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LDJEQUFDLDRDQUFPLE9BQUcsQ0FDVDtnQkFDTixvRUFBSyxLQUFLLEVBQUksRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGdDQUFpQyxDQUN2RyxDQUNULENBR0gsQ0FDVDtJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9HcmFwaGljXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlYXJjaC12YWx1ZS13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9HcmFwaGljX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1JlYWN0LGpzeH0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbmltcG9ydCBTZWFyY2ggZnJvbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICdqaW11LXVpJztcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJztcbmltcG9ydCBHcmFwaGljIGZyb20gJ2VzcmkvR3JhcGhpYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8YW55LGFueT57XG5cbiAgICBpbml0aWFsWm9vbVZhbHVlID0gMDtcbiAgICBzZWFyY2hXaWRnZXQgPSBudWxsO1xuICAgIGNsZWFyZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOmFueSl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGptdjpudWxsLFxuICAgICAgICAgICAgbG9hZGVyOnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZpZWxkSW5mb3MgPSAoZmllbGRzOmFueVtdKT0+e1xuICAgICAgICBjb25zdCBuZXdGaWVsZHMgPSBbXVxuICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCl7XG4gICAgICAgICAgICBmaWVsZHMuZm9yRWFjaChlbD0+e1xuICAgICAgICAgICAgICAgIG5ld0ZpZWxkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOmVsLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOmVsLmFsaWFzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0ZpZWxkcztcbiAgICB9XG5cbiAgICBzZWxlY3RGZWF0dXJlTGF5ZXIgPSAoZ2VvbWV0cnk6YW55KT0+e1xuICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5zdGF0ZS5qbXY7XG4gICAgICAgIGlmIChhY3RpdmVWaWV3KXtcbiAgICAgICAgICAgIGFjdGl2ZVZpZXc/LnNlbGVjdEZlYXR1cmVzQnlHcmFwaGljKGdlb21ldHJ5LFwiY29udGFpbnNcIikudGhlbigocmVzdWx0cyk9Pnt9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT57fSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgb25BY3RpdmVWaWV3Q2hhbmdlID0gYXN5bmMoam12OkppbXVNYXBWaWV3KT0+e1xuICAgICAgICBqbXYuY2xlYXJTZWxlY3RlZEZlYXR1cmVzKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbFpvb21WYWx1ZSA9ICBqbXYudmlldy56b29tO1xuICAgICAgICBqbXYudmlldy5wb3B1cC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdW5yZXF1aXJlZFZhbHVlID0gW1wiXCIsXCIgXCJdO1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS51cmw7XG4gICAgICAgIGNvbnN0IGxheWVySWQgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlLmxheWVySWQ7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVkRmllbGQgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXJ2aWNlLnNlYXJjaEZpZWxkO1xuICAgICAgICBpZiAoIXVucmVxdWlyZWRWYWx1ZS5pbmNsdWRlcyhsYXllcklkKSl7XG4gICAgICAgICAgICB1cmwgPSB1cmwrXCIvXCIrbGF5ZXJJZC50cmltKClcbiAgICAgICAgfVxuICAgICAgICBpZiAodXJsKXtcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVMYXllciA9ICBuZXcgRmVhdHVyZUxheWVyKHVybCk7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZUxheWVyKXtcbiAgICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXIubG9hZCgpLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVyOmZhbHNlLGptdjpqbXZ9KVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEluZm9zID0gdGhpcy5nZXRGaWVsZEluZm9zKGZlYXR1cmVMYXllci5maWVsZHM/P1tdKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyOiBmZWF0dXJlTGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJMb2NhdGluZyBieSB1c2luZyB2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4UmVzdWx0czo1LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4U3VnZ2VzdGlvbnM6NixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlGaWVsZDpzZWFyY2hlZEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoZWRGaWVsZDpbYCR7c2VhcmNoZWRGaWVsZH1gXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblN1Z2dlc3RDaGFyYWN0ZXJzOjAsXG4gICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXc6am12LnZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6XCJzZWFyY2gtd2lkZ2V0LXNlYXJjaC12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlczpzb3VyY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBUZW1wbGF0ZTp7dGl0bGU6XCJTZWFyY2ggdmFsdWUgd2lkZ2V0XCIsY29udGVudDpbe3R5cGU6XCJmaWVsZHNcIixmaWVsZEluZm9zOmZpZWxkSW5mb3N9XX1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0Lm9uKFwic2VsZWN0LXJlc3VsdFwiLCAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihldmVudCAmJiBldmVudC5yZXN1bHQgJiYgZXZlbnQucmVzdWx0LmZlYXR1cmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5yZXN1bHQuZmVhdHVyZS5nZW9tZXRyeSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5LDEsIFwibWV0ZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvbHlnb25HcmFwaGljID0gbmV3IEdyYXBoaWMoe2dlb21ldHJ5Om5ld0dlb21ldHJ5LHN5bWJvbDpudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZlYXR1cmVMYXllcihwb2x5Z29uR3JhcGhpYylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVycil7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqbXYpam12LnZpZXcucG9wdXAudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWFyY2gtY2xlYXJcIiwgKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNsZWFyZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlYXJjaFdpZGdldC5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi5jbGVhclNlbGVjdGVkRmVhdHVyZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqbXYudmlldy5wb3B1cC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoV2lkZ2V0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoV2lkZ2V0ID0gc2VhcmNoV2lkZ2V0O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcblxuICAgICAgICBsZXQgY2xvc2VkQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgb3BlbkNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMucHJvcHMuc3RhdGUgPT09IFwiQ0xPU0VEXCIgJiYgIWNsb3NlZENoZWNrZWQpe1xuICAgICAgICAgICAgY29uc3Qgam12ID0gdGhpcy5zdGF0ZS5qbXY7XG4gICAgICAgICAgICBpZiAoam12KXtcbiAgICAgICAgICAgICAgICBqbXYuY2xlYXJTZWxlY3RlZEZlYXR1cmVzKCk7XG4gICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh7Y2VudGVyOmptdi52aWV3LmNlbnRlcix6b29tOnRoaXMuaW5pdGlhbFpvb21WYWx1ZX0pO1xuICAgICAgICAgICAgICAgIGptdi52aWV3LnBvcHVwLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNlYXJjaFdpZGdldCl7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFdpZGdldC5jbGVhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xvc2VkQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBvcGVuQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc3RhdGUgPT09IFwiT1BFTkVEXCIgJiYgIW9wZW5DaGVja2VkKXtcbiAgICAgICAgICAgIGNsb3NlZENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIG9wZW5DaGVja2VkID0gdHJ1ZTsgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2VhcmNoLXZhbHVlIGppbXUtd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8ubGVuZ3RoICYmIFxuICAgICAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSB7dGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDw+PGRpdiBpZD1cInNlYXJjaC13aWRnZXQtc2VhcmNoLXZhbHVlXCIgY2xhc3NOYW1lPVwidy0xMDBcIj48L2Rpdj48Lz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubG9hZGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDonODBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDpcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OlwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7e2ZvbnRTaXplOjE0LGNvbG9yOlwiZ3JleVwiLHdpZHRoOicxMDAlJyx0ZXh0QWxpZ246XCJjZW50ZXJcIn19PkxvYWRpbmcgc2VhcmNoIHdpZGdldC4uLi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9