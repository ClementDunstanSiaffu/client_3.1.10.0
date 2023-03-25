System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/rest/support/Query","esri/layers/GraphicsLayer","jimu-core/react","jimu-core/react-dom","esri/geometry/geometryEngine","esri/geometry/Polygon"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__[key] = module[key];
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
            // console.log(this.setQueryArray.length < setWhereClause.length-1,"checking")
            if (this.setQueryArray.length < setWhereClause.length - 1) {
                currentQuery = query.where + " " + AndOrSet;
            }
            this.setQueryArray.push(currentQuery);
            this.setOutFields.push(`${field}`);
            // console.log(this.setQueryArray,this.setOutFields,"make sure")
            // if(this.setQueryArray.length >= setWhereClause.length){
            //     return {querySetArray:this.setQueryArray,querySetOutfields:this.setOutFields}
            // }
        };
        this.containsAnyLetters = (str) => /[a-zA-Z]/.test(str);
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
    checkParenthesis(val) {
        let status = false;
        const brackets = ["(", ")", "[", "]", "{", "}"];
        if (brackets.includes(val.charAt(0))) {
            status = true;
        }
        return status;
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

/***/ "./your-extensions/widgets/query-builder/src/context/contextApi.ts":
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/context/contextApi.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddTableSetContext": () => (/* binding */ AddTableSetContext),
/* harmony export */   "CallToActionContext": () => (/* binding */ CallToActionContext),
/* harmony export */   "LayerSelectContext": () => (/* binding */ LayerSelectContext),
/* harmony export */   "TableContext": () => (/* binding */ TableContext)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const CallToActionContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext({});
const LayerSelectContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext({});
const TableContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext({});
const AddTableSetContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext({});


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
    const onChangeCheckBoxSet = (event) => {
        const self = parent;
        let newWhereSetClause;
        let currentId = event.target.attributes.id.value;
        let objectId = event.target.attributes.value.value;
        let queryIndex;
        if (event.target.checked) {
            queryIndex = whereClausesSet.map((obj) => obj.id).indexOf(currentId);
            if (queryIndex !== -1) {
                whereClausesSet.map((obj) => {
                    if (obj.id === currentId) {
                        if (!obj.checkedListSet) {
                            obj = Object.assign(Object.assign({}, obj), { checkedListSet: [
                                    {
                                        checkValue: event.target.attributes.name.value,
                                        isChecked: true,
                                    },
                                ] });
                            let filteredWhereClauseSet = whereClausesSet.filter((a) => a.id !== obj.id);
                            filteredWhereClauseSet.push(obj);
                            newWhereSetClause = filteredWhereClauseSet;
                            filteredWhereClauseSet.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            self.setState({ whereClauseSet: Array.from(new Set(filteredWhereClauseSet)), });
                            // self.setState(
                            //   {
                            //     whereClauseSet: filteredWhereClauseSet,
                            //   },
                            //   () => {
                            //     this.state.whereClauseSet.sort(function (a, b) {
                            //       return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            //     });
                            //     // Remove duplicate entries from the whereClauses array
                            //     this.setState({
                            //       whereClauseSet: Array.from(
                            //         new Set(this.state.whereClauseSet)
                            //       ),
                            //     });
                            //   }
                            // );
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
                                const index = whereClausesSet.findIndex((a) => a.id === obj.id);
                                // Remove the obj object from the whereClauses array
                                whereClausesSet.splice(index, 1);
                                // Add the updated obj object to the whereClauses array
                                whereClausesSet.push(obj);
                                newWhereSetClause = whereClausesSet;
                                whereClausesSet.sort(function (a, b) {
                                    return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                });
                                self.setState({ whereClauseSet: Array.from(new Set(whereClausesSet)) });
                                // self.setState(
                                //   {
                                //     whereClauseSet: whereClausesSet,
                                //   },
                                //   () => {
                                //     whereClausesSet.sort(function (a, b) {
                                //       return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                //     });
                                //     // Remove duplicate entries from the whereClauses array
                                //     this.setState({
                                //       whereClauseSet: Array.from(
                                //         new Set(this.state.whereClauseSet)
                                //       ),
                                //     });
                                //   }
                                // );
                            }
                        }
                    }
                    return { obj };
                });
            }
        }
        if (event.target.checked === false) {
            // Find the obj object in the whereClauses array
            const obj = whereClausesSet.find((a) => a.id === currentId);
            // Remove the checkValue from the checkedList array
            obj.checkedListSet = obj.checkedListSet.filter((a) => a.checkValue !== event.target.attributes.name.value);
            // Update the obj object in the whereClauses array
            const index = whereClausesSet.findIndex((a) => a.id === currentId);
            whereClausesSet[index] = obj;
            whereClausesSet.sort(function (a, b) {
                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
            });
            newWhereSetClause = Array.from(new Set(whereClausesSet));
            self.setState({ whereClauseSet: Array.from(new Set(whereClausesSet)), });
            // this.setState(
            //   {
            //     whereClauseSet: whereClausesSet,
            //   },
            //   () => {
            //     this.state.whereClauseSet.sort(function (a, b) {
            //       return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
            //     });
            //     newWhereSetClause = Array.from(new Set(this.state.whereClauseSet));
            //     // Remove duplicate entries from the whereClauses array
            //     this.setState({
            //       whereClauseSet: Array.from(new Set(this.state.whereClauseSet)),
            //     });
            //   }
            // );
        }
        if (newWhereSetClause === null || newWhereSetClause === void 0 ? void 0 : newWhereSetClause.length) {
            const currentNewWhereSetClause = newWhereSetClause.find((item) => item.id === currentId);
            self.addCurrentWherClauseBlock(currentId, currentNewWhereSetClause);
        }
    };
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
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_common_inputs_commonSecondConstructor__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "col-md-4", textInputHandler: textInputHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, tablesId: tablesSetId, whereClauses: whereClausesSet, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBoxSet, 
                        // onChangeCheckBox = {onChangeCheckBox}
                        openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, onmouseLeave: onmouseLeave, dropdowns: dropdownsSet, width: width, queryChanged: queryChanged, parent: parent, queryType: "set" }),
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
    const { list, handleThirdQuery, textInputHandler, multiSelectHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, dropdownValueQuery, handleCheckBox, isChecked, counterIsChecked, dropDownToggler, functionCounterIsChecked, checkedToQuery, deleteTable, tablesId, getQueryAttribute, whereClauses, tables, getQuery, univocoSelectHandler, dropDown, isOpenDropD, 
    // onChangeCheckBox,
    openDrop, closeDrop, opened, autOpen, mouseleave, onmouseLeave, dropdowns, currentTable, queryChanged, parent } = props;
    const currentwhereClauses = whereClauses.find((item) => item.id === `${tablesId}`);
    const onChangeCheckBox = (event) => {
        const self = parent;
        let currentId = event.target.attributes.id.value;
        let objectId = event.target.attributes.value.value;
        let queryIndex;
        if (event.target.checked) {
            queryIndex = whereClauses
                .map((obj) => obj.id)
                .indexOf(currentId);
            if (queryIndex !== -1) {
                whereClauses.map((obj) => {
                    if (obj.id === queryIndex.toString()) {
                        if (!obj.checkedList) {
                            obj = Object.assign(Object.assign({}, obj), { checkedList: [
                                    {
                                        checkValue: event.target.attributes.name.value,
                                        isChecked: true,
                                    },
                                ] });
                            let filteredWhereClauses = whereClauses.filter((a) => a.id !== obj.id);
                            filteredWhereClauses.push(obj);
                            filteredWhereClauses.sort(function (a, b) {
                                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            });
                            self.setState({ whereClauses: Array.from(new Set(filteredWhereClauses)) });
                            // console.log(filteredWhereClauses,"check filtered whereclause first")
                            // self.setState({whereClauses: filteredWhereClauses},
                            //   () => {
                            //     filteredWhereClauses.sort(function (a, b) {
                            //       return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                            //     });
                            //     // Remove duplicate entries from the whereClauses array
                            //     self.setState({whereClauses: Array.from(new Set(filteredWhereClauses))});
                            //   }
                            // );
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
                                const index = whereClauses.findIndex((a) => a.id === obj.id);
                                // Remove the obj object from the whereClauses array
                                whereClauses.splice(index, 1);
                                // Add the updated obj object to the whereClauses array
                                whereClauses.push(obj);
                                whereClauses.sort(function (a, b) {
                                    return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                });
                                self.setState({ whereClauses: Array.from(new Set(whereClauses)) });
                                // self.setState({whereClauses: whereClauses},
                                //   () => {
                                //     whereClauses.sort(function (a, b) {
                                //       return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
                                //     });
                                //     // Remove duplicate entries from the whereClauses array
                                //     self.setState({whereClauses: Array.from(new Set(whereClauses)),
                                //     });
                                //   }
                                // );
                            }
                        }
                    }
                    return { obj };
                });
            }
        }
        if (event.target.checked === false) {
            // Find the obj object in the whereClauses array
            const obj = whereClauses.find((a) => a.id === currentId);
            // Remove the checkValue from the checkedList array
            obj.checkedList = obj.checkedList.filter((a) => a.checkValue !== event.target.attributes.name.value);
            // Update the obj object in the whereClauses array
            const index = whereClauses.findIndex((a) => a.id === currentId);
            whereClauses[index] = obj;
            whereClauses.sort(function (a, b) {
                return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
            });
            self.setState({ whereClauses: Array.from(new Set(whereClauses)) });
            // self.setState({whereClauses:whereClauses},
            //   () => {
            //     whereClauses.sort(function (a, b) {
            //       return a.id < b.id ? -1 : a.id == b.id ? 0 : 1;
            //     });
            //     // Remove duplicate entries from the whereClauses array
            //     self.setState({whereClauses: Array.from(new Set(whereClauses))});
            //   }
            // );
        }
    };
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

/***/ "./your-extensions/widgets/query-builder/src/runtime/components/callToActionComponent.tsx":
/*!************************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/components/callToActionComponent.tsx ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CallToAction)
/* harmony export */ });
/* harmony import */ var esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/rest/support/Query */ "esri/rest/support/Query");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/contextApi */ "./your-extensions/widgets/query-builder/src/context/contextApi.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../style.css */ "./your-extensions/widgets/query-builder/src/style.css");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../connector */ "./your-extensions/widgets/query-builder/src/connector.ts");
/* harmony import */ var esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esri/geometry/geometryEngine */ "esri/geometry/geometryEngine");
/* harmony import */ var esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! esri/geometry/Polygon */ "esri/geometry/Polygon");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class CallToAction extends jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.PureComponent {
    constructor(props) {
        super(props);
        this.queryConstructor = (layerView, firstQuery, queryRequest, secondQueryTarget, AndOr, 
        // connector_function,
        layer, queryType = "single") => {
            const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_0__["default"]();
            const values = secondQueryTarget;
            const self = this.context.parent;
            switch (queryRequest) {
                case "LIKE%":
                    query.where = `${firstQuery} LIKE '${secondQueryTarget}%'`;
                    this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    break;
                case "%LIKE":
                    query.where = `${firstQuery} LIKE '%${secondQueryTarget}'`;
                    this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    break;
                case "%LIKE%":
                    query.where = `${firstQuery} LIKE '%${secondQueryTarget}%'`;
                    this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    break;
                case "NOT LIKE":
                    query.where = `${firstQuery} NOT LIKE '%${secondQueryTarget}%'`;
                    this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    break;
                case "is null":
                    query.where = `${firstQuery} is null`;
                    this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    break;
                case "is not null":
                    query.where = `${firstQuery} is not null`;
                    this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    break;
                case "IN":
                    if (_connector__WEBPACK_IMPORTED_MODULE_5__["default"].containsAnyLetters(secondQueryTarget)) {
                        query.where = `${firstQuery} IN (${"'" + secondQueryTarget.join("', '") + "'"})`;
                        this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    }
                    else {
                        if (_connector__WEBPACK_IMPORTED_MODULE_5__["default"].checkParenthesis(secondQueryTarget.join(","))) {
                            const stringFiedValue = _connector__WEBPACK_IMPORTED_MODULE_5__["default"].loopToGetString(secondQueryTarget);
                            query.where = `${firstQuery} IN (${stringFiedValue})`;
                        }
                        else {
                            query.where = `${firstQuery} IN (${secondQueryTarget.join(",")})`;
                        }
                        this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    }
                    break;
                case "NOT_IN":
                    if (_connector__WEBPACK_IMPORTED_MODULE_5__["default"].containsAnyLetters(secondQueryTarget)) {
                        query.where = `NOT ${firstQuery} IN (${"'" + secondQueryTarget.join("', '") + "'"})`;
                        query.outFields = [`${firstQuery}`];
                        this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    }
                    else {
                        if (_connector__WEBPACK_IMPORTED_MODULE_5__["default"].checkParenthesis(secondQueryTarget.join(","))) {
                            const stringFiedValue = _connector__WEBPACK_IMPORTED_MODULE_5__["default"].loopToGetString(secondQueryTarget);
                            query.where = `NOT  ${firstQuery} IN (${stringFiedValue})`;
                        }
                        else {
                            query.where = `NOT  ${firstQuery} IN (${secondQueryTarget.join(",")})`;
                        }
                        query.outFields = [`${firstQuery}`];
                        this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    }
                    break;
                case "included":
                    query.where = `(${firstQuery} > ${secondQueryTarget.firstTxt} AND ${firstQuery} < ${secondQueryTarget.secondTxt})`;
                    this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    break;
                case "is_not_included":
                    query.where = `(${firstQuery} < ${secondQueryTarget.firstTxt} OR ${firstQuery} > ${secondQueryTarget.secondTxt})`;
                    this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    break;
                default:
                    if (_connector__WEBPACK_IMPORTED_MODULE_5__["default"].containsAnyLetters(secondQueryTarget)) {
                        query.where = `${firstQuery} ${queryRequest} '${secondQueryTarget}'`;
                        this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
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
                        this.connector_function({ layerView, query, queryRequest, values, layer, AndOr, field: firstQuery, source: "singleQuery" });
                    }
            }
        };
        this.connector_function = (data) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { layerView, query, queryRequest, values, layer, AndOr, field, source, } = data;
            const self = this.context.parent;
            if (this.context.higlightSelected.length) {
                self.clearHighlights(layerView);
                this.context.higlightSelected.forEach((highlight) => {
                    highlight.remove();
                });
            }
            let results = { features: [] };
            let additionalQuery = null;
            if (source === "singleQuery") {
                additionalQuery = query.where;
                if (self.queryArray.length < this.context.whereClauses.length - 1) {
                    additionalQuery = query.where + " " + AndOr;
                }
                self.queryArray.push(additionalQuery);
                self.outfields.push(`${field}`);
            }
            if (self.queryArray.length >= this.context.whereClauses.length ||
                source === "setQuery") {
                let currentQuery = null;
                if (self.queryArray.length)
                    currentQuery = self.queryArray.join(" ");
                if ((_a = this.context.whereClauseSet) === null || _a === void 0 ? void 0 : _a.length) {
                    const { setQueryString, outFields } = this.sendQuerySet();
                    if (source === "singleQuery") {
                        if (setQueryString)
                            currentQuery += " " + AndOr + " " + "(" + setQueryString + ")";
                        if (outFields === null || outFields === void 0 ? void 0 : outFields.length) {
                            self.outfields = self.outfields.concat(outFields);
                            const set = new Set(self.outfields);
                            self.outfields = Array.from(set);
                        }
                    }
                    else {
                        if (setQueryString)
                            currentQuery = setQueryString;
                        if (outFields === null || outFields === void 0 ? void 0 : outFields.length)
                            self.outfields = outFields;
                    }
                }
                if (!self.outfields.includes("OBJECTID"))
                    self.outfields.push("OBJECTID");
                query.outFields = self.outfields;
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
                const highlightIds = _connector__WEBPACK_IMPORTED_MODULE_5__["default"].getHighlightedIds(results.features);
                if (highlightIds.length) {
                    const higlightSelectedArr = [];
                    highlightIds.forEach((el) => {
                        const highlightSelected = layerView.highlight(el);
                        higlightSelectedArr.push(highlightSelected);
                    });
                    if (results.features.length) {
                        const arrayGeometry = [];
                        results.features.forEach((el) => {
                            const newGeometry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_6__["default"].buffer(el.geometry, 1, "meters");
                            arrayGeometry.push(newGeometry);
                        });
                        if (arrayGeometry.length) {
                            const unifiedGeomtry = esri_geometry_geometryEngine__WEBPACK_IMPORTED_MODULE_6__["default"].union(arrayGeometry);
                            this.context.jimuMapView.view.goTo(unifiedGeomtry.extent);
                        }
                    }
                    self.setState({ higlightSelected: higlightSelectedArr });
                }
                const selectedLayersContents = _connector__WEBPACK_IMPORTED_MODULE_5__["default"].getSelectedContentsLayer([results.features], checkedLayer_);
                const numberOfAttributes = _connector__WEBPACK_IMPORTED_MODULE_5__["default"].getNumberOfAttributes(selectedLayersContents);
                let activeV = this.context.jimuMapView;
                self.setState({ layerContents: selectedLayersContents, checkedLayer_: checkedLayer_ });
                // this.setState({ checkedLayer_: checkedLayer_ });
                const geometry = esri_geometry_Polygon__WEBPACK_IMPORTED_MODULE_7__["default"].fromExtent(layerView.view.extent).toJSON();
                const layerOpen = { geometry: geometry, typeSelected: "contains" };
                if (results.features.length) {
                    self.currentLayerView = layerView;
                    const isLayerChecked = this.context.isAttributeTableClosed ? false : true;
                    const allCheckedLayers = self.getAllCheckedLayers();
                    self.attributeTableConnector.init({
                        results: [results.features],
                        allCheckedLayers: allCheckedLayers,
                        isLayerChecked: isLayerChecked,
                        checkedLayers: checkedLayer_,
                        numberOfAttributes: numberOfAttributes,
                        layerOpen: layerOpen,
                    });
                    self.setState({ isAttributeTableClosed: false });
                    try {
                        self.attributeTableConnector.dispatchingAll();
                        self.setState({ itemNotFound: null });
                    }
                    catch (err) {
                        if (err)
                            self.setState({ itemNotFound: self.nls(err) });
                        self.attributeTableConnector.closeTable();
                        self.setState({ isAttributeTableClosed: true });
                        self.returnToOriginalExtent();
                    }
                }
                else {
                    self.attributeTableConnector.closeTable();
                    self.setState({ isAttributeTableClosed: true, itemNotFound: self.nls("noItemSelected"), });
                    self.returnToOriginalExtent();
                }
            }
        });
        this.addTable = () => {
            const self = this.context.parent;
            const currentId = this.context.tableCounter;
            self.setState({
                tables: [...this.context.tables, { id: this.context.tableCounter, deleted: false },],
                tableCounter: this.context.tableCounter + 1,
                dropDowns: Object.assign(Object.assign({}, this.context.dropDowns), { [currentId]: false }),
            });
            const tableLength = this.context.tables.map((el, idx) => (el.deleted == false ? idx : "")).filter(String).length;
            const tablesSetLength = this.context.SetBlock.length;
            if (tableLength > 0) {
                self.setState({ showAddSelect: false });
            }
            if (tablesSetLength > 0) {
                self.setState({ showAddSelect: false });
            }
        };
        this.addBlock = () => {
            var _a;
            const self = this.context.parent;
            const SetBlock = this.context.SetBlock;
            let idOne = (_a = SetBlock.tableCounterSet) !== null && _a !== void 0 ? _a : 0;
            let idTwo = idOne + 1;
            const currentId = idOne;
            const nextCurrentId = idTwo;
            let newBlock = [...SetBlock];
            newBlock.push({
                blockId: SetBlock.length,
                [`${SetBlock.length}`]: [],
                tablesSet: [
                    { id: idOne, deleted: false },
                    { id: idTwo, deleted: false },
                ],
                tableCounterSet: this.context.tableCounterSet + 2,
                dropDownsSet: Object.assign(Object.assign({}, this.context.dropDownsSet), { [`${currentId}-${SetBlock.length}`]: false, [`${nextCurrentId}-${SetBlock.length}`]: false }),
                AndOrSet: this.context.AndOrSet,
            });
            self.setState({
                SetBlock: newBlock,
                dropDownsSet: Object.assign(Object.assign({}, this.context.dropDownsSet), { [`${currentId}-${SetBlock.length}`]: false, [`${nextCurrentId}-${SetBlock.length}`]: false }),
            });
            const tableLength = this.context.tables
                .map((el, idx) => (el.deleted == false ? idx : ""))
                .filter(String).length;
            const tablesSetLength = SetBlock.length;
            if (tableLength > 0)
                self.setState({ showAddSelect: false });
        };
        this.sendQuery = this.sendQuery.bind(this);
        this.addBlock = this.addBlock.bind(this);
        this.addTable = this.addTable.bind(this);
        this.connector_function = this.connector_function.bind(this);
        this.sendQuerySet = this.sendQuerySet.bind(this);
    }
    sendQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            const self = this.context.parent;
            self.queryArray = [];
            self.outfields = [];
            const checkedQuery = [
                "is null",
                "is not null",
                "IN",
                "NOT_IN",
                "included",
                "is_not_included",
            ];
            const likelyQuery = ["LIKE%", "%LIKE", "%LIKE%", "NOT LIKE"];
            if (this.context.whereClauses.length) {
                if (this.context.AndOr === "AND") {
                    this.context.whereClauses.forEach((el, id) => {
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
                            value = { firstTxt: el.firstTxt.value, secondTxt: el.secondTxt.value };
                        }
                        else if (!checkedQuery.includes(queryValue)) {
                            value = (_d = (_c = el.value) === null || _c === void 0 ? void 0 : _c.txt) !== null && _d !== void 0 ? _d : "";
                        }
                        if (this.context.jimuMapView) {
                            this.context.jimuMapView.view.map.allLayers.forEach((f, index) => {
                                if (f.title === this.context.currentTargetText) {
                                    this.context.jimuMapView.view
                                        .whenLayerView(f)
                                        .then((layerView) => {
                                        this.queryConstructor(layerView, attributeQuery, queryValue, value, this.context.AndOr, 
                                        // this.connector_function,
                                        f);
                                    });
                                }
                            });
                        }
                    });
                }
                else {
                    let normalizedWhereToSendQuery = [];
                    this.context.whereClauses.forEach((el, id) => {
                        var _a, _b;
                        const query = new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
                            if (_connector__WEBPACK_IMPORTED_MODULE_5__["default"].containsAnyLetters(value)) {
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
                                query.where = _connector__WEBPACK_IMPORTED_MODULE_5__["default"].likelyQuery(attributeQuery, queryValue, value);
                            }
                            else {
                                if (_connector__WEBPACK_IMPORTED_MODULE_5__["default"].containsAnyLetters(value)) {
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
                        if (this.context.jimuMapView) {
                            this.context.jimuMapView.view.map.allLayers.forEach((f, index) => {
                                if (f.title === this.context.currentTargetText) {
                                    this.context.jimuMapView.view
                                        .whenLayerView(f)
                                        .then((layerView) => {
                                        this.connector_function({
                                            layerView,
                                            query,
                                            queryRequest: "OR",
                                            layer: f,
                                            AndOr: this.context.AndOr,
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
            else if (this.context.SetBlock.length) {
                if (this.context.jimuMapView) {
                    self.queryArray = [];
                    this.context.jimuMapView.view.map.allLayers.forEach((f, index) => {
                        if (f.title === this.context.currentTargetText) {
                            this.context.jimuMapView.view.whenLayerView(f).then((layerView) => {
                                this.connector_function({
                                    layerView,
                                    query: new esri_rest_support_Query__WEBPACK_IMPORTED_MODULE_0__["default"](),
                                    queryRequest: null,
                                    layer: f,
                                    AndOr: this.context.AndOr,
                                    field: null,
                                    source: "setQuery",
                                });
                            });
                        }
                    });
                }
            }
            else {
                self.attributeTableConnector.closeTable();
                self.setState({ isAttributeTableClosed: true });
                self.returnToOriginalExtent();
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
        const self = this.context.parent;
        let setQueryString = null;
        let outFields = [];
        if (this.context.SetBlock.length) {
            this.context.SetBlock.forEach((block, i) => {
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
                            else if (queryValue === "included" || queryValue === "is_not_included") {
                                value = { firstTxt: el.firstTxt.value, secondTxt: el.secondTxt.value };
                            }
                            else if (!checkedQuery.includes(queryValue)) {
                                value = (_d = (_c = el.value) === null || _c === void 0 ? void 0 : _c.txt) !== null && _d !== void 0 ? _d : "";
                            }
                            if (setQueryString) {
                                setQueryString += _connector__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryConstructor(queryValue, attributeQuery, value);
                            }
                            else {
                                setQueryString = _connector__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryConstructor(queryValue, attributeQuery, value);
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
                                    this.context.counterIsChecked.length) {
                                    this.context.counterIsChecked.forEach((el) => value.push(el.checkValue));
                                }
                            }
                            if (queryValue === "included" ||
                                queryValue === "is_not_included") {
                                value = { firstTxt: el.firstTxt.value, secondTxt: el.secondTxt.value };
                            }
                            else if (!checkedQuery.includes(queryValue)) {
                                value = (_b = (_a = el.value) === null || _a === void 0 ? void 0 : _a.txt) !== null && _b !== void 0 ? _b : "";
                            }
                            if (setQueryString) {
                                setQueryString += _connector__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryConstructor(queryValue, attributeQuery, value);
                            }
                            else {
                                setQueryString = _connector__WEBPACK_IMPORTED_MODULE_5__["default"].setQueryConstructor(queryValue, attributeQuery, value);
                            }
                            if (j < whereClauseSet.length - 1)
                                setQueryString += "  " + AndOrSet + "  ";
                            outFields.push(`${attributeQuery}`);
                        });
                    }
                }
                if (setQueryString) {
                    if (this.context.SetBlock[i + 1]) {
                        const nextBlock = this.context.SetBlock[i + 1];
                        const nextBlockId = nextBlock === null || nextBlock === void 0 ? void 0 : nextBlock.blockId;
                        const nextWhereClauseSet = nextBlock[`${nextBlockId}`];
                        if ((i === 0 &&
                            this.context.SetBlock.length >= 2 &&
                            (nextWhereClauseSet === null || nextWhereClauseSet === void 0 ? void 0 : nextWhereClauseSet.length)) ||
                            !["("].includes(setQueryString[0])) {
                            setQueryString = "(" + setQueryString;
                        }
                        if (i < this.context.SetBlock.length - 1 &&
                            (nextWhereClauseSet === null || nextWhereClauseSet === void 0 ? void 0 : nextWhereClauseSet.length)) {
                            setQueryString += " ) " + this.context.AndOr + " ( ";
                        }
                    }
                    if (this.context.SetBlock[i - 1]) {
                        const prevBlock = this.context.SetBlock[i - 1];
                        const prevBlockId = prevBlock === null || prevBlock === void 0 ? void 0 : prevBlock.blockId;
                        const prevWhereClauseSet = prevBlock[`${prevBlockId}`];
                        if (this.context.SetBlock.length >= 2 &&
                            i === this.context.SetBlock.length - 1 &&
                            prevWhereClauseSet.length) {
                            setQueryString = setQueryString + ")";
                        }
                    }
                }
            });
        }
        return { setQueryString, outFields };
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: this.props.width >= 626 ? "row mt-1 mb-3 justify-content-around" : " ", style: this.props.width >= 626 ? {} : { display: "flex", flexDirection: "column" } },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: this.props.width >= 626 ? "col-md-5 d-flex justify-content-center text-center" : " ", style: this.props.width >= 626 ? { gap: "2%" } : { gap: "2%", width: "100%", display: "flex", justifyContent: "center" } },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { disabled: !this.context.currentTargetText, onClick: this.addTable, size: "default", className: "d-flex align-items-center  mb-2", type: "secondary" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>', size: "m" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", { className: "m-0 p-0" }, "Aggiungi espressione")),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { disabled: !this.context.currentTargetText, onClick: this.addBlock, size: "default", className: "d-flex align-items-center  mb-2", type: "secondary" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { icon: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5Z" fill="#000"></path></svg>', size: "m" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", { className: "m-0 p-0" }, "Aggiungi set di espressioni"))),
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: this.props.width >= 626 ? "col-md-5 d-flex justify-content-center text-center" : " ", style: this.props.width >= 626 ? {} : { width: "100%", display: "flex", justifyContent: "center" } },
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "default", className: "d-flex align-items-center mb-2", type: "secondary", onClick: this.sendQuery },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", { className: "m-0 p-0" }, "Applica")),
                jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "default", className: "d-flex align-items-center mb-2", style: { marginLeft: "5px" }, type: "secondary", onClick: this.props.functionRefresh },
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("p", { className: "m-0 p-0" }, "Ricaricare")))));
    }
}
CallToAction.contextType = _context_contextApi__WEBPACK_IMPORTED_MODULE_3__.CallToActionContext;


/***/ }),

/***/ "./your-extensions/widgets/query-builder/src/runtime/components/common/andorSelector.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/components/common/andorSelector.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AndOrSelector)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");


class AndOrSelector extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { onChange: (e) => this.props.chooseAndOr(e), placeholder: " Visualizza le feature nel layer che corrispondono a tutte le espressioni seguenti", defaultValue: "AND" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "AND" }, "Visualizza le feature nel layer che corrispondono a tutte le espressioni seguenti"),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: "OR" }, "Visualizza le feature nel layer che corrispondono ad una qualsiasi delle espressioni seguenti")));
    }
}


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

