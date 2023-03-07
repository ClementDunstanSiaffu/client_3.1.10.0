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
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 768px) {\n  .col-md-4 {\n    flex: auto; } }\n\n@media (min-width: 768px) {\n  .close-container-table-query-builder {\n    flex: auto; } }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/query-builder/src/assets/styles/styles.scss"],"names":[],"mappings":"AACA;EACI;IACI,UAAU,EAAA,EACb;;AAGL;EACI;IACI,UAAS,EAAA,EACZ","sourcesContent":["\n@media (min-width:768px){\n    .col-md-4 {\n        flex: auto;\n    }\n}\n\n@media (min-width:768px){\n    .close-container-table-query-builder{\n        flex:auto;\n    }\n}\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".item-table:hover {\n  cursor: pointer;\n  background-color: #e5f7ff; }\n\n.setting-svg:hover {\n  transform: scale(1.2);\n  cursor: pointer;\n  color: #005eca; }\n\n.setting-svg {\n  transition: all 1s;\n  transform-origin: 50% 50%; }\n\n#wrap {\n  min-width: 300px !important; }\n\n.include {\n  display: flex;\n  flex-direction: row; }\n\n#inputs {\n  width: 20% !important; }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/query-builder/src/style.css"],"names":[],"mappings":"AAAA;EACI,eAAe;EACf,yBAAyB,EAAA;;AAE7B;EACI,qBAAqB;EACrB,eAAe;EACf,cAAc,EAAA;;AAElB;EACI,kBAAkB;EAClB,yBAAyB,EAAA;;AAG7B;EACI,2BAA2B,EAAA;;AAG/B;EACI,aAAa;EACb,mBAAmB,EAAA;;AAGvB;EACI,qBAAoB,EAAA","sourcesContent":[".item-table:hover{\r\n    cursor: pointer;\r\n    background-color: #e5f7ff;\r\n}\r\n.setting-svg:hover {\r\n    transform: scale(1.2);\r\n    cursor: pointer;\r\n    color: #005eca;\r\n}\r\n.setting-svg{\r\n    transition: all 1s;\r\n    transform-origin: 50% 50%;\r\n}\r\n\r\n#wrap{\r\n    min-width: 300px !important;\r\n}\r\n\r\n.include{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n#inputs{\r\n    width:20% !important;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./jimu-icons/svg/outlined/application/setting.svg":
/*!*********************************************************!*\
  !*** ./jimu-icons/svg/outlined/application/setting.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.438.994c.213 0 .397.146.44.35.151.722.257 1.34.316 1.852.374.16.725.362 1.048.599l1.728-.676a.455.455 0 0 1 .556.188l1.42 2.394a.43.43 0 0 1-.091.547 21.98 21.98 0 0 1-1.49 1.194 5.17 5.17 0 0 1-.007 1.183l1.464 1.119a.43.43 0 0 1 .111.563l-1.42 2.394a.454.454 0 0 1-.53.197 22.445 22.445 0 0 1-1.807-.66c-.325.233-.679.43-1.055.586l-.263 1.794a.446.446 0 0 1-.445.376H6.574a.446.446 0 0 1-.44-.35 21.019 21.019 0 0 1-.317-1.853 5.34 5.34 0 0 1-1.047-.598l-1.728.675a.455.455 0 0 1-.556-.187l-1.42-2.395a.43.43 0 0 1 .091-.546c.567-.49 1.063-.888 1.49-1.194a5.167 5.167 0 0 1 .008-1.183L1.19 6.243a.43.43 0 0 1-.112-.562l1.42-2.395a.455.455 0 0 1 .531-.196c.719.233 1.321.453 1.807.66.324-.233.679-.43 1.056-.587l.262-1.794A.446.446 0 0 1 6.6.994h2.839Zm-.365 1H6.985l-.28 1.866-.467.19c-.235.095-.46.21-.672.34l-.207.136-.42.293-.476-.197c-.328-.137-.718-.281-1.169-.433l-.221-.074-1.045 1.719L3.59 6.999l-.06.479a4.127 4.127 0 0 0-.021.816l.014.144.058.492-.419.294c-.288.203-.615.451-.979.746l-.177.145 1.043 1.72 1.845-.703.406.29c.204.146.42.274.645.384l.228.103.474.199.059.49c.04.338.103.731.19 1.177l.043.219h2.088l.282-1.867.466-.19c.236-.095.46-.21.672-.34l.207-.136.419-.293.476.198c.33.136.72.28 1.17.433l.22.072 1.044-1.718-1.56-1.165.06-.479a4.131 4.131 0 0 0 .02-.815l-.013-.144-.06-.492.42-.295a18.1 18.1 0 0 0 .98-.746l.176-.146-1.043-1.72-1.844.705-.406-.29a4.496 4.496 0 0 0-.646-.385l-.228-.103-.474-.199-.058-.49c-.032-.27-.08-.576-.14-.916l-.094-.48Zm-1.067 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z\" fill=\"#000\"></path></svg>"

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
/* harmony import */ var jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/application/setting */ "./jimu-icons/outlined/application/setting.tsx");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var _lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ResizeDetector */ "./your-extensions/widgets/query-builder/src/runtime/lib/ResizeDetector.tsx");
/* harmony import */ var _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/queryTableValue */ "./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js");
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/styles/styles.scss */ "./your-extensions/widgets/query-builder/src/assets/styles/styles.scss");







function AddSetTable(props) {
    const { list, handleThirdQuery, textInputHandler, multiSelectHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, dropdownValueQuery, handleCheckBox, isChecked, counterIsChecked, dropDownToggler, functionCounterIsChecked, checkedToQuery, deleteTable, getQueryAttribute, 
    // for Add set table............................
    tablesSet, tablesSetId, whereClausesSet, 
    // End for Add set table............................
    tables, getQuery, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened, autOpen, mouseleave, onmouseLeave, dropdownsSet, showDelete, blockId, currentTable, showBlockDelete, } = props;
    const currentwhereClausesSet = whereClausesSet.find((item) => item.id === tablesSetId);
    if (currentTable.id === parseInt(tablesSetId.split("-")[0]) &&
        !currentTable.deleted) {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_4__["default"], { handleWidth: true, handleHeight: true }, ({ width, height }) => (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "my-1" }, list.fields ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.Fragment, null,
            width <= 625 && (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "", style: {
                    display: "flex",
                    flexDirection: "row",
                    height: "fit-content",
                    alignItems: "center",
                    gap: "3%",
                    marginBottom: 20
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "", style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        width: "80%",
                    } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { className: "", onChange: getQueryAttribute, placeholder: "Seleziona campo" }, list.fields.map((el, i) => {
                        if (el.type === "oid" ||
                            el.type === "small-integer" ||
                            el.type === "integer" ||
                            el.type === "string" ||
                            el.type === "double") {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: el.name, dataType: el.type },
                                el.alias,
                                " (",
                                el.type,
                                ")"));
                        }
                    })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => getQuery(e, "set"), placeholder: "Seleziona campo" }, currentwhereClausesSet &&
                            currentwhereClausesSet.attributeQueryType === "string"
                            ? _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__.queryConstructorString.map((o, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: o.value }, o.name));
                            })
                            : _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__.queryConstructorNumber.map((o, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: o.value }, o.name));
                            }))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(SecondConstructor, { className: "col-md-4", handleThirdQuery: handleThirdQuery, textInputHandler: textInputHandler, multiSelectHandler: multiSelectHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, dropdownValueQuery: dropdownValueQuery, handleCheckBox: handleCheckBox, isChecked: isChecked, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, checkedToQuery: checkedToQuery, getQueryAttribute: getQueryAttribute, whereClausesSet: whereClausesSet, tablesSetId: tablesSetId, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, mouseleave: mouseleave, onmouseLeave: onmouseLeave, dropdownsSet: dropdownsSet, blockId: blockId, width: width })),
                showDelete && (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "", onClick: deleteTable, icon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__.CloseOutlined, null)))))),
            width >= 625 && (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: " ", style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    flexDirection: "row",
                    gap: "3%"
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { className: "col-md-4", onChange: getQueryAttribute, placeholder: "Seleziona campo" }, list.fields.map((el, i) => {
                    if (el.type === "oid" ||
                        el.type === "small-integer" ||
                        el.type === "integer" ||
                        el.type === "string" ||
                        el.type === "double") {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: el.name, dataType: el.type },
                            el.alias,
                            " (",
                            el.type,
                            ")"));
                    }
                })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "col-md-4" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => getQuery(e, "set"), placeholder: "Seleziona campo" }, currentwhereClausesSet &&
                        currentwhereClausesSet.attributeQueryType === "string"
                        ? _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__.queryConstructorString.map((o, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: o.value }, o.name));
                        })
                        : _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__.queryConstructorNumber.map((o, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: o.value }, o.name));
                        }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(SecondConstructor, { handleThirdQuery: handleThirdQuery, textInputHandler: textInputHandler, multiSelectHandler: multiSelectHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, dropdownValueQuery: dropdownValueQuery, handleCheckBox: handleCheckBox, isChecked: isChecked, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, checkedToQuery: checkedToQuery, getQueryAttribute: getQueryAttribute, whereClausesSet: whereClausesSet, tablesSetId: tablesSetId, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, mouseleave: mouseleave, onmouseLeave: onmouseLeave, dropdownsSet: dropdownsSet, blockId: blockId, width: width }),
                showDelete && (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "close-container-table-query-builder" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { onClick: deleteTable, icon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__.CloseOutlined, null)))))))) : ("")))));
    }
    return null;
}
const Switch = (props) => {
    const { queryValues, children } = props;
    // filter out only children with a matching prop
    return children.find((child) => {
        return child.props.value === queryValues;
    });
};
const SecondConstructor = (props) => {
    var _a, _b, _c, _d;
    const { textInputHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, counterIsChecked, functionCounterIsChecked, tablesSetId, whereClausesSet, dropDownToggler, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened: d, autOpen, onmouseLeave, dropdownsSet, blockId, width } = props;
    const normalizedThirdQuery = [];
    let defaultValue = "=";
    let dropdownValueQuery = "valore";
    let opened = false;
    let checked = 0;
    let au = true;
    // valueThirdQuery.map((el, i) => { normalizedThirdQuery.push({ label: el.label[0].toString(), value: el.value[0].toString() }) })
    if (whereClausesSet.length) {
        const currentItem = whereClausesSet.find((item) => item.id === tablesSetId);
        if (currentItem === null || currentItem === void 0 ? void 0 : currentItem.ifInOrNotInQueryValue) {
            currentItem.ifInOrNotInQueryValue.map((el, i) => {
                normalizedThirdQuery.push({
                    id: tablesSetId.toString(),
                    label: el.label.toString(),
                    value: el.value.toString(),
                    listel: currentItem.checkedListSet,
                });
            });
        }
        if (currentItem === null || currentItem === void 0 ? void 0 : currentItem.queryValue)
            defaultValue = currentItem.queryValue;
        if (currentItem === null || currentItem === void 0 ? void 0 : currentItem.dropdownValueQuery)
            dropdownValueQuery = currentItem.dropdownValueQuery;
        if (currentItem === null || currentItem === void 0 ? void 0 : currentItem.isOpen) {
            // opened = whereClausesSet[tablesSetId].isOpen;
        }
        if (currentItem === null || currentItem === void 0 ? void 0 : currentItem.checkedListSet)
            checked = currentItem.checkedListSet.length;
    }
    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.Fragment, null,
        width >= 626 &&
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Switch, { queryValues: defaultValue },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "=", className: "d-flex col-md-4" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => univocoSelectHandler(e, "set"), placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<>", className: "d-flex col-md-4" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => univocoSelectHandler(e, "set"), placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "IN", onMouseLeave: () => onmouseLeave() },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: (_a = dropdownsSet[tablesSetId]) !== null && _a !== void 0 ? _a : false, toggle: () => dropDown },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop(tablesSetId) },
                            checked,
                            " elementi selezionati"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            normalizedThirdQuery.map((el, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesSetId, className: "d-flex justify-content-start", strategy: "fixed" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesSetId, name: el.label, value: el.value, defaultChecked: el.listel &&
                                                el.listel.filter(function (e) {
                                                    return e.checkValue === el.label;
                                                }).length > 0 }),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesSetId, className: "ml-3 mb-0", id: tablesSetId },
                                            " ",
                                            el.label))));
                            }))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT_IN", className: "d-flex justify-content-between" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: (_b = dropdownsSet[tablesSetId]) !== null && _b !== void 0 ? _b : false, toggle: () => dropDown },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop(tablesSetId) },
                            checked,
                            " elementi selezionati"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            normalizedThirdQuery.map((el, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesSetId, className: "d-flex justify-content-start", strategy: "fixed" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesSetId, name: el.label, value: el.value, defaultChecked: el.listel &&
                                                el.listel.filter(function (e) {
                                                    return e.checkValue === el.label;
                                                }).length > 0 }),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesSetId, className: "ml-3 mb-0", id: tablesSetId },
                                            " ",
                                            el.label))));
                            }))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<=", className: "d-flex  col-md-4" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "set") }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">=", className: "d-flex col-md-4" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "set") }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<", className: "d-flex col-md-4" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "set") }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">", className: "d-flex col-md-4" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "set") }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is null" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is not null" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "included", className: "d-flex col-md-4" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "include" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textFirstIncludedHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesSetId, id: "inputs" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-md-2 text-center", style: { width: "10%" } }, "e"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textSecondIncludedHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesSetId, id: "inputs" }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is_not_included", className: "d-flex col-md-4" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "include" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textFirstIncludedHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", id: "inputs", "data-table-id": tablesSetId }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-sm-2 text-center" }, "e"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textSecondIncludedHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", id: "inputs", "data-table-id": tablesSetId }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "d-flex col-md-4" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE", className: "d-flex col-md-4" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "d-flex col-md-4" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE%", className: "d-flex col-md-4" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT LIKE", className: "d-flex col-md-4" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId }))),
        625 >= width &&
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Switch, { queryValues: defaultValue },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "=", className: "", style: { display: 'flex' } },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => univocoSelectHandler(e, "set"), placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<>", className: "" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => univocoSelectHandler(e, "set"), placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "IN", onMouseLeave: () => onmouseLeave() },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: (_c = dropdownsSet[tablesSetId]) !== null && _c !== void 0 ? _c : false, toggle: () => dropDown },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop(tablesSetId) },
                            checked,
                            " elementi selezionati"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            normalizedThirdQuery.map((el, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesSetId, className: "d-flex justify-content-start", strategy: "fixed" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesSetId, name: el.label, value: el.value, defaultChecked: el.listel &&
                                                el.listel.filter(function (e) {
                                                    return e.checkValue === el.label;
                                                }).length > 0 }),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesSetId, className: "ml-3 mb-0", id: tablesSetId },
                                            " ",
                                            el.label))));
                            }))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT_IN", className: "d-flex justify-content-between" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: (_d = dropdownsSet[tablesSetId]) !== null && _d !== void 0 ? _d : false, toggle: () => dropDown },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop(tablesSetId) },
                            checked,
                            " elementi selezionati"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            normalizedThirdQuery.map((el, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesSetId, className: "d-flex justify-content-start", strategy: "fixed" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesSetId, name: el.label, value: el.value, defaultChecked: el.listel &&
                                                el.listel.filter(function (e) {
                                                    return e.checkValue === el.label;
                                                }).length > 0 }),
                                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesSetId, className: "ml-3 mb-0", id: tablesSetId },
                                            " ",
                                            el.label))));
                            }))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<=", className: "" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "set") }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">=", className: "" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "set") }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<", className: "" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "set") }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">", className: "" },
                    dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "set") }, normalizedThirdQuery.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesSetId }, el.label));
                    }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Valore"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "set"), disabled: true, "data-table-id": tablesSetId }, "Campo"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "set"), "data-table-id": tablesSetId }, "Univoci"))))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is null" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is not null" }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "included", className: "" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "include" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textFirstIncludedHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesSetId, id: "inputs" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-md-2 text-center", style: { width: "10%" } }, "e"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textSecondIncludedHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesSetId, id: "inputs" }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is_not_included", className: "" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "include" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textFirstIncludedHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", id: "inputs", "data-table-id": tablesSetId }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-sm-2 text-center" }, "e"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textSecondIncludedHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", id: "inputs", "data-table-id": tablesSetId }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE", className: "" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE%", className: "" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT LIKE", className: "" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId })))));
};
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
/* harmony import */ var jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-icons/outlined/application/setting */ "./jimu-icons/outlined/application/setting.tsx");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-icons/outlined/editor/close */ "./jimu-icons/outlined/editor/close.tsx");
/* harmony import */ var _lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ResizeDetector */ "./your-extensions/widgets/query-builder/src/runtime/lib/ResizeDetector.tsx");
/* harmony import */ var _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/queryTableValue */ "./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js");
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/styles/styles.scss */ "./your-extensions/widgets/query-builder/src/assets/styles/styles.scss");







