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
        this.getSearchFields = (fields) => {
            const newFields = [];
            if (fields.length) {
                fields.forEach(el => {
                    newFields.push(`${el.name}`);
                });
            }
            return newFields;
        };
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
            const url = this.props.config.service.url;
            // let featureLayer;
            if (url) {
                const featureLayer = new esri_layers_FeatureLayer__WEBPACK_IMPORTED_MODULE_3__["default"](url);
                if (featureLayer) {
                    featureLayer.load().then(() => {
                        var _a;
                        this.setState({ loader: false, jmv: jmv });
                        // const searchedFields = this.getSearchFields(featureLayer.fields??[]);
                        const fieldInfos = this.getFieldInfos((_a = featureLayer.fields) !== null && _a !== void 0 ? _a : []);
                        const sources = [{
                                layer: featureLayer,
                                placeholder: "Locating by using value",
                                maxResults: 5,
                                // searchFields: searchedFields,
                                maxSuggestions: 6,
                                minSuggestCharacters: 0,
                            }];
                        const searchWidget = new esri_widgets_Search__WEBPACK_IMPORTED_MODULE_2__["default"]({
                            view: jmv.view,
                            container: "search-widget-search-value",
                            sources: sources,
                            popupTemplate: {
                                title: "Search value widget",
                                content: [{
                                        type: "fields",
                                        fieldInfos: fieldInfos
                                    }]
                            }
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
                        // jmv.view.ui.add(searchWidget,{position:"top-right"})
                    });
                }
            }
            // if (featureLayer){
            //     const searchedFields = this.getSearchFields(featureLayer.fields??[]);
            //     console.log(featureLayer,featureLayer.fields,searchedFields,"trueueu")
            //     const sources = [{
            //         layer: featureLayer,
            //         placeholder: "Darwin",
            //         maxResults: 5,
            //         searchFields: searchedFields,
            //       }];
            //       const searchWidget = new Search({
            //         view:jmv.view,
            //         container:"search-widget-search-value",
            //         sources:sources
            //     })
            //     // jmv.view.ui.add(searchWidget,{position:"top-right"})
            // }else{
            //     throw("Put service on the service")
            // }
            // this.setState({jmv:jmv})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmO0FBQzRCO0FBQ3ZCO0FBQ1c7QUFDbEI7QUFDd0I7QUFFM0MsTUFBTSxNQUFPLFNBQVEsMERBQTRCO0lBRTVELFlBQVksS0FBUztRQUNqQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFPakIsb0JBQWUsR0FBRyxDQUFDLE1BQVksRUFBQyxFQUFFO1lBQzlCLE1BQU0sU0FBUyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFDO2dCQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFFO29CQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2hDLENBQUMsQ0FB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QUksRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGdDQUVsRSxDQUNGLENBQ1AsQ0FHTCxDQUNUO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlYXJjaC12YWx1ZS13aWRnZXQvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19GZWF0dXJlTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV93aWRnZXRzX1NlYXJjaF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIlxuaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBKaW11TWFwVmlldywgSmltdU1hcFZpZXdDb21wb25lbnQgfSBmcm9tICdqaW11LWFyY2dpcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCJlc3JpL3dpZGdldHMvU2VhcmNoXCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcic7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8YW55LGFueT57XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczphbnkpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBqbXY6bnVsbCxcbiAgICAgICAgICAgIGxvYWRlcjp0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTZWFyY2hGaWVsZHMgPSAoZmllbGRzOmFueVtdKT0+e1xuICAgICAgICBjb25zdCBuZXdGaWVsZHMgPSBbXVxuICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCl7XG4gICAgICAgICAgICBmaWVsZHMuZm9yRWFjaChlbD0+e1xuICAgICAgICAgICAgICAgIG5ld0ZpZWxkcy5wdXNoKGAke2VsLm5hbWV9YClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0ZpZWxkcztcbiAgICB9XG5cbiAgICBnZXRGaWVsZEluZm9zID0gKGZpZWxkczphbnlbXSk9PntcbiAgICAgICAgY29uc3QgbmV3RmllbGRzID0gW11cbiAgICAgICAgaWYgKGZpZWxkcy5sZW5ndGgpe1xuICAgICAgICAgICAgZmllbGRzLmZvckVhY2goZWw9PntcbiAgICAgICAgICAgICAgICBuZXdGaWVsZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTplbC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDplbC5hbGlhc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdGaWVsZHM7XG4gICAgfVxuXG4gICAgb25BY3RpdmVWaWV3Q2hhbmdlID0gYXN5bmMoam12OkppbXVNYXBWaWV3KT0+e1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZS51cmw7XG4gICAgICAgICAgICAvLyBsZXQgZmVhdHVyZUxheWVyO1xuICAgICAgICAgICAgaWYgKHVybCl7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZUxheWVyID0gIG5ldyBGZWF0dXJlTGF5ZXIodXJsKTtcbiAgICAgICAgICAgICAgICBpZiAoZmVhdHVyZUxheWVyKXtcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxheWVyLmxvYWQoKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZXI6ZmFsc2Usam12Omptdn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzZWFyY2hlZEZpZWxkcyA9IHRoaXMuZ2V0U2VhcmNoRmllbGRzKGZlYXR1cmVMYXllci5maWVsZHM/P1tdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSB0aGlzLmdldEZpZWxkSW5mb3MoZmVhdHVyZUxheWVyLmZpZWxkcz8/W10pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllcjogZmVhdHVyZUxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkxvY2F0aW5nIGJ5IHVzaW5nIHZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4UmVzdWx0czogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWFyY2hGaWVsZHM6IHNlYXJjaGVkRmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFN1Z2dlc3Rpb25zOjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluU3VnZ2VzdENoYXJhY3RlcnM6MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldzpqbXYudmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6XCJzZWFyY2gtd2lkZ2V0LXNlYXJjaC12YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM6c291cmNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1cFRlbXBsYXRlOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6XCJTZWFyY2ggdmFsdWUgd2lkZ2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6W3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XCJmaWVsZHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5mb3M6ZmllbGRJbmZvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hXaWRnZXQub24oXCJzZWxlY3QtcmVzdWx0XCIsIChldmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihldmVudCAmJiBldmVudC5yZXN1bHQgJiYgZXZlbnQucmVzdWx0LmZlYXR1cmUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlHZW9tZXRyeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZXZlbnQucmVzdWx0LmZlYXR1cmUuZ2VvbWV0cnksMSwgXCJtZXRlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5R2VvbWV0cnkubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam12LnZpZXcuZ29Ubyh1bmlmaWVkR2VvbXRyeS5leHRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqbXYudmlldy51aS5hZGQoc2VhcmNoV2lkZ2V0LHtwb3NpdGlvbjpcInRvcC1yaWdodFwifSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoZmVhdHVyZUxheWVyKXtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzZWFyY2hlZEZpZWxkcyA9IHRoaXMuZ2V0U2VhcmNoRmllbGRzKGZlYXR1cmVMYXllci5maWVsZHM/P1tdKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhmZWF0dXJlTGF5ZXIsZmVhdHVyZUxheWVyLmZpZWxkcyxzZWFyY2hlZEZpZWxkcyxcInRydWV1ZXVcIilcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzb3VyY2VzID0gW3tcbiAgICAgICAgICAgIC8vICAgICAgICAgbGF5ZXI6IGZlYXR1cmVMYXllcixcbiAgICAgICAgICAgIC8vICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRGFyd2luXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIG1heFJlc3VsdHM6IDUsXG4gICAgICAgICAgICAvLyAgICAgICAgIHNlYXJjaEZpZWxkczogc2VhcmNoZWRGaWVsZHMsXG4gICAgICAgICAgICAvLyAgICAgICB9XTtcbiAgICAgICAgICAgIC8vICAgICAgIGNvbnN0IHNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2goe1xuICAgICAgICAgICAgLy8gICAgICAgICB2aWV3Omptdi52aWV3LFxuICAgICAgICAgICAgLy8gICAgICAgICBjb250YWluZXI6XCJzZWFyY2gtd2lkZ2V0LXNlYXJjaC12YWx1ZVwiLFxuICAgICAgICAgICAgLy8gICAgICAgICBzb3VyY2VzOnNvdXJjZXNcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gICAgIC8vIGptdi52aWV3LnVpLmFkZChzZWFyY2hXaWRnZXQse3Bvc2l0aW9uOlwidG9wLXJpZ2h0XCJ9KVxuICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAvLyAgICAgdGhyb3coXCJQdXQgc2VydmljZSBvbiB0aGUgc2VydmljZVwiKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7am12Omptdn0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNlYXJjaC12YWx1ZSBqaW11LXdpZGdldFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/Lmxlbmd0aCAmJiBcbiAgICAgICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlID0ge3RoaXMub25BY3RpdmVWaWV3Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLXdpZGdldC1zZWFyY2gtdmFsdWVcIiBjbGFzc05hbWU9XCJ3LTEwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0Oic4MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246J3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OlwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDpcImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3tmb250U2l6ZToxNCxjb2xvcjpcImdyZXlcIix3aWR0aDonMTAwJScsdGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIHNlYXJjaCB3aWRnZXQuLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==