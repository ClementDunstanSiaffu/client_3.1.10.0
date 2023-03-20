System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
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
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-icons/svg/outlined/editor/plus.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/plus.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/editor/plus.tsx":
/*!*********************************************!*\
  !*** ./jimu-icons/outlined/editor/plus.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlusOutlined": () => (/* binding */ PlusOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/plus.svg */ "./jimu-icons/svg/outlined/editor/plus.svg");
/* harmony import */ var _svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1__);
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const PlusOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_plus_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/buffer-selector/src/setting/setting.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/plus */ "./jimu-icons/outlined/editor/plus.tsx");
/** @jsx jsx */




class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            reload: false,
            checked: this.props.config.checkUrlExternal
        };
        this.setUseMapWidgetIds = this.setUseMapWidgetIds.bind(this);
        this.configUrl = this.configUrl.bind(this);
        this.saveState = this.saveState.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.setCol2 = this.setCol2.bind(this);
        this.setLink = this.setLink.bind(this);
    }
    configUrl(event) {
        this.saveState('checkUrlExternal', event.target.checked);
        this.setState({ checked: event.target.checked });
    }
    setUseMapWidgetIds(useMapWidgetIds) {
        this.props.onSettingChange({
            id: this.props.id,
            useMapWidgetIds: useMapWidgetIds
        });
    }
    saveState(key, value) {
        this.props.onSettingChange({
            id: this.props.id,
            config: this.props.config.set(key, value)
        });
    }
    addNewRow() {
        this.props.config.listvalues.push({
            listIds: "",
            link: ""
        });
        this.saveState('listvalues', this.props.config.listvalues);
        this.setState({ reload: !this.state.reload });
    }
    removeRow(e, i) {
        this.props.config.listvalues.splice(i, 1);
        this.saveState('listvalues', this.props.config.listvalues);
        this.setState({ reload: !this.state.reload });
    }
    setName(event, i) {
        this.props.config.listvalues[i].name = event.target.value;
        this.saveState('listvalues', this.props.config.listvalues);
    }
    setCol2(event, i) {
        this.props.config.listvalues[i].listIds = event.target.value;
        this.saveState('listvalues', this.props.config.listvalues);
    }
    setLink(event, i) {
        this.props.config.listvalues[i].link = event.target.value;
        this.saveState('listvalues', this.props.config.listvalues);
    }
    render() {
        let listvalues = [];
        if (!this.state.checked && this.props.config.listvalues.length) {
            for (let i = 0; i < this.props.config.listvalues.length; i++) {
                listvalues.push((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Row " + (i + 1) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "col-" + i + "-2", defaultMessage: "Nome servizio" }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: this.props.config.listvalues[i].name, onChange: (e) => this.setName(e, i) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "col-" + i + "-2", defaultMessage: "Set Ids (0,1,2)" }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: this.props.config.listvalues[i].listIds, onChange: (e) => this.setCol2(e, i) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "col-" + i + "-link", defaultMessage: "Service's link" }) },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: this.props.config.listvalues[i].link, onChange: (e) => this.setLink(e, i) })),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "danger", onClick: (e) => this.removeRow(e, i) }, " Delete row"))));
            }
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-buffer-selector" },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Source" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.MapWidgetSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.setUseMapWidgetIds })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, null,
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "form-check" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: "setting-text-level-1 mr-2", htmlFor: "flexCheckDefault" }, "Configura da URL"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { className: "form-check-input", checked: this.props.config.checkUrlExternal, type: "checkbox", value: "", onChange: this.configUrl })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: this.state.checked ? 'input-group mb-3' : 'd-none' },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", className: "form-control w-100", defaultValue: this.props.config.urlConfig, onChange: (e) => this.saveState('urlConfig', e.target.value), "aria-describedby": "basic-addon3" }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "Options" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingRow, { label: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "idWidgetTable", defaultMessage: "Id Widget table" }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { defaultValue: this.props.config.idWidgetTable, onChange: (e) => this.saveState('idWidgetTable', e.target.value) }))),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_1__.SettingSection, { title: "List value", className: this.state.checked ? 'd-none' : '' },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "app-root-emotion-cache-ltr-j80zov jimu-widget-setting--row form-group align-items-center row" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "w-100 data-remind" }, "Add the service's uri and layerId (0,1,2) ")),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "app-root-emotion-cache-ltr-j80zov jimu-widget-setting--row form-group align-items-center row" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100" },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "primary", onClick: this.addNewRow },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_3__.PlusOutlined, null),
                            " New row")))),
            listvalues));
    }
}

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9idWZmZXItc2VsZWN0b3IvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTZDO0FBRU87QUFFN0MsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF3QixFQUFFLEVBQUU7SUFDdkQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUc7SUFDdEIsTUFBTSxFQUFFLFNBQVMsS0FBZ0IsS0FBSyxFQUFoQixNQUFNLFVBQUssS0FBSyxFQUFoQyxhQUF3QixDQUFRO0lBRXRDLE1BQU0sT0FBTyxHQUFHLHFEQUFVLENBQUMsK0JBQStCLEVBQUUsU0FBUyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHO1FBQUUsT0FBTyxrRkFBSyxTQUFTLEVBQUUsT0FBTyxJQUFNLE1BQWEsRUFBSTtJQUMvRCxPQUFPLDJEQUFDLEdBQUcsa0JBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsc0VBQUcsSUFBTSxNQUFNLEVBQUk7QUFDMUQsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWEQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FB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QVUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELE9BQU8sQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELE1BQU07UUFDSixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FB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QUFVLENBQ1AsQ0FDUCxDQUFDO0lBQ0osQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9wbHVzLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvcGx1cy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2J1ZmZlci1zZWxlY3Rvci9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTcuNSAwYS41LjUgMCAwIDAtLjUuNVY3SC41YS41LjUgMCAwIDAgMCAxSDd2Ni41YS41LjUgMCAwIDAgMSAwVjhoNi41YS41LjUgMCAwIDAgMC0xSDhWLjVhLjUuNSAwIDAgMC0uNS0uNVpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3BsdXMuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgUmVhY3QsIGpzeCwgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSBcImppbXUtZm9yLWJ1aWxkZXJcIjtcclxuaW1wb3J0IHtNYXBXaWRnZXRTZWxlY3RvciwgU2V0dGluZ1JvdywgU2V0dGluZ1NlY3Rpb259IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IHtQbHVzT3V0bGluZWR9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9wbHVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxBbGxXaWRnZXRTZXR0aW5nUHJvcHM8YW55PiwgYW55PiB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICByZWxvYWQ6IGZhbHNlLFxyXG4gICAgY2hlY2tlZDp0aGlzLnByb3BzLmNvbmZpZy5jaGVja1VybEV4dGVybmFsXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5zZXRVc2VNYXBXaWRnZXRJZHMgPSB0aGlzLnNldFVzZU1hcFdpZGdldElkcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jb25maWdVcmwgPSB0aGlzLmNvbmZpZ1VybC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zYXZlU3RhdGUgPSB0aGlzLnNhdmVTdGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5hZGROZXdSb3cgPSB0aGlzLmFkZE5ld1Jvdy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZW1vdmVSb3cgPSB0aGlzLnJlbW92ZVJvdy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zZXRDb2wyID0gdGhpcy5zZXRDb2wyLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldExpbmsgPSB0aGlzLnNldExpbmsuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbmZpZ1VybChldmVudCl7XHJcbiAgICB0aGlzLnNhdmVTdGF0ZSgnY2hlY2tVcmxFeHRlcm5hbCcsZXZlbnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB0aGlzLnNldFN0YXRlKHtjaGVja2VkOmV2ZW50LnRhcmdldC5jaGVja2VkfSk7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VNYXBXaWRnZXRJZHModXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSl7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICB1c2VNYXBXaWRnZXRJZHM6IHVzZU1hcFdpZGdldElkc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlU3RhdGUoa2V5LHZhbHVlKXtcclxuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KGtleSwgdmFsdWUpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWRkTmV3Um93KCl7XHJcbiAgICB0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzLnB1c2goe1xyXG4gICAgICBsaXN0SWRzOiBcIlwiLFxyXG4gICAgICBsaW5rOiBcIlwiXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2F2ZVN0YXRlKCdsaXN0dmFsdWVzJyx0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3JlbG9hZDohdGhpcy5zdGF0ZS5yZWxvYWR9KTtcclxuICB9XHJcbiAgcmVtb3ZlUm93KGUsaSl7XHJcbiAgICB0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzLnNwbGljZShpLCAxKTtcclxuICAgIHRoaXMuc2F2ZVN0YXRlKCdsaXN0dmFsdWVzJyx0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3JlbG9hZDohdGhpcy5zdGF0ZS5yZWxvYWR9KTtcclxuICB9XHJcblxyXG4gIHNldE5hbWUoZXZlbnQsaSl7XHJcbiAgICB0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzW2ldLm5hbWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNhdmVTdGF0ZSgnbGlzdHZhbHVlcycsdGhpcy5wcm9wcy5jb25maWcubGlzdHZhbHVlcyk7XHJcbiAgfVxyXG4gIHNldENvbDIoZXZlbnQsaSl7XHJcbiAgICB0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzW2ldLmxpc3RJZHMgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNhdmVTdGF0ZSgnbGlzdHZhbHVlcycsdGhpcy5wcm9wcy5jb25maWcubGlzdHZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICBzZXRMaW5rKGV2ZW50LGkpe1xyXG4gICAgdGhpcy5wcm9wcy5jb25maWcubGlzdHZhbHVlc1tpXS5saW5rID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zYXZlU3RhdGUoJ2xpc3R2YWx1ZXMnLHRoaXMucHJvcHMuY29uZmlnLmxpc3R2YWx1ZXMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgbGlzdHZhbHVlcyA9IFtdO1xyXG4gICAgaWYoIXRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzLmxlbmd0aCl7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9wcy5jb25maWcubGlzdHZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxpc3R2YWx1ZXMucHVzaChcclxuICAgICAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPXtcIlJvdyBcIisoaSsxKX0+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9ezxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtcImNvbC1cIitpK1wiLTJcIn0gZGVmYXVsdE1lc3NhZ2U9e1wiTm9tZSBzZXJ2aXppb1wifS8+fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuY29uZmlnLmxpc3R2YWx1ZXNbaV0ubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldE5hbWUoZSxpKX0vPlxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8U2V0dGluZ1JvdyBsYWJlbD17PEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e1wiY29sLVwiK2krXCItMlwifSBkZWZhdWx0TWVzc2FnZT17XCJTZXQgSWRzICgwLDEsMilcIn0vPn0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzW2ldLmxpc3RJZHN9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRDb2wyKGUsaSl9Lz5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9ezxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtcImNvbC1cIitpK1wiLWxpbmtcIn0gZGVmYXVsdE1lc3NhZ2U9e1wiU2VydmljZSdzIGxpbmtcIn0vPn0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZy5saXN0dmFsdWVzW2ldLmxpbmt9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRMaW5rKGUsaSl9Lz5cclxuICAgICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17KGUpID0+IHRoaXMucmVtb3ZlUm93KGUsaSl9PiBEZWxldGUgcm93PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1idWZmZXItc2VsZWN0b3JcIj5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e1wiU291cmNlXCJ9PlxyXG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9IG9uU2VsZWN0PXt0aGlzLnNldFVzZU1hcFdpZGdldElkc30gLz5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0LWxldmVsLTEgbXItMlwiIGh0bWxGb3I9XCJmbGV4Q2hlY2tEZWZhdWx0XCI+Q29uZmlndXJhIGRhIFVSTDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnLmNoZWNrVXJsRXh0ZXJuYWx9XHJcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIlwiIG9uQ2hhbmdlPXt0aGlzLmNvbmZpZ1VybH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5jaGVja2VkID8gJ2lucHV0LWdyb3VwIG1iLTMnIDogJ2Qtbm9uZSd9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZy51cmxDb25maWd9XHJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2F2ZVN0YXRlKCd1cmxDb25maWcnLGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjNcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIDxTZXR0aW5nU2VjdGlvbiB0aXRsZT17XCJPcHRpb25zXCJ9PlxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9ezxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiaWRXaWRnZXRUYWJsZVwiIGRlZmF1bHRNZXNzYWdlPXtcIklkIFdpZGdldCB0YWJsZVwifS8+fT5cclxuICAgICAgICAgICAgPGlucHV0IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5jb25maWcuaWRXaWRnZXRUYWJsZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNhdmVTdGF0ZSgnaWRXaWRnZXRUYWJsZScsZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICA8U2V0dGluZ1NlY3Rpb24gdGl0bGU9e1wiTGlzdCB2YWx1ZVwifSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2hlY2tlZCA/ICdkLW5vbmUnIDogJyd9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtcm9vdC1lbW90aW9uLWNhY2hlLWx0ci1qODB6b3YgamltdS13aWRnZXQtc2V0dGluZy0tcm93IGZvcm0tZ3JvdXAgYWxpZ24taXRlbXMtY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEwMCBkYXRhLXJlbWluZFwiPkFkZCB0aGUgc2VydmljZSdzIHVyaSBhbmQgbGF5ZXJJZCAoMCwxLDIpIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtcm9vdC1lbW90aW9uLWNhY2hlLWx0ci1qODB6b3YgamltdS13aWRnZXQtc2V0dGluZy0tcm93IGZvcm0tZ3JvdXAgYWxpZ24taXRlbXMtY2VudGVyIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuYWRkTmV3Um93fT48UGx1c091dGxpbmVkLz4gTmV3IHJvdzwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2V0dGluZ1NlY3Rpb24+XHJcbiAgICAgICAge2xpc3R2YWx1ZXN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==