function Table(props) {
    const { list, handleThirdQuery, textInputHandler, multiSelectHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, dropdownValueQuery, handleCheckBox, isChecked, counterIsChecked, dropDownToggler, functionCounterIsChecked, checkedToQuery, deleteTable, tablesId, getQueryAttribute, whereClauses, tables, getQuery, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened, autOpen, mouseleave, onmouseLeave, dropdowns, currentTable, } = props;
    const currentwhereClauses = whereClauses.find((item) => item.id === `${tablesId}`);
    if (currentTable.id === tablesId && !currentTable.deleted) {
        console.log(whereClauses, currentTable, currentwhereClauses, tablesId, "check whereclause");
        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_4__["default"], { handleWidth: true, handleHeight: true }, ({ width, height }) => (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "my-1" }, list.fields ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.Fragment, null,
            width <= 625 && (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "", style: {
                    display: "flex",
                    flexDirection: "row",
                    height: "fit-content",
                    alignItems: "center",
                    gap: '3%',
                    minWidth: '280px',
                    marginBottom: 20
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "", style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        width: "80%",
                    } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { className: "", onChange: getQueryAttribute, placeholder: "Seleziona campo" }, list.fields.map((el, i) => {
                        if (el.type === "oid" ||
                            el.type === "small-integer" ||
                            el.type === "integer" ||
                            el.type === "string" ||
                            el.type === "double") {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: el.name, dataType: el.type },
                                el.alias,
                                " (",
                                el.type,
                                ")"));
                        }
                    })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { style: {
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                        } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => getQuery(e, "single"), placeholder: "Seleziona campo" }, currentwhereClauses &&
                            currentwhereClauses.attributeQueryType === "string"
                            ? _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__.queryConstructorString.map((o, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                            })
                            : _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__.queryConstructorNumber.map((o, i) => {
                                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                            }))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { style: { width: "100%" } },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(SecondConstructor, { className: "col-md-4", handleThirdQuery: handleThirdQuery, textInputHandler: textInputHandler, multiSelectHandler: multiSelectHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, dropdownValueQuery: dropdownValueQuery, handleCheckBox: handleCheckBox, isChecked: isChecked, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, checkedToQuery: checkedToQuery, getQueryAttribute: getQueryAttribute, whereClauses: whereClauses, tablesId: tablesId, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, mouseleave: mouseleave, onmouseLeave: onmouseLeave, dropdowns: dropdowns, width: width }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "", style: {} },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "", onClick: deleteTable, icon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__.CloseOutlined, null))))),
            width >= 626 && (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: " ", style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    flexDirection: "row",
                    gap: "3%"
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { className: "col-md-4", onChange: getQueryAttribute, placeholder: "Seleziona campo" }, list.fields.map((el, i) => {
                    if (el.type === "oid" ||
                        el.type === "small-integer" ||
                        el.type === "integer" ||
                        el.type === "string" ||
                        el.type === "double") {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: el.name, dataType: el.type },
                            el.alias,
                            " (",
                            el.type,
                            ")"));
                    }
                })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "col-md-4", style: { background: "" } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => getQuery(e, "single"), placeholder: "Seleziona campo" }, currentwhereClauses &&
                        currentwhereClauses.attributeQueryType === "string"
                        ? _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__.queryConstructorString.map((o, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                        })
                        : _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_5__.queryConstructorNumber.map((o, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                        }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(SecondConstructor, { className: "col-md-4", handleThirdQuery: handleThirdQuery, textInputHandler: textInputHandler, multiSelectHandler: multiSelectHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, dropdownValueQuery: dropdownValueQuery, handleCheckBox: handleCheckBox, isChecked: isChecked, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, checkedToQuery: checkedToQuery, getQueryAttribute: getQueryAttribute, whereClauses: whereClauses, tablesId: tablesId, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, mouseleave: mouseleave, onmouseLeave: onmouseLeave, dropdowns: dropdowns, width: width }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "close-container-table-query-builder" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "", onClick: deleteTable, icon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__.CloseOutlined, null))))))) : ("")))));
    }
    return null;
}
const Switch = (props) => {
    const { queryValues, children } = props;
    // filter out only children with a matching prop
    return children.find((child) => {
        return child.props.value === queryValues;
    });
};
const SecondConstructor = (props) => {
    const { textInputHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, counterIsChecked, functionCounterIsChecked, tablesId, whereClauses, dropDownToggler, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened: d, autOpen, onmouseLeave, dropdowns, width } = props;
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
            normalizedThirdQuery.push({
                id: tablesId.toString(),
                label: el.label.toString(),
                value: el.value.toString(),
                listel: currentWhereClause.checkedList,
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
    if (currentWhereClause && currentWhereClause.checkedList) {
        checked = currentWhereClause.checkedList.length;
    }
    const test = (props) => { };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.Fragment, null,
        width >= 626 && jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Switch, { queryValues: defaultValue },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "=", className: "d-flex col-md-4", style: { width: "100%" } },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => univocoSelectHandler(e, "single"), placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: "w-100", "data-table-id": tablesId, defaultValue: defaultTextValue })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<>", className: "d-flex col-md-4" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => univocoSelectHandler(e, "single"), placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "IN", onMouseLeave: () => onmouseLeave() },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: dropdowns[tablesId], toggle: () => dropDown },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop(tablesId) },
                        checked,
                        " elementi selezionati"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        normalizedThirdQuery.map((el, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesId, className: "d-flex justify-content-start", strategy: "fixed" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesId, name: el.label, value: el.value, defaultChecked: el.listel &&
                                            el.listel.filter(function (e) {
                                                return e.checkValue === el.label;
                                            }).length > 0 }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesId, className: "ml-3 mb-0", id: tablesId },
                                        " ",
                                        el.label))));
                        }))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT_IN", className: "d-flex justify-content-between" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: dropdowns[tablesId], toggle: () => dropDown },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop(tablesId) },
                        checked,
                        " elementi selezionati"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        normalizedThirdQuery.map((el, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesId, className: "d-flex justify-content-start", strategy: "fixed" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesId, name: el.label, value: el.value, defaultChecked: el.listel &&
                                            el.listel.filter(function (e) {
                                                return e.checkValue === el.label;
                                            }).length > 0 }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesId, className: "ml-3 mb-0", id: tablesId },
                                        " ",
                                        el.label))));
                        }))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<=", className: "d-flex  col-md-4" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "single") }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">=", className: "d-flex col-md-4" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "single") }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<", className: "d-flex col-md-4" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "single") }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">", className: "d-flex col-md-4" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "single") }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is null" }),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is not null" }),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "included", className: "d-flex col-md-4" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "include" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textFirstIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesId, id: "inputs" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-md-2 text-center", style: { width: "10%" } }, "e"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textSecondIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesId, id: "inputs" }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is_not_included", className: "d-flex col-md-4" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "include" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textFirstIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", id: "inputs", "data-table-id": tablesId }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-sm-2 text-center" }, "e"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textSecondIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", id: "inputs", "data-table-id": tablesId }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "d-flex col-md-4" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE", className: "d-flex col-md-4" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "d-flex col-md-4" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE%", className: "d-flex col-md-4" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT LIKE", className: "d-flex col-md-4" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId }))),
        625 >= width && jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Switch, { queryValues: defaultValue },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "=", className: "", style: { display: 'flex' } },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => univocoSelectHandler(e, "single"), placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: "w-100", "data-table-id": tablesId, defaultValue: defaultTextValue })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<>", className: "" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => univocoSelectHandler(e, "single"), placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "IN", onMouseLeave: () => onmouseLeave() },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: dropdowns[tablesId], toggle: () => dropDown },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop(tablesId) },
                        checked,
                        " elementi selezionati"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        normalizedThirdQuery.map((el, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesId, className: "d-flex justify-content-start", strategy: "fixed" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesId, name: el.label, value: el.value, defaultChecked: el.listel &&
                                            el.listel.filter(function (e) {
                                                return e.checkValue === el.label;
                                            }).length > 0 }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesId, className: "ml-3 mb-0", id: tablesId },
                                        " ",
                                        el.label))));
                        }))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT_IN", className: "d-flex justify-content-between" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "w-100" }, jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true, isOpen: dropdowns[tablesId], toggle: () => dropDown },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, { onClick: () => openDrop(tablesId) },
                        checked,
                        " elementi selezionati"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Multi selezione attiva"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                        normalizedThirdQuery.map((el, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: i, "data-table-id": tablesId, className: "d-flex justify-content-start", strategy: "fixed" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Input, { onChange: onChangeCheckBox, type: "checkbox", id: tablesId, name: el.label, value: el.value, defaultChecked: el.listel &&
                                            el.listel.filter(function (e) {
                                                return e.checkValue === el.label;
                                            }).length > 0 }),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("label", { htmlFor: tablesId, className: "ml-3 mb-0", id: tablesId },
                                        " ",
                                        el.label))));
                        }))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<=", className: "d-flex  col-md-4" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "single") }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">=", className: "" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "single") }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "<", className: "" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "single") }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: ">", className: "" },
                dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { placeholder: "Seleziona il Layer", onChange: (e) => univocoSelectHandler(e, "single") }, normalizedThirdQuery.map((el, i) => {
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
                }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "flex-shrink-1" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown, { activeIcon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownButton, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_application_setting__WEBPACK_IMPORTED_MODULE_1__.SettingOutlined, { className: "setting-svg" })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu, null,
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { header: true }, "Importa il tipo di input"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { divider: true }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "valore", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Valore"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "campo", onClick: (e) => dropdownItemHandler(e, "single"), disabled: true, "data-table-id": tablesId }, "Campo"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem, { value: "univoco", onClick: (e) => dropdownItemHandler(e, "single"), "data-table-id": tablesId }, "Univoci"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is null" }),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is not null" }),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "included", className: "" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "include" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textFirstIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesId, id: "inputs" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-md-2 text-center", style: { width: "10%" } }, "e"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textSecondIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesId, id: "inputs" }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is_not_included", className: "" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "include" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textFirstIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", id: "inputs", "data-table-id": tablesId }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-sm-2 text-center" }, "e"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textSecondIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", id: "inputs", "data-table-id": tablesId }))),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE", className: "" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE%", className: "" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT LIKE", className: "" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


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
                        return `${firstQuery} ${queryRequest} ${secondQueryTarget}`;
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
        this.univocoSelectHandler = (e, queryType = "single") => {
            let txt = e.currentTarget.textContent.trim();
            let currentTableId = e.currentTarget.attributes[2].value;
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
                        query.where = `${firstQuery} ${queryRequest} ${secondQueryTarget}`;
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
                this.setState({
                    dropDowns: Object.assign(Object.assign({}, this.state.dropDowns), { [this.state.dropId]: false }),
                });
                this.setState({
                    dropDownsSet: Object.assign(Object.assign({}, this.state.dropDownsSet), { [this.state.dropIdSet]: false }),
                });
                this.setState({ mouseleave: false });
            }
            if (this.state.dropIdSet !== null && this.state.mouseleave) {
                this.setState({
                    dropDownsSet: Object.assign(Object.assign({}, this.state.dropDownsSet), { [this.state.dropIdSet]: false }),
                });
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
        this.getQueryAttributeSet = this.getQueryAttributeSet.bind(this);
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
    getQueryAttribute(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let currentWhereClause;
            if (!this.state.whereClauses.length) {
                let whereClause = {
                    id: e.currentTarget.attributes[1].value,
                    attributeQuery: e.currentTarget.name,
                    attributeQueryType: e.currentTarget.attributes.datatype.value,
                    queryValue: "=",
                };
                currentWhereClause = whereClause;
                this.setState({ whereClauses: [whereClause] });
            }
            if (this.state.whereClauses.length) {
                const queryIndex = this.state.whereClauses
                    .map((obj) => obj.id)
                    .indexOf(e.currentTarget.attributes[1].value);
                if (queryIndex !== -1) {
                    const updateState = this.state.whereClauses.map((obj) => {
                        if (obj.id === e.currentTarget.attributes[1].value) {
                            obj = Object.assign(Object.assign({}, obj), { attributeQuery: e.currentTarget.name, attributeQueryType: e.currentTarget.attributes.datatype.value });
                            obj = this.removeValueFromObject(obj);
                            let filteredWhereClauses = this.state.whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            currentWhereClause = obj;
                            return this.setState({ whereClauses: filteredWhereClauses });
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
                    this.setState({
                        whereClauses: [...this.state.whereClauses, whereClause],
                    });
                    this.state.whereClauses.sort(function (a, b) {
                        return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                    });
                }
            }
            this.setState({ selectedField: e.currentTarget.name }, () => {
                if (currentWhereClause)
                    this.manipulateFieldQuery(currentWhereClause.queryValue, currentWhereClause.id, "single");
            });
        });
    }
    getQueryAttributeSet(e) {
        return __awaiter(this, void 0, void 0, function* () {
            let currentWhereClause;
            if (!this.state.whereClauseSet.length) {
                let whereClauseSet = {
                    id: e.currentTarget.attributes[1].value,
                    attributeQuery: e.currentTarget.name,
                    attributeQueryType: e.currentTarget.attributes.datatype.value,
                    queryValue: "=",
                };
                currentWhereClause = whereClauseSet;
                this.setState({ whereClauseSet: [whereClauseSet] });
            }
            if (this.state.whereClauseSet.length) {
                const queryIndex = this.state.whereClauseSet
                    .map((obj) => obj.id)
                    .indexOf(e.currentTarget.attributes[1].value);
                if (queryIndex !== -1) {
                    const updateState = this.state.whereClauseSet.map((obj) => {
                        if (obj.id === e.currentTarget.attributes[1].value) {
                            obj = Object.assign(Object.assign({}, obj), { attributeQuery: e.currentTarget.name, attributeQueryType: e.currentTarget.attributes.datatype.value });
                            obj = this.removeValueFromObject(obj);
                            let filteredWhereClauseSet = this.state.whereClauseSet.filter((a) => a.id !== obj.id);
                            filteredWhereClauseSet.push(obj);
                            filteredWhereClauseSet.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            currentWhereClause = obj;
                            return this.setState({ whereClauseSet: filteredWhereClauseSet });
                        }
                        return { obj };
                    });
                }
                else {
                    let whereClauseSet = {
                        id: e.currentTarget.attributes[1].value,
                        attributeQuery: e.currentTarget.name,
                        attributeQueryType: e.currentTarget.attributes.datatype.value,
                    };
                    currentWhereClause = whereClauseSet;
                    this.setState({
                        whereClauseSet: [...this.state.whereClauseSet, whereClauseSet],
                    });
                    this.state.whereClauseSet.sort(function (a, b) {
                        return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                    });
                }
            }
            this.setState({ selectedField: e.currentTarget.name }, () => {
                this.manipulateFieldQuery(currentWhereClause.queryValue, currentWhereClause.id, "set");
            });
        });
    }
    // for called on drop select list
    getQuery(e, type = "single") {
        return __awaiter(this, void 0, void 0, function* () {
            const clickedQueryTableId = e.currentTarget.attributes[1].value;
            const currentTargetName = e.currentTarget.name;
            this.manipulateFieldQuery(currentTargetName, clickedQueryTableId, type);
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
                            if (queryValue === "IN" && el.checkedList.length) {
                                el.checkedList.forEach((el) => value.push(el.checkValue));
                            }
                            else if (queryValue === "NOT_IN" &&
                                this.state.counterIsChecked.length) {
                                this.state.counterIsChecked.forEach((el) => value.push(el.checkValue));
                            }
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
                        width > 600 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row mt-1 mb-3 justify-content-around" },
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
                        590 > width && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "flex", flexDirection: "column" } },
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
                                this.state.tables.map((el, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "w-100", key: i, id: `row-${i}`, list: this.state.resultsLayerSelected, isOpenDropD: this.state.isOpen, dropDown: () => this.dropDown(el.id), dropdownValueQuery: this.state.dropdownValueQuery, isChecked: this.state.isChecked, counterIsChecked: this.state.counterIsChecked, checkedToQuery: this.state.checkedToQuery, tables: this.state.tables, tablesId: el.id, whereClauses: this.state.whereClauses, getQueryAttribute: this.getQueryAttribute, getQuery: this.getQuery, handleThirdQuery: this.thirdQuery, textInputHandler: this.textInputHandler, dropdownItemHandler: this.dropdownItemClick, textFirstIncludedHandler: this.textFirstIncludedHandler, textSecondIncludedHandler: this.textSecondIncludedHandler, dropDownToggler: this.dropDown, handleCheckBox: this.handleCheckBox, deleteTable: () => this.deleteTable(el.id), univocoSelectHandler: this.univocoSelectHandler, onChangeCheckBox: this.onChangeCheckBox, openDrop: this.openDrop, closeDrop: this.closeDrop, opened: this.state.opened, autOpen: this.state.autOpen, mouseleave: this.state.mouseleave, onmouseLeave: this.onmouseLeave, functionCounterIsChecked: this.functionCounterIsChecked, dropdowns: this.state.dropDowns, itemNotFound: this.state.itemNotFound, selectedId: this.state.selectedId, currentTable: el }))),
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
                                        counts < 2 ? (counts == 1 ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Visualizza le feature nel layer corrispondenti alla seguente espressione")) : ("")) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                                                display: "flex",
                                                flexDirection: "row",
                                                marginTop: "20px",
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
                                            getQueryAttribute: this.getQueryAttributeSet, getQuery: this.getQuerySet, handleThirdQuery: this.thirdQuery, textInputHandler: this.textInputHandler, dropdownItemHandler: this.dropdownItemClick, textFirstIncludedHandler: this.textFirstIncludedHandler, textSecondIncludedHandler: this.textSecondIncludedHandler, dropDownToggler: this.dropDownSet, handleCheckBox: this.handleCheckBox, deleteTable: (e) => this.deleteBlockTable(`${innerEl.id}` + "-" + `${el.blockId}`, `${el.blockId}`), univocoSelectHandler: this.univocoSelectHandler, onChangeCheckBox: this.onChangeCheckBoxSet, openDrop: this.openDropSet, closeDrop: this.closeDrop, opened: this.state.opened, autOpen: this.state.autOpen, mouseleave: this.state.mouseleave, onmouseLeave: this.onmouseLeave, functionCounterIsChecked: this.functionCounterIsChecked, dropdownsSet: this.state.dropDownsSet, itemNotFound: this.state.itemNotFound, showDelete: counts > 2 ? true : false, showBlockDelete: counts === 2 && i == 0 ? true : false, 
                                            // showDelete={TableArray.length > 2 ? true:false}
                                            // showBlockDelete={TableArray.length === 2 && i==0 ? true:false }
                                            blockId: el.blockId, deleteBlockAll: () => this.deleteBlockAll({ el, innerEl }), currentTable: innerEl })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9xdWVyeS1idWlsZGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHFFQUFxRSxlQUFlLHFCQUFxQiwrQkFBK0IsMENBQTBDLHFCQUFxQixTQUFTLHNJQUFzSSxLQUFLLHFCQUFxQixLQUFLLEtBQUssbUVBQW1FLGlCQUFpQixxQkFBcUIsT0FBTyxHQUFHLDZCQUE2QiwyQ0FBMkMsb0JBQW9CLE9BQU8sR0FBRyx1QkFBdUI7QUFDMW1CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2REFBNkQsb0JBQW9CLGdDQUFnQyx3QkFBd0IsMEJBQTBCLG9CQUFvQixxQkFBcUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsV0FBVyxrQ0FBa0MsY0FBYyxrQkFBa0IsMEJBQTBCLGFBQWEsNEJBQTRCLFNBQVMsc0hBQXNILFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSx1REFBdUQsd0JBQXdCLGtDQUFrQyxLQUFLLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLHVCQUF1QixLQUFLLGlCQUFpQiwyQkFBMkIsa0NBQWtDLEtBQUssY0FBYyxvQ0FBb0MsS0FBSyxpQkFBaUIsc0JBQXNCLDRCQUE0QixLQUFLLGdCQUFnQiw2QkFBNkIsS0FBSyxtQ0FBbUM7QUFDenRDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNB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TTtnQ0FDTiwwREFBTTtnQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxDQUMxQiwrQ0FBQywwQ0FBSyxJQUNKLFNBQVMsRUFBQyxPQUFPLEVBQ2pCLElBQUksRUFBQyxPQUFPLEVBQ1osSUFBSSxRQUNKLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDN0IsSUFBSSxFQUFDLE9BQU8sRUFDWixRQUFRLFNBQ1IsQ0FDSCxDQUNHLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FDUDtTQUFBLENBQ21CLENBQ3ZCLENBQUM7SUFDSixDQUFDOztBQTU5RU0sY0FBTyxHQUFHLElBQUksQ0FBQztBQUNmLHFCQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLDJCQUFvQixHQUFHLElBQUksQ0FBQztBQUM1QixrQkFBVyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcz84MzgzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3M/YWJiYiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZWRpdG9yL3BsdXMuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsdXMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9jb25uZWN0b3IudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL2Nvbm5lY3Rvci9hdHRyaWJ1dGVfdGFibGVfY29ubmVjdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQWRkU2V0VGFibGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvVGFibGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2xpYi9SZXNpemVEZXRlY3Rvci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvbGliL3V0aWxzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL3V0aWxzL3F1ZXJ5VGFibGVWYWx1ZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvUG9seWdvblwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdFwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0LWRvbVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY29sLW1kLTQge1xcbiAgICBmbGV4OiBhdXRvOyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jbG9zZS1jb250YWluZXItdGFibGUtcXVlcnktYnVpbGRlciB7XFxuICAgIGZsZXg6IGF1dG87IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSTtJQUNJLFVBQVUsRUFBQSxFQUNiOztBQUdMO0VBQ0k7SUFDSSxVQUFTLEVBQUEsRUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XFxuICAgIC5jb2wtbWQtNCB7XFxuICAgICAgICBmbGV4OiBhdXRvO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcXG4gICAgLmNsb3NlLWNvbnRhaW5lci10YWJsZS1xdWVyeS1idWlsZGVye1xcbiAgICAgICAgZmxleDphdXRvO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pdGVtLXRhYmxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWY3ZmY7IH1cXG5cXG4uc2V0dGluZy1zdmc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMwMDVlY2E7IH1cXG5cXG4uc2V0dGluZy1zdmcge1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTsgfVxcblxcbiN3cmFwIHtcXG4gIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDsgfVxcblxcbi5pbmNsdWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuI2lucHV0cyB7XFxuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxlQUFlO0VBQ2YseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxxQkFBb0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaXRlbS10YWJsZTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmN2ZmO1xcclxcbn1cXHJcXG4uc2V0dGluZy1zdmc6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwMDVlY2E7XFxyXFxufVxcclxcbi5zZXR0aW5nLXN2Z3tcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jd3JhcHtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5jbHVkZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0c3tcXHJcXG4gICAgd2lkdGg6MjAlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOS40MzguOTk0Yy4yMTMgMCAuMzk3LjE0Ni40NC4zNS4xNTEuNzIyLjI1NyAxLjM0LjMxNiAxLjg1Mi4zNzQuMTYuNzI1LjM2MiAxLjA0OC41OTlsMS43MjgtLjY3NmEuNDU1LjQ1NSAwIDAgMSAuNTU2LjE4OGwxLjQyIDIuMzk0YS40My40MyAwIDAgMS0uMDkxLjU0NyAyMS45OCAyMS45OCAwIDAgMS0xLjQ5IDEuMTk0IDUuMTcgNS4xNyAwIDAgMS0uMDA3IDEuMTgzbDEuNDY0IDEuMTE5YS40My40MyAwIDAgMSAuMTExLjU2M2wtMS40MiAyLjM5NGEuNDU0LjQ1NCAwIDAgMS0uNTMuMTk3IDIyLjQ0NSAyMi40NDUgMCAwIDEtMS44MDctLjY2Yy0uMzI1LjIzMy0uNjc5LjQzLTEuMDU1LjU4NmwtLjI2MyAxLjc5NGEuNDQ2LjQ0NiAwIDAgMS0uNDQ1LjM3Nkg2LjU3NGEuNDQ2LjQ0NiAwIDAgMS0uNDQtLjM1IDIxLjAxOSAyMS4wMTkgMCAwIDEtLjMxNy0xLjg1MyA1LjM0IDUuMzQgMCAwIDEtMS4wNDctLjU5OGwtMS43MjguNjc1YS40NTUuNDU1IDAgMCAxLS41NTYtLjE4N2wtMS40Mi0yLjM5NWEuNDMuNDMgMCAwIDEgLjA5MS0uNTQ2Yy41NjctLjQ5IDEuMDYzLS44ODggMS40OS0xLjE5NGE1LjE2NyA1LjE2NyAwIDAgMSAuMDA4LTEuMTgzTDEuMTkgNi4yNDNhLjQzLjQzIDAgMCAxLS4xMTItLjU2MmwxLjQyLTIuMzk1YS40NTUuNDU1IDAgMCAxIC41MzEtLjE5NmMuNzE5LjIzMyAxLjMyMS40NTMgMS44MDcuNjYuMzI0LS4yMzMuNjc5LS40MyAxLjA1Ni0uNTg3bC4yNjItMS43OTRBLjQ0Ni40NDYgMCAwIDEgNi42Ljk5NGgyLjgzOVptLS4zNjUgMUg2Ljk4NWwtLjI4IDEuODY2LS40NjcuMTljLS4yMzUuMDk1LS40Ni4yMS0uNjcyLjM0bC0uMjA3LjEzNi0uNDIuMjkzLS40NzYtLjE5N2MtLjMyOC0uMTM3LS43MTgtLjI4MS0xLjE2OS0uNDMzbC0uMjIxLS4wNzQtMS4wNDUgMS43MTlMMy41OSA2Ljk5OWwtLjA2LjQ3OWE0LjEyNyA0LjEyNyAwIDAgMC0uMDIxLjgxNmwuMDE0LjE0NC4wNTguNDkyLS40MTkuMjk0Yy0uMjg4LjIwMy0uNjE1LjQ1MS0uOTc5Ljc0NmwtLjE3Ny4xNDUgMS4wNDMgMS43MiAxLjg0NS0uNzAzLjQwNi4yOWMuMjA0LjE0Ni40Mi4yNzQuNjQ1LjM4NGwuMjI4LjEwMy40NzQuMTk5LjA1OS40OWMuMDQuMzM4LjEwMy43MzEuMTkgMS4xNzdsLjA0My4yMTloMi4wODhsLjI4Mi0xLjg2Ny40NjYtLjE5Yy4yMzYtLjA5NS40Ni0uMjEuNjcyLS4zNGwuMjA3LS4xMzYuNDE5LS4yOTMuNDc2LjE5OGMuMzMuMTM2LjcyLjI4IDEuMTcuNDMzbC4yMi4wNzIgMS4wNDQtMS43MTgtMS41Ni0xLjE2NS4wNi0uNDc5YTQuMTMxIDQuMTMxIDAgMCAwIC4wMi0uODE1bC0uMDEzLS4xNDQtLjA2LS40OTIuNDItLjI5NWExOC4xIDE4LjEgMCAwIDAgLjk4LS43NDZsLjE3Ni0uMTQ2LTEuMDQzLTEuNzItMS44NDQuNzA1LS40MDYtLjI5YTQuNDk2IDQuNDk2IDAgMCAwLS42NDYtLjM4NWwtLjIyOC0uMTAzLS40NzQtLjE5OS0uMDU4LS40OWMtLjAzMi0uMjctLjA4LS41NzYtLjE0LS45MTZsLS4wOTQtLjQ4Wm0tMS4wNjcgM2EzIDMgMCAxIDEgMCA2IDMgMyAwIDAgMSAwLTZabTAgMWEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwibTguNzQ1IDggNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ1Ljc0Nkw4IDguNzQ2bC02LjEgNi4xYS41MjcuNTI3IDAgMSAxLS43NDYtLjc0Nmw2LjEtNi4xLTYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni0uNzQ2bDYuMSA2LjEgNi4xLTYuMWEuNTI3LjUyNyAwIDAgMSAuNzQ2Ljc0Nkw4Ljc0NiA4WlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldHRpbmdPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3BsdXMuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIlxyXG5cclxudHlwZSBsYXllckNvbnRlbnRzT2JqZWN0VHlwZSA9IHtcclxuICAgIGlkOnN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6YW55W11cclxufVxyXG5cclxudHlwZSBzZWxlY3RlZExheWVyVHlwZSA9IHtcclxuICAgIGlkOnN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6YW55W11cclxufVxyXG5cclxuY2xhc3MgSGVscGVyIHtcclxuXHJcbiAgICBzZXRRdWVyeUFycmF5ID0gW107XHJcbiAgICBzZXRPdXRGaWVsZHMgPSBbXTtcclxuXHJcbiAgICBnZXRMYXllckF0dHJpYnV0ZXMgPSAoc2VsZWN0ZWRMYXllcklkOnN0cmluZyxsYXllckNvbnRlbnRzOmxheWVyQ29udGVudHNPYmplY3RUeXBlW10pOmFueVtdPT57XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcclxuICAgICAgICBpZiAobGF5ZXJDb250ZW50cz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNPYmplY3QgPSBsYXllckNvbnRlbnRzLmZpbmQoKGxheWVyQ29udGVudDpsYXllckNvbnRlbnRzT2JqZWN0VHlwZSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChsYXllckNvbnRlbnQ/LmlkID09PSBzZWxlY3RlZExheWVySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXllckNvbnRlbnQ/LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT2JqZWN0Py5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZUtleUFycmF5ID0gKGF0dHJpYnV0ZXM6YW55KTpzdHJpbmdbXT0+e1xyXG4gICAgICAgIGxldCByZXR1cm5lZEtleXMgPSBbXTtcclxuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgcmV0dXJuZWRLZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5lZEtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyID0ocmVzdWx0czphbnksY2hlY2tlZExheWVyczpzdHJpbmdbXSk6c2VsZWN0ZWRMYXllclR5cGVbXT0+ey8vc3RlcDUgZnJvbSBzZWxlY3RlZCBpdGVtcyBnZXQgdGhlaXIgbGF5ZXJzXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICBpZiAocmVzdWx0cz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZExheWVyQ29udGVudHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudExheWVySWQgPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTGF5ZXJzLmluZGV4T2YoY3VycmVudExheWVySWQpICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJDb250ZW50c1tcImlkXCJdID0gaXRlbXNbMF0/LmxheWVyPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiYXR0cmlidXRlc1wiXSA9IHRoaXMuZ2V0QXR0cmlidXRlcyhpdGVtcyk7Ly9zdGVwNiBwYWNrYWdpbmcgYXR0cmlidXRlcyBhbmQga2VlcGluZyBsb24gYW5kIGxhdGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2VsZWN0ZWRMYXllckNvbnRlbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgICAgICAgICAgfSxbXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkTGF5ZXJzQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlcyA9IChpdGVtczphbnlbXSk6YW55W109PntcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQXJyYXkgPSBpdGVtcy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW0pPT57XHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5hdHRyaWJ1dGVzKXtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmdlb21ldHJ5KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGl0ZW0uZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBnZW9tZXRyeT8ubGF0aXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gZ2VvbWV0cnk/LmxvbmdpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvbmdpdHVkZSAmJiBsYXRpdHVkZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goey4uLml0ZW0uYXR0cmlidXRlcyxsb2NhdGlvbjpbbGF0aXR1ZGUsbG9uZ2l0dWRlXX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgICAgIH0sW10pXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1iZXJPZkF0dHJpYnV0ZXMgPSAobGF5ZXJzQ29udGVudHM6e2lkOnN0cmluZyxhdHRyaWJ1dGVzOmFueVtdfVtdKT0+e1xyXG4gICAgICAgIGxldCBsYXllckNvbnRlbnRzT2JqZWN0ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2kgPCBsYXllcnNDb250ZW50cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgIGxheWVyQ29udGVudHNPYmplY3QgPSB7Li4ubGF5ZXJDb250ZW50c09iamVjdCxbbGF5ZXJzQ29udGVudHNbaV0/LmlkXTpsYXllcnNDb250ZW50c1tpXT8uYXR0cmlidXRlcz8ubGVuZ3RoPz8wfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGF5ZXJDb250ZW50c09iamVjdDtcclxuICAgIH1cclxuIFxyXG4gICAgZ2V0Q2xpY2tlZExheWVyU3RhdHVzID0gKHJlc3VsdHM6YW55W10sc2VsZWN0ZWRMYXllcjpzZWxlY3RlZExheWVyVHlwZVtdKTpib29sZWFuPT57XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwICYmIHNlbGVjdGVkTGF5ZXI/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgcmVzdWx0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBsYXllcklkID0gcmVzdWx0c1tpXT8uZ3JhcGhpYz8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBzZWxlY3RlZExheWVyLmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT09IGxheWVySWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZMYXllcldhc0FkZGVkID0gKGxheWVySWQ6c3RyaW5nLG1hcExheWVyc0l0ZW1zOmFueVtdKT0+e1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICBpZiAobWFwTGF5ZXJzSXRlbXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBpbmRleCA9IG1hcExheWVyc0l0ZW1zLmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0/LmlkID09PSBsYXllcklkKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9wZW5UYWJsZUF0dHJpYnV0ZSA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgYXJpYUV4cGFuZGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1jb250cm9sbGVyXCIpO1xyXG4gICAgICAgIGlmIChhcmlhRXhwYW5kZWRFbGVtZW50LmFyaWFFeHBhbmRlZCA9PT0gXCJmYWxzZVwiKXtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGFyaWFFeHBhbmRlZEVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBdHRyaWJ1dGVUYWJsZSA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgYXJpYUV4cGFuZGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1jb250cm9sbGVyXCIpO1xyXG4gICAgICAgIGlmIChhcmlhRXhwYW5kZWRFbGVtZW50LmFyaWFFeHBhbmRlZCA9PT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgYXJpYUV4cGFuZGVkRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1iZXJPZkl0ZW1zSW5GaWVsZCA9IChmaWVsZDpzdHJpbmcsc2VsZWN0ZWRBdHRyaWJ1dGVzOmFueVtdKT0+e1xyXG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zID0gMDtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRBdHRyaWJ1dGVzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgbGV0IHZhbHVlQXJyID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDtpPCBzZWxlY3RlZEF0dHJpYnV0ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUFyci5wdXNoKHNlbGVjdGVkQXR0cmlidXRlc1tpXVtmaWVsZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXMgPSB2YWx1ZUFyci5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1iZXJPZkl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhpZ2hsaWdodGVkSWRzID0gKGZlYXR1cmVzOmFueVtdKT0+e1xyXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodElkcyA9IFtdO1xyXG4gICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGgpZmVhdHVyZXMuZm9yRWFjaChlbD0+aGlnaGxpZ2h0SWRzLnB1c2goZWwuYXR0cmlidXRlcy5PQkpFQ1RJRCkpXHJcbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodElkcztcclxuICAgIH1cclxuXHJcbiAgICBsaWtlbHlRdWVyeSA9IChhdHRyaWJ1dGVRdWVyeSxxdWVyeVZhbHVlLHZhbHVlKT0+e1xyXG4gICAgICAgIHN3aXRjaChxdWVyeVZhbHVlKXtcclxuICAgICAgICAgICAgY2FzZSBcIkxJS0UlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlUXVlcnl9IExJS0UgJyUke3ZhbHVlfSdgO1xyXG4gICAgICAgICAgICBjYXNlIFwiJUxJS0UlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlUXVlcnl9IExJS0UgJyUke3ZhbHVlfSUnYDtcclxuICAgICAgICAgICAgY2FzZSBcIiVMSUtFXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlUXVlcnl9IExJS0UgJyUke3ZhbHVlfSdgO1xyXG4gICAgICAgICAgICBjYXNlIFwiTk9UIExJS0VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTk9UIExJS0UgJyUke3ZhbHVlfSUnYDsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcXVlcnlTZXRDb25zdHJ1Y3RvciA9IChxdWVyeTphbnksc2V0V2hlcmVDbGF1c2U6YW55W10sQW5kT3JTZXQ6YW55LGZpZWxkOnN0cmluZyk9PntcclxuICAgICAgICBsZXQgY3VycmVudFF1ZXJ5ID0gcXVlcnkud2hlcmU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXRRdWVyeUFycmF5Lmxlbmd0aCA8IHNldFdoZXJlQ2xhdXNlLmxlbmd0aC0xLFwiY2hlY2tpbmdcIilcclxuICAgICAgICBpZiAodGhpcy5zZXRRdWVyeUFycmF5Lmxlbmd0aCA8IHNldFdoZXJlQ2xhdXNlLmxlbmd0aC0xKXtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXJ5ID0gcXVlcnkud2hlcmUgKyAgXCIgXCIgKyBBbmRPclNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRRdWVyeUFycmF5LnB1c2goY3VycmVudFF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnNldE91dEZpZWxkcy5wdXNoKGAke2ZpZWxkfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2V0UXVlcnlBcnJheSx0aGlzLnNldE91dEZpZWxkcyxcIm1ha2Ugc3VyZVwiKVxyXG4gICAgICAgIC8vIGlmKHRoaXMuc2V0UXVlcnlBcnJheS5sZW5ndGggPj0gc2V0V2hlcmVDbGF1c2UubGVuZ3RoKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHtxdWVyeVNldEFycmF5OnRoaXMuc2V0UXVlcnlBcnJheSxxdWVyeVNldE91dGZpZWxkczp0aGlzLnNldE91dEZpZWxkc31cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFibGVTZXRDb3VudHMgPSAodGFibGVTZXRDb3VudHM6e2lkOnN0cmluZyxkZWxldGVkOmJvb2xlYW59W10pPT57XHJcbiAgICAvLyAgICAgbGV0IGNvdW50cyA9IDBcclxuICAgIC8vICAgICBpZiAodGFibGVTZXRDb3VudHMubGVuZ3RoKXtcclxuICAgIC8vICAgICAgIGNvbnN0IGNvcGllZFRhYmxlU2V0Q291bnRzID0gWy4uLnRhYmxlU2V0Q291bnRzXTtcclxuICAgIC8vICAgICAgIGNvcGllZFRhYmxlU2V0Q291bnRzLmZpbHRlcigoaXRlbSk9PiFpdGVtLmRlbGV0ZWQpO1xyXG4gICAgLy8gICAgICAgY291bnRzID0gY29waWVkVGFibGVTZXRDb3VudHMubGVuZ3RoXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBjb3VudHM7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICBnZXRRdWVyeVNldFZhbHVlID0gKCk9Pih7cXVlcnlTZXRBcnJheTp0aGlzLnNldFF1ZXJ5QXJyYXkscXVlcnlTZXRPdXRmaWVsZHM6dGhpcy5zZXRPdXRGaWVsZHN9KVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhlbHBlcigpOyIsIlxuaW1wb3J0IHsgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCB7IGFwcEFjdGlvbnMgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5cbnR5cGUgc3BhdGlhbFJlbGF0aW9uc2hpcFR5cGUgPSBcImludGVyc2VjdHNcIiB8IFwiY29udGFpbnNcIiB8IFwiY3Jvc3Nlc1wiIHwgXCJkaXNqb2ludFwiIHwgXCJlbnZlbG9wZS1pbnRlcnNlY3RzXCIgfCBcImluZGV4LWludGVyc2VjdHNcIiB8IFwib3ZlcmxhcHNcIiB8IFwidG91Y2hlc1wiIHwgXCJ3aXRoaW5cIiB8IFwicmVsYXRpb25cIlxuXG50eXBlIGxheWVyT3BlblR5cGUgPSB7XG4gICAgZ2VvbWV0cnk6YW55LFxuICAgIHR5cGVTZWxlY3RlZDpzcGF0aWFsUmVsYXRpb25zaGlwVHlwZSxcbiAgICB3aGVyZT86c3RyaW5nLFxuICAgIGdyYXBoaWNzRm91bmQ/OmFueSxcbiAgICB2YWx1ZUJ1ZmZlcj86YW55XG59XG5cbnR5cGUgaW5pdE9ialR5cGUgPSB7XG4gICAgcmVzdWx0czphbnlbXSxcbiAgICBhbGxDaGVja2VkTGF5ZXJzPzphbnlbXSxcbiAgICBpc0xheWVyQ2hlY2tlZD86Ym9vbGVhbixcbiAgICBjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXSxcbiAgICBudW1iZXJPZkF0dHJpYnV0ZXM/Ontba2V5OnN0cmluZ106c3RyaW5nfSxcbiAgICBsYXllck9wZW4/OmxheWVyT3BlblR5cGUsXG4gICAgY3JlYXRlVGFibGU/OnRydWVcbn1cblxudHlwZSBzZWxlY3RlZExheWVyVHlwZSA9IHtpZDpzdHJpbmcsYXR0cmlidXRlczphbnlbXX1cblxuY2xhc3MgQXR0cmlidXRlVGFibGVDb25uZWN0b3Ige1xuXG4gICAgc3RhdGljIGFjdGl2ZVZpZXc6SmltdU1hcFZpZXcgPSBudWxsO1xuICAgIHN0YXRpYyBzZWxmOmFueSA9IG51bGw7XG5cbiAgICBhbGxDaGVja2VkTGF5ZXJzPzphbnlbXTtcbiAgICBjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXTtcbiAgICBudW1iZXJPZkF0dHJpYnV0ZXM/Ontba2V5OnN0cmluZ106c3RyaW5nfTtcbiAgICBjcmVhdGVUYWJsZTpib29sZWFuO1xuICAgIGxheWVyT3BlbjpsYXllck9wZW5UeXBlO1xuICAgIGlzTGF5ZXJDaGVja2VkOmJvb2xlYW5cblxuXG4gICAgY29uc3RydWN0b3IoYWN0aXZlVmlldzpKaW11TWFwVmlldyxzZWxmOmFueSl7XG4gICAgICAgIEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmFjdGl2ZVZpZXcgPSBhY3RpdmVWaWV3O1xuICAgICAgICBBdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5zZWxmID0gc2VsZjtcbiAgICB9XG5cbiAgICBpbml0KG9iajppbml0T2JqVHlwZSl7ICBcblxuICAgICAgICBjb25zdCByZXN1bHRzID0gb2JqLnJlc3VsdHM7XG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSBvYmouYWxsQ2hlY2tlZExheWVycztcbiAgICAgICAgbGV0IGNyZWF0ZVRhYmxlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGlzTGF5ZXJDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGxldCBjaGVja2VkTGF5ZXJzID0gbnVsbDtcbiAgICAgICAgbGV0IG51bWJlck9mQXR0cmlidXRlcyA9IG51bGw7XG4gICAgICAgIGxldCBsYXllck9wZW4gPSBudWxsO1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwiY3JlYXRlVGFibGVcIikpe1xuICAgICAgICAgICAgY3JlYXRlVGFibGUgPSBvYmouY3JlYXRlVGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImlzTGF5ZXJDaGVja2VkXCIpKXtcbiAgICAgICAgICAgIGlzTGF5ZXJDaGVja2VkID0gb2JqLmlzTGF5ZXJDaGVja2VkIFxuICAgICAgICB9XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJjaGVja2VkTGF5ZXJzXCIpKXtcbiAgICAgICAgICAgIGNoZWNrZWRMYXllcnMgPSBvYmouY2hlY2tlZExheWVycyBcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwibnVtYmVyT2ZBdHRyaWJ1dGVzXCIpKXtcbiAgICAgICAgICAgIG51bWJlck9mQXR0cmlidXRlcyA9IG9iai5udW1iZXJPZkF0dHJpYnV0ZXMgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImxheWVyT3BlblwiKSl7XG4gICAgICAgICAgICBsYXllck9wZW4gPSBvYmoubGF5ZXJPcGVuIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlYXRlVGFibGUgPSBjcmVhdGVUYWJsZTtcbiAgICAgICAgdGhpcy5pc0xheWVyQ2hlY2tlZCA9IGlzTGF5ZXJDaGVja2VkO1xuICAgICAgICB0aGlzLnNldEFsbENoZWNrZWRMYXllcnMoYWxsQ2hlY2tlZExheWVycyxyZXN1bHRzKTtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkTGF5ZXJzKGFsbENoZWNrZWRMYXllcnMsY2hlY2tlZExheWVycyk7XG4gICAgICAgIC8vIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVycyhhbGxDaGVja2VkTGF5ZXJzKTtcbiAgICAgICAgdGhpcy5zZXROdW1iZXJPZkF0dHJpYnV0ZXMocmVzdWx0cyxudW1iZXJPZkF0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnNldExheWVyT3BlbihsYXllck9wZW4pO1xuICAgIH1cblxuICAgIGlzQXJyYXkgPSAodmFsKT0+QXJyYXkuaXNBcnJheSh2YWwpO1xuXG4gICAgaXNPYmplY3QgPSAodmFsKT0+T2JqZWN0LmtleXModmFsKS5sZW5ndGggPiAwICYmICFBcnJheS5pc0FycmF5KHZhbCk7XG5cbiAgICBsb29wTGF5ZXJHZXRJZHMgPSAobGF5ZXI6YW55W10pPT57XG4gICAgICAgIGxldCBpZHNBcnJheSA9IFtdO1xuICAgICAgICBpZiAobGF5ZXIubGVuZ3RoKXtcbiAgICAgICAgICAgIGlkc0FycmF5ID0gbGF5ZXIucmVkdWNlKChuZXdBcnJheSxpdGVtKT0+e1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgICB9LFtdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZHNBcnJheTtcbiAgICB9XG5cblxuXG4gICAgc2V0Q2hlY2tlZExheWVycyA9IChjdXJyZW50QWxsQ2hlY2hlZExheWVyczphbnksY2hlY2tlZExheWVycz86c3RyaW5nW10sKT0+e1xuICAgICAgICBsZXQgYWxsQ2hlY2tlZExheWVycyA9IGN1cnJlbnRBbGxDaGVjaGVkTGF5ZXJzO1xuICAgICAgICBpZiAoIWFsbENoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgYWxsQ2hlY2tlZExheWVycyA9IHRoaXMuYWxsQ2hlY2tlZExheWVycztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tlZExheWVycyl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjaGVja2VkTGF5ZXJzQXJyID0gW107XG4gICAgICAgIGlmIChhbGxDaGVja2VkTGF5ZXJzKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGFsbENoZWNrZWRMYXllcnMpKXtcbiAgICAgICAgICAgICAgICBjaGVja2VkTGF5ZXJzQXJyLnB1c2goYWxsQ2hlY2tlZExheWVycy5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkTGF5ZXJzID0gY2hlY2tlZExheWVyc0FycjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc0FycmF5KGFsbENoZWNrZWRMYXllcnMpKXtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZExheWVyc0Fyci5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkTGF5ZXJzQXJyID0gWy4uLmNoZWNrZWRMYXllcnNBcnIsLi4udGhpcy5sb29wTGF5ZXJHZXRJZHMoYWxsQ2hlY2tlZExheWVycyldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzQXJyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnMgPSB0aGlzLmxvb3BMYXllckdldElkcyhhbGxDaGVja2VkTGF5ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkTGF5ZXJzID0gY2hlY2tlZExheWVycztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFsbENoZWNrZWRMYXllcnNGcm9tUmVzdWx0cyA9IChyZXN1bHRzOmFueVtdKT0+e1xuICAgICAgICBpZiAocmVzdWx0cz8ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gcmVzdWx0cy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW1zOmFueVtdKT0+e1xuICAgICAgICAgICAgICAgIGlmIChpdGVtcz8ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbXNbMF0/LmxheWVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgICB9LFtdKVxuICAgICAgICAgICAgdGhpcy5hbGxDaGVja2VkTGF5ZXJzID0gYWxsQ2hlY2tlZExheWVycztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIlBhc3MgcmVzdWx0cyBhZnRlciBxdWVyeVwiXG5cbiAgICB9XG5cbiAgICBzZXRBbGxDaGVja2VkTGF5ZXJzID0gKGFsbENoZWNrZWRMYXllcnM6YW55LHJlc3VsdHM6YW55W10pPT57XG4gICAgICAgIGlmIChhbGxDaGVja2VkTGF5ZXJzKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KGFsbENoZWNrZWRMYXllcnMpKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbENoZWNrZWRMYXllcnMgPSBbYWxsQ2hlY2tlZExheWVyc11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZExheWVycyA9IGFsbENoZWNrZWRMYXllcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEFsbENoZWNrZWRMYXllcnNGcm9tUmVzdWx0cyhyZXN1bHRzKTtcbiBcbiAgICB9XG5cblxuICAgIGdldFNlbGVjdGVkQ29udGVudHNMYXllciA9KHJlc3VsdHM6YW55KTpzZWxlY3RlZExheWVyVHlwZVtdPT57XG4gICAgICAgIGNvbnN0IGNoZWNrZWRMYXllcnMgPSB0aGlzLmNoZWNrZWRMYXllcnM/P1tdO1xuICAgICAgICBsZXQgc2VsZWN0ZWRMYXllcnNBcnJheSA9IFtdO1xuICAgICAgICBpZiAocmVzdWx0cz8ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBzZWxlY3RlZExheWVyc0FycmF5ID0gcmVzdWx0cy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW1zOmFueVtdKT0+e1xuICAgICAgICAgICAgICAgIGlmIChpdGVtcz8ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZExheWVyQ29udGVudHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRMYXllcklkID0gaXRlbXNbMF0/LmxheWVyPy5pZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMYXllcnMuaW5kZXhPZihjdXJyZW50TGF5ZXJJZCkgIT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJDb250ZW50c1tcImlkXCJdID0gaXRlbXNbMF0/LmxheWVyPy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJDb250ZW50c1tcImF0dHJpYnV0ZXNcIl0gPSB0aGlzLmdldEF0dHJpYnV0ZXMoaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChzZWxlY3RlZExheWVyQ29udGVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICAgICAgfSxbXSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRMYXllcnNBcnJheTtcbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVzID0gKGl0ZW1zOmFueVtdKTphbnlbXT0+e1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQXJyYXkgPSBpdGVtcy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW0pPT57XG4gICAgICAgICAgICBpZiAoaXRlbT8uYXR0cmlidXRlcyl7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2VvbWV0cnkpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGl0ZW0uZ2VvbWV0cnk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0gZ2VvbWV0cnk/LmxhdGl0dWRlPz9nZW9tZXRyeT8uZXh0ZW50Py5jZW50ZXI/LmxhdGl0dWRlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBnZW9tZXRyeT8ubG9uZ2l0dWRlPz9nZW9tZXRyeT8uZXh0ZW50Py5jZW50ZXI/LmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvbmdpdHVkZSAmJiBsYXRpdHVkZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKHsuLi5pdGVtLmF0dHJpYnV0ZXMsbG9jYXRpb246W2xhdGl0dWRlLGxvbmdpdHVkZV19KTtcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uYXR0cmlidXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgfSxbXSlcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNBcnJheTtcbiAgICB9XG5cbiAgICBzZXROdW1iZXJPZkF0dHJpYnV0ZXMgPSAocmVzdWx0czphbnlbXSxudW1iZXJPZkF0dHJpYnV0ZXM/Ontba2V5OnN0cmluZ106c3RyaW5nfSwpPT57XG4gICAgICAgIGlmIChudW1iZXJPZkF0dHJpYnV0ZXMpe1xuICAgICAgICAgICAgdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXMgPSBudW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGF5ZXJzQ29udGVudHMgPSB0aGlzLmdldFNlbGVjdGVkQ29udGVudHNMYXllcihyZXN1bHRzKTtcbiAgICAgICAgbGV0IGxheWVyQ29udGVudHNPYmplY3QgPSB7fTtcbiAgICAgICAgaWYgKGxheWVyc0NvbnRlbnRzPy5sZW5ndGgpe1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2kgPCBsYXllcnNDb250ZW50cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBsYXllckNvbnRlbnRzT2JqZWN0ID0gey4uLmxheWVyQ29udGVudHNPYmplY3QsW2xheWVyc0NvbnRlbnRzW2ldPy5pZF06bGF5ZXJzQ29udGVudHNbaV0/LmF0dHJpYnV0ZXM/Lmxlbmd0aD8/MH1cbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzID0gbGF5ZXJDb250ZW50c09iamVjdFxuICAgIH1cblxuICAgIHNldExheWVyT3BlbiA9IChsYXllck9wZW4/OmxheWVyT3BlblR5cGUpPT57XG4gICAgICAgIGlmIChsYXllck9wZW4pe1xuICAgICAgICAgICAgdGhpcy5sYXllck9wZW4gPSBsYXllck9wZW47XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllck9wZW4gPSB7XG4gICAgICAgICAgICBnZW9tZXRyeTpudWxsLFxuICAgICAgICAgICAgdHlwZVNlbGVjdGVkOlwiY29udGFpbnNcIixcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdGl2ZVZpZXcgPSAoKT0+QXR0cmlidXRlVGFibGVDb25uZWN0b3IuYWN0aXZlVmlldztcbiAgICBcbiAgICBnZXRBbGxDaGVja2VkTGF5ZXJzID0gKCk9PiB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG5cbiAgICBkaXNwYXRjaGluZ0FsbCA9ICgpPT57XG4gICAgICAgIGNvbnN0IHNlbGYgPSBBdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5zZWxmO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHNlbGYucHJvcHNcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmhhc093blByb3BlcnR5KFwiZGlzcGF0Y2hcIikgKXtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlck9mQXR0cmlidXRlcyA9IHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJPcGVuID0gdGhpcy5sYXllck9wZW47XG4gICAgICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpO1xuICAgICAgICAgICAgaWYgKG51bWJlck9mQXR0cmlidXRlcyAmJiBsYXllck9wZW4gJiYgYWxsQ2hlY2tlZExheWVycyAmJiBhY3RpdmVWaWV3KXtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNMYXllckNoZWNrZWQpe1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjaGVja2VkTGF5ZXJzXCIsdGhpcy5jaGVja2VkTGF5ZXJzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhudW1iZXJPZkF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwibnVtYmVyT2ZBdHRyaWJ1dGVcIixudW1iZXJPZkF0dHJpYnV0ZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwibGF5ZXJPcGVuXCIsbGF5ZXJPcGVuKSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImdldEFsbExheWVyc1wiLHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycykpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJnZXRBY3RpdmVWaWV3XCIsdGhpcy5nZXRBY3RpdmVWaWV3KSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJub0l0ZW1TZWxlY3RlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWxheWVyT3Blbil0aHJvdyBcIlRoZXJlIGlzIG5vIGxheWVyIG9wZW5cIlxuICAgICAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpdGhyb3cgXCJUaGVyZSBpcyBubyBhbGwgY2hlY2tlZCBsYXllcnMgbWFrZSBzdXJlIHRvIHBhc3MgbGF5ZXJcIlxuICAgICAgICAgICAgaWYgKGFjdGl2ZVZpZXcpdGhyb3cgXCJUaGVyZSBpcyBubyBhY3RpdmVWaWV3LHBhc3MgamltdU1hcFZpZXcgd2hlbiBtYXAgbG9hZFwiXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgXCJQYXNzIHBhcmVudCB3aWRnZXQgdG8gdGhlIEF0dHJpYnV0ZUNvbm5lY3RvclwiXG5cbiAgICB9XG5cbiAgICBjbG9zZVRhYmxlID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wc1xuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSApe1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY2hlY2tlZExheWVyc1wiLFtdKSk7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb3BzID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wcztcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IGxheWVyT3BlbiA9IHRoaXMubGF5ZXJPcGVuO1xuICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7IFxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSl7XG4gICAgICAgICAgICBpZighbGF5ZXJPcGVuKXRocm93IFwiVGhlcmUgaXMgbm8gbGF5ZXIgb3BlblwiXG4gICAgICAgICAgICBpZiAoIWFsbENoZWNrZWRMYXllcnMpdGhyb3cgXCJUaGVyZSBpcyBubyBhbGwgY2hlY2tlZCBsYXllcnMgbWFrZSBzdXJlIHRvIHBhc3MgbGF5ZXJcIlxuICAgICAgICAgICAgaWYgKCFhY3RpdmVWaWV3KXRocm93IFwiVGhlcmUgaXMgbm8gYWN0aXZlVmlldyxwYXNzIGppbXVNYXBWaWV3IHdoZW4gbWFwIGxvYWRcIlxuICAgICAgICAgICAgaWYgKG51bWJlck9mQXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhudW1iZXJPZkF0dHJpYnV0ZXMpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIlBhc3MgcGFyZW50IHdpZGdldCB0byB0aGUgQXR0cmlidXRlQ29ubmVjdG9yXCJcbiAgICB9XG5cbiAgICBkaXNwYXRjaENyZWF0ZVRhYmxlID0gKCk9PntcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmdldFByb3BzKCk7XG4gICAgICAgIGlmIChwcm9wcyl7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoQ2hlY2hlZExheWVycyA9IChjaGVja2VkTGF5ZXJzOnN0cmluZ1tdKT0+e1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcbiAgICAgICAgaWYgKHByb3BzKXtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNoZWNrZWRMYXllcnNcIixjaGVja2VkTGF5ZXJzKSk7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoRmlsdGVyVmFsdWUgPSAoZmlsdGVyVmFsdWU6bnVtYmVyKT0+e1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcbiAgICAgICAgaWYgKHByb3BzKXtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKSk7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlVGFibGVDb25uZWN0b3I7IiwiaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDaGVja2JveCxcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duQnV0dG9uLFxuICBEcm9wZG93bkl0ZW0sXG4gIERyb3Bkb3duTWVudSxcbiAgSW5wdXQsXG4gIE11bHRpU2VsZWN0LFxuICBPcHRpb24sXG4gIFNlbGVjdCxcbiAgVGV4dElucHV0LFxufSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IHsgU2V0dGluZ091dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZ1wiO1xuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2Nsb3NlXCI7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tIFwiLi4vbGliL1Jlc2l6ZURldGVjdG9yXCI7XG5pbXBvcnQge1xuICBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLFxuICBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLFxufSBmcm9tIFwiLi4vdXRpbHMvcXVlcnlUYWJsZVZhbHVlXCI7XG5pbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG5mdW5jdGlvbiBBZGRTZXRUYWJsZShwcm9wcykge1xuICBjb25zdCB7XG4gICAgbGlzdCxcbiAgICBoYW5kbGVUaGlyZFF1ZXJ5LFxuICAgIHRleHRJbnB1dEhhbmRsZXIsXG4gICAgbXVsdGlTZWxlY3RIYW5kbGVyLFxuICAgIGRyb3Bkb3duSXRlbUhhbmRsZXIsXG4gICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyLFxuICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIsXG4gICAgZHJvcGRvd25WYWx1ZVF1ZXJ5LFxuICAgIGhhbmRsZUNoZWNrQm94LFxuICAgIGlzQ2hlY2tlZCxcbiAgICBjb3VudGVySXNDaGVja2VkLFxuICAgIGRyb3BEb3duVG9nZ2xlcixcbiAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQsXG4gICAgY2hlY2tlZFRvUXVlcnksXG4gICAgZGVsZXRlVGFibGUsXG4gICAgZ2V0UXVlcnlBdHRyaWJ1dGUsXG4gICAgLy8gZm9yIEFkZCBzZXQgdGFibGUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGFibGVzU2V0LFxuICAgIHRhYmxlc1NldElkLFxuICAgIHdoZXJlQ2xhdXNlc1NldCxcbiAgICAvLyBFbmQgZm9yIEFkZCBzZXQgdGFibGUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGFibGVzLFxuICAgIGdldFF1ZXJ5LFxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgIGRyb3BEb3duLFxuICAgIGlzT3BlbkRyb3BELFxuICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXG4gICAgb3BlbkRyb3AsXG4gICAgY2xvc2VEcm9wLFxuICAgIG9wZW5lZCxcbiAgICBhdXRPcGVuLFxuICAgIG1vdXNlbGVhdmUsXG4gICAgb25tb3VzZUxlYXZlLFxuICAgIGRyb3Bkb3duc1NldCxcbiAgICBzaG93RGVsZXRlLFxuICAgIGJsb2NrSWQsXG4gICAgY3VycmVudFRhYmxlLFxuICAgIHNob3dCbG9ja0RlbGV0ZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGN1cnJlbnR3aGVyZUNsYXVzZXNTZXQgPSB3aGVyZUNsYXVzZXNTZXQuZmluZChcbiAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdGFibGVzU2V0SWRcbiAgKTtcbiAgaWYgKFxuICAgIGN1cnJlbnRUYWJsZS5pZCA9PT0gcGFyc2VJbnQodGFibGVzU2V0SWQuc3BsaXQoXCItXCIpWzBdKSAmJlxuICAgICFjdXJyZW50VGFibGUuZGVsZXRlZFxuICApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0UmVzaXplRGV0ZWN0b3IgaGFuZGxlV2lkdGggaGFuZGxlSGVpZ2h0PlxuICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xXCI+XG4gICAgICAgICAgICB7bGlzdC5maWVsZHMgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge3dpZHRoIDw9IDYyNSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGdhcDogXCIzJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbToyMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDpcIjgwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0UXVlcnlBdHRyaWJ1dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5maWVsZHMubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJvaWRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic21hbGwtaW50ZWdlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJpbnRlZ2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJkb3VibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPXtlbC50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuYWxpYXN9ICh7ZWwudHlwZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGdldFF1ZXJ5KGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50d2hlcmVDbGF1c2VzU2V0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnR3aGVyZUNsYXVzZXNTZXQuYXR0cmlidXRlUXVlcnlUeXBlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLm1hcCgobywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcXVlcnlDb25zdHJ1Y3Rvck51bWJlci5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2Vjb25kQ29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRoaXJkUXVlcnk9e2hhbmRsZVRoaXJkUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlTZWxlY3RIYW5kbGVyPXttdWx0aVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyPXt0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXt0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5PXtkcm9wZG93blZhbHVlUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja0JveD17aGFuZGxlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQ9e2NvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQ9e2Z1bmN0aW9uQ291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRUb1F1ZXJ5PXtjaGVja2VkVG9RdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlc1NldD17d2hlcmVDbGF1c2VzU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzU2V0SWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXtkcm9wRG93blRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dW5pdm9jb1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93bj17ZHJvcERvd259XG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17aXNPcGVuRHJvcER9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUNoZWNrQm94PXtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3A9e29wZW5Ecm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXtjbG9zZURyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dE9wZW49e2F1dE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXttb3VzZWxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25tb3VzZUxlYXZlPXtvbm1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bnNTZXQ9e2Ryb3Bkb3duc1NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ9e2Jsb2NrSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG5cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7c2hvd0RlbGV0ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfSBpY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge3dpZHRoID49IDYyNSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIFwiIFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOlwiMyVcIlxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0UXVlcnlBdHRyaWJ1dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5maWVsZHMubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJvaWRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic21hbGwtaW50ZWdlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJpbnRlZ2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJkb3VibGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPXtlbC50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuYWxpYXN9ICh7ZWwudHlwZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZ2V0UXVlcnkoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR3aGVyZUNsYXVzZXNTZXQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudHdoZXJlQ2xhdXNlc1NldC5hdHRyaWJ1dGVRdWVyeVR5cGUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcubWFwKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLm1hcCgobywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWNvbmRDb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGhpcmRRdWVyeT17aGFuZGxlVGhpcmRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRJbnB1dEhhbmRsZXI9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBtdWx0aVNlbGVjdEhhbmRsZXI9e211bHRpU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbUhhbmRsZXI9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXI9e3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXI9e3RleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e2Ryb3Bkb3duVmFsdWVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrQm94PXtoYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZD17Y291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZD17ZnVuY3Rpb25Db3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFRvUXVlcnk9e2NoZWNrZWRUb1F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnlBdHRyaWJ1dGU9e2dldFF1ZXJ5QXR0cmlidXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzU2V0PXt3aGVyZUNsYXVzZXNTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNTZXRJZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93blRvZ2dsZXI9e2Ryb3BEb3duVG9nZ2xlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyPXt1bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duPXtkcm9wRG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbkRyb3BEPXtpc09wZW5Ecm9wRH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ2hlY2tCb3g9e29uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcD17b3BlbkRyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURyb3A9e2Nsb3NlRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17b3BlbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0T3Blbj17YXV0T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU9e21vdXNlbGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmU9e29ubW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duc1NldD17ZHJvcGRvd25zU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZD17YmxvY2tJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93RGVsZXRlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtY29udGFpbmVyLXRhYmxlLXF1ZXJ5LWJ1aWxkZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVUYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3RSZXNpemVEZXRlY3Rvcj5cbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuY29uc3QgU3dpdGNoID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnlWYWx1ZXMsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgLy8gZmlsdGVyIG91dCBvbmx5IGNoaWxkcmVuIHdpdGggYSBtYXRjaGluZyBwcm9wXG4gIHJldHVybiBjaGlsZHJlbi5maW5kKChjaGlsZCkgPT4ge1xuICAgIHJldHVybiBjaGlsZC5wcm9wcy52YWx1ZSA9PT0gcXVlcnlWYWx1ZXM7XG4gIH0pO1xufTtcblxuY29uc3QgU2Vjb25kQ29uc3RydWN0b3IgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRleHRJbnB1dEhhbmRsZXIsXG4gICAgZHJvcGRvd25JdGVtSGFuZGxlcixcbiAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIsXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcbiAgICBjb3VudGVySXNDaGVja2VkLFxuICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCxcbiAgICB0YWJsZXNTZXRJZCxcbiAgICB3aGVyZUNsYXVzZXNTZXQsXG4gICAgZHJvcERvd25Ub2dnbGVyLFxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgIGRyb3BEb3duLFxuICAgIGlzT3BlbkRyb3BELFxuICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXG4gICAgb3BlbkRyb3AsXG4gICAgY2xvc2VEcm9wLFxuICAgIG9wZW5lZDogZCxcbiAgICBhdXRPcGVuLFxuICAgIG9ubW91c2VMZWF2ZSxcbiAgICBkcm9wZG93bnNTZXQsXG4gICAgYmxvY2tJZCx3aWR0aFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5ID0gW107XG4gIGxldCBkZWZhdWx0VmFsdWUgPSBcIj1cIjtcbiAgbGV0IGRyb3Bkb3duVmFsdWVRdWVyeSA9IFwidmFsb3JlXCI7XG4gIGxldCBvcGVuZWQgPSBmYWxzZTtcbiAgbGV0IGNoZWNrZWQgPSAwO1xuICBsZXQgYXUgPSB0cnVlO1xuICAvLyB2YWx1ZVRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4geyBub3JtYWxpemVkVGhpcmRRdWVyeS5wdXNoKHsgbGFiZWw6IGVsLmxhYmVsWzBdLnRvU3RyaW5nKCksIHZhbHVlOiBlbC52YWx1ZVswXS50b1N0cmluZygpIH0pIH0pXG4gIGlmICh3aGVyZUNsYXVzZXNTZXQubGVuZ3RoKSB7XG4gICAgY29uc3QgY3VycmVudEl0ZW0gPSB3aGVyZUNsYXVzZXNTZXQuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gdGFibGVzU2V0SWQpO1xuICAgIGlmIChjdXJyZW50SXRlbT8uaWZJbk9yTm90SW5RdWVyeVZhbHVlKSB7XG4gICAgICBjdXJyZW50SXRlbS5pZkluT3JOb3RJblF1ZXJ5VmFsdWUubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICBub3JtYWxpemVkVGhpcmRRdWVyeS5wdXNoKHtcbiAgICAgICAgICBpZDogdGFibGVzU2V0SWQudG9TdHJpbmcoKSxcbiAgICAgICAgICBsYWJlbDogZWwubGFiZWwudG9TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZTogZWwudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICBsaXN0ZWw6IGN1cnJlbnRJdGVtLmNoZWNrZWRMaXN0U2V0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50SXRlbT8ucXVlcnlWYWx1ZSkgZGVmYXVsdFZhbHVlID0gY3VycmVudEl0ZW0ucXVlcnlWYWx1ZTtcbiAgICBpZiAoY3VycmVudEl0ZW0/LmRyb3Bkb3duVmFsdWVRdWVyeSlcbiAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeSA9IGN1cnJlbnRJdGVtLmRyb3Bkb3duVmFsdWVRdWVyeTtcbiAgICBpZiAoY3VycmVudEl0ZW0/LmlzT3Blbikge1xuICAgICAgLy8gb3BlbmVkID0gd2hlcmVDbGF1c2VzU2V0W3RhYmxlc1NldElkXS5pc09wZW47XG4gICAgfVxuICAgIGlmIChjdXJyZW50SXRlbT8uY2hlY2tlZExpc3RTZXQpXG4gICAgICBjaGVja2VkID0gY3VycmVudEl0ZW0uY2hlY2tlZExpc3RTZXQubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuICg8Pnt3aWR0aCA+PSA2MjYgICYmIFxuICAgIDxTd2l0Y2ggcXVlcnlWYWx1ZXM9e2RlZmF1bHRWYWx1ZX0+XG4gICAgICA8ZGl2IHZhbHVlPXtcIj1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdW5pdm9jb1NlbGVjdEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRJbnB1dEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIiBcIj4gKi99XG4gICAgICAgICAge31cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI8PlwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1bml2b2NvU2VsZWN0SGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGV4dElucHV0SGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJJTlwifSBvbk1vdXNlTGVhdmU9eygpID0+IG9ubW91c2VMZWF2ZSgpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICBhY3RpdmVJY29uXG4gICAgICAgICAgICAgIGlzT3Blbj17ZHJvcGRvd25zU2V0W3RhYmxlc1NldElkXSA/PyBmYWxzZX1cbiAgICAgICAgICAgICAgdG9nZ2xlPXsoKSA9PiBkcm9wRG93bn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5Ecm9wKHRhYmxlc1NldElkKX0+XG4gICAgICAgICAgICAgICAge2NoZWNrZWR9IGVsZW1lbnRpIHNlbGV6aW9uYXRpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+TXVsdGkgc2VsZXppb25lIGF0dGl2YTwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5PXtcImZpeGVkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmNoZWNrVmFsdWUgPT09IGVsLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBtYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiTk9UX0lOXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgIGFjdGl2ZUljb25cbiAgICAgICAgICAgICAgaXNPcGVuPXtkcm9wZG93bnNTZXRbdGFibGVzU2V0SWRdID8/IGZhbHNlfVxuICAgICAgICAgICAgICB0b2dnbGU9eygpID0+IGRyb3BEb3dufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gb25DbGljaz17KCkgPT4gb3BlbkRyb3AodGFibGVzU2V0SWQpfT5cbiAgICAgICAgICAgICAgICB7Y2hlY2tlZH0gZWxlbWVudGkgc2VsZXppb25hdGlcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5NdWx0aSBzZWxlemlvbmUgYXR0aXZhPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k9e1wiZml4ZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuY2hlY2tWYWx1ZSA9PT0gZWwubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIG1iLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI8PVwifSBjbGFzc05hbWU9XCJkLWZsZXggIGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdW5pdm9jb1NlbGVjdEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRJbnB1dEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPj1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdW5pdm9jb1NlbGVjdEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRJbnB1dEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPFwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1bml2b2NvU2VsZWN0SGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGV4dElucHV0SGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI+XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0SW5wdXRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcImlzIG51bGxcIn0+PC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcImlzIG5vdCBudWxsXCJ9PjwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpbmNsdWRlZFwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmNsdWRlXCI+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbC1tZC0yIHRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAlXCIgfX0+XG4gICAgICAgICAgICBlXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcImlzX25vdF9pbmNsdWRlZFwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmNsdWRlXCI+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cImlucHV0c1wiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbC1zbS0yIHRleHQtY2VudGVyXCI+ZTwvcD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cImlucHV0c1wiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJMSUtFJVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGV4dElucHV0SGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiJUxJS0VcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRJbnB1dEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIkxJS0UlXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0SW5wdXRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCIlTElLRSVcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRJbnB1dEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIk5PVCBMSUtFXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0SW5wdXRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3dpdGNoPn1cbiAgICB7NjI1ID49IHdpZHRoICYmXG4gICAgPFN3aXRjaCBxdWVyeVZhbHVlcz17ZGVmYXVsdFZhbHVlfT5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPVwifSBjbGFzc05hbWU9XCJcIiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdW5pdm9jb1NlbGVjdEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRJbnB1dEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICB7fVxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIjw+XCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0SW5wdXRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIklOXCJ9IG9uTW91c2VMZWF2ZT17KCkgPT4gb25tb3VzZUxlYXZlKCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgIGFjdGl2ZUljb25cbiAgICAgICAgICAgICAgaXNPcGVuPXtkcm9wZG93bnNTZXRbdGFibGVzU2V0SWRdID8/IGZhbHNlfVxuICAgICAgICAgICAgICB0b2dnbGU9eygpID0+IGRyb3BEb3dufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gb25DbGljaz17KCkgPT4gb3BlbkRyb3AodGFibGVzU2V0SWQpfT5cbiAgICAgICAgICAgICAgICB7Y2hlY2tlZH0gZWxlbWVudGkgc2VsZXppb25hdGlcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5NdWx0aSBzZWxlemlvbmUgYXR0aXZhPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k9e1wiZml4ZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuY2hlY2tWYWx1ZSA9PT0gZWwubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIG1iLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJOT1RfSU5cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgYWN0aXZlSWNvblxuICAgICAgICAgICAgICBpc09wZW49e2Ryb3Bkb3duc1NldFt0YWJsZXNTZXRJZF0gPz8gZmFsc2V9XG4gICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gZHJvcERvd259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuRHJvcCh0YWJsZXNTZXRJZCl9PlxuICAgICAgICAgICAgICAgIHtjaGVja2VkfSBlbGVtZW50aSBzZWxlemlvbmF0aVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPk11bHRpIHNlbGV6aW9uZSBhdHRpdmE8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja1ZhbHVlID09PSBlbC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTMgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIjw9XCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0SW5wdXRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIj49XCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0SW5wdXRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIjxcIn0gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdW5pdm9jb1NlbGVjdEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRJbnB1dEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPlwifSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1bml2b2NvU2VsZWN0SGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGV4dElucHV0SGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpcyBudWxsXCJ9PjwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpcyBub3QgbnVsbFwifT48L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiaW5jbHVkZWRcIn0gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5jbHVkZVwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICBpZD1cImlucHV0c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wtbWQtMiB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwJVwiIH19PlxuICAgICAgICAgICAgZVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpc19ub3RfaW5jbHVkZWRcIn0gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5jbHVkZVwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wtc20tMiB0ZXh0LWNlbnRlclwiPmU8L3A+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiTElLRSVcIn0gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRleHRJbnB1dEhhbmRsZXIoZSwgXCJzZXRcIil9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIiVMSUtFXCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0SW5wdXRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJMSUtFJVwifSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGV4dElucHV0SGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiJUxJS0UlXCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0ZXh0SW5wdXRIYW5kbGVyKGUsIFwic2V0XCIpfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJOT1QgTElLRVwifSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGV4dElucHV0SGFuZGxlcihlLCBcInNldFwiKX1cbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N3aXRjaD59XG4gIDwvPik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRTZXRUYWJsZTtcbiIsImltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2hlY2tib3gsXG4gIERyb3Bkb3duLFxuICBEcm9wZG93bkJ1dHRvbixcbiAgRHJvcGRvd25JdGVtLFxuICBEcm9wZG93bk1lbnUsXG4gIElucHV0LFxuICBNdWx0aVNlbGVjdCxcbiAgT3B0aW9uLFxuICBTZWxlY3QsXG4gIFRleHRJbnB1dCxcbn0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IFNldHRpbmdPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmdcIjtcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZVwiO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSBcIi4uL2xpYi9SZXNpemVEZXRlY3RvclwiO1xuXG5pbXBvcnQge1xuICBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLFxuICBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLFxufSBmcm9tIFwiLi4vdXRpbHMvcXVlcnlUYWJsZVZhbHVlXCI7XG5pbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBsaXN0LFxuICAgIGhhbmRsZVRoaXJkUXVlcnksXG4gICAgdGV4dElucHV0SGFuZGxlcixcbiAgICBtdWx0aVNlbGVjdEhhbmRsZXIsXG4gICAgZHJvcGRvd25JdGVtSGFuZGxlcixcbiAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIsXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcbiAgICBkcm9wZG93blZhbHVlUXVlcnksXG4gICAgaGFuZGxlQ2hlY2tCb3gsXG4gICAgaXNDaGVja2VkLFxuICAgIGNvdW50ZXJJc0NoZWNrZWQsXG4gICAgZHJvcERvd25Ub2dnbGVyLFxuICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCxcbiAgICBjaGVja2VkVG9RdWVyeSxcbiAgICBkZWxldGVUYWJsZSxcbiAgICB0YWJsZXNJZCxcbiAgICBnZXRRdWVyeUF0dHJpYnV0ZSxcbiAgICB3aGVyZUNsYXVzZXMsXG4gICAgdGFibGVzLFxuICAgIGdldFF1ZXJ5LFxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgIGRyb3BEb3duLFxuICAgIGlzT3BlbkRyb3BELFxuICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXG4gICAgb3BlbkRyb3AsXG4gICAgY2xvc2VEcm9wLFxuICAgIG9wZW5lZCxcbiAgICBhdXRPcGVuLFxuICAgIG1vdXNlbGVhdmUsXG4gICAgb25tb3VzZUxlYXZlLFxuICAgIGRyb3Bkb3ducyxcbiAgICBjdXJyZW50VGFibGUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjdXJyZW50d2hlcmVDbGF1c2VzID0gd2hlcmVDbGF1c2VzLmZpbmQoXG4gICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGAke3RhYmxlc0lkfWBcbiAgKTtcblxuICBpZiAoY3VycmVudFRhYmxlLmlkID09PSB0YWJsZXNJZCAmJiAhY3VycmVudFRhYmxlLmRlbGV0ZWQpIHtcbiAgICBjb25zb2xlLmxvZyh3aGVyZUNsYXVzZXMsY3VycmVudFRhYmxlLGN1cnJlbnR3aGVyZUNsYXVzZXMsdGFibGVzSWQsXCJjaGVjayB3aGVyZWNsYXVzZVwiKVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RSZXNpemVEZXRlY3RvciBoYW5kbGVXaWR0aCBoYW5kbGVIZWlnaHQ+XG4gICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5cbiAgICAgICAgICAgIHtsaXN0LmZpZWxkcyA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7d2lkdGggPD0gNjI1ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBnYXA6JzMlJyxcbiAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDonMjgwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbToyMFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCI4MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0LmZpZWxkcy5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcIm9pZFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJzbWFsbC1pbnRlZ2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImludGVnZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImRvdWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU9e2VsLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5hbGlhc30gKHtlbC50eXBlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBnZXRRdWVyeShlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgY2FtcG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudHdoZXJlQ2xhdXNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50d2hlcmVDbGF1c2VzLmF0dHJpYnV0ZVF1ZXJ5VHlwZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcXVlcnlDb25zdHJ1Y3RvclN0cmluZy5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIubWFwKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWNvbmRDb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRoaXJkUXVlcnk9e2hhbmRsZVRoaXJkUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRJbnB1dEhhbmRsZXI9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpU2VsZWN0SGFuZGxlcj17bXVsdGlTZWxlY3RIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXI9e3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcj17dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5PXtkcm9wZG93blZhbHVlUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrQm94PXtoYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXtpc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQ9e2NvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZD17ZnVuY3Rpb25Db3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkVG9RdWVyeT17Y2hlY2tlZFRvUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzPXt3aGVyZUNsYXVzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlc0lkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXtkcm9wRG93blRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyPXt1bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd249e2Ryb3BEb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17aXNPcGVuRHJvcER9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ2hlY2tCb3g9e29uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wPXtvcGVuRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXtjbG9zZURyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17b3BlbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRPcGVuPXthdXRPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXttb3VzZWxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmU9e29ubW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zPXtkcm9wZG93bnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfSBpY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHt3aWR0aCA+PSA2MjYgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIFwiIFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50Olwic3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZ2FwOlwiMyVcIlxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0LmZpZWxkcy5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcIm9pZFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJzbWFsbC1pbnRlZ2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImludGVnZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImRvdWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU9e2VsLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5hbGlhc30gKHtlbC50eXBlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIlwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGdldFF1ZXJ5KGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50d2hlcmVDbGF1c2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnR3aGVyZUNsYXVzZXMuYXR0cmlidXRlUXVlcnlUeXBlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLm1hcCgobywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcXVlcnlDb25zdHJ1Y3Rvck51bWJlci5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2Vjb25kQ29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRoaXJkUXVlcnk9e2hhbmRsZVRoaXJkUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlTZWxlY3RIYW5kbGVyPXttdWx0aVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyPXt0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXt0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5PXtkcm9wZG93blZhbHVlUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja0JveD17aGFuZGxlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQ9e2NvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQ9e2Z1bmN0aW9uQ291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRUb1F1ZXJ5PXtjaGVja2VkVG9RdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcz17d2hlcmVDbGF1c2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzSWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXtkcm9wRG93blRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dW5pdm9jb1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93bj17ZHJvcERvd259XG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17aXNPcGVuRHJvcER9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUNoZWNrQm94PXtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3A9e29wZW5Ecm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXtjbG9zZURyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dE9wZW49e2F1dE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXttb3VzZWxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25tb3VzZUxlYXZlPXtvbm1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bnM9e2Ryb3Bkb3duc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWNvbnRhaW5lci10YWJsZS1xdWVyeS1idWlsZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtkZWxldGVUYWJsZX0gaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdFJlc2l6ZURldGVjdG9yPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5jb25zdCBTd2l0Y2ggPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBxdWVyeVZhbHVlcywgY2hpbGRyZW4gfSA9IHByb3BzO1xuICAvLyBmaWx0ZXIgb3V0IG9ubHkgY2hpbGRyZW4gd2l0aCBhIG1hdGNoaW5nIHByb3BcbiAgcmV0dXJuIGNoaWxkcmVuLmZpbmQoKGNoaWxkKSA9PiB7XG4gICAgcmV0dXJuIGNoaWxkLnByb3BzLnZhbHVlID09PSBxdWVyeVZhbHVlcztcbiAgfSk7XG59O1xuXG5jb25zdCBTZWNvbmRDb25zdHJ1Y3RvciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGV4dElucHV0SGFuZGxlcixcbiAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxuICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcixcbiAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyLFxuICAgIGNvdW50ZXJJc0NoZWNrZWQsXG4gICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLFxuICAgIHRhYmxlc0lkLFxuICAgIHdoZXJlQ2xhdXNlcyxcbiAgICBkcm9wRG93blRvZ2dsZXIsXG4gICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIsXG4gICAgZHJvcERvd24sXG4gICAgaXNPcGVuRHJvcEQsXG4gICAgb25DaGFuZ2VDaGVja0JveCxcbiAgICBvcGVuRHJvcCxcbiAgICBjbG9zZURyb3AsXG4gICAgb3BlbmVkOiBkLFxuICAgIGF1dE9wZW4sXG4gICAgb25tb3VzZUxlYXZlLFxuICAgIGRyb3Bkb3ducyx3aWR0aFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5ID0gW107XG4gIGxldCBkZWZhdWx0VmFsdWUgPSBcIj1cIjtcbiAgbGV0IGRyb3Bkb3duVmFsdWVRdWVyeSA9IFwidmFsb3JlXCI7XG4gIGxldCBvcGVuZWQgPSBmYWxzZTtcbiAgbGV0IGNoZWNrZWQgPSAwO1xuICBsZXQgYXUgPSB0cnVlO1xuICBsZXQgZGVmYXVsdFRleHRWYWx1ZSA9IFwiIFwiO1xuICBjb25zdCBjdXJyZW50V2hlcmVDbGF1c2UgPSB3aGVyZUNsYXVzZXMuZmluZChcbiAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYCR7dGFibGVzSWR9YFxuICApO1xuICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5pZkluT3JOb3RJblF1ZXJ5VmFsdWUpIHtcbiAgICBjdXJyZW50V2hlcmVDbGF1c2UuaWZJbk9yTm90SW5RdWVyeVZhbHVlLm1hcCgoZWwsIGkpID0+IHtcbiAgICAgIG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5LnB1c2goe1xuICAgICAgICBpZDogdGFibGVzSWQudG9TdHJpbmcoKSxcbiAgICAgICAgbGFiZWw6IGVsLmxhYmVsLnRvU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBlbC52YWx1ZS50b1N0cmluZygpLFxuICAgICAgICBsaXN0ZWw6IGN1cnJlbnRXaGVyZUNsYXVzZS5jaGVja2VkTGlzdCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChjdXJyZW50V2hlcmVDbGF1c2UgJiYgY3VycmVudFdoZXJlQ2xhdXNlLnF1ZXJ5VmFsdWUpIHtcbiAgICBkZWZhdWx0VmFsdWUgPSBjdXJyZW50V2hlcmVDbGF1c2UucXVlcnlWYWx1ZTtcbiAgfVxuICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5kcm9wZG93blZhbHVlUXVlcnkpIHtcbiAgICBkcm9wZG93blZhbHVlUXVlcnkgPSBjdXJyZW50V2hlcmVDbGF1c2UuZHJvcGRvd25WYWx1ZVF1ZXJ5O1xuICB9XG4gIGlmIChjdXJyZW50V2hlcmVDbGF1c2UgJiYgY3VycmVudFdoZXJlQ2xhdXNlLmlzT3Blbikge1xuICAgIC8vIG9wZW5lZCA9IHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uaXNPcGVuO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UuY2hlY2tlZExpc3QpIHtcbiAgICBjaGVja2VkID0gY3VycmVudFdoZXJlQ2xhdXNlLmNoZWNrZWRMaXN0Lmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IHRlc3QgPSAocHJvcHMpID0+IHt9O1xuICByZXR1cm4gKDw+XG4gICAge3dpZHRoID49IDYyNiAgJiYgPFN3aXRjaCBxdWVyeVZhbHVlcz17ZGVmYXVsdFZhbHVlfT5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIiBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdW5pdm9jb1NlbGVjdEhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VGV4dFZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIjw+XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiSU5cIn0gb25Nb3VzZUxlYXZlPXsoKSA9PiBvbm1vdXNlTGVhdmUoKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgYWN0aXZlSWNvblxuICAgICAgICAgICAgICBpc09wZW49e2Ryb3Bkb3duc1t0YWJsZXNJZF19XG4gICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gZHJvcERvd259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuRHJvcCh0YWJsZXNJZCl9PlxuICAgICAgICAgICAgICAgIHtjaGVja2VkfSBlbGVtZW50aSBzZWxlemlvbmF0aVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPk11bHRpIHNlbGV6aW9uZSBhdHRpdmE8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja1ZhbHVlID09PSBlbC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTMgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIk5PVF9JTlwifSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICBhY3RpdmVJY29uXG4gICAgICAgICAgICAgIGlzT3Blbj17ZHJvcGRvd25zW3RhYmxlc0lkXX1cbiAgICAgICAgICAgICAgdG9nZ2xlPXsoKSA9PiBkcm9wRG93bn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5Ecm9wKHRhYmxlc0lkKX0+XG4gICAgICAgICAgICAgICAge2NoZWNrZWR9IGVsZW1lbnRpIHNlbGV6aW9uYXRpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+TXVsdGkgc2VsZXppb25lIGF0dGl2YTwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5PXtcImZpeGVkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmNoZWNrVmFsdWUgPT09IGVsLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBtYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPD1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4ICBjb2wtbWQtNFwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPj1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdW5pdm9jb1NlbGVjdEhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI8XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPlwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1bml2b2NvU2VsZWN0SGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcImlzIG51bGxcIn0+PC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcImlzIG5vdCBudWxsXCJ9PjwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpbmNsdWRlZFwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmNsdWRlXCI+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sLW1kLTIgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogXCIxMCVcIiB9fT5cbiAgICAgICAgICAgIGVcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpc19ub3RfaW5jbHVkZWRcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5jbHVkZVwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cImlucHV0c1wiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbC1zbS0yIHRleHQtY2VudGVyXCI+ZTwvcD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIkxJS0UlXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIiVMSUtFXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIkxJS0UlXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIiVMSUtFJVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJOT1QgTElLRVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3dpdGNoPn1cbiAgICB7NjI1ID49IHdpZHRoICYmPFN3aXRjaCBxdWVyeVZhbHVlcz17ZGVmYXVsdFZhbHVlfT4gXG4gICAgICA8ZGl2IHZhbHVlPXtcIj1cIn0gY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3tkaXNwbGF5OidmbGV4J319PlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFRleHRWYWx1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIjw+XCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiSU5cIn0gb25Nb3VzZUxlYXZlPXsoKSA9PiBvbm1vdXNlTGVhdmUoKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgYWN0aXZlSWNvblxuICAgICAgICAgICAgICBpc09wZW49e2Ryb3Bkb3duc1t0YWJsZXNJZF19XG4gICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gZHJvcERvd259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuRHJvcCh0YWJsZXNJZCl9PlxuICAgICAgICAgICAgICAgIHtjaGVja2VkfSBlbGVtZW50aSBzZWxlemlvbmF0aVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPk11bHRpIHNlbGV6aW9uZSBhdHRpdmE8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja1ZhbHVlID09PSBlbC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTMgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIk5PVF9JTlwifSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICBhY3RpdmVJY29uXG4gICAgICAgICAgICAgIGlzT3Blbj17ZHJvcGRvd25zW3RhYmxlc0lkXX1cbiAgICAgICAgICAgICAgdG9nZ2xlPXsoKSA9PiBkcm9wRG93bn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5Ecm9wKHRhYmxlc0lkKX0+XG4gICAgICAgICAgICAgICAge2NoZWNrZWR9IGVsZW1lbnRpIHNlbGV6aW9uYXRpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+TXVsdGkgc2VsZXppb25lIGF0dGl2YTwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5PXtcImZpeGVkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmNoZWNrVmFsdWUgPT09IGVsLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBtYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPD1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4ICBjb2wtbWQtNFwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPj1cIn0gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdW5pdm9jb1NlbGVjdEhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI8XCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVuaXZvY29TZWxlY3RIYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPlwifSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1bml2b2NvU2VsZWN0SGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLCBcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcImlzIG51bGxcIn0+PC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcImlzIG5vdCBudWxsXCJ9PjwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpbmNsdWRlZFwifSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmNsdWRlXCI+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sLW1kLTIgdGV4dC1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogXCIxMCVcIiB9fT5cbiAgICAgICAgICAgIGVcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpc19ub3RfaW5jbHVkZWRcIn0gY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5jbHVkZVwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cImlucHV0c1wiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbC1zbS0yIHRleHQtY2VudGVyXCI+ZTwvcD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIkxJS0UlXCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIiVMSUtFXCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIkxJS0UlXCJ9IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIiVMSUtFJVwifSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJOT1QgTElLRVwifSBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3dpdGNoPn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIGlzVmFsaWRFbGVtZW50LCBjbG9uZUVsZW1lbnQsIGNyZWF0ZVJlZiwgUmVhY3ROb2RlLCBSZWFjdEVsZW1lbnQsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IHsgcGF0Y2hSZXNpemVIYW5kbGVyLCBpc0Z1bmN0aW9uLCBpc1NTUiwgaXNET01FbGVtZW50LCBjcmVhdGVOb3RpZmllciB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zIHtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoaWxkRnVuY3Rpb25Qcm9wczxFbGVtZW50VCBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zIHtcbiAgdGFyZ2V0UmVmPzogUmVmT2JqZWN0PEVsZW1lbnRUPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aXRoIG9ic2VydmFibGUgZWxlbWVudCdzIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgb25SZXNpemU/OiAod2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcikgPT4gdm9pZDtcbiAgLyoqXG4gICAqIFRyaWdnZXIgdXBkYXRlIG9uIGhlaWdodCBjaGFuZ2UuXG4gICAqIERlZmF1bHQ6IHRydWVcbiAgICovXG4gIGhhbmRsZUhlaWdodD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUcmlnZ2VyIG9uUmVzaXplIG9uIHdpZHRoIGNoYW5nZS5cbiAgICogRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgaGFuZGxlV2lkdGg/OiBib29sZWFuO1xuICAvKipcbiAgICogRG8gbm90IHRyaWdnZXIgdXBkYXRlIHdoZW4gYSBjb21wb25lbnQgbW91bnRzLlxuICAgKiBEZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgc2tpcE9uTW91bnQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgdXBkYXRlIHN0cmF0ZWd5LiBQb3NzaWJsZSB2YWx1ZXM6IFwidGhyb3R0bGVcIiBhbmQgXCJkZWJvdW5jZVwiLlxuICAgKiBTZWUgYGxvZGFzaGAgZG9jcyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBodHRwczovL2xvZGFzaC5jb20vZG9jcy9cbiAgICogdW5kZWZpbmVkIC0gY2FsbGJhY2sgd2lsbCBiZSBmaXJlZCBmb3IgZXZlcnkgZnJhbWUuXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgcmVmcmVzaE1vZGU/OiAndGhyb3R0bGUnIHwgJ2RlYm91bmNlJztcbiAgLyoqXG4gICAqIFNldCB0aGUgdGltZW91dC9pbnRlcnZhbCBmb3IgYHJlZnJlc2hNb2RlYCBzdHJhdGVneVxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICovXG4gIHJlZnJlc2hSYXRlPzogbnVtYmVyO1xuICAvKipcbiAgICogUGFzcyBhZGRpdGlvbmFsIHBhcmFtcyB0byBgcmVmcmVzaE1vZGVgIGFjY29yZGluZyB0byBsb2Rhc2ggZG9jc1xuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICovXG4gIHJlZnJlc2hPcHRpb25zPzogeyBsZWFkaW5nPzogYm9vbGVhbjsgdHJhaWxpbmc/OiBib29sZWFuIH07XG4gIC8qKlxuICAgKiBUaGVzZSBvcHRpb25zIHdpbGwgYmUgdXNlZCBhcyBhIHNlY29uZCBwYXJhbWV0ZXIgb2YgYHJlc2l6ZU9ic2VydmVyLm9ic2VydmVgIG1ldGhvZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNpemVPYnNlcnZlci9vYnNlcnZlXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgb2JzZXJ2ZXJPcHRpb25zPzogUmVzaXplT2JzZXJ2ZXJPcHRpb25zO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc2l6ZURldGVjdG9yUHJvcHM8RWxlbWVudFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQcm9wcyB7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIG9mIGFuIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICogWW91IGNhbiB1c2UgdGhpcyBwcm9wZXJ0eSB0byBhdHRhY2ggcmVzaXplLW9ic2VydmVyIHRvIGFueSBET00gZWxlbWVudC5cbiAgICogUGxlYXNlIHJlZmVyIHRvIHRoZSBxdWVyeVNlbGVjdG9yIGRvY3MuXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDUuMC4wLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA3LjAuMC5cbiAgICogVXNlIHRhcmdldFJlZiBpbnN0ZWFkXG4gICAqL1xuICBxdWVyeVNlbGVjdG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogVmFsaWQgb25seSBmb3IgYSBjYWxsYmFjay1wYXR0ZXJuLlxuICAgKiBJZ25vcmVkIGZvciBvdGhlciByZW5kZXIgdHlwZXMuXG4gICAqIFNldCByZXNpemUtZGV0ZWN0b3IncyBub2RlIHR5cGUuXG4gICAqIFlvdSBjYW4gcGFzcyBhbnkgdmFsaWQgUmVhY3Qgbm9kZTogc3RyaW5nIHdpdGggbm9kZSdzIG5hbWUgb3IgZWxlbWVudC5cbiAgICogQ2FuIGJlIHVzZWZ1bCB3aGVuIHlvdSBuZWVkIHRvIGhhbmRsZSB0YWJsZSdzIG9yIHBhcmFncmFwaCdzIHJlc2l6ZXMuXG4gICAqIERlZmF1bHQ6IFwiZGl2XCJcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiA1LjAuMC4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gNy4wLjAuXG4gICAqIFVzZSB0YXJnZXRSZWYgaW5zdGVhZFxuICAgKi9cbiAgbm9kZVR5cGU/OiBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHM7IC8vIHdpbGwgYmUgcGFzc2VkIHRvIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKVxuICAvKipcbiAgICogQSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICAgKiBCeSBkZWZhdWx0IGl0J3MgYSBwYXJlbnQgZWxlbWVudCBpbiByZWxhdGlvbiB0byB0aGUgUmVhY3RSZXNpemVEZXRlY3RvciBjb21wb25lbnQuXG4gICAqIEJ1dCB5b3UgY2FuIHBhc3MgYW55IERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgb21pdHRlZCB3aGVuIHlvdSBwYXNzIHF1ZXJ5U2VsZWN0b3IuXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDUuMC4wLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA2LjAuMC5cbiAgICogVXNlIHRhcmdldFJlZiBpbnN0ZWFkXG4gICAqL1xuICB0YXJnZXREb21FbD86IEVsZW1lbnRUO1xuICAvKipcbiAgICogQSBSZWFjdCByZWZlcmVuY2Ugb2YgdGhlIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICogUGFzcyBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB5b3Ugd2FudCB0byBhdHRhY2ggcmVzaXplIGhhbmRsZXJzIHRvLlxuICAgKiBJdCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIFJlYWN0LnVzZVJlZiBvciBSZWFjdC5jcmVhdGVSZWYgZnVuY3Rpb25zXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgdGFyZ2V0UmVmPzogUmVmT2JqZWN0PEVsZW1lbnRUPjtcblxuICByZW5kZXI/OiAocHJvcHM6IFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zKSA9PiBSZWFjdE5vZGU7XG5cbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGUgfCAoKHByb3BzOiBDaGlsZEZ1bmN0aW9uUHJvcHM8RWxlbWVudFQ+KSA9PiBSZWFjdE5vZGUpO1xufVxuXG5jbGFzcyBSZXNpemVEZXRlY3RvcjxFbGVtZW50VCBleHRlbmRzIEhUTUxFbGVtZW50ID0gSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxcbiAgUmVzaXplRGV0ZWN0b3JQcm9wczxFbGVtZW50VD4sXG4gIFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zXG4+IHtcbiAgc2tpcE9uTW91bnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIHRhcmdldFJlZjtcbiAgb2JzZXJ2YWJsZUVsZW1lbnQ7XG4gIHJlc2l6ZUhhbmRsZXI7XG4gIHJlc2l6ZU9ic2VydmVyO1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUmVzaXplRGV0ZWN0b3JQcm9wczxFbGVtZW50VD4pIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7IHNraXBPbk1vdW50LCByZWZyZXNoTW9kZSwgcmVmcmVzaFJhdGUgPSAxMDAwLCByZWZyZXNoT3B0aW9ucyB9ID0gcHJvcHM7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogdW5kZWZpbmVkXG4gICAgfTtcblxuICAgIHRoaXMuc2tpcE9uTW91bnQgPSBza2lwT25Nb3VudDtcbiAgICB0aGlzLnRhcmdldFJlZiA9IGNyZWF0ZVJlZigpO1xuICAgIHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGlzU1NSKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSBwYXRjaFJlc2l6ZUhhbmRsZXIodGhpcy5jcmVhdGVSZXNpemVIYW5kbGVyLCByZWZyZXNoTW9kZSwgcmVmcmVzaFJhdGUsIHJlZnJlc2hPcHRpb25zKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IHdpbmRvdy5SZXNpemVPYnNlcnZlcih0aGlzLnJlc2l6ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hPYnNlcnZlcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoT2JzZXJ2ZXIoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIGlmIChpc1NTUigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuY2FuY2VsSGFuZGxlcigpO1xuICB9XG5cbiAgY2FuY2VsSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5yZXNpemVIYW5kbGVyICYmIHRoaXMucmVzaXplSGFuZGxlci5jYW5jZWwpIHtcbiAgICAgIC8vIGNhbmNlbCBkZWJvdW5jZWQgaGFuZGxlclxuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyLmNhbmNlbCgpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgYXR0YWNoT2JzZXJ2ZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXRSZWYsIG9ic2VydmVyT3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc1NTUigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFJlZiAmJiB0YXJnZXRSZWYuY3VycmVudCkge1xuICAgICAgdGhpcy50YXJnZXRSZWYuY3VycmVudCA9IHRhcmdldFJlZi5jdXJyZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIC8vIGNhbid0IGZpbmQgZWxlbWVudCB0byBvYnNlcnZlXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgJiYgdGhpcy5vYnNlcnZhYmxlRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG9ic2VydmVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5vYnNlcnZhYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH07XG5cbiAgZ2V0RWxlbWVudCA9ICgpOiBFbGVtZW50IHwgVGV4dCB8IG51bGwgPT4ge1xuICAgIGNvbnN0IHsgcXVlcnlTZWxlY3RvciwgdGFyZ2V0RG9tRWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNTU1IoKSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBpbiBjYXNlIHdlIHBhc3MgYSBxdWVyeVNlbGVjdG9yXG4gICAgaWYgKHF1ZXJ5U2VsZWN0b3IpIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U2VsZWN0b3IpO1xuICAgIC8vIGluIGNhc2Ugd2UgcGFzcyBhIERPTSBlbGVtZW50XG4gICAgaWYgKHRhcmdldERvbUVsICYmIGlzRE9NRWxlbWVudCh0YXJnZXREb21FbCkpIHJldHVybiB0YXJnZXREb21FbDtcbiAgICAvLyBpbiBjYXNlIHdlIHBhc3MgYSBSZWFjdCByZWYgdXNpbmcgUmVhY3QuY3JlYXRlUmVmKClcbiAgICBpZiAodGhpcy50YXJnZXRSZWYgJiYgaXNET01FbGVtZW50KHRoaXMudGFyZ2V0UmVmLmN1cnJlbnQpKSByZXR1cm4gdGhpcy50YXJnZXRSZWYuY3VycmVudDtcblxuICAgIC8vIHRoZSB3b3JzZSBjYXNlIHdoZW4gd2UgZG9uJ3QgcmVjZWl2ZSBhbnkgaW5mb3JtYXRpb24gZnJvbSB0aGUgcGFyZW50IGFuZCB0aGUgbGlicmFyeSBkb2Vzbid0IGFkZCBhbnkgd3JhcHBlcnNcbiAgICAvLyB3ZSBoYXZlIHRvIHVzZSBhIGRlcHJlY2F0ZWQgYGZpbmRET01Ob2RlYCBtZXRob2QgaW4gb3JkZXIgdG8gZmluZCBhIERPTSBlbGVtZW50IHRvIGF0dGFjaCB0b1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZmluZERPTU5vZGUodGhpcyk7XG5cbiAgICBpZiAoIWN1cnJlbnRFbGVtZW50KSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHJlbmRlclR5cGUgPSB0aGlzLmdldFJlbmRlclR5cGUoKTtcbiAgICBzd2l0Y2ggKHJlbmRlclR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlbmRlclByb3AnOlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgICBjYXNlICdjaGlsZEZ1bmN0aW9uJzpcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuICAgICAgY2FzZSAnY2hpbGQnOlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgICBjYXNlICdjaGlsZEFycmF5JzpcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9O1xuXG4gIGNyZWF0ZVJlc2l6ZUhhbmRsZXI6IFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllczogUmVzaXplT2JzZXJ2ZXJFbnRyeVtdKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVXaWR0aCA9IHRydWUsIGhhbmRsZUhlaWdodCA9IHRydWUsIG9uUmVzaXplIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFoYW5kbGVXaWR0aCAmJiAhaGFuZGxlSGVpZ2h0KSByZXR1cm47XG5cbiAgICBjb25zdCBub3RpZnlSZXNpemUgPSBjcmVhdGVOb3RpZmllcihvblJlc2l6ZSwgdGhpcy5zZXRTdGF0ZS5iaW5kKHRoaXMpLCBoYW5kbGVXaWR0aCwgaGFuZGxlSGVpZ2h0KTtcblxuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IChlbnRyeSAmJiBlbnRyeS5jb250ZW50UmVjdCkgfHwge307XG5cbiAgICAgIGNvbnN0IHNob3VsZFNldFNpemUgPSAhdGhpcy5za2lwT25Nb3VudCAmJiAhaXNTU1IoKTtcbiAgICAgIGlmIChzaG91bGRTZXRTaXplKSB7XG4gICAgICAgIG5vdGlmeVJlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2tpcE9uTW91bnQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRSZW5kZXJUeXBlID0gKCk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgeyByZW5kZXIsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChpc0Z1bmN0aW9uKHJlbmRlcikpIHtcbiAgICAgIC8vIERFUFJFQ0FURUQuIFVzZSBgQ2hpbGQgRnVuY3Rpb24gUGF0dGVybmAgaW5zdGVhZFxuICAgICAgcmV0dXJuICdyZW5kZXJQcm9wJztcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiAnY2hpbGRGdW5jdGlvbic7XG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgICAgcmV0dXJuICdjaGlsZCc7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAvLyBERVBSRUNBVEVELiBXcmFwIGNoaWxkcmVuIHdpdGggYSBzaW5nbGUgcGFyZW50XG4gICAgICByZXR1cm4gJ2NoaWxkQXJyYXknO1xuICAgIH1cblxuICAgIC8vIERFUFJFQ0FURUQuIFVzZSBgQ2hpbGQgRnVuY3Rpb24gUGF0dGVybmAgaW5zdGVhZFxuICAgIHJldHVybiAncGFyZW50JztcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZW5kZXIsIGNoaWxkcmVuLCBub2RlVHlwZTogV3JhcHBlclRhZyA9ICdkaXYnIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7IHdpZHRoLCBoZWlnaHQsIHRhcmdldFJlZjogdGhpcy50YXJnZXRSZWYgfTtcbiAgICBjb25zdCByZW5kZXJUeXBlID0gdGhpcy5nZXRSZW5kZXJUeXBlKCk7XG5cbiAgICBzd2l0Y2ggKHJlbmRlclR5cGUpIHtcbiAgICAgIGNhc2UgJ3JlbmRlclByb3AnOlxuICAgICAgICByZXR1cm4gcmVuZGVyPy4oY2hpbGRQcm9wcyk7XG4gICAgICBjYXNlICdjaGlsZEZ1bmN0aW9uJzoge1xuICAgICAgICBjb25zdCBjaGlsZEZ1bmN0aW9uID0gY2hpbGRyZW4gYXMgKHByb3BzOiBDaGlsZEZ1bmN0aW9uUHJvcHM8RWxlbWVudFQ+KSA9PiBSZWFjdE5vZGU7XG4gICAgICAgIHJldHVybiBjaGlsZEZ1bmN0aW9uPy4oY2hpbGRQcm9wcyk7XG4gICAgICB9XG4gICAgICBjYXNlICdjaGlsZCc6IHtcbiAgICAgICAgLy8gQFRPRE8gYnVnIHByb25lIGxvZ2ljXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW4gYXMgUmVhY3RFbGVtZW50O1xuICAgICAgICBpZiAoY2hpbGQudHlwZSAmJiB0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyBjaGlsZCBpcyBhIG5hdGl2ZSBET00gZWxlbWVudHMgc3VjaCBhcyBkaXYsIHNwYW4gZXRjXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0UmVmLCAuLi5uYXRpdmVQcm9wcyB9ID0gY2hpbGRQcm9wcztcbiAgICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCBuYXRpdmVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xhc3Mgb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgb3RoZXJ3aXNlXG4gICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICAgICAgfVxuICAgICAgY2FzZSAnY2hpbGRBcnJheSc6IHtcbiAgICAgICAgY29uc3QgY2hpbGRBcnJheSA9IGNoaWxkcmVuIGFzIFJlYWN0RWxlbWVudFtdO1xuICAgICAgICByZXR1cm4gY2hpbGRBcnJheS5tYXAoZWwgPT4gISFlbCAmJiBjbG9uZUVsZW1lbnQoZWwsIGNoaWxkUHJvcHMpKTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiA8V3JhcHBlclRhZyAvPjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzaXplRGV0ZWN0b3I7XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuaW1wb3J0IHR5cGUgeyBEZWJvdW5jZWRGdW5jIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgUHJvcHMsIFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zIH0gZnJvbSAnLi9SZXNpemVEZXRlY3Rvcic7XG5cbmV4cG9ydCB0eXBlIFBhdGNoZWRSZXNpemVPYnNlcnZlckNhbGxiYWNrID0gRGVib3VuY2VkRnVuYzxSZXNpemVPYnNlcnZlckNhbGxiYWNrPiB8IFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2s7XG5cbmV4cG9ydCBjb25zdCBwYXRjaFJlc2l6ZUhhbmRsZXIgPSAoXG4gIHJlc2l6ZUNhbGxiYWNrOiBSZXNpemVPYnNlcnZlckNhbGxiYWNrLFxuICByZWZyZXNoTW9kZTogUHJvcHNbJ3JlZnJlc2hNb2RlJ10sXG4gIHJlZnJlc2hSYXRlOiBQcm9wc1sncmVmcmVzaFJhdGUnXSxcbiAgcmVmcmVzaE9wdGlvbnM6IFByb3BzWydyZWZyZXNoT3B0aW9ucyddXG4pOiBQYXRjaGVkUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayA9PiB7XG4gIHN3aXRjaCAocmVmcmVzaE1vZGUpIHtcbiAgICBjYXNlICdkZWJvdW5jZSc6XG4gICAgICByZXR1cm4gZGVib3VuY2UocmVzaXplQ2FsbGJhY2ssIHJlZnJlc2hSYXRlLCByZWZyZXNoT3B0aW9ucyk7XG4gICAgY2FzZSAndGhyb3R0bGUnOlxuICAgICAgcmV0dXJuIHRocm90dGxlKHJlc2l6ZUNhbGxiYWNrLCByZWZyZXNoUmF0ZSwgcmVmcmVzaE9wdGlvbnMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcmVzaXplQ2FsbGJhY2s7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gKGZuOiB1bmtub3duKTogYm9vbGVhbiA9PiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpc1NTUiA9ICgpOiBib29sZWFuID0+IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgY29uc3QgaXNET01FbGVtZW50ID0gKGVsZW1lbnQ6IHVua25vd24pOiBib29sZWFuID0+XG4gIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQ7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOb3RpZmllciA9XG4gIChcbiAgICBvblJlc2l6ZTogUHJvcHNbJ29uUmVzaXplJ10sXG4gICAgc2V0U2l6ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248UmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnM+PixcbiAgICBoYW5kbGVXaWR0aDogYm9vbGVhbixcbiAgICBoYW5kbGVIZWlnaHQ6IGJvb2xlYW5cbiAgKSA9PlxuICAoeyB3aWR0aCwgaGVpZ2h0IH06IFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zKTogdm9pZCA9PiB7XG4gICAgc2V0U2l6ZShwcmV2ID0+IHtcbiAgICAgIGlmIChwcmV2LndpZHRoID09PSB3aWR0aCAmJiBwcmV2LmhlaWdodCA9PT0gaGVpZ2h0KSB7XG4gICAgICAgIC8vIHNraXAgaWYgZGltZW5zaW9ucyBoYXZlbid0IGNoYW5nZWRcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9XG5cbiAgICAgIGlmICgocHJldi53aWR0aCA9PT0gd2lkdGggJiYgIWhhbmRsZUhlaWdodCkgfHwgKHByZXYuaGVpZ2h0ID09PSBoZWlnaHQgJiYgIWhhbmRsZVdpZHRoKSkge1xuICAgICAgICAvLyBwcm9jZXNzIGBoYW5kbGVIZWlnaHQvaGFuZGxlV2lkdGhgIHByb3BzXG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfVxuXG4gICAgICBvblJlc2l6ZT8uKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfSk7XG4gIH07XG4iLCIvKipcclxuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBfd2lkZ2V0TGFiZWw6ICdDb3N0cnV0dG9yZSBRdWVyeScsXHJcbiAgICBzZWxlY3RHZW9tZXRyeTpcIlNlbGV6aW9uYXJlIGxhIGdlb21ldHJpYVwiLFxyXG4gICAgbGF5ZXJzOlwiU3RyYXRpXCIsXHJcbiAgICB6b29tQTpcIlpvb20gQVwiLFxyXG4gICAgZXhwb3J0Q3N2OlwiRXNwb3J0YXppb25lIGluIGZpbGUgY3N2XCIsXHJcbiAgICBleHBvcnRKc29uOlwiRXNwb3J0YXppb25lIGluIHVuYSByYWNjb2x0YSBkaSBmdW56aW9uaVwiLFxyXG4gICAgc3RhdGlzdGljczpcIlN0YXRpc3RpY2hlXCIsXHJcbiAgICBjcmVhdGVMYXllcjpcIkNyZWFyZSBpbCBsaXZlbGxvXCIsXHJcbiAgICBhdHRyaWJ1dGVUYWJsZTpcIlZpc3RhIG5lbGxhIHRhYmVsbGEgZGVnbGkgYXR0cmlidXRpXCIsXHJcbiAgICBkZWxldGU6XCJDYW5jZWxsYXJlXCIsXHJcbiAgICBjb3VudE9mSXRlbXM6XCJDb250ZWdnaW8gZGVnbGkgYXJ0aWNvbGlcIixcclxuICAgIHN1bU9mVmFsdWVzOlwiU29tbWEgZGVpIHZhbG9yaVwiLFxyXG4gICAgbWluaW11bTpcIk1pbmltb1wiLFxyXG4gICAgbWF4aW11bTpcIk1hc3NpbW9cIixcclxuICAgIGF2ZXJhZ2U6XCJNZWRpYVwiLFxyXG4gICAgc2VsZWN0QnlQb2ludDpcIlNlbGV6aW9uZSBwZXIgcHVudG9cIixcclxuICAgIHNlbGVjdGlvbkJ5TGluZTpcIlNlbGV6aW9uZSBwZXIgbGluZWFcIixcclxuICAgIHNlbGVjdGlvbkJ5UG9seWdvbjpcIlNlbGV6aW9uZSBwZXIgcG9saWdvbm9cIixcclxuICAgIHNlbGVjdGlvbkJ5UmVjdGFuZ3VsYXI6XCJTZWxlemlvbmUgcGVyIHJldHRhbmdvbG9cIixcclxuICAgIHNlbGVjdGlvbkJ5Q2lyY2xlOlwiU2VsZXppb25lIHBlciBjZXJjaGlvXCIsXHJcbiAgICByZWZyZXNoOlwiQWdnaW9ybmFyZVwiLFxyXG4gICAgb2s6XCJPS1wiLFxyXG4gICAgY2FuY2VsOlwiQW5udWxsYW1lbnRvXCIsXHJcbiAgICBmaWVsZHM6XCJDYW1waVwiLFxyXG4gICAgc2VsZWN0aW9uQWN0aW9uOlwiU2VsZXppb25lIEF6aW9uZVwiLFxyXG4gICAgbWFwTG9hZGluZzpcIkluIGF0dGVzYSBkZWwgY2FyaWNhbWVudG8gZGVsbGEgbWFwcGEuLi5cIixcclxuICAgIG5vU2VsZWN0ZWRJdGVtOlwiTm9uIMOoIHN0YXRhIHNlbGV6aW9uYXRhIGFsY3VuYSB2b2NlXCIsXHJcbiAgICBub0l0ZW1TZWxlY3RlZDpcIk5vbiDDqCBzdGF0byB0cm92YXRvIGFsY3VuIGF0dHJpYnV0byBkb3BvIGwnaW50ZXJyb2dhemlvbmVcIlxyXG59XHJcbiIsImNvbnN0ICBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyID0gW1xyXG4gICAgeyBuYW1lOiAnw6gnLCB2YWx1ZTogJz0nIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6gnLCB2YWx1ZTogJzw+JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdW5vIGRpJywgdmFsdWU6ICdJTicgfSwgLy8gT0JKRUNUSUQgSU4gKDEsMiwzKVxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIG5lc3N1bm8gZGknLCB2YWx1ZTogJ05PVF9JTicgfSwgLy8gICBPQkpFQ1RJRCBOT1RfSU4gKDEsMiwzKVxyXG4gICAgeyBuYW1lOiAnw6ggYWxtZW5vJywgdmFsdWU6ICc8PScgfSxcclxuICAgIHsgbmFtZTogJ8OoIGFsIG1hc3NpbW8nLCB2YWx1ZTogJz49JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggbWlub3JlIGRpJywgdmFsdWU6ICc8JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggbWFnZ2lvcmUgZGknLCB2YWx1ZTogJz4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB2dW90bycsIHZhbHVlOiAnaXMgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCB2dW90bycsIHZhbHVlOiAnaXMgbm90IG51bGwnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBjb21wcmVzbyB0cmEnLCB2YWx1ZTogJ2luY2x1ZGVkJyB9LCAvLyBPQkpFQ1RJRCA8IDIgQU5EIE9CSkVDVElEID4gNFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIGNvbXByZXNvIHRyYScsIHZhbHVlOiAnaXNfbm90X2luY2x1ZGVkJyB9IC8vZGEgdHJvdmFyZVxyXG5dO1xyXG5jb25zdCAgIHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcgPSBbXHJcbiAgICB7IG5hbWU6ICfDqCcsIHZhbHVlOiAnPScgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCcsIHZhbHVlOiAnPD4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB1bm8gZGknLCB2YWx1ZTogJ0lOJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIG5lc3N1bm8gZGknLCB2YWx1ZTogJ05PVF9JTicgfSxcclxuICAgIHsgbmFtZTogJ2luaXppYSBjb24nLCB2YWx1ZTogJ0xJS0UlJyB9LFxyXG4gICAgeyBuYW1lOiAndGVybWluYSBjb24nLCB2YWx1ZTogJyVMSUtFJyB9LFxyXG4gICAgeyBuYW1lOiAnY29udGllbmUnLCB2YWx1ZTogJyVMSUtFJScgfSxcclxuICAgIHsgbmFtZTogJ25vbiBjb250aWVuZScsIHZhbHVlOiAnTk9UIExJS0UnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB2dW90bycsIHZhbHVlOiAnaXMgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCB2dW90bycsIHZhbHVlOiAnaXMgbm90IG51bGwnIH1cclxuXTtcclxuZXhwb3J0IHsgcXVlcnlDb25zdHJ1Y3Rvck51bWJlciwgcXVlcnlDb25zdHJ1Y3RvclN0cmluZyB9IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9seWdvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZXN0X3N1cHBvcnRfUXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBSZWFjdCwgQWxsV2lkZ2V0UHJvcHMsIGpzeCwgYXBwQWN0aW9ucyB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZVwiO1xuaW1wb3J0IHsgUGx1c091dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsdXNcIjtcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgU2VsZWN0LCBPcHRpb24sIEFsZXJ0LCBCdXR0b24sIEljb24gfSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xuaW1wb3J0IHsgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgUXVlcnkgZnJvbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCI7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCIuL2NvbXBvbmVudHMvVGFibGVcIjtcbmltcG9ydCBoZWxwZXIgZnJvbSBcIi4uL2Nvbm5lY3RvclwiO1xuaW1wb3J0IFBvbHlnb24gZnJvbSBcImVzcmkvZ2VvbWV0cnkvUG9seWdvblwiO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSBcIi4vbGliL1Jlc2l6ZURldGVjdG9yXCI7XG5pbXBvcnQgQXR0cmlidXRlVGFibGVDb25uZWN0b3IgZnJvbSBcIi4uL2Nvbm5lY3Rvci9hdHRyaWJ1dGVfdGFibGVfY29ubmVjdG9yXCI7XG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIjtcbmltcG9ydCBBZGRTZXRUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL0FkZFNldFRhYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIEFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcbiAgYW55XG4+IHtcbiAgZ3JhcGhpY0xheWVyRm91bmQgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiBcImhpZGVcIiwgdmlzaWJsZTogdHJ1ZSB9KTtcbiAgZ3JhcGhpY0xheWVyU2VsZWN0ZWQgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiBcImhpZGVcIiwgdmlzaWJsZTogdHJ1ZSB9KTtcblxuICBzdGF0aWMgYWN0aXZlViA9IG51bGw7XG4gIHN0YXRpYyBqaW11TGF5ZXJWaWV3eiA9IG51bGw7XG4gIHN0YXRpYyBhdHRyaWJ1dGVfdGFibGVfZGF0YSA9IG51bGw7XG4gIHN0YXRpYyBpbml0aWFsWm9vbSA9IDA7XG5cbiAgYXR0cmlidXRlVGFibGVDb25uZWN0b3IgPSBudWxsO1xuICBxdWVyeUFycmF5ID0gW107XG4gIG91dGZpZWxkcyA9IFtdO1xuICBjdXJyZW50TGF5ZXJWaWV3ID0gbnVsbDtcbiAgc2V0UXVlcnlBcnJheSA9IFtdO1xuICBzZXRPdXRGaWVsZHMgPSBbXTtcbiAgc2V0UXVlcnlTdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgLy9MYXllclxuICAgIHRoaXMub25DaGFuZ2VTZWxlY3RMYXllciA9IHRoaXMub25DaGFuZ2VTZWxlY3RMYXllci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UXVlcnlBdHRyaWJ1dGUgPSB0aGlzLmdldFF1ZXJ5QXR0cmlidXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVyeSA9IHRoaXMuZ2V0UXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRRdWVyeSA9IHRoaXMuc2VuZFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kUXVlcnlTZXQgPSB0aGlzLnNlbmRRdWVyeVNldC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMucnVuYm90aFF1ZXJpZXM9IHRoaXMucnVuYm90aFF1ZXJpZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRoaXJkUXVlcnkgPSB0aGlzLnRoaXJkUXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyb3Bkb3duSXRlbUNsaWNrID0gdGhpcy5kcm9wZG93bkl0ZW1DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hvb3NlQW5kT3IgPSB0aGlzLmNob29zZUFuZE9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaG9vc2VBbmRPclNldCA9IHRoaXMuY2hvb3NlQW5kT3JTZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlRHJvcCA9IHRoaXMuY2xvc2VEcm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuRHJvcCA9IHRoaXMub3BlbkRyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gdGhpcy5jbG9zZURyb3BPbmNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25tb3VzZUxlYXZlID0gdGhpcy5vbm1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldEFsbEppbXVMYXllclZpZXdzID0gdGhpcy5nZXRBbGxKaW11TGF5ZXJWaWV3cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uID0gdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCA9IHRoaXMuZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVyeUF0dHJpYnV0ZVNldCA9IHRoaXMuZ2V0UXVlcnlBdHRyaWJ1dGVTZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFF1ZXJ5U2V0ID0gdGhpcy5nZXRRdWVyeVNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DaGFuZ2VDaGVja0JveFNldCA9IHRoaXMub25DaGFuZ2VDaGVja0JveFNldC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaW5pdCA9ICgpID0+IHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgamltdU1hcFZpZXc6IG51bGwsXG4gICAgICBsYXllckNvbnRlbnRzOiBbXSxcbiAgICAgIGNoZWNrZWRMYXllcl86IFtdLFxuICAgICAgcmVzdWx0TGF5ZXJMaXN0OiBbXSxcbiAgICAgIGlzTGF5ZXJTZWxlY3RlZDogZmFsc2UsXG4gICAgICByZXN1bHRzTGF5ZXJTZWxlY3RlZDogW10sXG4gICAgICBjdXJyZW50VGFyZ2V0VGV4dDogbnVsbCxcbiAgICAgIGdlb21ldHJ5OiBudWxsLFxuICAgICAgdHlwZVNlbGVjdGVkOiBudWxsLFxuICAgICAgbGlzdFNlcnZpY2VzOiBbXSxcbiAgICAgIGN1cnJlbnRGaXJzdFF1ZXJ5OiBcIlwiLFxuICAgICAgY3VycmVudEZpcnN0UXVlcnlUeXBlOiBudWxsLFxuICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBcInZhbG9yZVwiLFxuICAgICAgZmlyc3RUZXh0SW5jbHVkZWRIYW5kbGVyOiBcIjBcIixcbiAgICAgIHNlY29uZFRleHRJbmNsdWRlZEhhbmRsZXI6IFwiMFwiLFxuICAgICAgdGFibGVzOiBbXSxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBjb3VudGVySXNDaGVja2VkOiBbXSxcbiAgICAgIGNoZWNrZWRUb1F1ZXJ5OiBbXSxcbiAgICAgIHRhYmxlQ291bnRlcjogMCxcbiAgICAgIHRhYmxlQ291bnRlclNldDogMCxcbiAgICAgIHdoZXJlQ2xhdXNlczogW10sXG4gICAgICB0YWJsZXNTZXRJZDogbnVsbCxcbiAgICAgIHdoZXJlQ2xhdXNlU2V0OiBbXSxcbiAgICAgIHRhYmxlc1NldDogW10sXG4gICAgICB0YWJsZXNJZDogbnVsbCxcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICBBbmRPcjogXCJBTkRcIixcbiAgICAgIEFuZE9yU2V0OiBcIkFORFwiLFxuICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgIGF1dE9wZW46IHRydWUsXG4gICAgICBtb3VzZWxlYXZlOiBmYWxzZSxcbiAgICAgIGRyb3BEb3duczoge30sXG4gICAgICBkcm9wRG93bnNTZXQ6IHt9LFxuICAgICAgaGlnaGxpZ2h0SWRzOiBbXSxcbiAgICAgIHNlbGVjdGVkRmllbGQ6IG51bGwsXG4gICAgICBvdGhlclF1ZXJpZXNWYWx1ZToge30sXG4gICAgICBkcm9wSWQ6IG51bGwsXG4gICAgICBkcm9wSWRTZXQ6IG51bGwsXG4gICAgICBoaWdsaWdodFNlbGVjdGVkOiBbXSxcbiAgICAgIGl0ZW1Ob3RGb3VuZDogbnVsbCxcbiAgICAgIGN1cnJlbnRTZWxlY3RlZElkOiBcIiBcIixcbiAgICAgIGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IGZhbHNlLFxuICAgICAgd2lkZ2V0U3RhdGVDbG9zZWRDaGVja2VkOiBmYWxzZSxcbiAgICAgIHdpZGdldFN0YXRlT3BlbmVkQ2hlY2tlZDogZmFsc2UsXG4gICAgICBzaG93QWRkU2VsZWN0OiB0cnVlLFxuICAgICAgU2V0QmxvY2s6IFtdLFxuICAgICAgc2VsZWN0ZWRJZDogbnVsbCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgIH07XG4gIH07XG5cbiAgbmxzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsXG4gICAgICA/IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0sXG4gICAgICAgIH0pXG4gICAgICA6IGlkO1xuICB9O1xuXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyKGptdjogSmltdU1hcFZpZXcpIHtcbiAgICBpZiAoam12KSB7XG4gICAgICBqbXYudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY0xheWVyRm91bmQpO1xuICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNMYXllclNlbGVjdGVkKTtcbiAgICAgIGNvbnN0IHJlc3VsdExheWVyTGlzdCA9IFtdO1xuICAgICAgam12LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZi50eXBlID09PSBcImZlYXR1cmVcIikge1xuICAgICAgICAgIGptdi52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiO1xuICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW1wiKlwiXTtcbiAgICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7IHdoZXJlOiBxdWVyeS53aGVyZSB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc3VsdExheWVyTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGYsXG4gICAgICAgICAgICBsYWJlbDogZi50aXRsZSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgICAgICAgIGxheWVySUQ6IGYuaWQsXG4gICAgICAgICAgICB1cmxTZXJ2aWNlU2VydmVyOiBmLnVybCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBXaWRnZXQuYWN0aXZlViA9IGptdjtcbiAgICAgIFdpZGdldC5qaW11TGF5ZXJWaWV3eiA9IGptdj8uamltdUxheWVyVmlld3M7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVzdWx0TGF5ZXJMaXN0OiByZXN1bHRMYXllckxpc3QsIGppbXVNYXBWaWV3OiBqbXYgfSk7XG4gICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yID0gbmV3IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yKGptdiwgdGhpcyk7XG4gICAgICBXaWRnZXQuaW5pdGlhbFpvb20gPSBqbXYudmlldy56b29tO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzTGF5ZXJTZWxlY3RlZCAhPT0gcHJldlByb3BzLmlzTGF5ZXJTZWxlY3RlZCkge1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMgIT09IHByZXZQcm9wcy53aGVyZUNsYXVzZXMpIHtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHt9XG4gIC8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogRVZFTlQgQ0xJQ0sgU0VMRUNUXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICByZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKSB7XG4gICAgbGV0IG5ld1doZXJlQ2xhdXNlID0gb2JqO1xuICAgIGlmIChvYmo/LmlmSW5Pck5vdEluUXVlcnlWYWx1ZSkge1xuICAgICAgbmV3V2hlcmVDbGF1c2UgPSB7XG4gICAgICAgIGlkOiBvYmouaWQsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBvYmouYXR0cmlidXRlUXVlcnksXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogb2JqLmF0dHJpYnV0ZVF1ZXJ5VHlwZSxcbiAgICAgICAgcXVlcnlWYWx1ZTogb2JqLnF1ZXJ5VmFsdWUsXG4gICAgICAgIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogb2JqLmlmSW5Pck5vdEluUXVlcnlWYWx1ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1doZXJlQ2xhdXNlID0ge1xuICAgICAgICBpZDogb2JqLmlkLFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogb2JqLmF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IG9iai5hdHRyaWJ1dGVRdWVyeVR5cGUsXG4gICAgICAgIHF1ZXJ5VmFsdWU6IG9iai5xdWVyeVZhbHVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1doZXJlQ2xhdXNlO1xuICB9XG5cbiAgYXN5bmMgZ2V0UXVlcnlBdHRyaWJ1dGUoZSkge1xuICAgIGxldCBjdXJyZW50V2hlcmVDbGF1c2U7XG4gICAgaWYgKCF0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGgpIHtcbiAgICAgIGxldCB3aGVyZUNsYXVzZSA9IHtcbiAgICAgICAgaWQ6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlLFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YXR5cGUudmFsdWUsXG4gICAgICAgIHF1ZXJ5VmFsdWU6IFwiPVwiLFxuICAgICAgfTtcbiAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZSA9IHdoZXJlQ2xhdXNlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoZXJlQ2xhdXNlczogW3doZXJlQ2xhdXNlXSB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgICAuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKSB7XG4gICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgIC4uLm9iaixcbiAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnk6IGUuY3VycmVudFRhcmdldC5uYW1lLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmRhdGF0eXBlLnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9iaiA9IHRoaXMucmVtb3ZlVmFsdWVGcm9tT2JqZWN0KG9iaik7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZSA9IG9iajtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHdoZXJlQ2xhdXNlID0ge1xuICAgICAgICAgIGlkOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gd2hlcmVDbGF1c2UgPSB0aGlzLnJlbW92ZVZhbHVlRnJvbU9iamVjdCh3aGVyZUNsYXVzZSlcbiAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2U7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHdoZXJlQ2xhdXNlczogWy4uLnRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLCB3aGVyZUNsYXVzZV0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZpZWxkOiBlLmN1cnJlbnRUYXJnZXQubmFtZSB9LCAoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlKVxuICAgICAgICB0aGlzLm1hbmlwdWxhdGVGaWVsZFF1ZXJ5KFxuICAgICAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZS5xdWVyeVZhbHVlLFxuICAgICAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZS5pZCxcbiAgICAgICAgICBcInNpbmdsZVwiXG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBnZXRRdWVyeUF0dHJpYnV0ZVNldChlKSB7XG4gICAgbGV0IGN1cnJlbnRXaGVyZUNsYXVzZTtcbiAgICBpZiAoIXRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQubGVuZ3RoKSB7XG4gICAgICBsZXQgd2hlcmVDbGF1c2VTZXQgPSB7XG4gICAgICAgIGlkOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSxcbiAgICAgICAgYXR0cmlidXRlUXVlcnk6IGUuY3VycmVudFRhcmdldC5uYW1lLFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmRhdGF0eXBlLnZhbHVlLFxuICAgICAgICBxdWVyeVZhbHVlOiBcIj1cIixcbiAgICAgIH07XG4gICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSB3aGVyZUNsYXVzZVNldDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGVyZUNsYXVzZVNldDogW3doZXJlQ2xhdXNlU2V0XSB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQubGVuZ3RoKSB7XG4gICAgICBjb25zdCBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldFxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpO1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKSB7XG4gICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgIC4uLm9iaixcbiAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnk6IGUuY3VycmVudFRhcmdldC5uYW1lLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmRhdGF0eXBlLnZhbHVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG9iaiA9IHRoaXMucmVtb3ZlVmFsdWVGcm9tT2JqZWN0KG9iaik7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZVNldCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZVNldC5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gb2JqO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyB3aGVyZUNsYXVzZVNldDogZmlsdGVyZWRXaGVyZUNsYXVzZVNldCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHdoZXJlQ2xhdXNlU2V0ID0ge1xuICAgICAgICAgIGlkOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2VTZXQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldCwgd2hlcmVDbGF1c2VTZXRdLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZpZWxkOiBlLmN1cnJlbnRUYXJnZXQubmFtZSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLm1hbmlwdWxhdGVGaWVsZFF1ZXJ5KFxuICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UucXVlcnlWYWx1ZSxcbiAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlLmlkLFxuICAgICAgICBcInNldFwiXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZm9yIGNhbGxlZCBvbiBkcm9wIHNlbGVjdCBsaXN0XG4gIGFzeW5jIGdldFF1ZXJ5KGUsIHR5cGUgPSBcInNpbmdsZVwiKSB7XG4gICAgY29uc3QgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXROYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5tYW5pcHVsYXRlRmllbGRRdWVyeShjdXJyZW50VGFyZ2V0TmFtZSwgY2xpY2tlZFF1ZXJ5VGFibGVJZCwgdHlwZSk7XG4gIH1cblxuICBhc3luYyBtYW5pcHVsYXRlRmllbGRRdWVyeShcbiAgICBjdXJyZW50VGFyZ2V0TmFtZTogc3RyaW5nLFxuICAgIGNsaWNrZWRRdWVyeVRhYmxlSWQ6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmdcbiAgKSB7XG4gICAgbGV0IHF1ZXJ5SW5kZXggPSAtMTtcbiAgICBsZXQgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZSA9IFwiIFwiO1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBjb25zdCBrZXl0eXBlID0gdHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XG4gICAgaWYgKHRoaXMuc3RhdGVba2V5dHlwZV0ubGVuZ3RoKSB7XG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZVtrZXl0eXBlXVxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoY2xpY2tlZFF1ZXJ5VGFibGVJZCk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xuICAgICAgICAgICAgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZSA9IG9iai5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICAgIC8vIG9iaiA9IHRoaXMucmVtb3ZlVmFsdWVGcm9tT2JqZWN0KG9iailcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBxdWVyeVZhbHVlOiBjdXJyZW50VGFyZ2V0TmFtZSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IFtrZXl0eXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGN1cnJlbnRUYXJnZXROYW1lID09PSBcIklOXCIgfHwgY3VycmVudFRhcmdldE5hbWUgPT09IFwiTk9UX0lOXCIpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9IGlzIG5vdCBudWxsYDtcbiAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9YF07XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBmLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgICAgICAgICByZXN1bHRzLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbFRoaXJkUXVlcnkgPSBbXTtcbiAgICAgICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBlbC5hdHRyaWJ1dGVzW2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGVdLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZWwuYXR0cmlidXRlc1tjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlXSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxUaGlyZFF1ZXJ5WzBdLnZhbHVlICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAgICAgICBhLmxhYmVsIDwgYi5sYWJlbCA/IC0xIDogYS5sYWJlbCA+IGIubGFiZWwgPyAxIDogMFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsVGhpcmRRdWVyeS5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGEudmFsdWUgLSBiLnZhbHVlIDwgMCA/IC0xIDogYS52YWx1ZSA9PT0gYi52YWx1ZSA/IDAgOiAxXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5dHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIG9iaiA9IHRoaXMucmVtb3ZlVmFsdWVGcm9tT2JqZWN0KG9iailcbiAgICAgICAgICAgICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgaWZJbk9yTm90SW5RdWVyeVZhbHVlOiBkZXRhaWxUaGlyZFF1ZXJ5IH07XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChrZXl0eXBlID09PSBcIndoZXJlQ2xhdXNlU2V0XCIpIHtcbiAgICAgIGlmIChuZXdXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5hZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrKFxuICAgICAgICAgIGNsaWNrZWRRdWVyeVRhYmxlSWQsXG4gICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0UXVlcnlTZXQoZSwgdHlwZSA9IFwic2luZ2xlXCIpIHtcbiAgICBjb25zdCBjbGlja2VkUXVlcnlUYWJsZUlkID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWU7XG4gICAgY29uc3QgY3VycmVudFRhcmdldE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQubmFtZTtcbiAgICB0aGlzLm1hbmlwdWxhdGVGaWVsZFF1ZXJ5KGN1cnJlbnRUYXJnZXROYW1lLCBjbGlja2VkUXVlcnlUYWJsZUlkLCBcInNldFwiKTtcbiAgfVxuXG4gIC8vVE9ETyBsYSBzZW5kUXVlcnkgYW5kcsOgIHJpc2lzdGVtYXRhIHF1YW5kbyBzaSBhZ2dpdW5nZXLDoCBvbHRyZSBhbGwnZXNwcmVzc2lvbmUgYW5jaGUgaWwgc2V0IGRpIGVzcHJlc3Npb25pXG4gIC8vIHBlcmNow6kgb3JhIHBlciBsJ0FORCBmYSBpbCBjaWNsbyBmb3Igc3Ugb2duaSB3aGVyZSBpbnNlcml0YSBuZWxsJ2FycmF5IG1hIGRvcG8gc2Fyw6AgbmVjZXNzYXJpbyBzY29tcG9ycmUgcGVyIGNyZWFyZSBsZSBlc3ByZXNzaW9uaVxuXG4gIC8vIHN0ZXAxXG4gIGFzeW5jIHNlbmRRdWVyeSgpIHtcbiAgICB0aGlzLnF1ZXJ5QXJyYXkgPSBbXTtcbiAgICB0aGlzLm91dGZpZWxkcyA9IFtdO1xuICAgIGNvbnN0IGNoZWNrZWRRdWVyeSA9IFtcbiAgICAgIFwiaXMgbnVsbFwiLFxuICAgICAgXCJpcyBub3QgbnVsbFwiLFxuICAgICAgXCJJTlwiLFxuICAgICAgXCJOT1RfSU5cIixcbiAgICAgIFwiaW5jbHVkZWRcIixcbiAgICAgIFwiaXNfbm90X2luY2x1ZGVkXCIsXG4gICAgXTtcbiAgICBjb25zdCBsaWtlbHlRdWVyeSA9IFtcIkxJS0UlXCIsIFwiJUxJS0VcIiwgXCIlTElLRSVcIiwgXCJOT1QgTElLRVwiXTtcbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5BbmRPciA9PT0gXCJBTkRcIikge1xuICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5mb3JFYWNoKChlbCwgaWQpID0+IHtcbiAgICAgICAgICBsZXQgYXR0cmlidXRlUXVlcnkgPSBlbC5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IGVsLnF1ZXJ5VmFsdWU7XG4gICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImlzIG51bGxcIiB8fCBxdWVyeVZhbHVlID09PSBcImlzIG5vdCBudWxsXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnlWYWx1ZSA9PT0gXCJJTlwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiTk9UX0lOXCIpIHtcbiAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICBlbC5jaGVja2VkTGlzdC5mb3JFYWNoKChlbCkgPT4gdmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaW5jbHVkZWRcIiB8fFxuICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpc19ub3RfaW5jbHVkZWRcIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgIGZpcnN0VHh0OiBlbC5maXJzdFR4dC52YWx1ZSxcbiAgICAgICAgICAgICAgc2Vjb25kVHh0OiBlbC5zZWNvbmRUeHQudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlld1xuICAgICAgICAgICAgICAgICAgLndoZW5MYXllclZpZXcoZilcbiAgICAgICAgICAgICAgICAgIC50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVyeUNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgIC8vc3RlcCAyIHN0YXJ0IHF1ZXJ5aW5nXG4gICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5BbmRPcixcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBmXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeTogYW55ID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZvckVhY2goKGVsLCBpZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XG4gICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xuICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpcyBudWxsXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpcyBub3QgbnVsbFwiKSB7XG4gICAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9YDtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbjtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xuICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgJiYgZWwuY2hlY2tlZExpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGVsLmNoZWNrZWRMaXN0LmZvckVhY2goKGVsKSA9PiB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiTk9UX0lOXCIgJiZcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkLmxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuY291bnRlcklzQ2hlY2tlZC5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnModmFsdWUpKSB7XG4gICAgICAgICAgICAgIGxldCBxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IElOICgke1xuICAgICAgICAgICAgICAgIFwiJ1wiICsgdmFsdWUuam9pbihcIicsICdcIikgKyBcIidcIlxuICAgICAgICAgICAgICB9KWA7XG4gICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbjtcbiAgICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IElOICgke3ZhbHVlLmpvaW4oXCIsXCIpfSlgO1xuICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW47XG4gICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpc19ub3RfaW5jbHVkZWRcIikge1xuICAgICAgICAgICAgbGV0IHF1ZXJ5SW47XG4gICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCJcbiAgICAgICAgICAgICAgPyAocXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSA+ICR7ZWwuZmlyc3RUeHQudmFsdWV9IEFORCAke2F0dHJpYnV0ZVF1ZXJ5fSA8ICR7ZWwuc2Vjb25kVHh0LnZhbHVlfWApXG4gICAgICAgICAgICAgIDogKHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gPCAke2VsLmZpcnN0VHh0LnZhbHVlfSBPUiAke2F0dHJpYnV0ZVF1ZXJ5fSA+ICR7ZWwuc2Vjb25kVHh0LnZhbHVlfWApO1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUluO1xuICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFjaGVja2VkUXVlcnkuaW5jbHVkZXMocXVlcnlWYWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgaWYgKGxpa2VseVF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gaGVscGVyLmxpa2VseVF1ZXJ5KFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcXVlcnlJbnB1dCA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9ICcke3ZhbHVlfSdgO1xuICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbnB1dDtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW5wdXQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBxdWVyeUlucHV0ID0gYCR7YXR0cmlidXRlUXVlcnl9ICR7cXVlcnlWYWx1ZX0gJHt2YWx1ZX1gO1xuICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbnB1dDtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW5wdXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlld1xuICAgICAgICAgICAgICAgICAgLndoZW5MYXllclZpZXcoZilcbiAgICAgICAgICAgICAgICAgIC50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeVJlcXVlc3Q6IFwiT1JcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYXllcjogZixcbiAgICAgICAgICAgICAgICAgICAgICBBbmRPcjogdGhpcy5zdGF0ZS5BbmRPcixcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgICAgdGhpcy5xdWVyeUFycmF5ID0gW107XG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBuZXcgUXVlcnkoKSxcbiAgICAgICAgICAgICAgICBxdWVyeVJlcXVlc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgbGF5ZXI6IGYsXG4gICAgICAgICAgICAgICAgQW5kT3I6IHRoaXMuc3RhdGUuQW5kT3IsXG4gICAgICAgICAgICAgICAgZmllbGQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc291cmNlOiBcInNldFF1ZXJ5XCIsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSB9KTtcbiAgICAgIHRoaXMucmV0dXJuVG9PcmlnaW5hbEV4dGVudCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFF1ZXJ5Q29uc3RydWN0b3IgPSAocXVlcnlSZXF1ZXN0LCBmaXJzdFF1ZXJ5LCBzZWNvbmRRdWVyeVRhcmdldCkgPT4ge1xuICAgIHN3aXRjaCAocXVlcnlSZXF1ZXN0KSB7XG4gICAgICBjYXNlIFwiTElLRSVcIjpcbiAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IExJS0UgJyR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xuICAgICAgY2FzZSBcIiVMSUtFXCI6XG4gICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgIGNhc2UgXCIlTElLRSVcIjpcbiAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgIGNhc2UgXCJOT1QgTElLRVwiOlxuICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gTk9UIExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgIGNhc2UgXCJpcyBudWxsXCI6XG4gICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBpcyBudWxsYDtcbiAgICAgIGNhc2UgXCJpcyBub3QgbnVsbFwiOlxuICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gaXMgbm90IG51bGxgO1xuICAgICAgY2FzZSBcIklOXCI6XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7XG4gICAgICAgICAgICBcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJcbiAgICAgICAgICB9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tQYXJlbnRoZXNpcyhzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZpZWRWYWx1ZSA9IHRoaXMubG9vcFRvR2V0U3RyaW5nKHNlY29uZFF1ZXJ5VGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzdHJpbmdGaWVkVmFsdWV9KWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgXCJOT1RfSU5cIjpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybiBgTk9UICR7Zmlyc3RRdWVyeX0gSU4gKCR7XG4gICAgICAgICAgICBcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJcbiAgICAgICAgICB9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tQYXJlbnRoZXNpcyhzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZpZWRWYWx1ZSA9IHRoaXMubG9vcFRvR2V0U3RyaW5nKHNlY29uZFF1ZXJ5VGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiBgTk9UICAke2ZpcnN0UXVlcnl9IElOICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBOT1QgICR7Zmlyc3RRdWVyeX0gSU4gKCR7c2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIil9KWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBjYXNlIFwiaW5jbHVkZWRcIjpcbiAgICAgICAgcmV0dXJuIGAoJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuZmlyc3RUeHR9IEFORCAke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5zZWNvbmRUeHR9KWA7XG4gICAgICBjYXNlIFwiaXNfbm90X2luY2x1ZGVkXCI6XG4gICAgICAgIHJldHVybiBgKCR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBPUiAke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5zZWNvbmRUeHR9KWA7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAnJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICR7c2Vjb25kUXVlcnlUYXJnZXR9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzZW5kUXVlcnlTZXQoKSB7XG4gICAgY29uc3QgY2hlY2tlZFF1ZXJ5ID0gW1xuICAgICAgXCJpcyBudWxsXCIsXG4gICAgICBcImlzIG5vdCBudWxsXCIsXG4gICAgICBcIklOXCIsXG4gICAgICBcIk5PVF9JTlwiLFxuICAgICAgXCJpbmNsdWRlZFwiLFxuICAgICAgXCJpc19ub3RfaW5jbHVkZWRcIixcbiAgICBdO1xuICAgIGNvbnN0IGxpa2VseVF1ZXJ5ID0gW1wiTElLRSVcIiwgXCIlTElLRVwiLCBcIiVMSUtFJVwiLCBcIk5PVCBMSUtFXCJdO1xuICAgIGxldCBzZXRRdWVyeVN0cmluZyA9IG51bGw7XG4gICAgbGV0IG91dEZpZWxkcyA9IFtdO1xuICAgIGlmICh0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdGF0ZS5TZXRCbG9jay5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICBjb25zdCBibG9ja0lkID0gYmxvY2s/LmJsb2NrSWQ7XG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlU2V0ID0gYmxvY2tbYCR7YmxvY2tJZH1gXTtcbiAgICAgICAgY29uc3QgQW5kT3JTZXQgPSBibG9jaz8uQW5kT3JTZXQ7XG4gICAgICAgIGlmIChBbmRPclNldCA9PT0gXCJBTkRcIikge1xuICAgICAgICAgIGlmICh3aGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aGVyZUNsYXVzZVNldC5mb3JFYWNoKChlbCwgaikgPT4ge1xuICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlUXVlcnkgPSBlbC5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xuICAgICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImlzIG51bGxcIiB8fCBxdWVyeVZhbHVlID09PSBcImlzIG5vdCBudWxsXCIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgZWwuY2hlY2tlZExpc3RTZXQuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaW5jbHVkZWRcIiB8fFxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCJcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICBmaXJzdFR4dDogZWwuZmlyc3RUeHQudmFsdWUsXG4gICAgICAgICAgICAgICAgICBzZWNvbmRUeHQ6IGVsLnNlY29uZFR4dC52YWx1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFjaGVja2VkUXVlcnkuaW5jbHVkZXMocXVlcnlWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoc2V0UXVlcnlTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyArPSB0aGlzLnNldFF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgPSB0aGlzLnNldFF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGogPCB3aGVyZUNsYXVzZVNldC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IFwiICBcIiArIEFuZE9yU2V0ICsgXCIgIFwiO1xuICAgICAgICAgICAgICBvdXRGaWVsZHMucHVzaChgJHthdHRyaWJ1dGVRdWVyeX1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnk6IGFueSA9IFtdO1xuICAgICAgICAgIGlmICh3aGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aGVyZUNsYXVzZVNldC5mb3JFYWNoKChlbCwgaikgPT4ge1xuICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlUXVlcnkgPSBlbC5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xuICAgICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiAmJiBlbC5jaGVja2VkTGlzdFNldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGVsLmNoZWNrZWRMaXN0U2V0LmZvckVhY2goKGVsKSA9PiB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIiAmJlxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkLmxlbmd0aFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkLmZvckVhY2goKGVsKSA9PlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8XG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpc19ub3RfaW5jbHVkZWRcIlxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHh0OiBlbC5maXJzdFR4dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFR4dDogZWwuc2Vjb25kVHh0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IHRoaXMuc2V0UXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyA9IHRoaXMuc2V0UXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaiA8IHdoZXJlQ2xhdXNlU2V0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gXCIgIFwiICsgQW5kT3JTZXQgKyBcIiAgXCI7XG4gICAgICAgICAgICAgIG91dEZpZWxkcy5wdXNoKGAke2F0dHJpYnV0ZVF1ZXJ5fWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLlNldEJsb2NrW2kgKyAxXSkge1xuICAgICAgICAgICAgY29uc3QgbmV4dEJsb2NrID0gdGhpcy5zdGF0ZS5TZXRCbG9ja1tpICsgMV07XG4gICAgICAgICAgICBjb25zdCBuZXh0QmxvY2tJZCA9IG5leHRCbG9jaz8uYmxvY2tJZDtcbiAgICAgICAgICAgIGNvbnN0IG5leHRXaGVyZUNsYXVzZVNldCA9IG5leHRCbG9ja1tgJHtuZXh0QmxvY2tJZH1gXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKGkgPT09IDAgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICAgICAgbmV4dFdoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHx8XG4gICAgICAgICAgICAgICFbXCIoXCJdLmluY2x1ZGVzKHNldFF1ZXJ5U3RyaW5nWzBdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nID0gXCIoXCIgKyBzZXRRdWVyeVN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaSA8IHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICBuZXh0V2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IFwiICkgXCIgKyB0aGlzLnN0YXRlLkFuZE9yICsgXCIgKCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuU2V0QmxvY2tbaSAtIDFdKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2QmxvY2sgPSB0aGlzLnN0YXRlLlNldEJsb2NrW2kgLSAxXTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZCbG9ja0lkID0gcHJldkJsb2NrPy5ibG9ja0lkO1xuICAgICAgICAgICAgY29uc3QgcHJldldoZXJlQ2xhdXNlU2V0ID0gcHJldkJsb2NrW2Ake3ByZXZCbG9ja0lkfWBdO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICAgIGkgPT09IHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICBwcmV2V2hlcmVDbGF1c2VTZXQubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgPSBzZXRRdWVyeVN0cmluZyArIFwiKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IHNldFF1ZXJ5U3RyaW5nLCBvdXRGaWVsZHMgfTtcbiAgfVxuXG4gIGFzeW5jIHRoaXJkUXVlcnkoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRRdWVyeVRlc3QgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQ7XG4gICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgIHRoaXMuaW5RdWVyeUNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50Rmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY3VycmVudFNlY29uZFF1ZXJ5LFxuICAgICAgICAgICAgY3VycmVudFF1ZXJ5VGVzdFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2VTZWxlY3RMYXllcihlKSB7XG4gICAgdGhpcy5ncmFwaGljTGF5ZXJGb3VuZC5yZW1vdmVBbGwoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGYudGl0bGUgPT09IGUuY3VycmVudFRhcmdldC5pbm5lclRleHQpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcud2hlbkxheWVyVmlldyhmKS50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICByZXN1bHRzTGF5ZXJTZWxlY3RlZDogZixcbiAgICAgICAgICAgICAgY3VycmVudFRhcmdldFRleHQ6IGUuY3VycmVudFRhcmdldC5pbm5lclRleHQsXG4gICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZElkOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgICAgICAgIGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIiwgXCJjaGVja2VkTGF5ZXJzXCIsIFtmLmlkXSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRhYmxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRJZCA9IHRoaXMuc3RhdGUudGFibGVDb3VudGVyO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFibGVzOiBbXG4gICAgICAgIC4uLnRoaXMuc3RhdGUudGFibGVzLFxuICAgICAgICB7IGlkOiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlciwgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICB0YWJsZUNvdW50ZXI6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyICsgMSxcbiAgICAgIGRyb3BEb3duczogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3ducywgW2N1cnJlbnRJZF06IGZhbHNlIH0sXG4gICAgfSk7XG4gICAgY29uc3QgdGFibGVMZW5ndGggPSB0aGlzLnN0YXRlLnRhYmxlc1xuICAgICAgLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSlcbiAgICAgIC5maWx0ZXIoU3RyaW5nKS5sZW5ndGg7XG4gICAgY29uc3QgdGFibGVzU2V0TGVuZ3RoID0gdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGg7XG4gICAgaWYgKHRhYmxlTGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0YWJsZXNTZXRMZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGFkZFR3b1RhYmxlID0gKGJsb2NrSWQpID0+IHtcbiAgICBsZXQgbmV3U3RhdGVCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBjb25zdCBpbmRleCA9IG5ld1N0YXRlQmxvY2suZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJsb2NrSWQgPT09IGJsb2NrSWQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IG5ld1N0YXRlQmxvY2tbaW5kZXhdO1xuICAgICAgY29uc3QgY3VycmVudElkID0gY3VycmVudEJsb2NrW1widGFibGVDb3VudGVyU2V0XCJdO1xuICAgICAgY3VycmVudEJsb2NrW1widGFibGVzU2V0XCJdID0gW1xuICAgICAgICAuLi5jdXJyZW50QmxvY2tbXCJ0YWJsZXNTZXRcIl0sXG4gICAgICAgIHsgaWQ6IGN1cnJlbnRJZCwgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgIF07XG4gICAgICBjdXJyZW50QmxvY2tbXCJkcm9wRG93bnNTZXRcIl0gPSB7XG4gICAgICAgIC4uLmN1cnJlbnRCbG9ja1tcImRyb3BEb3duc1NldFwiXSxcbiAgICAgICAgW2N1cnJlbnRJZF06IGZhbHNlLFxuICAgICAgfTtcbiAgICAgIGN1cnJlbnRCbG9ja1tcInRhYmxlQ291bnRlclNldFwiXSA9IGN1cnJlbnRCbG9ja1tcInRhYmxlQ291bnRlclNldFwiXSArIDE7XG4gICAgICBuZXdTdGF0ZUJsb2NrW2luZGV4XSA9IGN1cnJlbnRCbG9jaztcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUudGFibGVzLmxlbmd0aCA+IDApIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IG5ld1N0YXRlQmxvY2sgfSk7XG4gIH07XG5cbiAgYWRkQmxvY2sgPSAoKSA9PiB7XG4gICAgbGV0IGlkT25lID0gdGhpcy5zdGF0ZS5TZXRCbG9jay50YWJsZUNvdW50ZXJTZXQgPz8gMDtcbiAgICBsZXQgaWRUd28gPSBpZE9uZSArIDE7XG4gICAgY29uc3QgY3VycmVudElkID0gaWRPbmU7XG4gICAgY29uc3QgbmV4dEN1cnJlbnRJZCA9IGlkVHdvO1xuICAgIGxldCBuZXdCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBuZXdCbG9jay5wdXNoKHtcbiAgICAgIGJsb2NrSWQ6IHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoLFxuICAgICAgW2Ake3RoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RofWBdOiBbXSxcbiAgICAgIHRhYmxlc1NldDogW1xuICAgICAgICB7IGlkOiBpZE9uZSwgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgICAgeyBpZDogaWRUd28sIGRlbGV0ZWQ6IGZhbHNlIH0sXG4gICAgICBdLFxuICAgICAgdGFibGVDb3VudGVyU2V0OiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlclNldCArIDIsXG4gICAgICBkcm9wRG93bnNTZXQ6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsXG4gICAgICAgIFtgJHtjdXJyZW50SWR9LSR7dGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGh9YF06IGZhbHNlLFxuICAgICAgICBbYCR7bmV4dEN1cnJlbnRJZH0tJHt0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgQW5kT3JTZXQ6IHRoaXMuc3RhdGUuQW5kT3JTZXQsXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBTZXRCbG9jazogbmV3QmxvY2ssXG4gICAgICBkcm9wRG93bnNTZXQ6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsXG4gICAgICAgIFtgJHtjdXJyZW50SWR9LSR7dGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGh9YF06IGZhbHNlLFxuICAgICAgICBbYCR7bmV4dEN1cnJlbnRJZH0tJHt0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gaWYodGhpcy5zdGF0ZS50YWJsZXMubGVuZ3RoID4gMCl0aGlzLnNldFN0YXRlKHtzaG93QWRkU2VsZWN0OmZhbHNlfSk7XG4gICAgY29uc3QgdGFibGVMZW5ndGggPSB0aGlzLnN0YXRlLnRhYmxlc1xuICAgICAgLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSlcbiAgICAgIC5maWx0ZXIoU3RyaW5nKS5sZW5ndGg7XG4gICAgY29uc3QgdGFibGVzU2V0TGVuZ3RoID0gdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGg7XG5cbiAgICBpZiAodGFibGVMZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZVRhYmxlID0gKGlkKSA9PiB7XG4gICAgbGV0IGNvcGllZFRhYmxlID0gWy4uLnRoaXMuc3RhdGUudGFibGVzXTtcbiAgICBjb3BpZWRUYWJsZSA9IGNvcGllZFRhYmxlLm1hcCgoZWwpID0+IHtcbiAgICAgIGlmIChlbC5pZCA9PT0gaWQpZWwuZGVsZXRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfSk7XG4gICAgY29uc3QgbmV3VGFibGVzID0gY29waWVkVGFibGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhYmxlQ291bnRlcjogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgLSAxIH0pO1xuICAgIGNvbnN0IGNvcGllZFdoZXJlQ2xhdXNlcyA9IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlc107XG4gICAgY29uc3QgZGVsZXRlZFdoZXJlQ2xhdXNlcyA9IGNvcGllZFdoZXJlQ2xhdXNlcy5maWx0ZXIoXG4gICAgICAoZWwpID0+IGVsLmlkICE9PSBpZC50b1N0cmluZygpXG4gICAgKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhYmxlczogbmV3VGFibGVzLFxuICAgICAgd2hlcmVDbGF1c2VzOiBkZWxldGVkV2hlcmVDbGF1c2VzLFxuICAgICAgdGFibGVDb3VudGVyOiB0aGlzLnN0YXRlLnRhYmxlQ291bnRlciAtIDEsXG4gICAgICBzZWxlY3RlZElkOiBpZCxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zdGF0ZS50YWJsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2hlcmVDbGF1c2VzOiBbXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHRhYmxlTGVuZ3RoID0gdGhpcy5zdGF0ZS50YWJsZXNcbiAgICAgIC5tYXAoKGVsLCBpZHgpID0+IChlbC5kZWxldGVkID09IGZhbHNlID8gaWR4IDogXCJcIikpXG4gICAgICAuZmlsdGVyKFN0cmluZykubGVuZ3RoO1xuICAgIGNvbnN0IHRhYmxlc1NldExlbmd0aCA9IHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoO1xuICAgIGlmICh0YWJsZUxlbmd0aCA9PSAyICYmIHRhYmxlc1NldExlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDAgJiYgdGFibGVzU2V0TGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDEgJiYgdGFibGVzU2V0TGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGVCbG9jayA9IChibG9ja0lkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBjb3BpZWRCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBjb25zdCBjb3BpZWRXaGVyZWNsYXVzZVNldCA9IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0XTtcbiAgICBjb25zdCBpbmRleCA9IGNvcGllZEJsb2NrLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5ibG9ja0lkID09PSBibG9ja0lkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjb3BpZWRCbG9jay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNldEJsb2NrOiBjb3BpZWRCbG9jayB9KTtcbiAgICB9XG4gICAgaWYgKGNvcGllZFdoZXJlY2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgIGNvcGllZFdoZXJlY2xhdXNlU2V0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZC5zcGxpdChcIi1cIilbMV0gPT09IGJsb2NrSWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoZXJlQ2xhdXNlU2V0OiBjb3BpZWRXaGVyZWNsYXVzZVNldCB9KTtcbiAgICB9XG4gICAgY29uc3QgdGFibGVMZW5ndGggPSB0aGlzLnN0YXRlLnRhYmxlc1xuICAgICAgLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSlcbiAgICAgIC5maWx0ZXIoU3RyaW5nKS5sZW5ndGg7XG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDEgJiYgY29waWVkQmxvY2subGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGVCbG9ja1RhYmxlID0gKHRhYmxlQmxvY2tJZDogc3RyaW5nLCBibG9ja0lkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB0YWJsZUlkID0gdGFibGVCbG9ja0lkLnNwbGl0KFwiLVwiKVswXTtcbiAgICBjb25zdCBjb3BpZWRCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBjb25zdCBjb3BpZWRXaGVyZWNsYXVzZVNldCA9IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0XTtcbiAgICBjb25zdCBjdXJyZW50QmxvY0luZGV4ID0gY29waWVkQmxvY2suZmluZEluZGV4KFxuICAgICAgKGJsb2NrKSA9PiBgJHtibG9jay5ibG9ja0lkfWAgPT09IGJsb2NrSWRcbiAgICApO1xuICAgIGxldCBjdXJyZW50QmxvY2s7XG4gICAgaWYgKGN1cnJlbnRCbG9jSW5kZXggIT09IC0xKSBjdXJyZW50QmxvY2sgPSBjb3BpZWRCbG9ja1tjdXJyZW50QmxvY0luZGV4XTtcbiAgICBpZiAoY3VycmVudEJsb2NrKSB7XG4gICAgICBjb25zdCBjdXJyZW50V2hlcmVDbGF1c2VTZXQgPSBjdXJyZW50QmxvY2tbYmxvY2tJZF07XG4gICAgICBjb25zdCBjdXJyZW50VGFibGVTZXRzID0gY3VycmVudEJsb2NrW1widGFibGVzU2V0XCJdO1xuICAgICAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvcGllZEN1cnJlbnRXaGVyZUNsYXVzZVNldCA9IFsuLi5jdXJyZW50V2hlcmVDbGF1c2VTZXRdO1xuICAgICAgICBjb25zdCB3aGVyZUNsYXVzZVNldEluZGV4ID0gY29waWVkQ3VycmVudFdoZXJlQ2xhdXNlU2V0LmZpbmRJbmRleChcbiAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHRhYmxlQmxvY2tJZCkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGlmICh3aGVyZUNsYXVzZVNldEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGNvcGllZEN1cnJlbnRXaGVyZUNsYXVzZVNldC5zcGxpY2Uod2hlcmVDbGF1c2VTZXRJbmRleCwgMSk7XG4gICAgICAgICAgY3VycmVudEJsb2NrW2Jsb2NrSWRdID0gY29waWVkQ3VycmVudFdoZXJlQ2xhdXNlU2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudFRhYmxlU2V0cz8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvcGllZFRhYmxlU2V0cyA9IFsuLi5jdXJyZW50VGFibGVTZXRzXTtcbiAgICAgICAgY29uc3QgdGFibGVTZXRJbmRleCA9IGNvcGllZFRhYmxlU2V0cy5maW5kSW5kZXgoXG4gICAgICAgICAgKGl0ZW0pID0+IGAke2l0ZW0uaWR9YCA9PT0gdGFibGVJZFxuICAgICAgICApO1xuICAgICAgICBpZiAodGFibGVTZXRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb3BpZWRUYWJsZVNldHNbdGFibGVTZXRJbmRleF1bXCJkZWxldGVkXCJdID0gdHJ1ZTtcbiAgICAgICAgICAvLyBjb3BpZWRUYWJsZVNldHMuc3BsaWNlKHRhYmxlU2V0SW5kZXgsMSk7XG4gICAgICAgICAgY3VycmVudEJsb2NrW1widGFibGVzU2V0XCJdID0gY29waWVkVGFibGVTZXRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb3BpZWRCbG9ja1tjdXJyZW50QmxvY0luZGV4XSA9IGN1cnJlbnRCbG9jaztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBTZXRCbG9jazogY29waWVkQmxvY2sgfSk7XG4gICAgfVxuICAgIGlmIChjb3BpZWRXaGVyZWNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGNvcGllZFdoZXJlY2xhdXNlU2V0LmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gdGFibGVCbG9ja0lkKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb3BpZWRXaGVyZWNsYXVzZVNldC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2hlcmVDbGF1c2VTZXQ6IGNvcGllZFdoZXJlY2xhdXNlU2V0IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkZWxldGVCbG9ja0FsbCA9IChibG9ja0RhdGEpID0+IHt9O1xuXG4gIHRleHRJbnB1dEhhbmRsZXIgPSAoZSwgcXVlcnlUeXBlID0gXCJzaW5nbGVcIikgPT4ge1xuICAgIGxldCB0eHQgPSBlLnRhcmdldC52YWx1ZS50cmltKCk7XG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcbiAgICB0aGlzLnF1ZXJ5VGV4dENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIHF1ZXJ5VHlwZSk7XG4gIH07XG5cbiAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyID0gKGUsIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbMF0udmFsdWU7XG4gICAgbGV0IGlucHV0ID0gXCJmaXJzdFwiO1xuICAgIHRoaXMucXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCwgcXVlcnlUeXBlKTtcbiAgfTtcblxuICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyID0gKGUsIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpXG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcbiAgICBsZXQgaW5wdXQgPSBcInNlY29uZFwiO1xuICAgIHRoaXMucXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCwgcXVlcnlUeXBlKTtcbiAgfTtcbiAgdW5pdm9jb1NlbGVjdEhhbmRsZXIgPSAoZSwgcXVlcnlUeXBlID0gXCJzaW5nbGVcIikgPT4ge1xuICAgIGxldCB0eHQgPSBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzJdLnZhbHVlO1xuICAgIHRoaXMucXVlcnlUZXh0Q29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCwgcXVlcnlUeXBlKTtcbiAgfTtcblxuICBjb250YWluc0FueUxldHRlcnMgPSAoc3RyKSA9PiAvW2EtekEtWl0vLnRlc3Qoc3RyKTtcblxuICBxdWVyeVRleHRDb25zdHJ1Y3RvciA9ICh0eHQsIGN1cnJlbnRUYWJsZUlkLCBxdWVyeVR5cGUpID0+IHtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBsZXQgbmV3V2hlcmVTZXRDbGF1c2U7XG4gICAgY29uc3Qga2V5VHlwZSA9IHF1ZXJ5VHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XG4gICAgaWYgKHRoaXMuc3RhdGVba2V5VHlwZV0ubGVuZ3RoKSB7XG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZVtrZXlUeXBlXVxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoY3VycmVudFRhYmxlSWQpO1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXlUeXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGN1cnJlbnRUYWJsZUlkKSB7XG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgdmFsdWU6IHsgdHh0OiB0eHQgfSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXlUeXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IFtrZXlUeXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRUYWJsZUlkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhcbiAgICAgICAgICBjdXJyZW50VGFibGVJZCxcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3RvciA9ICh0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCwgcXVlcnlUeXBlKSA9PiB7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGNvbnN0IGtleVR5cGUgPSBxdWVyeVR5cGUgPT09IFwic2luZ2xlXCIgPyBcIndoZXJlQ2xhdXNlc1wiIDogXCJ3aGVyZUNsYXVzZVNldFwiO1xuICAgIGlmICh0aGlzLnN0YXRlW2tleVR5cGVdLmxlbmd0aCkge1xuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGVba2V5VHlwZV1cbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRUYWJsZUlkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5VHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBjdXJyZW50VGFibGVJZCkge1xuICAgICAgICAgICAgaW5wdXQgPT09IFwiZmlyc3RcIlxuICAgICAgICAgICAgICA/IChvYmogPSB7IC4uLm9iaiwgZmlyc3RUeHQ6IHsgdmFsdWU6IHR4dCB9IH0pXG4gICAgICAgICAgICAgIDogKG9iaiA9IHsgLi4ub2JqLCBzZWNvbmRUeHQ6IHsgdmFsdWU6IHR4dCB9IH0pO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXlUeXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IFtrZXlUeXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRUYWJsZUlkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhcbiAgICAgICAgICBjdXJyZW50VGFibGVJZCxcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZHJvcGRvd25JdGVtQ2xpY2sgPSAoZSwgdHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzJdLnZhbHVlO1xuICAgIGxldCBjbGlja2VkVmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgbGV0IGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGU7XG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGxldCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2U7XG4gICAgY29uc3Qga2V5dHlwZSA9IHR5cGUgPT09IFwic2luZ2xlXCIgPyBcIndoZXJlQ2xhdXNlc1wiIDogXCJ3aGVyZUNsYXVzZVNldFwiO1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlW2tleXR5cGVdXG4gICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgIC5pbmRleE9mKGNsaWNrZWRRdWVyeVRhYmxlSWQpO1xuICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBjbGlja2VkVmFsdWUgfTtcbiAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlW2tleXR5cGVdLmZpbHRlcihcbiAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICApO1xuICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG9iajtcbiAgICAgICAgICAvLyBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQudmFsdWUgPT09IFwidW5pdm9jb1wiKSB7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xuICAgICAgICAgICAgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZSA9IG9iai5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlld1xuICAgICAgICAgICAgICAgICAgICAud2hlbkxheWVyVmlldyhmKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9IGlzIG5vdCBudWxsYDtcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Y3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZX1gXTtcbiAgICAgICAgICAgICAgICAgICAgICBsYXllclZpZXcuZmlsdGVyID0geyB3aGVyZTogcXVlcnkud2hlcmUgfTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZi5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsVGhpcmRRdWVyeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IE9iamVjdC52YWx1ZXMoZWwuYXR0cmlidXRlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IE9iamVjdC52YWx1ZXMoZWwuYXR0cmlidXRlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogZGV0YWlsVGhpcmRRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBjbGlja2VkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlID0gb2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5maWx0ZXIoKGEpID0+IGEuaWQgIT09IG9iai5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duVmFsdWVRdWVyeTogZS50YXJnZXQudmFsdWUgfSwgKCkgPT4ge30pO1xuICAgIGlmIChrZXl0eXBlID09PSBcIndoZXJlQ2xhdXNlU2V0XCIpIHtcbiAgICAgIGlmIChjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UpXG4gICAgICAgIHRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhcbiAgICAgICAgICBjbGlja2VkUXVlcnlUYWJsZUlkLFxuICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZVxuICAgICAgICApO1xuICAgIH1cbiAgfTtcblxuICBkcm9wRG93biA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhdXRPcGVuOiB0cnVlIH0pO1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlc1xuICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAuaW5kZXhPZihpZC50b1N0cmluZygpKTtcbiAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcbiAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XG4gICAgICAgICAgaWYgKCFvYmouaXNPcGVuKSB7XG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgaXNPcGVuOiB0cnVlIH07XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgaXNPcGVuOiBmYWxzZSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZHJvcERvd25TZXQgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0T3BlbjogdHJ1ZSB9KTtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldFxuICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAuaW5kZXhPZihpZC50b1N0cmluZygpKTtcbiAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5tYXAoKG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICBpZiAoIW9iai5pc09wZW4pIHtcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpc09wZW46IHRydWUgfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBTZXQucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZVNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlzT3BlbjogZmFsc2UgfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUNoZWNrQm94ID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0NoZWNrZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uQ2hhbmdlQ2hlY2tCb3ggPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgY3VycmVudElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gICAgbGV0IG9iamVjdElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNcbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRJZCk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIGlmICghb2JqLmNoZWNrZWRMaXN0KSB7XG4gICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMpKSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlmQWxyZWFkeUNoZWNrID0gb2JqLmNoZWNrZWRMaXN0XG4gICAgICAgICAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouY2hlY2tWYWx1ZSlcbiAgICAgICAgICAgICAgICAuaW5kZXhPZihldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgaWYgKGlmQWxyZWFkeUNoZWNrID09IC0xKSB7XG4gICAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4ub2JqLmNoZWNrZWRMaXN0LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgPT09IG9iai5pZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvYmogb2JqZWN0IGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSB1cGRhdGVkIG9iaiBvYmplY3QgdG8gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcylcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgLy8gRmluZCB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICBjb25zdCBvYmogPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5maW5kKChhKSA9PiBhLmlkID09PSBjdXJyZW50SWQpO1xuICAgICAgLy8gUmVtb3ZlIHRoZSBjaGVja1ZhbHVlIGZyb20gdGhlIGNoZWNrZWRMaXN0IGFycmF5XG4gICAgICBvYmouY2hlY2tlZExpc3QgPSBvYmouY2hlY2tlZExpc3QuZmlsdGVyKFxuICAgICAgICAoYSkgPT4gYS5jaGVja1ZhbHVlICE9PSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlXG4gICAgICApO1xuICAgICAgLy8gVXBkYXRlIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmluZEluZGV4KFxuICAgICAgICAoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkXG4gICAgICApO1xuICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNbaW5kZXhdID0gb2JqO1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHdoZXJlQ2xhdXNlczogdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMsXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzKSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2sgPSAoY3VycmVudElkLCBjdXJyZW50V2hlcmVDbGF1c2UpID0+IHtcbiAgICBjb25zdCBibG9ja0lkID0gY3VycmVudElkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBjb25zdCBjdXJyZW50U2V0QmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgbGV0IGN1cnJlbnRCbG9ja0luZGV4ID0gLTE7XG4gICAgbGV0IGN1cnJlbnRCbG9jaztcbiAgICBjdXJyZW50QmxvY2tJbmRleCA9IGN1cnJlbnRTZXRCbG9jay5maW5kSW5kZXgoXG4gICAgICAoaXRlbSkgPT4gYCR7aXRlbT8uYmxvY2tJZH1gID09PSBibG9ja0lkXG4gICAgKTtcbiAgICBpZiAoY3VycmVudEJsb2NrSW5kZXggIT09IC0xKVxuICAgICAgY3VycmVudEJsb2NrID0gY3VycmVudFNldEJsb2NrW2N1cnJlbnRCbG9ja0luZGV4XTtcbiAgICBsZXQgY3VycmVudFdoZXJlU2V0Q2xhdXNlID0gbnVsbDtcbiAgICBpZiAoY3VycmVudEJsb2NrKSB7XG4gICAgICBjdXJyZW50V2hlcmVTZXRDbGF1c2UgPSBjdXJyZW50QmxvY2tbYCR7YmxvY2tJZH1gXTtcbiAgICAgIGlmIChjdXJyZW50V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgaW5kZXggPSBjdXJyZW50V2hlcmVTZXRDbGF1c2UuZmluZEluZGV4KFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50SWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGN1cnJlbnRXaGVyZVNldENsYXVzZVtpbmRleF0gPSBjdXJyZW50V2hlcmVDbGF1c2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFdoZXJlU2V0Q2xhdXNlID0gW1xuICAgICAgICAgICAgLi4uY3VycmVudFdoZXJlU2V0Q2xhdXNlLFxuICAgICAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlLFxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEJsb2NrW2Jsb2NrSWRdID0gY3VycmVudFdoZXJlU2V0Q2xhdXNlO1xuICAgICAgICBjdXJyZW50U2V0QmxvY2tbY3VycmVudEJsb2NrSW5kZXhdID0gY3VycmVudEJsb2NrO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGN1cnJlbnRTZXRCbG9jayB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRCbG9ja1tibG9ja0lkXSA9IFtjdXJyZW50V2hlcmVDbGF1c2VdO1xuICAgICAgICBjdXJyZW50U2V0QmxvY2tbY3VycmVudEJsb2NrSW5kZXhdID0gY3VycmVudEJsb2NrO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGN1cnJlbnRTZXRCbG9jayB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgb25DaGFuZ2VDaGVja0JveFNldCA9IChldmVudCkgPT4ge1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBsZXQgY3VycmVudElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gICAgbGV0IG9iamVjdElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldFxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoY3VycmVudElkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0Lm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY3VycmVudElkKSB7XG4gICAgICAgICAgICBpZiAoIW9iai5jaGVja2VkTGlzdFNldCkge1xuICAgICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgIGNoZWNrZWRMaXN0U2V0OiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWU6IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LmZpbHRlcihcbiAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQucHVzaChvYmopO1xuICAgICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQ7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlmQWxyZWFkeUNoZWNrID0gb2JqLmNoZWNrZWRMaXN0U2V0XG4gICAgICAgICAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouY2hlY2tWYWx1ZSlcbiAgICAgICAgICAgICAgICAuaW5kZXhPZihldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgaWYgKGlmQWxyZWFkeUNoZWNrID09IC0xKSB7XG4gICAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZExpc3RTZXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4ub2JqLmNoZWNrZWRMaXN0U2V0LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maW5kSW5kZXgoXG4gICAgICAgICAgICAgICAgICAoYSkgPT4gYS5pZCA9PT0gb2JqLmlkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG9iaiBvYmplY3QgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgdXBkYXRlZCBvYmogb2JqZWN0IHRvIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldClcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgLy8gRmluZCB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICBjb25zdCBvYmogPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LmZpbmQoKGEpID0+IGEuaWQgPT09IGN1cnJlbnRJZCk7XG4gICAgICAvLyBSZW1vdmUgdGhlIGNoZWNrVmFsdWUgZnJvbSB0aGUgY2hlY2tlZExpc3QgYXJyYXlcbiAgICAgIG9iai5jaGVja2VkTGlzdFNldCA9IG9iai5jaGVja2VkTGlzdFNldC5maWx0ZXIoXG4gICAgICAgIChhKSA9PiBhLmNoZWNrVmFsdWUgIT09IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWVcbiAgICAgICk7XG4gICAgICAvLyBVcGRhdGUgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LmZpbmRJbmRleChcbiAgICAgICAgKGEpID0+IGEuaWQgPT09IGN1cnJlbnRJZFxuICAgICAgKTtcbiAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXRbaW5kZXhdID0gb2JqO1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQpKTtcbiAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQpKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKG5ld1doZXJlU2V0Q2xhdXNlPy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50SWRcbiAgICAgICk7XG4gICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soY3VycmVudElkLCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UpO1xuICAgIH1cbiAgfTtcblxuICBjaGVja1BhcmVudGhlc2lzKHZhbDogc3RyaW5nKSB7XG4gICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xuICAgIGNvbnN0IGJyYWNrZXRzID0gW1wiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCJdO1xuICAgIGlmIChicmFja2V0cy5pbmNsdWRlcyh2YWwuY2hhckF0KDApKSkge1xuICAgICAgc3RhdHVzID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfVxuXG4gIGxvb3BUb0dldFN0cmluZyhzdHJpbmdBcnI6IHN0cmluZ1tdKSB7XG4gICAgbGV0IG5ld1N0cmluZyA9IFwiIFwiO1xuICAgIGlmIChzdHJpbmdBcnIubGVuZ3RoKSB7XG4gICAgICBuZXdTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzdHJpbmdBcnJbMF0pO1xuICAgICAgbmV3U3RyaW5nID0gbmV3U3RyaW5nLnJlcGxhY2UoL1wiL2csIGAnYCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0cmluZ0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuZXdTdHJpbmdWYWwgPSBKU09OLnN0cmluZ2lmeShzdHJpbmdBcnJbaV0pLnJlcGxhY2UoL1wiL2csIGAnYCk7XG4gICAgICAgIG5ld1N0cmluZyArPSBcIixcIiArIG5ld1N0cmluZ1ZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0cmluZztcbiAgfVxuXG4gIHF1ZXJ5Q29uc3RydWN0b3IgPSAoXG4gICAgbGF5ZXJWaWV3LFxuICAgIGZpcnN0UXVlcnksXG4gICAgcXVlcnlSZXF1ZXN0LFxuICAgIHNlY29uZFF1ZXJ5VGFyZ2V0LFxuICAgIEFuZE9yLFxuICAgIGNvbm5lY3Rvcl9mdW5jdGlvbixcbiAgICBsYXllcixcbiAgICBxdWVyeVR5cGUgPSBcInNpbmdsZVwiXG4gICkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgY29uc3QgdmFsdWVzID0gc2Vjb25kUXVlcnlUYXJnZXQ7XG4gICAgc3dpdGNoIChxdWVyeVJlcXVlc3QpIHtcbiAgICAgIGNhc2UgXCJMSUtFJVwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiJUxJS0VcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIiVMSUtFJVwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk5PVCBMSUtFXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gTk9UIExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzIG51bGxcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBpcyBudWxsYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzIG5vdCBudWxsXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gaXMgbm90IG51bGxgO1xuICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgIGxheWVyLFxuICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSU5cIjpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7XG4gICAgICAgICAgICBcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJcbiAgICAgICAgICB9KWA7XG4gICAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICBBbmRPcixcbiAgICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tQYXJlbnRoZXNpcyhzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZpZWRWYWx1ZSA9IHRoaXMubG9vcFRvR2V0U3RyaW5nKHNlY29uZFF1ZXJ5VGFyZ2V0KTtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJOT1RfSU5cIjpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYE5PVCAke2ZpcnN0UXVlcnl9IElOICgke1xuICAgICAgICAgICAgXCInXCIgKyBzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXG4gICAgICAgICAgfSlgO1xuICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xuICAgICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGFyZW50aGVzaXMoc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIikpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSB0aGlzLmxvb3BUb0dldFN0cmluZyhzZWNvbmRRdWVyeVRhcmdldCk7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGBOT1QgICR7Zmlyc3RRdWVyeX0gSU4gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGBOT1QgICR7Zmlyc3RRdWVyeX0gSU4gKCR7c2Vjb25kUXVlcnlUYXJnZXQuam9pbihcbiAgICAgICAgICAgICAgXCIsXCJcbiAgICAgICAgICAgICl9KWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xuICAgICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImluY2x1ZGVkXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCgke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gQU5EICR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH0pYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzX25vdF9pbmNsdWRlZFwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAoJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuZmlyc3RUeHR9IE9SICR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH0pYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xuICAgICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICR7c2Vjb25kUXVlcnlUYXJnZXR9YDtcbiAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcbiAgICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjaG9vc2VBbmRPciA9IChlKSA9PiB0aGlzLnNldFN0YXRlKHsgQW5kT3I6IGUudGFyZ2V0LnZhbHVlIH0pO1xuXG4gIGNob29zZUFuZE9yU2V0ID0gKGUsIGJsb2NrSWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2V0QmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50U2V0QmxvY2suZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJsb2NrSWQgPT09IGJsb2NrSWQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTZXRCbG9ja0l0ZW0gPSBjdXJyZW50U2V0QmxvY2tbaW5kZXhdO1xuICAgICAgY3VycmVudFNldEJsb2NrSXRlbVtcIkFuZE9yU2V0XCJdID0gZS50YXJnZXQudmFsdWU7XG4gICAgICBjdXJyZW50U2V0QmxvY2tbaW5kZXhdID0gY3VycmVudFNldEJsb2NrSXRlbTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IEFuZE9yU2V0OiBlLnRhcmdldC52YWx1ZSwgU2V0QmxvY2s6IGN1cnJlbnRTZXRCbG9jayB9KTtcbiAgfTtcblxuICBvcGVuRHJvcCA9IChpZCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiBmYWxzZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJvcElkOiBpZCB9KTtcbiAgICBjb25zdCBkcm9wRG93bnMgPSB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zIH07XG4gICAgaWYgKGRyb3BEb3duc1tpZF0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wRG93bnM6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnMsIFtpZF06IGZhbHNlIH0gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wRG93bnM6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnMsIFtpZF06IHRydWUgfSB9KTtcbiAgICB9XG4gIH07XG5cbiAgb3BlbkRyb3BTZXQgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50SWQgPSBpZDtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW91c2VsZWF2ZTogZmFsc2UgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BJZFNldDogY3VycmVudElkIH0pO1xuICAgIGNvbnN0IGRyb3BEb3duc1NldCA9IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQgfTtcbiAgICBpZiAoZHJvcERvd25zU2V0W2N1cnJlbnRJZF0pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcm9wRG93bnNTZXQ6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsIFtjdXJyZW50SWRdOiBmYWxzZSB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcm9wRG93bnNTZXQ6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsIFtjdXJyZW50SWRdOiB0cnVlIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY2xvc2VEcm9wID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UsIGF1dE9wZW46IGZhbHNlIH0pO1xuXG4gIGNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmRyb3BJZCAhPT0gbnVsbCAmJiB0aGlzLnN0YXRlLm1vdXNlbGVhdmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcm9wRG93bnM6IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnMsIFt0aGlzLnN0YXRlLmRyb3BJZF06IGZhbHNlIH0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcm9wRG93bnNTZXQ6IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCxcbiAgICAgICAgICBbdGhpcy5zdGF0ZS5kcm9wSWRTZXRdOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5kcm9wSWRTZXQgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS5tb3VzZWxlYXZlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJvcERvd25zU2V0OiB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsXG4gICAgICAgICAgW3RoaXMuc3RhdGUuZHJvcElkU2V0XTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25tb3VzZUxlYXZlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IHRydWUgfSk7XG5cbiAgLy8gbWV0aG9kcyBmb3IgYXR0cmlidXRlIHRhYmxlXG4gIGdldEFsbENoZWNrZWRMYXllcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWN0aXZlVmlldyA9IFdpZGdldC5hY3RpdmVWO1xuICAgIGNvbnN0IGFsbE1hcExheWVycyA9IGFjdGl2ZVZpZXcudmlldy5tYXAuYWxsTGF5ZXJzPy5pdGVtcztcbiAgICBjb25zdCBjaGVja2VkTGF5ZXJzID0gdGhpcy5zdGF0ZS5jaGVja2VkTGF5ZXJfO1xuICAgIGxldCBuZXdNYXBMYXllciA9IFtdO1xuICAgIGlmIChhbGxNYXBMYXllcnM/Lmxlbmd0aCA+IDAgJiYgY2hlY2tlZExheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBuZXdNYXBMYXllciA9IGFsbE1hcExheWVycy5yZWR1Y2UoKG5ld0FycmF5LCBpdGVtKSA9PiB7XG4gICAgICAgIGlmIChjaGVja2VkTGF5ZXJzLmluY2x1ZGVzKGl0ZW0uaWQpKSB7XG4gICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXBMYXllcjtcbiAgfTtcblxuICBnZXRBY3RpdmVWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBXaWRnZXQuYWN0aXZlVjtcbiAgICByZXR1cm4gYWN0aXZlVmlldztcbiAgfTtcblxuICBnZXRBbGxKaW11TGF5ZXJWaWV3cyA9ICgpID0+IHtcbiAgICBjb25zdCBqaW11TGF5ZXJWaWV3cyA9IFdpZGdldC5qaW11TGF5ZXJWaWV3ejtcbiAgICByZXR1cm4gamltdUxheWVyVmlld3M7XG4gIH07XG5cbiAgY2xlYXJIaWdobGlnaHRzID0gKGxheWVyVmlldzogYW55KSA9PiB7XG4gICAgaWYgKGxheWVyVmlldykge1xuICAgICAgbGF5ZXJWaWV3Ll9oaWdobGlnaHRJZHMuY2xlYXIoKTtcbiAgICB9XG4gIH07XG5cbiAgY29ubmVjdG9yX2Z1bmN0aW9uID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBsYXllclZpZXcsXG4gICAgICBxdWVyeSxcbiAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgIHZhbHVlcyxcbiAgICAgIGxheWVyLFxuICAgICAgQW5kT3IsXG4gICAgICBmaWVsZCxcbiAgICAgIHNvdXJjZSxcbiAgICB9ID0gZGF0YTtcbiAgICBpZiAodGhpcy5zdGF0ZS5oaWdsaWdodFNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodHMobGF5ZXJWaWV3KTtcbiAgICAgIHRoaXMuc3RhdGUuaGlnbGlnaHRTZWxlY3RlZC5mb3JFYWNoKChoaWdobGlnaHQpID0+IHtcbiAgICAgICAgaGlnaGxpZ2h0LnJlbW92ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCByZXN1bHRzID0geyBmZWF0dXJlczogW10gfTtcbiAgICBsZXQgYWRkaXRpb25hbFF1ZXJ5ID0gbnVsbDtcbiAgICBpZiAoc291cmNlID09PSBcInNpbmdsZVF1ZXJ5XCIpIHtcbiAgICAgIGFkZGl0aW9uYWxRdWVyeSA9IHF1ZXJ5LndoZXJlO1xuICAgICAgaWYgKHRoaXMucXVlcnlBcnJheS5sZW5ndGggPCB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGFkZGl0aW9uYWxRdWVyeSA9IHF1ZXJ5LndoZXJlICsgXCIgXCIgKyBBbmRPcjtcbiAgICAgIH1cbiAgICAgIHRoaXMucXVlcnlBcnJheS5wdXNoKGFkZGl0aW9uYWxRdWVyeSk7XG4gICAgICB0aGlzLm91dGZpZWxkcy5wdXNoKGAke2ZpZWxkfWApO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB0aGlzLnF1ZXJ5QXJyYXkubGVuZ3RoID49IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmxlbmd0aCB8fFxuICAgICAgc291cmNlID09PSBcInNldFF1ZXJ5XCJcbiAgICApIHtcbiAgICAgIGxldCBjdXJyZW50UXVlcnkgPSBudWxsO1xuICAgICAgaWYgKHRoaXMucXVlcnlBcnJheS5sZW5ndGgpIGN1cnJlbnRRdWVyeSA9IHRoaXMucXVlcnlBcnJheS5qb2luKFwiIFwiKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgeyBzZXRRdWVyeVN0cmluZywgb3V0RmllbGRzIH0gPSB0aGlzLnNlbmRRdWVyeVNldCgpO1xuICAgICAgICBpZiAoc291cmNlID09PSBcInNpbmdsZVF1ZXJ5XCIpIHtcbiAgICAgICAgICBpZiAoc2V0UXVlcnlTdHJpbmcpXG4gICAgICAgICAgICBjdXJyZW50UXVlcnkgKz0gXCIgXCIgKyBBbmRPciArIFwiIFwiICsgXCIoXCIgKyBzZXRRdWVyeVN0cmluZyArIFwiKVwiO1xuICAgICAgICAgIGlmIChvdXRGaWVsZHM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5vdXRmaWVsZHMgPSB0aGlzLm91dGZpZWxkcy5jb25jYXQob3V0RmllbGRzKTtcbiAgICAgICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQodGhpcy5vdXRmaWVsZHMpO1xuICAgICAgICAgICAgdGhpcy5vdXRmaWVsZHMgPSBBcnJheS5mcm9tKHNldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykgY3VycmVudFF1ZXJ5ID0gc2V0UXVlcnlTdHJpbmc7XG4gICAgICAgICAgaWYgKG91dEZpZWxkcz8ubGVuZ3RoKSB0aGlzLm91dGZpZWxkcyA9IG91dEZpZWxkcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLm91dGZpZWxkcy5pbmNsdWRlcyhcIk9CSkVDVElEXCIpKSB7XG4gICAgICAgIHRoaXMub3V0ZmllbGRzLnB1c2goXCJPQkpFQ1RJRFwiKTtcbiAgICAgIH1cbiAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IHRoaXMub3V0ZmllbGRzO1xuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xuICAgICAgcXVlcnkud2hlcmUgPSBjdXJyZW50UXVlcnk7XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHRzID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGxheWVyVmlldz8ucXVlcnlGZWF0dXJlcylcbiAgICAgICAgICByZXN1bHRzID0gYXdhaXQgbGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgfVxuICAgICAgaWYgKGxheWVyPy5xdWVyeUZlYXR1cmVzKSByZXN1bHRzID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSk7XG4gICAgICBsZXQgY2hlY2tlZExheWVyXyA9IFtkYXRhLmxheWVyVmlldy5sYXllci5pZF07XG4gICAgICBjb25zdCBoaWdobGlnaHRJZHMgPSBoZWxwZXIuZ2V0SGlnaGxpZ2h0ZWRJZHMocmVzdWx0cy5mZWF0dXJlcyk7XG4gICAgICBpZiAoaGlnaGxpZ2h0SWRzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBoaWdsaWdodFNlbGVjdGVkQXJyID0gW107XG4gICAgICAgIGhpZ2hsaWdodElkcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGhpZ2hsaWdodFNlbGVjdGVkID0gbGF5ZXJWaWV3LmhpZ2hsaWdodChlbCk7XG4gICAgICAgICAgaGlnbGlnaHRTZWxlY3RlZEFyci5wdXNoKGhpZ2hsaWdodFNlbGVjdGVkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcbiAgICAgICAgICByZXN1bHRzLmZlYXR1cmVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdHZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLmJ1ZmZlcihlbC5nZW9tZXRyeSwgMSwgXCJtZXRlcnNcIik7XG4gICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChhcnJheUdlb21ldHJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWdsaWdodFNlbGVjdGVkOiBoaWdsaWdodFNlbGVjdGVkQXJyIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RlZExheWVyc0NvbnRlbnRzID0gaGVscGVyLmdldFNlbGVjdGVkQ29udGVudHNMYXllcihcbiAgICAgICAgW3Jlc3VsdHMuZmVhdHVyZXNdLFxuICAgICAgICBjaGVja2VkTGF5ZXJfXG4gICAgICApO1xuICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gaGVscGVyLmdldE51bWJlck9mQXR0cmlidXRlcyhcbiAgICAgICAgc2VsZWN0ZWRMYXllcnNDb250ZW50c1xuICAgICAgKTtcbiAgICAgIGxldCBhY3RpdmVWID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXllckNvbnRlbnRzOiBzZWxlY3RlZExheWVyc0NvbnRlbnRzIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWRMYXllcl86IGNoZWNrZWRMYXllcl8gfSk7XG4gICAgICBjb25zdCBnZW9tZXRyeSA9IFBvbHlnb24uZnJvbUV4dGVudChsYXllclZpZXcudmlldy5leHRlbnQpLnRvSlNPTigpO1xuICAgICAgY29uc3QgbGF5ZXJPcGVuID0ge1xuICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnksXG4gICAgICAgIHR5cGVTZWxlY3RlZDogXCJjb250YWluc1wiLFxuICAgICAgfTtcbiAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRMYXllclZpZXcgPSBsYXllclZpZXc7XG4gICAgICAgIGNvbnN0IGlzTGF5ZXJDaGVja2VkID0gdGhpcy5zdGF0ZS5pc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuaW5pdCh7XG4gICAgICAgICAgcmVzdWx0czogW3Jlc3VsdHMuZmVhdHVyZXNdLFxuICAgICAgICAgIGFsbENoZWNrZWRMYXllcnM6IGFsbENoZWNrZWRMYXllcnMsXG4gICAgICAgICAgaXNMYXllckNoZWNrZWQ6IGlzTGF5ZXJDaGVja2VkLFxuICAgICAgICAgIGNoZWNrZWRMYXllcnM6IGNoZWNrZWRMYXllcl8sXG4gICAgICAgICAgbnVtYmVyT2ZBdHRyaWJ1dGVzOiBudW1iZXJPZkF0dHJpYnV0ZXMsXG4gICAgICAgICAgbGF5ZXJPcGVuOiBsYXllck9wZW4sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogZmFsc2UgfSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5kaXNwYXRjaGluZ0FsbCgpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtTm90Rm91bmQ6IG51bGwgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmIChlcnIpIHRoaXMuc2V0U3RhdGUoeyBpdGVtTm90Rm91bmQ6IHRoaXMubmxzKGVycikgfSk7XG4gICAgICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUgfSk7XG4gICAgICAgICAgdGhpcy5yZXR1cm5Ub09yaWdpbmFsRXh0ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1Ob3RGb3VuZDogdGhpcy5ubHMoXCJub0l0ZW1TZWxlY3RlZFwiKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmV0dXJuVG9PcmlnaW5hbEV4dGVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm5Ub09yaWdpbmFsRXh0ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldztcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcbiAgICB2aWV3LmdvVG8oeyBjZW50ZXI6IHZpZXcuY2VudGVyLCB6b29tOiBXaWRnZXQuaW5pdGlhbFpvb20gfSk7XG4gIH07XG5cbiAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkID0gKGUsIHZhbCkgPT4ge1xuICAgIGxldCBjb3VudGVyID0gWy4uLnRoaXMuc3RhdGUuY291bnRlcklzQ2hlY2tlZF07XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIGNvdW50ZXIucHVzaCh2YWwpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXJJc0NoZWNrZWQ6IGNvdW50ZXIgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZih2YWwpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVySXNDaGVja2VkOiBjb3VudGVyIH0pO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvblJlZnJlc2ggPSAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0TGF5ZXJMaXN0ID0gdGhpcy5zdGF0ZS5yZXN1bHRMYXllckxpc3Q7XG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIHJlc3VsdExheWVyTGlzdDogcmVzdWx0TGF5ZXJMaXN0LFxuICAgICAgamltdU1hcFZpZXc6IGppbXVNYXBWaWV3LFxuICAgICAgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSxcbiAgICB9KTtcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcbiAgICB2aWV3LmdvVG8oeyBjZW50ZXI6IHZpZXcuY2VudGVyLCB6b29tOiBXaWRnZXQuaW5pdGlhbFpvb20gfSk7XG4gICAgaWYgKHRoaXMuY3VycmVudExheWVyVmlldykgdGhpcy5jbGVhckhpZ2hsaWdodHModGhpcy5jdXJyZW50TGF5ZXJWaWV3KTtcbiAgfTtcblxuICAvL1RPRE8gY29uZmlnIGFiaWxpdGFyZSB0YWIgdHJ1ZS9mYWxzZVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdGFibGVTZXRDb3VudHMgPSAoXG4gICAgICB0YWJsZVNldENvdW50czogeyBpZDogc3RyaW5nOyBkZWxldGVkOiBib29sZWFuIH1bXVxuICAgICkgPT4ge1xuICAgICAgbGV0IGNvdW50cyA9IDA7XG4gICAgICBpZiAodGFibGVTZXRDb3VudHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNvcGllZFRhYmxlU2V0Q291bnRzID0gWy4uLnRhYmxlU2V0Q291bnRzXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRJdGVtID0gY29waWVkVGFibGVTZXRDb3VudHMuZmlsdGVyKFxuICAgICAgICAgIChpdGVtKSA9PiAhaXRlbS5kZWxldGVkXG4gICAgICAgICk7XG4gICAgICAgIGNvdW50cyA9IGZpbHRlcmVkSXRlbS5sZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gY291bnRzO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJDTE9TRURcIiAmJiAhdGhpcy5zdGF0ZS53aWRnZXRTdGF0ZUNsb3NlZENoZWNrZWQpIHtcbiAgICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldztcbiAgICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3O1xuICAgICAgY29uc3QgcmVzdWx0TGF5ZXJMaXN0ID0gdGhpcy5zdGF0ZS5yZXN1bHRMYXllckxpc3Q7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgIHJlc3VsdExheWVyTGlzdDogcmVzdWx0TGF5ZXJMaXN0LFxuICAgICAgICBqaW11TWFwVmlldzogamltdU1hcFZpZXcsXG4gICAgICAgIGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUsXG4gICAgICAgIHdpZGdldFN0YXRlT3BlbmVkQ2hlY2tlZDogZmFsc2UsXG4gICAgICAgIHdpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgdmlldy5nb1RvKHsgY2VudGVyOiB2aWV3LmNlbnRlciwgem9vbTogV2lkZ2V0LmluaXRpYWxab29tIH0pO1xuICAgICAgaWYgKHRoaXMuY3VycmVudExheWVyVmlldykgdGhpcy5jbGVhckhpZ2hsaWdodHModGhpcy5jdXJyZW50TGF5ZXJWaWV3KTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuc3RhdGUgPT0gXCJPUEVORURcIiAmJiAhdGhpcy5zdGF0ZS53aWRnZXRTdGF0ZU9wZW5lZENoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB3aWRnZXRTdGF0ZUNsb3NlZENoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB3aWRnZXRTdGF0ZU9wZW5lZENoZWNrZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdFJlc2l6ZURldGVjdG9yIGhhbmRsZVdpZHRoIGhhbmRsZUhlaWdodD5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZGdldC1hdHRyaWJ1dGUtdGFibGUgamltdS13aWRnZXRcIlxuICAgICAgICAgICAgaWQ9XCJ3cmFwXCJcbiAgICAgICAgICAgIHJlZj1cIndyYXBcIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZURyb3BPbmNsaWNrT3V0c2lkZSgpO1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcInVzZU1hcFdpZGdldElkc1wiKSAmJlxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc1swXSAmJiAoXG4gICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItQW1iaXRvXCIgdGl0bGU9XCJBbWJpdG9cIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgY29udGFpbmVyLWZsdWlkIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWNvbHVtblwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJTZWxlemlvbmFyZSBwcmltYSBpbCBsYXllciwgcG9pIGNvbnRpbnVhIGNvbiBpbCBjb3N0cnV0dG9yZSBkZWxsYSBxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidy0xMDBcIj5TZWxlemlvbmEgaWwgbGF5ZXI6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVNlbGVjdExheWVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY3VycmVudFNlbGVjdGVkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVzdWx0TGF5ZXJMaXN0Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZWwubGF5ZXJJRH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFVybD17ZWwuZWxlbWVudC5wYXJzZWRVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuZWxlbWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dBZGRTZWxlY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjb3JyaXNwb25kZW50aSBhbGxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ3VlbnRlIGVzcHJlc3Npb25lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hvb3NlQW5kT3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYSB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkFORFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJBTkRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZSBjb3JyaXNwb25kb25vIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk9SXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuYSBxdWFsc2lhc2kgZGVsbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt3aWR0aCA+IDYwMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0xIG1iLTMganVzdGlmeS1jb250ZW50LWFyb3VuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGdhcDogXCIyJVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZFRhYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciAgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSc8c3ZnIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTcuNSAwYS41LjUgMCAwIDAtLjUuNVY3SC41YS41LjUgMCAwIDAgMCAxSDd2Ni41YS41LjUgMCAwIDAgMSAwVjhoNi41YS41LjUgMCAwIDAgMC0xSDhWLjVhLjUuNSAwIDAgMC0uNS0uNVpcIiBmaWxsPVwiIzAwMFwiPjwvcGF0aD48L3N2Zz4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QWdnaXVuZ2kgZXNwcmVzc2lvbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRCbG9ja31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFnZ2l1bmdpIHNldCBkaSBlc3ByZXNzaW9uaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QXBwbGljYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmZ1bmN0aW9uUmVmcmVzaH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+UmljYXJpY2FyZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHs1OTAgPiB3aWR0aCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiBcIjIlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZFRhYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciAgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPSc8c3ZnIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTcuNSAwYS41LjUgMCAwIDAtLjUuNVY3SC41YS41LjUgMCAwIDAgMCAxSDd2Ni41YS41LjUgMCAwIDAgMSAwVjhoNi41YS41LjUgMCAwIDAgMC0xSDhWLjVhLjUuNSAwIDAgMC0uNS0uNVpcIiBmaWxsPVwiIzAwMFwiPjwvcGF0aD48L3N2Zz4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QWdnaXVuZ2kgZXNwcmVzc2lvbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRCbG9ja31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFnZ2l1bmdpIHNldCBkaSBlc3ByZXNzaW9uaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QXBwbGljYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmZ1bmN0aW9uUmVmcmVzaH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+UmljYXJpY2FyZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNTAlXCIsIG92ZXJmbG93WTogXCJzY3JvbGxcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYmxlcy5tYXAoKGVsLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YHJvdy0ke2l9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RoaXMuc3RhdGUucmVzdWx0c0xheWVyU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93bj17KCkgPT4gdGhpcy5kcm9wRG93bihlbC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e3RoaXMuc3RhdGUuZHJvcGRvd25WYWx1ZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt0aGlzLnN0YXRlLmlzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQ9e3RoaXMuc3RhdGUuY291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRUb1F1ZXJ5PXt0aGlzLnN0YXRlLmNoZWNrZWRUb1F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzPXt0aGlzLnN0YXRlLnRhYmxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlc0lkPXtlbC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcz17dGhpcy5zdGF0ZS53aGVyZUNsYXVzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRRdWVyeUF0dHJpYnV0ZT17dGhpcy5nZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5PXt0aGlzLmdldFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGhpcmRRdWVyeT17dGhpcy50aGlyZFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGhpcy50ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtSGFuZGxlcj17dGhpcy5kcm9wZG93bkl0ZW1DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17dGhpcy50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93blRvZ2dsZXI9e3RoaXMuZHJvcERvd259XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja0JveD17dGhpcy5oYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhYmxlPXsoKSA9PiB0aGlzLmRlbGV0ZVRhYmxlKGVsLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyPXt0aGlzLnVuaXZvY29TZWxlY3RIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveD17dGhpcy5vbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3A9e3RoaXMub3BlbkRyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURyb3A9e3RoaXMuY2xvc2VEcm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dE9wZW49e3RoaXMuc3RhdGUuYXV0T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU9e3RoaXMuc3RhdGUubW91c2VsZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17dGhpcy5vbm1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQ9e3RoaXMuZnVuY3Rpb25Db3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zPXt0aGlzLnN0YXRlLmRyb3BEb3duc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Ob3RGb3VuZD17dGhpcy5zdGF0ZS5pdGVtTm90Rm91bmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZElkPXt0aGlzLnN0YXRlLnNlbGVjdGVkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFibGU9e2VsfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5OCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzAwNWVjYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5TZXRCbG9jay5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cyA9IHRhYmxlU2V0Q291bnRzKGVsLnRhYmxlc1NldCk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cyA8IDIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRzID09IDEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjb3JyaXNwb25kZW50aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxhIHNlZ3VlbnRlIGVzcHJlc3Npb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlQW5kT3JTZXQoZSwgZWwuYmxvY2tJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZSBjb3JyaXNwb25kb25vIGEgdHV0dGUgbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJBTkRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQU5EXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyaXNwb25kb25vIGEgdHV0dGUgbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJPUlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmlzcG9uZG9ubyBhZCB1bmEgcXVhbHNpYXNpIGRlbGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXNwcmVzc2lvbmkgc2VndWVudGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlQmxvY2soZWwuYmxvY2tJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCk9PnRoaXMuZGVsZXRlQmxvY2tBbGwoe2VsfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZWwuYmxvY2tJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmFkZFR3b1RhYmxlKGVsLmJsb2NrSWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwudGFibGVzU2V0Lm1hcCgoaW5uZXJFbCwgaSwgVGFibGVBcnJheSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRTZXRUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Byb3ctJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXt0aGlzLnN0YXRlLnJlc3VsdHNMYXllclNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuRHJvcEQ9e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd249eygpID0+IHRoaXMuZHJvcERvd25TZXQoZWwuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5PXt0aGlzLnN0YXRlLmRyb3Bkb3duVmFsdWVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17dGhpcy5zdGF0ZS5pc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVySXNDaGVja2VkPXt0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkVG9RdWVyeT17dGhpcy5zdGF0ZS5jaGVja2VkVG9RdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBBZGQgc2V0IHRhYmxlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzU2V0PXt0aGlzLnN0YXRlLnRhYmxlc1NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlc1NldElkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aW5uZXJFbC5pZH1gICsgXCItXCIgKyBgJHtlbC5ibG9ja0lkfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlc1NldD17dGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuZCBmb3IgQWRkIHNldCB0YWJsZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXt0aGlzLmdldFF1ZXJ5QXR0cmlidXRlU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnk9e3RoaXMuZ2V0UXVlcnlTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVUaGlyZFF1ZXJ5PXt0aGlzLnRoaXJkUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyPXt0aGlzLnRleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXt0aGlzLmRyb3Bkb3duSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duVG9nZ2xlcj17dGhpcy5kcm9wRG93blNldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrQm94PXt0aGlzLmhhbmRsZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFibGU9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJsb2NrVGFibGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aW5uZXJFbC5pZH1gICsgXCItXCIgKyBgJHtlbC5ibG9ja0lkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZWwuYmxvY2tJZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyPXt0aGlzLnVuaXZvY29TZWxlY3RIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveD17dGhpcy5vbkNoYW5nZUNoZWNrQm94U2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3A9e3RoaXMub3BlbkRyb3BTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURyb3A9e3RoaXMuY2xvc2VEcm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXt0aGlzLnN0YXRlLm9wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dE9wZW49e3RoaXMuc3RhdGUuYXV0T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU9e3RoaXMuc3RhdGUubW91c2VsZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17dGhpcy5vbm1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zU2V0PXt0aGlzLnN0YXRlLmRyb3BEb3duc1NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Ob3RGb3VuZD17dGhpcy5zdGF0ZS5pdGVtTm90Rm91bmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RGVsZXRlPXtjb3VudHMgPiAyID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Jsb2NrRGVsZXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRzID09PSAyICYmIGkgPT0gMCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvd0RlbGV0ZT17VGFibGVBcnJheS5sZW5ndGggPiAyID8gdHJ1ZTpmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dCbG9ja0RlbGV0ZT17VGFibGVBcnJheS5sZW5ndGggPT09IDIgJiYgaT09MCA/IHRydWU6ZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZD17ZWwuYmxvY2tJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJsb2NrQWxsPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJsb2NrQWxsKHsgZWwsIGlubmVyRWwgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWJsZT17aW5uZXJFbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuaXRlbU5vdEZvdW5kICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0aGlzLnN0YXRlLml0ZW1Ob3RGb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3RSZXNpemVEZXRlY3Rvcj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=