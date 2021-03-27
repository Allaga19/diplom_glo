/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom"]("main",{

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// // Кнопка вверх\nvar scrollUp = function scrollUp() {\n  var btnUp = document.querySelector('.up');\n\n  function trackScroll() {\n    var scrolled = window.pageYOffset;\n    var clientHeight = document.documentElement.clientHeight;\n    clientHeight = 30; // условия для класса show\n\n    if (scrolled > clientHeight) {\n      btnUp.classList.add('up-show');\n    }\n\n    if (scrolled < clientHeight) {\n      btnUp.classList.remove('up-show');\n    }\n  } // скорость прокрутки.\n\n\n  function backToTop() {\n    if (window.pageYOffset > 0) {\n      window.scrollBy(0, -80);\n      setTimeout(backToTop, 0);\n    }\n  } // scroll отслеживать прокрутку документа(т.е. страницы)\n\n\n  window.addEventListener('scroll', trackScroll); // click отслеживать нажатие на кнопку и приводить в действие скролл «наверх»\n\n  btnUp.addEventListener('click', backToTop);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n//# sourceURL=webpack://diplom/./src/modules/scrollUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ed0fe1950931c9232b0")
/******/ })();
/******/ 
/******/ }
);