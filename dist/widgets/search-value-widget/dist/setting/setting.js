System.register(["jimu-core","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

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
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/search-value-widget/src/setting/setting.tsx ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");


class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onSelectMap = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: useMapWidgetIds
            });
        };
        this.saveState = (val, key) => {
            const currentService = this.props.config.service;
            const newService = Object.assign(Object.assign({}, currentService), { [key]: val });
            this.props.onSettingChange({
                id: this.props.id,
                config: Object.assign(Object.assign({}, this.props.config), { "service": newService })
            });
        };
    }
    render() {
        var _a, _b, _c;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: 'widget-setting-search-value' },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Select map" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.onSelectMap })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Put your service" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Service url" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { defaultValue: (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.service.url, onChange: (e) => this.saveState(e.target.value, "url") })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Layer id" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { defaultValue: (_b = this.props.config) === null || _b === void 0 ? void 0 : _b.service.layerId, onChange: (e) => this.saveState(e.target.value, "layerId") })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: "Search field" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { defaultValue: (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.service.searchField, onChange: (e) => this.saveState(e.target.value, "searchField") })))));
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9zZWFyY2gtdmFsdWUtd2lkZ2V0L2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXVCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEU7QUFFK0M7QUFFckYsTUFBTSxPQUFRLFNBQVEsMERBQW1EO0lBQXhGOztRQUVJLGdCQUFXLEdBQUcsQ0FBQyxlQUF3QixFQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZCLEVBQUUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLGVBQWUsRUFBQyxlQUFlO2FBQ2xDLENBQUM7UUFDTixDQUFDO1FBRUQsY0FBUyxHQUFHLENBQUMsR0FBVSxFQUFDLEdBQVUsRUFBQyxFQUFFO1lBQ2pDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqRCxNQUFNLFVBQVUsbUNBQU8sY0FBYyxLQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsR0FBRyxHQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZCLEVBQUUsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sa0NBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUMsU0FBUyxFQUFDLFVBQVUsR0FBQzthQUNyRCxDQUFDO1FBQ04sQ0FBQztJQWlDTCxDQUFDO0lBL0JHLE1BQU07O1FBQ0YsT0FBTSxDQUNGLG9FQUFLLFNBQVMsRUFBQyw2QkFBNkI7WUFDeEMsMkRBQUMsK0VBQWMsSUFBQyxLQUFLLEVBQUUsWUFBWTtnQkFDL0IsMkRBQUMsa0ZBQWlCLElBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQ2xGO1lBQ2pCLDJEQUFDLCtFQUFjLElBQUMsS0FBSyxFQUFFLGtCQUFrQjtnQkFDckMsMkRBQUMsMkVBQVUsSUFBQyxLQUFLLEVBQUUsYUFBYTtvQkFDNUIsc0VBQ0ksWUFBWSxFQUFFLFVBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSwwQ0FBRSxPQUFPLENBQUMsR0FBRyxFQUM1QyxRQUFRLEVBQUksQ0FBQyxDQUFDLEVBQUMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxHQUN2RCxDQUNPO2dCQUNiLDJEQUFDLDJFQUFVLElBQUMsS0FBSyxFQUFFLFVBQVU7b0JBQ3pCLHNFQUNJLFlBQVksRUFBRSxVQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sMENBQUUsT0FBTyxDQUFDLE9BQU8sRUFDaEQsUUFBUSxFQUFJLENBQUMsQ0FBQyxFQUFDLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxTQUFTLENBQUMsR0FDM0QsQ0FDTztnQkFDYiwyREFBQywyRUFBVSxJQUFDLEtBQUssRUFBRSxjQUFjO29CQUM3QixzRUFDSSxZQUFZLEVBQUUsVUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLDBDQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQ3BELFFBQVEsRUFBSSxDQUFDLENBQUMsRUFBQyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsYUFBYSxDQUFDLEdBQy9ELENBQ08sQ0FDQSxDQUNmLENBRVQ7SUFDTCxDQUFDO0NBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3NlYXJjaC12YWx1ZS13aWRnZXQvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIlxuaW1wb3J0IHtSZWFjdCxqc3gsRm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInO1xuaW1wb3J0IHsgTWFwV2lkZ2V0U2VsZWN0b3IsIFNldHRpbmdSb3csIFNldHRpbmdTZWN0aW9uIH0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRTZXR0aW5nUHJvcHM8YW55Pixhbnk+e1xuXG4gICAgb25TZWxlY3RNYXAgPSAodXNlTWFwV2lkZ2V0SWRzOnN0cmluZ1tdKT0+e1xuICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICAgICAgICBpZDp0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzOnVzZU1hcFdpZGdldElkc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNhdmVTdGF0ZSA9ICh2YWw6c3RyaW5nLGtleTpzdHJpbmcpPT57XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTZXJ2aWNlID0gdGhpcy5wcm9wcy5jb25maWcuc2VydmljZTtcbiAgICAgICAgY29uc3QgbmV3U2VydmljZSA9IHsuLi5jdXJyZW50U2VydmljZSxba2V5XTp2YWx9O1xuICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICAgICAgICBpZDp0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgY29uZmlnOnsuLi50aGlzLnByb3BzLmNvbmZpZyxcInNlcnZpY2VcIjpuZXdTZXJ2aWNlfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2lkZ2V0LXNldHRpbmctc2VhcmNoLXZhbHVlJz5cbiAgICAgICAgICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e1wiU2VsZWN0IG1hcFwifT5cbiAgICAgICAgICAgICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9IG9uU2VsZWN0ID0ge3RoaXMub25TZWxlY3RNYXB9Lz5cbiAgICAgICAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17XCJQdXQgeW91ciBzZXJ2aWNlXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17XCJTZXJ2aWNlIHVybFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuY29uZmlnPy5zZXJ2aWNlLnVybH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGUpPT50aGlzLnNhdmVTdGF0ZShlLnRhcmdldC52YWx1ZSxcInVybFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+ICAgXG4gICAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e1wiTGF5ZXIgaWRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZz8uc2VydmljZS5sYXllcklkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsoZSk9PnRoaXMuc2F2ZVN0YXRlKGUudGFyZ2V0LnZhbHVlLFwibGF5ZXJJZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9e1wiU2VhcmNoIGZpZWxkXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5jb25maWc/LnNlcnZpY2Uuc2VhcmNoRmllbGR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyhlKT0+dGhpcy5zYXZlU3RhdGUoZS50YXJnZXQudmFsdWUsXCJzZWFyY2hGaWVsZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cbiAgICAgICAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgICApXG4gICAgfVxuXG59ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==