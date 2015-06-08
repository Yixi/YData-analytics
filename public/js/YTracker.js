/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Yixi on 6/8/15.
	 */

	'use strict';

	var _utilJs = __webpack_require__(1);

	var _viewEventJs = __webpack_require__(2);

	function bindViewEvent() {
	    (0, _utilJs.on)(window, 'hashchange', _viewEventJs.viewEventHook);
	    (0, _viewEventJs.viewEventHook)(); //hook when enter page.
	}

	function start() {
	    console.log('script running...');

	    bindViewEvent();
	}

	start();

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Yixi on 6/8/15.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _configJs = __webpack_require__(51);

	var _configJs2 = _interopRequireDefault(_configJs);

	function trim(str) {
	    return str.replace(/^\s+/, "").replace(/\s+$/, "");
	}

	function processQuery(json) {
	    var newJson = {};

	    var hash = {
	        referrer: "r",
	        domain: "d",
	        path: "p",
	        search: "s",
	        hash: "h"
	    };

	    for (var key in json) {
	        if (json.hasOwnProperty(key)) {
	            if (hash[key] !== undefined) {
	                newJson[hash[key]] = json[key];
	            } else {
	                newJson[key] = json[key];
	            }
	        }
	    }
	    return newJson;
	}

	function convertToQuery(json) {
	    var query = "";
	    json = processQuery(json);
	    console.log(json);
	    for (var key in json) {
	        if (json.hasOwnProperty(key)) {
	            if (json[key] !== undefined && trim(json[key]) !== "") {
	                query += key + "=" + encodeURIComponent(json[key]) + "&";
	            }
	        }
	    }
	    return query.slice(0, -1);
	}

	function on(handler, event, hook) {
	    handler.addEventListener(event, hook, false);
	}

	function sendToServer(query) {
	    var req = new Image();
	    var url = _configJs2["default"].serverURL + "?" + query;
	    req.src = url;
	}

	exports.sendToServer = sendToServer;
	exports.on = on;
	exports.convertToQuery = convertToQuery;

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Yixi on 6/8/15.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _utilJs = __webpack_require__(1);

	function viewEventHook() {
	    console.log('change');
	    var doc = window.document,
	        referrer = doc.referrer,
	        domain = window.location.host,
	        path = window.location.pathname,
	        search = window.location.search,
	        hash = window.location.hash;

	    var query = (0, _utilJs.convertToQuery)({
	        referrer: referrer,
	        domain: domain,
	        path: path,
	        search: search,
	        hash: hash
	    });

	    (0, _utilJs.sendToServer)(query);
	}

	exports.viewEventHook = viewEventHook;

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Yixi on 6/8/15.
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  serverURL: 'http://localhost:8080/h'
	};
	module.exports = exports['default'];

/***/ }

/******/ });