/***/ "./your-extensions/widgets/query-builder/src/runtime/components/layerSelectComponent.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/query-builder/src/runtime/components/layerSelectComponent.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LayerSelectComponent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/contextApi */ "./your-extensions/widgets/query-builder/src/context/contextApi.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style.css */ "./your-extensions/widgets/query-builder/src/style.css");
/* harmony import */ var _common_andorSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/andorSelector */ "./your-extensions/widgets/query-builder/src/runtime/components/common/andorSelector.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class LayerSelectComponent extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.chooseAndOr = (e) => {
            const self = this.context.parent;
            self.setState({ AndOr: e.target.value });
        };
        this.onChangeSelectLayer = this.onChangeSelectLayer.bind(this);
        this.chooseAndOr = this.chooseAndOr.bind(this);
    }
    onChangeSelectLayer(e) {
        return __awaiter(this, void 0, void 0, function* () {
            const self = this.context.parent;
            self.graphicLayerFound.removeAll();
            const jimuMapView = this.context.jimuMapView;
            if (jimuMapView) {
                jimuMapView.view.map.allLayers.forEach((f, index) => {
                    if (f.title === e.currentTarget.innerText) {
                        jimuMapView.view.whenLayerView(f).then((layerView) => {
                            self.setState({
                                resultsLayerSelected: f,
                                currentTargetText: e.currentTarget.innerText,
                                currentSelectedId: e.currentTarget.value,
                            });
                            self.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "checkedLayers", [f.id]));
                        });
                    }
                });
            }
        });
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "row" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "col-md-12" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { className: "w-100", form: "basic", open: true, text: "Selezionare prima il layer, poi continua con il costruttore della query", type: "info", withIcon: true })),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", { className: "w-100" }, "Seleziona il layer:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Select, { onChange: this.onChangeSelectLayer, placeholder: "Seleziona il Layer", value: this.context.currentSelectedId }, this.context.resultLayerList.map((el, i) => {
                        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Option, { value: el.layerID, 
                            //@ts-ignore
                            parsedUrl: el.element.parsedUrl, id: i, key: i }, el.element.title));
                    })),
                    this.context.showAddSelect ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", null, "Visualizza le feature nel layer corrispondenti alla seguente espressione")) : (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_common_andorSelector__WEBPACK_IMPORTED_MODULE_4__["default"], { chooseAndOr: this.chooseAndOr }))))));
    }
}
LayerSelectComponent.contextType = _context_contextApi__WEBPACK_IMPORTED_MODULE_2__.LayerSelectContext;


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
/* harmony import */ var _lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/ResizeDetector */ "./your-extensions/widgets/query-builder/src/runtime/lib/ResizeDetector.tsx");
/* harmony import */ var _connector_attribute_table_connector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../connector/attribute_table_connector */ "./your-extensions/widgets/query-builder/src/connector/attribute_table_connector.ts");
/* harmony import */ var _components_AddSetTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/AddSetTable */ "./your-extensions/widgets/query-builder/src/runtime/components/AddSetTable.tsx");
/* harmony import */ var _components_layerSelectComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/layerSelectComponent */ "./your-extensions/widgets/query-builder/src/runtime/components/layerSelectComponent.tsx");
/* harmony import */ var _components_callToActionComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/callToActionComponent */ "./your-extensions/widgets/query-builder/src/runtime/components/callToActionComponent.tsx");
/* harmony import */ var _components_common_andorSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/common/andorSelector */ "./your-extensions/widgets/query-builder/src/runtime/components/common/andorSelector.tsx");
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../context/contextApi */ "./your-extensions/widgets/query-builder/src/context/contextApi.ts");
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
                this.setState({ mouseleave: false });
            }
            if (this.state.dropIdSet !== null && this.state.mouseleave) {
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
        this.getQueryAttribute = this.getQueryAttribute.bind(this);
        this.getQuery = this.getQuery.bind(this);
        // this.sendQuerySet = this.sendQuerySet.bind(this);
        // this.runbothQueries= this.runbothQueries.bind(this);
        this.thirdQuery = this.thirdQuery.bind(this);
        this.dropdownItemClick = this.dropdownItemClick.bind(this);
        // this.chooseAndOr = this.chooseAndOr.bind(this);
        this.chooseAndOrSet = this.chooseAndOrSet.bind(this);
        this.closeDrop = this.closeDrop.bind(this);
        this.openDrop = this.openDrop.bind(this);
        this.closeDropOnclickOutside = this.closeDropOnclickOutside.bind(this);
        this.onmouseLeave = this.onmouseLeave.bind(this);
        this.getAllCheckedLayers = this.getAllCheckedLayers.bind(this);
        this.getAllJimuLayerViews = this.getAllJimuLayerViews.bind(this);
        // this.connector_function = this.connector_function.bind(this);
        this.functionCounterIsChecked = this.functionCounterIsChecked.bind(this);
        this.getQuerySet = this.getQuerySet.bind(this);
        // this.onChangeCheckBoxSet = this.onChangeCheckBoxSet.bind(this);
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
            this.attributeTableConnector = new _connector_attribute_table_connector__WEBPACK_IMPORTED_MODULE_11__["default"](jmv, this);
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
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_10__["default"], { handleWidth: true, handleHeight: true }, ({ width, height }) => {
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
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_contextApi__WEBPACK_IMPORTED_MODULE_16__.LayerSelectContext.Provider, { value: {
                                parent: this,
                                jimuMapView: this.state.jimuMapView,
                                resultLayerList: this.state.resultLayerList,
                                showAddSelect: this.state.showAddSelect,
                                currentSelectedId: this.state.currentSelectedId
                            } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_layerSelectComponent__WEBPACK_IMPORTED_MODULE_13__["default"], null)),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_contextApi__WEBPACK_IMPORTED_MODULE_16__.CallToActionContext.Provider, { value: {
                                parent: this,
                                whereClauses: this.state.whereClauses,
                                AndOr: this.state.AndOr,
                                AndOrSet: this.state.AndOrSet,
                                jimuMapView: this.state.jimuMapView,
                                SetBlock: this.state.SetBlock,
                                currentTargetText: this.state.currentTargetText,
                                tables: this.state.tables,
                                tableCounter: this.state.tableCounter,
                                tableCounterSet: this.state.tableCounterSet,
                                dropDowns: this.state.dropDowns,
                                dropDownsSet: this.state.dropDownsSet,
                                higlightSelected: this.state.higlightSelected,
                                isAttributeTableClosed: this.state.isAttributeTableClosed,
                                whereClauseSet: this.state.whereClauseSet,
                                counterIsChecked: this.state.counterIsChecked
                            } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_callToActionComponent__WEBPACK_IMPORTED_MODULE_14__["default"], { width: width, functionRefresh: this.functionRefresh })),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row", style: { height: "50%", overflowY: "scroll" } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                                this.state.tables.map((el, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "w-100", key: i, id: `row-${i}`, list: this.state.resultsLayerSelected, isOpenDropD: this.state.isOpen, dropDown: () => this.dropDown(el.id), dropdownValueQuery: this.state.dropdownValueQuery, isChecked: this.state.isChecked, counterIsChecked: this.state.counterIsChecked, checkedToQuery: this.state.checkedToQuery, tables: this.state.tables, tablesId: el.id, whereClauses: this.state.whereClauses, getQueryAttribute: this.getQueryAttribute, getQuery: this.getQuery, handleThirdQuery: this.thirdQuery, textInputHandler: this.textInputHandler, dropdownItemHandler: this.dropdownItemClick, textFirstIncludedHandler: this.textFirstIncludedHandler, textSecondIncludedHandler: this.textSecondIncludedHandler, dropDownToggler: this.dropDown, handleCheckBox: this.handleCheckBox, deleteTable: () => this.deleteTable(el.id), univocoSelectHandler: this.univocoSelectHandler, 
                                    // onChangeCheckBox={this.onChangeCheckBox}
                                    openDrop: this.openDrop, closeDrop: this.closeDrop, opened: this.state.opened, autOpen: this.state.autOpen, mouseleave: this.state.mouseleave, onmouseLeave: this.onmouseLeave, functionCounterIsChecked: this.functionCounterIsChecked, dropdowns: this.state.dropDowns, itemNotFound: this.state.itemNotFound, selectedId: this.state.selectedId, currentTable: el, queryChanged: this.state.queryChanged, parent: this }))),
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
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_andorSelector__WEBPACK_IMPORTED_MODULE_15__["default"], { chooseAndOr: (e) => this.chooseAndOrSet(e, el.blockId) }),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "" },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { className: "", onClick: () => this.deleteBlock(el.blockId), icon: true, type: "secondary" },
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, null))),
                                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: " " },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { id: el.blockId, onClick: () => this.addTwoTable(el.blockId), className: "", icon: true, type: "secondary" },
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_3__.PlusOutlined, null))))),
                                        el.tablesSet.map((innerEl, i, TableArray) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AddSetTable__WEBPACK_IMPORTED_MODULE_12__["default"], { className: "w-100", key: i, id: `row-${i}`, list: this.state.resultsLayerSelected, isOpenDropD: this.state.isOpen, dropDown: () => this.dropDownSet(el.id), dropdownValueQuery: this.state.dropdownValueQuery, isChecked: this.state.isChecked, counterIsChecked: this.state.counterIsChecked, checkedToQuery: this.state.checkedToQuery, 
                                            // for Add set table............................
                                            tablesSet: this.state.tablesSet, tablesSetId: `${innerEl.id}` + "-" + `${el.blockId}`, whereClausesSet: this.state.whereClauseSet, 
                                            // End for Add set table............................
                                            // getQueryAttribute={this.getQueryAttributeSet}
                                            getQueryAttribute: this.getQueryAttribute, getQuery: this.getQuerySet, handleThirdQuery: this.thirdQuery, textInputHandler: this.textInputHandler, dropdownItemHandler: this.dropdownItemClick, textFirstIncludedHandler: this.textFirstIncludedHandler, textSecondIncludedHandler: this.textSecondIncludedHandler, dropDownToggler: this.dropDownSet, handleCheckBox: this.handleCheckBox, deleteTable: (e) => this.deleteBlockTable(`${innerEl.id}` + "-" + `${el.blockId}`, `${el.blockId}`), univocoSelectHandler: this.univocoSelectHandler, 
                                            // onChangeCheckBox={this.onChangeCheckBoxSet}
                                            openDrop: this.openDropSet, closeDrop: this.closeDrop, opened: this.state.opened, autOpen: this.state.autOpen, mouseleave: this.state.mouseleave, onmouseLeave: this.onmouseLeave, functionCounterIsChecked: this.functionCounterIsChecked, dropdownsSet: this.state.dropDownsSet, itemNotFound: this.state.itemNotFound, showDelete: counts > 2 ? true : false, showBlockDelete: counts === 2 && i == 0 ? true : false, blockId: el.blockId, deleteBlockAll: () => this.deleteBlockAll({ el, innerEl }), currentTable: innerEl, queryChanged: this.state.queryChanged, parent: this })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9xdWVyeS1idWlsZGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHFFQUFxRSxlQUFlLHFCQUFxQiwrQkFBK0IsMENBQTBDLHFCQUFxQixTQUFTLHNJQUFzSSxLQUFLLHFCQUFxQixLQUFLLEtBQUssbUVBQW1FLGlCQUFpQixxQkFBcUIsT0FBTyxHQUFHLDZCQUE2QiwyQ0FBMkMsb0JBQW9CLE9BQU8sR0FBRyx5QkFBeUI7QUFDNW1CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2REFBNkQsb0JBQW9CLGdDQUFnQyx3QkFBd0IsMEJBQTBCLG9CQUFvQixxQkFBcUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsV0FBVyxrQ0FBa0MsY0FBYyxrQkFBa0IsMEJBQTBCLGFBQWEsNEJBQTRCLFNBQVMsc0hBQXNILFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSx1REFBdUQsd0JBQXdCLGtDQUFrQyxLQUFLLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLHVCQUF1QixLQUFLLGlCQUFpQiwyQkFBMkIsa0NBQWtDLEtBQUssY0FBYyxvQ0FBb0MsS0FBSyxpQkFBaUIsc0JBQXNCLDRCQUE0QixLQUFLLGdCQUFnQiw2QkFBNkIsS0FBSywyQ0FBMkM7QUFDanVDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNB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RUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBRXRDLFlBQVksRUFBRSxPQUFPLEVBQ3JCLFlBQVksRUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDdkMsTUFBTSxFQUFFLElBQUksR0FDWixDQUNILENBQUMsQ0FDRSxDQUNQLENBQUM7Z0NBQ0osQ0FBQyxDQUFDO2dDQUVGLDBEQUFNO2dDQUNOLDBEQUFNO2dDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLENBQzFCLCtDQUFDLDBDQUFLLElBQ0osU0FBUyxFQUFDLE9BQU8sRUFDakIsSUFBSSxFQUFDLE9BQU8sRUFDWixJQUFJLFFBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM3QixJQUFJLEVBQUMsT0FBTyxFQUNaLFFBQVEsU0FDUixDQUNILENBQ0csQ0FDRixDQUNGLENBQ0YsQ0FFTixDQUNQO1NBQUEsQ0FDbUIsQ0FDdkIsQ0FBQztJQUNKLENBQUM7O0FBcHZDTSxjQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ2YscUJBQWMsR0FBRyxJQUFJLENBQUM7QUFDdEIsMkJBQW9CLEdBQUcsSUFBSSxDQUFDO0FBQzVCLGtCQUFXLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRyaW0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzgzODMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3N0eWxlLmNzcz9hYmJiIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL2xlZnQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9yaWdodC5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9wbHVzLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjay50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL3BsdXMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9jb25uZWN0b3IudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL2Nvbm5lY3Rvci9hdHRyaWJ1dGVfdGFibGVfY29ubmVjdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9jb250ZXh0L2NvbnRleHRBcGkudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9BZGRTZXRUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9jYWxsVG9BY3Rpb25Db21wb25lbnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvY29tbW9uL2FuZG9yU2VsZWN0b3IudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvY29tbW9uL2lucHV0cy9jb21tb25TZWNvbmRDb25zdHJ1Y3Rvci50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9jb21tb24vaW5wdXRzL3NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9sYXllclNlbGVjdENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvY29tcG9uZW50cy9wYWdpbmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9saWIvUmVzaXplRGV0ZWN0b3IudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS91dGlscy9xdWVyeVRhYmxlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvbHlnb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbC1tZC00IHtcXG4gICAgZmxleDogYXV0bzsgfSB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuY2xvc2UtY29udGFpbmVyLXRhYmxlLXF1ZXJ5LWJ1aWxkZXIge1xcbiAgICBmbGV4OiBhdXRvOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0k7SUFDSSxVQUFVLEVBQUEsRUFDYjs7QUFHTDtFQUNJO0lBQ0ksVUFBUyxFQUFBLEVBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xcbiAgICAuY29sLW1kLTQge1xcbiAgICAgICAgZmxleDogYXV0bztcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XFxuICAgIC5jbG9zZS1jb250YWluZXItdGFibGUtcXVlcnktYnVpbGRlcntcXG4gICAgICAgIGZsZXg6YXV0bztcXG4gICAgfVxcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaXRlbS10YWJsZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmN2ZmOyB9XFxuXFxuLnNldHRpbmctc3ZnOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMDA1ZWNhOyB9XFxuXFxuLnNldHRpbmctc3ZnIHtcXG4gIHRyYW5zaXRpb246IGFsbCAxcztcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7IH1cXG5cXG4jd3JhcCB7XFxuICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7IH1cXG5cXG4uaW5jbHVkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbiNpbnB1dHMge1xcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kscUJBQW9CLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLml0ZW0tdGFibGU6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjdmZjtcXHJcXG59XFxyXFxuLnNldHRpbmctc3ZnOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMDA1ZWNhO1xcclxcbn1cXHJcXG4uc2V0dGluZy1zdmd7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3dyYXB7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmluY2x1ZGV7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbiNpbnB1dHN7XFxyXFxuICAgIHdpZHRoOjIwJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgdHJpbW1lZEVuZEluZGV4ID0gcmVxdWlyZSgnLi9fdHJpbW1lZEVuZEluZGV4Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW1TdGFydCA9IC9eXFxzKy87XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udHJpbWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byB0cmltLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUcmltKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nXG4gICAgPyBzdHJpbmcuc2xpY2UoMCwgdHJpbW1lZEVuZEluZGV4KHN0cmluZykgKyAxKS5yZXBsYWNlKHJlVHJpbVN0YXJ0LCAnJylcbiAgICA6IHN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVHJpbTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRFbmRJbmRleDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwidmFyIGJhc2VUcmltID0gcmVxdWlyZSgnLi9fYmFzZVRyaW0nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtNi4wMzYgMTIuMTU3IDguMDEtOC4wMWEuNS41IDAgMSAxIC43MDcuNzA3bC04LjAxIDguMDFhMSAxIDAgMCAxLTEuNDE1IDBMMS4xNDYgOC42ODJhLjUuNSAwIDEgMSAuNzA4LS43MDdsNC4xODIgNC4xODJaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk05LjQzOC45OTRjLjIxMyAwIC4zOTcuMTQ2LjQ0LjM1LjE1MS43MjIuMjU3IDEuMzQuMzE2IDEuODUyLjM3NC4xNi43MjUuMzYyIDEuMDQ4LjU5OWwxLjcyOC0uNjc2YS40NTUuNDU1IDAgMCAxIC41NTYuMTg4bDEuNDIgMi4zOTRhLjQzLjQzIDAgMCAxLS4wOTEuNTQ3IDIxLjk4IDIxLjk4IDAgMCAxLTEuNDkgMS4xOTQgNS4xNyA1LjE3IDAgMCAxLS4wMDcgMS4xODNsMS40NjQgMS4xMTlhLjQzLjQzIDAgMCAxIC4xMTEuNTYzbC0xLjQyIDIuMzk0YS40NTQuNDU0IDAgMCAxLS41My4xOTcgMjIuNDQ1IDIyLjQ0NSAwIDAgMS0xLjgwNy0uNjZjLS4zMjUuMjMzLS42NzkuNDMtMS4wNTUuNTg2bC0uMjYzIDEuNzk0YS40NDYuNDQ2IDAgMCAxLS40NDUuMzc2SDYuNTc0YS40NDYuNDQ2IDAgMCAxLS40NC0uMzUgMjEuMDE5IDIxLjAxOSAwIDAgMS0uMzE3LTEuODUzIDUuMzQgNS4zNCAwIDAgMS0xLjA0Ny0uNTk4bC0xLjcyOC42NzVhLjQ1NS40NTUgMCAwIDEtLjU1Ni0uMTg3bC0xLjQyLTIuMzk1YS40My40MyAwIDAgMSAuMDkxLS41NDZjLjU2Ny0uNDkgMS4wNjMtLjg4OCAxLjQ5LTEuMTk0YTUuMTY3IDUuMTY3IDAgMCAxIC4wMDgtMS4xODNMMS4xOSA2LjI0M2EuNDMuNDMgMCAwIDEtLjExMi0uNTYybDEuNDItMi4zOTVhLjQ1NS40NTUgMCAwIDEgLjUzMS0uMTk2Yy43MTkuMjMzIDEuMzIxLjQ1MyAxLjgwNy42Ni4zMjQtLjIzMy42NzktLjQzIDEuMDU2LS41ODdsLjI2Mi0xLjc5NEEuNDQ2LjQ0NiAwIDAgMSA2LjYuOTk0aDIuODM5Wm0tLjM2NSAxSDYuOTg1bC0uMjggMS44NjYtLjQ2Ny4xOWMtLjIzNS4wOTUtLjQ2LjIxLS42NzIuMzRsLS4yMDcuMTM2LS40Mi4yOTMtLjQ3Ni0uMTk3Yy0uMzI4LS4xMzctLjcxOC0uMjgxLTEuMTY5LS40MzNsLS4yMjEtLjA3NC0xLjA0NSAxLjcxOUwzLjU5IDYuOTk5bC0uMDYuNDc5YTQuMTI3IDQuMTI3IDAgMCAwLS4wMjEuODE2bC4wMTQuMTQ0LjA1OC40OTItLjQxOS4yOTRjLS4yODguMjAzLS42MTUuNDUxLS45NzkuNzQ2bC0uMTc3LjE0NSAxLjA0MyAxLjcyIDEuODQ1LS43MDMuNDA2LjI5Yy4yMDQuMTQ2LjQyLjI3NC42NDUuMzg0bC4yMjguMTAzLjQ3NC4xOTkuMDU5LjQ5Yy4wNC4zMzguMTAzLjczMS4xOSAxLjE3N2wuMDQzLjIxOWgyLjA4OGwuMjgyLTEuODY3LjQ2Ni0uMTljLjIzNi0uMDk1LjQ2LS4yMS42NzItLjM0bC4yMDctLjEzNi40MTktLjI5My40NzYuMTk4Yy4zMy4xMzYuNzIuMjggMS4xNy40MzNsLjIyLjA3MiAxLjA0NC0xLjcxOC0xLjU2LTEuMTY1LjA2LS40NzlhNC4xMzEgNC4xMzEgMCAwIDAgLjAyLS44MTVsLS4wMTMtLjE0NC0uMDYtLjQ5Mi40Mi0uMjk1YTE4LjEgMTguMSAwIDAgMCAuOTgtLjc0NmwuMTc2LS4xNDYtMS4wNDMtMS43Mi0xLjg0NC43MDUtLjQwNi0uMjlhNC40OTYgNC40OTYgMCAwIDAtLjY0Ni0uMzg1bC0uMjI4LS4xMDMtLjQ3NC0uMTk5LS4wNTgtLjQ5Yy0uMDMyLS4yNy0uMDgtLjU3Ni0uMTQtLjkxNmwtLjA5NC0uNDhabS0xLjA2NyAzYTMgMyAwIDEgMSAwIDYgMyAzIDAgMCAxIDAtNlptMCAxYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTExLjM0NyAyLjE0NmEuNDg1LjQ4NSAwIDAgMSAwIC43MDhMNS43NiA4bDUuNTg3IDUuMTQ2YS40ODYuNDg2IDAgMCAxIDAgLjcwOC41MzguNTM4IDAgMCAxLS43MzggMGwtNS45NTYtNS41YS40ODUuNDg1IDAgMCAxIDAtLjcwOGw1Ljk1Ni01LjVhLjUzOC41MzggMCAwIDEgLjczOCAwWlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNC42NTMgMTMuODU0YS40ODUuNDg1IDAgMCAxIDAtLjcwOEwxMC4yNCA4IDQuNjUzIDIuODU0YS40ODUuNDg1IDAgMCAxIDAtLjcwOC41MzguNTM4IDAgMCAxIC43MzggMGw1Ljk1NiA1LjVhLjQ4NS40ODUgMCAwIDEgMCAuNzA4bC01Ljk1NiA1LjVhLjUzOC41MzggMCAwIDEtLjczOCAwWlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIm04Ljc0NSA4IDYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0NS43NDZMOCA4Ljc0NmwtNi4xIDYuMWEuNTI3LjUyNyAwIDEgMS0uNzQ2LS43NDZsNi4xLTYuMS02LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYtLjc0Nmw2LjEgNi4xIDYuMS02LjFhLjUyNy41MjcgMCAwIDEgLjc0Ni43NDZMOC43NDYgOFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJNNy41IDBhLjUuNSAwIDAgMC0uNS41VjdILjVhLjUuNSAwIDAgMCAwIDFIN3Y2LjVhLjUuNSAwIDAgMCAxIDBWOGg2LjVhLjUuNSAwIDAgMCAwLTFIOFYuNWEuNS41IDAgMCAwLS41LS41WlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjay5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBTZXR0aW5nT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgTGVmdE91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL3JpZ2h0LnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBSaWdodE91dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9jbG9zZS5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgQ2xvc2VPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvcGx1cy5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgUGx1c091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiXHJcblxyXG50eXBlIGxheWVyQ29udGVudHNPYmplY3RUeXBlID0ge1xyXG4gICAgaWQ6c3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczphbnlbXVxyXG59XHJcblxyXG50eXBlIHNlbGVjdGVkTGF5ZXJUeXBlID0ge1xyXG4gICAgaWQ6c3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczphbnlbXVxyXG59XHJcblxyXG5jbGFzcyBIZWxwZXIge1xyXG5cclxuICAgIHNldFF1ZXJ5QXJyYXkgPSBbXTtcclxuICAgIHNldE91dEZpZWxkcyA9IFtdO1xyXG5cclxuICAgIGdldExheWVyQXR0cmlidXRlcyA9IChzZWxlY3RlZExheWVySWQ6c3RyaW5nLGxheWVyQ29udGVudHM6bGF5ZXJDb250ZW50c09iamVjdFR5cGVbXSk6YW55W109PntcclxuICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xyXG4gICAgICAgIGlmIChsYXllckNvbnRlbnRzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc09iamVjdCA9IGxheWVyQ29udGVudHMuZmluZCgobGF5ZXJDb250ZW50OmxheWVyQ29udGVudHNPYmplY3RUeXBlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyQ29udGVudD8uaWQgPT09IHNlbGVjdGVkTGF5ZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyQ29udGVudD8uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNPYmplY3Q/LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlS2V5QXJyYXkgPSAoYXR0cmlidXRlczphbnkpOnN0cmluZ1tdPT57XHJcbiAgICAgICAgbGV0IHJldHVybmVkS2V5cyA9IFtdO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICByZXR1cm5lZEtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybmVkS2V5cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIgPShyZXN1bHRzOmFueSxjaGVja2VkTGF5ZXJzOnN0cmluZ1tdKTpzZWxlY3RlZExheWVyVHlwZVtdPT57Ly9zdGVwNSBmcm9tIHNlbGVjdGVkIGl0ZW1zIGdldCB0aGVpciBsYXllcnNcclxuICAgICAgICBsZXQgc2VsZWN0ZWRMYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMYXllcnNBcnJheSA9IHJlc3VsdHMucmVkdWNlKChuZXdBcnJheSxpdGVtczphbnlbXSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtcz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJDb250ZW50cyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TGF5ZXJJZCA9IGl0ZW1zWzBdPy5sYXllcj8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMYXllcnMuaW5kZXhPZihjdXJyZW50TGF5ZXJJZCkgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiaWRcIl0gPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExheWVyQ29udGVudHNbXCJhdHRyaWJ1dGVzXCJdID0gdGhpcy5nZXRBdHRyaWJ1dGVzKGl0ZW1zKTsvL3N0ZXA2IHBhY2thZ2luZyBhdHRyaWJ1dGVzIGFuZCBrZWVwaW5nIGxvbiBhbmQgbGF0aXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChzZWxlY3RlZExheWVyQ29udGVudHMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgICAgICAgICB9LFtdKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRMYXllcnNBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVzID0gKGl0ZW1zOmFueVtdKTphbnlbXT0+e1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNBcnJheSA9IGl0ZW1zLnJlZHVjZSgobmV3QXJyYXksaXRlbSk9PntcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LmF0dHJpYnV0ZXMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2VvbWV0cnkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gaXRlbS5nZW9tZXRyeTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IGdlb21ldHJ5Py5sYXRpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBnZW9tZXRyeT8ubG9uZ2l0dWRlPz9nZW9tZXRyeT8uZXh0ZW50Py5jZW50ZXI/LmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9uZ2l0dWRlICYmIGxhdGl0dWRlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaCh7Li4uaXRlbS5hdHRyaWJ1dGVzLGxvY2F0aW9uOltsYXRpdHVkZSxsb25naXR1ZGVdfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICAgICAgfSxbXSlcclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlc0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bWJlck9mQXR0cmlidXRlcyA9IChsYXllcnNDb250ZW50czp7aWQ6c3RyaW5nLGF0dHJpYnV0ZXM6YW55W119W10pPT57XHJcbiAgICAgICAgbGV0IGxheWVyQ29udGVudHNPYmplY3QgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7aSA8IGxheWVyc0NvbnRlbnRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgbGF5ZXJDb250ZW50c09iamVjdCA9IHsuLi5sYXllckNvbnRlbnRzT2JqZWN0LFtsYXllcnNDb250ZW50c1tpXT8uaWRdOmxheWVyc0NvbnRlbnRzW2ldPy5hdHRyaWJ1dGVzPy5sZW5ndGg/PzB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYXllckNvbnRlbnRzT2JqZWN0O1xyXG4gICAgfVxyXG4gXHJcbiAgICBnZXRDbGlja2VkTGF5ZXJTdGF0dXMgPSAocmVzdWx0czphbnlbXSxzZWxlY3RlZExheWVyOnNlbGVjdGVkTGF5ZXJUeXBlW10pOmJvb2xlYW49PntcclxuICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgaWYgKHJlc3VsdHM/Lmxlbmd0aCA+IDAgJiYgc2VsZWN0ZWRMYXllcj8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2kgPCByZXN1bHRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGxheWVySWQgPSByZXN1bHRzW2ldPy5ncmFwaGljPy5sYXllcj8uaWQ7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IHNlbGVjdGVkTGF5ZXIuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PT0gbGF5ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZkxheWVyV2FzQWRkZWQgPSAobGF5ZXJJZDpzdHJpbmcsbWFwTGF5ZXJzSXRlbXM6YW55W10pPT57XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChtYXBMYXllcnNJdGVtcz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGluZGV4ID0gbWFwTGF5ZXJzSXRlbXMuZmluZEluZGV4KChpdGVtKT0+aXRlbT8uaWQgPT09IGxheWVySWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuXHJcblxyXG4gICAgb3BlblRhYmxlQXR0cmlidXRlID0gKCk9PntcclxuICAgICAgICBjb25zdCBhcmlhRXhwYW5kZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgaWYgKGFyaWFFeHBhbmRlZEVsZW1lbnQuYXJpYUV4cGFuZGVkID09PSBcImZhbHNlXCIpe1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgYXJpYUV4cGFuZGVkRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUF0dHJpYnV0ZVRhYmxlID0gKCk9PntcclxuICAgICAgICBjb25zdCBhcmlhRXhwYW5kZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgaWYgKGFyaWFFeHBhbmRlZEVsZW1lbnQuYXJpYUV4cGFuZGVkID09PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBhcmlhRXhwYW5kZWRFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE51bWJlck9mSXRlbXNJbkZpZWxkID0gKGZpZWxkOnN0cmluZyxzZWxlY3RlZEF0dHJpYnV0ZXM6YW55W10pPT57XHJcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXMgPSAwO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEF0dHJpYnV0ZXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVBcnIgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8IHNlbGVjdGVkQXR0cmlidXRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIHZhbHVlQXJyLnB1c2goc2VsZWN0ZWRBdHRyaWJ1dGVzW2ldW2ZpZWxkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtcyA9IHZhbHVlQXJyLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bWJlck9mSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGlnaGxpZ2h0ZWRJZHMgPSAoZmVhdHVyZXM6YW55W10pPT57XHJcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0SWRzID0gW107XHJcbiAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aClmZWF0dXJlcy5mb3JFYWNoKGVsPT5oaWdobGlnaHRJZHMucHVzaChlbC5hdHRyaWJ1dGVzLk9CSkVDVElEKSlcclxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0SWRzO1xyXG4gICAgfVxyXG5cclxuICAgIGxpa2VseVF1ZXJ5ID0gKGF0dHJpYnV0ZVF1ZXJ5LHF1ZXJ5VmFsdWUsdmFsdWUpPT57XHJcbiAgICAgICAgc3dpdGNoKHF1ZXJ5VmFsdWUpe1xyXG4gICAgICAgICAgICBjYXNlIFwiTElLRSVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTElLRSAnJSR7dmFsdWV9J2A7XHJcbiAgICAgICAgICAgIGNhc2UgXCIlTElLRSVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTElLRSAnJSR7dmFsdWV9JSdgO1xyXG4gICAgICAgICAgICBjYXNlIFwiJUxJS0VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTElLRSAnJSR7dmFsdWV9J2A7XHJcbiAgICAgICAgICAgIGNhc2UgXCJOT1QgTElLRVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2F0dHJpYnV0ZVF1ZXJ5fSBOT1QgTElLRSAnJSR7dmFsdWV9JSdgOyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBxdWVyeVNldENvbnN0cnVjdG9yID0gKHF1ZXJ5OmFueSxzZXRXaGVyZUNsYXVzZTphbnlbXSxBbmRPclNldDphbnksZmllbGQ6c3RyaW5nKT0+e1xyXG4gICAgICAgIGxldCBjdXJyZW50UXVlcnkgPSBxdWVyeS53aGVyZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNldFF1ZXJ5QXJyYXkubGVuZ3RoIDwgc2V0V2hlcmVDbGF1c2UubGVuZ3RoLTEsXCJjaGVja2luZ1wiKVxyXG4gICAgICAgIGlmICh0aGlzLnNldFF1ZXJ5QXJyYXkubGVuZ3RoIDwgc2V0V2hlcmVDbGF1c2UubGVuZ3RoLTEpe1xyXG4gICAgICAgICAgICBjdXJyZW50UXVlcnkgPSBxdWVyeS53aGVyZSArICBcIiBcIiArIEFuZE9yU2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFF1ZXJ5QXJyYXkucHVzaChjdXJyZW50UXVlcnkpO1xyXG4gICAgICAgIHRoaXMuc2V0T3V0RmllbGRzLnB1c2goYCR7ZmllbGR9YCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZXRRdWVyeUFycmF5LHRoaXMuc2V0T3V0RmllbGRzLFwibWFrZSBzdXJlXCIpXHJcbiAgICAgICAgLy8gaWYodGhpcy5zZXRRdWVyeUFycmF5Lmxlbmd0aCA+PSBzZXRXaGVyZUNsYXVzZS5sZW5ndGgpe1xyXG4gICAgICAgIC8vICAgICByZXR1cm4ge3F1ZXJ5U2V0QXJyYXk6dGhpcy5zZXRRdWVyeUFycmF5LHF1ZXJ5U2V0T3V0ZmllbGRzOnRoaXMuc2V0T3V0RmllbGRzfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBsb29wVG9HZXRTdHJpbmcoc3RyaW5nQXJyOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIGxldCBuZXdTdHJpbmcgPSBcIiBcIjtcclxuICAgICAgICBpZiAoc3RyaW5nQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgbmV3U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoc3RyaW5nQXJyWzBdKTtcclxuICAgICAgICAgIG5ld1N0cmluZyA9IG5ld1N0cmluZy5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHJpbmdBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U3RyaW5nVmFsID0gSlNPTi5zdHJpbmdpZnkoc3RyaW5nQXJyW2ldKS5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xyXG4gICAgICAgICAgICBuZXdTdHJpbmcgKz0gXCIsXCIgKyBuZXdTdHJpbmdWYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXdTdHJpbmc7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjaGVja1BhcmVudGhlc2lzKHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGJyYWNrZXRzID0gW1wiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCJdO1xyXG4gICAgICAgIGlmIChicmFja2V0cy5pbmNsdWRlcyh2YWwuY2hhckF0KDApKSkge1xyXG4gICAgICAgICAgc3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluc0FueUxldHRlcnMgPSAoc3RyKSA9PiAvW2EtekEtWl0vLnRlc3Qoc3RyKTtcclxuXHJcbiAgICBzZXRRdWVyeUNvbnN0cnVjdG9yID0gKHF1ZXJ5UmVxdWVzdCwgZmlyc3RRdWVyeSwgc2Vjb25kUXVlcnlUYXJnZXQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHF1ZXJ5UmVxdWVzdCkge1xyXG4gICAgICAgICAgY2FzZSBcIkxJS0UlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBMSUtFICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcclxuICAgICAgICAgIGNhc2UgXCIlTElLRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XHJcbiAgICAgICAgICBjYXNlIFwiJUxJS0UlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XHJcbiAgICAgICAgICBjYXNlIFwiTk9UIExJS0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IE5PVCBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XHJcbiAgICAgICAgICBjYXNlIFwiaXMgbnVsbFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gaXMgbnVsbGA7XHJcbiAgICAgICAgICBjYXNlIFwiaXMgbm90IG51bGxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IGlzIG5vdCBudWxsYDtcclxuICAgICAgICAgIGNhc2UgXCJJTlwiOlxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IElOICgke1xyXG4gICAgICAgICAgICAgICAgXCInXCIgKyBzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXHJcbiAgICAgICAgICAgICAgfSlgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGFyZW50aGVzaXMoc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIikpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSB0aGlzLmxvb3BUb0dldFN0cmluZyhzZWNvbmRRdWVyeVRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7c2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIil9KWA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlIFwiTk9UX0lOXCI6XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYE5PVCAke2ZpcnN0UXVlcnl9IElOICgke1xyXG4gICAgICAgICAgICAgICAgXCInXCIgKyBzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXHJcbiAgICAgICAgICAgICAgfSlgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGFyZW50aGVzaXMoc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIikpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSB0aGlzLmxvb3BUb0dldFN0cmluZyhzZWNvbmRRdWVyeVRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYE5PVCAgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzdHJpbmdGaWVkVmFsdWV9KWA7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgTk9UICAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcImluY2x1ZGVkXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgKCR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBBTkQgJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fSlgO1xyXG4gICAgICAgICAgY2FzZSBcImlzX25vdF9pbmNsdWRlZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYCgke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gT1IgJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fSlgO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJyR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICR7c2Vjb25kUXVlcnlUYXJnZXR9YDtcclxuICAgICAgICAgICAgICBjb25zdCBicmFja2V0cyA9IFtcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiXTtcclxuICAgICAgICAgICAgICBpZiAoYnJhY2tldHMuaW5jbHVkZXMoc2Vjb25kUXVlcnlUYXJnZXQuY2hhckF0KDApKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gSlNPTi5zdHJpbmdpZnkoc2Vjb25kUXVlcnlUYXJnZXQpLnJlcGxhY2UoL1wiL2csIGAnYClcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xyXG4gICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJyR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAvLyB0YWJsZVNldENvdW50cyA9ICh0YWJsZVNldENvdW50czp7aWQ6c3RyaW5nLGRlbGV0ZWQ6Ym9vbGVhbn1bXSk9PntcclxuICAgIC8vICAgICBsZXQgY291bnRzID0gMFxyXG4gICAgLy8gICAgIGlmICh0YWJsZVNldENvdW50cy5sZW5ndGgpe1xyXG4gICAgLy8gICAgICAgY29uc3QgY29waWVkVGFibGVTZXRDb3VudHMgPSBbLi4udGFibGVTZXRDb3VudHNdO1xyXG4gICAgLy8gICAgICAgY29waWVkVGFibGVTZXRDb3VudHMuZmlsdGVyKChpdGVtKT0+IWl0ZW0uZGVsZXRlZCk7XHJcbiAgICAvLyAgICAgICBjb3VudHMgPSBjb3BpZWRUYWJsZVNldENvdW50cy5sZW5ndGhcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGNvdW50cztcclxuICAgIC8vICAgfVxyXG5cclxuICAgIGdldFF1ZXJ5U2V0VmFsdWUgPSAoKT0+KHtxdWVyeVNldEFycmF5OnRoaXMuc2V0UXVlcnlBcnJheSxxdWVyeVNldE91dGZpZWxkczp0aGlzLnNldE91dEZpZWxkc30pXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVscGVyKCk7IiwiXG5pbXBvcnQgeyBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuaW1wb3J0IHsgYXBwQWN0aW9ucyB9IGZyb20gXCJqaW11LWNvcmVcIjtcblxudHlwZSBzcGF0aWFsUmVsYXRpb25zaGlwVHlwZSA9IFwiaW50ZXJzZWN0c1wiIHwgXCJjb250YWluc1wiIHwgXCJjcm9zc2VzXCIgfCBcImRpc2pvaW50XCIgfCBcImVudmVsb3BlLWludGVyc2VjdHNcIiB8IFwiaW5kZXgtaW50ZXJzZWN0c1wiIHwgXCJvdmVybGFwc1wiIHwgXCJ0b3VjaGVzXCIgfCBcIndpdGhpblwiIHwgXCJyZWxhdGlvblwiXG5cbnR5cGUgbGF5ZXJPcGVuVHlwZSA9IHtcbiAgICBnZW9tZXRyeTphbnksXG4gICAgdHlwZVNlbGVjdGVkOnNwYXRpYWxSZWxhdGlvbnNoaXBUeXBlLFxuICAgIHdoZXJlPzpzdHJpbmcsXG4gICAgZ3JhcGhpY3NGb3VuZD86YW55LFxuICAgIHZhbHVlQnVmZmVyPzphbnlcbn1cblxudHlwZSBpbml0T2JqVHlwZSA9IHtcbiAgICByZXN1bHRzOmFueVtdLFxuICAgIGFsbENoZWNrZWRMYXllcnM/OmFueVtdLFxuICAgIGlzTGF5ZXJDaGVja2VkPzpib29sZWFuLFxuICAgIGNoZWNrZWRMYXllcnM/OnN0cmluZ1tdLFxuICAgIG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9LFxuICAgIGxheWVyT3Blbj86bGF5ZXJPcGVuVHlwZSxcbiAgICBjcmVhdGVUYWJsZT86dHJ1ZVxufVxuXG50eXBlIHNlbGVjdGVkTGF5ZXJUeXBlID0ge2lkOnN0cmluZyxhdHRyaWJ1dGVzOmFueVtdfVxuXG5jbGFzcyBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciB7XG5cbiAgICBzdGF0aWMgYWN0aXZlVmlldzpKaW11TWFwVmlldyA9IG51bGw7XG4gICAgc3RhdGljIHNlbGY6YW55ID0gbnVsbDtcblxuICAgIGFsbENoZWNrZWRMYXllcnM/OmFueVtdO1xuICAgIGNoZWNrZWRMYXllcnM/OnN0cmluZ1tdO1xuICAgIG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9O1xuICAgIGNyZWF0ZVRhYmxlOmJvb2xlYW47XG4gICAgbGF5ZXJPcGVuOmxheWVyT3BlblR5cGU7XG4gICAgaXNMYXllckNoZWNrZWQ6Ym9vbGVhblxuXG5cbiAgICBjb25zdHJ1Y3RvcihhY3RpdmVWaWV3OkppbXVNYXBWaWV3LHNlbGY6YW55KXtcbiAgICAgICAgQXR0cmlidXRlVGFibGVDb25uZWN0b3IuYWN0aXZlVmlldyA9IGFjdGl2ZVZpZXc7XG4gICAgICAgIEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGYgPSBzZWxmO1xuICAgIH1cblxuICAgIGluaXQob2JqOmluaXRPYmpUeXBlKXsgIFxuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBvYmoucmVzdWx0cztcbiAgICAgICAgY29uc3QgYWxsQ2hlY2tlZExheWVycyA9IG9iai5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICBsZXQgY3JlYXRlVGFibGUgPSB0cnVlO1xuICAgICAgICBsZXQgaXNMYXllckNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNoZWNrZWRMYXllcnMgPSBudWxsO1xuICAgICAgICBsZXQgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gbnVsbDtcbiAgICAgICAgbGV0IGxheWVyT3BlbiA9IG51bGw7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJjcmVhdGVUYWJsZVwiKSl7XG4gICAgICAgICAgICBjcmVhdGVUYWJsZSA9IG9iai5jcmVhdGVUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwiaXNMYXllckNoZWNrZWRcIikpe1xuICAgICAgICAgICAgaXNMYXllckNoZWNrZWQgPSBvYmouaXNMYXllckNoZWNrZWQgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImNoZWNrZWRMYXllcnNcIikpe1xuICAgICAgICAgICAgY2hlY2tlZExheWVycyA9IG9iai5jaGVja2VkTGF5ZXJzIFxuICAgICAgICB9XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJudW1iZXJPZkF0dHJpYnV0ZXNcIikpe1xuICAgICAgICAgICAgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gb2JqLm51bWJlck9mQXR0cmlidXRlcyBcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwibGF5ZXJPcGVuXCIpKXtcbiAgICAgICAgICAgIGxheWVyT3BlbiA9IG9iai5sYXllck9wZW4gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVUYWJsZSA9IGNyZWF0ZVRhYmxlO1xuICAgICAgICB0aGlzLmlzTGF5ZXJDaGVja2VkID0gaXNMYXllckNoZWNrZWQ7XG4gICAgICAgIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVycyhhbGxDaGVja2VkTGF5ZXJzLHJlc3VsdHMpO1xuICAgICAgICB0aGlzLnNldENoZWNrZWRMYXllcnMoYWxsQ2hlY2tlZExheWVycyxjaGVja2VkTGF5ZXJzKTtcbiAgICAgICAgLy8gdGhpcy5zZXRBbGxDaGVja2VkTGF5ZXJzKGFsbENoZWNrZWRMYXllcnMpO1xuICAgICAgICB0aGlzLnNldE51bWJlck9mQXR0cmlidXRlcyhyZXN1bHRzLG51bWJlck9mQXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMuc2V0TGF5ZXJPcGVuKGxheWVyT3Blbik7XG4gICAgfVxuXG4gICAgaXNBcnJheSA9ICh2YWwpPT5BcnJheS5pc0FycmF5KHZhbCk7XG5cbiAgICBpc09iamVjdCA9ICh2YWwpPT5PYmplY3Qua2V5cyh2YWwpLmxlbmd0aCA+IDAgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcblxuICAgIGxvb3BMYXllckdldElkcyA9IChsYXllcjphbnlbXSk9PntcbiAgICAgICAgbGV0IGlkc0FycmF5ID0gW107XG4gICAgICAgIGlmIChsYXllci5sZW5ndGgpe1xuICAgICAgICAgICAgaWRzQXJyYXkgPSBsYXllci5yZWR1Y2UoKG5ld0FycmF5LGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQpe1xuICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgICAgIH0sW10pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkc0FycmF5O1xuICAgIH1cblxuXG5cbiAgICBzZXRDaGVja2VkTGF5ZXJzID0gKGN1cnJlbnRBbGxDaGVjaGVkTGF5ZXJzOmFueSxjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXSwpPT57XG4gICAgICAgIGxldCBhbGxDaGVja2VkTGF5ZXJzID0gY3VycmVudEFsbENoZWNoZWRMYXllcnM7XG4gICAgICAgIGlmICghYWxsQ2hlY2tlZExheWVycyl7XG4gICAgICAgICAgICBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja2VkTGF5ZXJzKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZExheWVycyA9IGNoZWNrZWRMYXllcnM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoZWNrZWRMYXllcnNBcnIgPSBbXTtcbiAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnNBcnIucHVzaChhbGxDaGVja2VkTGF5ZXJzLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzQXJyO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTGF5ZXJzQXJyLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnNBcnIgPSBbLi4uY2hlY2tlZExheWVyc0FyciwuLi50aGlzLmxvb3BMYXllckdldElkcyhhbGxDaGVja2VkTGF5ZXJzKV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZExheWVycyA9IGNoZWNrZWRMYXllcnNBcnI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZExheWVycyA9IHRoaXMubG9vcExheWVyR2V0SWRzKGFsbENoZWNrZWRMYXllcnMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QWxsQ2hlY2tlZExheWVyc0Zyb21SZXN1bHRzID0gKHJlc3VsdHM6YW55W10pPT57XG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtc1swXT8ubGF5ZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgICAgIH0sW10pXG4gICAgICAgICAgICB0aGlzLmFsbENoZWNrZWRMYXllcnMgPSBhbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFwiUGFzcyByZXN1bHRzIGFmdGVyIHF1ZXJ5XCJcblxuICAgIH1cblxuICAgIHNldEFsbENoZWNrZWRMYXllcnMgPSAoYWxsQ2hlY2tlZExheWVyczphbnkscmVzdWx0czphbnlbXSk9PntcbiAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZExheWVycyA9IFthbGxDaGVja2VkTGF5ZXJzXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBcnJheShhbGxDaGVja2VkTGF5ZXJzKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxDaGVja2VkTGF5ZXJzID0gYWxsQ2hlY2tlZExheWVyc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVyc0Zyb21SZXN1bHRzKHJlc3VsdHMpO1xuIFxuICAgIH1cblxuXG4gICAgZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyID0ocmVzdWx0czphbnkpOnNlbGVjdGVkTGF5ZXJUeXBlW109PntcbiAgICAgICAgY29uc3QgY2hlY2tlZExheWVycyA9IHRoaXMuY2hlY2tlZExheWVycz8/W107XG4gICAgICAgIGxldCBzZWxlY3RlZExheWVyc0FycmF5ID0gW107XG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJDb250ZW50cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudExheWVySWQgPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZExheWVycy5pbmRleE9mKGN1cnJlbnRMYXllcklkKSAhPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiaWRcIl0gPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiYXR0cmlidXRlc1wiXSA9IHRoaXMuZ2V0QXR0cmlidXRlcyhpdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKHNlbGVjdGVkTGF5ZXJDb250ZW50cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgICB9LFtdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZExheWVyc0FycmF5O1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZXMgPSAoaXRlbXM6YW55W10pOmFueVtdPT57XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNBcnJheSA9IGl0ZW1zLnJlZHVjZSgobmV3QXJyYXksaXRlbSk9PntcbiAgICAgICAgICAgIGlmIChpdGVtPy5hdHRyaWJ1dGVzKXtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5nZW9tZXRyeSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gaXRlbS5nZW9tZXRyeTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBnZW9tZXRyeT8ubGF0aXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IGdlb21ldHJ5Py5sb25naXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9uZ2l0dWRlICYmIGxhdGl0dWRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goey4uLml0ZW0uYXR0cmlidXRlcyxsb2NhdGlvbjpbbGF0aXR1ZGUsbG9uZ2l0dWRlXX0pO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICB9LFtdKVxuICAgICAgICByZXR1cm4gYXR0cmlidXRlc0FycmF5O1xuICAgIH1cblxuICAgIHNldE51bWJlck9mQXR0cmlidXRlcyA9IChyZXN1bHRzOmFueVtdLG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9LCk9PntcbiAgICAgICAgaWYgKG51bWJlck9mQXR0cmlidXRlcyl7XG4gICAgICAgICAgICB0aGlzLm51bWJlck9mQXR0cmlidXRlcyA9IG51bWJlck9mQXR0cmlidXRlcztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXllcnNDb250ZW50cyA9IHRoaXMuZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyKHJlc3VsdHMpO1xuICAgICAgICBsZXQgbGF5ZXJDb250ZW50c09iamVjdCA9IHt9O1xuICAgICAgICBpZiAobGF5ZXJzQ29udGVudHM/Lmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aSA8IGxheWVyc0NvbnRlbnRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGxheWVyQ29udGVudHNPYmplY3QgPSB7Li4ubGF5ZXJDb250ZW50c09iamVjdCxbbGF5ZXJzQ29udGVudHNbaV0/LmlkXTpsYXllcnNDb250ZW50c1tpXT8uYXR0cmlidXRlcz8ubGVuZ3RoPz8wfVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXMgPSBsYXllckNvbnRlbnRzT2JqZWN0XG4gICAgfVxuXG4gICAgc2V0TGF5ZXJPcGVuID0gKGxheWVyT3Blbj86bGF5ZXJPcGVuVHlwZSk9PntcbiAgICAgICAgaWYgKGxheWVyT3Blbil7XG4gICAgICAgICAgICB0aGlzLmxheWVyT3BlbiA9IGxheWVyT3BlbjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyT3BlbiA9IHtcbiAgICAgICAgICAgIGdlb21ldHJ5Om51bGwsXG4gICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6XCJjb250YWluc1wiLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlVmlldyA9ICgpPT5BdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5hY3RpdmVWaWV3O1xuICAgIFxuICAgIGdldEFsbENoZWNrZWRMYXllcnMgPSAoKT0+IHRoaXMuYWxsQ2hlY2tlZExheWVycztcblxuICAgIGRpc3BhdGNoaW5nQWxsID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wc1xuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSApe1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBjb25zdCBsYXllck9wZW4gPSB0aGlzLmxheWVyT3BlbjtcbiAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzICYmIGxheWVyT3BlbiAmJiBhbGxDaGVja2VkTGF5ZXJzICYmIGFjdGl2ZVZpZXcpe1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xheWVyQ2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNoZWNrZWRMYXllcnNcIix0aGlzLmNoZWNrZWRMYXllcnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG51bWJlck9mQXR0cmlidXRlcykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJudW1iZXJPZkF0dHJpYnV0ZVwiLG51bWJlck9mQXR0cmlidXRlcykpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJsYXllck9wZW5cIixsYXllck9wZW4pKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZ2V0QWxsTGF5ZXJzXCIsdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzKSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImdldEFjdGl2ZVZpZXdcIix0aGlzLmdldEFjdGl2ZVZpZXcpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBcIm5vSXRlbVNlbGVjdGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGF5ZXJPcGVuKXRocm93IFwiVGhlcmUgaXMgbm8gbGF5ZXIgb3BlblwiXG4gICAgICAgICAgICBpZiAoYWxsQ2hlY2tlZExheWVycyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFsbCBjaGVja2VkIGxheWVycyBtYWtlIHN1cmUgdG8gcGFzcyBsYXllclwiXG4gICAgICAgICAgICBpZiAoYWN0aXZlVmlldyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFjdGl2ZVZpZXcscGFzcyBqaW11TWFwVmlldyB3aGVuIG1hcCBsb2FkXCJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIlBhc3MgcGFyZW50IHdpZGdldCB0byB0aGUgQXR0cmlidXRlQ29ubmVjdG9yXCJcblxuICAgIH1cblxuICAgIGNsb3NlVGFibGUgPSAoKT0+e1xuICAgICAgICBjb25zdCBzZWxmID0gQXR0cmlidXRlVGFibGVDb25uZWN0b3Iuc2VsZjtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImRpc3BhdGNoXCIpICl7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjaGVja2VkTGF5ZXJzXCIsW10pKTtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcHMgPSAoKT0+e1xuICAgICAgICBjb25zdCBzZWxmID0gQXR0cmlidXRlVGFibGVDb25uZWN0b3Iuc2VsZjtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzO1xuICAgICAgICBjb25zdCBudW1iZXJPZkF0dHJpYnV0ZXMgPSB0aGlzLm51bWJlck9mQXR0cmlidXRlcztcbiAgICAgICAgY29uc3QgbGF5ZXJPcGVuID0gdGhpcy5sYXllck9wZW47XG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKTsgXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImRpc3BhdGNoXCIpKXtcbiAgICAgICAgICAgIGlmKCFsYXllck9wZW4pdGhyb3cgXCJUaGVyZSBpcyBubyBsYXllciBvcGVuXCJcbiAgICAgICAgICAgIGlmICghYWxsQ2hlY2tlZExheWVycyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFsbCBjaGVja2VkIGxheWVycyBtYWtlIHN1cmUgdG8gcGFzcyBsYXllclwiXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZVZpZXcpdGhyb3cgXCJUaGVyZSBpcyBubyBhY3RpdmVWaWV3LHBhc3MgamltdU1hcFZpZXcgd2hlbiBtYXAgbG9hZFwiXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKG51bWJlck9mQXR0cmlidXRlcykpe1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFwiUGFzcyBwYXJlbnQgd2lkZ2V0IHRvIHRoZSBBdHRyaWJ1dGVDb25uZWN0b3JcIlxuICAgIH1cblxuICAgIGRpc3BhdGNoQ3JlYXRlVGFibGUgPSAoKT0+e1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcbiAgICAgICAgaWYgKHByb3BzKXtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hDaGVjaGVkTGF5ZXJzID0gKGNoZWNrZWRMYXllcnM6c3RyaW5nW10pPT57XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xuICAgICAgICBpZiAocHJvcHMpe1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY2hlY2tlZExheWVyc1wiLGNoZWNrZWRMYXllcnMpKTtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hGaWx0ZXJWYWx1ZSA9IChmaWx0ZXJWYWx1ZTpudW1iZXIpPT57XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xuICAgICAgICBpZiAocHJvcHMpe1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZmlsdGVyVmFsdWVcIiwgZmlsdGVyVmFsdWUpKTtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvcjsiLCJcbmltcG9ydCB7UmVhY3R9IGZyb20gJ2ppbXUtY29yZSc7XG5cbmV4cG9ydCBjb25zdCBDYWxsVG9BY3Rpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5leHBvcnQgY29uc3QgTGF5ZXJTZWxlY3RDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5leHBvcnQgY29uc3QgVGFibGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5leHBvcnQgY29uc3QgQWRkVGFibGVTZXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7IiwiaW1wb3J0IHtCdXR0b24sT3B0aW9uLFNlbGVjdCx9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2VcIjtcbmltcG9ydCBSZWFjdFJlc2l6ZURldGVjdG9yIGZyb20gXCIuLi9saWIvUmVzaXplRGV0ZWN0b3JcIjtcbmltcG9ydCB7cXVlcnlDb25zdHJ1Y3Rvck51bWJlcixxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLH0gZnJvbSBcIi4uL3V0aWxzL3F1ZXJ5VGFibGVWYWx1ZVwiO1xuaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBDb21tb25TZWNvbmRDb25zdHJ1Y3RvciBmcm9tIFwiLi9jb21tb24vaW5wdXRzL2NvbW1vblNlY29uZENvbnN0cnVjdG9yXCI7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuLi93aWRnZXRcIjtcblxuZnVuY3Rpb24gQWRkU2V0VGFibGUocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGxpc3QsXG4gICAgaGFuZGxlVGhpcmRRdWVyeSxcbiAgICB0ZXh0SW5wdXRIYW5kbGVyLFxuICAgIG11bHRpU2VsZWN0SGFuZGxlcixcbiAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxuICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcixcbiAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyLFxuICAgIGRyb3Bkb3duVmFsdWVRdWVyeSxcbiAgICBoYW5kbGVDaGVja0JveCxcbiAgICBpc0NoZWNrZWQsXG4gICAgY291bnRlcklzQ2hlY2tlZCxcbiAgICBkcm9wRG93blRvZ2dsZXIsXG4gICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLFxuICAgIGNoZWNrZWRUb1F1ZXJ5LFxuICAgIGRlbGV0ZVRhYmxlLFxuICAgIGdldFF1ZXJ5QXR0cmlidXRlLFxuICAgIC8vIGZvciBBZGQgc2V0IHRhYmxlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRhYmxlc1NldCxcbiAgICB0YWJsZXNTZXRJZCxcbiAgICB3aGVyZUNsYXVzZXNTZXQsXG4gICAgLy8gRW5kIGZvciBBZGQgc2V0IHRhYmxlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgIHRhYmxlcyxcbiAgICBnZXRRdWVyeSxcbiAgICB1bml2b2NvU2VsZWN0SGFuZGxlcixcbiAgICBkcm9wRG93bixcbiAgICBpc09wZW5Ecm9wRCxcbiAgICBvbkNoYW5nZUNoZWNrQm94LFxuICAgIG9wZW5Ecm9wLFxuICAgIGNsb3NlRHJvcCxcbiAgICBvcGVuZWQsXG4gICAgYXV0T3BlbixcbiAgICBtb3VzZWxlYXZlLFxuICAgIG9ubW91c2VMZWF2ZSxcbiAgICBkcm9wZG93bnNTZXQsXG4gICAgc2hvd0RlbGV0ZSxcbiAgICBibG9ja0lkLFxuICAgIGN1cnJlbnRUYWJsZSxcbiAgICBzaG93QmxvY2tEZWxldGUsXG4gICAgcXVlcnlDaGFuZ2VkLFxuICAgIHBhcmVudFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY3VycmVudHdoZXJlQ2xhdXNlc1NldCA9IHdoZXJlQ2xhdXNlc1NldC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSB0YWJsZXNTZXRJZCk7XG5cbiAgY29uc3Qgb25DaGFuZ2VDaGVja0JveFNldCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHNlbGY6V2lkZ2V0ID0gcGFyZW50O1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBsZXQgY3VycmVudElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMuaWQudmFsdWU7XG4gICAgbGV0IG9iamVjdElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBxdWVyeUluZGV4ID0gd2hlcmVDbGF1c2VzU2V0Lm1hcCgob2JqKSA9PiBvYmouaWQpLmluZGV4T2YoY3VycmVudElkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICB3aGVyZUNsYXVzZXNTZXQubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBjdXJyZW50SWQpIHtcbiAgICAgICAgICAgIGlmICghb2JqLmNoZWNrZWRMaXN0U2V0KSB7XG4gICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgICAgY2hlY2tlZExpc3RTZXQ6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZVNldCA9IHdoZXJlQ2xhdXNlc1NldC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0O1xuICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7d2hlcmVDbGF1c2VTZXQ6IEFycmF5LmZyb20obmV3IFNldChmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0KSksfSk7XG4gICAgICAgICAgICAgIC8vIHNlbGYuc2V0U3RhdGUoXG4gICAgICAgICAgICAgIC8vICAge1xuICAgICAgICAgICAgICAvLyAgICAgd2hlcmVDbGF1c2VTZXQ6IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQsXG4gICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgLy8gICAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgLy8gICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAvLyAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIC8vICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAvLyAgICAgICAgIG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldClcbiAgICAgICAgICAgICAgLy8gICAgICAgKSxcbiAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlmQWxyZWFkeUNoZWNrID0gb2JqLmNoZWNrZWRMaXN0U2V0XG4gICAgICAgICAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouY2hlY2tWYWx1ZSlcbiAgICAgICAgICAgICAgICAuaW5kZXhPZihldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgaWYgKGlmQWxyZWFkeUNoZWNrID09IC0xKSB7XG4gICAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZExpc3RTZXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4ub2JqLmNoZWNrZWRMaXN0U2V0LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gd2hlcmVDbGF1c2VzU2V0LmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkID09PSBvYmouaWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgb2JqIG9iamVjdCBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXNTZXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHVwZGF0ZWQgb2JqIG9iamVjdCB0byB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IHdoZXJlQ2xhdXNlc1NldDtcbiAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXNTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHt3aGVyZUNsYXVzZVNldDogQXJyYXkuZnJvbShuZXcgU2V0KHdoZXJlQ2xhdXNlc1NldCkpfSk7XG4gICAgICAgICAgICAgICAgLy8gc2VsZi5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2hlcmVDbGF1c2VTZXQ6IHdoZXJlQ2xhdXNlc1NldCxcbiAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdoZXJlQ2xhdXNlc1NldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgd2hlcmVDbGF1c2VTZXQ6IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQpXG4gICAgICAgICAgICAgICAgLy8gICAgICAgKSxcbiAgICAgICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIEZpbmQgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgY29uc3Qgb2JqID0gd2hlcmVDbGF1c2VzU2V0LmZpbmQoKGEpID0+IGEuaWQgPT09IGN1cnJlbnRJZCk7XG4gICAgICAvLyBSZW1vdmUgdGhlIGNoZWNrVmFsdWUgZnJvbSB0aGUgY2hlY2tlZExpc3QgYXJyYXlcbiAgICAgIG9iai5jaGVja2VkTGlzdFNldCA9IG9iai5jaGVja2VkTGlzdFNldC5maWx0ZXIoXG4gICAgICAgIChhKSA9PiBhLmNoZWNrVmFsdWUgIT09IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWVcbiAgICAgICk7XG4gICAgICAvLyBVcGRhdGUgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgY29uc3QgaW5kZXggPSB3aGVyZUNsYXVzZXNTZXQuZmluZEluZGV4KFxuICAgICAgICAoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkXG4gICAgICApO1xuICAgICAgd2hlcmVDbGF1c2VzU2V0W2luZGV4XSA9IG9iajtcbiAgICAgIHdoZXJlQ2xhdXNlc1NldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICB9KTtcbiAgICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gQXJyYXkuZnJvbShuZXcgU2V0KHdoZXJlQ2xhdXNlc1NldCkpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7d2hlcmVDbGF1c2VTZXQ6IEFycmF5LmZyb20obmV3IFNldCh3aGVyZUNsYXVzZXNTZXQpKSx9KTtcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICB3aGVyZUNsYXVzZVNldDogd2hlcmVDbGF1c2VzU2V0LFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICAoKSA9PiB7XG4gICAgICAvLyAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAvLyAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgLy8gICAgIH0pO1xuICAgICAgLy8gICAgIG5ld1doZXJlU2V0Q2xhdXNlID0gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQpKTtcbiAgICAgIC8vICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAvLyAgICAgICB3aGVyZUNsYXVzZVNldDogQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQpKSxcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gKTtcbiAgICB9XG4gICAgaWYgKG5ld1doZXJlU2V0Q2xhdXNlPy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50SWRcbiAgICAgICk7XG4gICAgICBzZWxmLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soY3VycmVudElkLCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgc21hbGxlcldpZHRoT3V0ZXJDb250YWluZXI6e1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICBnYXA6JzMlJyxcbiAgICAgIG1pbldpZHRoOicyODBweCcsXG4gICAgICBtYXJnaW5Cb3R0b206MjBcbiAgICB9LFxuICAgIHNtYWxsZXJXaWR0aElubmVyQ29udGFpbmVyOntcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGdhcDogXCI1cHhcIixcbiAgICAgIHdpZHRoOlwiODAlXCIsXG4gICAgfSxcbiAgICBzbWFsbGVyV2lkdGhRdWVyeUNvbnRhaW5lcjp7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfSxcbiAgICBsYXJnZXJXaWR0aE91dGVyQ29udGFpbmVyOntcbiAgICAgIHdpZHRoOlwiMTAwJVwiXG4gICAgfSxcbiAgICBsYXJnZXJXaWR0aElubmVyQ29udGFpbmVyOntcbiAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDpcInN0YXJ0XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOlwicm93XCIsXG4gICAgICBnYXA6XCIzJVwiLFxuICAgIH1cblxuICB9XG5cbiAgaWYgKGN1cnJlbnRUYWJsZS5pZCA9PT0gcGFyc2VJbnQodGFibGVzU2V0SWQuc3BsaXQoXCItXCIpWzBdKSAmJiFjdXJyZW50VGFibGUuZGVsZXRlZCkge1xuICAgIHJldHVybihcbiAgICAgIDxSZWFjdFJlc2l6ZURldGVjdG9yIGhhbmRsZVdpZHRoIGhhbmRsZUhlaWdodD5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xXCI+XG4gICAgICAgICAgICAgIHtsaXN0LmZpZWxkcyA/IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17d2lkdGggPD0gNjI1ID8gc3R5bGVzLnNtYWxsZXJXaWR0aE91dGVyQ29udGFpbmVyOnN0eWxlcy5sYXJnZXJXaWR0aE91dGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHt3aWR0aCA8PSA2MjUgPyBzdHlsZXMuc21hbGxlcldpZHRoSW5uZXJDb250YWluZXI6c3R5bGVzLmxhcmdlcldpZHRoSW5uZXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17d2lkdGggPD0gNjI1ID8gXCIgXCI6XCJjb2wtbWQtNFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+Z2V0UXVlcnlBdHRyaWJ1dGUoZSxcInNldFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0LmZpZWxkcy5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJvaWRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJzbWFsbC1pbnRlZ2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwiaW50ZWdlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImRvdWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZT17ZWwudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC5hbGlhc30gKHtlbC50eXBlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt3aWR0aCA8PSA2MjUgPyBcIiBcIjpcImNvbC1tZC00XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt3aWR0aCA8PSA2MjUgPyBzdHlsZXMuc21hbGxlcldpZHRoUXVlcnlDb250YWluZXI6e319XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KGUpID0+IGdldFF1ZXJ5KGUsIFwic2luZ2xlXCIpfSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudHdoZXJlQ2xhdXNlc1NldCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50d2hlcmVDbGF1c2VzU2V0LmF0dHJpYnV0ZVF1ZXJ5VHlwZSA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcXVlcnlDb25zdHJ1Y3RvclN0cmluZy5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIubWFwKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbW1vblNlY29uZENvbnN0cnVjdG9yIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlciA9IHt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtSGFuZGxlciA9IHtkcm9wZG93bkl0ZW1IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyID0ge3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIgPSB7dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQgPSB7Y291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCA9IHtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNJZCA9IHt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcyA9IHt3aGVyZUNsYXVzZXNTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93blRvZ2dsZXIgPSB7ZHJvcERvd25Ub2dnbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIgPSB7dW5pdm9jb1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93biA9IHtkcm9wRG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbkRyb3BEID0ge2lzT3BlbkRyb3BEfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveCA9IHtvbkNoYW5nZUNoZWNrQm94U2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DaGFuZ2VDaGVja0JveCA9IHtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3AgPSB7b3BlbkRyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURyb3AgPSB7Y2xvc2VEcm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRPcGVuID0ge2F1dE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmUgPSB7b25tb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zID0ge2Ryb3Bkb3duc1NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0ge3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlDaGFuZ2VkID0ge3F1ZXJ5Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHtwYXJlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVR5cGUgPSBcInNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAod2lkdGggPj0gNjI2ICYmIHNob3dEZWxldGUpICYmIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3t9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtkZWxldGVUYWJsZX0gaWNvbj48Q2xvc2VPdXRsaW5lZCAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICh3aWR0aCA8PSA2MjUgJiYgc2hvd0RlbGV0ZSkgJiYgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfSBpY29uPjxDbG9zZU91dGxpbmVkIC8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgKFwiIFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3RSZXNpemVEZXRlY3Rvcj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFNldFRhYmxlO1xuIiwiaW1wb3J0IHtCdXR0b24sT3B0aW9uLFNlbGVjdH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZVwiO1xuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSBcIi4uL2xpYi9SZXNpemVEZXRlY3RvclwiO1xuaW1wb3J0IHtxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmd9IGZyb20gXCIuLi91dGlscy9xdWVyeVRhYmxlVmFsdWVcIjtcbmltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgQ29tbW9uU2Vjb25kQ29uc3RydWN0b3IgZnJvbSBcIi4vY29tbW9uL2lucHV0cy9jb21tb25TZWNvbmRDb25zdHJ1Y3RvclwiO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vd2lkZ2V0XCI7XG5cbmZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBsaXN0LFxuICAgIGhhbmRsZVRoaXJkUXVlcnksXG4gICAgdGV4dElucHV0SGFuZGxlcixcbiAgICBtdWx0aVNlbGVjdEhhbmRsZXIsXG4gICAgZHJvcGRvd25JdGVtSGFuZGxlcixcbiAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIsXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcbiAgICBkcm9wZG93blZhbHVlUXVlcnksXG4gICAgaGFuZGxlQ2hlY2tCb3gsXG4gICAgaXNDaGVja2VkLFxuICAgIGNvdW50ZXJJc0NoZWNrZWQsXG4gICAgZHJvcERvd25Ub2dnbGVyLFxuICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCxcbiAgICBjaGVja2VkVG9RdWVyeSxcbiAgICBkZWxldGVUYWJsZSxcbiAgICB0YWJsZXNJZCxcbiAgICBnZXRRdWVyeUF0dHJpYnV0ZSxcbiAgICB3aGVyZUNsYXVzZXMsXG4gICAgdGFibGVzLFxuICAgIGdldFF1ZXJ5LFxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgIGRyb3BEb3duLFxuICAgIGlzT3BlbkRyb3BELFxuICAgIC8vIG9uQ2hhbmdlQ2hlY2tCb3gsXG4gICAgb3BlbkRyb3AsXG4gICAgY2xvc2VEcm9wLFxuICAgIG9wZW5lZCxcbiAgICBhdXRPcGVuLFxuICAgIG1vdXNlbGVhdmUsXG4gICAgb25tb3VzZUxlYXZlLFxuICAgIGRyb3Bkb3ducyxcbiAgICBjdXJyZW50VGFibGUsXG4gICAgcXVlcnlDaGFuZ2VkLFxuICAgIHBhcmVudFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY3VycmVudHdoZXJlQ2xhdXNlcyA9IHdoZXJlQ2xhdXNlcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBgJHt0YWJsZXNJZH1gKTtcblxuICBjb25zdCBvbkNoYW5nZUNoZWNrQm94ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2VsZjpXaWRnZXQgPSBwYXJlbnQ7XG4gICAgbGV0IGN1cnJlbnRJZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuICAgIGxldCBvYmplY3RJZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLnZhbHVlLnZhbHVlO1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgcXVlcnlJbmRleCA9IHdoZXJlQ2xhdXNlc1xuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoY3VycmVudElkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICB3aGVyZUNsYXVzZXMubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBxdWVyeUluZGV4LnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgIGlmICghb2JqLmNoZWNrZWRMaXN0KSB7XG4gICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAuLi5vYmosXG4gICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB3aGVyZUNsYXVzZXMuZmlsdGVyKChhKSA9PiBhLmlkICE9PSBvYmouaWQpO1xuICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7d2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQoZmlsdGVyZWRXaGVyZUNsYXVzZXMpKX0pO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcImNoZWNrIGZpbHRlcmVkIHdoZXJlY2xhdXNlIGZpcnN0XCIpXG4gICAgICAgICAgICAgIC8vIHNlbGYuc2V0U3RhdGUoe3doZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXN9LFxuICAgICAgICAgICAgICAvLyAgICgpID0+IHtcbiAgICAgICAgICAgICAgLy8gICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgLy8gICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgICAvLyAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAvLyAgICAgc2VsZi5zZXRTdGF0ZSh7d2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQoZmlsdGVyZWRXaGVyZUNsYXVzZXMpKX0pO1xuICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGlmQWxyZWFkeUNoZWNrID0gb2JqLmNoZWNrZWRMaXN0XG4gICAgICAgICAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouY2hlY2tWYWx1ZSlcbiAgICAgICAgICAgICAgICAuaW5kZXhPZihldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlKTtcbiAgICAgICAgICAgICAgaWYgKGlmQWxyZWFkeUNoZWNrID09IC0xKSB7XG4gICAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4ub2JqLmNoZWNrZWRMaXN0LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgaW5kZXggb2YgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gd2hlcmVDbGF1c2VzLmZpbmRJbmRleCgoYSkgPT4gYS5pZCA9PT0gb2JqLmlkKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG9iaiBvYmplY3QgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSB1cGRhdGVkIG9iaiBvYmplY3QgdG8gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7d2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQod2hlcmVDbGF1c2VzKSl9KVxuICAgICAgICAgICAgICAgIC8vIHNlbGYuc2V0U3RhdGUoe3doZXJlQ2xhdXNlczogd2hlcmVDbGF1c2VzfSxcbiAgICAgICAgICAgICAgICAvLyAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuc2V0U3RhdGUoe3doZXJlQ2xhdXNlczogQXJyYXkuZnJvbShuZXcgU2V0KHdoZXJlQ2xhdXNlcykpLFxuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgLy8gRmluZCB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICBjb25zdCBvYmogPSB3aGVyZUNsYXVzZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkKTtcbiAgICAgIC8vIFJlbW92ZSB0aGUgY2hlY2tWYWx1ZSBmcm9tIHRoZSBjaGVja2VkTGlzdCBhcnJheVxuICAgICAgb2JqLmNoZWNrZWRMaXN0ID0gb2JqLmNoZWNrZWRMaXN0LmZpbHRlcihcbiAgICAgICAgKGEpID0+IGEuY2hlY2tWYWx1ZSAhPT0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZVxuICAgICAgKTtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICBjb25zdCBpbmRleCA9IHdoZXJlQ2xhdXNlcy5maW5kSW5kZXgoXG4gICAgICAgIChhKSA9PiBhLmlkID09PSBjdXJyZW50SWRcbiAgICAgICk7XG4gICAgICB3aGVyZUNsYXVzZXNbaW5kZXhdID0gb2JqO1xuICAgICAgd2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgIH0pO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7d2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQod2hlcmVDbGF1c2VzKSl9KTtcbiAgICAgIC8vIHNlbGYuc2V0U3RhdGUoe3doZXJlQ2xhdXNlczp3aGVyZUNsYXVzZXN9LFxuICAgICAgLy8gICAoKSA9PiB7XG4gICAgICAvLyAgICAgd2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIC8vICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAvLyAgICAgfSk7XG4gICAgICAvLyAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgLy8gICAgIHNlbGYuc2V0U3RhdGUoe3doZXJlQ2xhdXNlczogQXJyYXkuZnJvbShuZXcgU2V0KHdoZXJlQ2xhdXNlcykpfSk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBzbWFsbGVyV2lkdGhPdXRlckNvbnRhaW5lcjp7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgIGdhcDonMyUnLFxuICAgICAgbWluV2lkdGg6JzI4MHB4JyxcbiAgICAgIG1hcmdpbkJvdHRvbToyMFxuICAgIH0sXG4gICAgc21hbGxlcldpZHRoSW5uZXJDb250YWluZXI6e1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgZ2FwOiBcIjVweFwiLFxuICAgICAgd2lkdGg6XCI4MCVcIixcbiAgICB9LFxuICAgIHNtYWxsZXJXaWR0aFF1ZXJ5Q29udGFpbmVyOntcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGxhcmdlcldpZHRoT3V0ZXJDb250YWluZXI6e1xuICAgICAgd2lkdGg6XCIxMDAlXCJcbiAgICB9LFxuICAgIGxhcmdlcldpZHRoSW5uZXJDb250YWluZXI6e1xuICAgICAgZGlzcGxheTpcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgIGp1c3RpZnlDb250ZW50Olwic3RhcnRcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbiAgICAgIGdhcDpcIjMlXCIsXG4gICAgfVxuICB9XG5cbiAgaWYgKGN1cnJlbnRUYWJsZS5pZCA9PT0gdGFibGVzSWQgJiYgIWN1cnJlbnRUYWJsZS5kZWxldGVkKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPFJlYWN0UmVzaXplRGV0ZWN0b3IgaGFuZGxlV2lkdGggaGFuZGxlSGVpZ2h0PlxuICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5cbiAgICAgICAgICAgICAge2xpc3QuZmllbGRzID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt3aWR0aCA8PSA2MjUgPyBzdHlsZXMuc21hbGxlcldpZHRoT3V0ZXJDb250YWluZXI6c3R5bGVzLmxhcmdlcldpZHRoT3V0ZXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3dpZHRoIDw9IDYyNSA/IHN0eWxlcy5zbWFsbGVyV2lkdGhJbm5lckNvbnRhaW5lcjpzdHlsZXMubGFyZ2VyV2lkdGhJbm5lckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt3aWR0aCA8PSA2MjUgPyBcIiBcIjpcImNvbC1tZC00XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5nZXRRdWVyeUF0dHJpYnV0ZShlLFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgY2FtcG9cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovfVxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3QuZmllbGRzLm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcIm9pZFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcInNtYWxsLWludGVnZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJpbnRlZ2VyXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwiZG91YmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtlbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPXtlbC50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmFsaWFzfSAoe2VsLnR5cGV9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3dpZHRoIDw9IDYyNSA/IFwiIFwiOlwiY29sLW1kLTRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3dpZHRoIDw9IDYyNSA/IHN0eWxlcy5zbWFsbGVyV2lkdGhRdWVyeUNvbnRhaW5lcjp7fX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZ2V0UXVlcnkoZSwgXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGNhbXBvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR3aGVyZUNsYXVzZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudHdoZXJlQ2xhdXNlcy5hdHRyaWJ1dGVRdWVyeVR5cGUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcubWFwKChvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLm1hcCgobywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxDb21tb25TZWNvbmRDb25zdHJ1Y3RvciBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRoaXJkUXVlcnk9e2hhbmRsZVRoaXJkUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlTZWxlY3RIYW5kbGVyPXttdWx0aVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyPXt0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXt0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5PXtkcm9wZG93blZhbHVlUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja0JveD17aGFuZGxlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQ9e2NvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQ9e2Z1bmN0aW9uQ291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRUb1F1ZXJ5PXtjaGVja2VkVG9RdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcz17d2hlcmVDbGF1c2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzSWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXtkcm9wRG93blRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dW5pdm9jb1NlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93bj17ZHJvcERvd259XG4gICAgICAgICAgICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17aXNPcGVuRHJvcER9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUNoZWNrQm94PXtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3A9e29wZW5Ecm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXtjbG9zZURyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e29wZW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dE9wZW49e2F1dE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXttb3VzZWxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25tb3VzZUxlYXZlPXtvbm1vdXNlTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bnM9e2Ryb3Bkb3duc31cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Q2hhbmdlZCA9IHtxdWVyeUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSB7cGFyZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlUeXBlID0gXCJzaW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID49IDYyNiAmJiA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtkZWxldGVUYWJsZX0gaWNvbj48Q2xvc2VPdXRsaW5lZCAvPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA8PSA2MjUgJiYgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfSBpY29uPjxDbG9zZU91dGxpbmVkIC8+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgKFwiIFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3RSZXNpemVEZXRlY3Rvcj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIiwiaW1wb3J0IFF1ZXJ5IGZyb20gJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5JztcbmltcG9ydCB7UmVhY3QsanN4fSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgeyBDYWxsVG9BY3Rpb25Db250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb250ZXh0QXBpJztcbmltcG9ydCAnLi4vLi4vc3R5bGUuY3NzJztcbmltcG9ydCBoZWxwZXIgZnJvbSAnLi4vLi4vY29ubmVjdG9yJ1xuaW1wb3J0IFdpZGdldCBmcm9tICcuLi93aWRnZXQnO1xuaW1wb3J0IGdlb21ldHJ5RW5naW5lIGZyb20gJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnO1xuaW1wb3J0IFBvbHlnb24gZnJvbSBcImVzcmkvZ2VvbWV0cnkvUG9seWdvblwiO1xuXG50eXBlIFByb3BzVHlwZSA9IHt3aWR0aDpudW1iZXIsZnVuY3Rpb25SZWZyZXNoOigpPT52b2lkfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsVG9BY3Rpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzVHlwZSxhbnk+e1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZT86IFJlYWN0LkNvbnRleHQ8YW55PiA9IENhbGxUb0FjdGlvbkNvbnRleHQ7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6UHJvcHNUeXBlKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZW5kUXVlcnkgPSB0aGlzLnNlbmRRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkQmxvY2sgPSB0aGlzLmFkZEJsb2NrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRUYWJsZSA9IHRoaXMuYWRkVGFibGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbiA9IHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kUXVlcnlTZXQgPSB0aGlzLnNlbmRRdWVyeVNldC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXN5bmMgc2VuZFF1ZXJ5KCkge1xuICAgIGNvbnN0IHNlbGY6V2lkZ2V0ID0gdGhpcy5jb250ZXh0LnBhcmVudDtcbiAgICAgICAgc2VsZi5xdWVyeUFycmF5ID0gW107XG4gICAgICAgIHNlbGYub3V0ZmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IGNoZWNrZWRRdWVyeSA9IFtcbiAgICAgICAgICBcImlzIG51bGxcIixcbiAgICAgICAgICBcImlzIG5vdCBudWxsXCIsXG4gICAgICAgICAgXCJJTlwiLFxuICAgICAgICAgIFwiTk9UX0lOXCIsXG4gICAgICAgICAgXCJpbmNsdWRlZFwiLFxuICAgICAgICAgIFwiaXNfbm90X2luY2x1ZGVkXCIsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGxpa2VseVF1ZXJ5ID0gW1wiTElLRSVcIiwgXCIlTElLRVwiLCBcIiVMSUtFJVwiLCBcIk5PVCBMSUtFXCJdO1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LndoZXJlQ2xhdXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LkFuZE9yID09PSBcIkFORFwiKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQud2hlcmVDbGF1c2VzLmZvckVhY2goKGVsLCBpZCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlUXVlcnkgPSBlbC5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xuICAgICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImlzIG51bGxcIiB8fCBxdWVyeVZhbHVlID09PSBcImlzIG5vdCBudWxsXCIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgZWwuY2hlY2tlZExpc3QuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaW5jbHVkZWRcIiB8fFxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCJcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7Zmlyc3RUeHQ6IGVsLmZpcnN0VHh0LnZhbHVlLHNlY29uZFR4dDogZWwuc2Vjb25kVHh0LnZhbHVlfTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5qaW11TWFwVmlldykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLmNvbnRleHQuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmppbXVNYXBWaWV3LnZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAud2hlbkxheWVyVmlldyhmKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5BbmRPcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnk6IGFueSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LndoZXJlQ2xhdXNlcy5mb3JFYWNoKChlbCwgaWQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XG4gICAgICAgICAgICAgIGxldCBxdWVyeVZhbHVlID0gZWwucXVlcnlWYWx1ZTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpcyBudWxsXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpcyBub3QgbnVsbFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gJHtxdWVyeVZhbHVlfWA7XG4gICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUluO1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBlbC5jaGVja2VkTGlzdC5mb3JFYWNoKChlbCkgPT4gdmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgaWYgKGhlbHBlci5jb250YWluc0FueUxldHRlcnModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSBJTiAoJHtcbiAgICAgICAgICAgICAgICAgICAgXCInXCIgKyB2YWx1ZS5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXG4gICAgICAgICAgICAgICAgICB9KWA7XG4gICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW47XG4gICAgICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSBJTiAoJHt2YWx1ZS5qb2luKFwiLFwiKX0pYDtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbjtcbiAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpc19ub3RfaW5jbHVkZWRcIikge1xuICAgICAgICAgICAgICAgIGxldCBxdWVyeUluO1xuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaW5jbHVkZWRcIlxuICAgICAgICAgICAgICAgICAgPyAocXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSA+ICR7ZWwuZmlyc3RUeHQudmFsdWV9IEFORCAke2F0dHJpYnV0ZVF1ZXJ5fSA8ICR7ZWwuc2Vjb25kVHh0LnZhbHVlfWApXG4gICAgICAgICAgICAgICAgICA6IChxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IDwgJHtlbC5maXJzdFR4dC52YWx1ZX0gT1IgJHthdHRyaWJ1dGVRdWVyeX0gPiAke2VsLnNlY29uZFR4dC52YWx1ZX1gKTtcbiAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW47XG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGxpa2VseVF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IGhlbHBlci5saWtlbHlRdWVyeShcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaGVscGVyLmNvbnRhaW5zQW55TGV0dGVycyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5SW5wdXQgPSBgJHthdHRyaWJ1dGVRdWVyeX0gJHtxdWVyeVZhbHVlfSAnJHt2YWx1ZX0nYDtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUlucHV0O1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW5wdXQpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHF1ZXJ5SW5wdXQgPSBgJHthdHRyaWJ1dGVRdWVyeX0gJHtxdWVyeVZhbHVlfSAke3ZhbHVlfWA7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUlucHV0KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5qaW11TWFwVmlldykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLmNvbnRleHQuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmppbXVNYXBWaWV3LnZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAud2hlbkxheWVyVmlldyhmKVxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlSZXF1ZXN0OiBcIk9SXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyOiBmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBBbmRPcjogdGhpcy5jb250ZXh0LkFuZE9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRleHQuU2V0QmxvY2subGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5qaW11TWFwVmlldykge1xuICAgICAgICAgICAgc2VsZi5xdWVyeUFycmF5ID0gW107XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLmNvbnRleHQuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBuZXcgUXVlcnkoKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlSZXF1ZXN0OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBsYXllcjogZixcbiAgICAgICAgICAgICAgICAgICAgQW5kT3I6IHRoaXMuY29udGV4dC5BbmRPcixcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogXCJzZXRRdWVyeVwiLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHsgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSB9KTtcbiAgICAgICAgICBzZWxmLnJldHVyblRvT3JpZ2luYWxFeHRlbnQoKTtcbiAgICAgICAgfVxuICB9XG5cbiAgcXVlcnlDb25zdHJ1Y3RvciA9IChcbiAgICBsYXllclZpZXcsXG4gICAgZmlyc3RRdWVyeSxcbiAgICBxdWVyeVJlcXVlc3QsXG4gICAgc2Vjb25kUXVlcnlUYXJnZXQsXG4gICAgQW5kT3IsXG4gICAgLy8gY29ubmVjdG9yX2Z1bmN0aW9uLFxuICAgIGxheWVyLFxuICAgIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCJcbiAgKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICBjb25zdCB2YWx1ZXMgPSBzZWNvbmRRdWVyeVRhcmdldDtcbiAgICBjb25zdCBzZWxmOldpZGdldCA9IHRoaXMuY29udGV4dC5wYXJlbnQ7XG4gICAgc3dpdGNoIChxdWVyeVJlcXVlc3QpIHtcbiAgICAgIGNhc2UgXCJMSUtFJVwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xuICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiJUxJS0VcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIiVMSUtFJVwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk5PVCBMSUtFXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gTk9UIExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzIG51bGxcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBpcyBudWxsYDtcbiAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlzIG5vdCBudWxsXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gaXMgbm90IG51bGxgO1xuICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSU5cIjpcbiAgICAgICAgaWYgKGhlbHBlci5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtcIidcIiArIHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCInLCAnXCIpICsgXCInXCJ9KWA7XG4gICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGhlbHBlci5jaGVja1BhcmVudGhlc2lzKHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gaGVscGVyLmxvb3BUb0dldFN0cmluZyhzZWNvbmRRdWVyeVRhcmdldCk7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IElOICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTk9UX0lOXCI6XG4gICAgICAgIGlmIChoZWxwZXIuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYE5PVCAke2ZpcnN0UXVlcnl9IElOICgke1wiJ1wiICsgc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIicsICdcIikgKyBcIidcIn0pYDtcbiAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcbiAgICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaGVscGVyLmNoZWNrUGFyZW50aGVzaXMoc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIikpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSBoZWxwZXIubG9vcFRvR2V0U3RyaW5nKHNlY29uZFF1ZXJ5VGFyZ2V0KTtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYE5PVCAgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzdHJpbmdGaWVkVmFsdWV9KWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYE5PVCAgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XG4gICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaW5jbHVkZWRcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgKCR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBBTkQgJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fSlgO1xuICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaXNfbm90X2luY2x1ZGVkXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCgke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gT1IgJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuc2Vjb25kVHh0fSlgO1xuICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoaGVscGVyLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAnJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBicmFja2V0cyA9IFtcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiXTtcbiAgICAgICAgICBpZiAoYnJhY2tldHMuaW5jbHVkZXMoc2Vjb25kUXVlcnlUYXJnZXQuY2hhckF0KDApKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gSlNPTi5zdHJpbmdpZnkoc2Vjb25kUXVlcnlUYXJnZXQpLnJlcGxhY2UoL1wiL2csIGAnYClcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25uZWN0b3JfZnVuY3Rpb24gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGxheWVyVmlldyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgdmFsdWVzLFxuICAgICAgbGF5ZXIsXG4gICAgICBBbmRPcixcbiAgICAgIGZpZWxkLFxuICAgICAgc291cmNlLFxuICAgIH0gPSBkYXRhO1xuICAgIGNvbnN0IHNlbGY6V2lkZ2V0ID0gdGhpcy5jb250ZXh0LnBhcmVudDtcbiAgICBpZiAodGhpcy5jb250ZXh0LmhpZ2xpZ2h0U2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICBzZWxmLmNsZWFySGlnaGxpZ2h0cyhsYXllclZpZXcpO1xuICAgICAgdGhpcy5jb250ZXh0LmhpZ2xpZ2h0U2VsZWN0ZWQuZm9yRWFjaCgoaGlnaGxpZ2h0KSA9PiB7XG4gICAgICAgIGhpZ2hsaWdodC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0cyA9IHsgZmVhdHVyZXM6IFtdIH07XG4gICAgbGV0IGFkZGl0aW9uYWxRdWVyeSA9IG51bGw7XG4gICAgaWYgKHNvdXJjZSA9PT0gXCJzaW5nbGVRdWVyeVwiKSB7XG4gICAgICBhZGRpdGlvbmFsUXVlcnkgPSBxdWVyeS53aGVyZTtcbiAgICAgIGlmIChzZWxmLnF1ZXJ5QXJyYXkubGVuZ3RoIDwgdGhpcy5jb250ZXh0LndoZXJlQ2xhdXNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGFkZGl0aW9uYWxRdWVyeSA9IHF1ZXJ5LndoZXJlICsgXCIgXCIgKyBBbmRPcjtcbiAgICAgIH1cbiAgICAgIHNlbGYucXVlcnlBcnJheS5wdXNoKGFkZGl0aW9uYWxRdWVyeSk7XG4gICAgICBzZWxmLm91dGZpZWxkcy5wdXNoKGAke2ZpZWxkfWApO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBzZWxmLnF1ZXJ5QXJyYXkubGVuZ3RoID49IHRoaXMuY29udGV4dC53aGVyZUNsYXVzZXMubGVuZ3RoIHx8XG4gICAgICBzb3VyY2UgPT09IFwic2V0UXVlcnlcIlxuICAgICkge1xuICAgICAgbGV0IGN1cnJlbnRRdWVyeSA9IG51bGw7XG4gICAgICBpZiAoc2VsZi5xdWVyeUFycmF5Lmxlbmd0aCkgY3VycmVudFF1ZXJ5ID0gc2VsZi5xdWVyeUFycmF5LmpvaW4oXCIgXCIpO1xuICAgICAgaWYgKHRoaXMuY29udGV4dC53aGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHsgc2V0UXVlcnlTdHJpbmcsIG91dEZpZWxkcyB9ID0gdGhpcy5zZW5kUXVlcnlTZXQoKTtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gXCJzaW5nbGVRdWVyeVwiKSB7XG4gICAgICAgICAgaWYgKHNldFF1ZXJ5U3RyaW5nKVxuICAgICAgICAgICAgY3VycmVudFF1ZXJ5ICs9IFwiIFwiICsgQW5kT3IgKyBcIiBcIiArIFwiKFwiICsgc2V0UXVlcnlTdHJpbmcgKyBcIilcIjtcbiAgICAgICAgICBpZiAob3V0RmllbGRzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNlbGYub3V0ZmllbGRzID0gc2VsZi5vdXRmaWVsZHMuY29uY2F0KG91dEZpZWxkcyk7XG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHNlbGYub3V0ZmllbGRzKTtcbiAgICAgICAgICAgIHNlbGYub3V0ZmllbGRzID0gQXJyYXkuZnJvbShzZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2V0UXVlcnlTdHJpbmcpIGN1cnJlbnRRdWVyeSA9IHNldFF1ZXJ5U3RyaW5nO1xuICAgICAgICAgIGlmIChvdXRGaWVsZHM/Lmxlbmd0aCkgc2VsZi5vdXRmaWVsZHMgPSBvdXRGaWVsZHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghc2VsZi5vdXRmaWVsZHMuaW5jbHVkZXMoXCJPQkpFQ1RJRFwiKSlzZWxmLm91dGZpZWxkcy5wdXNoKFwiT0JKRUNUSURcIik7XG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSBzZWxmLm91dGZpZWxkcztcbiAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcbiAgICAgIHF1ZXJ5LndoZXJlID0gY3VycmVudFF1ZXJ5O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0cyA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChsYXllclZpZXc/LnF1ZXJ5RmVhdHVyZXMpXG4gICAgICAgICAgcmVzdWx0cyA9IGF3YWl0IGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXllcj8ucXVlcnlGZWF0dXJlcykgcmVzdWx0cyA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgbGV0IGNoZWNrZWRMYXllcl8gPSBbZGF0YS5sYXllclZpZXcubGF5ZXIuaWRdO1xuICAgICAgY29uc3QgaGlnaGxpZ2h0SWRzID0gaGVscGVyLmdldEhpZ2hsaWdodGVkSWRzKHJlc3VsdHMuZmVhdHVyZXMpO1xuICAgICAgaWYgKGhpZ2hsaWdodElkcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaGlnbGlnaHRTZWxlY3RlZEFyciA9IFtdO1xuICAgICAgICBoaWdobGlnaHRJZHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICBjb25zdCBoaWdobGlnaHRTZWxlY3RlZCA9IGxheWVyVmlldy5oaWdobGlnaHQoZWwpO1xuICAgICAgICAgIGhpZ2xpZ2h0U2VsZWN0ZWRBcnIucHVzaChoaWdobGlnaHRTZWxlY3RlZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBhcnJheUdlb21ldHJ5ID0gW107XG4gICAgICAgICAgcmVzdWx0cy5mZWF0dXJlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZWwuZ2VvbWV0cnksIDEsIFwibWV0ZXJzXCIpO1xuICAgICAgICAgICAgYXJyYXlHZW9tZXRyeS5wdXNoKG5ld0dlb21ldHJ5KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaWZpZWRHZW9tdHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuamltdU1hcFZpZXcudmlldy5nb1RvKHVuaWZpZWRHZW9tdHJ5LmV4dGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyBoaWdsaWdodFNlbGVjdGVkOiBoaWdsaWdodFNlbGVjdGVkQXJyIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RlZExheWVyc0NvbnRlbnRzID0gaGVscGVyLmdldFNlbGVjdGVkQ29udGVudHNMYXllcihbcmVzdWx0cy5mZWF0dXJlc10sY2hlY2tlZExheWVyXyk7XG4gICAgICBjb25zdCBudW1iZXJPZkF0dHJpYnV0ZXMgPSBoZWxwZXIuZ2V0TnVtYmVyT2ZBdHRyaWJ1dGVzKHNlbGVjdGVkTGF5ZXJzQ29udGVudHMpO1xuICAgICAgbGV0IGFjdGl2ZVYgPSB0aGlzLmNvbnRleHQuamltdU1hcFZpZXc7XG4gICAgICBzZWxmLnNldFN0YXRlKHsgbGF5ZXJDb250ZW50czogc2VsZWN0ZWRMYXllcnNDb250ZW50cyxjaGVja2VkTGF5ZXJfOiBjaGVja2VkTGF5ZXJffSk7XG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZExheWVyXzogY2hlY2tlZExheWVyXyB9KTtcbiAgICAgIGNvbnN0IGdlb21ldHJ5ID0gUG9seWdvbi5mcm9tRXh0ZW50KGxheWVyVmlldy52aWV3LmV4dGVudCkudG9KU09OKCk7XG4gICAgICBjb25zdCBsYXllck9wZW4gPSB7Z2VvbWV0cnk6IGdlb21ldHJ5LHR5cGVTZWxlY3RlZDogXCJjb250YWluc1wifTtcbiAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCkge1xuICAgICAgICBzZWxmLmN1cnJlbnRMYXllclZpZXcgPSBsYXllclZpZXc7XG4gICAgICAgIGNvbnN0IGlzTGF5ZXJDaGVja2VkID0gdGhpcy5jb250ZXh0LmlzQXR0cmlidXRlVGFibGVDbG9zZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSBzZWxmLmdldEFsbENoZWNrZWRMYXllcnMoKTtcbiAgICAgICAgc2VsZi5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5pbml0KHtcbiAgICAgICAgICByZXN1bHRzOiBbcmVzdWx0cy5mZWF0dXJlc10sXG4gICAgICAgICAgYWxsQ2hlY2tlZExheWVyczogYWxsQ2hlY2tlZExheWVycyxcbiAgICAgICAgICBpc0xheWVyQ2hlY2tlZDogaXNMYXllckNoZWNrZWQsXG4gICAgICAgICAgY2hlY2tlZExheWVyczogY2hlY2tlZExheWVyXyxcbiAgICAgICAgICBudW1iZXJPZkF0dHJpYnV0ZXM6IG51bWJlck9mQXR0cmlidXRlcyxcbiAgICAgICAgICBsYXllck9wZW46IGxheWVyT3BlbixcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiBmYWxzZSB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzZWxmLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmRpc3BhdGNoaW5nQWxsKCk7XG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IGl0ZW1Ob3RGb3VuZDogbnVsbCB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikgc2VsZi5zZXRTdGF0ZSh7IGl0ZW1Ob3RGb3VuZDogc2VsZi5ubHMoZXJyKSB9KTtcbiAgICAgICAgICBzZWxmLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHsgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSB9KTtcbiAgICAgICAgICBzZWxmLnJldHVyblRvT3JpZ2luYWxFeHRlbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe2lzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUsaXRlbU5vdEZvdW5kOnNlbGYubmxzKFwibm9JdGVtU2VsZWN0ZWRcIiksfSk7XG4gICAgICAgIHNlbGYucmV0dXJuVG9PcmlnaW5hbEV4dGVudCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzZW5kUXVlcnlTZXQoKSB7XG4gICAgY29uc3QgY2hlY2tlZFF1ZXJ5ID0gW1xuICAgICAgXCJpcyBudWxsXCIsXG4gICAgICBcImlzIG5vdCBudWxsXCIsXG4gICAgICBcIklOXCIsXG4gICAgICBcIk5PVF9JTlwiLFxuICAgICAgXCJpbmNsdWRlZFwiLFxuICAgICAgXCJpc19ub3RfaW5jbHVkZWRcIixcbiAgICBdO1xuICAgIGNvbnN0IGxpa2VseVF1ZXJ5ID0gW1wiTElLRSVcIiwgXCIlTElLRVwiLCBcIiVMSUtFJVwiLCBcIk5PVCBMSUtFXCJdO1xuICAgIGNvbnN0IHNlbGY6V2lkZ2V0ID0gdGhpcy5jb250ZXh0LnBhcmVudDtcbiAgICBsZXQgc2V0UXVlcnlTdHJpbmcgPSBudWxsO1xuICAgIGxldCBvdXRGaWVsZHMgPSBbXTtcbiAgICBpZiAodGhpcy5jb250ZXh0LlNldEJsb2NrLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb250ZXh0LlNldEJsb2NrLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrSWQgPSBibG9jaz8uYmxvY2tJZDtcbiAgICAgICAgY29uc3Qgd2hlcmVDbGF1c2VTZXQgPSBibG9ja1tgJHtibG9ja0lkfWBdO1xuICAgICAgICBjb25zdCBBbmRPclNldCA9IGJsb2NrPy5BbmRPclNldDtcbiAgICAgICAgaWYgKEFuZE9yU2V0ID09PSBcIkFORFwiKSB7XG4gICAgICAgICAgaWYgKHdoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0LmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVRdWVyeSA9IGVsLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IGVsLnF1ZXJ5VmFsdWU7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiaXMgbnVsbFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXMgbm90IG51bGxcIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBlbC5jaGVja2VkTGlzdFNldC5mb3JFYWNoKChlbCkgPT4gdmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCJcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7Zmlyc3RUeHQ6IGVsLmZpcnN0VHh0LnZhbHVlLHNlY29uZFR4dDogZWwuc2Vjb25kVHh0LnZhbHVlfTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHNldFF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gaGVscGVyLnNldFF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgPSBoZWxwZXIuc2V0UXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaiA8IHdoZXJlQ2xhdXNlU2V0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gXCIgIFwiICsgQW5kT3JTZXQgKyBcIiAgXCI7XG4gICAgICAgICAgICAgICAgb3V0RmllbGRzLnB1c2goYCR7YXR0cmlidXRlUXVlcnl9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5OiBhbnkgPSBbXTtcbiAgICAgICAgICBpZiAod2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aCkge1xuICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQuZm9yRWFjaCgoZWwsIGopID0+IHtcbiAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XG4gICAgICAgICAgICAgIGxldCBxdWVyeVZhbHVlID0gZWwucXVlcnlWYWx1ZTtcbiAgICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJJTlwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiTk9UX0lOXCIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgJiYgZWwuY2hlY2tlZExpc3RTZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICBlbC5jaGVja2VkTGlzdFNldC5mb3JFYWNoKChlbCkgPT4gdmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiTk9UX0lOXCIgJiZcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5jb3VudGVySXNDaGVja2VkLmxlbmd0aFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNvdW50ZXJJc0NoZWNrZWQuZm9yRWFjaCgoZWwpID0+dmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHxcbiAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImlzX25vdF9pbmNsdWRlZFwiXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ge2ZpcnN0VHh0OiBlbC5maXJzdFR4dC52YWx1ZSxzZWNvbmRUeHQ6IGVsLnNlY29uZFR4dC52YWx1ZX07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IGhlbHBlci5zZXRRdWVyeUNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nID0gaGVscGVyLnNldFF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGogPCB3aGVyZUNsYXVzZVNldC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IFwiICBcIiArIEFuZE9yU2V0ICsgXCIgIFwiO1xuICAgICAgICAgICAgICAgIG91dEZpZWxkcy5wdXNoKGAke2F0dHJpYnV0ZVF1ZXJ5fWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykge1xuICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuU2V0QmxvY2tbaSArIDFdKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0QmxvY2sgPSB0aGlzLmNvbnRleHQuU2V0QmxvY2tbaSArIDFdO1xuICAgICAgICAgICAgY29uc3QgbmV4dEJsb2NrSWQgPSBuZXh0QmxvY2s/LmJsb2NrSWQ7XG4gICAgICAgICAgICBjb25zdCBuZXh0V2hlcmVDbGF1c2VTZXQgPSBuZXh0QmxvY2tbYCR7bmV4dEJsb2NrSWR9YF07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICBpID09PSAwICYmXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LlNldEJsb2NrLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICAgICAgbmV4dFdoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHx8XG4gICAgICAgICAgICAgICAgIVtcIihcIl0uaW5jbHVkZXMoc2V0UXVlcnlTdHJpbmdbMF0pXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nID0gXCIoXCIgKyBzZXRRdWVyeVN0cmluZztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaSA8IHRoaXMuY29udGV4dC5TZXRCbG9jay5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgICAgbmV4dFdoZXJlQ2xhdXNlU2V0Py5sZW5ndGhcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gXCIgKSBcIiArIHRoaXMuY29udGV4dC5BbmRPciArIFwiICggXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5TZXRCbG9ja1tpIC0gMV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZCbG9jayA9IHRoaXMuY29udGV4dC5TZXRCbG9ja1tpIC0gMV07XG4gICAgICAgICAgICBjb25zdCBwcmV2QmxvY2tJZCA9IHByZXZCbG9jaz8uYmxvY2tJZDtcbiAgICAgICAgICAgIGNvbnN0IHByZXZXaGVyZUNsYXVzZVNldCA9IHByZXZCbG9ja1tgJHtwcmV2QmxvY2tJZH1gXTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LlNldEJsb2NrLmxlbmd0aCA+PSAyICYmXG4gICAgICAgICAgICAgIGkgPT09IHRoaXMuY29udGV4dC5TZXRCbG9jay5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgIHByZXZXaGVyZUNsYXVzZVNldC5sZW5ndGhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyA9IHNldFF1ZXJ5U3RyaW5nICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0UXVlcnlTdHJpbmcsIG91dEZpZWxkcyB9O1xuICB9XG5cbiAgYWRkVGFibGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLmNvbnRleHQucGFyZW50O1xuICAgICAgICBjb25zdCBjdXJyZW50SWQgPSB0aGlzLmNvbnRleHQudGFibGVDb3VudGVyO1xuICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRhYmxlczogWy4uLnRoaXMuY29udGV4dC50YWJsZXMseyBpZDogdGhpcy5jb250ZXh0LnRhYmxlQ291bnRlciwgZGVsZXRlZDogZmFsc2UgfSxdLFxuICAgICAgICAgICAgdGFibGVDb3VudGVyOiB0aGlzLmNvbnRleHQudGFibGVDb3VudGVyICsgMSxcbiAgICAgICAgICAgIGRyb3BEb3duczogeyAuLi50aGlzLmNvbnRleHQuZHJvcERvd25zLCBbY3VycmVudElkXTogZmFsc2UgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRhYmxlTGVuZ3RoID0gdGhpcy5jb250ZXh0LnRhYmxlcy5tYXAoKGVsLCBpZHgpID0+IChlbC5kZWxldGVkID09IGZhbHNlID8gaWR4IDogXCJcIikpLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdGFibGVzU2V0TGVuZ3RoID0gdGhpcy5jb250ZXh0LlNldEJsb2NrLmxlbmd0aDtcbiAgICAgICAgaWYgKHRhYmxlTGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpZiAodGFibGVzU2V0TGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICB9O1xuXG4gIGFkZEJsb2NrID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXMuY29udGV4dC5wYXJlbnQ7XG4gICAgICBjb25zdCBTZXRCbG9jayA9IHRoaXMuY29udGV4dC5TZXRCbG9ja1xuICAgICAgbGV0IGlkT25lID0gU2V0QmxvY2sudGFibGVDb3VudGVyU2V0ID8/IDA7XG4gICAgICBsZXQgaWRUd28gPSBpZE9uZSArIDE7XG4gICAgICBjb25zdCBjdXJyZW50SWQgPSBpZE9uZTtcbiAgICAgIGNvbnN0IG5leHRDdXJyZW50SWQgPSBpZFR3bztcbiAgICAgIGxldCBuZXdCbG9jayA9IFsuLi5TZXRCbG9ja107XG4gICAgICBuZXdCbG9jay5wdXNoKHtcbiAgICAgICAgYmxvY2tJZDpTZXRCbG9jay5sZW5ndGgsXG4gICAgICAgIFtgJHtTZXRCbG9jay5sZW5ndGh9YF06IFtdLFxuICAgICAgICB0YWJsZXNTZXQ6IFtcbiAgICAgICAgICB7IGlkOiBpZE9uZSwgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgICAgICB7IGlkOiBpZFR3bywgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdGFibGVDb3VudGVyU2V0OiB0aGlzLmNvbnRleHQudGFibGVDb3VudGVyU2V0ICsgMixcbiAgICAgICAgZHJvcERvd25zU2V0OiB7XG4gICAgICAgICAgLi4udGhpcy5jb250ZXh0LmRyb3BEb3duc1NldCxcbiAgICAgICAgICBbYCR7Y3VycmVudElkfS0ke1NldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXG4gICAgICAgICAgW2Ake25leHRDdXJyZW50SWR9LSR7U2V0QmxvY2subGVuZ3RofWBdOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgQW5kT3JTZXQ6IHRoaXMuY29udGV4dC5BbmRPclNldCxcbiAgICAgIH0pO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgIFNldEJsb2NrOm5ld0Jsb2NrLFxuICAgICAgICBkcm9wRG93bnNTZXQ6IHtcbiAgICAgICAgICAuLi50aGlzLmNvbnRleHQuZHJvcERvd25zU2V0LFxuICAgICAgICAgIFtgJHtjdXJyZW50SWR9LSR7U2V0QmxvY2subGVuZ3RofWBdOiBmYWxzZSxcbiAgICAgICAgICBbYCR7bmV4dEN1cnJlbnRJZH0tJHtTZXRCbG9jay5sZW5ndGh9YF06IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCB0YWJsZUxlbmd0aCA9IHRoaXMuY29udGV4dC50YWJsZXNcbiAgICAgICAgLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSlcbiAgICAgICAgLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcbiAgICAgIGNvbnN0IHRhYmxlc1NldExlbmd0aCA9IFNldEJsb2NrLmxlbmd0aDtcbiAgXG4gICAgICBpZiAodGFibGVMZW5ndGggPiAwKSBzZWxmLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gIH07XG5cbiAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMud2lkdGggPj0gNjI2ID8gXCJyb3cgbXQtMSBtYi0zIGp1c3RpZnktY29udGVudC1hcm91bmRcIjpcIiBcIn0gXG4gICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMud2lkdGggPj0gNjI2ID8ge306IHsgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMud2lkdGggPj0gNjI2ID8gXCJjb2wtbWQtNSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiOlwiIFwifSBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMud2lkdGggPj0gNjI2ID8geyBnYXA6IFwiMiVcIiB9OntnYXA6IFwiMiVcIix3aWR0aDpcIjEwMCVcIixkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDpcImNlbnRlclwifX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5jb250ZXh0LmN1cnJlbnRUYXJnZXRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRUYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QWdnaXVuZ2kgZXNwcmVzc2lvbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuY29udGV4dC5jdXJyZW50VGFyZ2V0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkQmxvY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249Jzxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNy41IDBhLjUuNSAwIDAgMC0uNS41VjdILjVhLjUuNSAwIDAgMCAwIDFIN3Y2LjVhLjUuNSAwIDAgMCAxIDBWOGg2LjVhLjUuNSAwIDAgMCAwLTFIOFYuNWEuNS41IDAgMCAwLS41LS41WlwiIGZpbGw9XCIjMDAwXCI+PC9wYXRoPjwvc3ZnPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFnZ2l1bmdpIHNldCBkaSBlc3ByZXNzaW9uaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLndpZHRoID49IDYyNiA/IFwiY29sLW1kLTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIjpcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMud2lkdGggPj0gNjI2ID8ge306e3dpZHRoOiBcIjEwMCVcIixkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFwcGxpY2E8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmZ1bmN0aW9uUmVmcmVzaH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPlJpY2FyaWNhcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbiIsIlxuaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XG5pbXBvcnQgeyBTZWxlY3QsT3B0aW9ufSBmcm9tICdqaW11LXVpJztcbmltcG9ydCB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIFByb3BzVHlwZSA9IHtjaG9vc2VBbmRPcjooZTpDaGFuZ2VFdmVudCxibG9ja0lkPzphbnkpPT52b2lkO31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5kT3JTZWxlY3RvciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHNUeXBlLGFueT57XG5cbiAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGhpcy5wcm9wcy5jaG9vc2VBbmRPcihlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYSB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJBTkRcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQU5EXCI+XG4gICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhXG4gICAgICAgICAgICAgICAgdHV0dGUgbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcbiAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIk9SXCI+XG4gICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhZFxuICAgICAgICAgICAgICAgIHVuYSBxdWFsc2lhc2kgZGVsbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcbiAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsIlxuXG5pbXBvcnQge1xuICAgIERyb3Bkb3duLFxuICAgIERyb3Bkb3duQnV0dG9uLFxuICAgIERyb3Bkb3duSXRlbSxcbiAgICBEcm9wZG93bk1lbnUsXG4gICAgSW5wdXQsXG4gICAgVGV4dElucHV0LFxuICB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBTZXR0aW5nT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nXCI7XG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2NzcydcbmltcG9ydCBQYWdpbmF0aW9uQ29tcG9lbmVudCBmcm9tIFwiLi4vLi4vcGFnaW5hdGlvblwiO1xuaW1wb3J0IFNlbGVjdFVuaXZvY28gZnJvbSBcIi4vc2VsZWN0XCI7XG5cbmNvbnN0IENvbW1vblNlY29uZENvbnN0cnVjdG9yID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbY3VycmVudFRhYmxlLHNldEN1cnJlbnRUYWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW29uQ2hhbmdpbmdQYWdlLHNldE9uQ2hhbmdpbmdQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBudW1iZXJPZkl0ZW1zID0gMTA7XG4gIFxuICAgIGNvbnN0IHtcbiAgICAgIHRleHRJbnB1dEhhbmRsZXIsXG4gICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxuICAgICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyLFxuICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcbiAgICAgIGNvdW50ZXJJc0NoZWNrZWQsXG4gICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQsXG4gICAgICB0YWJsZXNJZCxcbiAgICAgIHdoZXJlQ2xhdXNlcyxcbiAgICAgIGRyb3BEb3duVG9nZ2xlcixcbiAgICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgICAgZHJvcERvd24sXG4gICAgICBpc09wZW5Ecm9wRCxcbiAgICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXG4gICAgICBvcGVuRHJvcCxcbiAgICAgIGNsb3NlRHJvcCxcbiAgICAgIG9wZW5lZDogZCxcbiAgICAgIGF1dE9wZW4sXG4gICAgICBvbm1vdXNlTGVhdmUsXG4gICAgICBkcm9wZG93bnMsXG4gICAgICB3aWR0aCxcbiAgICAgIHF1ZXJ5Q2hhbmdlZCxcbiAgICAgIHBhcmVudCxcbiAgICAgIHF1ZXJ5VHlwZVxuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCBub3JtYWxpemVkVGhpcmRRdWVyeSA9IFtdO1xuICAgIGxldCBkZWZhdWx0VmFsdWUgPSBcIj1cIjtcbiAgICBsZXQgZHJvcGRvd25WYWx1ZVF1ZXJ5ID0gXCJ2YWxvcmVcIjtcbiAgICBsZXQgb3BlbmVkID0gZmFsc2U7XG4gICAgbGV0IGNoZWNrZWQgPSAwO1xuICAgIGxldCBhdSA9IHRydWU7XG4gICAgbGV0IGRlZmF1bHRUZXh0VmFsdWUgPSBcIiBcIjtcbiAgICBjb25zdCBjdXJyZW50V2hlcmVDbGF1c2UgPSB3aGVyZUNsYXVzZXMuZmluZChcbiAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBgJHt0YWJsZXNJZH1gXG4gICAgKTtcbiAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5pZkluT3JOb3RJblF1ZXJ5VmFsdWUpIHtcbiAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZS5pZkluT3JOb3RJblF1ZXJ5VmFsdWUubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICBub3JtYWxpemVkVGhpcmRRdWVyeS5wdXNoKHtcbiAgICAgICAgICBpZDogdGFibGVzSWQudG9TdHJpbmcoKSxcbiAgICAgICAgICBsYWJlbDogZWwubGFiZWwudG9TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZTogZWwudmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICBsaXN0ZWw6IGN1cnJlbnRXaGVyZUNsYXVzZS5jaGVja2VkTGlzdD8/Y3VycmVudFdoZXJlQ2xhdXNlLmNoZWNrZWRMaXN0U2V0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5xdWVyeVZhbHVlKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSBjdXJyZW50V2hlcmVDbGF1c2UucXVlcnlWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UuZHJvcGRvd25WYWx1ZVF1ZXJ5KSB7XG4gICAgICBkcm9wZG93blZhbHVlUXVlcnkgPSBjdXJyZW50V2hlcmVDbGF1c2UuZHJvcGRvd25WYWx1ZVF1ZXJ5O1xuICAgIH1cbiAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5pc09wZW4pIHtcbiAgICAgIC8vIG9wZW5lZCA9IHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uaXNPcGVuO1xuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gY3VycmVudFdoZXJlQ2xhdXNlPy5jaGVja2VkTGlzdDtcbiAgICBjb25zdCBjaGVja2VkTGlzdFNldCA9IGN1cnJlbnRXaGVyZUNsYXVzZT8uY2hlY2tlZExpc3RTZXQ7XG4gICAgaWYgKGNoZWNrZWRMaXN0Py5sZW5ndGgpe1xuICAgICAgICBjaGVja2VkID0gY2hlY2tlZExpc3QubGVuZ3RoXG4gICAgfWVsc2UgaWYgKGNoZWNrZWRMaXN0U2V0Py5sZW5ndGgpe1xuICAgICAgICBjaGVja2VkID0gY2hlY2tlZExpc3RTZXQubGVuZ3RoXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5ID0gWy4uLm5vcm1hbGl6ZWRUaGlyZFF1ZXJ5XTtcbiAgXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LmN1cnJlbnROdW1iZXJPZlBhZ2UgPT09IDAgJiYgXG4gICAgICAgIGNvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lmxlbmd0aFxuICAgICAgKXtcbiAgICAgICAgY2FsY3VsYXRlVG90YWxOdW1iZXJPZlBhZ2UoKTtcbiAgICAgICAgb25JbmNyZW1lbnQoKTtcbiAgICAgIH1cbiAgICB9LFtjb3BpZWRub3JtYWxpemVkVGhpcmRRdWVyeV0pO1xuICBcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcbiAgICAgIGlmIChxdWVyeUNoYW5nZWRbdGFibGVzSWRdICYmIHBhcmVudCl7XG4gICAgICAgIHNldEN1cnJlbnRUYWJsZSh7XG4gICAgICAgICAgLi4uY3VycmVudFRhYmxlLFxuICAgICAgICAgIFt0YWJsZXNJZF06e1xuICAgICAgICAgICAgXCJzdGFydEluZGV4XCI6MCxcbiAgICAgICAgICAgIFwiZW5kSW5kZXhcIjowLFxuICAgICAgICAgICAgXCJjdXJyZW50TnVtYmVyT2ZQYWdlXCI6MCxcbiAgICAgICAgICAgIFwidG90YWxOdW1iZXJPZlBhZ2VcIjowXG4gICAgICAgIH19KVxuICAgICAgICBwYXJlbnQ/LnNldFN0YXRlKHtxdWVyeUNoYW5nZWQ6ey4uLnF1ZXJ5Q2hhbmdlZCxbdGFibGVzSWRdOmZhbHNlfX0pXG4gICAgICB9XG4gICAgfSxbcXVlcnlDaGFuZ2VkXSlcbiAgXG4gICAgY29uc3QgY2FsY3VsYXRlVG90YWxOdW1iZXJPZlBhZ2UgPSAoKT0+e1xuICAgICAgaWYgKGNvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lmxlbmd0aCl7XG4gICAgICAgIGNvbnN0IG5ld1RvdGFsTnVtYmVyT2ZQYWdlID0gTWF0aC5jZWlsKGNvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lmxlbmd0aC9udW1iZXJPZkl0ZW1zKTtcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRUYWJsZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF07XG4gICAgICAgIGlmIChuZXdDdXJyZW50VGFibGUpe1xuICAgICAgICAgIG5ld0N1cnJlbnRUYWJsZSA9IHsuLi5uZXdDdXJyZW50VGFibGUsXCJ0b3RhbE51bWJlck9mUGFnZVwiOm5ld1RvdGFsTnVtYmVyT2ZQYWdlfTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbmV3Q3VycmVudFRhYmxlID0ge1widG90YWxOdW1iZXJPZlBhZ2VcIjpuZXdUb3RhbE51bWJlck9mUGFnZX1cbiAgICAgICAgfVxuICAgICAgICBzZXRDdXJyZW50VGFibGUoey4uLmN1cnJlbnRUYWJsZSxbdGFibGVzSWRdOm5ld0N1cnJlbnRUYWJsZX0pXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBjb25zdCBvbkluY3JlbWVudCA9ICgpPT57XG4gICAgICBjb25zdCBjdXJyZW50TnVtYmVyT2ZQYWdlID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXT8uY3VycmVudE51bWJlck9mUGFnZSA/PyAwO1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50TnVtYmVyT2ZQYWdlIDwgY3VycmVudFRhYmxlW3RhYmxlc0lkXT8udG90YWxOdW1iZXJPZlBhZ2VcbiAgICAgICl7XG4gICAgICAgIGNvbnN0IGZpcnN0SW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdPy5lbmRJbmRleD8/MDtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gZmlyc3RJbmRleCArIG51bWJlck9mSXRlbXM7XG4gICAgICAgIGNvbnN0IG5ld2N1cnJlbnROdW1iZXJPZlBhZ2UgPSBjdXJyZW50TnVtYmVyT2ZQYWdlICsgMTtcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRUYWJsZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF07XG4gICAgICAgIGlmIChuZXdDdXJyZW50VGFibGUpe1xuICAgICAgICAgIG5ld0N1cnJlbnRUYWJsZSA9IHtcbiAgICAgICAgICAgIC4uLm5ld0N1cnJlbnRUYWJsZSwgXG4gICAgICAgICAgICBcInN0YXJ0SW5kZXhcIjpmaXJzdEluZGV4LFxuICAgICAgICAgICAgXCJlbmRJbmRleFwiOmxhc3RJbmRleCxcbiAgICAgICAgICAgIFwiY3VycmVudE51bWJlck9mUGFnZVwiOm5ld2N1cnJlbnROdW1iZXJPZlBhZ2VcbiAgICAgICAgICB9O1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7XCJzdGFydEluZGV4XCI6Zmlyc3RJbmRleCxcImVuZEluZGV4XCI6bGFzdEluZGV4LFwiY3VycmVudE51bWJlck9mUGFnZVwiOm5ld2N1cnJlbnROdW1iZXJPZlBhZ2V9XG4gICAgICAgIH1cbiAgICAgICAgc2V0Q3VycmVudFRhYmxlKHsuLi5jdXJyZW50VGFibGUsW3RhYmxlc0lkXTpuZXdDdXJyZW50VGFibGV9KVxuICAgICAgICBzZXRPbkNoYW5naW5nUGFnZSh7Li4ub25DaGFuZ2luZ1BhZ2UsW3RhYmxlc0lkXTp0cnVlfSlcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGNvbnN0IG9uRGVjcmVtZW50ID0gKCk9PntcbiAgICAgIGlmIChjdXJyZW50VGFibGVbdGFibGVzSWRdPy5zdGFydEluZGV4ID4gMCl7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdLnN0YXJ0SW5kZXg7XG4gICAgICAgIGNvbnN0IGVuZEluZGV4ID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXS5lbmRJbmRleDtcbiAgICAgICAgY29uc3QgY3VycmVudE51bWJlck9mUGFnZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0uY3VycmVudE51bWJlck9mUGFnZVxuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gc3RhcnRJbmRleC1udW1iZXJPZkl0ZW1zO1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBlbmRJbmRleC1udW1iZXJPZkl0ZW1zO1xuICAgICAgICBjb25zdCBuZXdjdXJyZW50TnVtYmVyT2ZQYWdlID0gY3VycmVudE51bWJlck9mUGFnZSAtIDE7XG4gICAgICAgIGxldCBuZXdDdXJyZW50VGFibGUgPSBjdXJyZW50VGFibGVbdGFibGVzSWRdO1xuICAgICAgICBpZiAobmV3Q3VycmVudFRhYmxlKXtcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7XG4gICAgICAgICAgICAuLi5uZXdDdXJyZW50VGFibGUsIFxuICAgICAgICAgICAgXCJzdGFydEluZGV4XCI6Zmlyc3RJbmRleCxcbiAgICAgICAgICAgIFwiZW5kSW5kZXhcIjpsYXN0SW5kZXgsXG4gICAgICAgICAgICBcImN1cnJlbnROdW1iZXJPZlBhZ2VcIjpuZXdjdXJyZW50TnVtYmVyT2ZQYWdlXG4gICAgICAgICAgfTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgbmV3Q3VycmVudFRhYmxlID0ge1wic3RhcnRJbmRleFwiOmZpcnN0SW5kZXgsXCJlbmRJbmRleFwiOmxhc3RJbmRleCxcImN1cnJlbnROdW1iZXJPZlBhZ2VcIjpuZXdjdXJyZW50TnVtYmVyT2ZQYWdlfVxuICAgICAgICB9XG4gICAgICAgIHNldEN1cnJlbnRUYWJsZSh7Li4uY3VycmVudFRhYmxlLFt0YWJsZXNJZF06bmV3Q3VycmVudFRhYmxlfSk7XG4gICAgICAgIHNldE9uQ2hhbmdpbmdQYWdlKHsuLi5vbkNoYW5naW5nUGFnZSxbdGFibGVzSWRdOnRydWV9KVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnN0YXJ0SW5kZXg/PzA7XG4gICAgY29uc3QgZW5kSW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdPy5lbmRJbmRleD8/MTA7XG4gIFxuICAgIGNvbnN0IHF1ZXJpZXNXaXRoVW5pdm9jbyA9IFtcIj1cIixcIjw+XCIsXCI8PVwiLFwiPj1cIixcIjxcIixcIj5cIl07XG4gICAgY29uc3QgcXVlcmllc1dpdGhNdWx0aXNlbGVjdCA9IFtcIklOXCIsXCJOT1RfSU5cIl07XG4gICAgY29uc3QgcXVlcmllc1dpdGhOb3RoaW5nID0gW1wiaXMgbnVsbFwiLFwiaXMgbm90IG51bGxcIl07XG4gICAgY29uc3QgcXVlcmllc1dpdGhUd29JbnB1dHMgPSBbXCJpbmNsdWRlZFwiLFwiaXNfbm90X2luY2x1ZGVkXCJdO1xuICAgIGNvbnN0IHF1ZXJpZXNXaXRoU2luZ2xlSW5wdXQgPSBbXCJMSUtFJVwiLFwiJUxJS0VcIixcIiVMSUtFJVwiLFwiTk9UIExJS0VcIl07XG4gIFxuICAgIHJldHVybihcbiAgICAgIDw+XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyaWVzV2l0aFVuaXZvY28uaW5jbHVkZXMoZGVmYXVsdFZhbHVlKSAmJiBcbiAgICAgICAgICA8ZGl2IHZhbHVlPXtkZWZhdWx0VmFsdWV9IGNsYXNzTmFtZSA9IHt3aWR0aCA+PSA2MjYgPyBcImQtZmxleCBjb2wtbWQtNFwiIDpcIiBcIn0gc3R5bGU9e3dpZHRoID49IDYyNiA/IHt9OntkaXNwbGF5OidmbGV4J319PlxuICAgICAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXG4gICAgICAgICAgICAgIDxTZWxlY3RVbml2b2NvIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtjdXJyZW50VGFibGVbdGFibGVzSWRdPy5jdXJyZW50TnVtYmVyT2ZQYWdlPz8wfVxuICAgICAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZQYWdlcyA9IHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy50b3RhbE51bWJlck9mUGFnZT8/MH1cbiAgICAgICAgICAgICAgICBvbkRlY3JlbWVudCA9IHtvbkRlY3JlbWVudH1cbiAgICAgICAgICAgICAgICBvbkluY3JlbWVudCA9IHtvbkluY3JlbWVudH1cbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0ge2N1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnN0YXJ0SW5kZXg/PzB9XG4gICAgICAgICAgICAgICAgZW5kSW5kZXggPSB7Y3VycmVudFRhYmxlW3RhYmxlc0lkXT8uZW5kSW5kZXg/PzB9XG4gICAgICAgICAgICAgICAgdGFibGVzSWQgPSB7dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgZHJvcGRvd25zID0ge2Ryb3Bkb3duc31cbiAgICAgICAgICAgICAgICBvcGVuRHJvcCA9IHtvcGVuRHJvcH1cbiAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlciA9IHt1bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICBkYXRhID0ge2NvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5fVxuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZSA9IHtxdWVyeVR5cGU/P1wic2luZ2xlXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2luZ1BhZ2UgPSB7b25DaGFuZ2luZ1BhZ2V9XG4gICAgICAgICAgICAgICAgc2V0T25DaGFuZ2luZ1BhZ2UgPSB7c2V0T25DaGFuZ2luZ1BhZ2V9XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlID0ge2N1cnJlbnRXaGVyZUNsYXVzZT8udmFsdWU/LnR4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50ZXh0SW5wdXRIYW5kbGVyKGUscXVlcnlUeXBlPz9cInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRUZXh0VmFsdWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGRyb3Bkb3duSXRlbUhhbmRsZXIoZSwgcXVlcnlUeXBlPz9cInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUscXVlcnlUeXBlPz9cInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJpZXNXaXRoTXVsdGlzZWxlY3QuaW5jbHVkZXMoZGVmYXVsdFZhbHVlKSAmJlxuICAgICAgICAgIDxkaXYgdmFsdWU9e2RlZmF1bHRWYWx1ZX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBvbm1vdXNlTGVhdmUoKX0gY2xhc3NOYW1lID0ge3dpZHRoID49IDYyNiA/IFwiZC1mbGV4IGNvbC1tZC00XCIgOlwiIFwifT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24gaXNPcGVuPXtkcm9wZG93bnNbdGFibGVzSWRdfSBzdHlsZSA9IHt7d2lkdGg6XCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gb25DbGljaz17KCkgPT4gb3BlbkRyb3AodGFibGVzSWQpfSBzdHlsZSA9IHt7d2lkdGg6XCIxMDAlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAge2NoZWNrZWR9IGVsZW1lbnRpIHNlbGV6aW9uYXRpXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IGNsYXNzTmFtZT1cImRyb3AtZG93bi1tZW51LXRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPk11bHRpIHNlbGV6aW9uZSBhdHRpdmE8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyICAvPlxuICAgICAgICAgICAgICAgICAgICB7Y29waWVkbm9ybWFsaXplZFRoaXJkUXVlcnkuc2xpY2Uoc3RhcnRJbmRleCxlbmRJbmRleCk/Lm1hcCgoZWwsaSk9PntcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k9e1wiZml4ZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLmNoZWNrVmFsdWUgPT09IGVsLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuY2hlY2tWYWx1ZSA9PT0gZWwubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIG1iLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uQ29tcG9lbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2Ake2N1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LmN1cnJlbnROdW1iZXJPZlBhZ2U/PzB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZQYWdlID0ge2Ake2N1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnRvdGFsTnVtYmVyT2ZQYWdlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmRlY3JlbWVudCA9IHtvbkRlY3JlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uaW5jcmVtZW50ID0ge29uSW5jcmVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBxdWVyaWVzV2l0aE5vdGhpbmcuaW5jbHVkZXMoZGVmYXVsdFZhbHVlKSAmJiBcbiAgICAgICAgICA8ZGl2IHZhbHVlPXtkZWZhdWx0VmFsdWV9IGNsYXNzTmFtZT17d2lkdGggPiA2MjYgPyBcImQtZmxleCBjb2wtbWQtNFwiOlwiIFwifSBzdHlsZT17d2lkdGggPj0gNjI2ID8ge306e2Rpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJpZXNXaXRoVHdvSW5wdXRzLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgJiYgXG4gICAgICAgICAgPGRpdiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBjbGFzc05hbWU9e3dpZHRoID4gNjI2ID8gXCJkLWZsZXggY29sLW1kLTRcIjpcIiBcIn0gc3R5bGU9e3dpZHRoID49IDYyNiA/IHt9OntkaXNwbGF5OidmbGV4J319PlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIoZSxxdWVyeVR5cGU/P1wic2luZ2xlXCIpfVxuICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1jZW50ZXJcIiBzdHlsZT17e2hlaWdodDonMTAwJScsZm9udFNpemU6JzE4cHgnfX0+ZTwvc3Bhbj5cbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIHF1ZXJpZXNXaXRoU2luZ2xlSW5wdXQuaW5jbHVkZXMoZGVmYXVsdFZhbHVlKSAmJiBcbiAgICAgICAgICA8ZGl2IHZhbHVlPXtkZWZhdWx0VmFsdWV9IGNsYXNzTmFtZT17d2lkdGggPiA2MjYgPyBcImQtZmxleCBjb2wtbWQtNFwiOlwiIFwifSBzdHlsZT17d2lkdGggPj0gNjI2ID8ge306e2Rpc3BsYXk6J2ZsZXgnfX0+XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRJbnB1dEhhbmRsZXIoZSxxdWVyeVR5cGU/P1wic2luZ2xlXCIpfVxuICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8Lz5cbiAgICApXG4gIH07XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ29tbW9uU2Vjb25kQ29uc3RydWN0b3I7IiwiXG5pbXBvcnQge1JlYWN0LGpzeH0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7RHJvcGRvd24sRHJvcGRvd25CdXR0b24sRHJvcGRvd25NZW51LERyb3Bkb3duSXRlbSxJbnB1dH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IENoZWNrT3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL2NoZWNrJ1xuaW1wb3J0IFBhZ2luYXRpb25Db21wb2VuZW50IGZyb20gJy4uLy4uL3BhZ2luYXRpb24nO1xuaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJ1xuXG50eXBlIFByb3BzVHlwZSA9IHtcbiAgdGFibGVzSWQ6bnVtYmVyfHN0cmluZ1xuICBkYXRhOmFueVtdLFxuICBzdGFydEluZGV4Om51bWJlcixcbiAgZW5kSW5kZXg6bnVtYmVyLFxuICB0b3RhbE51bWJlck9mUGFnZXM6bnVtYmVyLFxuICBjdXJyZW50UGFnZTpudW1iZXIsXG4gIG9uSW5jcmVtZW50OigpPT52b2lkLFxuICBvbkRlY3JlbWVudDooKT0+dm9pZCxcbiAgdW5pdm9jb1NlbGVjdEhhbmRsZXI6KGN1cnJlbnRUYWJsZTp7dmFsdWU6YW55LHRhYmxlSWQ6c3RyaW5nfSxxdWVyeVR5cGU6c3RyaW5nKT0+dm9pZCxcbiAgZHJvcGRvd25zOntba2V5Om51bWJlcnxzdHJpbmddOmJvb2xlYW59LFxuICBvcGVuRHJvcDoodGFibGVzSWQ6c3RyaW5nfG51bWJlcik9PnZvaWQsXG4gIHF1ZXJ5VHlwZTpzdHJpbmcsXG4gIG9uQ2hhbmdpbmdQYWdlOntba2V5OnN0cmluZ3xudW1iZXJdOmJvb2xlYW59LFxuICBzZXRPbkNoYW5naW5nUGFnZTphbnksXG4gIGN1cnJlbnRWYWx1ZTpzdHJpbmd8bnVtYmVyXG59XG5cbmNvbnN0IFNlbGVjdFVuaXZvY28gPSAocHJvcHM6UHJvcHNUeXBlKT0+e1xuXG4gIGNvbnN0IFtjdXJyZW50VGFibGUsc2V0Q3VycmVudFRhYmxlXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgY29uc3Qge1xuICAgIHRhYmxlc0lkLFxuICAgIGRhdGEsXG4gICAgc3RhcnRJbmRleCxcbiAgICBlbmRJbmRleCxcbiAgICB0b3RhbE51bWJlck9mUGFnZXMsXG4gICAgY3VycmVudFBhZ2UsXG4gICAgb25JbmNyZW1lbnQsXG4gICAgb25EZWNyZW1lbnQsXG4gICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIsXG4gICAgZHJvcGRvd25zLFxuICAgIG9wZW5Ecm9wLFxuICAgIHF1ZXJ5VHlwZSxcbiAgICBvbkNoYW5naW5nUGFnZSxcbiAgICBzZXRPbkNoYW5naW5nUGFnZSxcbiAgICBjdXJyZW50VmFsdWVcbiAgfSA9IHByb3BzXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgaWYgKG9uQ2hhbmdpbmdQYWdlW3RhYmxlc0lkXSl7XG4gICAgICBzZXRDdXJyZW50VGFibGUoey4uLmN1cnJlbnRUYWJsZSxbdGFibGVzSWRdOntcInNlbGVjdGVkSW5kZXhcIjotMSxcInNlbGVjdGVkSXRlbVwiOlwiIFwifX0pXG4gICAgICBzZXRPbkNoYW5naW5nUGFnZSh7Li4ub25DaGFuZ2luZ1BhZ2UsW3RhYmxlc0lkXTpmYWxzZX0pO1xuICAgIH1cbiAgfSxbb25DaGFuZ2luZ1BhZ2VdKVxuXG4gIGNvbnN0IGdldENsaWNrZWRJdGVtID0gKHZhbHVlOmFueSx0YWJsZUlkOnN0cmluZ3xudW1iZXIsaW5kZXgpPT57XG4gICAgc2V0Q3VycmVudFRhYmxlKHsuLi5jdXJyZW50VGFibGUsW3RhYmxlSWRdOntcInNlbGVjdGVkSW5kZXhcIjppbmRleCxcInNlbGVjdGVkSXRlbVwiOnZhbHVlfX0pO1xuICAgIGNvbnN0IGN1cnJlbnRUYWJsZUlkID0gdHlwZW9mIHRhYmxlSWQgPT09IFwibnVtYmVyXCIgPyBgJHt0YWJsZUlkfWA6dGFibGVJZFxuICAgIGNvbnN0IG9iaiA9IHt2YWx1ZSx0YWJsZUlkOmN1cnJlbnRUYWJsZUlkfVxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyKG9iaixxdWVyeVR5cGUpO1xuICAgIG9wZW5Ecm9wKHRhYmxlc0lkKVxuICB9XG5cbiAgY29uc3QgdW5yZXF1aXJlZFNlbGVjdGVkVmFsdWUgPSBbJycsXCIgXCIsJyAnXTtcbiAgbGV0IHNlbGVjdGVkSXRlbSA9IGN1cnJlbnRWYWx1ZT8/XCIgXCJcbiAgY29uc3QgY3VycmVudFRhYmxlU2VsZWN0ZWRWYWx1ZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnNlbGVjdGVkSXRlbTtcbiAgaWYgKGN1cnJlbnRUYWJsZVNlbGVjdGVkVmFsdWUgJiYgIXVucmVxdWlyZWRTZWxlY3RlZFZhbHVlLmluY2x1ZGVzKGN1cnJlbnRUYWJsZVNlbGVjdGVkVmFsdWUpKXtcbiAgICBzZWxlY3RlZEl0ZW0gPSBjdXJyZW50VGFibGVTZWxlY3RlZFZhbHVlXG4gIH1cbiAgXG4gIHJldHVybihcbiAgICA8RHJvcGRvd25cbiAgICAgIGFjdGl2ZUljb25cbiAgICAgIGlzT3Blbj17ZHJvcGRvd25zW3RhYmxlc0lkXX1cbiAgICAgIHN0eWxlID0ge3t3aWR0aDpcIjEwMCVcIn19IFxuICAgID5cbiAgICAgIDxEcm9wZG93bkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuRHJvcCh0YWJsZXNJZCl9IHN0eWxlID0ge3t3aWR0aDpcIjEwMCVcIn19PlxuICAgICAgICAgIHtzZWxlY3RlZEl0ZW19XG4gICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJkcm9wLWRvd24tbWVudS10YWJsZVwiICA+XG4gICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAgLz5cbiAgICAgICAgICB7ZGF0YT8uc2xpY2Uoc3RhcnRJbmRleCxlbmRJbmRleCk/Lm1hcCgoZWwsaSk9PntcbiAgICAgICAgICAgIGlmIChlbCl7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrID0geyhlKT0+Z2V0Q2xpY2tlZEl0ZW0oZWwudmFsdWUsdGFibGVzSWQsaSl9PlxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjIwLGhlaWdodDoyMCxkaXNwbGF5OlwiZmxleFwiLGFsaWduSXRlbXM6XCJjZW50ZXJcIixqdXN0aWZ5Q29udGVudDpcImZsZXgtZW5kXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy5zZWxlY3RlZEluZGV4ID09PSBpICYmIDxDaGVja091dGxpbmVkIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0YWJsZXNJZH0gY2xhc3NOYW1lPVwibWwtMyBtYi0wXCIgaWQ9e3RhYmxlc0lkfT5cbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxQYWdpbmF0aW9uQ29tcG9lbmVudFxuICAgICAgICAgICAgICBjdXJyZW50UGFnZT17YCR7Y3VycmVudFBhZ2V9YH1cbiAgICAgICAgICAgICAgdG90YWxOdW1iZXJPZlBhZ2UgPSB7YCR7dG90YWxOdW1iZXJPZlBhZ2VzfWB9XG4gICAgICAgICAgICAgIG9uZGVjcmVtZW50ID0ge29uRGVjcmVtZW50fVxuICAgICAgICAgICAgICBvbmluY3JlbWVudCA9IHtvbkluY3JlbWVudH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFVuaXZvY287IiwiXG5pbXBvcnQgTGF5ZXIgZnJvbSAnZXNyaS9sYXllcnMvTGF5ZXInO1xuaW1wb3J0IHthcHBBY3Rpb25zLCBSZWFjdH0gZnJvbSAnamltdS1jb3JlJztcbmltcG9ydCB7IEFsZXJ0LCBTZWxlY3QsT3B0aW9uIH0gZnJvbSAnamltdS11aSc7XG5pbXBvcnQgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExheWVyU2VsZWN0Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvY29udGV4dEFwaSc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlLmNzcydcbmltcG9ydCBBbmRPclNlbGVjdG9yIGZyb20gJy4vY29tbW9uL2FuZG9yU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgcmVzdWx0TGF5ZXJMaXN0T2JqZWN0IHtcbiAgICBlbGVtZW50OkxheWVyLFxuICAgIGxhYmVsOnN0cmluZyxcbiAgICB2YWx1ZTpudW1iZXIsXG4gICAgbGF5ZXJJRDpzdHJpbmcsXG4gICAgdXJsU2VydmljZVNlcnZlcjpzdHJpbmdcbn1cblxudHlwZSBQcm9wc1R5cGUgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllclNlbGVjdENvbXBvbmVudCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHNUeXBlLGFueT57XG5cbiAgICBzdGF0aWMgY29udGV4dFR5cGU/OiBSZWFjdC5Db250ZXh0PGFueT4gPSBMYXllclNlbGVjdENvbnRleHRcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOlByb3BzVHlwZSl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyID0gdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hvb3NlQW5kT3IgPSB0aGlzLmNob29zZUFuZE9yLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25DaGFuZ2VTZWxlY3RMYXllcihlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLmNvbnRleHQucGFyZW50O1xuICAgICAgICBzZWxmLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xuICAgICAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuY29udGV4dC5qaW11TWFwVmlld1xuICAgICAgICBpZiAoamltdU1hcFZpZXcpIHtcbiAgICAgICAgICAgIGppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGYudGl0bGUgPT09IGUuY3VycmVudFRhcmdldC5pbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgcmVzdWx0c0xheWVyU2VsZWN0ZWQ6IGYsXG4gICAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0VGV4dDogZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZElkOiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICAgICAgICAgIGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIiwgXCJjaGVja2VkTGF5ZXJzXCIsIFtmLmlkXSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNob29zZUFuZE9yID0gKGUpID0+e1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcy5jb250ZXh0LnBhcmVudDtcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IEFuZE9yOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJTZWxlemlvbmFyZSBwcmltYSBpbCBsYXllciwgcG9pIGNvbnRpbnVhIGNvbiBpbCBjb3N0cnV0dG9yZSBkZWxsYSBxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidy0xMDBcIj5TZWxlemlvbmEgaWwgbGF5ZXI6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuY29udGV4dC5jdXJyZW50U2VsZWN0ZWRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQucmVzdWx0TGF5ZXJMaXN0Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLmxheWVySUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRVcmw9e2VsLmVsZW1lbnQucGFyc2VkVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmVsZW1lbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb250ZXh0LnNob3dBZGRTZWxlY3QgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY29ycmlzcG9uZGVudGkgYWxsYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWd1ZW50ZSBlc3ByZXNzaW9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmRPclNlbGVjdG9yIGNob29zZUFuZE9yPXt0aGlzLmNob29zZUFuZE9yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iLCJcbmltcG9ydCB7UmVhY3QsanN4fSBmcm9tICdqaW11LWNvcmUnO1xuaW1wb3J0IHsgTGVmdE91dGxpbmVkIH0gZnJvbSAnamltdS1pY29ucy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9sZWZ0JztcbmltcG9ydCB7IFJpZ2h0T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL3JpZ2h0J1xuXG50eXBlIFByb3BzVHlwZSA9IHtcbiAgICB0b3RhbE51bWJlck9mUGFnZTpzdHJpbmcsXG4gICAgY3VycmVudFBhZ2U6c3RyaW5nLFxuICAgIG9uZGVjcmVtZW50OigpPT52b2lkLFxuICAgIG9uaW5jcmVtZW50OigpPT52b2lkXG59XG5cbmNvbnN0IFBhZ2luYXRpb25Db21wb2VuZW50ID0gKHByb3BzOlByb3BzVHlwZSk9PntcblxuICAgIGNvbnN0IHt0b3RhbE51bWJlck9mUGFnZSxjdXJyZW50UGFnZSxvbmRlY3JlbWVudCxvbmluY3JlbWVudH0gPSBwcm9wcztcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgb3V0ZXJDb250YWluZXI6e1xuICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAgZ2FwOlwiMyVcIixcbiAgICAgICAgICAgIGhlaWdodDo1MCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIndoaXRlc21va2VcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTotMTBcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbkNvbnRhaW5lcjp7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIHdpZHRoOlwiMjUlXCJcbiAgICAgICAgfSxcbiAgICAgICAgaW5uZXJJY29uQ29udGFpbmVyOntcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwicmdiKDAsOTQsMjAyKVwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxuICAgICAgICAgICAgaGVpZ2h0OjMwLFxuICAgICAgICAgICAgd2lkdGg6XCI4MCVcIlxuICAgICAgICB9LFxuICAgICAgICB0ZXh0Q29udGFpbmVyOntcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudHM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIHdpZHRoOlwiNTAlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGlubmVyVGV4dENvbnRhaW5lcjp7XG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcbiAgICAgICAgICAgIGhlaWdodDozMCxcbiAgICAgICAgICAgIGZvbnRTaXplOjE2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGUgPSB7c3R5bGVzLm91dGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGUgPXtzdHlsZXMuaWNvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHtzdHlsZXMuaW5uZXJJY29uQ29udGFpbmVyfSBvbkNsaWNrID0ge29uZGVjcmVtZW50fT48TGVmdE91dGxpbmVkIGNvbG9yPSd3aGl0ZScgc2l6ZSA9IHsyNX0gLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRleHRDb250YWluZXJ9PjxkaXYgc3R5bGU9e3N0eWxlcy5pbm5lclRleHRDb250YWluZXJ9PntjdXJyZW50UGFnZX0ve3RvdGFsTnVtYmVyT2ZQYWdlfTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3N0eWxlcy5pY29uQ29udGFpbmVyfSBvbkNsaWNrID0ge29uaW5jcmVtZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3N0eWxlcy5pbm5lckljb25Db250YWluZXJ9PjxSaWdodE91dGxpbmVkIGNvbG9yPSd3aGl0ZScgc2l6ZSA9IHsyNX0gLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb25Db21wb2VuZW50OyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBpc1ZhbGlkRWxlbWVudCwgY2xvbmVFbGVtZW50LCBjcmVhdGVSZWYsIFJlYWN0Tm9kZSwgUmVhY3RFbGVtZW50LCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7IHBhdGNoUmVzaXplSGFuZGxlciwgaXNGdW5jdGlvbiwgaXNTU1IsIGlzRE9NRWxlbWVudCwgY3JlYXRlTm90aWZpZXIgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZWFjdFJlc2l6ZURldGVjdG9yRGltZW5zaW9ucyB7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgd2lkdGg/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGlsZEZ1bmN0aW9uUHJvcHM8RWxlbWVudFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBSZWFjdFJlc2l6ZURldGVjdG9yRGltZW5zaW9ucyB7XG4gIHRhcmdldFJlZj86IFJlZk9iamVjdDxFbGVtZW50VD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgd2l0aCBvYnNlcnZhYmxlIGVsZW1lbnQncyB3aWR0aCBhbmQgaGVpZ2h0LlxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICovXG4gIG9uUmVzaXplPzogKHdpZHRoPzogbnVtYmVyLCBoZWlnaHQ/OiBudW1iZXIpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBUcmlnZ2VyIHVwZGF0ZSBvbiBoZWlnaHQgY2hhbmdlLlxuICAgKiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBoYW5kbGVIZWlnaHQ/OiBib29sZWFuO1xuICAvKipcbiAgICogVHJpZ2dlciBvblJlc2l6ZSBvbiB3aWR0aCBjaGFuZ2UuXG4gICAqIERlZmF1bHQ6IHRydWVcbiAgICovXG4gIGhhbmRsZVdpZHRoPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERvIG5vdCB0cmlnZ2VyIHVwZGF0ZSB3aGVuIGEgY29tcG9uZW50IG1vdW50cy5cbiAgICogRGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHNraXBPbk1vdW50PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHVwZGF0ZSBzdHJhdGVneS4gUG9zc2libGUgdmFsdWVzOiBcInRocm90dGxlXCIgYW5kIFwiZGVib3VuY2VcIi5cbiAgICogU2VlIGBsb2Rhc2hgIGRvY3MgZm9yIG1vcmUgaW5mb3JtYXRpb24gaHR0cHM6Ly9sb2Rhc2guY29tL2RvY3MvXG4gICAqIHVuZGVmaW5lZCAtIGNhbGxiYWNrIHdpbGwgYmUgZmlyZWQgZm9yIGV2ZXJ5IGZyYW1lLlxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICovXG4gIHJlZnJlc2hNb2RlPzogJ3Rocm90dGxlJyB8ICdkZWJvdW5jZSc7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHRpbWVvdXQvaW50ZXJ2YWwgZm9yIGByZWZyZXNoTW9kZWAgc3RyYXRlZ3lcbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICByZWZyZXNoUmF0ZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFBhc3MgYWRkaXRpb25hbCBwYXJhbXMgdG8gYHJlZnJlc2hNb2RlYCBhY2NvcmRpbmcgdG8gbG9kYXNoIGRvY3NcbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICByZWZyZXNoT3B0aW9ucz86IHsgbGVhZGluZz86IGJvb2xlYW47IHRyYWlsaW5nPzogYm9vbGVhbiB9O1xuICAvKipcbiAgICogVGhlc2Ugb3B0aW9ucyB3aWxsIGJlIHVzZWQgYXMgYSBzZWNvbmQgcGFyYW1ldGVyIG9mIGByZXNpemVPYnNlcnZlci5vYnNlcnZlYCBtZXRob2RcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzaXplT2JzZXJ2ZXIvb2JzZXJ2ZVxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICovXG4gIG9ic2VydmVyT3B0aW9ucz86IFJlc2l6ZU9ic2VydmVyT3B0aW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNpemVEZXRlY3RvclByb3BzPEVsZW1lbnRUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUHJvcHMge1xuICAvKipcbiAgICogQSBzZWxlY3RvciBvZiBhbiBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqIFlvdSBjYW4gdXNlIHRoaXMgcHJvcGVydHkgdG8gYXR0YWNoIHJlc2l6ZS1vYnNlcnZlciB0byBhbnkgRE9NIGVsZW1lbnQuXG4gICAqIFBsZWFzZSByZWZlciB0byB0aGUgcXVlcnlTZWxlY3RvciBkb2NzLlxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiA1LjAuMC4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gNy4wLjAuXG4gICAqIFVzZSB0YXJnZXRSZWYgaW5zdGVhZFxuICAgKi9cbiAgcXVlcnlTZWxlY3Rvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIFZhbGlkIG9ubHkgZm9yIGEgY2FsbGJhY2stcGF0dGVybi5cbiAgICogSWdub3JlZCBmb3Igb3RoZXIgcmVuZGVyIHR5cGVzLlxuICAgKiBTZXQgcmVzaXplLWRldGVjdG9yJ3Mgbm9kZSB0eXBlLlxuICAgKiBZb3UgY2FuIHBhc3MgYW55IHZhbGlkIFJlYWN0IG5vZGU6IHN0cmluZyB3aXRoIG5vZGUncyBuYW1lIG9yIGVsZW1lbnQuXG4gICAqIENhbiBiZSB1c2VmdWwgd2hlbiB5b3UgbmVlZCB0byBoYW5kbGUgdGFibGUncyBvciBwYXJhZ3JhcGgncyByZXNpemVzLlxuICAgKiBEZWZhdWx0OiBcImRpdlwiXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gNS4wLjAuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDcuMC4wLlxuICAgKiBVc2UgdGFyZ2V0UmVmIGluc3RlYWRcbiAgICovXG4gIG5vZGVUeXBlPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzOyAvLyB3aWxsIGJlIHBhc3NlZCB0byBSZWFjdC5jcmVhdGVFbGVtZW50KClcbiAgLyoqXG4gICAqIEEgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICogQnkgZGVmYXVsdCBpdCdzIGEgcGFyZW50IGVsZW1lbnQgaW4gcmVsYXRpb24gdG8gdGhlIFJlYWN0UmVzaXplRGV0ZWN0b3IgY29tcG9uZW50LlxuICAgKiBCdXQgeW91IGNhbiBwYXNzIGFueSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIG9taXR0ZWQgd2hlbiB5b3UgcGFzcyBxdWVyeVNlbGVjdG9yLlxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiA1LjAuMC4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gNi4wLjAuXG4gICAqIFVzZSB0YXJnZXRSZWYgaW5zdGVhZFxuICAgKi9cbiAgdGFyZ2V0RG9tRWw/OiBFbGVtZW50VDtcbiAgLyoqXG4gICAqIEEgUmVhY3QgcmVmZXJlbmNlIG9mIHRoZSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqIFBhc3MgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgeW91IHdhbnQgdG8gYXR0YWNoIHJlc2l6ZSBoYW5kbGVycyB0by5cbiAgICogSXQgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBSZWFjdC51c2VSZWYgb3IgUmVhY3QuY3JlYXRlUmVmIGZ1bmN0aW9uc1xuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcbiAgICovXG4gIHRhcmdldFJlZj86IFJlZk9iamVjdDxFbGVtZW50VD47XG5cbiAgcmVuZGVyPzogKHByb3BzOiBSZWFjdFJlc2l6ZURldGVjdG9yRGltZW5zaW9ucykgPT4gUmVhY3ROb2RlO1xuXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlIHwgKChwcm9wczogQ2hpbGRGdW5jdGlvblByb3BzPEVsZW1lbnRUPikgPT4gUmVhY3ROb2RlKTtcbn1cblxuY2xhc3MgUmVzaXplRGV0ZWN0b3I8RWxlbWVudFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PiBleHRlbmRzIFB1cmVDb21wb25lbnQ8XG4gIFJlc2l6ZURldGVjdG9yUHJvcHM8RWxlbWVudFQ+LFxuICBSZWFjdFJlc2l6ZURldGVjdG9yRGltZW5zaW9uc1xuPiB7XG4gIHNraXBPbk1vdW50OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICB0YXJnZXRSZWY7XG4gIG9ic2VydmFibGVFbGVtZW50O1xuICByZXNpemVIYW5kbGVyO1xuICByZXNpemVPYnNlcnZlcjtcbiAgY29uc3RydWN0b3IocHJvcHM6IFJlc2l6ZURldGVjdG9yUHJvcHM8RWxlbWVudFQ+KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBza2lwT25Nb3VudCwgcmVmcmVzaE1vZGUsIHJlZnJlc2hSYXRlID0gMTAwMCwgcmVmcmVzaE9wdGlvbnMgfSA9IHByb3BzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICB0aGlzLnNraXBPbk1vdW50ID0gc2tpcE9uTW91bnQ7XG4gICAgdGhpcy50YXJnZXRSZWYgPSBjcmVhdGVSZWYoKTtcbiAgICB0aGlzLm9ic2VydmFibGVFbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChpc1NTUigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyID0gcGF0Y2hSZXNpemVIYW5kbGVyKHRoaXMuY3JlYXRlUmVzaXplSGFuZGxlciwgcmVmcmVzaE1vZGUsIHJlZnJlc2hSYXRlLCByZWZyZXNoT3B0aW9ucyk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIodGhpcy5yZXNpemVIYW5kbGVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoT2JzZXJ2ZXIoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE9ic2VydmVyKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICBpZiAoaXNTU1IoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9ic2VydmFibGVFbGVtZW50ID0gbnVsbDtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLmNhbmNlbEhhbmRsZXIoKTtcbiAgfVxuXG4gIGNhbmNlbEhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMucmVzaXplSGFuZGxlciAmJiB0aGlzLnJlc2l6ZUhhbmRsZXIuY2FuY2VsKSB7XG4gICAgICAvLyBjYW5jZWwgZGVib3VuY2VkIGhhbmRsZXJcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlci5jYW5jZWwoKTtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGF0dGFjaE9ic2VydmVyID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0UmVmLCBvYnNlcnZlck9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNTU1IoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRSZWYgJiYgdGFyZ2V0UmVmLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMudGFyZ2V0UmVmLmN1cnJlbnQgPSB0YXJnZXRSZWYuY3VycmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50KCk7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAvLyBjYW4ndCBmaW5kIGVsZW1lbnQgdG8gb2JzZXJ2ZVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9ic2VydmFibGVFbGVtZW50ICYmIHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBvYnNlcnZlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xuICB9O1xuXG4gIGdldEVsZW1lbnQgPSAoKTogRWxlbWVudCB8IFRleHQgfCBudWxsID0+IHtcbiAgICBjb25zdCB7IHF1ZXJ5U2VsZWN0b3IsIHRhcmdldERvbUVsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGlzU1NSKCkpIHJldHVybiBudWxsO1xuXG4gICAgLy8gaW4gY2FzZSB3ZSBwYXNzIGEgcXVlcnlTZWxlY3RvclxuICAgIGlmIChxdWVyeVNlbGVjdG9yKSByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeVNlbGVjdG9yKTtcbiAgICAvLyBpbiBjYXNlIHdlIHBhc3MgYSBET00gZWxlbWVudFxuICAgIGlmICh0YXJnZXREb21FbCAmJiBpc0RPTUVsZW1lbnQodGFyZ2V0RG9tRWwpKSByZXR1cm4gdGFyZ2V0RG9tRWw7XG4gICAgLy8gaW4gY2FzZSB3ZSBwYXNzIGEgUmVhY3QgcmVmIHVzaW5nIFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgaWYgKHRoaXMudGFyZ2V0UmVmICYmIGlzRE9NRWxlbWVudCh0aGlzLnRhcmdldFJlZi5jdXJyZW50KSkgcmV0dXJuIHRoaXMudGFyZ2V0UmVmLmN1cnJlbnQ7XG5cbiAgICAvLyB0aGUgd29yc2UgY2FzZSB3aGVuIHdlIGRvbid0IHJlY2VpdmUgYW55IGluZm9ybWF0aW9uIGZyb20gdGhlIHBhcmVudCBhbmQgdGhlIGxpYnJhcnkgZG9lc24ndCBhZGQgYW55IHdyYXBwZXJzXG4gICAgLy8gd2UgaGF2ZSB0byB1c2UgYSBkZXByZWNhdGVkIGBmaW5kRE9NTm9kZWAgbWV0aG9kIGluIG9yZGVyIHRvIGZpbmQgYSBET00gZWxlbWVudCB0byBhdHRhY2ggdG9cbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKCFjdXJyZW50RWxlbWVudCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCByZW5kZXJUeXBlID0gdGhpcy5nZXRSZW5kZXJUeXBlKCk7XG4gICAgc3dpdGNoIChyZW5kZXJUeXBlKSB7XG4gICAgICBjYXNlICdyZW5kZXJQcm9wJzpcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuICAgICAgY2FzZSAnY2hpbGRGdW5jdGlvbic6XG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcbiAgICAgIGNhc2UgJ2NoaWxkJzpcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuICAgICAgY2FzZSAnY2hpbGRBcnJheSc6XG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfTtcblxuICBjcmVhdGVSZXNpemVIYW5kbGVyOiBSZXNpemVPYnNlcnZlckNhbGxiYWNrID0gKGVudHJpZXM6IFJlc2l6ZU9ic2VydmVyRW50cnlbXSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgaGFuZGxlV2lkdGggPSB0cnVlLCBoYW5kbGVIZWlnaHQgPSB0cnVlLCBvblJlc2l6ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghaGFuZGxlV2lkdGggJiYgIWhhbmRsZUhlaWdodCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm90aWZ5UmVzaXplID0gY3JlYXRlTm90aWZpZXIob25SZXNpemUsIHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKSwgaGFuZGxlV2lkdGgsIGhhbmRsZUhlaWdodCk7XG5cbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSAoZW50cnkgJiYgZW50cnkuY29udGVudFJlY3QpIHx8IHt9O1xuXG4gICAgICBjb25zdCBzaG91bGRTZXRTaXplID0gIXRoaXMuc2tpcE9uTW91bnQgJiYgIWlzU1NSKCk7XG4gICAgICBpZiAoc2hvdWxkU2V0U2l6ZSkge1xuICAgICAgICBub3RpZnlSZXNpemUoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNraXBPbk1vdW50ID0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0UmVuZGVyVHlwZSA9ICgpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHsgcmVuZGVyLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNGdW5jdGlvbihyZW5kZXIpKSB7XG4gICAgICAvLyBERVBSRUNBVEVELiBVc2UgYENoaWxkIEZ1bmN0aW9uIFBhdHRlcm5gIGluc3RlYWRcbiAgICAgIHJldHVybiAncmVuZGVyUHJvcCc7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4gJ2NoaWxkRnVuY3Rpb24nO1xuICAgIH1cblxuICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiAnY2hpbGQnO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgLy8gREVQUkVDQVRFRC4gV3JhcCBjaGlsZHJlbiB3aXRoIGEgc2luZ2xlIHBhcmVudFxuICAgICAgcmV0dXJuICdjaGlsZEFycmF5JztcbiAgICB9XG5cbiAgICAvLyBERVBSRUNBVEVELiBVc2UgYENoaWxkIEZ1bmN0aW9uIFBhdHRlcm5gIGluc3RlYWRcbiAgICByZXR1cm4gJ3BhcmVudCc7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcmVuZGVyLCBjaGlsZHJlbiwgbm9kZVR5cGU6IFdyYXBwZXJUYWcgPSAnZGl2JyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBjaGlsZFByb3BzID0geyB3aWR0aCwgaGVpZ2h0LCB0YXJnZXRSZWY6IHRoaXMudGFyZ2V0UmVmIH07XG4gICAgY29uc3QgcmVuZGVyVHlwZSA9IHRoaXMuZ2V0UmVuZGVyVHlwZSgpO1xuXG4gICAgc3dpdGNoIChyZW5kZXJUeXBlKSB7XG4gICAgICBjYXNlICdyZW5kZXJQcm9wJzpcbiAgICAgICAgcmV0dXJuIHJlbmRlcj8uKGNoaWxkUHJvcHMpO1xuICAgICAgY2FzZSAnY2hpbGRGdW5jdGlvbic6IHtcbiAgICAgICAgY29uc3QgY2hpbGRGdW5jdGlvbiA9IGNoaWxkcmVuIGFzIChwcm9wczogQ2hpbGRGdW5jdGlvblByb3BzPEVsZW1lbnRUPikgPT4gUmVhY3ROb2RlO1xuICAgICAgICByZXR1cm4gY2hpbGRGdW5jdGlvbj8uKGNoaWxkUHJvcHMpO1xuICAgICAgfVxuICAgICAgY2FzZSAnY2hpbGQnOiB7XG4gICAgICAgIC8vIEBUT0RPIGJ1ZyBwcm9uZSBsb2dpY1xuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuIGFzIFJlYWN0RWxlbWVudDtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgJiYgdHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gY2hpbGQgaXMgYSBuYXRpdmUgRE9NIGVsZW1lbnRzIHN1Y2ggYXMgZGl2LCBzcGFuIGV0Y1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICBjb25zdCB7IHRhcmdldFJlZiwgLi4ubmF0aXZlUHJvcHMgfSA9IGNoaWxkUHJvcHM7XG4gICAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwgbmF0aXZlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNsYXNzIG9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IG90aGVyd2lzZVxuICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NoaWxkQXJyYXknOiB7XG4gICAgICAgIGNvbnN0IGNoaWxkQXJyYXkgPSBjaGlsZHJlbiBhcyBSZWFjdEVsZW1lbnRbXTtcbiAgICAgICAgcmV0dXJuIGNoaWxkQXJyYXkubWFwKGVsID0+ICEhZWwgJiYgY2xvbmVFbGVtZW50KGVsLCBjaGlsZFByb3BzKSk7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPFdyYXBwZXJUYWcgLz47XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2l6ZURldGVjdG9yO1xuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcbmltcG9ydCB0eXBlIHsgRGVib3VuY2VkRnVuYyB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFByb3BzLCBSZWFjdFJlc2l6ZURldGVjdG9yRGltZW5zaW9ucyB9IGZyb20gJy4vUmVzaXplRGV0ZWN0b3InO1xuXG5leHBvcnQgdHlwZSBQYXRjaGVkUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayA9IERlYm91bmNlZEZ1bmM8UmVzaXplT2JzZXJ2ZXJDYWxsYmFjaz4gfCBSZXNpemVPYnNlcnZlckNhbGxiYWNrO1xuXG5leHBvcnQgY29uc3QgcGF0Y2hSZXNpemVIYW5kbGVyID0gKFxuICByZXNpemVDYWxsYmFjazogUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayxcbiAgcmVmcmVzaE1vZGU6IFByb3BzWydyZWZyZXNoTW9kZSddLFxuICByZWZyZXNoUmF0ZTogUHJvcHNbJ3JlZnJlc2hSYXRlJ10sXG4gIHJlZnJlc2hPcHRpb25zOiBQcm9wc1sncmVmcmVzaE9wdGlvbnMnXVxuKTogUGF0Y2hlZFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2sgPT4ge1xuICBzd2l0Y2ggKHJlZnJlc2hNb2RlKSB7XG4gICAgY2FzZSAnZGVib3VuY2UnOlxuICAgICAgcmV0dXJuIGRlYm91bmNlKHJlc2l6ZUNhbGxiYWNrLCByZWZyZXNoUmF0ZSwgcmVmcmVzaE9wdGlvbnMpO1xuICAgIGNhc2UgJ3Rocm90dGxlJzpcbiAgICAgIHJldHVybiB0aHJvdHRsZShyZXNpemVDYWxsYmFjaywgcmVmcmVzaFJhdGUsIHJlZnJlc2hPcHRpb25zKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHJlc2l6ZUNhbGxiYWNrO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbiA9IChmbjogdW5rbm93bik6IGJvb2xlYW4gPT4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaXNTU1IgPSAoKTogYm9vbGVhbiA9PiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGNvbnN0IGlzRE9NRWxlbWVudCA9IChlbGVtZW50OiB1bmtub3duKTogYm9vbGVhbiA9PlxuICBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTERvY3VtZW50O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTm90aWZpZXIgPVxuICAoXG4gICAgb25SZXNpemU6IFByb3BzWydvblJlc2l6ZSddLFxuICAgIHNldFNpemU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zPj4sXG4gICAgaGFuZGxlV2lkdGg6IGJvb2xlYW4sXG4gICAgaGFuZGxlSGVpZ2h0OiBib29sZWFuXG4gICkgPT5cbiAgKHsgd2lkdGgsIGhlaWdodCB9OiBSZWFjdFJlc2l6ZURldGVjdG9yRGltZW5zaW9ucyk6IHZvaWQgPT4ge1xuICAgIHNldFNpemUocHJldiA9PiB7XG4gICAgICBpZiAocHJldi53aWR0aCA9PT0gd2lkdGggJiYgcHJldi5oZWlnaHQgPT09IGhlaWdodCkge1xuICAgICAgICAvLyBza2lwIGlmIGRpbWVuc2lvbnMgaGF2ZW4ndCBjaGFuZ2VkXG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfVxuXG4gICAgICBpZiAoKHByZXYud2lkdGggPT09IHdpZHRoICYmICFoYW5kbGVIZWlnaHQpIHx8IChwcmV2LmhlaWdodCA9PT0gaGVpZ2h0ICYmICFoYW5kbGVXaWR0aCkpIHtcbiAgICAgICAgLy8gcHJvY2VzcyBgaGFuZGxlSGVpZ2h0L2hhbmRsZVdpZHRoYCBwcm9wc1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH1cblxuICAgICAgb25SZXNpemU/Lih3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH0pO1xuICB9O1xuIiwiLyoqXHJcblxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgX3dpZGdldExhYmVsOiAnQ29zdHJ1dHRvcmUgUXVlcnknLFxyXG4gICAgc2VsZWN0R2VvbWV0cnk6XCJTZWxlemlvbmFyZSBsYSBnZW9tZXRyaWFcIixcclxuICAgIGxheWVyczpcIlN0cmF0aVwiLFxyXG4gICAgem9vbUE6XCJab29tIEFcIixcclxuICAgIGV4cG9ydENzdjpcIkVzcG9ydGF6aW9uZSBpbiBmaWxlIGNzdlwiLFxyXG4gICAgZXhwb3J0SnNvbjpcIkVzcG9ydGF6aW9uZSBpbiB1bmEgcmFjY29sdGEgZGkgZnVuemlvbmlcIixcclxuICAgIHN0YXRpc3RpY3M6XCJTdGF0aXN0aWNoZVwiLFxyXG4gICAgY3JlYXRlTGF5ZXI6XCJDcmVhcmUgaWwgbGl2ZWxsb1wiLFxyXG4gICAgYXR0cmlidXRlVGFibGU6XCJWaXN0YSBuZWxsYSB0YWJlbGxhIGRlZ2xpIGF0dHJpYnV0aVwiLFxyXG4gICAgZGVsZXRlOlwiQ2FuY2VsbGFyZVwiLFxyXG4gICAgY291bnRPZkl0ZW1zOlwiQ29udGVnZ2lvIGRlZ2xpIGFydGljb2xpXCIsXHJcbiAgICBzdW1PZlZhbHVlczpcIlNvbW1hIGRlaSB2YWxvcmlcIixcclxuICAgIG1pbmltdW06XCJNaW5pbW9cIixcclxuICAgIG1heGltdW06XCJNYXNzaW1vXCIsXHJcbiAgICBhdmVyYWdlOlwiTWVkaWFcIixcclxuICAgIHNlbGVjdEJ5UG9pbnQ6XCJTZWxlemlvbmUgcGVyIHB1bnRvXCIsXHJcbiAgICBzZWxlY3Rpb25CeUxpbmU6XCJTZWxlemlvbmUgcGVyIGxpbmVhXCIsXHJcbiAgICBzZWxlY3Rpb25CeVBvbHlnb246XCJTZWxlemlvbmUgcGVyIHBvbGlnb25vXCIsXHJcbiAgICBzZWxlY3Rpb25CeVJlY3Rhbmd1bGFyOlwiU2VsZXppb25lIHBlciByZXR0YW5nb2xvXCIsXHJcbiAgICBzZWxlY3Rpb25CeUNpcmNsZTpcIlNlbGV6aW9uZSBwZXIgY2VyY2hpb1wiLFxyXG4gICAgcmVmcmVzaDpcIkFnZ2lvcm5hcmVcIixcclxuICAgIG9rOlwiT0tcIixcclxuICAgIGNhbmNlbDpcIkFubnVsbGFtZW50b1wiLFxyXG4gICAgZmllbGRzOlwiQ2FtcGlcIixcclxuICAgIHNlbGVjdGlvbkFjdGlvbjpcIlNlbGV6aW9uZSBBemlvbmVcIixcclxuICAgIG1hcExvYWRpbmc6XCJJbiBhdHRlc2EgZGVsIGNhcmljYW1lbnRvIGRlbGxhIG1hcHBhLi4uXCIsXHJcbiAgICBub1NlbGVjdGVkSXRlbTpcIk5vbiDDqCBzdGF0YSBzZWxlemlvbmF0YSBhbGN1bmEgdm9jZVwiLFxyXG4gICAgbm9JdGVtU2VsZWN0ZWQ6XCJOb24gw6ggc3RhdG8gdHJvdmF0byBhbGN1biBhdHRyaWJ1dG8gZG9wbyBsJ2ludGVycm9nYXppb25lXCJcclxufVxyXG4iLCJjb25zdCAgcXVlcnlDb25zdHJ1Y3Rvck51bWJlciA9IFtcclxuICAgIHsgbmFtZTogJ8OoJywgdmFsdWU6ICc9JyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoJywgdmFsdWU6ICc8PicgfSxcclxuICAgIHsgbmFtZTogJ8OoIHVubyBkaScsIHZhbHVlOiAnSU4nIH0sIC8vIE9CSkVDVElEIElOICgxLDIsMylcclxuICAgIHsgbmFtZTogJ25vbiDDqCBuZXNzdW5vIGRpJywgdmFsdWU6ICdOT1RfSU4nIH0sIC8vICAgT0JKRUNUSUQgTk9UX0lOICgxLDIsMylcclxuICAgIHsgbmFtZTogJ8OoIGFsbWVubycsIHZhbHVlOiAnPD0nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBhbCBtYXNzaW1vJywgdmFsdWU6ICc+PScgfSxcclxuICAgIHsgbmFtZTogJ8OoIG1pbm9yZSBkaScsIHZhbHVlOiAnPCcgfSxcclxuICAgIHsgbmFtZTogJ8OoIG1hZ2dpb3JlIGRpJywgdmFsdWU6ICc+JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdnVvdG8nLCB2YWx1ZTogJ2lzIG51bGwnIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6ggdnVvdG8nLCB2YWx1ZTogJ2lzIG5vdCBudWxsJyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggY29tcHJlc28gdHJhJywgdmFsdWU6ICdpbmNsdWRlZCcgfSwgLy8gT0JKRUNUSUQgPCAyIEFORCBPQkpFQ1RJRCA+IDRcclxuICAgIHsgbmFtZTogJ25vbiDDqCBjb21wcmVzbyB0cmEnLCB2YWx1ZTogJ2lzX25vdF9pbmNsdWRlZCcgfSAvL2RhIHRyb3ZhcmVcclxuXTtcclxuY29uc3QgICBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nID0gW1xyXG4gICAgeyBuYW1lOiAnw6gnLCB2YWx1ZTogJz0nIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6gnLCB2YWx1ZTogJzw+JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdW5vIGRpJywgdmFsdWU6ICdJTicgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCBuZXNzdW5vIGRpJywgdmFsdWU6ICdOT1RfSU4nIH0sXHJcbiAgICB7IG5hbWU6ICdpbml6aWEgY29uJywgdmFsdWU6ICdMSUtFJScgfSxcclxuICAgIHsgbmFtZTogJ3Rlcm1pbmEgY29uJywgdmFsdWU6ICclTElLRScgfSxcclxuICAgIHsgbmFtZTogJ2NvbnRpZW5lJywgdmFsdWU6ICclTElLRSUnIH0sXHJcbiAgICB7IG5hbWU6ICdub24gY29udGllbmUnLCB2YWx1ZTogJ05PVCBMSUtFJyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdnVvdG8nLCB2YWx1ZTogJ2lzIG51bGwnIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6ggdnVvdG8nLCB2YWx1ZTogJ2lzIG5vdCBudWxsJyB9XHJcbl07XHJcbmV4cG9ydCB7IHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIsIHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcgfSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X1BvbHlnb25fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9nZW9tZXRyeUVuZ2luZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2xheWVyc19HcmFwaGljc0xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfcmVzdF9zdXBwb3J0X1F1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9kb21fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbi8vIEB0cy1pZ25vcmVcclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgUmVhY3QsIEFsbFdpZGdldFByb3BzLCBqc3gsIGFwcEFjdGlvbnMgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2VcIjtcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9wbHVzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IFNlbGVjdCwgT3B0aW9uLCBBbGVydCwgQnV0dG9uLCBJY29uIH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSBcIi4vdHJhbnNsYXRpb25zL2RlZmF1bHRcIjtcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IFF1ZXJ5IGZyb20gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL1RhYmxlXCI7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tIFwiLi9saWIvUmVzaXplRGV0ZWN0b3JcIjtcbmltcG9ydCBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciBmcm9tIFwiLi4vY29ubmVjdG9yL2F0dHJpYnV0ZV90YWJsZV9jb25uZWN0b3JcIjtcbmltcG9ydCBBZGRTZXRUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL0FkZFNldFRhYmxlXCI7XG5pbXBvcnQgTGF5ZXJTZWxlY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXllclNlbGVjdENvbXBvbmVudFwiO1xuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL2NhbGxUb0FjdGlvbkNvbXBvbmVudFwiO1xuaW1wb3J0IEFuZE9yU2VsZWN0b3IgZnJvbSBcIi4vY29tcG9uZW50cy9jb21tb24vYW5kb3JTZWxlY3RvclwiO1xuaW1wb3J0IHtDYWxsVG9BY3Rpb25Db250ZXh0LExheWVyU2VsZWN0Q29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dEFwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICBBbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sXG4gIGFueVxuPiB7XG4gIGdyYXBoaWNMYXllckZvdW5kID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogXCJoaWRlXCIsIHZpc2libGU6IHRydWUgfSk7XG4gIGdyYXBoaWNMYXllclNlbGVjdGVkID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogXCJoaWRlXCIsIHZpc2libGU6IHRydWUgfSk7XG5cbiAgc3RhdGljIGFjdGl2ZVYgPSBudWxsO1xuICBzdGF0aWMgamltdUxheWVyVmlld3ogPSBudWxsO1xuICBzdGF0aWMgYXR0cmlidXRlX3RhYmxlX2RhdGEgPSBudWxsO1xuICBzdGF0aWMgaW5pdGlhbFpvb20gPSAwO1xuXG4gIGF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yID0gbnVsbDtcbiAgcXVlcnlBcnJheSA9IFtdO1xuICBvdXRmaWVsZHMgPSBbXTtcbiAgY3VycmVudExheWVyVmlldyA9IG51bGw7XG4gIHNldFF1ZXJ5QXJyYXkgPSBbXTtcbiAgc2V0T3V0RmllbGRzID0gW107XG4gIHNldFF1ZXJ5U3RyaW5nID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyID0gdGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIC8vTGF5ZXJcbiAgICB0aGlzLmdldFF1ZXJ5QXR0cmlidXRlID0gdGhpcy5nZXRRdWVyeUF0dHJpYnV0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UXVlcnkgPSB0aGlzLmdldFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5zZW5kUXVlcnlTZXQgPSB0aGlzLnNlbmRRdWVyeVNldC5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMucnVuYm90aFF1ZXJpZXM9IHRoaXMucnVuYm90aFF1ZXJpZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRoaXJkUXVlcnkgPSB0aGlzLnRoaXJkUXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRyb3Bkb3duSXRlbUNsaWNrID0gdGhpcy5kcm9wZG93bkl0ZW1DbGljay5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuY2hvb3NlQW5kT3IgPSB0aGlzLmNob29zZUFuZE9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaG9vc2VBbmRPclNldCA9IHRoaXMuY2hvb3NlQW5kT3JTZXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlRHJvcCA9IHRoaXMuY2xvc2VEcm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuRHJvcCA9IHRoaXMub3BlbkRyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gdGhpcy5jbG9zZURyb3BPbmNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25tb3VzZUxlYXZlID0gdGhpcy5vbm1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmdldEFsbENoZWNrZWRMYXllcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldEFsbEppbXVMYXllclZpZXdzID0gdGhpcy5nZXRBbGxKaW11TGF5ZXJWaWV3cy5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uID0gdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCA9IHRoaXMuZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVyeVNldCA9IHRoaXMuZ2V0UXVlcnlTZXQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLm9uQ2hhbmdlQ2hlY2tCb3hTZXQgPSB0aGlzLm9uQ2hhbmdlQ2hlY2tCb3hTZXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGluaXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGppbXVNYXBWaWV3OiBudWxsLFxuICAgICAgbGF5ZXJDb250ZW50czogW10sXG4gICAgICBjaGVja2VkTGF5ZXJfOiBbXSxcbiAgICAgIHJlc3VsdExheWVyTGlzdDogW10sXG4gICAgICBpc0xheWVyU2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgcmVzdWx0c0xheWVyU2VsZWN0ZWQ6IFtdLFxuICAgICAgY3VycmVudFRhcmdldFRleHQ6IG51bGwsXG4gICAgICBnZW9tZXRyeTogbnVsbCxcbiAgICAgIHR5cGVTZWxlY3RlZDogbnVsbCxcbiAgICAgIGxpc3RTZXJ2aWNlczogW10sXG4gICAgICBjdXJyZW50Rmlyc3RRdWVyeTogXCJcIixcbiAgICAgIGN1cnJlbnRGaXJzdFF1ZXJ5VHlwZTogbnVsbCxcbiAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeTogXCJ2YWxvcmVcIixcbiAgICAgIGZpcnN0VGV4dEluY2x1ZGVkSGFuZGxlcjogXCIwXCIsXG4gICAgICBzZWNvbmRUZXh0SW5jbHVkZWRIYW5kbGVyOiBcIjBcIixcbiAgICAgIHRhYmxlczogW10sXG4gICAgICBpc0NoZWNrZWQ6IGZhbHNlLFxuICAgICAgY291bnRlcklzQ2hlY2tlZDogW10sXG4gICAgICBjaGVja2VkVG9RdWVyeTogW10sXG4gICAgICB0YWJsZUNvdW50ZXI6IDAsXG4gICAgICB0YWJsZUNvdW50ZXJTZXQ6IDAsXG4gICAgICB3aGVyZUNsYXVzZXM6IFtdLFxuICAgICAgdGFibGVzU2V0SWQ6IG51bGwsXG4gICAgICB3aGVyZUNsYXVzZVNldDogW10sXG4gICAgICB0YWJsZXNTZXQ6IFtdLFxuICAgICAgdGFibGVzSWQ6IG51bGwsXG4gICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgQW5kT3I6IFwiQU5EXCIsXG4gICAgICBBbmRPclNldDogXCJBTkRcIixcbiAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICBhdXRPcGVuOiB0cnVlLFxuICAgICAgbW91c2VsZWF2ZTogZmFsc2UsXG4gICAgICBkcm9wRG93bnM6IHt9LFxuICAgICAgZHJvcERvd25zU2V0OiB7fSxcbiAgICAgIGhpZ2hsaWdodElkczogW10sXG4gICAgICBzZWxlY3RlZEZpZWxkOiBudWxsLFxuICAgICAgb3RoZXJRdWVyaWVzVmFsdWU6IHt9LFxuICAgICAgZHJvcElkOiBudWxsLFxuICAgICAgZHJvcElkU2V0OiBudWxsLFxuICAgICAgaGlnbGlnaHRTZWxlY3RlZDogW10sXG4gICAgICBpdGVtTm90Rm91bmQ6IG51bGwsXG4gICAgICBjdXJyZW50U2VsZWN0ZWRJZDogXCIgXCIsXG4gICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiBmYWxzZSxcbiAgICAgIHdpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZDogZmFsc2UsXG4gICAgICB3aWRnZXRTdGF0ZU9wZW5lZENoZWNrZWQ6IGZhbHNlLFxuICAgICAgc2hvd0FkZFNlbGVjdDogdHJ1ZSxcbiAgICAgIFNldEJsb2NrOiBbXSxcbiAgICAgIHNlbGVjdGVkSWQ6IG51bGwsXG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHF1ZXJ5Q2hhbmdlZDp7fVxuICAgIH07XG4gIH07XG5cbiAgbmxzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pbnRsXG4gICAgICA/IHRoaXMucHJvcHMuaW50bC5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlc1tpZF0sXG4gICAgICAgIH0pXG4gICAgICA6IGlkO1xuICB9O1xuXG4gIGFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyKGptdjogSmltdU1hcFZpZXcpIHtcbiAgICBpZiAoam12KSB7XG4gICAgICBqbXYudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY0xheWVyRm91bmQpO1xuICAgICAgam12LnZpZXcubWFwLmFkZCh0aGlzLmdyYXBoaWNMYXllclNlbGVjdGVkKTtcbiAgICAgIGNvbnN0IHJlc3VsdExheWVyTGlzdCA9IFtdO1xuICAgICAgam12LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZi50eXBlID09PSBcImZlYXR1cmVcIikge1xuICAgICAgICAgIGptdi52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBcIjE9MVwiO1xuICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW1wiKlwiXTtcbiAgICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7IHdoZXJlOiBxdWVyeS53aGVyZSB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc3VsdExheWVyTGlzdC5wdXNoKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGYsXG4gICAgICAgICAgICBsYWJlbDogZi50aXRsZSxcbiAgICAgICAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgICAgICAgIGxheWVySUQ6IGYuaWQsXG4gICAgICAgICAgICB1cmxTZXJ2aWNlU2VydmVyOiBmLnVybCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBXaWRnZXQuYWN0aXZlViA9IGptdjtcbiAgICAgIFdpZGdldC5qaW11TGF5ZXJWaWV3eiA9IGptdj8uamltdUxheWVyVmlld3M7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVzdWx0TGF5ZXJMaXN0OiByZXN1bHRMYXllckxpc3QsIGppbXVNYXBWaWV3OiBqbXYgfSk7XG4gICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yID0gbmV3IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yKGptdiwgdGhpcyk7XG4gICAgICBXaWRnZXQuaW5pdGlhbFpvb20gPSBqbXYudmlldy56b29tO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzTGF5ZXJTZWxlY3RlZCAhPT0gcHJldlByb3BzLmlzTGF5ZXJTZWxlY3RlZCkge1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMgIT09IHByZXZQcm9wcy53aGVyZUNsYXVzZXMpIHtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHt9XG4gIC8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICogRVZFTlQgQ0xJQ0sgU0VMRUNUXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICByZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKSB7XG4gICAgbGV0IG5ld1doZXJlQ2xhdXNlID0gb2JqO1xuICAgIGlmIChvYmo/LmlmSW5Pck5vdEluUXVlcnlWYWx1ZSkge1xuICAgICAgbmV3V2hlcmVDbGF1c2UgPSB7XG4gICAgICAgIGlkOiBvYmouaWQsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBvYmouYXR0cmlidXRlUXVlcnksXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogb2JqLmF0dHJpYnV0ZVF1ZXJ5VHlwZSxcbiAgICAgICAgcXVlcnlWYWx1ZTogb2JqLnF1ZXJ5VmFsdWUsXG4gICAgICAgIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogb2JqLmlmSW5Pck5vdEluUXVlcnlWYWx1ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1doZXJlQ2xhdXNlID0ge1xuICAgICAgICBpZDogb2JqLmlkLFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogb2JqLmF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IG9iai5hdHRyaWJ1dGVRdWVyeVR5cGUsXG4gICAgICAgIHF1ZXJ5VmFsdWU6IG9iai5xdWVyeVZhbHVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1doZXJlQ2xhdXNlO1xuICB9XG5cbiAgYXN5bmMgZ2V0UXVlcnlBdHRyaWJ1dGUoZSx0eXBlPVwic2luZ2xlXCIpIHtcbiAgICBjb25zdCBrZXl0eXBlID0gdHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XG4gICAgbGV0IGN1cnJlbnRXaGVyZUNsYXVzZTtcbiAgICBjb25zdCB3aGVyZUNsYXVzZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXTtcbiAgICBpZiAoIXdoZXJlQ2xhdXNlU3RhdGUubGVuZ3RoKSB7XG4gICAgICBsZXQgd2hlcmVDbGF1c2UgPSB7XG4gICAgICAgIGlkOmUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlLFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTplLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcbiAgICAgICAgcXVlcnlWYWx1ZTogXCI9XCIsXG4gICAgICB9O1xuICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2U7XG4gICAgICB0aGlzLnNldFN0YXRlKHtba2V5dHlwZV06IFt3aGVyZUNsYXVzZV0gfSk7XG4gICAgfVxuICAgIGlmICh3aGVyZUNsYXVzZVN0YXRlLmxlbmd0aCkge1xuICAgICAgY29uc3QgcXVlcnlJbmRleCA9IHdoZXJlQ2xhdXNlU3RhdGUubWFwKChvYmopID0+IG9iai5pZCkuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB3aGVyZUNsYXVzZVN0YXRlLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpIHtcbiAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YXR5cGUudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2JqID0gdGhpcy5yZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHdoZXJlQ2xhdXNlU3RhdGUuZmlsdGVyKChhKSA9PiBhLmlkICE9PSBvYmouaWQpO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge3JldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7fSk7XG4gICAgICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSBvYmo7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7W2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHdoZXJlQ2xhdXNlID0ge1xuICAgICAgICAgIGlkOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gd2hlcmVDbGF1c2UgPSB0aGlzLnJlbW92ZVZhbHVlRnJvbU9iamVjdCh3aGVyZUNsYXVzZSlcbiAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2U7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1trZXl0eXBlXTogWy4uLndoZXJlQ2xhdXNlU3RhdGUsd2hlcmVDbGF1c2VdLH0pO1xuICAgICAgICB3aGVyZUNsYXVzZVN0YXRlLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtyZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEZpZWxkOiBlLmN1cnJlbnRUYXJnZXQubmFtZSB9LCAoKSA9PiB7XG4gICAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlKXRoaXMubWFuaXB1bGF0ZUZpZWxkUXVlcnkoY3VycmVudFdoZXJlQ2xhdXNlLnF1ZXJ5VmFsdWUsY3VycmVudFdoZXJlQ2xhdXNlLmlkLHR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gZm9yIGNhbGxlZCBvbiBkcm9wIHNlbGVjdCBsaXN0XG4gIGFzeW5jIGdldFF1ZXJ5KGUsIHR5cGUgPSBcInNpbmdsZVwiKSB7XG4gICAgY29uc3QgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXROYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5tYW5pcHVsYXRlRmllbGRRdWVyeShjdXJyZW50VGFyZ2V0TmFtZSwgY2xpY2tlZFF1ZXJ5VGFibGVJZCwgdHlwZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnlDaGFuZ2VkOnsuLi50aGlzLnN0YXRlLnF1ZXJ5Q2hhbmdlZCxbY2xpY2tlZFF1ZXJ5VGFibGVJZF06dHJ1ZX19KVxuICB9XG5cbiAgYXN5bmMgbWFuaXB1bGF0ZUZpZWxkUXVlcnkoXG4gICAgY3VycmVudFRhcmdldE5hbWU6IHN0cmluZyxcbiAgICBjbGlja2VkUXVlcnlUYWJsZUlkOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nXG4gICkge1xuICAgIGxldCBxdWVyeUluZGV4ID0gLTE7XG4gICAgbGV0IGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGUgPSBcIiBcIjtcbiAgICBsZXQgbmV3V2hlcmVTZXRDbGF1c2U7XG4gICAgY29uc3Qga2V5dHlwZSA9IHR5cGUgPT09IFwic2luZ2xlXCIgPyBcIndoZXJlQ2xhdXNlc1wiIDogXCJ3aGVyZUNsYXVzZVNldFwiO1xuICAgIGlmICh0aGlzLnN0YXRlW2tleXR5cGVdLmxlbmd0aCkge1xuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGVba2V5dHlwZV1cbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGNsaWNrZWRRdWVyeVRhYmxlSWQpO1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGUgPSBvYmouYXR0cmlidXRlUXVlcnk7XG4gICAgICAgICAgICAvLyBvYmogPSB0aGlzLnJlbW92ZVZhbHVlRnJvbU9iamVjdChvYmopXG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgcXVlcnlWYWx1ZTogY3VycmVudFRhcmdldE5hbWUgfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5dHlwZV0uZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50VGFyZ2V0TmFtZSA9PT0gXCJJTlwiIHx8IGN1cnJlbnRUYXJnZXROYW1lID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcud2hlbkxheWVyVmlldyhmKS50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfSBpcyBub3QgbnVsbGA7XG4gICAgICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfWBdO1xuICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZi5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgcmVzdWx0cy50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxUaGlyZFF1ZXJ5ID0gW107XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZWwuYXR0cmlidXRlc1tjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGVsLmF0dHJpYnV0ZXNbY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZV0sXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGV0YWlsVGhpcmRRdWVyeVswXS52YWx1ZSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgYS5sYWJlbCA8IGIubGFiZWwgPyAtMSA6IGEubGFiZWwgPiBiLmxhYmVsID8gMSA6IDBcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkuc29ydCgoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAgICAgICBhLnZhbHVlIC0gYi52YWx1ZSA8IDAgPyAtMSA6IGEudmFsdWUgPT09IGIudmFsdWUgPyAwIDogMVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBvYmogPSB0aGlzLnJlbW92ZVZhbHVlRnJvbU9iamVjdChvYmopXG4gICAgICAgICAgICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogZGV0YWlsVGhpcmRRdWVyeSB9O1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5dHlwZV0uZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgW2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoa2V5dHlwZSA9PT0gXCJ3aGVyZUNsYXVzZVNldFwiKSB7XG4gICAgICBpZiAobmV3V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBuZXdXaGVyZVNldENsYXVzZS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjbGlja2VkUXVlcnlUYWJsZUlkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhcbiAgICAgICAgICBjbGlja2VkUXVlcnlUYWJsZUlkLFxuICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFF1ZXJ5U2V0KGUsIHR5cGUgPSBcInNpbmdsZVwiKSB7XG4gICAgY29uc3QgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXROYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5tYW5pcHVsYXRlRmllbGRRdWVyeShjdXJyZW50VGFyZ2V0TmFtZSwgY2xpY2tlZFF1ZXJ5VGFibGVJZCwgXCJzZXRcIik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnlDaGFuZ2VkOnsuLi50aGlzLnN0YXRlLnF1ZXJ5Q2hhbmdlZCxbY2xpY2tlZFF1ZXJ5VGFibGVJZF06dHJ1ZX19KVxuICB9XG5cbiAgLy9UT0RPIGxhIHNlbmRRdWVyeSBhbmRyw6AgcmlzaXN0ZW1hdGEgcXVhbmRvIHNpIGFnZ2l1bmdlcsOgIG9sdHJlIGFsbCdlc3ByZXNzaW9uZSBhbmNoZSBpbCBzZXQgZGkgZXNwcmVzc2lvbmlcbiAgLy8gcGVyY2jDqSBvcmEgcGVyIGwnQU5EIGZhIGlsIGNpY2xvIGZvciBzdSBvZ25pIHdoZXJlIGluc2VyaXRhIG5lbGwnYXJyYXkgbWEgZG9wbyBzYXLDoCBuZWNlc3NhcmlvIHNjb21wb3JyZSBwZXIgY3JlYXJlIGxlIGVzcHJlc3Npb25pXG5cbiAgYXN5bmMgdGhpcmRRdWVyeShlKSB7XG4gICAgY29uc3QgY3VycmVudFF1ZXJ5VGVzdCA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDtcbiAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgdGhpcy5pblF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRGaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50U2Vjb25kUXVlcnksXG4gICAgICAgICAgICBjdXJyZW50UXVlcnlUZXN0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRUd29UYWJsZSA9IChibG9ja0lkKSA9PiB7XG4gICAgbGV0IG5ld1N0YXRlQmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgY29uc3QgaW5kZXggPSBuZXdTdGF0ZUJsb2NrLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5ibG9ja0lkID09PSBibG9ja0lkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSBuZXdTdGF0ZUJsb2NrW2luZGV4XTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJZCA9IGN1cnJlbnRCbG9ja1tcInRhYmxlQ291bnRlclNldFwiXTtcbiAgICAgIGN1cnJlbnRCbG9ja1tcInRhYmxlc1NldFwiXSA9IFtcbiAgICAgICAgLi4uY3VycmVudEJsb2NrW1widGFibGVzU2V0XCJdLFxuICAgICAgICB7IGlkOiBjdXJyZW50SWQsIGRlbGV0ZWQ6IGZhbHNlIH0sXG4gICAgICBdO1xuICAgICAgY3VycmVudEJsb2NrW1wiZHJvcERvd25zU2V0XCJdID0ge1xuICAgICAgICAuLi5jdXJyZW50QmxvY2tbXCJkcm9wRG93bnNTZXRcIl0sXG4gICAgICAgIFtjdXJyZW50SWRdOiBmYWxzZSxcbiAgICAgIH07XG4gICAgICBjdXJyZW50QmxvY2tbXCJ0YWJsZUNvdW50ZXJTZXRcIl0gPSBjdXJyZW50QmxvY2tbXCJ0YWJsZUNvdW50ZXJTZXRcIl0gKyAxO1xuICAgICAgbmV3U3RhdGVCbG9ja1tpbmRleF0gPSBjdXJyZW50QmxvY2s7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLnRhYmxlcy5sZW5ndGggPiAwKSB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFNldEJsb2NrOiBuZXdTdGF0ZUJsb2NrIH0pO1xuICB9O1xuXG4gIGFkZEJsb2NrID0gKCkgPT4ge1xuICAgIGxldCBpZE9uZSA9IHRoaXMuc3RhdGUuU2V0QmxvY2sudGFibGVDb3VudGVyU2V0ID8/IDA7XG4gICAgbGV0IGlkVHdvID0gaWRPbmUgKyAxO1xuICAgIGNvbnN0IGN1cnJlbnRJZCA9IGlkT25lO1xuICAgIGNvbnN0IG5leHRDdXJyZW50SWQgPSBpZFR3bztcbiAgICBsZXQgbmV3QmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgbmV3QmxvY2sucHVzaCh7XG4gICAgICBibG9ja0lkOiB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aCxcbiAgICAgIFtgJHt0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aH1gXTogW10sXG4gICAgICB0YWJsZXNTZXQ6IFtcbiAgICAgICAgeyBpZDogaWRPbmUsIGRlbGV0ZWQ6IGZhbHNlIH0sXG4gICAgICAgIHsgaWQ6IGlkVHdvLCBkZWxldGVkOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIHRhYmxlQ291bnRlclNldDogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXJTZXQgKyAyLFxuICAgICAgZHJvcERvd25zU2V0OiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuZHJvcERvd25zU2V0LFxuICAgICAgICBbYCR7Y3VycmVudElkfS0ke3RoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RofWBdOiBmYWxzZSxcbiAgICAgICAgW2Ake25leHRDdXJyZW50SWR9LSR7dGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGh9YF06IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIEFuZE9yU2V0OiB0aGlzLnN0YXRlLkFuZE9yU2V0LFxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgU2V0QmxvY2s6IG5ld0Jsb2NrLFxuICAgICAgZHJvcERvd25zU2V0OiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuZHJvcERvd25zU2V0LFxuICAgICAgICBbYCR7Y3VycmVudElkfS0ke3RoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RofWBdOiBmYWxzZSxcbiAgICAgICAgW2Ake25leHRDdXJyZW50SWR9LSR7dGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGh9YF06IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhYmxlTGVuZ3RoID0gdGhpcy5zdGF0ZS50YWJsZXNcbiAgICAgIC5tYXAoKGVsLCBpZHgpID0+IChlbC5kZWxldGVkID09IGZhbHNlID8gaWR4IDogXCJcIikpXG4gICAgICAuZmlsdGVyKFN0cmluZykubGVuZ3RoO1xuICAgIGNvbnN0IHRhYmxlc1NldExlbmd0aCA9IHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoO1xuXG4gICAgaWYgKHRhYmxlTGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGVUYWJsZSA9IChpZCkgPT4ge1xuICAgIGxldCBjb3BpZWRUYWJsZSA9IFsuLi50aGlzLnN0YXRlLnRhYmxlc107XG4gICAgY29waWVkVGFibGUgPSBjb3BpZWRUYWJsZS5tYXAoKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuaWQgPT09IGlkKWVsLmRlbGV0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH0pO1xuICAgIGNvbnN0IG5ld1RhYmxlcyA9IGNvcGllZFRhYmxlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWJsZUNvdW50ZXI6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyIC0gMSB9KTtcbiAgICBjb25zdCBjb3BpZWRXaGVyZUNsYXVzZXMgPSBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNdO1xuICAgIGNvbnN0IGRlbGV0ZWRXaGVyZUNsYXVzZXMgPSBjb3BpZWRXaGVyZUNsYXVzZXMuZmlsdGVyKFxuICAgICAgKGVsKSA9PiBlbC5pZCAhPT0gaWQudG9TdHJpbmcoKVxuICAgICk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWJsZXM6IG5ld1RhYmxlcyxcbiAgICAgIHdoZXJlQ2xhdXNlczogZGVsZXRlZFdoZXJlQ2xhdXNlcyxcbiAgICAgIHRhYmxlQ291bnRlcjogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgLSAxLFxuICAgICAgc2VsZWN0ZWRJZDogaWQsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGFibGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdoZXJlQ2xhdXNlczogW10sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWJsZUxlbmd0aCA9IHRoaXMuc3RhdGUudGFibGVzXG4gICAgICAubWFwKChlbCwgaWR4KSA9PiAoZWwuZGVsZXRlZCA9PSBmYWxzZSA/IGlkeCA6IFwiXCIpKVxuICAgICAgLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcbiAgICBjb25zdCB0YWJsZXNTZXRMZW5ndGggPSB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aDtcbiAgICBpZiAodGFibGVMZW5ndGggPT0gMiAmJiB0YWJsZXNTZXRMZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0YWJsZUxlbmd0aCA9PSAwICYmIHRhYmxlc1NldExlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGlmICh0YWJsZUxlbmd0aCA9PSAxICYmIHRhYmxlc1NldExlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlQmxvY2sgPSAoYmxvY2tJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgY29waWVkQmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgY29uc3QgY29waWVkV2hlcmVjbGF1c2VTZXQgPSBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldF07XG4gICAgY29uc3QgaW5kZXggPSBjb3BpZWRCbG9jay5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uYmxvY2tJZCA9PT0gYmxvY2tJZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29waWVkQmxvY2suc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBTZXRCbG9jazogY29waWVkQmxvY2sgfSk7XG4gICAgfVxuICAgIGlmIChjb3BpZWRXaGVyZWNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICBjb3BpZWRXaGVyZWNsYXVzZVNldC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQuc3BsaXQoXCItXCIpWzFdID09PSBibG9ja0lkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGVyZUNsYXVzZVNldDogY29waWVkV2hlcmVjbGF1c2VTZXQgfSk7XG4gICAgfVxuICAgIGNvbnN0IHRhYmxlTGVuZ3RoID0gdGhpcy5zdGF0ZS50YWJsZXNcbiAgICAgIC5tYXAoKGVsLCBpZHgpID0+IChlbC5kZWxldGVkID09IGZhbHNlID8gaWR4IDogXCJcIikpXG4gICAgICAuZmlsdGVyKFN0cmluZykubGVuZ3RoO1xuICAgIGlmICh0YWJsZUxlbmd0aCA9PSAxICYmIGNvcGllZEJsb2NrLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlQmxvY2tUYWJsZSA9ICh0YWJsZUJsb2NrSWQ6IHN0cmluZywgYmxvY2tJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdGFibGVJZCA9IHRhYmxlQmxvY2tJZC5zcGxpdChcIi1cIilbMF07XG4gICAgY29uc3QgY29waWVkQmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgY29uc3QgY29waWVkV2hlcmVjbGF1c2VTZXQgPSBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldF07XG4gICAgY29uc3QgY3VycmVudEJsb2NJbmRleCA9IGNvcGllZEJsb2NrLmZpbmRJbmRleChcbiAgICAgIChibG9jaykgPT4gYCR7YmxvY2suYmxvY2tJZH1gID09PSBibG9ja0lkXG4gICAgKTtcbiAgICBsZXQgY3VycmVudEJsb2NrO1xuICAgIGlmIChjdXJyZW50QmxvY0luZGV4ICE9PSAtMSkgY3VycmVudEJsb2NrID0gY29waWVkQmxvY2tbY3VycmVudEJsb2NJbmRleF07XG4gICAgaWYgKGN1cnJlbnRCbG9jaykge1xuICAgICAgY29uc3QgY3VycmVudFdoZXJlQ2xhdXNlU2V0ID0gY3VycmVudEJsb2NrW2Jsb2NrSWRdO1xuICAgICAgY29uc3QgY3VycmVudFRhYmxlU2V0cyA9IGN1cnJlbnRCbG9ja1tcInRhYmxlc1NldFwiXTtcbiAgICAgIGlmIChjdXJyZW50V2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb3BpZWRDdXJyZW50V2hlcmVDbGF1c2VTZXQgPSBbLi4uY3VycmVudFdoZXJlQ2xhdXNlU2V0XTtcbiAgICAgICAgY29uc3Qgd2hlcmVDbGF1c2VTZXRJbmRleCA9IGNvcGllZEN1cnJlbnRXaGVyZUNsYXVzZVNldC5maW5kSW5kZXgoXG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSB0YWJsZUJsb2NrSWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAod2hlcmVDbGF1c2VTZXRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb3BpZWRDdXJyZW50V2hlcmVDbGF1c2VTZXQuc3BsaWNlKHdoZXJlQ2xhdXNlU2V0SW5kZXgsIDEpO1xuICAgICAgICAgIGN1cnJlbnRCbG9ja1tibG9ja0lkXSA9IGNvcGllZEN1cnJlbnRXaGVyZUNsYXVzZVNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRUYWJsZVNldHM/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb3BpZWRUYWJsZVNldHMgPSBbLi4uY3VycmVudFRhYmxlU2V0c107XG4gICAgICAgIGNvbnN0IHRhYmxlU2V0SW5kZXggPSBjb3BpZWRUYWJsZVNldHMuZmluZEluZGV4KFxuICAgICAgICAgIChpdGVtKSA9PiBgJHtpdGVtLmlkfWAgPT09IHRhYmxlSWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRhYmxlU2V0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY29waWVkVGFibGVTZXRzW3RhYmxlU2V0SW5kZXhdW1wiZGVsZXRlZFwiXSA9IHRydWU7XG4gICAgICAgICAgLy8gY29waWVkVGFibGVTZXRzLnNwbGljZSh0YWJsZVNldEluZGV4LDEpO1xuICAgICAgICAgIGN1cnJlbnRCbG9ja1tcInRhYmxlc1NldFwiXSA9IGNvcGllZFRhYmxlU2V0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29waWVkQmxvY2tbY3VycmVudEJsb2NJbmRleF0gPSBjdXJyZW50QmxvY2s7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGNvcGllZEJsb2NrIH0pO1xuICAgIH1cbiAgICBpZiAoY29waWVkV2hlcmVjbGF1c2VTZXQ/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgaW5kZXggPSBjb3BpZWRXaGVyZWNsYXVzZVNldC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHRhYmxlQmxvY2tJZCkge1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29waWVkV2hlcmVjbGF1c2VTZXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoZXJlQ2xhdXNlU2V0OiBjb3BpZWRXaGVyZWNsYXVzZVNldCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlQmxvY2tBbGwgPSAoYmxvY2tEYXRhKSA9PiB7fTtcblxuICB0ZXh0SW5wdXRIYW5kbGVyID0gKGUsIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbMF0udmFsdWU7XG4gICAgdGhpcy5xdWVyeVRleHRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBxdWVyeVR5cGUpO1xuICB9O1xuXG4gIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlciA9IChlLCBxdWVyeVR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XG4gICAgbGV0IHR4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICBsZXQgY3VycmVudFRhYmxlSWQgPSBlLnRhcmdldC5hdHRyaWJ1dGVzWzBdLnZhbHVlO1xuICAgIGxldCBpbnB1dCA9IFwiZmlyc3RcIjtcbiAgICB0aGlzLnF1ZXJ5VGV4dEluY2x1ZGVkQ29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCwgaW5wdXQsIHF1ZXJ5VHlwZSk7XG4gIH07XG5cbiAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlciA9IChlLCBxdWVyeVR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XG4gICAgbGV0IHR4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbMF0udmFsdWU7XG4gICAgbGV0IGlucHV0ID0gXCJzZWNvbmRcIjtcbiAgICB0aGlzLnF1ZXJ5VGV4dEluY2x1ZGVkQ29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCwgaW5wdXQsIHF1ZXJ5VHlwZSk7XG4gIH07XG5cbiAgdW5pdm9jb1NlbGVjdEhhbmRsZXIgPSAoY3VycmVudFRhYmxlOnt2YWx1ZTphbnksdGFibGVJZDpzdHJpbmd9LCBxdWVyeVR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XG4gICAgbGV0IHR4dCA9IGN1cnJlbnRUYWJsZS52YWx1ZS50cmltKCk7XG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gY3VycmVudFRhYmxlLnRhYmxlSWQ7XG4gICAgdGhpcy5xdWVyeVRleHRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBxdWVyeVR5cGUpO1xuICB9O1xuXG4gIHF1ZXJ5VGV4dENvbnN0cnVjdG9yID0gKHR4dCwgY3VycmVudFRhYmxlSWQsIHF1ZXJ5VHlwZSkgPT4ge1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBjb25zdCBrZXlUeXBlID0gcXVlcnlUeXBlID09PSBcInNpbmdsZVwiID8gXCJ3aGVyZUNsYXVzZXNcIiA6IFwid2hlcmVDbGF1c2VTZXRcIjtcbiAgICBpZiAodGhpcy5zdGF0ZVtrZXlUeXBlXS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlW2tleVR5cGVdXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgICAuaW5kZXhPZihjdXJyZW50VGFibGVJZCk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleVR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY3VycmVudFRhYmxlSWQpIHtcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCB2YWx1ZTogeyB0eHQ6IHR4dCB9IH07XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlW2tleVR5cGVdLmZpbHRlcihcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgW2tleVR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1doZXJlU2V0Q2xhdXNlPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlID0gbmV3V2hlcmVTZXRDbGF1c2UuZmluZChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gY3VycmVudFRhYmxlSWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5hZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrKFxuICAgICAgICAgIGN1cnJlbnRUYWJsZUlkLFxuICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBxdWVyeVRleHRJbmNsdWRlZENvbnN0cnVjdG9yID0gKHR4dCwgY3VycmVudFRhYmxlSWQsIGlucHV0LCBxdWVyeVR5cGUpID0+IHtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBsZXQgbmV3V2hlcmVTZXRDbGF1c2U7XG4gICAgY29uc3Qga2V5VHlwZSA9IHF1ZXJ5VHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XG4gICAgaWYgKHRoaXMuc3RhdGVba2V5VHlwZV0ubGVuZ3RoKSB7XG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZVtrZXlUeXBlXVxuICAgICAgICAubWFwKChvYmopID0+IG9iai5pZClcbiAgICAgICAgLmluZGV4T2YoY3VycmVudFRhYmxlSWQpO1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXlUeXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGN1cnJlbnRUYWJsZUlkKSB7XG4gICAgICAgICAgICBpbnB1dCA9PT0gXCJmaXJzdFwiXG4gICAgICAgICAgICAgID8gKG9iaiA9IHsgLi4ub2JqLCBmaXJzdFR4dDogeyB2YWx1ZTogdHh0IH0gfSlcbiAgICAgICAgICAgICAgOiAob2JqID0geyAuLi5vYmosIHNlY29uZFR4dDogeyB2YWx1ZTogdHh0IH0gfSk7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlW2tleVR5cGVdLmZpbHRlcihcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgW2tleVR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKG5ld1doZXJlU2V0Q2xhdXNlPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlID0gbmV3V2hlcmVTZXRDbGF1c2UuZmluZChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gY3VycmVudFRhYmxlSWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5hZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrKFxuICAgICAgICAgIGN1cnJlbnRUYWJsZUlkLFxuICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBkcm9wZG93bkl0ZW1DbGljayA9IChlLCB0eXBlID0gXCJzaW5nbGVcIikgPT4ge1xuICAgIGxldCBjbGlja2VkUXVlcnlUYWJsZUlkID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMl0udmFsdWU7XG4gICAgbGV0IGNsaWNrZWRWYWx1ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICBsZXQgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZTtcbiAgICBsZXQgbmV3V2hlcmVTZXRDbGF1c2U7XG4gICAgbGV0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZTtcbiAgICBjb25zdCBrZXl0eXBlID0gdHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGVba2V5dHlwZV1cbiAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgLmluZGV4T2YoY2xpY2tlZFF1ZXJ5VGFibGVJZCk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5dHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xuICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBkcm9wZG93blZhbHVlUXVlcnk6IGNsaWNrZWRWYWx1ZSB9O1xuICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5dHlwZV0uZmlsdGVyKFxuICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICk7XG4gICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlID0gb2JqO1xuICAgICAgICAgIC8vIG5ld1doZXJlU2V0Q2xhdXNlID0gZmlsdGVyZWRXaGVyZUNsYXVzZXNcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IFtrZXl0eXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSA9PT0gXCJ1bml2b2NvXCIpIHtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5dHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBjbGlja2VkUXVlcnlUYWJsZUlkKSB7XG4gICAgICAgICAgICBjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlID0gb2JqLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3XG4gICAgICAgICAgICAgICAgICAgIC53aGVuTGF5ZXJWaWV3KGYpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Y3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZX0gaXMgbm90IG51bGxgO1xuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfWBdO1xuICAgICAgICAgICAgICAgICAgICAgIGxheWVyVmlldy5maWx0ZXIgPSB7IHdoZXJlOiBxdWVyeS53aGVyZSB9O1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBmLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxUaGlyZFF1ZXJ5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmVhdHVyZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsVGhpcmRRdWVyeS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogT2JqZWN0LnZhbHVlcyhlbC5hdHRyaWJ1dGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogT2JqZWN0LnZhbHVlcyhlbC5hdHRyaWJ1dGVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRldGFpbFRoaXJkUXVlcnlbMF0udmFsdWVbMF0gIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmxhYmVsIDwgYi5sYWJlbCA/IC0xIDogYS5sYWJlbCA+IGIubGFiZWwgPyAxIDogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsVGhpcmRRdWVyeS5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS52YWx1ZSAtIGIudmFsdWUgPCAwID8gLTEgOiBhLnZhbHVlID09PSBiLnZhbHVlID8gMCA6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZkluT3JOb3RJblF1ZXJ5VmFsdWU6IGRldGFpbFRoaXJkUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeTogY2xpY2tlZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG9iajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZmlsdGVyKChhKSA9PiBhLmlkICE9PSBvYmouaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrZXl0eXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93blZhbHVlUXVlcnk6IGUudGFyZ2V0LnZhbHVlIH0sICgpID0+IHt9KTtcbiAgICBpZiAoa2V5dHlwZSA9PT0gXCJ3aGVyZUNsYXVzZVNldFwiKSB7XG4gICAgICBpZiAoY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlKVxuICAgICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soXG4gICAgICAgICAgY2xpY2tlZFF1ZXJ5VGFibGVJZCxcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2VcbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgZHJvcERvd24gPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0T3BlbjogdHJ1ZSB9KTtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNcbiAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgLmluZGV4T2YoaWQudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xuICAgICAgICAgIGlmICghb2JqLmlzT3Blbikge1xuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlzT3BlbjogdHJ1ZSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlzT3BlbjogZmFsc2UgfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRyb3BEb3duU2V0ID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dE9wZW46IHRydWUgfSk7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXRcbiAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgLmluZGV4T2YoaWQudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQubWFwKChvYmopID0+IHtcbiAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XG4gICAgICAgICAgaWYgKCFvYmouaXNPcGVuKSB7XG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgaXNPcGVuOiB0cnVlIH07XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZVNldCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpc09wZW46IGZhbHNlIH07XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZVNldCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZVNldC5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogZmlsdGVyZWRXaGVyZUNsYXVzZVNldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDaGVja0JveCA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNDaGVja2VkOiBldmVudC50YXJnZXQuY2hlY2tlZCxcbiAgICB9KTtcbiAgfTtcblxuICBhZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrID0gKGN1cnJlbnRJZCwgY3VycmVudFdoZXJlQ2xhdXNlKSA9PiB7XG4gICAgY29uc3QgYmxvY2tJZCA9IGN1cnJlbnRJZC5zcGxpdChcIi1cIilbMV07XG4gICAgY29uc3QgY3VycmVudFNldEJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xuICAgIGxldCBjdXJyZW50QmxvY2tJbmRleCA9IC0xO1xuICAgIGxldCBjdXJyZW50QmxvY2s7XG4gICAgY3VycmVudEJsb2NrSW5kZXggPSBjdXJyZW50U2V0QmxvY2suZmluZEluZGV4KFxuICAgICAgKGl0ZW0pID0+IGAke2l0ZW0/LmJsb2NrSWR9YCA9PT0gYmxvY2tJZFxuICAgICk7XG4gICAgaWYgKGN1cnJlbnRCbG9ja0luZGV4ICE9PSAtMSlcbiAgICAgIGN1cnJlbnRCbG9jayA9IGN1cnJlbnRTZXRCbG9ja1tjdXJyZW50QmxvY2tJbmRleF07XG4gICAgbGV0IGN1cnJlbnRXaGVyZVNldENsYXVzZSA9IG51bGw7XG4gICAgaWYgKGN1cnJlbnRCbG9jaykge1xuICAgICAgY3VycmVudFdoZXJlU2V0Q2xhdXNlID0gY3VycmVudEJsb2NrW2Ake2Jsb2NrSWR9YF07XG4gICAgICBpZiAoY3VycmVudFdoZXJlU2V0Q2xhdXNlPy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGluZGV4ID0gY3VycmVudFdoZXJlU2V0Q2xhdXNlLmZpbmRJbmRleChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gY3VycmVudElkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjdXJyZW50V2hlcmVTZXRDbGF1c2VbaW5kZXhdID0gY3VycmVudFdoZXJlQ2xhdXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRXaGVyZVNldENsYXVzZSA9IFtcbiAgICAgICAgICAgIC4uLmN1cnJlbnRXaGVyZVNldENsYXVzZSxcbiAgICAgICAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZSxcbiAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRCbG9ja1tibG9ja0lkXSA9IGN1cnJlbnRXaGVyZVNldENsYXVzZTtcbiAgICAgICAgY3VycmVudFNldEJsb2NrW2N1cnJlbnRCbG9ja0luZGV4XSA9IGN1cnJlbnRCbG9jaztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNldEJsb2NrOiBjdXJyZW50U2V0QmxvY2sgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50QmxvY2tbYmxvY2tJZF0gPSBbY3VycmVudFdoZXJlQ2xhdXNlXTtcbiAgICAgICAgY3VycmVudFNldEJsb2NrW2N1cnJlbnRCbG9ja0luZGV4XSA9IGN1cnJlbnRCbG9jaztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNldEJsb2NrOiBjdXJyZW50U2V0QmxvY2sgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBcbiAgY2hvb3NlQW5kT3JTZXQgPSAoZSwgYmxvY2tJZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTZXRCbG9jayA9IFsuLi50aGlzLnN0YXRlLlNldEJsb2NrXTtcbiAgICBjb25zdCBpbmRleCA9IGN1cnJlbnRTZXRCbG9jay5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uYmxvY2tJZCA9PT0gYmxvY2tJZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgY3VycmVudFNldEJsb2NrSXRlbSA9IGN1cnJlbnRTZXRCbG9ja1tpbmRleF07XG4gICAgICBjdXJyZW50U2V0QmxvY2tJdGVtW1wiQW5kT3JTZXRcIl0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGN1cnJlbnRTZXRCbG9ja1tpbmRleF0gPSBjdXJyZW50U2V0QmxvY2tJdGVtO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgQW5kT3JTZXQ6IGUudGFyZ2V0LnZhbHVlLCBTZXRCbG9jazogY3VycmVudFNldEJsb2NrIH0pO1xuICB9O1xuXG4gIG9wZW5Ecm9wID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IGZhbHNlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wSWQ6IGlkIH0pO1xuICAgIGNvbnN0IGRyb3BEb3ducyA9IHsgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnMgfTtcbiAgICBpZiAoZHJvcERvd25zW2lkXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BEb3duczogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3ducywgW2lkXTogZmFsc2UgfSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BEb3duczogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3ducywgW2lkXTogdHJ1ZSB9IH0pO1xuICAgIH1cbiAgfTtcblxuICBvcGVuRHJvcFNldCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRJZCA9IGlkO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiBmYWxzZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJvcElkU2V0OiBjdXJyZW50SWQgfSk7XG4gICAgY29uc3QgZHJvcERvd25zU2V0ID0geyAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCB9O1xuICAgIGlmIChkcm9wRG93bnNTZXRbY3VycmVudElkXSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyb3BEb3duc1NldDogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCwgW2N1cnJlbnRJZF06IGZhbHNlIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyb3BEb3duc1NldDogeyAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCwgW2N1cnJlbnRJZF06IHRydWUgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjbG9zZURyb3AgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSwgYXV0T3BlbjogZmFsc2UgfSk7XG5cbiAgY2xvc2VEcm9wT25jbGlja091dHNpZGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJvcElkICE9PSBudWxsICYmIHRoaXMuc3RhdGUubW91c2VsZWF2ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5kcm9wSWRTZXQgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS5tb3VzZWxlYXZlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW91c2VsZWF2ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9ubW91c2VMZWF2ZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiB0cnVlIH0pO1xuXG4gIC8vIG1ldGhvZHMgZm9yIGF0dHJpYnV0ZSB0YWJsZVxuICBnZXRBbGxDaGVja2VkTGF5ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBXaWRnZXQuYWN0aXZlVjtcbiAgICBjb25zdCBhbGxNYXBMYXllcnMgPSBhY3RpdmVWaWV3LnZpZXcubWFwLmFsbExheWVycz8uaXRlbXM7XG4gICAgY29uc3QgY2hlY2tlZExheWVycyA9IHRoaXMuc3RhdGUuY2hlY2tlZExheWVyXztcbiAgICBsZXQgbmV3TWFwTGF5ZXIgPSBbXTtcbiAgICBpZiAoYWxsTWFwTGF5ZXJzPy5sZW5ndGggPiAwICYmIGNoZWNrZWRMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgbmV3TWFwTGF5ZXIgPSBhbGxNYXBMYXllcnMucmVkdWNlKChuZXdBcnJheSwgaXRlbSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tlZExheWVycy5pbmNsdWRlcyhpdGVtLmlkKSkge1xuICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3TWFwTGF5ZXI7XG4gIH07XG5cbiAgZ2V0QWN0aXZlVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gV2lkZ2V0LmFjdGl2ZVY7XG4gICAgcmV0dXJuIGFjdGl2ZVZpZXc7XG4gIH07XG5cbiAgZ2V0QWxsSmltdUxheWVyVmlld3MgPSAoKSA9PiB7XG4gICAgY29uc3QgamltdUxheWVyVmlld3MgPSBXaWRnZXQuamltdUxheWVyVmlld3o7XG4gICAgcmV0dXJuIGppbXVMYXllclZpZXdzO1xuICB9O1xuXG4gIGNsZWFySGlnaGxpZ2h0cyA9IChsYXllclZpZXc6IGFueSkgPT4ge1xuICAgIGlmIChsYXllclZpZXcpIHtcbiAgICAgIGxheWVyVmlldy5faGlnaGxpZ2h0SWRzLmNsZWFyKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVyblRvT3JpZ2luYWxFeHRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3O1xuICAgIHZpZXcuZ29Ubyh7IGNlbnRlcjogdmlldy5jZW50ZXIsIHpvb206IFdpZGdldC5pbml0aWFsWm9vbSB9KTtcbiAgfTtcblxuICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQgPSAoZSwgdmFsKSA9PiB7XG4gICAgbGV0IGNvdW50ZXIgPSBbLi4udGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkXTtcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgY291bnRlci5wdXNoKHZhbCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcklzQ2hlY2tlZDogY291bnRlciB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGluZGV4ID0gY291bnRlci5pbmRleE9mKHZhbCk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50ZXJJc0NoZWNrZWQ6IGNvdW50ZXIgfSk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uUmVmcmVzaCA9ICgpID0+IHtcbiAgICBjb25zdCByZXN1bHRMYXllckxpc3QgPSB0aGlzLnN0YXRlLnJlc3VsdExheWVyTGlzdDtcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgcmVzdWx0TGF5ZXJMaXN0OiByZXN1bHRMYXllckxpc3QsXG4gICAgICBqaW11TWFwVmlldzogamltdU1hcFZpZXcsXG4gICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3O1xuICAgIHZpZXcuZ29Ubyh7IGNlbnRlcjogdmlldy5jZW50ZXIsIHpvb206IFdpZGdldC5pbml0aWFsWm9vbSB9KTtcbiAgICBpZiAodGhpcy5jdXJyZW50TGF5ZXJWaWV3KSB0aGlzLmNsZWFySGlnaGxpZ2h0cyh0aGlzLmN1cnJlbnRMYXllclZpZXcpO1xuICB9O1xuXG4gIC8vVE9ETyBjb25maWcgYWJpbGl0YXJlIHRhYiB0cnVlL2ZhbHNlXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0YWJsZVNldENvdW50cyA9IChcbiAgICAgIHRhYmxlU2V0Q291bnRzOiB7IGlkOiBzdHJpbmc7IGRlbGV0ZWQ6IGJvb2xlYW4gfVtdXG4gICAgKSA9PiB7XG4gICAgICBsZXQgY291bnRzID0gMDtcbiAgICAgIGlmICh0YWJsZVNldENvdW50cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY29waWVkVGFibGVTZXRDb3VudHMgPSBbLi4udGFibGVTZXRDb3VudHNdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW0gPSBjb3BpZWRUYWJsZVNldENvdW50cy5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+ICFpdGVtLmRlbGV0ZWRcbiAgICAgICAgKTtcbiAgICAgICAgY291bnRzID0gZmlsdGVyZWRJdGVtLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3VudHM7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnByb3BzLnN0YXRlID09PSBcIkNMT1NFRFwiICYmICF0aGlzLnN0YXRlLndpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZCkge1xuICAgICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xuICAgICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXc7XG4gICAgICBjb25zdCByZXN1bHRMYXllckxpc3QgPSB0aGlzLnN0YXRlLnJlc3VsdExheWVyTGlzdDtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5jbG9zZVRhYmxlKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgcmVzdWx0TGF5ZXJMaXN0OiByZXN1bHRMYXllckxpc3QsXG4gICAgICAgIGppbXVNYXBWaWV3OiBqaW11TWFwVmlldyxcbiAgICAgICAgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSxcbiAgICAgICAgd2lkZ2V0U3RhdGVPcGVuZWRDaGVja2VkOiBmYWxzZSxcbiAgICAgICAgd2lkZ2V0U3RhdGVDbG9zZWRDaGVja2VkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICB2aWV3LmdvVG8oeyBjZW50ZXI6IHZpZXcuY2VudGVyLCB6b29tOiBXaWRnZXQuaW5pdGlhbFpvb20gfSk7XG4gICAgICBpZiAodGhpcy5jdXJyZW50TGF5ZXJWaWV3KSB0aGlzLmNsZWFySGlnaGxpZ2h0cyh0aGlzLmN1cnJlbnRMYXllclZpZXcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PSBcIk9QRU5FRFwiICYmICF0aGlzLnN0YXRlLndpZGdldFN0YXRlT3BlbmVkQ2hlY2tlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZDogZmFsc2UsXG4gICAgICAgIHdpZGdldFN0YXRlT3BlbmVkQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0UmVzaXplRGV0ZWN0b3IgaGFuZGxlV2lkdGggaGFuZGxlSGVpZ2h0PlxuICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkZ2V0LWF0dHJpYnV0ZS10YWJsZSBqaW11LXdpZGdldFwiXG4gICAgICAgICAgICBpZD1cIndyYXBcIlxuICAgICAgICAgICAgcmVmPVwid3JhcFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlKCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KFwidXNlTWFwV2lkZ2V0SWRzXCIpICYmXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzWzBdICYmIChcbiAgICAgICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaC1hZHZhbmNlZC10YWItQW1iaXRvXCIgdGl0bGU9XCJBbWJpdG9cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBjb250YWluZXItZmx1aWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGF5ZXJTZWxlY3RDb250ZXh0LlByb3ZpZGVyIFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDp0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6dGhpcy5zdGF0ZS5qaW11TWFwVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdExheWVyTGlzdDp0aGlzLnN0YXRlLnJlc3VsdExheWVyTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBZGRTZWxlY3Q6dGhpcy5zdGF0ZS5zaG93QWRkU2VsZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkSWQ6dGhpcy5zdGF0ZS5jdXJyZW50U2VsZWN0ZWRJZFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXJTZWxlY3RDb21wb25lbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXllclNlbGVjdENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uQ29udGV4dC5Qcm92aWRlciBcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6dGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczp0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuZE9yOnRoaXMuc3RhdGUuQW5kT3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBBbmRPclNldDp0aGlzLnN0YXRlLkFuZE9yU2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6dGhpcy5zdGF0ZS5qaW11TWFwVmlldyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNldEJsb2NrOnRoaXMuc3RhdGUuU2V0QmxvY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0VGV4dDp0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzOnRoaXMuc3RhdGUudGFibGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDb3VudGVyOnRoaXMuc3RhdGUudGFibGVDb3VudGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVDb3VudGVyU2V0OnRoaXMuc3RhdGUudGFibGVDb3VudGVyU2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25zOnRoaXMuc3RhdGUuZHJvcERvd25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25zU2V0OnRoaXMuc3RhdGUuZHJvcERvd25zU2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnbGlnaHRTZWxlY3RlZDp0aGlzLnN0YXRlLmhpZ2xpZ2h0U2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOnRoaXMuc3RhdGUuaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OnRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVySXNDaGVja2VkOnRoaXMuc3RhdGUuY291bnRlcklzQ2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uIHdpZHRoPXt3aWR0aH0gZnVuY3Rpb25SZWZyZXNoID0ge3RoaXMuZnVuY3Rpb25SZWZyZXNofS8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FsbFRvQWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwJVwiLCBvdmVyZmxvd1k6IFwic2Nyb2xsXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWJsZXMubWFwKChlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcm93LSR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q9e3RoaXMuc3RhdGUucmVzdWx0c0xheWVyU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuRHJvcEQ9e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duPXsoKSA9PiB0aGlzLmRyb3BEb3duKGVsLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e3RoaXMuc3RhdGUuZHJvcGRvd25WYWx1ZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17dGhpcy5zdGF0ZS5pc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZD17dGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWRUb1F1ZXJ5PXt0aGlzLnN0YXRlLmNoZWNrZWRUb1F1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlcz17dGhpcy5zdGF0ZS50YWJsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzSWQ9e2VsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcz17dGhpcy5zdGF0ZS53aGVyZUNsYXVzZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnlBdHRyaWJ1dGU9e3RoaXMuZ2V0UXVlcnlBdHRyaWJ1dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnk9e3RoaXMuZ2V0UXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGhpcmRRdWVyeT17dGhpcy50aGlyZFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRJbnB1dEhhbmRsZXI9e3RoaXMudGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXt0aGlzLmRyb3Bkb3duSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17dGhpcy50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXt0aGlzLmRyb3BEb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrQm94PXt0aGlzLmhhbmRsZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhYmxlPXsoKSA9PiB0aGlzLmRlbGV0ZVRhYmxlKGVsLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dGhpcy51bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZUNoZWNrQm94PXt0aGlzLm9uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3A9e3RoaXMub3BlbkRyb3B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXt0aGlzLmNsb3NlRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUub3BlbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dE9wZW49e3RoaXMuc3RhdGUuYXV0T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXt0aGlzLnN0YXRlLm1vdXNlbGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25tb3VzZUxlYXZlPXt0aGlzLm9ubW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQ9e3RoaXMuZnVuY3Rpb25Db3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3ducz17dGhpcy5zdGF0ZS5kcm9wRG93bnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU5vdEZvdW5kPXt0aGlzLnN0YXRlLml0ZW1Ob3RGb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZElkPXt0aGlzLnN0YXRlLnNlbGVjdGVkSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYmxlPXtlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeUNoYW5nZWQgPSB7dGhpcy5zdGF0ZS5xdWVyeUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50PXt0aGlzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI5OCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDVlY2FcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5TZXRCbG9jay5tYXAoKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHMgPSB0YWJsZVNldENvdW50cyhlbC50YWJsZXNTZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudHMgPCAyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHMgPT0gMSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY29ycmlzcG9uZGVudGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbGEgc2VndWVudGUgZXNwcmVzc2lvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17d2lkdGggPj0gNjI2ID8gXCJkLWZsZXggY29sLWwtMSBcIjpcImQtZmxleCBjb2wtbWQtOFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDowLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OjBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmRPclNlbGVjdG9yIGNob29zZUFuZE9yPXsoZSk9PnRoaXMuY2hvb3NlQW5kT3JTZXQoZSxlbC5ibG9ja0lkKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuZGVsZXRlQmxvY2soZWwuYmxvY2tJZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZWwuYmxvY2tJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5hZGRUd29UYWJsZShlbC5ibG9ja0lkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC50YWJsZXNTZXQubWFwKChpbm5lckVsLCBpLCBUYWJsZUFycmF5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRTZXRUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Byb3ctJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5zdGF0ZS5yZXN1bHRzTGF5ZXJTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd249eygpID0+IHRoaXMuZHJvcERvd25TZXQoZWwuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeT17dGhpcy5zdGF0ZS5kcm9wZG93blZhbHVlUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXt0aGlzLnN0YXRlLmlzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVySXNDaGVja2VkPXt0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFRvUXVlcnk9e3RoaXMuc3RhdGUuY2hlY2tlZFRvUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIEFkZCBzZXQgdGFibGUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzU2V0PXt0aGlzLnN0YXRlLnRhYmxlc1NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNTZXRJZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpbm5lckVsLmlkfWAgKyBcIi1cIiArIGAke2VsLmJsb2NrSWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXNTZXQ9e3RoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5kIGZvciBBZGQgc2V0IHRhYmxlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldFF1ZXJ5QXR0cmlidXRlPXt0aGlzLmdldFF1ZXJ5QXR0cmlidXRlU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXt0aGlzLmdldFF1ZXJ5QXR0cmlidXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5PXt0aGlzLmdldFF1ZXJ5U2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRoaXJkUXVlcnk9e3RoaXMudGhpcmRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyPXt0aGlzLnRleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtSGFuZGxlcj17dGhpcy5kcm9wZG93bkl0ZW1DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXt0aGlzLmRyb3BEb3duU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoZWNrQm94PXt0aGlzLmhhbmRsZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhYmxlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQmxvY2tUYWJsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aW5uZXJFbC5pZH1gICsgXCItXCIgKyBgJHtlbC5ibG9ja0lkfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2VsLmJsb2NrSWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dGhpcy51bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZUNoZWNrQm94PXt0aGlzLm9uQ2hhbmdlQ2hlY2tCb3hTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkRyb3A9e3RoaXMub3BlbkRyb3BTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXt0aGlzLmNsb3NlRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUub3BlbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dE9wZW49e3RoaXMuc3RhdGUuYXV0T3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXt0aGlzLnN0YXRlLm1vdXNlbGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25tb3VzZUxlYXZlPXt0aGlzLm9ubW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zU2V0PXt0aGlzLnN0YXRlLmRyb3BEb3duc1NldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtTm90Rm91bmQ9e3RoaXMuc3RhdGUuaXRlbU5vdEZvdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEZWxldGU9e2NvdW50cyA+IDIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Jsb2NrRGVsZXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cyA9PT0gMiAmJiBpID09IDAgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZD17ZWwuYmxvY2tJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCbG9ja0FsbD17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQmxvY2tBbGwoeyBlbCwgaW5uZXJFbCB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFibGU9e2lubmVyRWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlDaGFuZ2VkID0ge3RoaXMuc3RhdGUucXVlcnlDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudD17dGhpc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pdGVtTm90Rm91bmQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5pdGVtTm90Rm91bmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdFJlc2l6ZURldGVjdG9yPlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==