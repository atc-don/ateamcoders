/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./angular.json":
/*!**********************!*\
  !*** ./angular.json ***!
  \**********************/
/*! exports provided: $schema, version, newProjectRoot, projects, defaultProject, default */
/***/ (function(module) {

eval("module.exports = {\"$schema\":\"./node_modules/@angular/cli/lib/config/schema.json\",\"version\":1,\"newProjectRoot\":\"projects\",\"projects\":{\"ateamcoders-app\":{\"root\":\"\",\"sourceRoot\":\"src\",\"projectType\":\"application\",\"prefix\":\"app\",\"schematics\":{},\"architect\":{\"build\":{\"builder\":\"@angular-devkit/build-angular:browser\",\"options\":{\"outputPath\":\"dist/ateamcoders-app\",\"index\":\"src/index.html\",\"main\":\"src/main.ts\",\"polyfills\":\"src/polyfills.ts\",\"tsConfig\":\"src/tsconfig.app.json\",\"assets\":[\"src/favicon.ico\",\"src/assets\"],\"styles\":[\"src/styles.css\"],\"scripts\":[]},\"configurations\":{\"production\":{\"fileReplacements\":[{\"replace\":\"src/environments/environment.ts\",\"with\":\"src/environments/environment.prod.ts\"}],\"optimization\":true,\"outputHashing\":\"all\",\"sourceMap\":false,\"extractCss\":true,\"namedChunks\":false,\"aot\":true,\"extractLicenses\":true,\"vendorChunk\":false,\"buildOptimizer\":true,\"budgets\":[{\"type\":\"initial\",\"maximumWarning\":\"2mb\",\"maximumError\":\"5mb\"}]}}},\"serve\":{\"builder\":\"@angular-devkit/build-angular:dev-server\",\"options\":{\"browserTarget\":\"ateamcoders-app:build\"},\"configurations\":{\"production\":{\"browserTarget\":\"ateamcoders-app:build:production\"}}},\"extract-i18n\":{\"builder\":\"@angular-devkit/build-angular:extract-i18n\",\"options\":{\"browserTarget\":\"ateamcoders-app:build\"}},\"test\":{\"builder\":\"@angular-devkit/build-angular:karma\",\"options\":{\"main\":\"src/test.ts\",\"polyfills\":\"src/polyfills.ts\",\"tsConfig\":\"src/tsconfig.spec.json\",\"karmaConfig\":\"src/karma.conf.js\",\"styles\":[\"src/styles.css\"],\"scripts\":[],\"assets\":[\"src/favicon.ico\",\"src/assets\"]}},\"lint\":{\"builder\":\"@angular-devkit/build-angular:tslint\",\"options\":{\"tsConfig\":[\"src/tsconfig.app.json\",\"src/tsconfig.spec.json\"],\"exclude\":[\"**/node_modules/**\"]}}}},\"ateamcoders-app-e2e\":{\"root\":\"e2e/\",\"projectType\":\"application\",\"prefix\":\"\",\"architect\":{\"e2e\":{\"builder\":\"@angular-devkit/build-angular:protractor\",\"options\":{\"protractorConfig\":\"e2e/protractor.conf.js\",\"devServerTarget\":\"ateamcoders-app:serve\"},\"configurations\":{\"production\":{\"devServerTarget\":\"ateamcoders-app:serve:production\"}}},\"lint\":{\"builder\":\"@angular-devkit/build-angular:tslint\",\"options\":{\"tsConfig\":\"e2e/tsconfig.e2e.json\",\"exclude\":[\"**/node_modules/**\"]}}}}},\"defaultProject\":\"ateamcoders-app\"};\n\n//# sourceURL=webpack:///./angular.json?");

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./angular ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./angular */\"./angular.json\");\n\n\n//# sourceURL=webpack:///multi_./angular?");

/***/ })

/******/ });