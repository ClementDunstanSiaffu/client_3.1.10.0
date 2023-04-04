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
___CSS_LOADER_EXPORT___.push([module.id, "@media (min-width: 768px) {\n  .col-md-4 {\n    flex: auto; } }\n\n@media (min-width: 768px) {\n  .close-container-table-query-builder {\n    flex: auto; } }\n", "",{"version":3,"sources":["webpack://./your-extensions/widgets/query-builder/src/assets/styles/styles.scss"],"names":[],"mappings":"AACA;EACI;IACI,UAAU,EAAA,EACb;;AAGL;EACI;IACI,UAAS,EAAA,EACZ","sourcesContent":["\r\n@media (min-width:768px){\r\n    .col-md-4 {\r\n        flex: auto;\r\n    }\r\n}\r\n\r\n@media (min-width:768px){\r\n    .close-container-table-query-builder{\r\n        flex:auto;\r\n    }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "TablesContext": () => (/* binding */ TablesContext)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

const CallToActionContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext({});
const LayerSelectContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext({});
const TablesContext = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createContext({});
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
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/contextApi */ "./your-extensions/widgets/query-builder/src/context/contextApi.ts");








function AddSetTable(props) {
    const { textInputHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, functionCounterIsChecked, deleteTable, getQueryAttribute, 
    // for Add set table............................
    tablesSetId, whereClausesSet, 
    // End for Add set table............................
    getQuery, univocoSelectHandler, closeDrop, onmouseLeave, dropdownsSet, showDelete, currentTable, } = props;
    const context = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useContext(_context_contextApi__WEBPACK_IMPORTED_MODULE_7__.TablesContext);
    //@ts-ignore
    const { list, parent, queryChanged } = context;
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
    const openDropSet = (id) => {
        const self = parent;
        const currentId = id;
        self.setState({ mouseleave: false });
        self.setState({ dropIdSet: currentId });
        const dropDownsSet = Object.assign({}, dropdownsSet);
        if (dropDownsSet[currentId]) {
            self.setState({ dropDownsSet: Object.assign(Object.assign({}, dropdownsSet), { [currentId]: false }), });
        }
        else {
            self.setState({ dropDownsSet: Object.assign(Object.assign({}, dropdownsSet), { [currentId]: true }), });
        }
    };
    if (currentTable.id === parseInt(tablesSetId.split("-")[0]) && !currentTable.deleted) {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_3__["default"], { handleWidth: true, handleHeight: true }, ({ width, height }) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "my-1" }, (list === null || list === void 0 ? void 0 : list.fields) ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
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
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_common_inputs_commonSecondConstructor__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "col-md-4", textInputHandler: textInputHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, functionCounterIsChecked: functionCounterIsChecked, tablesId: tablesSetId, whereClauses: whereClausesSet, univocoSelectHandler: univocoSelectHandler, onChangeCheckBox: onChangeCheckBoxSet, openDrop: openDropSet, closeDrop: closeDrop, onmouseLeave: onmouseLeave, dropdowns: dropdownsSet, width: width, queryChanged: queryChanged, parent: parent, queryType: "set" }),
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
/* harmony import */ var _context_contextApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/contextApi */ "./your-extensions/widgets/query-builder/src/context/contextApi.ts");








// import { useContext } from "react";
function Table(props) {
    const { textInputHandler, multiSelectHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, dropdownValueQuery, functionCounterIsChecked, deleteTable, tablesId, getQueryAttribute, whereClauses, getQuery, univocoSelectHandler, closeDrop, onmouseLeave, dropdowns, currentTable, } = props;
    const context = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.useContext(_context_contextApi__WEBPACK_IMPORTED_MODULE_7__.TablesContext);
    //@ts-ignore
    const { list, parent, queryChanged } = context;
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
    const openDrop = (id) => {
        const self = parent;
        self.setState({ mouseleave: false });
        self.setState({ dropId: id });
        const dropDowns = Object.assign({}, dropdowns);
        if (dropDowns[id]) {
            self.setState({ dropDowns: Object.assign(Object.assign({}, dropdowns), { [id]: false }) });
        }
        else {
            self.setState({ dropDowns: Object.assign(Object.assign({}, dropdowns), { [id]: true }) });
        }
    };
    if (currentTable.id === tablesId && !currentTable.deleted) {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_lib_ResizeDetector__WEBPACK_IMPORTED_MODULE_3__["default"], { handleWidth: true, handleHeight: true }, ({ width, height }) => (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "my-1" }, (list === null || list === void 0 ? void 0 : list.fields) ? (jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.Fragment, null,
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
                    jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_common_inputs_commonSecondConstructor__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "col-md-4", textInputHandler: textInputHandler, multiSelectHandler: multiSelectHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, dropdownValueQuery: dropdownValueQuery, functionCounterIsChecked: functionCounterIsChecked, getQueryAttribute: getQueryAttribute, whereClauses: whereClauses, tablesId: tablesId, univocoSelectHandler: univocoSelectHandler, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, onmouseLeave: onmouseLeave, dropdowns: dropdowns, width: width, queryChanged: queryChanged, parent: parent, queryType: "single" }),
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
    const { textInputHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, tablesId, whereClauses, univocoSelectHandler, onChangeCheckBox, openDrop, onmouseLeave, dropdowns, width, queryChanged, parent, queryType } = props;
    const normalizedThirdQuery = [];
    let defaultValue = "=";
    let dropdownValueQuery = "valore";
    let checked = 0;
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
            return this.props.intl ? this.props.intl.formatMessage({ id: id, defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_6__["default"][id] }) : id;
        };
        //TODO la sendQuery andrà risistemata quando si aggiungerà oltre all'espressione anche il set di espressioni
        // perché ora per l'AND fa il ciclo for su ogni where inserita nell'array ma dopo sarà necessario scomporre per creare le espressioni
        this.addTwoTable = (blockId) => {
            let newStateBlock = [...this.state.SetBlock];
            const index = newStateBlock.findIndex((item) => item.blockId === blockId);
            if (index !== -1) {
                const currentBlock = newStateBlock[index];
                const currentId = currentBlock["tableCounterSet"];
                currentBlock["tablesSet"] = [...currentBlock["tablesSet"], { id: currentId, deleted: false }];
                currentBlock["dropDownsSet"] = Object.assign(Object.assign({}, currentBlock["dropDownsSet"]), { [currentId]: false });
                currentBlock["tableCounterSet"] = currentBlock["tableCounterSet"] + 1;
                newStateBlock[index] = currentBlock;
            }
            if (this.state.tables.length > 0)
                this.setState({ showAddSelect: false });
            this.setState({ SetBlock: newStateBlock });
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
            if (this.state.tables.length === 0)
                this.setState({ whereClauses: [] });
            const tableLength = this.state.tables.map((el, idx) => (el.deleted == false ? idx : "")).filter(String).length;
            const tablesSetLength = this.state.SetBlock.length;
            if (tableLength == 2 && tablesSetLength == 0)
                this.setState({ showAddSelect: false });
            if (tableLength == 0 && tablesSetLength > 0)
                this.setState({ showAddSelect: true });
            if (tableLength == 1 && tablesSetLength == 0)
                this.setState({ showAddSelect: true });
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
            const tableLength = this.state.tables.map((el, idx) => (el.deleted == false ? idx : "")).filter(String).length;
            if (tableLength == 1 && copiedBlock.length == 0)
                this.setState({ showAddSelect: true });
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
                queryIndex = this.state[keyType].map((obj) => obj.id).indexOf(currentTableId);
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
                queryIndex = this.state[keyType].map((obj) => obj.id).indexOf(currentTableId);
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
            let currentNewWhereSetClause;
            const keytype = type === "single" ? "whereClauses" : "whereClauseSet";
            let queryIndex;
            queryIndex = this.state[keytype].map((obj) => obj.id).indexOf(clickedQueryTableId);
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
                                                            return this.setState({ [keytype]: filteredWhereClauses });
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
        this.closeDrop = () => this.setState({ opened: false, autOpen: false });
        this.closeDropOnclickOutside = () => {
            if (this.state.dropId !== null && this.state.mouseleave)
                this.setState({ mouseleave: false });
            if (this.state.dropIdSet !== null && this.state.mouseleave)
                this.setState({ mouseleave: false });
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
                    if (checkedLayers.includes(item.id))
                        newArray.push(item);
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
            if (layerView)
                layerView._highlightIds.clear();
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
        this.dropdownItemClick = this.dropdownItemClick.bind(this);
        this.chooseAndOrSet = this.chooseAndOrSet.bind(this);
        this.closeDrop = this.closeDrop.bind(this);
        this.closeDropOnclickOutside = this.closeDropOnclickOutside.bind(this);
        this.onmouseLeave = this.onmouseLeave.bind(this);
        this.getAllCheckedLayers = this.getAllCheckedLayers.bind(this);
        this.getAllJimuLayerViews = this.getAllJimuLayerViews.bind(this);
        this.functionCounterIsChecked = this.functionCounterIsChecked.bind(this);
        this.getQuerySet = this.getQuerySet.bind(this);
    }
    activeViewChangeHandler(jmv) {
        if (jmv) {
            jmv.view.map.add(this.graphicLayerFound);
            jmv.view.map.add(this.graphicLayerSelected);
            const resultLayerList = [];
            jmv.clearSelectedFeatures();
            jmv.view.map.allLayers.forEach((f, index) => {
                if (f.type === "feature") {
                    if (!f.visible)
                        f.visible = true;
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
            this.props.dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.widgetStatePropChange("value", "initialMapZoom", jmv.view.zoom));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.isLayerSelected !== prevProps.isLayerSelected) { }
        if (this.state.whereClauses !== prevProps.whereClauses) { }
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
            this.setState({ widgetStateClosedChecked: false, widgetStateOpenedChecked: true, });
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
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_contextApi__WEBPACK_IMPORTED_MODULE_16__.TablesContext.Provider, { value: { list: this.state.resultsLayerSelected, parent: this, queryChanged: this.state.queryChanged } },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "row", style: { height: "50%", overflowY: "scroll" } },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "col-md-12" },
                                    this.state.tables.map((el, i) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_9__["default"], { className: "w-100", key: i, id: `row-${i}`, dropdownValueQuery: this.state.dropdownValueQuery, tables: this.state.tables, tablesId: el.id, whereClauses: this.state.whereClauses, getQueryAttribute: this.getQueryAttribute, getQuery: this.getQuery, textInputHandler: this.textInputHandler, dropdownItemHandler: this.dropdownItemClick, textFirstIncludedHandler: this.textFirstIncludedHandler, textSecondIncludedHandler: this.textSecondIncludedHandler, deleteTable: () => this.deleteTable(el.id), univocoSelectHandler: this.univocoSelectHandler, closeDrop: this.closeDrop, onmouseLeave: this.onmouseLeave, functionCounterIsChecked: this.functionCounterIsChecked, dropdowns: this.state.dropDowns, selectedId: this.state.selectedId, currentTable: el }))),
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
                                            counts < 2 ? (counts == 1 ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, "Visualizza le feature nel layer corrispondenti alla seguente espressione")) : ("")) : ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: width >= 626 ? "d-flex col-l-1 " : "d-flex col-md-8", style: { paddingLeft: 0, paddingRight: 0 } },
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_common_andorSelector__WEBPACK_IMPORTED_MODULE_15__["default"], { chooseAndOr: (e) => this.chooseAndOrSet(e, el.blockId) }),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "" },
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { className: "", onClick: () => this.deleteBlock(el.blockId), icon: true, type: "secondary" },
                                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, null))),
                                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: " " },
                                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { id: el.blockId, onClick: () => this.addTwoTable(el.blockId), className: "", icon: true, type: "secondary" },
                                                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_icons_outlined_editor_plus__WEBPACK_IMPORTED_MODULE_3__.PlusOutlined, null))))),
                                            el.tablesSet.map((innerEl, i, TableArray) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AddSetTable__WEBPACK_IMPORTED_MODULE_12__["default"], { className: "w-100", key: i, id: `row-${i}`, 
                                                // for Add set table............................
                                                tablesSet: this.state.tablesSet, tablesSetId: `${innerEl.id}` + "-" + `${el.blockId}`, whereClausesSet: this.state.whereClauseSet, 
                                                // End for Add set table............................
                                                getQueryAttribute: this.getQueryAttribute, getQuery: this.getQuerySet, textInputHandler: this.textInputHandler, dropdownItemHandler: this.dropdownItemClick, textFirstIncludedHandler: this.textFirstIncludedHandler, textSecondIncludedHandler: this.textSecondIncludedHandler, deleteTable: (e) => this.deleteBlockTable(`${innerEl.id}` + "-" + `${el.blockId}`, `${el.blockId}`), univocoSelectHandler: this.univocoSelectHandler, closeDrop: this.closeDrop, onmouseLeave: this.onmouseLeave, functionCounterIsChecked: this.functionCounterIsChecked, dropdownsSet: this.state.dropDownsSet, showDelete: counts > 2 ? true : false, showBlockDelete: counts === 2 && i == 0 ? true : false, blockId: el.blockId, deleteBlockAll: () => this.deleteBlockAll({ el, innerEl }), currentTable: innerEl })))));
                                    }),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                                    this.state.itemNotFound && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { className: "w-100", form: "basic", open: true, text: this.state.itemNotFound, type: "error", withIcon: true })))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9xdWVyeS1idWlsZGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDakI7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHFFQUFxRSxlQUFlLHFCQUFxQiwrQkFBK0IsMENBQTBDLHFCQUFxQixTQUFTLHNJQUFzSSxLQUFLLHFCQUFxQixLQUFLLEtBQUsscUVBQXFFLG1CQUFtQix1QkFBdUIsU0FBUyxLQUFLLGlDQUFpQyw2Q0FBNkMsc0JBQXNCLFNBQVMsS0FBSywrQkFBK0I7QUFDeG9CO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ21IO0FBQ2pCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2REFBNkQsb0JBQW9CLGdDQUFnQyx3QkFBd0IsMEJBQTBCLG9CQUFvQixxQkFBcUIsa0JBQWtCLHVCQUF1QixnQ0FBZ0MsV0FBVyxrQ0FBa0MsY0FBYyxrQkFBa0IsMEJBQTBCLGFBQWEsNEJBQTRCLFNBQVMsc0hBQXNILFVBQVUsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGdCQUFnQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSx1REFBdUQsd0JBQXdCLGtDQUFrQyxLQUFLLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLHVCQUF1QixLQUFLLGlCQUFpQiwyQkFBMkIsa0NBQWtDLEtBQUssY0FBYyxvQ0FBb0MsS0FBSyxpQkFBaUIsc0JBQXNCLDRCQUE0QixLQUFLLGdCQUFnQiw2QkFBNkIsS0FBSywyQ0FBMkM7QUFDanVDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNB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cGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcz84MzgzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3M/YWJiYiIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9jaGVjay5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9sZWZ0LnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvZGlyZWN0aW9uYWwvcmlnaHQuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL3N2Zy9vdXRsaW5lZC9lZGl0b3IvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vY2hlY2sudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL2xlZnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL3JpZ2h0LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2UudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9wbHVzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvY29ubmVjdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9jb25uZWN0b3IvYXR0cmlidXRlX3RhYmxlX2Nvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvY29udGV4dC9jb250ZXh0QXBpLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvQWRkU2V0VGFibGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvVGFibGUudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvY2FsbFRvQWN0aW9uQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9jb21wb25lbnRzL2NvbW1vbi9hbmRvclNlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9jb21wb25lbnRzL2NvbW1vbi9pbnB1dHMvY29tbW9uU2Vjb25kQ29uc3RydWN0b3IudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvY29tbW9uL2lucHV0cy9zZWxlY3QudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvbGF5ZXJTZWxlY3RDb21wb25lbnQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2NvbXBvbmVudHMvcGFnaW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvbGliL1Jlc2l6ZURldGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvdXRpbHMvcXVlcnlUYWJsZVZhbHVlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiZXNyaS9nZW9tZXRyeS9Qb2x5Z29uXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L2dlb21ldHJ5RW5naW5lXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL3Jlc3Qvc3VwcG9ydC9RdWVyeVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5jb2wtbWQtNCB7XFxuICAgIGZsZXg6IGF1dG87IH0gfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmNsb3NlLWNvbnRhaW5lci10YWJsZS1xdWVyeS1idWlsZGVyIHtcXG4gICAgZmxleDogYXV0bzsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJO0lBQ0ksVUFBVSxFQUFBLEVBQ2I7O0FBR0w7RUFDSTtJQUNJLFVBQVMsRUFBQSxFQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KXtcXHJcXG4gICAgLmNvbC1tZC00IHtcXHJcXG4gICAgICAgIGZsZXg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xcclxcbiAgICAuY2xvc2UtY29udGFpbmVyLXRhYmxlLXF1ZXJ5LWJ1aWxkZXJ7XFxyXFxuICAgICAgICBmbGV4OmF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLml0ZW0tdGFibGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjdmZjsgfVxcblxcbi5zZXR0aW5nLXN2Zzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzAwNWVjYTsgfVxcblxcbi5zZXR0aW5nLXN2ZyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlOyB9XFxuXFxuI3dyYXAge1xcbiAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50OyB9XFxuXFxuLmluY2x1ZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4jaW5wdXRzIHtcXG4gIHdpZHRoOiAyMCUgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHFCQUFvQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pdGVtLXRhYmxlOmhvdmVye1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWY3ZmY7XFxyXFxufVxcclxcbi5zZXR0aW5nLXN2Zzpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogIzAwNWVjYTtcXHJcXG59XFxyXFxuLnNldHRpbmctc3Zne1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxyXFxufVxcclxcblxcclxcbiN3cmFwe1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmNsdWRle1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXRze1xcclxcbiAgICB3aWR0aDoyMCUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGEgc2luZ2xlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSAmJiByZVdoaXRlc3BhY2UudGVzdChzdHJpbmcuY2hhckF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkRW5kSW5kZXg7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsInZhciBiYXNlVHJpbSA9IHJlcXVpcmUoJy4vX2Jhc2VUcmltJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwibTYuMDM2IDEyLjE1NyA4LjAxLTguMDFhLjUuNSAwIDEgMSAuNzA3LjcwN2wtOC4wMSA4LjAxYTEgMSAwIDAgMS0xLjQxNSAwTDEuMTQ2IDguNjgyYS41LjUgMCAxIDEgLjcwOC0uNzA3bDQuMTgyIDQuMTgyWlxcXCIgZmlsbD1cXFwiIzAwMFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDE2IDE2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOS40MzguOTk0Yy4yMTMgMCAuMzk3LjE0Ni40NC4zNS4xNTEuNzIyLjI1NyAxLjM0LjMxNiAxLjg1Mi4zNzQuMTYuNzI1LjM2MiAxLjA0OC41OTlsMS43MjgtLjY3NmEuNDU1LjQ1NSAwIDAgMSAuNTU2LjE4OGwxLjQyIDIuMzk0YS40My40MyAwIDAgMS0uMDkxLjU0NyAyMS45OCAyMS45OCAwIDAgMS0xLjQ5IDEuMTk0IDUuMTcgNS4xNyAwIDAgMS0uMDA3IDEuMTgzbDEuNDY0IDEuMTE5YS40My40MyAwIDAgMSAuMTExLjU2M2wtMS40MiAyLjM5NGEuNDU0LjQ1NCAwIDAgMS0uNTMuMTk3IDIyLjQ0NSAyMi40NDUgMCAwIDEtMS44MDctLjY2Yy0uMzI1LjIzMy0uNjc5LjQzLTEuMDU1LjU4NmwtLjI2MyAxLjc5NGEuNDQ2LjQ0NiAwIDAgMS0uNDQ1LjM3Nkg2LjU3NGEuNDQ2LjQ0NiAwIDAgMS0uNDQtLjM1IDIxLjAxOSAyMS4wMTkgMCAwIDEtLjMxNy0xLjg1MyA1LjM0IDUuMzQgMCAwIDEtMS4wNDctLjU5OGwtMS43MjguNjc1YS40NTUuNDU1IDAgMCAxLS41NTYtLjE4N2wtMS40Mi0yLjM5NWEuNDMuNDMgMCAwIDEgLjA5MS0uNTQ2Yy41NjctLjQ5IDEuMDYzLS44ODggMS40OS0xLjE5NGE1LjE2NyA1LjE2NyAwIDAgMSAuMDA4LTEuMTgzTDEuMTkgNi4yNDNhLjQzLjQzIDAgMCAxLS4xMTItLjU2MmwxLjQyLTIuMzk1YS40NTUuNDU1IDAgMCAxIC41MzEtLjE5NmMuNzE5LjIzMyAxLjMyMS40NTMgMS44MDcuNjYuMzI0LS4yMzMuNjc5LS40MyAxLjA1Ni0uNTg3bC4yNjItMS43OTRBLjQ0Ni40NDYgMCAwIDEgNi42Ljk5NGgyLjgzOVptLS4zNjUgMUg2Ljk4NWwtLjI4IDEuODY2LS40NjcuMTljLS4yMzUuMDk1LS40Ni4yMS0uNjcyLjM0bC0uMjA3LjEzNi0uNDIuMjkzLS40NzYtLjE5N2MtLjMyOC0uMTM3LS43MTgtLjI4MS0xLjE2OS0uNDMzbC0uMjIxLS4wNzQtMS4wNDUgMS43MTlMMy41OSA2Ljk5OWwtLjA2LjQ3OWE0LjEyNyA0LjEyNyAwIDAgMC0uMDIxLjgxNmwuMDE0LjE0NC4wNTguNDkyLS40MTkuMjk0Yy0uMjg4LjIwMy0uNjE1LjQ1MS0uOTc5Ljc0NmwtLjE3Ny4xNDUgMS4wNDMgMS43MiAxLjg0NS0uNzAzLjQwNi4yOWMuMjA0LjE0Ni40Mi4yNzQuNjQ1LjM4NGwuMjI4LjEwMy40NzQuMTk5LjA1OS40OWMuMDQuMzM4LjEwMy43MzEuMTkgMS4xNzdsLjA0My4yMTloMi4wODhsLjI4Mi0xLjg2Ny40NjYtLjE5Yy4yMzYtLjA5NS40Ni0uMjEuNjcyLS4zNGwuMjA3LS4xMzYuNDE5LS4yOTMuNDc2LjE5OGMuMzMuMTM2LjcyLjI4IDEuMTcuNDMzbC4yMi4wNzIgMS4wNDQtMS43MTgtMS41Ni0xLjE2NS4wNi0uNDc5YTQuMTMxIDQuMTMxIDAgMCAwIC4wMi0uODE1bC0uMDEzLS4xNDQtLjA2LS40OTIuNDItLjI5NWExOC4xIDE4LjEgMCAwIDAgLjk4LS43NDZsLjE3Ni0uMTQ2LTEuMDQzLTEuNzItMS44NDQuNzA1LS40MDYtLjI5YTQuNDk2IDQuNDk2IDAgMCAwLS42NDYtLjM4NWwtLjIyOC0uMTAzLS40NzQtLjE5OS0uMDU4LS40OWMtLjAzMi0uMjctLjA4LS41NzYtLjE0LS45MTZsLS4wOTQtLjQ4Wm0tMS4wNjcgM2EzIDMgMCAxIDEgMCA2IDMgMyAwIDAgMSAwLTZabTAgMWEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0xMS4zNDcgMi4xNDZhLjQ4NS40ODUgMCAwIDEgMCAuNzA4TDUuNzYgOGw1LjU4NyA1LjE0NmEuNDg2LjQ4NiAwIDAgMSAwIC43MDguNTM4LjUzOCAwIDAgMS0uNzM4IDBsLTUuOTU2LTUuNWEuNDg1LjQ4NSAwIDAgMSAwLS43MDhsNS45NTYtNS41YS41MzguNTM4IDAgMCAxIC43MzggMFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTQuNjUzIDEzLjg1NGEuNDg1LjQ4NSAwIDAgMSAwLS43MDhMMTAuMjQgOCA0LjY1MyAyLjg1NGEuNDg1LjQ4NSAwIDAgMSAwLS43MDguNTM4LjUzOCAwIDAgMSAuNzM4IDBsNS45NTYgNS41YS40ODUuNDg1IDAgMCAxIDAgLjcwOGwtNS45NTYgNS41YS41MzguNTM4IDAgMCAxLS43MzggMFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtOC43NDUgOCA2LjEgNi4xYS41MjcuNTI3IDAgMSAxLS43NDUuNzQ2TDggOC43NDZsLTYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0Ni0uNzQ2bDYuMS02LjEtNi4xLTYuMWEuNTI3LjUyNyAwIDAgMSAuNzQ2LS43NDZsNi4xIDYuMSA2LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYuNzQ2TDguNzQ2IDhaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTcuNSAwYS41LjUgMCAwIDAtLjUuNVY3SC41YS41LjUgMCAwIDAgMCAxSDd2Ni41YS41LjUgMCAwIDAgMSAwVjhoNi41YS41LjUgMCAwIDAgMC0xSDhWLjVhLjUuNSAwIDAgMC0uNS0uNVpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vY2hlY2suc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgU2V0dGluZ091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2RpcmVjdGlvbmFsL2xlZnQuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExlZnRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9kaXJlY3Rpb25hbC9yaWdodC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgUmlnaHRPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvY2xvc2Uuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlT3V0bGluZWQgPSAocHJvcHM6IFNWR0NvbXBvbmVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgU1ZHID0gd2luZG93LlNWR1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCAuLi5vdGhlcnMgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdqaW11LWljb24gamltdS1pY29uLWNvbXBvbmVudCcsIGNsYXNzTmFtZSlcclxuICBpZiAoIVNWRykgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzfSB7Li4ub3RoZXJzIGFzIGFueX0gLz5cclxuICByZXR1cm4gPFNWRyBjbGFzc05hbWU9e2NsYXNzZXN9IHNyYz17c3JjfSB7Li4ub3RoZXJzfSAvPlxyXG59XHJcbiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvZWRpdG9yL3BsdXMuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdXNPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIlxyXG5cclxudHlwZSBsYXllckNvbnRlbnRzT2JqZWN0VHlwZSA9IHtcclxuICAgIGlkOnN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6YW55W11cclxufVxyXG5cclxudHlwZSBzZWxlY3RlZExheWVyVHlwZSA9IHtcclxuICAgIGlkOnN0cmluZyxcclxuICAgIGF0dHJpYnV0ZXM6YW55W11cclxufVxyXG5cclxuY2xhc3MgSGVscGVyIHtcclxuXHJcbiAgICBzZXRRdWVyeUFycmF5ID0gW107XHJcbiAgICBzZXRPdXRGaWVsZHMgPSBbXTtcclxuXHJcbiAgICBnZXRMYXllckF0dHJpYnV0ZXMgPSAoc2VsZWN0ZWRMYXllcklkOnN0cmluZyxsYXllckNvbnRlbnRzOmxheWVyQ29udGVudHNPYmplY3RUeXBlW10pOmFueVtdPT57XHJcbiAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBbXTtcclxuICAgICAgICBpZiAobGF5ZXJDb250ZW50cz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNPYmplY3QgPSBsYXllckNvbnRlbnRzLmZpbmQoKGxheWVyQ29udGVudDpsYXllckNvbnRlbnRzT2JqZWN0VHlwZSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChsYXllckNvbnRlbnQ/LmlkID09PSBzZWxlY3RlZExheWVySWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsYXllckNvbnRlbnQ/LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT2JqZWN0Py5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHJpYnV0ZUtleUFycmF5ID0gKGF0dHJpYnV0ZXM6YW55KTpzdHJpbmdbXT0+e1xyXG4gICAgICAgIGxldCByZXR1cm5lZEtleXMgPSBbXTtcclxuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgcmV0dXJuZWRLZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5lZEtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyID0ocmVzdWx0czphbnksY2hlY2tlZExheWVyczpzdHJpbmdbXSk6c2VsZWN0ZWRMYXllclR5cGVbXT0+ey8vc3RlcDUgZnJvbSBzZWxlY3RlZCBpdGVtcyBnZXQgdGhlaXIgbGF5ZXJzXHJcbiAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICBpZiAocmVzdWx0cz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZExheWVyQ29udGVudHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudExheWVySWQgPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTGF5ZXJzLmluZGV4T2YoY3VycmVudExheWVySWQpICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJDb250ZW50c1tcImlkXCJdID0gaXRlbXNbMF0/LmxheWVyPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiYXR0cmlidXRlc1wiXSA9IHRoaXMuZ2V0QXR0cmlidXRlcyhpdGVtcyk7Ly9zdGVwNiBwYWNrYWdpbmcgYXR0cmlidXRlcyBhbmQga2VlcGluZyBsb24gYW5kIGxhdGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2VsZWN0ZWRMYXllckNvbnRlbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgICAgICAgICAgfSxbXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkTGF5ZXJzQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlcyA9IChpdGVtczphbnlbXSk6YW55W109PntcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQXJyYXkgPSBpdGVtcy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW0pPT57XHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5hdHRyaWJ1dGVzKXtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmdlb21ldHJ5KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGl0ZW0uZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBnZW9tZXRyeT8ubGF0aXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gZ2VvbWV0cnk/LmxvbmdpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvbmdpdHVkZSAmJiBsYXRpdHVkZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goey4uLml0ZW0uYXR0cmlidXRlcyxsb2NhdGlvbjpbbGF0aXR1ZGUsbG9uZ2l0dWRlXX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgICAgIH0sW10pXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1iZXJPZkF0dHJpYnV0ZXMgPSAobGF5ZXJzQ29udGVudHM6e2lkOnN0cmluZyxhdHRyaWJ1dGVzOmFueVtdfVtdKT0+e1xyXG4gICAgICAgIGxldCBsYXllckNvbnRlbnRzT2JqZWN0ID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaT0wO2kgPCBsYXllcnNDb250ZW50cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgIGxheWVyQ29udGVudHNPYmplY3QgPSB7Li4ubGF5ZXJDb250ZW50c09iamVjdCxbbGF5ZXJzQ29udGVudHNbaV0/LmlkXTpsYXllcnNDb250ZW50c1tpXT8uYXR0cmlidXRlcz8ubGVuZ3RoPz8wfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGF5ZXJDb250ZW50c09iamVjdDtcclxuICAgIH1cclxuIFxyXG4gICAgZ2V0Q2xpY2tlZExheWVyU3RhdHVzID0gKHJlc3VsdHM6YW55W10sc2VsZWN0ZWRMYXllcjpzZWxlY3RlZExheWVyVHlwZVtdKTpib29sZWFuPT57XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwICYmIHNlbGVjdGVkTGF5ZXI/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDtpIDwgcmVzdWx0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBsYXllcklkID0gcmVzdWx0c1tpXT8uZ3JhcGhpYz8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBzZWxlY3RlZExheWVyLmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0uaWQgPT09IGxheWVySWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZMYXllcldhc0FkZGVkID0gKGxheWVySWQ6c3RyaW5nLG1hcExheWVyc0l0ZW1zOmFueVtdKT0+e1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICBpZiAobWFwTGF5ZXJzSXRlbXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBpbmRleCA9IG1hcExheWVyc0l0ZW1zLmZpbmRJbmRleCgoaXRlbSk9Pml0ZW0/LmlkID09PSBsYXllcklkKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9wZW5UYWJsZUF0dHJpYnV0ZSA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgYXJpYUV4cGFuZGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1jb250cm9sbGVyXCIpO1xyXG4gICAgICAgIGlmIChhcmlhRXhwYW5kZWRFbGVtZW50LmFyaWFFeHBhbmRlZCA9PT0gXCJmYWxzZVwiKXtcclxuICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGFyaWFFeHBhbmRlZEVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBdHRyaWJ1dGVUYWJsZSA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgYXJpYUV4cGFuZGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhci1jb250cm9sbGVyXCIpO1xyXG4gICAgICAgIGlmIChhcmlhRXhwYW5kZWRFbGVtZW50LmFyaWFFeHBhbmRlZCA9PT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgYXJpYUV4cGFuZGVkRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1iZXJPZkl0ZW1zSW5GaWVsZCA9IChmaWVsZDpzdHJpbmcsc2VsZWN0ZWRBdHRyaWJ1dGVzOmFueVtdKT0+e1xyXG4gICAgICAgIGxldCBudW1iZXJPZkl0ZW1zID0gMDtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRBdHRyaWJ1dGVzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgbGV0IHZhbHVlQXJyID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDtpPCBzZWxlY3RlZEF0dHJpYnV0ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUFyci5wdXNoKHNlbGVjdGVkQXR0cmlidXRlc1tpXVtmaWVsZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG51bWJlck9mSXRlbXMgPSB2YWx1ZUFyci5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1iZXJPZkl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhpZ2hsaWdodGVkSWRzID0gKGZlYXR1cmVzOmFueVtdKT0+e1xyXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodElkcyA9IFtdO1xyXG4gICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGgpZmVhdHVyZXMuZm9yRWFjaChlbD0+aGlnaGxpZ2h0SWRzLnB1c2goZWwuYXR0cmlidXRlcy5PQkpFQ1RJRCkpXHJcbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodElkcztcclxuICAgIH1cclxuXHJcbiAgICBsaWtlbHlRdWVyeSA9IChhdHRyaWJ1dGVRdWVyeSxxdWVyeVZhbHVlLHZhbHVlKT0+e1xyXG4gICAgICAgIHN3aXRjaChxdWVyeVZhbHVlKXtcclxuICAgICAgICAgICAgY2FzZSBcIkxJS0UlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlUXVlcnl9IExJS0UgJyUke3ZhbHVlfSdgO1xyXG4gICAgICAgICAgICBjYXNlIFwiJUxJS0UlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlUXVlcnl9IExJS0UgJyUke3ZhbHVlfSUnYDtcclxuICAgICAgICAgICAgY2FzZSBcIiVMSUtFXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7YXR0cmlidXRlUXVlcnl9IExJS0UgJyUke3ZhbHVlfSdgO1xyXG4gICAgICAgICAgICBjYXNlIFwiTk9UIExJS0VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTk9UIExJS0UgJyUke3ZhbHVlfSUnYDsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcXVlcnlTZXRDb25zdHJ1Y3RvciA9IChxdWVyeTphbnksc2V0V2hlcmVDbGF1c2U6YW55W10sQW5kT3JTZXQ6YW55LGZpZWxkOnN0cmluZyk9PntcclxuICAgICAgICBsZXQgY3VycmVudFF1ZXJ5ID0gcXVlcnkud2hlcmU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZXRRdWVyeUFycmF5Lmxlbmd0aCA8IHNldFdoZXJlQ2xhdXNlLmxlbmd0aC0xLFwiY2hlY2tpbmdcIilcclxuICAgICAgICBpZiAodGhpcy5zZXRRdWVyeUFycmF5Lmxlbmd0aCA8IHNldFdoZXJlQ2xhdXNlLmxlbmd0aC0xKXtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXJ5ID0gcXVlcnkud2hlcmUgKyAgXCIgXCIgKyBBbmRPclNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRRdWVyeUFycmF5LnB1c2goY3VycmVudFF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnNldE91dEZpZWxkcy5wdXNoKGAke2ZpZWxkfWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2V0UXVlcnlBcnJheSx0aGlzLnNldE91dEZpZWxkcyxcIm1ha2Ugc3VyZVwiKVxyXG4gICAgICAgIC8vIGlmKHRoaXMuc2V0UXVlcnlBcnJheS5sZW5ndGggPj0gc2V0V2hlcmVDbGF1c2UubGVuZ3RoKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHtxdWVyeVNldEFycmF5OnRoaXMuc2V0UXVlcnlBcnJheSxxdWVyeVNldE91dGZpZWxkczp0aGlzLnNldE91dEZpZWxkc31cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9vcFRvR2V0U3RyaW5nKHN0cmluZ0Fycjogc3RyaW5nW10pIHtcclxuICAgICAgICBsZXQgbmV3U3RyaW5nID0gXCIgXCI7XHJcbiAgICAgICAgaWYgKHN0cmluZ0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAgIG5ld1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHN0cmluZ0FyclswXSk7XHJcbiAgICAgICAgICBuZXdTdHJpbmcgPSBuZXdTdHJpbmcucmVwbGFjZSgvXCIvZywgYCdgKTtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyaW5nQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0cmluZ1ZhbCA9IEpTT04uc3RyaW5naWZ5KHN0cmluZ0FycltpXSkucmVwbGFjZSgvXCIvZywgYCdgKTtcclxuICAgICAgICAgICAgbmV3U3RyaW5nICs9IFwiLFwiICsgbmV3U3RyaW5nVmFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3U3RyaW5nO1xyXG4gICAgICB9XHJcblxyXG4gICAgY2hlY2tQYXJlbnRoZXNpcyh2YWw6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBicmFja2V0cyA9IFtcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiXTtcclxuICAgICAgICBpZiAoYnJhY2tldHMuaW5jbHVkZXModmFsLmNoYXJBdCgwKSkpIHtcclxuICAgICAgICAgIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnNBbnlMZXR0ZXJzID0gKHN0cikgPT4gL1thLXpBLVpdLy50ZXN0KHN0cik7XHJcblxyXG4gICAgc2V0UXVlcnlDb25zdHJ1Y3RvciA9IChxdWVyeVJlcXVlc3QsIGZpcnN0UXVlcnksIHNlY29uZFF1ZXJ5VGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChxdWVyeVJlcXVlc3QpIHtcclxuICAgICAgICAgIGNhc2UgXCJMSUtFJVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XHJcbiAgICAgICAgICBjYXNlIFwiJUxJS0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xyXG4gICAgICAgICAgY2FzZSBcIiVMSUtFJVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xyXG4gICAgICAgICAgY2FzZSBcIk5PVCBMSUtFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBOT1QgTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xyXG4gICAgICAgICAgY2FzZSBcImlzIG51bGxcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IGlzIG51bGxgO1xyXG4gICAgICAgICAgY2FzZSBcImlzIG5vdCBudWxsXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBpcyBub3QgbnVsbGA7XHJcbiAgICAgICAgICBjYXNlIFwiSU5cIjpcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtcclxuICAgICAgICAgICAgICAgIFwiJ1wiICsgc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIicsICdcIikgKyBcIidcIlxyXG4gICAgICAgICAgICAgIH0pYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BhcmVudGhlc2lzKHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gdGhpcy5sb29wVG9HZXRTdHJpbmcoc2Vjb25kUXVlcnlUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IElOICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSBcIk5PVF9JTlwiOlxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGBOT1QgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtcclxuICAgICAgICAgICAgICAgIFwiJ1wiICsgc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIicsICdcIikgKyBcIidcIlxyXG4gICAgICAgICAgICAgIH0pYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1BhcmVudGhlc2lzKHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gdGhpcy5sb29wVG9HZXRTdHJpbmcoc2Vjb25kUXVlcnlUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBOT1QgICR7Zmlyc3RRdWVyeX0gSU4gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYE5PVCAgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgXCJpbmNsdWRlZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYCgke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gQU5EICR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH0pYDtcclxuICAgICAgICAgIGNhc2UgXCJpc19ub3RfaW5jbHVkZWRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGAoJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuZmlyc3RUeHR9IE9SICR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH0pYDtcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGxldCBxdWVyeVN0cmluZyA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAke3NlY29uZFF1ZXJ5VGFyZ2V0fWA7XHJcbiAgICAgICAgICAgICAgY29uc3QgYnJhY2tldHMgPSBbXCIoXCIsIFwiKVwiLCBcIltcIiwgXCJdXCIsIFwie1wiLCBcIn1cIl07XHJcbiAgICAgICAgICAgICAgaWYgKGJyYWNrZXRzLmluY2x1ZGVzKHNlY29uZFF1ZXJ5VGFyZ2V0LmNoYXJBdCgwKSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmluZ0ZpZWRWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KHNlY29uZFF1ZXJ5VGFyZ2V0KS5yZXBsYWNlKC9cIi9nLCBgJ2ApXHJcbiAgICAgICAgICAgICAgICBxdWVyeVN0cmluZz0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gcXVlcnlTdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgLy8gdGFibGVTZXRDb3VudHMgPSAodGFibGVTZXRDb3VudHM6e2lkOnN0cmluZyxkZWxldGVkOmJvb2xlYW59W10pPT57XHJcbiAgICAvLyAgICAgbGV0IGNvdW50cyA9IDBcclxuICAgIC8vICAgICBpZiAodGFibGVTZXRDb3VudHMubGVuZ3RoKXtcclxuICAgIC8vICAgICAgIGNvbnN0IGNvcGllZFRhYmxlU2V0Q291bnRzID0gWy4uLnRhYmxlU2V0Q291bnRzXTtcclxuICAgIC8vICAgICAgIGNvcGllZFRhYmxlU2V0Q291bnRzLmZpbHRlcigoaXRlbSk9PiFpdGVtLmRlbGV0ZWQpO1xyXG4gICAgLy8gICAgICAgY291bnRzID0gY29waWVkVGFibGVTZXRDb3VudHMubGVuZ3RoXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBjb3VudHM7XHJcbiAgICAvLyAgIH1cclxuXHJcbiAgICBnZXRRdWVyeVNldFZhbHVlID0gKCk9Pih7cXVlcnlTZXRBcnJheTp0aGlzLnNldFF1ZXJ5QXJyYXkscXVlcnlTZXRPdXRmaWVsZHM6dGhpcy5zZXRPdXRGaWVsZHN9KVxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEhlbHBlcigpOyIsIlxyXG5pbXBvcnQgeyBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xyXG5pbXBvcnQgeyBhcHBBY3Rpb25zIH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5cclxudHlwZSBzcGF0aWFsUmVsYXRpb25zaGlwVHlwZSA9IFwiaW50ZXJzZWN0c1wiIHwgXCJjb250YWluc1wiIHwgXCJjcm9zc2VzXCIgfCBcImRpc2pvaW50XCIgfCBcImVudmVsb3BlLWludGVyc2VjdHNcIiB8IFwiaW5kZXgtaW50ZXJzZWN0c1wiIHwgXCJvdmVybGFwc1wiIHwgXCJ0b3VjaGVzXCIgfCBcIndpdGhpblwiIHwgXCJyZWxhdGlvblwiXHJcblxyXG50eXBlIGxheWVyT3BlblR5cGUgPSB7XHJcbiAgICBnZW9tZXRyeTphbnksXHJcbiAgICB0eXBlU2VsZWN0ZWQ6c3BhdGlhbFJlbGF0aW9uc2hpcFR5cGUsXHJcbiAgICB3aGVyZT86c3RyaW5nLFxyXG4gICAgZ3JhcGhpY3NGb3VuZD86YW55LFxyXG4gICAgdmFsdWVCdWZmZXI/OmFueVxyXG59XHJcblxyXG50eXBlIGluaXRPYmpUeXBlID0ge1xyXG4gICAgcmVzdWx0czphbnlbXSxcclxuICAgIGFsbENoZWNrZWRMYXllcnM/OmFueVtdLFxyXG4gICAgaXNMYXllckNoZWNrZWQ/OmJvb2xlYW4sXHJcbiAgICBjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXSxcclxuICAgIG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9LFxyXG4gICAgbGF5ZXJPcGVuPzpsYXllck9wZW5UeXBlLFxyXG4gICAgY3JlYXRlVGFibGU/OnRydWVcclxufVxyXG5cclxudHlwZSBzZWxlY3RlZExheWVyVHlwZSA9IHtpZDpzdHJpbmcsYXR0cmlidXRlczphbnlbXX1cclxuXHJcbmNsYXNzIEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yIHtcclxuXHJcbiAgICBzdGF0aWMgYWN0aXZlVmlldzpKaW11TWFwVmlldyA9IG51bGw7XHJcbiAgICBzdGF0aWMgc2VsZjphbnkgPSBudWxsO1xyXG5cclxuICAgIGFsbENoZWNrZWRMYXllcnM/OmFueVtdO1xyXG4gICAgY2hlY2tlZExheWVycz86c3RyaW5nW107XHJcbiAgICBudW1iZXJPZkF0dHJpYnV0ZXM/Ontba2V5OnN0cmluZ106c3RyaW5nfTtcclxuICAgIGNyZWF0ZVRhYmxlOmJvb2xlYW47XHJcbiAgICBsYXllck9wZW46bGF5ZXJPcGVuVHlwZTtcclxuICAgIGlzTGF5ZXJDaGVja2VkOmJvb2xlYW5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoYWN0aXZlVmlldzpKaW11TWFwVmlldyxzZWxmOmFueSl7XHJcbiAgICAgICAgQXR0cmlidXRlVGFibGVDb25uZWN0b3IuYWN0aXZlVmlldyA9IGFjdGl2ZVZpZXc7XHJcbiAgICAgICAgQXR0cmlidXRlVGFibGVDb25uZWN0b3Iuc2VsZiA9IHNlbGY7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChvYmo6aW5pdE9ialR5cGUpeyAgXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBvYmoucmVzdWx0cztcclxuICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gb2JqLmFsbENoZWNrZWRMYXllcnM7XHJcbiAgICAgICAgbGV0IGNyZWF0ZVRhYmxlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgaXNMYXllckNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY2hlY2tlZExheWVycyA9IG51bGw7XHJcbiAgICAgICAgbGV0IG51bWJlck9mQXR0cmlidXRlcyA9IG51bGw7XHJcbiAgICAgICAgbGV0IGxheWVyT3BlbiA9IG51bGw7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImNyZWF0ZVRhYmxlXCIpKXtcclxuICAgICAgICAgICAgY3JlYXRlVGFibGUgPSBvYmouY3JlYXRlVGFibGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJpc0xheWVyQ2hlY2tlZFwiKSl7XHJcbiAgICAgICAgICAgIGlzTGF5ZXJDaGVja2VkID0gb2JqLmlzTGF5ZXJDaGVja2VkIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwiY2hlY2tlZExheWVyc1wiKSl7XHJcbiAgICAgICAgICAgIGNoZWNrZWRMYXllcnMgPSBvYmouY2hlY2tlZExheWVycyBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcIm51bWJlck9mQXR0cmlidXRlc1wiKSl7XHJcbiAgICAgICAgICAgIG51bWJlck9mQXR0cmlidXRlcyA9IG9iai5udW1iZXJPZkF0dHJpYnV0ZXMgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJsYXllck9wZW5cIikpe1xyXG4gICAgICAgICAgICBsYXllck9wZW4gPSBvYmoubGF5ZXJPcGVuIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWF0ZVRhYmxlID0gY3JlYXRlVGFibGU7XHJcbiAgICAgICAgdGhpcy5pc0xheWVyQ2hlY2tlZCA9IGlzTGF5ZXJDaGVja2VkO1xyXG4gICAgICAgIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVycyhhbGxDaGVja2VkTGF5ZXJzLHJlc3VsdHMpO1xyXG4gICAgICAgIHRoaXMuc2V0Q2hlY2tlZExheWVycyhhbGxDaGVja2VkTGF5ZXJzLGNoZWNrZWRMYXllcnMpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVycyhhbGxDaGVja2VkTGF5ZXJzKTtcclxuICAgICAgICB0aGlzLnNldE51bWJlck9mQXR0cmlidXRlcyhyZXN1bHRzLG51bWJlck9mQXR0cmlidXRlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRMYXllck9wZW4obGF5ZXJPcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FycmF5ID0gKHZhbCk9PkFycmF5LmlzQXJyYXkodmFsKTtcclxuXHJcbiAgICBpc09iamVjdCA9ICh2YWwpPT5PYmplY3Qua2V5cyh2YWwpLmxlbmd0aCA+IDAgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcclxuXHJcbiAgICBsb29wTGF5ZXJHZXRJZHMgPSAobGF5ZXI6YW55W10pPT57XHJcbiAgICAgICAgbGV0IGlkc0FycmF5ID0gW107XHJcbiAgICAgICAgaWYgKGxheWVyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGlkc0FycmF5ID0gbGF5ZXIucmVkdWNlKChuZXdBcnJheSxpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5pZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgICAgICAgICAgfSxbXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlkc0FycmF5O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc2V0Q2hlY2tlZExheWVycyA9IChjdXJyZW50QWxsQ2hlY2hlZExheWVyczphbnksY2hlY2tlZExheWVycz86c3RyaW5nW10sKT0+e1xyXG4gICAgICAgIGxldCBhbGxDaGVja2VkTGF5ZXJzID0gY3VycmVudEFsbENoZWNoZWRMYXllcnM7XHJcbiAgICAgICAgaWYgKCFhbGxDaGVja2VkTGF5ZXJzKXtcclxuICAgICAgICAgICAgYWxsQ2hlY2tlZExheWVycyA9IHRoaXMuYWxsQ2hlY2tlZExheWVycztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoZWNrZWRMYXllcnMpe1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGVja2VkTGF5ZXJzQXJyID0gW107XHJcbiAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdChhbGxDaGVja2VkTGF5ZXJzKSl7XHJcbiAgICAgICAgICAgICAgICBjaGVja2VkTGF5ZXJzQXJyLnB1c2goYWxsQ2hlY2tlZExheWVycy5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzQXJyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoYWxsQ2hlY2tlZExheWVycykpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMYXllcnNBcnIubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkTGF5ZXJzQXJyID0gWy4uLmNoZWNrZWRMYXllcnNBcnIsLi4udGhpcy5sb29wTGF5ZXJHZXRJZHMoYWxsQ2hlY2tlZExheWVycyldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZExheWVycyA9IGNoZWNrZWRMYXllcnNBcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZExheWVycyA9IHRoaXMubG9vcExheWVyR2V0SWRzKGFsbENoZWNrZWRMYXllcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZExheWVycyA9IGNoZWNrZWRMYXllcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEFsbENoZWNrZWRMYXllcnNGcm9tUmVzdWx0cyA9IChyZXN1bHRzOmFueVtdKT0+e1xyXG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgY29uc3QgYWxsQ2hlY2tlZExheWVycyA9IHJlc3VsdHMucmVkdWNlKChuZXdBcnJheSxpdGVtczphbnlbXSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtcz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtc1swXT8ubGF5ZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICAgICAgICAgIH0sW10pXHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZExheWVycyA9IGFsbENoZWNrZWRMYXllcnM7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgXCJQYXNzIHJlc3VsdHMgYWZ0ZXIgcXVlcnlcIlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRBbGxDaGVja2VkTGF5ZXJzID0gKGFsbENoZWNrZWRMYXllcnM6YW55LHJlc3VsdHM6YW55W10pPT57XHJcbiAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdChhbGxDaGVja2VkTGF5ZXJzKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbENoZWNrZWRMYXllcnMgPSBbYWxsQ2hlY2tlZExheWVyc11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FycmF5KGFsbENoZWNrZWRMYXllcnMpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZExheWVycyA9IGFsbENoZWNrZWRMYXllcnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVyc0Zyb21SZXN1bHRzKHJlc3VsdHMpO1xyXG4gXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFNlbGVjdGVkQ29udGVudHNMYXllciA9KHJlc3VsdHM6YW55KTpzZWxlY3RlZExheWVyVHlwZVtdPT57XHJcbiAgICAgICAgY29uc3QgY2hlY2tlZExheWVycyA9IHRoaXMuY2hlY2tlZExheWVycz8/W107XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICBpZiAocmVzdWx0cz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZExheWVyQ29udGVudHMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudExheWVySWQgPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTGF5ZXJzLmluZGV4T2YoY3VycmVudExheWVySWQpICE9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJDb250ZW50c1tcImlkXCJdID0gaXRlbXNbMF0/LmxheWVyPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiYXR0cmlidXRlc1wiXSA9IHRoaXMuZ2V0QXR0cmlidXRlcyhpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goc2VsZWN0ZWRMYXllckNvbnRlbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgICAgICAgICAgfSxbXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkTGF5ZXJzQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlcyA9IChpdGVtczphbnlbXSk6YW55W109PntcclxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQXJyYXkgPSBpdGVtcy5yZWR1Y2UoKG5ld0FycmF5LGl0ZW0pPT57XHJcbiAgICAgICAgICAgIGlmIChpdGVtPy5hdHRyaWJ1dGVzKXtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmdlb21ldHJ5KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGl0ZW0uZ2VvbWV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBnZW9tZXRyeT8ubGF0aXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubGF0aXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9uZ2l0dWRlID0gZ2VvbWV0cnk/LmxvbmdpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvbmdpdHVkZSAmJiBsYXRpdHVkZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goey4uLml0ZW0uYXR0cmlidXRlcyxsb2NhdGlvbjpbbGF0aXR1ZGUsbG9uZ2l0dWRlXX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgICAgIH0sW10pXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROdW1iZXJPZkF0dHJpYnV0ZXMgPSAocmVzdWx0czphbnlbXSxudW1iZXJPZkF0dHJpYnV0ZXM/Ontba2V5OnN0cmluZ106c3RyaW5nfSwpPT57XHJcbiAgICAgICAgaWYgKG51bWJlck9mQXR0cmlidXRlcyl7XHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzID0gbnVtYmVyT2ZBdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxheWVyc0NvbnRlbnRzID0gdGhpcy5nZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIocmVzdWx0cyk7XHJcbiAgICAgICAgbGV0IGxheWVyQ29udGVudHNPYmplY3QgPSB7fTtcclxuICAgICAgICBpZiAobGF5ZXJzQ29udGVudHM/Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDtpIDwgbGF5ZXJzQ29udGVudHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBsYXllckNvbnRlbnRzT2JqZWN0ID0gey4uLmxheWVyQ29udGVudHNPYmplY3QsW2xheWVyc0NvbnRlbnRzW2ldPy5pZF06bGF5ZXJzQ29udGVudHNbaV0/LmF0dHJpYnV0ZXM/Lmxlbmd0aD8/MH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzID0gbGF5ZXJDb250ZW50c09iamVjdFxyXG4gICAgfVxyXG5cclxuICAgIHNldExheWVyT3BlbiA9IChsYXllck9wZW4/OmxheWVyT3BlblR5cGUpPT57XHJcbiAgICAgICAgaWYgKGxheWVyT3Blbil7XHJcbiAgICAgICAgICAgIHRoaXMubGF5ZXJPcGVuID0gbGF5ZXJPcGVuO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGF5ZXJPcGVuID0ge1xyXG4gICAgICAgICAgICBnZW9tZXRyeTpudWxsLFxyXG4gICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6XCJjb250YWluc1wiLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVWaWV3ID0gKCk9PkF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmFjdGl2ZVZpZXc7XHJcbiAgICBcclxuICAgIGdldEFsbENoZWNrZWRMYXllcnMgPSAoKT0+IHRoaXMuYWxsQ2hlY2tlZExheWVycztcclxuXHJcbiAgICBkaXNwYXRjaGluZ0FsbCA9ICgpPT57XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XHJcbiAgICAgICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzXHJcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmhhc093blByb3BlcnR5KFwiZGlzcGF0Y2hcIikgKXtcclxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheWVyT3BlbiA9IHRoaXMubGF5ZXJPcGVuO1xyXG4gICAgICAgICAgICBjb25zdCBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5hbGxDaGVja2VkTGF5ZXJzO1xyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XHJcbiAgICAgICAgICAgIGlmIChudW1iZXJPZkF0dHJpYnV0ZXMgJiYgbGF5ZXJPcGVuICYmIGFsbENoZWNrZWRMYXllcnMgJiYgYWN0aXZlVmlldyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNMYXllckNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNoZWNrZWRMYXllcnNcIix0aGlzLmNoZWNrZWRMYXllcnMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhudW1iZXJPZkF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcIm51bWJlck9mQXR0cmlidXRlXCIsbnVtYmVyT2ZBdHRyaWJ1dGVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwibGF5ZXJPcGVuXCIsbGF5ZXJPcGVuKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZ2V0QWxsTGF5ZXJzXCIsdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZ2V0QWN0aXZlVmlld1wiLHRoaXMuZ2V0QWN0aXZlVmlldykpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJub0l0ZW1TZWxlY3RlZFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFsYXllck9wZW4pdGhyb3cgXCJUaGVyZSBpcyBubyBsYXllciBvcGVuXCJcclxuICAgICAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpdGhyb3cgXCJUaGVyZSBpcyBubyBhbGwgY2hlY2tlZCBsYXllcnMgbWFrZSBzdXJlIHRvIHBhc3MgbGF5ZXJcIlxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlVmlldyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFjdGl2ZVZpZXcscGFzcyBqaW11TWFwVmlldyB3aGVuIG1hcCBsb2FkXCJcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBcIlBhc3MgcGFyZW50IHdpZGdldCB0byB0aGUgQXR0cmlidXRlQ29ubmVjdG9yXCJcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VUYWJsZSA9ICgpPT57XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XHJcbiAgICAgICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzXHJcbiAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmhhc093blByb3BlcnR5KFwiZGlzcGF0Y2hcIikgKXtcclxuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY2hlY2tlZExheWVyc1wiLFtdKSk7XHJcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9wcyA9ICgpPT57XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XHJcbiAgICAgICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IG51bWJlck9mQXR0cmlidXRlcyA9IHRoaXMubnVtYmVyT2ZBdHRyaWJ1dGVzO1xyXG4gICAgICAgIGNvbnN0IGxheWVyT3BlbiA9IHRoaXMubGF5ZXJPcGVuO1xyXG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmFsbENoZWNrZWRMYXllcnM7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlldygpOyBcclxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSl7XHJcbiAgICAgICAgICAgIGlmKCFsYXllck9wZW4pdGhyb3cgXCJUaGVyZSBpcyBubyBsYXllciBvcGVuXCJcclxuICAgICAgICAgICAgaWYgKCFhbGxDaGVja2VkTGF5ZXJzKXRocm93IFwiVGhlcmUgaXMgbm8gYWxsIGNoZWNrZWQgbGF5ZXJzIG1ha2Ugc3VyZSB0byBwYXNzIGxheWVyXCJcclxuICAgICAgICAgICAgaWYgKCFhY3RpdmVWaWV3KXRocm93IFwiVGhlcmUgaXMgbm8gYWN0aXZlVmlldyxwYXNzIGppbXVNYXBWaWV3IHdoZW4gbWFwIGxvYWRcIlxyXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKG51bWJlck9mQXR0cmlidXRlcykpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBcIlBhc3MgcGFyZW50IHdpZGdldCB0byB0aGUgQXR0cmlidXRlQ29ubmVjdG9yXCJcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaENyZWF0ZVRhYmxlID0gKCk9PntcclxuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcclxuICAgICAgICBpZiAocHJvcHMpe1xyXG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjcmVhdGVUYWJsZVwiLHRydWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGF0Y2hDaGVjaGVkTGF5ZXJzID0gKGNoZWNrZWRMYXllcnM6c3RyaW5nW10pPT57XHJcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmdldFByb3BzKCk7XHJcbiAgICAgICAgaWYgKHByb3BzKXtcclxuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY2hlY2tlZExheWVyc1wiLGNoZWNrZWRMYXllcnMpKTtcclxuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY3JlYXRlVGFibGVcIix0cnVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoRmlsdGVyVmFsdWUgPSAoZmlsdGVyVmFsdWU6bnVtYmVyKT0+e1xyXG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xyXG4gICAgICAgIGlmIChwcm9wcyl7XHJcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImZpbHRlclZhbHVlXCIsIGZpbHRlclZhbHVlKSk7XHJcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlVGFibGVDb25uZWN0b3I7IiwiXHJcbmltcG9ydCB7UmVhY3R9IGZyb20gJ2ppbXUtY29yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FsbFRvQWN0aW9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xyXG5leHBvcnQgY29uc3QgTGF5ZXJTZWxlY3RDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XHJcbmV4cG9ydCBjb25zdCBUYWJsZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XHJcbmV4cG9ydCBjb25zdCBBZGRUYWJsZVNldENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTsiLCJpbXBvcnQge0J1dHRvbixPcHRpb24sU2VsZWN0LH0gZnJvbSBcImppbXUtdWlcIjtcclxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2VcIjtcclxuaW1wb3J0IFJlYWN0UmVzaXplRGV0ZWN0b3IgZnJvbSBcIi4uL2xpYi9SZXNpemVEZXRlY3RvclwiO1xyXG5pbXBvcnQge3F1ZXJ5Q29uc3RydWN0b3JOdW1iZXIscXVlcnlDb25zdHJ1Y3RvclN0cmluZyx9IGZyb20gXCIuLi91dGlscy9xdWVyeVRhYmxlVmFsdWVcIjtcclxuaW1wb3J0ICcuLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IENvbW1vblNlY29uZENvbnN0cnVjdG9yIGZyb20gXCIuL2NvbW1vbi9pbnB1dHMvY29tbW9uU2Vjb25kQ29uc3RydWN0b3JcIjtcclxuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi4vd2lkZ2V0XCI7XHJcbmltcG9ydCB7IFRhYmxlc0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9jb250ZXh0QXBpXCI7XHJcblxyXG5mdW5jdGlvbiBBZGRTZXRUYWJsZShwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHRleHRJbnB1dEhhbmRsZXIsXHJcbiAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxyXG4gICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyLFxyXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcclxuICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCxcclxuICAgIGRlbGV0ZVRhYmxlLFxyXG4gICAgZ2V0UXVlcnlBdHRyaWJ1dGUsXHJcbiAgICAvLyBmb3IgQWRkIHNldCB0YWJsZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cclxuICAgIHRhYmxlc1NldElkLFxyXG4gICAgd2hlcmVDbGF1c2VzU2V0LFxyXG4gICAgLy8gRW5kIGZvciBBZGQgc2V0IHRhYmxlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxyXG4gICAgZ2V0UXVlcnksXHJcbiAgICB1bml2b2NvU2VsZWN0SGFuZGxlcixcclxuICAgIGNsb3NlRHJvcCxcclxuICAgIG9ubW91c2VMZWF2ZSxcclxuICAgIGRyb3Bkb3duc1NldCxcclxuICAgIHNob3dEZWxldGUsXHJcbiAgICBjdXJyZW50VGFibGUsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUYWJsZXNDb250ZXh0KTtcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3Qge2xpc3QscGFyZW50LHF1ZXJ5Q2hhbmdlZH0gPSBjb250ZXh0O1xyXG5cclxuXHJcbiAgY29uc3QgY3VycmVudHdoZXJlQ2xhdXNlc1NldCA9IHdoZXJlQ2xhdXNlc1NldC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSB0YWJsZXNTZXRJZCk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ2hlY2tCb3hTZXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHNlbGY6V2lkZ2V0ID0gcGFyZW50O1xyXG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xyXG4gICAgbGV0IGN1cnJlbnRJZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xyXG4gICAgbGV0IG9iamVjdElkID0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XHJcbiAgICBsZXQgcXVlcnlJbmRleDtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBxdWVyeUluZGV4ID0gd2hlcmVDbGF1c2VzU2V0Lm1hcCgob2JqKSA9PiBvYmouaWQpLmluZGV4T2YoY3VycmVudElkKTtcclxuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgd2hlcmVDbGF1c2VzU2V0Lm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBjdXJyZW50SWQpIHtcclxuICAgICAgICAgICAgaWYgKCFvYmouY2hlY2tlZExpc3RTZXQpIHtcclxuICAgICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5vYmosXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkTGlzdFNldDogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQgPSB3aGVyZUNsYXVzZXNTZXQuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZVNldC5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0O1xyXG4gICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHt3aGVyZUNsYXVzZVNldDogQXJyYXkuZnJvbShuZXcgU2V0KGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQpKSx9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCBpZkFscmVhZHlDaGVjayA9IG9iai5jaGVja2VkTGlzdFNldFxyXG4gICAgICAgICAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouY2hlY2tWYWx1ZSlcclxuICAgICAgICAgICAgICAgIC5pbmRleE9mKGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmIChpZkFscmVhZHlDaGVjayA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAuLi5vYmosXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWRMaXN0U2V0OiBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ub2JqLmNoZWNrZWRMaXN0U2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWU6IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHdoZXJlQ2xhdXNlc1NldC5maW5kSW5kZXgoXHJcbiAgICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkID09PSBvYmouaWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIG9iaiBvYmplY3QgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XHJcbiAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXNTZXQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgdXBkYXRlZCBvYmogb2JqZWN0IHRvIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlc1NldC5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IHdoZXJlQ2xhdXNlc1NldDtcclxuICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlc1NldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3doZXJlQ2xhdXNlU2V0OiBBcnJheS5mcm9tKG5ldyBTZXQod2hlcmVDbGF1c2VzU2V0KSl9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIEZpbmQgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICBjb25zdCBvYmogPSB3aGVyZUNsYXVzZXNTZXQuZmluZCgoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkKTtcclxuICAgICAgLy8gUmVtb3ZlIHRoZSBjaGVja1ZhbHVlIGZyb20gdGhlIGNoZWNrZWRMaXN0IGFycmF5XHJcbiAgICAgIG9iai5jaGVja2VkTGlzdFNldCA9IG9iai5jaGVja2VkTGlzdFNldC5maWx0ZXIoXHJcbiAgICAgICAgKGEpID0+IGEuY2hlY2tWYWx1ZSAhPT0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICBjb25zdCBpbmRleCA9IHdoZXJlQ2xhdXNlc1NldC5maW5kSW5kZXgoXHJcbiAgICAgICAgKGEpID0+IGEuaWQgPT09IGN1cnJlbnRJZFxyXG4gICAgICApO1xyXG4gICAgICB3aGVyZUNsYXVzZXNTZXRbaW5kZXhdID0gb2JqO1xyXG4gICAgICB3aGVyZUNsYXVzZXNTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBuZXdXaGVyZVNldENsYXVzZSA9IEFycmF5LmZyb20obmV3IFNldCh3aGVyZUNsYXVzZXNTZXQpKTtcclxuICAgICAgc2VsZi5zZXRTdGF0ZSh7d2hlcmVDbGF1c2VTZXQ6IEFycmF5LmZyb20obmV3IFNldCh3aGVyZUNsYXVzZXNTZXQpKSx9KTtcclxuICAgIH1cclxuICAgIGlmIChuZXdXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRJZFxyXG4gICAgICApO1xyXG4gICAgICBzZWxmLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soY3VycmVudElkLCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHNtYWxsZXJXaWR0aE91dGVyQ29udGFpbmVyOntcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXHJcbiAgICAgIGdhcDonMyUnLFxyXG4gICAgICBtaW5XaWR0aDonMjgwcHgnLFxyXG4gICAgICBtYXJnaW5Cb3R0b206MjBcclxuICAgIH0sXHJcbiAgICBzbWFsbGVyV2lkdGhJbm5lckNvbnRhaW5lcjp7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBnYXA6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOlwiODAlXCIsXHJcbiAgICB9LFxyXG4gICAgc21hbGxlcldpZHRoUXVlcnlDb250YWluZXI6e1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICAgIGxhcmdlcldpZHRoT3V0ZXJDb250YWluZXI6e1xyXG4gICAgICB3aWR0aDpcIjEwMCVcIlxyXG4gICAgfSxcclxuICAgIGxhcmdlcldpZHRoSW5uZXJDb250YWluZXI6e1xyXG4gICAgICBkaXNwbGF5OlwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50Olwic3RhcnRcIixcclxuICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxyXG4gICAgICBnYXA6XCIzJVwiLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3BlbkRyb3BTZXQgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IHNlbGY6V2lkZ2V0ID0gcGFyZW50XHJcbiAgICBjb25zdCBjdXJyZW50SWQgPSBpZDtcclxuICAgIHNlbGYuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiBmYWxzZSB9KTtcclxuICAgIHNlbGYuc2V0U3RhdGUoeyBkcm9wSWRTZXQ6IGN1cnJlbnRJZCB9KTtcclxuICAgIGNvbnN0IGRyb3BEb3duc1NldCA9IHsgLi4uZHJvcGRvd25zU2V0fTtcclxuICAgIGlmIChkcm9wRG93bnNTZXRbY3VycmVudElkXSkge1xyXG4gICAgICBzZWxmLnNldFN0YXRlKHtkcm9wRG93bnNTZXQ6IHsgLi4uZHJvcGRvd25zU2V0LCBbY3VycmVudElkXTogZmFsc2UgfSx9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2Ryb3BEb3duc1NldDogeyAuLi5kcm9wZG93bnNTZXQsIFtjdXJyZW50SWRdOiB0cnVlIH0sfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGN1cnJlbnRUYWJsZS5pZCA9PT0gcGFyc2VJbnQodGFibGVzU2V0SWQuc3BsaXQoXCItXCIpWzBdKSAmJiFjdXJyZW50VGFibGUuZGVsZXRlZCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8UmVhY3RSZXNpemVEZXRlY3RvciBoYW5kbGVXaWR0aCBoYW5kbGVIZWlnaHQ+XHJcbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5cclxuICAgICAgICAgICAgICB7bGlzdD8uZmllbGRzID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17d2lkdGggPD0gNjI1ID8gc3R5bGVzLnNtYWxsZXJXaWR0aE91dGVyQ29udGFpbmVyOnN0eWxlcy5sYXJnZXJXaWR0aE91dGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3dpZHRoIDw9IDYyNSA/IHN0eWxlcy5zbWFsbGVyV2lkdGhJbm5lckNvbnRhaW5lcjpzdHlsZXMubGFyZ2VyV2lkdGhJbm5lckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17d2lkdGggPD0gNjI1ID8gXCIgXCI6XCJjb2wtbWQtNFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5nZXRRdWVyeUF0dHJpYnV0ZShlLFwic2V0XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5maWVsZHMubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcIm9pZFwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic21hbGwtaW50ZWdlclwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwiaW50ZWdlclwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJkb3VibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZT17ZWwudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuYWxpYXN9ICh7ZWwudHlwZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt3aWR0aCA8PSA2MjUgPyBcIiBcIjpcImNvbC1tZC00XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3dpZHRoIDw9IDYyNSA/IHN0eWxlcy5zbWFsbGVyV2lkdGhRdWVyeUNvbnRhaW5lcjp7fX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KGUpID0+IGdldFF1ZXJ5KGUsIFwic2luZ2xlXCIpfSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50d2hlcmVDbGF1c2VzU2V0ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudHdoZXJlQ2xhdXNlc1NldC5hdHRyaWJ1dGVRdWVyeVR5cGUgPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcXVlcnlDb25zdHJ1Y3RvclN0cmluZy5tYXAoKG8sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLm1hcCgobywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbW1vblNlY29uZENvbnN0cnVjdG9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRJbnB1dEhhbmRsZXIgPSB7dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtSGFuZGxlciA9IHtkcm9wZG93bkl0ZW1IYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIgPSB7dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyID0ge3RleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCA9IHtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlc0lkID0ge3RhYmxlc1NldElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXMgPSB7d2hlcmVDbGF1c2VzU2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlciA9IHt1bml2b2NvU2VsZWN0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveCA9IHtvbkNoYW5nZUNoZWNrQm94U2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcCA9IHtvcGVuRHJvcFNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wID0ge2Nsb3NlRHJvcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25tb3VzZUxlYXZlID0ge29ubW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zID0ge2Ryb3Bkb3duc1NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSB7d2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Q2hhbmdlZCA9IHtxdWVyeUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHtwYXJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZSA9IFwic2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh3aWR0aCA+PSA2MjYgJiYgc2hvd0RlbGV0ZSkgJiYgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCIgb25DbGljaz17ZGVsZXRlVGFibGV9IGljb24+PENsb3NlT3V0bGluZWQgLz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHdpZHRoIDw9IDYyNSAmJiBzaG93RGVsZXRlKSAmJiA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtkZWxldGVUYWJsZX0gaWNvbj48Q2xvc2VPdXRsaW5lZCAvPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKTpcclxuICAgICAgICAgICAgICAgIChcIiBcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUmVhY3RSZXNpemVEZXRlY3Rvcj5cclxuICAgIClcclxuICB9XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFNldFRhYmxlO1xyXG4iLCJpbXBvcnQge0J1dHRvbixPcHRpb24sU2VsZWN0fSBmcm9tIFwiamltdS11aVwiO1xyXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZVwiO1xyXG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tIFwiLi4vbGliL1Jlc2l6ZURldGVjdG9yXCI7XHJcbmltcG9ydCB7cXVlcnlDb25zdHJ1Y3Rvck51bWJlcixxdWVyeUNvbnN0cnVjdG9yU3RyaW5nfSBmcm9tIFwiLi4vdXRpbHMvcXVlcnlUYWJsZVZhbHVlXCI7XHJcbmltcG9ydCAnLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XHJcbmltcG9ydCBDb21tb25TZWNvbmRDb25zdHJ1Y3RvciBmcm9tIFwiLi9jb21tb24vaW5wdXRzL2NvbW1vblNlY29uZENvbnN0cnVjdG9yXCI7XHJcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4uL3dpZGdldFwiO1xyXG5pbXBvcnQgeyBUYWJsZXNDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvY29udGV4dEFwaVwiO1xyXG4vLyBpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBUYWJsZShwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIHRleHRJbnB1dEhhbmRsZXIsXHJcbiAgICBtdWx0aVNlbGVjdEhhbmRsZXIsXHJcbiAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxyXG4gICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyLFxyXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcclxuICAgIGRyb3Bkb3duVmFsdWVRdWVyeSxcclxuICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCxcclxuICAgIGRlbGV0ZVRhYmxlLFxyXG4gICAgdGFibGVzSWQsXHJcbiAgICBnZXRRdWVyeUF0dHJpYnV0ZSxcclxuICAgIHdoZXJlQ2xhdXNlcyxcclxuICAgIGdldFF1ZXJ5LFxyXG4gICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIsXHJcbiAgICBjbG9zZURyb3AsXHJcbiAgICBvbm1vdXNlTGVhdmUsXHJcbiAgICBkcm9wZG93bnMsXHJcbiAgICBjdXJyZW50VGFibGUsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUYWJsZXNDb250ZXh0KTtcclxuXHJcbiAgLy9AdHMtaWdub3JlXHJcbiAgY29uc3Qge2xpc3QscGFyZW50LHF1ZXJ5Q2hhbmdlZH0gPSBjb250ZXh0O1xyXG5cclxuICBjb25zdCBjdXJyZW50d2hlcmVDbGF1c2VzID0gd2hlcmVDbGF1c2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGAke3RhYmxlc0lkfWApO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUNoZWNrQm94ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBzZWxmOldpZGdldCA9IHBhcmVudDtcclxuICAgIGxldCBjdXJyZW50SWQgPSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5pZC52YWx1ZTtcclxuICAgIGxldCBvYmplY3RJZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLnZhbHVlLnZhbHVlO1xyXG4gICAgbGV0IHF1ZXJ5SW5kZXg7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgcXVlcnlJbmRleCA9IHdoZXJlQ2xhdXNlc1xyXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxyXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRJZCk7XHJcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHdoZXJlQ2xhdXNlcy5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgIGlmICghb2JqLmNoZWNrZWRMaXN0KSB7XHJcbiAgICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ub2JqLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWU6IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHdoZXJlQ2xhdXNlcy5maWx0ZXIoKGEpID0+IGEuaWQgIT09IG9iai5pZCk7XHJcbiAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7d2hlcmVDbGF1c2VzOiBBcnJheS5mcm9tKG5ldyBTZXQoZmlsdGVyZWRXaGVyZUNsYXVzZXMpKX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGlmQWxyZWFkeUNoZWNrID0gb2JqLmNoZWNrZWRMaXN0XHJcbiAgICAgICAgICAgICAgICAubWFwKChvYmopID0+IG9iai5jaGVja1ZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLmluZGV4T2YoZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaWYgKGlmQWxyZWFkeUNoZWNrID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm9iaixcclxuICAgICAgICAgICAgICAgICAgY2hlY2tlZExpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5vYmouY2hlY2tlZExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tWYWx1ZTogZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gd2hlcmVDbGF1c2VzLmZpbmRJbmRleCgoYSkgPT4gYS5pZCA9PT0gb2JqLmlkKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgb2JqIG9iamVjdCBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRoZSB1cGRhdGVkIG9iaiBvYmplY3QgdG8gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3doZXJlQ2xhdXNlczogQXJyYXkuZnJvbShuZXcgU2V0KHdoZXJlQ2xhdXNlcykpfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB7IG9iaiB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIEZpbmQgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICBjb25zdCBvYmogPSB3aGVyZUNsYXVzZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkKTtcclxuICAgICAgLy8gUmVtb3ZlIHRoZSBjaGVja1ZhbHVlIGZyb20gdGhlIGNoZWNrZWRMaXN0IGFycmF5XHJcbiAgICAgIG9iai5jaGVja2VkTGlzdCA9IG9iai5jaGVja2VkTGlzdC5maWx0ZXIoXHJcbiAgICAgICAgKGEpID0+IGEuY2hlY2tWYWx1ZSAhPT0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxyXG4gICAgICBjb25zdCBpbmRleCA9IHdoZXJlQ2xhdXNlcy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGEpID0+IGEuaWQgPT09IGN1cnJlbnRJZFxyXG4gICAgICApO1xyXG4gICAgICB3aGVyZUNsYXVzZXNbaW5kZXhdID0gb2JqO1xyXG4gICAgICB3aGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZWxmLnNldFN0YXRlKHt3aGVyZUNsYXVzZXM6IEFycmF5LmZyb20obmV3IFNldCh3aGVyZUNsYXVzZXMpKX0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHNtYWxsZXJXaWR0aE91dGVyQ29udGFpbmVyOntcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgIGhlaWdodDogXCJmaXQtY29udGVudFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXHJcbiAgICAgIGdhcDonMyUnLFxyXG4gICAgICBtaW5XaWR0aDonMjgwcHgnLFxyXG4gICAgICBtYXJnaW5Cb3R0b206MjBcclxuICAgIH0sXHJcbiAgICBzbWFsbGVyV2lkdGhJbm5lckNvbnRhaW5lcjp7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBnYXA6IFwiNXB4XCIsXHJcbiAgICAgIHdpZHRoOlwiODAlXCIsXHJcbiAgICB9LFxyXG4gICAgc21hbGxlcldpZHRoUXVlcnlDb250YWluZXI6e1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICAgIGxhcmdlcldpZHRoT3V0ZXJDb250YWluZXI6e1xyXG4gICAgICB3aWR0aDpcIjEwMCVcIlxyXG4gICAgfSxcclxuICAgIGxhcmdlcldpZHRoSW5uZXJDb250YWluZXI6e1xyXG4gICAgICBkaXNwbGF5OlwiZmxleFwiLFxyXG4gICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50Olwic3RhcnRcIixcclxuICAgICAgZmxleERpcmVjdGlvbjpcInJvd1wiLFxyXG4gICAgICBnYXA6XCIzJVwiLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3BlbkRyb3AgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IHNlbGY6V2lkZ2V0ID0gcGFyZW50O1xyXG4gICAgc2VsZi5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IGZhbHNlIH0pO1xyXG4gICAgc2VsZi5zZXRTdGF0ZSh7IGRyb3BJZDogaWQgfSk7XHJcbiAgICBjb25zdCBkcm9wRG93bnMgPSB7IC4uLmRyb3Bkb3ducyB9O1xyXG4gICAgaWYgKGRyb3BEb3duc1tpZF0pIHtcclxuICAgICAgc2VsZi5zZXRTdGF0ZSh7IGRyb3BEb3duczogeyAuLi5kcm9wZG93bnMsIFtpZF06IGZhbHNlIH0gfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWxmLnNldFN0YXRlKHsgZHJvcERvd25zOiB7IC4uLmRyb3Bkb3ducywgW2lkXTogdHJ1ZSB9IH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmIChjdXJyZW50VGFibGUuaWQgPT09IHRhYmxlc0lkICYmICFjdXJyZW50VGFibGUuZGVsZXRlZCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8UmVhY3RSZXNpemVEZXRlY3RvciBoYW5kbGVXaWR0aCBoYW5kbGVIZWlnaHQ+XHJcbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5cclxuICAgICAgICAgICAgICB7bGlzdD8uZmllbGRzID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17d2lkdGggPD0gNjI1ID8gc3R5bGVzLnNtYWxsZXJXaWR0aE91dGVyQ29udGFpbmVyOnN0eWxlcy5sYXJnZXJXaWR0aE91dGVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlID0ge3dpZHRoIDw9IDYyNSA/IHN0eWxlcy5zbWFsbGVyV2lkdGhJbm5lckNvbnRhaW5lcjpzdHlsZXMubGFyZ2VyV2lkdGhJbm5lckNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17d2lkdGggPD0gNjI1ID8gXCIgXCI6XCJjb2wtbWQtNFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5nZXRRdWVyeUF0dHJpYnV0ZShlLFwic2luZ2xlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdC5maWVsZHMubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcIm9pZFwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic21hbGwtaW50ZWdlclwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwiaW50ZWdlclwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJkb3VibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZT17ZWwudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuYWxpYXN9ICh7ZWwudHlwZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt3aWR0aCA8PSA2MjUgPyBcIiBcIjpcImNvbC1tZC00XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3dpZHRoIDw9IDYyNSA/IHN0eWxlcy5zbWFsbGVyV2lkdGhRdWVyeUNvbnRhaW5lcjp7fX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZ2V0UXVlcnkoZSwgXCJzaW5nbGVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgY2FtcG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR3aGVyZUNsYXVzZXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50d2hlcmVDbGF1c2VzLmF0dHJpYnV0ZVF1ZXJ5VHlwZSA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLm1hcCgobywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIubWFwKChvLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29tbW9uU2Vjb25kQ29uc3RydWN0b3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGV4dElucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlTZWxlY3RIYW5kbGVyPXttdWx0aVNlbGVjdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbUhhbmRsZXI9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXt0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e2Ryb3Bkb3duVmFsdWVRdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkPXtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzPXt3aGVyZUNsYXVzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlc0lkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXI9e3VuaXZvY29TZWxlY3RIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZUNoZWNrQm94PXtvbkNoYW5nZUNoZWNrQm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcD17b3BlbkRyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlRHJvcD17Y2xvc2VEcm9wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmU9e29ubW91c2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25zPXtkcm9wZG93bnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlDaGFuZ2VkID0ge3F1ZXJ5Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0ge3BhcmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlUeXBlID0gXCJzaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID49IDYyNiAmJiA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfSBpY29uPjxDbG9zZU91dGxpbmVkIC8+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA8PSA2MjUgJiYgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCIgb25DbGljaz17ZGVsZXRlVGFibGV9IGljb24+PENsb3NlT3V0bGluZWQgLz48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICk6XHJcbiAgICAgICAgICAgICAgICAoXCIgXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L1JlYWN0UmVzaXplRGV0ZWN0b3I+XHJcbiAgICApXHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcclxuIiwiaW1wb3J0IFF1ZXJ5IGZyb20gJ2VzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5JztcclxuaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyBDYWxsVG9BY3Rpb25Db250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9jb250ZXh0QXBpJztcclxuaW1wb3J0ICcuLi8uLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgaGVscGVyIGZyb20gJy4uLy4uL2Nvbm5lY3RvcidcclxuaW1wb3J0IFdpZGdldCBmcm9tICcuLi93aWRnZXQnO1xyXG5pbXBvcnQgZ2VvbWV0cnlFbmdpbmUgZnJvbSAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSc7XHJcbmltcG9ydCBQb2x5Z29uIGZyb20gXCJlc3JpL2dlb21ldHJ5L1BvbHlnb25cIjtcclxuXHJcbnR5cGUgUHJvcHNUeXBlID0ge3dpZHRoOm51bWJlcixmdW5jdGlvblJlZnJlc2g6KCk9PnZvaWR9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsVG9BY3Rpb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzVHlwZSxhbnk+e1xyXG5cclxuICBzdGF0aWMgY29udGV4dFR5cGU/OiBSZWFjdC5Db250ZXh0PGFueT4gPSBDYWxsVG9BY3Rpb25Db250ZXh0O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczpQcm9wc1R5cGUpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zZW5kUXVlcnkgPSB0aGlzLnNlbmRRdWVyeS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5hZGRCbG9jayA9IHRoaXMuYWRkQmxvY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuYWRkVGFibGUgPSB0aGlzLmFkZFRhYmxlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbiA9IHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNlbmRRdWVyeVNldCA9IHRoaXMuc2VuZFF1ZXJ5U2V0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzZW5kUXVlcnkoKSB7XHJcbiAgICBjb25zdCBzZWxmOldpZGdldCA9IHRoaXMuY29udGV4dC5wYXJlbnQ7XHJcbiAgICAgICAgc2VsZi5xdWVyeUFycmF5ID0gW107XHJcbiAgICAgICAgc2VsZi5vdXRmaWVsZHMgPSBbXTtcclxuICAgICAgICBjb25zdCBjaGVja2VkUXVlcnkgPSBbXHJcbiAgICAgICAgICBcImlzIG51bGxcIixcclxuICAgICAgICAgIFwiaXMgbm90IG51bGxcIixcclxuICAgICAgICAgIFwiSU5cIixcclxuICAgICAgICAgIFwiTk9UX0lOXCIsXHJcbiAgICAgICAgICBcImluY2x1ZGVkXCIsXHJcbiAgICAgICAgICBcImlzX25vdF9pbmNsdWRlZFwiLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgbGlrZWx5UXVlcnkgPSBbXCJMSUtFJVwiLCBcIiVMSUtFXCIsIFwiJUxJS0UlXCIsIFwiTk9UIExJS0VcIl07XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC53aGVyZUNsYXVzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LkFuZE9yID09PSBcIkFORFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC53aGVyZUNsYXVzZXMuZm9yRWFjaCgoZWwsIGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XHJcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpcyBudWxsXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpcyBub3QgbnVsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZWwuY2hlY2tlZExpc3QuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCJcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2ZpcnN0VHh0OiBlbC5maXJzdFR4dC52YWx1ZSxzZWNvbmRUeHQ6IGVsLnNlY29uZFR4dC52YWx1ZX07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5qaW11TWFwVmlldykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5jb250ZXh0LmN1cnJlbnRUYXJnZXRUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmppbXVNYXBWaWV3LnZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgIC53aGVuTGF5ZXJWaWV3KGYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlDb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuQW5kT3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnk6IGFueSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQud2hlcmVDbGF1c2VzLmZvckVhY2goKGVsLCBpZCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XHJcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpcyBudWxsXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJpcyBub3QgbnVsbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9YDtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbjtcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGVsLmNoZWNrZWRMaXN0LmZvckVhY2goKGVsKSA9PiB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChoZWxwZXIuY29udGFpbnNBbnlMZXR0ZXJzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSBJTiAoJHtcclxuICAgICAgICAgICAgICAgICAgICBcIidcIiArIHZhbHVlLmpvaW4oXCInLCAnXCIpICsgXCInXCJcclxuICAgICAgICAgICAgICAgICAgfSlgO1xyXG4gICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW47XHJcbiAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgcXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSBJTiAoJHt2YWx1ZS5qb2luKFwiLFwiKX0pYDtcclxuICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUluO1xyXG4gICAgICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBxdWVyeUluO1xyXG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiXHJcbiAgICAgICAgICAgICAgICAgID8gKHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gPiAke2VsLmZpcnN0VHh0LnZhbHVlfSBBTkQgJHthdHRyaWJ1dGVRdWVyeX0gPCAke2VsLnNlY29uZFR4dC52YWx1ZX1gKVxyXG4gICAgICAgICAgICAgICAgICA6IChxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9IDwgJHtlbC5maXJzdFR4dC52YWx1ZX0gT1IgJHthdHRyaWJ1dGVRdWVyeX0gPiAke2VsLnNlY29uZFR4dC52YWx1ZX1gKTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbjtcclxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChsaWtlbHlRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IGhlbHBlci5saWtlbHlRdWVyeShcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaGVscGVyLmNvbnRhaW5zQW55TGV0dGVycyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcXVlcnlJbnB1dCA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSAke3F1ZXJ5VmFsdWV9ICcke3ZhbHVlfSdgO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbnB1dDtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBxdWVyeUlucHV0ID0gYCR7YXR0cmlidXRlUXVlcnl9ICR7cXVlcnlWYWx1ZX0gJHt2YWx1ZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbnB1dDtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuamltdU1hcFZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuY29udGV4dC5jdXJyZW50VGFyZ2V0VGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5qaW11TWFwVmlldy52aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAud2hlbkxheWVyVmlldyhmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGxheWVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWaWV3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdDogXCJPUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyOiBmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFuZE9yOiB0aGlzLmNvbnRleHQuQW5kT3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGF0dHJpYnV0ZVF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZXh0LlNldEJsb2NrLmxlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5qaW11TWFwVmlldykge1xyXG4gICAgICAgICAgICBzZWxmLnF1ZXJ5QXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLmNvbnRleHQuY3VycmVudFRhcmdldFRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBsYXllclZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG5ldyBRdWVyeSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBsYXllcjogZixcclxuICAgICAgICAgICAgICAgICAgICBBbmRPcjogdGhpcy5jb250ZXh0LkFuZE9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogXCJzZXRRdWVyeVwiLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlbGYuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICBzZWxmLnJldHVyblRvT3JpZ2luYWxFeHRlbnQoKTtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICBxdWVyeUNvbnN0cnVjdG9yID0gKFxyXG4gICAgbGF5ZXJWaWV3LFxyXG4gICAgZmlyc3RRdWVyeSxcclxuICAgIHF1ZXJ5UmVxdWVzdCxcclxuICAgIHNlY29uZFF1ZXJ5VGFyZ2V0LFxyXG4gICAgQW5kT3IsXHJcbiAgICAvLyBjb25uZWN0b3JfZnVuY3Rpb24sXHJcbiAgICBsYXllcixcclxuICAgIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCJcclxuICApID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBzZWNvbmRRdWVyeVRhcmdldDtcclxuICAgIGNvbnN0IHNlbGY6V2lkZ2V0ID0gdGhpcy5jb250ZXh0LnBhcmVudDtcclxuICAgIHN3aXRjaCAocXVlcnlSZXF1ZXN0KSB7XHJcbiAgICAgIGNhc2UgXCJMSUtFJVwiOlxyXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIlTElLRVwiOlxyXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCIlTElLRSVcIjpcclxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIk5PVCBMSUtFXCI6XHJcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBOT1QgTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uKHtsYXllclZpZXcscXVlcnkscXVlcnlSZXF1ZXN0LHZhbHVlcyxsYXllcixBbmRPcixmaWVsZDogZmlyc3RRdWVyeSxzb3VyY2U6IFwic2luZ2xlUXVlcnlcIn0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaXMgbnVsbFwiOlxyXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gaXMgbnVsbGA7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpcyBub3QgbnVsbFwiOlxyXG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gaXMgbm90IG51bGxgO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uKHtsYXllclZpZXcscXVlcnkscXVlcnlSZXF1ZXN0LHZhbHVlcyxsYXllcixBbmRPcixmaWVsZDogZmlyc3RRdWVyeSxzb3VyY2U6IFwic2luZ2xlUXVlcnlcIn0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiSU5cIjpcclxuICAgICAgICBpZiAoaGVscGVyLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcclxuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7XCInXCIgKyBzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiJywgJ1wiKSArIFwiJ1wifSlgO1xyXG4gICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChoZWxwZXIuY2hlY2tQYXJlbnRoZXNpcyhzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gaGVscGVyLmxvb3BUb0dldFN0cmluZyhzZWNvbmRRdWVyeVRhcmdldCk7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gSU4gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uKHtsYXllclZpZXcscXVlcnkscXVlcnlSZXF1ZXN0LHZhbHVlcyxsYXllcixBbmRPcixmaWVsZDogZmlyc3RRdWVyeSxzb3VyY2U6IFwic2luZ2xlUXVlcnlcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIk5PVF9JTlwiOlxyXG4gICAgICAgIGlmIChoZWxwZXIuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xyXG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBgTk9UICR7Zmlyc3RRdWVyeX0gSU4gKCR7XCInXCIgKyBzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiJywgJ1wiKSArIFwiJ1wifSlgO1xyXG4gICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XHJcbiAgICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGhlbHBlci5jaGVja1BhcmVudGhlc2lzKHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpKSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSBoZWxwZXIubG9vcFRvR2V0U3RyaW5nKHNlY29uZFF1ZXJ5VGFyZ2V0KTtcclxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgTk9UICAke2ZpcnN0UXVlcnl9IElOICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYE5PVCAgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtmaXJzdFF1ZXJ5fWBdO1xyXG4gICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaW5jbHVkZWRcIjpcclxuICAgICAgICBxdWVyeS53aGVyZSA9IGAoJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuZmlyc3RUeHR9IEFORCAke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5zZWNvbmRUeHR9KWA7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJpc19ub3RfaW5jbHVkZWRcIjpcclxuICAgICAgICBxdWVyeS53aGVyZSA9IGAoJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuZmlyc3RUeHR9IE9SICR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH0pYDtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7bGF5ZXJWaWV3LHF1ZXJ5LHF1ZXJ5UmVxdWVzdCx2YWx1ZXMsbGF5ZXIsQW5kT3IsZmllbGQ6IGZpcnN0UXVlcnksc291cmNlOiBcInNpbmdsZVF1ZXJ5XCJ9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpZiAoaGVscGVyLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcclxuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xyXG4gICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGJyYWNrZXRzID0gW1wiKFwiLCBcIilcIiwgXCJbXCIsIFwiXVwiLCBcIntcIiwgXCJ9XCJdO1xyXG4gICAgICAgICAgaWYgKGJyYWNrZXRzLmluY2x1ZGVzKHNlY29uZFF1ZXJ5VGFyZ2V0LmNoYXJBdCgwKSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gSlNPTi5zdHJpbmdpZnkoc2Vjb25kUXVlcnlUYXJnZXQpLnJlcGxhY2UoL1wiL2csIGAnYClcclxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24oe2xheWVyVmlldyxxdWVyeSxxdWVyeVJlcXVlc3QsdmFsdWVzLGxheWVyLEFuZE9yLGZpZWxkOiBmaXJzdFF1ZXJ5LHNvdXJjZTogXCJzaW5nbGVRdWVyeVwifSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbm5lY3Rvcl9mdW5jdGlvbiA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxheWVyVmlldyxcclxuICAgICAgcXVlcnksXHJcbiAgICAgIHF1ZXJ5UmVxdWVzdCxcclxuICAgICAgdmFsdWVzLFxyXG4gICAgICBsYXllcixcclxuICAgICAgQW5kT3IsXHJcbiAgICAgIGZpZWxkLFxyXG4gICAgICBzb3VyY2UsXHJcbiAgICB9ID0gZGF0YTtcclxuICAgIGNvbnN0IHNlbGY6V2lkZ2V0ID0gdGhpcy5jb250ZXh0LnBhcmVudDtcclxuICAgIGlmICh0aGlzLmNvbnRleHQuaGlnbGlnaHRTZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgc2VsZi5jbGVhckhpZ2hsaWdodHMobGF5ZXJWaWV3KTtcclxuICAgICAgdGhpcy5jb250ZXh0LmhpZ2xpZ2h0U2VsZWN0ZWQuZm9yRWFjaCgoaGlnaGxpZ2h0KSA9PiB7XHJcbiAgICAgICAgaGlnaGxpZ2h0LnJlbW92ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCByZXN1bHRzID0geyBmZWF0dXJlczogW10gfTtcclxuICAgIGxldCBhZGRpdGlvbmFsUXVlcnkgPSBudWxsO1xyXG4gICAgaWYgKHNvdXJjZSA9PT0gXCJzaW5nbGVRdWVyeVwiKSB7XHJcbiAgICAgIGFkZGl0aW9uYWxRdWVyeSA9IHF1ZXJ5LndoZXJlO1xyXG4gICAgICBpZiAoc2VsZi5xdWVyeUFycmF5Lmxlbmd0aCA8IHRoaXMuY29udGV4dC53aGVyZUNsYXVzZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIGFkZGl0aW9uYWxRdWVyeSA9IHF1ZXJ5LndoZXJlICsgXCIgXCIgKyBBbmRPcjtcclxuICAgICAgfVxyXG4gICAgICBzZWxmLnF1ZXJ5QXJyYXkucHVzaChhZGRpdGlvbmFsUXVlcnkpO1xyXG4gICAgICBzZWxmLm91dGZpZWxkcy5wdXNoKGAke2ZpZWxkfWApO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBzZWxmLnF1ZXJ5QXJyYXkubGVuZ3RoID49IHRoaXMuY29udGV4dC53aGVyZUNsYXVzZXMubGVuZ3RoIHx8XHJcbiAgICAgIHNvdXJjZSA9PT0gXCJzZXRRdWVyeVwiXHJcbiAgICApIHtcclxuICAgICAgbGV0IGN1cnJlbnRRdWVyeSA9IG51bGw7XHJcbiAgICAgIGlmIChzZWxmLnF1ZXJ5QXJyYXkubGVuZ3RoKSBjdXJyZW50UXVlcnkgPSBzZWxmLnF1ZXJ5QXJyYXkuam9pbihcIiBcIik7XHJcbiAgICAgIGlmICh0aGlzLmNvbnRleHQud2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2V0UXVlcnlTdHJpbmcsIG91dEZpZWxkcyB9ID0gdGhpcy5zZW5kUXVlcnlTZXQoKTtcclxuICAgICAgICBpZiAoc291cmNlID09PSBcInNpbmdsZVF1ZXJ5XCIpIHtcclxuICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZylcclxuICAgICAgICAgICAgY3VycmVudFF1ZXJ5ICs9IFwiIFwiICsgQW5kT3IgKyBcIiBcIiArIFwiKFwiICsgc2V0UXVlcnlTdHJpbmcgKyBcIilcIjtcclxuICAgICAgICAgIGlmIChvdXRGaWVsZHM/Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLm91dGZpZWxkcyA9IHNlbGYub3V0ZmllbGRzLmNvbmNhdChvdXRGaWVsZHMpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHNlbGYub3V0ZmllbGRzKTtcclxuICAgICAgICAgICAgc2VsZi5vdXRmaWVsZHMgPSBBcnJheS5mcm9tKHNldCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykgY3VycmVudFF1ZXJ5ID0gc2V0UXVlcnlTdHJpbmc7XHJcbiAgICAgICAgICBpZiAob3V0RmllbGRzPy5sZW5ndGgpIHNlbGYub3V0ZmllbGRzID0gb3V0RmllbGRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoIXNlbGYub3V0ZmllbGRzLmluY2x1ZGVzKFwiT0JKRUNUSURcIikpc2VsZi5vdXRmaWVsZHMucHVzaChcIk9CSkVDVElEXCIpO1xyXG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSBzZWxmLm91dGZpZWxkcztcclxuICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xyXG4gICAgICBxdWVyeS53aGVyZSA9IGN1cnJlbnRRdWVyeTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXN1bHRzID0gYXdhaXQgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGlmIChsYXllclZpZXc/LnF1ZXJ5RmVhdHVyZXMpXHJcbiAgICAgICAgICByZXN1bHRzID0gYXdhaXQgbGF5ZXJWaWV3LnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsYXllcj8ucXVlcnlGZWF0dXJlcykgcmVzdWx0cyA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xyXG4gICAgICBsZXQgY2hlY2tlZExheWVyXyA9IFtkYXRhLmxheWVyVmlldy5sYXllci5pZF07XHJcbiAgICAgIGNvbnN0IGhpZ2hsaWdodElkcyA9IGhlbHBlci5nZXRIaWdobGlnaHRlZElkcyhyZXN1bHRzLmZlYXR1cmVzKTtcclxuICAgICAgaWYgKGhpZ2hsaWdodElkcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBoaWdsaWdodFNlbGVjdGVkQXJyID0gW107XHJcbiAgICAgICAgaGlnaGxpZ2h0SWRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBoaWdobGlnaHRTZWxlY3RlZCA9IGxheWVyVmlldy5oaWdobGlnaHQoZWwpO1xyXG4gICAgICAgICAgaGlnbGlnaHRTZWxlY3RlZEFyci5wdXNoKGhpZ2hsaWdodFNlbGVjdGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IGFycmF5R2VvbWV0cnkgPSBbXTtcclxuICAgICAgICAgIHJlc3VsdHMuZmVhdHVyZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZWwuZ2VvbWV0cnksIDEsIFwibWV0ZXJzXCIpO1xyXG4gICAgICAgICAgICBhcnJheUdlb21ldHJ5LnB1c2gobmV3R2VvbWV0cnkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgdW5pZmllZEdlb210cnkgPSBnZW9tZXRyeUVuZ2luZS51bmlvbihhcnJheUdlb21ldHJ5KTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh1bmlmaWVkR2VvbXRyeS5leHRlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLnNldFN0YXRlKHsgaGlnbGlnaHRTZWxlY3RlZDogaGlnbGlnaHRTZWxlY3RlZEFyciB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRMYXllcnNDb250ZW50cyA9IGhlbHBlci5nZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIoW3Jlc3VsdHMuZmVhdHVyZXNdLGNoZWNrZWRMYXllcl8pO1xyXG4gICAgICBjb25zdCBudW1iZXJPZkF0dHJpYnV0ZXMgPSBoZWxwZXIuZ2V0TnVtYmVyT2ZBdHRyaWJ1dGVzKHNlbGVjdGVkTGF5ZXJzQ29udGVudHMpO1xyXG4gICAgICBsZXQgYWN0aXZlViA9IHRoaXMuY29udGV4dC5qaW11TWFwVmlldztcclxuICAgICAgc2VsZi5zZXRTdGF0ZSh7IGxheWVyQ29udGVudHM6IHNlbGVjdGVkTGF5ZXJzQ29udGVudHMsY2hlY2tlZExheWVyXzogY2hlY2tlZExheWVyX30pO1xyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHsgY2hlY2tlZExheWVyXzogY2hlY2tlZExheWVyXyB9KTtcclxuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBQb2x5Z29uLmZyb21FeHRlbnQobGF5ZXJWaWV3LnZpZXcuZXh0ZW50KS50b0pTT04oKTtcclxuICAgICAgY29uc3QgbGF5ZXJPcGVuID0ge2dlb21ldHJ5OiBnZW9tZXRyeSx0eXBlU2VsZWN0ZWQ6IFwiY29udGFpbnNcIn07XHJcbiAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCkge1xyXG4gICAgICAgIHNlbGYuY3VycmVudExheWVyVmlldyA9IGxheWVyVmlldztcclxuICAgICAgICBjb25zdCBpc0xheWVyQ2hlY2tlZCA9IHRoaXMuY29udGV4dC5pc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSBzZWxmLmdldEFsbENoZWNrZWRMYXllcnMoKTtcclxuICAgICAgICBzZWxmLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmluaXQoe1xyXG4gICAgICAgICAgcmVzdWx0czogW3Jlc3VsdHMuZmVhdHVyZXNdLFxyXG4gICAgICAgICAgYWxsQ2hlY2tlZExheWVyczogYWxsQ2hlY2tlZExheWVycyxcclxuICAgICAgICAgIGlzTGF5ZXJDaGVja2VkOiBpc0xheWVyQ2hlY2tlZCxcclxuICAgICAgICAgIGNoZWNrZWRMYXllcnM6IGNoZWNrZWRMYXllcl8sXHJcbiAgICAgICAgICBudW1iZXJPZkF0dHJpYnV0ZXM6IG51bWJlck9mQXR0cmlidXRlcyxcclxuICAgICAgICAgIGxheWVyT3BlbjogbGF5ZXJPcGVuLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiBmYWxzZSB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgc2VsZi5hdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5kaXNwYXRjaGluZ0FsbCgpO1xyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IGl0ZW1Ob3RGb3VuZDogbnVsbCB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGlmIChlcnIpIHNlbGYuc2V0U3RhdGUoeyBpdGVtTm90Rm91bmQ6IHNlbGYubmxzKGVycikgfSk7XHJcbiAgICAgICAgICBzZWxmLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgc2VsZi5yZXR1cm5Ub09yaWdpbmFsRXh0ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNlbGYuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe2lzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUsaXRlbU5vdEZvdW5kOnNlbGYubmxzKFwibm9JdGVtU2VsZWN0ZWRcIiksfSk7XHJcbiAgICAgICAgc2VsZi5yZXR1cm5Ub09yaWdpbmFsRXh0ZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzZW5kUXVlcnlTZXQoKSB7XHJcbiAgICBjb25zdCBjaGVja2VkUXVlcnkgPSBbXHJcbiAgICAgIFwiaXMgbnVsbFwiLFxyXG4gICAgICBcImlzIG5vdCBudWxsXCIsXHJcbiAgICAgIFwiSU5cIixcclxuICAgICAgXCJOT1RfSU5cIixcclxuICAgICAgXCJpbmNsdWRlZFwiLFxyXG4gICAgICBcImlzX25vdF9pbmNsdWRlZFwiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGxpa2VseVF1ZXJ5ID0gW1wiTElLRSVcIiwgXCIlTElLRVwiLCBcIiVMSUtFJVwiLCBcIk5PVCBMSUtFXCJdO1xyXG4gICAgY29uc3Qgc2VsZjpXaWRnZXQgPSB0aGlzLmNvbnRleHQucGFyZW50O1xyXG4gICAgbGV0IHNldFF1ZXJ5U3RyaW5nID0gbnVsbDtcclxuICAgIGxldCBvdXRGaWVsZHMgPSBbXTtcclxuICAgIGlmICh0aGlzLmNvbnRleHQuU2V0QmxvY2subGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5TZXRCbG9jay5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJsb2NrSWQgPSBibG9jaz8uYmxvY2tJZDtcclxuICAgICAgICBjb25zdCB3aGVyZUNsYXVzZVNldCA9IGJsb2NrW2Ake2Jsb2NrSWR9YF07XHJcbiAgICAgICAgY29uc3QgQW5kT3JTZXQgPSBibG9jaz8uQW5kT3JTZXQ7XHJcbiAgICAgICAgaWYgKEFuZE9yU2V0ID09PSBcIkFORFwiKSB7XHJcbiAgICAgICAgICBpZiAod2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3aGVyZUNsYXVzZVNldC5mb3JFYWNoKChlbCwgaikgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVRdWVyeSA9IGVsLmF0dHJpYnV0ZVF1ZXJ5O1xyXG4gICAgICAgICAgICAgIGxldCBxdWVyeVZhbHVlID0gZWwucXVlcnlWYWx1ZTtcclxuICAgICAgICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiaXMgbnVsbFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXMgbm90IG51bGxcIikge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGVsLmNoZWNrZWRMaXN0U2V0LmZvckVhY2goKGVsKSA9PiB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiaW5jbHVkZWRcIiB8fCBxdWVyeVZhbHVlID09PSBcImlzX25vdF9pbmNsdWRlZFwiXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtmaXJzdFR4dDogZWwuZmlyc3RUeHQudmFsdWUsc2Vjb25kVHh0OiBlbC5zZWNvbmRUeHQudmFsdWV9O1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gaGVscGVyLnNldFF1ZXJ5Q29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgPSBoZWxwZXIuc2V0UXVlcnlDb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoaiA8IHdoZXJlQ2xhdXNlU2V0Lmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyArPSBcIiAgXCIgKyBBbmRPclNldCArIFwiICBcIjtcclxuICAgICAgICAgICAgICAgIG91dEZpZWxkcy5wdXNoKGAke2F0dHJpYnV0ZVF1ZXJ5fWApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5OiBhbnkgPSBbXTtcclxuICAgICAgICAgIGlmICh3aGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0LmZvckVhY2goKGVsLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZVF1ZXJ5ID0gZWwuYXR0cmlidXRlUXVlcnk7XHJcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5VmFsdWUgPSBlbC5xdWVyeVZhbHVlO1xyXG4gICAgICAgICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJJTlwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiTk9UX0lOXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJJTlwiICYmIGVsLmNoZWNrZWRMaXN0U2V0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICBlbC5jaGVja2VkTGlzdFNldC5mb3JFYWNoKChlbCkgPT4gdmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiICYmXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5jb3VudGVySXNDaGVja2VkLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5jb3VudGVySXNDaGVja2VkLmZvckVhY2goKGVsKSA9PnZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaXNfbm90X2luY2x1ZGVkXCJcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge2ZpcnN0VHh0OiBlbC5maXJzdFR4dC52YWx1ZSxzZWNvbmRUeHQ6IGVsLnNlY29uZFR4dC52YWx1ZX07XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHNldFF1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyArPSBoZWxwZXIuc2V0UXVlcnlDb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyA9IGhlbHBlci5zZXRRdWVyeUNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcclxuICAgICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChqIDwgd2hlcmVDbGF1c2VTZXQubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IFwiICBcIiArIEFuZE9yU2V0ICsgXCIgIFwiO1xyXG4gICAgICAgICAgICAgICAgb3V0RmllbGRzLnB1c2goYCR7YXR0cmlidXRlUXVlcnl9YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2V0UXVlcnlTdHJpbmcpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuU2V0QmxvY2tbaSArIDFdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRCbG9jayA9IHRoaXMuY29udGV4dC5TZXRCbG9ja1tpICsgMV07XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRCbG9ja0lkID0gbmV4dEJsb2NrPy5ibG9ja0lkO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0V2hlcmVDbGF1c2VTZXQgPSBuZXh0QmxvY2tbYCR7bmV4dEJsb2NrSWR9YF07XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICBpID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuU2V0QmxvY2subGVuZ3RoID49IDIgJiZcclxuICAgICAgICAgICAgICAgIG5leHRXaGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB8fFxyXG4gICAgICAgICAgICAgICAgIVtcIihcIl0uaW5jbHVkZXMoc2V0UXVlcnlTdHJpbmdbMF0pXHJcbiAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyA9IFwiKFwiICsgc2V0UXVlcnlTdHJpbmc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGkgPCB0aGlzLmNvbnRleHQuU2V0QmxvY2subGVuZ3RoIC0gMSAmJlxyXG4gICAgICAgICAgICAgICAgbmV4dFdoZXJlQ2xhdXNlU2V0Py5sZW5ndGhcclxuICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IFwiICkgXCIgKyB0aGlzLmNvbnRleHQuQW5kT3IgKyBcIiAoIFwiO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuU2V0QmxvY2tbaSAtIDFdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZCbG9jayA9IHRoaXMuY29udGV4dC5TZXRCbG9ja1tpIC0gMV07XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZCbG9ja0lkID0gcHJldkJsb2NrPy5ibG9ja0lkO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2V2hlcmVDbGF1c2VTZXQgPSBwcmV2QmxvY2tbYCR7cHJldkJsb2NrSWR9YF07XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuU2V0QmxvY2subGVuZ3RoID49IDIgJiZcclxuICAgICAgICAgICAgICBpID09PSB0aGlzLmNvbnRleHQuU2V0QmxvY2subGVuZ3RoIC0gMSAmJlxyXG4gICAgICAgICAgICAgIHByZXZXaGVyZUNsYXVzZVNldC5sZW5ndGhcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgPSBzZXRRdWVyeVN0cmluZyArIFwiKVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHNldFF1ZXJ5U3RyaW5nLCBvdXRGaWVsZHMgfTtcclxuICB9XHJcblxyXG4gIGFkZFRhYmxlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLmNvbnRleHQucGFyZW50O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJZCA9IHRoaXMuY29udGV4dC50YWJsZUNvdW50ZXI7XHJcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHRhYmxlczogWy4uLnRoaXMuY29udGV4dC50YWJsZXMseyBpZDogdGhpcy5jb250ZXh0LnRhYmxlQ291bnRlciwgZGVsZXRlZDogZmFsc2UgfSxdLFxyXG4gICAgICAgICAgICB0YWJsZUNvdW50ZXI6IHRoaXMuY29udGV4dC50YWJsZUNvdW50ZXIgKyAxLFxyXG4gICAgICAgICAgICBkcm9wRG93bnM6IHsgLi4udGhpcy5jb250ZXh0LmRyb3BEb3ducywgW2N1cnJlbnRJZF06IGZhbHNlIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdGFibGVMZW5ndGggPSB0aGlzLmNvbnRleHQudGFibGVzLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSkuZmlsdGVyKFN0cmluZykubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlc1NldExlbmd0aCA9IHRoaXMuY29udGV4dC5TZXRCbG9jay5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHRhYmxlTGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmICh0YWJsZXNTZXRMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gIH07XHJcblxyXG4gIGFkZEJsb2NrID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcy5jb250ZXh0LnBhcmVudDtcclxuICAgICAgY29uc3QgU2V0QmxvY2sgPSB0aGlzLmNvbnRleHQuU2V0QmxvY2tcclxuICAgICAgbGV0IGlkT25lID0gU2V0QmxvY2sudGFibGVDb3VudGVyU2V0ID8/IDA7XHJcbiAgICAgIGxldCBpZFR3byA9IGlkT25lICsgMTtcclxuICAgICAgY29uc3QgY3VycmVudElkID0gaWRPbmU7XHJcbiAgICAgIGNvbnN0IG5leHRDdXJyZW50SWQgPSBpZFR3bztcclxuICAgICAgbGV0IG5ld0Jsb2NrID0gWy4uLlNldEJsb2NrXTtcclxuICAgICAgbmV3QmxvY2sucHVzaCh7XHJcbiAgICAgICAgYmxvY2tJZDpTZXRCbG9jay5sZW5ndGgsXHJcbiAgICAgICAgW2Ake1NldEJsb2NrLmxlbmd0aH1gXTogW10sXHJcbiAgICAgICAgdGFibGVzU2V0OiBbXHJcbiAgICAgICAgICB7IGlkOiBpZE9uZSwgZGVsZXRlZDogZmFsc2UgfSxcclxuICAgICAgICAgIHsgaWQ6IGlkVHdvLCBkZWxldGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFibGVDb3VudGVyU2V0OiB0aGlzLmNvbnRleHQudGFibGVDb3VudGVyU2V0ICsgMixcclxuICAgICAgICBkcm9wRG93bnNTZXQ6IHtcclxuICAgICAgICAgIC4uLnRoaXMuY29udGV4dC5kcm9wRG93bnNTZXQsXHJcbiAgICAgICAgICBbYCR7Y3VycmVudElkfS0ke1NldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXHJcbiAgICAgICAgICBbYCR7bmV4dEN1cnJlbnRJZH0tJHtTZXRCbG9jay5sZW5ndGh9YF06IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQW5kT3JTZXQ6IHRoaXMuY29udGV4dC5BbmRPclNldCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgIFNldEJsb2NrOm5ld0Jsb2NrLFxyXG4gICAgICAgIGRyb3BEb3duc1NldDoge1xyXG4gICAgICAgICAgLi4udGhpcy5jb250ZXh0LmRyb3BEb3duc1NldCxcclxuICAgICAgICAgIFtgJHtjdXJyZW50SWR9LSR7U2V0QmxvY2subGVuZ3RofWBdOiBmYWxzZSxcclxuICAgICAgICAgIFtgJHtuZXh0Q3VycmVudElkfS0ke1NldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHRhYmxlTGVuZ3RoID0gdGhpcy5jb250ZXh0LnRhYmxlc1xyXG4gICAgICAgIC5tYXAoKGVsLCBpZHgpID0+IChlbC5kZWxldGVkID09IGZhbHNlID8gaWR4IDogXCJcIikpXHJcbiAgICAgICAgLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcclxuICAgICAgY29uc3QgdGFibGVzU2V0TGVuZ3RoID0gU2V0QmxvY2subGVuZ3RoO1xyXG4gIFxyXG4gICAgICBpZiAodGFibGVMZW5ndGggPiAwKSBzZWxmLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XHJcbiAgfTtcclxuXHJcbiAgICByZW5kZXIoKTogUmVhY3QuUmVhY3ROb2RlIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMud2lkdGggPj0gNjI2ID8gXCJyb3cgbXQtMSBtYi0zIGp1c3RpZnktY29udGVudC1hcm91bmRcIjpcIiBcIn0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy53aWR0aCA+PSA2MjYgPyB7fTogeyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy53aWR0aCA+PSA2MjYgPyBcImNvbC1tZC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI6XCIgXCJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLndpZHRoID49IDYyNiA/IHsgZ2FwOiBcIjIlXCIgfTp7Z2FwOiBcIjIlXCIsd2lkdGg6XCIxMDAlXCIsZGlzcGxheTogXCJmbGV4XCIsanVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuY29udGV4dC5jdXJyZW50VGFyZ2V0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRUYWJsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QWdnaXVuZ2kgZXNwcmVzc2lvbmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuY29udGV4dC5jdXJyZW50VGFyZ2V0VGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRCbG9ja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+QWdnaXVuZ2kgc2V0IGRpIGVzcHJlc3Npb25pPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy53aWR0aCA+PSA2MjYgPyBcImNvbC1tZC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI6XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMud2lkdGggPj0gNjI2ID8ge306e3dpZHRoOiBcIjEwMCVcIixkaXNwbGF5OiBcImZsZXhcIixqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbmRRdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5BcHBsaWNhPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmZ1bmN0aW9uUmVmcmVzaH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5SaWNhcmljYXJlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJcclxuaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IFNlbGVjdCxPcHRpb259IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgUHJvcHNUeXBlID0ge2Nob29zZUFuZE9yOihlOkNoYW5nZUV2ZW50LGJsb2NrSWQ/OmFueSk9PnZvaWQ7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5kT3JTZWxlY3RvciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHNUeXBlLGFueT57XHJcblxyXG4gICAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRoaXMucHJvcHMuY2hvb3NlQW5kT3IoZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYSB0dXR0ZSBsZSBlc3ByZXNzaW9uaSBzZWd1ZW50aVwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkFORFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQU5EXCI+XHJcbiAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZSBjb3JyaXNwb25kb25vIGFcclxuICAgICAgICAgICAgICAgIHR1dHRlIGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXHJcbiAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT1JcIj5cclxuICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYWRcclxuICAgICAgICAgICAgICAgIHVuYSBxdWFsc2lhc2kgZGVsbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcclxuICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIERyb3Bkb3duLFxyXG4gICAgRHJvcGRvd25CdXR0b24sXHJcbiAgICBEcm9wZG93bkl0ZW0sXHJcbiAgICBEcm9wZG93bk1lbnUsXHJcbiAgICBJbnB1dCxcclxuICAgIFRleHRJbnB1dCxcclxuICB9IGZyb20gXCJqaW11LXVpXCI7XHJcbmltcG9ydCB7IFNldHRpbmdPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2FwcGxpY2F0aW9uL3NldHRpbmdcIjtcclxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiamltdS1jb3JlXCI7XHJcbmltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2NzcydcclxuaW1wb3J0IFBhZ2luYXRpb25Db21wb2VuZW50IGZyb20gXCIuLi8uLi9wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBTZWxlY3RVbml2b2NvIGZyb20gXCIuL3NlbGVjdFwiO1xyXG5cclxuY29uc3QgQ29tbW9uU2Vjb25kQ29uc3RydWN0b3IgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudFRhYmxlLHNldEN1cnJlbnRUYWJsZV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbb25DaGFuZ2luZ1BhZ2Usc2V0T25DaGFuZ2luZ1BhZ2VdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgbnVtYmVyT2ZJdGVtcyA9IDEwO1xyXG4gIFxyXG4gICAgY29uc3Qge1xyXG4gICAgICB0ZXh0SW5wdXRIYW5kbGVyLFxyXG4gICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxyXG4gICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIsXHJcbiAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIsXHJcbiAgICAgIHRhYmxlc0lkLFxyXG4gICAgICB3aGVyZUNsYXVzZXMsXHJcbiAgICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxyXG4gICAgICBvbkNoYW5nZUNoZWNrQm94LFxyXG4gICAgICBvcGVuRHJvcCxcclxuICAgICAgb25tb3VzZUxlYXZlLFxyXG4gICAgICBkcm9wZG93bnMsXHJcbiAgICAgIHdpZHRoLFxyXG4gICAgICBxdWVyeUNoYW5nZWQsXHJcbiAgICAgIHBhcmVudCxcclxuICAgICAgcXVlcnlUeXBlXHJcbiAgICB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBub3JtYWxpemVkVGhpcmRRdWVyeSA9IFtdO1xyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IFwiPVwiO1xyXG4gICAgbGV0IGRyb3Bkb3duVmFsdWVRdWVyeSA9IFwidmFsb3JlXCI7XHJcbiAgICBsZXQgY2hlY2tlZCA9IDA7XHJcbiAgICBsZXQgZGVmYXVsdFRleHRWYWx1ZSA9IFwiIFwiO1xyXG4gICAgY29uc3QgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGAke3RhYmxlc0lkfWApO1xyXG4gICAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UuaWZJbk9yTm90SW5RdWVyeVZhbHVlKSB7XHJcbiAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZS5pZkluT3JOb3RJblF1ZXJ5VmFsdWUubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgIG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IHRhYmxlc0lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICBsYWJlbDogZWwubGFiZWwudG9TdHJpbmcoKSxcclxuICAgICAgICAgIHZhbHVlOiBlbC52YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICAgICAgbGlzdGVsOiBjdXJyZW50V2hlcmVDbGF1c2UuY2hlY2tlZExpc3Q/P2N1cnJlbnRXaGVyZUNsYXVzZS5jaGVja2VkTGlzdFNldCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5xdWVyeVZhbHVlKSB7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IGN1cnJlbnRXaGVyZUNsYXVzZS5xdWVyeVZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UuZHJvcGRvd25WYWx1ZVF1ZXJ5KSB7XHJcbiAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeSA9IGN1cnJlbnRXaGVyZUNsYXVzZS5kcm9wZG93blZhbHVlUXVlcnk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlICYmIGN1cnJlbnRXaGVyZUNsYXVzZS5pc09wZW4pIHtcclxuICAgICAgLy8gb3BlbmVkID0gd2hlcmVDbGF1c2VzW3RhYmxlc0lkXS5pc09wZW47XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IGN1cnJlbnRXaGVyZUNsYXVzZT8uY2hlY2tlZExpc3Q7XHJcbiAgICBjb25zdCBjaGVja2VkTGlzdFNldCA9IGN1cnJlbnRXaGVyZUNsYXVzZT8uY2hlY2tlZExpc3RTZXQ7XHJcbiAgICBpZiAoY2hlY2tlZExpc3Q/Lmxlbmd0aCl7XHJcbiAgICAgICAgY2hlY2tlZCA9IGNoZWNrZWRMaXN0Lmxlbmd0aFxyXG4gICAgfWVsc2UgaWYgKGNoZWNrZWRMaXN0U2V0Py5sZW5ndGgpe1xyXG4gICAgICAgIGNoZWNrZWQgPSBjaGVja2VkTGlzdFNldC5sZW5ndGhcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY29waWVkbm9ybWFsaXplZFRoaXJkUXVlcnkgPSBbLi4ubm9ybWFsaXplZFRoaXJkUXVlcnldO1xyXG4gIFxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIGlmIChcclxuICAgICAgICBjdXJyZW50VGFibGVbdGFibGVzSWRdPy5jdXJyZW50TnVtYmVyT2ZQYWdlID09PSAwICYmIFxyXG4gICAgICAgIGNvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lmxlbmd0aFxyXG4gICAgICApe1xyXG4gICAgICAgIGNhbGN1bGF0ZVRvdGFsTnVtYmVyT2ZQYWdlKCk7XHJcbiAgICAgICAgb25JbmNyZW1lbnQoKTtcclxuICAgICAgfVxyXG4gICAgfSxbY29waWVkbm9ybWFsaXplZFRoaXJkUXVlcnldKTtcclxuICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICBpZiAocXVlcnlDaGFuZ2VkW3RhYmxlc0lkXSAmJiBwYXJlbnQpe1xyXG4gICAgICAgIHNldEN1cnJlbnRUYWJsZSh7XHJcbiAgICAgICAgICAuLi5jdXJyZW50VGFibGUsXHJcbiAgICAgICAgICBbdGFibGVzSWRdOntcclxuICAgICAgICAgICAgXCJzdGFydEluZGV4XCI6MCxcclxuICAgICAgICAgICAgXCJlbmRJbmRleFwiOjAsXHJcbiAgICAgICAgICAgIFwiY3VycmVudE51bWJlck9mUGFnZVwiOjAsXHJcbiAgICAgICAgICAgIFwidG90YWxOdW1iZXJPZlBhZ2VcIjowXHJcbiAgICAgICAgfX0pXHJcbiAgICAgICAgcGFyZW50Py5zZXRTdGF0ZSh7cXVlcnlDaGFuZ2VkOnsuLi5xdWVyeUNoYW5nZWQsW3RhYmxlc0lkXTpmYWxzZX19KVxyXG4gICAgICB9XHJcbiAgICB9LFtxdWVyeUNoYW5nZWRdKVxyXG4gIFxyXG4gICAgY29uc3QgY2FsY3VsYXRlVG90YWxOdW1iZXJPZlBhZ2UgPSAoKT0+e1xyXG4gICAgICBpZiAoY29waWVkbm9ybWFsaXplZFRoaXJkUXVlcnkubGVuZ3RoKXtcclxuICAgICAgICBjb25zdCBuZXdUb3RhbE51bWJlck9mUGFnZSA9IE1hdGguY2VpbChjb3BpZWRub3JtYWxpemVkVGhpcmRRdWVyeS5sZW5ndGgvbnVtYmVyT2ZJdGVtcyk7XHJcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRUYWJsZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF07XHJcbiAgICAgICAgaWYgKG5ld0N1cnJlbnRUYWJsZSl7XHJcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7Li4ubmV3Q3VycmVudFRhYmxlLFwidG90YWxOdW1iZXJPZlBhZ2VcIjpuZXdUb3RhbE51bWJlck9mUGFnZX07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7XCJ0b3RhbE51bWJlck9mUGFnZVwiOm5ld1RvdGFsTnVtYmVyT2ZQYWdlfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50VGFibGUoey4uLmN1cnJlbnRUYWJsZSxbdGFibGVzSWRdOm5ld0N1cnJlbnRUYWJsZX0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IG9uSW5jcmVtZW50ID0gKCk9PntcclxuICAgICAgY29uc3QgY3VycmVudE51bWJlck9mUGFnZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LmN1cnJlbnROdW1iZXJPZlBhZ2UgPz8gMDtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGN1cnJlbnROdW1iZXJPZlBhZ2UgPCBjdXJyZW50VGFibGVbdGFibGVzSWRdPy50b3RhbE51bWJlck9mUGFnZVxyXG4gICAgICApe1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdPy5lbmRJbmRleD8/MDtcclxuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBmaXJzdEluZGV4ICsgbnVtYmVyT2ZJdGVtcztcclxuICAgICAgICBjb25zdCBuZXdjdXJyZW50TnVtYmVyT2ZQYWdlID0gY3VycmVudE51bWJlck9mUGFnZSArIDE7XHJcbiAgICAgICAgbGV0IG5ld0N1cnJlbnRUYWJsZSA9IGN1cnJlbnRUYWJsZVt0YWJsZXNJZF07XHJcbiAgICAgICAgaWYgKG5ld0N1cnJlbnRUYWJsZSl7XHJcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7XHJcbiAgICAgICAgICAgIC4uLm5ld0N1cnJlbnRUYWJsZSwgXHJcbiAgICAgICAgICAgIFwic3RhcnRJbmRleFwiOmZpcnN0SW5kZXgsXHJcbiAgICAgICAgICAgIFwiZW5kSW5kZXhcIjpsYXN0SW5kZXgsXHJcbiAgICAgICAgICAgIFwiY3VycmVudE51bWJlck9mUGFnZVwiOm5ld2N1cnJlbnROdW1iZXJPZlBhZ2VcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBuZXdDdXJyZW50VGFibGUgPSB7XCJzdGFydEluZGV4XCI6Zmlyc3RJbmRleCxcImVuZEluZGV4XCI6bGFzdEluZGV4LFwiY3VycmVudE51bWJlck9mUGFnZVwiOm5ld2N1cnJlbnROdW1iZXJPZlBhZ2V9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEN1cnJlbnRUYWJsZSh7Li4uY3VycmVudFRhYmxlLFt0YWJsZXNJZF06bmV3Q3VycmVudFRhYmxlfSlcclxuICAgICAgICBzZXRPbkNoYW5naW5nUGFnZSh7Li4ub25DaGFuZ2luZ1BhZ2UsW3RhYmxlc0lkXTp0cnVlfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3Qgb25EZWNyZW1lbnQgPSAoKT0+e1xyXG4gICAgICBpZiAoY3VycmVudFRhYmxlW3RhYmxlc0lkXT8uc3RhcnRJbmRleCA+IDApe1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdLnN0YXJ0SW5kZXg7XHJcbiAgICAgICAgY29uc3QgZW5kSW5kZXggPSBjdXJyZW50VGFibGVbdGFibGVzSWRdLmVuZEluZGV4O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnROdW1iZXJPZlBhZ2UgPSBjdXJyZW50VGFibGVbdGFibGVzSWRdLmN1cnJlbnROdW1iZXJPZlBhZ2VcclxuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gc3RhcnRJbmRleC1udW1iZXJPZkl0ZW1zO1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGVuZEluZGV4LW51bWJlck9mSXRlbXM7XHJcbiAgICAgICAgY29uc3QgbmV3Y3VycmVudE51bWJlck9mUGFnZSA9IGN1cnJlbnROdW1iZXJPZlBhZ2UgLSAxO1xyXG4gICAgICAgIGxldCBuZXdDdXJyZW50VGFibGUgPSBjdXJyZW50VGFibGVbdGFibGVzSWRdO1xyXG4gICAgICAgIGlmIChuZXdDdXJyZW50VGFibGUpe1xyXG4gICAgICAgICAgbmV3Q3VycmVudFRhYmxlID0ge1xyXG4gICAgICAgICAgICAuLi5uZXdDdXJyZW50VGFibGUsIFxyXG4gICAgICAgICAgICBcInN0YXJ0SW5kZXhcIjpmaXJzdEluZGV4LFxyXG4gICAgICAgICAgICBcImVuZEluZGV4XCI6bGFzdEluZGV4LFxyXG4gICAgICAgICAgICBcImN1cnJlbnROdW1iZXJPZlBhZ2VcIjpuZXdjdXJyZW50TnVtYmVyT2ZQYWdlXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgbmV3Q3VycmVudFRhYmxlID0ge1wic3RhcnRJbmRleFwiOmZpcnN0SW5kZXgsXCJlbmRJbmRleFwiOmxhc3RJbmRleCxcImN1cnJlbnROdW1iZXJPZlBhZ2VcIjpuZXdjdXJyZW50TnVtYmVyT2ZQYWdlfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDdXJyZW50VGFibGUoey4uLmN1cnJlbnRUYWJsZSxbdGFibGVzSWRdOm5ld0N1cnJlbnRUYWJsZX0pO1xyXG4gICAgICAgIHNldE9uQ2hhbmdpbmdQYWdlKHsuLi5vbkNoYW5naW5nUGFnZSxbdGFibGVzSWRdOnRydWV9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXT8uc3RhcnRJbmRleD8/MDtcclxuICAgIGNvbnN0IGVuZEluZGV4ID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXT8uZW5kSW5kZXg/PzEwO1xyXG4gIFxyXG4gICAgY29uc3QgcXVlcmllc1dpdGhVbml2b2NvID0gW1wiPVwiLFwiPD5cIixcIjw9XCIsXCI+PVwiLFwiPFwiLFwiPlwiXTtcclxuICAgIGNvbnN0IHF1ZXJpZXNXaXRoTXVsdGlzZWxlY3QgPSBbXCJJTlwiLFwiTk9UX0lOXCJdO1xyXG4gICAgY29uc3QgcXVlcmllc1dpdGhOb3RoaW5nID0gW1wiaXMgbnVsbFwiLFwiaXMgbm90IG51bGxcIl07XHJcbiAgICBjb25zdCBxdWVyaWVzV2l0aFR3b0lucHV0cyA9IFtcImluY2x1ZGVkXCIsXCJpc19ub3RfaW5jbHVkZWRcIl07XHJcbiAgICBjb25zdCBxdWVyaWVzV2l0aFNpbmdsZUlucHV0ID0gW1wiTElLRSVcIixcIiVMSUtFXCIsXCIlTElLRSVcIixcIk5PVCBMSUtFXCJdO1xyXG4gIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHF1ZXJpZXNXaXRoVW5pdm9jby5pbmNsdWRlcyhkZWZhdWx0VmFsdWUpICYmIFxyXG4gICAgICAgICAgPGRpdiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBjbGFzc05hbWUgPSB7d2lkdGggPj0gNjI2ID8gXCJkLWZsZXggY29sLW1kLTRcIiA6XCIgXCJ9IHN0eWxlPXt3aWR0aCA+PSA2MjYgPyB7fTp7ZGlzcGxheTonZmxleCd9fT5cclxuICAgICAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXHJcbiAgICAgICAgICAgICAgPFNlbGVjdFVuaXZvY28gXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17Y3VycmVudFRhYmxlW3RhYmxlc0lkXT8uY3VycmVudE51bWJlck9mUGFnZT8/MH1cclxuICAgICAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZQYWdlcyA9IHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy50b3RhbE51bWJlck9mUGFnZT8/MH1cclxuICAgICAgICAgICAgICAgIG9uRGVjcmVtZW50ID0ge29uRGVjcmVtZW50fVxyXG4gICAgICAgICAgICAgICAgb25JbmNyZW1lbnQgPSB7b25JbmNyZW1lbnR9XHJcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0ge2N1cnJlbnRUYWJsZVt0YWJsZXNJZF0/LnN0YXJ0SW5kZXg/PzB9XHJcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy5lbmRJbmRleD8/MH1cclxuICAgICAgICAgICAgICAgIHRhYmxlc0lkID0ge3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25zID0ge2Ryb3Bkb3duc31cclxuICAgICAgICAgICAgICAgIG9wZW5Ecm9wID0ge29wZW5Ecm9wfVxyXG4gICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIgPSB7dW5pdm9jb1NlbGVjdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhID0ge2NvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlID0ge3F1ZXJ5VHlwZT8/XCJzaW5nbGVcIn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdpbmdQYWdlID0ge29uQ2hhbmdpbmdQYWdlfVxyXG4gICAgICAgICAgICAgICAgc2V0T25DaGFuZ2luZ1BhZ2UgPSB7c2V0T25DaGFuZ2luZ1BhZ2V9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSB7Y3VycmVudFdoZXJlQ2xhdXNlPy52YWx1ZT8udHh0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dElucHV0SGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XHJcbiAgICAgICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFRleHRWYWx1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkcm9wZG93bkl0ZW1IYW5kbGVyKGUsIHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBWYWxvcmVcclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIENhbXBvXHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZHJvcGRvd25JdGVtSGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBVbml2b2NpXHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcXVlcmllc1dpdGhNdWx0aXNlbGVjdC5pbmNsdWRlcyhkZWZhdWx0VmFsdWUpICYmXHJcbiAgICAgICAgICA8ZGl2IHZhbHVlPXtkZWZhdWx0VmFsdWV9IG9uTW91c2VMZWF2ZT17KCkgPT4gb25tb3VzZUxlYXZlKCl9IGNsYXNzTmFtZSA9IHt3aWR0aCA+PSA2MjYgPyBcImQtZmxleCBjb2wtbWQtNFwiIDpcIiBcIn0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbiBpc09wZW49e2Ryb3Bkb3duc1t0YWJsZXNJZF19IHN0eWxlID0ge3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9wZW5Ecm9wKHRhYmxlc0lkKX0gc3R5bGUgPSB7e3dpZHRoOlwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoZWNrZWR9IGVsZW1lbnRpIHNlbGV6aW9uYXRpXHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJkcm9wLWRvd24tbWVudS10YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPk11bHRpIHNlbGV6aW9uZSBhdHRpdmE8L0Ryb3Bkb3duSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvcGllZG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5LnNsaWNlKHN0YXJ0SW5kZXgsZW5kSW5kZXgpPy5tYXAoKGVsLGkpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT17XCJmaXhlZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDaGVja0JveH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtlbC5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuY2hlY2tWYWx1ZSA9PT0gZWwubGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja1ZhbHVlID09PSBlbC5sYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMyBtYi0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uQ29tcG9lbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZT17YCR7Y3VycmVudFRhYmxlW3RhYmxlc0lkXT8uY3VycmVudE51bWJlck9mUGFnZT8/MH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbE51bWJlck9mUGFnZSA9IHtgJHtjdXJyZW50VGFibGVbdGFibGVzSWRdPy50b3RhbE51bWJlck9mUGFnZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmRlY3JlbWVudCA9IHtvbkRlY3JlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25pbmNyZW1lbnQgPSB7b25JbmNyZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHF1ZXJpZXNXaXRoTm90aGluZy5pbmNsdWRlcyhkZWZhdWx0VmFsdWUpICYmIFxyXG4gICAgICAgICAgPGRpdiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBjbGFzc05hbWU9e3dpZHRoID4gNjI2ID8gXCJkLWZsZXggY29sLW1kLTRcIjpcIiBcIn0gc3R5bGU9e3dpZHRoID49IDYyNiA/IHt9OntkaXNwbGF5OidmbGV4J319PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHF1ZXJpZXNXaXRoVHdvSW5wdXRzLmluY2x1ZGVzKGRlZmF1bHRWYWx1ZSkgJiYgXHJcbiAgICAgICAgICA8ZGl2IHZhbHVlPXtkZWZhdWx0VmFsdWV9IGNsYXNzTmFtZT17d2lkdGggPiA2MjYgPyBcImQtZmxleCBjb2wtbWQtNFwiOlwiIFwifSBzdHlsZT17d2lkdGggPj0gNjI2ID8ge306e2Rpc3BsYXk6J2ZsZXgnfX0+XHJcbiAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIoZSxxdWVyeVR5cGU/P1wic2luZ2xlXCIpfVxyXG4gICAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XHJcbiAgICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtc20tMiB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7aGVpZ2h0OicxMDAlJyxmb250U2l6ZTonMThweCd9fT5lPC9zcGFuPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XHJcbiAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cclxuICAgICAgICAgICAgICBpZD1cImlucHV0c1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcXVlcmllc1dpdGhTaW5nbGVJbnB1dC5pbmNsdWRlcyhkZWZhdWx0VmFsdWUpICYmIFxyXG4gICAgICAgICAgPGRpdiB2YWx1ZT17ZGVmYXVsdFZhbHVlfSBjbGFzc05hbWU9e3dpZHRoID4gNjI2ID8gXCJkLWZsZXggY29sLW1kLTRcIjpcIiBcIn0gc3R5bGU9e3dpZHRoID49IDYyNiA/IHt9OntkaXNwbGF5OidmbGV4J319PlxyXG4gICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dElucHV0SGFuZGxlcihlLHF1ZXJ5VHlwZT8/XCJzaW5nbGVcIil9XHJcbiAgICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBDb21tb25TZWNvbmRDb25zdHJ1Y3RvcjsiLCJcclxuaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7RHJvcGRvd24sRHJvcGRvd25CdXR0b24sRHJvcGRvd25NZW51LERyb3Bkb3duSXRlbSxJbnB1dH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHsgQ2hlY2tPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vY2hlY2snXHJcbmltcG9ydCBQYWdpbmF0aW9uQ29tcG9lbmVudCBmcm9tICcuLi8uLi9wYWdpbmF0aW9uJztcclxuaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJ1xyXG5cclxudHlwZSBQcm9wc1R5cGUgPSB7XHJcbiAgdGFibGVzSWQ6bnVtYmVyfHN0cmluZ1xyXG4gIGRhdGE6YW55W10sXHJcbiAgc3RhcnRJbmRleDpudW1iZXIsXHJcbiAgZW5kSW5kZXg6bnVtYmVyLFxyXG4gIHRvdGFsTnVtYmVyT2ZQYWdlczpudW1iZXIsXHJcbiAgY3VycmVudFBhZ2U6bnVtYmVyLFxyXG4gIG9uSW5jcmVtZW50OigpPT52b2lkLFxyXG4gIG9uRGVjcmVtZW50OigpPT52b2lkLFxyXG4gIHVuaXZvY29TZWxlY3RIYW5kbGVyOihjdXJyZW50VGFibGU6e3ZhbHVlOmFueSx0YWJsZUlkOnN0cmluZ30scXVlcnlUeXBlOnN0cmluZyk9PnZvaWQsXHJcbiAgZHJvcGRvd25zOntba2V5Om51bWJlcnxzdHJpbmddOmJvb2xlYW59LFxyXG4gIG9wZW5Ecm9wOih0YWJsZXNJZDpzdHJpbmd8bnVtYmVyKT0+dm9pZCxcclxuICBxdWVyeVR5cGU6c3RyaW5nLFxyXG4gIG9uQ2hhbmdpbmdQYWdlOntba2V5OnN0cmluZ3xudW1iZXJdOmJvb2xlYW59LFxyXG4gIHNldE9uQ2hhbmdpbmdQYWdlOmFueSxcclxuICBjdXJyZW50VmFsdWU6c3RyaW5nfG51bWJlclxyXG59XHJcblxyXG5jb25zdCBTZWxlY3RVbml2b2NvID0gKHByb3BzOlByb3BzVHlwZSk9PntcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRUYWJsZSxzZXRDdXJyZW50VGFibGVdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IHtcclxuICAgIHRhYmxlc0lkLFxyXG4gICAgZGF0YSxcclxuICAgIHN0YXJ0SW5kZXgsXHJcbiAgICBlbmRJbmRleCxcclxuICAgIHRvdGFsTnVtYmVyT2ZQYWdlcyxcclxuICAgIGN1cnJlbnRQYWdlLFxyXG4gICAgb25JbmNyZW1lbnQsXHJcbiAgICBvbkRlY3JlbWVudCxcclxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxyXG4gICAgZHJvcGRvd25zLFxyXG4gICAgb3BlbkRyb3AsXHJcbiAgICBxdWVyeVR5cGUsXHJcbiAgICBvbkNoYW5naW5nUGFnZSxcclxuICAgIHNldE9uQ2hhbmdpbmdQYWdlLFxyXG4gICAgY3VycmVudFZhbHVlXHJcbiAgfSA9IHByb3BzXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYgKG9uQ2hhbmdpbmdQYWdlW3RhYmxlc0lkXSl7XHJcbiAgICAgIHNldEN1cnJlbnRUYWJsZSh7Li4uY3VycmVudFRhYmxlLFt0YWJsZXNJZF06e1wic2VsZWN0ZWRJbmRleFwiOi0xLFwic2VsZWN0ZWRJdGVtXCI6XCIgXCJ9fSlcclxuICAgICAgc2V0T25DaGFuZ2luZ1BhZ2Uoey4uLm9uQ2hhbmdpbmdQYWdlLFt0YWJsZXNJZF06ZmFsc2V9KTtcclxuICAgIH1cclxuICB9LFtvbkNoYW5naW5nUGFnZV0pXHJcblxyXG4gIGNvbnN0IGdldENsaWNrZWRJdGVtID0gKHZhbHVlOmFueSx0YWJsZUlkOnN0cmluZ3xudW1iZXIsaW5kZXgpPT57XHJcbiAgICBzZXRDdXJyZW50VGFibGUoey4uLmN1cnJlbnRUYWJsZSxbdGFibGVJZF06e1wic2VsZWN0ZWRJbmRleFwiOmluZGV4LFwic2VsZWN0ZWRJdGVtXCI6dmFsdWV9fSk7XHJcbiAgICBjb25zdCBjdXJyZW50VGFibGVJZCA9IHR5cGVvZiB0YWJsZUlkID09PSBcIm51bWJlclwiID8gYCR7dGFibGVJZH1gOnRhYmxlSWRcclxuICAgIGNvbnN0IG9iaiA9IHt2YWx1ZSx0YWJsZUlkOmN1cnJlbnRUYWJsZUlkfVxyXG4gICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIob2JqLHF1ZXJ5VHlwZSk7XHJcbiAgICBvcGVuRHJvcCh0YWJsZXNJZClcclxuICB9XHJcblxyXG4gIGNvbnN0IHVucmVxdWlyZWRTZWxlY3RlZFZhbHVlID0gWycnLFwiIFwiLCcgJ107XHJcbiAgbGV0IHNlbGVjdGVkSXRlbSA9IGN1cnJlbnRWYWx1ZT8/XCIgXCJcclxuICBjb25zdCBjdXJyZW50VGFibGVTZWxlY3RlZFZhbHVlID0gY3VycmVudFRhYmxlW3RhYmxlc0lkXT8uc2VsZWN0ZWRJdGVtO1xyXG4gIGlmIChjdXJyZW50VGFibGVTZWxlY3RlZFZhbHVlICYmICF1bnJlcXVpcmVkU2VsZWN0ZWRWYWx1ZS5pbmNsdWRlcyhjdXJyZW50VGFibGVTZWxlY3RlZFZhbHVlKSl7XHJcbiAgICBzZWxlY3RlZEl0ZW0gPSBjdXJyZW50VGFibGVTZWxlY3RlZFZhbHVlXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybihcclxuICAgIDxEcm9wZG93blxyXG4gICAgICBhY3RpdmVJY29uXHJcbiAgICAgIGlzT3Blbj17ZHJvcGRvd25zW3RhYmxlc0lkXX1cclxuICAgICAgc3R5bGUgPSB7e3dpZHRoOlwiMTAwJVwifX0gXHJcbiAgICA+XHJcbiAgICAgIDxEcm9wZG93bkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuRHJvcCh0YWJsZXNJZCl9IHN0eWxlID0ge3t3aWR0aDpcIjEwMCVcIn19PlxyXG4gICAgICAgICAge3NlbGVjdGVkSXRlbX1cclxuICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICAgPERyb3Bkb3duTWVudSBjbGFzc05hbWU9XCJkcm9wLWRvd24tbWVudS10YWJsZVwiICA+XHJcbiAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyICAvPlxyXG4gICAgICAgICAge2RhdGE/LnNsaWNlKHN0YXJ0SW5kZXgsZW5kSW5kZXgpPy5tYXAoKGVsLGkpPT57XHJcbiAgICAgICAgICAgIGlmIChlbCl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljayA9IHsoZSk9PmdldENsaWNrZWRJdGVtKGVsLnZhbHVlLHRhYmxlc0lkLGkpfT5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5PXtcImZpeGVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6MjAsaGVpZ2h0OjIwLGRpc3BsYXk6XCJmbGV4XCIsYWxpZ25JdGVtczpcImNlbnRlclwiLGp1c3RpZnlDb250ZW50OlwiZmxleC1lbmRcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFRhYmxlW3RhYmxlc0lkXT8uc2VsZWN0ZWRJbmRleCA9PT0gaSAmJiA8Q2hlY2tPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGFibGVzSWR9IGNsYXNzTmFtZT1cIm1sLTMgbWItMFwiIGlkPXt0YWJsZXNJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQYWdpbmF0aW9uQ29tcG9lbmVudFxyXG4gICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtgJHtjdXJyZW50UGFnZX1gfVxyXG4gICAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZQYWdlID0ge2Ake3RvdGFsTnVtYmVyT2ZQYWdlc31gfVxyXG4gICAgICAgICAgICAgIG9uZGVjcmVtZW50ID0ge29uRGVjcmVtZW50fVxyXG4gICAgICAgICAgICAgIG9uaW5jcmVtZW50ID0ge29uSW5jcmVtZW50fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgIDwvRHJvcGRvd24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFVuaXZvY287IiwiXHJcbmltcG9ydCBMYXllciBmcm9tICdlc3JpL2xheWVycy9MYXllcic7XHJcbmltcG9ydCB7YXBwQWN0aW9ucywgUmVhY3R9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTZWxlY3QsT3B0aW9uIH0gZnJvbSAnamltdS11aSc7XHJcbmltcG9ydCB7IENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMYXllclNlbGVjdENvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0L2NvbnRleHRBcGknO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlLmNzcydcclxuaW1wb3J0IEFuZE9yU2VsZWN0b3IgZnJvbSAnLi9jb21tb24vYW5kb3JTZWxlY3Rvcic7XHJcblxyXG5pbnRlcmZhY2UgcmVzdWx0TGF5ZXJMaXN0T2JqZWN0IHtcclxuICAgIGVsZW1lbnQ6TGF5ZXIsXHJcbiAgICBsYWJlbDpzdHJpbmcsXHJcbiAgICB2YWx1ZTpudW1iZXIsXHJcbiAgICBsYXllcklEOnN0cmluZyxcclxuICAgIHVybFNlcnZpY2VTZXJ2ZXI6c3RyaW5nXHJcbn1cclxuXHJcbnR5cGUgUHJvcHNUeXBlID0ge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wc1R5cGUsYW55PntcclxuXHJcbiAgICBzdGF0aWMgY29udGV4dFR5cGU/OiBSZWFjdC5Db250ZXh0PGFueT4gPSBMYXllclNlbGVjdENvbnRleHRcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczpQcm9wc1R5cGUpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIgPSB0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNob29zZUFuZE9yID0gdGhpcy5jaG9vc2VBbmRPci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uQ2hhbmdlU2VsZWN0TGF5ZXIoZSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLmNvbnRleHQucGFyZW50O1xyXG4gICAgICAgIHNlbGYuZ3JhcGhpY0xheWVyRm91bmQucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLmNvbnRleHQuamltdU1hcFZpZXdcclxuICAgICAgICBpZiAoamltdU1hcFZpZXcpIHtcclxuICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSBlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0KSB7XHJcbiAgICAgICAgICAgICAgamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIHJlc3VsdHNMYXllclNlbGVjdGVkOiBmLFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0VGV4dDogZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCxcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkSWQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5kaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLCBcImNoZWNrZWRMYXllcnNcIiwgW2YuaWRdKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNob29zZUFuZE9yID0gKGUpID0+e1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLmNvbnRleHQucGFyZW50O1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoeyBBbmRPcjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJTZWxlemlvbmFyZSBwcmltYSBpbCBsYXllciwgcG9pIGNvbnRpbnVhIGNvbiBpbCBjb3N0cnV0dG9yZSBkZWxsYSBxdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW5mb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidy0xMDBcIj5TZWxlemlvbmEgaWwgbGF5ZXI6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VsZWN0TGF5ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5jb250ZXh0LmN1cnJlbnRTZWxlY3RlZElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQucmVzdWx0TGF5ZXJMaXN0Lm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLmxheWVySUR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VkVXJsPXtlbC5lbGVtZW50LnBhcnNlZFVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmVsZW1lbnQudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuY29udGV4dC5zaG93QWRkU2VsZWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjb3JyaXNwb25kZW50aSBhbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VndWVudGUgZXNwcmVzc2lvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5kT3JTZWxlY3RvciBjaG9vc2VBbmRPcj17dGhpcy5jaG9vc2VBbmRPcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IHtSZWFjdCxqc3h9IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IExlZnRPdXRsaW5lZCB9IGZyb20gJ2ppbXUtaWNvbnMvb3V0bGluZWQvZGlyZWN0aW9uYWwvbGVmdCc7XHJcbmltcG9ydCB7IFJpZ2h0T3V0bGluZWQgfSBmcm9tICdqaW11LWljb25zL291dGxpbmVkL2RpcmVjdGlvbmFsL3JpZ2h0J1xyXG5cclxudHlwZSBQcm9wc1R5cGUgPSB7XHJcbiAgICB0b3RhbE51bWJlck9mUGFnZTpzdHJpbmcsXHJcbiAgICBjdXJyZW50UGFnZTpzdHJpbmcsXHJcbiAgICBvbmRlY3JlbWVudDooKT0+dm9pZCxcclxuICAgIG9uaW5jcmVtZW50OigpPT52b2lkXHJcbn1cclxuXHJcbmNvbnN0IFBhZ2luYXRpb25Db21wb2VuZW50ID0gKHByb3BzOlByb3BzVHlwZSk9PntcclxuXHJcbiAgICBjb25zdCB7dG90YWxOdW1iZXJPZlBhZ2UsY3VycmVudFBhZ2Usb25kZWNyZW1lbnQsb25pbmNyZW1lbnR9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICAgIG91dGVyQ29udGFpbmVyOntcclxuICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBnYXA6XCIzJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6NTAsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIndoaXRlc21va2VcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOi0xMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvbkNvbnRhaW5lcjp7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB3aWR0aDpcIjI1JVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbm5lckljb25Db250YWluZXI6e1xyXG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcInJnYigwLDk0LDIwMilcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6MzAsXHJcbiAgICAgICAgICAgIHdpZHRoOlwiODAlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHRDb250YWluZXI6e1xyXG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50czpcImNlbnRlclwiLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOlwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOlwiNTAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbm5lclRleHRDb250YWluZXI6e1xyXG4gICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgaGVpZ2h0OjMwLFxyXG4gICAgICAgICAgICBmb250U2l6ZToxNlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBzdHlsZSA9IHtzdHlsZXMub3V0ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlID17c3R5bGVzLmljb25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZSA9IHtzdHlsZXMuaW5uZXJJY29uQ29udGFpbmVyfSBvbkNsaWNrID0ge29uZGVjcmVtZW50fT48TGVmdE91dGxpbmVkIGNvbG9yPSd3aGl0ZScgc2l6ZSA9IHsyNX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50ZXh0Q29udGFpbmVyfT48ZGl2IHN0eWxlPXtzdHlsZXMuaW5uZXJUZXh0Q29udGFpbmVyfT57Y3VycmVudFBhZ2V9L3t0b3RhbE51bWJlck9mUGFnZX08L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZSA9e3N0eWxlcy5pY29uQ29udGFpbmVyfSBvbkNsaWNrID0ge29uaW5jcmVtZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGUgPSB7c3R5bGVzLmlubmVySWNvbkNvbnRhaW5lcn0+PFJpZ2h0T3V0bGluZWQgY29sb3I9J3doaXRlJyBzaXplID0gezI1fSAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbkNvbXBvZW5lbnQ7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIGlzVmFsaWRFbGVtZW50LCBjbG9uZUVsZW1lbnQsIGNyZWF0ZVJlZiwgUmVhY3ROb2RlLCBSZWFjdEVsZW1lbnQsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuaW1wb3J0IHsgcGF0Y2hSZXNpemVIYW5kbGVyLCBpc0Z1bmN0aW9uLCBpc1NTUiwgaXNET01FbGVtZW50LCBjcmVhdGVOb3RpZmllciB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWFjdFJlc2l6ZURldGVjdG9yRGltZW5zaW9ucyB7XHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hpbGRGdW5jdGlvblByb3BzPEVsZW1lbnRUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMge1xyXG4gIHRhcmdldFJlZj86IFJlZk9iamVjdDxFbGVtZW50VD47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdpdGggb2JzZXJ2YWJsZSBlbGVtZW50J3Mgd2lkdGggYW5kIGhlaWdodC5cclxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcclxuICAgKi9cclxuICBvblJlc2l6ZT86ICh3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgdXBkYXRlIG9uIGhlaWdodCBjaGFuZ2UuXHJcbiAgICogRGVmYXVsdDogdHJ1ZVxyXG4gICAqL1xyXG4gIGhhbmRsZUhlaWdodD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciBvblJlc2l6ZSBvbiB3aWR0aCBjaGFuZ2UuXHJcbiAgICogRGVmYXVsdDogdHJ1ZVxyXG4gICAqL1xyXG4gIGhhbmRsZVdpZHRoPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBEbyBub3QgdHJpZ2dlciB1cGRhdGUgd2hlbiBhIGNvbXBvbmVudCBtb3VudHMuXHJcbiAgICogRGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBza2lwT25Nb3VudD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgdXBkYXRlIHN0cmF0ZWd5LiBQb3NzaWJsZSB2YWx1ZXM6IFwidGhyb3R0bGVcIiBhbmQgXCJkZWJvdW5jZVwiLlxyXG4gICAqIFNlZSBgbG9kYXNoYCBkb2NzIGZvciBtb3JlIGluZm9ybWF0aW9uIGh0dHBzOi8vbG9kYXNoLmNvbS9kb2NzL1xyXG4gICAqIHVuZGVmaW5lZCAtIGNhbGxiYWNrIHdpbGwgYmUgZmlyZWQgZm9yIGV2ZXJ5IGZyYW1lLlxyXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxyXG4gICAqL1xyXG4gIHJlZnJlc2hNb2RlPzogJ3Rocm90dGxlJyB8ICdkZWJvdW5jZSc7XHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSB0aW1lb3V0L2ludGVydmFsIGZvciBgcmVmcmVzaE1vZGVgIHN0cmF0ZWd5XHJcbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXHJcbiAgICovXHJcbiAgcmVmcmVzaFJhdGU/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogUGFzcyBhZGRpdGlvbmFsIHBhcmFtcyB0byBgcmVmcmVzaE1vZGVgIGFjY29yZGluZyB0byBsb2Rhc2ggZG9jc1xyXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxyXG4gICAqL1xyXG4gIHJlZnJlc2hPcHRpb25zPzogeyBsZWFkaW5nPzogYm9vbGVhbjsgdHJhaWxpbmc/OiBib29sZWFuIH07XHJcbiAgLyoqXHJcbiAgICogVGhlc2Ugb3B0aW9ucyB3aWxsIGJlIHVzZWQgYXMgYSBzZWNvbmQgcGFyYW1ldGVyIG9mIGByZXNpemVPYnNlcnZlci5vYnNlcnZlYCBtZXRob2RcclxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNpemVPYnNlcnZlci9vYnNlcnZlXHJcbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXHJcbiAgICovXHJcbiAgb2JzZXJ2ZXJPcHRpb25zPzogUmVzaXplT2JzZXJ2ZXJPcHRpb25zO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlc2l6ZURldGVjdG9yUHJvcHM8RWxlbWVudFQgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQcm9wcyB7XHJcbiAgLyoqXHJcbiAgICogQSBzZWxlY3RvciBvZiBhbiBlbGVtZW50IHRvIG9ic2VydmUuXHJcbiAgICogWW91IGNhbiB1c2UgdGhpcyBwcm9wZXJ0eSB0byBhdHRhY2ggcmVzaXplLW9ic2VydmVyIHRvIGFueSBET00gZWxlbWVudC5cclxuICAgKiBQbGVhc2UgcmVmZXIgdG8gdGhlIHF1ZXJ5U2VsZWN0b3IgZG9jcy5cclxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcclxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDUuMC4wLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA3LjAuMC5cclxuICAgKiBVc2UgdGFyZ2V0UmVmIGluc3RlYWRcclxuICAgKi9cclxuICBxdWVyeVNlbGVjdG9yPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFZhbGlkIG9ubHkgZm9yIGEgY2FsbGJhY2stcGF0dGVybi5cclxuICAgKiBJZ25vcmVkIGZvciBvdGhlciByZW5kZXIgdHlwZXMuXHJcbiAgICogU2V0IHJlc2l6ZS1kZXRlY3RvcidzIG5vZGUgdHlwZS5cclxuICAgKiBZb3UgY2FuIHBhc3MgYW55IHZhbGlkIFJlYWN0IG5vZGU6IHN0cmluZyB3aXRoIG5vZGUncyBuYW1lIG9yIGVsZW1lbnQuXHJcbiAgICogQ2FuIGJlIHVzZWZ1bCB3aGVuIHlvdSBuZWVkIHRvIGhhbmRsZSB0YWJsZSdzIG9yIHBhcmFncmFwaCdzIHJlc2l6ZXMuXHJcbiAgICogRGVmYXVsdDogXCJkaXZcIlxyXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gNS4wLjAuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDcuMC4wLlxyXG4gICAqIFVzZSB0YXJnZXRSZWYgaW5zdGVhZFxyXG4gICAqL1xyXG4gIG5vZGVUeXBlPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzOyAvLyB3aWxsIGJlIHBhc3NlZCB0byBSZWFjdC5jcmVhdGVFbGVtZW50KClcclxuICAvKipcclxuICAgKiBBIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXHJcbiAgICogQnkgZGVmYXVsdCBpdCdzIGEgcGFyZW50IGVsZW1lbnQgaW4gcmVsYXRpb24gdG8gdGhlIFJlYWN0UmVzaXplRGV0ZWN0b3IgY29tcG9uZW50LlxyXG4gICAqIEJ1dCB5b3UgY2FuIHBhc3MgYW55IERPTSBlbGVtZW50IHRvIG9ic2VydmUuXHJcbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBvbWl0dGVkIHdoZW4geW91IHBhc3MgcXVlcnlTZWxlY3Rvci5cclxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcclxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDUuMC4wLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA2LjAuMC5cclxuICAgKiBVc2UgdGFyZ2V0UmVmIGluc3RlYWRcclxuICAgKi9cclxuICB0YXJnZXREb21FbD86IEVsZW1lbnRUO1xyXG4gIC8qKlxyXG4gICAqIEEgUmVhY3QgcmVmZXJlbmNlIG9mIHRoZSBlbGVtZW50IHRvIG9ic2VydmUuXHJcbiAgICogUGFzcyBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB5b3Ugd2FudCB0byBhdHRhY2ggcmVzaXplIGhhbmRsZXJzIHRvLlxyXG4gICAqIEl0IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgUmVhY3QudXNlUmVmIG9yIFJlYWN0LmNyZWF0ZVJlZiBmdW5jdGlvbnNcclxuICAgKiBEZWZhdWx0OiB1bmRlZmluZWRcclxuICAgKi9cclxuICB0YXJnZXRSZWY/OiBSZWZPYmplY3Q8RWxlbWVudFQ+O1xyXG5cclxuICByZW5kZXI/OiAocHJvcHM6IFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zKSA9PiBSZWFjdE5vZGU7XHJcblxyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlIHwgKChwcm9wczogQ2hpbGRGdW5jdGlvblByb3BzPEVsZW1lbnRUPikgPT4gUmVhY3ROb2RlKTtcclxufVxyXG5cclxuY2xhc3MgUmVzaXplRGV0ZWN0b3I8RWxlbWVudFQgZXh0ZW5kcyBIVE1MRWxlbWVudCA9IEhUTUxFbGVtZW50PiBleHRlbmRzIFB1cmVDb21wb25lbnQ8XHJcbiAgUmVzaXplRGV0ZWN0b3JQcm9wczxFbGVtZW50VD4sXHJcbiAgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnNcclxuPiB7XHJcbiAgc2tpcE9uTW91bnQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgdGFyZ2V0UmVmO1xyXG4gIG9ic2VydmFibGVFbGVtZW50O1xyXG4gIHJlc2l6ZUhhbmRsZXI7XHJcbiAgcmVzaXplT2JzZXJ2ZXI7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFJlc2l6ZURldGVjdG9yUHJvcHM8RWxlbWVudFQ+KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgeyBza2lwT25Nb3VudCwgcmVmcmVzaE1vZGUsIHJlZnJlc2hSYXRlID0gMTAwMCwgcmVmcmVzaE9wdGlvbnMgfSA9IHByb3BzO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICAgIGhlaWdodDogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2tpcE9uTW91bnQgPSBza2lwT25Nb3VudDtcclxuICAgIHRoaXMudGFyZ2V0UmVmID0gY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLm9ic2VydmFibGVFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaXNTU1IoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyID0gcGF0Y2hSZXNpemVIYW5kbGVyKHRoaXMuY3JlYXRlUmVzaXplSGFuZGxlciwgcmVmcmVzaE1vZGUsIHJlZnJlc2hSYXRlLCByZWZyZXNoT3B0aW9ucyk7XHJcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IHdpbmRvdy5SZXNpemVPYnNlcnZlcih0aGlzLnJlc2l6ZUhhbmRsZXIpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaE9ic2VydmVyKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmF0dGFjaE9ic2VydmVyKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcclxuICAgIGlmIChpc1NTUigpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgPSBudWxsO1xyXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB0aGlzLmNhbmNlbEhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIGNhbmNlbEhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBpZiAodGhpcy5yZXNpemVIYW5kbGVyICYmIHRoaXMucmVzaXplSGFuZGxlci5jYW5jZWwpIHtcclxuICAgICAgLy8gY2FuY2VsIGRlYm91bmNlZCBoYW5kbGVyXHJcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlci5jYW5jZWwoKTtcclxuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhdHRhY2hPYnNlcnZlciA9ICgpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHsgdGFyZ2V0UmVmLCBvYnNlcnZlck9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgaWYgKGlzU1NSKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXRSZWYgJiYgdGFyZ2V0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgdGhpcy50YXJnZXRSZWYuY3VycmVudCA9IHRhcmdldFJlZi5jdXJyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAvLyBjYW4ndCBmaW5kIGVsZW1lbnQgdG8gb2JzZXJ2ZVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgJiYgdGhpcy5vYnNlcnZhYmxlRWxlbWVudCA9PT0gZWxlbWVudCkge1xyXG4gICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgb2JzZXJ2ZWRcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub2JzZXJ2YWJsZUVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudCA9ICgpOiBFbGVtZW50IHwgVGV4dCB8IG51bGwgPT4ge1xyXG4gICAgY29uc3QgeyBxdWVyeVNlbGVjdG9yLCB0YXJnZXREb21FbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBpZiAoaXNTU1IoKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gaW4gY2FzZSB3ZSBwYXNzIGEgcXVlcnlTZWxlY3RvclxyXG4gICAgaWYgKHF1ZXJ5U2VsZWN0b3IpIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5U2VsZWN0b3IpO1xyXG4gICAgLy8gaW4gY2FzZSB3ZSBwYXNzIGEgRE9NIGVsZW1lbnRcclxuICAgIGlmICh0YXJnZXREb21FbCAmJiBpc0RPTUVsZW1lbnQodGFyZ2V0RG9tRWwpKSByZXR1cm4gdGFyZ2V0RG9tRWw7XHJcbiAgICAvLyBpbiBjYXNlIHdlIHBhc3MgYSBSZWFjdCByZWYgdXNpbmcgUmVhY3QuY3JlYXRlUmVmKClcclxuICAgIGlmICh0aGlzLnRhcmdldFJlZiAmJiBpc0RPTUVsZW1lbnQodGhpcy50YXJnZXRSZWYuY3VycmVudCkpIHJldHVybiB0aGlzLnRhcmdldFJlZi5jdXJyZW50O1xyXG5cclxuICAgIC8vIHRoZSB3b3JzZSBjYXNlIHdoZW4gd2UgZG9uJ3QgcmVjZWl2ZSBhbnkgaW5mb3JtYXRpb24gZnJvbSB0aGUgcGFyZW50IGFuZCB0aGUgbGlicmFyeSBkb2Vzbid0IGFkZCBhbnkgd3JhcHBlcnNcclxuICAgIC8vIHdlIGhhdmUgdG8gdXNlIGEgZGVwcmVjYXRlZCBgZmluZERPTU5vZGVgIG1ldGhvZCBpbiBvcmRlciB0byBmaW5kIGEgRE9NIGVsZW1lbnQgdG8gYXR0YWNoIHRvXHJcbiAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGZpbmRET01Ob2RlKHRoaXMpO1xyXG5cclxuICAgIGlmICghY3VycmVudEVsZW1lbnQpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclR5cGUgPSB0aGlzLmdldFJlbmRlclR5cGUoKTtcclxuICAgIHN3aXRjaCAocmVuZGVyVHlwZSkge1xyXG4gICAgICBjYXNlICdyZW5kZXJQcm9wJzpcclxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XHJcbiAgICAgIGNhc2UgJ2NoaWxkRnVuY3Rpb24nOlxyXG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcclxuICAgICAgY2FzZSAnY2hpbGQnOlxyXG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcclxuICAgICAgY2FzZSAnY2hpbGRBcnJheSc6XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNyZWF0ZVJlc2l6ZUhhbmRsZXI6IFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllczogUmVzaXplT2JzZXJ2ZXJFbnRyeVtdKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCB7IGhhbmRsZVdpZHRoID0gdHJ1ZSwgaGFuZGxlSGVpZ2h0ID0gdHJ1ZSwgb25SZXNpemUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgaWYgKCFoYW5kbGVXaWR0aCAmJiAhaGFuZGxlSGVpZ2h0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgbm90aWZ5UmVzaXplID0gY3JlYXRlTm90aWZpZXIob25SZXNpemUsIHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKSwgaGFuZGxlV2lkdGgsIGhhbmRsZUhlaWdodCk7XHJcblxyXG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSAoZW50cnkgJiYgZW50cnkuY29udGVudFJlY3QpIHx8IHt9O1xyXG5cclxuICAgICAgY29uc3Qgc2hvdWxkU2V0U2l6ZSA9ICF0aGlzLnNraXBPbk1vdW50ICYmICFpc1NTUigpO1xyXG4gICAgICBpZiAoc2hvdWxkU2V0U2l6ZSkge1xyXG4gICAgICAgIG5vdGlmeVJlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2tpcE9uTW91bnQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGdldFJlbmRlclR5cGUgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IHsgcmVuZGVyLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChpc0Z1bmN0aW9uKHJlbmRlcikpIHtcclxuICAgICAgLy8gREVQUkVDQVRFRC4gVXNlIGBDaGlsZCBGdW5jdGlvbiBQYXR0ZXJuYCBpbnN0ZWFkXHJcbiAgICAgIHJldHVybiAncmVuZGVyUHJvcCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24oY2hpbGRyZW4pKSB7XHJcbiAgICAgIHJldHVybiAnY2hpbGRGdW5jdGlvbic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xyXG4gICAgICByZXR1cm4gJ2NoaWxkJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgLy8gREVQUkVDQVRFRC4gV3JhcCBjaGlsZHJlbiB3aXRoIGEgc2luZ2xlIHBhcmVudFxyXG4gICAgICByZXR1cm4gJ2NoaWxkQXJyYXknO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERFUFJFQ0FURUQuIFVzZSBgQ2hpbGQgRnVuY3Rpb24gUGF0dGVybmAgaW5zdGVhZFxyXG4gICAgcmV0dXJuICdwYXJlbnQnO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcmVuZGVyLCBjaGlsZHJlbiwgbm9kZVR5cGU6IFdyYXBwZXJUYWcgPSAnZGl2JyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBjb25zdCBjaGlsZFByb3BzID0geyB3aWR0aCwgaGVpZ2h0LCB0YXJnZXRSZWY6IHRoaXMudGFyZ2V0UmVmIH07XHJcbiAgICBjb25zdCByZW5kZXJUeXBlID0gdGhpcy5nZXRSZW5kZXJUeXBlKCk7XHJcblxyXG4gICAgc3dpdGNoIChyZW5kZXJUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ3JlbmRlclByb3AnOlxyXG4gICAgICAgIHJldHVybiByZW5kZXI/LihjaGlsZFByb3BzKTtcclxuICAgICAgY2FzZSAnY2hpbGRGdW5jdGlvbic6IHtcclxuICAgICAgICBjb25zdCBjaGlsZEZ1bmN0aW9uID0gY2hpbGRyZW4gYXMgKHByb3BzOiBDaGlsZEZ1bmN0aW9uUHJvcHM8RWxlbWVudFQ+KSA9PiBSZWFjdE5vZGU7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkRnVuY3Rpb24/LihjaGlsZFByb3BzKTtcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdjaGlsZCc6IHtcclxuICAgICAgICAvLyBAVE9ETyBidWcgcHJvbmUgbG9naWNcclxuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuIGFzIFJlYWN0RWxlbWVudDtcclxuICAgICAgICBpZiAoY2hpbGQudHlwZSAmJiB0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIC8vIGNoaWxkIGlzIGEgbmF0aXZlIERPTSBlbGVtZW50cyBzdWNoIGFzIGRpdiwgc3BhbiBldGNcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0UmVmLCAuLi5uYXRpdmVQcm9wcyB9ID0gY2hpbGRQcm9wcztcclxuICAgICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIG5hdGl2ZVByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2xhc3Mgb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgb3RoZXJ3aXNlXHJcbiAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnY2hpbGRBcnJheSc6IHtcclxuICAgICAgICBjb25zdCBjaGlsZEFycmF5ID0gY2hpbGRyZW4gYXMgUmVhY3RFbGVtZW50W107XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkQXJyYXkubWFwKGVsID0+ICEhZWwgJiYgY2xvbmVFbGVtZW50KGVsLCBjaGlsZFByb3BzKSk7XHJcbiAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gPFdyYXBwZXJUYWcgLz47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNpemVEZXRlY3RvcjtcclxuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XHJcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xyXG5pbXBvcnQgdHlwZSB7IERlYm91bmNlZEZ1bmMgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgUHJvcHMsIFJlYWN0UmVzaXplRGV0ZWN0b3JEaW1lbnNpb25zIH0gZnJvbSAnLi9SZXNpemVEZXRlY3Rvcic7XHJcblxyXG5leHBvcnQgdHlwZSBQYXRjaGVkUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayA9IERlYm91bmNlZEZ1bmM8UmVzaXplT2JzZXJ2ZXJDYWxsYmFjaz4gfCBSZXNpemVPYnNlcnZlckNhbGxiYWNrO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoUmVzaXplSGFuZGxlciA9IChcclxuICByZXNpemVDYWxsYmFjazogUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayxcclxuICByZWZyZXNoTW9kZTogUHJvcHNbJ3JlZnJlc2hNb2RlJ10sXHJcbiAgcmVmcmVzaFJhdGU6IFByb3BzWydyZWZyZXNoUmF0ZSddLFxyXG4gIHJlZnJlc2hPcHRpb25zOiBQcm9wc1sncmVmcmVzaE9wdGlvbnMnXVxyXG4pOiBQYXRjaGVkUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayA9PiB7XHJcbiAgc3dpdGNoIChyZWZyZXNoTW9kZSkge1xyXG4gICAgY2FzZSAnZGVib3VuY2UnOlxyXG4gICAgICByZXR1cm4gZGVib3VuY2UocmVzaXplQ2FsbGJhY2ssIHJlZnJlc2hSYXRlLCByZWZyZXNoT3B0aW9ucyk7XHJcbiAgICBjYXNlICd0aHJvdHRsZSc6XHJcbiAgICAgIHJldHVybiB0aHJvdHRsZShyZXNpemVDYWxsYmFjaywgcmVmcmVzaFJhdGUsIHJlZnJlc2hPcHRpb25zKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiByZXNpemVDYWxsYmFjaztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbiA9IChmbjogdW5rbm93bik6IGJvb2xlYW4gPT4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzU1NSID0gKCk6IGJvb2xlYW4gPT4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XHJcblxyXG5leHBvcnQgY29uc3QgaXNET01FbGVtZW50ID0gKGVsZW1lbnQ6IHVua25vd24pOiBib29sZWFuID0+XHJcbiAgZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudDtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVOb3RpZmllciA9XHJcbiAgKFxyXG4gICAgb25SZXNpemU6IFByb3BzWydvblJlc2l6ZSddLFxyXG4gICAgc2V0U2l6ZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248UmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnM+PixcclxuICAgIGhhbmRsZVdpZHRoOiBib29sZWFuLFxyXG4gICAgaGFuZGxlSGVpZ2h0OiBib29sZWFuXHJcbiAgKSA9PlxyXG4gICh7IHdpZHRoLCBoZWlnaHQgfTogUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMpOiB2b2lkID0+IHtcclxuICAgIHNldFNpemUocHJldiA9PiB7XHJcbiAgICAgIGlmIChwcmV2LndpZHRoID09PSB3aWR0aCAmJiBwcmV2LmhlaWdodCA9PT0gaGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gc2tpcCBpZiBkaW1lbnNpb25zIGhhdmVuJ3QgY2hhbmdlZFxyXG4gICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoKHByZXYud2lkdGggPT09IHdpZHRoICYmICFoYW5kbGVIZWlnaHQpIHx8IChwcmV2LmhlaWdodCA9PT0gaGVpZ2h0ICYmICFoYW5kbGVXaWR0aCkpIHtcclxuICAgICAgICAvLyBwcm9jZXNzIGBoYW5kbGVIZWlnaHQvaGFuZGxlV2lkdGhgIHByb3BzXHJcbiAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG9uUmVzaXplPy4od2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XHJcbiAgICB9KTtcclxuICB9O1xyXG4iLCIvKipcclxuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBfd2lkZ2V0TGFiZWw6ICdDb3N0cnV0dG9yZSBRdWVyeScsXHJcbiAgICBzZWxlY3RHZW9tZXRyeTpcIlNlbGV6aW9uYXJlIGxhIGdlb21ldHJpYVwiLFxyXG4gICAgbGF5ZXJzOlwiU3RyYXRpXCIsXHJcbiAgICB6b29tQTpcIlpvb20gQVwiLFxyXG4gICAgZXhwb3J0Q3N2OlwiRXNwb3J0YXppb25lIGluIGZpbGUgY3N2XCIsXHJcbiAgICBleHBvcnRKc29uOlwiRXNwb3J0YXppb25lIGluIHVuYSByYWNjb2x0YSBkaSBmdW56aW9uaVwiLFxyXG4gICAgc3RhdGlzdGljczpcIlN0YXRpc3RpY2hlXCIsXHJcbiAgICBjcmVhdGVMYXllcjpcIkNyZWFyZSBpbCBsaXZlbGxvXCIsXHJcbiAgICBhdHRyaWJ1dGVUYWJsZTpcIlZpc3RhIG5lbGxhIHRhYmVsbGEgZGVnbGkgYXR0cmlidXRpXCIsXHJcbiAgICBkZWxldGU6XCJDYW5jZWxsYXJlXCIsXHJcbiAgICBjb3VudE9mSXRlbXM6XCJDb250ZWdnaW8gZGVnbGkgYXJ0aWNvbGlcIixcclxuICAgIHN1bU9mVmFsdWVzOlwiU29tbWEgZGVpIHZhbG9yaVwiLFxyXG4gICAgbWluaW11bTpcIk1pbmltb1wiLFxyXG4gICAgbWF4aW11bTpcIk1hc3NpbW9cIixcclxuICAgIGF2ZXJhZ2U6XCJNZWRpYVwiLFxyXG4gICAgc2VsZWN0QnlQb2ludDpcIlNlbGV6aW9uZSBwZXIgcHVudG9cIixcclxuICAgIHNlbGVjdGlvbkJ5TGluZTpcIlNlbGV6aW9uZSBwZXIgbGluZWFcIixcclxuICAgIHNlbGVjdGlvbkJ5UG9seWdvbjpcIlNlbGV6aW9uZSBwZXIgcG9saWdvbm9cIixcclxuICAgIHNlbGVjdGlvbkJ5UmVjdGFuZ3VsYXI6XCJTZWxlemlvbmUgcGVyIHJldHRhbmdvbG9cIixcclxuICAgIHNlbGVjdGlvbkJ5Q2lyY2xlOlwiU2VsZXppb25lIHBlciBjZXJjaGlvXCIsXHJcbiAgICByZWZyZXNoOlwiQWdnaW9ybmFyZVwiLFxyXG4gICAgb2s6XCJPS1wiLFxyXG4gICAgY2FuY2VsOlwiQW5udWxsYW1lbnRvXCIsXHJcbiAgICBmaWVsZHM6XCJDYW1waVwiLFxyXG4gICAgc2VsZWN0aW9uQWN0aW9uOlwiU2VsZXppb25lIEF6aW9uZVwiLFxyXG4gICAgbWFwTG9hZGluZzpcIkluIGF0dGVzYSBkZWwgY2FyaWNhbWVudG8gZGVsbGEgbWFwcGEuLi5cIixcclxuICAgIG5vU2VsZWN0ZWRJdGVtOlwiTm9uIMOoIHN0YXRhIHNlbGV6aW9uYXRhIGFsY3VuYSB2b2NlXCIsXHJcbiAgICBub0l0ZW1TZWxlY3RlZDpcIk5vbiDDqCBzdGF0byB0cm92YXRvIGFsY3VuIGF0dHJpYnV0byBkb3BvIGwnaW50ZXJyb2dhemlvbmVcIlxyXG59XHJcbiIsImNvbnN0ICBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyID0gW1xyXG4gICAgeyBuYW1lOiAnw6gnLCB2YWx1ZTogJz0nIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6gnLCB2YWx1ZTogJzw+JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggdW5vIGRpJywgdmFsdWU6ICdJTicgfSwgLy8gT0JKRUNUSUQgSU4gKDEsMiwzKVxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIG5lc3N1bm8gZGknLCB2YWx1ZTogJ05PVF9JTicgfSwgLy8gICBPQkpFQ1RJRCBOT1RfSU4gKDEsMiwzKVxyXG4gICAgeyBuYW1lOiAnw6ggYWxtZW5vJywgdmFsdWU6ICc8PScgfSxcclxuICAgIHsgbmFtZTogJ8OoIGFsIG1hc3NpbW8nLCB2YWx1ZTogJz49JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggbWlub3JlIGRpJywgdmFsdWU6ICc8JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggbWFnZ2lvcmUgZGknLCB2YWx1ZTogJz4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB2dW90bycsIHZhbHVlOiAnaXMgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCB2dW90bycsIHZhbHVlOiAnaXMgbm90IG51bGwnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBjb21wcmVzbyB0cmEnLCB2YWx1ZTogJ2luY2x1ZGVkJyB9LCAvLyBPQkpFQ1RJRCA8IDIgQU5EIE9CSkVDVElEID4gNFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIGNvbXByZXNvIHRyYScsIHZhbHVlOiAnaXNfbm90X2luY2x1ZGVkJyB9IC8vZGEgdHJvdmFyZVxyXG5dO1xyXG5jb25zdCAgIHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcgPSBbXHJcbiAgICB7IG5hbWU6ICfDqCcsIHZhbHVlOiAnPScgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCcsIHZhbHVlOiAnPD4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB1bm8gZGknLCB2YWx1ZTogJ0lOJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIG5lc3N1bm8gZGknLCB2YWx1ZTogJ05PVF9JTicgfSxcclxuICAgIHsgbmFtZTogJ2luaXppYSBjb24nLCB2YWx1ZTogJ0xJS0UlJyB9LFxyXG4gICAgeyBuYW1lOiAndGVybWluYSBjb24nLCB2YWx1ZTogJyVMSUtFJyB9LFxyXG4gICAgeyBuYW1lOiAnY29udGllbmUnLCB2YWx1ZTogJyVMSUtFJScgfSxcclxuICAgIHsgbmFtZTogJ25vbiBjb250aWVuZScsIHZhbHVlOiAnTk9UIExJS0UnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB2dW90bycsIHZhbHVlOiAnaXMgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCB2dW90bycsIHZhbHVlOiAnaXMgbm90IG51bGwnIH1cclxuXTtcclxuZXhwb3J0IHsgcXVlcnlDb25zdHJ1Y3Rvck51bWJlciwgcXVlcnlDb25zdHJ1Y3RvclN0cmluZyB9IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfUG9seWdvbl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX2dlb21ldHJ5X2dlb21ldHJ5RW5naW5lX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfbGF5ZXJzX0dyYXBoaWNzTGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9yZXN0X3N1cHBvcnRfUXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X2RvbV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IFJlYWN0LCBBbGxXaWRnZXRQcm9wcywganN4LCBhcHBBY3Rpb25zIH0gZnJvbSBcImppbXUtY29yZVwiO1xyXG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcclxuaW1wb3J0IHsgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJqaW11LWljb25zL291dGxpbmVkL2VkaXRvci9jbG9zZVwiO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvcGx1c1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgU2VsZWN0LCBPcHRpb24sIEFsZXJ0LCBCdXR0b24sIEljb24gfSBmcm9tIFwiamltdS11aVwiO1xyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XHJcbmltcG9ydCB7IElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgUXVlcnkgZnJvbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCI7XHJcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL1RhYmxlXCI7XHJcbmltcG9ydCBSZWFjdFJlc2l6ZURldGVjdG9yIGZyb20gXCIuL2xpYi9SZXNpemVEZXRlY3RvclwiO1xyXG5pbXBvcnQgQXR0cmlidXRlVGFibGVDb25uZWN0b3IgZnJvbSBcIi4uL2Nvbm5lY3Rvci9hdHRyaWJ1dGVfdGFibGVfY29ubmVjdG9yXCI7XHJcbmltcG9ydCBBZGRTZXRUYWJsZSBmcm9tIFwiLi9jb21wb25lbnRzL0FkZFNldFRhYmxlXCI7XHJcbmltcG9ydCBMYXllclNlbGVjdENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2xheWVyU2VsZWN0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9jYWxsVG9BY3Rpb25Db21wb25lbnRcIjtcclxuaW1wb3J0IEFuZE9yU2VsZWN0b3IgZnJvbSBcIi4vY29tcG9uZW50cy9jb21tb24vYW5kb3JTZWxlY3RvclwiO1xyXG5pbXBvcnQge0NhbGxUb0FjdGlvbkNvbnRleHQsTGF5ZXJTZWxlY3RDb250ZXh0LFRhYmxlc0NvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRBcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LGFueT4ge1xyXG4gIFxyXG4gIGdyYXBoaWNMYXllckZvdW5kID0gbmV3IEdyYXBoaWNzTGF5ZXIoeyBsaXN0TW9kZTogXCJoaWRlXCIsIHZpc2libGU6IHRydWUgfSk7XHJcbiAgZ3JhcGhpY0xheWVyU2VsZWN0ZWQgPSBuZXcgR3JhcGhpY3NMYXllcih7IGxpc3RNb2RlOiBcImhpZGVcIiwgdmlzaWJsZTogdHJ1ZSB9KTtcclxuXHJcbiAgc3RhdGljIGFjdGl2ZVYgPSBudWxsO1xyXG4gIHN0YXRpYyBqaW11TGF5ZXJWaWV3eiA9IG51bGw7XHJcbiAgc3RhdGljIGF0dHJpYnV0ZV90YWJsZV9kYXRhID0gbnVsbDtcclxuICBzdGF0aWMgaW5pdGlhbFpvb20gPSAwO1xyXG5cclxuICBhdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciA9IG51bGw7XHJcbiAgcXVlcnlBcnJheSA9IFtdO1xyXG4gIG91dGZpZWxkcyA9IFtdO1xyXG4gIGN1cnJlbnRMYXllclZpZXcgPSBudWxsO1xyXG4gIHNldFF1ZXJ5QXJyYXkgPSBbXTtcclxuICBzZXRPdXRGaWVsZHMgPSBbXTtcclxuICBzZXRRdWVyeVN0cmluZyA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICAgIHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIgPSB0aGlzLmFjdGl2ZVZpZXdDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XHJcbiAgICAvL0xheWVyXHJcbiAgICB0aGlzLmdldFF1ZXJ5QXR0cmlidXRlID0gdGhpcy5nZXRRdWVyeUF0dHJpYnV0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nZXRRdWVyeSA9IHRoaXMuZ2V0UXVlcnkuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHJvcGRvd25JdGVtQ2xpY2sgPSB0aGlzLmRyb3Bkb3duSXRlbUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmNob29zZUFuZE9yU2V0ID0gdGhpcy5jaG9vc2VBbmRPclNldC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jbG9zZURyb3AgPSB0aGlzLmNsb3NlRHJvcC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5jbG9zZURyb3BPbmNsaWNrT3V0c2lkZSA9IHRoaXMuY2xvc2VEcm9wT25jbGlja091dHNpZGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25tb3VzZUxlYXZlID0gdGhpcy5vbm1vdXNlTGVhdmUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycyA9IHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5nZXRBbGxKaW11TGF5ZXJWaWV3cyA9IHRoaXMuZ2V0QWxsSmltdUxheWVyVmlld3MuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZnVuY3Rpb25Db3VudGVySXNDaGVja2VkID0gdGhpcy5mdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZ2V0UXVlcnlTZXQgPSB0aGlzLmdldFF1ZXJ5U2V0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBpbml0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgamltdU1hcFZpZXc6IG51bGwsXHJcbiAgICAgIGxheWVyQ29udGVudHM6IFtdLFxyXG4gICAgICBjaGVja2VkTGF5ZXJfOiBbXSxcclxuICAgICAgcmVzdWx0TGF5ZXJMaXN0OiBbXSxcclxuICAgICAgaXNMYXllclNlbGVjdGVkOiBmYWxzZSxcclxuICAgICAgcmVzdWx0c0xheWVyU2VsZWN0ZWQ6IFtdLFxyXG4gICAgICBjdXJyZW50VGFyZ2V0VGV4dDogbnVsbCxcclxuICAgICAgZ2VvbWV0cnk6IG51bGwsXHJcbiAgICAgIHR5cGVTZWxlY3RlZDogbnVsbCxcclxuICAgICAgbGlzdFNlcnZpY2VzOiBbXSxcclxuICAgICAgY3VycmVudEZpcnN0UXVlcnk6IFwiXCIsXHJcbiAgICAgIGN1cnJlbnRGaXJzdFF1ZXJ5VHlwZTogbnVsbCxcclxuICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBcInZhbG9yZVwiLFxyXG4gICAgICBmaXJzdFRleHRJbmNsdWRlZEhhbmRsZXI6IFwiMFwiLFxyXG4gICAgICBzZWNvbmRUZXh0SW5jbHVkZWRIYW5kbGVyOiBcIjBcIixcclxuICAgICAgdGFibGVzOiBbXSxcclxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcclxuICAgICAgY291bnRlcklzQ2hlY2tlZDogW10sXHJcbiAgICAgIGNoZWNrZWRUb1F1ZXJ5OiBbXSxcclxuICAgICAgdGFibGVDb3VudGVyOiAwLFxyXG4gICAgICB0YWJsZUNvdW50ZXJTZXQ6IDAsXHJcbiAgICAgIHdoZXJlQ2xhdXNlczogW10sXHJcbiAgICAgIHRhYmxlc1NldElkOiBudWxsLFxyXG4gICAgICB3aGVyZUNsYXVzZVNldDogW10sXHJcbiAgICAgIHRhYmxlc1NldDogW10sXHJcbiAgICAgIHRhYmxlc0lkOiBudWxsLFxyXG4gICAgICBpc09wZW46IGZhbHNlLFxyXG4gICAgICBBbmRPcjogXCJBTkRcIixcclxuICAgICAgQW5kT3JTZXQ6IFwiQU5EXCIsXHJcbiAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICAgIGF1dE9wZW46IHRydWUsXHJcbiAgICAgIG1vdXNlbGVhdmU6IGZhbHNlLFxyXG4gICAgICBkcm9wRG93bnM6IHt9LFxyXG4gICAgICBkcm9wRG93bnNTZXQ6IHt9LFxyXG4gICAgICBoaWdobGlnaHRJZHM6IFtdLFxyXG4gICAgICBzZWxlY3RlZEZpZWxkOiBudWxsLFxyXG4gICAgICBvdGhlclF1ZXJpZXNWYWx1ZToge30sXHJcbiAgICAgIGRyb3BJZDogbnVsbCxcclxuICAgICAgZHJvcElkU2V0OiBudWxsLFxyXG4gICAgICBoaWdsaWdodFNlbGVjdGVkOiBbXSxcclxuICAgICAgaXRlbU5vdEZvdW5kOiBudWxsLFxyXG4gICAgICBjdXJyZW50U2VsZWN0ZWRJZDogXCIgXCIsXHJcbiAgICAgIGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IGZhbHNlLFxyXG4gICAgICB3aWRnZXRTdGF0ZUNsb3NlZENoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICB3aWRnZXRTdGF0ZU9wZW5lZENoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICBzaG93QWRkU2VsZWN0OiB0cnVlLFxyXG4gICAgICBTZXRCbG9jazogW10sXHJcbiAgICAgIHNlbGVjdGVkSWQ6IG51bGwsXHJcbiAgICAgIHdpZHRoOiAwLFxyXG4gICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgIHF1ZXJ5Q2hhbmdlZDp7fVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBubHMgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaW50bD8gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiBpZCxkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzW2lkXX0pOiBpZDtcclxuICB9O1xyXG5cclxuICBhY3RpdmVWaWV3Q2hhbmdlSGFuZGxlcihqbXY6IEppbXVNYXBWaWV3KSB7XHJcbiAgICBpZiAoam12KSB7XHJcbiAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJGb3VuZCk7XHJcbiAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJTZWxlY3RlZCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdExheWVyTGlzdCA9IFtdO1xyXG4gICAgICBqbXYuY2xlYXJTZWxlY3RlZEZlYXR1cmVzKCk7XHJcbiAgICAgIGptdi52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoZi50eXBlID09PSBcImZlYXR1cmVcIikge1xyXG4gICAgICAgICAgaWYgKCFmLnZpc2libGUpZi52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgIGptdi52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gXCIxPTFcIjtcclxuICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW1wiKlwiXTtcclxuICAgICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHsgd2hlcmU6IHF1ZXJ5LndoZXJlIH07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJlc3VsdExheWVyTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZixcclxuICAgICAgICAgICAgbGFiZWw6IGYudGl0bGUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBpbmRleCxcclxuICAgICAgICAgICAgbGF5ZXJJRDogZi5pZCxcclxuICAgICAgICAgICAgdXJsU2VydmljZVNlcnZlcjogZi51cmwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBXaWRnZXQuYWN0aXZlViA9IGptdjtcclxuICAgICAgV2lkZ2V0LmppbXVMYXllclZpZXd6ID0gam12Py5qaW11TGF5ZXJWaWV3cztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdExheWVyTGlzdDogcmVzdWx0TGF5ZXJMaXN0LCBqaW11TWFwVmlldzogam12IH0pO1xyXG4gICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yID0gbmV3IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yKGptdiwgdGhpcyk7XHJcbiAgICAgIFdpZGdldC5pbml0aWFsWm9vbSA9IGptdi52aWV3Lnpvb207XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiaW5pdGlhbE1hcFpvb21cIixqbXYudmlldy56b29tKSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0xheWVyU2VsZWN0ZWQgIT09IHByZXZQcm9wcy5pc0xheWVyU2VsZWN0ZWQpIHt9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMgIT09IHByZXZQcm9wcy53aGVyZUNsYXVzZXMpIHt9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHt9XHJcbiAgLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAqIEVWRU5UIENMSUNLIFNFTEVDVFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgcmVtb3ZlVmFsdWVGcm9tT2JqZWN0KG9iaikge1xyXG4gICAgbGV0IG5ld1doZXJlQ2xhdXNlID0gb2JqO1xyXG4gICAgaWYgKG9iaj8uaWZJbk9yTm90SW5RdWVyeVZhbHVlKSB7XHJcbiAgICAgIG5ld1doZXJlQ2xhdXNlID0ge1xyXG4gICAgICAgIGlkOiBvYmouaWQsXHJcbiAgICAgICAgYXR0cmlidXRlUXVlcnk6IG9iai5hdHRyaWJ1dGVRdWVyeSxcclxuICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IG9iai5hdHRyaWJ1dGVRdWVyeVR5cGUsXHJcbiAgICAgICAgcXVlcnlWYWx1ZTogb2JqLnF1ZXJ5VmFsdWUsXHJcbiAgICAgICAgaWZJbk9yTm90SW5RdWVyeVZhbHVlOiBvYmouaWZJbk9yTm90SW5RdWVyeVZhbHVlLFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3V2hlcmVDbGF1c2UgPSB7XHJcbiAgICAgICAgaWQ6IG9iai5pZCxcclxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogb2JqLmF0dHJpYnV0ZVF1ZXJ5LFxyXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogb2JqLmF0dHJpYnV0ZVF1ZXJ5VHlwZSxcclxuICAgICAgICBxdWVyeVZhbHVlOiBvYmoucXVlcnlWYWx1ZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdXaGVyZUNsYXVzZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFF1ZXJ5QXR0cmlidXRlKGUsdHlwZT1cInNpbmdsZVwiKSB7XHJcbiAgICBjb25zdCBrZXl0eXBlID0gdHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XHJcbiAgICBsZXQgY3VycmVudFdoZXJlQ2xhdXNlO1xyXG4gICAgY29uc3Qgd2hlcmVDbGF1c2VTdGF0ZSA9IHRoaXMuc3RhdGVba2V5dHlwZV07XHJcbiAgICBpZiAoIXdoZXJlQ2xhdXNlU3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgIGxldCB3aGVyZUNsYXVzZSA9IHtcclxuICAgICAgICBpZDplLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSxcclxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOmUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmRhdGF0eXBlLnZhbHVlLFxyXG4gICAgICAgIHF1ZXJ5VmFsdWU6IFwiPVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSB3aGVyZUNsYXVzZTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7W2tleXR5cGVdOiBbd2hlcmVDbGF1c2VdIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHdoZXJlQ2xhdXNlU3RhdGUubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSB3aGVyZUNsYXVzZVN0YXRlLm1hcCgob2JqKSA9PiBvYmouaWQpLmluZGV4T2YoZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpO1xyXG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHdoZXJlQ2xhdXNlU3RhdGUubWFwKChvYmopID0+IHtcclxuICAgICAgICAgIGlmIChvYmouaWQgPT09IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAuLi5vYmosXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnk6IGUuY3VycmVudFRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YXR5cGUudmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIG9iaiA9IHRoaXMucmVtb3ZlVmFsdWVGcm9tT2JqZWN0KG9iaik7XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHdoZXJlQ2xhdXNlU3RhdGUuZmlsdGVyKChhKSA9PiBhLmlkICE9PSBvYmouaWQpO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtyZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO30pO1xyXG4gICAgICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSBvYmo7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHdoZXJlQ2xhdXNlID0ge1xyXG4gICAgICAgICAgaWQ6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlLFxyXG4gICAgICAgICAgYXR0cmlidXRlUXVlcnk6IGUuY3VycmVudFRhcmdldC5uYW1lLFxyXG4gICAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHdoZXJlQ2xhdXNlID0gdGhpcy5yZW1vdmVWYWx1ZUZyb21PYmplY3Qod2hlcmVDbGF1c2UpXHJcbiAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2U7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2tleXR5cGVdOiBbLi4ud2hlcmVDbGF1c2VTdGF0ZSx3aGVyZUNsYXVzZV0sfSk7XHJcbiAgICAgICAgd2hlcmVDbGF1c2VTdGF0ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7cmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMX0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRGaWVsZDogZS5jdXJyZW50VGFyZ2V0Lm5hbWUgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAoY3VycmVudFdoZXJlQ2xhdXNlKXRoaXMubWFuaXB1bGF0ZUZpZWxkUXVlcnkoY3VycmVudFdoZXJlQ2xhdXNlLnF1ZXJ5VmFsdWUsY3VycmVudFdoZXJlQ2xhdXNlLmlkLHR5cGUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBmb3IgY2FsbGVkIG9uIGRyb3Agc2VsZWN0IGxpc3RcclxuICBhc3luYyBnZXRRdWVyeShlLCB0eXBlID0gXCJzaW5nbGVcIikge1xyXG4gICAgY29uc3QgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xyXG4gICAgY29uc3QgY3VycmVudFRhcmdldE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQubmFtZTtcclxuICAgIHRoaXMubWFuaXB1bGF0ZUZpZWxkUXVlcnkoY3VycmVudFRhcmdldE5hbWUsIGNsaWNrZWRRdWVyeVRhYmxlSWQsIHR5cGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnlDaGFuZ2VkOnsuLi50aGlzLnN0YXRlLnF1ZXJ5Q2hhbmdlZCxbY2xpY2tlZFF1ZXJ5VGFibGVJZF06dHJ1ZX19KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbWFuaXB1bGF0ZUZpZWxkUXVlcnkoXHJcbiAgICBjdXJyZW50VGFyZ2V0TmFtZTogc3RyaW5nLFxyXG4gICAgY2xpY2tlZFF1ZXJ5VGFibGVJZDogc3RyaW5nLFxyXG4gICAgdHlwZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBsZXQgcXVlcnlJbmRleCA9IC0xO1xyXG4gICAgbGV0IGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGUgPSBcIiBcIjtcclxuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcclxuICAgIGNvbnN0IGtleXR5cGUgPSB0eXBlID09PSBcInNpbmdsZVwiID8gXCJ3aGVyZUNsYXVzZXNcIiA6IFwid2hlcmVDbGF1c2VTZXRcIjtcclxuICAgIGlmICh0aGlzLnN0YXRlW2tleXR5cGVdLmxlbmd0aCkge1xyXG4gICAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZVtrZXl0eXBlXVxyXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxyXG4gICAgICAgIC5pbmRleE9mKGNsaWNrZWRRdWVyeVRhYmxlSWQpO1xyXG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5dHlwZV0ubWFwKChvYmopID0+IHtcclxuICAgICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcclxuICAgICAgICAgICAgY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZSA9IG9iai5hdHRyaWJ1dGVRdWVyeTtcclxuICAgICAgICAgICAgLy8gb2JqID0gdGhpcy5yZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKVxyXG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgcXVlcnlWYWx1ZTogY3VycmVudFRhcmdldE5hbWUgfTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlcztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50VGFyZ2V0TmFtZSA9PT0gXCJJTlwiIHx8IGN1cnJlbnRUYXJnZXROYW1lID09PSBcIk5PVF9JTlwiKSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfSBpcyBub3QgbnVsbGA7XHJcbiAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9YF07XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGYucXVlcnlGZWF0dXJlcyhxdWVyeSk7XHJcbiAgICAgICAgICAgICAgcmVzdWx0cy50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbFRoaXJkUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBlbC5hdHRyaWJ1dGVzW2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGVdLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlbC5hdHRyaWJ1dGVzW2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGVdLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGV0YWlsVGhpcmRRdWVyeVswXS52YWx1ZSAhPT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkuc29ydCgoYSwgYikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGEubGFiZWwgPCBiLmxhYmVsID8gLTEgOiBhLmxhYmVsID4gYi5sYWJlbCA/IDEgOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICBhLnZhbHVlIC0gYi52YWx1ZSA8IDAgPyAtMSA6IGEudmFsdWUgPT09IGIudmFsdWUgPyAwIDogMVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleXR5cGVdLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gb2JqID0gdGhpcy5yZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogZGV0YWlsVGhpcmRRdWVyeSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5dHlwZSA9PT0gXCJ3aGVyZUNsYXVzZVNldFwiKSB7XHJcbiAgICAgIGlmIChuZXdXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlID0gbmV3V2hlcmVTZXRDbGF1c2UuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCk7XHJcbiAgICAgICAgdGhpcy5hZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrKGNsaWNrZWRRdWVyeVRhYmxlSWQsY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0UXVlcnlTZXQoZSwgdHlwZSA9IFwic2luZ2xlXCIpIHtcclxuICAgIGNvbnN0IGNsaWNrZWRRdWVyeVRhYmxlSWQgPSBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZTtcclxuICAgIGNvbnN0IGN1cnJlbnRUYXJnZXROYW1lID0gZS5jdXJyZW50VGFyZ2V0Lm5hbWU7XHJcbiAgICB0aGlzLm1hbmlwdWxhdGVGaWVsZFF1ZXJ5KGN1cnJlbnRUYXJnZXROYW1lLCBjbGlja2VkUXVlcnlUYWJsZUlkLCBcInNldFwiKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3F1ZXJ5Q2hhbmdlZDp7Li4udGhpcy5zdGF0ZS5xdWVyeUNoYW5nZWQsW2NsaWNrZWRRdWVyeVRhYmxlSWRdOnRydWV9fSlcclxuICB9XHJcblxyXG4gIC8vVE9ETyBsYSBzZW5kUXVlcnkgYW5kcsOgIHJpc2lzdGVtYXRhIHF1YW5kbyBzaSBhZ2dpdW5nZXLDoCBvbHRyZSBhbGwnZXNwcmVzc2lvbmUgYW5jaGUgaWwgc2V0IGRpIGVzcHJlc3Npb25pXHJcbiAgLy8gcGVyY2jDqSBvcmEgcGVyIGwnQU5EIGZhIGlsIGNpY2xvIGZvciBzdSBvZ25pIHdoZXJlIGluc2VyaXRhIG5lbGwnYXJyYXkgbWEgZG9wbyBzYXLDoCBuZWNlc3NhcmlvIHNjb21wb3JyZSBwZXIgY3JlYXJlIGxlIGVzcHJlc3Npb25pXHJcblxyXG4gIGFkZFR3b1RhYmxlID0gKGJsb2NrSWQpID0+IHtcclxuICAgIGxldCBuZXdTdGF0ZUJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xyXG4gICAgY29uc3QgaW5kZXggPSBuZXdTdGF0ZUJsb2NrLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5ibG9ja0lkID09PSBibG9ja0lkKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgY29uc3QgY3VycmVudEJsb2NrID0gbmV3U3RhdGVCbG9ja1tpbmRleF07XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRJZCA9IGN1cnJlbnRCbG9ja1tcInRhYmxlQ291bnRlclNldFwiXTtcclxuICAgICAgY3VycmVudEJsb2NrW1widGFibGVzU2V0XCJdID0gWyAuLi5jdXJyZW50QmxvY2tbXCJ0YWJsZXNTZXRcIl0seyBpZDogY3VycmVudElkLCBkZWxldGVkOiBmYWxzZSB9XTtcclxuICAgICAgY3VycmVudEJsb2NrW1wiZHJvcERvd25zU2V0XCJdID0gey4uLmN1cnJlbnRCbG9ja1tcImRyb3BEb3duc1NldFwiXSxbY3VycmVudElkXTogZmFsc2V9O1xyXG4gICAgICBjdXJyZW50QmxvY2tbXCJ0YWJsZUNvdW50ZXJTZXRcIl0gPSBjdXJyZW50QmxvY2tbXCJ0YWJsZUNvdW50ZXJTZXRcIl0gKyAxO1xyXG4gICAgICBuZXdTdGF0ZUJsb2NrW2luZGV4XSA9IGN1cnJlbnRCbG9jaztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnRhYmxlcy5sZW5ndGggPiAwKSB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IG5ld1N0YXRlQmxvY2sgfSk7XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlVGFibGUgPSAoaWQpID0+IHtcclxuICAgIGxldCBjb3BpZWRUYWJsZSA9IFsuLi50aGlzLnN0YXRlLnRhYmxlc107XHJcbiAgICBjb3BpZWRUYWJsZSA9IGNvcGllZFRhYmxlLm1hcCgoZWwpID0+IHtcclxuICAgICAgaWYgKGVsLmlkID09PSBpZCllbC5kZWxldGVkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdUYWJsZXMgPSBjb3BpZWRUYWJsZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWJsZUNvdW50ZXI6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyIC0gMSB9KTtcclxuICAgIGNvbnN0IGNvcGllZFdoZXJlQ2xhdXNlcyA9IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlc107XHJcbiAgICBjb25zdCBkZWxldGVkV2hlcmVDbGF1c2VzID0gY29waWVkV2hlcmVDbGF1c2VzLmZpbHRlcigoZWwpID0+IGVsLmlkICE9PSBpZC50b1N0cmluZygpKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0YWJsZXM6IG5ld1RhYmxlcyxcclxuICAgICAgd2hlcmVDbGF1c2VzOiBkZWxldGVkV2hlcmVDbGF1c2VzLFxyXG4gICAgICB0YWJsZUNvdW50ZXI6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyIC0gMSxcclxuICAgICAgc2VsZWN0ZWRJZDogaWQsXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRhYmxlcy5sZW5ndGggPT09IDApdGhpcy5zZXRTdGF0ZSh7d2hlcmVDbGF1c2VzOltdfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRhYmxlTGVuZ3RoID0gdGhpcy5zdGF0ZS50YWJsZXMubWFwKChlbCwgaWR4KSA9PiAoZWwuZGVsZXRlZCA9PSBmYWxzZSA/IGlkeCA6IFwiXCIpKS5maWx0ZXIoU3RyaW5nKS5sZW5ndGg7XHJcbiAgICBjb25zdCB0YWJsZXNTZXRMZW5ndGggPSB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aDtcclxuICAgIGlmICh0YWJsZUxlbmd0aCA9PSAyICYmIHRhYmxlc1NldExlbmd0aCA9PSAwKXRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcclxuICAgIFxyXG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDAgJiYgdGFibGVzU2V0TGVuZ3RoID4gMCl0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogdHJ1ZSB9KTtcclxuICAgIFxyXG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDEgJiYgdGFibGVzU2V0TGVuZ3RoID09IDApdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IHRydWUgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIGRlbGV0ZUJsb2NrID0gKGJsb2NrSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgY29waWVkQmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XHJcbiAgICBjb25zdCBjb3BpZWRXaGVyZWNsYXVzZVNldCA9IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0XTtcclxuICAgIGNvbnN0IGluZGV4ID0gY29waWVkQmxvY2suZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJsb2NrSWQgPT09IGJsb2NrSWQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb3BpZWRCbG9jay5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGNvcGllZEJsb2NrIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvcGllZFdoZXJlY2xhdXNlU2V0Py5sZW5ndGgpIHtcclxuICAgICAgY29waWVkV2hlcmVjbGF1c2VTZXQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkLnNwbGl0KFwiLVwiKVsxXSA9PT0gYmxvY2tJZCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGVyZUNsYXVzZVNldDogY29waWVkV2hlcmVjbGF1c2VTZXQgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YWJsZUxlbmd0aCA9IHRoaXMuc3RhdGUudGFibGVzLm1hcCgoZWwsIGlkeCkgPT4gKGVsLmRlbGV0ZWQgPT0gZmFsc2UgPyBpZHggOiBcIlwiKSkuZmlsdGVyKFN0cmluZykubGVuZ3RoO1xyXG4gICAgaWYgKHRhYmxlTGVuZ3RoID09IDEgJiYgY29waWVkQmxvY2subGVuZ3RoID09IDApdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IHRydWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlQmxvY2tUYWJsZSA9ICh0YWJsZUJsb2NrSWQ6IHN0cmluZywgYmxvY2tJZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB0YWJsZUlkID0gdGFibGVCbG9ja0lkLnNwbGl0KFwiLVwiKVswXTtcclxuICAgIGNvbnN0IGNvcGllZEJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xyXG4gICAgY29uc3QgY29waWVkV2hlcmVjbGF1c2VTZXQgPSBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldF07XHJcbiAgICBjb25zdCBjdXJyZW50QmxvY0luZGV4ID0gY29waWVkQmxvY2suZmluZEluZGV4KChibG9jaykgPT4gYCR7YmxvY2suYmxvY2tJZH1gID09PSBibG9ja0lkKTtcclxuICAgIGxldCBjdXJyZW50QmxvY2s7XHJcbiAgICBpZiAoY3VycmVudEJsb2NJbmRleCAhPT0gLTEpIGN1cnJlbnRCbG9jayA9IGNvcGllZEJsb2NrW2N1cnJlbnRCbG9jSW5kZXhdO1xyXG4gICAgaWYgKGN1cnJlbnRCbG9jaykge1xyXG4gICAgICBjb25zdCBjdXJyZW50V2hlcmVDbGF1c2VTZXQgPSBjdXJyZW50QmxvY2tbYmxvY2tJZF07XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWJsZVNldHMgPSBjdXJyZW50QmxvY2tbXCJ0YWJsZXNTZXRcIl07XHJcbiAgICAgIGlmIChjdXJyZW50V2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGNvcGllZEN1cnJlbnRXaGVyZUNsYXVzZVNldCA9IFsuLi5jdXJyZW50V2hlcmVDbGF1c2VTZXRdO1xyXG4gICAgICAgIGNvbnN0IHdoZXJlQ2xhdXNlU2V0SW5kZXggPSBjb3BpZWRDdXJyZW50V2hlcmVDbGF1c2VTZXQuZmluZEluZGV4KChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSB0YWJsZUJsb2NrSWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKHdoZXJlQ2xhdXNlU2V0SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICBjb3BpZWRDdXJyZW50V2hlcmVDbGF1c2VTZXQuc3BsaWNlKHdoZXJlQ2xhdXNlU2V0SW5kZXgsIDEpO1xyXG4gICAgICAgICAgY3VycmVudEJsb2NrW2Jsb2NrSWRdID0gY29waWVkQ3VycmVudFdoZXJlQ2xhdXNlU2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoY3VycmVudFRhYmxlU2V0cz8ubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY29waWVkVGFibGVTZXRzID0gWy4uLmN1cnJlbnRUYWJsZVNldHNdO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlU2V0SW5kZXggPSBjb3BpZWRUYWJsZVNldHMuZmluZEluZGV4KChpdGVtKSA9PiBgJHtpdGVtLmlkfWAgPT09IHRhYmxlSWQpO1xyXG4gICAgICAgIGlmICh0YWJsZVNldEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgY29waWVkVGFibGVTZXRzW3RhYmxlU2V0SW5kZXhdW1wiZGVsZXRlZFwiXSA9IHRydWU7XHJcbiAgICAgICAgICBjdXJyZW50QmxvY2tbXCJ0YWJsZXNTZXRcIl0gPSBjb3BpZWRUYWJsZVNldHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvcGllZEJsb2NrW2N1cnJlbnRCbG9jSW5kZXhdID0gY3VycmVudEJsb2NrO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGNvcGllZEJsb2NrIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvcGllZFdoZXJlY2xhdXNlU2V0Py5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3BpZWRXaGVyZWNsYXVzZVNldC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5pZCA9PT0gdGFibGVCbG9ja0lkKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29waWVkV2hlcmVjbGF1c2VTZXQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2hlcmVDbGF1c2VTZXQ6IGNvcGllZFdoZXJlY2xhdXNlU2V0IH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlQmxvY2tBbGwgPSAoYmxvY2tEYXRhKSA9PiB7fTtcclxuXHJcbiAgdGV4dElucHV0SGFuZGxlciA9IChlLCBxdWVyeVR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XHJcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xyXG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcclxuICAgIHRoaXMucXVlcnlUZXh0Q29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCwgcXVlcnlUeXBlKTtcclxuICB9O1xyXG5cclxuICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIgPSAoZSwgcXVlcnlUeXBlID0gXCJzaW5nbGVcIikgPT4ge1xyXG4gICAgbGV0IHR4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcclxuICAgIGxldCBjdXJyZW50VGFibGVJZCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXNbMF0udmFsdWU7XHJcbiAgICBsZXQgaW5wdXQgPSBcImZpcnN0XCI7XHJcbiAgICB0aGlzLnF1ZXJ5VGV4dEluY2x1ZGVkQ29uc3RydWN0b3IodHh0LCBjdXJyZW50VGFibGVJZCwgaW5wdXQsIHF1ZXJ5VHlwZSk7XHJcbiAgfTtcclxuXHJcbiAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlciA9IChlLCBxdWVyeVR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XHJcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWUudHJpbSgpXHJcbiAgICBsZXQgY3VycmVudFRhYmxlSWQgPSBlLnRhcmdldC5hdHRyaWJ1dGVzWzBdLnZhbHVlO1xyXG4gICAgbGV0IGlucHV0ID0gXCJzZWNvbmRcIjtcclxuICAgIHRoaXMucXVlcnlUZXh0SW5jbHVkZWRDb25zdHJ1Y3Rvcih0eHQsIGN1cnJlbnRUYWJsZUlkLCBpbnB1dCwgcXVlcnlUeXBlKTtcclxuICB9O1xyXG5cclxuICB1bml2b2NvU2VsZWN0SGFuZGxlciA9IChjdXJyZW50VGFibGU6e3ZhbHVlOmFueSx0YWJsZUlkOnN0cmluZ30sIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCIpID0+IHtcclxuICAgIGxldCB0eHQgPSBjdXJyZW50VGFibGUudmFsdWUudHJpbSgpO1xyXG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gY3VycmVudFRhYmxlLnRhYmxlSWQ7XHJcbiAgICB0aGlzLnF1ZXJ5VGV4dENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIHF1ZXJ5VHlwZSk7XHJcbiAgfTtcclxuXHJcbiAgcXVlcnlUZXh0Q29uc3RydWN0b3IgPSAodHh0LCBjdXJyZW50VGFibGVJZCwgcXVlcnlUeXBlKSA9PiB7XHJcbiAgICBsZXQgcXVlcnlJbmRleDtcclxuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcclxuICAgIGNvbnN0IGtleVR5cGUgPSBxdWVyeVR5cGUgPT09IFwic2luZ2xlXCIgPyBcIndoZXJlQ2xhdXNlc1wiIDogXCJ3aGVyZUNsYXVzZVNldFwiO1xyXG4gICAgaWYgKHRoaXMuc3RhdGVba2V5VHlwZV0ubGVuZ3RoKSB7XHJcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlW2tleVR5cGVdLm1hcCgob2JqKSA9PiBvYmouaWQpLmluZGV4T2YoY3VycmVudFRhYmxlSWQpO1xyXG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5VHlwZV0ubWFwKChvYmopID0+IHtcclxuICAgICAgICAgIGlmIChvYmouaWQgPT09IGN1cnJlbnRUYWJsZUlkKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCB2YWx1ZTogeyB0eHQ6IHR4dCB9IH07XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5VHlwZV0uZmlsdGVyKChhKSA9PiBhLmlkICE9PSBvYmouaWQpO1xyXG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlcztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5VHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5ld1doZXJlU2V0Q2xhdXNlPy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBuZXdXaGVyZVNldENsYXVzZS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50VGFibGVJZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5hZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrKGN1cnJlbnRUYWJsZUlkLGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBxdWVyeVRleHRJbmNsdWRlZENvbnN0cnVjdG9yID0gKHR4dCwgY3VycmVudFRhYmxlSWQsIGlucHV0LCBxdWVyeVR5cGUpID0+IHtcclxuICAgIGxldCBxdWVyeUluZGV4O1xyXG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xyXG4gICAgY29uc3Qga2V5VHlwZSA9IHF1ZXJ5VHlwZSA9PT0gXCJzaW5nbGVcIiA/IFwid2hlcmVDbGF1c2VzXCIgOiBcIndoZXJlQ2xhdXNlU2V0XCI7XHJcbiAgICBpZiAodGhpcy5zdGF0ZVtrZXlUeXBlXS5sZW5ndGgpIHtcclxuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGVba2V5VHlwZV0ubWFwKChvYmopID0+IG9iai5pZCkuaW5kZXhPZihjdXJyZW50VGFibGVJZCk7XHJcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXlUeXBlXS5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY3VycmVudFRhYmxlSWQpIHtcclxuICAgICAgICAgICAgaW5wdXQgPT09IFwiZmlyc3RcIlxyXG4gICAgICAgICAgICAgID8gKG9iaiA9IHsgLi4ub2JqLCBmaXJzdFR4dDogeyB2YWx1ZTogdHh0IH0gfSlcclxuICAgICAgICAgICAgICA6IChvYmogPSB7IC4uLm9iaiwgc2Vjb25kVHh0OiB7IHZhbHVlOiB0eHQgfSB9KTtcclxuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXlUeXBlXS5maWx0ZXIoKGEpID0+IGEuaWQgIT09IG9iai5pZCk7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IFtrZXlUeXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmV3V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG5ld1doZXJlU2V0Q2xhdXNlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRUYWJsZUlkKTtcclxuICAgICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soY3VycmVudFRhYmxlSWQsY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGRyb3Bkb3duSXRlbUNsaWNrID0gKGUsIHR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XHJcbiAgICBsZXQgY2xpY2tlZFF1ZXJ5VGFibGVJZCA9IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzJdLnZhbHVlO1xyXG4gICAgbGV0IGNsaWNrZWRWYWx1ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGxldCBjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlO1xyXG4gICAgbGV0IGN1cnJlbnROZXdXaGVyZVNldENsYXVzZTtcclxuICAgIGNvbnN0IGtleXR5cGUgPSB0eXBlID09PSBcInNpbmdsZVwiID8gXCJ3aGVyZUNsYXVzZXNcIiA6IFwid2hlcmVDbGF1c2VTZXRcIjtcclxuICAgIGxldCBxdWVyeUluZGV4O1xyXG4gICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGVba2V5dHlwZV0ubWFwKChvYmopID0+IG9iai5pZCkuaW5kZXhPZihjbGlja2VkUXVlcnlUYWJsZUlkKTtcclxuICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5dHlwZV0ubWFwKChvYmopID0+IHtcclxuICAgICAgICBpZiAob2JqLmlkID09PSBjbGlja2VkUXVlcnlUYWJsZUlkKSB7XHJcbiAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgZHJvcGRvd25WYWx1ZVF1ZXJ5OiBjbGlja2VkVmFsdWUgfTtcclxuICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5dHlwZV0uZmlsdGVyKChhKSA9PiBhLmlkICE9PSBvYmouaWQpO1xyXG4gICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBvYmo7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IFtrZXl0eXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IG9iaiB9O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChlLmN1cnJlbnRUYXJnZXQudmFsdWUgPT09IFwidW5pdm9jb1wiKSB7XHJcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xyXG4gICAgICAgICAgICBjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlID0gb2JqLmF0dHJpYnV0ZVF1ZXJ5O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXdcclxuICAgICAgICAgICAgICAgICAgICAud2hlbkxheWVyVmlldyhmKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChsYXllclZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9IGlzIG5vdCBudWxsYDtcclxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5Lm91dEZpZWxkcyA9IFtgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfWBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHsgd2hlcmU6IHF1ZXJ5LndoZXJlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZi5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbFRoaXJkUXVlcnkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZlYXR1cmVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsVGhpcmRRdWVyeS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IE9iamVjdC52YWx1ZXMoZWwuYXR0cmlidXRlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRldGFpbFRoaXJkUXVlcnlbMF0udmFsdWVbMF0gIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkuc29ydCgoYSwgYikgPT5hLmxhYmVsIDwgYi5sYWJlbCA/IC0xIDogYS5sYWJlbCA+IGIubGFiZWwgPyAxIDogMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbFRoaXJkUXVlcnkuc29ydCgoYSwgYikgPT5hLnZhbHVlIC0gYi52YWx1ZSA8IDAgPyAtMSA6IGEudmFsdWUgPT09IGIudmFsdWUgPyAwIDogMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub2JqLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmSW5Pck5vdEluUXVlcnlWYWx1ZTogZGV0YWlsVGhpcmRRdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk6IGNsaWNrZWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlID0gb2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlW2tleXR5cGVdLmZpbHRlcigoYSkgPT4gYS5pZCAhPT0gb2JqLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtba2V5dHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBvYmogfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3Bkb3duVmFsdWVRdWVyeTogZS50YXJnZXQudmFsdWUgfSwgKCkgPT4ge30pO1xyXG4gICAgaWYgKGtleXR5cGUgPT09IFwid2hlcmVDbGF1c2VTZXRcIikge1xyXG4gICAgICBpZiAoY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlKXRoaXMuYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayhjbGlja2VkUXVlcnlUYWJsZUlkLGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYWRkQ3VycmVudFdoZXJDbGF1c2VCbG9jayA9IChjdXJyZW50SWQsIGN1cnJlbnRXaGVyZUNsYXVzZSkgPT4ge1xyXG4gICAgY29uc3QgYmxvY2tJZCA9IGN1cnJlbnRJZC5zcGxpdChcIi1cIilbMV07XHJcbiAgICBjb25zdCBjdXJyZW50U2V0QmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XHJcbiAgICBsZXQgY3VycmVudEJsb2NrSW5kZXggPSAtMTtcclxuICAgIGxldCBjdXJyZW50QmxvY2s7XHJcbiAgICBjdXJyZW50QmxvY2tJbmRleCA9IGN1cnJlbnRTZXRCbG9jay5maW5kSW5kZXgoKGl0ZW0pID0+IGAke2l0ZW0/LmJsb2NrSWR9YCA9PT0gYmxvY2tJZCk7XHJcbiAgICBpZiAoY3VycmVudEJsb2NrSW5kZXggIT09IC0xKWN1cnJlbnRCbG9jayA9IGN1cnJlbnRTZXRCbG9ja1tjdXJyZW50QmxvY2tJbmRleF07XHJcbiAgICBsZXQgY3VycmVudFdoZXJlU2V0Q2xhdXNlID0gbnVsbDtcclxuICAgIGlmIChjdXJyZW50QmxvY2spIHtcclxuICAgICAgY3VycmVudFdoZXJlU2V0Q2xhdXNlID0gY3VycmVudEJsb2NrW2Ake2Jsb2NrSWR9YF07XHJcbiAgICAgIGlmIChjdXJyZW50V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGluZGV4ID0gY3VycmVudFdoZXJlU2V0Q2xhdXNlLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gY3VycmVudElkKTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICBjdXJyZW50V2hlcmVTZXRDbGF1c2VbaW5kZXhdID0gY3VycmVudFdoZXJlQ2xhdXNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjdXJyZW50V2hlcmVTZXRDbGF1c2UgPSBbXHJcbiAgICAgICAgICAgIC4uLmN1cnJlbnRXaGVyZVNldENsYXVzZSxcclxuICAgICAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlLFxyXG4gICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEJsb2NrW2Jsb2NrSWRdID0gY3VycmVudFdoZXJlU2V0Q2xhdXNlO1xyXG4gICAgICAgIGN1cnJlbnRTZXRCbG9ja1tjdXJyZW50QmxvY2tJbmRleF0gPSBjdXJyZW50QmxvY2s7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNldEJsb2NrOiBjdXJyZW50U2V0QmxvY2sgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudEJsb2NrW2Jsb2NrSWRdID0gW2N1cnJlbnRXaGVyZUNsYXVzZV07XHJcbiAgICAgICAgY3VycmVudFNldEJsb2NrW2N1cnJlbnRCbG9ja0luZGV4XSA9IGN1cnJlbnRCbG9jaztcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGN1cnJlbnRTZXRCbG9jayB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgY2hvb3NlQW5kT3JTZXQgPSAoZSwgYmxvY2tJZCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFNldEJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xyXG4gICAgY29uc3QgaW5kZXggPSBjdXJyZW50U2V0QmxvY2suZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmJsb2NrSWQgPT09IGJsb2NrSWQpO1xyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2V0QmxvY2tJdGVtID0gY3VycmVudFNldEJsb2NrW2luZGV4XTtcclxuICAgICAgY3VycmVudFNldEJsb2NrSXRlbVtcIkFuZE9yU2V0XCJdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIGN1cnJlbnRTZXRCbG9ja1tpbmRleF0gPSBjdXJyZW50U2V0QmxvY2tJdGVtO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IEFuZE9yU2V0OiBlLnRhcmdldC52YWx1ZSwgU2V0QmxvY2s6IGN1cnJlbnRTZXRCbG9jayB9KTtcclxuICB9O1xyXG5cclxuICBjbG9zZURyb3AgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSwgYXV0T3BlbjogZmFsc2UgfSk7XHJcblxyXG4gIGNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuZHJvcElkICE9PSBudWxsICYmIHRoaXMuc3RhdGUubW91c2VsZWF2ZSl0aGlzLnNldFN0YXRlKHsgbW91c2VsZWF2ZTogZmFsc2UgfSk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5kcm9wSWRTZXQgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS5tb3VzZWxlYXZlKXRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiBmYWxzZSB9KTtcclxuICB9O1xyXG5cclxuICBvbm1vdXNlTGVhdmUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHsgbW91c2VsZWF2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgLy8gbWV0aG9kcyBmb3IgYXR0cmlidXRlIHRhYmxlXHJcbiAgZ2V0QWxsQ2hlY2tlZExheWVycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBXaWRnZXQuYWN0aXZlVjtcclxuICAgIGNvbnN0IGFsbE1hcExheWVycyA9IGFjdGl2ZVZpZXcudmlldy5tYXAuYWxsTGF5ZXJzPy5pdGVtcztcclxuICAgIGNvbnN0IGNoZWNrZWRMYXllcnMgPSB0aGlzLnN0YXRlLmNoZWNrZWRMYXllcl87XHJcbiAgICBsZXQgbmV3TWFwTGF5ZXIgPSBbXTtcclxuICAgIGlmIChhbGxNYXBMYXllcnM/Lmxlbmd0aCA+IDAgJiYgY2hlY2tlZExheWVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG5ld01hcExheWVyID0gYWxsTWFwTGF5ZXJzLnJlZHVjZSgobmV3QXJyYXksIGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoY2hlY2tlZExheWVycy5pbmNsdWRlcyhpdGVtLmlkKSluZXdBcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgICAgfSwgW10pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld01hcExheWVyO1xyXG4gIH07XHJcblxyXG4gIGdldEFjdGl2ZVZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gV2lkZ2V0LmFjdGl2ZVY7XHJcbiAgICByZXR1cm4gYWN0aXZlVmlldztcclxuICB9O1xyXG5cclxuICBnZXRBbGxKaW11TGF5ZXJWaWV3cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGppbXVMYXllclZpZXdzID0gV2lkZ2V0LmppbXVMYXllclZpZXd6O1xyXG4gICAgcmV0dXJuIGppbXVMYXllclZpZXdzO1xyXG4gIH07XHJcblxyXG4gIGNsZWFySGlnaGxpZ2h0cyA9IChsYXllclZpZXc6IGFueSkgPT4ge1xyXG4gICAgaWYgKGxheWVyVmlldylsYXllclZpZXcuX2hpZ2hsaWdodElkcy5jbGVhcigpO1xyXG4gIH07XHJcblxyXG4gIHJldHVyblRvT3JpZ2luYWxFeHRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc7XHJcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcclxuICAgIHZpZXcuZ29Ubyh7IGNlbnRlcjogdmlldy5jZW50ZXIsIHpvb206IFdpZGdldC5pbml0aWFsWm9vbSB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQgPSAoZSwgdmFsKSA9PiB7XHJcbiAgICBsZXQgY291bnRlciA9IFsuLi50aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWRdO1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgY291bnRlci5wdXNoKHZhbCk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVySXNDaGVja2VkOiBjb3VudGVyIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGluZGV4ID0gY291bnRlci5pbmRleE9mKHZhbCk7XHJcbiAgICAgIGlmIChpbmRleCA+IC0xKSBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVySXNDaGVja2VkOiBjb3VudGVyIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uUmVmcmVzaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdExheWVyTGlzdCA9IHRoaXMuc3RhdGUucmVzdWx0TGF5ZXJMaXN0O1xyXG4gICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICByZXN1bHRMYXllckxpc3Q6IHJlc3VsdExheWVyTGlzdCxcclxuICAgICAgamltdU1hcFZpZXc6IGppbXVNYXBWaWV3LFxyXG4gICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcclxuICAgIHZpZXcuZ29Ubyh7IGNlbnRlcjogdmlldy5jZW50ZXIsIHpvb206IFdpZGdldC5pbml0aWFsWm9vbSB9KTtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRMYXllclZpZXcpIHRoaXMuY2xlYXJIaWdobGlnaHRzKHRoaXMuY3VycmVudExheWVyVmlldyk7XHJcbiAgfTtcclxuXHJcbiAgLy9UT0RPIGNvbmZpZyBhYmlsaXRhcmUgdGFiIHRydWUvZmFsc2VcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB0YWJsZVNldENvdW50cyA9ICh0YWJsZVNldENvdW50czogeyBpZDogc3RyaW5nOyBkZWxldGVkOiBib29sZWFuIH1bXSkgPT4ge1xyXG4gICAgICBsZXQgY291bnRzID0gMDtcclxuICAgICAgaWYgKHRhYmxlU2V0Q291bnRzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGNvcGllZFRhYmxlU2V0Q291bnRzID0gWy4uLnRhYmxlU2V0Q291bnRzXTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEl0ZW0gPSBjb3BpZWRUYWJsZVNldENvdW50cy5maWx0ZXIoXHJcbiAgICAgICAgICAoaXRlbSkgPT4gIWl0ZW0uZGVsZXRlZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY291bnRzID0gZmlsdGVyZWRJdGVtLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY291bnRzO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5zdGF0ZSA9PT0gXCJDTE9TRURcIiAmJiAhdGhpcy5zdGF0ZS53aWRnZXRTdGF0ZUNsb3NlZENoZWNrZWQpIHtcclxuICAgICAgY29uc3QgamltdU1hcFZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xyXG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcclxuICAgICAgY29uc3QgcmVzdWx0TGF5ZXJMaXN0ID0gdGhpcy5zdGF0ZS5yZXN1bHRMYXllckxpc3Q7XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICByZXN1bHRMYXllckxpc3Q6IHJlc3VsdExheWVyTGlzdCxcclxuICAgICAgICBqaW11TWFwVmlldzogamltdU1hcFZpZXcsXHJcbiAgICAgICAgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSxcclxuICAgICAgICB3aWRnZXRTdGF0ZU9wZW5lZENoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgIHdpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZDogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHZpZXcuZ29Ubyh7IGNlbnRlcjogdmlldy5jZW50ZXIsIHpvb206IFdpZGdldC5pbml0aWFsWm9vbSB9KTtcclxuICAgICAgaWYgKHRoaXMuY3VycmVudExheWVyVmlldykgdGhpcy5jbGVhckhpZ2hsaWdodHModGhpcy5jdXJyZW50TGF5ZXJWaWV3KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLnN0YXRlID09IFwiT1BFTkVEXCIgJiYgIXRoaXMuc3RhdGUud2lkZ2V0U3RhdGVPcGVuZWRDaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZGdldFN0YXRlQ2xvc2VkQ2hlY2tlZDogZmFsc2Usd2lkZ2V0U3RhdGVPcGVuZWRDaGVja2VkOiB0cnVlLH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0UmVzaXplRGV0ZWN0b3IgaGFuZGxlV2lkdGggaGFuZGxlSGVpZ2h0PlxyXG4gICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkZ2V0LWF0dHJpYnV0ZS10YWJsZSBqaW11LXdpZGdldFwiXHJcbiAgICAgICAgICAgIGlkPVwid3JhcFwiXHJcbiAgICAgICAgICAgIHJlZj1cIndyYXBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wT25jbGlja091dHNpZGUoKTtcclxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eShcInVzZU1hcFdpZGdldElkc1wiKSAmJlxyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0gJiYgKFxyXG4gICAgICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoLWFkdmFuY2VkLXRhYi1BbWJpdG9cIiB0aXRsZT1cIkFtYml0b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBjb250YWluZXItZmx1aWQgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGZsZXgtY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5ZXJTZWxlY3RDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6dGhpcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6dGhpcy5zdGF0ZS5qaW11TWFwVmlldyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0TGF5ZXJMaXN0OnRoaXMuc3RhdGUucmVzdWx0TGF5ZXJMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93QWRkU2VsZWN0OnRoaXMuc3RhdGUuc2hvd0FkZFNlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkSWQ6dGhpcy5zdGF0ZS5jdXJyZW50U2VsZWN0ZWRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGF5ZXJTZWxlY3RDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheWVyU2VsZWN0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Q2FsbFRvQWN0aW9uQ29udGV4dC5Qcm92aWRlciBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OnRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczp0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQW5kT3I6dGhpcy5zdGF0ZS5BbmRPcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgQW5kT3JTZXQ6dGhpcy5zdGF0ZS5BbmRPclNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6dGhpcy5zdGF0ZS5qaW11TWFwVmlldyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2V0QmxvY2s6dGhpcy5zdGF0ZS5TZXRCbG9jayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhcmdldFRleHQ6dGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzOnRoaXMuc3RhdGUudGFibGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZUNvdW50ZXI6dGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlQ291bnRlclNldDp0aGlzLnN0YXRlLnRhYmxlQ291bnRlclNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25zOnRoaXMuc3RhdGUuZHJvcERvd25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93bnNTZXQ6dGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2xpZ2h0U2VsZWN0ZWQ6dGhpcy5zdGF0ZS5oaWdsaWdodFNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOnRoaXMuc3RhdGUuaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6dGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZDp0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhbGxUb0FjdGlvbiB3aWR0aD17d2lkdGh9IGZ1bmN0aW9uUmVmcmVzaCA9IHt0aGlzLmZ1bmN0aW9uUmVmcmVzaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FsbFRvQWN0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZXNDb250ZXh0LlByb3ZpZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tsaXN0OnRoaXMuc3RhdGUucmVzdWx0c0xheWVyU2VsZWN0ZWQscGFyZW50OnRoaXMscXVlcnlDaGFuZ2VkOnRoaXMuc3RhdGUucXVlcnlDaGFuZ2VkfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGhlaWdodDogXCI1MCVcIiwgb3ZlcmZsb3dZOiBcInNjcm9sbFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYmxlcy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcm93LSR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e3RoaXMuc3RhdGUuZHJvcGRvd25WYWx1ZVF1ZXJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXM9e3RoaXMuc3RhdGUudGFibGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNJZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlcz17dGhpcy5zdGF0ZS53aGVyZUNsYXVzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXt0aGlzLmdldFF1ZXJ5QXR0cmlidXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRRdWVyeT17dGhpcy5nZXRRdWVyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGhpcy50ZXh0SW5wdXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXt0aGlzLmRyb3Bkb3duSXRlbUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXI9e3RoaXMudGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXt0aGlzLnRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhYmxlPXsoKSA9PiB0aGlzLmRlbGV0ZVRhYmxlKGVsLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXI9e3RoaXMudW5pdm9jb1NlbGVjdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlRHJvcD17dGhpcy5jbG9zZURyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17dGhpcy5vbm1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZD17dGhpcy5mdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3ducz17dGhpcy5zdGF0ZS5kcm9wRG93bnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYmxlPXtlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTglXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzAwNWVjYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuU2V0QmxvY2subWFwKChlbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cyA9IHRhYmxlU2V0Q291bnRzKGVsLnRhYmxlc1NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cyA8IDIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHMgPT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjb3JyaXNwb25kZW50aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbGEgc2VndWVudGUgZXNwcmVzc2lvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17d2lkdGggPj0gNjI2ID8gXCJkLWZsZXggY29sLWwtMSBcIjpcImQtZmxleCBjb2wtbWQtOFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdMZWZ0OjAscGFkZGluZ1JpZ2h0OjB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5kT3JTZWxlY3RvciBjaG9vc2VBbmRPcj17KGUpPT50aGlzLmNob29zZUFuZE9yU2V0KGUsZWwuYmxvY2tJZCl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVCbG9jayhlbC5ibG9ja0lkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2VsLmJsb2NrSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmFkZFR3b1RhYmxlKGVsLmJsb2NrSWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbC50YWJsZXNTZXQubWFwKChpbm5lckVsLCBpLCBUYWJsZUFycmF5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkU2V0VGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcm93LSR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgQWRkIHNldCB0YWJsZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzU2V0PXt0aGlzLnN0YXRlLnRhYmxlc1NldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVzU2V0SWQ9e2Ake2lubmVyRWwuaWR9YCArIFwiLVwiICsgYCR7ZWwuYmxvY2tJZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXNTZXQ9e3RoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuZCBmb3IgQWRkIHNldCB0YWJsZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnlBdHRyaWJ1dGU9e3RoaXMuZ2V0UXVlcnlBdHRyaWJ1dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5PXt0aGlzLmdldFF1ZXJ5U2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0SW5wdXRIYW5kbGVyPXt0aGlzLnRleHRJbnB1dEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbUhhbmRsZXI9e3RoaXMuZHJvcGRvd25JdGVtQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17dGhpcy50ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXI9e3RoaXMudGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGFibGU9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQmxvY2tUYWJsZShgJHtpbm5lckVsLmlkfWAgKyBcIi1cIiArIGAke2VsLmJsb2NrSWR9YCxgJHtlbC5ibG9ja0lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXI9e3RoaXMudW5pdm9jb1NlbGVjdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlRHJvcD17dGhpcy5jbG9zZURyb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17dGhpcy5vbm1vdXNlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZD17dGhpcy5mdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duc1NldD17dGhpcy5zdGF0ZS5kcm9wRG93bnNTZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEZWxldGU9e2NvdW50cyA+IDIgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dCbG9ja0RlbGV0ZT17Y291bnRzID09PSAyICYmIGkgPT0gMCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZD17ZWwuYmxvY2tJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlQmxvY2tBbGw9eygpID0+dGhpcy5kZWxldGVCbG9ja0FsbCh7IGVsLCBpbm5lckVsIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFibGU9e2lubmVyRWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1Ob3RGb3VuZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RoaXMuc3RhdGUuaXRlbU5vdEZvdW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUmVhY3RSZXNpemVEZXRlY3Rvcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==