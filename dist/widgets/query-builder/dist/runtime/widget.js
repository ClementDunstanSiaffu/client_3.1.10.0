System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/rest/support/Query","esri/layers/GraphicsLayer","esri/geometry/Polygon","jimu-core/react","jimu-core/react-dom","esri/geometry/geometryEngine"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	var __WEBPACK_EXTERNAL_MODULE_esri_geometry_geometryEngine__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_rest_support_Query__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_layers_GraphicsLayer__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
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
					__WEBPACK_EXTERNAL_MODULE_esri_geometry_Polygon__[key] = module[key];
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
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/queryTableValue */ "./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js");





// import {useState} from 'react'
function AddSetTable(props) {
    const { list, handleThirdQuery, textInputHandler, multiSelectHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, dropdownValueQuery, handleCheckBox, isChecked, counterIsChecked, dropDownToggler, functionCounterIsChecked, checkedToQuery, deleteTable, getQueryAttribute, 
    // for Add set table............................
    tablesSet, tablesSetId, whereClausesSet, 
    // End for Add set table............................
    tables, getQuery, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened, autOpen, mouseleave, onmouseLeave, dropdownsSet, showDelete, blockId, currentTable, showBlockDelete } = props;
    const currentwhereClausesSet = whereClausesSet.find((item) => item.id === tablesSetId);
    if (currentTable.id === parseInt(tablesSetId.split("-")[0]) && !currentTable.deleted) {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "my-1" }, list.fields ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "d-flex flex-column" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "row m-0" },
                showDelete && jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "row w-100 d-flex justify-content-end" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "mb-2 col-1 self-end", onClick: deleteTable, icon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__.CloseOutlined, null))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { className: "col-md-4 mb-2", onChange: getQueryAttribute, placeholder: "Seleziona campo" }, list.fields.map((el, i) => {
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
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "col-md-4 mb-2" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => getQuery(e, "set"), placeholder: "Seleziona campo" }, currentwhereClausesSet && currentwhereClausesSet.attributeQueryType === "string"
                        ? _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorString.map((o, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: o.value }, o.name));
                        })
                        : _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorNumber.map((o, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesSetId, value: i, name: o.value }, o.name));
                        }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(SecondConstructor, { className: "col-md-4", handleThirdQuery: handleThirdQuery, textInputHandler: textInputHandler, multiSelectHandler: multiSelectHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, dropdownValueQuery: dropdownValueQuery, handleCheckBox: handleCheckBox, isChecked: isChecked, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, checkedToQuery: checkedToQuery, getQueryAttribute: getQueryAttribute, whereClausesSet: whereClausesSet, tablesSetId: tablesSetId, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, mouseleave: mouseleave, onmouseLeave: onmouseLeave, dropdownsSet: dropdownsSet, blockId: blockId })))) : ("")));
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
    var _a, _b;
    const { textInputHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, counterIsChecked, functionCounterIsChecked, tablesSetId, whereClausesSet, dropDownToggler, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened: d, autOpen, onmouseLeave, dropdownsSet, blockId } = props;
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
    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Switch, { queryValues: defaultValue },
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
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: (e) => textInputHandler(e, "set"), onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesSetId }))));
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
/* harmony import */ var _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/queryTableValue */ "./your-extensions/widgets/query-builder/src/runtime/utils/queryTableValue.js");





