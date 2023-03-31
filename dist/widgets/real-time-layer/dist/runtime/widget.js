System.register(["jimu-core","esri/layers/MapImageLayer","esri/Map","esri/views/MapView","esri/widgets/Home"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_MapImageLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_Map__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_views_MapView__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_widgets_Home__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_MapImageLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_Map__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_views_MapView__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_widgets_Home__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_MapImageLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_Map__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_views_MapView__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_widgets_Home__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "esri/Map":
/*!***************************!*\
  !*** external "esri/Map" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_Map__;

/***/ }),

/***/ "esri/layers/MapImageLayer":
/*!********************************************!*\
  !*** external "esri/layers/MapImageLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_MapImageLayer__;

/***/ }),

/***/ "esri/views/MapView":
/*!*************************************!*\
  !*** external "esri/views/MapView" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_views_MapView__;

/***/ }),

/***/ "esri/widgets/Home":
/*!************************************!*\
  !*** external "esri/widgets/Home" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_widgets_Home__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/real-time-layer/src/runtime/widget.tsx ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimeBasedLayer)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var esri_layers_MapImageLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri/layers/MapImageLayer */ "esri/layers/MapImageLayer");
/* harmony import */ var esri_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/Map */ "esri/Map");
/* harmony import */ var esri_views_MapView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/views/MapView */ "esri/views/MapView");
/* harmony import */ var esri_widgets_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/widgets/Home */ "esri/widgets/Home");





