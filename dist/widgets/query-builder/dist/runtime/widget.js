System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/rest/support/Query","esri/layers/GraphicsLayer","jimu-core/react","jimu-core/react-dom","esri/geometry/Polygon","esri/geometry/geometryEngine"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__[key] = module[key];
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/query-builder/src/assets/styles/styles.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/query-builder/src/assets/styles/styles.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 768px) {\n  .col-md-4 {\n    flex: auto; } }\n\n@media (min-width: 768px) {\n  .close-container-table-query-builder {\n    flex: auto; } }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/query-builder/src/assets/styles/styles.scss"],"names":[],"mappings":"AACA;EACI;IACI,UAAU,EAAA,EACb;;AAGL;EACI;IACI,UAAS,EAAA,EACZ","sourcesContent":["\n@media (min-width:768px){\n    .col-md-4 {\n        flex: auto;\n    }\n}\n\n@media (min-width:768px){\n    .close-container-table-query-builder{\n        flex:auto;\n    }\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/query-builder/src/style.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/query-builder/src/style.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".item-table:hover {\n  cursor: pointer;\n  background-color: #e5f7ff; }\n\n.setting-svg:hover {\n  transform: scale(1.2);\n  cursor: pointer;\n  color: #005eca; }\n\n.setting-svg {\n  transition: all 1s;\n  transform-origin: 50% 50%; }\n\n#wrap {\n  min-width: 300px !important; }\n\n.include {\n  display: flex;\n  flex-direction: row; }\n\n#inputs {\n  width: 20% !important; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/query-builder/src/style.css"],"names":[],"mappings":"AAAA;EACI,eAAe;EACf,yBAAyB,EAAA;;AAE7B;EACI,qBAAqB;EACrB,eAAe;EACf,cAAc,EAAA;;AAElB;EACI,kBAAkB;EAClB,yBAAyB,EAAA;;AAG7B;EACI,2BAA2B,EAAA;;AAG/B;EACI,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACI,qBAAoB,EAAA","sourcesContent":[".item-table:hover{\r\n    cursor: pointer;\r\n    background-color: #e5f7ff;\r\n}\r\n.setting-svg:hover {\r\n    transform: scale(1.2);\r\n    cursor: pointer;\r\n    color: #005eca;\r\n}\r\n.setting-svg{\r\n    transition: all 1s;\r\n    transform-origin: 50% 50%;\r\n}\r\n\r\n#wrap{\r\n    min-width: 300px !important;\r\n}\r\n\r\n.include{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n#inputs{\r\n    width:20% !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/assets/styles/styles.scss":
/*!*****************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/assets/styles/styles.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./styles.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/query-builder/src/assets/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/style.css":
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/style.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/query-builder/src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/check.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/check.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707l4.182 4.182Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/application/setting.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/setting.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.438.994c.213 0 .397.146.44.35.151.722.257 1.34.316 1.852.374.16.725.362 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 21.98 21.98 0 0 1-1.49 1.194 5.17 5.17 0 0 1-.007 1.183l1.464 1.119a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 22.445 22.445 0 0 1-1.807-.66c-.325.233-.679.43-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21.019 21.019 0 0 1-.317-1.853 5.34 5.34 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546c.567-.49 1.063-.888 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196c.719.233 1.321.453 1.807.66.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994h2.839Zm-.365 1H6.985l-.28 1.866-.467.19c-.235.095-.46.21-.672.34l-.207.136-.42.293-.476-.197c-.328-.137-.718-.281-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4.127 4.127 0 0 0-.021.816l.014.144.058.492-.419.294c-.288.203-.615.451-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29c.204.146.42.274.645.384l.228.103.474.199.059.49c.04.338.103.731.19 1.177l.043.219h2.088l.282-1.867.466-.19c.236-.095.46-.21.672-.34l.207-.136.419-.293.476.198c.33.136.72.28 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4.131 4.131 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18.1 18.1 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.496 4.496 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49c-.032-.27-.08-.576-.14-.916l-.094-.48Zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/left.svg":
/*!******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/left.svg ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.538.538 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.538.538 0 0 1 .738 0Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/directional/right.svg":
/*!*******************************************************!*\
  !*** ./jimu-icons/svg/outlined/directional/right.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.538.538 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.538.538 0 0 1-.738 0Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/close.svg":
/*!**************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/close.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/svg/outlined/editor/plus.svg":
/*!*************************************************!*\
  !*** ./jimu-icons/svg/outlined/editor/plus.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z\" fill=\"#000\"></path></svg>"

/***/ }),

/***/ "./jimu-icons/outlined/application/check.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/application/check.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckOutlined": () => (/* binding */ CheckOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_check_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/check.svg */ "./jimu-icons/svg/outlined/application/check.svg");
/* harmony import */ var _svg_outlined_application_check_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_check_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const CheckOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_check_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/application/setting.tsx":
/*!*****************************************************!*\
  !*** ./jimu-icons/outlined/application/setting.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingOutlined": () => (/* binding */ SettingOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/application/setting.svg */ "./jimu-icons/svg/outlined/application/setting.svg");
/* harmony import */ var _svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const SettingOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_application_setting_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/left.tsx":
/*!**************************************************!*\
  !*** ./jimu-icons/outlined/directional/left.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftOutlined": () => (/* binding */ LeftOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/left.svg */ "./jimu-icons/svg/outlined/directional/left.svg");
/* harmony import */ var _svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const LeftOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_left_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/directional/right.tsx":
/*!***************************************************!*\
  !*** ./jimu-icons/outlined/directional/right.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightOutlined": () => (/* binding */ RightOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/directional/right.svg */ "./jimu-icons/svg/outlined/directional/right.svg");
/* harmony import */ var _svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const RightOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_directional_right_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


/***/ }),

/***/ "./jimu-icons/outlined/editor/close.tsx":
/*!**********************************************!*\
  !*** ./jimu-icons/outlined/editor/close.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseOutlined": () => (/* binding */ CloseOutlined)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/outlined/editor/close.svg */ "./jimu-icons/svg/outlined/editor/close.svg");
/* harmony import */ var _svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1__);
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


const CloseOutlined = (props) => {
    const SVG = window.SVG;
    const { className } = props, others = __rest(props, ["className"]);
    const classes = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.classNames)('jimu-icon jimu-icon-component', className);
    if (!SVG)
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", Object.assign({ className: classes }, others));
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SVG, Object.assign({ className: classes, src: (_svg_outlined_editor_close_svg__WEBPACK_IMPORTED_MODULE_1___default()) }, others));
};


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

/***/ "./your-extensions/widgets/query-builder/src/connector.ts":
/*!****************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/connector.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Helper {
    constructor() {
        this.setQueryArray = [];
        this.setOutFields = [];
        this.getLayerAttributes = (selectedLayerId, layerContents) => {
            let attributes = [];
            if ((layerContents === null || layerContents === void 0 ? void 0 : layerContents.length) > 0) {
                const attributesObject = layerContents.find((layerContent) => {
                    if ((layerContent === null || layerContent === void 0 ? void 0 : layerContent.id) === selectedLayerId) {
                        return layerContent === null || layerContent === void 0 ? void 0 : layerContent.attributes;
                    }
                });
                attributes = attributesObject === null || attributesObject === void 0 ? void 0 : attributesObject.attributes;
            }
            return attributes;
        };
        this.getAttributeKeyArray = (attributes) => {
            let returnedKeys = [];
            if (attributes && Object.keys(attributes).length > 0) {
                returnedKeys = Object.keys(attributes);
            }
            return returnedKeys;
        };
        this.getSelectedContentsLayer = (results, checkedLayers) => {
            let selectedLayersArray = [];
            if ((results === null || results === void 0 ? void 0 : results.length) > 0) {
                selectedLayersArray = results.reduce((newArray, items) => {
                    var _a, _b, _c, _d;
                    if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
                        let selectedLayerContents = {};
                        let currentLayerId = (_b = (_a = items[0]) === null || _a === void 0 ? void 0 : _a.layer) === null || _b === void 0 ? void 0 : _b.id;
                        if (checkedLayers.indexOf(currentLayerId) !== -1) {
                            selectedLayerContents["id"] = (_d = (_c = items[0]) === null || _c === void 0 ? void 0 : _c.layer) === null || _d === void 0 ? void 0 : _d.id;
                            selectedLayerContents["attributes"] = this.getAttributes(items); //step6 packaging attributes and keeping lon and latit
                            newArray.push(selectedLayerContents);
                        }
                    }
                    return newArray;
                }, []);
            }
            return selectedLayersArray;
        };
        this.getAttributes = (items) => {
            const attributesArray = items.reduce((newArray, item) => {
                var _a, _b, _c, _d, _e, _f;
                if (item === null || item === void 0 ? void 0 : item.attributes) {
                    if (item.geometry) {
                        const geometry = item.geometry;
                        const latitude = (_a = geometry === null || geometry === void 0 ? void 0 : geometry.latitude) !== null && _a !== void 0 ? _a : (_c = (_b = geometry === null || geometry === void 0 ? void 0 : geometry.extent) === null || _b === void 0 ? void 0 : _b.center) === null || _c === void 0 ? void 0 : _c.latitude;
                        const longitude = (_d = geometry === null || geometry === void 0 ? void 0 : geometry.longitude) !== null && _d !== void 0 ? _d : (_f = (_e = geometry === null || geometry === void 0 ? void 0 : geometry.extent) === null || _e === void 0 ? void 0 : _e.center) === null || _f === void 0 ? void 0 : _f.longitude;
                        if (longitude && latitude) {
                            newArray.push(Object.assign(Object.assign({}, item.attributes), { location: [latitude, longitude] }));
                        }
                        else {
                            newArray.push(item.attributes);
                        }
                    }
                    else {
                        newArray.push(item.attributes);
                    }
                }
                return newArray;
            }, []);
            return attributesArray;
        };
        this.getNumberOfAttributes = (layersContents) => {
            var _a, _b, _c, _d;
            let layerContentsObject = {};
            for (let i = 0; i < layersContents.length; i++) {
                layerContentsObject = Object.assign(Object.assign({}, layerContentsObject), { [(_a = layersContents[i]) === null || _a === void 0 ? void 0 : _a.id]: (_d = (_c = (_b = layersContents[i]) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 });
            }
            return layerContentsObject;
        };
        this.getClickedLayerStatus = (results, selectedLayer) => {
            var _a, _b, _c;
            let status = false;
            let index = -1;
            if ((results === null || results === void 0 ? void 0 : results.length) > 0 && (selectedLayer === null || selectedLayer === void 0 ? void 0 : selectedLayer.length) > 0) {
                for (let i = 0; i < results.length; i++) {
                    let layerId = (_c = (_b = (_a = results[i]) === null || _a === void 0 ? void 0 : _a.graphic) === null || _b === void 0 ? void 0 : _b.layer) === null || _c === void 0 ? void 0 : _c.id;
                    index = selectedLayer.findIndex((item) => item.id === layerId);
                    if (index != -1) {
                        return true;
                    }
                }
            }
            return status;
        };
        this.checkIfLayerWasAdded = (layerId, mapLayersItems) => {
            let index = -1;
            let status = false;
            if ((mapLayersItems === null || mapLayersItems === void 0 ? void 0 : mapLayersItems.length) > 0) {
                index = mapLayersItems.findIndex((item) => (item === null || item === void 0 ? void 0 : item.id) === layerId);
                if (index !== -1) {
                    status = true;
                }
            }
            return status;
        };
        this.openTableAttribute = () => {
            const ariaExpandedElement = document.querySelector(".sidebar-controller");
            if (ariaExpandedElement.ariaExpanded === "false") {
                //@ts-ignore
                ariaExpandedElement.click();
            }
        };
        this.closeAttributeTable = () => {
            const ariaExpandedElement = document.querySelector(".sidebar-controller");
            if (ariaExpandedElement.ariaExpanded === "true") {
                //@ts-ignore
                ariaExpandedElement.click();
            }
        };
        this.getNumberOfItemsInField = (field, selectedAttributes) => {
            let numberOfItems = 0;
            if ((selectedAttributes === null || selectedAttributes === void 0 ? void 0 : selectedAttributes.length) > 0) {
                let valueArr = [];
                for (let i = 0; i < selectedAttributes.length; i++) {
                    valueArr.push(selectedAttributes[i][field]);
                }
                numberOfItems = valueArr.length;
            }
            return numberOfItems;
        };
        this.getHighlightedIds = (features) => {
            const highlightIds = [];
            if (features.length)
                features.forEach(el => highlightIds.push(el.attributes.OBJECTID));
            return highlightIds;
        };
        this.likelyQuery = (attributeQuery, queryValue, value) => {
            switch (queryValue) {
                case "LIKE%":
                    return `${attributeQuery} LIKE '%${value}'`;
                case "%LIKE%":
                    return `${attributeQuery} LIKE '%${value}%'`;
                case "%LIKE":
                    return `${attributeQuery} LIKE '%${value}'`;
                case "NOT LIKE":
                    return `${attributeQuery} NOT LIKE '%${value}%'`;
            }
        };
        this.querySetConstructor = (query, setWhereClause, AndOrSet, field) => {
            let currentQuery = query.where;
            console.log(this.setQueryArray.length < setWhereClause.length - 1, "checking");
            if (this.setQueryArray.length < setWhereClause.length - 1) {
                currentQuery = query.where + " " + AndOrSet;
            }
            this.setQueryArray.push(currentQuery);
            this.setOutFields.push(`${field}`);
            console.log(this.setQueryArray, this.setOutFields, "make sure");
            // if(this.setQueryArray.length >= setWhereClause.length){
            //     return {querySetArray:this.setQueryArray,querySetOutfields:this.setOutFields}
            // }
        };
        // tableSetCounts = (tableSetCounts:{id:string,deleted:boolean}[])=>{
        //     let counts = 0
        //     if (tableSetCounts.length){
        //       const copiedTableSetCounts = [...tableSetCounts];
        //       copiedTableSetCounts.filter((item)=>!item.deleted);
        //       counts = copiedTableSetCounts.length
        //     }
        //     return counts;
        //   }
        this.getQuerySetValue = () => ({ querySetArray: this.setQueryArray, querySetOutfields: this.setOutFields });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Helper());


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/connector/attribute_table_connector.ts":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/connector/attribute_table_connector.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

class AttributeTableConnector {
    constructor(activeView, self) {
        this.isArray = (val) => Array.isArray(val);
        this.isObject = (val) => Object.keys(val).length > 0 && !Array.isArray(val);
        this.loopLayerGetIds = (layer) => {
            let idsArray = [];
            if (layer.length) {
                idsArray = layer.reduce((newArray, item) => {
                    if (item.id) {
                        newArray.push(item.id);
                    }
                    return newArray;
                }, []);
            }
            return idsArray;
        };
        this.setCheckedLayers = (currentAllChechedLayers, checkedLayers) => {
            let allCheckedLayers = currentAllChechedLayers;
            if (!allCheckedLayers) {
                allCheckedLayers = this.allCheckedLayers;
            }
            if (checkedLayers) {
                this.checkedLayers = checkedLayers;
                return;
            }
            let checkedLayersArr = [];
            if (allCheckedLayers) {
                if (this.isObject(allCheckedLayers)) {
                    checkedLayersArr.push(allCheckedLayers.id);
                    this.checkedLayers = checkedLayersArr;
                    return;
                }
                if (this.isArray(allCheckedLayers)) {
                    if (checkedLayersArr.length) {
                        checkedLayersArr = [...checkedLayersArr, ...this.loopLayerGetIds(allCheckedLayers)];
                        this.checkedLayers = checkedLayersArr;
                        return;
                    }
                    else {
                        checkedLayers = this.loopLayerGetIds(allCheckedLayers);
                        this.checkedLayers = checkedLayers;
                        return;
                    }
                }
            }
        };
        this.setAllCheckedLayersFromResults = (results) => {
            if ((results === null || results === void 0 ? void 0 : results.length) > 0) {
                const allCheckedLayers = results.reduce((newArray, items) => {
                    var _a;
                    if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
                        newArray.push((_a = items[0]) === null || _a === void 0 ? void 0 : _a.layer);
                    }
                    return newArray;
                }, []);
                this.allCheckedLayers = allCheckedLayers;
                return;
            }
            throw "Pass results after query";
        };
        this.setAllCheckedLayers = (allCheckedLayers, results) => {
            if (allCheckedLayers) {
                if (this.isObject(allCheckedLayers)) {
                    this.allCheckedLayers = [allCheckedLayers];
                }
                if (this.isArray(allCheckedLayers)) {
                    this.allCheckedLayers = allCheckedLayers;
                }
                return;
            }
            this.setAllCheckedLayersFromResults(results);
        };
        this.getSelectedContentsLayer = (results) => {
            var _a;
            const checkedLayers = (_a = this.checkedLayers) !== null && _a !== void 0 ? _a : [];
            let selectedLayersArray = [];
            if ((results === null || results === void 0 ? void 0 : results.length) > 0) {
                selectedLayersArray = results.reduce((newArray, items) => {
                    var _a, _b, _c, _d;
                    if ((items === null || items === void 0 ? void 0 : items.length) > 0) {
                        let selectedLayerContents = {};
                        let currentLayerId = (_b = (_a = items[0]) === null || _a === void 0 ? void 0 : _a.layer) === null || _b === void 0 ? void 0 : _b.id;
                        if (checkedLayers.indexOf(currentLayerId) !== -1) {
                            selectedLayerContents["id"] = (_d = (_c = items[0]) === null || _c === void 0 ? void 0 : _c.layer) === null || _d === void 0 ? void 0 : _d.id;
                            selectedLayerContents["attributes"] = this.getAttributes(items);
                            newArray.push(selectedLayerContents);
                        }
                    }
                    return newArray;
                }, []);
            }
            return selectedLayersArray;
        };
        this.getAttributes = (items) => {
            const attributesArray = items.reduce((newArray, item) => {
                var _a, _b, _c, _d, _e, _f;
                if (item === null || item === void 0 ? void 0 : item.attributes) {
                    if (item.geometry) {
                        const geometry = item.geometry;
                        const latitude = (_a = geometry === null || geometry === void 0 ? void 0 : geometry.latitude) !== null && _a !== void 0 ? _a : (_c = (_b = geometry === null || geometry === void 0 ? void 0 : geometry.extent) === null || _b === void 0 ? void 0 : _b.center) === null || _c === void 0 ? void 0 : _c.latitude;
                        const longitude = (_d = geometry === null || geometry === void 0 ? void 0 : geometry.longitude) !== null && _d !== void 0 ? _d : (_f = (_e = geometry === null || geometry === void 0 ? void 0 : geometry.extent) === null || _e === void 0 ? void 0 : _e.center) === null || _f === void 0 ? void 0 : _f.longitude;
                        if (longitude && latitude) {
                            newArray.push(Object.assign(Object.assign({}, item.attributes), { location: [latitude, longitude] }));
                        }
                        else {
                            newArray.push(item.attributes);
                        }
                    }
                    else {
                        newArray.push(item.attributes);
                    }
                }
                return newArray;
            }, []);
            return attributesArray;
        };
        this.setNumberOfAttributes = (results, numberOfAttributes) => {
            var _a, _b, _c, _d;
            if (numberOfAttributes) {
                this.numberOfAttributes = numberOfAttributes;
                return;
            }
            const layersContents = this.getSelectedContentsLayer(results);
            let layerContentsObject = {};
            if (layersContents === null || layersContents === void 0 ? void 0 : layersContents.length) {
                for (let i = 0; i < layersContents.length; i++) {
                    layerContentsObject = Object.assign(Object.assign({}, layerContentsObject), { [(_a = layersContents[i]) === null || _a === void 0 ? void 0 : _a.id]: (_d = (_c = (_b = layersContents[i]) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0 });
                }
            }
            this.numberOfAttributes = layerContentsObject;
        };
        this.setLayerOpen = (layerOpen) => {
            if (layerOpen) {
                this.layerOpen = layerOpen;
                return;
            }
            this.layerOpen = {
                geometry: null,
                typeSelected: "contains",
            };
        };
        this.getActiveView = () => AttributeTableConnector.activeView;
        this.getAllCheckedLayers = () => this.allCheckedLayers;
        this.dispatchingAll = () => {
            const self = AttributeTableConnector.self;
            const props = self.props;
            if (props && props.hasOwnProperty("dispatch")) {
                const numberOfAttributes = this.numberOfAttributes;
                const layerOpen = this.layerOpen;
                const allCheckedLayers = this.allCheckedLayers;
                const activeView = this.getActiveView();
                if (numberOfAttributes && layerOpen && allCheckedLayers && activeView) {
                    if (!this.isLayerChecked) {
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "checkedLayers", this.checkedLayers));
                    }
                    if (Object.keys(numberOfAttributes).length > 0) {
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "numberOfAttribute", numberOfAttributes));
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "layerOpen", layerOpen));
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "getAllLayers", this.getAllCheckedLayers));
                        props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "getActiveView", this.getActiveView));
                        return;
                    }
                    throw "noItemSelected";
                }
                if (!layerOpen)
                    throw "There is no layer open";
                if (allCheckedLayers)
                    throw "There is no all checked layers make sure to pass layer";
                if (activeView)
                    throw "There is no activeView,pass jimuMapView when map load";
                return;
            }
            throw "Pass parent widget to the AttributeConnector";
        };
        this.closeTable = () => {
            const self = AttributeTableConnector.self;
            const props = self.props;
            if (props && props.hasOwnProperty("dispatch")) {
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "checkedLayers", []));
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
            }
        };
        this.getProps = () => {
            const self = AttributeTableConnector.self;
            const props = self.props;
            const numberOfAttributes = this.numberOfAttributes;
            const layerOpen = this.layerOpen;
            const allCheckedLayers = this.allCheckedLayers;
            const activeView = this.getActiveView();
            if (props && props.hasOwnProperty("dispatch")) {
                if (!layerOpen)
                    throw "There is no layer open";
                if (!allCheckedLayers)
                    throw "There is no all checked layers make sure to pass layer";
                if (!activeView)
                    throw "There is no activeView,pass jimuMapView when map load";
                if (numberOfAttributes && Object.keys(numberOfAttributes)) {
                    return props;
                }
                return null;
            }
            throw "Pass parent widget to the AttributeConnector";
        };
        this.dispatchCreateTable = () => {
            const props = this.getProps();
            if (props) {
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
            }
        };
        this.dispatchChechedLayers = (checkedLayers) => {
            const props = this.getProps();
            if (props) {
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "checkedLayers", checkedLayers));
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
            }
        };
        this.dispatchFilterValue = (filterValue) => {
            const props = this.getProps();
            if (props) {
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "filterValue", filterValue));
                props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "createTable", true));
            }
        };
        AttributeTableConnector.activeView = activeView;
        AttributeTableConnector.self = self;
    }
    init(obj) {
        const results = obj.results;
        const allCheckedLayers = obj.allCheckedLayers;
        let createTable = true;
        let isLayerChecked = false;
        let checkedLayers = null;
        let numberOfAttributes = null;
        let layerOpen = null;
        if (obj.hasOwnProperty("createTable")) {
            createTable = obj.createTable;
        }
        if (obj.hasOwnProperty("isLayerChecked")) {
            isLayerChecked = obj.isLayerChecked;
        }
        if (obj.hasOwnProperty("checkedLayers")) {
            checkedLayers = obj.checkedLayers;
        }
        if (obj.hasOwnProperty("numberOfAttributes")) {
            numberOfAttributes = obj.numberOfAttributes;
        }
        if (obj.hasOwnProperty("layerOpen")) {
            layerOpen = obj.layerOpen;
        }
        this.createTable = createTable;
        this.isLayerChecked = isLayerChecked;
        this.setAllCheckedLayers(allCheckedLayers, results);
        this.setCheckedLayers(allCheckedLayers, checkedLayers);
        // this.setAllCheckedLayers(allCheckedLayers);
        this.setNumberOfAttributes(results, numberOfAttributes);
        this.setLayerOpen(layerOpen);
    }
}
AttributeTableConnector.activeView = null;
AttributeTableConnector.self = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttributeTableConnector);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/components/AddSetTable.tsx":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/components/AddSetTable.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var _lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/ResizeDetector */ "./your-extensions/widgets/query-builder/src/runtime/lib/ResizeDetector.tsx");
/* harmony import */ var _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/queryTableValue */ "./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js");
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/styles/styles.scss */ "./your-extensions/widgets/query-builder/src/assets/styles/styles.scss");
/* harmony import */ var _common_inputs_commonSecondConstructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/inputs/commonSecondConstructor */ "./your-extensions/widgets/query-builder/src/runtime/components/common/inputs/commonSecondConstructor.tsx");







function AddSetTable(props) {
    const { list, handleThirdQuery, textInputHandler, multiSelectHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, dropdownValueQuery, handleCheckBox, isChecked, counterIsChecked, dropDownToggler, functionCounterIsChecked, checkedToQuery, deleteTable, getQueryAttribute, 
    // for Add set table............................
    tablesSet, tablesSetId, whereClausesSet, 
    // End for Add set table............................
    tables, getQuery, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened, autOpen, mouseleave, onmouseLeave, dropdownsSet, showDelete, blockId, currentTable, showBlockDelete, queryChanged, parent } = props;
    const currentwhereClausesSet = whereClausesSet.find((item) => item.id === tablesSetId);
    const styles = {
        smallerWidthOuterContainer: {
            display: "flex",
            flexDirection: "row",
            height: "fit-content",
            alignItems: "center",
            gap: '3%',
            minWidth: '280px',
            marginBottom: 20
        },
        smallerWidthInnerContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            width: "80%",
        },
        smallerWidthQueryContainer: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
        },
        largerWidthOuterContainer: {
            width: "100%"
        },
        largerWidthInnerContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row",
            gap: "3%",
        }
    };
    if (currentTable.id === parseInt(tablesSetId.split("-")[0]) && !currentTable.deleted) {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_3__["default"], { handleWidth: true, handleHeight: true }, ({ width, height }) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "my-1" }, list.fields ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { style: width <= 625 ? styles.smallerWidthOuterContainer : styles.largerWidthOuterContainer },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { style: width <= 625 ? styles.smallerWidthInnerContainer : styles.largerWidthInnerContainer },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { className: width <= 625 ? " " : "col-md-4", onChange: (e) => getQueryAttribute(e, "set"), placeholder: "Seleziona campo" }, list.fields.map((el, i) => {
                        if (el.type === "oid" ||
                            el.type === "small-integer" ||
                            el.type === "integer" ||
                            el.type === "string" ||
                            el.type === "double") {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: el.name, dataType: el.type },
                                el.alias,
                                " (",
                                el.type,
                                ")"));
                        }
                    })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: width <= 625 ? " " : "col-md-4", style: width <= 625 ? styles.smallerWidthQueryContainer : {} },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => getQuery(e, "single"), placeholder: "Seleziona campo" }, currentwhereClausesSet &&
                            currentwhereClausesSet.attributeQueryType === "string"
                            ? _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorString.map((o, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: o.value }, o.name));
                            })
                            : _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorNumber.map((o, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: o.value }, o.name));
                            }))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_common_inputs_commonSecondConstructor__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "col-md-4", textInputHandler: textInputHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, tablesId: tablesSetId, whereClauses: whereClausesSet, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, onmouseLeave: onmouseLeave, dropdowns: dropdownsSet, width: width, queryChanged: queryChanged, parent: parent, queryType: "set" }),
                    (width >= 626 && showDelete) && jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "", style: {} },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "", onClick: deleteTable, icon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, null)))),
                (width <= 625 && showDelete) && jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "", style: {} },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "", onClick: deleteTable, icon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, null)))))) :
            (" ")))));
    }
    return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddSetTable);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/components/Table.tsx":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/components/Table.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var _lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/ResizeDetector */ "./your-extensions/widgets/query-builder/src/runtime/lib/ResizeDetector.tsx");
/* harmony import */ var _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/queryTableValue */ "./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js");
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/styles/styles.scss */ "./your-extensions/widgets/query-builder/src/assets/styles/styles.scss");
/* harmony import */ var _common_inputs_commonSecondConstructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/inputs/commonSecondConstructor */ "./your-extensions/widgets/query-builder/src/runtime/components/common/inputs/commonSecondConstructor.tsx");







function Table(props) {
    const { list, handleThirdQuery, textInputHandler, multiSelectHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, dropdownValueQuery, handleCheckBox, isChecked, counterIsChecked, dropDownToggler, functionCounterIsChecked, checkedToQuery, deleteTable, tablesId, getQueryAttribute, whereClauses, tables, getQuery, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened, autOpen, mouseleave, onmouseLeave, dropdowns, currentTable, queryChanged, parent } = props;
    const currentwhereClauses = whereClauses.find((item) => item.id === `${tablesId}`);
    const styles = {
        smallerWidthOuterContainer: {
            display: "flex",
            flexDirection: "row",
            height: "fit-content",
            alignItems: "center",
            gap: '3%',
            minWidth: '280px',
            marginBottom: 20
        },
        smallerWidthInnerContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            width: "80%",
        },
        smallerWidthQueryContainer: {
            display: "flex",
            flexDirection: "row",
            width: "100%",
        },
        largerWidthOuterContainer: {
            width: "100%"
        },
        largerWidthInnerContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "row",
            gap: "3%",
        }
    };
    if (currentTable.id === tablesId && !currentTable.deleted) {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_3__["default"], { handleWidth: true, handleHeight: true }, ({ width, height }) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "my-1" }, list.fields ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { style: width <= 625 ? styles.smallerWidthOuterContainer : styles.largerWidthOuterContainer },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { style: width <= 625 ? styles.smallerWidthInnerContainer : styles.largerWidthInnerContainer },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { className: width <= 625 ? " " : "col-md-4", onChange: (e) => getQueryAttribute(e, "single"), placeholder: "Seleziona campo" }, list.fields.map((el, i) => {
                        if (el.type === "oid" ||
                            el.type === "small-integer" ||
                            el.type === "integer" ||
                            el.type === "string" ||
                            el.type === "double") {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: el.name, dataType: el.type },
                                el.alias,
                                " (",
                                el.type,
                                ")"));
                        }
                    })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: width <= 625 ? " " : "col-md-4", style: width <= 625 ? styles.smallerWidthQueryContainer : {} },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => getQuery(e, "single"), placeholder: "Seleziona campo" }, currentwhereClauses &&
                            currentwhereClauses.attributeQueryType === "string"
                            ? _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorString.map((o, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                            })
                            : _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorNumber.map((o, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                            }))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_common_inputs_commonSecondConstructor__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "col-md-4", handleThirdQuery: handleThirdQuery, textInputHandler: textInputHandler, multiSelectHandler: multiSelectHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, dropdownValueQuery: dropdownValueQuery, handleCheckBox: handleCheckBox, isChecked: isChecked, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, checkedToQuery: checkedToQuery, getQueryAttribute: getQueryAttribute, whereClauses: whereClauses, tablesId: tablesId, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, mouseleave: mouseleave, onmouseLeave: onmouseLeave, dropdowns: dropdowns, width: width, queryChanged: queryChanged, parent: parent, queryType: "single" }),
                    width >= 626 && jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "", style: {} },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "", onClick: deleteTable, icon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, null)))),
                width <= 625 && jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "", style: {} },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "", onClick: deleteTable, icon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, null)))))) :
            (" ")))));
    }
    return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/components/common/inputs/commonSecondConstructor.tsx":
/*!****************************************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/components/common/inputs/commonSecondConstructor.tsx ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/application/setting */ "./jimu-icons/outlined/application/setting.tsx");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/styles/styles.scss */ "./your-extensions/widgets/query-builder/src/assets/styles/styles.scss");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pagination */ "./your-extensions/widgets/query-builder/src/runtime/components/pagination.tsx");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select */ "./your-extensions/widgets/query-builder/src/runtime/components/common/inputs/select.tsx");






const CommonSecondConstructor = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    const [currentTable, setCurrentTable] = jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.useState({});
    const [onChangingPage, setOnChangingPage] = jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.useState({});
    const numberOfItems = 10;
    const { textInputHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, counterIsChecked, functionCounterIsChecked, tablesId, whereClauses, dropDownToggler, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened: d, autOpen, onmouseLeave, dropdowns, width, queryChanged, parent, queryType } = props;
    const normalizedThirdQuery = [];
    let defaultValue = "=";
    let dropdownValueQuery = "valore";
    let opened = false;
    let checked = 0;
    let au = true;
    let defaultTextValue = " ";
    const currentWhereClause = whereClauses.find((item) => item.id === `${tablesId}`);
    if (currentWhereClause && currentWhereClause.ifInOrNotInQueryValue) {
        currentWhereClause.ifInOrNotInQueryValue.map((el, i) => {
            var _a;
            normalizedThirdQuery.push({
                id: tablesId.toString(),
                label: el.label.toString(),
                value: el.value.toString(),
                listel: (_a = currentWhereClause.checkedList) !== null && _a !== void 0 ? _a : currentWhereClause.checkedListSet,
            });
        });
    }
    if (currentWhereClause && currentWhereClause.queryValue) {
        defaultValue = currentWhereClause.queryValue;
    }
    if (currentWhereClause && currentWhereClause.dropdownValueQuery) {
        dropdownValueQuery = currentWhereClause.dropdownValueQuery;
    }
    if (currentWhereClause && currentWhereClause.isOpen) {
        // opened = whereClauses[tablesId].isOpen;
    }
    const checkedList = currentWhereClause === null || currentWhereClause === void 0 ? void 0 : currentWhereClause.checkedList;
    const checkedListSet = currentWhereClause === null || currentWhereClause === void 0 ? void 0 : currentWhereClause.checkedListSet;
    if (checkedList === null || checkedList === void 0 ? void 0 : checkedList.length) {
        checked = checkedList.length;
    }
    else if (checkedListSet === null || checkedListSet === void 0 ? void 0 : checkedListSet.length) {
        checked = checkedListSet.length;
    }
    const copiednormalizedThirdQuery = [...normalizedThirdQuery];
    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.useEffect(() => {
        var _a;
        if (((_a = currentTable[tablesId]) === null || _a === void 0 ? void 0 : _a.currentNumberOfPage) === 0 &&
            copiednormalizedThirdQuery.length) {
            calculateTotalNumberOfPage();
            onIncrement();
        }
    }, [copiednormalizedThirdQuery]);
    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.useEffect(() => {
        if (queryChanged[tablesId] && parent) {
            setCurrentTable(Object.assign(Object.assign({}, currentTable), { [tablesId]: {
                    "startIndex": 0,
                    "endIndex": 0,
                    "currentNumberOfPage": 0,
                    "totalNumberOfPage": 0
                } }));
            parent === null || parent === void 0 ? void 0 : parent.setState({ queryChanged: Object.assign(Object.assign({}, queryChanged), { [tablesId]: false }) });
        }
    }, [queryChanged]);
    const calculateTotalNumberOfPage = () => {
        if (copiednormalizedThirdQuery.length) {
            const newTotalNumberOfPage = Math.ceil(copiednormalizedThirdQuery.length / numberOfItems);
            let newCurrentTable = currentTable[tablesId];
            if (newCurrentTable) {
                newCurrentTable = Object.assign(Object.assign({}, newCurrentTable), { "totalNumberOfPage": newTotalNumberOfPage });
            }
            else {
                newCurrentTable = { "totalNumberOfPage": newTotalNumberOfPage };
            }
            setCurrentTable(Object.assign(Object.assign({}, currentTable), { [tablesId]: newCurrentTable }));
        }
    };
    const onIncrement = () => {
        var _a, _b, _c, _d, _e;
        const currentNumberOfPage = (_b = (_a = currentTable[tablesId]) === null || _a === void 0 ? void 0 : _a.currentNumberOfPage) !== null && _b !== void 0 ? _b : 0;
        if (currentNumberOfPage < ((_c = currentTable[tablesId]) === null || _c === void 0 ? void 0 : _c.totalNumberOfPage)) {
            const firstIndex = (_e = (_d = currentTable[tablesId]) === null || _d === void 0 ? void 0 : _d.endIndex) !== null && _e !== void 0 ? _e : 0;
            const lastIndex = firstIndex + numberOfItems;
            const newcurrentNumberOfPage = currentNumberOfPage + 1;
            let newCurrentTable = currentTable[tablesId];
            if (newCurrentTable) {
                newCurrentTable = Object.assign(Object.assign({}, newCurrentTable), { "startIndex": firstIndex, "endIndex": lastIndex, "currentNumberOfPage": newcurrentNumberOfPage });
            }
            else {
                newCurrentTable = { "startIndex": firstIndex, "endIndex": lastIndex, "currentNumberOfPage": newcurrentNumberOfPage };
            }
            setCurrentTable(Object.assign(Object.assign({}, currentTable), { [tablesId]: newCurrentTable }));
            setOnChangingPage(Object.assign(Object.assign({}, onChangingPage), { [tablesId]: true }));
        }
    };
    const onDecrement = () => {
        var _a;
        if (((_a = currentTable[tablesId]) === null || _a === void 0 ? void 0 : _a.startIndex) > 0) {
            const startIndex = currentTable[tablesId].startIndex;
            const endIndex = currentTable[tablesId].endIndex;
            const currentNumberOfPage = currentTable[tablesId].currentNumberOfPage;
            const firstIndex = startIndex - numberOfItems;
            const lastIndex = endIndex - numberOfItems;
            const newcurrentNumberOfPage = currentNumberOfPage - 1;
            let newCurrentTable = currentTable[tablesId];
            if (newCurrentTable) {
                newCurrentTable = Object.assign(Object.assign({}, newCurrentTable), { "startIndex": firstIndex, "endIndex": lastIndex, "currentNumberOfPage": newcurrentNumberOfPage });
            }
            else {
                newCurrentTable = { "startIndex": firstIndex, "endIndex": lastIndex, "currentNumberOfPage": newcurrentNumberOfPage };
            }
            setCurrentTable(Object.assign(Object.assign({}, currentTable), { [tablesId]: newCurrentTable }));
            setOnChangingPage(Object.assign(Object.assign({}, onChangingPage), { [tablesId]: true }));
        }
    };
    const startIndex = (_b = (_a = currentTable[tablesId]) === null || _a === void 0 ? void 0 : _a.startIndex) !== null && _b !== void 0 ? _b : 0;
    const endIndex = (_d = (_c = currentTable[tablesId]) === null || _c === void 0 ? void 0 : _c.endIndex) !== null && _d !== void 0 ? _d : 10;
    const queriesWithUnivoco = ["=", "<>", "<=", ">=", "<", ">"];
    const queriesWithMultiselect = ["IN", "NOT_IN"];
    const queriesWithNothing = ["is null", "is not null"];
    const queriesWithTwoInputs = ["included", "is_not_included"];
    const queriesWithSingleInput = ["LIKE%", "%LIKE", "%LIKE%", "NOT LIKE"];
    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.Fragment, null,
        queriesWithUnivoco.includes(defaultValue) &&
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: defaultValue, className: width >= 626 ? "d-flex col-md-4" : " ", style: width >= 626 ? {} : { display: 'flex' } },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_select__WEBPACK_IMPORTED_MODULE_5__["default"], { currentPage: (_f = (_e = currentTable[tablesId]) === null || _e === void 0 ? void 0 : _e.currentNumberOfPage) !== null && _f !== void 0 ? _f : 0, totalNumberOfPages: (_h = (_g = currentTable[tablesId]) === null || _g === void 0 ? void 0 : _g.totalNumberOfPage) !== null && _h !== void 0 ? _h : 0, onDecrement: onDecrement, onIncrement: onIncrement, startIndex: (_k = (_j = currentTable[tablesId]) === null || _j === void 0 ? void 0 : _j.startIndex) !== null && _k !== void 0 ? _k : 0, endIndex: (_m = (_l = currentTable[tablesId]) === null || _l === void 0 ? void 0 : _l.endIndex) !== null && _m !== void 0 ? _m : 0, tablesId: tablesId, dropdowns: dropdowns, openDrop: openDrop, univocoSelectHandler: univocoSelectHandler, data: copiednormalizedThirdQuery, queryType: queryType !== null && queryType !== void 0 ? queryType : "single", onChangingPage: onChangingPage, setOnChangingPage: setOnChangingPage, currentValue: (_o = currentWhereClause === null || currentWhereClause === void 0 ? void 0 : currentWhereClause.value) === null || _o === void 0 ? void 0 : _o.txt })) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, queryType !== null && queryType !== void 0 ? queryType : "single"), onAcceptValue: function noRefCheck() { }, type: "text", className: "w-100", "data-table-id": tablesId, defaultValue: defaultTextValue })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, queryType !== null && queryType !== void 0 ? queryType : "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, queryType !== null && queryType !== void 0 ? queryType : "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, queryType !== null && queryType !== void 0 ? queryType : "single"), "data-table-id": tablesId }, "Univoci"))))),
        queriesWithMultiselect.includes(defaultValue) &&
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: defaultValue, onMouseLeave: () => onmouseLeave(), className: width >= 626 ? "d-flex col-md-4" : " " }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: dropdowns[tablesId], style: { width: "100%" } },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop(tablesId), style: { width: "100%" } },
                    checked,
                    " elementi selezionati"),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, { className: "drop-down-menu-table" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }), (_p = copiednormalizedThirdQuery.slice(startIndex, endIndex)) === null || _p === void 0 ? void 0 :
                    _p.map((el, i) => {
                        if (el) {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesId, className: "d-flex justify-content-start", strategy: "fixed" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesId, name: el.label, value: el.value, checked: el.listel &&
                                            el.listel.filter(function (e) {
                                                return e.checkValue === el.label;
                                            }).length > 0, defaultChecked: el.listel &&
                                            el.listel.filter(function (e) {
                                                return e.checkValue === el.label;
                                            }).length > 0 }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesId, className: "ml-3 mb-0", id: tablesId },
                                        " ",
                                        el.label))));
                        }
                    }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.Fragment, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], { currentPage: `${(_r = (_q = currentTable[tablesId]) === null || _q === void 0 ? void 0 : _q.currentNumberOfPage) !== null && _r !== void 0 ? _r : 0}`, totalNumberOfPage: `${(_s = currentTable[tablesId]) === null || _s === void 0 ? void 0 : _s.totalNumberOfPage}`, ondecrement: onDecrement, onincrement: onIncrement }))))),
        queriesWithNothing.includes(defaultValue) &&
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: defaultValue, className: width > 626 ? "d-flex col-md-4" : " ", style: width >= 626 ? {} : { display: 'flex' } }),
        queriesWithTwoInputs.includes(defaultValue) &&
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: defaultValue, className: width > 626 ? "d-flex col-md-4" : " ", style: width >= 626 ? {} : { display: 'flex' } },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textFirstIncludedHandler(e, queryType !== null && queryType !== void 0 ? queryType : "single"), onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesId, id: "inputs", style: { width: "100%" } }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("span", { className: "col-sm-2 text-center", style: { height: '100%', fontSize: '18px' } }, "e"),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textSecondIncludedHandler(e, queryType !== null && queryType !== void 0 ? queryType : "single"), onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesId, id: "inputs", style: { width: "100%" } })),
        queriesWithSingleInput.includes(defaultValue) &&
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: defaultValue, className: width > 626 ? "d-flex col-md-4" : " ", style: width >= 626 ? {} : { display: 'flex' } },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, queryType !== null && queryType !== void 0 ? queryType : "single"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonSecondConstructor);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/components/common/inputs/select.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/components/common/inputs/select.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/application/check */ "./jimu-icons/outlined/application/check.tsx");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pagination */ "./your-extensions/widgets/query-builder/src/runtime/components/pagination.tsx");
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/styles/styles.scss */ "./your-extensions/widgets/query-builder/src/assets/styles/styles.scss");





const SelectUnivoco = (props) => {
    var _a, _b;
    const [currentTable, setCurrentTable] = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useState({});
    const { tablesId, data, startIndex, endIndex, totalNumberOfPages, currentPage, onIncrement, onDecrement, univocoSelectHandler, dropdowns, openDrop, queryType, onChangingPage, setOnChangingPage, currentValue } = props;
    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.useEffect(() => {
        if (onChangingPage[tablesId]) {
            setCurrentTable(Object.assign(Object.assign({}, currentTable), { [tablesId]: { "selectedIndex": -1, "selectedItem": " " } }));
            setOnChangingPage(Object.assign(Object.assign({}, onChangingPage), { [tablesId]: false }));
        }
    }, [onChangingPage]);
    const getClickedItem = (value, tableId, index) => {
        setCurrentTable(Object.assign(Object.assign({}, currentTable), { [tableId]: { "selectedIndex": index, "selectedItem": value } }));
        const currentTableId = typeof tableId === "number" ? `${tableId}` : tableId;
        const obj = { value, tableId: currentTableId };
        univocoSelectHandler(obj, queryType);
        openDrop(tablesId);
    };
    const unrequiredSelectedValue = ['', " ", ' '];
    let selectedItem = currentValue !== null && currentValue !== void 0 ? currentValue : " ";
    const currentTableSelectedValue = (_a = currentTable[tablesId]) === null || _a === void 0 ? void 0 : _a.selectedItem;
    if (currentTableSelectedValue && !unrequiredSelectedValue.includes(currentTableSelectedValue)) {
        selectedItem = currentTableSelectedValue;
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Dropdown, { activeIcon: true, isOpen: dropdowns[tablesId], style: { width: "100%" } },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownButton, { onClick: () => openDrop(tablesId), style: { width: "100%" } }, selectedItem),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, { className: "drop-down-menu-table" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { divider: true }), (_b = data === null || data === void 0 ? void 0 : data.slice(startIndex, endIndex)) === null || _b === void 0 ? void 0 :
            _b.map((el, i) => {
                var _a;
                if (el) {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { onClick: (e) => getClickedItem(el.value, tablesId, i) },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.DropdownItem, { value: i, "data-table-id": tablesId, className: "d-flex justify-content-start", strategy: "fixed" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "flex-end" } }, ((_a = currentTable[tablesId]) === null || _a === void 0 ? void 0 : _a.selectedIndex) === i && jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_application_check__WEBPACK_IMPORTED_MODULE_2__.CheckOutlined, null)),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", { htmlFor: tablesId, className: "ml-3 mb-0", id: tablesId },
                                " ",
                                el.label))));
                }
            }),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], { currentPage: `${currentPage}`, totalNumberOfPage: `${totalNumberOfPages}`, ondecrement: onDecrement, onincrement: onIncrement })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectUnivoco);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/components/pagination.tsx":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/components/pagination.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_directional_left__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/directional/left */ "./jimu-icons/outlined/directional/left.tsx");
/* harmony import */ var jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/directional/right */ "./jimu-icons/outlined/directional/right.tsx");



const PaginationCompoenent = (props) => {
    const { totalNumberOfPage, currentPage, ondecrement, onincrement } = props;
    const styles = {
        outerContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "3%",
            height: 50,
            backgroundColor: "whitesmoke",
            marginBottom: -10
        },
        iconContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "25%"
        },
        innerIconContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "rgb(0,94,202)",
            alignItems: "center",
            height: 30,
            width: "80%"
        },
        textContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContents: "center",
            alignItems: "center",
            width: "50%",
        },
        innerTextContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: 30,
            fontSize: 16
        }
    };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: styles.outerContainer },
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: styles.iconContainer },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: styles.innerIconContainer, onClick: ondecrement },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_left__WEBPACK_IMPORTED_MODULE_1__.LeftOutlined, { color: 'white', size: 25 }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: styles.textContainer },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: styles.innerTextContainer },
                currentPage,
                "/",
                totalNumberOfPage)),
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: styles.iconContainer, onClick: onincrement },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: styles.innerIconContainer },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_icons_outlined_directional_right__WEBPACK_IMPORTED_MODULE_2__.RightOutlined, { color: 'white', size: 25 })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationCompoenent);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/lib/ResizeDetector.tsx":
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/lib/ResizeDetector.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./your-extensions/widgets/query-builder/src/runtime/lib/utils.ts");
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



class ResizeDetector extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
    constructor(props) {
        super(props);
        this.cancelHandler = () => {
            if (this.resizeHandler && this.resizeHandler.cancel) {
                // cancel debounced handler
                this.resizeHandler.cancel();
                this.resizeHandler = null;
            }
        };
        this.attachObserver = () => {
            const { targetRef, observerOptions } = this.props;
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isSSR)()) {
                return;
            }
            if (targetRef && targetRef.current) {
                this.targetRef.current = targetRef.current;
            }
            const element = this.getElement();
            if (!element) {
                // can't find element to observe
                return;
            }
            if (this.observableElement && this.observableElement === element) {
                // element is already observed
                return;
            }
            this.observableElement = element;
            this.resizeObserver.observe(element, observerOptions);
        };
        this.getElement = () => {
            const { querySelector, targetDomEl } = this.props;
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isSSR)())
                return null;
            // in case we pass a querySelector
            if (querySelector)
                return document.querySelector(querySelector);
            // in case we pass a DOM element
            if (targetDomEl && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isDOMElement)(targetDomEl))
                return targetDomEl;
            // in case we pass a React ref using React.createRef()
            if (this.targetRef && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isDOMElement)(this.targetRef.current))
                return this.targetRef.current;
            // the worse case when we don't receive any information from the parent and the library doesn't add any wrappers
            // we have to use a deprecated `findDOMNode` method in order to find a DOM element to attach to
            const currentElement = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode)(this);
            if (!currentElement)
                return null;
            const renderType = this.getRenderType();
            switch (renderType) {
                case 'renderProp':
                    return currentElement;
                case 'childFunction':
                    return currentElement;
                case 'child':
                    return currentElement;
                case 'childArray':
                    return currentElement;
                default:
                    return currentElement.parentElement;
            }
        };
        this.createResizeHandler = (entries) => {
            const { handleWidth = true, handleHeight = true, onResize } = this.props;
            if (!handleWidth && !handleHeight)
                return;
            const notifyResize = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createNotifier)(onResize, this.setState.bind(this), handleWidth, handleHeight);
            entries.forEach(entry => {
                const { width, height } = (entry && entry.contentRect) || {};
                const shouldSetSize = !this.skipOnMount && !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isSSR)();
                if (shouldSetSize) {
                    notifyResize({ width, height });
                }
                this.skipOnMount = false;
            });
        };
        this.getRenderType = () => {
            const { render, children } = this.props;
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isFunction)(render)) {
                // DEPRECATED. Use `Child Function Pattern` instead
                return 'renderProp';
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isFunction)(children)) {
                return 'childFunction';
            }
            if ((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children)) {
                return 'child';
            }
            if (Array.isArray(children)) {
                // DEPRECATED. Wrap children with a single parent
                return 'childArray';
            }
            // DEPRECATED. Use `Child Function Pattern` instead
            return 'parent';
        };
        const { skipOnMount, refreshMode, refreshRate = 1000, refreshOptions } = props;
        this.state = {
            width: undefined,
            height: undefined
        };
        this.skipOnMount = skipOnMount;
        this.targetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
        this.observableElement = null;
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isSSR)()) {
            return;
        }
        this.resizeHandler = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.patchResizeHandler)(this.createResizeHandler, refreshMode, refreshRate, refreshOptions);
        this.resizeObserver = new window.ResizeObserver(this.resizeHandler);
    }
    componentDidMount() {
        this.attachObserver();
    }
    componentDidUpdate() {
        this.attachObserver();
    }
    componentWillUnmount() {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isSSR)()) {
            return;
        }
        this.observableElement = null;
        this.resizeObserver.disconnect();
        this.cancelHandler();
    }
    render() {
        const { render, children, nodeType: WrapperTag = 'div' } = this.props;
        const { width, height } = this.state;
        const childProps = { width, height, targetRef: this.targetRef };
        const renderType = this.getRenderType();
        switch (renderType) {
            case 'renderProp':
                return render === null || render === void 0 ? void 0 : render(childProps);
            case 'childFunction': {
                const childFunction = children;
                return childFunction === null || childFunction === void 0 ? void 0 : childFunction(childProps);
            }
            case 'child': {
                // @TODO bug prone logic
                const child = children;
                if (child.type && typeof child.type === 'string') {
                    // child is a native DOM elements such as div, span etc
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { targetRef } = childProps, nativeProps = __rest(childProps, ["targetRef"]);
                    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, nativeProps);
                }
                // class or functional component otherwise
                return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, childProps);
            }
            case 'childArray': {
                const childArray = children;
                return childArray.map(el => !!el && (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(el, childProps));
            }
            default:
                return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(WrapperTag, null);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResizeDetector);


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/lib/utils.ts":
/*!************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/lib/utils.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotifier": () => (/* binding */ createNotifier),
/* harmony export */   "isDOMElement": () => (/* binding */ isDOMElement),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isSSR": () => (/* binding */ isSSR),
/* harmony export */   "patchResizeHandler": () => (/* binding */ patchResizeHandler)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);


const patchResizeHandler = (resizeCallback, refreshMode, refreshRate, refreshOptions) => {
    switch (refreshMode) {
        case 'debounce':
            return lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(resizeCallback, refreshRate, refreshOptions);
        case 'throttle':
            return lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(resizeCallback, refreshRate, refreshOptions);
        default:
            return resizeCallback;
    }
};
const isFunction = (fn) => typeof fn === 'function';
const isSSR = () => typeof window === 'undefined';
const isDOMElement = (element) => element instanceof Element || element instanceof HTMLDocument;
const createNotifier = (onResize, setSize, handleWidth, handleHeight) => ({ width, height }) => {
    setSize(prev => {
        if (prev.width === width && prev.height === height) {
            // skip if dimensions haven't changed
            return prev;
        }
        if ((prev.width === width && !handleHeight) || (prev.height === height && !handleWidth)) {
            // process `handleHeight/handleWidth` props
            return prev;
        }
        onResize === null || onResize === void 0 ? void 0 : onResize(width, height);
        return { width, height };
    });
};


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/translations/default.ts":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/translations/default.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**

 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Costruttore Query',
    selectGeometry: "Selezionare la geometria",
    layers: "Strati",
    zoomA: "Zoom A",
    exportCsv: "Esportazione in file csv",
    exportJson: "Esportazione in una raccolta di funzioni",
    statistics: "Statistiche",
    createLayer: "Creare il livello",
    attributeTable: "Vista nella tabella degli attributi",
    delete: "Cancellare",
    countOfItems: "Conteggio degli articoli",
    sumOfValues: "Somma dei valori",
    minimum: "Minimo",
    maximum: "Massimo",
    average: "Media",
    selectByPoint: "Selezione per punto",
    selectionByLine: "Selezione per linea",
    selectionByPolygon: "Selezione per poligono",
    selectionByRectangular: "Selezione per rettangolo",
    selectionByCircle: "Selezione per cerchio",
    refresh: "Aggiornare",
    ok: "OK",
    cancel: "Annullamento",
    fields: "Campi",
    selectionAction: "Selezione Azione",
    mapLoading: "In attesa del caricamento della mappa...",
    noSelectedItem: "Non è stata selezionata alcuna voce",
    noItemSelected: "Non è stato trovato alcun attributo dopo l'interrogazione"
});


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryConstructorNumber": () => (/* binding */ queryConstructorNumber),
/* harmony export */   "queryConstructorString": () => (/* binding */ queryConstructorString)
/* harmony export */ });
const  queryConstructorNumber = [
    { name: 'è', value: '=' },
    { name: 'non è', value: '<>' },
    { name: 'è uno di', value: 'IN' }, // OBJECTID IN (1,2,3)
    { name: 'non è nessuno di', value: 'NOT_IN' }, //   OBJECTID NOT_IN (1,2,3)
    { name: 'è almeno', value: '<=' },
    { name: 'è al massimo', value: '>=' },
    { name: 'è minore di', value: '<' },
    { name: 'è maggiore di', value: '>' },
    { name: 'è vuoto', value: 'is null' },
    { name: 'non è vuoto', value: 'is not null' },
    { name: 'è compreso tra', value: 'included' }, // OBJECTID < 2 AND OBJECTID > 4
    { name: 'non è compreso tra', value: 'is_not_included' } //da trovare
];
const   queryConstructorString = [
    { name: 'è', value: '=' },
    { name: 'non è', value: '<>' },
    { name: 'è uno di', value: 'IN' },
    { name: 'non è nessuno di', value: 'NOT_IN' },
    { name: 'inizia con', value: 'LIKE%' },
    { name: 'termina con', value: '%LIKE' },
    { name: 'contiene', value: '%LIKE%' },
    { name: 'non contiene', value: 'NOT LIKE' },
    { name: 'è vuoto', value: 'is null' },
    { name: 'non è vuoto', value: 'is not null' }
];


/***/ }),

/***/ "esri/geometry/Polygon":
/*!****************************************!*\
  !*** external "esri/geometry/Polygon" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__;

/***/ }),

/***/ "esri/geometry/geometryEngine":
/*!***********************************************!*\
  !*** external "esri/geometry/geometryEngine" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__;

/***/ }),

/***/ "esri/layers/GraphicsLayer":
/*!********************************************!*\
  !*** external "esri/layers/GraphicsLayer" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__;

/***/ }),

/***/ "esri/rest/support/Query":
/*!******************************************!*\
  !*** external "esri/rest/support/Query" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__;

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

/***/ "react":
/*!**********************************!*\
  !*** external "jimu-core/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!**************************************!*\
  !*** external "jimu-core/react-dom" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/*!**********************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/widget.tsx ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/plus */ "./jimu-icons/outlined/editor/plus.tsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./your-extensions/widgets/query-builder/src/style.css");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/query-builder/src/runtime/translations/default.ts");
/* harmony import */ var esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/rest/support/Query */ "esri/rest/support/Query");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Table */ "./your-extensions/widgets/query-builder/src/runtime/components/Table.tsx");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../connector */ "./your-extensions/widgets/query-builder/src/connector.ts");
/* harmony import */ var esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! esri/geometry/Polygon */ "esri/geometry/Polygon");
/* harmony import */ var _lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/ResizeDetector */ "./your-extensions/widgets/query-builder/src/runtime/lib/ResizeDetector.tsx");
/* harmony import */ var _connector_attribute_table_connector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../connector/attribute_table_connector */ "./your-extensions/widgets/query-builder/src/connector/attribute_table_connector.ts");
/* harmony import */ var esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! esri/geometry/geometryEngine */ "esri/geometry/geometryEngine");
/* harmony import */ var _components_AddSetTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/AddSetTable */ "./your-extensions/widgets/query-builder/src/runtime/components/AddSetTable.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/** @jsx jsx */
















class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.graphicLayerFound = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_8__["default"]({ listMode: "hide", visible: true });
        this.graphicLayerSelected = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_8__["default"]({ listMode: "hide", visible: true });
        this.attributeTableConnector = null;
        this.queryArray = [];
        this.outfields = [];
        this.currentLayerView = null;
        this.setQueryArray = [];
        this.setOutFields = [];
        this.setQueryString = null;
        this.init = () => {
            this.state = {
                jimuMapView: null,
                layerContents: [],
                checkedLayer_: [],
                resultLayerList: [],
                isLayerSelected: false,
                resultsLayerSelected: [],
                currentTargetText: null,
                geometry: null,
                typeSelected: null,
                listServices: [],
                currentFirstQuery: "",
                currentFirstQueryType: null,
                dropdownValueQuery: "valore",
                firstTextIncludedHandler: "0",
                secondTextIncludedHandler: "0",
                tables: [],
                isChecked: false,
                counterIsChecked: [],
                checkedToQuery: [],
                tableCounter: 0,
                tableCounterSet: 0,
                whereClauses: [],
                tablesSetId: null,
                whereClauseSet: [],
                tablesSet: [],
                tablesId: null,
                isOpen: false,
                AndOr: "AND",
                AndOrSet: "AND",
                opened: false,
                autOpen: true,
                mouseleave: false,
                dropDowns: {},
                dropDownsSet: {},
                highlightIds: [],
                selectedField: null,
                otherQueriesValue: {},
                dropId: null,
                dropIdSet: null,
                higlightSelected: [],
                itemNotFound: null,
                currentSelectedId: " ",
                isAttributeTableClosed: false,
                widgetStateClosedChecked: false,
                widgetStateOpenedChecked: false,
                showAddSelect: true,
                SetBlock: [],
                selectedId: null,
                width: 0,
                height: 0,
                queryChanged: {}
            };
        };
        this.nls = (id) => {
            return this.props.intl
                ? this.props.intl.formatMessage({
                    id: id,
                    defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_6__["default"][id],
                })
                : id;
        };
        this.setQueryConstructor = (queryRequest, firstQuery, secondQueryTarget) => {
            switch (queryRequest) {
                case "LIKE%":
                    return `${firstQuery} LIKE '${secondQueryTarget}%'`;
                case "%LIKE":
                    return `${firstQuery} LIKE '%${secondQueryTarget}'`;
                case "%LIKE%":
                    return `${firstQuery} LIKE '%${secondQueryTarget}%'`;
                case "NOT LIKE":
                    return `${firstQuery} NOT LIKE '%${secondQueryTarget}%'`;
                case "is null":
                    return `${firstQuery} is null`;
                case "is not null":
                    return `${firstQuery} is not null`;
                case "IN":
                    if (this.containsAnyLetters(secondQueryTarget)) {
                        return `${firstQuery} IN (${"'" + secondQueryTarget.join("', '") + "'"})`;
                    }
                    else {
                        if (this.checkParenthesis(secondQueryTarget.join(","))) {
                            const stringFiedValue = this.loopToGetString(secondQueryTarget);
                            return `${firstQuery} IN (${stringFiedValue})`;
                        }
                        else {
                            return `${firstQuery} IN (${secondQueryTarget.join(",")})`;
                        }
                    }
                case "NOT_IN":
                    if (this.containsAnyLetters(secondQueryTarget)) {
                        return `NOT ${firstQuery} IN (${"'" + secondQueryTarget.join("', '") + "'"})`;
                    }
                    else {
                        if (this.checkParenthesis(secondQueryTarget.join(","))) {
                            const stringFiedValue = this.loopToGetString(secondQueryTarget);
                            return `NOT  ${firstQuery} IN (${stringFiedValue})`;
                        }
                        else {
                            return `NOT  ${firstQuery} IN (${secondQueryTarget.join(",")})`;
                        }
                    }
                case "included":
                    return `(${firstQuery} > ${secondQueryTarget.firstTxt} AND ${firstQuery} < ${secondQueryTarget.secondTxt})`;
                case "is_not_included":
                    return `(${firstQuery} < ${secondQueryTarget.firstTxt} OR ${firstQuery} > ${secondQueryTarget.secondTxt})`;
                default:
                    if (this.containsAnyLetters(secondQueryTarget)) {
                        return `${firstQuery} ${queryRequest} '${secondQueryTarget}'`;
                    }
                    else {
                        let queryString = `${firstQuery} ${queryRequest} ${secondQueryTarget}`;
                        const brackets = ["(", ")", "[", "]", "{", "}"];
                        if (brackets.includes(secondQueryTarget.charAt(0))) {
                            const stringFiedValue = JSON.stringify(secondQueryTarget).replace(/"/g, `'`);
                            queryString = `${firstQuery} ${queryRequest} (${stringFiedValue})`;
                        }
                        else {
                            queryString = `${firstQuery} ${queryRequest} '${secondQueryTarget}'`;
                        }
                        return queryString;
                    }
            }
        };
        this.addTable = () => {
            const currentId = this.state.tableCounter;
            this.setState({
                tables: [
                    ...this.state.tables,
                    { id: this.state.tableCounter, deleted: false },
                ],
                tableCounter: this.state.tableCounter + 1,
                dropDowns: Object.assign(Object.assign({}, this.state.dropDowns), { [currentId]: false }),
            });
            const tableLength = this.state.tables
                .map((el, idx) => (el.deleted == false ? idx : ""))
                .filter(String).length;
            const tablesSetLength = this.state.SetBlock.length;
            if (tableLength > 0) {
                this.setState({ showAddSelect: false });
            }
            if (tablesSetLength > 0) {
                this.setState({ showAddSelect: false });
            }
        };
        this.addTwoTable = (blockId) => {
            let newStateBlock = [...this.state.SetBlock];
            const index = newStateBlock.findIndex((item) => item.blockId === blockId);
            if (index !== -1) {
                const currentBlock = newStateBlock[index];
                const currentId = currentBlock["tableCounterSet"];
                currentBlock["tablesSet"] = [
                    ...currentBlock["tablesSet"],
                    { id: currentId, deleted: false },
                ];
                currentBlock["dropDownsSet"] = Object.assign(Object.assign({}, currentBlock["dropDownsSet"]), { [currentId]: false });
                currentBlock["tableCounterSet"] = currentBlock["tableCounterSet"] + 1;
                newStateBlock[index] = currentBlock;
            }
            if (this.state.tables.length > 0)
                this.setState({ showAddSelect: false });
            this.setState({ SetBlock: newStateBlock });
        };
        this.addBlock = () => {
            var _a;
            let idOne = (_a = this.state.SetBlock.tableCounterSet) !== null && _a !== void 0 ? _a : 0;
            let idTwo = idOne + 1;
            const currentId = idOne;
            const nextCurrentId = idTwo;
            let newBlock = [...this.state.SetBlock];
            newBlock.push({
                blockId: this.state.SetBlock.length,
                [`${this.state.SetBlock.length}`]: [],
                tablesSet: [
                    { id: idOne, deleted: false },
                    { id: idTwo, deleted: false },
                ],
                tableCounterSet: this.state.tableCounterSet + 2,
                dropDownsSet: Object.assign(Object.assign({}, this.state.dropDownsSet), { [`${currentId}-${this.state.SetBlock.length}`]: false, [`${nextCurrentId}-${this.state.SetBlock.length}`]: false }),
                AndOrSet: this.state.AndOrSet,
            });
            this.setState({
                SetBlock: newBlock,
                dropDownsSet: Object.assign(Object.assign({}, this.state.dropDownsSet), { [`${currentId}-${this.state.SetBlock.length}`]: false, [`${nextCurrentId}-${this.state.SetBlock.length}`]: false }),
            });
            // if(this.state.tables.length > 0)this.setState({showAddSelect:false});
            const tableLength = this.state.tables
                .map((el, idx) => (el.deleted == false ? idx : ""))
                .filter(String).length;
            const tablesSetLength = this.state.SetBlock.length;
            if (tableLength > 0) {
                this.setState({ showAddSelect: false });
            }
        };
        this.deleteTable = (id) => {
            let copiedTable = [...this.state.tables];
            copiedTable = copiedTable.map((el) => {
                if (el.id === id)
                    el.deleted = true;
                return el;
            });
            const newTables = copiedTable;
            this.setState({ tableCounter: this.state.tableCounter - 1 });
            const copiedWhereClauses = [...this.state.whereClauses];
            const deletedWhereClauses = copiedWhereClauses.filter((el) => el.id !== id.toString());
            this.setState({
                tables: newTables,
                whereClauses: deletedWhereClauses,
                tableCounter: this.state.tableCounter - 1,
                selectedId: id,
            });
            if (this.state.tables.length === 0) {
                this.setState({
                    whereClauses: [],
                });
            }
            const tableLength = this.state.tables
                .map((el, idx) => (el.deleted == false ? idx : ""))
                .filter(String).length;
            const tablesSetLength = this.state.SetBlock.length;
            if (tableLength == 2 && tablesSetLength == 0) {
                this.setState({ showAddSelect: false });
            }
            if (tableLength == 0 && tablesSetLength > 0) {
                this.setState({ showAddSelect: true });
            }
            if (tableLength == 1 && tablesSetLength == 0) {
                this.setState({ showAddSelect: true });
            }
        };
        this.deleteBlock = (blockId) => {
            const copiedBlock = [...this.state.SetBlock];
            const copiedWhereclauseSet = [...this.state.whereClauseSet];
            const index = copiedBlock.findIndex((item) => item.blockId === blockId);
            if (index !== -1) {
                copiedBlock.splice(index, 1);
                this.setState({ SetBlock: copiedBlock });
            }
            if (copiedWhereclauseSet === null || copiedWhereclauseSet === void 0 ? void 0 : copiedWhereclauseSet.length) {
                copiedWhereclauseSet.filter((item) => item.id.split("-")[1] === blockId);
                this.setState({ whereClauseSet: copiedWhereclauseSet });
            }
            const tableLength = this.state.tables
                .map((el, idx) => (el.deleted == false ? idx : ""))
                .filter(String).length;
            if (tableLength == 1 && copiedBlock.length == 0) {
                this.setState({ showAddSelect: true });
            }
        };
        this.deleteBlockTable = (tableBlockId, blockId) => {
            const tableId = tableBlockId.split("-")[0];
            const copiedBlock = [...this.state.SetBlock];
            const copiedWhereclauseSet = [...this.state.whereClauseSet];
            const currentBlocIndex = copiedBlock.findIndex((block) => `${block.blockId}` === blockId);
            let currentBlock;
            if (currentBlocIndex !== -1)
                currentBlock = copiedBlock[currentBlocIndex];
            if (currentBlock) {
                const currentWhereClauseSet = currentBlock[blockId];
                const currentTableSets = currentBlock["tablesSet"];
                if (currentWhereClauseSet === null || currentWhereClauseSet === void 0 ? void 0 : currentWhereClauseSet.length) {
                    const copiedCurrentWhereClauseSet = [...currentWhereClauseSet];
                    const whereClauseSetIndex = copiedCurrentWhereClauseSet.findIndex((item) => {
                        if (item.id === tableBlockId) {
                            return item;
                        }
                    });
                    if (whereClauseSetIndex !== -1) {
                        copiedCurrentWhereClauseSet.splice(whereClauseSetIndex, 1);
                        currentBlock[blockId] = copiedCurrentWhereClauseSet;
                    }
                }
                if (currentTableSets === null || currentTableSets === void 0 ? void 0 : currentTableSets.length) {
                    const copiedTableSets = [...currentTableSets];
                    const tableSetIndex = copiedTableSets.findIndex((item) => `${item.id}` === tableId);
                    if (tableSetIndex !== -1) {
                        copiedTableSets[tableSetIndex]["deleted"] = true;
                        // copiedTableSets.splice(tableSetIndex,1);
                        currentBlock["tablesSet"] = copiedTableSets;
                    }
                }
                copiedBlock[currentBlocIndex] = currentBlock;
                this.setState({ SetBlock: copiedBlock });
            }
            if (copiedWhereclauseSet === null || copiedWhereclauseSet === void 0 ? void 0 : copiedWhereclauseSet.length) {
                const index = copiedWhereclauseSet.findIndex((item) => {
                    if (item.id === tableBlockId) {
                        return item;
                    }
                });
                if (index !== -1) {
                    copiedWhereclauseSet.splice(index, 1);
                    this.setState({ whereClauseSet: copiedWhereclauseSet });
                }
            }
        };
        this.deleteBlockAll = (blockData) => { };
        this.textInputHandler = (e, queryType = "single") => {
            let txt = e.target.value.trim();
            let currentTableId = e.target.attributes[0].value;
            this.queryTextConstructor(txt, currentTableId, queryType);
        };
        this.textFirstIncludedHandler = (e, queryType = "single") => {
            let txt = e.target.value.trim();
            let currentTableId = e.target.attributes[0].value;
            let input = "first";
            this.queryTextIncludedConstructor(txt, currentTableId, input, queryType);
        };
        this.textSecondIncludedHandler = (e, queryType = "single") => {
            let txt = e.target.value.trim();
            let currentTableId = e.target.attributes[0].value;
            let input = "second";
            this.queryTextIncludedConstructor(txt, currentTableId, input, queryType);
        };
        this.univocoSelectHandler = (currentTable, queryType = "single") => {
            let txt = currentTable.value.trim();
            let currentTableId = currentTable.tableId;
            this.queryTextConstructor(txt, currentTableId, queryType);
        };
        this.containsAnyLetters = (str) => /[a-zA-Z]/.test(str);
        this.queryTextConstructor = (txt, currentTableId, queryType) => {
            let queryIndex;
            let newWhereSetClause;
            const keyType = queryType === "single" ? "whereClauses" : "whereClauseSet";
            if (this.state[keyType].length) {
                queryIndex = this.state[keyType]
                    .map((obj) => obj.id)
                    .indexOf(currentTableId);
                if (queryIndex !== -1) {
                    const updateState = this.state[keyType].map((obj) => {
                        if (obj.id === currentTableId) {
                            obj = Object.assign(Object.assign({}, obj), { value: { txt: txt } });
                            let filteredWhereClauses = this.state[keyType].filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            newWhereSetClause = filteredWhereClauses;
                            return this.setState({ [keyType]: filteredWhereClauses });
                        }
                        return { obj };
                    });
                }
                if (newWhereSetClause === null || newWhereSetClause === void 0 ? void 0 : newWhereSetClause.length) {
                    const currentNewWhereSetClause = newWhereSetClause.find((item) => item.id === currentTableId);
                    this.addCurrentWherClauseBlock(currentTableId, currentNewWhereSetClause);
                }
            }
        };
        this.queryTextIncludedConstructor = (txt, currentTableId, input, queryType) => {
            let queryIndex;
            let newWhereSetClause;
            const keyType = queryType === "single" ? "whereClauses" : "whereClauseSet";
            if (this.state[keyType].length) {
                queryIndex = this.state[keyType]
                    .map((obj) => obj.id)
                    .indexOf(currentTableId);
                if (queryIndex !== -1) {
                    const updateState = this.state[keyType].map((obj) => {
                        if (obj.id === currentTableId) {
                            input === "first"
                                ? (obj = Object.assign(Object.assign({}, obj), { firstTxt: { value: txt } }))
                                : (obj = Object.assign(Object.assign({}, obj), { secondTxt: { value: txt } }));
                            let filteredWhereClauses = this.state[keyType].filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            newWhereSetClause = filteredWhereClauses;
                            return this.setState({ [keyType]: filteredWhereClauses });
                        }
                        return { obj };
                    });
                }
                if (newWhereSetClause === null || newWhereSetClause === void 0 ? void 0 : newWhereSetClause.length) {
                    const currentNewWhereSetClause = newWhereSetClause.find((item) => item.id === currentTableId);
                    this.addCurrentWherClauseBlock(currentTableId, currentNewWhereSetClause);
                }
            }
        };
        this.dropdownItemClick = (e, type = "single") => {
            let clickedQueryTableId = e.currentTarget.attributes[2].value;
            let clickedValue = e.currentTarget.value;
            let currentClickedQueryAttribute;
            let newWhereSetClause;
            let currentNewWhereSetClause;
            const keytype = type === "single" ? "whereClauses" : "whereClauseSet";
            let queryIndex;
            queryIndex = this.state[keytype]
                .map((obj) => obj.id)
                .indexOf(clickedQueryTableId);
            if (queryIndex !== -1) {
                const updateState = this.state[keytype].map((obj) => {
                    if (obj.id === clickedQueryTableId) {
                        obj = Object.assign(Object.assign({}, obj), { dropdownValueQuery: clickedValue });
                        let filteredWhereClauses = this.state[keytype].filter((a) => a.id !== obj.id);
                        filteredWhereClauses.push(obj);
                        filteredWhereClauses.sort(function (a, b) {
                            return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                        });
                        currentNewWhereSetClause = obj;
                        // newWhereSetClause = filteredWhereClauses
                        return this.setState({ [keytype]: filteredWhereClauses });
                    }
                    return { obj };
                });
            }
            if (e.currentTarget.value === "univoco") {
                if (queryIndex !== -1) {
                    const updateState = this.state[keytype].map((obj) => {
                        if (obj.id === clickedQueryTableId) {
                            currentClickedQueryAttribute = obj.attributeQuery;
                            if (this.state.jimuMapView) {
                                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                                    if (f.title === this.state.currentTargetText) {
                                        this.state.jimuMapView.view
                                            .whenLayerView(f)
                                            .then((layerView) => {
                                            const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_7__["default"]();
                                            query.where = `${currentClickedQueryAttribute} is not null`;
                                            query.outFields = [`${currentClickedQueryAttribute}`];
                                            layerView.filter = { where: query.where };
                                            const results = f.queryFeatures(query);
                                            results.then((result) => {
                                                const detailThirdQuery = [];
                                                result.features.forEach((el) => {
                                                    detailThirdQuery.push({
                                                        value: Object.values(el.attributes),
                                                        label: Object.values(el.attributes),
                                                    });
                                                });
                                                if (queryIndex !== -1) {
                                                    if (typeof detailThirdQuery[0].value[0] !== "number") {
                                                        detailThirdQuery.sort((a, b) => a.label < b.label ? -1 : a.label > b.label ? 1 : 0);
                                                    }
                                                    else {
                                                        detailThirdQuery.sort((a, b) => a.value - b.value < 0 ? -1 : a.value === b.value ? 0 : 1);
                                                    }
                                                    const updateState = this.state[keytype].map((obj) => {
                                                        if (obj.id === clickedQueryTableId) {
                                                            obj = Object.assign(Object.assign({}, obj), { ifInOrNotInQueryValue: detailThirdQuery, dropdownValueQuery: clickedValue });
                                                            currentNewWhereSetClause = obj;
                                                            let filteredWhereClauses = this.state[keytype].filter((a) => a.id !== obj.id);
                                                            filteredWhereClauses.push(obj);
                                                            filteredWhereClauses.sort(function (a, b) {
                                                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                                            });
                                                            // newWhereSetClause = filteredWhereClauses
                                                            return this.setState({
                                                                [keytype]: filteredWhereClauses,
                                                            });
                                                        }
                                                        return { obj };
                                                    });
                                                }
                                            });
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            }
            this.setState({ dropdownValueQuery: e.target.value }, () => { });
            if (keytype === "whereClauseSet") {
                if (currentNewWhereSetClause)
                    this.addCurrentWherClauseBlock(clickedQueryTableId, currentNewWhereSetClause);
            }
        };
        this.dropDown = (id) => {
            this.setState({ autOpen: true });
            let queryIndex;
            queryIndex = this.state.whereClauses
                .map((obj) => obj.id)
                .indexOf(id.toString());
            if (queryIndex !== -1) {
                const updateState = this.state.whereClauses.map((obj) => {
                    if (obj.id === queryIndex.toString()) {
                        if (!obj.isOpen) {
                            obj = Object.assign(Object.assign({}, obj), { isOpen: true });
                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauses: filteredWhereClauses,
                            });
                        }
                        else {
                            obj = Object.assign(Object.assign({}, obj), { isOpen: false });
                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauses: filteredWhereClauses,
                            });
                        }
                    }
                    return { obj };
                });
            }
        };
        this.dropDownSet = (id) => {
            this.setState({ autOpen: true });
            let queryIndex;
            queryIndex = this.state.whereClauseSet
                .map((obj) => obj.id)
                .indexOf(id.toString());
            if (queryIndex !== -1) {
                const updateState = this.state.whereClauseSet.map((obj) => {
                    if (obj.id === queryIndex.toString()) {
                        if (!obj.isOpen) {
                            obj = Object.assign(Object.assign({}, obj), { isOpen: true });
                            let filteredWhereClauseSet = this.state.whereClauseSet.filter((a) => a.id !== obj.id);
                            Set.push(obj);
                            filteredWhereClauseSet.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauseSet: filteredWhereClauseSet,
                            });
                        }
                        else {
                            obj = Object.assign(Object.assign({}, obj), { isOpen: false });
                            let filteredWhereClauseSet = this.state.whereClauseSet.filter((a) => a.id !== obj.id);
                            filteredWhereClauseSet.push(obj);
                            filteredWhereClauseSet.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            return this.setState({
                                whereClauseSet: filteredWhereClauseSet,
                            });
                        }
                    }
                    return { obj };
                });
            }
        };
        this.handleCheckBox = (event) => {
            this.setState({
                isChecked: event.target.checked,
            });
        };
        this.onChangeCheckBox = (event) => {
            let currentId = event.target.attributes.id.value;
            let objectId = event.target.attributes.value.value;
            let queryIndex;
            if (event.target.checked) {
                queryIndex = this.state.whereClauses
                    .map((obj) => obj.id)
                    .indexOf(currentId);
                if (queryIndex !== -1) {
                    this.state.whereClauses.map((obj) => {
                        if (obj.id === queryIndex.toString()) {
                            if (!obj.checkedList) {
                                obj = Object.assign(Object.assign({}, obj), { checkedList: [
                                        {
                                            checkValue: event.target.attributes.name.value,
                                            isChecked: true,
                                        },
                                    ] });
                                let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                                filteredWhereClauses.push(obj);
                                this.setState({
                                    whereClauses: filteredWhereClauses,
                                }, () => {
                                    this.state.whereClauses.sort(function (a, b) {
                                        return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                    });
                                    // Remove duplicate entries from the whereClauses array
                                    this.setState({
                                        whereClauses: Array.from(new Set(this.state.whereClauses)),
                                    });
                                });
                            }
                            else {
                                const ifAlreadyCheck = obj.checkedList
                                    .map((obj) => obj.checkValue)
                                    .indexOf(event.target.attributes.name.value);
                                if (ifAlreadyCheck == -1) {
                                    obj = Object.assign(Object.assign({}, obj), { checkedList: [
                                            ...obj.checkedList,
                                            {
                                                checkValue: event.target.attributes.name.value,
                                                isChecked: true,
                                            },
                                        ] });
                                    // Find the index of the obj object in the whereClauses array
                                    const index = this.state.whereClauses.findIndex((a) => a.id === obj.id);
                                    // Remove the obj object from the whereClauses array
                                    this.state.whereClauses.splice(index, 1);
                                    // Add the updated obj object to the whereClauses array
                                    this.state.whereClauses.push(obj);
                                    this.setState({
                                        whereClauses: this.state.whereClauses,
                                    }, () => {
                                        this.state.whereClauses.sort(function (a, b) {
                                            return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                        });
                                        // Remove duplicate entries from the whereClauses array
                                        this.setState({
                                            whereClauses: Array.from(new Set(this.state.whereClauses)),
                                        });
                                    });
                                }
                            }
                        }
                        return { obj };
                    });
                }
            }
            if (event.target.checked === false) {
                // Find the obj object in the whereClauses array
                const obj = this.state.whereClauses.find((a) => a.id === currentId);
                // Remove the checkValue from the checkedList array
                obj.checkedList = obj.checkedList.filter((a) => a.checkValue !== event.target.attributes.name.value);
                // Update the obj object in the whereClauses array
                const index = this.state.whereClauses.findIndex((a) => a.id === currentId);
                this.state.whereClauses[index] = obj;
                this.setState({
                    whereClauses: this.state.whereClauses,
                }, () => {
                    this.state.whereClauses.sort(function (a, b) {
                        return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                    });
                    // Remove duplicate entries from the whereClauses array
                    this.setState({
                        whereClauses: Array.from(new Set(this.state.whereClauses)),
                    });
                });
            }
        };
        this.addCurrentWherClauseBlock = (currentId, currentWhereClause) => {
            const blockId = currentId.split("-")[1];
            const currentSetBlock = [...this.state.SetBlock];
            let currentBlockIndex = -1;
            let currentBlock;
            currentBlockIndex = currentSetBlock.findIndex((item) => `${item === null || item === void 0 ? void 0 : item.blockId}` === blockId);
            if (currentBlockIndex !== -1)
                currentBlock = currentSetBlock[currentBlockIndex];
            let currentWhereSetClause = null;
            if (currentBlock) {
                currentWhereSetClause = currentBlock[`${blockId}`];
                if (currentWhereSetClause === null || currentWhereSetClause === void 0 ? void 0 : currentWhereSetClause.length) {
                    let index = -1;
                    index = currentWhereSetClause.findIndex((item) => item.id === currentId);
                    if (index !== -1) {
                        currentWhereSetClause[index] = currentWhereClause;
                    }
                    else {
                        currentWhereSetClause = [
                            ...currentWhereSetClause,
                            currentWhereClause,
                        ];
                    }
                    currentBlock[blockId] = currentWhereSetClause;
                    currentSetBlock[currentBlockIndex] = currentBlock;
                    this.setState({ SetBlock: currentSetBlock });
                }
                else {
                    currentBlock[blockId] = [currentWhereClause];
                    currentSetBlock[currentBlockIndex] = currentBlock;
                    this.setState({ SetBlock: currentSetBlock });
                }
            }
        };
        this.onChangeCheckBoxSet = (event) => {
            let newWhereSetClause;
            let currentId = event.target.attributes.id.value;
            let objectId = event.target.attributes.value.value;
            let queryIndex;
            if (event.target.checked) {
                queryIndex = this.state.whereClauseSet
                    .map((obj) => obj.id)
                    .indexOf(currentId);
                if (queryIndex !== -1) {
                    this.state.whereClauseSet.map((obj) => {
                        if (obj.id === currentId) {
                            if (!obj.checkedListSet) {
                                obj = Object.assign(Object.assign({}, obj), { checkedListSet: [
                                        {
                                            checkValue: event.target.attributes.name.value,
                                            isChecked: true,
                                        },
                                    ] });
                                let filteredWhereClauseSet = this.state.whereClauseSet.filter((a) => a.id !== obj.id);
                                filteredWhereClauseSet.push(obj);
                                newWhereSetClause = filteredWhereClauseSet;
                                this.setState({
                                    whereClauseSet: filteredWhereClauseSet,
                                }, () => {
                                    this.state.whereClauseSet.sort(function (a, b) {
                                        return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                    });
                                    // Remove duplicate entries from the whereClauses array
                                    this.setState({
                                        whereClauseSet: Array.from(new Set(this.state.whereClauseSet)),
                                    });
                                });
                            }
                            else {
                                const ifAlreadyCheck = obj.checkedListSet
                                    .map((obj) => obj.checkValue)
                                    .indexOf(event.target.attributes.name.value);
                                if (ifAlreadyCheck == -1) {
                                    obj = Object.assign(Object.assign({}, obj), { checkedListSet: [
                                            ...obj.checkedListSet,
                                            {
                                                checkValue: event.target.attributes.name.value,
                                                isChecked: true,
                                            },
                                        ] });
                                    // Find the index of the obj object in the whereClauses array
                                    const index = this.state.whereClauseSet.findIndex((a) => a.id === obj.id);
                                    // Remove the obj object from the whereClauses array
                                    this.state.whereClauseSet.splice(index, 1);
                                    // Add the updated obj object to the whereClauses array
                                    this.state.whereClauseSet.push(obj);
                                    newWhereSetClause = this.state.whereClauseSet;
                                    this.setState({
                                        whereClauseSet: this.state.whereClauseSet,
                                    }, () => {
                                        this.state.whereClauseSet.sort(function (a, b) {
                                            return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                        });
                                        // Remove duplicate entries from the whereClauses array
                                        this.setState({
                                            whereClauseSet: Array.from(new Set(this.state.whereClauseSet)),
                                        });
                                    });
                                }
                            }
                        }
                        return { obj };
                    });
                }
            }
            if (event.target.checked === false) {
                // Find the obj object in the whereClauses array
                const obj = this.state.whereClauseSet.find((a) => a.id === currentId);
                // Remove the checkValue from the checkedList array
                obj.checkedListSet = obj.checkedListSet.filter((a) => a.checkValue !== event.target.attributes.name.value);
                // Update the obj object in the whereClauses array
                const index = this.state.whereClauseSet.findIndex((a) => a.id === currentId);
                this.state.whereClauseSet[index] = obj;
                this.setState({
                    whereClauseSet: this.state.whereClauseSet,
                }, () => {
                    this.state.whereClauseSet.sort(function (a, b) {
                        return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                    });
                    newWhereSetClause = Array.from(new Set(this.state.whereClauseSet));
                    // Remove duplicate entries from the whereClauses array
                    this.setState({
                        whereClauseSet: Array.from(new Set(this.state.whereClauseSet)),
                    });
                });
            }
            if (newWhereSetClause === null || newWhereSetClause === void 0 ? void 0 : newWhereSetClause.length) {
                const currentNewWhereSetClause = newWhereSetClause.find((item) => item.id === currentId);
                this.addCurrentWherClauseBlock(currentId, currentNewWhereSetClause);
            }
        };
        this.queryConstructor = (layerView, firstQuery, queryRequest, secondQueryTarget, AndOr, connector_function, layer, queryType = "single") => {
            const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_7__["default"]();
            const values = secondQueryTarget;
            switch (queryRequest) {
                case "LIKE%":
                    query.where = `${firstQuery} LIKE '${secondQueryTarget}%'`;
                    connector_function({
                        layerView,
                        query,
                        queryRequest,
                        values,
                        layer,
                        AndOr,
                        field: firstQuery,
                        source: "singleQuery",
                    });
                    break;
                case "%LIKE":
                    query.where = `${firstQuery} LIKE '%${secondQueryTarget}'`;
                    connector_function({
                        layerView,
                        query,
                        queryRequest,
                        values,
                        layer,
                        AndOr,
                        field: firstQuery,
                        source: "singleQuery",
                    });
                    break;
                case "%LIKE%":
                    query.where = `${firstQuery} LIKE '%${secondQueryTarget}%'`;
                    connector_function({
                        layerView,
                        query,
                        queryRequest,
                        values,
                        layer,
                        AndOr,
                        field: firstQuery,
                        source: "singleQuery",
                    });
                    break;
                case "NOT LIKE":
                    query.where = `${firstQuery} NOT LIKE '%${secondQueryTarget}%'`;
                    connector_function({
                        layerView,
                        query,
                        queryRequest,
                        values,
                        layer,
                        AndOr,
                        field: firstQuery,
                        source: "singleQuery",
                    });
                    break;
                case "is null":
                    query.where = `${firstQuery} is null`;
                    connector_function({
                        layerView,
                        query,
                        queryRequest,
                        values,
                        layer,
                        AndOr,
                        field: firstQuery,
                        source: "singleQuery",
                    });
                    break;
                case "is not null":
                    query.where = `${firstQuery} is not null`;
                    connector_function({
                        layerView,
                        query,
                        queryRequest,
                        values,
                        layer,
                        AndOr,
                        field: firstQuery,
                        source: "singleQuery",
                    });
                    break;
                case "IN":
                    if (this.containsAnyLetters(secondQueryTarget)) {
                        query.where = `${firstQuery} IN (${"'" + secondQueryTarget.join("', '") + "'"})`;
                        connector_function({
                            layerView,
                            query,
                            queryRequest,
                            values,
                            layer,
                            AndOr,
                            field: firstQuery,
                            source: "singleQuery",
                        });
                    }
                    else {
                        if (this.checkParenthesis(secondQueryTarget.join(","))) {
                            const stringFiedValue = this.loopToGetString(secondQueryTarget);
                            query.where = `${firstQuery} IN (${stringFiedValue})`;
                        }
                        else {
                            query.where = `${firstQuery} IN (${secondQueryTarget.join(",")})`;
                        }
                        connector_function({
                            layerView,
                            query,
                            queryRequest,
                            values,
                            layer,
                            AndOr,
                            field: firstQuery,
                            source: "singleQuery",
                        });
                    }
                    break;
                case "NOT_IN":
                    if (this.containsAnyLetters(secondQueryTarget)) {
                        query.where = `NOT ${firstQuery} IN (${"'" + secondQueryTarget.join("', '") + "'"})`;
                        query.outFields = [`${firstQuery}`];
                        connector_function({
                            layerView,
                            query,
                            queryRequest,
                            values,
                            layer,
                            AndOr,
                            field: firstQuery,
                            source: "singleQuery",
                        });
                    }
                    else {
                        if (this.checkParenthesis(secondQueryTarget.join(","))) {
                            const stringFiedValue = this.loopToGetString(secondQueryTarget);
                            query.where = `NOT  ${firstQuery} IN (${stringFiedValue})`;
                        }
                        else {
                            query.where = `NOT  ${firstQuery} IN (${secondQueryTarget.join(",")})`;
                        }
                        query.outFields = [`${firstQuery}`];
                        connector_function({
                            layerView,
                            query,
                            queryRequest,
                            values,
                            layer,
                            AndOr,
                            field: firstQuery,
                            source: "singleQuery",
                        });
                    }
                    break;
                case "included":
                    query.where = `(${firstQuery} > ${secondQueryTarget.firstTxt} AND ${firstQuery} < ${secondQueryTarget.secondTxt})`;
                    connector_function({
                        layerView,
                        query,
                        queryRequest,
                        values,
                        layer,
                        AndOr,
                        field: firstQuery,
                        source: "singleQuery",
                    });
                    break;
                case "is_not_included":
                    query.where = `(${firstQuery} < ${secondQueryTarget.firstTxt} OR ${firstQuery} > ${secondQueryTarget.secondTxt})`;
                    connector_function({
                        layerView,
                        query,
                        queryRequest,
                        values,
                        layer,
                        AndOr,
                        field: firstQuery,
                        source: "singleQuery",
                    });
                    break;
                default:
                    if (this.containsAnyLetters(secondQueryTarget)) {
                        query.where = `${firstQuery} ${queryRequest} '${secondQueryTarget}'`;
                        connector_function({
                            layerView,
                            query,
                            queryRequest,
                            values,
                            layer,
                            AndOr,
                            field: firstQuery,
                            source: "singleQuery",
                        });
                    }
                    else {
                        const brackets = ["(", ")", "[", "]", "{", "}"];
                        if (brackets.includes(secondQueryTarget.charAt(0))) {
                            const stringFiedValue = JSON.stringify(secondQueryTarget).replace(/"/g, `'`);
                            query.where = `${firstQuery} ${queryRequest} (${stringFiedValue})`;
                        }
                        else {
                            query.where = `${firstQuery} ${queryRequest} '${secondQueryTarget}'`;
                        }
                        // query.where = `${firstQuery} ${queryRequest} ${secondQueryTarget}`;
                        // query.outFields = [`${firstQuery}`];
                        connector_function({
                            layerView,
                            query,
                            queryRequest,
                            values,
                            layer,
                            AndOr,
                            field: firstQuery,
                            source: "singleQuery",
                        });
                    }
            }
        };
        this.chooseAndOr = (e) => this.setState({ AndOr: e.target.value });
        this.chooseAndOrSet = (e, blockId) => {
            const currentSetBlock = [...this.state.SetBlock];
            const index = currentSetBlock.findIndex((item) => item.blockId === blockId);
            if (index !== -1) {
                const currentSetBlockItem = currentSetBlock[index];
                currentSetBlockItem["AndOrSet"] = e.target.value;
                currentSetBlock[index] = currentSetBlockItem;
            }
            this.setState({ AndOrSet: e.target.value, SetBlock: currentSetBlock });
        };
        this.openDrop = (id) => {
            this.setState({ mouseleave: false });
            this.setState({ dropId: id });
            const dropDowns = Object.assign({}, this.state.dropDowns);
            if (dropDowns[id]) {
                this.setState({ dropDowns: Object.assign(Object.assign({}, this.state.dropDowns), { [id]: false }) });
            }
            else {
                this.setState({ dropDowns: Object.assign(Object.assign({}, this.state.dropDowns), { [id]: true }) });
            }
        };
        this.openDropSet = (id) => {
            const currentId = id;
            this.setState({ mouseleave: false });
            this.setState({ dropIdSet: currentId });
            const dropDownsSet = Object.assign({}, this.state.dropDownsSet);
            if (dropDownsSet[currentId]) {
                this.setState({
                    dropDownsSet: Object.assign(Object.assign({}, this.state.dropDownsSet), { [currentId]: false }),
                });
            }
            else {
                this.setState({
                    dropDownsSet: Object.assign(Object.assign({}, this.state.dropDownsSet), { [currentId]: true }),
                });
            }
        };
        this.closeDrop = () => this.setState({ opened: false, autOpen: false });
        this.closeDropOnclickOutside = () => {
            if (this.state.dropId !== null && this.state.mouseleave) {
                // this.setState({
                //   dropDowns: { ...this.state.dropDowns, [this.state.dropId]: false },
                // });
                // this.setState({
                //   dropDownsSet: {
                //     ...this.state.dropDownsSet,
                //     [this.state.dropIdSet]: false,
                //   },
                // });
                this.setState({ mouseleave: false });
            }
            if (this.state.dropIdSet !== null && this.state.mouseleave) {
                // this.setState({
                //   dropDownsSet: {
                //     ...this.state.dropDownsSet,
                //     [this.state.dropIdSet]: false,
                //   },
                // });
                this.setState({ mouseleave: false });
            }
        };
        this.onmouseLeave = () => this.setState({ mouseleave: true });
        // methods for attribute table
        this.getAllCheckedLayers = () => {
            var _a;
            const activeView = Widget.activeV;
            const allMapLayers = (_a = activeView.view.map.allLayers) === null || _a === void 0 ? void 0 : _a.items;
            const checkedLayers = this.state.checkedLayer_;
            let newMapLayer = [];
            if ((allMapLayers === null || allMapLayers === void 0 ? void 0 : allMapLayers.length) > 0 && checkedLayers.length > 0) {
                newMapLayer = allMapLayers.reduce((newArray, item) => {
                    if (checkedLayers.includes(item.id)) {
                        newArray.push(item);
                    }
                    return newArray;
                }, []);
            }
            return newMapLayer;
        };
        this.getActiveView = () => {
            const activeView = Widget.activeV;
            return activeView;
        };
        this.getAllJimuLayerViews = () => {
            const jimuLayerViews = Widget.jimuLayerViewz;
            return jimuLayerViews;
        };
        this.clearHighlights = (layerView) => {
            if (layerView) {
                layerView._highlightIds.clear();
            }
        };
        this.connector_function = (data) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { layerView, query, queryRequest, values, layer, AndOr, field, source, } = data;
            if (this.state.higlightSelected.length) {
                this.clearHighlights(layerView);
                this.state.higlightSelected.forEach((highlight) => {
                    highlight.remove();
                });
            }
            let results = { features: [] };
            let additionalQuery = null;
            if (source === "singleQuery") {
                additionalQuery = query.where;
                if (this.queryArray.length < this.state.whereClauses.length - 1) {
                    additionalQuery = query.where + " " + AndOr;
                }
                this.queryArray.push(additionalQuery);
                this.outfields.push(`${field}`);
            }
            if (this.queryArray.length >= this.state.whereClauses.length ||
                source === "setQuery") {
                let currentQuery = null;
                if (this.queryArray.length)
                    currentQuery = this.queryArray.join(" ");
                if ((_a = this.state.whereClauseSet) === null || _a === void 0 ? void 0 : _a.length) {
                    const { setQueryString, outFields } = this.sendQuerySet();
                    if (source === "singleQuery") {
                        if (setQueryString)
                            currentQuery += " " + AndOr + " " + "(" + setQueryString + ")";
                        if (outFields === null || outFields === void 0 ? void 0 : outFields.length) {
                            this.outfields = this.outfields.concat(outFields);
                            const set = new Set(this.outfields);
                            this.outfields = Array.from(set);
                        }
                    }
                    else {
                        if (setQueryString)
                            currentQuery = setQueryString;
                        if (outFields === null || outFields === void 0 ? void 0 : outFields.length)
                            this.outfields = outFields;
                    }
                }
                if (!this.outfields.includes("OBJECTID")) {
                    this.outfields.push("OBJECTID");
                }
                query.outFields = this.outfields;
                query.returnGeometry = true;
                query.where = currentQuery;
                try {
                    results = yield layer.queryFeatures(query);
                }
                catch (err) {
                    if (layerView === null || layerView === void 0 ? void 0 : layerView.queryFeatures)
                        results = yield layerView.queryFeatures(query);
                }
                if (layer === null || layer === void 0 ? void 0 : layer.queryFeatures)
                    results = yield layer.queryFeatures(query);
                let checkedLayer_ = [data.layerView.layer.id];
                const highlightIds = _connector__WEBPACK_IMPORTED_MODULE_10__["default"].getHighlightedIds(results.features);
                if (highlightIds.length) {
                    const higlightSelectedArr = [];
                    highlightIds.forEach((el) => {
                        const highlightSelected = layerView.highlight(el);
                        higlightSelectedArr.push(highlightSelected);
                    });
                    if (results.features.length) {
                        const arrayGeometry = [];
                        results.features.forEach((el) => {
                            const newGeometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_14__["default"].buffer(el.geometry, 1, "meters");
                            arrayGeometry.push(newGeometry);
                        });
                        if (arrayGeometry.length) {
                            const unifiedGeomtry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_14__["default"].union(arrayGeometry);
                            this.state.jimuMapView.view.goTo(unifiedGeomtry.extent);
                        }
                    }
                    this.setState({ higlightSelected: higlightSelectedArr });
                }
                const selectedLayersContents = _connector__WEBPACK_IMPORTED_MODULE_10__["default"].getSelectedContentsLayer([results.features], checkedLayer_);
                const numberOfAttributes = _connector__WEBPACK_IMPORTED_MODULE_10__["default"].getNumberOfAttributes(selectedLayersContents);
                let activeV = this.state.jimuMapView;
                this.setState({ layerContents: selectedLayersContents });
                this.setState({ checkedLayer_: checkedLayer_ });
                const geometry = esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_11__["default"].fromExtent(layerView.view.extent).toJSON();
                const layerOpen = {
                    geometry: geometry,
                    typeSelected: "contains",
                };
                if (results.features.length) {
                    this.currentLayerView = layerView;
                    const isLayerChecked = this.state.isAttributeTableClosed ? false : true;
                    const allCheckedLayers = this.getAllCheckedLayers();
                    this.attributeTableConnector.init({
                        results: [results.features],
                        allCheckedLayers: allCheckedLayers,
                        isLayerChecked: isLayerChecked,
                        checkedLayers: checkedLayer_,
                        numberOfAttributes: numberOfAttributes,
                        layerOpen: layerOpen,
                    });
                    this.setState({ isAttributeTableClosed: false });
                    try {
                        this.attributeTableConnector.dispatchingAll();
                        this.setState({ itemNotFound: null });
                    }
                    catch (err) {
                        if (err)
                            this.setState({ itemNotFound: this.nls(err) });
                        this.attributeTableConnector.closeTable();
                        this.setState({ isAttributeTableClosed: true });
                        this.returnToOriginalExtent();
                    }
                }
                else {
                    this.attributeTableConnector.closeTable();
                    this.setState({
                        isAttributeTableClosed: true,
                        itemNotFound: this.nls("noItemSelected"),
                    });
                    this.returnToOriginalExtent();
                }
            }
        });
        this.returnToOriginalExtent = () => {
            const jimuMapView = this.state.jimuMapView;
            const view = jimuMapView.view;
            view.goTo({ center: view.center, zoom: Widget.initialZoom });
        };
        this.functionCounterIsChecked = (e, val) => {
            let counter = [...this.state.counterIsChecked];
            if (e.target.checked) {
                counter.push(val);
                this.setState({ counterIsChecked: counter });
            }
            else {
                let index = counter.indexOf(val);
                if (index > -1)
                    counter.splice(index, 1);
                this.setState({ counterIsChecked: counter });
            }
        };
        this.functionRefresh = () => {
            const resultLayerList = this.state.resultLayerList;
            const jimuMapView = this.state.jimuMapView;
            this.init();
            this.attributeTableConnector.closeTable();
            this.setState(Object.assign(Object.assign({}, this.state), { resultLayerList: resultLayerList, jimuMapView: jimuMapView, isAttributeTableClosed: true }));
            const view = jimuMapView.view;
            view.goTo({ center: view.center, zoom: Widget.initialZoom });
            if (this.currentLayerView)
                this.clearHighlights(this.currentLayerView);
        };
        this.init();
        this.activeViewChangeHandler = this.activeViewChangeHandler.bind(this);
        //Layer
        this.onChangeSelectLayer = this.onChangeSelectLayer.bind(this);
        this.getQueryAttribute = this.getQueryAttribute.bind(this);
        this.getQuery = this.getQuery.bind(this);
        this.sendQuery = this.sendQuery.bind(this);
        this.sendQuerySet = this.sendQuerySet.bind(this);
        // this.runbothQueries= this.runbothQueries.bind(this);
        this.thirdQuery = this.thirdQuery.bind(this);
        this.dropdownItemClick = this.dropdownItemClick.bind(this);
        this.chooseAndOr = this.chooseAndOr.bind(this);
        this.chooseAndOrSet = this.chooseAndOrSet.bind(this);
        this.closeDrop = this.closeDrop.bind(this);
        this.openDrop = this.openDrop.bind(this);
        this.closeDropOnclickOutside = this.closeDropOnclickOutside.bind(this);
        this.onmouseLeave = this.onmouseLeave.bind(this);
        this.getAllCheckedLayers = this.getAllCheckedLayers.bind(this);
        this.getAllJimuLayerViews = this.getAllJimuLayerViews.bind(this);
        this.connector_function = this.connector_function.bind(this);
        this.functionCounterIsChecked = this.functionCounterIsChecked.bind(this);
        this.getQuerySet = this.getQuerySet.bind(this);
        this.onChangeCheckBoxSet = this.onChangeCheckBoxSet.bind(this);
    }
    activeViewChangeHandler(jmv) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            const resultLayerList = [];
            jmv.view.map.allLayers.forEach((f, index) => {
                if (f.type === "feature") {
                    jmv.view.whenLayerView(f).then((layerView) => {
                        const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_7__["default"]();
                        query.where = "1=1";
                        query.outFields = ["*"];
                        layerView.filter = { where: query.where };
                    });
                    resultLayerList.push({
                        element: f,
                        label: f.title,
                        value: index,
                        layerID: f.id,
                        urlServiceServer: f.url,
                    });
                }
            });
            Widget.activeV = jmv;
            Widget.jimuLayerViewz = jmv === null || jmv === void 0 ? void 0 : jmv.jimuLayerViews;
            this.setState({ resultLayerList: resultLayerList, jimuMapView: jmv });
            this.attributeTableConnector = new _connector_attribute_table_connector__WEBPACK_IMPORTED_MODULE_13__["default"](jmv, this);
            Widget.initialZoom = jmv.view.zoom;
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.isLayerSelected !== prevProps.isLayerSelected) {
        }
        if (this.state.whereClauses !== prevProps.whereClauses) {
        }
    }
    componentWillUnmount() { }
    /**==============================================
     * EVENT CLICK SELECT
     ==============================================*/
    removeValueFromObject(obj) {
        let newWhereClause = obj;
        if (obj === null || obj === void 0 ? void 0 : obj.ifInOrNotInQueryValue) {
            newWhereClause = {
                id: obj.id,
                attributeQuery: obj.attributeQuery,
                attributeQueryType: obj.attributeQueryType,
                queryValue: obj.queryValue,
                ifInOrNotInQueryValue: obj.ifInOrNotInQueryValue,
            };
        }
        else {
            newWhereClause = {
                id: obj.id,
                attributeQuery: obj.attributeQuery,
                attributeQueryType: obj.attributeQueryType,
                queryValue: obj.queryValue,
            };
        }
        return newWhereClause;
    }
    getQueryAttribute(e, type = "single") {
        return __awaiter(this, void 0, void 0, function* () {
            const keytype = type === "single" ? "whereClauses" : "whereClauseSet";
            let currentWhereClause;
            const whereClauseState = this.state[keytype];
            if (!whereClauseState.length) {
                let whereClause = {
                    id: e.currentTarget.attributes[1].value,
                    attributeQuery: e.currentTarget.name,
                    attributeQueryType: e.currentTarget.attributes.datatype.value,
                    queryValue: "=",
                };
                currentWhereClause = whereClause;
                this.setState({ [keytype]: [whereClause] });
            }
            if (whereClauseState.length) {
                const queryIndex = whereClauseState.map((obj) => obj.id).indexOf(e.currentTarget.attributes[1].value);
                if (queryIndex !== -1) {
                    const updateState = whereClauseState.map((obj) => {
                        if (obj.id === e.currentTarget.attributes[1].value) {
                            obj = Object.assign(Object.assign({}, obj), { attributeQuery: e.currentTarget.name, attributeQueryType: e.currentTarget.attributes.datatype.value });
                            obj = this.removeValueFromObject(obj);
                            let filteredWhereClauses = whereClauseState.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) { return a.id < b.id ? -1 : a.id == b.id ? 0 : 1; });
                            currentWhereClause = obj;
                            return this.setState({ [keytype]: filteredWhereClauses });
                        }
                        return { obj };
                    });
                }
                else {
                    let whereClause = {
                        id: e.currentTarget.attributes[1].value,
                        attributeQuery: e.currentTarget.name,
                        attributeQueryType: e.currentTarget.attributes.datatype.value,
                    };
                    // whereClause = this.removeValueFromObject(whereClause)
                    currentWhereClause = whereClause;
                    this.setState({ [keytype]: [...whereClauseState, whereClause], });
                    whereClauseState.sort(function (a, b) { return a.id < b.id ? -1 : a.id == b.id ? 0 : 1; });
                }
            }
            this.setState({ selectedField: e.currentTarget.name }, () => {
                if (currentWhereClause)
                    this.manipulateFieldQuery(currentWhereClause.queryValue, currentWhereClause.id, type);
            });
        });
    }
    // for called on drop select list
    getQuery(e, type = "single") {
        return __awaiter(this, void 0, void 0, function* () {
            const clickedQueryTableId = e.currentTarget.attributes[1].value;
            const currentTargetName = e.currentTarget.name;
            this.manipulateFieldQuery(currentTargetName, clickedQueryTableId, type);
            this.setState({ queryChanged: Object.assign(Object.assign({}, this.state.queryChanged), { [clickedQueryTableId]: true }) });
        });
    }
    manipulateFieldQuery(currentTargetName, clickedQueryTableId, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryIndex = -1;
            let currentClickedQueryAttribute = " ";
            let newWhereSetClause;
            const keytype = type === "single" ? "whereClauses" : "whereClauseSet";
            if (this.state[keytype].length) {
                queryIndex = this.state[keytype]
                    .map((obj) => obj.id)
                    .indexOf(clickedQueryTableId);
                if (queryIndex !== -1) {
                    const updateState = this.state[keytype].map((obj) => {
                        if (obj.id === clickedQueryTableId) {
                            currentClickedQueryAttribute = obj.attributeQuery;
                            // obj = this.removeValueFromObject(obj)
                            obj = Object.assign(Object.assign({}, obj), { queryValue: currentTargetName });
                            let filteredWhereClauses = this.state[keytype].filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            newWhereSetClause = filteredWhereClauses;
                            return this.setState({ [keytype]: filteredWhereClauses });
                        }
                        return { obj };
                    });
                }
            }
            if (currentTargetName === "IN" || currentTargetName === "NOT_IN") {
                if (this.state.jimuMapView) {
                    this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                        if (f.title === this.state.currentTargetText) {
                            this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                                const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_7__["default"]();
                                query.where = `${currentClickedQueryAttribute} is not null`;
                                query.outFields = [`${currentClickedQueryAttribute}`];
                                const results = f.queryFeatures(query);
                                results.then((result) => {
                                    const detailThirdQuery = [];
                                    result.features.forEach((el) => {
                                        detailThirdQuery.push({
                                            label: el.attributes[currentClickedQueryAttribute],
                                            value: el.attributes[currentClickedQueryAttribute],
                                        });
                                    });
                                    if (queryIndex !== -1) {
                                        if (typeof detailThirdQuery[0].value !== "number") {
                                            detailThirdQuery.sort((a, b) => a.label < b.label ? -1 : a.label > b.label ? 1 : 0);
                                        }
                                        else {
                                            detailThirdQuery.sort((a, b) => a.value - b.value < 0 ? -1 : a.value === b.value ? 0 : 1);
                                        }
                                        const updateState = this.state[keytype].map((obj) => {
                                            if (obj.id === clickedQueryTableId) {
                                                // obj = this.removeValueFromObject(obj)
                                                obj = Object.assign(Object.assign({}, obj), { ifInOrNotInQueryValue: detailThirdQuery });
                                                let filteredWhereClauses = this.state[keytype].filter((a) => a.id !== obj.id);
                                                filteredWhereClauses.push(obj);
                                                filteredWhereClauses.sort(function (a, b) {
                                                    return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                                });
                                                return this.setState({
                                                    [keytype]: filteredWhereClauses,
                                                });
                                            }
                                            return { obj };
                                        });
                                    }
                                });
                            });
                        }
                    });
                }
            }
            if (keytype === "whereClauseSet") {
                if (newWhereSetClause === null || newWhereSetClause === void 0 ? void 0 : newWhereSetClause.length) {
                    const currentNewWhereSetClause = newWhereSetClause.find((item) => item.id === clickedQueryTableId);
                    this.addCurrentWherClauseBlock(clickedQueryTableId, currentNewWhereSetClause);
                }
            }
        });
    }
    getQuerySet(e, type = "single") {
        return __awaiter(this, void 0, void 0, function* () {
            const clickedQueryTableId = e.currentTarget.attributes[1].value;
            const currentTargetName = e.currentTarget.name;
            this.manipulateFieldQuery(currentTargetName, clickedQueryTableId, "set");
            this.setState({ queryChanged: Object.assign(Object.assign({}, this.state.queryChanged), { [clickedQueryTableId]: true }) });
        });
    }
    //TODO la sendQuery andrà risistemata quando si aggiungerà oltre all'espressione anche il set di espressioni
    // perché ora per l'AND fa il ciclo for su ogni where inserita nell'array ma dopo sarà necessario scomporre per creare le espressioni
    // step1
    sendQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            this.queryArray = [];
            this.outfields = [];
            const checkedQuery = [
                "is null",
                "is not null",
                "IN",
                "NOT_IN",
                "included",
                "is_not_included",
            ];
            const likelyQuery = ["LIKE%", "%LIKE", "%LIKE%", "NOT LIKE"];
            if (this.state.whereClauses.length) {
                if (this.state.AndOr === "AND") {
                    this.state.whereClauses.forEach((el, id) => {
                        var _a, _b, _c, _d;
                        let attributeQuery = el.attributeQuery;
                        let queryValue = el.queryValue;
                        let value;
                        if (queryValue === "is null" || queryValue === "is not null") {
                            value = (_b = (_a = el.value) === null || _a === void 0 ? void 0 : _a.txt) !== null && _b !== void 0 ? _b : "";
                        }
                        else if (queryValue === "IN" || queryValue === "NOT_IN") {
                            value = [];
                            el.checkedList.forEach((el) => value.push(el.checkValue));
                        }
                        else if (queryValue === "included" ||
                            queryValue === "is_not_included") {
                            value = {
                                firstTxt: el.firstTxt.value,
                                secondTxt: el.secondTxt.value,
                            };
                        }
                        else if (!checkedQuery.includes(queryValue)) {
                            value = (_d = (_c = el.value) === null || _c === void 0 ? void 0 : _c.txt) !== null && _d !== void 0 ? _d : "";
                        }
                        if (this.state.jimuMapView) {
                            this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                                if (f.title === this.state.currentTargetText) {
                                    this.state.jimuMapView.view
                                        .whenLayerView(f)
                                        .then((layerView) => {
                                        this.queryConstructor(
                                        //step 2 start querying
                                        layerView, attributeQuery, queryValue, value, this.state.AndOr, this.connector_function, f);
                                    });
                                }
                            });
                        }
                    });
                }
                else {
                    let normalizedWhereToSendQuery = [];
                    this.state.whereClauses.forEach((el, id) => {
                        var _a, _b;
                        const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_7__["default"]();
                        let attributeQuery = el.attributeQuery;
                        let queryValue = el.queryValue;
                        let value;
                        if (queryValue === "is null" || queryValue === "is not null") {
                            let queryIn = `${attributeQuery} ${queryValue}`;
                            query.where = queryIn;
                            normalizedWhereToSendQuery.push(queryIn);
                        }
                        if (queryValue === "IN" || queryValue === "NOT_IN") {
                            value = [];
                            el.checkedList.forEach((el) => value.push(el.checkValue));
                            if (this.containsAnyLetters(value)) {
                                let queryIn = `${attributeQuery} IN (${"'" + value.join("', '") + "'"})`;
                                query.where = queryIn;
                                normalizedWhereToSendQuery.push(queryIn);
                            }
                            else {
                                let queryIn = `${attributeQuery} IN (${value.join(",")})`;
                                query.where = queryIn;
                                normalizedWhereToSendQuery.push(queryIn);
                            }
                        }
                        if (queryValue === "included" || queryValue === "is_not_included") {
                            let queryIn;
                            queryValue === "included"
                                ? (queryIn = `${attributeQuery} > ${el.firstTxt.value} AND ${attributeQuery} < ${el.secondTxt.value}`)
                                : (queryIn = `${attributeQuery} < ${el.firstTxt.value} OR ${attributeQuery} > ${el.secondTxt.value}`);
                            query.where = queryIn;
                            normalizedWhereToSendQuery.push(queryIn);
                        }
                        else if (!checkedQuery.includes(queryValue)) {
                            value = (_b = (_a = el.value) === null || _a === void 0 ? void 0 : _a.txt) !== null && _b !== void 0 ? _b : "";
                            if (likelyQuery.includes(queryValue)) {
                                query.where = _connector__WEBPACK_IMPORTED_MODULE_10__["default"].likelyQuery(attributeQuery, queryValue, value);
                            }
                            else {
                                if (this.containsAnyLetters(value)) {
                                    let queryInput = `${attributeQuery} ${queryValue} '${value}'`;
                                    query.where = queryInput;
                                    normalizedWhereToSendQuery.push(queryInput);
                                }
                                else {
                                    let queryInput = `${attributeQuery} ${queryValue} ${value}`;
                                    query.where = queryInput;
                                    normalizedWhereToSendQuery.push(queryInput);
                                }
                            }
                        }
                        if (this.state.jimuMapView) {
                            this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                                if (f.title === this.state.currentTargetText) {
                                    this.state.jimuMapView.view
                                        .whenLayerView(f)
                                        .then((layerView) => {
                                        this.connector_function({
                                            layerView,
                                            query,
                                            queryRequest: "OR",
                                            layer: f,
                                            AndOr: this.state.AndOr,
                                            field: attributeQuery,
                                            source: "singleQuery",
                                        });
                                    });
                                }
                            });
                        }
                    });
                }
            }
            else if (this.state.SetBlock.length) {
                if (this.state.jimuMapView) {
                    this.queryArray = [];
                    this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                        if (f.title === this.state.currentTargetText) {
                            this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                                this.connector_function({
                                    layerView,
                                    query: new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_7__["default"](),
                                    queryRequest: null,
                                    layer: f,
                                    AndOr: this.state.AndOr,
                                    field: null,
                                    source: "setQuery",
                                });
                            });
                        }
                    });
                }
            }
            else {
                this.attributeTableConnector.closeTable();
                this.setState({ isAttributeTableClosed: true });
                this.returnToOriginalExtent();
            }
        });
    }
    sendQuerySet() {
        const checkedQuery = [
            "is null",
            "is not null",
            "IN",
            "NOT_IN",
            "included",
            "is_not_included",
        ];
        const likelyQuery = ["LIKE%", "%LIKE", "%LIKE%", "NOT LIKE"];
        let setQueryString = null;
        let outFields = [];
        if (this.state.SetBlock.length) {
            this.state.SetBlock.forEach((block, i) => {
                const blockId = block === null || block === void 0 ? void 0 : block.blockId;
                const whereClauseSet = block[`${blockId}`];
                const AndOrSet = block === null || block === void 0 ? void 0 : block.AndOrSet;
                if (AndOrSet === "AND") {
                    if (whereClauseSet === null || whereClauseSet === void 0 ? void 0 : whereClauseSet.length) {
                        whereClauseSet.forEach((el, j) => {
                            var _a, _b, _c, _d;
                            let attributeQuery = el.attributeQuery;
                            let queryValue = el.queryValue;
                            let value;
                            if (queryValue === "is null" || queryValue === "is not null") {
                                value = (_b = (_a = el.value) === null || _a === void 0 ? void 0 : _a.txt) !== null && _b !== void 0 ? _b : "";
                            }
                            else if (queryValue === "IN" || queryValue === "NOT_IN") {
                                value = [];
                                el.checkedListSet.forEach((el) => value.push(el.checkValue));
                            }
                            else if (queryValue === "included" ||
                                queryValue === "is_not_included") {
                                value = {
                                    firstTxt: el.firstTxt.value,
                                    secondTxt: el.secondTxt.value,
                                };
                            }
                            else if (!checkedQuery.includes(queryValue)) {
                                value = (_d = (_c = el.value) === null || _c === void 0 ? void 0 : _c.txt) !== null && _d !== void 0 ? _d : "";
                            }
                            if (setQueryString) {
                                setQueryString += this.setQueryConstructor(queryValue, attributeQuery, value);
                            }
                            else {
                                setQueryString = this.setQueryConstructor(queryValue, attributeQuery, value);
                            }
                            if (j < whereClauseSet.length - 1)
                                setQueryString += "  " + AndOrSet + "  ";
                            outFields.push(`${attributeQuery}`);
                        });
                    }
                }
                else {
                    let normalizedWhereToSendQuery = [];
                    if (whereClauseSet === null || whereClauseSet === void 0 ? void 0 : whereClauseSet.length) {
                        whereClauseSet.forEach((el, j) => {
                            var _a, _b;
                            let attributeQuery = el.attributeQuery;
                            let queryValue = el.queryValue;
                            let value;
                            if (queryValue === "IN" || queryValue === "NOT_IN") {
                                value = [];
                                if (queryValue === "IN" && el.checkedListSet.length) {
                                    el.checkedListSet.forEach((el) => value.push(el.checkValue));
                                }
                                else if (queryValue === "NOT_IN" &&
                                    this.state.counterIsChecked.length) {
                                    this.state.counterIsChecked.forEach((el) => value.push(el.checkValue));
                                }
                            }
                            if (queryValue === "included" ||
                                queryValue === "is_not_included") {
                                value = {
                                    firstTxt: el.firstTxt.value,
                                    secondTxt: el.secondTxt.value,
                                };
                            }
                            else if (!checkedQuery.includes(queryValue)) {
                                value = (_b = (_a = el.value) === null || _a === void 0 ? void 0 : _a.txt) !== null && _b !== void 0 ? _b : "";
                            }
                            if (setQueryString) {
                                setQueryString += this.setQueryConstructor(queryValue, attributeQuery, value);
                            }
                            else {
                                setQueryString = this.setQueryConstructor(queryValue, attributeQuery, value);
                            }
                            if (j < whereClauseSet.length - 1)
                                setQueryString += "  " + AndOrSet + "  ";
                            outFields.push(`${attributeQuery}`);
                        });
                    }
                }
                if (setQueryString) {
                    if (this.state.SetBlock[i + 1]) {
                        const nextBlock = this.state.SetBlock[i + 1];
                        const nextBlockId = nextBlock === null || nextBlock === void 0 ? void 0 : nextBlock.blockId;
                        const nextWhereClauseSet = nextBlock[`${nextBlockId}`];
                        if ((i === 0 &&
                            this.state.SetBlock.length >= 2 &&
                            (nextWhereClauseSet === null || nextWhereClauseSet === void 0 ? void 0 : nextWhereClauseSet.length)) ||
                            !["("].includes(setQueryString[0])) {
                            setQueryString = "(" + setQueryString;
                        }
                        if (i < this.state.SetBlock.length - 1 &&
                            (nextWhereClauseSet === null || nextWhereClauseSet === void 0 ? void 0 : nextWhereClauseSet.length)) {
                            setQueryString += " ) " + this.state.AndOr + " ( ";
                        }
                    }
                    if (this.state.SetBlock[i - 1]) {
                        const prevBlock = this.state.SetBlock[i - 1];
                        const prevBlockId = prevBlock === null || prevBlock === void 0 ? void 0 : prevBlock.blockId;
                        const prevWhereClauseSet = prevBlock[`${prevBlockId}`];
                        if (this.state.SetBlock.length >= 2 &&
                            i === this.state.SetBlock.length - 1 &&
                            prevWhereClauseSet.length) {
                            setQueryString = setQueryString + ")";
                        }
                    }
                }
            });
        }
        return { setQueryString, outFields };
    }
    thirdQuery(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentQueryTest = e.currentTarget.textContent;
            this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                if (f.title === this.state.currentTargetText) {
                    this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                        this.inQueryConstructor(layerView, this.state.currentFirstQuery, this.state.currentSecondQuery, currentQueryTest);
                    });
                }
            });
        });
    }
    onChangeSelectLayer(e) {
        return __awaiter(this, void 0, void 0, function* () {
            this.graphicLayerFound.removeAll();
            if (this.state.jimuMapView) {
                this.state.jimuMapView.view.map.allLayers.forEach((f, index) => {
                    if (f.title === e.currentTarget.innerText) {
                        this.state.jimuMapView.view.whenLayerView(f).then((layerView) => {
                            this.setState({
                                resultsLayerSelected: f,
                                currentTargetText: e.currentTarget.innerText,
                                currentSelectedId: e.currentTarget.value,
                            });
                            this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "checkedLayers", [f.id]));
                        });
                    }
                });
            }
        });
    }
    checkParenthesis(val) {
        let status = false;
        const brackets = ["(", ")", "[", "]", "{", "}"];
        if (brackets.includes(val.charAt(0))) {
            status = true;
        }
        return status;
    }
    loopToGetString(stringArr) {
        let newString = " ";
        if (stringArr.length) {
            newString = JSON.stringify(stringArr[0]);
            newString = newString.replace(/"/g, `'`);
            for (let i = 1; i < stringArr.length; i++) {
                const newStringVal = JSON.stringify(stringArr[i]).replace(/"/g, `'`);
                newString += "," + newStringVal;
            }
        }
        return newString;
    }
    //TODO config abilitare tab true/false
    render() {
        const tableSetCounts = (tableSetCounts) => {
            let counts = 0;
            if (tableSetCounts.length) {
                const copiedTableSetCounts = [...tableSetCounts];
                const filteredItem = copiedTableSetCounts.filter((item) => !item.deleted);
                counts = filteredItem.length;
            }
            return counts;
        };
        if (this.props.state === "CLOSED" && !this.state.widgetStateClosedChecked) {
            const jimuMapView = this.state.jimuMapView;
            const view = jimuMapView.view;
            const resultLayerList = this.state.resultLayerList;
            this.init();
            this.attributeTableConnector.closeTable();
            this.setState(Object.assign(Object.assign({}, this.state), { resultLayerList: resultLayerList, jimuMapView: jimuMapView, isAttributeTableClosed: true, widgetStateOpenedChecked: false, widgetStateClosedChecked: true }));
            view.goTo({ center: view.center, zoom: Widget.initialZoom });
            if (this.currentLayerView)
                this.clearHighlights(this.currentLayerView);
        }
        if (this.props.state == "OPENED" && !this.state.widgetStateOpenedChecked) {
            this.setState({
                widgetStateClosedChecked: false,
                widgetStateOpenedChecked: true,
            });
        }
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_12__["default"], { handleWidth: true, handleHeight: true }, ({ width, height }) => {
            var _a;
            return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-attribute-table jimu-widget", id: "wrap", ref: "wrap", onClick: (e) => {
                    this.closeDropOnclickOutside();
                    e.stopPropagation();
                } },
                this.props.hasOwnProperty("useMapWidgetIds") &&
                    this.props.useMapWidgetIds &&
                    this.props.useMapWidgetIds[0] && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: "search-advanced-tab-Ambito", title: "Ambito" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mt-4 container-fluid d-flex justify-content-between flex-column", style: { height: "100%" } },
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-2" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { className: "w-100", form: "basic", open: true, text: "Selezionare prima il layer, poi continua con il costruttore della query", type: "info", withIcon: true })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-2" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "w-100" }, "Seleziona il layer:"),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Select, { onChange: this.onChangeSelectLayer, placeholder: "Seleziona il Layer", value: this.state.currentSelectedId }, this.state.resultLayerList.map((el, i) => {
                                        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Option, { value: el.layerID, parsedUrl: el.element.parsedUrl, id: i, key: i }, el.element.title));
                                    })),
                                    this.state.showAddSelect ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Visualizza le feature nel layer corrispondenti alla seguente espressione")) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Select, { onChange: this.chooseAndOr, placeholder: " Visualizza le feature nel layer che corrispondono a tutte le espressioni seguenti", defaultValue: "AND" },
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Option, { value: "AND" }, "Visualizza le feature nel layer che corrispondono a tutte le espressioni seguenti"),
                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Option, { value: "OR" }, "Visualizza le feature nel layer che corrispondono ad una qualsiasi delle espressioni seguenti")))))),
                        width >= 626 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-1 mb-3 justify-content-around" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-5 d-flex justify-content-center text-center", style: { gap: "2%" } },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { disabled: !this.state.currentTargetText, onClick: this.addTable, size: "default", className: "d-flex align-items-center  mb-2", type: "secondary" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { icon: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>', size: "m" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Aggiungi espressione")),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { disabled: !this.state.currentTargetText, onClick: this.addBlock, size: "default", className: "d-flex align-items-center  mb-2", type: "secondary" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { icon: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>', size: "m" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Aggiungi set di espressioni"))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-5 d-flex justify-content-center text-center" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "default", className: "d-flex align-items-center mb-2", type: "secondary", onClick: this.sendQuery },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Applica")),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "default", className: "d-flex align-items-center mb-2", style: { marginLeft: "5px" }, type: "secondary", onClick: this.functionRefresh },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Ricaricare"))))),
                        625 >= width && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", flexDirection: "column" } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "", style: {
                                    gap: "2%",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                } },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { disabled: !this.state.currentTargetText, onClick: this.addTable, size: "default", className: "d-flex align-items-center  mb-2", type: "secondary" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { icon: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>', size: "m" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Aggiungi espressione")),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { disabled: !this.state.currentTargetText, onClick: this.addBlock, size: "default", className: "d-flex align-items-center  mb-2", type: "secondary" },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { icon: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>', size: "m" }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Aggiungi set di espressioni"))),
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "", style: {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                } },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "default", className: "d-flex align-items-center mb-2", type: "secondary", onClick: this.sendQuery },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Applica")),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { size: "default", className: "d-flex align-items-center mb-2", style: { marginLeft: "5px" }, type: "secondary", onClick: this.functionRefresh },
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "m-0 p-0" }, "Ricaricare"))))),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row", style: { height: "50%", overflowY: "scroll" } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                                this.state.tables.map((el, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "w-100", key: i, id: `row-${i}`, list: this.state.resultsLayerSelected, isOpenDropD: this.state.isOpen, dropDown: () => this.dropDown(el.id), dropdownValueQuery: this.state.dropdownValueQuery, isChecked: this.state.isChecked, counterIsChecked: this.state.counterIsChecked, checkedToQuery: this.state.checkedToQuery, tables: this.state.tables, tablesId: el.id, whereClauses: this.state.whereClauses, getQueryAttribute: this.getQueryAttribute, getQuery: this.getQuery, handleThirdQuery: this.thirdQuery, textInputHandler: this.textInputHandler, dropdownItemHandler: this.dropdownItemClick, textFirstIncludedHandler: this.textFirstIncludedHandler, textSecondIncludedHandler: this.textSecondIncludedHandler, dropDownToggler: this.dropDown, handleCheckBox: this.handleCheckBox, deleteTable: () => this.deleteTable(el.id), univocoSelectHandler: this.univocoSelectHandler, onChangeCheckBox: this.onChangeCheckBox, openDrop: this.openDrop, closeDrop: this.closeDrop, opened: this.state.opened, autOpen: this.state.autOpen, mouseleave: this.state.mouseleave, onmouseLeave: this.onmouseLeave, functionCounterIsChecked: this.functionCounterIsChecked, dropdowns: this.state.dropDowns, itemNotFound: this.state.itemNotFound, selectedId: this.state.selectedId, currentTable: el, queryChanged: this.state.queryChanged, parent: this }))),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                        width: "98%",
                                        background: "#005eca",
                                        height: "10px",
                                    } }),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                                this.state.SetBlock.map((el, index) => {
                                    const counts = tableSetCounts(el.tablesSet);
                                    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: index },
                                        counts < 2 ? (counts == 1 ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Visualizza le feature nel layer corrispondenti alla seguente espressione")) : ("")) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: width >= 626 ? "d-flex col-l-1 " : "d-flex col-md-8", style: {
                                                paddingLeft: 0,
                                                paddingRight: 0
                                                // display: "flex",
                                                // flexDirection: "row",
                                                // marginTop: "20px",
                                            } },
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Select, { onChange: (e) => this.chooseAndOrSet(e, el.blockId), placeholder: " Visualizza le feature nel layer che corrispondono a tutte le espressioni seguenti", defaultValue: "AND" },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Option, { value: "AND" }, "Visualizza le feature nel layer che corrispondono a tutte le espressioni seguenti"),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Option, { value: "OR" }, "Visualizza le feature nel layer che corrispondono ad una qualsiasi delle espressioni seguenti")),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "" },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { className: "", onClick: () => this.deleteBlock(el.blockId), 
                                                    // onClick={()=>this.deleteBlockAll({el})}
                                                    icon: true, type: "secondary" },
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, null))),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: " " },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { id: el.blockId, onClick: () => this.addTwoTable(el.blockId), className: "", icon: true, type: "secondary" },
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_3__.PlusOutlined, null))))),
                                        el.tablesSet.map((innerEl, i, TableArray) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AddSetTable__WEBPACK_IMPORTED_MODULE_15__["default"], { className: "w-100", key: i, id: `row-${i}`, list: this.state.resultsLayerSelected, isOpenDropD: this.state.isOpen, dropDown: () => this.dropDownSet(el.id), dropdownValueQuery: this.state.dropdownValueQuery, isChecked: this.state.isChecked, counterIsChecked: this.state.counterIsChecked, checkedToQuery: this.state.checkedToQuery, 
                                            // for Add set table............................
                                            tablesSet: this.state.tablesSet, tablesSetId: `${innerEl.id}` + "-" + `${el.blockId}`, whereClausesSet: this.state.whereClauseSet, 
                                            // End for Add set table............................
                                            // getQueryAttribute={this.getQueryAttributeSet}
                                            getQueryAttribute: this.getQueryAttribute, getQuery: this.getQuerySet, handleThirdQuery: this.thirdQuery, textInputHandler: this.textInputHandler, dropdownItemHandler: this.dropdownItemClick, textFirstIncludedHandler: this.textFirstIncludedHandler, textSecondIncludedHandler: this.textSecondIncludedHandler, dropDownToggler: this.dropDownSet, handleCheckBox: this.handleCheckBox, deleteTable: (e) => this.deleteBlockTable(`${innerEl.id}` + "-" + `${el.blockId}`, `${el.blockId}`), univocoSelectHandler: this.univocoSelectHandler, onChangeCheckBox: this.onChangeCheckBoxSet, openDrop: this.openDropSet, closeDrop: this.closeDrop, opened: this.state.opened, autOpen: this.state.autOpen, mouseleave: this.state.mouseleave, onmouseLeave: this.onmouseLeave, functionCounterIsChecked: this.functionCounterIsChecked, dropdownsSet: this.state.dropDownsSet, itemNotFound: this.state.itemNotFound, showDelete: counts > 2 ? true : false, showBlockDelete: counts === 2 && i == 0 ? true : false, 
                                            // showDelete={TableArray.length > 2 ? true:false}
                                            // showBlockDelete={TableArray.length === 2 && i==0 ? true:false }
                                            blockId: el.blockId, deleteBlockAll: () => this.deleteBlockAll({ el, innerEl }), currentTable: innerEl, queryChanged: this.state.queryChanged, parent: this })))));
                                }),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                                this.state.itemNotFound && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { className: "w-100", form: "basic", open: true, text: this.state.itemNotFound, type: "error", withIcon: true }))))))));
        }));
    }
}
Widget.activeV = null;
Widget.jimuLayerViewz = null;
Widget.attribute_table_data = null;
Widget.initialZoom = 0;

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9xdWVyeS1idWlsZGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHFFQUFxRSxlQUFlLHFCQUFxQiwrQkFBK0IsMENBQTBDLHFCQUFxQixTQUFTLHNJQUFzSSxLQUFLLHFCQUFxQixLQUFLLEtBQUssbUVBQW1FLGlCQUFpQixxQkFBcUIsT0FBTyxHQUFHLDZCQUE2QiwyQ0FBMkMsb0JBQW9CLE9BQU8sR0FBRyx5QkFBeUI7QUFDNW1CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2REFBNkQsb0JBQW9CLGdDQUFnQyx3QkFBd0IsMEJBQTBCLG9CQUFvQixxQkFBcUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsV0FBVyxrQ0FBa0MsY0FBYyxrQkFBa0IsMEJBQTBCLGFBQWEsNEJBQTRCLFNBQVMsc0hBQXNILFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSx1REFBdUQsd0JBQXdCLGtDQUFrQyxLQUFLLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLHVCQUF1QixLQUFLLGlCQUFpQiwyQkFBMkIsa0NBQWtDLEtBQUssY0FBYyxvQ0FBb0MsS0FBSyxpQkFBaUIsc0JBQXNCLDRCQUE0QixLQUFLLGdCQUFnQiw2QkFBNkIsS0FBSywyQ0FBMkM7QUFDanVDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNB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Q0FDUCxDQUFDO2dDQUNKLENBQUMsQ0FBQztnQ0FFRiwwREFBTTtnQ0FDTiwwREFBTTtnQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUMxQiwrQ0FBQywwQ0FBSyxJQUNKLFNBQVMsRUFBQyxPQUFPLEVBQ2pCLElBQUksRUFBQyxPQUFPLEVBQ1osSUFBSSxRQUNKLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDN0IsSUFBSSxFQUFDLE9BQU8sRUFDWixRQUFRLFNBQ1IsQ0FDSCxDQUNHLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FDUDtTQUFBLENBQ21CLENBQ3ZCLENBQUM7SUFDSixDQUFDOztBQTE2RU0sY0FBTyxHQUFHLElBQUksQ0FBQztBQUNmLHFCQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLDJCQUFvQixHQUFHLElBQUksQ0FBQztBQUM1QixrQkFBVyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcz84MzgzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3M/YWJiYiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjay5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9sZWZ0LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vY2hlY2sudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL2xlZnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL3JpZ2h0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2UudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9wbHVzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvY29ubmVjdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9jb25uZWN0b3IvYXR0cmlidXRlX3RhYmxlX2Nvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9jb21wb25lbnRzL0FkZFNldFRhYmxlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9jb21wb25lbnRzL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9jb21wb25lbnRzL2NvbW1vbi9pbnB1dHMvY29tbW9uU2Vjb25kQ29uc3RydWN0b3IudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvY29tbW9uL2lucHV0cy9zZWxlY3QudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvcGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvbGliL1Jlc2l6ZURldGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvdXRpbHMvcXVlcnlUYWJsZVZhbHVlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2x5Z29uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb2wtbWQtNCB7XFxuICAgIGZsZXg6IGF1dG87IH0gfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNsb3NlLWNvbnRhaW5lci10YWJsZS1xdWVyeS1idWlsZGVyIHtcXG4gICAgZmxleDogYXV0bzsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJO0lBQ0ksVUFBVSxFQUFBLEVBQ2I7O0FBR0w7RUFDSTtJQUNJLFVBQVMsRUFBQSxFQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcXG4gICAgLmNvbC1tZC00IHtcXG4gICAgICAgIGZsZXg6IGF1dG87XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xcbiAgICAuY2xvc2UtY29udGFpbmVyLXRhYmxlLXF1ZXJ5LWJ1aWxkZXJ7XFxuICAgICAgICBmbGV4OmF1dG87XFxuICAgIH1cXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLml0ZW0tdGFibGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjdmZjsgfVxcblxcbi5zZXR0aW5nLXN2Zzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzAwNWVjYTsgfVxcblxcbi5zZXR0aW5nLXN2ZyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlOyB9XFxuXFxuI3dyYXAge1xcbiAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50OyB9XFxuXFxuLmluY2x1ZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4jaW5wdXRzIHtcXG4gIHdpZHRoOiAyMCUgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHFCQUFvQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pdGVtLXRhYmxlOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY3ZmY7XFxyXFxufVxcclxcbi5zZXR0aW5nLXN2Zzpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogIzAwNWVjYTtcXHJcXG59XFxyXFxuLnNldHRpbmctc3Zne1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxyXFxufVxcclxcblxcclxcbiN3cmFwe1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmNsdWRle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXRze1xcclxcbiAgICB3aWR0aDoyMCUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGEgc2luZ2xlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSAmJiByZVdoaXRlc3BhY2UudGVzdChzdHJpbmcuY2hhckF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkRW5kSW5kZXg7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsInZhciBiYXNlVHJpbSA9IHJlcXVpcmUoJy4vX2Jhc2VUcmltJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwibTYuMDM2IDEyLjE1NyA4LjAxLTguMDFhLjUuNSAwIDEgMSAuNzA3LjcwN2wtOC4wMSA4LjAxYTEgMSAwIDAgMS0xLjQxNSAwTDEuMTQ2IDguNjgyYS41LjUgMCAxIDEgLjcwOC0uNzA3bDQuMTgyIDQuMTgyWlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOS40MzguOTk0Yy4yMTMgMCAuMzk3LjE0Ni40NC4zNS4xNTEuNzIyLjI1NyAxLjM0LjMxNiAxLjg1Mi4zNzQuMTYuNzI1LjM2MiAxLjA0OC41OTlsMS43MjgtLjY3NmEuNDU1LjQ1NSAwIDAgMSAuNTU2LjE4OGwxLjQyIDIuMzk0YS40My40MyAwIDAgMS0uMDkxLjU0NyAyMS45OCAyMS45OCAwIDAgMS0xLjQ5IDEuMTk0IDUuMTcgNS4xNyAwIDAgMS0uMDA3IDEuMTgzbDEuNDY0IDEuMTE5YS40My40MyAwIDAgMSAuMTExLjU2M2wtMS40MiAyLjM5NGEuNDU0LjQ1NCAwIDAgMS0uNTMuMTk3IDIyLjQ0NSAyMi40NDUgMCAwIDEtMS44MDctLjY2Yy0uMzI1LjIzMy0uNjc5LjQzLTEuMDU1LjU4NmwtLjI2MyAxLjc5NGEuNDQ2LjQ0NiAwIDAgMS0uNDQ1LjM3Nkg2LjU3NGEuNDQ2LjQ0NiAwIDAgMS0uNDQtLjM1IDIxLjAxOSAyMS4wMTkgMCAwIDEtLjMxNy0xLjg1MyA1LjM0IDUuMzQgMCAwIDEtMS4wNDctLjU5OGwtMS43MjguNjc1YS40NTUuNDU1IDAgMCAxLS41NTYtLjE4N2wtMS40Mi0yLjM5NWEuNDMuNDMgMCAwIDEgLjA5MS0uNTQ2Yy41NjctLjQ5IDEuMDYzLS44ODggMS40OS0xLjE5NGE1LjE2NyA1LjE2NyAwIDAgMSAuMDA4LTEuMTgzTDEuMTkgNi4yNDNhLjQzLjQzIDAgMCAxLS4xMTItLjU2MmwxLjQyLTIuMzk1YS40NTUuNDU1IDAgMCAxIC41MzEtLjE5NmMuNzE5LjIzMyAxLjMyMS40NTMgMS44MDcuNjYuMzI0LS4yMzMuNjc5LS40MyAxLjA1Ni0uNTg3bC4yNjItMS43OTRBLjQ0Ni40NDYgMCAwIDEgNi42Ljk5NGgyLjgzOVptLS4zNjUgMUg2Ljk4NWwtLjI4IDEuODY2LS40NjcuMTljLS4yMzUuMDk1LS40Ni4yMS0uNjcyLjM0bC0uMjA3LjEzNi0uNDIuMjkzLS40NzYtLjE5N2MtLjMyOC0uMTM3LS43MTgtLjI4MS0xLjE2OS0uNDMzbC0uMjIxLS4wNzQtMS4wNDUgMS43MTlMMy41OSA2Ljk5OWwtLjA2LjQ3OWE0LjEyNyA0LjEyNyAwIDAgMC0uMDIxLjgxNmwuMDE0LjE0NC4wNTguNDkyLS40MTkuMjk0Yy0uMjg4LjIwMy0uNjE1LjQ1MS0uOTc5Ljc0NmwtLjE3Ny4xNDUgMS4wNDMgMS43MiAxLjg0NS0uNzAzLjQwNi4yOWMuMjA0LjE0Ni40Mi4yNzQuNjQ1LjM4NGwuMjI4LjEwMy40NzQuMTk5LjA1OS40OWMuMDQuMzM4LjEwMy43MzEuMTkgMS4xNzdsLjA0My4yMTloMi4wODhsLjI4Mi0xLjg2Ny40NjYtLjE5Yy4yMzYtLjA5NS40Ni0uMjEuNjcyLS4zNGwuMjA3LS4xMzYuNDE5LS4yOTMuNDc2LjE5OGMuMzMuMTM2LjcyLjI4IDEuMTcuNDMzbC4yMi4wNzIgMS4wNDQtMS43MTgtMS41Ni0xLjE2NS4wNi0uNDc5YTQuMTMxIDQuMTMxIDAgMCAwIC4wMi0uODE1bC0uMDEzLS4xNDQtLjA2LS40OTIuNDItLjI5NWExOC4xIDE4LjEgMCAwIDAgLjk4LS43NDZsLjE3Ni0uMTQ2LTEuMDQzLTEuNzItMS44NDQuNzA1LS40MDYtLjI5YTQuNDk2IDQuNDk2IDAgMCAwLS42NDYtLjM4NWwtLjIyOC0uMTAzLS40NzQtLjE5OS0uMDU4LS40OWMtLjAzMi0uMjctLjA4LS41NzYtLjE0LS45MTZsLS4wOTQtLjQ4Wm0tMS4wNjcgM2EzIDMgMCAxIDEgMCA2IDMgMyAwIDAgMSAwLTZabTAgMWEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMS4zNDcgMi4xNDZhLjQ4NS40ODUgMCAwIDEgMCAuNzA4TDUuNzYgOGw1LjU4NyA1LjE0NmEuNDg2LjQ4NiAwIDAgMSAwIC43MDguNTM4LjUzOCAwIDAgMS0uNzM4IDBsLTUuOTU2LTUuNWEuNDg1LjQ4NSAwIDAgMSAwLS43MDhsNS45NTYtNS41YS41MzguNTM4IDAgMCAxIC43MzggMFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTQuNjUzIDEzLjg1NGEuNDg1LjQ4NSAwIDAgMSAwLS43MDhMMTAuMjQgOCA0LjY1MyAyLjg1NGEuNDg1LjQ4NSAwIDAgMSAwLS43MDguNTM4LjUzOCAwIDAgMSAuNzM4IDBsNS45NTYgNS41YS40ODUuNDg1IDAgMCAxIDAgLjcwOGwtNS45NTYgNS41YS41MzguNTM4IDAgMCAxLS43MzggMFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtOC43NDUgOCA2LjEgNi4xYS41MjcuNTI3IDAgMSAxLS43NDUuNzQ2TDggOC43NDZsLTYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0Ni0uNzQ2bDYuMS02LjEtNi4xLTYuMWEuNTI3LjUyNyAwIDAgMSAuNzQ2LS43NDZsNi4xIDYuMSA2LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYuNzQ2TDguNzQ2IDhaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTcuNSAwYS41LjUgMCAwIDAtLjUuNVY3SC41YS41LjUgMCAwIDAgMCAxSDd2Ni41YS41LjUgMCAwIDAgMSAwVjhoNi41YS41LjUgMCAwIDAgMC0xSDhWLjVhLjUuNSAwIDAgMC0uNS0uNVpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vY2hlY2suc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgU2V0dGluZ091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL2xlZnQuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExlZnRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9yaWdodC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgUmlnaHRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3BsdXMuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIlxyXG5cclxudHlwZSBsYXllckNvbnRlbnRzT2JqZWN0VHlwZSA9IHtcclxuICAgIGlkOnN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6YW55W11cclxufVxyXG5cclxudHlwZSBzZWxlY3RlZExheWVyVHlwZSA9IHtcclxuICAgIGlkOnN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6YW55W11cclxufVxyXG5cclxuY2xhc3MgSGVscGVyIHtcclxuXHJcbiAgICBzZXRRdWVyeUFycmF5ID0gW107XHJcbiAgICBzZXRPdXRGaWVsZHMgPSBbXTtcclxuXHJcbiAgICBnZXRMYXllckF0dHJpYnV0ZXMgPSAoc2VsZWN0ZWRMYXllcklkOnN0cmluZyxsYXllckNvbnRlbnRzOmxheWVyQ29udGVudHNPYmplY3RUeXBlW10pOmFueVtdPT57XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcclxuICAgICAgICBpZiAobGF5ZXJDb250ZW50cz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNPYmplY3QgPSBsYXllckNvbnRlbnRzLmZpbmQoKGxheWVyQ29udGVudDpsYXllckNvbnRlbnRzT2JqZWN0VHlwZSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChsYXllckNvbnRlbnQ/LmlkID09PSBzZWxlY3RlZExheWVySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXllckNvbnRlbnQ/LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT2JqZWN0Py5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZUtleUFycmF5ID0gKGF0dHJpYnV0ZXM6YW55KTpzdHJpbmdbXT0+e1xyXG4gICAgICAgIGxldCByZXR1cm5lZEtleXMgPSBbXTtcclxuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgcmV0dXJuZWRLZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5lZEtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyID0ocmVzdWx0czphbnksY2hlY2tlZExheWVyczpzdHJpbmdbXSk6c2VsZWN0ZWRMYXllclR5cGVbXT0+ey8vc3RlcDUgZnJvbSBzZWxlY3RlZCBpdGVtcyBnZXQgdGhlaXIgbGF5ZXJzXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICBpZiAocmVzdWx0cz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZExheWVyQ29udGVudHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudExheWVySWQgPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTGF5ZXJzLmluZGV4T2YoY3VycmVudExheWVySWQpICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJDb250ZW50c1tcImlkXCJdID0gaXRlbXNbMF0/LmxheWVyPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiYXR0cmlidXRlc1wiXSA9IHRoaXMuZ2V0QXR0cmlidXRlcyhpdGVtcyk7Ly9zdGVwNiBwYWNrYWdpbmcgYXR0cmlidXRlcyBhbmQga2VlcGluZyBsb24gYW5kIGxhdGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2VsZWN0ZWRMYXllckNvbnRlbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgICAgICAgICAgfSxbXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkTGF5ZXJzQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlcyA9IChpdGVtczphbnlbXSk6YW55W109PntcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQXJyYXkgPSBpdGVtcy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW0pPT57XHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5hdHRyaWJ1dGVzKXtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmdlb21ldHJ5KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGl0ZW0uZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBnZW9tZXRyeT8ubGF0aXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gZ2VvbWV0cnk/LmxvbmdpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvbmdpdHVkZSAmJiBsYXRpdHVkZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goey4uLml0ZW0uYXR0cmlidXRlcyxsb2NhdGlvbjpbbGF0aXR1ZGUsbG9uZ2l0dWRlXX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgICAgIH0sW10pXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1iZXJPZkF0dHJpYnV0ZXMgPSAobGF5ZXJzQ29udGVudHM6e2lkOnN0cmluZyxhdHRyaWJ1dGVzOmFueVtdfVtdKT0+e1xyXG4gICAgICAgIGxldCBsYXllckNvbnRlbnRzT2JqZWN0ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2kgPCBsYXllcnNDb250ZW50cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgIGxheWVyQ29udGVudHNPYmplY3QgPSB7Li4ubGF5ZXJDb250ZW50c09iamVjdCxbbGF5ZXJzQ29udGVudHNbaV0/LmlkXTpsYXllcnNDb250ZW50c1tpXT8uYXR0cmlidXRlcz8ubGVuZ3RoPz8wfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGF5ZXJDb250ZW50c09iamVjdDtcclxuICAgIH1cclxuIFxyXG4gICAgZ2V0Q2xpY2tlZExheWVyU3RhdHVzID0gKHJlc3VsdHM6YW55W10sc2VsZWN0ZWRMYXllcjpzZWxlY3RlZExheWVyVHlwZVtdKTpib29sZWFuPT57XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwICYmIHNlbGVjdGVkTGF5ZXI/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgcmVzdWx0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBsYXllcklkID0gcmVzdWx0c1tpXT8uZ3JhcGhpYz8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBzZWxlY3RlZExheWVyLmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT09IGxheWVySWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZMYXllcldhc0FkZGVkID0gKGxheWVySWQ6c3RyaW5nLG1hcExheWVyc0l0ZW1zOmFueVtdKT0+e1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICBpZiAobWFwTGF5ZXJzSXRlbXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBpbmRleCA9IG1hcExheWVyc0l0ZW1zLmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0/LmlkID09PSBsYXllcklkKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9wZW5UYWJsZUF0dHJpYnV0ZSA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgYXJpYUV4cGFuZGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1jb250cm9sbGVyXCIpO1xyXG4gICAgICAgIGlmIChhcmlhRXhwYW5kZWRFbGVtZW50LmFyaWFFeHBhbmRlZCA9PT0gXCJmYWxzZVwiKXtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGFyaWFFeHBhbmRlZEVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBdHRyaWJ1dGVUYWJsZSA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgYXJpYUV4cGFuZGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1jb250cm9sbGVyXCIpO1xyXG4gICAgICAgIGlmIChhcmlhRXhwYW5kZWRFbGVtZW50LmFyaWFFeHBhbmRlZCA9PT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgYXJpYUV4cGFuZGVkRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1iZXJPZkl0ZW1zSW5GaWVsZCA9IChmaWVsZDpzdHJpbmcsc2VsZWN0ZWRBdHRyaWJ1dGVzOmFueVtdKT0+e1xyXG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zID0gMDtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRBdHRyaWJ1dGVzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgbGV0IHZhbHVlQXJyID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDtpPCBzZWxlY3RlZEF0dHJpYnV0ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUFyci5wdXNoKHNlbGVjdGVkQXR0cmlidXRlc1tpXVtmaWVsZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXMgPSB2YWx1ZUFyci5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1iZXJPZkl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhpZ2hsaWdodGVkSWRzID0gKGZlYXR1cmVzOmFueVtdKT0+e1xyXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodElkcyA9IFtdO1xyXG4gICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGgpZmVhdHVyZXMuZm9yRWFjaChlbD0+aGlnaGxpZ2h0SWRzLnB1c2goZWwuYXR0cmlidXRlcy5PQkpFQ1RJRCkpXHJcbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodElkcztcclxuICAgIH1cclxuXHJcbiAgICBsaWtlbHlRdWVyeSA9IChhdHRyaWJ1dGVRdWVyeSxxdWVyeVZhbHVlLHZhbHVlKT0+e1xyXG4gICAgICAgIHN3aXRjaChxdWVyeVZhbHVlKXtcclxuICAgICAgICAgICAgY2FzZSBcIkxJS0UlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlUXVlcnl9IExJS0UgJyUke3ZhbHVlfSdgO1xyXG4gICAgICAgICAgICBjYXNlIFwiJUxJS0UlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlUXVlcnl9IExJS0UgJyUke3ZhbHVlfSUnYDtcclxuICAgICAgICAgICAgY2FzZSBcIiVMSUtFXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlUXVlcnl9IExJS0UgJyUke3ZhbHVlfSdgO1xyXG4gICAgICAgICAgICBjYXNlIFwiTk9UIExJS0VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTk9UIExJS0UgJyUke3ZhbHVlfSUnYDsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcXVlcnlTZXRDb25zdHJ1Y3RvciA9IChxdWVyeTphbnksc2V0V2hlcmVDbGF1c2U6YW55W10sQW5kT3JTZXQ6YW55LGZpZWxkOnN0cmluZyk9PntcclxuICAgICAgICBsZXQgY3VycmVudFF1ZXJ5ID0gcXVlcnkud2hlcmU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXRRdWVyeUFycmF5Lmxlbmd0aCA8IHNldFdoZXJlQ2xhdXNlLmxlbmd0aC0xLFwiY2hlY2tpbmdcIilcclxuICAgICAgICBpZiAodGhpcy5zZXRRdWVyeUFycmF5Lmxlbmd0aCA8IHNldFdoZXJlQ2xhdXNlLmxlbmd0aC0xKXtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXJ5ID0gcXVlcnkud2hlcmUgKyAgXCIgXCIgKyBBbmRPclNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRRdWVyeUFycmF5LnB1c2goY3VycmVudFF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnNldE91dEZpZWxkcy5wdXNoKGAke2ZpZWxkfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2V0UXVlcnlBcnJheSx0aGlzLnNldE91dEZpZWxkcyxcIm1ha2Ugc3VyZVwiKVxyXG4gICAgICAgIC8vIGlmKHRoaXMuc2V0UXVlcnlBcnJheS5sZW5ndGggPj0gc2V0V2hlcmVDbGF1c2UubGVuZ3RoKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHtxdWVyeVNldEFycmF5OnRoaXMuc2V0UXVlcnlBcnJheSxxdWVyeVNldE91dGZpZWxkczp0aGlzLnNldE91dEZpZWxkc31cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFibGVTZXRDb3VudHMgPSAodGFibGVTZXRDb3VudHM6e2lkOnN0cmluZyxkZWxldGVkOmJvb2xlYW59W10pPT57XHJcbiAgICAvLyAgICAgbGV0IGNvdW50cyA9IDBcclxuICAgIC8vICAgICBpZiAodGFibGVTZXRDb3VudHMubGVuZ3RoKXtcclxuICAgIC8vICAgICAgIGNvbnN0IGNvcGllZFRhYmxlU2V0Q291bnRzID0gWy4uLnRhYmxlU2V0Q291bnRzXTtcclxuICAgIC8vICAgICAgIGNvcGllZFRhYmxlU2V0Q291bnRzLmZpbHRlcigoaXRlbSk9PiFpdGVtLmRlbGV0ZWQpO1xyXG4gICAgLy8gICAgICAgY291bnRzID0gY29waWVkVGFibGVTZXRDb3VudHMubGVuZ3RoXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBjb3VudHM7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICBnZXRRdWVyeVNldFZhbHVlID0gKCk9Pih7cXVlcnlTZXRBcnJheTp0aGlzLnNldFF1ZXJ5QXJyYXkscXVlcnlTZXRPdXRmaWVsZHM6dGhpcy5zZXRPdXRGaWVsZHN9KVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhlbHBlcigpOyIsIlxuaW1wb3J0IHsgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCB7IGFwcEFjdGlvbnMgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5cbnR5cGUgc3BhdGlhbFJlbGF0aW9uc2hpcFR5cGUgPSBcImludGVyc2VjdHNcIiB8IFwiY29udGFpbnNcIiB8IFwiY3Jvc3Nlc1wiIHwgXCJkaXNqb2ludFwiIHwgXCJlbnZlbG9wZS1pbnRlcnNlY3RzXCIgfCBcImluZGV4LWludGVyc2VjdHNcIiB8IFwib3ZlcmxhcHNcIiB8IFwidG91Y2hlc1wiIHwgXCJ3aXRoaW5cIiB8IFwicmVsYXRpb25cIlxuXG50eXBlIGxheWVyT3BlblR5cGUgPSB7XG4gICAgZ2VvbWV0cnk6YW55LFxuICAgIHR5cGVTZWxlY3RlZDpzcGF0aWFsUmVsYXRpb25zaGlwVHlwZSxcbiAgICB3aGVyZT86c3RyaW5nLFxuICAgIGdyYXBoaWNzRm91bmQ/OmFueSxcbiAgICB2YWx1ZUJ1ZmZlcj86YW55XG59XG5cbnR5cGUgaW5pdE9ialR5cGUgPSB7XG4gICAgcmVzdWx0czphbnlbXSxcbiAgICBhbGxDaGVja2VkTGF5ZXJzPzphbnlbXSxcbiAgICBpc0xheWVyQ2hlY2tlZD86Ym9vbGVhbixcbiAgICBjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXSxcbiAgICBudW1iZXJPZkF0dHJpYnV0ZXM/Ontba2V5OnN0cmluZ106c3RyaW5nfSxcbiAgICBsYXllck9wZW4/OmxheWVyT3BlblR5cGUsXG4gICAgY3JlYXRlVGFibGU/OnRydWVcbn1cblxudHlwZSBzZWxlY3RlZExheWVyVHlwZSA9IHtpZDpzdHJpbmcsYXR0cmlidXRlczphbnlbXX1cblxuY2xhc3MgQXR0cmlidXRlVGFibGVDb25uZWN0b3Ige1xuXG4gICAgc3RhdGljIGFjdGl2ZVZpZXc6SmltdU1hcFZpZXcgPSBudWxsO1xuICAgIHN0YXRpYyBzZWxmOmFueSA9IG51bGw7XG5cbiAgICBhbGxDaGVja2VkTGF5ZXJzPzphbnlbXTtcbiAgICBjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXTtcbiAgICBudW1iZXJPZkF0dHJpYnV0ZXM/Ontba2V5OnN0cmluZ106c3RyaW5nfTtcbiAgICBjcmVhdGVUYWJsZTpib29sZWFuO1xuICAgIGxheWVyT3BlbjpsYXllck9wZW5UeXBlO1xuICAgIGlzTGF5ZXJDaGVja2VkOmJvb2xlYW5cblxuXG4gICAgY29uc3RydWN0b3IoYWN0aXZlVmlldzpKaW11TWFwVmlldyxzZWxmOmFueSl7XG4gICAgICAgIEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmFjdGl2ZVZpZXcgPSBhY3RpdmVWaWV3O1xuICAgICAgICBBdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5zZWxmID0gc2VsZjtcbiAgICB9XG5cbiAgICBpbml0KG9iajppbml0T2JqVHlwZSl7ICBcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gb2JqLnJlc3VsdHM7XG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSBvYmouYWxsQ2hlY2tlZExheWVycztcbiAgICAgICAgbGV0IGNyZWF0ZVRhYmxlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGlzTGF5ZXJDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBjaGVja2VkTGF5ZXJzID0gbnVsbDtcbiAgICAgICAgbGV0IG51bWJlck9mQXR0cmlidXRlcyA9IG51bGw7XG4gICAgICAgIGxldCBsYXllck9wZW4gPSBudWxsO1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwiY3JlYXRlVGFibGVcIikpe1xuICAgICAgICAgICAgY3JlYXRlVGFibGUgPSBvYmouY3JlYXRlVGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImlzTGF5ZXJDaGVja2VkXCIpKXtcbiAgICAgICAgICAgIGlzTGF5ZXJDaGVja2VkID0gb2JqLmlzTGF5ZXJDaGVja2VkIFxuICAgICAgICB9XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJjaGVja2VkTGF5ZXJzXCIpKXtcbiAgICAgICAgICAgIGNoZWNrZWRMYXllcnMgPSBvYmouY2hlY2tlZExheWVycyBcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwibnVtYmVyT2ZBdHRyaWJ1dGVzXCIpKXtcbiAgICAgICAgICAgIG51bWJlck9mQXR0cmlidXRlcyA9IG9iai5udW1iZXJPZkF0dHJpYnV0ZXMgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImxheWVyT3BlblwiKSl7XG4gICAgICAgICAgICBsYXllck9wZW4gPSBvYmoubGF5ZXJPcGVuIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlYXRlVGFibGUgPSBjcmVhdGVUYWJsZTtcbiAgICAgICAgdGhpcy5pc0xheWVyQ2hlY2tlZCA9IGlzTGF5ZXJDaGVja2VkO1xuICAgICAgICB0aGlzLnNldEFsbENoZWNrZWRMYXllcnMoYWxsQ2hlY2tlZExheWVycyxyZXN1bHRzKTtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkTGF5ZXJzKGFsbENoZWNrZWRMYXllcnMsY2hlY2tlZExheWVycyk7XG4gICAgICAgIC8vIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVycyhhbGxDaGVja2VkTGF5ZXJzKTtcbiAgICAgICAgdGhpcy5zZXROdW1iZXJPZkF0dHJpYnV0ZXMocmVzdWx0cyxudW1iZXJPZkF0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnNldExheWVyT3BlbihsYXllck9wZW4pO1xuICAgIH1cblxuICAgIGlzQXJyYXkgPSAodmFsKT0+QXJyYXkuaXNBcnJheSh2YWwpO1xuXG4gICAgaXNPYmplY3QgPSAodmFsKT0+T2JqZWN0LmtleXModmFsKS5sZW5ndGggPiAwICYmICFBcnJheS5pc0FycmF5KHZhbCk7XG5cbiAgICBsb29wTGF5ZXJHZXRJZHMgPSAobGF5ZXI6YW55W10pPT57XG4gICAgICAgIGxldCBpZHNBcnJheSA9IFtdO1xuICAgICAgICBpZiAobGF5ZXIubGVuZ3RoKXtcbiAgICAgICAgICAgIGlkc0FycmF5ID0gbGF5ZXIucmVkdWNlKChuZXdBcnJheSxpdGVtKT0+e1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgICB9LFtdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHNBcnJheTtcbiAgICB9XG5cblxuXG4gICAgc2V0Q2hlY2tlZExheWVycyA9IChjdXJyZW50QWxsQ2hlY2hlZExheWVyczphbnksY2hlY2tlZExheWVycz86c3RyaW5nW10sKT0+e1xuICAgICAgICBsZXQgYWxsQ2hlY2tlZExheWVycyA9IGN1cnJlbnRBbGxDaGVjaGVkTGF5ZXJzO1xuICAgICAgICBpZiAoIWFsbENoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgYWxsQ2hlY2tlZExheWVycyA9IHRoaXMuYWxsQ2hlY2tlZExheWVycztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tlZExheWVycyl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGVja2VkTGF5ZXJzQXJyID0gW107XG4gICAgICAgIGlmIChhbGxDaGVja2VkTGF5ZXJzKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGFsbENoZWNrZWRMYXllcnMpKXtcbiAgICAgICAgICAgICAgICBjaGVja2VkTGF5ZXJzQXJyLnB1c2goYWxsQ2hlY2tlZExheWVycy5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkTGF5ZXJzID0gY2hlY2tlZExheWVyc0FycjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0FycmF5KGFsbENoZWNrZWRMYXllcnMpKXtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZExheWVyc0Fyci5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkTGF5ZXJzQXJyID0gWy4uLmNoZWNrZWRMYXllcnNBcnIsLi4udGhpcy5sb29wTGF5ZXJHZXRJZHMoYWxsQ2hlY2tlZExheWVycyldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzQXJyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnMgPSB0aGlzLmxvb3BMYXllckdldElkcyhhbGxDaGVja2VkTGF5ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkTGF5ZXJzID0gY2hlY2tlZExheWVycztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFsbENoZWNrZWRMYXllcnNGcm9tUmVzdWx0cyA9IChyZXN1bHRzOmFueVtdKT0+e1xuICAgICAgICBpZiAocmVzdWx0cz8ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gcmVzdWx0cy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW1zOmFueVtdKT0+e1xuICAgICAgICAgICAgICAgIGlmIChpdGVtcz8ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbXNbMF0/LmxheWVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgICB9LFtdKVxuICAgICAgICAgICAgdGhpcy5hbGxDaGVja2VkTGF5ZXJzID0gYWxsQ2hlY2tlZExheWVycztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIlBhc3MgcmVzdWx0cyBhZnRlciBxdWVyeVwiXG5cbiAgICB9XG5cbiAgICBzZXRBbGxDaGVja2VkTGF5ZXJzID0gKGFsbENoZWNrZWRMYXllcnM6YW55LHJlc3VsdHM6YW55W10pPT57XG4gICAgICAgIGlmIChhbGxDaGVja2VkTGF5ZXJzKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGFsbENoZWNrZWRMYXllcnMpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbENoZWNrZWRMYXllcnMgPSBbYWxsQ2hlY2tlZExheWVyc11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZExheWVycyA9IGFsbENoZWNrZWRMYXllcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEFsbENoZWNrZWRMYXllcnNGcm9tUmVzdWx0cyhyZXN1bHRzKTtcbiBcbiAgICB9XG5cblxuICAgIGdldFNlbGVjdGVkQ29udGVudHNMYXllciA9KHJlc3VsdHM6YW55KTpzZWxlY3RlZExheWVyVHlwZVtdPT57XG4gICAgICAgIGNvbnN0IGNoZWNrZWRMYXllcnMgPSB0aGlzLmNoZWNrZWRMYXllcnM/P1tdO1xuICAgICAgICBsZXQgc2VsZWN0ZWRMYXllcnNBcnJheSA9IFtdO1xuICAgICAgICBpZiAocmVzdWx0cz8ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBzZWxlY3RlZExheWVyc0FycmF5ID0gcmVzdWx0cy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW1zOmFueVtdKT0+e1xuICAgICAgICAgICAgICAgIGlmIChpdGVtcz8ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZExheWVyQ29udGVudHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRMYXllcklkID0gaXRlbXNbMF0/LmxheWVyPy5pZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMYXllcnMuaW5kZXhPZihjdXJyZW50TGF5ZXJJZCkgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJDb250ZW50c1tcImlkXCJdID0gaXRlbXNbMF0/LmxheWVyPy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJDb250ZW50c1tcImF0dHJpYnV0ZXNcIl0gPSB0aGlzLmdldEF0dHJpYnV0ZXMoaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChzZWxlY3RlZExheWVyQ29udGVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICAgICAgfSxbXSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRMYXllcnNBcnJheTtcbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVzID0gKGl0ZW1zOmFueVtdKTphbnlbXT0+e1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQXJyYXkgPSBpdGVtcy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW0pPT57XG4gICAgICAgICAgICBpZiAoaXRlbT8uYXR0cmlidXRlcyl7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2VvbWV0cnkpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGl0ZW0uZ2VvbWV0cnk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0gZ2VvbWV0cnk/LmxhdGl0dWRlPz9nZW9tZXRyeT8uZXh0ZW50Py5jZW50ZXI/LmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBnZW9tZXRyeT8ubG9uZ2l0dWRlPz9nZW9tZXRyeT8uZXh0ZW50Py5jZW50ZXI/LmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvbmdpdHVkZSAmJiBsYXRpdHVkZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKHsuLi5pdGVtLmF0dHJpYnV0ZXMsbG9jYXRpb246W2xhdGl0dWRlLGxvbmdpdHVkZV19KTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgfSxbXSlcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNBcnJheTtcbiAgICB9XG5cbiAgICBzZXROdW1iZXJPZkF0dHJpYnV0ZXMgPSAocmVzdWx0czphbnlbXSxudW1iZXJPZkF0dHJpYnV0ZXM/Ontba2V5OnN0cmluZ106c3RyaW5nfSwpPT57XG4gICAgICAgIGlmIChudW1iZXJPZkF0dHJpYnV0ZXMpe1xuICAgICAgICAgICAgdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXMgPSBudW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGF5ZXJzQ29udGVudHMgPSB0aGlzLmdldFNlbGVjdGVkQ29udGVudHNMYXllcihyZXN1bHRzKTtcbiAgICAgICAgbGV0IGxheWVyQ29udGVudHNPYmplY3QgPSB7fTtcbiAgICAgICAgaWYgKGxheWVyc0NvbnRlbnRzPy5sZW5ndGgpe1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2kgPCBsYXllcnNDb250ZW50cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBsYXllckNvbnRlbnRzT2JqZWN0ID0gey4uLmxheWVyQ29udGVudHNPYmplY3QsW2xheWVyc0NvbnRlbnRzW2ldPy5pZF06bGF5ZXJzQ29udGVudHNbaV0/LmF0dHJpYnV0ZXM/Lmxlbmd0aD8/MH1cbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzID0gbGF5ZXJDb250ZW50c09iamVjdFxuICAgIH1cblxuICAgIHNldExheWVyT3BlbiA9IChsYXllck9wZW4/OmxheWVyT3BlblR5cGUpPT57XG4gICAgICAgIGlmIChsYXllck9wZW4pe1xuICAgICAgICAgICAgdGhpcy5sYXllck9wZW4gPSBsYXllck9wZW47XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllck9wZW4gPSB7XG4gICAgICAgICAgICBnZW9tZXRyeTpudWxsLFxuICAgICAgICAgICAgdHlwZVNlbGVjdGVkOlwiY29udGFpbnNcIixcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdGl2ZVZpZXcgPSAoKT0+QXR0cmlidXRlVGFibGVDb25uZWN0b3IuYWN0aXZlVmlldztcbiAgICBcbiAgICBnZXRBbGxDaGVja2VkTGF5ZXJzID0gKCk9PiB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG5cbiAgICBkaXNwYXRjaGluZ0FsbCA9ICgpPT57XG4gICAgICAgIGNvbnN0IHNlbGYgPSBBdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5zZWxmO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHNlbGYucHJvcHNcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmhhc093blByb3BlcnR5KFwiZGlzcGF0Y2hcIikgKXtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mQXR0cmlidXRlcyA9IHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJPcGVuID0gdGhpcy5sYXllck9wZW47XG4gICAgICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpO1xuICAgICAgICAgICAgaWYgKG51bWJlck9mQXR0cmlidXRlcyAmJiBsYXllck9wZW4gJiYgYWxsQ2hlY2tlZExheWVycyAmJiBhY3RpdmVWaWV3KXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNMYXllckNoZWNrZWQpe1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjaGVja2VkTGF5ZXJzXCIsdGhpcy5jaGVja2VkTGF5ZXJzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhudW1iZXJPZkF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwibnVtYmVyT2ZBdHRyaWJ1dGVcIixudW1iZXJPZkF0dHJpYnV0ZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwibGF5ZXJPcGVuXCIsbGF5ZXJPcGVuKSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImdldEFsbExheWVyc1wiLHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycykpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJnZXRBY3RpdmVWaWV3XCIsdGhpcy5nZXRBY3RpdmVWaWV3KSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJub0l0ZW1TZWxlY3RlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxheWVyT3Blbil0aHJvdyBcIlRoZXJlIGlzIG5vIGxheWVyIG9wZW5cIlxuICAgICAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpdGhyb3cgXCJUaGVyZSBpcyBubyBhbGwgY2hlY2tlZCBsYXllcnMgbWFrZSBzdXJlIHRvIHBhc3MgbGF5ZXJcIlxuICAgICAgICAgICAgaWYgKGFjdGl2ZVZpZXcpdGhyb3cgXCJUaGVyZSBpcyBubyBhY3RpdmVWaWV3LHBhc3MgamltdU1hcFZpZXcgd2hlbiBtYXAgbG9hZFwiXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgXCJQYXNzIHBhcmVudCB3aWRnZXQgdG8gdGhlIEF0dHJpYnV0ZUNvbm5lY3RvclwiXG5cbiAgICB9XG5cbiAgICBjbG9zZVRhYmxlID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wc1xuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSApe1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY2hlY2tlZExheWVyc1wiLFtdKSk7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb3BzID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wcztcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IGxheWVyT3BlbiA9IHRoaXMubGF5ZXJPcGVuO1xuICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7IFxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSl7XG4gICAgICAgICAgICBpZighbGF5ZXJPcGVuKXRocm93IFwiVGhlcmUgaXMgbm8gbGF5ZXIgb3BlblwiXG4gICAgICAgICAgICBpZiAoIWFsbENoZWNrZWRMYXllcnMpdGhyb3cgXCJUaGVyZSBpcyBubyBhbGwgY2hlY2tlZCBsYXllcnMgbWFrZSBzdXJlIHRvIHBhc3MgbGF5ZXJcIlxuICAgICAgICAgICAgaWYgKCFhY3RpdmVWaWV3KXRocm93IFwiVGhlcmUgaXMgbm8gYWN0aXZlVmlldyxwYXNzIGppbXVNYXBWaWV3IHdoZW4gbWFwIGxvYWRcIlxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhudW1iZXJPZkF0dHJpYnV0ZXMpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIlBhc3MgcGFyZW50IHdpZGdldCB0byB0aGUgQXR0cmlidXRlQ29ubmVjdG9yXCJcbiAgICB9XG5cbiAgICBkaXNwYXRjaENyZWF0ZVRhYmxlID0gKCk9PntcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmdldFByb3BzKCk7XG4gICAgICAgIGlmIChwcm9wcyl7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoQ2hlY2hlZExheWVycyA9IChjaGVja2VkTGF5ZXJzOnN0cmluZ1tdKT0+e1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcbiAgICAgICAgaWYgKHByb3BzKXtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNoZWNrZWRMYXllcnNcIixjaGVja2VkTGF5ZXJzKSk7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoRmlsdGVyVmFsdWUgPSAoZmlsdGVyVmFsdWU6bnVtYmVyKT0+e1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcbiAgICAgICAgaWYgKHByb3BzKXtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKSk7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlVGFibGVDb25uZWN0b3I7IiwiaW1wb3J0IHtCdXR0b24sT3B0aW9uLFNlbGVjdCx9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2VcIjtcbmltcG9ydCBSZWFjdFJlc2l6ZURldGVjdG9yIGZyb20gXCIuLi9saWIvUmVzaXplRGV0ZWN0b3JcIjtcbmltcG9ydCB7cXVlcnlDb25zdHJ1Y3Rvck51bWJlcixxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLH0gZnJvbSBcIi4uL3V0aWxzL3F1ZXJ5VGFibGVWYWx1ZVwiO1xuaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBDb21tb25TZWNvbmRDb25zdHJ1Y3RvciBmcm9tIFwiLi9jb21tb24vaW5wdXRzL2NvbW1vblNlY29uZENvbnN0cnVjdG9yXCI7XG5cbmZ1bmN0aW9uIEFkZFNldFRhYmxlKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBsaXN0LFxuICAgIGhhbmRsZVRoaXJkUXVlcnksXG4gICAgdGV4dElucHV0SGFuZGxlcixcbiAgICBtdWx0aVNlbGVjdEhhbmRsZXIsXG4gICAgZHJvcGRvd25JdGVtSGFuZGxlcixcbiAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIsXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcbiAgICBkcm9wZG93blZhbHVlUXVlcnksXG4gICAgaGFuZGxlQ2hlY2tCb3gsXG4gICAgaXNDaGVja2VkLFxuICAgIGNvdW50ZXJJc0NoZWNrZWQsXG4gICAgZHJvcERvd25Ub2dnbGVyLFxuICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCxcbiAgICBjaGVja2VkVG9RdWVyeSxcbiAgICBkZWxldGVUYWJsZSxcbiAgICBnZXRRdWVyeUF0dHJpYnV0ZSxcbiAgICAvLyBmb3IgQWRkIHNldCB0YWJsZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0YWJsZXNTZXQsXG4gICAgdGFibGVzU2V0SWQsXG4gICAgd2hlcmVDbGF1c2VzU2V0LFxuICAgIC8vIEVuZCBmb3IgQWRkIHNldCB0YWJsZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICB0YWJsZXMsXG4gICAgZ2V0UXVlcnksXG4gICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIsXG4gICAgZHJvcERvd24sXG4gICAgaXNPcGVuRHJvcEQsXG4gICAgb25DaGFuZ2VDaGVja0JveCxcbiAgICBvcGVuRHJvcCxcbiAgICBjbG9zZURyb3AsXG4gICAgb3BlbmVkLFxuICAgIGF1dE9wZW4sXG4gICAgbW91c2VsZWF2ZSxcbiAgICBvbm1vdXNlTGVhdmUsXG4gICAgZHJvcGRvd25zU2V0LFxuICAgIHNob3dEZWxldGUsXG4gICAgYmxvY2tJZCxcbiAgICBjdXJyZW50VGFibGUsXG4gICAgc2hvd0Jsb2NrRGVsZXRlLFxuICAgIHF1ZXJ5Q2hhbmdlZCxcbiAgICBwYXJlbnRcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGN1cnJlbnR3aGVyZUNsYXVzZXNTZXQgPSB3aGVyZUNsYXVzZXNTZXQuZmluZChcbiAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdGFibGVzU2V0SWRcbiAgKTtcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgc21hbGxlcldpZHRoT3V0ZXJDb250YWluZXI6e1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICBnYXA6JzMlJyxcbiAgICAgIG1pbldpZHRoOicyODBweCcsXG4gICAgICBtYXJnaW5Cb3R0b206MjBcbiAgICB9LFxuICAgIHNtYWxsZXJXaWR0aElubmVyQ29udGFpbmVyOntcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGdhcDogXCI1cHhcIixcbiAgICAgIHdpZHRoOlwiODAlXCIsXG4gICAgfSxcbiAgICBzbWFsbGVyV2lkdGhRdWVyeUNvbnRhaW5lcjp7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfSxcbiAgICBsYXJnZXJXaWR0aE91dGVyQ29udGFpbmVyOntcbiAgICAgIHdpZHRoOlwiMTAwJVwiXG4gICAgfSxcbiAgICBsYXJnZXJXaWR0aElubmVyQ29udGFpbmVyOntcbiAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDpcInN0YXJ0XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICBnYXA6XCIzJVwiLFxuICAgIH1cblxuICB9XG5cbiAgaWYgKGN1cnJlbnRUYWJsZS5pZCA9PT0gcGFyc2VJbnQodGFibGVzU2V0SWQuc3BsaXQoXCItXCIpWzBdKSAmJiFjdXJyZW50VGFibGUuZGVsZXRlZCkge1xuICAgIHJldHVybihcbiAgICAgIDxSZWFjdFJlc2l6ZURldGVjdG9yIGhhbmRsZVdpZHRoIGhhbmRsZUhlaWdodD5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xXCI+XG4gICAgICAgICAgICAgIHtsaXN0LmZpZWxkcyA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17d2lkdGggPD0gNjI1ID8gc3R5bGVzLnNtYWxsZXJXaWR0aE91dGVyQ29udGFpbmVyOnN0eWxlcy5sYXJnZXJXaWR0aE91dGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt3aWR0aCA8PSA2MjUgPyBzdHlsZXMuc21hbGxlcldpZHRoSW5uZXJDb250YWluZXI6c3R5bGVzLmxhcmdlcldpZHRoSW5uZXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17d2lkdGggPD0gNjI1ID8gXCIgXCI6XCJjb2wtbWQtNFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+Z2V0UXVlcnlBdHRyaWJ1dGUoZSxcInNldFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0LmZpZWxkcy5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJvaWRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJzbWFsbC1pbnRlZ2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwiaW50ZWdlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImRvdWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZT17ZWwudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5hbGlhc30gKHtlbC50eXBlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt3aWR0aCA8PSA2MjUgPyBcIiBcIjpcImNvbC1tZC00XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt3aWR0aCA8PSA2MjUgPyBzdHlsZXMuc21hbGxlcldpZHRoUXVlcnlDb250YWluZXI6e319XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KGUpID0+IGdldFF1ZXJ5KGUsIFwic2luZ2xlXCIpfSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudHdoZXJlQ2xhdXNlc1NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50d2hlcmVDbGF1c2VzU2V0LmF0dHJpYnV0ZVF1ZXJ5VHlwZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcXVlcnlDb25zdHJ1Y3RvclN0cmluZy5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIubWFwKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbW1vblNlY29uZENvbnN0cnVjdG9yIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlciA9IHt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtSGFuZGxlciA9IHtkcm9wZG93bkl0ZW1IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyID0ge3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIgPSB7dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQgPSB7Y291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCA9IHtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNJZCA9IHt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcyA9IHt3aGVyZUNsYXVzZXNTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93blRvZ2dsZXIgPSB7ZHJvcERvd25Ub2dnbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIgPSB7dW5pdm9jb1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93biA9IHtkcm9wRG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbkRyb3BEID0ge2lzT3BlbkRyb3BEfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveCA9IHtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3AgPSB7b3BlbkRyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURyb3AgPSB7Y2xvc2VEcm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRPcGVuID0ge2F1dE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmUgPSB7b25tb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zID0ge2Ryb3Bkb3duc1NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlDaGFuZ2VkID0ge3F1ZXJ5Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHtwYXJlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVR5cGUgPSBcInNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAod2lkdGggPj0gNjI2ICYmIHNob3dEZWxldGUpICYmIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtkZWxldGVUYWJsZX0gaWNvbj48Q2xvc2VPdXRsaW5lZCAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICh3aWR0aCA8PSA2MjUgJiYgc2hvd0RlbGV0ZSkgJiYgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfSBpY29uPjxDbG9zZU91dGxpbmVkIC8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgKFwiIFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3RSZXNpemVEZXRlY3Rvcj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFNldFRhYmxlO1xuIiwiaW1wb3J0IHtCdXR0b24sT3B0aW9uLFNlbGVjdH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZVwiO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSBcIi4uL2xpYi9SZXNpemVEZXRlY3RvclwiO1xuaW1wb3J0IHtxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmd9IGZyb20gXCIuLi91dGlscy9xdWVyeVRhYmxlVmFsdWVcIjtcbmltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgQ29tbW9uU2Vjb25kQ29uc3RydWN0b3IgZnJvbSBcIi4vY29tbW9uL2lucHV0cy9jb21tb25TZWNvbmRDb25zdHJ1Y3RvclwiO1xuXG5mdW5jdGlvbiBUYWJsZShwcm9wcykge1xuICBjb25zdCB7XG4gICAgbGlzdCxcbiAgICBoYW5kbGVUaGlyZFF1ZXJ5LFxuICAgIHRleHRJbnB1dEhhbmRsZXIsXG4gICAgbXVsdGlTZWxlY3RIYW5kbGVyLFxuICAgIGRyb3Bkb3duSXRlbUhhbmRsZXIsXG4gICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyLFxuICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIsXG4gICAgZHJvcGRvd25WYWx1ZVF1ZXJ5LFxuICAgIGhhbmRsZUNoZWNrQm94LFxuICAgIGlzQ2hlY2tlZCxcbiAgICBjb3VudGVySXNDaGVja2VkLFxuICAgIGRyb3BEb3duVG9nZ2xlcixcbiAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQsXG4gICAgY2hlY2tlZFRvUXVlcnksXG4gICAgZGVsZXRlVGFibGUsXG4gICAgdGFibGVzSWQsXG4gICAgZ2V0UXVlcnlBdHRyaWJ1dGUsXG4gICAgd2hlcmVDbGF1c2VzLFxuICAgIHRhYmxlcyxcbiAgICBnZXRRdWVyeSxcbiAgICB1bml2b2NvU2VsZWN0SGFuZGxlcixcbiAgICBkcm9wRG93bixcbiAgICBpc09wZW5Ecm9wRCxcbiAgICBvbkNoYW5nZUNoZWNrQm94LFxuICAgIG9wZW5Ecm9wLFxuICAgIGNsb3NlRHJvcCxcbiAgICBvcGVuZWQsXG4gICAgYXV0T3BlbixcbiAgICBtb3VzZWxlYXZlLFxuICAgIG9ubW91c2VMZWF2ZSxcbiAgICBkcm9wZG93bnMsXG4gICAgY3VycmVudFRhYmxlLFxuICAgIHF1ZXJ5Q2hhbmdlZCxcbiAgICBwYXJlbnRcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGN1cnJlbnR3aGVyZUNsYXVzZXMgPSB3aGVyZUNsYXVzZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYCR7dGFibGVzSWR9YCk7XG5cbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIHNtYWxsZXJXaWR0aE91dGVyQ29udGFpbmVyOntcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgZ2FwOiczJScsXG4gICAgICBtaW5XaWR0aDonMjgwcHgnLFxuICAgICAgbWFyZ2luQm90dG9tOjIwXG4gICAgfSxcbiAgICBzbWFsbGVyV2lkdGhJbm5lckNvbnRhaW5lcjp7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBnYXA6IFwiNXB4XCIsXG4gICAgICB3aWR0aDpcIjgwJVwiLFxuICAgIH0sXG4gICAgc21hbGxlcldpZHRoUXVlcnlDb250YWluZXI6e1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgbGFyZ2VyV2lkdGhPdXRlckNvbnRhaW5lcjp7XG4gICAgICB3aWR0aDpcIjEwMCVcIlxuICAgIH0sXG4gICAgbGFyZ2VyV2lkdGhJbm5lckNvbnRhaW5lcjp7XG4gICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6XCJzdGFydFwiLFxuICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgZ2FwOlwiMyVcIixcbiAgICB9XG4gIH1cblxuICBpZiAoY3VycmVudFRhYmxlLmlkID09PSB0YWJsZXNJZCAmJiAhY3VycmVudFRhYmxlLmRlbGV0ZWQpIHtcbiAgICByZXR1cm4oXG4gICAgICA8UmVhY3RSZXNpemVEZXRlY3RvciBoYW5kbGVXaWR0aCBoYW5kbGVIZWlnaHQ+XG4gICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMVwiPlxuICAgICAgICAgICAgICB7bGlzdC5maWVsZHMgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3dpZHRoIDw9IDYyNSA/IHN0eWxlcy5zbWFsbGVyV2lkdGhPdXRlckNvbnRhaW5lcjpzdHlsZXMubGFyZ2VyV2lkdGhPdXRlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7d2lkdGggPD0gNjI1ID8gc3R5bGVzLnNtYWxsZXJXaWR0aElubmVyQ29udGFpbmVyOnN0eWxlcy5sYXJnZXJXaWR0aElubmVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3dpZHRoIDw9IDYyNSA/IFwiIFwiOlwiY29sLW1kLTRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PmdldFF1ZXJ5QXR0cmlidXRlKGUsXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5maWVsZHMubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwib2lkXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic21hbGwtaW50ZWdlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImludGVnZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJkb3VibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU9e2VsLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuYWxpYXN9ICh7ZWwudHlwZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17d2lkdGggPD0gNjI1ID8gXCIgXCI6XCJjb2wtbWQtNFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7d2lkdGggPD0gNjI1ID8gc3R5bGVzLnNtYWxsZXJXaWR0aFF1ZXJ5Q29udGFpbmVyOnt9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBnZXRRdWVyeShlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgY2FtcG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudHdoZXJlQ2xhdXNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50d2hlcmVDbGF1c2VzLmF0dHJpYnV0ZVF1ZXJ5VHlwZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcXVlcnlDb25zdHJ1Y3RvclN0cmluZy5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIubWFwKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbW1vblNlY29uZENvbnN0cnVjdG9yIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGhpcmRRdWVyeT17aGFuZGxlVGhpcmRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRJbnB1dEhhbmRsZXI9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVNlbGVjdEhhbmRsZXI9e211bHRpU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbUhhbmRsZXI9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXI9e3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXI9e3RleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e2Ryb3Bkb3duVmFsdWVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrQm94PXtoYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZD17Y291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZD17ZnVuY3Rpb25Db3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFRvUXVlcnk9e2NoZWNrZWRUb1F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnlBdHRyaWJ1dGU9e2dldFF1ZXJ5QXR0cmlidXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzPXt3aGVyZUNsYXVzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNJZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93blRvZ2dsZXI9e2Ryb3BEb3duVG9nZ2xlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyPXt1bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duPXtkcm9wRG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbkRyb3BEPXtpc09wZW5Ecm9wRH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ2hlY2tCb3g9e29uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcD17b3BlbkRyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURyb3A9e2Nsb3NlRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17b3BlbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0T3Blbj17YXV0T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU9e21vdXNlbGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmU9e29ubW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3ducz17ZHJvcGRvd25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlDaGFuZ2VkID0ge3F1ZXJ5Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHtwYXJlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVR5cGUgPSBcInNpbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPj0gNjI2ICYmIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfSBpY29uPjxDbG9zZU91dGxpbmVkIC8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDw9IDYyNSAmJiA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCIgb25DbGljaz17ZGVsZXRlVGFibGV9IGljb24+PENsb3NlT3V0bGluZWQgLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAoXCIgXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdFJlc2l6ZURldGVjdG9yPlxuICAgIClcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCJcblxuaW1wb3J0IHtcbiAgICBEcm9wZG93bixcbiAgICBEcm9wZG93bkJ1dHRvbixcbiAgICBEcm9wZG93bkl0ZW0sXG4gICAgRHJvcGRvd25NZW51LFxuICAgIElucHV0LFxuICAgIFRleHRJbnB1dCxcbiAgfSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IHsgU2V0dGluZ091dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZ1wiO1xuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnXG5pbXBvcnQgUGFnaW5hdGlvbkNvbXBvZW5lbnQgZnJvbSBcIi4uLy4uL3BhZ2luYXRpb25cIjtcbmltcG9ydCBTZWxlY3RVbml2b2NvIGZyb20gXCIuL3NlbGVjdFwiO1xuXG5jb25zdCBDb21tb25TZWNvbmRDb25zdHJ1Y3RvciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW2N1cnJlbnRUYWJsZSxzZXRDdXJyZW50VGFibGVdID0gUmVhY3QudXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtvbkNoYW5naW5nUGFnZSxzZXRPbkNoYW5naW5nUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgbnVtYmVyT2ZJdGVtcyA9IDEwO1xuICBcbiAgICBjb25zdCB7XG4gICAgICB0ZXh0SW5wdXRIYW5kbGVyLFxuICAgICAgZHJvcGRvd25JdGVtSGFuZGxlcixcbiAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcixcbiAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIsXG4gICAgICBjb3VudGVySXNDaGVja2VkLFxuICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLFxuICAgICAgdGFibGVzSWQsXG4gICAgICB3aGVyZUNsYXVzZXMsXG4gICAgICBkcm9wRG93blRvZ2dsZXIsXG4gICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcixcbiAgICAgIGRyb3BEb3duLFxuICAgICAgaXNPcGVuRHJvcEQsXG4gICAgICBvbkNoYW5nZUNoZWNrQm94LFxuICAgICAgb3BlbkRyb3AsXG4gICAgICBjbG9zZURyb3AsXG4gICAgICBvcGVuZWQ6IGQsXG4gICAgICBhdXRPcGVuLFxuICAgICAgb25tb3VzZUxlYXZlLFxuICAgICAgZHJvcGRvd25zLFxuICAgICAgd2lkdGgsXG4gICAgICBxdWVyeUNoYW5nZWQsXG4gICAgICBwYXJlbnQsXG4gICAgICBxdWVyeVR5cGVcbiAgICB9ID0gcHJvcHM7XG4gICAgY29uc3Qgbm9ybWFsaXplZFRoaXJkUXVlcnkgPSBbXTtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gXCI9XCI7XG4gICAgbGV0IGRyb3Bkb3duVmFsdWVRdWVyeSA9IFwidmFsb3JlXCI7XG4gICAgbGV0IG9wZW5lZCA9IGZhbHNlO1xuICAgIGxldCBjaGVja2VkID0gMDtcbiAgICBsZXQgYXUgPSB0cnVlO1xuICAgIGxldCBkZWZhdWx0VGV4dFZhbHVlID0gXCIgXCI7XG4gICAgY29uc3QgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2VzLmZpbmQoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYCR7dGFibGVzSWR9YFxuICAgICk7XG4gICAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UuaWZJbk9yTm90SW5RdWVyeVZhbHVlKSB7XG4gICAgICBjdXJyZW50V2hlcmVDbGF1c2UuaWZJbk9yTm90SW5RdWVyeVZhbHVlLm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgbm9ybWFsaXplZFRoaXJkUXVlcnkucHVzaCh7XG4gICAgICAgICAgaWQ6IHRhYmxlc0lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgbGFiZWw6IGVsLmxhYmVsLnRvU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGVsLnZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgbGlzdGVsOiBjdXJyZW50V2hlcmVDbGF1c2UuY2hlY2tlZExpc3Q/P2N1cnJlbnRXaGVyZUNsYXVzZS5jaGVja2VkTGlzdFNldCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UucXVlcnlWYWx1ZSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gY3VycmVudFdoZXJlQ2xhdXNlLnF1ZXJ5VmFsdWU7XG4gICAgfVxuICAgIGlmIChjdXJyZW50V2hlcmVDbGF1c2UgJiYgY3VycmVudFdoZXJlQ2xhdXNlLmRyb3Bkb3duVmFsdWVRdWVyeSkge1xuICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5ID0gY3VycmVudFdoZXJlQ2xhdXNlLmRyb3Bkb3duVmFsdWVRdWVyeTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UuaXNPcGVuKSB7XG4gICAgICAvLyBvcGVuZWQgPSB3aGVyZUNsYXVzZXNbdGFibGVzSWRdLmlzT3BlbjtcbiAgICB9XG5cbiAgICBcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IGN1cnJlbnRXaGVyZUNsYXVzZT8uY2hlY2tlZExpc3Q7XG4gICAgY29uc3QgY2hlY2tlZExpc3RTZXQgPSBjdXJyZW50V2hlcmVDbGF1c2U/LmNoZWNrZWRMaXN0U2V0O1xuICAgIGlmIChjaGVja2VkTGlzdD8ubGVuZ3RoKXtcbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrZWRMaXN0Lmxlbmd0aFxuICAgIH1lbHNlIGlmIChjaGVja2VkTGlzdFNldD8ubGVuZ3RoKXtcbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrZWRMaXN0U2V0Lmxlbmd0aFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBjb3BpZWRub3JtYWxpemVkVGhpcmRRdWVyeSA9IFsuLi5ub3JtYWxpemVkVGhpcmRRdWVyeV07XG4gIFxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50VGFibGVbdGFibGVzSWRdPy5jdXJyZW50TnVtYmVyT2ZQYWdlID09PSAwICYmIFxuICAgICAgICBjb3BpZWRub3JtYWxpemVkVGhpcmRRdWVyeS5sZW5ndGhcbiAgICAgICl7XG4gICAgICAgIGNhbGN1bGF0ZVRvdGFsTnVtYmVyT2ZQYWdlKCk7XG4gICAgICAgIG9uSW5jcmVtZW50KCk7XG4gICAgICB9XG4gICAgfSxbY29waWVkbm9ybWFsaXplZFRoaXJkUXVlcnldKTtcbiAgXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgICBpZiAocXVlcnlDaGFuZ2VkW3RhYmxlc0lkXSAmJiBwYXJlbnQpe1xuICAgICAgICBzZXRDdXJyZW50VGFibGUoe1xuICAgICAgICAgIC4uLmN1cnJlbnRUYWJsZSxcbiAgICAgICAgICBbdGFibGVzSWRdOntcbiAgICAgICAgICAgIFwic3RhcnRJbmRleFwiOjAsXG4gICAgICAgICAgICBcImVuZEluZGV4XCI6MCxcbiAgICAgICAgICAgIFwiY3VycmVudE51bWJlck9mUGFnZVwiOjAsXG4gICAgICAgICAgICBcInRvdGFsTnVtYmVyT2ZQYWdlXCI6MFxuICAgICAgICB9fSlcbiAgICAgICAgcGFyZW50Py5zZXRTdGF0ZSh7cXVlcnlDaGFuZ2VkOnsuLi5xdWVyeUNoYW5nZWQsW3RhYmxlc0lkXTpmYWxzZX19KVxuICAgICAgfVxuICAgIH0sW3F1ZXJ5Q2hhbmdlZF0pXG4gIFxuICAgIGNvbnN0IGNhbGN1bGF0ZVRvdGFsTnVtYmVyT2ZQYWdlID0gKCk9PntcbiAgICAgIGlmIChjb3BpZWRub3JtYWxpemVkVGhpcmRRdWVyeS5sZW5ndGgpe1xuICAgICAgICBjb25zdCBuZXdUb3RhbE51bWJlck9mUGFnZSA9IE1hdGguY2VpbChjb3BpZWRub3JtYWxpemVkVGhpcmRRdWVyeS5sZW5ndGgvbnVtYmVyT2ZJdGVtcyk7XG4gICAgICAgIGxldCBuZXdDdXJyZW50VGFibGUgPSBjdXJyZW50VGFibGVbdGFibGVzSWRdO1xuICAgICAgICBpZiAobmV3Q3VycmVudFRhYmxlKXtcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7Li4ubmV3Q3VycmVudFRhYmxlLFwidG90YWxOdW1iZXJPZlBhZ2VcIjpuZXdUb3RhbE51bWJlck9mUGFnZX07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIG5ld0N1cnJlbnRUYWJsZSA9IHtcInRvdGFsTnVtYmVyT2ZQYWdlXCI6bmV3VG90YWxOdW1iZXJPZlBhZ2V9XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q3VycmVudFRhYmxlKHsuLi5jdXJyZW50VGFibGUsW3RhYmxlc0lkXTpuZXdDdXJyZW50VGFibGV9KVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgY29uc3Qgb25JbmNyZW1lbnQgPSAoKT0+e1xuICAgICAgY29uc3QgY3VycmVudE51bWJlck9mUGFnZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LmN1cnJlbnROdW1iZXJPZlBhZ2UgPz8gMDtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudE51bWJlck9mUGFnZSA8IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnRvdGFsTnVtYmVyT2ZQYWdlXG4gICAgICApe1xuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXT8uZW5kSW5kZXg/PzA7XG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGZpcnN0SW5kZXggKyBudW1iZXJPZkl0ZW1zO1xuICAgICAgICBjb25zdCBuZXdjdXJyZW50TnVtYmVyT2ZQYWdlID0gY3VycmVudE51bWJlck9mUGFnZSArIDE7XG4gICAgICAgIGxldCBuZXdDdXJyZW50VGFibGUgPSBjdXJyZW50VGFibGVbdGFibGVzSWRdO1xuICAgICAgICBpZiAobmV3Q3VycmVudFRhYmxlKXtcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7XG4gICAgICAgICAgICAuLi5uZXdDdXJyZW50VGFibGUsIFxuICAgICAgICAgICAgXCJzdGFydEluZGV4XCI6Zmlyc3RJbmRleCxcbiAgICAgICAgICAgIFwiZW5kSW5kZXhcIjpsYXN0SW5kZXgsXG4gICAgICAgICAgICBcImN1cnJlbnROdW1iZXJPZlBhZ2VcIjpuZXdjdXJyZW50TnVtYmVyT2ZQYWdlXG4gICAgICAgICAgfTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbmV3Q3VycmVudFRhYmxlID0ge1wic3RhcnRJbmRleFwiOmZpcnN0SW5kZXgsXCJlbmRJbmRleFwiOmxhc3RJbmRleCxcImN1cnJlbnROdW1iZXJPZlBhZ2VcIjpuZXdjdXJyZW50TnVtYmVyT2ZQYWdlfVxuICAgICAgICB9XG4gICAgICAgIHNldEN1cnJlbnRUYWJsZSh7Li4uY3VycmVudFRhYmxlLFt0YWJsZXNJZF06bmV3Q3VycmVudFRhYmxlfSlcbiAgICAgICAgc2V0T25DaGFuZ2luZ1BhZ2Uoey4uLm9uQ2hhbmdpbmdQYWdlLFt0YWJsZXNJZF06dHJ1ZX0pXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBjb25zdCBvbkRlY3JlbWVudCA9ICgpPT57XG4gICAgICBpZiAoY3VycmVudFRhYmxlW3RhYmxlc0lkXT8uc3RhcnRJbmRleCA+IDApe1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXS5zdGFydEluZGV4O1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0uZW5kSW5kZXg7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROdW1iZXJPZlBhZ2UgPSBjdXJyZW50VGFibGVbdGFibGVzSWRdLmN1cnJlbnROdW1iZXJPZlBhZ2VcbiAgICAgICAgY29uc3QgZmlyc3RJbmRleCA9IHN0YXJ0SW5kZXgtbnVtYmVyT2ZJdGVtcztcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gZW5kSW5kZXgtbnVtYmVyT2ZJdGVtcztcbiAgICAgICAgY29uc3QgbmV3Y3VycmVudE51bWJlck9mUGFnZSA9IGN1cnJlbnROdW1iZXJPZlBhZ2UgLSAxO1xuICAgICAgICBsZXQgbmV3Q3VycmVudFRhYmxlID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXTtcbiAgICAgICAgaWYgKG5ld0N1cnJlbnRUYWJsZSl7XG4gICAgICAgICAgbmV3Q3VycmVudFRhYmxlID0ge1xuICAgICAgICAgICAgLi4ubmV3Q3VycmVudFRhYmxlLCBcbiAgICAgICAgICAgIFwic3RhcnRJbmRleFwiOmZpcnN0SW5kZXgsXG4gICAgICAgICAgICBcImVuZEluZGV4XCI6bGFzdEluZGV4LFxuICAgICAgICAgICAgXCJjdXJyZW50TnVtYmVyT2ZQYWdlXCI6bmV3Y3VycmVudE51bWJlck9mUGFnZVxuICAgICAgICAgIH07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIG5ld0N1cnJlbnRUYWJsZSA9IHtcInN0YXJ0SW5kZXhcIjpmaXJzdEluZGV4LFwiZW5kSW5kZXhcIjpsYXN0SW5kZXgsXCJjdXJyZW50TnVtYmVyT2ZQYWdlXCI6bmV3Y3VycmVudE51bWJlck9mUGFnZX1cbiAgICAgICAgfVxuICAgICAgICBzZXRDdXJyZW50VGFibGUoey4uLmN1cnJlbnRUYWJsZSxbdGFibGVzSWRdOm5ld0N1cnJlbnRUYWJsZX0pO1xuICAgICAgICBzZXRPbkNoYW5naW5nUGFnZSh7Li4ub25DaGFuZ2luZ1BhZ2UsW3RhYmxlc0lkXTp0cnVlfSlcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdPy5zdGFydEluZGV4Pz8wO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXT8uZW5kSW5kZXg/PzEwO1xuICBcbiAgICBjb25zdCBxdWVyaWVzV2l0aFVuaXZvY28gPSBbXCI9XCIsXCI8PlwiLFwiPD1cIixcIj49XCIsXCI8XCIsXCI+XCJdO1xuICAgIGNvbnN0IHF1ZXJpZXNXaXRoTXVsdGlzZWxlY3QgPSBbXCJJTlwiLFwiTk9UX0lOXCJdO1xuICAgIGNvbnN0IHF1ZXJpZXNXaXRoTm90aGluZyA9IFtcImlzIG51bGxcIixcImlzIG5vdCBudWxsXCJdO1xuICAgIGNvbnN0IHF1ZXJpZXNXaXRoVHdvSW5wdXRzID0gW1wiaW5jbHVkZWRcIixcImlzX25vdF9pbmNsdWRlZFwiXTtcbiAgICBjb25zdCBxdWVyaWVzV2l0aFNpbmdsZUlucHV0ID0gW1wiTElLRSVcIixcIiVMSUtFXCIsXCIlTElLRSVcIixcIk5PVCBMSUtFXCJdO1xuICBcbiAgICByZXR1cm4oXG4gICAgICA8PlxuICAgICAgICB7XG4gICAgICAgICAgcXVlcmllc1dpdGhVbml2b2NvLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgJiYgXG4gICAgICAgICAgPGRpdiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBjbGFzc05hbWUgPSB7d2lkdGggPj0gNjI2ID8gXCJkLWZsZXggY29sLW1kLTRcIiA6XCIgXCJ9IHN0eWxlPXt3aWR0aCA+PSA2MjYgPyB7fTp7ZGlzcGxheTonZmxleCd9fT5cbiAgICAgICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgICAgICA8U2VsZWN0VW5pdm9jbyBcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFRhYmxlW3RhYmxlc0lkXT8uY3VycmVudE51bWJlck9mUGFnZT8/MH1cbiAgICAgICAgICAgICAgICB0b3RhbE51bWJlck9mUGFnZXMgPSB7Y3VycmVudFRhYmxlW3RhYmxlc0lkXT8udG90YWxOdW1iZXJPZlBhZ2U/PzB9XG4gICAgICAgICAgICAgICAgb25EZWNyZW1lbnQgPSB7b25EZWNyZW1lbnR9XG4gICAgICAgICAgICAgICAgb25JbmNyZW1lbnQgPSB7b25JbmNyZW1lbnR9XG4gICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy5zdGFydEluZGV4Pz8wfVxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0ge2N1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LmVuZEluZGV4Pz8wfVxuICAgICAgICAgICAgICAgIHRhYmxlc0lkID0ge3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgIGRyb3Bkb3ducyA9IHtkcm9wZG93bnN9XG4gICAgICAgICAgICAgICAgb3BlbkRyb3AgPSB7b3BlbkRyb3B9XG4gICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIgPSB7dW5pdm9jb1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgZGF0YSA9IHtjb3BpZWRub3JtYWxpemVkVGhpcmRRdWVyeX1cbiAgICAgICAgICAgICAgICBxdWVyeVR5cGUgPSB7cXVlcnlUeXBlPz9cInNpbmdsZVwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdpbmdQYWdlID0ge29uQ2hhbmdpbmdQYWdlfVxuICAgICAgICAgICAgICAgIHNldE9uQ2hhbmdpbmdQYWdlID0ge3NldE9uQ2hhbmdpbmdQYWdlfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IHtjdXJyZW50V2hlcmVDbGF1c2U/LnZhbHVlPy50eHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dElucHV0SGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VGV4dFZhbHVlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSxxdWVyeVR5cGU/P1wic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyaWVzV2l0aE11bHRpc2VsZWN0LmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgJiZcbiAgICAgICAgICA8ZGl2IHZhbHVlPXtkZWZhdWx0VmFsdWV9IG9uTW91c2VMZWF2ZT17KCkgPT4gb25tb3VzZUxlYXZlKCl9IGNsYXNzTmFtZSA9IHt3aWR0aCA+PSA2MjYgPyBcImQtZmxleCBjb2wtbWQtNFwiIDpcIiBcIn0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uIGlzT3Blbj17ZHJvcGRvd25zW3RhYmxlc0lkXX0gc3R5bGUgPSB7e3dpZHRoOlwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5Ecm9wKHRhYmxlc0lkKX0gc3R5bGUgPSB7e3dpZHRoOlwiMTAwJVwifX0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGVja2VkfSBlbGVtZW50aSBzZWxlemlvbmF0aVxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJkcm9wLWRvd24tbWVudS10YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5NdWx0aSBzZWxlemlvbmUgYXR0aXZhPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAgLz5cbiAgICAgICAgICAgICAgICAgICAge2NvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5LnNsaWNlKHN0YXJ0SW5kZXgsZW5kSW5kZXgpPy5tYXAoKGVsLGkpPT57XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5PXtcImZpeGVkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja1ZhbHVlID09PSBlbC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmNoZWNrVmFsdWUgPT09IGVsLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBtYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbkNvbXBvZW5lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtgJHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy5jdXJyZW50TnVtYmVyT2ZQYWdlPz8wfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbE51bWJlck9mUGFnZSA9IHtgJHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy50b3RhbE51bWJlck9mUGFnZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25kZWNyZW1lbnQgPSB7b25EZWNyZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmluY3JlbWVudCA9IHtvbkluY3JlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgcXVlcmllc1dpdGhOb3RoaW5nLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgJiYgXG4gICAgICAgICAgPGRpdiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBjbGFzc05hbWU9e3dpZHRoID4gNjI2ID8gXCJkLWZsZXggY29sLW1kLTRcIjpcIiBcIn0gc3R5bGU9e3dpZHRoID49IDYyNiA/IHt9OntkaXNwbGF5OidmbGV4J319PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyaWVzV2l0aFR3b0lucHV0cy5pbmNsdWRlcyhkZWZhdWx0VmFsdWUpICYmIFxuICAgICAgICAgIDxkaXYgdmFsdWU9e2RlZmF1bHRWYWx1ZX0gY2xhc3NOYW1lPXt3aWR0aCA+IDYyNiA/IFwiZC1mbGV4IGNvbC1tZC00XCI6XCIgXCJ9IHN0eWxlPXt3aWR0aCA+PSA2MjYgPyB7fTp7ZGlzcGxheTonZmxleCd9fT5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyKGUscXVlcnlUeXBlPz9cInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICBpZD1cImlucHV0c1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbC1zbS0yIHRleHQtY2VudGVyXCIgc3R5bGU9e3toZWlnaHQ6JzEwMCUnLGZvbnRTaXplOicxOHB4J319PmU8L3NwYW4+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIoZSxxdWVyeVR5cGU/P1wic2luZ2xlXCIpfVxuICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyaWVzV2l0aFNpbmdsZUlucHV0LmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgJiYgXG4gICAgICAgICAgPGRpdiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBjbGFzc05hbWU9e3dpZHRoID4gNjI2ID8gXCJkLWZsZXggY29sLW1kLTRcIjpcIiBcIn0gc3R5bGU9e3dpZHRoID49IDYyNiA/IHt9OntkaXNwbGF5OidmbGV4J319PlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50ZXh0SW5wdXRIYW5kbGVyKGUscXVlcnlUeXBlPz9cInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC8+XG4gICAgKVxuICB9O1xuXG4gIGV4cG9ydCBkZWZhdWx0IENvbW1vblNlY29uZENvbnN0cnVjdG9yOyIsIlxuaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQge0Ryb3Bkb3duLERyb3Bkb3duQnV0dG9uLERyb3Bkb3duTWVudSxEcm9wZG93bkl0ZW0sSW5wdXR9IGZyb20gJ2ppbXUtdWknXG5pbXBvcnQgeyBDaGVja091dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjaydcbmltcG9ydCBQYWdpbmF0aW9uQ29tcG9lbmVudCBmcm9tICcuLi8uLi9wYWdpbmF0aW9uJztcbmltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2NzcydcblxudHlwZSBQcm9wc1R5cGUgPSB7XG4gIHRhYmxlc0lkOm51bWJlcnxzdHJpbmdcbiAgZGF0YTphbnlbXSxcbiAgc3RhcnRJbmRleDpudW1iZXIsXG4gIGVuZEluZGV4Om51bWJlcixcbiAgdG90YWxOdW1iZXJPZlBhZ2VzOm51bWJlcixcbiAgY3VycmVudFBhZ2U6bnVtYmVyLFxuICBvbkluY3JlbWVudDooKT0+dm9pZCxcbiAgb25EZWNyZW1lbnQ6KCk9PnZvaWQsXG4gIHVuaXZvY29TZWxlY3RIYW5kbGVyOihjdXJyZW50VGFibGU6e3ZhbHVlOmFueSx0YWJsZUlkOnN0cmluZ30scXVlcnlUeXBlOnN0cmluZyk9PnZvaWQsXG4gIGRyb3Bkb3duczp7W2tleTpudW1iZXJ8c3RyaW5nXTpib29sZWFufSxcbiAgb3BlbkRyb3A6KHRhYmxlc0lkOnN0cmluZ3xudW1iZXIpPT52b2lkLFxuICBxdWVyeVR5cGU6c3RyaW5nLFxuICBvbkNoYW5naW5nUGFnZTp7W2tleTpzdHJpbmd8bnVtYmVyXTpib29sZWFufSxcbiAgc2V0T25DaGFuZ2luZ1BhZ2U6YW55LFxuICBjdXJyZW50VmFsdWU6c3RyaW5nfG51bWJlclxufVxuXG5jb25zdCBTZWxlY3RVbml2b2NvID0gKHByb3BzOlByb3BzVHlwZSk9PntcblxuICBjb25zdCBbY3VycmVudFRhYmxlLHNldEN1cnJlbnRUYWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IHtcbiAgICB0YWJsZXNJZCxcbiAgICBkYXRhLFxuICAgIHN0YXJ0SW5kZXgsXG4gICAgZW5kSW5kZXgsXG4gICAgdG90YWxOdW1iZXJPZlBhZ2VzLFxuICAgIGN1cnJlbnRQYWdlLFxuICAgIG9uSW5jcmVtZW50LFxuICAgIG9uRGVjcmVtZW50LFxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgIGRyb3Bkb3ducyxcbiAgICBvcGVuRHJvcCxcbiAgICBxdWVyeVR5cGUsXG4gICAgb25DaGFuZ2luZ1BhZ2UsXG4gICAgc2V0T25DaGFuZ2luZ1BhZ2UsXG4gICAgY3VycmVudFZhbHVlXG4gIH0gPSBwcm9wc1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xuICAgIGlmIChvbkNoYW5naW5nUGFnZVt0YWJsZXNJZF0pe1xuICAgICAgc2V0Q3VycmVudFRhYmxlKHsuLi5jdXJyZW50VGFibGUsW3RhYmxlc0lkXTp7XCJzZWxlY3RlZEluZGV4XCI6LTEsXCJzZWxlY3RlZEl0ZW1cIjpcIiBcIn19KVxuICAgICAgc2V0T25DaGFuZ2luZ1BhZ2Uoey4uLm9uQ2hhbmdpbmdQYWdlLFt0YWJsZXNJZF06ZmFsc2V9KTtcbiAgICB9XG4gIH0sW29uQ2hhbmdpbmdQYWdlXSlcblxuICBjb25zdCBnZXRDbGlja2VkSXRlbSA9ICh2YWx1ZTphbnksdGFibGVJZDpzdHJpbmd8bnVtYmVyLGluZGV4KT0+e1xuICAgIHNldEN1cnJlbnRUYWJsZSh7Li4uY3VycmVudFRhYmxlLFt0YWJsZUlkXTp7XCJzZWxlY3RlZEluZGV4XCI6aW5kZXgsXCJzZWxlY3RlZEl0ZW1cIjp2YWx1ZX19KTtcbiAgICBjb25zdCBjdXJyZW50VGFibGVJZCA9IHR5cGVvZiB0YWJsZUlkID09PSBcIm51bWJlclwiID8gYCR7dGFibGVJZH1gOnRhYmxlSWRcbiAgICBjb25zdCBvYmogPSB7dmFsdWUsdGFibGVJZDpjdXJyZW50VGFibGVJZH1cbiAgICB1bml2b2NvU2VsZWN0SGFuZGxlcihvYmoscXVlcnlUeXBlKTtcbiAgICBvcGVuRHJvcCh0YWJsZXNJZClcbiAgfVxuXG4gIGNvbnN0IHVucmVxdWlyZWRTZWxlY3RlZFZhbHVlID0gWycnLFwiIFwiLCcgJ107XG4gIGxldCBzZWxlY3RlZEl0ZW0gPSBjdXJyZW50VmFsdWU/P1wiIFwiXG4gIGNvbnN0IGN1cnJlbnRUYWJsZVNlbGVjdGVkVmFsdWUgPSBjdXJyZW50VGFibGVbdGFibGVzSWRdPy5zZWxlY3RlZEl0ZW07XG4gIGlmIChjdXJyZW50VGFibGVTZWxlY3RlZFZhbHVlICYmICF1bnJlcXVpcmVkU2VsZWN0ZWRWYWx1ZS5pbmNsdWRlcyhjdXJyZW50VGFibGVTZWxlY3RlZFZhbHVlKSl7XG4gICAgc2VsZWN0ZWRJdGVtID0gY3VycmVudFRhYmxlU2VsZWN0ZWRWYWx1ZVxuICB9XG4gIFxuICByZXR1cm4oXG4gICAgPERyb3Bkb3duXG4gICAgICBhY3RpdmVJY29uXG4gICAgICBpc09wZW49e2Ryb3Bkb3duc1t0YWJsZXNJZF19XG4gICAgICBzdHlsZSA9IHt7d2lkdGg6XCIxMDAlXCJ9fSBcbiAgICA+XG4gICAgICA8RHJvcGRvd25CdXR0b24gb25DbGljaz17KCkgPT4gb3BlbkRyb3AodGFibGVzSWQpfSBzdHlsZSA9IHt7d2lkdGg6XCIxMDAlXCJ9fT5cbiAgICAgICAgICB7c2VsZWN0ZWRJdGVtfVxuICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwiZHJvcC1kb3duLW1lbnUtdGFibGVcIiAgPlxuICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgIC8+XG4gICAgICAgICAge2RhdGE/LnNsaWNlKHN0YXJ0SW5kZXgsZW5kSW5kZXgpPy5tYXAoKGVsLGkpPT57XG4gICAgICAgICAgICBpZiAoZWwpe1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljayA9IHsoZSk9PmdldENsaWNrZWRJdGVtKGVsLnZhbHVlLHRhYmxlc0lkLGkpfT5cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k9e1wiZml4ZWRcIn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDoyMCxoZWlnaHQ6MjAsZGlzcGxheTpcImZsZXhcIixhbGlnbkl0ZW1zOlwiY2VudGVyXCIsanVzdGlmeUNvbnRlbnQ6XCJmbGV4LWVuZFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFRhYmxlW3RhYmxlc0lkXT8uc2VsZWN0ZWRJbmRleCA9PT0gaSAmJiA8Q2hlY2tPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGFibGVzSWR9IGNsYXNzTmFtZT1cIm1sLTMgbWItMFwiIGlkPXt0YWJsZXNJZH0+XG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UGFnaW5hdGlvbkNvbXBvZW5lbnRcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2Ake2N1cnJlbnRQYWdlfWB9XG4gICAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZQYWdlID0ge2Ake3RvdGFsTnVtYmVyT2ZQYWdlc31gfVxuICAgICAgICAgICAgICBvbmRlY3JlbWVudCA9IHtvbkRlY3JlbWVudH1cbiAgICAgICAgICAgICAgb25pbmNyZW1lbnQgPSB7b25JbmNyZW1lbnR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgIDwvRHJvcGRvd24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RVbml2b2NvOyIsIlxuaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBMZWZ0T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL2xlZnQnO1xuaW1wb3J0IHsgUmlnaHRPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQnXG5cbnR5cGUgUHJvcHNUeXBlID0ge1xuICAgIHRvdGFsTnVtYmVyT2ZQYWdlOnN0cmluZyxcbiAgICBjdXJyZW50UGFnZTpzdHJpbmcsXG4gICAgb25kZWNyZW1lbnQ6KCk9PnZvaWQsXG4gICAgb25pbmNyZW1lbnQ6KCk9PnZvaWRcbn1cblxuY29uc3QgUGFnaW5hdGlvbkNvbXBvZW5lbnQgPSAocHJvcHM6UHJvcHNUeXBlKT0+e1xuXG4gICAgY29uc3Qge3RvdGFsTnVtYmVyT2ZQYWdlLGN1cnJlbnRQYWdlLG9uZGVjcmVtZW50LG9uaW5jcmVtZW50fSA9IHByb3BzO1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICBvdXRlckNvbnRhaW5lcjp7XG4gICAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBnYXA6XCIzJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OjUwLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwid2hpdGVzbW9rZVwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOi0xMFxuICAgICAgICB9LFxuICAgICAgICBpY29uQ29udGFpbmVyOntcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAgd2lkdGg6XCIyNSVcIlxuICAgICAgICB9LFxuICAgICAgICBpbm5lckljb25Db250YWluZXI6e1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJyZ2IoMCw5NCwyMDIpXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBoZWlnaHQ6MzAsXG4gICAgICAgICAgICB3aWR0aDpcIjgwJVwiXG4gICAgICAgIH0sXG4gICAgICAgIHRleHRDb250YWluZXI6e1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50czpcImNlbnRlclwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAgd2lkdGg6XCI1MCVcIixcbiAgICAgICAgfSxcbiAgICAgICAgaW5uZXJUZXh0Q29udGFpbmVyOntcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAgaGVpZ2h0OjMwLFxuICAgICAgICAgICAgZm9udFNpemU6MTZcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBzdHlsZSA9IHtzdHlsZXMub3V0ZXJDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3N0eWxlcy5pY29uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3N0eWxlcy5pbm5lckljb25Db250YWluZXJ9IG9uQ2xpY2sgPSB7b25kZWNyZW1lbnR9PjxMZWZ0T3V0bGluZWQgY29sb3I9J3doaXRlJyBzaXplID0gezI1fSAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGV4dENvbnRhaW5lcn0+PGRpdiBzdHlsZT17c3R5bGVzLmlubmVyVGV4dENvbnRhaW5lcn0+e2N1cnJlbnRQYWdlfS97dG90YWxOdW1iZXJPZlBhZ2V9PC9kaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlID17c3R5bGVzLmljb25Db250YWluZXJ9IG9uQ2xpY2sgPSB7b25pbmNyZW1lbnR9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7c3R5bGVzLmlubmVySWNvbkNvbnRhaW5lcn0+PFJpZ2h0T3V0bGluZWQgY29sb3I9J3doaXRlJyBzaXplID0gezI1fSAvPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbkNvbXBvZW5lbnQ7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIGlzVmFsaWRFbGVtZW50LCBjbG9uZUVsZW1lbnQsIGNyZWF0ZVJlZiwgUmVhY3ROb2RlLCBSZWFjdEVsZW1lbnQsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHsgcGF0Y2hSZXNpemVIYW5kbGVyLCBpc0Z1bmN0aW9uLCBpc1NTUiwgaXNET01FbGVtZW50LCBjcmVhdGVOb3RpZmllciB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zIHtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoaWxkRnVuY3Rpb25Qcm9wczxFbGVtZW50VCBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zIHtcbiAgdGFyZ2V0UmVmPzogUmVmT2JqZWN0PEVsZW1lbnRUPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aXRoIG9ic2VydmFibGUgZWxlbWVudCdzIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgb25SZXNpemU/OiAod2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcikgPT4gdm9pZDtcbiAgLyoqXG4gICAqIFRyaWdnZXIgdXBkYXRlIG9uIGhlaWdodCBjaGFuZ2UuXG4gICAqIERlZmF1bHQ6IHRydWVcbiAgICovXG4gIGhhbmRsZUhlaWdodD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUcmlnZ2VyIG9uUmVzaXplIG9uIHdpZHRoIGNoYW5nZS5cbiAgICogRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgaGFuZGxlV2lkdGg/OiBib29sZWFuO1xuICAvKipcbiAgICogRG8gbm90IHRyaWdnZXIgdXBkYXRlIHdoZW4gYSBjb21wb25lbnQgbW91bnRzLlxuICAgKiBEZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgc2tpcE9uTW91bnQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgdXBkYXRlIHN0cmF0ZWd5LiBQb3NzaWJsZSB2YWx1ZXM6IFwidGhyb3R0bGVcIiBhbmQgXCJkZWJvdW5jZVwiLlxuICAgKiBTZWUgYGxvZGFzaGAgZG9jcyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBodHRwczovL2xvZGFzaC5jb20vZG9jcy9cbiAgICogdW5kZWZpbmVkIC0gY2FsbGJhY2sgd2lsbCBiZSBmaXJlZCBmb3IgZXZlcnkgZnJhbWUuXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgcmVmcmVzaE1vZGU/OiAndGhyb3R0bGUnIHwgJ2RlYm91bmNlJztcbiAgLyoqXG4gICAqIFNldCB0aGUgdGltZW91dC9pbnRlcnZhbCBmb3IgYHJlZnJlc2hNb2RlYCBzdHJhdGVneVxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICovXG4gIHJlZnJlc2hSYXRlPzogbnVtYmVyO1xuICAvKipcbiAgICogUGFzcyBhZGRpdGlvbmFsIHBhcmFtcyB0byBgcmVmcmVzaE1vZGVgIGFjY29yZGluZyB0byBsb2Rhc2ggZG9jc1xuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICovXG4gIHJlZnJlc2hPcHRpb25zPzogeyBsZWFkaW5nPzogYm9vbGVhbjsgdHJhaWxpbmc/OiBib29sZWFuIH07XG4gIC8qKlxuICAgKiBUaGVzZSBvcHRpb25zIHdpbGwgYmUgdXNlZCBhcyBhIHNlY29uZCBwYXJhbWV0ZXIgb2YgYHJlc2l6ZU9ic2VydmVyLm9ic2VydmVgIG1ldGhvZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNpemVPYnNlcnZlci9vYnNlcnZlXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgb2JzZXJ2ZXJPcHRpb25zPzogUmVzaXplT2JzZXJ2ZXJPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc2l6ZURldGVjdG9yUHJvcHM8RWxlbWVudFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQcm9wcyB7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIG9mIGFuIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICogWW91IGNhbiB1c2UgdGhpcyBwcm9wZXJ0eSB0byBhdHRhY2ggcmVzaXplLW9ic2VydmVyIHRvIGFueSBET00gZWxlbWVudC5cbiAgICogUGxlYXNlIHJlZmVyIHRvIHRoZSBxdWVyeVNlbGVjdG9yIGRvY3MuXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDUuMC4wLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA3LjAuMC5cbiAgICogVXNlIHRhcmdldFJlZiBpbnN0ZWFkXG4gICAqL1xuICBxdWVyeVNlbGVjdG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogVmFsaWQgb25seSBmb3IgYSBjYWxsYmFjay1wYXR0ZXJuLlxuICAgKiBJZ25vcmVkIGZvciBvdGhlciByZW5kZXIgdHlwZXMuXG4gICAqIFNldCByZXNpemUtZGV0ZWN0b3IncyBub2RlIHR5cGUuXG4gICAqIFlvdSBjYW4gcGFzcyBhbnkgdmFsaWQgUmVhY3Qgbm9kZTogc3RyaW5nIHdpdGggbm9kZSdzIG5hbWUgb3IgZWxlbWVudC5cbiAgICogQ2FuIGJlIHVzZWZ1bCB3aGVuIHlvdSBuZWVkIHRvIGhhbmRsZSB0YWJsZSdzIG9yIHBhcmFncmFwaCdzIHJlc2l6ZXMuXG4gICAqIERlZmF1bHQ6IFwiZGl2XCJcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiA1LjAuMC4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gNy4wLjAuXG4gICAqIFVzZSB0YXJnZXRSZWYgaW5zdGVhZFxuICAgKi9cbiAgbm9kZVR5cGU/OiBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHM7IC8vIHdpbGwgYmUgcGFzc2VkIHRvIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKVxuICAvKipcbiAgICogQSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICAgKiBCeSBkZWZhdWx0IGl0J3MgYSBwYXJlbnQgZWxlbWVudCBpbiByZWxhdGlvbiB0byB0aGUgUmVhY3RSZXNpemVEZXRlY3RvciBjb21wb25lbnQuXG4gICAqIEJ1dCB5b3UgY2FuIHBhc3MgYW55IERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgb21pdHRlZCB3aGVuIHlvdSBwYXNzIHF1ZXJ5U2VsZWN0b3IuXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDUuMC4wLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA2LjAuMC5cbiAgICogVXNlIHRhcmdldFJlZiBpbnN0ZWFkXG4gICAqL1xuICB0YXJnZXREb21FbD86IEVsZW1lbnRUO1xuICAvKipcbiAgICogQSBSZWFjdCByZWZlcmVuY2Ugb2YgdGhlIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICogUGFzcyBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB5b3Ugd2FudCB0byBhdHRhY2ggcmVzaXplIGhhbmRsZXJzIHRvLlxuICAgKiBJdCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIFJlYWN0LnVzZVJlZiBvciBSZWFjdC5jcmVhdGVSZWYgZnVuY3Rpb25zXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgdGFyZ2V0UmVmPzogUmVmT2JqZWN0PEVsZW1lbnRUPjtcblxuICByZW5kZXI/OiAocHJvcHM6IFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zKSA9PiBSZWFjdE5vZGU7XG5cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGUgfCAoKHByb3BzOiBDaGlsZEZ1bmN0aW9uUHJvcHM8RWxlbWVudFQ+KSA9PiBSZWFjdE5vZGUpO1xufVxuXG5jbGFzcyBSZXNpemVEZXRlY3RvcjxFbGVtZW50VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxcbiAgUmVzaXplRGV0ZWN0b3JQcm9wczxFbGVtZW50VD4sXG4gIFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zXG4+IHtcbiAgc2tpcE9uTW91bnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIHRhcmdldFJlZjtcbiAgb2JzZXJ2YWJsZUVsZW1lbnQ7XG4gIHJlc2l6ZUhhbmRsZXI7XG4gIHJlc2l6ZU9ic2VydmVyO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUmVzaXplRGV0ZWN0b3JQcm9wczxFbGVtZW50VD4pIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IHNraXBPbk1vdW50LCByZWZyZXNoTW9kZSwgcmVmcmVzaFJhdGUgPSAxMDAwLCByZWZyZXNoT3B0aW9ucyB9ID0gcHJvcHM7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIHRoaXMuc2tpcE9uTW91bnQgPSBza2lwT25Nb3VudDtcbiAgICB0aGlzLnRhcmdldFJlZiA9IGNyZWF0ZVJlZigpO1xuICAgIHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGlzU1NSKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSBwYXRjaFJlc2l6ZUhhbmRsZXIodGhpcy5jcmVhdGVSZXNpemVIYW5kbGVyLCByZWZyZXNoTW9kZSwgcmVmcmVzaFJhdGUsIHJlZnJlc2hPcHRpb25zKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IHdpbmRvdy5SZXNpemVPYnNlcnZlcih0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hPYnNlcnZlcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoT2JzZXJ2ZXIoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIGlmIChpc1NTUigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuY2FuY2VsSGFuZGxlcigpO1xuICB9XG5cbiAgY2FuY2VsSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5yZXNpemVIYW5kbGVyICYmIHRoaXMucmVzaXplSGFuZGxlci5jYW5jZWwpIHtcbiAgICAgIC8vIGNhbmNlbCBkZWJvdW5jZWQgaGFuZGxlclxuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyLmNhbmNlbCgpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgYXR0YWNoT2JzZXJ2ZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXRSZWYsIG9ic2VydmVyT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc1NTUigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFJlZiAmJiB0YXJnZXRSZWYuY3VycmVudCkge1xuICAgICAgdGhpcy50YXJnZXRSZWYuY3VycmVudCA9IHRhcmdldFJlZi5jdXJyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIC8vIGNhbid0IGZpbmQgZWxlbWVudCB0byBvYnNlcnZlXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgJiYgdGhpcy5vYnNlcnZhYmxlRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG9ic2VydmVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vYnNlcnZhYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH07XG5cbiAgZ2V0RWxlbWVudCA9ICgpOiBFbGVtZW50IHwgVGV4dCB8IG51bGwgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnlTZWxlY3RvciwgdGFyZ2V0RG9tRWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNTU1IoKSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBpbiBjYXNlIHdlIHBhc3MgYSBxdWVyeVNlbGVjdG9yXG4gICAgaWYgKHF1ZXJ5U2VsZWN0b3IpIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U2VsZWN0b3IpO1xuICAgIC8vIGluIGNhc2Ugd2UgcGFzcyBhIERPTSBlbGVtZW50XG4gICAgaWYgKHRhcmdldERvbUVsICYmIGlzRE9NRWxlbWVudCh0YXJnZXREb21FbCkpIHJldHVybiB0YXJnZXREb21FbDtcbiAgICAvLyBpbiBjYXNlIHdlIHBhc3MgYSBSZWFjdCByZWYgdXNpbmcgUmVhY3QuY3JlYXRlUmVmKClcbiAgICBpZiAodGhpcy50YXJnZXRSZWYgJiYgaXNET01FbGVtZW50KHRoaXMudGFyZ2V0UmVmLmN1cnJlbnQpKSByZXR1cm4gdGhpcy50YXJnZXRSZWYuY3VycmVudDtcblxuICAgIC8vIHRoZSB3b3JzZSBjYXNlIHdoZW4gd2UgZG9uJ3QgcmVjZWl2ZSBhbnkgaW5mb3JtYXRpb24gZnJvbSB0aGUgcGFyZW50IGFuZCB0aGUgbGlicmFyeSBkb2Vzbid0IGFkZCBhbnkgd3JhcHBlcnNcbiAgICAvLyB3ZSBoYXZlIHRvIHVzZSBhIGRlcHJlY2F0ZWQgYGZpbmRET01Ob2RlYCBtZXRob2QgaW4gb3JkZXIgdG8gZmluZCBhIERPTSBlbGVtZW50IHRvIGF0dGFjaCB0b1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50KSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHJlbmRlclR5cGUgPSB0aGlzLmdldFJlbmRlclR5cGUoKTtcbiAgICBzd2l0Y2ggKHJlbmRlclR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlbmRlclByb3AnOlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgICBjYXNlICdjaGlsZEZ1bmN0aW9uJzpcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuICAgICAgY2FzZSAnY2hpbGQnOlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgICBjYXNlICdjaGlsZEFycmF5JzpcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZVJlc2l6ZUhhbmRsZXI6IFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllczogUmVzaXplT2JzZXJ2ZXJFbnRyeVtdKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVXaWR0aCA9IHRydWUsIGhhbmRsZUhlaWdodCA9IHRydWUsIG9uUmVzaXplIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFoYW5kbGVXaWR0aCAmJiAhaGFuZGxlSGVpZ2h0KSByZXR1cm47XG5cbiAgICBjb25zdCBub3RpZnlSZXNpemUgPSBjcmVhdGVOb3RpZmllcihvblJlc2l6ZSwgdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpLCBoYW5kbGVXaWR0aCwgaGFuZGxlSGVpZ2h0KTtcblxuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IChlbnRyeSAmJiBlbnRyeS5jb250ZW50UmVjdCkgfHwge307XG5cbiAgICAgIGNvbnN0IHNob3VsZFNldFNpemUgPSAhdGhpcy5za2lwT25Nb3VudCAmJiAhaXNTU1IoKTtcbiAgICAgIGlmIChzaG91bGRTZXRTaXplKSB7XG4gICAgICAgIG5vdGlmeVJlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2tpcE9uTW91bnQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRSZW5kZXJUeXBlID0gKCk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgeyByZW5kZXIsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpc0Z1bmN0aW9uKHJlbmRlcikpIHtcbiAgICAgIC8vIERFUFJFQ0FURUQuIFVzZSBgQ2hpbGQgRnVuY3Rpb24gUGF0dGVybmAgaW5zdGVhZFxuICAgICAgcmV0dXJuICdyZW5kZXJQcm9wJztcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiAnY2hpbGRGdW5jdGlvbic7XG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgICAgcmV0dXJuICdjaGlsZCc7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAvLyBERVBSRUNBVEVELiBXcmFwIGNoaWxkcmVuIHdpdGggYSBzaW5nbGUgcGFyZW50XG4gICAgICByZXR1cm4gJ2NoaWxkQXJyYXknO1xuICAgIH1cblxuICAgIC8vIERFUFJFQ0FURUQuIFVzZSBgQ2hpbGQgRnVuY3Rpb24gUGF0dGVybmAgaW5zdGVhZFxuICAgIHJldHVybiAncGFyZW50JztcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZW5kZXIsIGNoaWxkcmVuLCBub2RlVHlwZTogV3JhcHBlclRhZyA9ICdkaXYnIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7IHdpZHRoLCBoZWlnaHQsIHRhcmdldFJlZjogdGhpcy50YXJnZXRSZWYgfTtcbiAgICBjb25zdCByZW5kZXJUeXBlID0gdGhpcy5nZXRSZW5kZXJUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHJlbmRlclR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlbmRlclByb3AnOlxuICAgICAgICByZXR1cm4gcmVuZGVyPy4oY2hpbGRQcm9wcyk7XG4gICAgICBjYXNlICdjaGlsZEZ1bmN0aW9uJzoge1xuICAgICAgICBjb25zdCBjaGlsZEZ1bmN0aW9uID0gY2hpbGRyZW4gYXMgKHByb3BzOiBDaGlsZEZ1bmN0aW9uUHJvcHM8RWxlbWVudFQ+KSA9PiBSZWFjdE5vZGU7XG4gICAgICAgIHJldHVybiBjaGlsZEZ1bmN0aW9uPy4oY2hpbGRQcm9wcyk7XG4gICAgICB9XG4gICAgICBjYXNlICdjaGlsZCc6IHtcbiAgICAgICAgLy8gQFRPRE8gYnVnIHByb25lIGxvZ2ljXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW4gYXMgUmVhY3RFbGVtZW50O1xuICAgICAgICBpZiAoY2hpbGQudHlwZSAmJiB0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBjaGlsZCBpcyBhIG5hdGl2ZSBET00gZWxlbWVudHMgc3VjaCBhcyBkaXYsIHNwYW4gZXRjXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0UmVmLCAuLi5uYXRpdmVQcm9wcyB9ID0gY2hpbGRQcm9wcztcbiAgICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCBuYXRpdmVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xhc3Mgb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgb3RoZXJ3aXNlXG4gICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICAgICAgfVxuICAgICAgY2FzZSAnY2hpbGRBcnJheSc6IHtcbiAgICAgICAgY29uc3QgY2hpbGRBcnJheSA9IGNoaWxkcmVuIGFzIFJlYWN0RWxlbWVudFtdO1xuICAgICAgICByZXR1cm4gY2hpbGRBcnJheS5tYXAoZWwgPT4gISFlbCAmJiBjbG9uZUVsZW1lbnQoZWwsIGNoaWxkUHJvcHMpKTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8V3JhcHBlclRhZyAvPjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzaXplRGV0ZWN0b3I7XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuaW1wb3J0IHR5cGUgeyBEZWJvdW5jZWRGdW5jIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgUHJvcHMsIFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zIH0gZnJvbSAnLi9SZXNpemVEZXRlY3Rvcic7XG5cbmV4cG9ydCB0eXBlIFBhdGNoZWRSZXNpemVPYnNlcnZlckNhbGxiYWNrID0gRGVib3VuY2VkRnVuYzxSZXNpemVPYnNlcnZlckNhbGxiYWNrPiB8IFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2s7XG5cbmV4cG9ydCBjb25zdCBwYXRjaFJlc2l6ZUhhbmRsZXIgPSAoXG4gIHJlc2l6ZUNhbGxiYWNrOiBSZXNpemVPYnNlcnZlckNhbGxiYWNrLFxuICByZWZyZXNoTW9kZTogUHJvcHNbJ3JlZnJlc2hNb2RlJ10sXG4gIHJlZnJlc2hSYXRlOiBQcm9wc1sncmVmcmVzaFJhdGUnXSxcbiAgcmVmcmVzaE9wdGlvbnM6IFByb3BzWydyZWZyZXNoT3B0aW9ucyddXG4pOiBQYXRjaGVkUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayA9PiB7XG4gIHN3aXRjaCAocmVmcmVzaE1vZGUpIHtcbiAgICBjYXNlICdkZWJvdW5jZSc6XG4gICAgICByZXR1cm4gZGVib3VuY2UocmVzaXplQ2FsbGJhY2ssIHJlZnJlc2hSYXRlLCByZWZyZXNoT3B0aW9ucyk7XG4gICAgY2FzZSAndGhyb3R0bGUnOlxuICAgICAgcmV0dXJuIHRocm90dGxlKHJlc2l6ZUNhbGxiYWNrLCByZWZyZXNoUmF0ZSwgcmVmcmVzaE9wdGlvbnMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcmVzaXplQ2FsbGJhY2s7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gKGZuOiB1bmtub3duKTogYm9vbGVhbiA9PiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpc1NTUiA9ICgpOiBib29sZWFuID0+IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgY29uc3QgaXNET01FbGVtZW50ID0gKGVsZW1lbnQ6IHVua25vd24pOiBib29sZWFuID0+XG4gIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOb3RpZmllciA9XG4gIChcbiAgICBvblJlc2l6ZTogUHJvcHNbJ29uUmVzaXplJ10sXG4gICAgc2V0U2l6ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248UmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnM+PixcbiAgICBoYW5kbGVXaWR0aDogYm9vbGVhbixcbiAgICBoYW5kbGVIZWlnaHQ6IGJvb2xlYW5cbiAgKSA9PlxuICAoeyB3aWR0aCwgaGVpZ2h0IH06IFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zKTogdm9pZCA9PiB7XG4gICAgc2V0U2l6ZShwcmV2ID0+IHtcbiAgICAgIGlmIChwcmV2LndpZHRoID09PSB3aWR0aCAmJiBwcmV2LmhlaWdodCA9PT0gaGVpZ2h0KSB7XG4gICAgICAgIC8vIHNraXAgaWYgZGltZW5zaW9ucyBoYXZlbid0IGNoYW5nZWRcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9XG5cbiAgICAgIGlmICgocHJldi53aWR0aCA9PT0gd2lkdGggJiYgIWhhbmRsZUhlaWdodCkgfHwgKHByZXYuaGVpZ2h0ID09PSBoZWlnaHQgJiYgIWhhbmRsZVdpZHRoKSkge1xuICAgICAgICAvLyBwcm9jZXNzIGBoYW5kbGVIZWlnaHQvaGFuZGxlV2lkdGhgIHByb3BzXG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfVxuXG4gICAgICBvblJlc2l6ZT8uKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfSk7XG4gIH07XG4iLCIvKipcclxuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBfd2lkZ2V0TGFiZWw6ICdDb3N0cnV0dG9yZSBRdWVyeScsXHJcbiAgICBzZWxlY3RHZW9tZXRyeTpcIlNlbGV6aW9uYXJlIGxhIGdlb21ldHJpYVwiLFxyXG4gICAgbGF5ZXJzOlwiU3RyYXRpXCIsXHJcbiAgICB6b29tQTpcIlpvb20gQVwiLFxyXG4gICAgZXhwb3J0Q3N2OlwiRXNwb3J0YXppb25lIGluIGZpbGUgY3N2XCIsXHJcbiAgICBleHBvcnRKc29uOlwiRXNwb3J0YXppb25lIGluIHVuYSByYWNjb2x0YSBkaSBmdW56aW9uaVwiLFxyXG4gICAgc3RhdGlzdGljczpcIlN0YXRpc3RpY2hlXCIsXHJcbiAgICBjcmVhdGVMYXllcjpcIkNyZWFyZSBpbCBsaXZlbGxvXCIsXHJcbiAgICBhdHRyaWJ1dGVUYWJsZTpcIlZpc3RhIG5lbGxhIHRhYmVsbGEgZGVnbGkgYXR0cmlidXRpXCIsXHJcbiAgICBkZWxldGU6XCJDYW5jZWxsYXJlXCIsXHJcbiAgICBjb3VudE9mSXRlbXM6XCJDb250ZWdnaW8gZGVnbGkgYXJ0aWNvbGlcIixcclxuICAgIHN1bU9mVmFsdWVzOlwiU29tbWEgZGVpIHZhbG9yaVwiLFxyXG4gICAgbWluaW11bTpcIk1pbmltb1wiLFxyXG4gICAgbWF4aW11bTpcIk1hc3NpbW9cIixcclxuICAgIGF2ZXJhZ2U6XCJNZWRpYVwiLFxyXG4gICAgc2VsZWN0QnlQb2ludDpcIlNlbGV6aW9uZSBwZXIgcHVudG9cIixcclxuICAgIHNlbGVjdGlvbkJ5TGluZTpcIlNlbGV6aW9uZSBwZXIgbGluZWFcIixcclxuICAgIHNlbGVjdGlvbkJ5UG9seWdvbjpcIlNlbGV6aW9uZSBwZXIgcG9saWdvbm9cIixcclxuICAgIHNlbGVjdGlvbkJ5UmVjdGFuZ3VsYXI6XCJTZWxlemlvbmUgcGVyIHJldHRhbmdvbG9cIixcclxuICAgIHNlbGVjdGlvbkJ5Q2lyY2xlOlwiU2VsZXppb25lIHBlciBjZXJjaGlvXCIsXHJcbiAgICByZWZyZXNoOlwiQWdnaW9ybmFyZVwiLFxyXG4gICAgb2s6XCJPS1wiLFxyXG4gICAgY2FuY2VsOlwiQW5udWxsYW1lbnRvXCIsXHJcbiAgICBmaWVsZHM6XCJDYW1waVwiLFxyXG4gICAgc2VsZWN0aW9uQWN0aW9uOlwiU2VsZXppb25lIEF6aW9uZVwiLFxyXG4gICAgbWFwTG9hZGluZzpcIkluIGF0dGVzYSBkZWwgY2FyaWNhbWVudG8gZGVsbGEgbWFwcGEuLi5cIixcclxuICAgIG5vU2VsZWN0ZWRJdGVtOlwiTm9uIMOoIHN0YXRhIHNlbGV6aW9uYXRhIGFsY3VuYSB2b2NlXCIsXHJcbiAgICBub0l0ZW1TZWxlY3RlZDpcIk5vbiDDqCBzdGF0byB0cm92YXRvIGFsY3VuIGF0dHJpYnV0byBkb3BvIGwnaW50ZXJyb2dhemlvbmVcIlxyXG59XHJcbiIsImNvbnN0ICBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyID0gW1xyXG4gICAgeyBuYW1lOiAnw6gnLCB2YWx1ZTogJz0nIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6gnLCB2YWx1ZTogJzw+JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdW5vIGRpJywgdmFsdWU6ICdJTicgfSwgLy8gT0JKRUNUSUQgSU4gKDEsMiwzKVxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIG5lc3N1bm8gZGknLCB2YWx1ZTogJ05PVF9JTicgfSwgLy8gICBPQkpFQ1RJRCBOT1RfSU4gKDEsMiwzKVxyXG4gICAgeyBuYW1lOiAnw6ggYWxtZW5vJywgdmFsdWU6ICc8PScgfSxcclxuICAgIHsgbmFtZTogJ8OoIGFsIG1hc3NpbW8nLCB2YWx1ZTogJz49JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggbWlub3JlIGRpJywgdmFsdWU6ICc8JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggbWFnZ2lvcmUgZGknLCB2YWx1ZTogJz4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB2dW90bycsIHZhbHVlOiAnaXMgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCB2dW90bycsIHZhbHVlOiAnaXMgbm90IG51bGwnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBjb21wcmVzbyB0cmEnLCB2YWx1ZTogJ2luY2x1ZGVkJyB9LCAvLyBPQkpFQ1RJRCA8IDIgQU5EIE9CSkVDVElEID4gNFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIGNvbXByZXNvIHRyYScsIHZhbHVlOiAnaXNfbm90X2luY2x1ZGVkJyB9IC8vZGEgdHJvdmFyZVxyXG5dO1xyXG5jb25zdCAgIHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcgPSBbXHJcbiAgICB7IG5hbWU6ICfDqCcsIHZhbHVlOiAnPScgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCcsIHZhbHVlOiAnPD4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB1bm8gZGknLCB2YWx1ZTogJ0lOJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIG5lc3N1bm8gZGknLCB2YWx1ZTogJ05PVF9JTicgfSxcclxuICAgIHsgbmFtZTogJ2luaXppYSBjb24nLCB2YWx1ZTogJ0xJS0UlJyB9LFxyXG4gICAgeyBuYW1lOiAndGVybWluYSBjb24nLCB2YWx1ZTogJyVMSUtFJyB9LFxyXG4gICAgeyBuYW1lOiAnY29udGllbmUnLCB2YWx1ZTogJyVMSUtFJScgfSxcclxuICAgIHsgbmFtZTogJ25vbiBjb250aWVuZScsIHZhbHVlOiAnTk9UIExJS0UnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB2dW90bycsIHZhbHVlOiAnaXMgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCB2dW90bycsIHZhbHVlOiAnaXMgbm90IG51bGwnIH1cclxuXTtcclxuZXhwb3J0IHsgcXVlcnlDb25zdHJ1Y3Rvck51bWJlciwgcXVlcnlDb25zdHJ1Y3RvclN0cmluZyB9IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9seWdvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZXN0X3N1cHBvcnRfUXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMsIGpzeCwgYXBwQWN0aW9ucyB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZVwiO1xuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsdXNcIjtcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgU2VsZWN0LCBPcHRpb24sIEFsZXJ0LCBCdXR0b24sIEljb24gfSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgUXVlcnkgZnJvbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCI7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCIuL2NvbXBvbmVudHMvVGFibGVcIjtcbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4uL2Nvbm5lY3RvclwiO1xuaW1wb3J0IFBvbHlnb24gZnJvbSBcImVzcmkvZ2VvbWV0cnkvUG9seWdvblwiO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSBcIi4vbGliL1Jlc2l6ZURldGVjdG9yXCI7XG5pbXBvcnQgQXR0cmlidXRlVGFibGVDb25uZWN0b3IgZnJvbSBcIi4uL2Nvbm5lY3Rvci9hdHRyaWJ1dGVfdGFibGVfY29ubmVjdG9yXCI7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIjtcbmltcG9ydCBBZGRTZXRUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL0FkZFNldFRhYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIEFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcbiAgYW55XG4+IHtcbiAgZ3JhcGhpY0xheWVyRm91bmQgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiBcImhpZGVcIiwgdmlzaWJsZTogdHJ1ZSB9KTtcbiAgZ3JhcGhpY0xheWVyU2VsZWN0ZWQgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiBcImhpZGVcIiwgdmlzaWJsZTogdHJ1ZSB9KTtcblxuICBzdGF0aWMgYWN0aXZlViA9IG51bGw7XG4gIHN0YXRpYyBqaW11TGF5ZXJWaWV3eiA9IG51bGw7XG4gIHN0YXRpYyBhdHRyaWJ1dGVfdGFibGVfZGF0YSA9IG51bGw7XG4gIHN0YXRpYyBpbml0aWFsWm9vbSA9IDA7XG5cbiAgYXR0cmlidXRlVGFibGVDb25uZWN0b3IgPSBudWxsO1xuICBxdWVyeUFycmF5ID0gW107XG4gIG91dGZpZWxkcyA9IFtdO1xuICBjdXJyZW50TGF5ZXJWaWV3ID0gbnVsbDtcbiAgc2V0UXVlcnlBcnJheSA9IFtdO1xuICBzZXRPdXRGaWVsZHMgPSBbXTtcbiAgc2V0UXVlcnlTdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgLy9MYXllclxuICAgIHRoaXMub25DaGFuZ2VTZWxlY3RMYXllciA9IHRoaXMub25DaGFuZ2VTZWxlY3RMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UXVlcnlBdHRyaWJ1dGUgPSB0aGlzLmdldFF1ZXJ5QXR0cmlidXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVyeSA9IHRoaXMuZ2V0UXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRRdWVyeSA9IHRoaXMuc2VuZFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kUXVlcnlTZXQgPSB0aGlzLnNlbmRRdWVyeVNldC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMucnVuYm90aFF1ZXJpZXM9IHRoaXMucnVuYm90aFF1ZXJpZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRoaXJkUXVlcnkgPSB0aGlzLnRoaXJkUXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyb3Bkb3duSXRlbUNsaWNrID0gdGhpcy5kcm9wZG93bkl0ZW1DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hvb3NlQW5kT3IgPSB0aGlzLmNob29zZUFuZE9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaG9vc2VBbmRPclNldCA9IHRoaXMuY2hvb3NlQW5kT3JTZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlRHJvcCA9IHRoaXMuY2xvc2VEcm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuRHJvcCA9IHRoaXMub3BlbkRyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gdGhpcy5jbG9zZURyb3BPbmNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25tb3VzZUxlYXZlID0gdGhpcy5vbm1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldEFsbEppbXVMYXllclZpZXdzID0gdGhpcy5nZXRBbGxKaW11TGF5ZXJWaWV3cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uID0gdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCA9IHRoaXMuZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVyeVNldCA9IHRoaXMuZ2V0UXVlcnlTZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2hhbmdlQ2hlY2tCb3hTZXQgPSB0aGlzLm9uQ2hhbmdlQ2hlY2tCb3hTZXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGppbXVNYXBWaWV3OiBudWxsLFxuICAgICAgbGF5ZXJDb250ZW50czogW10sXG4gICAgICBjaGVja2VkTGF5ZXJfOiBbXSxcbiAgICAgIHJlc3VsdExheWVyTGlzdDogW10sXG4gICAgICBpc0xheWVyU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgcmVzdWx0c0xheWVyU2VsZWN0ZWQ6IFtdLFxuICAgICAgY3VycmVudFRhcmdldFRleHQ6IG51bGwsXG4gICAgICBnZW9tZXRyeTogbnVsbCxcbiAgICAgIHR5cGVTZWxlY3RlZDogbnVsbCxcbiAgICAgIGxpc3RTZXJ2aWNlczogW10sXG4gICAgICBjdXJyZW50Rmlyc3RRdWVyeTogXCJcIixcbiAgICAgIGN1cnJlbnRGaXJzdFF1ZXJ5VHlwZTogbnVsbCxcbiAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeTogXCJ2YWxvcmVcIixcbiAgICAgIGZpcnN0VGV4dEluY2x1ZGVkSGFuZGxlcjogXCIwXCIsXG4gICAgICBzZWNvbmRUZXh0SW5jbHVkZWRIYW5kbGVyOiBcIjBcIixcbiAgICAgIHRhYmxlczogW10sXG4gICAgICBpc0NoZWNrZWQ6IGZhbHNlLFxuICAgICAgY291bnRlcklzQ2hlY2tlZDogW10sXG4gICAgICBjaGVja2VkVG9RdWVyeTogW10sXG4gICAgICB0YWJsZUNvdW50ZXI6IDAsXG4gICAgICB0YWJsZUNvdW50ZXJTZXQ6IDAsXG4gICAgICB3aGVyZUNsYXVzZXM6IFtdLFxuICAgICAgdGFibGVzU2V0SWQ6IG51bGwsXG4gICAgICB3aGVyZUNsYXVzZVNldDogW10sXG4gICAgICB0YWJsZXNTZXQ6IFtdLFxuICAgICAgdGFibGVzSWQ6IG51bGwsXG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgQW5kT3I6IFwiQU5EXCIsXG4gICAgICBBbmRPclNldDogXCJBTkRcIixcbiAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICBhdXRPcGVuOiB0cnVlLFxuICAgICAgbW91c2VsZWF2ZTogZmFsc2UsXG4gICAgICBkcm9wRG93bnM6IHt9LFxuICAgICAgZHJvcERvd25zU2V0OiB7fSxcbiAgICAgIGhpZ2hsaWdodElkczogW10sXG4gICAgICBzZWxlY3RlZEZpZWxkOiBudWxsLFxuICAgICAgb3RoZXJRdWVyaWVzVmFsdWU6IHt9LFxuICAgICAgZHJvcElkOiBudWxsLFxuICAgICAgZHJvcElkU2V0OiBudWxsLFxuICAgICAgaGlnbGlnaHRTZWxlY3RlZDogW10sXG4gICAgICBpdGVtTm90Rm91bmQ6IG51bGwsXG4gICAgICBjdXJyZW50U2VsZWN0ZWRJZDogXCIgXCIsXG4gICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiBmYWxzZSxcbiAgICAgIHdpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZDogZmFsc2UsXG4gICAgICB3aWRnZXRTdGF0ZU9wZW5lZENoZWNrZWQ6IGZhbHNlLFxuICAgICAgc2hvd0FkZFNlbGVjdDogdHJ1ZSxcbiAgICAgIFNldEJsb2NrOiBbXSxcbiAgICAgIHNlbGVjdGVkSWQ6IG51bGwsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHF1ZXJ5Q2hhbmdlZDp7fVxuICAgIH07XG4gIH07XG5cbiAgbmxzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsXG4gICAgICA/IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0sXG4gICAgICAgIH0pXG4gICAgICA6IGlkO1xuICB9O1xuXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyKGptdjogSmltdU1hcFZpZXcpIHtcbiAgICBpZiAoam12KSB7XG4gICAgICBqbXYudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY0xheWVyRm91bmQpO1xuICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNMYXllclNlbGVjdGVkKTtcbiAgICAgIGNvbnN0IHJlc3VsdExheWVyTGlzdCA9IFtdO1xuICAgICAgam12LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZi50eXBlID09PSBcImZlYXR1cmVcIikge1xuICAgICAgICAgIGptdi52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiO1xuICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW1wiKlwiXTtcbiAgICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7IHdoZXJlOiBxdWVyeS53aGVyZSB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc3VsdExheWVyTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGYsXG4gICAgICAgICAgICBsYWJlbDogZi50aXRsZSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgICAgICAgIGxheWVySUQ6IGYuaWQsXG4gICAgICAgICAgICB1cmxTZXJ2aWNlU2VydmVyOiBmLnVybCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBXaWRnZXQuYWN0aXZlViA9IGptdjtcbiAgICAgIFdpZGdldC5qaW11TGF5ZXJWaWV3eiA9IGptdj8uamltdUxheWVyVmlld3M7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVzdWx0TGF5ZXJMaXN0OiByZXN1bHRMYXllckxpc3QsIGppbXVNYXBWaWV3OiBqbXYgfSk7XG4gICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yID0gbmV3IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yKGptdiwgdGhpcyk7XG4gICAgICBXaWRnZXQuaW5pdGlhbFpvb20gPSBqbXYudmlldy56b29tO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzTGF5ZXJTZWxlY3RlZCAhPT0gcHJldlByb3BzLmlzTGF5ZXJTZWxlY3RlZCkge1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMgIT09IHByZXZQcm9wcy53aGVyZUNsYXVzZXMpIHtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHt9XG4gIC8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogRVZFTlQgQ0xJQ0sgU0VMRUNUXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICByZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKSB7XG4gICAgbGV0IG5ld1doZXJlQ2xhdXNlID0gb2JqO1xuICAgIGlmIChvYmo/LmlmSW5Pck5vdEluUXVlcnlWYWx1ZSkge1xuICAgICAgbmV3V2hlcmVDbGF1c2UgPSB7XG4gICAgICAgIGlkOiBvYmouaWQsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBvYmouYXR0cmlidXRlUXVlcnksXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogb2JqLmF0dHJpYnV0ZVF1ZXJ5VHlwZSxcbiAgICAgICAgcXVlcnlWYWx1ZTogb2JqLnF1ZXJ5VmFsdWUsXG4gICAgICAgIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogb2JqLmlmSW5Pck5vdEluUXVlcnlWYWx1ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1doZXJlQ2xhdXNlID0ge1xuICAgICAgICBpZDogb2JqLmlkLFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogb2JqLmF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IG9iai5hdHRyaWJ1dGVRdWVyeVR5cGUsXG4gICAgICAgIHF1ZXJ5VmFsdWU6IG9iai5xdWVyeVZhbHVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1doZXJlQ2xhdXNlO1xuICB9XG5cbiAgYXN5bmMgZ2V0UXVlcnlBdHRyaWJ1dGUoZSx0eXBlPVwic2luZ2xlXCIpIHtcbiAgICBjb25zdCBrZXl0eXBlID0gdHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XG4gICAgbGV0IGN1cnJlbnRXaGVyZUNsYXVzZTtcbiAgICBjb25zdCB3aGVyZUNsYXVzZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXTtcbiAgICBpZiAoIXdoZXJlQ2xhdXNlU3RhdGUubGVuZ3RoKSB7XG4gICAgICBsZXQgd2hlcmVDbGF1c2UgPSB7XG4gICAgICAgIGlkOmUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlLFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTplLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcbiAgICAgICAgcXVlcnlWYWx1ZTogXCI9XCIsXG4gICAgICB9O1xuICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2U7XG4gICAgICB0aGlzLnNldFN0YXRlKHtba2V5dHlwZV06IFt3aGVyZUNsYXVzZV0gfSk7XG4gICAgfVxuICAgIGlmICh3aGVyZUNsYXVzZVN0YXRlLmxlbmd0aCkge1xuICAgICAgY29uc3QgcXVlcnlJbmRleCA9IHdoZXJlQ2xhdXNlU3RhdGUubWFwKChvYmopID0+IG9iai5pZCkuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB3aGVyZUNsYXVzZVN0YXRlLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpIHtcbiAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YXR5cGUudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2JqID0gdGhpcy5yZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHdoZXJlQ2xhdXNlU3RhdGUuZmlsdGVyKChhKSA9PiBhLmlkICE9PSBvYmouaWQpO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge3JldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7fSk7XG4gICAgICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSBvYmo7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7W2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHdoZXJlQ2xhdXNlID0ge1xuICAgICAgICAgIGlkOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gd2hlcmVDbGF1c2UgPSB0aGlzLnJlbW92ZVZhbHVlRnJvbU9iamVjdCh3aGVyZUNsYXVzZSlcbiAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2U7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1trZXl0eXBlXTogWy4uLndoZXJlQ2xhdXNlU3RhdGUsd2hlcmVDbGF1c2VdLH0pO1xuICAgICAgICB3aGVyZUNsYXVzZVN0YXRlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtyZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZpZWxkOiBlLmN1cnJlbnRUYXJnZXQubmFtZSB9LCAoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlKXRoaXMubWFuaXB1bGF0ZUZpZWxkUXVlcnkoY3VycmVudFdoZXJlQ2xhdXNlLnF1ZXJ5VmFsdWUsY3VycmVudFdoZXJlQ2xhdXNlLmlkLHR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZm9yIGNhbGxlZCBvbiBkcm9wIHNlbGVjdCBsaXN0XG4gIGFzeW5jIGdldFF1ZXJ5KGUsIHR5cGUgPSBcInNpbmdsZVwiKSB7XG4gICAgY29uc3QgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXROYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5tYW5pcHVsYXRlRmllbGRRdWVyeShjdXJyZW50VGFyZ2V0TmFtZSwgY2xpY2tlZFF1ZXJ5VGFibGVJZCwgdHlwZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnlDaGFuZ2VkOnsuLi50aGlzLnN0YXRlLnF1ZXJ5Q2hhbmdlZCxbY2xpY2tlZFF1ZXJ5VGFibGVJZF06dHJ1ZX19KVxuICB9XG5cbiAgYXN5bmMgbWFuaXB1bGF0ZUZpZWxkUXVlcnkoXG4gICAgY3VycmVudFRhcmdldE5hbWU6IHN0cmluZyxcbiAgICBjbGlja2VkUXVlcnlUYWJsZUlkOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nXG4gICkge1xuICAgIGxldCBxdWVyeUluZGV4ID0gLTE7XG4gICAgbGV0IGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGUgPSBcIiBcIjtcbiAgICBsZXQgbmV3V2hlcmVTZXRDbGF1c2U7XG4gICAgY29uc3Qga2V5dHlwZSA9IHR5cGUgPT09IFwic2luZ2xlXCIgPyBcIndoZXJlQ2xhdXNlc1wiIDogXCJ3aGVyZUNsYXVzZVNldFwiO1xuICAgIGlmICh0aGlzLnN0YXRlW2tleXR5cGVdLmxlbmd0aCkge1xuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGVba2V5dHlwZV1cbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGNsaWNrZWRRdWVyeVRhYmxlSWQpO1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGUgPSBvYmouYXR0cmlidXRlUXVlcnk7XG4gICAgICAgICAgICAvLyBvYmogPSB0aGlzLnJlbW92ZVZhbHVlRnJvbU9iamVjdChvYmopXG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgcXVlcnlWYWx1ZTogY3VycmVudFRhcmdldE5hbWUgfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5dHlwZV0uZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50VGFyZ2V0TmFtZSA9PT0gXCJJTlwiIHx8IGN1cnJlbnRUYXJnZXROYW1lID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcud2hlbkxheWVyVmlldyhmKS50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfSBpcyBub3QgbnVsbGA7XG4gICAgICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfWBdO1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZi5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgcmVzdWx0cy50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxUaGlyZFF1ZXJ5ID0gW107XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZWwuYXR0cmlidXRlc1tjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsLmF0dHJpYnV0ZXNbY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZV0sXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGV0YWlsVGhpcmRRdWVyeVswXS52YWx1ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgYS5sYWJlbCA8IGIubGFiZWwgPyAtMSA6IGEubGFiZWwgPiBiLmxhYmVsID8gMSA6IDBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAgICAgICBhLnZhbHVlIC0gYi52YWx1ZSA8IDAgPyAtMSA6IGEudmFsdWUgPT09IGIudmFsdWUgPyAwIDogMVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBvYmogPSB0aGlzLnJlbW92ZVZhbHVlRnJvbU9iamVjdChvYmopXG4gICAgICAgICAgICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogZGV0YWlsVGhpcmRRdWVyeSB9O1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5dHlwZV0uZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgW2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoa2V5dHlwZSA9PT0gXCJ3aGVyZUNsYXVzZVNldFwiKSB7XG4gICAgICBpZiAobmV3V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBuZXdXaGVyZVNldENsYXVzZS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjbGlja2VkUXVlcnlUYWJsZUlkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhcbiAgICAgICAgICBjbGlja2VkUXVlcnlUYWJsZUlkLFxuICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFF1ZXJ5U2V0KGUsIHR5cGUgPSBcInNpbmdsZVwiKSB7XG4gICAgY29uc3QgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXROYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5tYW5pcHVsYXRlRmllbGRRdWVyeShjdXJyZW50VGFyZ2V0TmFtZSwgY2xpY2tlZFF1ZXJ5VGFibGVJZCwgXCJzZXRcIik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnlDaGFuZ2VkOnsuLi50aGlzLnN0YXRlLnF1ZXJ5Q2hhbmdlZCxbY2xpY2tlZFF1ZXJ5VGFibGVJZF06dHJ1ZX19KVxuICB9XG5cbiAgLy9UT0RPIGxhIHNlbmRRdWVyeSBhbmRyw6AgcmlzaXN0ZW1hdGEgcXVhbmRvIHNpIGFnZ2l1bmdlcsOgIG9sdHJlIGFsbCdlc3ByZXNzaW9uZSBhbmNoZSBpbCBzZXQgZGkgZXNwcmVzc2lvbmlcbiAgLy8gcGVyY2jDqSBvcmEgcGVyIGwnQU5EIGZhIGlsIGNpY2xvIGZvciBzdSBvZ25pIHdoZXJlIGluc2VyaXRhIG5lbGwnYXJyYXkgbWEgZG9wbyBzYXLDoCBuZWNlc3NhcmlvIHNjb21wb3JyZSBwZXIgY3JlYXJlIGxlIGVzcHJlc3Npb25pXG5cbiAgLy8gc3RlcDFcbiAgYXN5bmMgc2VuZFF1ZXJ5KCkge1xuICAgIHRoaXMucXVlcnlBcnJheSA9IFtdO1xuICAgIHRoaXMub3V0ZmllbGRzID0gW107XG4gICAgY29uc3QgY2hlY2tlZFF1ZXJ5ID0gW1xuICAgICAgXCJpcyBudWxsXCIsXG4gICAgICBcImlzIG5vdCBudWxsXCIsXG4gICAgICBcIklOXCIsXG4gICAgICBcIk5PVF9JTlwiLFxuICAgICAgXCJpbmNsdWRlZFwiLFxuICAgICAgXCJpc19ub3RfaW5jbHVkZWRcIixcbiAgICBdO1xuICAgIGNvbnN0IGxpa2VseVF1ZXJ5ID0gW1wiTElLRSVcIiwgXCIlTElLRVwiLCBcIiVMSUtFJVwiLCBcIk5PVCBMSUtFXCJdO1xuICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLkFuZE9yID09PSBcIkFORFwiKSB7XG4gICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZvckVhY2goKGVsLCBpZCkgPT4ge1xuICAgICAgICAgIGxldCBhdHRyaWJ1dGVRdWVyeSA9IGVsLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgIGxldCBxdWVyeVZhbHVlID0gZWwucXVlcnlWYWx1ZTtcbiAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiaXMgbnVsbFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXMgbm90IG51bGxcIikge1xuICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xuICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgIGVsLmNoZWNrZWRMaXN0LmZvckVhY2goKGVsKSA9PiB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8XG4gICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImlzX25vdF9pbmNsdWRlZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgZmlyc3RUeHQ6IGVsLmZpcnN0VHh0LnZhbHVlLFxuICAgICAgICAgICAgICBzZWNvbmRUeHQ6IGVsLnNlY29uZFR4dC52YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3XG4gICAgICAgICAgICAgICAgICAud2hlbkxheWVyVmlldyhmKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgLy9zdGVwIDIgc3RhcnQgcXVlcnlpbmdcbiAgICAgICAgICAgICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLkFuZE9yLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGZcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5OiBhbnkgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZm9yRWFjaCgoZWwsIGlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgICBsZXQgYXR0cmlidXRlUXVlcnkgPSBlbC5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IGVsLnF1ZXJ5VmFsdWU7XG4gICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImlzIG51bGxcIiB8fCBxdWVyeVZhbHVlID09PSBcImlzIG5vdCBudWxsXCIpIHtcbiAgICAgICAgICAgIGxldCBxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9ICR7cXVlcnlWYWx1ZX1gO1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUluO1xuICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgZWwuY2hlY2tlZExpc3QuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHZhbHVlKSkge1xuICAgICAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSBJTiAoJHtcbiAgICAgICAgICAgICAgICBcIidcIiArIHZhbHVlLmpvaW4oXCInLCAnXCIpICsgXCInXCJcbiAgICAgICAgICAgICAgfSlgO1xuICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW47XG4gICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSBJTiAoJHt2YWx1ZS5qb2luKFwiLFwiKX0pYDtcbiAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUluO1xuICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCIpIHtcbiAgICAgICAgICAgIGxldCBxdWVyeUluO1xuICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiXG4gICAgICAgICAgICAgID8gKHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gPiAke2VsLmZpcnN0VHh0LnZhbHVlfSBBTkQgJHthdHRyaWJ1dGVRdWVyeX0gPCAke2VsLnNlY29uZFR4dC52YWx1ZX1gKVxuICAgICAgICAgICAgICA6IChxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IDwgJHtlbC5maXJzdFR4dC52YWx1ZX0gT1IgJHthdHRyaWJ1dGVRdWVyeX0gPiAke2VsLnNlY29uZFR4dC52YWx1ZX1gKTtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbjtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XG4gICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcbiAgICAgICAgICAgIGlmIChsaWtlbHlRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xuICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IGhlbHBlci5saWtlbHlRdWVyeShcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5SW5wdXQgPSBgJHthdHRyaWJ1dGVRdWVyeX0gJHtxdWVyeVZhbHVlfSAnJHt2YWx1ZX0nYDtcbiAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW5wdXQ7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUlucHV0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcXVlcnlJbnB1dCA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9ICR7dmFsdWV9YDtcbiAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW5wdXQ7XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUlucHV0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXdcbiAgICAgICAgICAgICAgICAgIC53aGVuTGF5ZXJWaWV3KGYpXG4gICAgICAgICAgICAgICAgICAudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnlSZXF1ZXN0OiBcIk9SXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGF5ZXI6IGYsXG4gICAgICAgICAgICAgICAgICAgICAgQW5kT3I6IHRoaXMuc3RhdGUuQW5kT3IsXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgIHRoaXMucXVlcnlBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcud2hlbkxheWVyVmlldyhmKS50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgICAgICBxdWVyeTogbmV3IFF1ZXJ5KCksXG4gICAgICAgICAgICAgICAgcXVlcnlSZXF1ZXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxheWVyOiBmLFxuICAgICAgICAgICAgICAgIEFuZE9yOiB0aGlzLnN0YXRlLkFuZE9yLFxuICAgICAgICAgICAgICAgIGZpZWxkOiBudWxsLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogXCJzZXRRdWVyeVwiLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUgfSk7XG4gICAgICB0aGlzLnJldHVyblRvT3JpZ2luYWxFeHRlbnQoKTtcbiAgICB9XG4gIH1cblxuICBzZXRRdWVyeUNvbnN0cnVjdG9yID0gKHF1ZXJ5UmVxdWVzdCwgZmlyc3RRdWVyeSwgc2Vjb25kUXVlcnlUYXJnZXQpID0+IHtcbiAgICBzd2l0Y2ggKHF1ZXJ5UmVxdWVzdCkge1xuICAgICAgY2FzZSBcIkxJS0UlXCI6XG4gICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBMSUtFICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgIGNhc2UgXCIlTElLRVwiOlxuICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XG4gICAgICBjYXNlIFwiJUxJS0UlXCI6XG4gICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XG4gICAgICBjYXNlIFwiTk9UIExJS0VcIjpcbiAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IE5PVCBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XG4gICAgICBjYXNlIFwiaXMgbnVsbFwiOlxuICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gaXMgbnVsbGA7XG4gICAgICBjYXNlIFwiaXMgbm90IG51bGxcIjpcbiAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IGlzIG5vdCBudWxsYDtcbiAgICAgIGNhc2UgXCJJTlwiOlxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IElOICgke1xuICAgICAgICAgICAgXCInXCIgKyBzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXG4gICAgICAgICAgfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGFyZW50aGVzaXMoc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIikpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSB0aGlzLmxvb3BUb0dldFN0cmluZyhzZWNvbmRRdWVyeVRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7c2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIil9KWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlIFwiTk9UX0lOXCI6XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm4gYE5PVCAke2ZpcnN0UXVlcnl9IElOICgke1xuICAgICAgICAgICAgXCInXCIgKyBzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXG4gICAgICAgICAgfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGFyZW50aGVzaXMoc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIikpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSB0aGlzLmxvb3BUb0dldFN0cmluZyhzZWNvbmRRdWVyeVRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gYE5PVCAgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzdHJpbmdGaWVkVmFsdWV9KWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgTk9UICAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSBcImluY2x1ZGVkXCI6XG4gICAgICAgIHJldHVybiBgKCR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBBTkQgJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fSlgO1xuICAgICAgY2FzZSBcImlzX25vdF9pbmNsdWRlZFwiOlxuICAgICAgICByZXR1cm4gYCgke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gT1IgJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fSlgO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJyR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICR7c2Vjb25kUXVlcnlUYXJnZXR9YDtcbiAgICAgICAgICBjb25zdCBicmFja2V0cyA9IFtcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiXTtcbiAgICAgICAgICBpZiAoYnJhY2tldHMuaW5jbHVkZXMoc2Vjb25kUXVlcnlUYXJnZXQuY2hhckF0KDApKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gSlNPTi5zdHJpbmdpZnkoc2Vjb25kUXVlcnlUYXJnZXQpLnJlcGxhY2UoL1wiL2csIGAnYClcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJyR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzZW5kUXVlcnlTZXQoKSB7XG4gICAgY29uc3QgY2hlY2tlZFF1ZXJ5ID0gW1xuICAgICAgXCJpcyBudWxsXCIsXG4gICAgICBcImlzIG5vdCBudWxsXCIsXG4gICAgICBcIklOXCIsXG4gICAgICBcIk5PVF9JTlwiLFxuICAgICAgXCJpbmNsdWRlZFwiLFxuICAgICAgXCJpc19ub3RfaW5jbHVkZWRcIixcbiAgICBdO1xuICAgIGNvbnN0IGxpa2VseVF1ZXJ5ID0gW1wiTElLRSVcIiwgXCIlTElLRVwiLCBcIiVMSUtFJVwiLCBcIk5PVCBMSUtFXCJdO1xuICAgIGxldCBzZXRRdWVyeVN0cmluZyA9IG51bGw7XG4gICAgbGV0IG91dEZpZWxkcyA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdGF0ZS5TZXRCbG9jay5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICBjb25zdCBibG9ja0lkID0gYmxvY2s/LmJsb2NrSWQ7XG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlU2V0ID0gYmxvY2tbYCR7YmxvY2tJZH1gXTtcbiAgICAgICAgY29uc3QgQW5kT3JTZXQgPSBibG9jaz8uQW5kT3JTZXQ7XG4gICAgICAgIGlmIChBbmRPclNldCA9PT0gXCJBTkRcIikge1xuICAgICAgICAgIGlmICh3aGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aGVyZUNsYXVzZVNldC5mb3JFYWNoKChlbCwgaikgPT4ge1xuICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlUXVlcnkgPSBlbC5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xuICAgICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImlzIG51bGxcIiB8fCBxdWVyeVZhbHVlID09PSBcImlzIG5vdCBudWxsXCIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgZWwuY2hlY2tlZExpc3RTZXQuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaW5jbHVkZWRcIiB8fFxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCJcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICBmaXJzdFR4dDogZWwuZmlyc3RUeHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICBzZWNvbmRUeHQ6IGVsLnNlY29uZFR4dC52YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFjaGVja2VkUXVlcnkuaW5jbHVkZXMocXVlcnlWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoc2V0UXVlcnlTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyArPSB0aGlzLnNldFF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgPSB0aGlzLnNldFF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGogPCB3aGVyZUNsYXVzZVNldC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IFwiICBcIiArIEFuZE9yU2V0ICsgXCIgIFwiO1xuICAgICAgICAgICAgICBvdXRGaWVsZHMucHVzaChgJHthdHRyaWJ1dGVRdWVyeX1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnk6IGFueSA9IFtdO1xuICAgICAgICAgIGlmICh3aGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aGVyZUNsYXVzZVNldC5mb3JFYWNoKChlbCwgaikgPT4ge1xuICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlUXVlcnkgPSBlbC5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xuICAgICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiAmJiBlbC5jaGVja2VkTGlzdFNldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGVsLmNoZWNrZWRMaXN0U2V0LmZvckVhY2goKGVsKSA9PiB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIiAmJlxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkLmxlbmd0aFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkLmZvckVhY2goKGVsKSA9PlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8XG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpc19ub3RfaW5jbHVkZWRcIlxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHh0OiBlbC5maXJzdFR4dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFR4dDogZWwuc2Vjb25kVHh0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IHRoaXMuc2V0UXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyA9IHRoaXMuc2V0UXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaiA8IHdoZXJlQ2xhdXNlU2V0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gXCIgIFwiICsgQW5kT3JTZXQgKyBcIiAgXCI7XG4gICAgICAgICAgICAgIG91dEZpZWxkcy5wdXNoKGAke2F0dHJpYnV0ZVF1ZXJ5fWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLlNldEJsb2NrW2kgKyAxXSkge1xuICAgICAgICAgICAgY29uc3QgbmV4dEJsb2NrID0gdGhpcy5zdGF0ZS5TZXRCbG9ja1tpICsgMV07XG4gICAgICAgICAgICBjb25zdCBuZXh0QmxvY2tJZCA9IG5leHRCbG9jaz8uYmxvY2tJZDtcbiAgICAgICAgICAgIGNvbnN0IG5leHRXaGVyZUNsYXVzZVNldCA9IG5leHRCbG9ja1tgJHtuZXh0QmxvY2tJZH1gXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKGkgPT09IDAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICAgICAgbmV4dFdoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHx8XG4gICAgICAgICAgICAgICFbXCIoXCJdLmluY2x1ZGVzKHNldFF1ZXJ5U3RyaW5nWzBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nID0gXCIoXCIgKyBzZXRRdWVyeVN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaSA8IHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICBuZXh0V2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IFwiICkgXCIgKyB0aGlzLnN0YXRlLkFuZE9yICsgXCIgKCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuU2V0QmxvY2tbaSAtIDFdKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2QmxvY2sgPSB0aGlzLnN0YXRlLlNldEJsb2NrW2kgLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZCbG9ja0lkID0gcHJldkJsb2NrPy5ibG9ja0lkO1xuICAgICAgICAgICAgY29uc3QgcHJldldoZXJlQ2xhdXNlU2V0ID0gcHJldkJsb2NrW2Ake3ByZXZCbG9ja0lkfWBdO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICAgIGkgPT09IHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICBwcmV2V2hlcmVDbGF1c2VTZXQubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgPSBzZXRRdWVyeVN0cmluZyArIFwiKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IHNldFF1ZXJ5U3RyaW5nLCBvdXRGaWVsZHMgfTtcbiAgfVxuXG4gIGFzeW5jIHRoaXJkUXVlcnkoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRRdWVyeVRlc3QgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgIHRoaXMuaW5RdWVyeUNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Rmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFNlY29uZFF1ZXJ5LFxuICAgICAgICAgICAgY3VycmVudFF1ZXJ5VGVzdFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2VTZWxlY3RMYXllcihlKSB7XG4gICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGYudGl0bGUgPT09IGUuY3VycmVudFRhcmdldC5pbm5lclRleHQpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcud2hlbkxheWVyVmlldyhmKS50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICByZXN1bHRzTGF5ZXJTZWxlY3RlZDogZixcbiAgICAgICAgICAgICAgY3VycmVudFRhcmdldFRleHQ6IGUuY3VycmVudFRhcmdldC5pbm5lclRleHQsXG4gICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZElkOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgICAgICAgIGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIiwgXCJjaGVja2VkTGF5ZXJzXCIsIFtmLmlkXSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRhYmxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRJZCA9IHRoaXMuc3RhdGUudGFibGVDb3VudGVyO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFibGVzOiBbXG4gICAgICAgIC4uLnRoaXMuc3RhdGUudGFibGVzLFxuICAgICAgICB7IGlkOiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlciwgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICB0YWJsZUNvdW50ZXI6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyICsgMSxcbiAgICAgIGRyb3BEb3duczogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3ducywgW2N1cnJlbnRJZF06IGZhbHNlIH0sXG4gICAgfSk7XG4gICAgY29uc3QgdGFibGVMZW5ndGggPSB0aGlzLnN0YXRlLnRhYmxlc1xuICAgICAgLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSlcbiAgICAgIC5maWx0ZXIoU3RyaW5nKS5sZW5ndGg7XG4gICAgY29uc3QgdGFibGVzU2V0TGVuZ3RoID0gdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGg7XG4gICAgaWYgKHRhYmxlTGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0YWJsZXNTZXRMZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGFkZFR3b1RhYmxlID0gKGJsb2NrSWQpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBjb25zdCBpbmRleCA9IG5ld1N0YXRlQmxvY2suZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJsb2NrSWQgPT09IGJsb2NrSWQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IG5ld1N0YXRlQmxvY2tbaW5kZXhdO1xuICAgICAgY29uc3QgY3VycmVudElkID0gY3VycmVudEJsb2NrW1widGFibGVDb3VudGVyU2V0XCJdO1xuICAgICAgY3VycmVudEJsb2NrW1widGFibGVzU2V0XCJdID0gW1xuICAgICAgICAuLi5jdXJyZW50QmxvY2tbXCJ0YWJsZXNTZXRcIl0sXG4gICAgICAgIHsgaWQ6IGN1cnJlbnRJZCwgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgIF07XG4gICAgICBjdXJyZW50QmxvY2tbXCJkcm9wRG93bnNTZXRcIl0gPSB7XG4gICAgICAgIC4uLmN1cnJlbnRCbG9ja1tcImRyb3BEb3duc1NldFwiXSxcbiAgICAgICAgW2N1cnJlbnRJZF06IGZhbHNlLFxuICAgICAgfTtcbiAgICAgIGN1cnJlbnRCbG9ja1tcInRhYmxlQ291bnRlclNldFwiXSA9IGN1cnJlbnRCbG9ja1tcInRhYmxlQ291bnRlclNldFwiXSArIDE7XG4gICAgICBuZXdTdGF0ZUJsb2NrW2luZGV4XSA9IGN1cnJlbnRCbG9jaztcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUudGFibGVzLmxlbmd0aCA+IDApIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IG5ld1N0YXRlQmxvY2sgfSk7XG4gIH07XG5cbiAgYWRkQmxvY2sgPSAoKSA9PiB7XG4gICAgbGV0IGlkT25lID0gdGhpcy5zdGF0ZS5TZXRCbG9jay50YWJsZUNvdW50ZXJTZXQgPz8gMDtcbiAgICBsZXQgaWRUd28gPSBpZE9uZSArIDE7XG4gICAgY29uc3QgY3VycmVudElkID0gaWRPbmU7XG4gICAgY29uc3QgbmV4dEN1cnJlbnRJZCA9IGlkVHdvO1xuICAgIGxldCBuZXdCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBuZXdCbG9jay5wdXNoKHtcbiAgICAgIGJsb2NrSWQ6IHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoLFxuICAgICAgW2Ake3RoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RofWBdOiBbXSxcbiAgICAgIHRhYmxlc1NldDogW1xuICAgICAgICB7IGlkOiBpZE9uZSwgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogaWRUd28sIGRlbGV0ZWQ6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgdGFibGVDb3VudGVyU2V0OiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlclNldCArIDIsXG4gICAgICBkcm9wRG93bnNTZXQ6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsXG4gICAgICAgIFtgJHtjdXJyZW50SWR9LSR7dGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGh9YF06IGZhbHNlLFxuICAgICAgICBbYCR7bmV4dEN1cnJlbnRJZH0tJHt0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgQW5kT3JTZXQ6IHRoaXMuc3RhdGUuQW5kT3JTZXQsXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBTZXRCbG9jazogbmV3QmxvY2ssXG4gICAgICBkcm9wRG93bnNTZXQ6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsXG4gICAgICAgIFtgJHtjdXJyZW50SWR9LSR7dGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGh9YF06IGZhbHNlLFxuICAgICAgICBbYCR7bmV4dEN1cnJlbnRJZH0tJHt0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gaWYodGhpcy5zdGF0ZS50YWJsZXMubGVuZ3RoID4gMCl0aGlzLnNldFN0YXRlKHtzaG93QWRkU2VsZWN0OmZhbHNlfSk7XG4gICAgY29uc3QgdGFibGVMZW5ndGggPSB0aGlzLnN0YXRlLnRhYmxlc1xuICAgICAgLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSlcbiAgICAgIC5maWx0ZXIoU3RyaW5nKS5sZW5ndGg7XG4gICAgY29uc3QgdGFibGVzU2V0TGVuZ3RoID0gdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGg7XG5cbiAgICBpZiAodGFibGVMZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZVRhYmxlID0gKGlkKSA9PiB7XG4gICAgbGV0IGNvcGllZFRhYmxlID0gWy4uLnRoaXMuc3RhdGUudGFibGVzXTtcbiAgICBjb3BpZWRUYWJsZSA9IGNvcGllZFRhYmxlLm1hcCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5pZCA9PT0gaWQpZWwuZGVsZXRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSk7XG4gICAgY29uc3QgbmV3VGFibGVzID0gY29waWVkVGFibGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhYmxlQ291bnRlcjogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgLSAxIH0pO1xuICAgIGNvbnN0IGNvcGllZFdoZXJlQ2xhdXNlcyA9IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlc107XG4gICAgY29uc3QgZGVsZXRlZFdoZXJlQ2xhdXNlcyA9IGNvcGllZFdoZXJlQ2xhdXNlcy5maWx0ZXIoXG4gICAgICAoZWwpID0+IGVsLmlkICE9PSBpZC50b1N0cmluZygpXG4gICAgKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYmxlczogbmV3VGFibGVzLFxuICAgICAgd2hlcmVDbGF1c2VzOiBkZWxldGVkV2hlcmVDbGF1c2VzLFxuICAgICAgdGFibGVDb3VudGVyOiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlciAtIDEsXG4gICAgICBzZWxlY3RlZElkOiBpZCxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zdGF0ZS50YWJsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2hlcmVDbGF1c2VzOiBbXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHRhYmxlTGVuZ3RoID0gdGhpcy5zdGF0ZS50YWJsZXNcbiAgICAgIC5tYXAoKGVsLCBpZHgpID0+IChlbC5kZWxldGVkID09IGZhbHNlID8gaWR4IDogXCJcIikpXG4gICAgICAuZmlsdGVyKFN0cmluZykubGVuZ3RoO1xuICAgIGNvbnN0IHRhYmxlc1NldExlbmd0aCA9IHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoO1xuICAgIGlmICh0YWJsZUxlbmd0aCA9PSAyICYmIHRhYmxlc1NldExlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDAgJiYgdGFibGVzU2V0TGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDEgJiYgdGFibGVzU2V0TGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGVCbG9jayA9IChibG9ja0lkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBjb3BpZWRCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBjb25zdCBjb3BpZWRXaGVyZWNsYXVzZVNldCA9IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0XTtcbiAgICBjb25zdCBpbmRleCA9IGNvcGllZEJsb2NrLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5ibG9ja0lkID09PSBibG9ja0lkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjb3BpZWRCbG9jay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNldEJsb2NrOiBjb3BpZWRCbG9jayB9KTtcbiAgICB9XG4gICAgaWYgKGNvcGllZFdoZXJlY2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgIGNvcGllZFdoZXJlY2xhdXNlU2V0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZC5zcGxpdChcIi1cIilbMV0gPT09IGJsb2NrSWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoZXJlQ2xhdXNlU2V0OiBjb3BpZWRXaGVyZWNsYXVzZVNldCB9KTtcbiAgICB9XG4gICAgY29uc3QgdGFibGVMZW5ndGggPSB0aGlzLnN0YXRlLnRhYmxlc1xuICAgICAgLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSlcbiAgICAgIC5maWx0ZXIoU3RyaW5nKS5sZW5ndGg7XG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDEgJiYgY29waWVkQmxvY2subGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGVCbG9ja1RhYmxlID0gKHRhYmxlQmxvY2tJZDogc3RyaW5nLCBibG9ja0lkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB0YWJsZUlkID0gdGFibGVCbG9ja0lkLnNwbGl0KFwiLVwiKVswXTtcbiAgICBjb25zdCBjb3BpZWRCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBjb25zdCBjb3BpZWRXaGVyZWNsYXVzZVNldCA9IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0XTtcbiAgICBjb25zdCBjdXJyZW50QmxvY0luZGV4ID0gY29waWVkQmxvY2suZmluZEluZGV4KFxuICAgICAgKGJsb2NrKSA9PiBgJHtibG9jay5ibG9ja0lkfWAgPT09IGJsb2NrSWRcbiAgICApO1xuICAgIGxldCBjdXJyZW50QmxvY2s7XG4gICAgaWYgKGN1cnJlbnRCbG9jSW5kZXggIT09IC0xKSBjdXJyZW50QmxvY2sgPSBjb3BpZWRCbG9ja1tjdXJyZW50QmxvY0luZGV4XTtcbiAgICBpZiAoY3VycmVudEJsb2NrKSB7XG4gICAgICBjb25zdCBjdXJyZW50V2hlcmVDbGF1c2VTZXQgPSBjdXJyZW50QmxvY2tbYmxvY2tJZF07XG4gICAgICBjb25zdCBjdXJyZW50VGFibGVTZXRzID0gY3VycmVudEJsb2NrW1widGFibGVzU2V0XCJdO1xuICAgICAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvcGllZEN1cnJlbnRXaGVyZUNsYXVzZVNldCA9IFsuLi5jdXJyZW50V2hlcmVDbGF1c2VTZXRdO1xuICAgICAgICBjb25zdCB3aGVyZUNsYXVzZVNldEluZGV4ID0gY29waWVkQ3VycmVudFdoZXJlQ2xhdXNlU2V0LmZpbmRJbmRleChcbiAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHRhYmxlQmxvY2tJZCkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICh3aGVyZUNsYXVzZVNldEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGNvcGllZEN1cnJlbnRXaGVyZUNsYXVzZVNldC5zcGxpY2Uod2hlcmVDbGF1c2VTZXRJbmRleCwgMSk7XG4gICAgICAgICAgY3VycmVudEJsb2NrW2Jsb2NrSWRdID0gY29waWVkQ3VycmVudFdoZXJlQ2xhdXNlU2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFRhYmxlU2V0cz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvcGllZFRhYmxlU2V0cyA9IFsuLi5jdXJyZW50VGFibGVTZXRzXTtcbiAgICAgICAgY29uc3QgdGFibGVTZXRJbmRleCA9IGNvcGllZFRhYmxlU2V0cy5maW5kSW5kZXgoXG4gICAgICAgICAgKGl0ZW0pID0+IGAke2l0ZW0uaWR9YCA9PT0gdGFibGVJZFxuICAgICAgICApO1xuICAgICAgICBpZiAodGFibGVTZXRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb3BpZWRUYWJsZVNldHNbdGFibGVTZXRJbmRleF1bXCJkZWxldGVkXCJdID0gdHJ1ZTtcbiAgICAgICAgICAvLyBjb3BpZWRUYWJsZVNldHMuc3BsaWNlKHRhYmxlU2V0SW5kZXgsMSk7XG4gICAgICAgICAgY3VycmVudEJsb2NrW1widGFibGVzU2V0XCJdID0gY29waWVkVGFibGVTZXRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb3BpZWRCbG9ja1tjdXJyZW50QmxvY0luZGV4XSA9IGN1cnJlbnRCbG9jaztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBTZXRCbG9jazogY29waWVkQmxvY2sgfSk7XG4gICAgfVxuICAgIGlmIChjb3BpZWRXaGVyZWNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGNvcGllZFdoZXJlY2xhdXNlU2V0LmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gdGFibGVCbG9ja0lkKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb3BpZWRXaGVyZWNsYXVzZVNldC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2hlcmVDbGF1c2VTZXQ6IGNvcGllZFdoZXJlY2xhdXNlU2V0IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZWxldGVCbG9ja0FsbCA9IChibG9ja0RhdGEpID0+IHt9O1xuXG4gIHRleHRJbnB1dEhhbmRsZXIgPSAoZSwgcXVlcnlUeXBlID0gXCJzaW5nbGVcIikgPT4ge1xuICAgIGxldCB0eHQgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcbiAgICB0aGlzLnF1ZXJ5VGV4dENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIHF1ZXJ5VHlwZSk7XG4gIH07XG5cbiAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyID0gKGUsIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbMF0udmFsdWU7XG4gICAgbGV0IGlucHV0ID0gXCJmaXJzdFwiO1xuICAgIHRoaXMucXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCwgcXVlcnlUeXBlKTtcbiAgfTtcblxuICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyID0gKGUsIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcbiAgICBsZXQgaW5wdXQgPSBcInNlY29uZFwiO1xuICAgIHRoaXMucXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCwgcXVlcnlUeXBlKTtcbiAgfTtcblxuICB1bml2b2NvU2VsZWN0SGFuZGxlciA9IChjdXJyZW50VGFibGU6e3ZhbHVlOmFueSx0YWJsZUlkOnN0cmluZ30sIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgdHh0ID0gY3VycmVudFRhYmxlLnZhbHVlLnRyaW0oKTtcbiAgICBsZXQgY3VycmVudFRhYmxlSWQgPSBjdXJyZW50VGFibGUudGFibGVJZDtcbiAgICB0aGlzLnF1ZXJ5VGV4dENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIHF1ZXJ5VHlwZSk7XG4gIH07XG5cbiAgY29udGFpbnNBbnlMZXR0ZXJzID0gKHN0cikgPT4gL1thLXpBLVpdLy50ZXN0KHN0cik7XG5cbiAgcXVlcnlUZXh0Q29uc3RydWN0b3IgPSAodHh0LCBjdXJyZW50VGFibGVJZCwgcXVlcnlUeXBlKSA9PiB7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGNvbnN0IGtleVR5cGUgPSBxdWVyeVR5cGUgPT09IFwic2luZ2xlXCIgPyBcIndoZXJlQ2xhdXNlc1wiIDogXCJ3aGVyZUNsYXVzZVNldFwiO1xuICAgIGlmICh0aGlzLnN0YXRlW2tleVR5cGVdLmxlbmd0aCkge1xuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGVba2V5VHlwZV1cbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRUYWJsZUlkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5VHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBjdXJyZW50VGFibGVJZCkge1xuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIHZhbHVlOiB7IHR4dDogdHh0IH0gfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5VHlwZV0uZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5VHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAobmV3V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBuZXdXaGVyZVNldENsYXVzZS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50VGFibGVJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soXG4gICAgICAgICAgY3VycmVudFRhYmxlSWQsXG4gICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHF1ZXJ5VGV4dEluY2x1ZGVkQ29uc3RydWN0b3IgPSAodHh0LCBjdXJyZW50VGFibGVJZCwgaW5wdXQsIHF1ZXJ5VHlwZSkgPT4ge1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBjb25zdCBrZXlUeXBlID0gcXVlcnlUeXBlID09PSBcInNpbmdsZVwiID8gXCJ3aGVyZUNsYXVzZXNcIiA6IFwid2hlcmVDbGF1c2VTZXRcIjtcbiAgICBpZiAodGhpcy5zdGF0ZVtrZXlUeXBlXS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlW2tleVR5cGVdXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgICAuaW5kZXhPZihjdXJyZW50VGFibGVJZCk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleVR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY3VycmVudFRhYmxlSWQpIHtcbiAgICAgICAgICAgIGlucHV0ID09PSBcImZpcnN0XCJcbiAgICAgICAgICAgICAgPyAob2JqID0geyAuLi5vYmosIGZpcnN0VHh0OiB7IHZhbHVlOiB0eHQgfSB9KVxuICAgICAgICAgICAgICA6IChvYmogPSB7IC4uLm9iaiwgc2Vjb25kVHh0OiB7IHZhbHVlOiB0eHQgfSB9KTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5VHlwZV0uZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5VHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAobmV3V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBuZXdXaGVyZVNldENsYXVzZS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50VGFibGVJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soXG4gICAgICAgICAgY3VycmVudFRhYmxlSWQsXG4gICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRyb3Bkb3duSXRlbUNsaWNrID0gKGUsIHR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XG4gICAgbGV0IGNsaWNrZWRRdWVyeVRhYmxlSWQgPSBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1syXS52YWx1ZTtcbiAgICBsZXQgY2xpY2tlZFZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGxldCBjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlO1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBsZXQgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGNvbnN0IGtleXR5cGUgPSB0eXBlID09PSBcInNpbmdsZVwiID8gXCJ3aGVyZUNsYXVzZXNcIiA6IFwid2hlcmVDbGF1c2VTZXRcIjtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZVtrZXl0eXBlXVxuICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAuaW5kZXhPZihjbGlja2VkUXVlcnlUYWJsZUlkKTtcbiAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqLmlkID09PSBjbGlja2VkUXVlcnlUYWJsZUlkKSB7XG4gICAgICAgICAgb2JqID0geyAuLi5vYmosIGRyb3Bkb3duVmFsdWVRdWVyeTogY2xpY2tlZFZhbHVlIH07XG4gICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBvYmo7XG4gICAgICAgICAgLy8gbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlc1xuICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgW2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnZhbHVlID09PSBcInVuaXZvY29cIikge1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGUgPSBvYmouYXR0cmlidXRlUXVlcnk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXdcbiAgICAgICAgICAgICAgICAgICAgLndoZW5MYXllclZpZXcoZilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfSBpcyBub3QgbnVsbGA7XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9YF07XG4gICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHsgd2hlcmU6IHF1ZXJ5LndoZXJlIH07XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGYucXVlcnlGZWF0dXJlcyhxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbFRoaXJkUXVlcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGV0YWlsVGhpcmRRdWVyeVswXS52YWx1ZVswXSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEubGFiZWwgPCBiLmxhYmVsID8gLTEgOiBhLmxhYmVsID4gYi5sYWJlbCA/IDEgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnZhbHVlIC0gYi52YWx1ZSA8IDAgPyAtMSA6IGEudmFsdWUgPT09IGIudmFsdWUgPyAwIDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogZGV0YWlsVGhpcmRRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBjbGlja2VkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlID0gb2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5maWx0ZXIoKGEpID0+IGEuaWQgIT09IG9iai5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duVmFsdWVRdWVyeTogZS50YXJnZXQudmFsdWUgfSwgKCkgPT4ge30pO1xuICAgIGlmIChrZXl0eXBlID09PSBcIndoZXJlQ2xhdXNlU2V0XCIpIHtcbiAgICAgIGlmIChjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UpXG4gICAgICAgIHRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhcbiAgICAgICAgICBjbGlja2VkUXVlcnlUYWJsZUlkLFxuICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZVxuICAgICAgICApO1xuICAgIH1cbiAgfTtcblxuICBkcm9wRG93biA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRPcGVuOiB0cnVlIH0pO1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1xuICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAuaW5kZXhPZihpZC50b1N0cmluZygpKTtcbiAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcbiAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XG4gICAgICAgICAgaWYgKCFvYmouaXNPcGVuKSB7XG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgaXNPcGVuOiB0cnVlIH07XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgaXNPcGVuOiBmYWxzZSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZHJvcERvd25TZXQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0T3BlbjogdHJ1ZSB9KTtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldFxuICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAuaW5kZXhPZihpZC50b1N0cmluZygpKTtcbiAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5tYXAoKG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICBpZiAoIW9iai5pc09wZW4pIHtcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpc09wZW46IHRydWUgfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBTZXQucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZVNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlzT3BlbjogZmFsc2UgfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNoZWNrQm94ID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0NoZWNrZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uQ2hhbmdlQ2hlY2tCb3ggPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgY3VycmVudElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gICAgbGV0IG9iamVjdElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNcbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRJZCk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIGlmICghb2JqLmNoZWNrZWRMaXN0KSB7XG4gICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMpKSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlmQWxyZWFkeUNoZWNrID0gb2JqLmNoZWNrZWRMaXN0XG4gICAgICAgICAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouY2hlY2tWYWx1ZSlcbiAgICAgICAgICAgICAgICAuaW5kZXhPZihldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgaWYgKGlmQWxyZWFkeUNoZWNrID09IC0xKSB7XG4gICAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4ub2JqLmNoZWNrZWRMaXN0LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgPT09IG9iai5pZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvYmogb2JqZWN0IGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSB1cGRhdGVkIG9iaiBvYmplY3QgdG8gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcylcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgLy8gRmluZCB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICBjb25zdCBvYmogPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maW5kKChhKSA9PiBhLmlkID09PSBjdXJyZW50SWQpO1xuICAgICAgLy8gUmVtb3ZlIHRoZSBjaGVja1ZhbHVlIGZyb20gdGhlIGNoZWNrZWRMaXN0IGFycmF5XG4gICAgICBvYmouY2hlY2tlZExpc3QgPSBvYmouY2hlY2tlZExpc3QuZmlsdGVyKFxuICAgICAgICAoYSkgPT4gYS5jaGVja1ZhbHVlICE9PSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlXG4gICAgICApO1xuICAgICAgLy8gVXBkYXRlIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmluZEluZGV4KFxuICAgICAgICAoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNbaW5kZXhdID0gb2JqO1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHdoZXJlQ2xhdXNlczogdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMsXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzKSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2sgPSAoY3VycmVudElkLCBjdXJyZW50V2hlcmVDbGF1c2UpID0+IHtcbiAgICBjb25zdCBibG9ja0lkID0gY3VycmVudElkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBjb25zdCBjdXJyZW50U2V0QmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgbGV0IGN1cnJlbnRCbG9ja0luZGV4ID0gLTE7XG4gICAgbGV0IGN1cnJlbnRCbG9jaztcbiAgICBjdXJyZW50QmxvY2tJbmRleCA9IGN1cnJlbnRTZXRCbG9jay5maW5kSW5kZXgoXG4gICAgICAoaXRlbSkgPT4gYCR7aXRlbT8uYmxvY2tJZH1gID09PSBibG9ja0lkXG4gICAgKTtcbiAgICBpZiAoY3VycmVudEJsb2NrSW5kZXggIT09IC0xKVxuICAgICAgY3VycmVudEJsb2NrID0gY3VycmVudFNldEJsb2NrW2N1cnJlbnRCbG9ja0luZGV4XTtcbiAgICBsZXQgY3VycmVudFdoZXJlU2V0Q2xhdXNlID0gbnVsbDtcbiAgICBpZiAoY3VycmVudEJsb2NrKSB7XG4gICAgICBjdXJyZW50V2hlcmVTZXRDbGF1c2UgPSBjdXJyZW50QmxvY2tbYCR7YmxvY2tJZH1gXTtcbiAgICAgIGlmIChjdXJyZW50V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgaW5kZXggPSBjdXJyZW50V2hlcmVTZXRDbGF1c2UuZmluZEluZGV4KFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50SWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGN1cnJlbnRXaGVyZVNldENsYXVzZVtpbmRleF0gPSBjdXJyZW50V2hlcmVDbGF1c2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFdoZXJlU2V0Q2xhdXNlID0gW1xuICAgICAgICAgICAgLi4uY3VycmVudFdoZXJlU2V0Q2xhdXNlLFxuICAgICAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlLFxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEJsb2NrW2Jsb2NrSWRdID0gY3VycmVudFdoZXJlU2V0Q2xhdXNlO1xuICAgICAgICBjdXJyZW50U2V0QmxvY2tbY3VycmVudEJsb2NrSW5kZXhdID0gY3VycmVudEJsb2NrO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGN1cnJlbnRTZXRCbG9jayB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRCbG9ja1tibG9ja0lkXSA9IFtjdXJyZW50V2hlcmVDbGF1c2VdO1xuICAgICAgICBjdXJyZW50U2V0QmxvY2tbY3VycmVudEJsb2NrSW5kZXhdID0gY3VycmVudEJsb2NrO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGN1cnJlbnRTZXRCbG9jayB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2VDaGVja0JveFNldCA9IChldmVudCkgPT4ge1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBsZXQgY3VycmVudElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gICAgbGV0IG9iamVjdElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldFxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoY3VycmVudElkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0Lm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY3VycmVudElkKSB7XG4gICAgICAgICAgICBpZiAoIW9iai5jaGVja2VkTGlzdFNldCkge1xuICAgICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgIGNoZWNrZWRMaXN0U2V0OiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWU6IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LmZpbHRlcihcbiAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQucHVzaChvYmopO1xuICAgICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQ7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlmQWxyZWFkeUNoZWNrID0gb2JqLmNoZWNrZWRMaXN0U2V0XG4gICAgICAgICAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouY2hlY2tWYWx1ZSlcbiAgICAgICAgICAgICAgICAuaW5kZXhPZihldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgaWYgKGlmQWxyZWFkeUNoZWNrID09IC0xKSB7XG4gICAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZExpc3RTZXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4ub2JqLmNoZWNrZWRMaXN0U2V0LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCA9PT0gb2JqLmlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG9iaiBvYmplY3QgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgdXBkYXRlZCBvYmogb2JqZWN0IHRvIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldClcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgLy8gRmluZCB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICBjb25zdCBvYmogPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LmZpbmQoKGEpID0+IGEuaWQgPT09IGN1cnJlbnRJZCk7XG4gICAgICAvLyBSZW1vdmUgdGhlIGNoZWNrVmFsdWUgZnJvbSB0aGUgY2hlY2tlZExpc3QgYXJyYXlcbiAgICAgIG9iai5jaGVja2VkTGlzdFNldCA9IG9iai5jaGVja2VkTGlzdFNldC5maWx0ZXIoXG4gICAgICAgIChhKSA9PiBhLmNoZWNrVmFsdWUgIT09IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWVcbiAgICAgICk7XG4gICAgICAvLyBVcGRhdGUgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LmZpbmRJbmRleChcbiAgICAgICAgKGEpID0+IGEuaWQgPT09IGN1cnJlbnRJZFxuICAgICAgKTtcbiAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXRbaW5kZXhdID0gb2JqO1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQpKTtcbiAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQpKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKG5ld1doZXJlU2V0Q2xhdXNlPy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50SWRcbiAgICAgICk7XG4gICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soY3VycmVudElkLCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UpO1xuICAgIH1cbiAgfTtcblxuICBjaGVja1BhcmVudGhlc2lzKHZhbDogc3RyaW5nKSB7XG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICAgIGNvbnN0IGJyYWNrZXRzID0gW1wiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCJdO1xuICAgIGlmIChicmFja2V0cy5pbmNsdWRlcyh2YWwuY2hhckF0KDApKSkge1xuICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfVxuXG4gIGxvb3BUb0dldFN0cmluZyhzdHJpbmdBcnI6IHN0cmluZ1tdKSB7XG4gICAgbGV0IG5ld1N0cmluZyA9IFwiIFwiO1xuICAgIGlmIChzdHJpbmdBcnIubGVuZ3RoKSB7XG4gICAgICBuZXdTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzdHJpbmdBcnJbMF0pO1xuICAgICAgbmV3U3RyaW5nID0gbmV3U3RyaW5nLnJlcGxhY2UoL1wiL2csIGAnYCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0cmluZ0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuZXdTdHJpbmdWYWwgPSBKU09OLnN0cmluZ2lmeShzdHJpbmdBcnJbaV0pLnJlcGxhY2UoL1wiL2csIGAnYCk7XG4gICAgICAgIG5ld1N0cmluZyArPSBcIixcIiArIG5ld1N0cmluZ1ZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0cmluZztcbiAgfVxuXG4gIHF1ZXJ5Q29uc3RydWN0b3IgPSAoXG4gICAgbGF5ZXJWaWV3LFxuICAgIGZpcnN0UXVlcnksXG4gICAgcXVlcnlSZXF1ZXN0LFxuICAgIHNlY29uZFF1ZXJ5VGFyZ2V0LFxuICAgIEFuZE9yLFxuICAgIGNvbm5lY3Rvcl9mdW5jdGlvbixcbiAgICBsYXllcixcbiAgICBxdWVyeVR5cGUgPSBcInNpbmdsZVwiXG4gICkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgY29uc3QgdmFsdWVzID0gc2Vjb25kUXVlcnlUYXJnZXQ7XG4gICAgc3dpdGNoIChxdWVyeVJlcXVlc3QpIHtcbiAgICAgIGNhc2UgXCJMSUtFJVwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiJUxJS0VcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIiVMSUtFJVwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk5PVCBMSUtFXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gTk9UIExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzIG51bGxcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBpcyBudWxsYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzIG5vdCBudWxsXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gaXMgbm90IG51bGxgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSU5cIjpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7XG4gICAgICAgICAgICBcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJcbiAgICAgICAgICB9KWA7XG4gICAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICBBbmRPcixcbiAgICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tQYXJlbnRoZXNpcyhzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZpZWRWYWx1ZSA9IHRoaXMubG9vcFRvR2V0U3RyaW5nKHNlY29uZFF1ZXJ5VGFyZ2V0KTtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJOT1RfSU5cIjpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYE5PVCAke2ZpcnN0UXVlcnl9IElOICgke1xuICAgICAgICAgICAgXCInXCIgKyBzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXG4gICAgICAgICAgfSlgO1xuICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xuICAgICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGFyZW50aGVzaXMoc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIikpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSB0aGlzLmxvb3BUb0dldFN0cmluZyhzZWNvbmRRdWVyeVRhcmdldCk7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGBOT1QgICR7Zmlyc3RRdWVyeX0gSU4gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGBOT1QgICR7Zmlyc3RRdWVyeX0gSU4gKCR7c2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIil9KWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xuICAgICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImluY2x1ZGVkXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCgke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gQU5EICR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH0pYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzX25vdF9pbmNsdWRlZFwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAoJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuZmlyc3RUeHR9IE9SICR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH0pYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xuICAgICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGJyYWNrZXRzID0gW1wiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCJdO1xuICAgICAgICAgIGlmIChicmFja2V0cy5pbmNsdWRlcyhzZWNvbmRRdWVyeVRhcmdldC5jaGFyQXQoMCkpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSBKU09OLnN0cmluZ2lmeShzZWNvbmRRdWVyeVRhcmdldCkucmVwbGFjZSgvXCIvZywgYCdgKVxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJyR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICR7c2Vjb25kUXVlcnlUYXJnZXR9YDtcbiAgICAgICAgICAvLyBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcbiAgICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjaG9vc2VBbmRPciA9IChlKSA9PiB0aGlzLnNldFN0YXRlKHsgQW5kT3I6IGUudGFyZ2V0LnZhbHVlIH0pO1xuXG4gIGNob29zZUFuZE9yU2V0ID0gKGUsIGJsb2NrSWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2V0QmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50U2V0QmxvY2suZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJsb2NrSWQgPT09IGJsb2NrSWQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTZXRCbG9ja0l0ZW0gPSBjdXJyZW50U2V0QmxvY2tbaW5kZXhdO1xuICAgICAgY3VycmVudFNldEJsb2NrSXRlbVtcIkFuZE9yU2V0XCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBjdXJyZW50U2V0QmxvY2tbaW5kZXhdID0gY3VycmVudFNldEJsb2NrSXRlbTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IEFuZE9yU2V0OiBlLnRhcmdldC52YWx1ZSwgU2V0QmxvY2s6IGN1cnJlbnRTZXRCbG9jayB9KTtcbiAgfTtcblxuICBvcGVuRHJvcCA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiBmYWxzZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJvcElkOiBpZCB9KTtcbiAgICBjb25zdCBkcm9wRG93bnMgPSB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zIH07XG4gICAgaWYgKGRyb3BEb3duc1tpZF0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wRG93bnM6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnMsIFtpZF06IGZhbHNlIH0gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wRG93bnM6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnMsIFtpZF06IHRydWUgfSB9KTtcbiAgICB9XG4gIH07XG5cbiAgb3BlbkRyb3BTZXQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50SWQgPSBpZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW91c2VsZWF2ZTogZmFsc2UgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BJZFNldDogY3VycmVudElkIH0pO1xuICAgIGNvbnN0IGRyb3BEb3duc1NldCA9IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQgfTtcbiAgICBpZiAoZHJvcERvd25zU2V0W2N1cnJlbnRJZF0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcm9wRG93bnNTZXQ6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsIFtjdXJyZW50SWRdOiBmYWxzZSB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcm9wRG93bnNTZXQ6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsIFtjdXJyZW50SWRdOiB0cnVlIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY2xvc2VEcm9wID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UsIGF1dE9wZW46IGZhbHNlIH0pO1xuXG4gIGNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmRyb3BJZCAhPT0gbnVsbCAmJiB0aGlzLnN0YXRlLm1vdXNlbGVhdmUpIHtcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy8gICBkcm9wRG93bnM6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnMsIFt0aGlzLnN0YXRlLmRyb3BJZF06IGZhbHNlIH0sXG4gICAgICAvLyB9KTtcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy8gICBkcm9wRG93bnNTZXQ6IHtcbiAgICAgIC8vICAgICAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCxcbiAgICAgIC8vICAgICBbdGhpcy5zdGF0ZS5kcm9wSWRTZXRdOiBmYWxzZSxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5kcm9wSWRTZXQgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS5tb3VzZWxlYXZlKSB7XG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vICAgZHJvcERvd25zU2V0OiB7XG4gICAgICAvLyAgICAgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsXG4gICAgICAvLyAgICAgW3RoaXMuc3RhdGUuZHJvcElkU2V0XTogZmFsc2UsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25tb3VzZUxlYXZlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IHRydWUgfSk7XG5cbiAgLy8gbWV0aG9kcyBmb3IgYXR0cmlidXRlIHRhYmxlXG4gIGdldEFsbENoZWNrZWRMYXllcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlVmlldyA9IFdpZGdldC5hY3RpdmVWO1xuICAgIGNvbnN0IGFsbE1hcExheWVycyA9IGFjdGl2ZVZpZXcudmlldy5tYXAuYWxsTGF5ZXJzPy5pdGVtcztcbiAgICBjb25zdCBjaGVja2VkTGF5ZXJzID0gdGhpcy5zdGF0ZS5jaGVja2VkTGF5ZXJfO1xuICAgIGxldCBuZXdNYXBMYXllciA9IFtdO1xuICAgIGlmIChhbGxNYXBMYXllcnM/Lmxlbmd0aCA+IDAgJiYgY2hlY2tlZExheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBuZXdNYXBMYXllciA9IGFsbE1hcExheWVycy5yZWR1Y2UoKG5ld0FycmF5LCBpdGVtKSA9PiB7XG4gICAgICAgIGlmIChjaGVja2VkTGF5ZXJzLmluY2x1ZGVzKGl0ZW0uaWQpKSB7XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXBMYXllcjtcbiAgfTtcblxuICBnZXRBY3RpdmVWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBXaWRnZXQuYWN0aXZlVjtcbiAgICByZXR1cm4gYWN0aXZlVmlldztcbiAgfTtcblxuICBnZXRBbGxKaW11TGF5ZXJWaWV3cyA9ICgpID0+IHtcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3cyA9IFdpZGdldC5qaW11TGF5ZXJWaWV3ejtcbiAgICByZXR1cm4gamltdUxheWVyVmlld3M7XG4gIH07XG5cbiAgY2xlYXJIaWdobGlnaHRzID0gKGxheWVyVmlldzogYW55KSA9PiB7XG4gICAgaWYgKGxheWVyVmlldykge1xuICAgICAgbGF5ZXJWaWV3Ll9oaWdobGlnaHRJZHMuY2xlYXIoKTtcbiAgICB9XG4gIH07XG5cbiAgY29ubmVjdG9yX2Z1bmN0aW9uID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBsYXllclZpZXcsXG4gICAgICBxdWVyeSxcbiAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgIHZhbHVlcyxcbiAgICAgIGxheWVyLFxuICAgICAgQW5kT3IsXG4gICAgICBmaWVsZCxcbiAgICAgIHNvdXJjZSxcbiAgICB9ID0gZGF0YTtcbiAgICBpZiAodGhpcy5zdGF0ZS5oaWdsaWdodFNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodHMobGF5ZXJWaWV3KTtcbiAgICAgIHRoaXMuc3RhdGUuaGlnbGlnaHRTZWxlY3RlZC5mb3JFYWNoKChoaWdobGlnaHQpID0+IHtcbiAgICAgICAgaGlnaGxpZ2h0LnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCByZXN1bHRzID0geyBmZWF0dXJlczogW10gfTtcbiAgICBsZXQgYWRkaXRpb25hbFF1ZXJ5ID0gbnVsbDtcbiAgICBpZiAoc291cmNlID09PSBcInNpbmdsZVF1ZXJ5XCIpIHtcbiAgICAgIGFkZGl0aW9uYWxRdWVyeSA9IHF1ZXJ5LndoZXJlO1xuICAgICAgaWYgKHRoaXMucXVlcnlBcnJheS5sZW5ndGggPCB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGFkZGl0aW9uYWxRdWVyeSA9IHF1ZXJ5LndoZXJlICsgXCIgXCIgKyBBbmRPcjtcbiAgICAgIH1cbiAgICAgIHRoaXMucXVlcnlBcnJheS5wdXNoKGFkZGl0aW9uYWxRdWVyeSk7XG4gICAgICB0aGlzLm91dGZpZWxkcy5wdXNoKGAke2ZpZWxkfWApO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLnF1ZXJ5QXJyYXkubGVuZ3RoID49IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmxlbmd0aCB8fFxuICAgICAgc291cmNlID09PSBcInNldFF1ZXJ5XCJcbiAgICApIHtcbiAgICAgIGxldCBjdXJyZW50UXVlcnkgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucXVlcnlBcnJheS5sZW5ndGgpIGN1cnJlbnRRdWVyeSA9IHRoaXMucXVlcnlBcnJheS5qb2luKFwiIFwiKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgeyBzZXRRdWVyeVN0cmluZywgb3V0RmllbGRzIH0gPSB0aGlzLnNlbmRRdWVyeVNldCgpO1xuICAgICAgICBpZiAoc291cmNlID09PSBcInNpbmdsZVF1ZXJ5XCIpIHtcbiAgICAgICAgICBpZiAoc2V0UXVlcnlTdHJpbmcpXG4gICAgICAgICAgICBjdXJyZW50UXVlcnkgKz0gXCIgXCIgKyBBbmRPciArIFwiIFwiICsgXCIoXCIgKyBzZXRRdWVyeVN0cmluZyArIFwiKVwiO1xuICAgICAgICAgIGlmIChvdXRGaWVsZHM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5vdXRmaWVsZHMgPSB0aGlzLm91dGZpZWxkcy5jb25jYXQob3V0RmllbGRzKTtcbiAgICAgICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQodGhpcy5vdXRmaWVsZHMpO1xuICAgICAgICAgICAgdGhpcy5vdXRmaWVsZHMgPSBBcnJheS5mcm9tKHNldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykgY3VycmVudFF1ZXJ5ID0gc2V0UXVlcnlTdHJpbmc7XG4gICAgICAgICAgaWYgKG91dEZpZWxkcz8ubGVuZ3RoKSB0aGlzLm91dGZpZWxkcyA9IG91dEZpZWxkcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLm91dGZpZWxkcy5pbmNsdWRlcyhcIk9CSkVDVElEXCIpKSB7XG4gICAgICAgIHRoaXMub3V0ZmllbGRzLnB1c2goXCJPQkpFQ1RJRFwiKTtcbiAgICAgIH1cbiAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IHRoaXMub3V0ZmllbGRzO1xuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xuICAgICAgcXVlcnkud2hlcmUgPSBjdXJyZW50UXVlcnk7XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHRzID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGxheWVyVmlldz8ucXVlcnlGZWF0dXJlcylcbiAgICAgICAgICByZXN1bHRzID0gYXdhaXQgbGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgfVxuICAgICAgaWYgKGxheWVyPy5xdWVyeUZlYXR1cmVzKSByZXN1bHRzID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSk7XG4gICAgICBsZXQgY2hlY2tlZExheWVyXyA9IFtkYXRhLmxheWVyVmlldy5sYXllci5pZF07XG4gICAgICBjb25zdCBoaWdobGlnaHRJZHMgPSBoZWxwZXIuZ2V0SGlnaGxpZ2h0ZWRJZHMocmVzdWx0cy5mZWF0dXJlcyk7XG4gICAgICBpZiAoaGlnaGxpZ2h0SWRzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBoaWdsaWdodFNlbGVjdGVkQXJyID0gW107XG4gICAgICAgIGhpZ2hsaWdodElkcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhpZ2hsaWdodFNlbGVjdGVkID0gbGF5ZXJWaWV3LmhpZ2hsaWdodChlbCk7XG4gICAgICAgICAgaGlnbGlnaHRTZWxlY3RlZEFyci5wdXNoKGhpZ2hsaWdodFNlbGVjdGVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcbiAgICAgICAgICByZXN1bHRzLmZlYXR1cmVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihlbC5nZW9tZXRyeSwgMSwgXCJtZXRlcnNcIik7XG4gICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWdsaWdodFNlbGVjdGVkOiBoaWdsaWdodFNlbGVjdGVkQXJyIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RlZExheWVyc0NvbnRlbnRzID0gaGVscGVyLmdldFNlbGVjdGVkQ29udGVudHNMYXllcihcbiAgICAgICAgW3Jlc3VsdHMuZmVhdHVyZXNdLFxuICAgICAgICBjaGVja2VkTGF5ZXJfXG4gICAgICApO1xuICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gaGVscGVyLmdldE51bWJlck9mQXR0cmlidXRlcyhcbiAgICAgICAgc2VsZWN0ZWRMYXllcnNDb250ZW50c1xuICAgICAgKTtcbiAgICAgIGxldCBhY3RpdmVWID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXllckNvbnRlbnRzOiBzZWxlY3RlZExheWVyc0NvbnRlbnRzIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWRMYXllcl86IGNoZWNrZWRMYXllcl8gfSk7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IFBvbHlnb24uZnJvbUV4dGVudChsYXllclZpZXcudmlldy5leHRlbnQpLnRvSlNPTigpO1xuICAgICAgY29uc3QgbGF5ZXJPcGVuID0ge1xuICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnksXG4gICAgICAgIHR5cGVTZWxlY3RlZDogXCJjb250YWluc1wiLFxuICAgICAgfTtcbiAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRMYXllclZpZXcgPSBsYXllclZpZXc7XG4gICAgICAgIGNvbnN0IGlzTGF5ZXJDaGVja2VkID0gdGhpcy5zdGF0ZS5pc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuaW5pdCh7XG4gICAgICAgICAgcmVzdWx0czogW3Jlc3VsdHMuZmVhdHVyZXNdLFxuICAgICAgICAgIGFsbENoZWNrZWRMYXllcnM6IGFsbENoZWNrZWRMYXllcnMsXG4gICAgICAgICAgaXNMYXllckNoZWNrZWQ6IGlzTGF5ZXJDaGVja2VkLFxuICAgICAgICAgIGNoZWNrZWRMYXllcnM6IGNoZWNrZWRMYXllcl8sXG4gICAgICAgICAgbnVtYmVyT2ZBdHRyaWJ1dGVzOiBudW1iZXJPZkF0dHJpYnV0ZXMsXG4gICAgICAgICAgbGF5ZXJPcGVuOiBsYXllck9wZW4sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogZmFsc2UgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5kaXNwYXRjaGluZ0FsbCgpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtTm90Rm91bmQ6IG51bGwgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmIChlcnIpIHRoaXMuc2V0U3RhdGUoeyBpdGVtTm90Rm91bmQ6IHRoaXMubmxzKGVycikgfSk7XG4gICAgICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUgfSk7XG4gICAgICAgICAgdGhpcy5yZXR1cm5Ub09yaWdpbmFsRXh0ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1Ob3RGb3VuZDogdGhpcy5ubHMoXCJub0l0ZW1TZWxlY3RlZFwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmV0dXJuVG9PcmlnaW5hbEV4dGVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm5Ub09yaWdpbmFsRXh0ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldztcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcbiAgICB2aWV3LmdvVG8oeyBjZW50ZXI6IHZpZXcuY2VudGVyLCB6b29tOiBXaWRnZXQuaW5pdGlhbFpvb20gfSk7XG4gIH07XG5cbiAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkID0gKGUsIHZhbCkgPT4ge1xuICAgIGxldCBjb3VudGVyID0gWy4uLnRoaXMuc3RhdGUuY291bnRlcklzQ2hlY2tlZF07XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvdW50ZXIucHVzaCh2YWwpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXJJc0NoZWNrZWQ6IGNvdW50ZXIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZih2YWwpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVySXNDaGVja2VkOiBjb3VudGVyIH0pO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvblJlZnJlc2ggPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0TGF5ZXJMaXN0ID0gdGhpcy5zdGF0ZS5yZXN1bHRMYXllckxpc3Q7XG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIHJlc3VsdExheWVyTGlzdDogcmVzdWx0TGF5ZXJMaXN0LFxuICAgICAgamltdU1hcFZpZXc6IGppbXVNYXBWaWV3LFxuICAgICAgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcbiAgICB2aWV3LmdvVG8oeyBjZW50ZXI6IHZpZXcuY2VudGVyLCB6b29tOiBXaWRnZXQuaW5pdGlhbFpvb20gfSk7XG4gICAgaWYgKHRoaXMuY3VycmVudExheWVyVmlldykgdGhpcy5jbGVhckhpZ2hsaWdodHModGhpcy5jdXJyZW50TGF5ZXJWaWV3KTtcbiAgfTtcblxuICAvL1RPRE8gY29uZmlnIGFiaWxpdGFyZSB0YWIgdHJ1ZS9mYWxzZVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGFibGVTZXRDb3VudHMgPSAoXG4gICAgICB0YWJsZVNldENvdW50czogeyBpZDogc3RyaW5nOyBkZWxldGVkOiBib29sZWFuIH1bXVxuICAgICkgPT4ge1xuICAgICAgbGV0IGNvdW50cyA9IDA7XG4gICAgICBpZiAodGFibGVTZXRDb3VudHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvcGllZFRhYmxlU2V0Q291bnRzID0gWy4uLnRhYmxlU2V0Q291bnRzXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRJdGVtID0gY29waWVkVGFibGVTZXRDb3VudHMuZmlsdGVyKFxuICAgICAgICAgIChpdGVtKSA9PiAhaXRlbS5kZWxldGVkXG4gICAgICAgICk7XG4gICAgICAgIGNvdW50cyA9IGZpbHRlcmVkSXRlbS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gY291bnRzO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJDTE9TRURcIiAmJiAhdGhpcy5zdGF0ZS53aWRnZXRTdGF0ZUNsb3NlZENoZWNrZWQpIHtcbiAgICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldztcbiAgICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3O1xuICAgICAgY29uc3QgcmVzdWx0TGF5ZXJMaXN0ID0gdGhpcy5zdGF0ZS5yZXN1bHRMYXllckxpc3Q7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIHJlc3VsdExheWVyTGlzdDogcmVzdWx0TGF5ZXJMaXN0LFxuICAgICAgICBqaW11TWFwVmlldzogamltdU1hcFZpZXcsXG4gICAgICAgIGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUsXG4gICAgICAgIHdpZGdldFN0YXRlT3BlbmVkQ2hlY2tlZDogZmFsc2UsXG4gICAgICAgIHdpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdmlldy5nb1RvKHsgY2VudGVyOiB2aWV3LmNlbnRlciwgem9vbTogV2lkZ2V0LmluaXRpYWxab29tIH0pO1xuICAgICAgaWYgKHRoaXMuY3VycmVudExheWVyVmlldykgdGhpcy5jbGVhckhpZ2hsaWdodHModGhpcy5jdXJyZW50TGF5ZXJWaWV3KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuc3RhdGUgPT0gXCJPUEVORURcIiAmJiAhdGhpcy5zdGF0ZS53aWRnZXRTdGF0ZU9wZW5lZENoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aWRnZXRTdGF0ZUNsb3NlZENoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB3aWRnZXRTdGF0ZU9wZW5lZENoZWNrZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdFJlc2l6ZURldGVjdG9yIGhhbmRsZVdpZHRoIGhhbmRsZUhlaWdodD5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZGdldC1hdHRyaWJ1dGUtdGFibGUgamltdS13aWRnZXRcIlxuICAgICAgICAgICAgaWQ9XCJ3cmFwXCJcbiAgICAgICAgICAgIHJlZj1cIndyYXBcIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZURyb3BPbmNsaWNrT3V0c2lkZSgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcInVzZU1hcFdpZGdldElkc1wiKSAmJlxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXSAmJiAoXG4gICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItQW1iaXRvXCIgdGl0bGU9XCJBbWJpdG9cIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgY29udGFpbmVyLWZsdWlkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWNvbHVtblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJTZWxlemlvbmFyZSBwcmltYSBpbCBsYXllciwgcG9pIGNvbnRpbnVhIGNvbiBpbCBjb3N0cnV0dG9yZSBkZWxsYSBxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidy0xMDBcIj5TZWxlemlvbmEgaWwgbGF5ZXI6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNlbGVjdExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVudFNlbGVjdGVkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVzdWx0TGF5ZXJMaXN0Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWwubGF5ZXJJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFVybD17ZWwuZWxlbWVudC5wYXJzZWRVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuZWxlbWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dBZGRTZWxlY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjb3JyaXNwb25kZW50aSBhbGxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ3VlbnRlIGVzcHJlc3Npb25lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hvb3NlQW5kT3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYSB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkFORFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJBTkRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZSBjb3JyaXNwb25kb25vIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk9SXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuYSBxdWFsc2lhc2kgZGVsbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt3aWR0aCA+PSA2MjYgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMSBtYi0zIGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBnYXA6IFwiMiVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRUYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFnZ2l1bmdpIGVzcHJlc3Npb25lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkQmxvY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249Jzxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNy41IDBhLjUuNSAwIDAgMC0uNS41VjdILjVhLjUuNSAwIDAgMCAwIDFIN3Y2LjVhLjUuNSAwIDAgMCAxIDBWOGg2LjVhLjUuNSAwIDAgMCAwLTFIOFYuNWEuNS41IDAgMCAwLS41LS41WlwiIGZpbGw9XCIjMDAwXCI+PC9wYXRoPjwvc3ZnPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5BZ2dpdW5naSBzZXQgZGkgZXNwcmVzc2lvbmk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZW5kUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFwcGxpY2E8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5mdW5jdGlvblJlZnJlc2h9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPlJpY2FyaWNhcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7NjI1ID49IHdpZHRoICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiMiVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkVGFibGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249Jzxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNy41IDBhLjUuNSAwIDAgMC0uNS41VjdILjVhLjUuNSAwIDAgMCAwIDFIN3Y2LjVhLjUuNSAwIDAgMCAxIDBWOGg2LjVhLjUuNSAwIDAgMCAwLTFIOFYuNWEuNS41IDAgMCAwLS41LS41WlwiIGZpbGw9XCIjMDAwXCI+PC9wYXRoPjwvc3ZnPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5BZ2dpdW5naSBlc3ByZXNzaW9uZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZEJsb2NrfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciAgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSc8c3ZnIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTcuNSAwYS41LjUgMCAwIDAtLjUuNVY3SC41YS41LjUgMCAwIDAgMCAxSDd2Ni41YS41LjUgMCAwIDAgMSAwVjhoNi41YS41LjUgMCAwIDAgMC0xSDhWLjVhLjUuNSAwIDAgMC0uNS0uNVpcIiBmaWxsPVwiIzAwMFwiPjwvcGF0aD48L3N2Zz4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QWdnaXVuZ2kgc2V0IGRpIGVzcHJlc3Npb25pPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VuZFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5BcHBsaWNhPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjVweFwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZnVuY3Rpb25SZWZyZXNofVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5SaWNhcmljYXJlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI1MCVcIiwgb3ZlcmZsb3dZOiBcInNjcm9sbFwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGFibGVzLm1hcCgoZWwsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcm93LSR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5zdGF0ZS5yZXN1bHRzTGF5ZXJTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbkRyb3BEPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duPXsoKSA9PiB0aGlzLmRyb3BEb3duKGVsLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeT17dGhpcy5zdGF0ZS5kcm9wZG93blZhbHVlUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e3RoaXMuc3RhdGUuaXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZD17dGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFRvUXVlcnk9e3RoaXMuc3RhdGUuY2hlY2tlZFRvUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXM9e3RoaXMuc3RhdGUudGFibGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzSWQ9e2VsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzPXt0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXt0aGlzLmdldFF1ZXJ5QXR0cmlidXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnk9e3RoaXMuZ2V0UXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUaGlyZFF1ZXJ5PXt0aGlzLnRoaXJkUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyPXt0aGlzLnRleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXt0aGlzLmRyb3Bkb3duSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyPXt0aGlzLnRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duVG9nZ2xlcj17dGhpcy5kcm9wRG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrQm94PXt0aGlzLmhhbmRsZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFibGU9eygpID0+IHRoaXMuZGVsZXRlVGFibGUoZWwuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXI9e3RoaXMudW5pdm9jb1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUNoZWNrQm94PXt0aGlzLm9uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcD17dGhpcy5vcGVuRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlRHJvcD17dGhpcy5jbG9zZURyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUub3BlbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0T3Blbj17dGhpcy5zdGF0ZS5hdXRPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZT17dGhpcy5zdGF0ZS5tb3VzZWxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25tb3VzZUxlYXZlPXt0aGlzLm9ubW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZD17dGhpcy5mdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bnM9e3RoaXMuc3RhdGUuZHJvcERvd25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU5vdEZvdW5kPXt0aGlzLnN0YXRlLml0ZW1Ob3RGb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWJsZT17ZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeUNoYW5nZWQgPSB7dGhpcy5zdGF0ZS5xdWVyeUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ9e3RoaXN9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjk4JVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMDA1ZWNhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLlNldEJsb2NrLm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRzID0gdGFibGVTZXRDb3VudHMoZWwudGFibGVzU2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRzIDwgMiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHMgPT0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNvcnJpc3BvbmRlbnRpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbGEgc2VndWVudGUgZXNwcmVzc2lvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt3aWR0aCA+PSA2MjYgPyBcImQtZmxleCBjb2wtbC0xIFwiOlwiZC1mbGV4IGNvbC1tZC04XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDowLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VBbmRPclNldChlLCBlbC5ibG9ja0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYSB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkFORFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJBTkRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJpc3BvbmRvbm8gYSB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk9SXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyaXNwb25kb25vIGFkIHVuYSBxdWFsc2lhc2kgZGVsbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc3ByZXNzaW9uaSBzZWd1ZW50aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVCbG9jayhlbC5ibG9ja0lkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKT0+dGhpcy5kZWxldGVCbG9ja0FsbCh7ZWx9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlbC5ibG9ja0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkVHdvVGFibGUoZWwuYmxvY2tJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1c091dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC50YWJsZXNTZXQubWFwKChpbm5lckVsLCBpLCBUYWJsZUFycmF5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZFNldFRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YHJvdy0ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RoaXMuc3RhdGUucmVzdWx0c0xheWVyU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93bj17KCkgPT4gdGhpcy5kcm9wRG93blNldChlbC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e3RoaXMuc3RhdGUuZHJvcGRvd25WYWx1ZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt0aGlzLnN0YXRlLmlzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQ9e3RoaXMuc3RhdGUuY291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRUb1F1ZXJ5PXt0aGlzLnN0YXRlLmNoZWNrZWRUb1F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIEFkZCBzZXQgdGFibGUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNTZXQ9e3RoaXMuc3RhdGUudGFibGVzU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzU2V0SWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpbm5lckVsLmlkfWAgKyBcIi1cIiArIGAke2VsLmJsb2NrSWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzU2V0PXt0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5kIGZvciBBZGQgc2V0IHRhYmxlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0UXVlcnlBdHRyaWJ1dGU9e3RoaXMuZ2V0UXVlcnlBdHRyaWJ1dGVTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRRdWVyeUF0dHJpYnV0ZT17dGhpcy5nZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5PXt0aGlzLmdldFF1ZXJ5U2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGhpcmRRdWVyeT17dGhpcy50aGlyZFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGhpcy50ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtSGFuZGxlcj17dGhpcy5kcm9wZG93bkl0ZW1DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93blRvZ2dsZXI9e3RoaXMuZHJvcERvd25TZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja0JveD17dGhpcy5oYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhYmxlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCbG9ja1RhYmxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2lubmVyRWwuaWR9YCArIFwiLVwiICsgYCR7ZWwuYmxvY2tJZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2VsLmJsb2NrSWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dGhpcy51bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ2hlY2tCb3g9e3RoaXMub25DaGFuZ2VDaGVja0JveFNldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wPXt0aGlzLm9wZW5Ecm9wU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXt0aGlzLmNsb3NlRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZS5vcGVuZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRPcGVuPXt0aGlzLnN0YXRlLmF1dE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXt0aGlzLnN0YXRlLm1vdXNlbGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmU9e3RoaXMub25tb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duc1NldD17dGhpcy5zdGF0ZS5kcm9wRG93bnNTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtTm90Rm91bmQ9e3RoaXMuc3RhdGUuaXRlbU5vdEZvdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0RlbGV0ZT17Y291bnRzID4gMiA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dCbG9ja0RlbGV0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cyA9PT0gMiAmJiBpID09IDAgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dEZWxldGU9e1RhYmxlQXJyYXkubGVuZ3RoID4gMiA/IHRydWU6ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93QmxvY2tEZWxldGU9e1RhYmxlQXJyYXkubGVuZ3RoID09PSAyICYmIGk9PTAgPyB0cnVlOmZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ9e2VsLmJsb2NrSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCbG9ja0FsbD17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCbG9ja0FsbCh7IGVsLCBpbm5lckVsIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFibGU9e2lubmVyRWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeUNoYW5nZWQgPSB7dGhpcy5zdGF0ZS5xdWVyeUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ9e3RoaXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1Ob3RGb3VuZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5pdGVtTm90Rm91bmR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0UmVzaXplRGV0ZWN0b3I+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9