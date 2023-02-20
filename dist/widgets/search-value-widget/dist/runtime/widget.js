System.register(["jimu-core","jimu-arcgis","esri/widgets/Search","esri/layers/FeatureLayer","jimu-ui","esri/geometry/geometryEngine"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Search__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_FeatureLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__, "__esModule", { value: true });
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
        this.onActiveViewChange = (jmv) => __awaiter(this, void 0, void 0, function* () {
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
                                    const newGeometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_5__["default"].buffer(event.result.feature.geometry, 1, "meters");
                                    arrayGeometry.push(newGeometry);
                                    if (arrayGeometry.length) {
                                        const unifiedGeomtry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_5__["default"].union(arrayGeometry);
                                        jmv.view.goTo(unifiedGeomtry.extent);
                                    }
                                }
                            }
                        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mO0FBQzRCO0FBQ3ZCO0FBQ1c7QUFDbEI7QUFDd0I7QUFFM0MsTUFBTSxNQUFPLFNBQVEsMERBQTRCO0lBRTVELFlBQVksS0FBUztRQUNqQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFPakIsa0JBQWEsR0FBRyxDQUFDLE1BQVksRUFBQyxFQUFFO1lBQzVCLE1BQU0sU0FBUyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFDO2dCQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFFO29CQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUM7d0JBQ1gsU0FBUyxFQUFDLEVBQUUsQ0FBQyxJQUFJO3dCQUNqQixLQUFLLEVB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ZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfRmVhdHVyZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfd2lkZ2V0c19TZWFyY2hfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQge1JlYWN0LGpzeH0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBKaW11TWFwVmlld0NvbXBvbmVudCB9IGZyb20gJ2ppbXUtYXJjZ2lzJztcbmltcG9ydCBTZWFyY2ggZnJvbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJztcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICdqaW11LXVpJztcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tICdlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxhbnksYW55PntcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOmFueSl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGptdjpudWxsLFxuICAgICAgICAgICAgbG9hZGVyOnRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEZpZWxkSW5mb3MgPSAoZmllbGRzOmFueVtdKT0+e1xuICAgICAgICBjb25zdCBuZXdGaWVsZHMgPSBbXVxuICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCl7XG4gICAgICAgICAgICBmaWVsZHMuZm9yRWFjaChlbD0+e1xuICAgICAgICAgICAgICAgIG5ld0ZpZWxkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOmVsLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOmVsLmFsaWFzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0ZpZWxkcztcbiAgICB9XG5cbiAgICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSBhc3luYyhqbXY6SmltdU1hcFZpZXcpPT57XG4gICAgICAgIGNvbnN0IHVucmVxdWlyZWRWYWx1ZSA9IFtcIlwiLFwiIFwiXTtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucHJvcHMuY29uZmlnLnNlcnZpY2UudXJsO1xuICAgICAgICBjb25zdCBsYXllcklkID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS5sYXllcklkO1xuICAgICAgICBjb25zdCBzZWFyY2hlZEZpZWxkID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS5zZWFyY2hGaWVsZDtcbiAgICAgICAgaWYgKCF1bnJlcXVpcmVkVmFsdWUuaW5jbHVkZXMobGF5ZXJJZCkpe1xuICAgICAgICAgICAgdXJsID0gdXJsK1wiL1wiK2xheWVySWQudHJpbSgpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVybCl7XG4gICAgICAgICAgICBjb25zdCBmZWF0dXJlTGF5ZXIgPSAgbmV3IEZlYXR1cmVMYXllcih1cmwpO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmVMYXllcil7XG4gICAgICAgICAgICAgICAgZmVhdHVyZUxheWVyLmxvYWQoKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRlcjpmYWxzZSxqbXY6am12fSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRJbmZvcyA9IHRoaXMuZ2V0RmllbGRJbmZvcyhmZWF0dXJlTGF5ZXIuZmllbGRzPz9bXSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlcyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllcjogZmVhdHVyZUxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTG9jYXRpbmcgYnkgdXNpbmcgdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFJlc3VsdHM6NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFN1Z2dlc3Rpb25zOjYsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RmllbGQ6c2VhcmNoZWRGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGVkRmllbGQ6W2Ake3NlYXJjaGVkRmllbGR9YF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5TdWdnZXN0Q2hhcmFjdGVyczowLFxuICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Omptdi52aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOlwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6c291cmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwVGVtcGxhdGU6e3RpdGxlOlwiU2VhcmNoIHZhbHVlIHdpZGdldFwiLGNvbnRlbnQ6W3t0eXBlOlwiZmllbGRzXCIsZmllbGRJbmZvczpmaWVsZEluZm9zfV19XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFdpZGdldC5vbihcInNlbGVjdC1yZXN1bHRcIiwgKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnQgJiYgZXZlbnQucmVzdWx0ICYmIGV2ZW50LnJlc3VsdC5mZWF0dXJlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJheUdlb21ldHJ5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGV2ZW50LnJlc3VsdC5mZWF0dXJlLmdlb21ldHJ5LDEsIFwibWV0ZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGptdi52aWV3LmdvVG8odW5pZmllZEdlb210cnkuZXh0ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZWFyY2gtdmFsdWUgamltdS13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5sZW5ndGggJiYgXG4gICAgICAgICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZSA9IHt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPD48ZGl2IGlkPVwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWVcIiBjbGFzc05hbWU9XCJ3LTEwMFwiPjwvZGl2PjwvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Oic4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOidyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OlwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt7Zm9udFNpemU6MTQsY29sb3I6XCJncmV5XCIsd2lkdGg6JzEwMCUnLHRleHRBbGlnbjpcImNlbnRlclwifX0+TG9hZGluZyBzZWFyY2ggd2lkZ2V0Li4uLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=