class TimeBasedLayer extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    componentDidMount() {
        const traficLayer = new esri_layers_MapImageLayer__WEBPACK_IMPORTED_MODULE_1__["default"]({
            url: "https://traffic.arcgis.com/arcgis/rest/services/World/Traffic/MapServer",
            dpi: 48,
            imageFormat: "png32",
            refreshInterval: 1,
            useViewTime: false
        });
        // const traficLayer = new GraphicsLayer()
        const map = new esri_Map__WEBPACK_IMPORTED_MODULE_2__["default"]({
            basemap: "topo-vector",
            layers: [traficLayer]
        });
        const view = new esri_views_MapView__WEBPACK_IMPORTED_MODULE_3__["default"]({
            map: map,
            container: "time_based_widget_map",
            center: [-118.2, 34.047],
            zoom: 10
        });
        const homeWidget = new esri_widgets_Home__WEBPACK_IMPORTED_MODULE_4__["default"]({ view: view });
        view.ui.add(homeWidget);
        console.log(map, view, "called");
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { id: "time_based_widget_map", style: {
                height: "100vh",
                width: "100vw",
                padding: 0,
                margin: 0
            } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { id: "time-based-clock" })));
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9yZWFsLXRpbWUtbGF5ZXIvZGlzdC9ydW50aW1lL3dpZGdldC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBRUc7QUFDM0I7QUFDYztBQUNKO0FBRXRCLE1BQU0sY0FBZSxTQUFRLDBEQUE0QztJQUVwRixpQkFBaUI7UUFDYixNQUFNLFdBQVcsR0FBRyxJQUFJLGlFQUFhLENBQUM7WUFDbEMsR0FBRyxFQUFFLHlFQUF5RTtZQUM5RSxHQUFHLEVBQUMsRUFBRTtZQUNOLFdBQVcsRUFBQyxPQUFPO1lBQ25CLGVBQWUsRUFBQyxDQUFDO1lBQ2pCLFdBQVcsRUFBQyxLQUFLO1NBQ3BCLENBQUM7UUFDRiwwQ0FBMEM7UUFDMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxnREFBRyxDQUFDO1lBQ2hCLE9BQU8sRUFBQyxhQUFhO1lBQ3JCLE1BQU0sRUFBQyxDQUFDLFdBQVcsQ0FBQztTQUN2QixDQUFDO1FBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSwwREFBTyxDQUFDO1lBQ3JCLEdBQUcsRUFBQyxHQUFHO1lBQ1AsU0FBUyxFQUFDLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7WUFDeEIsSUFBSSxFQUFDLEVBQUU7U0FDVixDQUFDO1FBQ0YsTUFBTSxVQUFVLEdBQUcsSUFBSSx5REFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU0sQ0FDRixvRUFDSSxFQUFFLEVBQUcsdUJBQXVCLEVBQzVCLEtBQUssRUFBRTtnQkFDSCxNQUFNLEVBQUMsT0FBTztnQkFDZCxLQUFLLEVBQUMsT0FBTztnQkFDYixPQUFPLEVBQUMsQ0FBQztnQkFDVCxNQUFNLEVBQUMsQ0FBQzthQUNYO1lBRUQsb0VBQUssRUFBRSxFQUFHLGtCQUFrQixHQUFPLENBQ2pDLENBQ1Q7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvTWFwXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9NYXBJbWFnZUxheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3ZpZXdzL01hcFZpZXdcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvd2lkZ2V0cy9Ib21lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3JlYWwtdGltZS1sYXllci9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX01hcF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19NYXBJbWFnZUxheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Vzcmlfdmlld3NfTWFwVmlld19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3dpZGdldHNfSG9tZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJcclxuaW1wb3J0IHtSZWFjdCxqc3gsQWxsV2lkZ2V0UHJvcHN9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gJ2VzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXInO1xyXG5pbXBvcnQgTWFwSW1hZ2VMYXllciBmcm9tICdlc3JpL2xheWVycy9NYXBJbWFnZUxheWVyJztcclxuaW1wb3J0IE1hcCBmcm9tICdlc3JpL01hcCc7XHJcbmltcG9ydCBNYXBWaWV3IGZyb20gJ2Vzcmkvdmlld3MvTWFwVmlldyc7XHJcbmltcG9ydCBIb21lIGZyb20gJ2Vzcmkvd2lkZ2V0cy9Ib21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVCYXNlZExheWVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRQcm9wczxhbnk+LGFueT57XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdHJhZmljTGF5ZXIgPSBuZXcgTWFwSW1hZ2VMYXllcih7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3RyYWZmaWMuYXJjZ2lzLmNvbS9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9Xb3JsZC9UcmFmZmljL01hcFNlcnZlclwiLFxyXG4gICAgICAgICAgICBkcGk6NDgsXHJcbiAgICAgICAgICAgIGltYWdlRm9ybWF0OlwicG5nMzJcIixcclxuICAgICAgICAgICAgcmVmcmVzaEludGVydmFsOjEsXHJcbiAgICAgICAgICAgIHVzZVZpZXdUaW1lOmZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBjb25zdCB0cmFmaWNMYXllciA9IG5ldyBHcmFwaGljc0xheWVyKClcclxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKHtcclxuICAgICAgICAgICAgYmFzZW1hcDpcInRvcG8tdmVjdG9yXCIsXHJcbiAgICAgICAgICAgIGxheWVyczpbdHJhZmljTGF5ZXJdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IE1hcFZpZXcoe1xyXG4gICAgICAgICAgICBtYXA6bWFwLFxyXG4gICAgICAgICAgICBjb250YWluZXI6XCJ0aW1lX2Jhc2VkX3dpZGdldF9tYXBcIixcclxuICAgICAgICAgICAgY2VudGVyOiBbLTExOC4yLCAzNC4wNDddLFxyXG4gICAgICAgICAgICB6b29tOjEwXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBob21lV2lkZ2V0ID0gbmV3IEhvbWUoe3ZpZXc6dmlld30pO1xyXG4gICAgICAgIHZpZXcudWkuYWRkKGhvbWVXaWRnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1hcCx2aWV3LFwiY2FsbGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgaWQgPSBcInRpbWVfYmFzZWRfd2lkZ2V0X21hcFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDpcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCIxMDB2d1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9IFwidGltZS1iYXNlZC1jbG9ja1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9