// import {useState} from 'react'
function Table(props) {
    const { list, handleThirdQuery, textInputHandler, multiSelectHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, dropdownValueQuery, handleCheckBox, isChecked, counterIsChecked, dropDownToggler, functionCounterIsChecked, checkedToQuery, deleteTable, tablesId, getQueryAttribute, whereClauses, tables, getQuery, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened, autOpen, mouseleave, onmouseLeave, dropdowns, currentTable } = props;
    const currentwhereClauses = whereClauses.find((item) => item.id === `${tablesId}`);
    if (currentTable.id === tablesId && !currentTable.deleted) {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "my-1" }, list.fields ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "d-flex flex-column" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "row m-0" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "row w-100 d-flex justify-content-end" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { className: "mb-2 col-1 self-end", onClick: deleteTable, icon: true },
                        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_icons_outlined_editor_close__WEBPACK_IMPORTED_MODULE_3__.CloseOutlined, null))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { className: "col-md-4 mb-2", onChange: getQueryAttribute, placeholder: "Seleziona campo" }, list.fields.map((el, i) => {
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
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "col-md-4 mb-2" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => getQuery(e, "single"), placeholder: "Seleziona campo" }, currentwhereClauses &&
                        currentwhereClauses.attributeQueryType === "string"
                        ? _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorString.map((o, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                        })
                        : _utils_queryTableValue__WEBPACK_IMPORTED_MODULE_4__.queryConstructorNumber.map((o, i) => {
                            return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { "data-table-id": tablesId, value: i, name: o.value }, o.name));
                        }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(SecondConstructor, { className: "col-md-4", handleThirdQuery: handleThirdQuery, textInputHandler: textInputHandler, multiSelectHandler: multiSelectHandler, dropdownItemHandler: dropdownItemHandler, textFirstIncludedHandler: textFirstIncludedHandler, textSecondIncludedHandler: textSecondIncludedHandler, dropdownValueQuery: dropdownValueQuery, handleCheckBox: handleCheckBox, isChecked: isChecked, counterIsChecked: counterIsChecked, functionCounterIsChecked: functionCounterIsChecked, checkedToQuery: checkedToQuery, getQueryAttribute: getQueryAttribute, whereClauses: whereClauses, tablesId: tablesId, dropDownToggler: dropDownToggler, univocoSelectHandler: univocoSelectHandler, dropDown: dropDown, isOpenDropD: isOpenDropD, onChangeCheckBox: onChangeCheckBox, openDrop: openDrop, closeDrop: closeDrop, opened: opened, autOpen: autOpen, mouseleave: mouseleave, onmouseLeave: onmouseLeave, dropdowns: dropdowns })))) : ("")));
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
    const { textInputHandler, dropdownItemHandler, textFirstIncludedHandler, textSecondIncludedHandler, counterIsChecked, functionCounterIsChecked, tablesId, whereClauses, dropDownToggler, univocoSelectHandler, dropDown, isOpenDropD, onChangeCheckBox, openDrop, closeDrop, opened: d, autOpen, onmouseLeave, dropdowns, } = props;
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
        dropdownValueQuery = whereClauses[tablesId].dropdownValueQuery;
    }
    if (currentWhereClause && currentWhereClause.isOpen) {
        // opened = whereClauses[tablesId].isOpen;
    }
    if (currentWhereClause && currentWhereClause.checkedList) {
        checked = currentWhereClause.checkedList.length;
    }
    const test = (props) => { };
    return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Switch, { queryValues: defaultValue },
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "=", className: "d-flex col-md-4" },
            dropdownValueQuery === "univoco" ? (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Select, { onChange: (e) => univocoSelectHandler(e, "single"), placeholder: "Seleziona il Layer" }, normalizedThirdQuery.map((el, i) => {
                return (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.Option, { value: i, "data-table-id": tablesId }, el.label));
            }))) : (jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId, defaultValue: defaultTextValue })),
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
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textFirstIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesId, id: 'inputs' }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-md-2 text-center", style: { width: '10%' } }, "e"),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textSecondIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", "data-table-id": tablesId, id: 'inputs' }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "is_not_included", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { className: "include" },
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textFirstIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", id: 'inputs', "data-table-id": tablesId }),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("p", { className: "col-sm-2 text-center" }, "e"),
                jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textSecondIncludedHandler, onAcceptValue: function noRefCheck() { }, type: "text", id: 'inputs', "data-table-id": tablesId }))),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "LIKE%", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "%LIKE%", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId })),
        jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", { value: "NOT LIKE", className: "d-flex col-md-4" },
            jimu_core__WEBPACK_IMPORTED_MODULE_2__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.TextInput, { onChange: textInputHandler, onAcceptValue: function noRefCheck() { }, type: "text", className: " w-100", "data-table-id": tablesId }))));
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
            // const index = copiedTable.findIndex((item)=>item.id === id)
            copiedTable = copiedTable.map((el) => {
                if (el.id === id)
                    el.deleted = true;
                return el;
            });
            const newTables = copiedTable;
            // newTables = copiedTable;
            // if (index !== -1){
            //   copiedTable[index]["deleted"] = true;
            //   newTables = copiedTable;
            // }
            // const newTables = copiedTable.filter((el) => el.id !== id);
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
            let txt = e.target.value;
            let currentTableId = e.target.attributes[0].value;
            this.queryTextConstructor(txt, currentTableId, queryType);
        };
        this.textFirstIncludedHandler = (e, queryType = "single") => {
            let txt = e.target.value;
            let currentTableId = e.target.attributes[0].value;
            let input = "first";
            this.queryTextIncludedConstructor(txt, currentTableId, input, queryType);
        };
        this.textSecondIncludedHandler = (e, queryType = "single") => {
            let txt = e.target.value;
            let currentTableId = e.target.attributes[0].value;
            let input = "second";
            this.queryTextIncludedConstructor(txt, currentTableId, input, queryType);
        };
        this.univocoSelectHandler = (e, queryType = "single") => {
            let txt = e.currentTarget.textContent;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9xdWVyeS1idWlsZGVyL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDbUg7QUFDakI7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZEQUE2RCxvQkFBb0IsZ0NBQWdDLHdCQUF3QiwwQkFBMEIsb0JBQW9CLHFCQUFxQixrQkFBa0IsdUJBQXVCLGdDQUFnQyxXQUFXLGtDQUFrQyxjQUFjLGtCQUFrQiwwQkFBMEIsYUFBYSw0QkFBNEIsU0FBUyxzSEFBc0gsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxrQkFBa0IsTUFBTSxVQUFVLGtCQUFrQixNQUFNLHVEQUF1RCx3QkFBd0Isa0NBQWtDLEtBQUssd0JBQXdCLDhCQUE4Qix3QkFBd0IsdUJBQXVCLEtBQUssaUJBQWlCLDJCQUEyQixrQ0FBa0MsS0FBSyxjQUFjLG9DQUFvQyxLQUFLLGlCQUFpQixzQkFBc0IsNEJBQTRCLEtBQUssZ0JBQWdCLDZCQUE2QixLQUFLLG1DQUFtQztBQUN6dEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QU8sRUFDWixRQUFRLFNBQ1IsQ0FDSCxDQUNHLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FDUDtTQUFBLENBQ21CLENBQ3ZCLENBQUM7SUFDSixDQUFDOztBQXArRU0sY0FBTyxHQUFHLElBQUksQ0FBQztBQUNmLHFCQUFjLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLDJCQUFvQixHQUFHLElBQUksQ0FBQztBQUM1QixrQkFBVyxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvc3R5bGUuY3NzP2FiYmIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtaWNvbnMvc3ZnL291dGxpbmVkL2VkaXRvci9wbHVzLnN2ZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2UudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWljb25zL291dGxpbmVkL2VkaXRvci9wbHVzLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvY29ubmVjdG9yLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9jb25uZWN0b3IvYXR0cmlidXRlX3RhYmxlX2Nvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9jb21wb25lbnRzL0FkZFNldFRhYmxlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9jb21wb25lbnRzL1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS9saWIvUmVzaXplRGV0ZWN0b3IudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9ydW50aW1lL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvcXVlcnktYnVpbGRlci9zcmMvcnVudGltZS91dGlscy9xdWVyeVRhYmxlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJlc3JpL2dlb21ldHJ5L1BvbHlnb25cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImVzcmkvcmVzdC9zdXBwb3J0L1F1ZXJ5XCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmUvcmVhY3RcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZS9yZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL3F1ZXJ5LWJ1aWxkZXIvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pdGVtLXRhYmxlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWY3ZmY7IH1cXG5cXG4uc2V0dGluZy1zdmc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICMwMDVlY2E7IH1cXG5cXG4uc2V0dGluZy1zdmcge1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTsgfVxcblxcbiN3cmFwIHtcXG4gIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDsgfVxcblxcbi5pbmNsdWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuI2lucHV0cyB7XFxuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9xdWVyeS1idWlsZGVyL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxlQUFlO0VBQ2YseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxxQkFBb0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaXRlbS10YWJsZTpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmN2ZmO1xcclxcbn1cXHJcXG4uc2V0dGluZy1zdmc6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICMwMDVlY2E7XFxyXFxufVxcclxcbi5zZXR0aW5nLXN2Z3tcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jd3JhcHtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5jbHVkZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0c3tcXHJcXG4gICAgd2lkdGg6MjAlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG4iLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJ2YXIgYmFzZVRyaW0gPSByZXF1aXJlKCcuL19iYXNlVHJpbScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b051bWJlcjtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVszXSEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk05LjQzOC45OTRjLjIxMyAwIC4zOTcuMTQ2LjQ0LjM1LjE1MS43MjIuMjU3IDEuMzQuMzE2IDEuODUyLjM3NC4xNi43MjUuMzYyIDEuMDQ4LjU5OWwxLjcyOC0uNjc2YS40NTUuNDU1IDAgMCAxIC41NTYuMTg4bDEuNDIgMi4zOTRhLjQzLjQzIDAgMCAxLS4wOTEuNTQ3IDIxLjk4IDIxLjk4IDAgMCAxLTEuNDkgMS4xOTQgNS4xNyA1LjE3IDAgMCAxLS4wMDcgMS4xODNsMS40NjQgMS4xMTlhLjQzLjQzIDAgMCAxIC4xMTEuNTYzbC0xLjQyIDIuMzk0YS40NTQuNDU0IDAgMCAxLS41My4xOTcgMjIuNDQ1IDIyLjQ0NSAwIDAgMS0xLjgwNy0uNjZjLS4zMjUuMjMzLS42NzkuNDMtMS4wNTUuNTg2bC0uMjYzIDEuNzk0YS40NDYuNDQ2IDAgMCAxLS40NDUuMzc2SDYuNTc0YS40NDYuNDQ2IDAgMCAxLS40NC0uMzUgMjEuMDE5IDIxLjAxOSAwIDAgMS0uMzE3LTEuODUzIDUuMzQgNS4zNCAwIDAgMS0xLjA0Ny0uNTk4bC0xLjcyOC42NzVhLjQ1NS40NTUgMCAwIDEtLjU1Ni0uMTg3bC0xLjQyLTIuMzk1YS40My40MyAwIDAgMSAuMDkxLS41NDZjLjU2Ny0uNDkgMS4wNjMtLjg4OCAxLjQ5LTEuMTk0YTUuMTY3IDUuMTY3IDAgMCAxIC4wMDgtMS4xODNMMS4xOSA2LjI0M2EuNDMuNDMgMCAwIDEtLjExMi0uNTYybDEuNDItMi4zOTVhLjQ1NS40NTUgMCAwIDEgLjUzMS0uMTk2Yy43MTkuMjMzIDEuMzIxLjQ1MyAxLjgwNy42Ni4zMjQtLjIzMy42NzktLjQzIDEuMDU2LS41ODdsLjI2Mi0xLjc5NEEuNDQ2LjQ0NiAwIDAgMSA2LjYuOTk0aDIuODM5Wm0tLjM2NSAxSDYuOTg1bC0uMjggMS44NjYtLjQ2Ny4xOWMtLjIzNS4wOTUtLjQ2LjIxLS42NzIuMzRsLS4yMDcuMTM2LS40Mi4yOTMtLjQ3Ni0uMTk3Yy0uMzI4LS4xMzctLjcxOC0uMjgxLTEuMTY5LS40MzNsLS4yMjEtLjA3NC0xLjA0NSAxLjcxOUwzLjU5IDYuOTk5bC0uMDYuNDc5YTQuMTI3IDQuMTI3IDAgMCAwLS4wMjEuODE2bC4wMTQuMTQ0LjA1OC40OTItLjQxOS4yOTRjLS4yODguMjAzLS42MTUuNDUxLS45NzkuNzQ2bC0uMTc3LjE0NSAxLjA0MyAxLjcyIDEuODQ1LS43MDMuNDA2LjI5Yy4yMDQuMTQ2LjQyLjI3NC42NDUuMzg0bC4yMjguMTAzLjQ3NC4xOTkuMDU5LjQ5Yy4wNC4zMzguMTAzLjczMS4xOSAxLjE3N2wuMDQzLjIxOWgyLjA4OGwuMjgyLTEuODY3LjQ2Ni0uMTljLjIzNi0uMDk1LjQ2LS4yMS42NzItLjM0bC4yMDctLjEzNi40MTktLjI5My40NzYuMTk4Yy4zMy4xMzYuNzIuMjggMS4xNy40MzNsLjIyLjA3MiAxLjA0NC0xLjcxOC0xLjU2LTEuMTY1LjA2LS40NzlhNC4xMzEgNC4xMzEgMCAwIDAgLjAyLS44MTVsLS4wMTMtLjE0NC0uMDYtLjQ5Mi40Mi0uMjk1YTE4LjEgMTguMSAwIDAgMCAuOTgtLjc0NmwuMTc2LS4xNDYtMS4wNDMtMS43Mi0xLjg0NC43MDUtLjQwNi0uMjlhNC40OTYgNC40OTYgMCAwIDAtLjY0Ni0uMzg1bC0uMjI4LS4xMDMtLjQ3NC0uMTk5LS4wNTgtLjQ5Yy0uMDMyLS4yNy0uMDgtLjU3Ni0uMTQtLjkxNmwtLjA5NC0uNDhabS0xLjA2NyAzYTMgMyAwIDEgMSAwIDYgMyAzIDAgMCAxIDAtNlptMCAxYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNFpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAxNiAxNlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBkPVxcXCJtOC43NDUgOCA2LjEgNi4xYS41MjcuNTI3IDAgMSAxLS43NDUuNzQ2TDggOC43NDZsLTYuMSA2LjFhLjUyNy41MjcgMCAxIDEtLjc0Ni0uNzQ2bDYuMS02LjEtNi4xLTYuMWEuNTI3LjUyNyAwIDAgMSAuNzQ2LS43NDZsNi4xIDYuMSA2LjEtNi4xYS41MjcuNTI3IDAgMCAxIC43NDYuNzQ2TDguNzQ2IDhaXFxcIiBmaWxsPVxcXCIjMDAwXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTYgMTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZD1cXFwiTTcuNSAwYS41LjUgMCAwIDAtLjUuNVY3SC41YS41LjUgMCAwIDAgMCAxSDd2Ni41YS41LjUgMCAwIDAgMSAwVjhoNi41YS41LjUgMCAwIDAgMC0xSDhWLjVhLjUuNSAwIDAgMC0uNS0uNVpcXFwiIGZpbGw9XFxcIiMwMDBcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IFJlYWN0LCBjbGFzc05hbWVzIH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQgeyB0eXBlIFNWR0NvbXBvbmVudFByb3BzIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHNyYyBmcm9tICcuLi8uLi9zdmcvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZy5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgU2V0dGluZ091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBSZWFjdCwgY2xhc3NOYW1lcyB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHsgdHlwZSBTVkdDb21wb25lbnRQcm9wcyB9IGZyb20gJ2ppbXUtdWknXHJcbmltcG9ydCBzcmMgZnJvbSAnLi4vLi4vc3ZnL291dGxpbmVkL2VkaXRvci9jbG9zZS5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgQ2xvc2VPdXRsaW5lZCA9IChwcm9wczogU1ZHQ29tcG9uZW50UHJvcHMpID0+IHtcclxuICBjb25zdCBTVkcgPSB3aW5kb3cuU1ZHXHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLm90aGVycyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2ppbXUtaWNvbiBqaW11LWljb24tY29tcG9uZW50JywgY2xhc3NOYW1lKVxyXG4gIGlmICghU1ZHKSByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5vdGhlcnMgYXMgYW55fSAvPlxyXG4gIHJldHVybiA8U1ZHIGNsYXNzTmFtZT17Y2xhc3Nlc30gc3JjPXtzcmN9IHsuLi5vdGhlcnN9IC8+XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVhY3QsIGNsYXNzTmFtZXMgfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7IHR5cGUgU1ZHQ29tcG9uZW50UHJvcHMgfSBmcm9tICdqaW11LXVpJ1xyXG5pbXBvcnQgc3JjIGZyb20gJy4uLy4uL3N2Zy9vdXRsaW5lZC9lZGl0b3IvcGx1cy5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgUGx1c091dGxpbmVkID0gKHByb3BzOiBTVkdDb21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFNWRyA9IHdpbmRvdy5TVkdcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgLi4ub3RoZXJzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnamltdS1pY29uIGppbXUtaWNvbi1jb21wb25lbnQnLCBjbGFzc05hbWUpXHJcbiAgaWYgKCFTVkcpIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17Y2xhc3Nlc30gey4uLm90aGVycyBhcyBhbnl9IC8+XHJcbiAgcmV0dXJuIDxTVkcgY2xhc3NOYW1lPXtjbGFzc2VzfSBzcmM9e3NyY30gey4uLm90aGVyc30gLz5cclxufVxyXG4iLCJpbXBvcnQgeyBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiXHJcblxyXG50eXBlIGxheWVyQ29udGVudHNPYmplY3RUeXBlID0ge1xyXG4gICAgaWQ6c3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczphbnlbXVxyXG59XHJcblxyXG50eXBlIHNlbGVjdGVkTGF5ZXJUeXBlID0ge1xyXG4gICAgaWQ6c3RyaW5nLFxyXG4gICAgYXR0cmlidXRlczphbnlbXVxyXG59XHJcblxyXG5jbGFzcyBIZWxwZXIge1xyXG5cclxuICAgIHNldFF1ZXJ5QXJyYXkgPSBbXTtcclxuICAgIHNldE91dEZpZWxkcyA9IFtdO1xyXG5cclxuICAgIGdldExheWVyQXR0cmlidXRlcyA9IChzZWxlY3RlZExheWVySWQ6c3RyaW5nLGxheWVyQ29udGVudHM6bGF5ZXJDb250ZW50c09iamVjdFR5cGVbXSk6YW55W109PntcclxuICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xyXG4gICAgICAgIGlmIChsYXllckNvbnRlbnRzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc09iamVjdCA9IGxheWVyQ29udGVudHMuZmluZCgobGF5ZXJDb250ZW50OmxheWVyQ29udGVudHNPYmplY3RUeXBlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyQ29udGVudD8uaWQgPT09IHNlbGVjdGVkTGF5ZXJJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxheWVyQ29udGVudD8uYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNPYmplY3Q/LmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cmlidXRlS2V5QXJyYXkgPSAoYXR0cmlidXRlczphbnkpOnN0cmluZ1tdPT57XHJcbiAgICAgICAgbGV0IHJldHVybmVkS2V5cyA9IFtdO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICByZXR1cm5lZEtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybmVkS2V5cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIgPShyZXN1bHRzOmFueSxjaGVja2VkTGF5ZXJzOnN0cmluZ1tdKTpzZWxlY3RlZExheWVyVHlwZVtdPT57Ly9zdGVwNSBmcm9tIHNlbGVjdGVkIGl0ZW1zIGdldCB0aGVpciBsYXllcnNcclxuICAgICAgICBsZXQgc2VsZWN0ZWRMYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgc2VsZWN0ZWRMYXllcnNBcnJheSA9IHJlc3VsdHMucmVkdWNlKChuZXdBcnJheSxpdGVtczphbnlbXSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtcz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJDb250ZW50cyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TGF5ZXJJZCA9IGl0ZW1zWzBdPy5sYXllcj8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRMYXllcnMuaW5kZXhPZihjdXJyZW50TGF5ZXJJZCkgIT09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiaWRcIl0gPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExheWVyQ29udGVudHNbXCJhdHRyaWJ1dGVzXCJdID0gdGhpcy5nZXRBdHRyaWJ1dGVzKGl0ZW1zKTsvL3N0ZXA2IHBhY2thZ2luZyBhdHRyaWJ1dGVzIGFuZCBrZWVwaW5nIGxvbiBhbmQgbGF0aXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChzZWxlY3RlZExheWVyQ29udGVudHMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgICAgICAgICB9LFtdKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRMYXllcnNBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyaWJ1dGVzID0gKGl0ZW1zOmFueVtdKTphbnlbXT0+e1xyXG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNBcnJheSA9IGl0ZW1zLnJlZHVjZSgobmV3QXJyYXksaXRlbSk9PntcclxuICAgICAgICAgICAgaWYgKGl0ZW0/LmF0dHJpYnV0ZXMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ2VvbWV0cnkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gaXRlbS5nZW9tZXRyeTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IGdlb21ldHJ5Py5sYXRpdHVkZT8/Z2VvbWV0cnk/LmV4dGVudD8uY2VudGVyPy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBnZW9tZXRyeT8ubG9uZ2l0dWRlPz9nZW9tZXRyeT8uZXh0ZW50Py5jZW50ZXI/LmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9uZ2l0dWRlICYmIGxhdGl0dWRlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaCh7Li4uaXRlbS5hdHRyaWJ1dGVzLGxvY2F0aW9uOltsYXRpdHVkZSxsb25naXR1ZGVdfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICAgICAgfSxbXSlcclxuICAgICAgICByZXR1cm4gYXR0cmlidXRlc0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bWJlck9mQXR0cmlidXRlcyA9IChsYXllcnNDb250ZW50czp7aWQ6c3RyaW5nLGF0dHJpYnV0ZXM6YW55W119W10pPT57XHJcbiAgICAgICAgbGV0IGxheWVyQ29udGVudHNPYmplY3QgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7aSA8IGxheWVyc0NvbnRlbnRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgbGF5ZXJDb250ZW50c09iamVjdCA9IHsuLi5sYXllckNvbnRlbnRzT2JqZWN0LFtsYXllcnNDb250ZW50c1tpXT8uaWRdOmxheWVyc0NvbnRlbnRzW2ldPy5hdHRyaWJ1dGVzPy5sZW5ndGg/PzB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsYXllckNvbnRlbnRzT2JqZWN0O1xyXG4gICAgfVxyXG4gXHJcbiAgICBnZXRDbGlja2VkTGF5ZXJTdGF0dXMgPSAocmVzdWx0czphbnlbXSxzZWxlY3RlZExheWVyOnNlbGVjdGVkTGF5ZXJUeXBlW10pOmJvb2xlYW49PntcclxuICAgICAgICBsZXQgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgaWYgKHJlc3VsdHM/Lmxlbmd0aCA+IDAgJiYgc2VsZWN0ZWRMYXllcj8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwO2kgPCByZXN1bHRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGxheWVySWQgPSByZXN1bHRzW2ldPy5ncmFwaGljPy5sYXllcj8uaWQ7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IHNlbGVjdGVkTGF5ZXIuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PT0gbGF5ZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZkxheWVyV2FzQWRkZWQgPSAobGF5ZXJJZDpzdHJpbmcsbWFwTGF5ZXJzSXRlbXM6YW55W10pPT57XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChtYXBMYXllcnNJdGVtcz8ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGluZGV4ID0gbWFwTGF5ZXJzSXRlbXMuZmluZEluZGV4KChpdGVtKT0+aXRlbT8uaWQgPT09IGxheWVySWQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKXtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuXHJcblxyXG4gICAgb3BlblRhYmxlQXR0cmlidXRlID0gKCk9PntcclxuICAgICAgICBjb25zdCBhcmlhRXhwYW5kZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgaWYgKGFyaWFFeHBhbmRlZEVsZW1lbnQuYXJpYUV4cGFuZGVkID09PSBcImZhbHNlXCIpe1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgYXJpYUV4cGFuZGVkRWxlbWVudC5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUF0dHJpYnV0ZVRhYmxlID0gKCk9PntcclxuICAgICAgICBjb25zdCBhcmlhRXhwYW5kZWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNvbnRyb2xsZXJcIik7XHJcbiAgICAgICAgaWYgKGFyaWFFeHBhbmRlZEVsZW1lbnQuYXJpYUV4cGFuZGVkID09PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBhcmlhRXhwYW5kZWRFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE51bWJlck9mSXRlbXNJbkZpZWxkID0gKGZpZWxkOnN0cmluZyxzZWxlY3RlZEF0dHJpYnV0ZXM6YW55W10pPT57XHJcbiAgICAgICAgbGV0IG51bWJlck9mSXRlbXMgPSAwO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZEF0dHJpYnV0ZXM/Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVBcnIgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wO2k8IHNlbGVjdGVkQXR0cmlidXRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIHZhbHVlQXJyLnB1c2goc2VsZWN0ZWRBdHRyaWJ1dGVzW2ldW2ZpZWxkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnVtYmVyT2ZJdGVtcyA9IHZhbHVlQXJyLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bWJlck9mSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGlnaGxpZ2h0ZWRJZHMgPSAoZmVhdHVyZXM6YW55W10pPT57XHJcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0SWRzID0gW107XHJcbiAgICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aClmZWF0dXJlcy5mb3JFYWNoKGVsPT5oaWdobGlnaHRJZHMucHVzaChlbC5hdHRyaWJ1dGVzLk9CSkVDVElEKSlcclxuICAgICAgICByZXR1cm4gaGlnaGxpZ2h0SWRzO1xyXG4gICAgfVxyXG5cclxuICAgIGxpa2VseVF1ZXJ5ID0gKGF0dHJpYnV0ZVF1ZXJ5LHF1ZXJ5VmFsdWUsdmFsdWUpPT57XHJcbiAgICAgICAgc3dpdGNoKHF1ZXJ5VmFsdWUpe1xyXG4gICAgICAgICAgICBjYXNlIFwiTElLRSVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTElLRSAnJSR7dmFsdWV9J2A7XHJcbiAgICAgICAgICAgIGNhc2UgXCIlTElLRSVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTElLRSAnJSR7dmFsdWV9JSdgO1xyXG4gICAgICAgICAgICBjYXNlIFwiJUxJS0VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHthdHRyaWJ1dGVRdWVyeX0gTElLRSAnJSR7dmFsdWV9J2A7XHJcbiAgICAgICAgICAgIGNhc2UgXCJOT1QgTElLRVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2F0dHJpYnV0ZVF1ZXJ5fSBOT1QgTElLRSAnJSR7dmFsdWV9JSdgOyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBxdWVyeVNldENvbnN0cnVjdG9yID0gKHF1ZXJ5OmFueSxzZXRXaGVyZUNsYXVzZTphbnlbXSxBbmRPclNldDphbnksZmllbGQ6c3RyaW5nKT0+e1xyXG4gICAgICAgIGxldCBjdXJyZW50UXVlcnkgPSBxdWVyeS53aGVyZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNldFF1ZXJ5QXJyYXkubGVuZ3RoIDwgc2V0V2hlcmVDbGF1c2UubGVuZ3RoLTEsXCJjaGVja2luZ1wiKVxyXG4gICAgICAgIGlmICh0aGlzLnNldFF1ZXJ5QXJyYXkubGVuZ3RoIDwgc2V0V2hlcmVDbGF1c2UubGVuZ3RoLTEpe1xyXG4gICAgICAgICAgICBjdXJyZW50UXVlcnkgPSBxdWVyeS53aGVyZSArICBcIiBcIiArIEFuZE9yU2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFF1ZXJ5QXJyYXkucHVzaChjdXJyZW50UXVlcnkpO1xyXG4gICAgICAgIHRoaXMuc2V0T3V0RmllbGRzLnB1c2goYCR7ZmllbGR9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXRRdWVyeUFycmF5LHRoaXMuc2V0T3V0RmllbGRzLFwibWFrZSBzdXJlXCIpXHJcbiAgICAgICAgLy8gaWYodGhpcy5zZXRRdWVyeUFycmF5Lmxlbmd0aCA+PSBzZXRXaGVyZUNsYXVzZS5sZW5ndGgpe1xyXG4gICAgICAgIC8vICAgICByZXR1cm4ge3F1ZXJ5U2V0QXJyYXk6dGhpcy5zZXRRdWVyeUFycmF5LHF1ZXJ5U2V0T3V0ZmllbGRzOnRoaXMuc2V0T3V0RmllbGRzfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWJsZVNldENvdW50cyA9ICh0YWJsZVNldENvdW50czp7aWQ6c3RyaW5nLGRlbGV0ZWQ6Ym9vbGVhbn1bXSk9PntcclxuICAgIC8vICAgICBsZXQgY291bnRzID0gMFxyXG4gICAgLy8gICAgIGlmICh0YWJsZVNldENvdW50cy5sZW5ndGgpe1xyXG4gICAgLy8gICAgICAgY29uc3QgY29waWVkVGFibGVTZXRDb3VudHMgPSBbLi4udGFibGVTZXRDb3VudHNdO1xyXG4gICAgLy8gICAgICAgY29waWVkVGFibGVTZXRDb3VudHMuZmlsdGVyKChpdGVtKT0+IWl0ZW0uZGVsZXRlZCk7XHJcbiAgICAvLyAgICAgICBjb3VudHMgPSBjb3BpZWRUYWJsZVNldENvdW50cy5sZW5ndGhcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGNvdW50cztcclxuICAgIC8vICAgfVxyXG5cclxuICAgIGdldFF1ZXJ5U2V0VmFsdWUgPSAoKT0+KHtxdWVyeVNldEFycmF5OnRoaXMuc2V0UXVlcnlBcnJheSxxdWVyeVNldE91dGZpZWxkczp0aGlzLnNldE91dEZpZWxkc30pXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgSGVscGVyKCk7IiwiXG5pbXBvcnQgeyBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuaW1wb3J0IHsgYXBwQWN0aW9ucyB9IGZyb20gXCJqaW11LWNvcmVcIjtcblxudHlwZSBzcGF0aWFsUmVsYXRpb25zaGlwVHlwZSA9IFwiaW50ZXJzZWN0c1wiIHwgXCJjb250YWluc1wiIHwgXCJjcm9zc2VzXCIgfCBcImRpc2pvaW50XCIgfCBcImVudmVsb3BlLWludGVyc2VjdHNcIiB8IFwiaW5kZXgtaW50ZXJzZWN0c1wiIHwgXCJvdmVybGFwc1wiIHwgXCJ0b3VjaGVzXCIgfCBcIndpdGhpblwiIHwgXCJyZWxhdGlvblwiXG5cbnR5cGUgbGF5ZXJPcGVuVHlwZSA9IHtcbiAgICBnZW9tZXRyeTphbnksXG4gICAgdHlwZVNlbGVjdGVkOnNwYXRpYWxSZWxhdGlvbnNoaXBUeXBlLFxuICAgIHdoZXJlPzpzdHJpbmcsXG4gICAgZ3JhcGhpY3NGb3VuZD86YW55LFxuICAgIHZhbHVlQnVmZmVyPzphbnlcbn1cblxudHlwZSBpbml0T2JqVHlwZSA9IHtcbiAgICByZXN1bHRzOmFueVtdLFxuICAgIGFsbENoZWNrZWRMYXllcnM/OmFueVtdLFxuICAgIGlzTGF5ZXJDaGVja2VkPzpib29sZWFuLFxuICAgIGNoZWNrZWRMYXllcnM/OnN0cmluZ1tdLFxuICAgIG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9LFxuICAgIGxheWVyT3Blbj86bGF5ZXJPcGVuVHlwZSxcbiAgICBjcmVhdGVUYWJsZT86dHJ1ZVxufVxuXG50eXBlIHNlbGVjdGVkTGF5ZXJUeXBlID0ge2lkOnN0cmluZyxhdHRyaWJ1dGVzOmFueVtdfVxuXG5jbGFzcyBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciB7XG5cbiAgICBzdGF0aWMgYWN0aXZlVmlldzpKaW11TWFwVmlldyA9IG51bGw7XG4gICAgc3RhdGljIHNlbGY6YW55ID0gbnVsbDtcblxuICAgIGFsbENoZWNrZWRMYXllcnM/OmFueVtdO1xuICAgIGNoZWNrZWRMYXllcnM/OnN0cmluZ1tdO1xuICAgIG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9O1xuICAgIGNyZWF0ZVRhYmxlOmJvb2xlYW47XG4gICAgbGF5ZXJPcGVuOmxheWVyT3BlblR5cGU7XG4gICAgaXNMYXllckNoZWNrZWQ6Ym9vbGVhblxuXG5cbiAgICBjb25zdHJ1Y3RvcihhY3RpdmVWaWV3OkppbXVNYXBWaWV3LHNlbGY6YW55KXtcbiAgICAgICAgQXR0cmlidXRlVGFibGVDb25uZWN0b3IuYWN0aXZlVmlldyA9IGFjdGl2ZVZpZXc7XG4gICAgICAgIEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGYgPSBzZWxmO1xuICAgIH1cblxuICAgIGluaXQob2JqOmluaXRPYmpUeXBlKXsgIFxuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBvYmoucmVzdWx0cztcbiAgICAgICAgY29uc3QgYWxsQ2hlY2tlZExheWVycyA9IG9iai5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICBsZXQgY3JlYXRlVGFibGUgPSB0cnVlO1xuICAgICAgICBsZXQgaXNMYXllckNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNoZWNrZWRMYXllcnMgPSBudWxsO1xuICAgICAgICBsZXQgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gbnVsbDtcbiAgICAgICAgbGV0IGxheWVyT3BlbiA9IG51bGw7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJjcmVhdGVUYWJsZVwiKSl7XG4gICAgICAgICAgICBjcmVhdGVUYWJsZSA9IG9iai5jcmVhdGVUYWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwiaXNMYXllckNoZWNrZWRcIikpe1xuICAgICAgICAgICAgaXNMYXllckNoZWNrZWQgPSBvYmouaXNMYXllckNoZWNrZWQgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShcImNoZWNrZWRMYXllcnNcIikpe1xuICAgICAgICAgICAgY2hlY2tlZExheWVycyA9IG9iai5jaGVja2VkTGF5ZXJzIFxuICAgICAgICB9XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoXCJudW1iZXJPZkF0dHJpYnV0ZXNcIikpe1xuICAgICAgICAgICAgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gb2JqLm51bWJlck9mQXR0cmlidXRlcyBcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwibGF5ZXJPcGVuXCIpKXtcbiAgICAgICAgICAgIGxheWVyT3BlbiA9IG9iai5sYXllck9wZW4gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVUYWJsZSA9IGNyZWF0ZVRhYmxlO1xuICAgICAgICB0aGlzLmlzTGF5ZXJDaGVja2VkID0gaXNMYXllckNoZWNrZWQ7XG4gICAgICAgIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVycyhhbGxDaGVja2VkTGF5ZXJzLHJlc3VsdHMpO1xuICAgICAgICB0aGlzLnNldENoZWNrZWRMYXllcnMoYWxsQ2hlY2tlZExheWVycyxjaGVja2VkTGF5ZXJzKTtcbiAgICAgICAgLy8gdGhpcy5zZXRBbGxDaGVja2VkTGF5ZXJzKGFsbENoZWNrZWRMYXllcnMpO1xuICAgICAgICB0aGlzLnNldE51bWJlck9mQXR0cmlidXRlcyhyZXN1bHRzLG51bWJlck9mQXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMuc2V0TGF5ZXJPcGVuKGxheWVyT3Blbik7XG4gICAgfVxuXG4gICAgaXNBcnJheSA9ICh2YWwpPT5BcnJheS5pc0FycmF5KHZhbCk7XG5cbiAgICBpc09iamVjdCA9ICh2YWwpPT5PYmplY3Qua2V5cyh2YWwpLmxlbmd0aCA+IDAgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcblxuICAgIGxvb3BMYXllckdldElkcyA9IChsYXllcjphbnlbXSk9PntcbiAgICAgICAgbGV0IGlkc0FycmF5ID0gW107XG4gICAgICAgIGlmIChsYXllci5sZW5ndGgpe1xuICAgICAgICAgICAgaWRzQXJyYXkgPSBsYXllci5yZWR1Y2UoKG5ld0FycmF5LGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQpe1xuICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0uaWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgICAgIH0sW10pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkc0FycmF5O1xuICAgIH1cblxuXG5cbiAgICBzZXRDaGVja2VkTGF5ZXJzID0gKGN1cnJlbnRBbGxDaGVjaGVkTGF5ZXJzOmFueSxjaGVja2VkTGF5ZXJzPzpzdHJpbmdbXSwpPT57XG4gICAgICAgIGxldCBhbGxDaGVja2VkTGF5ZXJzID0gY3VycmVudEFsbENoZWNoZWRMYXllcnM7XG4gICAgICAgIGlmICghYWxsQ2hlY2tlZExheWVycyl7XG4gICAgICAgICAgICBhbGxDaGVja2VkTGF5ZXJzID0gdGhpcy5hbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja2VkTGF5ZXJzKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZExheWVycyA9IGNoZWNrZWRMYXllcnM7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoZWNrZWRMYXllcnNBcnIgPSBbXTtcbiAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnNBcnIucHVzaChhbGxDaGVja2VkTGF5ZXJzLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzQXJyO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkTGF5ZXJzQXJyLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRMYXllcnNBcnIgPSBbLi4uY2hlY2tlZExheWVyc0FyciwuLi50aGlzLmxvb3BMYXllckdldElkcyhhbGxDaGVja2VkTGF5ZXJzKV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZExheWVycyA9IGNoZWNrZWRMYXllcnNBcnI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZExheWVycyA9IHRoaXMubG9vcExheWVyR2V0SWRzKGFsbENoZWNrZWRMYXllcnMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRMYXllcnMgPSBjaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QWxsQ2hlY2tlZExheWVyc0Zyb21SZXN1bHRzID0gKHJlc3VsdHM6YW55W10pPT57XG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtc1swXT8ubGF5ZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICAgICAgICAgIH0sW10pXG4gICAgICAgICAgICB0aGlzLmFsbENoZWNrZWRMYXllcnMgPSBhbGxDaGVja2VkTGF5ZXJzO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFwiUGFzcyByZXN1bHRzIGFmdGVyIHF1ZXJ5XCJcblxuICAgIH1cblxuICAgIHNldEFsbENoZWNrZWRMYXllcnMgPSAoYWxsQ2hlY2tlZExheWVyczphbnkscmVzdWx0czphbnlbXSk9PntcbiAgICAgICAgaWYgKGFsbENoZWNrZWRMYXllcnMpe1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QoYWxsQ2hlY2tlZExheWVycykpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2hlY2tlZExheWVycyA9IFthbGxDaGVja2VkTGF5ZXJzXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBcnJheShhbGxDaGVja2VkTGF5ZXJzKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxDaGVja2VkTGF5ZXJzID0gYWxsQ2hlY2tlZExheWVyc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QWxsQ2hlY2tlZExheWVyc0Zyb21SZXN1bHRzKHJlc3VsdHMpO1xuIFxuICAgIH1cblxuXG4gICAgZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyID0ocmVzdWx0czphbnkpOnNlbGVjdGVkTGF5ZXJUeXBlW109PntcbiAgICAgICAgY29uc3QgY2hlY2tlZExheWVycyA9IHRoaXMuY2hlY2tlZExheWVycz8/W107XG4gICAgICAgIGxldCBzZWxlY3RlZExheWVyc0FycmF5ID0gW107XG4gICAgICAgIGlmIChyZXN1bHRzPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHNlbGVjdGVkTGF5ZXJzQXJyYXkgPSByZXN1bHRzLnJlZHVjZSgobmV3QXJyYXksaXRlbXM6YW55W10pPT57XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zPy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkTGF5ZXJDb250ZW50cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudExheWVySWQgPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZExheWVycy5pbmRleE9mKGN1cnJlbnRMYXllcklkKSAhPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiaWRcIl0gPSBpdGVtc1swXT8ubGF5ZXI/LmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYXllckNvbnRlbnRzW1wiYXR0cmlidXRlc1wiXSA9IHRoaXMuZ2V0QXR0cmlidXRlcyhpdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKHNlbGVjdGVkTGF5ZXJDb250ZW50cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgICAgICAgICB9LFtdKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZExheWVyc0FycmF5O1xuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZXMgPSAoaXRlbXM6YW55W10pOmFueVtdPT57XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNBcnJheSA9IGl0ZW1zLnJlZHVjZSgobmV3QXJyYXksaXRlbSk9PntcbiAgICAgICAgICAgIGlmIChpdGVtPy5hdHRyaWJ1dGVzKXtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5nZW9tZXRyeSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gaXRlbS5nZW9tZXRyeTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBnZW9tZXRyeT8ubGF0aXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubGF0aXR1ZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IGdlb21ldHJ5Py5sb25naXR1ZGU/P2dlb21ldHJ5Py5leHRlbnQ/LmNlbnRlcj8ubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9uZ2l0dWRlICYmIGxhdGl0dWRlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goey4uLml0ZW0uYXR0cmlidXRlcyxsb2NhdGlvbjpbbGF0aXR1ZGUsbG9uZ2l0dWRlXX0pO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbS5hdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkucHVzaChpdGVtLmF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgICB9LFtdKVxuICAgICAgICByZXR1cm4gYXR0cmlidXRlc0FycmF5O1xuICAgIH1cblxuICAgIHNldE51bWJlck9mQXR0cmlidXRlcyA9IChyZXN1bHRzOmFueVtdLG51bWJlck9mQXR0cmlidXRlcz86e1trZXk6c3RyaW5nXTpzdHJpbmd9LCk9PntcbiAgICAgICAgaWYgKG51bWJlck9mQXR0cmlidXRlcyl7XG4gICAgICAgICAgICB0aGlzLm51bWJlck9mQXR0cmlidXRlcyA9IG51bWJlck9mQXR0cmlidXRlcztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXllcnNDb250ZW50cyA9IHRoaXMuZ2V0U2VsZWN0ZWRDb250ZW50c0xheWVyKHJlc3VsdHMpO1xuICAgICAgICBsZXQgbGF5ZXJDb250ZW50c09iamVjdCA9IHt9O1xuICAgICAgICBpZiAobGF5ZXJzQ29udGVudHM/Lmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7aSA8IGxheWVyc0NvbnRlbnRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGxheWVyQ29udGVudHNPYmplY3QgPSB7Li4ubGF5ZXJDb250ZW50c09iamVjdCxbbGF5ZXJzQ29udGVudHNbaV0/LmlkXTpsYXllcnNDb250ZW50c1tpXT8uYXR0cmlidXRlcz8ubGVuZ3RoPz8wfVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXMgPSBsYXllckNvbnRlbnRzT2JqZWN0XG4gICAgfVxuXG4gICAgc2V0TGF5ZXJPcGVuID0gKGxheWVyT3Blbj86bGF5ZXJPcGVuVHlwZSk9PntcbiAgICAgICAgaWYgKGxheWVyT3Blbil7XG4gICAgICAgICAgICB0aGlzLmxheWVyT3BlbiA9IGxheWVyT3BlbjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyT3BlbiA9IHtcbiAgICAgICAgICAgIGdlb21ldHJ5Om51bGwsXG4gICAgICAgICAgICB0eXBlU2VsZWN0ZWQ6XCJjb250YWluc1wiLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlVmlldyA9ICgpPT5BdHRyaWJ1dGVUYWJsZUNvbm5lY3Rvci5hY3RpdmVWaWV3O1xuICAgIFxuICAgIGdldEFsbENoZWNrZWRMYXllcnMgPSAoKT0+IHRoaXMuYWxsQ2hlY2tlZExheWVycztcblxuICAgIGRpc3BhdGNoaW5nQWxsID0gKCk9PntcbiAgICAgICAgY29uc3Qgc2VsZiA9IEF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLnNlbGY7XG4gICAgICAgIGNvbnN0IHByb3BzID0gc2VsZi5wcm9wc1xuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMuaGFzT3duUHJvcGVydHkoXCJkaXNwYXRjaFwiKSApe1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZBdHRyaWJ1dGVzID0gdGhpcy5udW1iZXJPZkF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBjb25zdCBsYXllck9wZW4gPSB0aGlzLmxheWVyT3BlbjtcbiAgICAgICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3KCk7XG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzICYmIGxheWVyT3BlbiAmJiBhbGxDaGVja2VkTGF5ZXJzICYmIGFjdGl2ZVZpZXcpe1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0xheWVyQ2hlY2tlZCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNoZWNrZWRMYXllcnNcIix0aGlzLmNoZWNrZWRMYXllcnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG51bWJlck9mQXR0cmlidXRlcykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJudW1iZXJPZkF0dHJpYnV0ZVwiLG51bWJlck9mQXR0cmlidXRlcykpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJsYXllck9wZW5cIixsYXllck9wZW4pKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZ2V0QWxsTGF5ZXJzXCIsdGhpcy5nZXRBbGxDaGVja2VkTGF5ZXJzKSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImdldEFjdGl2ZVZpZXdcIix0aGlzLmdldEFjdGl2ZVZpZXcpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBcIm5vSXRlbVNlbGVjdGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbGF5ZXJPcGVuKXRocm93IFwiVGhlcmUgaXMgbm8gbGF5ZXIgb3BlblwiXG4gICAgICAgICAgICBpZiAoYWxsQ2hlY2tlZExheWVycyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFsbCBjaGVja2VkIGxheWVycyBtYWtlIHN1cmUgdG8gcGFzcyBsYXllclwiXG4gICAgICAgICAgICBpZiAoYWN0aXZlVmlldyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFjdGl2ZVZpZXcscGFzcyBqaW11TWFwVmlldyB3aGVuIG1hcCBsb2FkXCJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBcIlBhc3MgcGFyZW50IHdpZGdldCB0byB0aGUgQXR0cmlidXRlQ29ubmVjdG9yXCJcblxuICAgIH1cblxuICAgIGNsb3NlVGFibGUgPSAoKT0+e1xuICAgICAgICBjb25zdCBzZWxmID0gQXR0cmlidXRlVGFibGVDb25uZWN0b3Iuc2VsZjtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImRpc3BhdGNoXCIpICl7XG4gICAgICAgICAgICBwcm9wcy5kaXNwYXRjaChhcHBBY3Rpb25zLndpZGdldFN0YXRlUHJvcENoYW5nZShcInZhbHVlXCIsXCJjaGVja2VkTGF5ZXJzXCIsW10pKTtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UHJvcHMgPSAoKT0+e1xuICAgICAgICBjb25zdCBzZWxmID0gQXR0cmlidXRlVGFibGVDb25uZWN0b3Iuc2VsZjtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBzZWxmLnByb3BzO1xuICAgICAgICBjb25zdCBudW1iZXJPZkF0dHJpYnV0ZXMgPSB0aGlzLm51bWJlck9mQXR0cmlidXRlcztcbiAgICAgICAgY29uc3QgbGF5ZXJPcGVuID0gdGhpcy5sYXllck9wZW47XG4gICAgICAgIGNvbnN0IGFsbENoZWNrZWRMYXllcnMgPSB0aGlzLmFsbENoZWNrZWRMYXllcnM7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXcoKTsgXG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImRpc3BhdGNoXCIpKXtcbiAgICAgICAgICAgIGlmKCFsYXllck9wZW4pdGhyb3cgXCJUaGVyZSBpcyBubyBsYXllciBvcGVuXCJcbiAgICAgICAgICAgIGlmICghYWxsQ2hlY2tlZExheWVycyl0aHJvdyBcIlRoZXJlIGlzIG5vIGFsbCBjaGVja2VkIGxheWVycyBtYWtlIHN1cmUgdG8gcGFzcyBsYXllclwiXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZVZpZXcpdGhyb3cgXCJUaGVyZSBpcyBubyBhY3RpdmVWaWV3LHBhc3MgamltdU1hcFZpZXcgd2hlbiBtYXAgbG9hZFwiXG4gICAgICAgICAgICBpZiAobnVtYmVyT2ZBdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKG51bWJlck9mQXR0cmlidXRlcykpe1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IFwiUGFzcyBwYXJlbnQgd2lkZ2V0IHRvIHRoZSBBdHRyaWJ1dGVDb25uZWN0b3JcIlxuICAgIH1cblxuICAgIGRpc3BhdGNoQ3JlYXRlVGFibGUgPSAoKT0+e1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMuZ2V0UHJvcHMoKTtcbiAgICAgICAgaWYgKHByb3BzKXtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hDaGVjaGVkTGF5ZXJzID0gKGNoZWNrZWRMYXllcnM6c3RyaW5nW10pPT57XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xuICAgICAgICBpZiAocHJvcHMpe1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiY2hlY2tlZExheWVyc1wiLGNoZWNrZWRMYXllcnMpKTtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hGaWx0ZXJWYWx1ZSA9IChmaWx0ZXJWYWx1ZTpudW1iZXIpPT57XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5nZXRQcm9wcygpO1xuICAgICAgICBpZiAocHJvcHMpe1xuICAgICAgICAgICAgcHJvcHMuZGlzcGF0Y2goYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLFwiZmlsdGVyVmFsdWVcIiwgZmlsdGVyVmFsdWUpKTtcbiAgICAgICAgICAgIHByb3BzLmRpc3BhdGNoKGFwcEFjdGlvbnMud2lkZ2V0U3RhdGVQcm9wQ2hhbmdlKFwidmFsdWVcIixcImNyZWF0ZVRhYmxlXCIsdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvcjsiLCJpbXBvcnQge1xuICBCdXR0b24sXG4gIENoZWNrYm94LFxuICBEcm9wZG93bixcbiAgRHJvcGRvd25CdXR0b24sXG4gIERyb3Bkb3duSXRlbSxcbiAgRHJvcGRvd25NZW51LFxuICBJbnB1dCxcbiAgTXVsdGlTZWxlY3QsXG4gIE9wdGlvbixcbiAgU2VsZWN0LFxuICBUZXh0SW5wdXQsXG59IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBTZXR0aW5nT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9hcHBsaWNhdGlvbi9zZXR0aW5nXCI7XG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvY2xvc2VcIjtcbmltcG9ydCB7XG4gIHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIsXG4gIHF1ZXJ5Q29uc3RydWN0b3JTdHJpbmcsXG59IGZyb20gXCIuLi91dGlscy9xdWVyeVRhYmxlVmFsdWVcIjtcbi8vIGltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBBZGRTZXRUYWJsZShwcm9wcykge1xuICBjb25zdCB7XG4gICAgbGlzdCxcbiAgICBoYW5kbGVUaGlyZFF1ZXJ5LFxuICAgIHRleHRJbnB1dEhhbmRsZXIsXG4gICAgbXVsdGlTZWxlY3RIYW5kbGVyLFxuICAgIGRyb3Bkb3duSXRlbUhhbmRsZXIsXG4gICAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyLFxuICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIsXG4gICAgZHJvcGRvd25WYWx1ZVF1ZXJ5LFxuICAgIGhhbmRsZUNoZWNrQm94LFxuICAgIGlzQ2hlY2tlZCxcbiAgICBjb3VudGVySXNDaGVja2VkLFxuICAgIGRyb3BEb3duVG9nZ2xlcixcbiAgICBmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQsXG4gICAgY2hlY2tlZFRvUXVlcnksXG4gICAgZGVsZXRlVGFibGUsXG4gICAgZ2V0UXVlcnlBdHRyaWJ1dGUsXG4gICAgLy8gZm9yIEFkZCBzZXQgdGFibGUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGFibGVzU2V0LFxuICAgIHRhYmxlc1NldElkLFxuICAgIHdoZXJlQ2xhdXNlc1NldCxcbiAgICAvLyBFbmQgZm9yIEFkZCBzZXQgdGFibGUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgdGFibGVzLFxuICAgIGdldFF1ZXJ5LFxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgIGRyb3BEb3duLFxuICAgIGlzT3BlbkRyb3BELFxuICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXG4gICAgb3BlbkRyb3AsXG4gICAgY2xvc2VEcm9wLFxuICAgIG9wZW5lZCxcbiAgICBhdXRPcGVuLFxuICAgIG1vdXNlbGVhdmUsXG4gICAgb25tb3VzZUxlYXZlLFxuICAgIGRyb3Bkb3duc1NldCxcbiAgICBzaG93RGVsZXRlLGJsb2NrSWQsXG4gICAgY3VycmVudFRhYmxlLFxuICAgIHNob3dCbG9ja0RlbGV0ZVxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY3VycmVudHdoZXJlQ2xhdXNlc1NldCA9IHdoZXJlQ2xhdXNlc1NldC5maW5kKChpdGVtKT0+aXRlbS5pZCA9PT0gdGFibGVzU2V0SWQpO1xuICBpZiAoY3VycmVudFRhYmxlLmlkID09PSBwYXJzZUludCh0YWJsZXNTZXRJZC5zcGxpdChcIi1cIilbMF0pICYmICFjdXJyZW50VGFibGUuZGVsZXRlZCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMVwiPlxuICAgICAgICB7bGlzdC5maWVsZHMgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMFwiPlxuICAgICAgICAgICAgICB7c2hvd0RlbGV0ZSYmPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDAgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yIGNvbC0xIHNlbGYtZW5kXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2RlbGV0ZVRhYmxlfVxuICAgICAgICAgICAgICAgICAgaWNvblxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL31cbiAgICAgICAgICAgICAgICB7bGlzdC5maWVsZHMubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcIm9pZFwiIHx8XG4gICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic21hbGwtaW50ZWdlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwiaW50ZWdlclwiIHx8XG4gICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJkb3VibGVcIlxuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZT17ZWwudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWwuYWxpYXN9ICh7ZWwudHlwZX0pXG4gICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGdldFF1ZXJ5KGUsIFwic2V0XCIpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgY2FtcG9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50d2hlcmVDbGF1c2VzU2V0ICYmIGN1cnJlbnR3aGVyZUNsYXVzZXNTZXQuYXR0cmlidXRlUXVlcnlUeXBlID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgID8gcXVlcnlDb25zdHJ1Y3RvclN0cmluZy5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogcXVlcnlDb25zdHJ1Y3Rvck51bWJlci5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtvLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFNlY29uZENvbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTRcIlxuICAgICAgICAgICAgICAgIGhhbmRsZVRoaXJkUXVlcnk9e2hhbmRsZVRoaXJkUXVlcnl9XG4gICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICBtdWx0aVNlbGVjdEhhbmRsZXI9e211bHRpU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1IYW5kbGVyPXtkcm9wZG93bkl0ZW1IYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXI9e3RleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5PXtkcm9wZG93blZhbHVlUXVlcnl9XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tCb3g9e2hhbmRsZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICAgICAgICAgIGNvdW50ZXJJc0NoZWNrZWQ9e2NvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkPXtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tlZFRvUXVlcnk9e2NoZWNrZWRUb1F1ZXJ5fVxuICAgICAgICAgICAgICAgIGdldFF1ZXJ5QXR0cmlidXRlPXtnZXRRdWVyeUF0dHJpYnV0ZX1cbiAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXNTZXQ9e3doZXJlQ2xhdXNlc1NldH1cbiAgICAgICAgICAgICAgICB0YWJsZXNTZXRJZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXtkcm9wRG93blRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXI9e3VuaXZvY29TZWxlY3RIYW5kbGVyfVxuICAgICAgICAgICAgICAgIGRyb3BEb3duPXtkcm9wRG93bn1cbiAgICAgICAgICAgICAgICBpc09wZW5Ecm9wRD17aXNPcGVuRHJvcER9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveD17b25DaGFuZ2VDaGVja0JveH1cbiAgICAgICAgICAgICAgICBvcGVuRHJvcD17b3BlbkRyb3B9XG4gICAgICAgICAgICAgICAgY2xvc2VEcm9wPXtjbG9zZURyb3B9XG4gICAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICAgICAgYXV0T3Blbj17YXV0T3Blbn1cbiAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXttb3VzZWxlYXZlfVxuICAgICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17b25tb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgIGRyb3Bkb3duc1NldD17ZHJvcGRvd25zU2V0fVxuICAgICAgICAgICAgICAgIGJsb2NrSWQgPSB7YmxvY2tJZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5jb25zdCBTd2l0Y2ggPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBxdWVyeVZhbHVlcywgY2hpbGRyZW4gfSA9IHByb3BzO1xuICAvLyBmaWx0ZXIgb3V0IG9ubHkgY2hpbGRyZW4gd2l0aCBhIG1hdGNoaW5nIHByb3BcbiAgcmV0dXJuIGNoaWxkcmVuLmZpbmQoKGNoaWxkKSA9PiB7XG4gICAgcmV0dXJuIGNoaWxkLnByb3BzLnZhbHVlID09PSBxdWVyeVZhbHVlcztcbiAgfSk7XG59O1xuXG5jb25zdCBTZWNvbmRDb25zdHJ1Y3RvciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGV4dElucHV0SGFuZGxlcixcbiAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxuICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcixcbiAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyLFxuICAgIGNvdW50ZXJJc0NoZWNrZWQsXG4gICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLFxuICAgIHRhYmxlc1NldElkLFxuICAgIHdoZXJlQ2xhdXNlc1NldCxcbiAgICBkcm9wRG93blRvZ2dsZXIsXG4gICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIsXG4gICAgZHJvcERvd24sXG4gICAgaXNPcGVuRHJvcEQsXG4gICAgb25DaGFuZ2VDaGVja0JveCxcbiAgICBvcGVuRHJvcCxcbiAgICBjbG9zZURyb3AsXG4gICAgb3BlbmVkOiBkLFxuICAgIGF1dE9wZW4sXG4gICAgb25tb3VzZUxlYXZlLFxuICAgIGRyb3Bkb3duc1NldCxcbiAgICBibG9ja0lkXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qgbm9ybWFsaXplZFRoaXJkUXVlcnkgPSBbXTtcbiAgbGV0IGRlZmF1bHRWYWx1ZSA9IFwiPVwiO1xuICBsZXQgZHJvcGRvd25WYWx1ZVF1ZXJ5ID0gXCJ2YWxvcmVcIjtcbiAgbGV0IG9wZW5lZCA9IGZhbHNlO1xuICBsZXQgY2hlY2tlZCA9IDA7XG4gIGxldCBhdSA9IHRydWU7XG4gIC8vIHZhbHVlVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7IG5vcm1hbGl6ZWRUaGlyZFF1ZXJ5LnB1c2goeyBsYWJlbDogZWwubGFiZWxbMF0udG9TdHJpbmcoKSwgdmFsdWU6IGVsLnZhbHVlWzBdLnRvU3RyaW5nKCkgfSkgfSlcbiAgaWYgKHdoZXJlQ2xhdXNlc1NldC5sZW5ndGgpe1xuICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gd2hlcmVDbGF1c2VzU2V0LmZpbmQoKGl0ZW0pPT5pdGVtLmlkID09PSB0YWJsZXNTZXRJZCk7XG4gICAgaWYgKGN1cnJlbnRJdGVtPy5pZkluT3JOb3RJblF1ZXJ5VmFsdWUpe1xuICAgICAgY3VycmVudEl0ZW0uaWZJbk9yTm90SW5RdWVyeVZhbHVlLm1hcCgoZWwsaSk9PntcbiAgICAgICAgbm9ybWFsaXplZFRoaXJkUXVlcnkucHVzaCh7XG4gICAgICAgICAgaWQ6IHRhYmxlc1NldElkLnRvU3RyaW5nKCksXG4gICAgICAgICAgbGFiZWw6IGVsLmxhYmVsLnRvU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWU6IGVsLnZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgICAgbGlzdGVsOiBjdXJyZW50SXRlbS5jaGVja2VkTGlzdFNldCxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50SXRlbT8ucXVlcnlWYWx1ZSlkZWZhdWx0VmFsdWUgPSBjdXJyZW50SXRlbS5xdWVyeVZhbHVlO1xuICAgIGlmIChjdXJyZW50SXRlbT8uZHJvcGRvd25WYWx1ZVF1ZXJ5KSBkcm9wZG93blZhbHVlUXVlcnkgPSBjdXJyZW50SXRlbS5kcm9wZG93blZhbHVlUXVlcnk7XG4gICAgaWYgKGN1cnJlbnRJdGVtPy5pc09wZW4pIHtcbiAgICAgIC8vIG9wZW5lZCA9IHdoZXJlQ2xhdXNlc1NldFt0YWJsZXNTZXRJZF0uaXNPcGVuO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEl0ZW0/LmNoZWNrZWRMaXN0U2V0KWNoZWNrZWQgPSBjdXJyZW50SXRlbS5jaGVja2VkTGlzdFNldC5sZW5ndGg7XG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTd2l0Y2ggcXVlcnlWYWx1ZXM9e2RlZmF1bHRWYWx1ZX0+XG4gICAgICA8ZGl2IHZhbHVlPXtcIj1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnVuaXZvY29TZWxlY3RIYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50ZXh0SW5wdXRIYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAge31cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI8PlwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dW5pdm9jb1NlbGVjdEhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRJbnB1dEhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJJTlwifSBvbk1vdXNlTGVhdmU9eygpID0+IG9ubW91c2VMZWF2ZSgpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICBhY3RpdmVJY29uXG4gICAgICAgICAgICAgIGlzT3Blbj17ZHJvcGRvd25zU2V0W3RhYmxlc1NldElkXT8/ZmFsc2V9XG4gICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gZHJvcERvd259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuRHJvcCh0YWJsZXNTZXRJZCl9PlxuICAgICAgICAgICAgICAgIHtjaGVja2VkfSBlbGVtZW50aSBzZWxlemlvbmF0aVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPk11bHRpIHNlbGV6aW9uZSBhdHRpdmE8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja1ZhbHVlID09PSBlbC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTMgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIk5PVF9JTlwifSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgYWN0aXZlSWNvblxuICAgICAgICAgICAgICBpc09wZW49e2Ryb3Bkb3duc1NldFt0YWJsZXNTZXRJZF0/P2ZhbHNlfVxuICAgICAgICAgICAgICB0b2dnbGU9eygpID0+IGRyb3BEb3dufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gb25DbGljaz17KCkgPT4gb3BlbkRyb3AodGFibGVzU2V0SWQpfT5cbiAgICAgICAgICAgICAgICB7Y2hlY2tlZH0gZWxlbWVudGkgc2VsZXppb25hdGlcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5NdWx0aSBzZWxlemlvbmUgYXR0aXZhPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k9e1wiZml4ZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuY2hlY2tWYWx1ZSA9PT0gZWwubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIG1iLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI8PVwifSBjbGFzc05hbWU9XCJkLWZsZXggIGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIiBvbkNoYW5nZT17KGUpPT51bml2b2NvU2VsZWN0SGFuZGxlcihlLFwic2V0XCIpfT5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dElucHV0SGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIj49XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCIgb25DaGFuZ2U9eyhlKT0+dW5pdm9jb1NlbGVjdEhhbmRsZXIoZSxcInNldFwiKX0+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRJbnB1dEhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI8XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCIgb25DaGFuZ2U9eyhlKT0+dW5pdm9jb1NlbGVjdEhhbmRsZXIoZSxcInNldFwiKX0+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRJbnB1dEhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI+XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCIgb25DaGFuZ2U9eyhlKT0+dW5pdm9jb1NlbGVjdEhhbmRsZXIoZSxcInNldFwiKX0+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRJbnB1dEhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpcyBudWxsXCJ9PjwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpcyBub3QgbnVsbFwifT48L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiaW5jbHVkZWRcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5jbHVkZVwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgICBpZD1cImlucHV0c1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wtbWQtMiB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwJVwiIH19PlxuICAgICAgICAgICAgZVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgICAgIGlkPVwiaW5wdXRzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpc19ub3RfaW5jbHVkZWRcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5jbHVkZVwiPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wtc20tMiB0ZXh0LWNlbnRlclwiPmU8L3A+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJpbnB1dHNcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiTElLRSVcIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpPT50ZXh0SW5wdXRIYW5kbGVyKGUsXCJzZXRcIil9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc1NldElkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIiVMSUtFXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dElucHV0SGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJMSUtFJVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRJbnB1dEhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiJUxJS0UlXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGV4dElucHV0SGFuZGxlcihlLFwic2V0XCIpfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNTZXRJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJOT1QgTElLRVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnRleHRJbnB1dEhhbmRsZXIoZSxcInNldFwiKX1cbiAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzU2V0SWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N3aXRjaD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFNldFRhYmxlO1xuIiwiaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDaGVja2JveCxcbiAgRHJvcGRvd24sXG4gIERyb3Bkb3duQnV0dG9uLFxuICBEcm9wZG93bkl0ZW0sXG4gIERyb3Bkb3duTWVudSxcbiAgSW5wdXQsXG4gIE11bHRpU2VsZWN0LFxuICBPcHRpb24sXG4gIFNlbGVjdCxcbiAgVGV4dElucHV0LFxufSBmcm9tIFwiamltdS11aVwiO1xuaW1wb3J0IHsgU2V0dGluZ091dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvYXBwbGljYXRpb24vc2V0dGluZ1wiO1xuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2Nsb3NlXCI7XG5pbXBvcnQge1xuICBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLFxuICBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nLFxufSBmcm9tIFwiLi4vdXRpbHMvcXVlcnlUYWJsZVZhbHVlXCI7XG4vLyBpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gVGFibGUocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGxpc3QsXG4gICAgaGFuZGxlVGhpcmRRdWVyeSxcbiAgICB0ZXh0SW5wdXRIYW5kbGVyLFxuICAgIG11bHRpU2VsZWN0SGFuZGxlcixcbiAgICBkcm9wZG93bkl0ZW1IYW5kbGVyLFxuICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcixcbiAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyLFxuICAgIGRyb3Bkb3duVmFsdWVRdWVyeSxcbiAgICBoYW5kbGVDaGVja0JveCxcbiAgICBpc0NoZWNrZWQsXG4gICAgY291bnRlcklzQ2hlY2tlZCxcbiAgICBkcm9wRG93blRvZ2dsZXIsXG4gICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkLFxuICAgIGNoZWNrZWRUb1F1ZXJ5LFxuICAgIGRlbGV0ZVRhYmxlLFxuICAgIHRhYmxlc0lkLFxuICAgIGdldFF1ZXJ5QXR0cmlidXRlLFxuICAgIHdoZXJlQ2xhdXNlcyxcbiAgICB0YWJsZXMsXG4gICAgZ2V0UXVlcnksXG4gICAgdW5pdm9jb1NlbGVjdEhhbmRsZXIsXG4gICAgZHJvcERvd24sXG4gICAgaXNPcGVuRHJvcEQsXG4gICAgb25DaGFuZ2VDaGVja0JveCxcbiAgICBvcGVuRHJvcCxcbiAgICBjbG9zZURyb3AsXG4gICAgb3BlbmVkLFxuICAgIGF1dE9wZW4sXG4gICAgbW91c2VsZWF2ZSxcbiAgICBvbm1vdXNlTGVhdmUsXG4gICAgZHJvcGRvd25zLFxuICAgIGN1cnJlbnRUYWJsZVxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY3VycmVudHdoZXJlQ2xhdXNlcyA9IHdoZXJlQ2xhdXNlcy5maW5kKChpdGVtKT0+aXRlbS5pZCA9PT0gYCR7dGFibGVzSWR9YClcbiAgaWYgKGN1cnJlbnRUYWJsZS5pZCA9PT0gdGFibGVzSWQgJiYgIWN1cnJlbnRUYWJsZS5kZWxldGVkKXtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTFcIj5cbiAgICAgIHtsaXN0LmZpZWxkcyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0yIGNvbC0xIHNlbGYtZW5kXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtkZWxldGVUYWJsZX1cbiAgICAgICAgICAgICAgICBpY29uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNCBtYi0yXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldFF1ZXJ5QXR0cmlidXRlfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovfVxuICAgICAgICAgICAgICB7bGlzdC5maWVsZHMubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwib2lkXCIgfHxcbiAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPT09IFwic21hbGwtaW50ZWdlclwiIHx8XG4gICAgICAgICAgICAgICAgICBlbC50eXBlID09PSBcImludGVnZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgICAgICAgZWwudHlwZSA9PT0gXCJkb3VibGVcIlxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU9e2VsLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7ZWwuYWxpYXN9ICh7ZWwudHlwZX0pXG4gICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG1iLTJcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KGUpPT5nZXRRdWVyeShlLFwic2luZ2xlXCIpfSBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBjYW1wb1wiPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50d2hlcmVDbGF1c2VzICYmXG4gICAgICAgICAgICAgICAgY3VycmVudHdoZXJlQ2xhdXNlcy5hdHRyaWJ1dGVRdWVyeVR5cGUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgID8gcXVlcnlDb25zdHJ1Y3RvclN0cmluZy5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e28udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtvLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLm1hcCgobywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17by52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge28ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFNlY29uZENvbnN0cnVjdG9yXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC00XCJcbiAgICAgICAgICAgICAgaGFuZGxlVGhpcmRRdWVyeT17aGFuZGxlVGhpcmRRdWVyeX1cbiAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgICAgbXVsdGlTZWxlY3RIYW5kbGVyPXttdWx0aVNlbGVjdEhhbmRsZXJ9XG4gICAgICAgICAgICAgIGRyb3Bkb3duSXRlbUhhbmRsZXI9e2Ryb3Bkb3duSXRlbUhhbmRsZXJ9XG4gICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXt0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICBkcm9wZG93blZhbHVlUXVlcnk9e2Ryb3Bkb3duVmFsdWVRdWVyeX1cbiAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tCb3g9e2hhbmRsZUNoZWNrQm94fVxuICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2lzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZD17Y291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkPXtmdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgIGNoZWNrZWRUb1F1ZXJ5PXtjaGVja2VkVG9RdWVyeX1cbiAgICAgICAgICAgICAgZ2V0UXVlcnlBdHRyaWJ1dGU9e2dldFF1ZXJ5QXR0cmlidXRlfVxuICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM9e3doZXJlQ2xhdXNlc31cbiAgICAgICAgICAgICAgdGFibGVzSWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICBkcm9wRG93blRvZ2dsZXI9e2Ryb3BEb3duVG9nZ2xlcn1cbiAgICAgICAgICAgICAgdW5pdm9jb1NlbGVjdEhhbmRsZXI9e3VuaXZvY29TZWxlY3RIYW5kbGVyfVxuICAgICAgICAgICAgICBkcm9wRG93bj17ZHJvcERvd259XG4gICAgICAgICAgICAgIGlzT3BlbkRyb3BEPXtpc09wZW5Ecm9wRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2VDaGVja0JveD17b25DaGFuZ2VDaGVja0JveH1cbiAgICAgICAgICAgICAgb3BlbkRyb3A9e29wZW5Ecm9wfVxuICAgICAgICAgICAgICBjbG9zZURyb3A9e2Nsb3NlRHJvcH1cbiAgICAgICAgICAgICAgb3BlbmVkPXtvcGVuZWR9XG4gICAgICAgICAgICAgIGF1dE9wZW49e2F1dE9wZW59XG4gICAgICAgICAgICAgIG1vdXNlbGVhdmU9e21vdXNlbGVhdmV9XG4gICAgICAgICAgICAgIG9ubW91c2VMZWF2ZT17b25tb3VzZUxlYXZlfVxuICAgICAgICAgICAgICBkcm9wZG93bnMgPSB7ZHJvcGRvd25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuY29uc3QgU3dpdGNoID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnlWYWx1ZXMsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgLy8gZmlsdGVyIG91dCBvbmx5IGNoaWxkcmVuIHdpdGggYSBtYXRjaGluZyBwcm9wXG4gIHJldHVybiBjaGlsZHJlbi5maW5kKChjaGlsZCkgPT4ge1xuICAgIHJldHVybiBjaGlsZC5wcm9wcy52YWx1ZSA9PT0gcXVlcnlWYWx1ZXM7XG4gIH0pO1xufTtcblxuY29uc3QgU2Vjb25kQ29uc3RydWN0b3IgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRleHRJbnB1dEhhbmRsZXIsXG4gICAgZHJvcGRvd25JdGVtSGFuZGxlcixcbiAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXIsXG4gICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcixcbiAgICBjb3VudGVySXNDaGVja2VkLFxuICAgIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCxcbiAgICB0YWJsZXNJZCxcbiAgICB3aGVyZUNsYXVzZXMsXG4gICAgZHJvcERvd25Ub2dnbGVyLFxuICAgIHVuaXZvY29TZWxlY3RIYW5kbGVyLFxuICAgIGRyb3BEb3duLFxuICAgIGlzT3BlbkRyb3BELFxuICAgIG9uQ2hhbmdlQ2hlY2tCb3gsXG4gICAgb3BlbkRyb3AsXG4gICAgY2xvc2VEcm9wLFxuICAgIG9wZW5lZDogZCxcbiAgICBhdXRPcGVuLFxuICAgIG9ubW91c2VMZWF2ZSxcbiAgICBkcm9wZG93bnMsXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qgbm9ybWFsaXplZFRoaXJkUXVlcnkgPSBbXTtcbiAgbGV0IGRlZmF1bHRWYWx1ZSA9IFwiPVwiO1xuICBsZXQgZHJvcGRvd25WYWx1ZVF1ZXJ5ID0gXCJ2YWxvcmVcIjtcbiAgbGV0IG9wZW5lZCA9IGZhbHNlO1xuICBsZXQgY2hlY2tlZCA9IDA7XG4gIGxldCBhdSA9IHRydWU7XG4gIGxldCBkZWZhdWx0VGV4dFZhbHVlID0gXCIgXCI7XG4gIGNvbnN0IGN1cnJlbnRXaGVyZUNsYXVzZSA9IHdoZXJlQ2xhdXNlcy5maW5kKChpdGVtKT0+aXRlbS5pZCA9PT0gYCR7dGFibGVzSWR9YCk7XG4gIGlmIChjdXJyZW50V2hlcmVDbGF1c2UgJiYgY3VycmVudFdoZXJlQ2xhdXNlLmlmSW5Pck5vdEluUXVlcnlWYWx1ZSkge1xuICAgIGN1cnJlbnRXaGVyZUNsYXVzZS5pZkluT3JOb3RJblF1ZXJ5VmFsdWUubWFwKChlbCwgaSkgPT4ge1xuICAgICAgbm9ybWFsaXplZFRoaXJkUXVlcnkucHVzaCh7XG4gICAgICAgIGlkOiB0YWJsZXNJZC50b1N0cmluZygpLFxuICAgICAgICBsYWJlbDogZWwubGFiZWwudG9TdHJpbmcoKSxcbiAgICAgICAgdmFsdWU6IGVsLnZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgIGxpc3RlbDogY3VycmVudFdoZXJlQ2xhdXNlLmNoZWNrZWRMaXN0LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UucXVlcnlWYWx1ZSkge1xuICAgIGRlZmF1bHRWYWx1ZSA9IGN1cnJlbnRXaGVyZUNsYXVzZS5xdWVyeVZhbHVlO1xuICB9XG4gIGlmIChjdXJyZW50V2hlcmVDbGF1c2UgJiYgY3VycmVudFdoZXJlQ2xhdXNlLmRyb3Bkb3duVmFsdWVRdWVyeSkge1xuICAgIGRyb3Bkb3duVmFsdWVRdWVyeSA9IHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uZHJvcGRvd25WYWx1ZVF1ZXJ5O1xuICB9XG4gIGlmIChjdXJyZW50V2hlcmVDbGF1c2UgJiYgY3VycmVudFdoZXJlQ2xhdXNlLmlzT3Blbikge1xuICAgIC8vIG9wZW5lZCA9IHdoZXJlQ2xhdXNlc1t0YWJsZXNJZF0uaXNPcGVuO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRXaGVyZUNsYXVzZSAmJiBjdXJyZW50V2hlcmVDbGF1c2UuY2hlY2tlZExpc3QpIHtcbiAgICBjaGVja2VkID0gY3VycmVudFdoZXJlQ2xhdXNlLmNoZWNrZWRMaXN0Lmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IHRlc3QgPSAocHJvcHMpID0+IHt9O1xuICByZXR1cm4gKFxuICAgIDxTd2l0Y2ggcXVlcnlWYWx1ZXM9e2RlZmF1bHRWYWx1ZX0+XG4gICAgICA8ZGl2IHZhbHVlPXtcIj1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnVuaXZvY29TZWxlY3RIYW5kbGVyKGUsXCJzaW5nbGVcIil9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHtkZWZhdWx0VGV4dFZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIHt9XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPD5cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnVuaXZvY29TZWxlY3RIYW5kbGVyKGUsXCJzaW5nbGVcIil9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJJTlwifSBvbk1vdXNlTGVhdmU9eygpID0+IG9ubW91c2VMZWF2ZSgpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uIGlzT3Blbj17ZHJvcGRvd25zW3RhYmxlc0lkXX0gdG9nZ2xlPXsoKSA9PiBkcm9wRG93bn0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvcGVuRHJvcCh0YWJsZXNJZCl9PlxuICAgICAgICAgICAgICAgIHtjaGVja2VkfSBlbGVtZW50aSBzZWxlemlvbmF0aVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPk11bHRpIHNlbGV6aW9uZSBhdHRpdmE8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1zdGFydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJhdGVneT17XCJmaXhlZFwifVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwubGlzdGVsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5jaGVja1ZhbHVlID09PSBlbC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTMgbWItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIk5PVF9JTlwifSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbiBpc09wZW49e2Ryb3Bkb3duc1t0YWJsZXNJZF19IHRvZ2dsZT17KCkgPT4gZHJvcERvd259PlxuICAgICAgICAgICAgICA8RHJvcGRvd25CdXR0b24gb25DbGljaz17KCkgPT4gb3BlbkRyb3AodGFibGVzSWQpfT5cbiAgICAgICAgICAgICAgICB7Y2hlY2tlZH0gZWxlbWVudGkgc2VsZXppb25hdGlcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5NdWx0aSBzZWxlemlvbmUgYXR0aXZhPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k9e1wiZml4ZWRcIn1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrQm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC5saXN0ZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpc3RlbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUuY2hlY2tWYWx1ZSA9PT0gZWwubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0zIG1iLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI8PVwifSBjbGFzc05hbWU9XCJkLWZsZXggIGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIiBvbkNoYW5nZT17KGUpPT51bml2b2NvU2VsZWN0SGFuZGxlcihlLFwic2luZ2xlXCIpfT5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPj1cIn0gY2xhc3NOYW1lPVwiZC1mbGV4IGNvbC1tZC00XCI+XG4gICAgICAgIHtkcm9wZG93blZhbHVlUXVlcnkgPT09IFwidW5pdm9jb1wiID8gKFxuICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJTZWxlemlvbmEgaWwgTGF5ZXJcIiBvbkNoYW5nZT17KGUpPT51bml2b2NvU2VsZWN0SGFuZGxlcihlLFwic2luZ2xlXCIpfT5cbiAgICAgICAgICAgIHtub3JtYWxpemVkVGhpcmRRdWVyeS5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17aX0gZGF0YS10YWJsZS1pZD17dGFibGVzSWR9PlxuICAgICAgICAgICAgICAgICAge2VsLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0xXCI+XG4gICAgICAgICAgPERyb3Bkb3duIGFjdGl2ZUljb24+XG4gICAgICAgICAgICA8RHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQgY2xhc3NOYW1lPVwic2V0dGluZy1zdmdcIiAvPlxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGVhZGVyPkltcG9ydGEgaWwgdGlwbyBkaSBpbnB1dDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidmFsb3JlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFZhbG9yZVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FtcG9cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW1wb1xuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbVxuICAgICAgICAgICAgICAgIHZhbHVlPVwidW5pdm9jb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVbml2b2NpXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiPFwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAge2Ryb3Bkb3duVmFsdWVRdWVyeSA9PT0gXCJ1bml2b2NvXCIgPyAoXG4gICAgICAgICAgPFNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGV6aW9uYSBpbCBMYXllclwiIG9uQ2hhbmdlPXsoZSk9PnVuaXZvY29TZWxlY3RIYW5kbGVyKGUsXCJzaW5nbGVcIil9PlxuICAgICAgICAgICAge25vcm1hbGl6ZWRUaGlyZFF1ZXJ5Lm1hcCgoZWwsIGkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtpfSBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH0+XG4gICAgICAgICAgICAgICAgICB7ZWwubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LTEwMFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTFcIj5cbiAgICAgICAgICA8RHJvcGRvd24gYWN0aXZlSWNvbj5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBjbGFzc05hbWU9XCJzZXR0aW5nLXN2Z1wiIC8+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBoZWFkZXI+SW1wb3J0YSBpbCB0aXBvIGRpIGlucHV0PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gZGl2aWRlciAvPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ2YWxvcmVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVmFsb3JlXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJjYW1wb1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENhbXBvXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ1bml2b2NvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFVuaXZvY2lcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICAgICAgICA8L0Ryb3Bkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCI+XCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICB7ZHJvcGRvd25WYWx1ZVF1ZXJ5ID09PSBcInVuaXZvY29cIiA/IChcbiAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCIgb25DaGFuZ2U9eyhlKT0+dW5pdm9jb1NlbGVjdEhhbmRsZXIoZSxcInNpbmdsZVwiKX0+XG4gICAgICAgICAgICB7bm9ybWFsaXplZFRoaXJkUXVlcnkubWFwKChlbCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e2l9IGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfT5cbiAgICAgICAgICAgICAgICAgIHtlbC5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxEcm9wZG93biBhY3RpdmVJY29uPlxuICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uPlxuICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGNsYXNzTmFtZT1cInNldHRpbmctc3ZnXCIgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhlYWRlcj5JbXBvcnRhIGlsIHRpcG8gZGkgaW5wdXQ8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBkaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInZhbG9yZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpPT5kcm9wZG93bkl0ZW1IYW5kbGVyKGUsXCJzaW5nbGVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS10YWJsZS1pZD17dGFibGVzSWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBWYWxvcmVcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cImNhbXBvXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PmRyb3Bkb3duSXRlbUhhbmRsZXIoZSxcInNpbmdsZVwiKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FtcG9cbiAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cInVuaXZvY29cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+ZHJvcGRvd25JdGVtSGFuZGxlcihlLFwic2luZ2xlXCIpfVxuICAgICAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVW5pdm9jaVxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcImlzIG51bGxcIn0+PC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcImlzIG5vdCBudWxsXCJ9PjwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJpbmNsdWRlZFwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmNsdWRlXCI+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRGaXJzdEluY2x1ZGVkSGFuZGxlcn1cbiAgICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgICAgaWQ9J2lucHV0cydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbC1tZC0yIHRleHQtY2VudGVyXCIgc3R5bGU9e3t3aWR0aDonMTAlJ319PmU8L3A+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXJ9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXtmdW5jdGlvbiBub1JlZkNoZWNrKCkge319XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgICAgIGlkPSdpbnB1dHMnXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdmFsdWU9e1wiaXNfbm90X2luY2x1ZGVkXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluY2x1ZGVcIj5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17dGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9J2lucHV0cydcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29sLXNtLTIgdGV4dC1jZW50ZXJcIj5lPC9wPlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9J2lucHV0cydcbiAgICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIkxJS0UlXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIiVMSUtFXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIkxJS0UlXCJ9IGNsYXNzTmFtZT1cImQtZmxleCBjb2wtbWQtNFwiPlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e3RleHRJbnB1dEhhbmRsZXJ9XG4gICAgICAgICAgb25BY2NlcHRWYWx1ZT17ZnVuY3Rpb24gbm9SZWZDaGVjaygpIHt9fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgdy0xMDBcIlxuICAgICAgICAgIGRhdGEtdGFibGUtaWQ9e3RhYmxlc0lkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHZhbHVlPXtcIiVMSUtFJVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2YWx1ZT17XCJOT1QgTElLRVwifSBjbGFzc05hbWU9XCJkLWZsZXggY29sLW1kLTRcIj5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXt0ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgIG9uQWNjZXB0VmFsdWU9e2Z1bmN0aW9uIG5vUmVmQ2hlY2soKSB7fX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctMTAwXCJcbiAgICAgICAgICBkYXRhLXRhYmxlLWlkPXt0YWJsZXNJZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3dpdGNoPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgaXNWYWxpZEVsZW1lbnQsIGNsb25lRWxlbWVudCwgY3JlYXRlUmVmLCBSZWFjdE5vZGUsIFJlYWN0RWxlbWVudCwgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgeyBwYXRjaFJlc2l6ZUhhbmRsZXIsIGlzRnVuY3Rpb24sIGlzU1NSLCBpc0RPTUVsZW1lbnQsIGNyZWF0ZU5vdGlmaWVyIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMge1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hpbGRGdW5jdGlvblByb3BzPEVsZW1lbnRUIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMge1xuICB0YXJnZXRSZWY/OiBSZWZPYmplY3Q8RWxlbWVudFQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdpdGggb2JzZXJ2YWJsZSBlbGVtZW50J3Mgd2lkdGggYW5kIGhlaWdodC5cbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICBvblJlc2l6ZT86ICh3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKSA9PiB2b2lkO1xuICAvKipcbiAgICogVHJpZ2dlciB1cGRhdGUgb24gaGVpZ2h0IGNoYW5nZS5cbiAgICogRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgaGFuZGxlSGVpZ2h0PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRyaWdnZXIgb25SZXNpemUgb24gd2lkdGggY2hhbmdlLlxuICAgKiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBoYW5kbGVXaWR0aD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEbyBub3QgdHJpZ2dlciB1cGRhdGUgd2hlbiBhIGNvbXBvbmVudCBtb3VudHMuXG4gICAqIERlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBza2lwT25Nb3VudD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSB1cGRhdGUgc3RyYXRlZ3kuIFBvc3NpYmxlIHZhbHVlczogXCJ0aHJvdHRsZVwiIGFuZCBcImRlYm91bmNlXCIuXG4gICAqIFNlZSBgbG9kYXNoYCBkb2NzIGZvciBtb3JlIGluZm9ybWF0aW9uIGh0dHBzOi8vbG9kYXNoLmNvbS9kb2NzL1xuICAgKiB1bmRlZmluZWQgLSBjYWxsYmFjayB3aWxsIGJlIGZpcmVkIGZvciBldmVyeSBmcmFtZS5cbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICByZWZyZXNoTW9kZT86ICd0aHJvdHRsZScgfCAnZGVib3VuY2UnO1xuICAvKipcbiAgICogU2V0IHRoZSB0aW1lb3V0L2ludGVydmFsIGZvciBgcmVmcmVzaE1vZGVgIHN0cmF0ZWd5XG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgcmVmcmVzaFJhdGU/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBQYXNzIGFkZGl0aW9uYWwgcGFyYW1zIHRvIGByZWZyZXNoTW9kZWAgYWNjb3JkaW5nIHRvIGxvZGFzaCBkb2NzXG4gICAqIERlZmF1bHQ6IHVuZGVmaW5lZFxuICAgKi9cbiAgcmVmcmVzaE9wdGlvbnM/OiB7IGxlYWRpbmc/OiBib29sZWFuOyB0cmFpbGluZz86IGJvb2xlYW4gfTtcbiAgLyoqXG4gICAqIFRoZXNlIG9wdGlvbnMgd2lsbCBiZSB1c2VkIGFzIGEgc2Vjb25kIHBhcmFtZXRlciBvZiBgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZWAgbWV0aG9kXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Jlc2l6ZU9ic2VydmVyL29ic2VydmVcbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICBvYnNlcnZlck9wdGlvbnM/OiBSZXNpemVPYnNlcnZlck9wdGlvbnM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXplRGV0ZWN0b3JQcm9wczxFbGVtZW50VCBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFByb3BzIHtcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igb2YgYW4gZWxlbWVudCB0byBvYnNlcnZlLlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIHByb3BlcnR5IHRvIGF0dGFjaCByZXNpemUtb2JzZXJ2ZXIgdG8gYW55IERPTSBlbGVtZW50LlxuICAgKiBQbGVhc2UgcmVmZXIgdG8gdGhlIHF1ZXJ5U2VsZWN0b3IgZG9jcy5cbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gNS4wLjAuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDcuMC4wLlxuICAgKiBVc2UgdGFyZ2V0UmVmIGluc3RlYWRcbiAgICovXG4gIHF1ZXJ5U2VsZWN0b3I/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBWYWxpZCBvbmx5IGZvciBhIGNhbGxiYWNrLXBhdHRlcm4uXG4gICAqIElnbm9yZWQgZm9yIG90aGVyIHJlbmRlciB0eXBlcy5cbiAgICogU2V0IHJlc2l6ZS1kZXRlY3RvcidzIG5vZGUgdHlwZS5cbiAgICogWW91IGNhbiBwYXNzIGFueSB2YWxpZCBSZWFjdCBub2RlOiBzdHJpbmcgd2l0aCBub2RlJ3MgbmFtZSBvciBlbGVtZW50LlxuICAgKiBDYW4gYmUgdXNlZnVsIHdoZW4geW91IG5lZWQgdG8gaGFuZGxlIHRhYmxlJ3Mgb3IgcGFyYWdyYXBoJ3MgcmVzaXplcy5cbiAgICogRGVmYXVsdDogXCJkaXZcIlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDUuMC4wLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiA3LjAuMC5cbiAgICogVXNlIHRhcmdldFJlZiBpbnN0ZWFkXG4gICAqL1xuICBub2RlVHlwZT86IGtleW9mIEpTWC5JbnRyaW5zaWNFbGVtZW50czsgLy8gd2lsbCBiZSBwYXNzZWQgdG8gUmVhY3QuY3JlYXRlRWxlbWVudCgpXG4gIC8qKlxuICAgKiBBIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gICAqIEJ5IGRlZmF1bHQgaXQncyBhIHBhcmVudCBlbGVtZW50IGluIHJlbGF0aW9uIHRvIHRoZSBSZWFjdFJlc2l6ZURldGVjdG9yIGNvbXBvbmVudC5cbiAgICogQnV0IHlvdSBjYW4gcGFzcyBhbnkgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBvbWl0dGVkIHdoZW4geW91IHBhc3MgcXVlcnlTZWxlY3Rvci5cbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gNS4wLjAuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDYuMC4wLlxuICAgKiBVc2UgdGFyZ2V0UmVmIGluc3RlYWRcbiAgICovXG4gIHRhcmdldERvbUVsPzogRWxlbWVudFQ7XG4gIC8qKlxuICAgKiBBIFJlYWN0IHJlZmVyZW5jZSBvZiB0aGUgZWxlbWVudCB0byBvYnNlcnZlLlxuICAgKiBQYXNzIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHlvdSB3YW50IHRvIGF0dGFjaCByZXNpemUgaGFuZGxlcnMgdG8uXG4gICAqIEl0IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgUmVhY3QudXNlUmVmIG9yIFJlYWN0LmNyZWF0ZVJlZiBmdW5jdGlvbnNcbiAgICogRGVmYXVsdDogdW5kZWZpbmVkXG4gICAqL1xuICB0YXJnZXRSZWY/OiBSZWZPYmplY3Q8RWxlbWVudFQ+O1xuXG4gIHJlbmRlcj86IChwcm9wczogUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMpID0+IFJlYWN0Tm9kZTtcblxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZSB8ICgocHJvcHM6IENoaWxkRnVuY3Rpb25Qcm9wczxFbGVtZW50VD4pID0+IFJlYWN0Tm9kZSk7XG59XG5cbmNsYXNzIFJlc2l6ZURldGVjdG9yPEVsZW1lbnRUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPSBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFxuICBSZXNpemVEZXRlY3RvclByb3BzPEVsZW1lbnRUPixcbiAgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnNcbj4ge1xuICBza2lwT25Nb3VudDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgdGFyZ2V0UmVmO1xuICBvYnNlcnZhYmxlRWxlbWVudDtcbiAgcmVzaXplSGFuZGxlcjtcbiAgcmVzaXplT2JzZXJ2ZXI7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBSZXNpemVEZXRlY3RvclByb3BzPEVsZW1lbnRUPikge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHsgc2tpcE9uTW91bnQsIHJlZnJlc2hNb2RlLCByZWZyZXNoUmF0ZSA9IDEwMDAsIHJlZnJlc2hPcHRpb25zIH0gPSBwcm9wcztcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgdGhpcy5za2lwT25Nb3VudCA9IHNraXBPbk1vdW50O1xuICAgIHRoaXMudGFyZ2V0UmVmID0gY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5vYnNlcnZhYmxlRWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoaXNTU1IoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplSGFuZGxlciA9IHBhdGNoUmVzaXplSGFuZGxlcih0aGlzLmNyZWF0ZVJlc2l6ZUhhbmRsZXIsIHJlZnJlc2hNb2RlLCByZWZyZXNoUmF0ZSwgcmVmcmVzaE9wdGlvbnMpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgd2luZG93LlJlc2l6ZU9ic2VydmVyKHRoaXMucmVzaXplSGFuZGxlcik7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE9ic2VydmVyKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hPYnNlcnZlcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgaWYgKGlzU1NSKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vYnNlcnZhYmxlRWxlbWVudCA9IG51bGw7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5jYW5jZWxIYW5kbGVyKCk7XG4gIH1cblxuICBjYW5jZWxIYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnJlc2l6ZUhhbmRsZXIgJiYgdGhpcy5yZXNpemVIYW5kbGVyLmNhbmNlbCkge1xuICAgICAgLy8gY2FuY2VsIGRlYm91bmNlZCBoYW5kbGVyXG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIuY2FuY2VsKCk7XG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBhdHRhY2hPYnNlcnZlciA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHRhcmdldFJlZiwgb2JzZXJ2ZXJPcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGlzU1NSKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0UmVmICYmIHRhcmdldFJlZi5jdXJyZW50KSB7XG4gICAgICB0aGlzLnRhcmdldFJlZi5jdXJyZW50ID0gdGFyZ2V0UmVmLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgLy8gY2FuJ3QgZmluZCBlbGVtZW50IHRvIG9ic2VydmVcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vYnNlcnZhYmxlRWxlbWVudCAmJiB0aGlzLm9ic2VydmFibGVFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgb2JzZXJ2ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9ic2VydmFibGVFbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfTtcblxuICBnZXRFbGVtZW50ID0gKCk6IEVsZW1lbnQgfCBUZXh0IHwgbnVsbCA9PiB7XG4gICAgY29uc3QgeyBxdWVyeVNlbGVjdG9yLCB0YXJnZXREb21FbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc1NTUigpKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIGluIGNhc2Ugd2UgcGFzcyBhIHF1ZXJ5U2VsZWN0b3JcbiAgICBpZiAocXVlcnlTZWxlY3RvcikgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTZWxlY3Rvcik7XG4gICAgLy8gaW4gY2FzZSB3ZSBwYXNzIGEgRE9NIGVsZW1lbnRcbiAgICBpZiAodGFyZ2V0RG9tRWwgJiYgaXNET01FbGVtZW50KHRhcmdldERvbUVsKSkgcmV0dXJuIHRhcmdldERvbUVsO1xuICAgIC8vIGluIGNhc2Ugd2UgcGFzcyBhIFJlYWN0IHJlZiB1c2luZyBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIGlmICh0aGlzLnRhcmdldFJlZiAmJiBpc0RPTUVsZW1lbnQodGhpcy50YXJnZXRSZWYuY3VycmVudCkpIHJldHVybiB0aGlzLnRhcmdldFJlZi5jdXJyZW50O1xuXG4gICAgLy8gdGhlIHdvcnNlIGNhc2Ugd2hlbiB3ZSBkb24ndCByZWNlaXZlIGFueSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBwYXJlbnQgYW5kIHRoZSBsaWJyYXJ5IGRvZXNuJ3QgYWRkIGFueSB3cmFwcGVyc1xuICAgIC8vIHdlIGhhdmUgdG8gdXNlIGEgZGVwcmVjYXRlZCBgZmluZERPTU5vZGVgIG1ldGhvZCBpbiBvcmRlciB0byBmaW5kIGEgRE9NIGVsZW1lbnQgdG8gYXR0YWNoIHRvXG4gICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBmaW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICghY3VycmVudEVsZW1lbnQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgcmVuZGVyVHlwZSA9IHRoaXMuZ2V0UmVuZGVyVHlwZSgpO1xuICAgIHN3aXRjaCAocmVuZGVyVHlwZSkge1xuICAgICAgY2FzZSAncmVuZGVyUHJvcCc6XG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcbiAgICAgIGNhc2UgJ2NoaWxkRnVuY3Rpb24nOlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgICBjYXNlICdjaGlsZCc6XG4gICAgICAgIHJldHVybiBjdXJyZW50RWxlbWVudDtcbiAgICAgIGNhc2UgJ2NoaWxkQXJyYXknOlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH07XG5cbiAgY3JlYXRlUmVzaXplSGFuZGxlcjogUmVzaXplT2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzOiBSZXNpemVPYnNlcnZlckVudHJ5W10pOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZVdpZHRoID0gdHJ1ZSwgaGFuZGxlSGVpZ2h0ID0gdHJ1ZSwgb25SZXNpemUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWhhbmRsZVdpZHRoICYmICFoYW5kbGVIZWlnaHQpIHJldHVybjtcblxuICAgIGNvbnN0IG5vdGlmeVJlc2l6ZSA9IGNyZWF0ZU5vdGlmaWVyKG9uUmVzaXplLCB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyksIGhhbmRsZVdpZHRoLCBoYW5kbGVIZWlnaHQpO1xuXG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gKGVudHJ5ICYmIGVudHJ5LmNvbnRlbnRSZWN0KSB8fCB7fTtcblxuICAgICAgY29uc3Qgc2hvdWxkU2V0U2l6ZSA9ICF0aGlzLnNraXBPbk1vdW50ICYmICFpc1NTUigpO1xuICAgICAgaWYgKHNob3VsZFNldFNpemUpIHtcbiAgICAgICAgbm90aWZ5UmVzaXplKHsgd2lkdGgsIGhlaWdodCB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5za2lwT25Nb3VudCA9IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIGdldFJlbmRlclR5cGUgPSAoKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IHJlbmRlciwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGlzRnVuY3Rpb24ocmVuZGVyKSkge1xuICAgICAgLy8gREVQUkVDQVRFRC4gVXNlIGBDaGlsZCBGdW5jdGlvbiBQYXR0ZXJuYCBpbnN0ZWFkXG4gICAgICByZXR1cm4gJ3JlbmRlclByb3AnO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNoaWxkcmVuKSkge1xuICAgICAgcmV0dXJuICdjaGlsZEZ1bmN0aW9uJztcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4gJ2NoaWxkJztcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgIC8vIERFUFJFQ0FURUQuIFdyYXAgY2hpbGRyZW4gd2l0aCBhIHNpbmdsZSBwYXJlbnRcbiAgICAgIHJldHVybiAnY2hpbGRBcnJheSc7XG4gICAgfVxuXG4gICAgLy8gREVQUkVDQVRFRC4gVXNlIGBDaGlsZCBGdW5jdGlvbiBQYXR0ZXJuYCBpbnN0ZWFkXG4gICAgcmV0dXJuICdwYXJlbnQnO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgY2hpbGRyZW4sIG5vZGVUeXBlOiBXcmFwcGVyVGFnID0gJ2RpdicgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHsgd2lkdGgsIGhlaWdodCwgdGFyZ2V0UmVmOiB0aGlzLnRhcmdldFJlZiB9O1xuICAgIGNvbnN0IHJlbmRlclR5cGUgPSB0aGlzLmdldFJlbmRlclR5cGUoKTtcblxuICAgIHN3aXRjaCAocmVuZGVyVHlwZSkge1xuICAgICAgY2FzZSAncmVuZGVyUHJvcCc6XG4gICAgICAgIHJldHVybiByZW5kZXI/LihjaGlsZFByb3BzKTtcbiAgICAgIGNhc2UgJ2NoaWxkRnVuY3Rpb24nOiB7XG4gICAgICAgIGNvbnN0IGNoaWxkRnVuY3Rpb24gPSBjaGlsZHJlbiBhcyAocHJvcHM6IENoaWxkRnVuY3Rpb25Qcm9wczxFbGVtZW50VD4pID0+IFJlYWN0Tm9kZTtcbiAgICAgICAgcmV0dXJuIGNoaWxkRnVuY3Rpb24/LihjaGlsZFByb3BzKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NoaWxkJzoge1xuICAgICAgICAvLyBAVE9ETyBidWcgcHJvbmUgbG9naWNcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbiBhcyBSZWFjdEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGlsZC50eXBlICYmIHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIGNoaWxkIGlzIGEgbmF0aXZlIERPTSBlbGVtZW50cyBzdWNoIGFzIGRpdiwgc3BhbiBldGNcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgY29uc3QgeyB0YXJnZXRSZWYsIC4uLm5hdGl2ZVByb3BzIH0gPSBjaGlsZFByb3BzO1xuICAgICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIG5hdGl2ZVByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjbGFzcyBvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBvdGhlcndpc2VcbiAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcyk7XG4gICAgICB9XG4gICAgICBjYXNlICdjaGlsZEFycmF5Jzoge1xuICAgICAgICBjb25zdCBjaGlsZEFycmF5ID0gY2hpbGRyZW4gYXMgUmVhY3RFbGVtZW50W107XG4gICAgICAgIHJldHVybiBjaGlsZEFycmF5Lm1hcChlbCA9PiAhIWVsICYmIGNsb25lRWxlbWVudChlbCwgY2hpbGRQcm9wcykpO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxXcmFwcGVyVGFnIC8+O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNpemVEZXRlY3RvcjtcbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5pbXBvcnQgdHlwZSB7IERlYm91bmNlZEZ1bmMgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBQcm9wcywgUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMgfSBmcm9tICcuL1Jlc2l6ZURldGVjdG9yJztcblxuZXhwb3J0IHR5cGUgUGF0Y2hlZFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2sgPSBEZWJvdW5jZWRGdW5jPFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2s+IHwgUmVzaXplT2JzZXJ2ZXJDYWxsYmFjaztcblxuZXhwb3J0IGNvbnN0IHBhdGNoUmVzaXplSGFuZGxlciA9IChcbiAgcmVzaXplQ2FsbGJhY2s6IFJlc2l6ZU9ic2VydmVyQ2FsbGJhY2ssXG4gIHJlZnJlc2hNb2RlOiBQcm9wc1sncmVmcmVzaE1vZGUnXSxcbiAgcmVmcmVzaFJhdGU6IFByb3BzWydyZWZyZXNoUmF0ZSddLFxuICByZWZyZXNoT3B0aW9uczogUHJvcHNbJ3JlZnJlc2hPcHRpb25zJ11cbik6IFBhdGNoZWRSZXNpemVPYnNlcnZlckNhbGxiYWNrID0+IHtcbiAgc3dpdGNoIChyZWZyZXNoTW9kZSkge1xuICAgIGNhc2UgJ2RlYm91bmNlJzpcbiAgICAgIHJldHVybiBkZWJvdW5jZShyZXNpemVDYWxsYmFjaywgcmVmcmVzaFJhdGUsIHJlZnJlc2hPcHRpb25zKTtcbiAgICBjYXNlICd0aHJvdHRsZSc6XG4gICAgICByZXR1cm4gdGhyb3R0bGUocmVzaXplQ2FsbGJhY2ssIHJlZnJlc2hSYXRlLCByZWZyZXNoT3B0aW9ucyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiByZXNpemVDYWxsYmFjaztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGlzRnVuY3Rpb24gPSAoZm46IHVua25vd24pOiBib29sZWFuID0+IHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGlzU1NSID0gKCk6IGJvb2xlYW4gPT4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5cbmV4cG9ydCBjb25zdCBpc0RPTUVsZW1lbnQgPSAoZWxlbWVudDogdW5rbm93bik6IGJvb2xlYW4gPT5cbiAgZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGlmaWVyID1cbiAgKFxuICAgIG9uUmVzaXplOiBQcm9wc1snb25SZXNpemUnXSxcbiAgICBzZXRTaXplOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxSZWFjdFJlc2l6ZURldGVjdG9yRGltZW5zaW9ucz4+LFxuICAgIGhhbmRsZVdpZHRoOiBib29sZWFuLFxuICAgIGhhbmRsZUhlaWdodDogYm9vbGVhblxuICApID0+XG4gICh7IHdpZHRoLCBoZWlnaHQgfTogUmVhY3RSZXNpemVEZXRlY3RvckRpbWVuc2lvbnMpOiB2b2lkID0+IHtcbiAgICBzZXRTaXplKHByZXYgPT4ge1xuICAgICAgaWYgKHByZXYud2lkdGggPT09IHdpZHRoICYmIHByZXYuaGVpZ2h0ID09PSBoZWlnaHQpIHtcbiAgICAgICAgLy8gc2tpcCBpZiBkaW1lbnNpb25zIGhhdmVuJ3QgY2hhbmdlZFxuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH1cblxuICAgICAgaWYgKChwcmV2LndpZHRoID09PSB3aWR0aCAmJiAhaGFuZGxlSGVpZ2h0KSB8fCAocHJldi5oZWlnaHQgPT09IGhlaWdodCAmJiAhaGFuZGxlV2lkdGgpKSB7XG4gICAgICAgIC8vIHByb2Nlc3MgYGhhbmRsZUhlaWdodC9oYW5kbGVXaWR0aGAgcHJvcHNcbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9XG5cbiAgICAgIG9uUmVzaXplPy4od2lkdGgsIGhlaWdodCk7XG5cbiAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9KTtcbiAgfTtcbiIsIi8qKlxyXG5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIF93aWRnZXRMYWJlbDogJ0Nvc3RydXR0b3JlIFF1ZXJ5JyxcclxuICAgIHNlbGVjdEdlb21ldHJ5OlwiU2VsZXppb25hcmUgbGEgZ2VvbWV0cmlhXCIsXHJcbiAgICBsYXllcnM6XCJTdHJhdGlcIixcclxuICAgIHpvb21BOlwiWm9vbSBBXCIsXHJcbiAgICBleHBvcnRDc3Y6XCJFc3BvcnRhemlvbmUgaW4gZmlsZSBjc3ZcIixcclxuICAgIGV4cG9ydEpzb246XCJFc3BvcnRhemlvbmUgaW4gdW5hIHJhY2NvbHRhIGRpIGZ1bnppb25pXCIsXHJcbiAgICBzdGF0aXN0aWNzOlwiU3RhdGlzdGljaGVcIixcclxuICAgIGNyZWF0ZUxheWVyOlwiQ3JlYXJlIGlsIGxpdmVsbG9cIixcclxuICAgIGF0dHJpYnV0ZVRhYmxlOlwiVmlzdGEgbmVsbGEgdGFiZWxsYSBkZWdsaSBhdHRyaWJ1dGlcIixcclxuICAgIGRlbGV0ZTpcIkNhbmNlbGxhcmVcIixcclxuICAgIGNvdW50T2ZJdGVtczpcIkNvbnRlZ2dpbyBkZWdsaSBhcnRpY29saVwiLFxyXG4gICAgc3VtT2ZWYWx1ZXM6XCJTb21tYSBkZWkgdmFsb3JpXCIsXHJcbiAgICBtaW5pbXVtOlwiTWluaW1vXCIsXHJcbiAgICBtYXhpbXVtOlwiTWFzc2ltb1wiLFxyXG4gICAgYXZlcmFnZTpcIk1lZGlhXCIsXHJcbiAgICBzZWxlY3RCeVBvaW50OlwiU2VsZXppb25lIHBlciBwdW50b1wiLFxyXG4gICAgc2VsZWN0aW9uQnlMaW5lOlwiU2VsZXppb25lIHBlciBsaW5lYVwiLFxyXG4gICAgc2VsZWN0aW9uQnlQb2x5Z29uOlwiU2VsZXppb25lIHBlciBwb2xpZ29ub1wiLFxyXG4gICAgc2VsZWN0aW9uQnlSZWN0YW5ndWxhcjpcIlNlbGV6aW9uZSBwZXIgcmV0dGFuZ29sb1wiLFxyXG4gICAgc2VsZWN0aW9uQnlDaXJjbGU6XCJTZWxlemlvbmUgcGVyIGNlcmNoaW9cIixcclxuICAgIHJlZnJlc2g6XCJBZ2dpb3JuYXJlXCIsXHJcbiAgICBvazpcIk9LXCIsXHJcbiAgICBjYW5jZWw6XCJBbm51bGxhbWVudG9cIixcclxuICAgIGZpZWxkczpcIkNhbXBpXCIsXHJcbiAgICBzZWxlY3Rpb25BY3Rpb246XCJTZWxlemlvbmUgQXppb25lXCIsXHJcbiAgICBtYXBMb2FkaW5nOlwiSW4gYXR0ZXNhIGRlbCBjYXJpY2FtZW50byBkZWxsYSBtYXBwYS4uLlwiLFxyXG4gICAgbm9TZWxlY3RlZEl0ZW06XCJOb24gw6ggc3RhdGEgc2VsZXppb25hdGEgYWxjdW5hIHZvY2VcIixcclxuICAgIG5vSXRlbVNlbGVjdGVkOlwiTm9uIMOoIHN0YXRvIHRyb3ZhdG8gYWxjdW4gYXR0cmlidXRvIGRvcG8gbCdpbnRlcnJvZ2F6aW9uZVwiXHJcbn1cclxuIiwiY29uc3QgIHF1ZXJ5Q29uc3RydWN0b3JOdW1iZXIgPSBbXHJcbiAgICB7IG5hbWU6ICfDqCcsIHZhbHVlOiAnPScgfSxcclxuICAgIHsgbmFtZTogJ25vbiDDqCcsIHZhbHVlOiAnPD4nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCB1bm8gZGknLCB2YWx1ZTogJ0lOJyB9LCAvLyBPQkpFQ1RJRCBJTiAoMSwyLDMpXHJcbiAgICB7IG5hbWU6ICdub24gw6ggbmVzc3VubyBkaScsIHZhbHVlOiAnTk9UX0lOJyB9LCAvLyAgIE9CSkVDVElEIE5PVF9JTiAoMSwyLDMpXHJcbiAgICB7IG5hbWU6ICfDqCBhbG1lbm8nLCB2YWx1ZTogJzw9JyB9LFxyXG4gICAgeyBuYW1lOiAnw6ggYWwgbWFzc2ltbycsIHZhbHVlOiAnPj0nIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBtaW5vcmUgZGknLCB2YWx1ZTogJzwnIH0sXHJcbiAgICB7IG5hbWU6ICfDqCBtYWdnaW9yZSBkaScsIHZhbHVlOiAnPicgfSxcclxuICAgIHsgbmFtZTogJ8OoIHZ1b3RvJywgdmFsdWU6ICdpcyBudWxsJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIHZ1b3RvJywgdmFsdWU6ICdpcyBub3QgbnVsbCcgfSxcclxuICAgIHsgbmFtZTogJ8OoIGNvbXByZXNvIHRyYScsIHZhbHVlOiAnaW5jbHVkZWQnIH0sIC8vIE9CSkVDVElEIDwgMiBBTkQgT0JKRUNUSUQgPiA0XHJcbiAgICB7IG5hbWU6ICdub24gw6ggY29tcHJlc28gdHJhJywgdmFsdWU6ICdpc19ub3RfaW5jbHVkZWQnIH0gLy9kYSB0cm92YXJlXHJcbl07XHJcbmNvbnN0ICAgcXVlcnlDb25zdHJ1Y3RvclN0cmluZyA9IFtcclxuICAgIHsgbmFtZTogJ8OoJywgdmFsdWU6ICc9JyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoJywgdmFsdWU6ICc8PicgfSxcclxuICAgIHsgbmFtZTogJ8OoIHVubyBkaScsIHZhbHVlOiAnSU4nIH0sXHJcbiAgICB7IG5hbWU6ICdub24gw6ggbmVzc3VubyBkaScsIHZhbHVlOiAnTk9UX0lOJyB9LFxyXG4gICAgeyBuYW1lOiAnaW5pemlhIGNvbicsIHZhbHVlOiAnTElLRSUnIH0sXHJcbiAgICB7IG5hbWU6ICd0ZXJtaW5hIGNvbicsIHZhbHVlOiAnJUxJS0UnIH0sXHJcbiAgICB7IG5hbWU6ICdjb250aWVuZScsIHZhbHVlOiAnJUxJS0UlJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIGNvbnRpZW5lJywgdmFsdWU6ICdOT1QgTElLRScgfSxcclxuICAgIHsgbmFtZTogJ8OoIHZ1b3RvJywgdmFsdWU6ICdpcyBudWxsJyB9LFxyXG4gICAgeyBuYW1lOiAnbm9uIMOoIHZ1b3RvJywgdmFsdWU6ICdpcyBub3QgbnVsbCcgfVxyXG5dO1xyXG5leHBvcnQgeyBxdWVyeUNvbnN0cnVjdG9yTnVtYmVyLCBxdWVyeUNvbnN0cnVjdG9yU3RyaW5nIH0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9nZW9tZXRyeV9Qb2x5Z29uX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2VzcmlfZ2VvbWV0cnlfZ2VvbWV0cnlFbmdpbmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZXNyaV9sYXllcnNfR3JhcGhpY3NMYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9lc3JpX3Jlc3Rfc3VwcG9ydF9RdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfZG9tX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IFJlYWN0LCBBbGxXaWRnZXRQcm9wcywganN4LCBhcHBBY3Rpb25zIH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcImppbXUtaWNvbnMvb3V0bGluZWQvZWRpdG9yL2Nsb3NlXCI7XG5pbXBvcnQgeyBQbHVzT3V0bGluZWQgfSBmcm9tIFwiamltdS1pY29ucy9vdXRsaW5lZC9lZGl0b3IvcGx1c1wiO1xuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBTZWxlY3QsIE9wdGlvbiwgQWxlcnQsIEJ1dHRvbiwgSWNvbiB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XG5pbXBvcnQgeyBJTUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBRdWVyeSBmcm9tIFwiZXNyaS9yZXN0L3N1cHBvcnQvUXVlcnlcIjtcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vY29tcG9uZW50cy9UYWJsZVwiO1xuaW1wb3J0IGhlbHBlciBmcm9tIFwiLi4vY29ubmVjdG9yXCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwiZXNyaS9nZW9tZXRyeS9Qb2x5Z29uXCI7XG5pbXBvcnQgUmVhY3RSZXNpemVEZXRlY3RvciBmcm9tIFwiLi9saWIvUmVzaXplRGV0ZWN0b3JcIjtcbmltcG9ydCBBdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciBmcm9tIFwiLi4vY29ubmVjdG9yL2F0dHJpYnV0ZV90YWJsZV9jb25uZWN0b3JcIjtcbmltcG9ydCBnZW9tZXRyeUVuZ2luZSBmcm9tIFwiZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZVwiO1xuaW1wb3J0IEFkZFNldFRhYmxlIGZyb20gXCIuL2NvbXBvbmVudHMvQWRkU2V0VGFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LFxuICBhbnlcbj4ge1xuICBncmFwaGljTGF5ZXJGb3VuZCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6IFwiaGlkZVwiLCB2aXNpYmxlOiB0cnVlIH0pO1xuICBncmFwaGljTGF5ZXJTZWxlY3RlZCA9IG5ldyBHcmFwaGljc0xheWVyKHsgbGlzdE1vZGU6IFwiaGlkZVwiLCB2aXNpYmxlOiB0cnVlIH0pO1xuXG4gIHN0YXRpYyBhY3RpdmVWID0gbnVsbDtcbiAgc3RhdGljIGppbXVMYXllclZpZXd6ID0gbnVsbDtcbiAgc3RhdGljIGF0dHJpYnV0ZV90YWJsZV9kYXRhID0gbnVsbDtcbiAgc3RhdGljIGluaXRpYWxab29tID0gMDtcblxuICBhdHRyaWJ1dGVUYWJsZUNvbm5lY3RvciA9IG51bGw7XG4gIHF1ZXJ5QXJyYXkgPSBbXTtcbiAgb3V0ZmllbGRzID0gW107XG4gIGN1cnJlbnRMYXllclZpZXcgPSBudWxsO1xuICBzZXRRdWVyeUFycmF5ID0gW107XG4gIHNldE91dEZpZWxkcyA9IFtdO1xuICBzZXRRdWVyeVN0cmluZyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5hY3RpdmVWaWV3Q2hhbmdlSGFuZGxlciA9IHRoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAvL0xheWVyXG4gICAgdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyID0gdGhpcy5vbkNoYW5nZVNlbGVjdExheWVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVyeUF0dHJpYnV0ZSA9IHRoaXMuZ2V0UXVlcnlBdHRyaWJ1dGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFF1ZXJ5ID0gdGhpcy5nZXRRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZFF1ZXJ5ID0gdGhpcy5zZW5kUXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRRdWVyeVNldCA9IHRoaXMuc2VuZFF1ZXJ5U2V0LmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5ydW5ib3RoUXVlcmllcz0gdGhpcy5ydW5ib3RoUXVlcmllcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGhpcmRRdWVyeSA9IHRoaXMudGhpcmRRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZHJvcGRvd25JdGVtQ2xpY2sgPSB0aGlzLmRyb3Bkb3duSXRlbUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaG9vc2VBbmRPciA9IHRoaXMuY2hvb3NlQW5kT3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNob29zZUFuZE9yU2V0ID0gdGhpcy5jaG9vc2VBbmRPclNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VEcm9wID0gdGhpcy5jbG9zZURyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW5Ecm9wID0gdGhpcy5vcGVuRHJvcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VEcm9wT25jbGlja091dHNpZGUgPSB0aGlzLmNsb3NlRHJvcE9uY2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbm1vdXNlTGVhdmUgPSB0aGlzLm9ubW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycyA9IHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0QWxsSmltdUxheWVyVmlld3MgPSB0aGlzLmdldEFsbEppbXVMYXllclZpZXdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb25uZWN0b3JfZnVuY3Rpb24gPSB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZnVuY3Rpb25Db3VudGVySXNDaGVja2VkID0gdGhpcy5mdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFF1ZXJ5QXR0cmlidXRlU2V0ID0gdGhpcy5nZXRRdWVyeUF0dHJpYnV0ZVNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UXVlcnlTZXQgPSB0aGlzLmdldFF1ZXJ5U2V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNoYW5nZUNoZWNrQm94U2V0ID0gdGhpcy5vbkNoYW5nZUNoZWNrQm94U2V0LmJpbmQodGhpcyk7XG4gIH1cblxuICBpbml0ID0gKCkgPT4ge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBqaW11TWFwVmlldzogbnVsbCxcbiAgICAgIGxheWVyQ29udGVudHM6IFtdLFxuICAgICAgY2hlY2tlZExheWVyXzogW10sXG4gICAgICByZXN1bHRMYXllckxpc3Q6IFtdLFxuICAgICAgaXNMYXllclNlbGVjdGVkOiBmYWxzZSxcbiAgICAgIHJlc3VsdHNMYXllclNlbGVjdGVkOiBbXSxcbiAgICAgIGN1cnJlbnRUYXJnZXRUZXh0OiBudWxsLFxuICAgICAgZ2VvbWV0cnk6IG51bGwsXG4gICAgICB0eXBlU2VsZWN0ZWQ6IG51bGwsXG4gICAgICBsaXN0U2VydmljZXM6IFtdLFxuICAgICAgY3VycmVudEZpcnN0UXVlcnk6IFwiXCIsXG4gICAgICBjdXJyZW50Rmlyc3RRdWVyeVR5cGU6IG51bGwsXG4gICAgICBkcm9wZG93blZhbHVlUXVlcnk6IFwidmFsb3JlXCIsXG4gICAgICBmaXJzdFRleHRJbmNsdWRlZEhhbmRsZXI6IFwiMFwiLFxuICAgICAgc2Vjb25kVGV4dEluY2x1ZGVkSGFuZGxlcjogXCIwXCIsXG4gICAgICB0YWJsZXM6IFtdLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGNvdW50ZXJJc0NoZWNrZWQ6IFtdLFxuICAgICAgY2hlY2tlZFRvUXVlcnk6IFtdLFxuICAgICAgdGFibGVDb3VudGVyOiAwLFxuICAgICAgdGFibGVDb3VudGVyU2V0OiAwLFxuICAgICAgd2hlcmVDbGF1c2VzOiBbXSxcbiAgICAgIHRhYmxlc1NldElkOiBudWxsLFxuICAgICAgd2hlcmVDbGF1c2VTZXQ6IFtdLFxuICAgICAgdGFibGVzU2V0OiBbXSxcbiAgICAgIHRhYmxlc0lkOiBudWxsLFxuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIEFuZE9yOiBcIkFORFwiLFxuICAgICAgQW5kT3JTZXQ6IFwiQU5EXCIsXG4gICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgYXV0T3BlbjogdHJ1ZSxcbiAgICAgIG1vdXNlbGVhdmU6IGZhbHNlLFxuICAgICAgZHJvcERvd25zOiB7fSxcbiAgICAgIGRyb3BEb3duc1NldDoge30sXG4gICAgICBoaWdobGlnaHRJZHM6IFtdLFxuICAgICAgc2VsZWN0ZWRGaWVsZDogbnVsbCxcbiAgICAgIG90aGVyUXVlcmllc1ZhbHVlOiB7fSxcbiAgICAgIGRyb3BJZDogbnVsbCxcbiAgICAgIGRyb3BJZFNldDogbnVsbCxcbiAgICAgIGhpZ2xpZ2h0U2VsZWN0ZWQ6IFtdLFxuICAgICAgaXRlbU5vdEZvdW5kOiBudWxsLFxuICAgICAgY3VycmVudFNlbGVjdGVkSWQ6IFwiIFwiLFxuICAgICAgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogZmFsc2UsXG4gICAgICB3aWRnZXRTdGF0ZUNsb3NlZENoZWNrZWQ6IGZhbHNlLFxuICAgICAgd2lkZ2V0U3RhdGVPcGVuZWRDaGVja2VkOiBmYWxzZSxcbiAgICAgIHNob3dBZGRTZWxlY3Q6IHRydWUsXG4gICAgICBTZXRCbG9jazogW10sXG4gICAgICBzZWxlY3RlZElkOiBudWxsLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgfTtcbiAgfTtcblxuICBubHMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmludGxcbiAgICAgID8gdGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzW2lkXSxcbiAgICAgICAgfSlcbiAgICAgIDogaWQ7XG4gIH07XG5cbiAgYWN0aXZlVmlld0NoYW5nZUhhbmRsZXIoam12OiBKaW11TWFwVmlldykge1xuICAgIGlmIChqbXYpIHtcbiAgICAgIGptdi52aWV3Lm1hcC5hZGQodGhpcy5ncmFwaGljTGF5ZXJGb3VuZCk7XG4gICAgICBqbXYudmlldy5tYXAuYWRkKHRoaXMuZ3JhcGhpY0xheWVyU2VsZWN0ZWQpO1xuICAgICAgY29uc3QgcmVzdWx0TGF5ZXJMaXN0ID0gW107XG4gICAgICBqbXYudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChmLnR5cGUgPT09IFwiZmVhdHVyZVwiKSB7XG4gICAgICAgICAgam12LnZpZXcud2hlbkxheWVyVmlldyhmKS50aGVuKChsYXllclZpZXcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IFwiMT0xXCI7XG4gICAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbXCIqXCJdO1xuICAgICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHsgd2hlcmU6IHF1ZXJ5LndoZXJlIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzdWx0TGF5ZXJMaXN0LnB1c2goe1xuICAgICAgICAgICAgZWxlbWVudDogZixcbiAgICAgICAgICAgIGxhYmVsOiBmLnRpdGxlLFxuICAgICAgICAgICAgdmFsdWU6IGluZGV4LFxuICAgICAgICAgICAgbGF5ZXJJRDogZi5pZCxcbiAgICAgICAgICAgIHVybFNlcnZpY2VTZXJ2ZXI6IGYudXJsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFdpZGdldC5hY3RpdmVWID0gam12O1xuICAgICAgV2lkZ2V0LmppbXVMYXllclZpZXd6ID0gam12Py5qaW11TGF5ZXJWaWV3cztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHRMYXllckxpc3Q6IHJlc3VsdExheWVyTGlzdCwgamltdU1hcFZpZXc6IGptdiB9KTtcbiAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IgPSBuZXcgQXR0cmlidXRlVGFibGVDb25uZWN0b3Ioam12LCB0aGlzKTtcbiAgICAgIFdpZGdldC5pbml0aWFsWm9vbSA9IGptdi52aWV3Lnpvb207XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNMYXllclNlbGVjdGVkICE9PSBwcmV2UHJvcHMuaXNMYXllclNlbGVjdGVkKSB7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcyAhPT0gcHJldlByb3BzLndoZXJlQ2xhdXNlcykge1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge31cbiAgLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgKiBFVkVOVCBDTElDSyBTRUxFQ1RcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gIHJlbW92ZVZhbHVlRnJvbU9iamVjdChvYmopIHtcbiAgICBsZXQgbmV3V2hlcmVDbGF1c2UgPSBvYmo7XG4gICAgaWYgKG9iaj8uaWZJbk9yTm90SW5RdWVyeVZhbHVlKSB7XG4gICAgICBuZXdXaGVyZUNsYXVzZSA9IHtcbiAgICAgICAgaWQ6IG9iai5pZCxcbiAgICAgICAgYXR0cmlidXRlUXVlcnk6IG9iai5hdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBvYmouYXR0cmlidXRlUXVlcnlUeXBlLFxuICAgICAgICBxdWVyeVZhbHVlOiBvYmoucXVlcnlWYWx1ZSxcbiAgICAgICAgaWZJbk9yTm90SW5RdWVyeVZhbHVlOiBvYmouaWZJbk9yTm90SW5RdWVyeVZhbHVlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3V2hlcmVDbGF1c2UgPSB7XG4gICAgICAgIGlkOiBvYmouaWQsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBvYmouYXR0cmlidXRlUXVlcnksXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogb2JqLmF0dHJpYnV0ZVF1ZXJ5VHlwZSxcbiAgICAgICAgcXVlcnlWYWx1ZTogb2JqLnF1ZXJ5VmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbmV3V2hlcmVDbGF1c2U7XG4gIH1cblxuICBhc3luYyBnZXRRdWVyeUF0dHJpYnV0ZShlKSB7XG4gICAgbGV0IGN1cnJlbnRXaGVyZUNsYXVzZTtcbiAgICBpZiAoIXRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmxlbmd0aCkge1xuICAgICAgbGV0IHdoZXJlQ2xhdXNlID0ge1xuICAgICAgICBpZDogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBlLmN1cnJlbnRUYXJnZXQubmFtZSxcbiAgICAgICAgYXR0cmlidXRlUXVlcnlUeXBlOiBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlcy5kYXRhdHlwZS52YWx1ZSxcbiAgICAgICAgcXVlcnlWYWx1ZTogXCI9XCIsXG4gICAgICB9O1xuICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2U7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgd2hlcmVDbGF1c2VzOiBbd2hlcmVDbGF1c2VdIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNcbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpIHtcbiAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YXR5cGUudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2JqID0gdGhpcy5yZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlID0gb2JqO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgd2hlcmVDbGF1c2UgPSB7XG4gICAgICAgICAgaWQ6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlLFxuICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBlLmN1cnJlbnRUYXJnZXQubmFtZSxcbiAgICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmRhdGF0eXBlLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgICAvLyB3aGVyZUNsYXVzZSA9IHRoaXMucmVtb3ZlVmFsdWVGcm9tT2JqZWN0KHdoZXJlQ2xhdXNlKVxuICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSB3aGVyZUNsYXVzZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgd2hlcmVDbGF1c2VzOiBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMsIHdoZXJlQ2xhdXNlXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmllbGQ6IGUuY3VycmVudFRhcmdldC5uYW1lIH0sICgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50V2hlcmVDbGF1c2UpXG4gICAgICAgIHRoaXMubWFuaXB1bGF0ZUZpZWxkUXVlcnkoXG4gICAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlLnF1ZXJ5VmFsdWUsXG4gICAgICAgICAgY3VycmVudFdoZXJlQ2xhdXNlLmlkLFxuICAgICAgICAgIFwic2luZ2xlXCJcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldFF1ZXJ5QXR0cmlidXRlU2V0KGUpIHtcbiAgICBsZXQgY3VycmVudFdoZXJlQ2xhdXNlO1xuICAgIGlmICghdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5sZW5ndGgpIHtcbiAgICAgIGxldCB3aGVyZUNsYXVzZVNldCA9IHtcbiAgICAgICAgaWQ6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlLFxuICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YXR5cGUudmFsdWUsXG4gICAgICAgIHF1ZXJ5VmFsdWU6IFwiPVwiLFxuICAgICAgfTtcbiAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZSA9IHdoZXJlQ2xhdXNlU2V0O1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoZXJlQ2xhdXNlU2V0OiBbd2hlcmVDbGF1c2VTZXRdIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0XG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgICAuaW5kZXhPZihlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZSk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0Lm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWUpIHtcbiAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeTogZS5jdXJyZW50VGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5VHlwZTogZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXMuZGF0YXR5cGUudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb2JqID0gdGhpcy5yZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maWx0ZXIoXG4gICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSBvYmo7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IHdoZXJlQ2xhdXNlU2V0OiBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgd2hlcmVDbGF1c2VTZXQgPSB7XG4gICAgICAgICAgaWQ6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzFdLnZhbHVlLFxuICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5OiBlLmN1cnJlbnRUYXJnZXQubmFtZSxcbiAgICAgICAgICBhdHRyaWJ1dGVRdWVyeVR5cGU6IGUuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzLmRhdGF0eXBlLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UgPSB3aGVyZUNsYXVzZVNldDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IFsuLi50aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LCB3aGVyZUNsYXVzZVNldF0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmllbGQ6IGUuY3VycmVudFRhcmdldC5uYW1lIH0sICgpID0+IHtcbiAgICAgIHRoaXMubWFuaXB1bGF0ZUZpZWxkUXVlcnkoXG4gICAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZS5xdWVyeVZhbHVlLFxuICAgICAgICBjdXJyZW50V2hlcmVDbGF1c2UuaWQsXG4gICAgICAgIFwic2V0XCJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBmb3IgY2FsbGVkIG9uIGRyb3Agc2VsZWN0IGxpc3RcbiAgYXN5bmMgZ2V0UXVlcnkoZSwgdHlwZSA9IFwic2luZ2xlXCIpIHtcbiAgICBjb25zdCBjbGlja2VkUXVlcnlUYWJsZUlkID0gZS5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbMV0udmFsdWU7XG4gICAgY29uc3QgY3VycmVudFRhcmdldE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQubmFtZTtcbiAgICB0aGlzLm1hbmlwdWxhdGVGaWVsZFF1ZXJ5KGN1cnJlbnRUYXJnZXROYW1lLCBjbGlja2VkUXVlcnlUYWJsZUlkLCB0eXBlKTtcbiAgfVxuXG4gIGFzeW5jIG1hbmlwdWxhdGVGaWVsZFF1ZXJ5KFxuICAgIGN1cnJlbnRUYXJnZXROYW1lOiBzdHJpbmcsXG4gICAgY2xpY2tlZFF1ZXJ5VGFibGVJZDogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZ1xuICApIHtcbiAgICBsZXQgcXVlcnlJbmRleCA9IC0xO1xuICAgIGxldCBjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlID0gXCIgXCI7XG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGNvbnN0IGtleXR5cGUgPSB0eXBlID09PSBcInNpbmdsZVwiID8gXCJ3aGVyZUNsYXVzZXNcIiA6IFwid2hlcmVDbGF1c2VTZXRcIjtcbiAgICBpZiAodGhpcy5zdGF0ZVtrZXl0eXBlXS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlW2tleXR5cGVdXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgICAuaW5kZXhPZihjbGlja2VkUXVlcnlUYWJsZUlkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5dHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBjbGlja2VkUXVlcnlUYWJsZUlkKSB7XG4gICAgICAgICAgICBjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlID0gb2JqLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgICAgLy8gb2JqID0gdGhpcy5yZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKVxuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIHF1ZXJ5VmFsdWU6IGN1cnJlbnRUYXJnZXROYW1lIH07XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlW2tleXR5cGVdLmZpbHRlcihcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgW2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudFRhcmdldE5hbWUgPT09IFwiSU5cIiB8fCBjdXJyZW50VGFyZ2V0TmFtZSA9PT0gXCJOT1RfSU5cIikge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Y3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZX0gaXMgbm90IG51bGxgO1xuICAgICAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Y3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZX1gXTtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGYucXVlcnlGZWF0dXJlcyhxdWVyeSk7XG4gICAgICAgICAgICAgIHJlc3VsdHMudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsVGhpcmRRdWVyeSA9IFtdO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZGV0YWlsVGhpcmRRdWVyeS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGVsLmF0dHJpYnV0ZXNbY3VycmVudENsaWNrZWRRdWVyeUF0dHJpYnV0ZV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlbC5hdHRyaWJ1dGVzW2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGVdLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRldGFpbFRoaXJkUXVlcnlbMF0udmFsdWUgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsVGhpcmRRdWVyeS5zb3J0KChhLCBiKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIGEubGFiZWwgPCBiLmxhYmVsID8gLTEgOiBhLmxhYmVsID4gYi5sYWJlbCA/IDEgOiAwXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnNvcnQoKGEsIGIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgYS52YWx1ZSAtIGIudmFsdWUgPCAwID8gLTEgOiBhLnZhbHVlID09PSBiLnZhbHVlID8gMCA6IDFcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmlkID09PSBjbGlja2VkUXVlcnlUYWJsZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gb2JqID0gdGhpcy5yZW1vdmVWYWx1ZUZyb21PYmplY3Qob2JqKVxuICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpZkluT3JOb3RJblF1ZXJ5VmFsdWU6IGRldGFpbFRoaXJkUXVlcnkgfTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZXMgPSB0aGlzLnN0YXRlW2tleXR5cGVdLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtrZXl0eXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGtleXR5cGUgPT09IFwid2hlcmVDbGF1c2VTZXRcIikge1xuICAgICAgaWYgKG5ld1doZXJlU2V0Q2xhdXNlPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlID0gbmV3V2hlcmVTZXRDbGF1c2UuZmluZChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gY2xpY2tlZFF1ZXJ5VGFibGVJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soXG4gICAgICAgICAgY2xpY2tlZFF1ZXJ5VGFibGVJZCxcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRRdWVyeVNldChlLCB0eXBlID0gXCJzaW5nbGVcIikge1xuICAgIGNvbnN0IGNsaWNrZWRRdWVyeVRhYmxlSWQgPSBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1sxXS52YWx1ZTtcbiAgICBjb25zdCBjdXJyZW50VGFyZ2V0TmFtZSA9IGUuY3VycmVudFRhcmdldC5uYW1lO1xuICAgIHRoaXMubWFuaXB1bGF0ZUZpZWxkUXVlcnkoY3VycmVudFRhcmdldE5hbWUsIGNsaWNrZWRRdWVyeVRhYmxlSWQsIFwic2V0XCIpO1xuICB9XG5cbiAgLy9UT0RPIGxhIHNlbmRRdWVyeSBhbmRyw6AgcmlzaXN0ZW1hdGEgcXVhbmRvIHNpIGFnZ2l1bmdlcsOgIG9sdHJlIGFsbCdlc3ByZXNzaW9uZSBhbmNoZSBpbCBzZXQgZGkgZXNwcmVzc2lvbmlcbiAgLy8gcGVyY2jDqSBvcmEgcGVyIGwnQU5EIGZhIGlsIGNpY2xvIGZvciBzdSBvZ25pIHdoZXJlIGluc2VyaXRhIG5lbGwnYXJyYXkgbWEgZG9wbyBzYXLDoCBuZWNlc3NhcmlvIHNjb21wb3JyZSBwZXIgY3JlYXJlIGxlIGVzcHJlc3Npb25pXG5cbiAgLy8gc3RlcDFcbiAgYXN5bmMgc2VuZFF1ZXJ5KCkge1xuICAgIHRoaXMucXVlcnlBcnJheSA9IFtdO1xuICAgIHRoaXMub3V0ZmllbGRzID0gW107XG4gICAgY29uc3QgY2hlY2tlZFF1ZXJ5ID0gW1xuICAgICAgXCJpcyBudWxsXCIsXG4gICAgICBcImlzIG5vdCBudWxsXCIsXG4gICAgICBcIklOXCIsXG4gICAgICBcIk5PVF9JTlwiLFxuICAgICAgXCJpbmNsdWRlZFwiLFxuICAgICAgXCJpc19ub3RfaW5jbHVkZWRcIixcbiAgICBdO1xuICAgIGNvbnN0IGxpa2VseVF1ZXJ5ID0gW1wiTElLRSVcIiwgXCIlTElLRVwiLCBcIiVMSUtFJVwiLCBcIk5PVCBMSUtFXCJdO1xuICAgIGlmICh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLkFuZE9yID09PSBcIkFORFwiKSB7XG4gICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZvckVhY2goKGVsLCBpZCkgPT4ge1xuICAgICAgICAgIGxldCBhdHRyaWJ1dGVRdWVyeSA9IGVsLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgIGxldCBxdWVyeVZhbHVlID0gZWwucXVlcnlWYWx1ZTtcbiAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiaXMgbnVsbFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXMgbm90IG51bGxcIikge1xuICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChxdWVyeVZhbHVlID09PSBcIklOXCIgfHwgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIikge1xuICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgIGVsLmNoZWNrZWRMaXN0LmZvckVhY2goKGVsKSA9PiB2YWx1ZS5wdXNoKGVsLmNoZWNrVmFsdWUpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8XG4gICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImlzX25vdF9pbmNsdWRlZFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgZmlyc3RUeHQ6IGVsLmZpcnN0VHh0LnZhbHVlLFxuICAgICAgICAgICAgICBzZWNvbmRUeHQ6IGVsLnNlY29uZFR4dC52YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlPy50eHQgPz8gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3XG4gICAgICAgICAgICAgICAgICAud2hlbkxheWVyVmlldyhmKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgLy9zdGVwIDIgc3RhcnQgcXVlcnlpbmdcbiAgICAgICAgICAgICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLkFuZE9yLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGZcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5OiBhbnkgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZm9yRWFjaCgoZWwsIGlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkoKTtcbiAgICAgICAgICBsZXQgYXR0cmlidXRlUXVlcnkgPSBlbC5hdHRyaWJ1dGVRdWVyeTtcbiAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IGVsLnF1ZXJ5VmFsdWU7XG4gICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgIGlmIChxdWVyeVZhbHVlID09PSBcImlzIG51bGxcIiB8fCBxdWVyeVZhbHVlID09PSBcImlzIG5vdCBudWxsXCIpIHtcbiAgICAgICAgICAgIGxldCBxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9ICR7cXVlcnlWYWx1ZX1gO1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUluO1xuICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiAmJiBlbC5jaGVja2VkTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgZWwuY2hlY2tlZExpc3QuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJOT1RfSU5cIiAmJlxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWQubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkLmZvckVhY2goKGVsKSA9PlxuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gSU4gKCR7XG4gICAgICAgICAgICAgICAgXCInXCIgKyB2YWx1ZS5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXG4gICAgICAgICAgICAgIH0pYDtcbiAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUluO1xuICAgICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGV0IHF1ZXJ5SW4gPSBgJHthdHRyaWJ1dGVRdWVyeX0gSU4gKCR7dmFsdWUuam9pbihcIixcIil9KWA7XG4gICAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gcXVlcnlJbjtcbiAgICAgICAgICAgICAgbm9ybWFsaXplZFdoZXJlVG9TZW5kUXVlcnkucHVzaChxdWVyeUluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiaW5jbHVkZWRcIiB8fCBxdWVyeVZhbHVlID09PSBcImlzX25vdF9pbmNsdWRlZFwiKSB7XG4gICAgICAgICAgICBsZXQgcXVlcnlJbjtcbiAgICAgICAgICAgIHF1ZXJ5VmFsdWUgPT09IFwiaW5jbHVkZWRcIlxuICAgICAgICAgICAgICA/IChxdWVyeUluID0gYCR7YXR0cmlidXRlUXVlcnl9ID4gJHtlbC5maXJzdFR4dC52YWx1ZX0gQU5EICR7YXR0cmlidXRlUXVlcnl9IDwgJHtlbC5zZWNvbmRUeHQudmFsdWV9YClcbiAgICAgICAgICAgICAgOiAocXVlcnlJbiA9IGAke2F0dHJpYnV0ZVF1ZXJ5fSA8ICR7ZWwuZmlyc3RUeHQudmFsdWV9IE9SICR7YXR0cmlidXRlUXVlcnl9ID4gJHtlbC5zZWNvbmRUeHQudmFsdWV9YCk7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IHF1ZXJ5SW47XG4gICAgICAgICAgICBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeS5wdXNoKHF1ZXJ5SW4pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XG4gICAgICAgICAgICBpZiAobGlrZWx5UXVlcnkuaW5jbHVkZXMocXVlcnlWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBoZWxwZXIubGlrZWx5UXVlcnkoXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlUXVlcnksXG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCBxdWVyeUlucHV0ID0gYCR7YXR0cmlidXRlUXVlcnl9ICR7cXVlcnlWYWx1ZX0gJyR7dmFsdWV9J2A7XG4gICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUlucHV0O1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbnB1dCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHF1ZXJ5SW5wdXQgPSBgJHthdHRyaWJ1dGVRdWVyeX0gJHtxdWVyeVZhbHVlfSAke3ZhbHVlfWA7XG4gICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBxdWVyeUlucHV0O1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRXaGVyZVRvU2VuZFF1ZXJ5LnB1c2gocXVlcnlJbnB1dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWxsTGF5ZXJzLmZvckVhY2goKGYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3XG4gICAgICAgICAgICAgICAgICAud2hlbkxheWVyVmlldyhmKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdDogXCJPUlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxheWVyOiBmLFxuICAgICAgICAgICAgICAgICAgICAgIEFuZE9yOiB0aGlzLnN0YXRlLkFuZE9yLFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgICB0aGlzLnF1ZXJ5QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hbGxMYXllcnMuZm9yRWFjaCgoZiwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoZi50aXRsZSA9PT0gdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICAgICAgcXVlcnk6IG5ldyBRdWVyeSgpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdDogbnVsbCxcbiAgICAgICAgICAgICAgICBsYXllcjogZixcbiAgICAgICAgICAgICAgICBBbmRPcjogdGhpcy5zdGF0ZS5BbmRPcixcbiAgICAgICAgICAgICAgICBmaWVsZDogbnVsbCxcbiAgICAgICAgICAgICAgICBzb3VyY2U6IFwic2V0UXVlcnlcIixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiB0cnVlIH0pO1xuICAgICAgdGhpcy5yZXR1cm5Ub09yaWdpbmFsRXh0ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UXVlcnlDb25zdHJ1Y3RvciA9IChxdWVyeVJlcXVlc3QsIGZpcnN0UXVlcnksIHNlY29uZFF1ZXJ5VGFyZ2V0KSA9PiB7XG4gICAgc3dpdGNoIChxdWVyeVJlcXVlc3QpIHtcbiAgICAgIGNhc2UgXCJMSUtFJVwiOlxuICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XG4gICAgICBjYXNlIFwiJUxJS0VcIjpcbiAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IExJS0UgJyUke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xuICAgICAgY2FzZSBcIiVMSUtFJVwiOlxuICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xuICAgICAgY2FzZSBcIk5PVCBMSUtFXCI6XG4gICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBOT1QgTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9JSdgO1xuICAgICAgY2FzZSBcImlzIG51bGxcIjpcbiAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IGlzIG51bGxgO1xuICAgICAgY2FzZSBcImlzIG5vdCBudWxsXCI6XG4gICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBpcyBub3QgbnVsbGA7XG4gICAgICBjYXNlIFwiSU5cIjpcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNBbnlMZXR0ZXJzKHNlY29uZFF1ZXJ5VGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtcbiAgICAgICAgICAgIFwiJ1wiICsgc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIicsICdcIikgKyBcIidcIlxuICAgICAgICAgIH0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5jaGVja1BhcmVudGhlc2lzKHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gdGhpcy5sb29wVG9HZXRTdHJpbmcoc2Vjb25kUXVlcnlUYXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IElOICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgY2FzZSBcIk5PVF9JTlwiOlxuICAgICAgICBpZiAodGhpcy5jb250YWluc0FueUxldHRlcnMoc2Vjb25kUXVlcnlUYXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuIGBOT1QgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtcbiAgICAgICAgICAgIFwiJ1wiICsgc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIicsICdcIikgKyBcIidcIlxuICAgICAgICAgIH0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5jaGVja1BhcmVudGhlc2lzKHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gdGhpcy5sb29wVG9HZXRTdHJpbmcoc2Vjb25kUXVlcnlUYXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuIGBOT1QgICR7Zmlyc3RRdWVyeX0gSU4gKCR7c3RyaW5nRmllZFZhbHVlfSlgO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYE5PVCAgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGNhc2UgXCJpbmNsdWRlZFwiOlxuICAgICAgICByZXR1cm4gYCgke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5maXJzdFR4dH0gQU5EICR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH0pYDtcbiAgICAgIGNhc2UgXCJpc19ub3RfaW5jbHVkZWRcIjpcbiAgICAgICAgcmV0dXJuIGAoJHtmaXJzdFF1ZXJ5fSA8ICR7c2Vjb25kUXVlcnlUYXJnZXQuZmlyc3RUeHR9IE9SICR7Zmlyc3RRdWVyeX0gPiAke3NlY29uZFF1ZXJ5VGFyZ2V0LnNlY29uZFR4dH0pYDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm4gYCR7Zmlyc3RRdWVyeX0gJHtxdWVyeVJlcXVlc3R9ICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSdgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgJHtmaXJzdFF1ZXJ5fSAke3F1ZXJ5UmVxdWVzdH0gJHtzZWNvbmRRdWVyeVRhcmdldH1gO1xuICAgICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHNlbmRRdWVyeVNldCgpIHtcbiAgICBjb25zdCBjaGVja2VkUXVlcnkgPSBbXG4gICAgICBcImlzIG51bGxcIixcbiAgICAgIFwiaXMgbm90IG51bGxcIixcbiAgICAgIFwiSU5cIixcbiAgICAgIFwiTk9UX0lOXCIsXG4gICAgICBcImluY2x1ZGVkXCIsXG4gICAgICBcImlzX25vdF9pbmNsdWRlZFwiLFxuICAgIF07XG4gICAgY29uc3QgbGlrZWx5UXVlcnkgPSBbXCJMSUtFJVwiLCBcIiVMSUtFXCIsIFwiJUxJS0UlXCIsIFwiTk9UIExJS0VcIl07XG4gICAgbGV0IHNldFF1ZXJ5U3RyaW5nID0gbnVsbDtcbiAgICBsZXQgb3V0RmllbGRzID0gW107XG4gICAgaWYgKHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoKSB7XG4gICAgICB0aGlzLnN0YXRlLlNldEJsb2NrLmZvckVhY2goKGJsb2NrLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGJsb2NrSWQgPSBibG9jaz8uYmxvY2tJZDtcbiAgICAgICAgY29uc3Qgd2hlcmVDbGF1c2VTZXQgPSBibG9ja1tgJHtibG9ja0lkfWBdO1xuICAgICAgICBjb25zdCBBbmRPclNldCA9IGJsb2NrPy5BbmRPclNldDtcbiAgICAgICAgaWYgKEFuZE9yU2V0ID09PSBcIkFORFwiKSB7XG4gICAgICAgICAgaWYgKHdoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0LmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVRdWVyeSA9IGVsLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IGVsLnF1ZXJ5VmFsdWU7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiaXMgbnVsbFwiIHx8IHF1ZXJ5VmFsdWUgPT09IFwiaXMgbm90IG51bGxcIikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBlbC5jaGVja2VkTGlzdFNldC5mb3JFYWNoKChlbCkgPT4gdmFsdWUucHVzaChlbC5jaGVja1ZhbHVlKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpbmNsdWRlZFwiIHx8XG4gICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSA9PT0gXCJpc19ub3RfaW5jbHVkZWRcIlxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHtcbiAgICAgICAgICAgICAgICAgIGZpcnN0VHh0OiBlbC5maXJzdFR4dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIHNlY29uZFR4dDogZWwuc2Vjb25kVHh0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNoZWNrZWRRdWVyeS5pbmNsdWRlcyhxdWVyeVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU/LnR4dCA/PyBcIlwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZXRRdWVyeVN0cmluZykge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nICs9IHRoaXMuc2V0UXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyA9IHRoaXMuc2V0UXVlcnlDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VmFsdWUsXG4gICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVRdWVyeSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoaiA8IHdoZXJlQ2xhdXNlU2V0Lmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gXCIgIFwiICsgQW5kT3JTZXQgKyBcIiAgXCI7XG4gICAgICAgICAgICAgIG91dEZpZWxkcy5wdXNoKGAke2F0dHJpYnV0ZVF1ZXJ5fWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBub3JtYWxpemVkV2hlcmVUb1NlbmRRdWVyeTogYW55ID0gW107XG4gICAgICAgICAgaWYgKHdoZXJlQ2xhdXNlU2V0Py5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0LmZvckVhY2goKGVsLCBqKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVRdWVyeSA9IGVsLmF0dHJpYnV0ZVF1ZXJ5O1xuICAgICAgICAgICAgICBsZXQgcXVlcnlWYWx1ZSA9IGVsLnF1ZXJ5VmFsdWU7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5VmFsdWUgPT09IFwiSU5cIiB8fCBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlWYWx1ZSA9PT0gXCJJTlwiICYmIGVsLmNoZWNrZWRMaXN0U2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgZWwuY2hlY2tlZExpc3RTZXQuZm9yRWFjaCgoZWwpID0+IHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcIk5PVF9JTlwiICYmXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWQubGVuZ3RoXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWQuZm9yRWFjaCgoZWwpID0+XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goZWwuY2hlY2tWYWx1ZSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImluY2x1ZGVkXCIgfHxcbiAgICAgICAgICAgICAgICBxdWVyeVZhbHVlID09PSBcImlzX25vdF9pbmNsdWRlZFwiXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgZmlyc3RUeHQ6IGVsLmZpcnN0VHh0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgc2Vjb25kVHh0OiBlbC5zZWNvbmRUeHQudmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghY2hlY2tlZFF1ZXJ5LmluY2x1ZGVzKHF1ZXJ5VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZT8udHh0ID8/IFwiXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHNldFF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gdGhpcy5zZXRRdWVyeUNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFF1ZXJ5U3RyaW5nID0gdGhpcy5zZXRRdWVyeUNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgICAgcXVlcnlWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChqIDwgd2hlcmVDbGF1c2VTZXQubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyArPSBcIiAgXCIgKyBBbmRPclNldCArIFwiICBcIjtcbiAgICAgICAgICAgICAgb3V0RmllbGRzLnB1c2goYCR7YXR0cmlidXRlUXVlcnl9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldFF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuU2V0QmxvY2tbaSArIDFdKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0QmxvY2sgPSB0aGlzLnN0YXRlLlNldEJsb2NrW2kgKyAxXTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRCbG9ja0lkID0gbmV4dEJsb2NrPy5ibG9ja0lkO1xuICAgICAgICAgICAgY29uc3QgbmV4dFdoZXJlQ2xhdXNlU2V0ID0gbmV4dEJsb2NrW2Ake25leHRCbG9ja0lkfWBdO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAoaSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoID49IDIgJiZcbiAgICAgICAgICAgICAgICBuZXh0V2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aCkgfHxcbiAgICAgICAgICAgICAgIVtcIihcIl0uaW5jbHVkZXMoc2V0UXVlcnlTdHJpbmdbMF0pXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgPSBcIihcIiArIHNldFF1ZXJ5U3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpIDwgdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgIG5leHRXaGVyZUNsYXVzZVNldD8ubGVuZ3RoXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc2V0UXVlcnlTdHJpbmcgKz0gXCIgKSBcIiArIHRoaXMuc3RhdGUuQW5kT3IgKyBcIiAoIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5TZXRCbG9ja1tpIC0gMV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZCbG9jayA9IHRoaXMuc3RhdGUuU2V0QmxvY2tbaSAtIDFdO1xuICAgICAgICAgICAgY29uc3QgcHJldkJsb2NrSWQgPSBwcmV2QmxvY2s/LmJsb2NrSWQ7XG4gICAgICAgICAgICBjb25zdCBwcmV2V2hlcmVDbGF1c2VTZXQgPSBwcmV2QmxvY2tbYCR7cHJldkJsb2NrSWR9YF07XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RoID49IDIgJiZcbiAgICAgICAgICAgICAgaSA9PT0gdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgIHByZXZXaGVyZUNsYXVzZVNldC5sZW5ndGhcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzZXRRdWVyeVN0cmluZyA9IHNldFF1ZXJ5U3RyaW5nICsgXCIpXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2V0UXVlcnlTdHJpbmcsIG91dEZpZWxkcyB9O1xuICB9XG5cbiAgYXN5bmMgdGhpcmRRdWVyeShlKSB7XG4gICAgY29uc3QgY3VycmVudFF1ZXJ5VGVzdCA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDtcbiAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGYudGl0bGUgPT09IHRoaXMuc3RhdGUuY3VycmVudFRhcmdldFRleHQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LndoZW5MYXllclZpZXcoZikudGhlbigobGF5ZXJWaWV3KSA9PiB7XG4gICAgICAgICAgdGhpcy5pblF1ZXJ5Q29uc3RydWN0b3IoXG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRGaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50U2Vjb25kUXVlcnksXG4gICAgICAgICAgICBjdXJyZW50UXVlcnlUZXN0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBvbkNoYW5nZVNlbGVjdExheWVyKGUpIHtcbiAgICB0aGlzLmdyYXBoaWNMYXllckZvdW5kLnJlbW92ZUFsbCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZi50aXRsZSA9PT0gZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCkge1xuICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy53aGVuTGF5ZXJWaWV3KGYpLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHJlc3VsdHNMYXllclNlbGVjdGVkOiBmLFxuICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0VGV4dDogZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkSWQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICAgICAgYXBwQWN0aW9ucy53aWRnZXRTdGF0ZVByb3BDaGFuZ2UoXCJ2YWx1ZVwiLCBcImNoZWNrZWRMYXllcnNcIiwgW2YuaWRdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkVGFibGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudElkID0gdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWJsZXM6IFtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS50YWJsZXMsXG4gICAgICAgIHsgaWQ6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyLCBkZWxldGVkOiBmYWxzZSB9LFxuICAgICAgXSxcbiAgICAgIHRhYmxlQ291bnRlcjogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgKyAxLFxuICAgICAgZHJvcERvd25zOiB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zLCBbY3VycmVudElkXTogZmFsc2UgfSxcbiAgICB9KTtcbiAgICBjb25zdCB0YWJsZUxlbmd0aCA9IHRoaXMuc3RhdGUudGFibGVzXG4gICAgICAubWFwKChlbCwgaWR4KSA9PiAoZWwuZGVsZXRlZCA9PSBmYWxzZSA/IGlkeCA6IFwiXCIpKVxuICAgICAgLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcbiAgICBjb25zdCB0YWJsZXNTZXRMZW5ndGggPSB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aDtcbiAgICBpZiAodGFibGVMZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRhYmxlc1NldExlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgYWRkVHdvVGFibGUgPSAoYmxvY2tJZCkgPT4ge1xuICAgIGxldCBuZXdTdGF0ZUJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xuICAgIGNvbnN0IGluZGV4ID0gbmV3U3RhdGVCbG9jay5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uYmxvY2tJZCA9PT0gYmxvY2tJZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgY3VycmVudEJsb2NrID0gbmV3U3RhdGVCbG9ja1tpbmRleF07XG4gICAgICBjb25zdCBjdXJyZW50SWQgPSBjdXJyZW50QmxvY2tbXCJ0YWJsZUNvdW50ZXJTZXRcIl07XG4gICAgICBjdXJyZW50QmxvY2tbXCJ0YWJsZXNTZXRcIl0gPSBbXG4gICAgICAgIC4uLmN1cnJlbnRCbG9ja1tcInRhYmxlc1NldFwiXSxcbiAgICAgICAgeyBpZDogY3VycmVudElkLCBkZWxldGVkOiBmYWxzZSB9LFxuICAgICAgXTtcbiAgICAgIGN1cnJlbnRCbG9ja1tcImRyb3BEb3duc1NldFwiXSA9IHtcbiAgICAgICAgLi4uY3VycmVudEJsb2NrW1wiZHJvcERvd25zU2V0XCJdLFxuICAgICAgICBbY3VycmVudElkXTogZmFsc2UsXG4gICAgICB9O1xuICAgICAgY3VycmVudEJsb2NrW1widGFibGVDb3VudGVyU2V0XCJdID0gY3VycmVudEJsb2NrW1widGFibGVDb3VudGVyU2V0XCJdICsgMTtcbiAgICAgIG5ld1N0YXRlQmxvY2tbaW5kZXhdID0gY3VycmVudEJsb2NrO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS50YWJsZXMubGVuZ3RoID4gMCkgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IGZhbHNlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBTZXRCbG9jazogbmV3U3RhdGVCbG9jayB9KTtcbiAgfTtcblxuICBhZGRCbG9jayA9ICgpID0+IHtcbiAgICBsZXQgaWRPbmUgPSB0aGlzLnN0YXRlLlNldEJsb2NrLnRhYmxlQ291bnRlclNldCA/PyAwO1xuICAgIGxldCBpZFR3byA9IGlkT25lICsgMTtcbiAgICBjb25zdCBjdXJyZW50SWQgPSBpZE9uZTtcbiAgICBjb25zdCBuZXh0Q3VycmVudElkID0gaWRUd287XG4gICAgbGV0IG5ld0Jsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xuICAgIG5ld0Jsb2NrLnB1c2goe1xuICAgICAgYmxvY2tJZDogdGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGgsXG4gICAgICBbYCR7dGhpcy5zdGF0ZS5TZXRCbG9jay5sZW5ndGh9YF06IFtdLFxuICAgICAgdGFibGVzU2V0OiBbXG4gICAgICAgIHsgaWQ6IGlkT25lLCBkZWxldGVkOiBmYWxzZSB9LFxuICAgICAgICB7IGlkOiBpZFR3bywgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgIF0sXG4gICAgICB0YWJsZUNvdW50ZXJTZXQ6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyU2V0ICsgMixcbiAgICAgIGRyb3BEb3duc1NldDoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCxcbiAgICAgICAgW2Ake2N1cnJlbnRJZH0tJHt0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXG4gICAgICAgIFtgJHtuZXh0Q3VycmVudElkfS0ke3RoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RofWBdOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBBbmRPclNldDogdGhpcy5zdGF0ZS5BbmRPclNldCxcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFNldEJsb2NrOiBuZXdCbG9jayxcbiAgICAgIGRyb3BEb3duc1NldDoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLmRyb3BEb3duc1NldCxcbiAgICAgICAgW2Ake2N1cnJlbnRJZH0tJHt0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aH1gXTogZmFsc2UsXG4gICAgICAgIFtgJHtuZXh0Q3VycmVudElkfS0ke3RoaXMuc3RhdGUuU2V0QmxvY2subGVuZ3RofWBdOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBpZih0aGlzLnN0YXRlLnRhYmxlcy5sZW5ndGggPiAwKXRoaXMuc2V0U3RhdGUoe3Nob3dBZGRTZWxlY3Q6ZmFsc2V9KTtcbiAgICBjb25zdCB0YWJsZUxlbmd0aCA9IHRoaXMuc3RhdGUudGFibGVzXG4gICAgICAubWFwKChlbCwgaWR4KSA9PiAoZWwuZGVsZXRlZCA9PSBmYWxzZSA/IGlkeCA6IFwiXCIpKVxuICAgICAgLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcbiAgICBjb25zdCB0YWJsZXNTZXRMZW5ndGggPSB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aDtcblxuICAgIGlmICh0YWJsZUxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlVGFibGUgPSAoaWQpID0+IHtcbiAgICBsZXQgY29waWVkVGFibGUgPSBbLi4udGhpcy5zdGF0ZS50YWJsZXNdO1xuICAgIC8vIGNvbnN0IGluZGV4ID0gY29waWVkVGFibGUuZmluZEluZGV4KChpdGVtKT0+aXRlbS5pZCA9PT0gaWQpXG4gICAgY29waWVkVGFibGUgPSBjb3BpZWRUYWJsZS5tYXAoKGVsKSA9PiB7XG4gICAgICBpZiAoZWwuaWQgPT09IGlkKWVsLmRlbGV0ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGVsO1xuICAgIH0pO1xuICAgIGNvbnN0IG5ld1RhYmxlcyA9IGNvcGllZFRhYmxlO1xuICAgIC8vIG5ld1RhYmxlcyA9IGNvcGllZFRhYmxlO1xuXG4gICAgLy8gaWYgKGluZGV4ICE9PSAtMSl7XG4gICAgLy8gICBjb3BpZWRUYWJsZVtpbmRleF1bXCJkZWxldGVkXCJdID0gdHJ1ZTtcbiAgICAvLyAgIG5ld1RhYmxlcyA9IGNvcGllZFRhYmxlO1xuICAgIC8vIH1cbiAgICAvLyBjb25zdCBuZXdUYWJsZXMgPSBjb3BpZWRUYWJsZS5maWx0ZXIoKGVsKSA9PiBlbC5pZCAhPT0gaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YWJsZUNvdW50ZXI6IHRoaXMuc3RhdGUudGFibGVDb3VudGVyIC0gMSB9KTtcbiAgICBjb25zdCBjb3BpZWRXaGVyZUNsYXVzZXMgPSBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNdO1xuICAgIGNvbnN0IGRlbGV0ZWRXaGVyZUNsYXVzZXMgPSBjb3BpZWRXaGVyZUNsYXVzZXMuZmlsdGVyKFxuICAgICAgKGVsKSA9PiBlbC5pZCAhPT0gaWQudG9TdHJpbmcoKVxuICAgICk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YWJsZXM6IG5ld1RhYmxlcyxcbiAgICAgIHdoZXJlQ2xhdXNlczogZGVsZXRlZFdoZXJlQ2xhdXNlcyxcbiAgICAgIHRhYmxlQ291bnRlcjogdGhpcy5zdGF0ZS50YWJsZUNvdW50ZXIgLSAxLFxuICAgICAgc2VsZWN0ZWRJZDogaWQsXG4gICAgfSk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGFibGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHdoZXJlQ2xhdXNlczogW10sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB0YWJsZUxlbmd0aCA9IHRoaXMuc3RhdGUudGFibGVzXG4gICAgICAubWFwKChlbCwgaWR4KSA9PiAoZWwuZGVsZXRlZCA9PSBmYWxzZSA/IGlkeCA6IFwiXCIpKVxuICAgICAgLmZpbHRlcihTdHJpbmcpLmxlbmd0aDtcbiAgICBjb25zdCB0YWJsZXNTZXRMZW5ndGggPSB0aGlzLnN0YXRlLlNldEJsb2NrLmxlbmd0aDtcbiAgICBpZiAodGFibGVMZW5ndGggPT0gMiAmJiB0YWJsZXNTZXRMZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRTZWxlY3Q6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGlmICh0YWJsZUxlbmd0aCA9PSAwICYmIHRhYmxlc1NldExlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkU2VsZWN0OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGlmICh0YWJsZUxlbmd0aCA9PSAxICYmIHRhYmxlc1NldExlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlQmxvY2sgPSAoYmxvY2tJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgY29waWVkQmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgY29uc3QgY29waWVkV2hlcmVjbGF1c2VTZXQgPSBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldF07XG4gICAgY29uc3QgaW5kZXggPSBjb3BpZWRCbG9jay5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uYmxvY2tJZCA9PT0gYmxvY2tJZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgY29waWVkQmxvY2suc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBTZXRCbG9jazogY29waWVkQmxvY2sgfSk7XG4gICAgfVxuICAgIGlmIChjb3BpZWRXaGVyZWNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICBjb3BpZWRXaGVyZWNsYXVzZVNldC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQuc3BsaXQoXCItXCIpWzFdID09PSBibG9ja0lkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aGVyZUNsYXVzZVNldDogY29waWVkV2hlcmVjbGF1c2VTZXQgfSk7XG4gICAgfVxuICAgIGNvbnN0IHRhYmxlTGVuZ3RoID0gdGhpcy5zdGF0ZS50YWJsZXNcbiAgICAgIC5tYXAoKGVsLCBpZHgpID0+IChlbC5kZWxldGVkID09IGZhbHNlID8gaWR4IDogXCJcIikpXG4gICAgICAuZmlsdGVyKFN0cmluZykubGVuZ3RoO1xuICAgIGlmICh0YWJsZUxlbmd0aCA9PSAxICYmIGNvcGllZEJsb2NrLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FkZFNlbGVjdDogdHJ1ZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlQmxvY2tUYWJsZSA9ICh0YWJsZUJsb2NrSWQ6IHN0cmluZywgYmxvY2tJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdGFibGVJZCA9IHRhYmxlQmxvY2tJZC5zcGxpdChcIi1cIilbMF07XG4gICAgY29uc3QgY29waWVkQmxvY2sgPSBbLi4udGhpcy5zdGF0ZS5TZXRCbG9ja107XG4gICAgY29uc3QgY29waWVkV2hlcmVjbGF1c2VTZXQgPSBbLi4udGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldF07XG4gICAgY29uc3QgY3VycmVudEJsb2NJbmRleCA9IGNvcGllZEJsb2NrLmZpbmRJbmRleChcbiAgICAgIChibG9jaykgPT4gYCR7YmxvY2suYmxvY2tJZH1gID09PSBibG9ja0lkXG4gICAgKTtcbiAgICBsZXQgY3VycmVudEJsb2NrO1xuICAgIGlmIChjdXJyZW50QmxvY0luZGV4ICE9PSAtMSkgY3VycmVudEJsb2NrID0gY29waWVkQmxvY2tbY3VycmVudEJsb2NJbmRleF07XG4gICAgaWYgKGN1cnJlbnRCbG9jaykge1xuICAgICAgY29uc3QgY3VycmVudFdoZXJlQ2xhdXNlU2V0ID0gY3VycmVudEJsb2NrW2Jsb2NrSWRdO1xuICAgICAgY29uc3QgY3VycmVudFRhYmxlU2V0cyA9IGN1cnJlbnRCbG9ja1tcInRhYmxlc1NldFwiXTtcbiAgICAgIGlmIChjdXJyZW50V2hlcmVDbGF1c2VTZXQ/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb3BpZWRDdXJyZW50V2hlcmVDbGF1c2VTZXQgPSBbLi4uY3VycmVudFdoZXJlQ2xhdXNlU2V0XTtcbiAgICAgICAgY29uc3Qgd2hlcmVDbGF1c2VTZXRJbmRleCA9IGNvcGllZEN1cnJlbnRXaGVyZUNsYXVzZVNldC5maW5kSW5kZXgoXG4gICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSB0YWJsZUJsb2NrSWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBpZiAod2hlcmVDbGF1c2VTZXRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb3BpZWRDdXJyZW50V2hlcmVDbGF1c2VTZXQuc3BsaWNlKHdoZXJlQ2xhdXNlU2V0SW5kZXgsIDEpO1xuICAgICAgICAgIGN1cnJlbnRCbG9ja1tibG9ja0lkXSA9IGNvcGllZEN1cnJlbnRXaGVyZUNsYXVzZVNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN1cnJlbnRUYWJsZVNldHM/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb3BpZWRUYWJsZVNldHMgPSBbLi4uY3VycmVudFRhYmxlU2V0c107XG4gICAgICAgIGNvbnN0IHRhYmxlU2V0SW5kZXggPSBjb3BpZWRUYWJsZVNldHMuZmluZEluZGV4KFxuICAgICAgICAgIChpdGVtKSA9PiBgJHtpdGVtLmlkfWAgPT09IHRhYmxlSWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRhYmxlU2V0SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY29waWVkVGFibGVTZXRzW3RhYmxlU2V0SW5kZXhdW1wiZGVsZXRlZFwiXSA9IHRydWU7XG4gICAgICAgICAgLy8gY29waWVkVGFibGVTZXRzLnNwbGljZSh0YWJsZVNldEluZGV4LDEpO1xuICAgICAgICAgIGN1cnJlbnRCbG9ja1tcInRhYmxlc1NldFwiXSA9IGNvcGllZFRhYmxlU2V0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29waWVkQmxvY2tbY3VycmVudEJsb2NJbmRleF0gPSBjdXJyZW50QmxvY2s7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgU2V0QmxvY2s6IGNvcGllZEJsb2NrIH0pO1xuICAgIH1cbiAgICBpZiAoY29waWVkV2hlcmVjbGF1c2VTZXQ/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgaW5kZXggPSBjb3BpZWRXaGVyZWNsYXVzZVNldC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHRhYmxlQmxvY2tJZCkge1xuICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29waWVkV2hlcmVjbGF1c2VTZXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdoZXJlQ2xhdXNlU2V0OiBjb3BpZWRXaGVyZWNsYXVzZVNldCB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlQmxvY2tBbGwgPSAoYmxvY2tEYXRhKSA9PiB7fTtcblxuICB0ZXh0SW5wdXRIYW5kbGVyID0gKGUsIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcbiAgICB0aGlzLnF1ZXJ5VGV4dENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIHF1ZXJ5VHlwZSk7XG4gIH07XG5cbiAgdGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyID0gKGUsIHF1ZXJ5VHlwZSA9IFwic2luZ2xlXCIpID0+IHtcbiAgICBsZXQgdHh0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgbGV0IGN1cnJlbnRUYWJsZUlkID0gZS50YXJnZXQuYXR0cmlidXRlc1swXS52YWx1ZTtcbiAgICBsZXQgaW5wdXQgPSBcImZpcnN0XCI7XG4gICAgdGhpcy5xdWVyeVRleHRJbmNsdWRlZENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIGlucHV0LCBxdWVyeVR5cGUpO1xuICB9O1xuXG4gIHRleHRTZWNvbmRJbmNsdWRlZEhhbmRsZXIgPSAoZSwgcXVlcnlUeXBlID0gXCJzaW5nbGVcIikgPT4ge1xuICAgIGxldCB0eHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgY3VycmVudFRhYmxlSWQgPSBlLnRhcmdldC5hdHRyaWJ1dGVzWzBdLnZhbHVlO1xuICAgIGxldCBpbnB1dCA9IFwic2Vjb25kXCI7XG4gICAgdGhpcy5xdWVyeVRleHRJbmNsdWRlZENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIGlucHV0LCBxdWVyeVR5cGUpO1xuICB9O1xuICB1bml2b2NvU2VsZWN0SGFuZGxlciA9IChlLCBxdWVyeVR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XG4gICAgbGV0IHR4dCA9IGUuY3VycmVudFRhcmdldC50ZXh0Q29udGVudDtcbiAgICBsZXQgY3VycmVudFRhYmxlSWQgPSBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1syXS52YWx1ZTtcbiAgICB0aGlzLnF1ZXJ5VGV4dENvbnN0cnVjdG9yKHR4dCwgY3VycmVudFRhYmxlSWQsIHF1ZXJ5VHlwZSk7XG4gIH07XG5cbiAgY29udGFpbnNBbnlMZXR0ZXJzID0gKHN0cikgPT4gL1thLXpBLVpdLy50ZXN0KHN0cik7XG5cbiAgcXVlcnlUZXh0Q29uc3RydWN0b3IgPSAodHh0LCBjdXJyZW50VGFibGVJZCwgcXVlcnlUeXBlKSA9PiB7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgbGV0IG5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGNvbnN0IGtleVR5cGUgPSBxdWVyeVR5cGUgPT09IFwic2luZ2xlXCIgPyBcIndoZXJlQ2xhdXNlc1wiIDogXCJ3aGVyZUNsYXVzZVNldFwiO1xuICAgIGlmICh0aGlzLnN0YXRlW2tleVR5cGVdLmxlbmd0aCkge1xuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGVba2V5VHlwZV1cbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRUYWJsZUlkKTtcbiAgICAgIGlmIChxdWVyeUluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGVba2V5VHlwZV0ubWFwKChvYmopID0+IHtcbiAgICAgICAgICBpZiAob2JqLmlkID09PSBjdXJyZW50VGFibGVJZCkge1xuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIHZhbHVlOiB7IHR4dDogdHh0IH0gfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5VHlwZV0uZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5VHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAobmV3V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBuZXdXaGVyZVNldENsYXVzZS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50VGFibGVJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soXG4gICAgICAgICAgY3VycmVudFRhYmxlSWQsXG4gICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHF1ZXJ5VGV4dEluY2x1ZGVkQ29uc3RydWN0b3IgPSAodHh0LCBjdXJyZW50VGFibGVJZCwgaW5wdXQsIHF1ZXJ5VHlwZSkgPT4ge1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBjb25zdCBrZXlUeXBlID0gcXVlcnlUeXBlID09PSBcInNpbmdsZVwiID8gXCJ3aGVyZUNsYXVzZXNcIiA6IFwid2hlcmVDbGF1c2VTZXRcIjtcbiAgICBpZiAodGhpcy5zdGF0ZVtrZXlUeXBlXS5sZW5ndGgpIHtcbiAgICAgIHF1ZXJ5SW5kZXggPSB0aGlzLnN0YXRlW2tleVR5cGVdXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgICAuaW5kZXhPZihjdXJyZW50VGFibGVJZCk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlU3RhdGUgPSB0aGlzLnN0YXRlW2tleVR5cGVdLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gY3VycmVudFRhYmxlSWQpIHtcbiAgICAgICAgICAgIGlucHV0ID09PSBcImZpcnN0XCJcbiAgICAgICAgICAgICAgPyAob2JqID0geyAuLi5vYmosIGZpcnN0VHh0OiB7IHZhbHVlOiB0eHQgfSB9KVxuICAgICAgICAgICAgICA6IChvYmogPSB7IC4uLm9iaiwgc2Vjb25kVHh0OiB7IHZhbHVlOiB0eHQgfSB9KTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVba2V5VHlwZV0uZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBba2V5VHlwZV06IGZpbHRlcmVkV2hlcmVDbGF1c2VzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAobmV3V2hlcmVTZXRDbGF1c2U/Lmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBuZXdXaGVyZVNldENsYXVzZS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBjdXJyZW50VGFibGVJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soXG4gICAgICAgICAgY3VycmVudFRhYmxlSWQsXG4gICAgICAgICAgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGRyb3Bkb3duSXRlbUNsaWNrID0gKGUsIHR5cGUgPSBcInNpbmdsZVwiKSA9PiB7XG4gICAgbGV0IGNsaWNrZWRRdWVyeVRhYmxlSWQgPSBlLmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1syXS52YWx1ZTtcbiAgICBsZXQgY2xpY2tlZFZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGxldCBjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlO1xuICAgIGxldCBuZXdXaGVyZVNldENsYXVzZTtcbiAgICBsZXQgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlO1xuICAgIGNvbnN0IGtleXR5cGUgPSB0eXBlID09PSBcInNpbmdsZVwiID8gXCJ3aGVyZUNsYXVzZXNcIiA6IFwid2hlcmVDbGF1c2VTZXRcIjtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZVtrZXl0eXBlXVxuICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAuaW5kZXhPZihjbGlja2VkUXVlcnlUYWJsZUlkKTtcbiAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqLmlkID09PSBjbGlja2VkUXVlcnlUYWJsZUlkKSB7XG4gICAgICAgICAgb2JqID0geyAuLi5vYmosIGRyb3Bkb3duVmFsdWVRdWVyeTogY2xpY2tlZFZhbHVlIH07XG4gICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5maWx0ZXIoXG4gICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBvYmo7XG4gICAgICAgICAgLy8gbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlc1xuICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgW2tleXR5cGVdOiBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnZhbHVlID09PSBcInVuaXZvY29cIikge1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGUgPSBvYmouYXR0cmlidXRlUXVlcnk7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFsbExheWVycy5mb3JFYWNoKChmLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmLnRpdGxlID09PSB0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0KSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXdcbiAgICAgICAgICAgICAgICAgICAgLndoZW5MYXllclZpZXcoZilcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGxheWVyVmlldykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFF1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtjdXJyZW50Q2xpY2tlZFF1ZXJ5QXR0cmlidXRlfSBpcyBub3QgbnVsbGA7XG4gICAgICAgICAgICAgICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2N1cnJlbnRDbGlja2VkUXVlcnlBdHRyaWJ1dGV9YF07XG4gICAgICAgICAgICAgICAgICAgICAgbGF5ZXJWaWV3LmZpbHRlciA9IHsgd2hlcmU6IHF1ZXJ5LndoZXJlIH07XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGYucXVlcnlGZWF0dXJlcyhxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbFRoaXJkUXVlcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5mZWF0dXJlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWxUaGlyZFF1ZXJ5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBPYmplY3QudmFsdWVzKGVsLmF0dHJpYnV0ZXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gdGhpcy5zdGF0ZVtrZXl0eXBlXS5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouaWQgPT09IGNsaWNrZWRRdWVyeVRhYmxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZkluT3JOb3RJblF1ZXJ5VmFsdWU6IGRldGFpbFRoaXJkUXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeTogY2xpY2tlZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnROZXdXaGVyZVNldENsYXVzZSA9IG9iajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGVbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZmlsdGVyKChhKSA9PiBhLmlkICE9PSBvYmouaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXdXaGVyZVNldENsYXVzZSA9IGZpbHRlcmVkV2hlcmVDbGF1c2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrZXl0eXBlXTogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgb2JqIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wZG93blZhbHVlUXVlcnk6IGUudGFyZ2V0LnZhbHVlIH0sICgpID0+IHt9KTtcbiAgICBpZiAoa2V5dHlwZSA9PT0gXCJ3aGVyZUNsYXVzZVNldFwiKSB7XG4gICAgICBpZiAoY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlKVxuICAgICAgICB0aGlzLmFkZEN1cnJlbnRXaGVyQ2xhdXNlQmxvY2soXG4gICAgICAgICAgY2xpY2tlZFF1ZXJ5VGFibGVJZCxcbiAgICAgICAgICBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2VcbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgZHJvcERvd24gPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXV0T3BlbjogdHJ1ZSB9KTtcbiAgICBsZXQgcXVlcnlJbmRleDtcbiAgICBxdWVyeUluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXNcbiAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgLmluZGV4T2YoaWQudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmouaWQgPT09IHF1ZXJ5SW5kZXgudG9TdHJpbmcoKSkge1xuICAgICAgICAgIGlmICghb2JqLmlzT3Blbikge1xuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlzT3BlbjogdHJ1ZSB9O1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0geyAuLi5vYmosIGlzT3BlbjogZmFsc2UgfTtcbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlcyA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbHRlcihcbiAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM6IGZpbHRlcmVkV2hlcmVDbGF1c2VzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IG9iaiB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGRyb3BEb3duU2V0ID0gKGlkKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGF1dE9wZW46IHRydWUgfSk7XG4gICAgbGV0IHF1ZXJ5SW5kZXg7XG4gICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXRcbiAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgLmluZGV4T2YoaWQudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCB1cGRhdGVTdGF0ZSA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQubWFwKChvYmopID0+IHtcbiAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XG4gICAgICAgICAgaWYgKCFvYmouaXNPcGVuKSB7XG4gICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgaXNPcGVuOiB0cnVlIH07XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZVNldCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgIGZpbHRlcmVkV2hlcmVDbGF1c2VTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBpc09wZW46IGZhbHNlIH07XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRXaGVyZUNsYXVzZVNldCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuZmlsdGVyKFxuICAgICAgICAgICAgICAoYSkgPT4gYS5pZCAhPT0gb2JqLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZVNldC5wdXNoKG9iaik7XG4gICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogZmlsdGVyZWRXaGVyZUNsYXVzZVNldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDaGVja0JveCA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNDaGVja2VkOiBldmVudC50YXJnZXQuY2hlY2tlZCxcbiAgICB9KTtcbiAgfTtcblxuICBvbkNoYW5nZUNoZWNrQm94ID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGN1cnJlbnRJZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuICAgIGxldCBvYmplY3RJZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLnZhbHVlLnZhbHVlO1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzXG4gICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmlkKVxuICAgICAgICAuaW5kZXhPZihjdXJyZW50SWQpO1xuICAgICAgaWYgKHF1ZXJ5SW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLm1hcCgob2JqKSA9PiB7XG4gICAgICAgICAgaWYgKG9iai5pZCA9PT0gcXVlcnlJbmRleC50b1N0cmluZygpKSB7XG4gICAgICAgICAgICBpZiAoIW9iai5jaGVja2VkTGlzdCkge1xuICAgICAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICAgICAgLi4ub2JqLFxuICAgICAgICAgICAgICAgIGNoZWNrZWRMaXN0OiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWU6IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgbGV0IGZpbHRlcmVkV2hlcmVDbGF1c2VzID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkICE9PSBvYmouaWRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZmlsdGVyZWRXaGVyZUNsYXVzZXMucHVzaChvYmopO1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogZmlsdGVyZWRXaGVyZUNsYXVzZXMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzKSksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBpZkFscmVhZHlDaGVjayA9IG9iai5jaGVja2VkTGlzdFxuICAgICAgICAgICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmNoZWNrVmFsdWUpXG4gICAgICAgICAgICAgICAgLmluZGV4T2YoZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSk7XG4gICAgICAgICAgICAgIGlmIChpZkFscmVhZHlDaGVjayA9PSAtMSkge1xuICAgICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLm9iaixcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWRMaXN0OiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLm9iai5jaGVja2VkTGlzdCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWU6IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAgIChhKSA9PiBhLmlkID09PSBvYmouaWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgb2JqIG9iamVjdCBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgdXBkYXRlZCBvYmogb2JqZWN0IHRvIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VzOiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5pZCA8IGIuaWQgPyAtMSA6IGEuaWQgPT0gYi5pZCA/IDAgOiAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlczogQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBTZXQodGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMpXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIEZpbmQgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgY29uc3Qgb2JqID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gY3VycmVudElkKTtcbiAgICAgIC8vIFJlbW92ZSB0aGUgY2hlY2tWYWx1ZSBmcm9tIHRoZSBjaGVja2VkTGlzdCBhcnJheVxuICAgICAgb2JqLmNoZWNrZWRMaXN0ID0gb2JqLmNoZWNrZWRMaXN0LmZpbHRlcihcbiAgICAgICAgKGEpID0+IGEuY2hlY2tWYWx1ZSAhPT0gZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZVxuICAgICAgKTtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgb2JqIG9iamVjdCBpbiB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLmZpbmRJbmRleChcbiAgICAgICAgKGEpID0+IGEuaWQgPT09IGN1cnJlbnRJZFxuICAgICAgKTtcbiAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzW2luZGV4XSA9IG9iajtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICB3aGVyZUNsYXVzZXM6IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VzLFxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBSZW1vdmUgZHVwbGljYXRlIGVudHJpZXMgZnJvbSB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3aGVyZUNsYXVzZXM6IEFycmF5LmZyb20obmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcykpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBhZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrID0gKGN1cnJlbnRJZCwgY3VycmVudFdoZXJlQ2xhdXNlKSA9PiB7XG4gICAgY29uc3QgYmxvY2tJZCA9IGN1cnJlbnRJZC5zcGxpdChcIi1cIilbMV07XG4gICAgY29uc3QgY3VycmVudFNldEJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xuICAgIGxldCBjdXJyZW50QmxvY2tJbmRleCA9IC0xO1xuICAgIGxldCBjdXJyZW50QmxvY2s7XG4gICAgY3VycmVudEJsb2NrSW5kZXggPSBjdXJyZW50U2V0QmxvY2suZmluZEluZGV4KFxuICAgICAgKGl0ZW0pID0+IGAke2l0ZW0/LmJsb2NrSWR9YCA9PT0gYmxvY2tJZFxuICAgICk7XG4gICAgaWYgKGN1cnJlbnRCbG9ja0luZGV4ICE9PSAtMSlcbiAgICAgIGN1cnJlbnRCbG9jayA9IGN1cnJlbnRTZXRCbG9ja1tjdXJyZW50QmxvY2tJbmRleF07XG4gICAgbGV0IGN1cnJlbnRXaGVyZVNldENsYXVzZSA9IG51bGw7XG4gICAgaWYgKGN1cnJlbnRCbG9jaykge1xuICAgICAgY3VycmVudFdoZXJlU2V0Q2xhdXNlID0gY3VycmVudEJsb2NrW2Ake2Jsb2NrSWR9YF07XG4gICAgICBpZiAoY3VycmVudFdoZXJlU2V0Q2xhdXNlPy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XG4gICAgICAgIGluZGV4ID0gY3VycmVudFdoZXJlU2V0Q2xhdXNlLmZpbmRJbmRleChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gY3VycmVudElkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjdXJyZW50V2hlcmVTZXRDbGF1c2VbaW5kZXhdID0gY3VycmVudFdoZXJlQ2xhdXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRXaGVyZVNldENsYXVzZSA9IFtcbiAgICAgICAgICAgIC4uLmN1cnJlbnRXaGVyZVNldENsYXVzZSxcbiAgICAgICAgICAgIGN1cnJlbnRXaGVyZUNsYXVzZSxcbiAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRCbG9ja1tibG9ja0lkXSA9IGN1cnJlbnRXaGVyZVNldENsYXVzZTtcbiAgICAgICAgY3VycmVudFNldEJsb2NrW2N1cnJlbnRCbG9ja0luZGV4XSA9IGN1cnJlbnRCbG9jaztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNldEJsb2NrOiBjdXJyZW50U2V0QmxvY2sgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50QmxvY2tbYmxvY2tJZF0gPSBbY3VycmVudFdoZXJlQ2xhdXNlXTtcbiAgICAgICAgY3VycmVudFNldEJsb2NrW2N1cnJlbnRCbG9ja0luZGV4XSA9IGN1cnJlbnRCbG9jaztcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFNldEJsb2NrOiBjdXJyZW50U2V0QmxvY2sgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlQ2hlY2tCb3hTZXQgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgbmV3V2hlcmVTZXRDbGF1c2U7XG4gICAgbGV0IGN1cnJlbnRJZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLmlkLnZhbHVlO1xuICAgIGxldCBvYmplY3RJZCA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLnZhbHVlLnZhbHVlO1xuICAgIGxldCBxdWVyeUluZGV4O1xuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgcXVlcnlJbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXRcbiAgICAgICAgLm1hcCgob2JqKSA9PiBvYmouaWQpXG4gICAgICAgIC5pbmRleE9mKGN1cnJlbnRJZCk7XG4gICAgICBpZiAocXVlcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5tYXAoKG9iaikgPT4ge1xuICAgICAgICAgIGlmIChvYmouaWQgPT09IGN1cnJlbnRJZCkge1xuICAgICAgICAgICAgaWYgKCFvYmouY2hlY2tlZExpc3RTZXQpIHtcbiAgICAgICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgICAgIC4uLm9iaixcbiAgICAgICAgICAgICAgICBjaGVja2VkTGlzdFNldDogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbHVlOiBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgIT09IG9iai5pZFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0O1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiBmaWx0ZXJlZFdoZXJlQ2xhdXNlU2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmlkIDwgYi5pZCA/IC0xIDogYS5pZCA9PSBiLmlkID8gMCA6IDE7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZVNldDogQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBpZkFscmVhZHlDaGVjayA9IG9iai5jaGVja2VkTGlzdFNldFxuICAgICAgICAgICAgICAgIC5tYXAoKG9iaikgPT4gb2JqLmNoZWNrVmFsdWUpXG4gICAgICAgICAgICAgICAgLmluZGV4T2YoZXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMubmFtZS52YWx1ZSk7XG4gICAgICAgICAgICAgIGlmIChpZkFscmVhZHlDaGVjayA9PSAtMSkge1xuICAgICAgICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLm9iaixcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWRMaXN0U2V0OiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLm9iai5jaGVja2VkTGlzdFNldCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVmFsdWU6IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgICAgKGEpID0+IGEuaWQgPT09IG9iai5pZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBvYmogb2JqZWN0IGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAvLyBBZGQgdGhlIHVwZGF0ZWQgb2JqIG9iamVjdCB0byB0aGUgd2hlcmVDbGF1c2VzIGFycmF5XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgbmV3V2hlcmVTZXRDbGF1c2UgPSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHdoZXJlQ2xhdXNlU2V0OiB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGUgZW50cmllcyBmcm9tIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU2V0KHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQpXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4geyBvYmogfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIEZpbmQgdGhlIG9iaiBvYmplY3QgaW4gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgY29uc3Qgb2JqID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maW5kKChhKSA9PiBhLmlkID09PSBjdXJyZW50SWQpO1xuICAgICAgLy8gUmVtb3ZlIHRoZSBjaGVja1ZhbHVlIGZyb20gdGhlIGNoZWNrZWRMaXN0IGFycmF5XG4gICAgICBvYmouY2hlY2tlZExpc3RTZXQgPSBvYmouY2hlY2tlZExpc3RTZXQuZmlsdGVyKFxuICAgICAgICAoYSkgPT4gYS5jaGVja1ZhbHVlICE9PSBldmVudC50YXJnZXQuYXR0cmlidXRlcy5uYW1lLnZhbHVlXG4gICAgICApO1xuICAgICAgLy8gVXBkYXRlIHRoZSBvYmogb2JqZWN0IGluIHRoZSB3aGVyZUNsYXVzZXMgYXJyYXlcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldC5maW5kSW5kZXgoXG4gICAgICAgIChhKSA9PiBhLmlkID09PSBjdXJyZW50SWRcbiAgICAgICk7XG4gICAgICB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0W2luZGV4XSA9IG9iajtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICB3aGVyZUNsYXVzZVNldDogdGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldCxcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGEuaWQgPCBiLmlkID8gLTEgOiBhLmlkID09IGIuaWQgPyAwIDogMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuZXdXaGVyZVNldENsYXVzZSA9IEFycmF5LmZyb20obmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0KSk7XG4gICAgICAgICAgLy8gUmVtb3ZlIGR1cGxpY2F0ZSBlbnRyaWVzIGZyb20gdGhlIHdoZXJlQ2xhdXNlcyBhcnJheVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgd2hlcmVDbGF1c2VTZXQ6IEFycmF5LmZyb20obmV3IFNldCh0aGlzLnN0YXRlLndoZXJlQ2xhdXNlU2V0KSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChuZXdXaGVyZVNldENsYXVzZT8ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBjdXJyZW50TmV3V2hlcmVTZXRDbGF1c2UgPSBuZXdXaGVyZVNldENsYXVzZS5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gY3VycmVudElkXG4gICAgICApO1xuICAgICAgdGhpcy5hZGRDdXJyZW50V2hlckNsYXVzZUJsb2NrKGN1cnJlbnRJZCwgY3VycmVudE5ld1doZXJlU2V0Q2xhdXNlKTtcbiAgICB9XG4gIH07XG5cbiAgY2hlY2tQYXJlbnRoZXNpcyh2YWw6IHN0cmluZykge1xuICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcbiAgICBjb25zdCBicmFja2V0cyA9IFtcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIsIFwifVwiXTtcbiAgICBpZiAoYnJhY2tldHMuaW5jbHVkZXModmFsLmNoYXJBdCgwKSkpIHtcbiAgICAgIHN0YXR1cyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzdGF0dXM7XG4gIH1cblxuICBsb29wVG9HZXRTdHJpbmcoc3RyaW5nQXJyOiBzdHJpbmdbXSkge1xuICAgIGxldCBuZXdTdHJpbmcgPSBcIiBcIjtcbiAgICBpZiAoc3RyaW5nQXJyLmxlbmd0aCkge1xuICAgICAgbmV3U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoc3RyaW5nQXJyWzBdKTtcbiAgICAgIG5ld1N0cmluZyA9IG5ld1N0cmluZy5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHJpbmdBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmV3U3RyaW5nVmFsID0gSlNPTi5zdHJpbmdpZnkoc3RyaW5nQXJyW2ldKS5yZXBsYWNlKC9cIi9nLCBgJ2ApO1xuICAgICAgICBuZXdTdHJpbmcgKz0gXCIsXCIgKyBuZXdTdHJpbmdWYWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdTdHJpbmc7XG4gIH1cblxuICBxdWVyeUNvbnN0cnVjdG9yID0gKFxuICAgIGxheWVyVmlldyxcbiAgICBmaXJzdFF1ZXJ5LFxuICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICBzZWNvbmRRdWVyeVRhcmdldCxcbiAgICBBbmRPcixcbiAgICBjb25uZWN0b3JfZnVuY3Rpb24sXG4gICAgbGF5ZXIsXG4gICAgcXVlcnlUeXBlID0gXCJzaW5nbGVcIlxuICApID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSgpO1xuICAgIGNvbnN0IHZhbHVlcyA9IHNlY29uZFF1ZXJ5VGFyZ2V0O1xuICAgIHN3aXRjaCAocXVlcnlSZXF1ZXN0KSB7XG4gICAgICBjYXNlIFwiTElLRSVcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBMSUtFICcke3NlY29uZFF1ZXJ5VGFyZ2V0fSUnYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIiVMSUtFXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gTElLRSAnJSR7c2Vjb25kUXVlcnlUYXJnZXR9J2A7XG4gICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCIlTElLRSVcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XG4gICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJOT1QgTElLRVwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IE5PVCBMSUtFICclJHtzZWNvbmRRdWVyeVRhcmdldH0lJ2A7XG4gICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpcyBudWxsXCI6XG4gICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7Zmlyc3RRdWVyeX0gaXMgbnVsbGA7XG4gICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpcyBub3QgbnVsbFwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IGlzIG5vdCBudWxsYDtcbiAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsYXllcixcbiAgICAgICAgICBBbmRPcixcbiAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIklOXCI6XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IElOICgke1xuICAgICAgICAgICAgXCInXCIgKyBzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiJywgJ1wiKSArIFwiJ1wiXG4gICAgICAgICAgfSlgO1xuICAgICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgICBsYXllclZpZXcsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgICBmaWVsZDogZmlyc3RRdWVyeSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJzaW5nbGVRdWVyeVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmNoZWNrUGFyZW50aGVzaXMoc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIixcIikpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmdGaWVkVmFsdWUgPSB0aGlzLmxvb3BUb0dldFN0cmluZyhzZWNvbmRRdWVyeVRhcmdldCk7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9IElOICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtzZWNvbmRRdWVyeVRhcmdldC5qb2luKFwiLFwiKX0pYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICBBbmRPcixcbiAgICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiTk9UX0lOXCI6XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGBOT1QgJHtmaXJzdFF1ZXJ5fSBJTiAoJHtcbiAgICAgICAgICAgIFwiJ1wiICsgc2Vjb25kUXVlcnlUYXJnZXQuam9pbihcIicsICdcIikgKyBcIidcIlxuICAgICAgICAgIH0pYDtcbiAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcbiAgICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5jaGVja1BhcmVudGhlc2lzKHNlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXCIsXCIpKSkge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nRmllZFZhbHVlID0gdGhpcy5sb29wVG9HZXRTdHJpbmcoc2Vjb25kUXVlcnlUYXJnZXQpO1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgTk9UICAke2ZpcnN0UXVlcnl9IElOICgke3N0cmluZ0ZpZWRWYWx1ZX0pYDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgTk9UICAke2ZpcnN0UXVlcnl9IElOICgke3NlY29uZFF1ZXJ5VGFyZ2V0LmpvaW4oXG4gICAgICAgICAgICAgIFwiLFwiXG4gICAgICAgICAgICApfSlgO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxdWVyeS5vdXRGaWVsZHMgPSBbYCR7Zmlyc3RRdWVyeX1gXTtcbiAgICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpbmNsdWRlZFwiOlxuICAgICAgICBxdWVyeS53aGVyZSA9IGAoJHtmaXJzdFF1ZXJ5fSA+ICR7c2Vjb25kUXVlcnlUYXJnZXQuZmlyc3RUeHR9IEFORCAke2ZpcnN0UXVlcnl9IDwgJHtzZWNvbmRRdWVyeVRhcmdldC5zZWNvbmRUeHR9KWA7XG4gICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpc19ub3RfaW5jbHVkZWRcIjpcbiAgICAgICAgcXVlcnkud2hlcmUgPSBgKCR7Zmlyc3RRdWVyeX0gPCAke3NlY29uZFF1ZXJ5VGFyZ2V0LmZpcnN0VHh0fSBPUiAke2ZpcnN0UXVlcnl9ID4gJHtzZWNvbmRRdWVyeVRhcmdldC5zZWNvbmRUeHR9KWA7XG4gICAgICAgIGNvbm5lY3Rvcl9mdW5jdGlvbih7XG4gICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHF1ZXJ5UmVxdWVzdCxcbiAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgQW5kT3IsXG4gICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zQW55TGV0dGVycyhzZWNvbmRRdWVyeVRhcmdldCkpIHtcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAnJHtzZWNvbmRRdWVyeVRhcmdldH0nYDtcbiAgICAgICAgICBjb25uZWN0b3JfZnVuY3Rpb24oe1xuICAgICAgICAgICAgbGF5ZXJWaWV3LFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBsYXllcixcbiAgICAgICAgICAgIEFuZE9yLFxuICAgICAgICAgICAgZmllbGQ6IGZpcnN0UXVlcnksXG4gICAgICAgICAgICBzb3VyY2U6IFwic2luZ2xlUXVlcnlcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpcnN0UXVlcnl9ICR7cXVlcnlSZXF1ZXN0fSAke3NlY29uZFF1ZXJ5VGFyZ2V0fWA7XG4gICAgICAgICAgcXVlcnkub3V0RmllbGRzID0gW2Ake2ZpcnN0UXVlcnl9YF07XG4gICAgICAgICAgY29ubmVjdG9yX2Z1bmN0aW9uKHtcbiAgICAgICAgICAgIGxheWVyVmlldyxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgcXVlcnlSZXF1ZXN0LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICBBbmRPcixcbiAgICAgICAgICAgIGZpZWxkOiBmaXJzdFF1ZXJ5LFxuICAgICAgICAgICAgc291cmNlOiBcInNpbmdsZVF1ZXJ5XCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY2hvb3NlQW5kT3IgPSAoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IEFuZE9yOiBlLnRhcmdldC52YWx1ZSB9KTtcblxuICBjaG9vc2VBbmRPclNldCA9IChlLCBibG9ja0lkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFNldEJsb2NrID0gWy4uLnRoaXMuc3RhdGUuU2V0QmxvY2tdO1xuICAgIGNvbnN0IGluZGV4ID0gY3VycmVudFNldEJsb2NrLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5ibG9ja0lkID09PSBibG9ja0lkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2V0QmxvY2tJdGVtID0gY3VycmVudFNldEJsb2NrW2luZGV4XTtcbiAgICAgIGN1cnJlbnRTZXRCbG9ja0l0ZW1bXCJBbmRPclNldFwiXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgY3VycmVudFNldEJsb2NrW2luZGV4XSA9IGN1cnJlbnRTZXRCbG9ja0l0ZW07XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBBbmRPclNldDogZS50YXJnZXQudmFsdWUsIFNldEJsb2NrOiBjdXJyZW50U2V0QmxvY2sgfSk7XG4gIH07XG5cbiAgb3BlbkRyb3AgPSAoaWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW91c2VsZWF2ZTogZmFsc2UgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyb3BJZDogaWQgfSk7XG4gICAgY29uc3QgZHJvcERvd25zID0geyAuLi50aGlzLnN0YXRlLmRyb3BEb3ducyB9O1xuICAgIGlmIChkcm9wRG93bnNbaWRdKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcERvd25zOiB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zLCBbaWRdOiBmYWxzZSB9IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZHJvcERvd25zOiB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zLCBbaWRdOiB0cnVlIH0gfSk7XG4gICAgfVxuICB9O1xuXG4gIG9wZW5Ecm9wU2V0ID0gKGlkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudElkID0gaWQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdXNlbGVhdmU6IGZhbHNlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkcm9wSWRTZXQ6IGN1cnJlbnRJZCB9KTtcbiAgICBjb25zdCBkcm9wRG93bnNTZXQgPSB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zU2V0IH07XG4gICAgaWYgKGRyb3BEb3duc1NldFtjdXJyZW50SWRdKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJvcERvd25zU2V0OiB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zU2V0LCBbY3VycmVudElkXTogZmFsc2UgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJvcERvd25zU2V0OiB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zU2V0LCBbY3VycmVudElkXTogdHJ1ZSB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNsb3NlRHJvcCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlLCBhdXRPcGVuOiBmYWxzZSB9KTtcblxuICBjbG9zZURyb3BPbmNsaWNrT3V0c2lkZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kcm9wSWQgIT09IG51bGwgJiYgdGhpcy5zdGF0ZS5tb3VzZWxlYXZlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJvcERvd25zOiB7IC4uLnRoaXMuc3RhdGUuZHJvcERvd25zLCBbdGhpcy5zdGF0ZS5kcm9wSWRdOiBmYWxzZSB9LFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZHJvcERvd25zU2V0OiB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5kcm9wRG93bnNTZXQsXG4gICAgICAgICAgW3RoaXMuc3RhdGUuZHJvcElkU2V0XTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuZHJvcElkU2V0ICE9PSBudWxsICYmIHRoaXMuc3RhdGUubW91c2VsZWF2ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyb3BEb3duc1NldDoge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZHJvcERvd25zU2V0LFxuICAgICAgICAgIFt0aGlzLnN0YXRlLmRyb3BJZFNldF06IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbW91c2VsZWF2ZTogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9ubW91c2VMZWF2ZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBtb3VzZWxlYXZlOiB0cnVlIH0pO1xuXG4gIC8vIG1ldGhvZHMgZm9yIGF0dHJpYnV0ZSB0YWJsZVxuICBnZXRBbGxDaGVja2VkTGF5ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBXaWRnZXQuYWN0aXZlVjtcbiAgICBjb25zdCBhbGxNYXBMYXllcnMgPSBhY3RpdmVWaWV3LnZpZXcubWFwLmFsbExheWVycz8uaXRlbXM7XG4gICAgY29uc3QgY2hlY2tlZExheWVycyA9IHRoaXMuc3RhdGUuY2hlY2tlZExheWVyXztcbiAgICBsZXQgbmV3TWFwTGF5ZXIgPSBbXTtcbiAgICBpZiAoYWxsTWFwTGF5ZXJzPy5sZW5ndGggPiAwICYmIGNoZWNrZWRMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgbmV3TWFwTGF5ZXIgPSBhbGxNYXBMYXllcnMucmVkdWNlKChuZXdBcnJheSwgaXRlbSkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tlZExheWVycy5pbmNsdWRlcyhpdGVtLmlkKSkge1xuICAgICAgICAgIG5ld0FycmF5LnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgICAgfSwgW10pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3TWFwTGF5ZXI7XG4gIH07XG5cbiAgZ2V0QWN0aXZlVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gV2lkZ2V0LmFjdGl2ZVY7XG4gICAgcmV0dXJuIGFjdGl2ZVZpZXc7XG4gIH07XG5cbiAgZ2V0QWxsSmltdUxheWVyVmlld3MgPSAoKSA9PiB7XG4gICAgY29uc3QgamltdUxheWVyVmlld3MgPSBXaWRnZXQuamltdUxheWVyVmlld3o7XG4gICAgcmV0dXJuIGppbXVMYXllclZpZXdzO1xuICB9O1xuXG4gIGNsZWFySGlnaGxpZ2h0cyA9IChsYXllclZpZXc6IGFueSkgPT4ge1xuICAgIGlmIChsYXllclZpZXcpIHtcbiAgICAgIGxheWVyVmlldy5faGlnaGxpZ2h0SWRzLmNsZWFyKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbm5lY3Rvcl9mdW5jdGlvbiA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbGF5ZXJWaWV3LFxuICAgICAgcXVlcnksXG4gICAgICBxdWVyeVJlcXVlc3QsXG4gICAgICB2YWx1ZXMsXG4gICAgICBsYXllcixcbiAgICAgIEFuZE9yLFxuICAgICAgZmllbGQsXG4gICAgICBzb3VyY2UsXG4gICAgfSA9IGRhdGE7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGlnbGlnaHRTZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHRzKGxheWVyVmlldyk7XG4gICAgICB0aGlzLnN0YXRlLmhpZ2xpZ2h0U2VsZWN0ZWQuZm9yRWFjaCgoaGlnaGxpZ2h0KSA9PiB7XG4gICAgICAgIGhpZ2hsaWdodC5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0cyA9IHsgZmVhdHVyZXM6IFtdIH07XG4gICAgbGV0IGFkZGl0aW9uYWxRdWVyeSA9IG51bGw7XG4gICAgaWYgKHNvdXJjZSA9PT0gXCJzaW5nbGVRdWVyeVwiKSB7XG4gICAgICBhZGRpdGlvbmFsUXVlcnkgPSBxdWVyeS53aGVyZTtcbiAgICAgIGlmICh0aGlzLnF1ZXJ5QXJyYXkubGVuZ3RoIDwgdGhpcy5zdGF0ZS53aGVyZUNsYXVzZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBhZGRpdGlvbmFsUXVlcnkgPSBxdWVyeS53aGVyZSArIFwiIFwiICsgQW5kT3I7XG4gICAgICB9XG4gICAgICB0aGlzLnF1ZXJ5QXJyYXkucHVzaChhZGRpdGlvbmFsUXVlcnkpO1xuICAgICAgdGhpcy5vdXRmaWVsZHMucHVzaChgJHtmaWVsZH1gKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5xdWVyeUFycmF5Lmxlbmd0aCA+PSB0aGlzLnN0YXRlLndoZXJlQ2xhdXNlcy5sZW5ndGggfHxcbiAgICAgIHNvdXJjZSA9PT0gXCJzZXRRdWVyeVwiXG4gICAgKSB7XG4gICAgICBsZXQgY3VycmVudFF1ZXJ5ID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnF1ZXJ5QXJyYXkubGVuZ3RoKSBjdXJyZW50UXVlcnkgPSB0aGlzLnF1ZXJ5QXJyYXkuam9pbihcIiBcIik7XG4gICAgICBpZiAodGhpcy5zdGF0ZS53aGVyZUNsYXVzZVNldD8ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHsgc2V0UXVlcnlTdHJpbmcsIG91dEZpZWxkcyB9ID0gdGhpcy5zZW5kUXVlcnlTZXQoKTtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gXCJzaW5nbGVRdWVyeVwiKSB7XG4gICAgICAgICAgaWYgKHNldFF1ZXJ5U3RyaW5nKVxuICAgICAgICAgICAgY3VycmVudFF1ZXJ5ICs9IFwiIFwiICsgQW5kT3IgKyBcIiBcIiArIFwiKFwiICsgc2V0UXVlcnlTdHJpbmcgKyBcIilcIjtcbiAgICAgICAgICBpZiAob3V0RmllbGRzPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMub3V0ZmllbGRzID0gdGhpcy5vdXRmaWVsZHMuY29uY2F0KG91dEZpZWxkcyk7XG4gICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHRoaXMub3V0ZmllbGRzKTtcbiAgICAgICAgICAgIHRoaXMub3V0ZmllbGRzID0gQXJyYXkuZnJvbShzZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2V0UXVlcnlTdHJpbmcpIGN1cnJlbnRRdWVyeSA9IHNldFF1ZXJ5U3RyaW5nO1xuICAgICAgICAgIGlmIChvdXRGaWVsZHM/Lmxlbmd0aCkgdGhpcy5vdXRmaWVsZHMgPSBvdXRGaWVsZHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5vdXRmaWVsZHMuaW5jbHVkZXMoXCJPQkpFQ1RJRFwiKSkge1xuICAgICAgICB0aGlzLm91dGZpZWxkcy5wdXNoKFwiT0JKRUNUSURcIik7XG4gICAgICB9XG4gICAgICBxdWVyeS5vdXRGaWVsZHMgPSB0aGlzLm91dGZpZWxkcztcbiAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcbiAgICAgIHF1ZXJ5LndoZXJlID0gY3VycmVudFF1ZXJ5O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0cyA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChsYXllclZpZXc/LnF1ZXJ5RmVhdHVyZXMpXG4gICAgICAgICAgcmVzdWx0cyA9IGF3YWl0IGxheWVyVmlldy5xdWVyeUZlYXR1cmVzKHF1ZXJ5KTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXllcj8ucXVlcnlGZWF0dXJlcykgcmVzdWx0cyA9IGF3YWl0IGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpO1xuICAgICAgbGV0IGNoZWNrZWRMYXllcl8gPSBbZGF0YS5sYXllclZpZXcubGF5ZXIuaWRdO1xuICAgICAgY29uc3QgaGlnaGxpZ2h0SWRzID0gaGVscGVyLmdldEhpZ2hsaWdodGVkSWRzKHJlc3VsdHMuZmVhdHVyZXMpO1xuICAgICAgaWYgKGhpZ2hsaWdodElkcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaGlnbGlnaHRTZWxlY3RlZEFyciA9IFtdO1xuICAgICAgICBoaWdobGlnaHRJZHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICBjb25zdCBoaWdobGlnaHRTZWxlY3RlZCA9IGxheWVyVmlldy5oaWdobGlnaHQoZWwpO1xuICAgICAgICAgIGhpZ2xpZ2h0U2VsZWN0ZWRBcnIucHVzaChoaWdobGlnaHRTZWxlY3RlZCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBhcnJheUdlb21ldHJ5ID0gW107XG4gICAgICAgICAgcmVzdWx0cy5mZWF0dXJlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeUVuZ2luZS5idWZmZXIoZWwuZ2VvbWV0cnksIDEsIFwibWV0ZXJzXCIpO1xuICAgICAgICAgICAgYXJyYXlHZW9tZXRyeS5wdXNoKG5ld0dlb21ldHJ5KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoYXJyYXlHZW9tZXRyeS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaWZpZWRHZW9tdHJ5ID0gZ2VvbWV0cnlFbmdpbmUudW5pb24oYXJyYXlHZW9tZXRyeSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh1bmlmaWVkR2VvbXRyeS5leHRlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGlnbGlnaHRTZWxlY3RlZDogaGlnbGlnaHRTZWxlY3RlZEFyciB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2VsZWN0ZWRMYXllcnNDb250ZW50cyA9IGhlbHBlci5nZXRTZWxlY3RlZENvbnRlbnRzTGF5ZXIoXG4gICAgICAgIFtyZXN1bHRzLmZlYXR1cmVzXSxcbiAgICAgICAgY2hlY2tlZExheWVyX1xuICAgICAgKTtcbiAgICAgIGNvbnN0IG51bWJlck9mQXR0cmlidXRlcyA9IGhlbHBlci5nZXROdW1iZXJPZkF0dHJpYnV0ZXMoXG4gICAgICAgIHNlbGVjdGVkTGF5ZXJzQ29udGVudHNcbiAgICAgICk7XG4gICAgICBsZXQgYWN0aXZlViA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGF5ZXJDb250ZW50czogc2VsZWN0ZWRMYXllcnNDb250ZW50cyB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2VkTGF5ZXJfOiBjaGVja2VkTGF5ZXJfIH0pO1xuICAgICAgY29uc3QgZ2VvbWV0cnkgPSBQb2x5Z29uLmZyb21FeHRlbnQobGF5ZXJWaWV3LnZpZXcuZXh0ZW50KS50b0pTT04oKTtcbiAgICAgIGNvbnN0IGxheWVyT3BlbiA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5LFxuICAgICAgICB0eXBlU2VsZWN0ZWQ6IFwiY29udGFpbnNcIixcbiAgICAgIH07XG4gICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGF5ZXJWaWV3ID0gbGF5ZXJWaWV3O1xuICAgICAgICBjb25zdCBpc0xheWVyQ2hlY2tlZCA9IHRoaXMuc3RhdGUuaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgY29uc3QgYWxsQ2hlY2tlZExheWVycyA9IHRoaXMuZ2V0QWxsQ2hlY2tlZExheWVycygpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmluaXQoe1xuICAgICAgICAgIHJlc3VsdHM6IFtyZXN1bHRzLmZlYXR1cmVzXSxcbiAgICAgICAgICBhbGxDaGVja2VkTGF5ZXJzOiBhbGxDaGVja2VkTGF5ZXJzLFxuICAgICAgICAgIGlzTGF5ZXJDaGVja2VkOiBpc0xheWVyQ2hlY2tlZCxcbiAgICAgICAgICBjaGVja2VkTGF5ZXJzOiBjaGVja2VkTGF5ZXJfLFxuICAgICAgICAgIG51bWJlck9mQXR0cmlidXRlczogbnVtYmVyT2ZBdHRyaWJ1dGVzLFxuICAgICAgICAgIGxheWVyT3BlbjogbGF5ZXJPcGVuLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IGZhbHNlIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuZGlzcGF0Y2hpbmdBbGwoKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbU5vdEZvdW5kOiBudWxsIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyKSB0aGlzLnNldFN0YXRlKHsgaXRlbU5vdEZvdW5kOiB0aGlzLm5scyhlcnIpIH0pO1xuICAgICAgICAgIHRoaXMuYXR0cmlidXRlVGFibGVDb25uZWN0b3IuY2xvc2VUYWJsZSgpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiB0cnVlIH0pO1xuICAgICAgICAgIHRoaXMucmV0dXJuVG9PcmlnaW5hbEV4dGVudCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNBdHRyaWJ1dGVUYWJsZUNsb3NlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtTm90Rm91bmQ6IHRoaXMubmxzKFwibm9JdGVtU2VsZWN0ZWRcIiksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJldHVyblRvT3JpZ2luYWxFeHRlbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuVG9PcmlnaW5hbEV4dGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc7XG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXc7XG4gICAgdmlldy5nb1RvKHsgY2VudGVyOiB2aWV3LmNlbnRlciwgem9vbTogV2lkZ2V0LmluaXRpYWxab29tIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZCA9IChlLCB2YWwpID0+IHtcbiAgICBsZXQgY291bnRlciA9IFsuLi50aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWRdO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBjb3VudGVyLnB1c2godmFsKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudGVySXNDaGVja2VkOiBjb3VudGVyIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgaW5kZXggPSBjb3VudGVyLmluZGV4T2YodmFsKTtcbiAgICAgIGlmIChpbmRleCA+IC0xKSBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY291bnRlcklzQ2hlY2tlZDogY291bnRlciB9KTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb25SZWZyZXNoID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdExheWVyTGlzdCA9IHRoaXMuc3RhdGUucmVzdWx0TGF5ZXJMaXN0O1xuICAgIGNvbnN0IGppbXVNYXBWaWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldztcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICByZXN1bHRMYXllckxpc3Q6IHJlc3VsdExheWVyTGlzdCxcbiAgICAgIGppbXVNYXBWaWV3OiBqaW11TWFwVmlldyxcbiAgICAgIGlzQXR0cmlidXRlVGFibGVDbG9zZWQ6IHRydWUsXG4gICAgfSk7XG4gICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXc7XG4gICAgdmlldy5nb1RvKHsgY2VudGVyOiB2aWV3LmNlbnRlciwgem9vbTogV2lkZ2V0LmluaXRpYWxab29tIH0pO1xuICAgIGlmICh0aGlzLmN1cnJlbnRMYXllclZpZXcpIHRoaXMuY2xlYXJIaWdobGlnaHRzKHRoaXMuY3VycmVudExheWVyVmlldyk7XG4gIH07XG5cbiAgLy9UT0RPIGNvbmZpZyBhYmlsaXRhcmUgdGFiIHRydWUvZmFsc2VcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRhYmxlU2V0Q291bnRzID0gKFxuICAgICAgdGFibGVTZXRDb3VudHM6IHsgaWQ6IHN0cmluZzsgZGVsZXRlZDogYm9vbGVhbiB9W11cbiAgICApID0+IHtcbiAgICAgIGxldCBjb3VudHMgPSAwO1xuICAgICAgaWYgKHRhYmxlU2V0Q291bnRzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjb3BpZWRUYWJsZVNldENvdW50cyA9IFsuLi50YWJsZVNldENvdW50c107XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbSA9IGNvcGllZFRhYmxlU2V0Q291bnRzLmZpbHRlcihcbiAgICAgICAgICAoaXRlbSkgPT4gIWl0ZW0uZGVsZXRlZFxuICAgICAgICApO1xuICAgICAgICBjb3VudHMgPSBmaWx0ZXJlZEl0ZW0ubGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvdW50cztcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuc3RhdGUgPT09IFwiQ0xPU0VEXCIgJiYgIXRoaXMuc3RhdGUud2lkZ2V0U3RhdGVDbG9zZWRDaGVja2VkKSB7XG4gICAgICBjb25zdCBqaW11TWFwVmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc7XG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcbiAgICAgIGNvbnN0IHJlc3VsdExheWVyTGlzdCA9IHRoaXMuc3RhdGUucmVzdWx0TGF5ZXJMaXN0O1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLmF0dHJpYnV0ZVRhYmxlQ29ubmVjdG9yLmNsb3NlVGFibGUoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICByZXN1bHRMYXllckxpc3Q6IHJlc3VsdExheWVyTGlzdCxcbiAgICAgICAgamltdU1hcFZpZXc6IGppbXVNYXBWaWV3LFxuICAgICAgICBpc0F0dHJpYnV0ZVRhYmxlQ2xvc2VkOiB0cnVlLFxuICAgICAgICB3aWRnZXRTdGF0ZU9wZW5lZENoZWNrZWQ6IGZhbHNlLFxuICAgICAgICB3aWRnZXRTdGF0ZUNsb3NlZENoZWNrZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHZpZXcuZ29Ubyh7IGNlbnRlcjogdmlldy5jZW50ZXIsIHpvb206IFdpZGdldC5pbml0aWFsWm9vbSB9KTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRMYXllclZpZXcpIHRoaXMuY2xlYXJIaWdobGlnaHRzKHRoaXMuY3VycmVudExheWVyVmlldyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnN0YXRlID09IFwiT1BFTkVEXCIgJiYgIXRoaXMuc3RhdGUud2lkZ2V0U3RhdGVPcGVuZWRDaGVja2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgd2lkZ2V0U3RhdGVDbG9zZWRDaGVja2VkOiBmYWxzZSxcbiAgICAgICAgd2lkZ2V0U3RhdGVPcGVuZWRDaGVja2VkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RSZXNpemVEZXRlY3RvciBoYW5kbGVXaWR0aCBoYW5kbGVIZWlnaHQ+XG4gICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWRnZXQtYXR0cmlidXRlLXRhYmxlIGppbXUtd2lkZ2V0XCJcbiAgICAgICAgICAgIGlkPVwid3JhcFwiXG4gICAgICAgICAgICByZWY9XCJ3cmFwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2VEcm9wT25jbGlja091dHNpZGUoKTtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoXCJ1c2VNYXBXaWRnZXRJZHNcIikgJiZcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHNbMF0gJiYgKFxuICAgICAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XG4gICAgICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMuYWN0aXZlVmlld0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWFyY2gtYWR2YW5jZWQtdGFiLUFtYml0b1wiIHRpdGxlPVwiQW1iaXRvXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGNvbnRhaW5lci1mbHVpZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gZmxleC1jb2x1bW5cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm09XCJiYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiU2VsZXppb25hcmUgcHJpbWEgaWwgbGF5ZXIsIHBvaSBjb250aW51YSBjb24gaWwgY29zdHJ1dHRvcmUgZGVsbGEgcXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInctMTAwXCI+U2VsZXppb25hIGlsIGxheWVyOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWxlY3RMYXllcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZXppb25hIGlsIExheWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRTZWxlY3RlZElkfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlc3VsdExheWVyTGlzdC5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VsLmxheWVySUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRVcmw9e2VsLmVsZW1lbnQucGFyc2VkVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmVsZW1lbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93QWRkU2VsZWN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY29ycmlzcG9uZGVudGkgYWxsYVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWd1ZW50ZSBlc3ByZXNzaW9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNob29zZUFuZE9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZSBjb3JyaXNwb25kb25vIGEgdHV0dGUgbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJBTkRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiQU5EXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHV0dGUgbGUgZXNwcmVzc2lvbmkgc2VndWVudGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJPUlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlIGNvcnJpc3BvbmRvbm8gYWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmEgcXVhbHNpYXNpIGRlbGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7d2lkdGggPiA2MDAgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMSBtYi0zIGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBnYXA6IFwiMiVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRUYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFnZ2l1bmdpIGVzcHJlc3Npb25lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkQmxvY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249Jzxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNy41IDBhLjUuNSAwIDAgMC0uNS41VjdILjVhLjUuNSAwIDAgMCAwIDFIN3Y2LjVhLjUuNSAwIDAgMCAxIDBWOGg2LjVhLjUuNSAwIDAgMCAwLTFIOFYuNWEuNS41IDAgMCAwLS41LS41WlwiIGZpbGw9XCIjMDAwXCI+PC9wYXRoPjwvc3ZnPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5BZ2dpdW5naSBzZXQgZGkgZXNwcmVzc2lvbmk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZW5kUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFwcGxpY2E8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5mdW5jdGlvblJlZnJlc2h9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPlJpY2FyaWNhcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7NTkwID4gd2lkdGggJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogXCIyJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmN1cnJlbnRUYXJnZXRUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRUYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj0nPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03LjUgMGEuNS41IDAgMCAwLS41LjVWN0guNWEuNS41IDAgMCAwIDAgMUg3djYuNWEuNS41IDAgMCAwIDEgMFY4aDYuNWEuNS41IDAgMCAwIDAtMUg4Vi41YS41LjUgMCAwIDAtLjUtLjVaXCIgZmlsbD1cIiMwMDBcIj48L3BhdGg+PC9zdmc+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFnZ2l1bmdpIGVzcHJlc3Npb25lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jdXJyZW50VGFyZ2V0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkQmxvY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249Jzxzdmcgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNNy41IDBhLjUuNSAwIDAgMC0uNS41VjdILjVhLjUuNSAwIDAgMCAwIDFIN3Y2LjVhLjUuNSAwIDAgMCAxIDBWOGg2LjVhLjUuNSAwIDAgMCAwLTFIOFYuNWEuNS41IDAgMCAwLS41LS41WlwiIGZpbGw9XCIjMDAwXCI+PC9wYXRoPjwvc3ZnPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5BZ2dpdW5naSBzZXQgZGkgZXNwcmVzc2lvbmk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZW5kUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPkFwcGxpY2E8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNXB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5mdW5jdGlvblJlZnJlc2h9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPlJpY2FyaWNhcmU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwJVwiLCBvdmVyZmxvd1k6IFwic2Nyb2xsXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWJsZXMubWFwKChlbCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2Byb3ctJHtpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0PXt0aGlzLnN0YXRlLnJlc3VsdHNMYXllclNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuRHJvcEQ9e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd249eygpID0+IHRoaXMuZHJvcERvd24oZWwuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZVF1ZXJ5PXt0aGlzLnN0YXRlLmRyb3Bkb3duVmFsdWVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17dGhpcy5zdGF0ZS5pc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVySXNDaGVja2VkPXt0aGlzLnN0YXRlLmNvdW50ZXJJc0NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkVG9RdWVyeT17dGhpcy5zdGF0ZS5jaGVja2VkVG9RdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlcz17dGhpcy5zdGF0ZS50YWJsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNJZD17ZWwuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXM9e3RoaXMuc3RhdGUud2hlcmVDbGF1c2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UXVlcnlBdHRyaWJ1dGU9e3RoaXMuZ2V0UXVlcnlBdHRyaWJ1dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRRdWVyeT17dGhpcy5nZXRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVRoaXJkUXVlcnk9e3RoaXMudGhpcmRRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRJbnB1dEhhbmRsZXI9e3RoaXMudGV4dElucHV0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbUhhbmRsZXI9e3RoaXMuZHJvcGRvd25JdGVtQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rmlyc3RJbmNsdWRlZEhhbmRsZXI9e3RoaXMudGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dFNlY29uZEluY2x1ZGVkSGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZHJvcERvd25Ub2dnbGVyPXt0aGlzLmRyb3BEb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tCb3g9e3RoaXMuaGFuZGxlQ2hlY2tCb3h9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVUYWJsZT17KCkgPT4gdGhpcy5kZWxldGVUYWJsZShlbC5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dGhpcy51bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ2hlY2tCb3g9e3RoaXMub25DaGFuZ2VDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wPXt0aGlzLm9wZW5Ecm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXt0aGlzLmNsb3NlRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZS5vcGVuZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRPcGVuPXt0aGlzLnN0YXRlLmF1dE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXt0aGlzLnN0YXRlLm1vdXNlbGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmU9e3RoaXMub25tb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkPXt0aGlzLmZ1bmN0aW9uQ291bnRlcklzQ2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3ducz17dGhpcy5zdGF0ZS5kcm9wRG93bnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTm90Rm91bmQ9e3RoaXMuc3RhdGUuaXRlbU5vdEZvdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJZD17dGhpcy5zdGF0ZS5zZWxlY3RlZElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYmxlPXtlbH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTglXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDVlY2FcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuU2V0QmxvY2subWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHMgPSB0YWJsZVNldENvdW50cyhlbC50YWJsZXNTZXQpO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudHMgPCAyID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cyA9PSAxID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY29ycmlzcG9uZGVudGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsYSBzZWd1ZW50ZSBlc3ByZXNzaW9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNob29zZUFuZE9yU2V0KGUsIGVsLmJsb2NrSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIgVmlzdWFsaXp6YSBsZSBmZWF0dXJlIG5lbCBsYXllciBjaGUgY29ycmlzcG9uZG9ubyBhIHR1dHRlIGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiQU5EXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkFORFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpc3VhbGl6emEgbGUgZmVhdHVyZSBuZWwgbGF5ZXIgY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ycmlzcG9uZG9ubyBhIHR1dHRlIGxlIGVzcHJlc3Npb25pIHNlZ3VlbnRpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiT1JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXN1YWxpenphIGxlIGZlYXR1cmUgbmVsIGxheWVyIGNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJpc3BvbmRvbm8gYWQgdW5hIHF1YWxzaWFzaSBkZWxsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzcHJlc3Npb25pIHNlZ3VlbnRpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZUJsb2NrKGVsLmJsb2NrSWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpPT50aGlzLmRlbGV0ZUJsb2NrQWxsKHtlbH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZU91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2VsLmJsb2NrSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5hZGRUd29UYWJsZShlbC5ibG9ja0lkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzT3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLnRhYmxlc1NldC5tYXAoKGlubmVyRWwsIGksIFRhYmxlQXJyYXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkU2V0VGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgcm93LSR7aX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdD17dGhpcy5zdGF0ZS5yZXN1bHRzTGF5ZXJTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbkRyb3BEPXt0aGlzLnN0YXRlLmlzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3BEb3duPXsoKSA9PiB0aGlzLmRyb3BEb3duU2V0KGVsLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWVRdWVyeT17dGhpcy5zdGF0ZS5kcm9wZG93blZhbHVlUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e3RoaXMuc3RhdGUuaXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRlcklzQ2hlY2tlZD17dGhpcy5zdGF0ZS5jb3VudGVySXNDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFRvUXVlcnk9e3RoaXMuc3RhdGUuY2hlY2tlZFRvUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgQWRkIHNldCB0YWJsZS4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlc1NldD17dGhpcy5zdGF0ZS50YWJsZXNTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZXNTZXRJZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2lubmVyRWwuaWR9YCArIFwiLVwiICsgYCR7ZWwuYmxvY2tJZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZUNsYXVzZXNTZXQ9e3RoaXMuc3RhdGUud2hlcmVDbGF1c2VTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmQgZm9yIEFkZCBzZXQgdGFibGUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRRdWVyeUF0dHJpYnV0ZT17dGhpcy5nZXRRdWVyeUF0dHJpYnV0ZVNldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFF1ZXJ5PXt0aGlzLmdldFF1ZXJ5U2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlVGhpcmRRdWVyeT17dGhpcy50aGlyZFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dElucHV0SGFuZGxlcj17dGhpcy50ZXh0SW5wdXRIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtSGFuZGxlcj17dGhpcy5kcm9wZG93bkl0ZW1DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaXJzdEluY2x1ZGVkSGFuZGxlcj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dEZpcnN0SW5jbHVkZWRIYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0U2Vjb25kSW5jbHVkZWRIYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wRG93blRvZ2dsZXI9e3RoaXMuZHJvcERvd25TZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGVja0JveD17dGhpcy5oYW5kbGVDaGVja0JveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRhYmxlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCbG9ja1RhYmxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2lubmVyRWwuaWR9YCArIFwiLVwiICsgYCR7ZWwuYmxvY2tJZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2VsLmJsb2NrSWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml2b2NvU2VsZWN0SGFuZGxlcj17dGhpcy51bml2b2NvU2VsZWN0SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ2hlY2tCb3g9e3RoaXMub25DaGFuZ2VDaGVja0JveFNldH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Ecm9wPXt0aGlzLm9wZW5Ecm9wU2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEcm9wPXt0aGlzLmNsb3NlRHJvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZS5vcGVuZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRPcGVuPXt0aGlzLnN0YXRlLmF1dE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWxlYXZlPXt0aGlzLnN0YXRlLm1vdXNlbGVhdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbm1vdXNlTGVhdmU9e3RoaXMub25tb3VzZUxlYXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25Db3VudGVySXNDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mdW5jdGlvbkNvdW50ZXJJc0NoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duc1NldD17dGhpcy5zdGF0ZS5kcm9wRG93bnNTZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtTm90Rm91bmQ9e3RoaXMuc3RhdGUuaXRlbU5vdEZvdW5kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0RlbGV0ZT17Y291bnRzID4gMiA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dCbG9ja0RlbGV0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cyA9PT0gMiAmJiBpID09IDAgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3dEZWxldGU9e1RhYmxlQXJyYXkubGVuZ3RoID4gMiA/IHRydWU6ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93QmxvY2tEZWxldGU9e1RhYmxlQXJyYXkubGVuZ3RoID09PSAyICYmIGk9PTAgPyB0cnVlOmZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ9e2VsLmJsb2NrSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVCbG9ja0FsbD17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVCbG9ja0FsbCh7IGVsLCBpbm5lckVsIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFibGU9e2lubmVyRWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLml0ZW1Ob3RGb3VuZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtPVwiYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGhpcy5zdGF0ZS5pdGVtTm90Rm91bmR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2l0aEljb25cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0UmVzaXplRGV0ZWN0b3I+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9