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
        // univocoSelectHandler = (e, queryType = "single") => {
        //   let txt = e.currentTarget.textContent.trim();
        //   let currentTableId = e.currentTarget.attributes[2].value;
        //   this.queryTextConstructor(txt, currentTableId, queryType);
        // };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9xdWVyeS1idWlsZGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHFFQUFxRSxlQUFlLHFCQUFxQiwrQkFBK0IsMENBQTBDLHFCQUFxQixTQUFTLHNJQUFzSSxLQUFLLHFCQUFxQixLQUFLLEtBQUssbUVBQW1FLGlCQUFpQixxQkFBcUIsT0FBTyxHQUFHLDZCQUE2QiwyQ0FBMkMsb0JBQW9CLE9BQU8sR0FBRyx5QkFBeUI7QUFDNW1CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2REFBNkQsb0JBQW9CLGdDQUFnQyx3QkFBd0IsMEJBQTBCLG9CQUFvQixxQkFBcUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsV0FBVyxrQ0FBa0MsY0FBYyxrQkFBa0IsMEJBQTBCLGFBQWEsNEJBQTRCLFNBQVMsc0hBQXNILFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSx1REFBdUQsd0JBQXdCLGtDQUFrQyxLQUFLLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLHVCQUF1QixLQUFLLGlCQUFpQiwyQkFBMkIsa0NBQWtDLEtBQUssY0FBYyxvQ0FBb0MsS0FBSyxpQkFBaUIsc0JBQXNCLDRCQUE0QixLQUFLLGdCQUFnQiw2QkFBNkIsS0FBSywyQ0FBMkM7QUFDanVDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNB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LENBQUMsS0FBSyxDQUFDLFlBQVksRUFDdkMsTUFBTSxFQUFFLElBQUksR0FDWixDQUNILENBQUMsQ0FDRSxDQUNQLENBQUM7Z0NBQ0osQ0FBQyxDQUFDO2dDQUVGLDBEQUFNO2dDQUNOLDBEQUFNO2dDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQzFCLCtDQUFDLDBDQUFLLElBQ0osU0FBUyxFQUFDLE9BQU8sRUFDakIsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLFFBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM3QixJQUFJLEVBQUMsT0FBTyxFQUNaLFFBQVEsU0FDUixDQUNILENBQ0csQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUNQO1NBQUEsQ0FDbUIsQ0FDdkIsQ0FBQztJQUNKLENBQUM7O0FBLzZFTSxjQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ2YscUJBQWMsR0FBRyxJQUFJLENBQUM7QUFDdEIsMkJBQW9CLEdBQUcsSUFBSSxDQUFDO0FBQzVCLGtCQUFXLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRyaW0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzgzODMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3N0eWxlLmNzcz9hYmJiIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL2xlZnQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9yaWdodC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9wbHVzLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjay50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsdXMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9jb25uZWN0b3IudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL2Nvbm5lY3Rvci9hdHRyaWJ1dGVfdGFibGVfY29ubmVjdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQWRkU2V0VGFibGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvVGFibGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvY29tbW9uL2lucHV0cy9jb21tb25TZWNvbmRDb25zdHJ1Y3Rvci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9jb21tb24vaW5wdXRzL3NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9saWIvUmVzaXplRGV0ZWN0b3IudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS91dGlscy9xdWVyeVRhYmxlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvbHlnb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbC1tZC00IHtcXG4gICAgZmxleDogYXV0bzsgfSB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2xvc2UtY29udGFpbmVyLXRhYmxlLXF1ZXJ5LWJ1aWxkZXIge1xcbiAgICBmbGV4OiBhdXRvOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFDYjs7QUFHTDtFQUNJO0lBQ0ksVUFBUyxFQUFBLEVBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xcbiAgICAuY29sLW1kLTQge1xcbiAgICAgICAgZmxleDogYXV0bztcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XFxuICAgIC5jbG9zZS1jb250YWluZXItdGFibGUtcXVlcnktYnVpbGRlcntcXG4gICAgICAgIGZsZXg6YXV0bztcXG4gICAgfVxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaXRlbS10YWJsZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmN2ZmOyB9XFxuXFxuLnNldHRpbmctc3ZnOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMDA1ZWNhOyB9XFxuXFxuLnNldHRpbmctc3ZnIHtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7IH1cXG5cXG4jd3JhcCB7XFxuICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7IH1cXG5cXG4uaW5jbHVkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbiNpbnB1dHMge1xcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kscUJBQW9CLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLml0ZW0tdGFibGU6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjdmZjtcXHJcXG59XFxyXFxuLnNldHRpbmctc3ZnOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMDA1ZWNhO1xcclxcbn1cXHJcXG4uc2V0dGluZy1zdmd7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3dyYXB7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmluY2x1ZGV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dHN7XFxyXFxuICAgIHdpZHRoOjIwJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgdHJpbW1lZEVuZEluZGV4ID0gcmVxdWlyZSgnLi9fdHJpbW1lZEVuZEluZGV4Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW1TdGFydCA9IC9eXFxzKy87XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udHJpbWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byB0cmltLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUcmltKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgPyBzdHJpbmcuc2xpY2UoMCwgdHJpbW1lZEVuZEluZGV4KHN0cmluZykgKyAxKS5yZXBsYWNlKHJlVHJpbVN0YXJ0LCAnJylcbiAgICA6IHN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVHJpbTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRFbmRJbmRleDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwidmFyIGJhc2VUcmltID0gcmVxdWlyZSgnLi9fYmFzZVRyaW0nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtNi4wMzYgMTIuMTU3IDguMDEtOC4wMWEuNS41IDAgMSAxIC43MDcuNzA3bC04LjAxIDguMDFhMSAxIDAgMCAxLTEuNDE1IDBMMS4xNDYgOC42ODJhLjUuNSAwIDEgMSAuNzA4LS43MDdsNC4xODIgNC4xODJaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk05LjQzOC45OTRjLjIxMyAwIC4zOTcuMTQ2LjQ0LjM1LjE1MS43MjIuMjU3IDEuMzQuMzE2IDEuODUyLjM3NC4xNi43MjUuMzYyIDEuMDQ4LjU5OWwxLjcyOC0uNjc2YS40NTUuNDU1IDAgMCAxIC41NTYuMTg4bDEuNDIgMi4zOTRhLjQzLjQzIDAgMCAxLS4wOTEuNTQ3IDIxLjk4IDIxLjk4IDAgMCAxLTEuNDkgMS4xOTQgNS4xNyA1LjE3IDAgMCAxLS4wMDcgMS4xODNsMS40NjQgMS4xMTlhLjQzLjQzIDAgMCAxIC4xMTEuNTYzbC0xLjQyIDIuMzk0YS40NTQuNDU0IDAgMCAxLS41My4xOTcgMjIuNDQ1IDIyLjQ0NSAwIDAgMS0xLjgwNy0uNjZjLS4zMjUuMjMzLS42NzkuNDMtMS4wNTUuNTg2bC0uMjYzIDEuNzk0YS40NDYuNDQ2IDAgMCAxLS40NDUuMzc2SDYuNTc0YS40NDYuNDQ2IDAgMCAxLS40NC0uMzUgMjEuMDE5IDIxLjAxOSAwIDAgMS0uMzE3LTEuODUzIDUuMzQgNS4zNCAwIDAgMS0xLjA0Ny0uNTk4bC0xLjcyOC42NzVhLjQ1NS40NTUgMCAwIDEtLjU1Ni0uMTg3bC0xLjQyLTIuMzk1YS40My40MyAwIDAgMSAuMDkxLS41NDZjLjU2Ny0uNDkgMS4wNjMtLjg4OCAxLjQ5LTEuMTk0YTUuMTY3IDUuMTY3IDAgMCAxIC4wMDgtMS4xODNMMS4xOSA2LjI0M2EuNDMuNDMgMCAwIDEtLjExMi0uNTYybDEuNDItMi4zOTVhLjQ1NS40NTUgMCAwIDEgLjUzMS0uMTk2Yy43MTkuMjMzIDEuMzIxLjQ1MyAxLjgwNy42Ni4zMjQtLjIzMy42NzktLjQzIDEuMDU2LS41ODdsLjI2Mi0xLjc5NEEuNDQ2LjQ0NiAwIDAgMSA2LjYuOTk0aDIuODM5Wm0tLjM2NSAxSDYuOTg1bC0uMjggMS44NjYtLjQ2Ny4xOWMtLjIzNS4wOTUtLjQ2LjIxLS42NzIuMzRsLS4yMDcuMTM2LS40Mi4yOTMtLjQ3Ni0uMTk3Yy0uMzI4LS4xMzctLjcxOC0uMjgxLTEuMTY5LS40MzNsLS4yMjEtLjA3NC0xLjA0NSAxLjcxOUwzLjU5IDYuOTk5bC0uMDYuNDc5YTQuMTI3IDQuMTI3IDAgMCAwLS4wMjEuODE2bC4wMTQuMTQ0LjA1OC40OTItLjQxOS4yOTRjLS4yODguMjAzLS42MTUuNDUxLS45NzkuNzQ2bC0uMTc3LjE0NSAxLjA0MyAxLjcyIDEuODQ1LS43MDMuNDA2LjI5Yy4yMDQuMTQ2LjQyLjI3NC42NDUuMzg0bC4yMjguMTAzLjQ3NC4xOTkuMDU5LjQ5Yy4wNC4zMzguMTAzLjczMS4xOSAxLjE3N2wuMDQzLjIxOWgyLjA4OGwuMjgyLTEuODY3LjQ2Ni0uMTljLjIzNi0uMDk1LjQ2LS4yMS42NzItLjM0bC4yMDctLjEzNi40MTktLjI5My40NzYuMTk4Yy4zMy4xMzYuNzIuMjggMS4xNy40MzNsLjIyLjA3MiAxLjA0NC0xLjcxOC0xLjU2LTEuMTY1LjA2LS40NzlhNC4xMzEgNC4xMzEgMCAwIDAgLjAyLS44MTVsLS4wMTMtLjE0NC0uMDYtLjQ5Mi40Mi0uMjk1YTE4LjEgMTguMSAwIDAgMCAuOTgtLjc0NmwuMTc2LS4xNDYtMS4wNDMtMS43Mi0xLjg0NC43MDUtLjQwNi0uMjlhNC40OTYgNC40OTYgMCAwIDAtLjY0Ni0uMzg1bC0uMjI4LS4xMDMtLjQ3NC0uMTk5LS4wNTgtLjQ5Yy0uMDMyLS4yNy0uMDgtLjU3Ni0uMTQtLjkxNmwtLjA5NC0uNDhabS0xLjA2NyAzYTMgMyAwIDEgMSAwIDYgMyAzIDAgMCAxIDAtNlptMCAxYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTExLjM0NyAyLjE0NmEuNDg1LjQ4NSAwIDAgMSAwIC43MDhMNS43NiA4bDUuNTg3IDUuMTQ2YS40ODYuNDg2IDAgMCAxIDAgLjcwOC41MzguNTM4IDAgMCAxLS43MzggMGwtNS45NTYtNS41YS40ODUuNDg1IDAgMCAxIDAtLjcwOGw1Ljk1Ni01LjVhLjUzOC41MzggMCAwIDEgLjczOCAwWlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNC42NTMgMTMuODU0YS40ODUuNDg1IDAgMCAxIDAtLjcwOEwxMC4yNCA4IDQuNjUzIDIuODU0YS40ODUuNDg1IDAgMCAxIDAtLjcwOC41MzguNTM4IDAgMCAxIC43MzggMGw1Ljk1NiA1LjVhLjQ4NS40ODUgMCAwIDEgMCAuNzA4bC01Ljk1NiA1LjVhLjUzOC41MzggMCAwIDEtLjczOCAwWlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIm04Ljc0NSA4IDYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0NS43NDZMOCA4Ljc0NmwtNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ2LS43NDZsNi4xLTYuMS02LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYtLjc0Nmw2LjEgNi4xIDYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni43NDZMOC43NDYgOFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNy41IDBhLjUuNSAwIDAgMC0uNS41VjdILjVhLjUuNSAwIDAgMCAwIDFIN3Y2LjVhLjUuNSAwIDAgMCAxIDBWOGg2LjVhLjUuNSAwIDAgMCAwLTFIOFYuNWEuNS41IDAgMCAwLS41LS41WlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjay5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBTZXR0aW5nT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgTGVmdE91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL3JpZ2h0LnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBSaWdodE91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9jbG9zZS5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgQ2xvc2VPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvcGx1cy5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgUGx1c091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiXHJcblxyXG50eXBlIGxheWVyQ29udGVudHNPYmplY3RUeXBlID0ge1xyXG4gICAgaWQ6c3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczphbnlbXVxyXG59XHJcblxyXG50eXBlIHNlbGVjdGVkTGF5ZXJUeXBlID0ge1xyXG4gICAgaWQ6c3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczphbnlbXVxyXG59XHJcblxyXG5jbGFzcyBIZWxwZXIge1xyXG5cclxuICAgIHNldFF1ZXJ5QXJyYXkgPSBbXTtcclxuICAgIHNldE91dEZpZWxkcyA9IFtdO1xyXG5cclxuICAgIGdldExheWVyQXR0cmlidXRlcyA9IChzZWxlY3RlZExheWVySWQ6c3RyaW5nLGxheWVyQ29udGVudHM6bGF5ZXJDb250ZW50c09iamVjdFR5cGVbXSk6YW55W109PntcclxuICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xyXG4gICAgICAgIGlmIChsYXllckNvbnRlbnRzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc09iamVjdCA9IGxheWVyQ29udGVudHMuZmluZCgobGF5ZXJDb250ZW50OmxheWVyQ29udGVudHNPYmplY3RUeXBlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyQ29udGVudD8uaWQgPT09IHNlbGVjdGVkTGF5ZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyQ29udGVudD8uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNPYmplY3Q/LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlS2V5QXJyYXkgPSAoYXR0cmlidXRlczphbnkpOnN0cmluZ1tdPT57XHJcbiAgICAgICAgbGV0IHJldHVybmVkS2V5cyA9IFtdO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICByZXR1cm5lZEtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybmVkS2V5cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIgPShyZXN1bHRzOmFueSxjaGVja2VkTGF5ZXJzOnN0cmluZ1tdKTpzZWxlY3RlZExheWVyVHlwZVtdPT57Ly9zdGVwNSBmcm9tIHNlbGVjdGVkIGl0ZW1zIGdldCB0aGVpciBsYXllcnNcclxuICAgICAgICBsZXQgc2VsZWN0ZWRMYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMYXllcnNBcnJheSA9IHJlc3VsdHMucmVkdWNlKChuZXdBcnJheSxpdGVtczphbnlbXSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtcz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJDb250ZW50cyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TGF5ZXJJZCA9IGl0ZW1zWzBdPy5sYXllcj8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMYXllcnMuaW5kZXhPZihjdXJyZW50TGF5ZXJJZCkgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiaWRcIl0gPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExheWVyQ29udGVudHNbXCJhdHRyaWJ1dGVzXCJdID0gdGhpcy5nZXRBdHRyaWJ1dGVzKGl0ZW1zKTsvL3N0ZXA2IHBhY2thZ2luZyBhdHRyaWJ1dGVzIGFuZCBrZWVwaW5nIGxvbiBhbmQgbGF0aXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChzZWxlY3RlZExheWVyQ29udGVudHMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgICAgICAgICB9LFtdKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRMYXllcnNBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVzID0gKGl0ZW1zOmFueVtdKTphbnlbXT0+e1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNBcnJheSA9IGl0ZW1zLnJlZHVjZSgobmV3QXJyYXksaXRlbSk9PntcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LmF0dHJpYnV0ZXMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2VvbWV0cnkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gaXRlbS5nZW9tZXRyeTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IGdlb21ldHJ5Py5sYXRpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBnZW9tZXRyeT8ubG9uZ2l0dWRlPz9nZW9tZXRyeT8uZXh0ZW50Py5jZW50ZXI/LmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9uZ2l0dWRlICYmIGxhdGl0dWRlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaCh7Li4uaXRlbS5hdHRyaWJ1dGVzLGxvY2F0aW9uOltsYXRpdHVkZSxsb25naXR1ZGVdfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICAgICAgfSxbXSlcclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlc0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bWJlck9mQXR0cmlidXRlcyA9IChsYXllcnNDb250ZW50czp7aWQ6c3RyaW5nLGF0dHJpYnV0ZXM6YW55W119W10pPT57XHJcbiAgICAgICAgbGV0IGxheWVyQ29udGVudHNPYmplY3QgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7aSA8IGxheWVyc0NvbnRlbnRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgbGF5ZXJDb250ZW50c09iamVjdCA9IHsuLi5sYXllckNvbnRlbnRzT2JqZWN0LFtsYXllcnNDb250ZW50c1tpXT8uaWRdOmxheWVyc0NvbnRlbnRzW2ldPy5hdHRyaWJ1dGVzPy5sZW5ndGg/PzB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYXllckNvbnRlbnRzT2JqZWN0O1xyXG4gICAgfVxyXG4gXHJcbiAgICBnZXRDbGlja2VkTGF5ZXJTdGF0dXMgPSAocmVzdWx0czphbnlbXSxzZWxlY3RlZExheWVyOnNlbGVjdGVkTGF5ZXJUeXBlW10pOmJvb2xlYW49PntcclxuICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgaWYgKHJlc3VsdHM/Lmxlbmd0aCA+IDAgJiYgc2VsZWN0ZWRMYXllcj8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2kgPCByZXN1bHRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGxheWVySWQgPSByZXN1bHRzW2ldPy5ncmFwaGljPy5sYXllcj8uaWQ7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IHNlbGVjdGVkTGF5ZXIuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PT0gbGF5ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZkxheWVyV2FzQWRkZWQgPSAobGF5ZXJJZDpzdHJpbmcsbWFwTGF5ZXJzSXRlbXM6YW55W10pPT57XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChtYXBMYXllcnNJdGVtcz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGluZGV4ID0gbWFwTGF5ZXJzSXRlbXMuZmluZEluZGV4KChpdGVtKT0+aXRlbT8uaWQgPT09IGxheWVySWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuXHJcblxyXG4gICAgb3BlblRhYmxlQXR0cmlidXRlID0gKCk9PntcclxuICAgICAgICBjb25zdCBhcmlhRXhwYW5kZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgaWYgKGFyaWFFeHBhbmRlZEVsZW1lbnQuYXJpYUV4cGFuZGVkID09PSBcImZhbHNlXCIpe1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgYXJpYUV4cGFuZGVkRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUF0dHJpYnV0ZVRhYmxlID0gKCk9PntcclxuICAgICAgICBjb25zdCBhcmlhRXhwYW5kZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgaWYgKGFyaWFFeHBhbmRlZEVsZW1lbnQuYXJpYUV4cGFuZGVkID09PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBhcmlhRXhwYW5kZWRFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE51bWJlck9mSXRlbXNJbkZpZWxkID0gKGZpZWxkOnN0cmluZyxzZWxlY3RlZEF0dHJpYnV0ZXM6YW55W10pPT57XHJcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXMgPSAwO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEF0dHJpYnV0ZXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVBcnIgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8IHNlbGVjdGVkQXR0cmlidXRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIHZhbHVlQXJyLnB1c2goc2VsZWN0ZWRBdHRyaWJ1dGVzW2ldW2ZpZWxkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtcyA9IHZhbHVlQXJyLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bWJlck9mSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGlnaGxpZ2h0ZWRJZHMgPSAoZmVhdHVyZXM6YW55W10pPT57XHJcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0SWRzID0gW107XHJcbiAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aClmZWF0dXJlcy5mb3JFYWNoKGVsPT5oaWdobGlnaHRJZHMucHVzaChlbC5hdHRyaWJ1dGVzLk9CSkVDVElEKSlcclxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0SWRzO1xyXG4gICAgfVxyXG5cclxuICAgIGxpa2VseVF1ZXJ5ID0gKGF0dHJpYnV0ZVF1ZXJ5LHF1ZXJ5VmFsdWUsdmFsdWUpPT57XHJcbiAgICAgICAgc3dpdGNoKHF1ZXJ5VmFsdWUpe1xyXG4gICAgICAgICAgICBjYXNlIFwiTElLRSVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTElLRSAnJSR7dmFsdWV9J2A7XHJcbiAgICAgICAgICAgIGNhc2UgXCIlTElLRSVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTElLRSAnJSR7dmFsdWV9JSdgO1xyXG4gICAgICAgICAgICBjYXNlIFwiJUxJS0VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTElLRSAnJSR7dmFsdWV9J2A7XHJcbiAgICAgICAgICAgIGNhc2UgXCJOT1QgTElLRVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2F0dHJpYnV0ZVF1ZXJ5fSBOT1QgTElLRSAnJSR7dmFsdWV9JSdgOyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBxdWVyeVNldENvbnN0cnVjdG9yID0gKHF1ZXJ5OmFueSxzZXRXaGVyZUNsYXVzZTphbnlbXSxBbmRPclNldDphbnksZmllbGQ6c3RyaW5nKT0+e1xyXG4gICAgICAgIGxldCBjdXJyZW50UXVlcnkgPSBxdWVyeS53aGVyZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNldFF1ZXJ5QXJyYXkubGVuZ3RoIDwgc2V0V2hlcmVDbGF1c2UubGVuZ3RoLTEsXCJjaGVja2luZ1wiKVxyXG4gICAgICAgIGlmICh0aGlzLnNldFF1ZXJ5QXJyYXkubGVuZ3RoIDwgc2V0V2hlcmVDbGF1c2UubGVuZ3RoLTEpe1xyXG4gICAgICAgICAgICBjdXJyZW50UXVlcnkgPSBxdWVyeS53aGVyZSArICBcIiBcIiArIEFuZE9yU2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFF1ZXJ5QXJyYXkucHVzaChjdXJyZW50UXVlcnkpO1xyXG4gICAgICAgIHRoaXMuc2V0T3V0RmllbGRzLnB1c2goYCR7ZmllbGR9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXRRdWVyeUFycmF5LHRoaXMuc2V0T3V0RmllbGRzLFwibWFrZSBzdXJlXCIpXHJcbiAgICAgICAgLy8gaWYodGhpcy5zZXRRdWVyeUFycmF5Lmxlbmd0aCA+PSBzZXRXaGVyZUNsYXVzZS5sZW5ndGgpe1xyXG4gICAgICAgIC8vICAgICByZXR1cm4ge3F1ZXJ5U2V0QXJyYXk6dGhpcy5zZXRRdWVyeUFycmF5LHF1ZXJ5U2V0T3V0ZmllbGRzOnRoaXMuc2V0T3V0RmllbGRzfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWJsZVNldENvdW50cyA9ICh0YWJsZVNldENvdW50czp7aWQ6c3RyaW5nLGRlbGV0ZWQ6Ym9vbGVhbn1bXSk9PntcclxuICAgIC8vICAgICBsZXQgY291bnRzID0gMFxyXG4gICAgLy8gICAgIGlmICh0YWJsZVNldENvdW50cy5sZW5ndGgpe1xyXG4gICAgLy8gICAgICAgY29uc3QgY29waWVkVGFibGVTZXRDb3VudHMgPSBbLi4udGFibGVTZXRDb3VudHNdO1xyXG4gICAgLy8gICAgICAgY29waWVkVGFibGVTZXRDb3VudHMuZmlsdGVyKChpdGVtKT0+IWl0ZW0uZGVsZXRlZCk7XHJcbiAgICAvLyAgICAgICBjb3VudHMgPSBjb3BpZWRUYWJsZVNldENvdW50cy5sZW5ndGhcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGNvdW50cztcclxuICAgIC8vICAgfVxyXG5cclxuICAgIGdldFF1ZXJ5U2V0VmFsdWUgPSAoKT0+KHtxdWVyeVNldEFycmF5OnRoaXMuc2V0UXVlcnlBcnJheSxxdWVyeVNldE91dGZpZWxkczp0aGlzLnNldE91dEZpZWxkc30pXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVscGVyKCk7IiwiXG5pbXBvcnQgeyBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuaW1wb3J0IHsgYXBwQWN0aW9ucyB9IGZyb20gXCJqaW11LWNvcmVcIjtcblxudHlwZSBzcGF0aWFsUmVsYXRpb25zaGlwVHlwZSA9IFwiaW50ZXJzZWN0c1wiIHwgXCJjb250YWluc1wiIHwgXCJjcm9zc2VzXCIgfCBcImRpc2pvaW50XCIgfCBcImVudmVsb3BlLWludGVyc2VjdHNcIiB8IFwiaW5kZXgtaW50ZXJzZWN0c1wiIHwgXCJvdmVybGFwc1wiIHwgXCJ0b3VjaGVzXCIgfCBcIndpdGhpblwiIHwgXCJyZWxhdGlvblwiXG5cbnR5cGUgbGF5ZXJPcGVuVHlwZSA9IHtcbiAgICBnZW9tZXRyeTphbnksXG4gICAgdHlwZVNlbGVjdGVkOnNwYXRpYWxSZWxhdGlvbnNoaXBUeXBlLFxuICAgIHdoZXJlPzpzdHJpbmcsXG4gICAgZ3JhcGhpY3NGb3VuZD86YW55LFxuICAgIHZhbHVlQnVmZmVyPzphbnlcbn1cblxudHlwZSBpbml0T2JqVHlwZSA9IHtcbiAgICByZXN1bHRzOmFueVtdLFxuICAgIGFsbENoZWNrZWRMYXllcnM/OmFueVtdLFxuICAgIGlzTGF5ZXJDaGVja2VkPzpib29sZWFuLFxuICAgIGNoZWNrZWRMYXllcnM/OnN0cmluZ1tdLFxuICAgIG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9LFxuICAgIGxheWVyT3Blbj86bGF5ZXJPcGVuVHlwZSxcbiAgICBjcmVhdGVUYWJsZT86dHJ1ZVxufVxuXG50eXBlIHNlbGVjdGVkTGF5ZXJUeXBlID0ge2lkOnN0cmluZyxhdHRyaWJ1dGVzOmFueVtdfVxuXG5jbGFzcyBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciB7XG5cbiAgICBzdGF0aWMgYWN0aXZlVmlldzpKaW11TWFwVmlldyA9IG51bGw7XG4gICAgc3RhdGljIHNlbGY6YW55ID0gbnVsbDtcblxuICAgIGFsbENoZWNrZWRMYXllcnM/OmFueVtdO1xuICAgIGNoZWNrZWRMYXllcnM/OnN0cmluZ1tdO1xuICAgIG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9O1xuICAgIGNyZWF0ZVRhYmxlOmJvb2xlYW47XG4gICAgbGF5ZXJPcGVuOmxheWVyT3BlblR5cGU7XG4gICAgaXNMYXllckNoZWNrZWQ6Ym9vbGVhblxuXG5cbiAgICBjb25zdHJ1Y3RvcihhY3RpdmVWaWV3OkppbXVNYXBWaWV3LHNlbGY6YW55KXtcbiAgICAgICAgQXR0cmlidXRlVGFibGVDb25uZWN0b3IuYWN0aXZlVmlldyA9IGFjdGl2ZVZpZXc7XG4gICAgICAgIEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGYgPSBzZWxmO1xuICAgIH1cblxuICAgIGluaXQob2JqOmluaXRPYmpUeXBlKXsgIFxuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBvYmoucmVzdWx0cztcbiAgICAgICAgY29uc3QgYWxsQ2hlY2tlZExheWVycyA9IG9iai5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICBsZXQgY3JlYXRlVGFibGUgPSB0cnVlO1xuICAgICAgICBsZXQgaXNMYXllckNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNoZWNrZWRMYXllcnMgPSBudWxsO1xuICAgICAgICBsZXQgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gbnVsbDtcbiAgICAgICAgbGV0IGxheWVyT3BlbiA9IG51bGw7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJjcmVhdGVUYWJsZVwiKSl7XG4gICAgICAgICAgICBjcmVhdGVUYWJsZSA9IG9iai5jcmVhdGVUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwiaXNMYXllckNoZWNrZWRcIikpe1xuICAgICAgICAgICAgaXNMYXllckNoZWNrZWQgPSBvYmouaXNMYXllckNoZWNrZWQgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImNoZWNrZWRMYXllcnNcIikpe1xuICAgICAgICAgICAgY2hlY2tlZExheWVycyA9IG9iai5jaGVja2VkTGF5ZXJzIFxuICAgICAgICB9XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJudW1iZXJPZkF0dHJpYnV0ZXNcIikpe1xuICAgICAgICAgICAgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gb2JqLm51bWJlck9mQXR0cmlidXRlcyBcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwibGF5ZXJPcGVuXCIpKXtcbiAgICAgICAgICAgIGxheWVyT3BlbiA9IG9iai5sYXllck9wZW4gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVUYWJsZSA9IGNyZWF0ZVRhYmxlO1xuICAgICAgICB0aGlzLmlzTGF5ZXJDaGVja2VkID0gaXNMYXllckNoZWNrZWQ7XG4gICAgICAgIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVycyhhbGxDaGVja2VkTGF5ZXJzLHJlc3VsdHMpO1xuICAgICAgICB0aGlzLnNldENoZWNrZWRMYXllcnMoYWxsQ2hlY2tlZExheWVycyxjaGVja2VkTGF5ZXJzKTtcbiAgICAgICAgLy8gdGhpcy5zZXRBbGxDaGVja2VkTGF5ZXJzKGFsbENoZWNrZWRMYXllcnMpO1xuICAgICAgICB0aGlzLnNldE51bWJlck9mQXR0cmlidXRlcyhyZXN1bHRzLG51bWJlck9mQXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMuc2V0TGF5ZXJPcGVuKGxheWVyT3Blbik7XG4gICAgfVxuXG4gICAgaXNBcnJheSA9ICh2YWwpPT5BcnJheS5pc0FycmF5KHZhbCk7XG5cbiAgICBpc09iamVjdCA9ICh2YWwpPT5PYmplY3Qua2V5cyh2YWwpLmxlbmd0aCA+IDAgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcblxuICAgIGxvb3BMYXllckdldElkcyA9IChsYXllcjphbnlbXSk9PntcbiAgICAgICAgbGV0IGlkc0FycmF5ID0gW107XG4gICAgICAgIGlmIChsYXllci5sZW5ndGgpe1xuICAgICAgICAgICAgaWRzQXJyYXkgPSBsYXllci5yZWR1Y2UoKG5ld0FycmF5LGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQpe1xuICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgICAgIH0sW10pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkc0FycmF5O1xuICAgIH1cblxuXG5cbiAgICBzZXRDaGVja2VkTGF5ZXJzID0gKGN1cnJlbnRBbGxDaGVjaGVkTGF5ZXJzOmFueSxjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXSwpPT57XG4gICAgICAgIGxldCBhbGxDaGVja2VkTGF5ZXJzID0gY3VycmVudEFsbENoZWNoZWRMYXllcnM7XG4gICAgICAgIGlmICghYWxsQ2hlY2tlZExheWVycyl7XG4gICAgICAgICAgICBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja2VkTGF5ZXJzKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZExheWVycyA9IGNoZWNrZWRMYXllcnM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoZWNrZWRMYXllcnNBcnIgPSBbXTtcbiAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnNBcnIucHVzaChhbGxDaGVja2VkTGF5ZXJzLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzQXJyO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTGF5ZXJzQXJyLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnNBcnIgPSBbLi4uY2hlY2tlZExheWVyc0FyciwuLi50aGlzLmxvb3BMYXllckdldElkcyhhbGxDaGVja2VkTGF5ZXJzKV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZExheWVycyA9IGNoZWNrZWRMYXllcnNBcnI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZExheWVycyA9IHRoaXMubG9vcExheWVyR2V0SWRzKGFsbENoZWNrZWRMYXllcnMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QWxsQ2hlY2tlZExheWVyc0Zyb21SZXN1bHRzID0gKHJlc3VsdHM6YW55W10pPT57XG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtc1swXT8ubGF5ZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgICAgIH0sW10pXG4gICAgICAgICAgICB0aGlzLmFsbENoZWNrZWRMYXllcnMgPSBhbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFwiUGFzcyByZXN1bHRzIGFmdGVyIHF1ZXJ5XCJcblxuICAgIH1cblxuICAgIHNldEFsbENoZWNrZWRMYXllcnMgPSAoYWxsQ2hlY2tlZExheWVyczphbnkscmVzdWx0czphbnlbXSk9PntcbiAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZExheWVycyA9IFthbGxDaGVja2VkTGF5ZXJzXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBcnJheShhbGxDaGVja2VkTGF5ZXJzKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxDaGVja2VkTGF5ZXJzID0gYWxsQ2hlY2tlZExheWVyc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVyc0Zyb21SZXN1bHRzKHJlc3VsdHMpO1xuIFxuICAgIH1cblxuXG4gICAgZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyID0ocmVzdWx0czphbnkpOnNlbGVjdGVkTGF5ZXJUeXBlW109PntcbiAgICAgICAgY29uc3QgY2hlY2tlZExheWVycyA9IHRoaXMuY2hlY2tlZExheWVycz8/W107XG4gICAgICAgIGxldCBzZWxlY3RlZExheWVyc0FycmF5ID0gW107XG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJDb250ZW50cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudExheWVySWQgPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZExheWVycy5pbmRleE9mKGN1cnJlbnRMYXllcklkKSAhPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiaWRcIl0gPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiYXR0cmlidXRlc1wiXSA9IHRoaXMuZ2V0QXR0cmlidXRlcyhpdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKHNlbGVjdGVkTGF5ZXJDb250ZW50cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgICB9LFtdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZExheWVyc0FycmF5O1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZXMgPSAoaXRlbXM6YW55W10pOmFueVtdPT57XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNBcnJheSA9IGl0ZW1zLnJlZHVjZSgobmV3QXJyYXksaXRlbSk9PntcbiAgICAgICAgICAgIGlmIChpdGVtPy5hdHRyaWJ1dGVzKXtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5nZW9tZXRyeSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gaXRlbS5nZW9tZXRyeTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBnZW9tZXRyeT8ubGF0aXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IGdlb21ldHJ5Py5sb25naXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9uZ2l0dWRlICYmIGxhdGl0dWRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goey4uLml0ZW0uYXR0cmlidXRlcyxsb2NhdGlvbjpbbGF0aXR1ZGUsbG9uZ2l0dWRlXX0pO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICB9LFtdKVxuICAgICAgICByZXR1cm4gYXR0cmlidXRlc0FycmF5O1xuICAgIH1cblxuICAgIHNldE51bWJlck9mQXR0cmlidXRlcyA9IChyZXN1bHRzOmFueVtdLG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9LCk9PntcbiAgICAgICAgaWYgKG51bWJlck9mQXR0cmlidXRlcyl7XG4gICAgICAgICAgICB0aGlzLm51bWJlck9mQXR0cmlidXRlcyA9IG51bWJlck9mQXR0cmlidXRlcztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXllcnNDb250ZW50cyA9IHRoaXMuZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyKHJlc3VsdHMpO1xuICAgICAgICBsZXQgbGF5ZXJDb250ZW50c09iamVjdCA9IHt9O1xuICAgICAgICBpZiAobGF5ZXJzQ29udGVudHM/Lmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aSA8IGxheWVyc0NvbnRlbnRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGxheWVyQ29udGVudHNPYmplY3QgPSB7Li4ubGF5ZXJDb250ZW50c09iamVjdCxbbGF5ZXJzQ29udGVudHNbaV0/LmlkXTpsYXllcnNDb250ZW50c1tpXT8uYXR0cmlidXRlcz8ubGVuZ3RoPz8wfVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXMgPSBsYXllckNvbnRlbnRzT2JqZWN0XG4gICAgfVxuXG4gICAgc2V0TGF5ZXJPcGVuID0gKGxheWVyT3Blbj86bGF5ZXJPcGVuVHlwZSk9PntcbiAgICAgICAgaWYgKGxheWVyT3Blbil7XG4gICAgICAgICAgICB0aGlzLmxheWVyT3BlbiA9IGxheWVyT3BlbjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyT3BlbiA9IHtcbiAgICAgICAgICAgIGdlb21ldHJ5Om51bGwsXG4gICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6XCJjb250YWluc1wiLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlVmlldyA9ICgpPT5BdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5hY3RpdmVWaWV3O1xuICAgIFxuICAgIGdldEFsbENoZWNrZWRMYXllcnMgPSAoKT0+IHRoaXMuYWxsQ2hlY2tlZExheWVycztcblxuICAgIGRpc3BhdGNoaW5nQWxsID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wc1xuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSApe1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBjb25zdCBsYXllck9wZW4gPSB0aGlzLmxheWVyT3BlbjtcbiAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzICYmIGxheWVyT3BlbiAmJiBhbGxDaGVja2VkTGF5ZXJzICYmIGFjdGl2ZVZpZXcpe1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xheWVyQ2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNoZWNrZWRMYXllcnNcIix0aGlzLmNoZWNrZWRMYXllcnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG51bWJlck9mQXR0cmlidXRlcykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJudW1iZXJPZkF0dHJpYnV0ZVwiLG51bWJlck9mQXR0cmlidXRlcykpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJsYXllck9wZW5cIixsYXllck9wZW4pKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZ2V0QWxsTGF5ZXJzXCIsdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzKSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImdldEFjdGl2ZVZpZXdcIix0aGlzLmdldEFjdGl2ZVZpZXcpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBcIm5vSXRlbVNlbGVjdGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGF5ZXJPcGVuKXRocm93IFwiVGhlcmUgaXMgbm8gbGF5ZXIgb3BlblwiXG4gICAgICAgICAgICBpZiAoYWxsQ2hlY2tlZExheWVycyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFsbCBjaGVja2VkIGxheWVycyBtYWtlIHN1cmUgdG8gcGFzcyBsYXllclwiXG4gICAgICAgICAgICBpZiAoYWN0aXZlVmlldyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFjdGl2ZVZpZXcscGFzcyBqaW11TWFwVmlldyB3aGVuIG1hcCBsb2FkXCJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIlBhc3MgcGFyZW50IHdpZGdldCB0byB0aGUgQXR0cmlidXRlQ29ubmVjdG9yXCJcblxuICAgIH1cblxuICAgIGNsb3NlVGFibGUgPSAoKT0+e1xuICAgICAgICBjb25zdCBzZWxmID0gQXR0cmlidXRlVGFibGVDb25uZWN0b3Iuc2VsZjtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImRpc3BhdGNoXCIpICl7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjaGVja2VkTGF5ZXJzXCIsW10pKTtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcHMgPSAoKT0+e1xuICAgICAgICBjb25zdCBzZWxmID0gQXR0cmlidXRlVGFibGVDb25uZWN0b3Iuc2VsZjtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzO1xuICAgICAgICBjb25zdCBudW1iZXJPZkF0dHJpYnV0ZXMgPSB0aGlzLm51bWJlck9mQXR0cmlidXRlcztcbiAgICAgICAgY29uc3QgbGF5ZXJPcGVuID0gdGhpcy5sYXllck9wZW47XG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKTsgXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImRpc3BhdGNoXCIpKXtcbiAgICAgICAgICAgIGlmKCFsYXllck9wZW4pdGhyb3cgXCJUaGVyZSBpcyBubyBsYXllciBvcGVuXCJcbiAgICAgICAgICAgIGlmICghYWxsQ2hlY2tlZExheWVycyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFsbCBjaGVja2VkIGxheWVycyBtYWtlIHN1cmUgdG8gcGFzcyBsYXllclwiXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZVZpZXcpdGhyb3cgXCJUaGVyZSBpcyBubyBhY3RpdmVWaWV3LHBhc3MgamltdU1hcFZpZXcgd2hlbiBtYXAgbG9hZFwiXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKG51bWJlck9mQXR0cmlidXRlcykpe1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFwiUGFzcyBwYXJlbnQgd2lkZ2V0IHRvIHRoZSBBdHRyaWJ1dGVDb25uZWN0b3JcIlxuICAgIH1cblxuICAgIGRpc3BhdGNoQ3JlYXRlVGFibGUgPSAoKT0+e1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcbiAgICAgICAgaWYgKHByb3BzKXtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hDaGVjaGVkTGF5ZXJzID0gKGNoZWNrZWRMYXllcnM6c3RyaW5nW10pPT57XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xuICAgICAgICBpZiAocHJvcHMpe1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY2hlY2tlZExheWVyc1wiLGNoZWNrZWRMYXllcnMpKTtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hGaWx0ZXJWYWx1ZSA9IChmaWx0ZXJWYWx1ZTpudW1iZXIpPT57XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xuICAgICAgICBpZiAocHJvcHMpe1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZmlsdGVyVmFsdWVcIiwgZmlsdGVyVmFsdWUpKTtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvcjsiLCJpbXBvcnQge0J1dHRvbixPcHRpb24sU2VsZWN0LH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZVwiO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSBcIi4uL2xpYi9SZXNpemVEZXRlY3RvclwiO1xuaW1wb3J0IHtxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcsfSBmcm9tIFwiLi4vdXRpbHMvcXVlcnlUYWJsZVZhbHVlXCI7XG5pbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuaW1wb3J0IENvbW1vblNlY29uZENvbnN0cnVjdG9yIGZyb20gXCIuL2NvbW1vbi9pbnB1dHMvY29tbW9uU2Vjb25kQ29uc3RydWN0b3JcIjtcblxuZnVuY3Rpb24gQWRkU2V0VGFibGUocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGxpc3QsXG4gICAgaGFuZGxlVGhpcmRRdWVyeSxcbiAgICB0ZXh0SW5wdXRIYW5kbGVyLFxuICAgIG11bHRpU2VsZWN0SGFuZGxlcixcbiAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxuICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcixcbiAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyLFxuICAgIGRyb3Bkb3duVmFsdWVRdWVyeSxcbiAgICBoYW5kbGVDaGVja0JveCxcbiAgICBpc0NoZWNrZWQsXG4gICAgY291bnRlcklzQ2hlY2tlZCxcbiAgICBkcm9wRG93blRvZ2dsZXIsXG4gICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLFxuICAgIGNoZWNrZWRUb1F1ZXJ5LFxuICAgIGRlbGV0ZVRhYmxlLFxuICAgIGdldFF1ZXJ5QXR0cmlidXRlLFxuICAgIC8vIGZvciBBZGQgc2V0IHRhYmxlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRhYmxlc1NldCxcbiAgICB0YWJsZXNTZXRJZCxcbiAgICB3aGVyZUNsYXVzZXNTZXQsXG4gICAgLy8gRW5kIGZvciBBZGQgc2V0IHRhYmxlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRhYmxlcyxcbiAgICBnZXRRdWVyeSxcbiAgICB1bml2b2NvU2VsZWN0SGFuZGxlcixcbiAgICBkcm9wRG93bixcbiAgICBpc09wZW5Ecm9wRCxcbiAgICBvbkNoYW5nZUNoZWNrQm94LFxuICAgIG9wZW5Ecm9wLFxuICAgIGNsb3NlRHJvcCxcbiAgICBvcGVuZWQsXG4gICAgYXV0T3BlbixcbiAgICBtb3VzZWxlYXZlLFxuICAgIG9ubW91c2VMZWF2ZSxcbiAgICBkcm9wZG93bnNTZXQsXG4gICAgc2hvd0RlbGV0ZSxcbiAgICBibG9ja0lkLFxuICAgIGN1cnJlbnRUYWJsZSxcbiAgICBzaG93QmxvY2tEZWxldGUsXG4gICAgcXVlcnlDaGFuZ2VkLFxuICAgIHBhcmVudFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY3VycmVudHdoZXJlQ2xhdXNlc1NldCA9IHdoZXJlQ2xhdXNlc1NldC5maW5kKFxuICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSB0YWJsZXNTZXRJZFxuICApO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBzbWFsbGVyV2lkdGhPdXRlckNvbnRhaW5lcjp7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgIGdhcDonMyUnLFxuICAgICAgbWluV2lkdGg6JzI4MHB4JyxcbiAgICAgIG1hcmdpbkJvdHRvbToyMFxuICAgIH0sXG4gICAgc21hbGxlcldpZHRoSW5uZXJDb250YWluZXI6e1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgZ2FwOiBcIjVweFwiLFxuICAgICAgd2lkdGg6XCI4MCVcIixcbiAgICB9LFxuICAgIHNtYWxsZXJXaWR0aFF1ZXJ5Q29udGFpbmVyOntcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGxhcmdlcldpZHRoT3V0ZXJDb250YWluZXI6e1xuICAgICAgd2lkdGg6XCIxMDAlXCJcbiAgICB9LFxuICAgIGxhcmdlcldpZHRoSW5uZXJDb250YWluZXI6e1xuICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50Olwic3RhcnRcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgIGdhcDpcIjMlXCIsXG4gICAgfVxuXG4gIH1cblxuICBpZiAoY3VycmVudFRhYmxlLmlkID09PSBwYXJzZUludCh0YWJsZXNTZXRJZC5zcGxpdChcIi1cIilbMF0pICYmIWN1cnJlbnRUYWJsZS5kZWxldGVkKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPFJlYWN0UmVzaXplRGV0ZWN0b3IgaGFuZGxlV2lkdGggaGFuZGxlSGVpZ2h0PlxuICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5cbiAgICAgICAgICAgICAge2xpc3QuZmllbGRzID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt3aWR0aCA8PSA2MjUgPyBzdHlsZXMuc21hbGxlcldpZHRoT3V0ZXJDb250YWluZXI6c3R5bGVzLmxhcmdlcldpZHRoT3V0ZXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3dpZHRoIDw9IDYyNSA/IHN0eWxlcy5zbWFsbGVyV2lkdGhJbm5lckNvbnRhaW5lcjpzdHlsZXMubGFyZ2VyV2lkdGhJbm5lckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt3aWR0aCA8PSA2MjUgPyBcIiBcIjpcImNvbC1tZC00XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5nZXRRdWVyeUF0dHJpYnV0ZShlLFwic2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgY2FtcG9cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3QuZmllbGRzLm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcIm9pZFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcInNtYWxsLWludGVnZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJpbnRlZ2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwiZG91YmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtlbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPXtlbC50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmFsaWFzfSAoe2VsLnR5cGV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3dpZHRoIDw9IDYyNSA/IFwiIFwiOlwiY29sLW1kLTRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3dpZHRoIDw9IDYyNSA/IHN0eWxlcy5zbWFsbGVyV2lkdGhRdWVyeUNvbnRhaW5lcjp7fX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXsoZSkgPT4gZ2V0UXVlcnkoZSwgXCJzaW5nbGVcIil9IHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50d2hlcmVDbGF1c2VzU2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnR3aGVyZUNsYXVzZXNTZXQuYXR0cmlidXRlUXVlcnlUeXBlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLm1hcCgobywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcXVlcnlDb25zdHJ1Y3Rvck51bWJlci5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uU2Vjb25kQ29uc3RydWN0b3IgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyID0ge3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyID0ge2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIgPSB7dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlciA9IHt0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZCA9IHtjb3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkID0ge2Z1bmN0aW9uQ291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlc0lkID0ge3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzID0ge3doZXJlQ2xhdXNlc1NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duVG9nZ2xlciA9IHtkcm9wRG93blRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlciA9IHt1bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duID0ge2Ryb3BEb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuRHJvcEQgPSB7aXNPcGVuRHJvcER9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUNoZWNrQm94ID0ge29uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcCA9IHtvcGVuRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlRHJvcCA9IHtjbG9zZURyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dE9wZW4gPSB7YXV0T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubW91c2VMZWF2ZSA9IHtvbm1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bnMgPSB7ZHJvcGRvd25zU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7d2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeUNoYW5nZWQgPSB7cXVlcnlDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0ge3BhcmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZSA9IFwic2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICh3aWR0aCA+PSA2MjYgJiYgc2hvd0RlbGV0ZSkgJiYgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfSBpY29uPjxDbG9zZU91dGxpbmVkIC8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgKHdpZHRoIDw9IDYyNSAmJiBzaG93RGVsZXRlKSAmJiA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCIgb25DbGljaz17ZGVsZXRlVGFibGV9IGljb24+PENsb3NlT3V0bGluZWQgLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAoXCIgXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdFJlc2l6ZURldGVjdG9yPlxuICAgIClcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkU2V0VGFibGU7XG4iLCJpbXBvcnQge0J1dHRvbixPcHRpb24sU2VsZWN0fSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2Nsb3NlXCI7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tIFwiLi4vbGliL1Jlc2l6ZURldGVjdG9yXCI7XG5pbXBvcnQge3F1ZXJ5Q29uc3RydWN0b3JOdW1iZXIscXVlcnlDb25zdHJ1Y3RvclN0cmluZ30gZnJvbSBcIi4uL3V0aWxzL3F1ZXJ5VGFibGVWYWx1ZVwiO1xuaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBDb21tb25TZWNvbmRDb25zdHJ1Y3RvciBmcm9tIFwiLi9jb21tb24vaW5wdXRzL2NvbW1vblNlY29uZENvbnN0cnVjdG9yXCI7XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBsaXN0LFxuICAgIGhhbmRsZVRoaXJkUXVlcnksXG4gICAgdGV4dElucHV0SGFuZGxlcixcbiAgICBtdWx0aVNlbGVjdEhhbmRsZXIsXG4gICAgZHJvcGRvd25JdGVtSGFuZGxlcixcbiAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIsXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcbiAgICBkcm9wZG93blZhbHVlUXVlcnksXG4gICAgaGFuZGxlQ2hlY2tCb3gsXG4gICAgaXNDaGVja2VkLFxuICAgIGNvdW50ZXJJc0NoZWNrZWQsXG4gICAgZHJvcERvd25Ub2dnbGVyLFxuICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCxcbiAgICBjaGVja2VkVG9RdWVyeSxcbiAgICBkZWxldGVUYWJsZSxcbiAgICB0YWJsZXNJZCxcbiAgICBnZXRRdWVyeUF0dHJpYnV0ZSxcbiAgICB3aGVyZUNsYXVzZXMsXG4gICAgdGFibGVzLFxuICAgIGdldFF1ZXJ5LFxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgIGRyb3BEb3duLFxuICAgIGlzT3BlbkRyb3BELFxuICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXG4gICAgb3BlbkRyb3AsXG4gICAgY2xvc2VEcm9wLFxuICAgIG9wZW5lZCxcbiAgICBhdXRPcGVuLFxuICAgIG1vdXNlbGVhdmUsXG4gICAgb25tb3VzZUxlYXZlLFxuICAgIGRyb3Bkb3ducyxcbiAgICBjdXJyZW50VGFibGUsXG4gICAgcXVlcnlDaGFuZ2VkLFxuICAgIHBhcmVudFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY3VycmVudHdoZXJlQ2xhdXNlcyA9IHdoZXJlQ2xhdXNlcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBgJHt0YWJsZXNJZH1gKTtcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgc21hbGxlcldpZHRoT3V0ZXJDb250YWluZXI6e1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICBnYXA6JzMlJyxcbiAgICAgIG1pbldpZHRoOicyODBweCcsXG4gICAgICBtYXJnaW5Cb3R0b206MjBcbiAgICB9LFxuICAgIHNtYWxsZXJXaWR0aElubmVyQ29udGFpbmVyOntcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGdhcDogXCI1cHhcIixcbiAgICAgIHdpZHRoOlwiODAlXCIsXG4gICAgfSxcbiAgICBzbWFsbGVyV2lkdGhRdWVyeUNvbnRhaW5lcjp7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfSxcbiAgICBsYXJnZXJXaWR0aE91dGVyQ29udGFpbmVyOntcbiAgICAgIHdpZHRoOlwiMTAwJVwiXG4gICAgfSxcbiAgICBsYXJnZXJXaWR0aElubmVyQ29udGFpbmVyOntcbiAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDpcInN0YXJ0XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICBnYXA6XCIzJVwiLFxuICAgIH1cbiAgfVxuXG4gIGlmIChjdXJyZW50VGFibGUuaWQgPT09IHRhYmxlc0lkICYmICFjdXJyZW50VGFibGUuZGVsZXRlZCkge1xuICAgIHJldHVybihcbiAgICAgIDxSZWFjdFJlc2l6ZURldGVjdG9yIGhhbmRsZVdpZHRoIGhhbmRsZUhlaWdodD5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xXCI+XG4gICAgICAgICAgICAgIHtsaXN0LmZpZWxkcyA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17d2lkdGggPD0gNjI1ID8gc3R5bGVzLnNtYWxsZXJXaWR0aE91dGVyQ29udGFpbmVyOnN0eWxlcy5sYXJnZXJXaWR0aE91dGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt3aWR0aCA8PSA2MjUgPyBzdHlsZXMuc21hbGxlcldpZHRoSW5uZXJDb250YWluZXI6c3R5bGVzLmxhcmdlcldpZHRoSW5uZXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17d2lkdGggPD0gNjI1ID8gXCIgXCI6XCJjb2wtbWQtNFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+Z2V0UXVlcnlBdHRyaWJ1dGUoZSxcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0LmZpZWxkcy5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJvaWRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJzbWFsbC1pbnRlZ2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwiaW50ZWdlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImRvdWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZT17ZWwudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5hbGlhc30gKHtlbC50eXBlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt3aWR0aCA8PSA2MjUgPyBcIiBcIjpcImNvbC1tZC00XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt3aWR0aCA8PSA2MjUgPyBzdHlsZXMuc21hbGxlcldpZHRoUXVlcnlDb250YWluZXI6e319XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGdldFF1ZXJ5KGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50d2hlcmVDbGF1c2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnR3aGVyZUNsYXVzZXMuYXR0cmlidXRlUXVlcnlUeXBlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLm1hcCgobywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcXVlcnlDb25zdHJ1Y3Rvck51bWJlci5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uU2Vjb25kQ29uc3RydWN0b3IgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUaGlyZFF1ZXJ5PXtoYW5kbGVUaGlyZFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpU2VsZWN0SGFuZGxlcj17bXVsdGlTZWxlY3RIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtSGFuZGxlcj17ZHJvcGRvd25JdGVtSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcj17dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeT17ZHJvcGRvd25WYWx1ZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tCb3g9e2hhbmRsZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVySXNDaGVja2VkPXtjb3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkPXtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkVG9RdWVyeT17Y2hlY2tlZFRvUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRRdWVyeUF0dHJpYnV0ZT17Z2V0UXVlcnlBdHRyaWJ1dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM9e3doZXJlQ2xhdXNlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlc0lkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duVG9nZ2xlcj17ZHJvcERvd25Ub2dnbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXI9e3VuaXZvY29TZWxlY3RIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd249e2Ryb3BEb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuRHJvcEQ9e2lzT3BlbkRyb3BEfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveD17b25DaGFuZ2VDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wPXtvcGVuRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlRHJvcD17Y2xvc2VEcm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRPcGVuPXthdXRPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZT17bW91c2VsZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17b25tb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zPXtkcm9wZG93bnN9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeUNoYW5nZWQgPSB7cXVlcnlDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0ge3BhcmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA+PSA2MjYgJiYgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCIgb25DbGljaz17ZGVsZXRlVGFibGV9IGljb24+PENsb3NlT3V0bGluZWQgLz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGggPD0gNjI1ICYmIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtkZWxldGVUYWJsZX0gaWNvbj48Q2xvc2VPdXRsaW5lZCAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApOlxuICAgICAgICAgICAgICAgIChcIiBcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0UmVzaXplRGV0ZWN0b3I+XG4gICAgKVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbiIsIlxuXG5pbXBvcnQge1xuICAgIERyb3Bkb3duLFxuICAgIERyb3Bkb3duQnV0dG9uLFxuICAgIERyb3Bkb3duSXRlbSxcbiAgICBEcm9wZG93bk1lbnUsXG4gICAgSW5wdXQsXG4gICAgVGV4dElucHV0LFxuICB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBTZXR0aW5nT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nXCI7XG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2NzcydcbmltcG9ydCBQYWdpbmF0aW9uQ29tcG9lbmVudCBmcm9tIFwiLi4vLi4vcGFnaW5hdGlvblwiO1xuaW1wb3J0IFNlbGVjdFVuaXZvY28gZnJvbSBcIi4vc2VsZWN0XCI7XG5cbmNvbnN0IENvbW1vblNlY29uZENvbnN0cnVjdG9yID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbY3VycmVudFRhYmxlLHNldEN1cnJlbnRUYWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW29uQ2hhbmdpbmdQYWdlLHNldE9uQ2hhbmdpbmdQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBudW1iZXJPZkl0ZW1zID0gMTA7XG4gIFxuICAgIGNvbnN0IHtcbiAgICAgIHRleHRJbnB1dEhhbmRsZXIsXG4gICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxuICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyLFxuICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcbiAgICAgIGNvdW50ZXJJc0NoZWNrZWQsXG4gICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQsXG4gICAgICB0YWJsZXNJZCxcbiAgICAgIHdoZXJlQ2xhdXNlcyxcbiAgICAgIGRyb3BEb3duVG9nZ2xlcixcbiAgICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgICAgZHJvcERvd24sXG4gICAgICBpc09wZW5Ecm9wRCxcbiAgICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXG4gICAgICBvcGVuRHJvcCxcbiAgICAgIGNsb3NlRHJvcCxcbiAgICAgIG9wZW5lZDogZCxcbiAgICAgIGF1dE9wZW4sXG4gICAgICBvbm1vdXNlTGVhdmUsXG4gICAgICBkcm9wZG93bnMsXG4gICAgICB3aWR0aCxcbiAgICAgIHF1ZXJ5Q2hhbmdlZCxcbiAgICAgIHBhcmVudCxcbiAgICAgIHF1ZXJ5VHlwZVxuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCBub3JtYWxpemVkVGhpcmRRdWVyeSA9IFtdO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBcIj1cIjtcbiAgICBsZXQgZHJvcGRvd25WYWx1ZVF1ZXJ5ID0gXCJ2YWxvcmVcIjtcbiAgICBsZXQgb3BlbmVkID0gZmFsc2U7XG4gICAgbGV0IGNoZWNrZWQgPSAwO1xuICAgIGxldCBhdSA9IHRydWU7XG4gICAgbGV0IGRlZmF1bHRUZXh0VmFsdWUgPSBcIiBcIjtcbiAgICBjb25zdCBjdXJyZW50V2hlcmVDbGF1c2UgPSB3aGVyZUNsYXVzZXMuZmluZChcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBgJHt0YWJsZXNJZH1gXG4gICAgKTtcbiAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5pZkluT3JOb3RJblF1ZXJ5VmFsdWUpIHtcbiAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZS5pZkluT3JOb3RJblF1ZXJ5VmFsdWUubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICBub3JtYWxpemVkVGhpcmRRdWVyeS5wdXNoKHtcbiAgICAgICAgICBpZDogdGFibGVzSWQudG9TdHJpbmcoKSxcbiAgICAgICAgICBsYWJlbDogZWwubGFiZWwudG9TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZTogZWwudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICBsaXN0ZWw6IGN1cnJlbnRXaGVyZUNsYXVzZS5jaGVja2VkTGlzdD8/Y3VycmVudFdoZXJlQ2xhdXNlLmNoZWNrZWRMaXN0U2V0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5xdWVyeVZhbHVlKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSBjdXJyZW50V2hlcmVDbGF1c2UucXVlcnlWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UuZHJvcGRvd25WYWx1ZVF1ZXJ5KSB7XG4gICAgICBkcm9wZG93blZhbHVlUXVlcnkgPSBjdXJyZW50V2hlcmVDbGF1c2UuZHJvcGRvd25WYWx1ZVF1ZXJ5O1xuICAgIH1cbiAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5pc09wZW4pIHtcbiAgICAgIC8vIG9wZW5lZCA9IHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uaXNPcGVuO1xuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gY3VycmVudFdoZXJlQ2xhdXNlPy5jaGVja2VkTGlzdDtcbiAgICBjb25zdCBjaGVja2VkTGlzdFNldCA9IGN1cnJlbnRXaGVyZUNsYXVzZT8uY2hlY2tlZExpc3RTZXQ7XG4gICAgaWYgKGNoZWNrZWRMaXN0Py5sZW5ndGgpe1xuICAgICAgICBjaGVja2VkID0gY2hlY2tlZExpc3QubGVuZ3RoXG4gICAgfWVsc2UgaWYgKGNoZWNrZWRMaXN0U2V0Py5sZW5ndGgpe1xuICAgICAgICBjaGVja2VkID0gY2hlY2tlZExpc3RTZXQubGVuZ3RoXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5ID0gWy4uLm5vcm1hbGl6ZWRUaGlyZFF1ZXJ5XTtcbiAgXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LmN1cnJlbnROdW1iZXJPZlBhZ2UgPT09IDAgJiYgXG4gICAgICAgIGNvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lmxlbmd0aFxuICAgICAgKXtcbiAgICAgICAgY2FsY3VsYXRlVG90YWxOdW1iZXJPZlBhZ2UoKTtcbiAgICAgICAgb25JbmNyZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9LFtjb3BpZWRub3JtYWxpemVkVGhpcmRRdWVyeV0pO1xuICBcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcbiAgICAgIGlmIChxdWVyeUNoYW5nZWRbdGFibGVzSWRdICYmIHBhcmVudCl7XG4gICAgICAgIHNldEN1cnJlbnRUYWJsZSh7XG4gICAgICAgICAgLi4uY3VycmVudFRhYmxlLFxuICAgICAgICAgIFt0YWJsZXNJZF06e1xuICAgICAgICAgICAgXCJzdGFydEluZGV4XCI6MCxcbiAgICAgICAgICAgIFwiZW5kSW5kZXhcIjowLFxuICAgICAgICAgICAgXCJjdXJyZW50TnVtYmVyT2ZQYWdlXCI6MCxcbiAgICAgICAgICAgIFwidG90YWxOdW1iZXJPZlBhZ2VcIjowXG4gICAgICAgIH19KVxuICAgICAgICBwYXJlbnQ/LnNldFN0YXRlKHtxdWVyeUNoYW5nZWQ6ey4uLnF1ZXJ5Q2hhbmdlZCxbdGFibGVzSWRdOmZhbHNlfX0pXG4gICAgICB9XG4gICAgfSxbcXVlcnlDaGFuZ2VkXSlcbiAgXG4gICAgY29uc3QgY2FsY3VsYXRlVG90YWxOdW1iZXJPZlBhZ2UgPSAoKT0+e1xuICAgICAgaWYgKGNvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lmxlbmd0aCl7XG4gICAgICAgIGNvbnN0IG5ld1RvdGFsTnVtYmVyT2ZQYWdlID0gTWF0aC5jZWlsKGNvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lmxlbmd0aC9udW1iZXJPZkl0ZW1zKTtcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRUYWJsZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF07XG4gICAgICAgIGlmIChuZXdDdXJyZW50VGFibGUpe1xuICAgICAgICAgIG5ld0N1cnJlbnRUYWJsZSA9IHsuLi5uZXdDdXJyZW50VGFibGUsXCJ0b3RhbE51bWJlck9mUGFnZVwiOm5ld1RvdGFsTnVtYmVyT2ZQYWdlfTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbmV3Q3VycmVudFRhYmxlID0ge1widG90YWxOdW1iZXJPZlBhZ2VcIjpuZXdUb3RhbE51bWJlck9mUGFnZX1cbiAgICAgICAgfVxuICAgICAgICBzZXRDdXJyZW50VGFibGUoey4uLmN1cnJlbnRUYWJsZSxbdGFibGVzSWRdOm5ld0N1cnJlbnRUYWJsZX0pXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBjb25zdCBvbkluY3JlbWVudCA9ICgpPT57XG4gICAgICBjb25zdCBjdXJyZW50TnVtYmVyT2ZQYWdlID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXT8uY3VycmVudE51bWJlck9mUGFnZSA/PyAwO1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50TnVtYmVyT2ZQYWdlIDwgY3VycmVudFRhYmxlW3RhYmxlc0lkXT8udG90YWxOdW1iZXJPZlBhZ2VcbiAgICAgICl7XG4gICAgICAgIGNvbnN0IGZpcnN0SW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdPy5lbmRJbmRleD8/MDtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gZmlyc3RJbmRleCArIG51bWJlck9mSXRlbXM7XG4gICAgICAgIGNvbnN0IG5ld2N1cnJlbnROdW1iZXJPZlBhZ2UgPSBjdXJyZW50TnVtYmVyT2ZQYWdlICsgMTtcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRUYWJsZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF07XG4gICAgICAgIGlmIChuZXdDdXJyZW50VGFibGUpe1xuICAgICAgICAgIG5ld0N1cnJlbnRUYWJsZSA9IHtcbiAgICAgICAgICAgIC4uLm5ld0N1cnJlbnRUYWJsZSwgXG4gICAgICAgICAgICBcInN0YXJ0SW5kZXhcIjpmaXJzdEluZGV4LFxuICAgICAgICAgICAgXCJlbmRJbmRleFwiOmxhc3RJbmRleCxcbiAgICAgICAgICAgIFwiY3VycmVudE51bWJlck9mUGFnZVwiOm5ld2N1cnJlbnROdW1iZXJPZlBhZ2VcbiAgICAgICAgICB9O1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7XCJzdGFydEluZGV4XCI6Zmlyc3RJbmRleCxcImVuZEluZGV4XCI6bGFzdEluZGV4LFwiY3VycmVudE51bWJlck9mUGFnZVwiOm5ld2N1cnJlbnROdW1iZXJPZlBhZ2V9XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q3VycmVudFRhYmxlKHsuLi5jdXJyZW50VGFibGUsW3RhYmxlc0lkXTpuZXdDdXJyZW50VGFibGV9KVxuICAgICAgICBzZXRPbkNoYW5naW5nUGFnZSh7Li4ub25DaGFuZ2luZ1BhZ2UsW3RhYmxlc0lkXTp0cnVlfSlcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGNvbnN0IG9uRGVjcmVtZW50ID0gKCk9PntcbiAgICAgIGlmIChjdXJyZW50VGFibGVbdGFibGVzSWRdPy5zdGFydEluZGV4ID4gMCl7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdLnN0YXJ0SW5kZXg7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXS5lbmRJbmRleDtcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlck9mUGFnZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0uY3VycmVudE51bWJlck9mUGFnZVxuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gc3RhcnRJbmRleC1udW1iZXJPZkl0ZW1zO1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBlbmRJbmRleC1udW1iZXJPZkl0ZW1zO1xuICAgICAgICBjb25zdCBuZXdjdXJyZW50TnVtYmVyT2ZQYWdlID0gY3VycmVudE51bWJlck9mUGFnZSAtIDE7XG4gICAgICAgIGxldCBuZXdDdXJyZW50VGFibGUgPSBjdXJyZW50VGFibGVbdGFibGVzSWRdO1xuICAgICAgICBpZiAobmV3Q3VycmVudFRhYmxlKXtcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7XG4gICAgICAgICAgICAuLi5uZXdDdXJyZW50VGFibGUsIFxuICAgICAgICAgICAgXCJzdGFydEluZGV4XCI6Zmlyc3RJbmRleCxcbiAgICAgICAgICAgIFwiZW5kSW5kZXhcIjpsYXN0SW5kZXgsXG4gICAgICAgICAgICBcImN1cnJlbnROdW1iZXJPZlBhZ2VcIjpuZXdjdXJyZW50TnVtYmVyT2ZQYWdlXG4gICAgICAgICAgfTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbmV3Q3VycmVudFRhYmxlID0ge1wic3RhcnRJbmRleFwiOmZpcnN0SW5kZXgsXCJlbmRJbmRleFwiOmxhc3RJbmRleCxcImN1cnJlbnROdW1iZXJPZlBhZ2VcIjpuZXdjdXJyZW50TnVtYmVyT2ZQYWdlfVxuICAgICAgICB9XG4gICAgICAgIHNldEN1cnJlbnRUYWJsZSh7Li4uY3VycmVudFRhYmxlLFt0YWJsZXNJZF06bmV3Q3VycmVudFRhYmxlfSk7XG4gICAgICAgIHNldE9uQ2hhbmdpbmdQYWdlKHsuLi5vbkNoYW5naW5nUGFnZSxbdGFibGVzSWRdOnRydWV9KVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnN0YXJ0SW5kZXg/PzA7XG4gICAgY29uc3QgZW5kSW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdPy5lbmRJbmRleD8/MTA7XG4gIFxuICAgIGNvbnN0IHF1ZXJpZXNXaXRoVW5pdm9jbyA9IFtcIj1cIixcIjw+XCIsXCI8PVwiLFwiPj1cIixcIjxcIixcIj5cIl07XG4gICAgY29uc3QgcXVlcmllc1dpdGhNdWx0aXNlbGVjdCA9IFtcIklOXCIsXCJOT1RfSU5cIl07XG4gICAgY29uc3QgcXVlcmllc1dpdGhOb3RoaW5nID0gW1wiaXMgbnVsbFwiLFwiaXMgbm90IG51bGxcIl07XG4gICAgY29uc3QgcXVlcmllc1dpdGhUd29JbnB1dHMgPSBbXCJpbmNsdWRlZFwiLFwiaXNfbm90X2luY2x1ZGVkXCJdO1xuICAgIGNvbnN0IHF1ZXJpZXNXaXRoU2luZ2xlSW5wdXQgPSBbXCJMSUtFJVwiLFwiJUxJS0VcIixcIiVMSUtFJVwiLFwiTk9UIExJS0VcIl07XG4gIFxuICAgIHJldHVybihcbiAgICAgIDw+XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyaWVzV2l0aFVuaXZvY28uaW5jbHVkZXMoZGVmYXVsdFZhbHVlKSAmJiBcbiAgICAgICAgICA8ZGl2IHZhbHVlPXtkZWZhdWx0VmFsdWV9IGNsYXNzTmFtZSA9IHt3aWR0aCA+PSA2MjYgPyBcImQtZmxleCBjb2wtbWQtNFwiIDpcIiBcIn0gc3R5bGU9e3dpZHRoID49IDYyNiA/IHt9OntkaXNwbGF5OidmbGV4J319PlxuICAgICAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXG4gICAgICAgICAgICAgIDxTZWxlY3RVbml2b2NvIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50VGFibGVbdGFibGVzSWRdPy5jdXJyZW50TnVtYmVyT2ZQYWdlPz8wfVxuICAgICAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZQYWdlcyA9IHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy50b3RhbE51bWJlck9mUGFnZT8/MH1cbiAgICAgICAgICAgICAgICBvbkRlY3JlbWVudCA9IHtvbkRlY3JlbWVudH1cbiAgICAgICAgICAgICAgICBvbkluY3JlbWVudCA9IHtvbkluY3JlbWVudH1cbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0ge2N1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnN0YXJ0SW5kZXg/PzB9XG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSB7Y3VycmVudFRhYmxlW3RhYmxlc0lkXT8uZW5kSW5kZXg/PzB9XG4gICAgICAgICAgICAgICAgdGFibGVzSWQgPSB7dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgZHJvcGRvd25zID0ge2Ryb3Bkb3duc31cbiAgICAgICAgICAgICAgICBvcGVuRHJvcCA9IHtvcGVuRHJvcH1cbiAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlciA9IHt1bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICBkYXRhID0ge2NvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5fVxuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZSA9IHtxdWVyeVR5cGU/P1wic2luZ2xlXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2luZ1BhZ2UgPSB7b25DaGFuZ2luZ1BhZ2V9XG4gICAgICAgICAgICAgICAgc2V0T25DaGFuZ2luZ1BhZ2UgPSB7c2V0T25DaGFuZ2luZ1BhZ2V9XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlID0ge2N1cnJlbnRXaGVyZUNsYXVzZT8udmFsdWU/LnR4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50ZXh0SW5wdXRIYW5kbGVyKGUscXVlcnlUeXBlPz9cInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRUZXh0VmFsdWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgcXVlcnlUeXBlPz9cInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUscXVlcnlUeXBlPz9cInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJpZXNXaXRoTXVsdGlzZWxlY3QuaW5jbHVkZXMoZGVmYXVsdFZhbHVlKSAmJlxuICAgICAgICAgIDxkaXYgdmFsdWU9e2RlZmF1bHRWYWx1ZX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBvbm1vdXNlTGVhdmUoKX0gY2xhc3NOYW1lID0ge3dpZHRoID49IDYyNiA/IFwiZC1mbGV4IGNvbC1tZC00XCIgOlwiIFwifT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24gaXNPcGVuPXtkcm9wZG93bnNbdGFibGVzSWRdfSBzdHlsZSA9IHt7d2lkdGg6XCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gb25DbGljaz17KCkgPT4gb3BlbkRyb3AodGFibGVzSWQpfSBzdHlsZSA9IHt7d2lkdGg6XCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge2NoZWNrZWR9IGVsZW1lbnRpIHNlbGV6aW9uYXRpXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT1cImRyb3AtZG93bi1tZW51LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPk11bHRpIHNlbGV6aW9uZSBhdHRpdmE8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyICAvPlxuICAgICAgICAgICAgICAgICAgICB7Y29waWVkbm9ybWFsaXplZFRoaXJkUXVlcnkuc2xpY2Uoc3RhcnRJbmRleCxlbmRJbmRleCk/Lm1hcCgoZWwsaSk9PntcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k9e1wiZml4ZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmNoZWNrVmFsdWUgPT09IGVsLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuY2hlY2tWYWx1ZSA9PT0gZWwubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIG1iLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uQ29tcG9lbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2Ake2N1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LmN1cnJlbnROdW1iZXJPZlBhZ2U/PzB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZQYWdlID0ge2Ake2N1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnRvdGFsTnVtYmVyT2ZQYWdlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmRlY3JlbWVudCA9IHtvbkRlY3JlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uaW5jcmVtZW50ID0ge29uSW5jcmVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyaWVzV2l0aE5vdGhpbmcuaW5jbHVkZXMoZGVmYXVsdFZhbHVlKSAmJiBcbiAgICAgICAgICA8ZGl2IHZhbHVlPXtkZWZhdWx0VmFsdWV9IGNsYXNzTmFtZT17d2lkdGggPiA2MjYgPyBcImQtZmxleCBjb2wtbWQtNFwiOlwiIFwifSBzdHlsZT17d2lkdGggPj0gNjI2ID8ge306e2Rpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJpZXNXaXRoVHdvSW5wdXRzLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgJiYgXG4gICAgICAgICAgPGRpdiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBjbGFzc05hbWU9e3dpZHRoID4gNjI2ID8gXCJkLWZsZXggY29sLW1kLTRcIjpcIiBcIn0gc3R5bGU9e3dpZHRoID49IDYyNiA/IHt9OntkaXNwbGF5OidmbGV4J319PlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIoZSxxdWVyeVR5cGU/P1wic2luZ2xlXCIpfVxuICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1jZW50ZXJcIiBzdHlsZT17e2hlaWdodDonMTAwJScsZm9udFNpemU6JzE4cHgnfX0+ZTwvc3Bhbj5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJpZXNXaXRoU2luZ2xlSW5wdXQuaW5jbHVkZXMoZGVmYXVsdFZhbHVlKSAmJiBcbiAgICAgICAgICA8ZGl2IHZhbHVlPXtkZWZhdWx0VmFsdWV9IGNsYXNzTmFtZT17d2lkdGggPiA2MjYgPyBcImQtZmxleCBjb2wtbWQtNFwiOlwiIFwifSBzdHlsZT17d2lkdGggPj0gNjI2ID8ge306e2Rpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRJbnB1dEhhbmRsZXIoZSxxdWVyeVR5cGU/P1wic2luZ2xlXCIpfVxuICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8Lz5cbiAgICApXG4gIH07XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ29tbW9uU2Vjb25kQ29uc3RydWN0b3I7IiwiXG5pbXBvcnQge1JlYWN0LGpzeH0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7RHJvcGRvd24sRHJvcGRvd25CdXR0b24sRHJvcGRvd25NZW51LERyb3Bkb3duSXRlbSxJbnB1dH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IENoZWNrT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL2NoZWNrJ1xuaW1wb3J0IFBhZ2luYXRpb25Db21wb2VuZW50IGZyb20gJy4uLy4uL3BhZ2luYXRpb24nO1xuaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJ1xuXG50eXBlIFByb3BzVHlwZSA9IHtcbiAgdGFibGVzSWQ6bnVtYmVyfHN0cmluZ1xuICBkYXRhOmFueVtdLFxuICBzdGFydEluZGV4Om51bWJlcixcbiAgZW5kSW5kZXg6bnVtYmVyLFxuICB0b3RhbE51bWJlck9mUGFnZXM6bnVtYmVyLFxuICBjdXJyZW50UGFnZTpudW1iZXIsXG4gIG9uSW5jcmVtZW50OigpPT52b2lkLFxuICBvbkRlY3JlbWVudDooKT0+dm9pZCxcbiAgdW5pdm9jb1NlbGVjdEhhbmRsZXI6KGN1cnJlbnRUYWJsZTp7dmFsdWU6YW55LHRhYmxlSWQ6c3RyaW5nfSxxdWVyeVR5cGU6c3RyaW5nKT0+dm9pZCxcbiAgZHJvcGRvd25zOntba2V5Om51bWJlcnxzdHJpbmddOmJvb2xlYW59LFxuICBvcGVuRHJvcDoodGFibGVzSWQ6c3RyaW5nfG51bWJlcik9PnZvaWQsXG4gIHF1ZXJ5VHlwZTpzdHJpbmcsXG4gIG9uQ2hhbmdpbmdQYWdlOntba2V5OnN0cmluZ3xudW1iZXJdOmJvb2xlYW59LFxuICBzZXRPbkNoYW5naW5nUGFnZTphbnksXG4gIGN1cnJlbnRWYWx1ZTpzdHJpbmd8bnVtYmVyXG59XG5cbmNvbnN0IFNlbGVjdFVuaXZvY28gPSAocHJvcHM6UHJvcHNUeXBlKT0+e1xuXG4gIGNvbnN0IFtjdXJyZW50VGFibGUsc2V0Q3VycmVudFRhYmxlXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgY29uc3Qge1xuICAgIHRhYmxlc0lkLFxuICAgIGRhdGEsXG4gICAgc3RhcnRJbmRleCxcbiAgICBlbmRJbmRleCxcbiAgICB0b3RhbE51bWJlck9mUGFnZXMsXG4gICAgY3VycmVudFBhZ2UsXG4gICAgb25JbmNyZW1lbnQsXG4gICAgb25EZWNyZW1lbnQsXG4gICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIsXG4gICAgZHJvcGRvd25zLFxuICAgIG9wZW5Ecm9wLFxuICAgIHF1ZXJ5VHlwZSxcbiAgICBvbkNoYW5naW5nUGFnZSxcbiAgICBzZXRPbkNoYW5naW5nUGFnZSxcbiAgICBjdXJyZW50VmFsdWVcbiAgfSA9IHByb3BzXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgaWYgKG9uQ2hhbmdpbmdQYWdlW3RhYmxlc0lkXSl7XG4gICAgICBzZXRDdXJyZW50VGFibGUoey4uLmN1cnJlbnRUYWJsZSxbdGFibGVzSWRdOntcInNlbGVjdGVkSW5kZXhcIjotMSxcInNlbGVjdGVkSXRlbVwiOlwiIFwifX0pXG4gICAgICBzZXRPbkNoYW5naW5nUGFnZSh7Li4ub25DaGFuZ2luZ1BhZ2UsW3RhYmxlc0lkXTpmYWxzZX0pO1xuICAgIH1cbiAgfSxbb25DaGFuZ2luZ1BhZ2VdKVxuXG4gIGNvbnN0IGdldENsaWNrZWRJdGVtID0gKHZhbHVlOmFueSx0YWJsZUlkOnN0cmluZ3xudW1iZXIsaW5kZXgpPT57XG4gICAgc2V0Q3VycmVudFRhYmxlKHsuLi5jdXJyZW50VGFibGUsW3RhYmxlSWRdOntcInNlbGVjdGVkSW5kZXhcIjppbmRleCxcInNlbGVjdGVkSXRlbVwiOnZhbHVlfX0pO1xuICAgIGNvbnN0IGN1cnJlbnRUYWJsZUlkID0gdHlwZW9mIHRhYmxlSWQgPT09IFwibnVtYmVyXCIgPyBgJHt0YWJsZUlkfWA6dGFibGVJZFxuICAgIGNvbnN0IG9iaiA9IHt2YWx1ZSx0YWJsZUlkOmN1cnJlbnRUYWJsZUlkfVxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyKG9iaixxdWVyeVR5cGUpO1xuICAgIG9wZW5Ecm9wKHRhYmxlc0lkKVxuICB9XG5cbiAgY29uc3QgdW5yZXF1aXJlZFNlbGVjdGVkVmFsdWUgPSBbJycsXCIgXCIsJyAnXTtcbiAgbGV0IHNlbGVjdGVkSXRlbSA9IGN1cnJlbnRWYWx1ZT8/XCIgXCJcbiAgY29uc3QgY3VycmVudFRhYmxlU2VsZWN0ZWRWYWx1ZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnNlbGVjdGVkSXRlbTtcbiAgaWYgKGN1cnJlbnRUYWJsZVNlbGVjdGVkVmFsdWUgJiYgIXVucmVxdWlyZWRTZWxlY3RlZFZhbHVlLmluY2x1ZGVzKGN1cnJlbnRUYWJsZVNlbGVjdGVkVmFsdWUpKXtcbiAgICBzZWxlY3RlZEl0ZW0gPSBjdXJyZW50VGFibGVTZWxlY3RlZFZhbHVlXG4gIH1cbiAgXG4gIHJldHVybihcbiAgICA8RHJvcGRvd25cbiAgICAgIGFjdGl2ZUljb25cbiAgICAgIGlzT3Blbj17ZHJvcGRvd25zW3RhYmxlc0lkXX1cbiAgICAgIHN0eWxlID0ge3t3aWR0aDpcIjEwMCVcIn19IFxuICAgID5cbiAgICAgIDxEcm9wZG93bkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuRHJvcCh0YWJsZXNJZCl9IHN0eWxlID0ge3t3aWR0aDpcIjEwMCVcIn19PlxuICAgICAgICAgIHtzZWxlY3RlZEl0ZW19XG4gICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJkcm9wLWRvd24tbWVudS10YWJsZVwiICA+XG4gICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAgLz5cbiAgICAgICAgICB7ZGF0YT8uc2xpY2Uoc3RhcnRJbmRleCxlbmRJbmRleCk/Lm1hcCgoZWwsaSk9PntcbiAgICAgICAgICAgIGlmIChlbCl7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrID0geyhlKT0+Z2V0Q2xpY2tlZEl0ZW0oZWwudmFsdWUsdGFibGVzSWQsaSl9PlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjIwLGhlaWdodDoyMCxkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy5zZWxlY3RlZEluZGV4ID09PSBpICYmIDxDaGVja091dGxpbmVkIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0YWJsZXNJZH0gY2xhc3NOYW1lPVwibWwtMyBtYi0wXCIgaWQ9e3RhYmxlc0lkfT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uQ29tcG9lbmVudFxuICAgICAgICAgICAgICBjdXJyZW50UGFnZT17YCR7Y3VycmVudFBhZ2V9YH1cbiAgICAgICAgICAgICAgdG90YWxOdW1iZXJPZlBhZ2UgPSB7YCR7dG90YWxOdW1iZXJPZlBhZ2VzfWB9XG4gICAgICAgICAgICAgIG9uZGVjcmVtZW50ID0ge29uRGVjcmVtZW50fVxuICAgICAgICAgICAgICBvbmluY3JlbWVudCA9IHtvbkluY3JlbWVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFVuaXZvY287IiwiXG5pbXBvcnQge1JlYWN0LGpzeH0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7IExlZnRPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdCc7XG5pbXBvcnQgeyBSaWdodE91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9yaWdodCdcblxudHlwZSBQcm9wc1R5cGUgPSB7XG4gICAgdG90YWxOdW1iZXJPZlBhZ2U6c3RyaW5nLFxuICAgIGN1cnJlbnRQYWdlOnN0cmluZyxcbiAgICBvbmRlY3JlbWVudDooKT0+dm9pZCxcbiAgICBvbmluY3JlbWVudDooKT0+dm9pZFxufVxuXG5jb25zdCBQYWdpbmF0aW9uQ29tcG9lbmVudCA9IChwcm9wczpQcm9wc1R5cGUpPT57XG5cbiAgICBjb25zdCB7dG90YWxOdW1iZXJPZlBhZ2UsY3VycmVudFBhZ2Usb25kZWNyZW1lbnQsb25pbmNyZW1lbnR9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIG91dGVyQ29udGFpbmVyOntcbiAgICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIGdhcDpcIjMlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6NTAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZXNtb2tlXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206LTEwXG4gICAgICAgIH0sXG4gICAgICAgIGljb25Db250YWluZXI6e1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICB3aWR0aDpcIjI1JVwiXG4gICAgICAgIH0sXG4gICAgICAgIGlubmVySWNvbkNvbnRhaW5lcjp7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcInJnYigwLDk0LDIwMilcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIGhlaWdodDozMCxcbiAgICAgICAgICAgIHdpZHRoOlwiODAlXCJcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dENvbnRhaW5lcjp7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnRzOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICB3aWR0aDpcIjUwJVwiLFxuICAgICAgICB9LFxuICAgICAgICBpbm5lclRleHRDb250YWluZXI6e1xuICAgICAgICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICAgICAgICBoZWlnaHQ6MzAsXG4gICAgICAgICAgICBmb250U2l6ZToxNlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IHN0eWxlID0ge3N0eWxlcy5vdXRlckNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlID17c3R5bGVzLmljb25Db250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7c3R5bGVzLmlubmVySWNvbkNvbnRhaW5lcn0gb25DbGljayA9IHtvbmRlY3JlbWVudH0+PExlZnRPdXRsaW5lZCBjb2xvcj0nd2hpdGUnIHNpemUgPSB7MjV9IC8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50ZXh0Q29udGFpbmVyfT48ZGl2IHN0eWxlPXtzdHlsZXMuaW5uZXJUZXh0Q29udGFpbmVyfT57Y3VycmVudFBhZ2V9L3t0b3RhbE51bWJlck9mUGFnZX08L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGUgPXtzdHlsZXMuaWNvbkNvbnRhaW5lcn0gb25DbGljayA9IHtvbmluY3JlbWVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHtzdHlsZXMuaW5uZXJJY29uQ29udGFpbmVyfT48UmlnaHRPdXRsaW5lZCBjb2xvcj0nd2hpdGUnIHNpemUgPSB7MjV9IC8+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uQ29tcG9lbmVudDsiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgaXNWYWxpZEVsZW1lbnQsIGNsb25lRWxlbWVudCwgY3JlYXRlUmVmLCBSZWFjdE5vZGUsIFJlYWN0RWxlbWVudCwgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBwYXRjaFJlc2l6ZUhhbmRsZXIsIGlzRnVuY3Rpb24sIGlzU1NSLCBpc0RPTUVsZW1lbnQsIGNyZWF0ZU5vdGlmaWVyIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMge1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hpbGRGdW5jdGlvblByb3BzPEVsZW1lbnRUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMge1xuICB0YXJnZXRSZWY/OiBSZWZPYmplY3Q8RWxlbWVudFQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdpdGggb2JzZXJ2YWJsZSBlbGVtZW50J3Mgd2lkdGggYW5kIGhlaWdodC5cbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICBvblJlc2l6ZT86ICh3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKSA9PiB2b2lkO1xuICAvKipcbiAgICogVHJpZ2dlciB1cGRhdGUgb24gaGVpZ2h0IGNoYW5nZS5cbiAgICogRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgaGFuZGxlSGVpZ2h0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRyaWdnZXIgb25SZXNpemUgb24gd2lkdGggY2hhbmdlLlxuICAgKiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBoYW5kbGVXaWR0aD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEbyBub3QgdHJpZ2dlciB1cGRhdGUgd2hlbiBhIGNvbXBvbmVudCBtb3VudHMuXG4gICAqIERlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBza2lwT25Nb3VudD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSB1cGRhdGUgc3RyYXRlZ3kuIFBvc3NpYmxlIHZhbHVlczogXCJ0aHJvdHRsZVwiIGFuZCBcImRlYm91bmNlXCIuXG4gICAqIFNlZSBgbG9kYXNoYCBkb2NzIGZvciBtb3JlIGluZm9ybWF0aW9uIGh0dHBzOi8vbG9kYXNoLmNvbS9kb2NzL1xuICAgKiB1bmRlZmluZWQgLSBjYWxsYmFjayB3aWxsIGJlIGZpcmVkIGZvciBldmVyeSBmcmFtZS5cbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICByZWZyZXNoTW9kZT86ICd0aHJvdHRsZScgfCAnZGVib3VuY2UnO1xuICAvKipcbiAgICogU2V0IHRoZSB0aW1lb3V0L2ludGVydmFsIGZvciBgcmVmcmVzaE1vZGVgIHN0cmF0ZWd5XG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgcmVmcmVzaFJhdGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBQYXNzIGFkZGl0aW9uYWwgcGFyYW1zIHRvIGByZWZyZXNoTW9kZWAgYWNjb3JkaW5nIHRvIGxvZGFzaCBkb2NzXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgcmVmcmVzaE9wdGlvbnM/OiB7IGxlYWRpbmc/OiBib29sZWFuOyB0cmFpbGluZz86IGJvb2xlYW4gfTtcbiAgLyoqXG4gICAqIFRoZXNlIG9wdGlvbnMgd2lsbCBiZSB1c2VkIGFzIGEgc2Vjb25kIHBhcmFtZXRlciBvZiBgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZWAgbWV0aG9kXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Jlc2l6ZU9ic2VydmVyL29ic2VydmVcbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICBvYnNlcnZlck9wdGlvbnM/OiBSZXNpemVPYnNlcnZlck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXplRGV0ZWN0b3JQcm9wczxFbGVtZW50VCBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFByb3BzIHtcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igb2YgYW4gZWxlbWVudCB0byBvYnNlcnZlLlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIHByb3BlcnR5IHRvIGF0dGFjaCByZXNpemUtb2JzZXJ2ZXIgdG8gYW55IERPTSBlbGVtZW50LlxuICAgKiBQbGVhc2UgcmVmZXIgdG8gdGhlIHF1ZXJ5U2VsZWN0b3IgZG9jcy5cbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gNS4wLjAuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDcuMC4wLlxuICAgKiBVc2UgdGFyZ2V0UmVmIGluc3RlYWRcbiAgICovXG4gIHF1ZXJ5U2VsZWN0b3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBWYWxpZCBvbmx5IGZvciBhIGNhbGxiYWNrLXBhdHRlcm4uXG4gICAqIElnbm9yZWQgZm9yIG90aGVyIHJlbmRlciB0eXBlcy5cbiAgICogU2V0IHJlc2l6ZS1kZXRlY3RvcidzIG5vZGUgdHlwZS5cbiAgICogWW91IGNhbiBwYXNzIGFueSB2YWxpZCBSZWFjdCBub2RlOiBzdHJpbmcgd2l0aCBub2RlJ3MgbmFtZSBvciBlbGVtZW50LlxuICAgKiBDYW4gYmUgdXNlZnVsIHdoZW4geW91IG5lZWQgdG8gaGFuZGxlIHRhYmxlJ3Mgb3IgcGFyYWdyYXBoJ3MgcmVzaXplcy5cbiAgICogRGVmYXVsdDogXCJkaXZcIlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDUuMC4wLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA3LjAuMC5cbiAgICogVXNlIHRhcmdldFJlZiBpbnN0ZWFkXG4gICAqL1xuICBub2RlVHlwZT86IGtleW9mIEpTWC5JbnRyaW5zaWNFbGVtZW50czsgLy8gd2lsbCBiZSBwYXNzZWQgdG8gUmVhY3QuY3JlYXRlRWxlbWVudCgpXG4gIC8qKlxuICAgKiBBIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqIEJ5IGRlZmF1bHQgaXQncyBhIHBhcmVudCBlbGVtZW50IGluIHJlbGF0aW9uIHRvIHRoZSBSZWFjdFJlc2l6ZURldGVjdG9yIGNvbXBvbmVudC5cbiAgICogQnV0IHlvdSBjYW4gcGFzcyBhbnkgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBvbWl0dGVkIHdoZW4geW91IHBhc3MgcXVlcnlTZWxlY3Rvci5cbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gNS4wLjAuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDYuMC4wLlxuICAgKiBVc2UgdGFyZ2V0UmVmIGluc3RlYWRcbiAgICovXG4gIHRhcmdldERvbUVsPzogRWxlbWVudFQ7XG4gIC8qKlxuICAgKiBBIFJlYWN0IHJlZmVyZW5jZSBvZiB0aGUgZWxlbWVudCB0byBvYnNlcnZlLlxuICAgKiBQYXNzIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHlvdSB3YW50IHRvIGF0dGFjaCByZXNpemUgaGFuZGxlcnMgdG8uXG4gICAqIEl0IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgUmVhY3QudXNlUmVmIG9yIFJlYWN0LmNyZWF0ZVJlZiBmdW5jdGlvbnNcbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICB0YXJnZXRSZWY/OiBSZWZPYmplY3Q8RWxlbWVudFQ+O1xuXG4gIHJlbmRlcj86IChwcm9wczogUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMpID0+IFJlYWN0Tm9kZTtcblxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZSB8ICgocHJvcHM6IENoaWxkRnVuY3Rpb25Qcm9wczxFbGVtZW50VD4pID0+IFJlYWN0Tm9kZSk7XG59XG5cbmNsYXNzIFJlc2l6ZURldGVjdG9yPEVsZW1lbnRUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFxuICBSZXNpemVEZXRlY3RvclByb3BzPEVsZW1lbnRUPixcbiAgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnNcbj4ge1xuICBza2lwT25Nb3VudDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgdGFyZ2V0UmVmO1xuICBvYnNlcnZhYmxlRWxlbWVudDtcbiAgcmVzaXplSGFuZGxlcjtcbiAgcmVzaXplT2JzZXJ2ZXI7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBSZXNpemVEZXRlY3RvclByb3BzPEVsZW1lbnRUPikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgc2tpcE9uTW91bnQsIHJlZnJlc2hNb2RlLCByZWZyZXNoUmF0ZSA9IDEwMDAsIHJlZnJlc2hPcHRpb25zIH0gPSBwcm9wcztcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgdGhpcy5za2lwT25Nb3VudCA9IHNraXBPbk1vdW50O1xuICAgIHRoaXMudGFyZ2V0UmVmID0gY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5vYnNlcnZhYmxlRWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoaXNTU1IoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplSGFuZGxlciA9IHBhdGNoUmVzaXplSGFuZGxlcih0aGlzLmNyZWF0ZVJlc2l6ZUhhbmRsZXIsIHJlZnJlc2hNb2RlLCByZWZyZXNoUmF0ZSwgcmVmcmVzaE9wdGlvbnMpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgd2luZG93LlJlc2l6ZU9ic2VydmVyKHRoaXMucmVzaXplSGFuZGxlcik7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE9ic2VydmVyKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hPYnNlcnZlcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgaWYgKGlzU1NSKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vYnNlcnZhYmxlRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5jYW5jZWxIYW5kbGVyKCk7XG4gIH1cblxuICBjYW5jZWxIYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnJlc2l6ZUhhbmRsZXIgJiYgdGhpcy5yZXNpemVIYW5kbGVyLmNhbmNlbCkge1xuICAgICAgLy8gY2FuY2VsIGRlYm91bmNlZCBoYW5kbGVyXG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIuY2FuY2VsKCk7XG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBhdHRhY2hPYnNlcnZlciA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHRhcmdldFJlZiwgb2JzZXJ2ZXJPcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGlzU1NSKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0UmVmICYmIHRhcmdldFJlZi5jdXJyZW50KSB7XG4gICAgICB0aGlzLnRhcmdldFJlZi5jdXJyZW50ID0gdGFyZ2V0UmVmLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgLy8gY2FuJ3QgZmluZCBlbGVtZW50IHRvIG9ic2VydmVcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vYnNlcnZhYmxlRWxlbWVudCAmJiB0aGlzLm9ic2VydmFibGVFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgb2JzZXJ2ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9ic2VydmFibGVFbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfTtcblxuICBnZXRFbGVtZW50ID0gKCk6IEVsZW1lbnQgfCBUZXh0IHwgbnVsbCA9PiB7XG4gICAgY29uc3QgeyBxdWVyeVNlbGVjdG9yLCB0YXJnZXREb21FbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc1NTUigpKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIGluIGNhc2Ugd2UgcGFzcyBhIHF1ZXJ5U2VsZWN0b3JcbiAgICBpZiAocXVlcnlTZWxlY3RvcikgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTZWxlY3Rvcik7XG4gICAgLy8gaW4gY2FzZSB3ZSBwYXNzIGEgRE9NIGVsZW1lbnRcbiAgICBpZiAodGFyZ2V0RG9tRWwgJiYgaXNET01FbGVtZW50KHRhcmdldERvbUVsKSkgcmV0dXJuIHRhcmdldERvbUVsO1xuICAgIC8vIGluIGNhc2Ugd2UgcGFzcyBhIFJlYWN0IHJlZiB1c2luZyBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIGlmICh0aGlzLnRhcmdldFJlZiAmJiBpc0RPTUVsZW1lbnQodGhpcy50YXJnZXRSZWYuY3VycmVudCkpIHJldHVybiB0aGlzLnRhcmdldFJlZi5jdXJyZW50O1xuXG4gICAgLy8gdGhlIHdvcnNlIGNhc2Ugd2hlbiB3ZSBkb24ndCByZWNlaXZlIGFueSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBwYXJlbnQgYW5kIHRoZSBsaWJyYXJ5IGRvZXNuJ3QgYWRkIGFueSB3cmFwcGVyc1xuICAgIC8vIHdlIGhhdmUgdG8gdXNlIGEgZGVwcmVjYXRlZCBgZmluZERPTU5vZGVgIG1ldGhvZCBpbiBvcmRlciB0byBmaW5kIGEgRE9NIGVsZW1lbnQgdG8gYXR0YWNoIHRvXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBmaW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICghY3VycmVudEVsZW1lbnQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgcmVuZGVyVHlwZSA9IHRoaXMuZ2V0UmVuZGVyVHlwZSgpO1xuICAgIHN3aXRjaCAocmVuZGVyVHlwZSkge1xuICAgICAgY2FzZSAncmVuZGVyUHJvcCc6XG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcbiAgICAgIGNhc2UgJ2NoaWxkRnVuY3Rpb24nOlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgICBjYXNlICdjaGlsZCc6XG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcbiAgICAgIGNhc2UgJ2NoaWxkQXJyYXknOlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlUmVzaXplSGFuZGxlcjogUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzOiBSZXNpemVPYnNlcnZlckVudHJ5W10pOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZVdpZHRoID0gdHJ1ZSwgaGFuZGxlSGVpZ2h0ID0gdHJ1ZSwgb25SZXNpemUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWhhbmRsZVdpZHRoICYmICFoYW5kbGVIZWlnaHQpIHJldHVybjtcblxuICAgIGNvbnN0IG5vdGlmeVJlc2l6ZSA9IGNyZWF0ZU5vdGlmaWVyKG9uUmVzaXplLCB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyksIGhhbmRsZVdpZHRoLCBoYW5kbGVIZWlnaHQpO1xuXG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gKGVudHJ5ICYmIGVudHJ5LmNvbnRlbnRSZWN0KSB8fCB7fTtcblxuICAgICAgY29uc3Qgc2hvdWxkU2V0U2l6ZSA9ICF0aGlzLnNraXBPbk1vdW50ICYmICFpc1NTUigpO1xuICAgICAgaWYgKHNob3VsZFNldFNpemUpIHtcbiAgICAgICAgbm90aWZ5UmVzaXplKHsgd2lkdGgsIGhlaWdodCB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5za2lwT25Nb3VudCA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldFJlbmRlclR5cGUgPSAoKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IHJlbmRlciwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGlzRnVuY3Rpb24ocmVuZGVyKSkge1xuICAgICAgLy8gREVQUkVDQVRFRC4gVXNlIGBDaGlsZCBGdW5jdGlvbiBQYXR0ZXJuYCBpbnN0ZWFkXG4gICAgICByZXR1cm4gJ3JlbmRlclByb3AnO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNoaWxkcmVuKSkge1xuICAgICAgcmV0dXJuICdjaGlsZEZ1bmN0aW9uJztcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4gJ2NoaWxkJztcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgIC8vIERFUFJFQ0FURUQuIFdyYXAgY2hpbGRyZW4gd2l0aCBhIHNpbmdsZSBwYXJlbnRcbiAgICAgIHJldHVybiAnY2hpbGRBcnJheSc7XG4gICAgfVxuXG4gICAgLy8gREVQUkVDQVRFRC4gVXNlIGBDaGlsZCBGdW5jdGlvbiBQYXR0ZXJuYCBpbnN0ZWFkXG4gICAgcmV0dXJuICdwYXJlbnQnO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgY2hpbGRyZW4sIG5vZGVUeXBlOiBXcmFwcGVyVGFnID0gJ2RpdicgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHsgd2lkdGgsIGhlaWdodCwgdGFyZ2V0UmVmOiB0aGlzLnRhcmdldFJlZiB9O1xuICAgIGNvbnN0IHJlbmRlclR5cGUgPSB0aGlzLmdldFJlbmRlclR5cGUoKTtcblxuICAgIHN3aXRjaCAocmVuZGVyVHlwZSkge1xuICAgICAgY2FzZSAncmVuZGVyUHJvcCc6XG4gICAgICAgIHJldHVybiByZW5kZXI/LihjaGlsZFByb3BzKTtcbiAgICAgIGNhc2UgJ2NoaWxkRnVuY3Rpb24nOiB7XG4gICAgICAgIGNvbnN0IGNoaWxkRnVuY3Rpb24gPSBjaGlsZHJlbiBhcyAocHJvcHM6IENoaWxkRnVuY3Rpb25Qcm9wczxFbGVtZW50VD4pID0+IFJlYWN0Tm9kZTtcbiAgICAgICAgcmV0dXJuIGNoaWxkRnVuY3Rpb24/LihjaGlsZFByb3BzKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NoaWxkJzoge1xuICAgICAgICAvLyBAVE9ETyBidWcgcHJvbmUgbG9naWNcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbiBhcyBSZWFjdEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGlsZC50eXBlICYmIHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIGNoaWxkIGlzIGEgbmF0aXZlIERPTSBlbGVtZW50cyBzdWNoIGFzIGRpdiwgc3BhbiBldGNcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgY29uc3QgeyB0YXJnZXRSZWYsIC4uLm5hdGl2ZVByb3BzIH0gPSBjaGlsZFByb3BzO1xuICAgICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIG5hdGl2ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbGFzcyBvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBvdGhlcndpc2VcbiAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XG4gICAgICB9XG4gICAgICBjYXNlICdjaGlsZEFycmF5Jzoge1xuICAgICAgICBjb25zdCBjaGlsZEFycmF5ID0gY2hpbGRyZW4gYXMgUmVhY3RFbGVtZW50W107XG4gICAgICAgIHJldHVybiBjaGlsZEFycmF5Lm1hcChlbCA9PiAhIWVsICYmIGNsb25lRWxlbWVudChlbCwgY2hpbGRQcm9wcykpO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxXcmFwcGVyVGFnIC8+O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpemVEZXRlY3RvcjtcbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5pbXBvcnQgdHlwZSB7IERlYm91bmNlZEZ1bmMgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBQcm9wcywgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMgfSBmcm9tICcuL1Jlc2l6ZURldGVjdG9yJztcblxuZXhwb3J0IHR5cGUgUGF0Y2hlZFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2sgPSBEZWJvdW5jZWRGdW5jPFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2s+IHwgUmVzaXplT2JzZXJ2ZXJDYWxsYmFjaztcblxuZXhwb3J0IGNvbnN0IHBhdGNoUmVzaXplSGFuZGxlciA9IChcbiAgcmVzaXplQ2FsbGJhY2s6IFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2ssXG4gIHJlZnJlc2hNb2RlOiBQcm9wc1sncmVmcmVzaE1vZGUnXSxcbiAgcmVmcmVzaFJhdGU6IFByb3BzWydyZWZyZXNoUmF0ZSddLFxuICByZWZyZXNoT3B0aW9uczogUHJvcHNbJ3JlZnJlc2hPcHRpb25zJ11cbik6IFBhdGNoZWRSZXNpemVPYnNlcnZlckNhbGxiYWNrID0+IHtcbiAgc3dpdGNoIChyZWZyZXNoTW9kZSkge1xuICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgIHJldHVybiBkZWJvdW5jZShyZXNpemVDYWxsYmFjaywgcmVmcmVzaFJhdGUsIHJlZnJlc2hPcHRpb25zKTtcbiAgICBjYXNlICd0aHJvdHRsZSc6XG4gICAgICByZXR1cm4gdGhyb3R0bGUocmVzaXplQ2FsbGJhY2ssIHJlZnJlc2hSYXRlLCByZWZyZXNoT3B0aW9ucyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiByZXNpemVDYWxsYmFjaztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSAoZm46IHVua25vd24pOiBib29sZWFuID0+IHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGlzU1NSID0gKCk6IGJvb2xlYW4gPT4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBjb25zdCBpc0RPTUVsZW1lbnQgPSAoZWxlbWVudDogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGlmaWVyID1cbiAgKFxuICAgIG9uUmVzaXplOiBQcm9wc1snb25SZXNpemUnXSxcbiAgICBzZXRTaXplOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxSZWFjdFJlc2l6ZURldGVjdG9yRGltZW5zaW9ucz4+LFxuICAgIGhhbmRsZVdpZHRoOiBib29sZWFuLFxuICAgIGhhbmRsZUhlaWdodDogYm9vbGVhblxuICApID0+XG4gICh7IHdpZHRoLCBoZWlnaHQgfTogUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMpOiB2b2lkID0+IHtcbiAgICBzZXRTaXplKHByZXYgPT4ge1xuICAgICAgaWYgKHByZXYud2lkdGggPT09IHdpZHRoICYmIHByZXYuaGVpZ2h0ID09PSBoZWlnaHQpIHtcbiAgICAgICAgLy8gc2tpcCBpZiBkaW1lbnNpb25zIGhhdmVuJ3QgY2hhbmdlZFxuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH1cblxuICAgICAgaWYgKChwcmV2LndpZHRoID09PSB3aWR0aCAmJiAhaGFuZGxlSGVpZ2h0KSB8fCAocHJldi5oZWlnaHQgPT09IGhlaWdodCAmJiAhaGFuZGxlV2lkdGgpKSB7XG4gICAgICAgIC8vIHByb2Nlc3MgYGhhbmRsZUhlaWdodC9oYW5kbGVXaWR0aGAgcHJvcHNcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9XG5cbiAgICAgIG9uUmVzaXplPy4od2lkdGgsIGhlaWdodCk7XG5cbiAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9KTtcbiAgfTtcbiIsIi8qKlxyXG5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIF93aWRnZXRMYWJlbDogJ0Nvc3RydXR0b3JlIFF1ZXJ5JyxcclxuICAgIHNlbGVjdEdlb21ldHJ5OlwiU2VsZXppb25hcmUgbGEgZ2VvbWV0cmlhXCIsXHJcbiAgICBsYXllcnM6XCJTdHJhdGlcIixcclxuICAgIHpvb21BOlwiWm9vbSBBXCIsXHJcbiAgICBleHBvcnRDc3Y6XCJFc3BvcnRhemlvbmUgaW4gZmlsZSBjc3ZcIixcclxuICAgIGV4cG9ydEpzb246XCJFc3BvcnRhemlvbmUgaW4gdW5hIHJhY2NvbHRhIGRpIGZ1bnppb25pXCIsXHJcbiAgICBzdGF0aXN0aWNzOlwiU3RhdGlzdGljaGVcIixcclxuICAgIGNyZWF0ZUxheWVyOlwiQ3JlYXJlIGlsIGxpdmVsbG9cIixcclxuICAgIGF0dHJpYnV0ZVRhYmxlOlwiVmlzdGEgbmVsbGEgdGFiZWxsYSBkZWdsaSBhdHRyaWJ1dGlcIixcclxuICAgIGRlbGV0ZTpcIkNhbmNlbGxhcmVcIixcclxuICAgIGNvdW50T2ZJdGVtczpcIkNvbnRlZ2dpbyBkZWdsaSBhcnRpY29saVwiLFxyXG4gICAgc3VtT2ZWYWx1ZXM6XCJTb21tYSBkZWkgdmFsb3JpXCIsXHJcbiAgICBtaW5pbXVtOlwiTWluaW1vXCIsXHJcbiAgICBtYXhpbXVtOlwiTWFzc2ltb1wiLFxyXG4gICAgYXZlcmFnZTpcIk1lZGlhXCIsXHJcbiAgICBzZWxlY3RCeVBvaW50OlwiU2VsZXppb25lIHBlciBwdW50b1wiLFxyXG4gICAgc2VsZWN0aW9uQnlMaW5lOlwiU2VsZXppb25lIHBlciBsaW5lYVwiLFxyXG4gICAgc2VsZWN0aW9uQnlQb2x5Z29uOlwiU2VsZXppb25lIHBlciBwb2xpZ29ub1wiLFxyXG4gICAgc2VsZWN0aW9uQnlSZWN0YW5ndWxhcjpcIlNlbGV6aW9uZSBwZXIgcmV0dGFuZ29sb1wiLFxyXG4gICAgc2VsZWN0aW9uQnlDaXJjbGU6XCJTZWxlemlvbmUgcGVyIGNlcmNoaW9cIixcclxuICAgIHJlZnJlc2g6XCJBZ2dpb3JuYXJlXCIsXHJcbiAgICBvazpcIk9LXCIsXHJcbiAgICBjYW5jZWw6XCJBbm51bGxhbWVudG9cIixcclxuICAgIGZpZWxkczpcIkNhbXBpXCIsXHJcbiAgICBzZWxlY3Rpb25BY3Rpb246XCJTZWxlemlvbmUgQXppb25lXCIsXHJcbiAgICBtYXBMb2FkaW5nOlwiSW4gYXR0ZXNhIGRlbCBjYXJpY2FtZW50byBkZWxsYSBtYXBwYS4uLlwiLFxyXG4gICAgbm9TZWxlY3RlZEl0ZW06XCJOb24gw6ggc3RhdGEgc2VsZXppb25hdGEgYWxjdW5hIHZvY2VcIixcclxuICAgIG5vSXRlbVNlbGVjdGVkOlwiTm9uIMOoIHN0YXRvIHRyb3ZhdG8gYWxjdW4gYXR0cmlidXRvIGRvcG8gbCdpbnRlcnJvZ2F6aW9uZVwiXHJcbn1cclxuIiwiY29uc3QgIHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIgPSBbXHJcbiAgICB7IG5hbWU6ICfDqCcsIHZhbHVlOiAnPScgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCcsIHZhbHVlOiAnPD4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB1bm8gZGknLCB2YWx1ZTogJ0lOJyB9LCAvLyBPQkpFQ1RJRCBJTiAoMSwyLDMpXHJcbiAgICB7IG5hbWU6ICdub24gw6ggbmVzc3VubyBkaScsIHZhbHVlOiAnTk9UX0lOJyB9LCAvLyAgIE9CSkVDVElEIE5PVF9JTiAoMSwyLDMpXHJcbiAgICB7IG5hbWU6ICfDqCBhbG1lbm8nLCB2YWx1ZTogJzw9JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggYWwgbWFzc2ltbycsIHZhbHVlOiAnPj0nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBtaW5vcmUgZGknLCB2YWx1ZTogJzwnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBtYWdnaW9yZSBkaScsIHZhbHVlOiAnPicgfSxcclxuICAgIHsgbmFtZTogJ8OoIHZ1b3RvJywgdmFsdWU6ICdpcyBudWxsJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIHZ1b3RvJywgdmFsdWU6ICdpcyBub3QgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ8OoIGNvbXByZXNvIHRyYScsIHZhbHVlOiAnaW5jbHVkZWQnIH0sIC8vIE9CSkVDVElEIDwgMiBBTkQgT0JKRUNUSUQgPiA0XHJcbiAgICB7IG5hbWU6ICdub24gw6ggY29tcHJlc28gdHJhJywgdmFsdWU6ICdpc19ub3RfaW5jbHVkZWQnIH0gLy9kYSB0cm92YXJlXHJcbl07XHJcbmNvbnN0ICAgcXVlcnlDb25zdHJ1Y3RvclN0cmluZyA9IFtcclxuICAgIHsgbmFtZTogJ8OoJywgdmFsdWU6ICc9JyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoJywgdmFsdWU6ICc8PicgfSxcclxuICAgIHsgbmFtZTogJ8OoIHVubyBkaScsIHZhbHVlOiAnSU4nIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6ggbmVzc3VubyBkaScsIHZhbHVlOiAnTk9UX0lOJyB9LFxyXG4gICAgeyBuYW1lOiAnaW5pemlhIGNvbicsIHZhbHVlOiAnTElLRSUnIH0sXHJcbiAgICB7IG5hbWU6ICd0ZXJtaW5hIGNvbicsIHZhbHVlOiAnJUxJS0UnIH0sXHJcbiAgICB7IG5hbWU6ICdjb250aWVuZScsIHZhbHVlOiAnJUxJS0UlJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIGNvbnRpZW5lJywgdmFsdWU6ICdOT1QgTElLRScgfSxcclxuICAgIHsgbmFtZTogJ8OoIHZ1b3RvJywgdmFsdWU6ICdpcyBudWxsJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIHZ1b3RvJywgdmFsdWU6ICdpcyBub3QgbnVsbCcgfVxyXG5dO1xyXG5leHBvcnQgeyBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLCBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nIH0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2x5Z29uX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfR3JhcGhpY3NMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3Jlc3Rfc3VwcG9ydF9RdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBBbGxXaWRnZXRQcm9wcywganN4LCBhcHBBY3Rpb25zIH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2Nsb3NlXCI7XG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvcGx1c1wiO1xuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBTZWxlY3QsIE9wdGlvbiwgQWxlcnQsIEJ1dHRvbiwgSWNvbiB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBRdWVyeSBmcm9tIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIjtcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vY29tcG9uZW50cy9UYWJsZVwiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi4vY29ubmVjdG9yXCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwiZXNyaS9nZW9tZXRyeS9Qb2x5Z29uXCI7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tIFwiLi9saWIvUmVzaXplRGV0ZWN0b3JcIjtcbmltcG9ydCBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciBmcm9tIFwiLi4vY29ubmVjdG9yL2F0dHJpYnV0ZV90YWJsZV9jb25uZWN0b3JcIjtcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiO1xuaW1wb3J0IEFkZFNldFRhYmxlIGZyb20gXCIuL2NvbXBvbmVudHMvQWRkU2V0VGFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LFxuICBhbnlcbj4ge1xuICBncmFwaGljTGF5ZXJGb3VuZCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6IFwiaGlkZVwiLCB2aXNpYmxlOiB0cnVlIH0pO1xuICBncmFwaGljTGF5ZXJTZWxlY3RlZCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6IFwiaGlkZVwiLCB2aXNpYmxlOiB0cnVlIH0pO1xuXG4gIHN0YXRpYyBhY3RpdmVWID0gbnVsbDtcbiAgc3RhdGljIGppbXVMYXllclZpZXd6ID0gbnVsbDtcbiAgc3RhdGljIGF0dHJpYnV0ZV90YWJsZV9kYXRhID0gbnVsbDtcbiAgc3RhdGljIGluaXRpYWxab29tID0gMDtcblxuICBhdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciA9IG51bGw7XG4gIHF1ZXJ5QXJyYXkgPSBbXTtcbiAgb3V0ZmllbGRzID0gW107XG4gIGN1cnJlbnRMYXllclZpZXcgPSBudWxsO1xuICBzZXRRdWVyeUFycmF5ID0gW107XG4gIHNldE91dEZpZWxkcyA9IFtdO1xuICBzZXRRdWVyeVN0cmluZyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAvL0xheWVyXG4gICAgdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyID0gdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVyeUF0dHJpYnV0ZSA9IHRoaXMuZ2V0UXVlcnlBdHRyaWJ1dGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFF1ZXJ5ID0gdGhpcy5nZXRRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZFF1ZXJ5ID0gdGhpcy5zZW5kUXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRRdWVyeVNldCA9IHRoaXMuc2VuZFF1ZXJ5U2V0LmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5ydW5ib3RoUXVlcmllcz0gdGhpcy5ydW5ib3RoUXVlcmllcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGhpcmRRdWVyeSA9IHRoaXMudGhpcmRRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJvcGRvd25JdGVtQ2xpY2sgPSB0aGlzLmRyb3Bkb3duSXRlbUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaG9vc2VBbmRPciA9IHRoaXMuY2hvb3NlQW5kT3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNob29zZUFuZE9yU2V0ID0gdGhpcy5jaG9vc2VBbmRPclNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VEcm9wID0gdGhpcy5jbG9zZURyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5Ecm9wID0gdGhpcy5vcGVuRHJvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VEcm9wT25jbGlja091dHNpZGUgPSB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbm1vdXNlTGVhdmUgPSB0aGlzLm9ubW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycyA9IHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0QWxsSmltdUxheWVyVmlld3MgPSB0aGlzLmdldEFsbEppbXVMYXllclZpZXdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24gPSB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZnVuY3Rpb25Db3VudGVySXNDaGVja2VkID0gdGhpcy5mdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFF1ZXJ5U2V0ID0gdGhpcy5nZXRRdWVyeVNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DaGFuZ2VDaGVja0JveFNldCA9IHRoaXMub25DaGFuZ2VDaGVja0JveFNldC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgamltdU1hcFZpZXc6IG51bGwsXG4gICAgICBsYXllckNvbnRlbnRzOiBbXSxcbiAgICAgIGNoZWNrZWRMYXllcl86IFtdLFxuICAgICAgcmVzdWx0TGF5ZXJMaXN0OiBbXSxcbiAgICAgIGlzTGF5ZXJTZWxlY3RlZDogZmFsc2UsXG4gICAgICByZXN1bHRzTGF5ZXJTZWxlY3RlZDogW10sXG4gICAgICBjdXJyZW50VGFyZ2V0VGV4dDogbnVsbCxcbiAgICAgIGdlb21ldHJ5OiBudWxsLFxuICAgICAgdHlwZVNlbGVjdGVkOiBudWxsLFxuICAgICAgbGlzdFNlcnZpY2VzOiBbXSxcbiAgICAgIGN1cnJlbnRGaXJzdFF1ZXJ5OiBcIlwiLFxuICAgICAgY3VycmVudEZpcnN0UXVlcnlUeXBlOiBudWxsLFxuICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBcInZhbG9yZVwiLFxuICAgICAgZmlyc3RUZXh0SW5jbHVkZWRIYW5kbGVyOiBcIjBcIixcbiAgICAgIHNlY29uZFRleHRJbmNsdWRlZEhhbmRsZXI6IFwiMFwiLFxuICAgICAgdGFibGVzOiBbXSxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBjb3VudGVySXNDaGVja2VkOiBbXSxcbiAgICAgIGNoZWNrZWRUb1F1ZXJ5OiBbXSxcbiAgICAgIHRhYmxlQ291bnRlcjogMCxcbiAgICAgIHRhYmxlQ291bnRlclNldDogMCxcbiAgICAgIHdoZXJlQ2xhdXNlczogW10sXG4gICAgICB0YWJsZXNTZXRJZDogbnVsbCxcbiAgICAgIHdoZXJlQ2xhdXNlU2V0OiBbXSxcbiAgICAgIHRhYmxlc1NldDogW10sXG4gICAgICB0YWJsZXNJZDogbnVsbCxcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICBBbmRPcjogXCJBTkRcIixcbiAgICAgIEFuZE9yU2V0OiBcIkFORFwiLFxuICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgIGF1dE9wZW46IHRydWUsXG4gICAgICBtb3VzZWxlYXZlOiBmYWxzZSxcbiAgICAgIGRyb3BEb3duczoge30sXG4gICAgICBkcm9wRG93bnNTZXQ6IHt9LFxuICAgICAgaGlnaGxpZ2h0SWRzOiBbXSxcbiAgICAgIHNlbGVjdGVkRmllbGQ6IG51bGwsXG4gICAgICBvdGhlclF1ZXJpZXNWYWx1ZToge30sXG4gICAgICBkcm9wSWQ6IG51bGwsXG4gICAgICBkcm9wSWRTZXQ6IG51bGwsXG4gICAgICBoaWdsaWdodFNlbGVjdGVkOiBbXSxcbiAgICAgIGl0ZW1Ob3RGb3VuZDogbnVsbCxcbiAgICAgIGN1cnJlbnRTZWxlY3RlZElkOiBcIiBcIixcbiAgICAgIGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IGZhbHNlLFxuICAgICAgd2lkZ2V0U3RhdGVDbG9zZWRDaGVja2VkOiBmYWxzZSxcbiAgICAgIHdpZGdldFN0YXRlT3BlbmVkQ2hlY2tlZDogZmFsc2UsXG4gICAgICBzaG93QWRkU2VsZWN0OiB0cnVlLFxuICAgICAgU2V0QmxvY2s6IFtdLFxuICAgICAgc2VsZWN0ZWRJZDogbnVsbCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgcXVlcnlDaGFuZ2VkOnt9XG4gICAgfTtcbiAgfTtcblxuICBubHMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmludGxcbiAgICAgID8gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzW2lkXSxcbiAgICAgICAgfSlcbiAgICAgIDogaWQ7XG4gIH07XG5cbiAgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIoam12OiBKaW11TWFwVmlldykge1xuICAgIGlmIChqbXYpIHtcbiAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJGb3VuZCk7XG4gICAgICBqbXYudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY0xheWVyU2VsZWN0ZWQpO1xuICAgICAgY29uc3QgcmVzdWx0TGF5ZXJMaXN0ID0gW107XG4gICAgICBqbXYudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChmLnR5cGUgPT09IFwiZmVhdHVyZVwiKSB7XG4gICAgICAgICAgam12LnZpZXcud2hlbkxheWVyVmlldyhmKS50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IFwiMT0xXCI7XG4gICAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbXCIqXCJdO1xuICAgICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHsgd2hlcmU6IHF1ZXJ5LndoZXJlIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzdWx0TGF5ZXJMaXN0LnB1c2goe1xuICAgICAgICAgICAgZWxlbWVudDogZixcbiAgICAgICAgICAgIGxhYmVsOiBmLnRpdGxlLFxuICAgICAgICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgICAgICAgbGF5ZXJJRDogZi5pZCxcbiAgICAgICAgICAgIHVybFNlcnZpY2VTZXJ2ZXI6IGYudXJsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFdpZGdldC5hY3RpdmVWID0gam12O1xuICAgICAgV2lkZ2V0LmppbXVMYXllclZpZXd6ID0gam12Py5qaW11TGF5ZXJWaWV3cztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHRMYXllckxpc3Q6IHJlc3VsdExheWVyTGlzdCwgamltdU1hcFZpZXc6IGptdiB9KTtcbiAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IgPSBuZXcgQXR0cmlidXRlVGFibGVDb25uZWN0b3Ioam12LCB0aGlzKTtcbiAgICAgIFdpZGdldC5pbml0aWFsWm9vbSA9IGptdi52aWV3Lnpvb207XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNMYXllclNlbGVjdGVkICE9PSBwcmV2UHJvcHMuaXNMYXllclNlbGVjdGVkKSB7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcyAhPT0gcHJldlByb3BzLndoZXJlQ2xhdXNlcykge1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge31cbiAgLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBFVkVOVCBDTElDSyBTRUxFQ1RcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gIHJlbW92ZVZhbHVlRnJvbU9iamVjdChvYmopIHtcbiAgICBsZXQgbmV3V2hlcmVDbGF1c2UgPSBvYmo7XG4gICAgaWYgKG9iaj8uaWZJbk9yTm90SW5RdWVyeVZhbHVlKSB7XG4gICAgICBuZXdXaGVyZUNsYXVzZSA9IHtcbiAgICAgICAgaWQ6IG9iai5pZCxcbiAgICAgICAgYXR0cmlidXRlUXVlcnk6IG9iai5hdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBvYmouYXR0cmlidXRlUXVlcnlUeXBlLFxuICAgICAgICBxdWVyeVZhbHVlOiBvYmoucXVlcnlWYWx1ZSxcbiAgICAgICAgaWZJbk9yTm90SW5RdWVyeVZhbHVlOiBvYmouaWZJbk9yTm90SW5RdWVyeVZhbHVlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3V2hlcmVDbGF1c2UgPSB7XG4gICAgICAgIGlkOiBvYmouaWQsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBvYmouYXR0cmlidXRlUXVlcnksXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogb2JqLmF0dHJpYnV0ZVF1ZXJ5VHlwZSxcbiAgICAgICAgcXVlcnlWYWx1ZTogb2JqLnF1ZXJ5VmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbmV3V2hlcmVDbGF1c2U7XG4gIH1cblxuICBhc3luYyBnZXRRdWVyeUF0dHJpYnV0ZShlLHR5cGU9XCJzaW5nbGVcIikge1xuICAgIGNvbnN0IGtleXR5cGUgPSB0eXBlID09PSBcInNpbmdsZVwiID8gXCJ3aGVyZUNsYXVzZXNcIiA6IFwid2hlcmVDbGF1c2VTZXRcIjtcbiAgICBsZXQgY3VycmVudFdoZXJlQ2xhdXNlO1xuICAgIGNvbnN0IHdoZXJlQ2xhdXNlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdO1xuICAgIGlmICghd2hlcmVDbGF1c2VTdGF0ZS5sZW5ndGgpIHtcbiAgICAgIGxldCB3aGVyZUNsYXVzZSA9IHtcbiAgICAgICAgaWQ6ZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBlLmN1cnJlbnRUYXJnZXQubmFtZSxcbiAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOmUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmRhdGF0eXBlLnZhbHVlLFxuICAgICAgICBxdWVyeVZhbHVlOiBcIj1cIixcbiAgICAgIH07XG4gICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSB3aGVyZUNsYXVzZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1trZXl0eXBlXTogW3doZXJlQ2xhdXNlXSB9KTtcbiAgICB9XG4gICAgaWYgKHdoZXJlQ2xhdXNlU3RhdGUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBxdWVyeUluZGV4ID0gd2hlcmVDbGF1c2VTdGF0ZS5tYXAoKG9iaikgPT4gb2JqLmlkKS5pbmRleE9mKGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHdoZXJlQ2xhdXNlU3RhdGUubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSkge1xuICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBlLmN1cnJlbnRUYXJnZXQubmFtZSxcbiAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBvYmogPSB0aGlzLnJlbW92ZVZhbHVlRnJvbU9iamVjdChvYmopO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gd2hlcmVDbGF1c2VTdGF0ZS5maWx0ZXIoKGEpID0+IGEuaWQgIT09IG9iai5pZCk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7cmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTt9KTtcbiAgICAgICAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZSA9IG9iajtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgd2hlcmVDbGF1c2UgPSB7XG4gICAgICAgICAgaWQ6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlLFxuICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBlLmN1cnJlbnRUYXJnZXQubmFtZSxcbiAgICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmRhdGF0eXBlLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgICAvLyB3aGVyZUNsYXVzZSA9IHRoaXMucmVtb3ZlVmFsdWVGcm9tT2JqZWN0KHdoZXJlQ2xhdXNlKVxuICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSB3aGVyZUNsYXVzZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2tleXR5cGVdOiBbLi4ud2hlcmVDbGF1c2VTdGF0ZSx3aGVyZUNsYXVzZV0sfSk7XG4gICAgICAgIHdoZXJlQ2xhdXNlU3RhdGUuc29ydChmdW5jdGlvbiAoYSwgYikge3JldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDF9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmllbGQ6IGUuY3VycmVudFRhcmdldC5uYW1lIH0sICgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50V2hlcmVDbGF1c2UpdGhpcy5tYW5pcHVsYXRlRmllbGRRdWVyeShjdXJyZW50V2hlcmVDbGF1c2UucXVlcnlWYWx1ZSxjdXJyZW50V2hlcmVDbGF1c2UuaWQsdHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBmb3IgY2FsbGVkIG9uIGRyb3Agc2VsZWN0IGxpc3RcbiAgYXN5bmMgZ2V0UXVlcnkoZSwgdHlwZSA9IFwic2luZ2xlXCIpIHtcbiAgICBjb25zdCBjbGlja2VkUXVlcnlUYWJsZUlkID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWU7XG4gICAgY29uc3QgY3VycmVudFRhcmdldE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQubmFtZTtcbiAgICB0aGlzLm1hbmlwdWxhdGVGaWVsZFF1ZXJ5KGN1cnJlbnRUYXJnZXROYW1lLCBjbGlja2VkUXVlcnlUYWJsZUlkLCB0eXBlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtxdWVyeUNoYW5nZWQ6ey4uLnRoaXMuc3RhdGUucXVlcnlDaGFuZ2VkLFtjbGlja2VkUXVlcnlUYWJsZUlkXTp0cnVlfX0pXG4gIH1cblxuICBhc3luYyBtYW5pcHVsYXRlRmllbGRRdWVyeShcbiAgICBjdXJyZW50VGFyZ2V0TmFtZTogc3RyaW5nLFxuICAgIGNsaWNrZWRRdWVyeVRhYmxlSWQ6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmdcbiAgKSB7XG4gICAgbGV0IHF1ZXJ5SW5kZXggPSAtMTtcbiAgICBsZXQgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZSA9IFwiIFwiO1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBjb25zdCBrZXl0eXBlID0gdHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XG4gICAgaWYgKHRoaXMuc3RhdGVba2V5dHlwZV0ubGVuZ3RoKSB7XG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZVtrZXl0eXBlXVxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoY2xpY2tlZFF1ZXJ5VGFibGVJZCk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xuICAgICAgICAgICAgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZSA9IG9iai5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICAgIC8vIG9iaiA9IHRoaXMucmVtb3ZlVmFsdWVGcm9tT2JqZWN0KG9iailcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBxdWVyeVZhbHVlOiBjdXJyZW50VGFyZ2V0TmFtZSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IFtrZXl0eXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN1cnJlbnRUYXJnZXROYW1lID09PSBcIklOXCIgfHwgY3VycmVudFRhcmdldE5hbWUgPT09IFwiTk9UX0lOXCIpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9IGlzIG5vdCBudWxsYDtcbiAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9YF07XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBmLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgICAgICAgICByZXN1bHRzLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbFRoaXJkUXVlcnkgPSBbXTtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBlbC5hdHRyaWJ1dGVzW2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGVdLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZWwuYXR0cmlidXRlc1tjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlXSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxUaGlyZFF1ZXJ5WzBdLnZhbHVlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAgICAgICBhLmxhYmVsIDwgYi5sYWJlbCA/IC0xIDogYS5sYWJlbCA+IGIubGFiZWwgPyAxIDogMFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsVGhpcmRRdWVyeS5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGEudmFsdWUgLSBiLnZhbHVlIDwgMCA/IC0xIDogYS52YWx1ZSA9PT0gYi52YWx1ZSA/IDAgOiAxXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5dHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIG9iaiA9IHRoaXMucmVtb3ZlVmFsdWVGcm9tT2JqZWN0KG9iailcbiAgICAgICAgICAgICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgaWZJbk9yTm90SW5RdWVyeVZhbHVlOiBkZXRhaWxUaGlyZFF1ZXJ5IH07XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChrZXl0eXBlID09PSBcIndoZXJlQ2xhdXNlU2V0XCIpIHtcbiAgICAgIGlmIChuZXdXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5hZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrKFxuICAgICAgICAgIGNsaWNrZWRRdWVyeVRhYmxlSWQsXG4gICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0UXVlcnlTZXQoZSwgdHlwZSA9IFwic2luZ2xlXCIpIHtcbiAgICBjb25zdCBjbGlja2VkUXVlcnlUYWJsZUlkID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWU7XG4gICAgY29uc3QgY3VycmVudFRhcmdldE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQubmFtZTtcbiAgICB0aGlzLm1hbmlwdWxhdGVGaWVsZFF1ZXJ5KGN1cnJlbnRUYXJnZXROYW1lLCBjbGlja2VkUXVlcnlUYWJsZUlkLCBcInNldFwiKTtcbiAgICB0aGlzLnNldFN0YXRlKHtxdWVyeUNoYW5nZWQ6ey4uLnRoaXMuc3RhdGUucXVlcnlDaGFuZ2VkLFtjbGlja2VkUXVlcnlUYWJsZUlkXTp0cnVlfX0pXG4gIH1cblxuICAvL1RPRE8gbGEgc2VuZFF1ZXJ5IGFuZHLDoCByaXNpc3RlbWF0YSBxdWFuZG8gc2kgYWdnaXVuZ2Vyw6Agb2x0cmUgYWxsJ2VzcHJlc3Npb25lIGFuY2hlIGlsIHNldCBkaSBlc3ByZXNzaW9uaVxuICAvLyBwZXJjaMOpIG9yYSBwZXIgbCdBTkQgZmEgaWwgY2ljbG8gZm9yIHN1IG9nbmkgd2hlcmUgaW5zZXJpdGEgbmVsbCdhcnJheSBtYSBkb3BvIHNhcsOgIG5lY2Vzc2FyaW8gc2NvbXBvcnJlIHBlciBjcmVhcmUgbGUgZXNwcmVzc2lvbmlcblxuICAvLyBzdGVwMVxuICBhc3luYyBzZW5kUXVlcnkoKSB7XG4gICAgdGhpcy5xdWVyeUFycmF5ID0gW107XG4gICAgdGhpcy5vdXRmaWVsZHMgPSBbXTtcbiAgICBjb25zdCBjaGVja2VkUXVlcnkgPSBbXG4gICAgICBcImlzIG51bGxcIixcbiAgICAgIFwiaXMgbm90IG51bGxcIixcbiAgICAgIFwiSU5cIixcbiAgICAgIFwiTk9UX0lOXCIsXG4gICAgICBcImluY2x1ZGVkXCIsXG4gICAgICBcImlzX25vdF9pbmNsdWRlZFwiLFxuICAgIF07XG4gICAgY29uc3QgbGlrZWx5UXVlcnkgPSBbXCJMSUtFJVwiLCBcIiVMSUtFXCIsIFwiJUxJS0UlXCIsIFwiTk9UIExJS0VcIl07XG4gICAgaWYgKHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuQW5kT3IgPT09IFwiQU5EXCIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZm9yRWFjaCgoZWwsIGlkKSA9PiB7XG4gICAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XG4gICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xuICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpcyBudWxsXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpcyBub3QgbnVsbFwiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgZWwuY2hlY2tlZExpc3QuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHxcbiAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICBmaXJzdFR4dDogZWwuZmlyc3RUeHQudmFsdWUsXG4gICAgICAgICAgICAgIHNlY29uZFR4dDogZWwuc2Vjb25kVHh0LnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFjaGVja2VkUXVlcnkuaW5jbHVkZXMocXVlcnlWYWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXdcbiAgICAgICAgICAgICAgICAgIC53aGVuTGF5ZXJWaWV3KGYpXG4gICAgICAgICAgICAgICAgICAudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAvL3N0ZXAgMiBzdGFydCBxdWVyeWluZ1xuICAgICAgICAgICAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuQW5kT3IsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgZlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnk6IGFueSA9IFtdO1xuICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5mb3JFYWNoKChlbCwgaWQpID0+IHtcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgICAgICAgIGxldCBhdHRyaWJ1dGVRdWVyeSA9IGVsLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgIGxldCBxdWVyeVZhbHVlID0gZWwucXVlcnlWYWx1ZTtcbiAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiaXMgbnVsbFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXMgbm90IG51bGxcIikge1xuICAgICAgICAgICAgbGV0IHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gJHtxdWVyeVZhbHVlfWA7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW47XG4gICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJJTlwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiTk9UX0lOXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICBlbC5jaGVja2VkTGlzdC5mb3JFYWNoKChlbCkgPT4gdmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnModmFsdWUpKSB7XG4gICAgICAgICAgICAgIGxldCBxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IElOICgke1xuICAgICAgICAgICAgICAgIFwiJ1wiICsgdmFsdWUuam9pbihcIicsICdcIikgKyBcIidcIlxuICAgICAgICAgICAgICB9KWA7XG4gICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbjtcbiAgICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IElOICgke3ZhbHVlLmpvaW4oXCIsXCIpfSlgO1xuICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW47XG4gICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpc19ub3RfaW5jbHVkZWRcIikge1xuICAgICAgICAgICAgbGV0IHF1ZXJ5SW47XG4gICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCJcbiAgICAgICAgICAgICAgPyAocXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSA+ICR7ZWwuZmlyc3RUeHQudmFsdWV9IEFORCAke2F0dHJpYnV0ZVF1ZXJ5fSA8ICR7ZWwuc2Vjb25kVHh0LnZhbHVlfWApXG4gICAgICAgICAgICAgIDogKHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gPCAke2VsLmZpcnN0VHh0LnZhbHVlfSBPUiAke2F0dHJpYnV0ZVF1ZXJ5fSA+ICR7ZWwuc2Vjb25kVHh0LnZhbHVlfWApO1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUluO1xuICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFjaGVja2VkUXVlcnkuaW5jbHVkZXMocXVlcnlWYWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgaWYgKGxpa2VseVF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gaGVscGVyLmxpa2VseVF1ZXJ5KFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcXVlcnlJbnB1dCA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9ICcke3ZhbHVlfSdgO1xuICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbnB1dDtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW5wdXQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBxdWVyeUlucHV0ID0gYCR7YXR0cmlidXRlUXVlcnl9ICR7cXVlcnlWYWx1ZX0gJHt2YWx1ZX1gO1xuICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbnB1dDtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW5wdXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlld1xuICAgICAgICAgICAgICAgICAgLndoZW5MYXllclZpZXcoZilcbiAgICAgICAgICAgICAgICAgIC50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeVJlcXVlc3Q6IFwiT1JcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYXllcjogZixcbiAgICAgICAgICAgICAgICAgICAgICBBbmRPcjogdGhpcy5zdGF0ZS5BbmRPcixcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgICAgdGhpcy5xdWVyeUFycmF5ID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBuZXcgUXVlcnkoKSxcbiAgICAgICAgICAgICAgICBxdWVyeVJlcXVlc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgbGF5ZXI6IGYsXG4gICAgICAgICAgICAgICAgQW5kT3I6IHRoaXMuc3RhdGUuQW5kT3IsXG4gICAgICAgICAgICAgICAgZmllbGQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc291cmNlOiBcInNldFF1ZXJ5XCIsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSB9KTtcbiAgICAgIHRoaXMucmV0dXJuVG9PcmlnaW5hbEV4dGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFF1ZXJ5Q29uc3RydWN0b3IgPSAocXVlcnlSZXF1ZXN0LCBmaXJzdFF1ZXJ5LCBzZWNvbmRRdWVyeVRhcmdldCkgPT4ge1xuICAgIHN3aXRjaCAocXVlcnlSZXF1ZXN0KSB7XG4gICAgICBjYXNlIFwiTElLRSVcIjpcbiAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IExJS0UgJyR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xuICAgICAgY2FzZSBcIiVMSUtFXCI6XG4gICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgIGNhc2UgXCIlTElLRSVcIjpcbiAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgIGNhc2UgXCJOT1QgTElLRVwiOlxuICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gTk9UIExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgIGNhc2UgXCJpcyBudWxsXCI6XG4gICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBpcyBudWxsYDtcbiAgICAgIGNhc2UgXCJpcyBub3QgbnVsbFwiOlxuICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gaXMgbm90IG51bGxgO1xuICAgICAgY2FzZSBcIklOXCI6XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7XG4gICAgICAgICAgICBcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJcbiAgICAgICAgICB9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tQYXJlbnRoZXNpcyhzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZpZWRWYWx1ZSA9IHRoaXMubG9vcFRvR2V0U3RyaW5nKHNlY29uZFF1ZXJ5VGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzdHJpbmdGaWVkVmFsdWV9KWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgXCJOT1RfSU5cIjpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybiBgTk9UICR7Zmlyc3RRdWVyeX0gSU4gKCR7XG4gICAgICAgICAgICBcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJcbiAgICAgICAgICB9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tQYXJlbnRoZXNpcyhzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZpZWRWYWx1ZSA9IHRoaXMubG9vcFRvR2V0U3RyaW5nKHNlY29uZFF1ZXJ5VGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiBgTk9UICAke2ZpcnN0UXVlcnl9IElOICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBOT1QgICR7Zmlyc3RRdWVyeX0gSU4gKCR7c2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIil9KWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlIFwiaW5jbHVkZWRcIjpcbiAgICAgICAgcmV0dXJuIGAoJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuZmlyc3RUeHR9IEFORCAke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5zZWNvbmRUeHR9KWA7XG4gICAgICBjYXNlIFwiaXNfbm90X2luY2x1ZGVkXCI6XG4gICAgICAgIHJldHVybiBgKCR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBPUiAke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5zZWNvbmRUeHR9KWA7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAnJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJHtzZWNvbmRRdWVyeVRhcmdldH1gO1xuICAgICAgICAgIGNvbnN0IGJyYWNrZXRzID0gW1wiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCJdO1xuICAgICAgICAgIGlmIChicmFja2V0cy5pbmNsdWRlcyhzZWNvbmRRdWVyeVRhcmdldC5jaGFyQXQoMCkpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSBKU09OLnN0cmluZ2lmeShzZWNvbmRRdWVyeVRhcmdldCkucmVwbGFjZSgvXCIvZywgYCdgKVxuICAgICAgICAgICAgcXVlcnlTdHJpbmc9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAoJHtzdHJpbmdGaWVkVmFsdWV9KWA7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBxdWVyeVN0cmluZyA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAnJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xuICAgICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHNlbmRRdWVyeVNldCgpIHtcbiAgICBjb25zdCBjaGVja2VkUXVlcnkgPSBbXG4gICAgICBcImlzIG51bGxcIixcbiAgICAgIFwiaXMgbm90IG51bGxcIixcbiAgICAgIFwiSU5cIixcbiAgICAgIFwiTk9UX0lOXCIsXG4gICAgICBcImluY2x1ZGVkXCIsXG4gICAgICBcImlzX25vdF9pbmNsdWRlZFwiLFxuICAgIF07XG4gICAgY29uc3QgbGlrZWx5UXVlcnkgPSBbXCJMSUtFJVwiLCBcIiVMSUtFXCIsIFwiJUxJS0UlXCIsIFwiTk9UIExJS0VcIl07XG4gICAgbGV0IHNldFF1ZXJ5U3RyaW5nID0gbnVsbDtcbiAgICBsZXQgb3V0RmllbGRzID0gW107XG4gICAgaWYgKHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoKSB7XG4gICAgICB0aGlzLnN0YXRlLlNldEJsb2NrLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrSWQgPSBibG9jaz8uYmxvY2tJZDtcbiAgICAgICAgY29uc3Qgd2hlcmVDbGF1c2VTZXQgPSBibG9ja1tgJHtibG9ja0lkfWBdO1xuICAgICAgICBjb25zdCBBbmRPclNldCA9IGJsb2NrPy5BbmRPclNldDtcbiAgICAgICAgaWYgKEFuZE9yU2V0ID09PSBcIkFORFwiKSB7XG4gICAgICAgICAgaWYgKHdoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0LmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVRdWVyeSA9IGVsLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IGVsLnF1ZXJ5VmFsdWU7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiaXMgbnVsbFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXMgbm90IG51bGxcIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBlbC5jaGVja2VkTGlzdFNldC5mb3JFYWNoKChlbCkgPT4gdmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8XG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpc19ub3RfaW5jbHVkZWRcIlxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHh0OiBlbC5maXJzdFR4dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFR4dDogZWwuc2Vjb25kVHh0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IHRoaXMuc2V0UXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyA9IHRoaXMuc2V0UXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaiA8IHdoZXJlQ2xhdXNlU2V0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gXCIgIFwiICsgQW5kT3JTZXQgKyBcIiAgXCI7XG4gICAgICAgICAgICAgIG91dEZpZWxkcy5wdXNoKGAke2F0dHJpYnV0ZVF1ZXJ5fWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeTogYW55ID0gW107XG4gICAgICAgICAgaWYgKHdoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0LmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVRdWVyeSA9IGVsLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IGVsLnF1ZXJ5VmFsdWU7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJJTlwiICYmIGVsLmNoZWNrZWRMaXN0U2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgZWwuY2hlY2tlZExpc3RTZXQuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiICYmXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWQubGVuZ3RoXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWQuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHxcbiAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImlzX25vdF9pbmNsdWRlZFwiXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgZmlyc3RUeHQ6IGVsLmZpcnN0VHh0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVHh0OiBlbC5zZWNvbmRUeHQudmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHNldFF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gdGhpcy5zZXRRdWVyeUNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nID0gdGhpcy5zZXRRdWVyeUNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChqIDwgd2hlcmVDbGF1c2VTZXQubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyArPSBcIiAgXCIgKyBBbmRPclNldCArIFwiICBcIjtcbiAgICAgICAgICAgICAgb3V0RmllbGRzLnB1c2goYCR7YXR0cmlidXRlUXVlcnl9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldFF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuU2V0QmxvY2tbaSArIDFdKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0QmxvY2sgPSB0aGlzLnN0YXRlLlNldEJsb2NrW2kgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRCbG9ja0lkID0gbmV4dEJsb2NrPy5ibG9ja0lkO1xuICAgICAgICAgICAgY29uc3QgbmV4dFdoZXJlQ2xhdXNlU2V0ID0gbmV4dEJsb2NrW2Ake25leHRCbG9ja0lkfWBdO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoaSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoID49IDIgJiZcbiAgICAgICAgICAgICAgICBuZXh0V2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aCkgfHxcbiAgICAgICAgICAgICAgIVtcIihcIl0uaW5jbHVkZXMoc2V0UXVlcnlTdHJpbmdbMF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgPSBcIihcIiArIHNldFF1ZXJ5U3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpIDwgdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgIG5leHRXaGVyZUNsYXVzZVNldD8ubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gXCIgKSBcIiArIHRoaXMuc3RhdGUuQW5kT3IgKyBcIiAoIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5TZXRCbG9ja1tpIC0gMV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZCbG9jayA9IHRoaXMuc3RhdGUuU2V0QmxvY2tbaSAtIDFdO1xuICAgICAgICAgICAgY29uc3QgcHJldkJsb2NrSWQgPSBwcmV2QmxvY2s/LmJsb2NrSWQ7XG4gICAgICAgICAgICBjb25zdCBwcmV2V2hlcmVDbGF1c2VTZXQgPSBwcmV2QmxvY2tbYCR7cHJldkJsb2NrSWR9YF07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoID49IDIgJiZcbiAgICAgICAgICAgICAgaSA9PT0gdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgIHByZXZXaGVyZUNsYXVzZVNldC5sZW5ndGhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyA9IHNldFF1ZXJ5U3RyaW5nICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0UXVlcnlTdHJpbmcsIG91dEZpZWxkcyB9O1xuICB9XG5cbiAgYXN5bmMgdGhpcmRRdWVyeShlKSB7XG4gICAgY29uc3QgY3VycmVudFF1ZXJ5VGVzdCA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDtcbiAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgdGhpcy5pblF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRGaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50U2Vjb25kUXVlcnksXG4gICAgICAgICAgICBjdXJyZW50UXVlcnlUZXN0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBvbkNoYW5nZVNlbGVjdExheWVyKGUpIHtcbiAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZi50aXRsZSA9PT0gZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHJlc3VsdHNMYXllclNlbGVjdGVkOiBmLFxuICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0VGV4dDogZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkSWQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLCBcImNoZWNrZWRMYXllcnNcIiwgW2YuaWRdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkVGFibGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudElkID0gdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWJsZXM6IFtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS50YWJsZXMsXG4gICAgICAgIHsgaWQ6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyLCBkZWxldGVkOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIHRhYmxlQ291bnRlcjogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgKyAxLFxuICAgICAgZHJvcERvd25zOiB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zLCBbY3VycmVudElkXTogZmFsc2UgfSxcbiAgICB9KTtcbiAgICBjb25zdCB0YWJsZUxlbmd0aCA9IHRoaXMuc3RhdGUudGFibGVzXG4gICAgICAubWFwKChlbCwgaWR4KSA9PiAoZWwuZGVsZXRlZCA9PSBmYWxzZSA/IGlkeCA6IFwiXCIpKVxuICAgICAgLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcbiAgICBjb25zdCB0YWJsZXNTZXRMZW5ndGggPSB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aDtcbiAgICBpZiAodGFibGVMZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRhYmxlc1NldExlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgYWRkVHdvVGFibGUgPSAoYmxvY2tJZCkgPT4ge1xuICAgIGxldCBuZXdTdGF0ZUJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xuICAgIGNvbnN0IGluZGV4ID0gbmV3U3RhdGVCbG9jay5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uYmxvY2tJZCA9PT0gYmxvY2tJZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgY3VycmVudEJsb2NrID0gbmV3U3RhdGVCbG9ja1tpbmRleF07XG4gICAgICBjb25zdCBjdXJyZW50SWQgPSBjdXJyZW50QmxvY2tbXCJ0YWJsZUNvdW50ZXJTZXRcIl07XG4gICAgICBjdXJyZW50QmxvY2tbXCJ0YWJsZXNTZXRcIl0gPSBbXG4gICAgICAgIC4uLmN1cnJlbnRCbG9ja1tcInRhYmxlc1NldFwiXSxcbiAgICAgICAgeyBpZDogY3VycmVudElkLCBkZWxldGVkOiBmYWxzZSB9LFxuICAgICAgXTtcbiAgICAgIGN1cnJlbnRCbG9ja1tcImRyb3BEb3duc1NldFwiXSA9IHtcbiAgICAgICAgLi4uY3VycmVudEJsb2NrW1wiZHJvcERvd25zU2V0XCJdLFxuICAgICAgICBbY3VycmVudElkXTogZmFsc2UsXG4gICAgICB9O1xuICAgICAgY3VycmVudEJsb2NrW1widGFibGVDb3VudGVyU2V0XCJdID0gY3VycmVudEJsb2NrW1widGFibGVDb3VudGVyU2V0XCJdICsgMTtcbiAgICAgIG5ld1N0YXRlQmxvY2tbaW5kZXhdID0gY3VycmVudEJsb2NrO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS50YWJsZXMubGVuZ3RoID4gMCkgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IGZhbHNlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBTZXRCbG9jazogbmV3U3RhdGVCbG9jayB9KTtcbiAgfTtcblxuICBhZGRCbG9jayA9ICgpID0+IHtcbiAgICBsZXQgaWRPbmUgPSB0aGlzLnN0YXRlLlNldEJsb2NrLnRhYmxlQ291bnRlclNldCA/PyAwO1xuICAgIGxldCBpZFR3byA9IGlkT25lICsgMTtcbiAgICBjb25zdCBjdXJyZW50SWQgPSBpZE9uZTtcbiAgICBjb25zdCBuZXh0Q3VycmVudElkID0gaWRUd287XG4gICAgbGV0IG5ld0Jsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xuICAgIG5ld0Jsb2NrLnB1c2goe1xuICAgICAgYmxvY2tJZDogdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGgsXG4gICAgICBbYCR7dGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGh9YF06IFtdLFxuICAgICAgdGFibGVzU2V0OiBbXG4gICAgICAgIHsgaWQ6IGlkT25lLCBkZWxldGVkOiBmYWxzZSB9LFxuICAgICAgICB7IGlkOiBpZFR3bywgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICB0YWJsZUNvdW50ZXJTZXQ6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyU2V0ICsgMixcbiAgICAgIGRyb3BEb3duc1NldDoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCxcbiAgICAgICAgW2Ake2N1cnJlbnRJZH0tJHt0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXG4gICAgICAgIFtgJHtuZXh0Q3VycmVudElkfS0ke3RoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RofWBdOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBBbmRPclNldDogdGhpcy5zdGF0ZS5BbmRPclNldCxcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFNldEJsb2NrOiBuZXdCbG9jayxcbiAgICAgIGRyb3BEb3duc1NldDoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCxcbiAgICAgICAgW2Ake2N1cnJlbnRJZH0tJHt0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXG4gICAgICAgIFtgJHtuZXh0Q3VycmVudElkfS0ke3RoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RofWBdOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBpZih0aGlzLnN0YXRlLnRhYmxlcy5sZW5ndGggPiAwKXRoaXMuc2V0U3RhdGUoe3Nob3dBZGRTZWxlY3Q6ZmFsc2V9KTtcbiAgICBjb25zdCB0YWJsZUxlbmd0aCA9IHRoaXMuc3RhdGUudGFibGVzXG4gICAgICAubWFwKChlbCwgaWR4KSA9PiAoZWwuZGVsZXRlZCA9PSBmYWxzZSA/IGlkeCA6IFwiXCIpKVxuICAgICAgLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcbiAgICBjb25zdCB0YWJsZXNTZXRMZW5ndGggPSB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aDtcblxuICAgIGlmICh0YWJsZUxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlVGFibGUgPSAoaWQpID0+IHtcbiAgICBsZXQgY29waWVkVGFibGUgPSBbLi4udGhpcy5zdGF0ZS50YWJsZXNdO1xuICAgIGNvcGllZFRhYmxlID0gY29waWVkVGFibGUubWFwKChlbCkgPT4ge1xuICAgICAgaWYgKGVsLmlkID09PSBpZCllbC5kZWxldGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9KTtcbiAgICBjb25zdCBuZXdUYWJsZXMgPSBjb3BpZWRUYWJsZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFibGVDb3VudGVyOiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlciAtIDEgfSk7XG4gICAgY29uc3QgY29waWVkV2hlcmVDbGF1c2VzID0gWy4uLnRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXTtcbiAgICBjb25zdCBkZWxldGVkV2hlcmVDbGF1c2VzID0gY29waWVkV2hlcmVDbGF1c2VzLmZpbHRlcihcbiAgICAgIChlbCkgPT4gZWwuaWQgIT09IGlkLnRvU3RyaW5nKClcbiAgICApO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFibGVzOiBuZXdUYWJsZXMsXG4gICAgICB3aGVyZUNsYXVzZXM6IGRlbGV0ZWRXaGVyZUNsYXVzZXMsXG4gICAgICB0YWJsZUNvdW50ZXI6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyIC0gMSxcbiAgICAgIHNlbGVjdGVkSWQ6IGlkLFxuICAgIH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLnRhYmxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aGVyZUNsYXVzZXM6IFtdLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdGFibGVMZW5ndGggPSB0aGlzLnN0YXRlLnRhYmxlc1xuICAgICAgLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSlcbiAgICAgIC5maWx0ZXIoU3RyaW5nKS5sZW5ndGg7XG4gICAgY29uc3QgdGFibGVzU2V0TGVuZ3RoID0gdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGg7XG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDIgJiYgdGFibGVzU2V0TGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBpZiAodGFibGVMZW5ndGggPT0gMCAmJiB0YWJsZXNTZXRMZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAodGFibGVMZW5ndGggPT0gMSAmJiB0YWJsZXNTZXRMZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZUJsb2NrID0gKGJsb2NrSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGNvcGllZEJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xuICAgIGNvbnN0IGNvcGllZFdoZXJlY2xhdXNlU2V0ID0gWy4uLnRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXRdO1xuICAgIGNvbnN0IGluZGV4ID0gY29waWVkQmxvY2suZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJsb2NrSWQgPT09IGJsb2NrSWQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvcGllZEJsb2NrLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGNvcGllZEJsb2NrIH0pO1xuICAgIH1cbiAgICBpZiAoY29waWVkV2hlcmVjbGF1c2VTZXQ/Lmxlbmd0aCkge1xuICAgICAgY29waWVkV2hlcmVjbGF1c2VTZXQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkLnNwbGl0KFwiLVwiKVsxXSA9PT0gYmxvY2tJZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgd2hlcmVDbGF1c2VTZXQ6IGNvcGllZFdoZXJlY2xhdXNlU2V0IH0pO1xuICAgIH1cbiAgICBjb25zdCB0YWJsZUxlbmd0aCA9IHRoaXMuc3RhdGUudGFibGVzXG4gICAgICAubWFwKChlbCwgaWR4KSA9PiAoZWwuZGVsZXRlZCA9PSBmYWxzZSA/IGlkeCA6IFwiXCIpKVxuICAgICAgLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcbiAgICBpZiAodGFibGVMZW5ndGggPT0gMSAmJiBjb3BpZWRCbG9jay5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZUJsb2NrVGFibGUgPSAodGFibGVCbG9ja0lkOiBzdHJpbmcsIGJsb2NrSWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRhYmxlSWQgPSB0YWJsZUJsb2NrSWQuc3BsaXQoXCItXCIpWzBdO1xuICAgIGNvbnN0IGNvcGllZEJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xuICAgIGNvbnN0IGNvcGllZFdoZXJlY2xhdXNlU2V0ID0gWy4uLnRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXRdO1xuICAgIGNvbnN0IGN1cnJlbnRCbG9jSW5kZXggPSBjb3BpZWRCbG9jay5maW5kSW5kZXgoXG4gICAgICAoYmxvY2spID0+IGAke2Jsb2NrLmJsb2NrSWR9YCA9PT0gYmxvY2tJZFxuICAgICk7XG4gICAgbGV0IGN1cnJlbnRCbG9jaztcbiAgICBpZiAoY3VycmVudEJsb2NJbmRleCAhPT0gLTEpIGN1cnJlbnRCbG9jayA9IGNvcGllZEJsb2NrW2N1cnJlbnRCbG9jSW5kZXhdO1xuICAgIGlmIChjdXJyZW50QmxvY2spIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRXaGVyZUNsYXVzZVNldCA9IGN1cnJlbnRCbG9ja1tibG9ja0lkXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWJsZVNldHMgPSBjdXJyZW50QmxvY2tbXCJ0YWJsZXNTZXRcIl07XG4gICAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29waWVkQ3VycmVudFdoZXJlQ2xhdXNlU2V0ID0gWy4uLmN1cnJlbnRXaGVyZUNsYXVzZVNldF07XG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlU2V0SW5kZXggPSBjb3BpZWRDdXJyZW50V2hlcmVDbGF1c2VTZXQuZmluZEluZGV4KFxuICAgICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gdGFibGVCbG9ja0lkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHdoZXJlQ2xhdXNlU2V0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY29waWVkQ3VycmVudFdoZXJlQ2xhdXNlU2V0LnNwbGljZSh3aGVyZUNsYXVzZVNldEluZGV4LCAxKTtcbiAgICAgICAgICBjdXJyZW50QmxvY2tbYmxvY2tJZF0gPSBjb3BpZWRDdXJyZW50V2hlcmVDbGF1c2VTZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50VGFibGVTZXRzPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29waWVkVGFibGVTZXRzID0gWy4uLmN1cnJlbnRUYWJsZVNldHNdO1xuICAgICAgICBjb25zdCB0YWJsZVNldEluZGV4ID0gY29waWVkVGFibGVTZXRzLmZpbmRJbmRleChcbiAgICAgICAgICAoaXRlbSkgPT4gYCR7aXRlbS5pZH1gID09PSB0YWJsZUlkXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0YWJsZVNldEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGNvcGllZFRhYmxlU2V0c1t0YWJsZVNldEluZGV4XVtcImRlbGV0ZWRcIl0gPSB0cnVlO1xuICAgICAgICAgIC8vIGNvcGllZFRhYmxlU2V0cy5zcGxpY2UodGFibGVTZXRJbmRleCwxKTtcbiAgICAgICAgICBjdXJyZW50QmxvY2tbXCJ0YWJsZXNTZXRcIl0gPSBjb3BpZWRUYWJsZVNldHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvcGllZEJsb2NrW2N1cnJlbnRCbG9jSW5kZXhdID0gY3VycmVudEJsb2NrO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNldEJsb2NrOiBjb3BpZWRCbG9jayB9KTtcbiAgICB9XG4gICAgaWYgKGNvcGllZFdoZXJlY2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gY29waWVkV2hlcmVjbGF1c2VTZXQuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlkID09PSB0YWJsZUJsb2NrSWQpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvcGllZFdoZXJlY2xhdXNlU2V0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGVyZUNsYXVzZVNldDogY29waWVkV2hlcmVjbGF1c2VTZXQgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZUJsb2NrQWxsID0gKGJsb2NrRGF0YSkgPT4ge307XG5cbiAgdGV4dElucHV0SGFuZGxlciA9IChlLCBxdWVyeVR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XG4gICAgbGV0IHR4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICBsZXQgY3VycmVudFRhYmxlSWQgPSBlLnRhcmdldC5hdHRyaWJ1dGVzWzBdLnZhbHVlO1xuICAgIHRoaXMucXVlcnlUZXh0Q29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCwgcXVlcnlUeXBlKTtcbiAgfTtcblxuICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIgPSAoZSwgcXVlcnlUeXBlID0gXCJzaW5nbGVcIikgPT4ge1xuICAgIGxldCB0eHQgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcbiAgICBsZXQgaW5wdXQgPSBcImZpcnN0XCI7XG4gICAgdGhpcy5xdWVyeVRleHRJbmNsdWRlZENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIGlucHV0LCBxdWVyeVR5cGUpO1xuICB9O1xuXG4gIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIgPSAoZSwgcXVlcnlUeXBlID0gXCJzaW5nbGVcIikgPT4ge1xuICAgIGxldCB0eHQgPSBlLnRhcmdldC52YWx1ZS50cmltKClcbiAgICBsZXQgY3VycmVudFRhYmxlSWQgPSBlLnRhcmdldC5hdHRyaWJ1dGVzWzBdLnZhbHVlO1xuICAgIGxldCBpbnB1dCA9IFwic2Vjb25kXCI7XG4gICAgdGhpcy5xdWVyeVRleHRJbmNsdWRlZENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIGlucHV0LCBxdWVyeVR5cGUpO1xuICB9O1xuICAvLyB1bml2b2NvU2VsZWN0SGFuZGxlciA9IChlLCBxdWVyeVR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XG4gIC8vICAgbGV0IHR4dCA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudC50cmltKCk7XG4gIC8vICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMl0udmFsdWU7XG4gIC8vICAgdGhpcy5xdWVyeVRleHRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBxdWVyeVR5cGUpO1xuICAvLyB9O1xuXG4gIHVuaXZvY29TZWxlY3RIYW5kbGVyID0gKGN1cnJlbnRUYWJsZTp7dmFsdWU6YW55LHRhYmxlSWQ6c3RyaW5nfSwgcXVlcnlUeXBlID0gXCJzaW5nbGVcIikgPT4ge1xuICAgIGxldCB0eHQgPSBjdXJyZW50VGFibGUudmFsdWUudHJpbSgpO1xuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGN1cnJlbnRUYWJsZS50YWJsZUlkO1xuICAgIHRoaXMucXVlcnlUZXh0Q29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCwgcXVlcnlUeXBlKTtcbiAgfTtcblxuICBjb250YWluc0FueUxldHRlcnMgPSAoc3RyKSA9PiAvW2EtekEtWl0vLnRlc3Qoc3RyKTtcblxuICBxdWVyeVRleHRDb25zdHJ1Y3RvciA9ICh0eHQsIGN1cnJlbnRUYWJsZUlkLCBxdWVyeVR5cGUpID0+IHtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBsZXQgbmV3V2hlcmVTZXRDbGF1c2U7XG4gICAgY29uc3Qga2V5VHlwZSA9IHF1ZXJ5VHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XG4gICAgaWYgKHRoaXMuc3RhdGVba2V5VHlwZV0ubGVuZ3RoKSB7XG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZVtrZXlUeXBlXVxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoY3VycmVudFRhYmxlSWQpO1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXlUeXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGN1cnJlbnRUYWJsZUlkKSB7XG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgdmFsdWU6IHsgdHh0OiB0eHQgfSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXlUeXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IFtrZXlUeXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRUYWJsZUlkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhcbiAgICAgICAgICBjdXJyZW50VGFibGVJZCxcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3RvciA9ICh0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCwgcXVlcnlUeXBlKSA9PiB7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGNvbnN0IGtleVR5cGUgPSBxdWVyeVR5cGUgPT09IFwic2luZ2xlXCIgPyBcIndoZXJlQ2xhdXNlc1wiIDogXCJ3aGVyZUNsYXVzZVNldFwiO1xuICAgIGlmICh0aGlzLnN0YXRlW2tleVR5cGVdLmxlbmd0aCkge1xuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGVba2V5VHlwZV1cbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRUYWJsZUlkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5VHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBjdXJyZW50VGFibGVJZCkge1xuICAgICAgICAgICAgaW5wdXQgPT09IFwiZmlyc3RcIlxuICAgICAgICAgICAgICA/IChvYmogPSB7IC4uLm9iaiwgZmlyc3RUeHQ6IHsgdmFsdWU6IHR4dCB9IH0pXG4gICAgICAgICAgICAgIDogKG9iaiA9IHsgLi4ub2JqLCBzZWNvbmRUeHQ6IHsgdmFsdWU6IHR4dCB9IH0pO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXlUeXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IFtrZXlUeXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRUYWJsZUlkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhcbiAgICAgICAgICBjdXJyZW50VGFibGVJZCxcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZHJvcGRvd25JdGVtQ2xpY2sgPSAoZSwgdHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzJdLnZhbHVlO1xuICAgIGxldCBjbGlja2VkVmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgbGV0IGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGU7XG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGxldCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2U7XG4gICAgY29uc3Qga2V5dHlwZSA9IHR5cGUgPT09IFwic2luZ2xlXCIgPyBcIndoZXJlQ2xhdXNlc1wiIDogXCJ3aGVyZUNsYXVzZVNldFwiO1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlW2tleXR5cGVdXG4gICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgIC5pbmRleE9mKGNsaWNrZWRRdWVyeVRhYmxlSWQpO1xuICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBjbGlja2VkVmFsdWUgfTtcbiAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlW2tleXR5cGVdLmZpbHRlcihcbiAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG9iajtcbiAgICAgICAgICAvLyBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQudmFsdWUgPT09IFwidW5pdm9jb1wiKSB7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xuICAgICAgICAgICAgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZSA9IG9iai5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlld1xuICAgICAgICAgICAgICAgICAgICAud2hlbkxheWVyVmlldyhmKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9IGlzIG5vdCBudWxsYDtcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Y3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZX1gXTtcbiAgICAgICAgICAgICAgICAgICAgICBsYXllclZpZXcuZmlsdGVyID0geyB3aGVyZTogcXVlcnkud2hlcmUgfTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZi5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsVGhpcmRRdWVyeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IE9iamVjdC52YWx1ZXMoZWwuYXR0cmlidXRlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IE9iamVjdC52YWx1ZXMoZWwuYXR0cmlidXRlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxUaGlyZFF1ZXJ5WzBdLnZhbHVlWzBdICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsVGhpcmRRdWVyeS5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5sYWJlbCA8IGIubGFiZWwgPyAtMSA6IGEubGFiZWwgPiBiLmxhYmVsID8gMSA6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEudmFsdWUgLSBiLnZhbHVlIDwgMCA/IC0xIDogYS52YWx1ZSA9PT0gYi52YWx1ZSA/IDAgOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5dHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkID09PSBjbGlja2VkUXVlcnlUYWJsZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9iaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZJbk9yTm90SW5RdWVyeVZhbHVlOiBkZXRhaWxUaGlyZFF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk6IGNsaWNrZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBvYmo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmZpbHRlcigoYSkgPT4gYS5pZCAhPT0gb2JqLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBlLnRhcmdldC52YWx1ZSB9LCAoKSA9PiB7fSk7XG4gICAgaWYgKGtleXR5cGUgPT09IFwid2hlcmVDbGF1c2VTZXRcIikge1xuICAgICAgaWYgKGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSlcbiAgICAgICAgdGhpcy5hZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrKFxuICAgICAgICAgIGNsaWNrZWRRdWVyeVRhYmxlSWQsXG4gICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlXG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGRyb3BEb3duID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dE9wZW46IHRydWUgfSk7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXG4gICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgIC5pbmRleE9mKGlkLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICBpZiAoIW9iai5pc09wZW4pIHtcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpc09wZW46IHRydWUgfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpc09wZW46IGZhbHNlIH07XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBkcm9wRG93blNldCA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRPcGVuOiB0cnVlIH0pO1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0XG4gICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgIC5pbmRleE9mKGlkLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0Lm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xuICAgICAgICAgIGlmICghb2JqLmlzT3Blbikge1xuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlzT3BlbjogdHJ1ZSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LmZpbHRlcihcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFNldC5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogZmlsdGVyZWRXaGVyZUNsYXVzZVNldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgaXNPcGVuOiBmYWxzZSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LmZpbHRlcihcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZVNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2hlY2tCb3ggPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzQ2hlY2tlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWQsXG4gICAgfSk7XG4gIH07XG5cbiAgb25DaGFuZ2VDaGVja0JveCA9IChldmVudCkgPT4ge1xuICAgIGxldCBjdXJyZW50SWQgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5pZC52YWx1ZTtcbiAgICBsZXQgb2JqZWN0SWQgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy52YWx1ZS52YWx1ZTtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1xuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoY3VycmVudElkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgaWYgKCFvYmouY2hlY2tlZExpc3QpIHtcbiAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgIC4uLm9iaixcbiAgICAgICAgICAgICAgICBjaGVja2VkTGlzdDogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlOiBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IEFycmF5LmZyb20obmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcykpLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgaWZBbHJlYWR5Q2hlY2sgPSBvYmouY2hlY2tlZExpc3RcbiAgICAgICAgICAgICAgICAubWFwKChvYmopID0+IG9iai5jaGVja1ZhbHVlKVxuICAgICAgICAgICAgICAgIC5pbmRleE9mKGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICBpZiAoaWZBbHJlYWR5Q2hlY2sgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgICAgICBjaGVja2VkTGlzdDogW1xuICAgICAgICAgICAgICAgICAgICAuLi5vYmouY2hlY2tlZExpc3QsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlOiBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCA9PT0gb2JqLmlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG9iaiBvYmplY3QgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHVwZGF0ZWQgb2JqIG9iamVjdCB0byB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzKVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAvLyBGaW5kIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgIGNvbnN0IG9iaiA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbmQoKGEpID0+IGEuaWQgPT09IGN1cnJlbnRJZCk7XG4gICAgICAvLyBSZW1vdmUgdGhlIGNoZWNrVmFsdWUgZnJvbSB0aGUgY2hlY2tlZExpc3QgYXJyYXlcbiAgICAgIG9iai5jaGVja2VkTGlzdCA9IG9iai5jaGVja2VkTGlzdC5maWx0ZXIoXG4gICAgICAgIChhKSA9PiBhLmNoZWNrVmFsdWUgIT09IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWVcbiAgICAgICk7XG4gICAgICAvLyBVcGRhdGUgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maW5kSW5kZXgoXG4gICAgICAgIChhKSA9PiBhLmlkID09PSBjdXJyZW50SWRcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1tpbmRleF0gPSBvYmo7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgd2hlcmVDbGF1c2VzOiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcyxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMpKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayA9IChjdXJyZW50SWQsIGN1cnJlbnRXaGVyZUNsYXVzZSkgPT4ge1xuICAgIGNvbnN0IGJsb2NrSWQgPSBjdXJyZW50SWQuc3BsaXQoXCItXCIpWzFdO1xuICAgIGNvbnN0IGN1cnJlbnRTZXRCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBsZXQgY3VycmVudEJsb2NrSW5kZXggPSAtMTtcbiAgICBsZXQgY3VycmVudEJsb2NrO1xuICAgIGN1cnJlbnRCbG9ja0luZGV4ID0gY3VycmVudFNldEJsb2NrLmZpbmRJbmRleChcbiAgICAgIChpdGVtKSA9PiBgJHtpdGVtPy5ibG9ja0lkfWAgPT09IGJsb2NrSWRcbiAgICApO1xuICAgIGlmIChjdXJyZW50QmxvY2tJbmRleCAhPT0gLTEpXG4gICAgICBjdXJyZW50QmxvY2sgPSBjdXJyZW50U2V0QmxvY2tbY3VycmVudEJsb2NrSW5kZXhdO1xuICAgIGxldCBjdXJyZW50V2hlcmVTZXRDbGF1c2UgPSBudWxsO1xuICAgIGlmIChjdXJyZW50QmxvY2spIHtcbiAgICAgIGN1cnJlbnRXaGVyZVNldENsYXVzZSA9IGN1cnJlbnRCbG9ja1tgJHtibG9ja0lkfWBdO1xuICAgICAgaWYgKGN1cnJlbnRXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBpbmRleCA9IGN1cnJlbnRXaGVyZVNldENsYXVzZS5maW5kSW5kZXgoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRJZFxuICAgICAgICApO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY3VycmVudFdoZXJlU2V0Q2xhdXNlW2luZGV4XSA9IGN1cnJlbnRXaGVyZUNsYXVzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJyZW50V2hlcmVTZXRDbGF1c2UgPSBbXG4gICAgICAgICAgICAuLi5jdXJyZW50V2hlcmVTZXRDbGF1c2UsXG4gICAgICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UsXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50QmxvY2tbYmxvY2tJZF0gPSBjdXJyZW50V2hlcmVTZXRDbGF1c2U7XG4gICAgICAgIGN1cnJlbnRTZXRCbG9ja1tjdXJyZW50QmxvY2tJbmRleF0gPSBjdXJyZW50QmxvY2s7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBTZXRCbG9jazogY3VycmVudFNldEJsb2NrIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudEJsb2NrW2Jsb2NrSWRdID0gW2N1cnJlbnRXaGVyZUNsYXVzZV07XG4gICAgICAgIGN1cnJlbnRTZXRCbG9ja1tjdXJyZW50QmxvY2tJbmRleF0gPSBjdXJyZW50QmxvY2s7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBTZXRCbG9jazogY3VycmVudFNldEJsb2NrIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBvbkNoYW5nZUNoZWNrQm94U2V0ID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGxldCBjdXJyZW50SWQgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5pZC52YWx1ZTtcbiAgICBsZXQgb2JqZWN0SWQgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy52YWx1ZS52YWx1ZTtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0XG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgICAuaW5kZXhPZihjdXJyZW50SWQpO1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBjdXJyZW50SWQpIHtcbiAgICAgICAgICAgIGlmICghb2JqLmNoZWNrZWRMaXN0U2V0KSB7XG4gICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgICAgY2hlY2tlZExpc3RTZXQ6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZVNldCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZVNldC5wdXNoKG9iaik7XG4gICAgICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZVNldDtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogZmlsdGVyZWRXaGVyZUNsYXVzZVNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0KVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgaWZBbHJlYWR5Q2hlY2sgPSBvYmouY2hlY2tlZExpc3RTZXRcbiAgICAgICAgICAgICAgICAubWFwKChvYmopID0+IG9iai5jaGVja1ZhbHVlKVxuICAgICAgICAgICAgICAgIC5pbmRleE9mKGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICBpZiAoaWZBbHJlYWR5Q2hlY2sgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgICAgICBjaGVja2VkTGlzdFNldDogW1xuICAgICAgICAgICAgICAgICAgICAuLi5vYmouY2hlY2tlZExpc3RTZXQsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlOiBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkID09PSBvYmouaWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgb2JqIG9iamVjdCBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSB1cGRhdGVkIG9iaiBvYmplY3QgdG8gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0KVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAvLyBGaW5kIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgIGNvbnN0IG9iaiA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuZmluZCgoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkKTtcbiAgICAgIC8vIFJlbW92ZSB0aGUgY2hlY2tWYWx1ZSBmcm9tIHRoZSBjaGVja2VkTGlzdCBhcnJheVxuICAgICAgb2JqLmNoZWNrZWRMaXN0U2V0ID0gb2JqLmNoZWNrZWRMaXN0U2V0LmZpbHRlcihcbiAgICAgICAgKGEpID0+IGEuY2hlY2tWYWx1ZSAhPT0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZVxuICAgICAgKTtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuZmluZEluZGV4KFxuICAgICAgICAoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldFtpbmRleF0gPSBvYmo7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQsXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldCkpO1xuICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldCkpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobmV3V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlID0gbmV3V2hlcmVTZXRDbGF1c2UuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRJZFxuICAgICAgKTtcbiAgICAgIHRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhjdXJyZW50SWQsIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNoZWNrUGFyZW50aGVzaXModmFsOiBzdHJpbmcpIHtcbiAgICBsZXQgc3RhdHVzID0gZmFsc2U7XG4gICAgY29uc3QgYnJhY2tldHMgPSBbXCIoXCIsIFwiKVwiLCBcIltcIiwgXCJdXCIsIFwie1wiLCBcIn1cIl07XG4gICAgaWYgKGJyYWNrZXRzLmluY2x1ZGVzKHZhbC5jaGFyQXQoMCkpKSB7XG4gICAgICBzdGF0dXMgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xuICB9XG5cbiAgbG9vcFRvR2V0U3RyaW5nKHN0cmluZ0Fycjogc3RyaW5nW10pIHtcbiAgICBsZXQgbmV3U3RyaW5nID0gXCIgXCI7XG4gICAgaWYgKHN0cmluZ0Fyci5sZW5ndGgpIHtcbiAgICAgIG5ld1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHN0cmluZ0FyclswXSk7XG4gICAgICBuZXdTdHJpbmcgPSBuZXdTdHJpbmcucmVwbGFjZSgvXCIvZywgYCdgKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyaW5nQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5ld1N0cmluZ1ZhbCA9IEpTT04uc3RyaW5naWZ5KHN0cmluZ0FycltpXSkucmVwbGFjZSgvXCIvZywgYCdgKTtcbiAgICAgICAgbmV3U3RyaW5nICs9IFwiLFwiICsgbmV3U3RyaW5nVmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3U3RyaW5nO1xuICB9XG5cbiAgcXVlcnlDb25zdHJ1Y3RvciA9IChcbiAgICBsYXllclZpZXcsXG4gICAgZmlyc3RRdWVyeSxcbiAgICBxdWVyeVJlcXVlc3QsXG4gICAgc2Vjb25kUXVlcnlUYXJnZXQsXG4gICAgQW5kT3IsXG4gICAgY29ubmVjdG9yX2Z1bmN0aW9uLFxuICAgIGxheWVyLFxuICAgIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCJcbiAgKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBzZWNvbmRRdWVyeVRhcmdldDtcbiAgICBzd2l0Y2ggKHF1ZXJ5UmVxdWVzdCkge1xuICAgICAgY2FzZSBcIkxJS0UlXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XG4gICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIlTElLRVwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiJUxJS0UlXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTk9UIExJS0VcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBOT1QgTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaXMgbnVsbFwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IGlzIG51bGxgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaXMgbm90IG51bGxcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBpcyBub3QgbnVsbGA7XG4gICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJJTlwiOlxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtcbiAgICAgICAgICAgIFwiJ1wiICsgc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIicsICdcIikgKyBcIidcIlxuICAgICAgICAgIH0pYDtcbiAgICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5jaGVja1BhcmVudGhlc2lzKHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gdGhpcy5sb29wVG9HZXRTdHJpbmcoc2Vjb25kUXVlcnlUYXJnZXQpO1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzdHJpbmdGaWVkVmFsdWV9KWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7c2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIil9KWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk5PVF9JTlwiOlxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBgTk9UICR7Zmlyc3RRdWVyeX0gSU4gKCR7XG4gICAgICAgICAgICBcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJcbiAgICAgICAgICB9KWA7XG4gICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XG4gICAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICBBbmRPcixcbiAgICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tQYXJlbnRoZXNpcyhzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZpZWRWYWx1ZSA9IHRoaXMubG9vcFRvR2V0U3RyaW5nKHNlY29uZFF1ZXJ5VGFyZ2V0KTtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYE5PVCAgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzdHJpbmdGaWVkVmFsdWV9KWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYE5PVCAgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XG4gICAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICBBbmRPcixcbiAgICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaW5jbHVkZWRcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgKCR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBBTkQgJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fSlgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaXNfbm90X2luY2x1ZGVkXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCgke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gT1IgJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fSlgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJyR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XG4gICAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICBBbmRPcixcbiAgICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYnJhY2tldHMgPSBbXCIoXCIsIFwiKVwiLCBcIltcIiwgXCJdXCIsIFwie1wiLCBcIn1cIl07XG4gICAgICAgICAgaWYgKGJyYWNrZXRzLmluY2x1ZGVzKHNlY29uZFF1ZXJ5VGFyZ2V0LmNoYXJBdCgwKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZpZWRWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHNlY29uZFF1ZXJ5VGFyZ2V0KS5yZXBsYWNlKC9cIi9nLCBgJ2ApXG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAoJHtzdHJpbmdGaWVkVmFsdWV9KWA7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAnJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJHtzZWNvbmRRdWVyeVRhcmdldH1gO1xuICAgICAgICAgIC8vIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xuICAgICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNob29zZUFuZE9yID0gKGUpID0+IHRoaXMuc2V0U3RhdGUoeyBBbmRPcjogZS50YXJnZXQudmFsdWUgfSk7XG5cbiAgY2hvb3NlQW5kT3JTZXQgPSAoZSwgYmxvY2tJZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTZXRCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRTZXRCbG9jay5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uYmxvY2tJZCA9PT0gYmxvY2tJZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgY3VycmVudFNldEJsb2NrSXRlbSA9IGN1cnJlbnRTZXRCbG9ja1tpbmRleF07XG4gICAgICBjdXJyZW50U2V0QmxvY2tJdGVtW1wiQW5kT3JTZXRcIl0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGN1cnJlbnRTZXRCbG9ja1tpbmRleF0gPSBjdXJyZW50U2V0QmxvY2tJdGVtO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgQW5kT3JTZXQ6IGUudGFyZ2V0LnZhbHVlLCBTZXRCbG9jazogY3VycmVudFNldEJsb2NrIH0pO1xuICB9O1xuXG4gIG9wZW5Ecm9wID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IGZhbHNlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wSWQ6IGlkIH0pO1xuICAgIGNvbnN0IGRyb3BEb3ducyA9IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnMgfTtcbiAgICBpZiAoZHJvcERvd25zW2lkXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BEb3duczogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3ducywgW2lkXTogZmFsc2UgfSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BEb3duczogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3ducywgW2lkXTogdHJ1ZSB9IH0pO1xuICAgIH1cbiAgfTtcblxuICBvcGVuRHJvcFNldCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRJZCA9IGlkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiBmYWxzZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJvcElkU2V0OiBjdXJyZW50SWQgfSk7XG4gICAgY29uc3QgZHJvcERvd25zU2V0ID0geyAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCB9O1xuICAgIGlmIChkcm9wRG93bnNTZXRbY3VycmVudElkXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyb3BEb3duc1NldDogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCwgW2N1cnJlbnRJZF06IGZhbHNlIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyb3BEb3duc1NldDogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCwgW2N1cnJlbnRJZF06IHRydWUgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjbG9zZURyb3AgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSwgYXV0T3BlbjogZmFsc2UgfSk7XG5cbiAgY2xvc2VEcm9wT25jbGlja091dHNpZGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJvcElkICE9PSBudWxsICYmIHRoaXMuc3RhdGUubW91c2VsZWF2ZSkge1xuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAvLyAgIGRyb3BEb3duczogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3ducywgW3RoaXMuc3RhdGUuZHJvcElkXTogZmFsc2UgfSxcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAvLyAgIGRyb3BEb3duc1NldDoge1xuICAgICAgLy8gICAgIC4uLnRoaXMuc3RhdGUuZHJvcERvd25zU2V0LFxuICAgICAgLy8gICAgIFt0aGlzLnN0YXRlLmRyb3BJZFNldF06IGZhbHNlLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW91c2VsZWF2ZTogZmFsc2UgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmRyb3BJZFNldCAhPT0gbnVsbCAmJiB0aGlzLnN0YXRlLm1vdXNlbGVhdmUpIHtcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy8gICBkcm9wRG93bnNTZXQ6IHtcbiAgICAgIC8vICAgICAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCxcbiAgICAgIC8vICAgICBbdGhpcy5zdGF0ZS5kcm9wSWRTZXRdOiBmYWxzZSxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBvbm1vdXNlTGVhdmUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbW91c2VsZWF2ZTogdHJ1ZSB9KTtcblxuICAvLyBtZXRob2RzIGZvciBhdHRyaWJ1dGUgdGFibGVcbiAgZ2V0QWxsQ2hlY2tlZExheWVycyA9ICgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gV2lkZ2V0LmFjdGl2ZVY7XG4gICAgY29uc3QgYWxsTWFwTGF5ZXJzID0gYWN0aXZlVmlldy52aWV3Lm1hcC5hbGxMYXllcnM/Lml0ZW1zO1xuICAgIGNvbnN0IGNoZWNrZWRMYXllcnMgPSB0aGlzLnN0YXRlLmNoZWNrZWRMYXllcl87XG4gICAgbGV0IG5ld01hcExheWVyID0gW107XG4gICAgaWYgKGFsbE1hcExheWVycz8ubGVuZ3RoID4gMCAmJiBjaGVja2VkTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIG5ld01hcExheWVyID0gYWxsTWFwTGF5ZXJzLnJlZHVjZSgobmV3QXJyYXksIGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGNoZWNrZWRMYXllcnMuaW5jbHVkZXMoaXRlbS5pZCkpIHtcbiAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld01hcExheWVyO1xuICB9O1xuXG4gIGdldEFjdGl2ZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlVmlldyA9IFdpZGdldC5hY3RpdmVWO1xuICAgIHJldHVybiBhY3RpdmVWaWV3O1xuICB9O1xuXG4gIGdldEFsbEppbXVMYXllclZpZXdzID0gKCkgPT4ge1xuICAgIGNvbnN0IGppbXVMYXllclZpZXdzID0gV2lkZ2V0LmppbXVMYXllclZpZXd6O1xuICAgIHJldHVybiBqaW11TGF5ZXJWaWV3cztcbiAgfTtcblxuICBjbGVhckhpZ2hsaWdodHMgPSAobGF5ZXJWaWV3OiBhbnkpID0+IHtcbiAgICBpZiAobGF5ZXJWaWV3KSB7XG4gICAgICBsYXllclZpZXcuX2hpZ2hsaWdodElkcy5jbGVhcigpO1xuICAgIH1cbiAgfTtcblxuICBjb25uZWN0b3JfZnVuY3Rpb24gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGxheWVyVmlldyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgdmFsdWVzLFxuICAgICAgbGF5ZXIsXG4gICAgICBBbmRPcixcbiAgICAgIGZpZWxkLFxuICAgICAgc291cmNlLFxuICAgIH0gPSBkYXRhO1xuICAgIGlmICh0aGlzLnN0YXRlLmhpZ2xpZ2h0U2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0cyhsYXllclZpZXcpO1xuICAgICAgdGhpcy5zdGF0ZS5oaWdsaWdodFNlbGVjdGVkLmZvckVhY2goKGhpZ2hsaWdodCkgPT4ge1xuICAgICAgICBoaWdobGlnaHQucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdHMgPSB7IGZlYXR1cmVzOiBbXSB9O1xuICAgIGxldCBhZGRpdGlvbmFsUXVlcnkgPSBudWxsO1xuICAgIGlmIChzb3VyY2UgPT09IFwic2luZ2xlUXVlcnlcIikge1xuICAgICAgYWRkaXRpb25hbFF1ZXJ5ID0gcXVlcnkud2hlcmU7XG4gICAgICBpZiAodGhpcy5xdWVyeUFycmF5Lmxlbmd0aCA8IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgYWRkaXRpb25hbFF1ZXJ5ID0gcXVlcnkud2hlcmUgKyBcIiBcIiArIEFuZE9yO1xuICAgICAgfVxuICAgICAgdGhpcy5xdWVyeUFycmF5LnB1c2goYWRkaXRpb25hbFF1ZXJ5KTtcbiAgICAgIHRoaXMub3V0ZmllbGRzLnB1c2goYCR7ZmllbGR9YCk7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHRoaXMucXVlcnlBcnJheS5sZW5ndGggPj0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubGVuZ3RoIHx8XG4gICAgICBzb3VyY2UgPT09IFwic2V0UXVlcnlcIlxuICAgICkge1xuICAgICAgbGV0IGN1cnJlbnRRdWVyeSA9IG51bGw7XG4gICAgICBpZiAodGhpcy5xdWVyeUFycmF5Lmxlbmd0aCkgY3VycmVudFF1ZXJ5ID0gdGhpcy5xdWVyeUFycmF5LmpvaW4oXCIgXCIpO1xuICAgICAgaWYgKHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCB7IHNldFF1ZXJ5U3RyaW5nLCBvdXRGaWVsZHMgfSA9IHRoaXMuc2VuZFF1ZXJ5U2V0KCk7XG4gICAgICAgIGlmIChzb3VyY2UgPT09IFwic2luZ2xlUXVlcnlcIikge1xuICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZylcbiAgICAgICAgICAgIGN1cnJlbnRRdWVyeSArPSBcIiBcIiArIEFuZE9yICsgXCIgXCIgKyBcIihcIiArIHNldFF1ZXJ5U3RyaW5nICsgXCIpXCI7XG4gICAgICAgICAgaWYgKG91dEZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLm91dGZpZWxkcyA9IHRoaXMub3V0ZmllbGRzLmNvbmNhdChvdXRGaWVsZHMpO1xuICAgICAgICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldCh0aGlzLm91dGZpZWxkcyk7XG4gICAgICAgICAgICB0aGlzLm91dGZpZWxkcyA9IEFycmF5LmZyb20oc2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNldFF1ZXJ5U3RyaW5nKSBjdXJyZW50UXVlcnkgPSBzZXRRdWVyeVN0cmluZztcbiAgICAgICAgICBpZiAob3V0RmllbGRzPy5sZW5ndGgpIHRoaXMub3V0ZmllbGRzID0gb3V0RmllbGRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMub3V0ZmllbGRzLmluY2x1ZGVzKFwiT0JKRUNUSURcIikpIHtcbiAgICAgICAgdGhpcy5vdXRmaWVsZHMucHVzaChcIk9CSkVDVElEXCIpO1xuICAgICAgfVxuICAgICAgcXVlcnkub3V0RmllbGRzID0gdGhpcy5vdXRmaWVsZHM7XG4gICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XG4gICAgICBxdWVyeS53aGVyZSA9IGN1cnJlbnRRdWVyeTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdHMgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAobGF5ZXJWaWV3Py5xdWVyeUZlYXR1cmVzKVxuICAgICAgICAgIHJlc3VsdHMgPSBhd2FpdCBsYXllclZpZXcucXVlcnlGZWF0dXJlcyhxdWVyeSk7XG4gICAgICB9XG4gICAgICBpZiAobGF5ZXI/LnF1ZXJ5RmVhdHVyZXMpIHJlc3VsdHMgPSBhd2FpdCBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgIGxldCBjaGVja2VkTGF5ZXJfID0gW2RhdGEubGF5ZXJWaWV3LmxheWVyLmlkXTtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodElkcyA9IGhlbHBlci5nZXRIaWdobGlnaHRlZElkcyhyZXN1bHRzLmZlYXR1cmVzKTtcbiAgICAgIGlmIChoaWdobGlnaHRJZHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGhpZ2xpZ2h0U2VsZWN0ZWRBcnIgPSBbXTtcbiAgICAgICAgaGlnaGxpZ2h0SWRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgY29uc3QgaGlnaGxpZ2h0U2VsZWN0ZWQgPSBsYXllclZpZXcuaGlnaGxpZ2h0KGVsKTtcbiAgICAgICAgICBoaWdsaWdodFNlbGVjdGVkQXJyLnB1c2goaGlnaGxpZ2h0U2VsZWN0ZWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgYXJyYXlHZW9tZXRyeSA9IFtdO1xuICAgICAgICAgIHJlc3VsdHMuZmVhdHVyZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0dlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUuYnVmZmVyKGVsLmdlb21ldHJ5LCAxLCBcIm1ldGVyc1wiKTtcbiAgICAgICAgICAgIGFycmF5R2VvbWV0cnkucHVzaChuZXdHZW9tZXRyeSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGFycmF5R2VvbWV0cnkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB1bmlmaWVkR2VvbXRyeSA9IGdlb21ldHJ5RW5naW5lLnVuaW9uKGFycmF5R2VvbWV0cnkpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8odW5pZmllZEdlb210cnkuZXh0ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZ2xpZ2h0U2VsZWN0ZWQ6IGhpZ2xpZ2h0U2VsZWN0ZWRBcnIgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkTGF5ZXJzQ29udGVudHMgPSBoZWxwZXIuZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyKFxuICAgICAgICBbcmVzdWx0cy5mZWF0dXJlc10sXG4gICAgICAgIGNoZWNrZWRMYXllcl9cbiAgICAgICk7XG4gICAgICBjb25zdCBudW1iZXJPZkF0dHJpYnV0ZXMgPSBoZWxwZXIuZ2V0TnVtYmVyT2ZBdHRyaWJ1dGVzKFxuICAgICAgICBzZWxlY3RlZExheWVyc0NvbnRlbnRzXG4gICAgICApO1xuICAgICAgbGV0IGFjdGl2ZVYgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxheWVyQ29udGVudHM6IHNlbGVjdGVkTGF5ZXJzQ29udGVudHMgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZExheWVyXzogY2hlY2tlZExheWVyXyB9KTtcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gUG9seWdvbi5mcm9tRXh0ZW50KGxheWVyVmlldy52aWV3LmV4dGVudCkudG9KU09OKCk7XG4gICAgICBjb25zdCBsYXllck9wZW4gPSB7XG4gICAgICAgIGdlb21ldHJ5OiBnZW9tZXRyeSxcbiAgICAgICAgdHlwZVNlbGVjdGVkOiBcImNvbnRhaW5zXCIsXG4gICAgICB9O1xuICAgICAgaWYgKHJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExheWVyVmlldyA9IGxheWVyVmlldztcbiAgICAgICAgY29uc3QgaXNMYXllckNoZWNrZWQgPSB0aGlzLnN0YXRlLmlzQXR0cmlidXRlVGFibGVDbG9zZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMoKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5pbml0KHtcbiAgICAgICAgICByZXN1bHRzOiBbcmVzdWx0cy5mZWF0dXJlc10sXG4gICAgICAgICAgYWxsQ2hlY2tlZExheWVyczogYWxsQ2hlY2tlZExheWVycyxcbiAgICAgICAgICBpc0xheWVyQ2hlY2tlZDogaXNMYXllckNoZWNrZWQsXG4gICAgICAgICAgY2hlY2tlZExheWVyczogY2hlY2tlZExheWVyXyxcbiAgICAgICAgICBudW1iZXJPZkF0dHJpYnV0ZXM6IG51bWJlck9mQXR0cmlidXRlcyxcbiAgICAgICAgICBsYXllck9wZW46IGxheWVyT3BlbixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiBmYWxzZSB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmRpc3BhdGNoaW5nQWxsKCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1Ob3RGb3VuZDogbnVsbCB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1Ob3RGb3VuZDogdGhpcy5ubHMoZXJyKSB9KTtcbiAgICAgICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSB9KTtcbiAgICAgICAgICB0aGlzLnJldHVyblRvT3JpZ2luYWxFeHRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbU5vdEZvdW5kOiB0aGlzLm5scyhcIm5vSXRlbVNlbGVjdGVkXCIpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXR1cm5Ub09yaWdpbmFsRXh0ZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVyblRvT3JpZ2luYWxFeHRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3O1xuICAgIHZpZXcuZ29Ubyh7IGNlbnRlcjogdmlldy5jZW50ZXIsIHpvb206IFdpZGdldC5pbml0aWFsWm9vbSB9KTtcbiAgfTtcblxuICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQgPSAoZSwgdmFsKSA9PiB7XG4gICAgbGV0IGNvdW50ZXIgPSBbLi4udGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkXTtcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY291bnRlci5wdXNoKHZhbCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcklzQ2hlY2tlZDogY291bnRlciB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGluZGV4ID0gY291bnRlci5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXJJc0NoZWNrZWQ6IGNvdW50ZXIgfSk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uUmVmcmVzaCA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHRMYXllckxpc3QgPSB0aGlzLnN0YXRlLnJlc3VsdExheWVyTGlzdDtcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgcmVzdWx0TGF5ZXJMaXN0OiByZXN1bHRMYXllckxpc3QsXG4gICAgICBqaW11TWFwVmlldzogamltdU1hcFZpZXcsXG4gICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3O1xuICAgIHZpZXcuZ29Ubyh7IGNlbnRlcjogdmlldy5jZW50ZXIsIHpvb206IFdpZGdldC5pbml0aWFsWm9vbSB9KTtcbiAgICBpZiAodGhpcy5jdXJyZW50TGF5ZXJWaWV3KSB0aGlzLmNsZWFySGlnaGxpZ2h0cyh0aGlzLmN1cnJlbnRMYXllclZpZXcpO1xuICB9O1xuXG4gIC8vVE9ETyBjb25maWcgYWJpbGl0YXJlIHRhYiB0cnVlL2ZhbHNlXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0YWJsZVNldENvdW50cyA9IChcbiAgICAgIHRhYmxlU2V0Q291bnRzOiB7IGlkOiBzdHJpbmc7IGRlbGV0ZWQ6IGJvb2xlYW4gfVtdXG4gICAgKSA9PiB7XG4gICAgICBsZXQgY291bnRzID0gMDtcbiAgICAgIGlmICh0YWJsZVNldENvdW50cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29waWVkVGFibGVTZXRDb3VudHMgPSBbLi4udGFibGVTZXRDb3VudHNdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW0gPSBjb3BpZWRUYWJsZVNldENvdW50cy5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+ICFpdGVtLmRlbGV0ZWRcbiAgICAgICAgKTtcbiAgICAgICAgY291bnRzID0gZmlsdGVyZWRJdGVtLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3VudHM7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnByb3BzLnN0YXRlID09PSBcIkNMT1NFRFwiICYmICF0aGlzLnN0YXRlLndpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZCkge1xuICAgICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xuICAgICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXc7XG4gICAgICBjb25zdCByZXN1bHRMYXllckxpc3QgPSB0aGlzLnN0YXRlLnJlc3VsdExheWVyTGlzdDtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgcmVzdWx0TGF5ZXJMaXN0OiByZXN1bHRMYXllckxpc3QsXG4gICAgICAgIGppbXVNYXBWaWV3OiBqaW11TWFwVmlldyxcbiAgICAgICAgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSxcbiAgICAgICAgd2lkZ2V0U3RhdGVPcGVuZWRDaGVja2VkOiBmYWxzZSxcbiAgICAgICAgd2lkZ2V0U3RhdGVDbG9zZWRDaGVja2VkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB2aWV3LmdvVG8oeyBjZW50ZXI6IHZpZXcuY2VudGVyLCB6b29tOiBXaWRnZXQuaW5pdGlhbFpvb20gfSk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50TGF5ZXJWaWV3KSB0aGlzLmNsZWFySGlnaGxpZ2h0cyh0aGlzLmN1cnJlbnRMYXllclZpZXcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PSBcIk9QRU5FRFwiICYmICF0aGlzLnN0YXRlLndpZGdldFN0YXRlT3BlbmVkQ2hlY2tlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZDogZmFsc2UsXG4gICAgICAgIHdpZGdldFN0YXRlT3BlbmVkQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0UmVzaXplRGV0ZWN0b3IgaGFuZGxlV2lkdGggaGFuZGxlSGVpZ2h0PlxuICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkZ2V0LWF0dHJpYnV0ZS10YWJsZSBqaW11LXdpZGdldFwiXG4gICAgICAgICAgICBpZD1cIndyYXBcIlxuICAgICAgICAgICAgcmVmPVwid3JhcFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlKCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KFwidXNlTWFwV2lkZ2V0SWRzXCIpICYmXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdICYmIChcbiAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1BbWJpdG9cIiB0aXRsZT1cIkFtYml0b1wiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBjb250YWluZXItZmx1aWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlNlbGV6aW9uYXJlIHByaW1hIGlsIGxheWVyLCBwb2kgY29udGludWEgY29uIGlsIGNvc3RydXR0b3JlIGRlbGxhIHF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhJY29uXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3LTEwMFwiPlNlbGV6aW9uYSBpbCBsYXllcjo8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW50U2VsZWN0ZWRJZH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXN1bHRMYXllckxpc3QubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC5sYXllcklEfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkVXJsPXtlbC5lbGVtZW50LnBhcnNlZFVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5lbGVtZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0FkZFNlbGVjdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNvcnJpc3BvbmRlbnRpIGFsbGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VndWVudGUgZXNwcmVzc2lvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaG9vc2VBbmRPcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhIHR1dHRlIGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQU5EXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkFORFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1dHRlIGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT1JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZSBjb3JyaXNwb25kb25vIGFkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5hIHF1YWxzaWFzaSBkZWxsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3dpZHRoID49IDYyNiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0xIG1iLTMganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdhcDogXCIyJVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZFRhYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciAgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSc8c3ZnIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTcuNSAwYS41LjUgMCAwIDAtLjUuNVY3SC41YS41LjUgMCAwIDAgMCAxSDd2Ni41YS41LjUgMCAwIDAgMSAwVjhoNi41YS41LjUgMCAwIDAgMC0xSDhWLjVhLjUuNSAwIDAgMC0uNS0uNVpcIiBmaWxsPVwiIzAwMFwiPjwvcGF0aD48L3N2Zz4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QWdnaXVuZ2kgZXNwcmVzc2lvbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRCbG9ja31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFnZ2l1bmdpIHNldCBkaSBlc3ByZXNzaW9uaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QXBwbGljYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmZ1bmN0aW9uUmVmcmVzaH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+UmljYXJpY2FyZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHs2MjUgPj0gd2lkdGggJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogXCIyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRUYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFnZ2l1bmdpIGVzcHJlc3Npb25lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkQmxvY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249Jzxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNy41IDBhLjUuNSAwIDAgMC0uNS41VjdILjVhLjUuNSAwIDAgMCAwIDFIN3Y2LjVhLjUuNSAwIDAgMCAxIDBWOGg2LjVhLjUuNSAwIDAgMCAwLTFIOFYuNWEuNS41IDAgMCAwLS41LS41WlwiIGZpbGw9XCIjMDAwXCI+PC9wYXRoPjwvc3ZnPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5BZ2dpdW5naSBzZXQgZGkgZXNwcmVzc2lvbmk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZW5kUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFwcGxpY2E8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5mdW5jdGlvblJlZnJlc2h9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPlJpY2FyaWNhcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwJVwiLCBvdmVyZmxvd1k6IFwic2Nyb2xsXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWJsZXMubWFwKChlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Byb3ctJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXt0aGlzLnN0YXRlLnJlc3VsdHNMYXllclNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuRHJvcEQ9e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd249eygpID0+IHRoaXMuZHJvcERvd24oZWwuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5PXt0aGlzLnN0YXRlLmRyb3Bkb3duVmFsdWVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17dGhpcy5zdGF0ZS5pc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVySXNDaGVja2VkPXt0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkVG9RdWVyeT17dGhpcy5zdGF0ZS5jaGVja2VkVG9RdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlcz17dGhpcy5zdGF0ZS50YWJsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNJZD17ZWwuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM9e3RoaXMuc3RhdGUud2hlcmVDbGF1c2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnlBdHRyaWJ1dGU9e3RoaXMuZ2V0UXVlcnlBdHRyaWJ1dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRRdWVyeT17dGhpcy5nZXRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRoaXJkUXVlcnk9e3RoaXMudGhpcmRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRJbnB1dEhhbmRsZXI9e3RoaXMudGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbUhhbmRsZXI9e3RoaXMuZHJvcGRvd25JdGVtQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXI9e3RoaXMudGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXt0aGlzLmRyb3BEb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tCb3g9e3RoaXMuaGFuZGxlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVUYWJsZT17KCkgPT4gdGhpcy5kZWxldGVUYWJsZShlbC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dGhpcy51bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ2hlY2tCb3g9e3RoaXMub25DaGFuZ2VDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wPXt0aGlzLm9wZW5Ecm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXt0aGlzLmNsb3NlRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZS5vcGVuZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRPcGVuPXt0aGlzLnN0YXRlLmF1dE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXt0aGlzLnN0YXRlLm1vdXNlbGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmU9e3RoaXMub25tb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkPXt0aGlzLmZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3ducz17dGhpcy5zdGF0ZS5kcm9wRG93bnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTm90Rm91bmQ9e3RoaXMuc3RhdGUuaXRlbU5vdEZvdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJZD17dGhpcy5zdGF0ZS5zZWxlY3RlZElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYmxlPXtlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Q2hhbmdlZCA9IHt0aGlzLnN0YXRlLnF1ZXJ5Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudD17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDVlY2FcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuU2V0QmxvY2subWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHMgPSB0YWJsZVNldENvdW50cyhlbC50YWJsZXNTZXQpO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudHMgPCAyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cyA9PSAxID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY29ycmlzcG9uZGVudGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsYSBzZWd1ZW50ZSBlc3ByZXNzaW9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3dpZHRoID49IDYyNiA/IFwiZC1mbGV4IGNvbC1sLTEgXCI6XCJkLWZsZXggY29sLW1kLThcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDowXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZUFuZE9yU2V0KGUsIGVsLmJsb2NrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhIHR1dHRlIGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQU5EXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkFORFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmlzcG9uZG9ubyBhIHR1dHRlIGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT1JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJpc3BvbmRvbm8gYWQgdW5hIHF1YWxzaWFzaSBkZWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzcHJlc3Npb25pIHNlZ3VlbnRpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZUJsb2NrKGVsLmJsb2NrSWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZUJsb2NrQWxsKHtlbH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2VsLmJsb2NrSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5hZGRUd29UYWJsZShlbC5ibG9ja0lkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLnRhYmxlc1NldC5tYXAoKGlubmVyRWwsIGksIFRhYmxlQXJyYXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkU2V0VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcm93LSR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5zdGF0ZS5yZXN1bHRzTGF5ZXJTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbkRyb3BEPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duPXsoKSA9PiB0aGlzLmRyb3BEb3duU2V0KGVsLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeT17dGhpcy5zdGF0ZS5kcm9wZG93blZhbHVlUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e3RoaXMuc3RhdGUuaXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZD17dGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFRvUXVlcnk9e3RoaXMuc3RhdGUuY2hlY2tlZFRvUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgQWRkIHNldCB0YWJsZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlc1NldD17dGhpcy5zdGF0ZS50YWJsZXNTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNTZXRJZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2lubmVyRWwuaWR9YCArIFwiLVwiICsgYCR7ZWwuYmxvY2tJZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXNTZXQ9e3RoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmQgZm9yIEFkZCBzZXQgdGFibGUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXRRdWVyeUF0dHJpYnV0ZT17dGhpcy5nZXRRdWVyeUF0dHJpYnV0ZVNldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXt0aGlzLmdldFF1ZXJ5QXR0cmlidXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnk9e3RoaXMuZ2V0UXVlcnlTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUaGlyZFF1ZXJ5PXt0aGlzLnRoaXJkUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyPXt0aGlzLnRleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXt0aGlzLmRyb3Bkb3duSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duVG9nZ2xlcj17dGhpcy5kcm9wRG93blNldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrQm94PXt0aGlzLmhhbmRsZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFibGU9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJsb2NrVGFibGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aW5uZXJFbC5pZH1gICsgXCItXCIgKyBgJHtlbC5ibG9ja0lkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZWwuYmxvY2tJZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyPXt0aGlzLnVuaXZvY29TZWxlY3RIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveD17dGhpcy5vbkNoYW5nZUNoZWNrQm94U2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3A9e3RoaXMub3BlbkRyb3BTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURyb3A9e3RoaXMuY2xvc2VEcm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dE9wZW49e3RoaXMuc3RhdGUuYXV0T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU9e3RoaXMuc3RhdGUubW91c2VsZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17dGhpcy5vbm1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zU2V0PXt0aGlzLnN0YXRlLmRyb3BEb3duc1NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Ob3RGb3VuZD17dGhpcy5zdGF0ZS5pdGVtTm90Rm91bmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVsZXRlPXtjb3VudHMgPiAyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Jsb2NrRGVsZXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRzID09PSAyICYmIGkgPT0gMCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd0RlbGV0ZT17VGFibGVBcnJheS5sZW5ndGggPiAyID8gdHJ1ZTpmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dCbG9ja0RlbGV0ZT17VGFibGVBcnJheS5sZW5ndGggPT09IDIgJiYgaT09MCA/IHRydWU6ZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZD17ZWwuYmxvY2tJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJsb2NrQWxsPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJsb2NrQWxsKHsgZWwsIGlubmVyRWwgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWJsZT17aW5uZXJFbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Q2hhbmdlZCA9IHt0aGlzLnN0YXRlLnF1ZXJ5Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudD17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbU5vdEZvdW5kICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLml0ZW1Ob3RGb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3RSZXNpemVEZXRlY3Rvcj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=