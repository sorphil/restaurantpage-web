/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_components_about_js"],{

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"about\": () => (/* binding */ about)\n/* harmony export */ });\nconst firstSectionGenerate = () => {\n  let firstSection = document.querySelector('.section-1');\n  firstSection.innerHTML = `<img  class = \"logoImg\" src =\"${__webpack_require__(/*! ../assets/images/logo.png */ \"./src/assets/images/logo.png\").default}\">\n                        <div data-aos = \"fade-up\" class = \"head\">ABOUT US  </div>\n                        <div data-aos = \"fade-up\" class =\"subhead\">THE PEOPLE BEHIND THE MEAL</div>`;\n};\n\nconst secondSectionGenerate = () => {\n  let secondSection = document.querySelector('.section-2');\n  secondSection.innerHTML = `<div class = \"block\" data-aos=\"fade-up\">\n                                    <div class = \"subhead\" >OUR VOICE</div>\n                                    <div class = \"subheadSuper\" >\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\n                                        Sed nec mi ac libero porta imperdiet. Etiam eleifend, erat eu accumsan ultrices. <br>\n                                        Fusce auctor, lacus eget mollis convallis, enim leo cursus odio, sed venenatis orci. <br>\n                                        Aliquam consectetur arcu mauris.  Curabitur vel pharetra nibh.<br>\n                                        Id tincidunt quam pulvinar at, tristique risus ut eros. <br>\n                                        Morbi augue nisi, convallis eget fermentum rutrum, fermentum at purus. \n                                    </div>\n                                </div> \n                                <div  class = \"block\" data-aos=\"fade-up\">\n                                    <div  class = \"subhead\">OUR MISSION</div>\n                                    <div  class = \"subheadSuper\">\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\n                                        Sed nec mi ac libero porta imperdiet. Etiam eleifend, erat eu accumsan ultrices. <br>\n                                        Fusce auctor, lacus eget mollis convallis, enim leo cursus odio, sed venenatis orci. <br>\n                                        Aliquam consectetur arcu mauris.  Curabitur vel pharetra nibh.<br>\n                                        Id tincidunt quam pulvinar at, tristique risus ut eros. <br>\n                                        Morbi augue nisi, convallis eget fermentum rutrum, fermentum at purus. \n                                     </div>\n                                </div>\n                                <div class = \"block\" data-aos=\"fade-up\">\n                                    <div  class = \"subhead\">OUR VISION</div>\n                                    <div  class = \"subheadSuper\">\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>\n                                        Sed nec mi ac libero porta imperdiet. Etiam eleifend, erat eu accumsan ultrices. <br>\n                                        Fusce auctor, lacus eget mollis convallis, enim leo cursus odio, sed venenatis orci <br>\n                                        Aliquam consectetur arcu mauris. Curabitur vel pharetra nibh. <br>\n                                        Id tincidunt quam pulvinar at, tristique risus ut eros. <br>\n                                        Morbi augue nisi, convallis eget fermentum rutrum, fermentum at purus. \n                                    </div>\n                                </div>\n                             `;\n};\n\nconst thirdSectionGenerate = () => {\n  let thirdSection = document.querySelector('.section-3');\n  let url = [__webpack_require__(/*! ../assets/images/about (1).jpg */ \"./src/assets/images/about (1).jpg\").default, __webpack_require__(/*! ../assets/images/about (2).jpg */ \"./src/assets/images/about (2).jpg\").default, __webpack_require__(/*! ../assets/images/about (3).jpg */ \"./src/assets/images/about (3).jpg\").default, __webpack_require__(/*! ../assets/images/about (4).jpg */ \"./src/assets/images/about (4).jpg\").default];\n  thirdSection.innerHTML = `<div data-aos=\"fade-up\" class = \"head\">OUR TEAM</div>`;\n  const imgFeed = document.createElement('div');\n  imgFeed.className = \"imgFeed\";\n  let imgRow = document.createElement('div');\n  imgRow.className = \"imgRow\";\n\n  for (let i = 0; i < url.length; i++) {\n    const img = document.createElement('img');\n    img.src = url[i];\n    img.className = \"imgRect\";\n    img.dataset.aos = \"fade-up\";\n    imgRow.appendChild(img);\n\n    if (i == 1 || i == 3) {\n      imgFeed.appendChild(imgRow);\n      imgRow = document.createElement('div');\n      imgRow.className = \"imgRow\";\n    }\n  }\n\n  thirdSection.appendChild(imgFeed);\n};\n\nconst about = () => {\n  firstSectionGenerate();\n  secondSectionGenerate();\n  thirdSectionGenerate();\n  return;\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/about.js?");

/***/ }),

/***/ "./src/assets/images/about (1).jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/about (1).jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/about (1).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/about_(1).jpg?");

/***/ }),

/***/ "./src/assets/images/about (2).jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/about (2).jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/about (2).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/about_(2).jpg?");

/***/ }),

/***/ "./src/assets/images/about (3).jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/about (3).jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/about (3).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/about_(3).jpg?");

/***/ }),

/***/ "./src/assets/images/about (4).jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/about (4).jpg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/about (4).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/about_(4).jpg?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/logo.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/logo.png?");

/***/ })

}]);