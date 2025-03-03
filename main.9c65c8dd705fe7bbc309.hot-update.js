"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetest_deploy_webpack"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\r\n\r\nconst messageBlock = document.querySelector('.msg-box');\r\nmessageBlock.addEventListener('click', () => {\r\n  alert('Hello from the box!')\r\n});\n\n//# sourceURL=webpack://test-deploy-webpack/./src/index.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      (function() {\n        var localsJsonString = undefined;\n        // 1741024806115\n        var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://test-deploy-webpack/./src/styles.scss?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c900ed5614b50fc19800")
/******/ })();
/******/ 
/******/ }
);