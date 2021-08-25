/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_components_menu_js"],{

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst firstSectionGenerate = () => {\n  let firstSection = document.querySelector('.section-1');\n  firstSection.innerHTML = `<img class = \"logoImg\" src =\"${__webpack_require__(/*! ../assets/images/logo.png */ \"./src/assets/images/logo.png\").default}\">\n                        <div data-aos = \"fade-up\" class = \"head\">MENU </div>\n                        <div data-aos = \"fade-up\" class =\"subhead\">FOOD OF ONLY THE HIGHEST QUALITY</div>`;\n};\n\nconst secondSectionGenerate = () => {\n  let secondSection = document.querySelector('.section-2');\n  secondSection.innerHTML = `<div class = \"block\" data-aos=\"fade-up\">\n                                    <div class = \"head\" >FOOD</div>\n                                    <div class = \"subBlock\" data-aos=\"fade-up\">\n                                        <div class = \"subhead\" >MEAT</div>\n                                            <div class = \"subheadSuper\" >S.P Mini Burgers ----- $10</div>\n                                            <div class = \"subheadSuper\" >Grilled Lamb Meatballs ----- $15</div>\n                                            <div class = \"subheadSuper\" >Slow Smoked Crispy Pork Belly ----- $20   </div>\n                                            <div class = \"subheadSuper\" >BBQ'D Bone Marrow ----- $16</div>\n                                    </div>\n                                    <div class = \"subBlock\" data-aos=\"fade-up\">\n                                        <div class = \"subhead\" >SEAFOOD</div>\n                                            <div class = \"subheadSuper\" >Shrimp Wontons ----- $10</div>\n                                            <div class = \"subheadSuper\" >Smoked Wild Black Cod ----- $14</div>\n                                            <div class = \"subheadSuper\" >BBQ'D Octopus ----- $12</div>\n                                            <div class = \"subheadSuper\" >Fried Oyster Wrap ----- $8</div>\n                                    </div> \n                                    <div class = \"subBlock\" data-aos=\"fade-up\">\n                                        <div class = \"subhead\" >POULTRY</div>\n                                            <div class = \"subheadSuper\" >Crispy Chicken Skin Cracklings ----- $6</div>\n                                            <div class = \"subheadSuper\" >Fried Chicken Sliders ----- $15</div>\n                                            <div class = \"subheadSuper\" >Chicken Liver Mousse ----- $12   </div>\n                                            <div class = \"subheadSuper\" >Korean BBQ'D Half Chicken ----- $22</div>\n                                    </div> \n                                        \n                                <div class = \"block\" data-aos=\"fade-up\">\n                                    <div class = \"head\" >WINE</div>\n                                    <div class = \"subBlock\" data-aos=\"fade-up\">\n                                        <div class = \"subhead\" >SPARKLINGS</div>\n                                            <div class = \"subheadSuper\" >Roederer Estate Brut ----- $14</div>\n                                            <div class = \"subheadSuper\" >Schramsberg Blanc De Blancs ----- $17</div>\n                                            <div class = \"subheadSuper\" >J Vineyards Brut Rose  ----- $14</div>\n                                    </div> \n                                    <div class = \"subBlock\" data-aos=\"fade-up\">\n                                        <div class = \"subhead\" >REDS</div>\n                                            <div class = \"subheadSuper\" >Martinelli Bella Vigna Pinot Noir  ----- $37</div>\n                                            <div class = \"subheadSuper\" >Freeman Keefer Ranch Pinot Noir ----- $40</div>\n                                            <div class = \"subheadSuper\" >Novy Zinfandel  ----- $35</div>\n                                    </div> \n                                    \n                                    <div class = \"subBlock\" data-aos=\"fade-up\">\n                                        <div class = \"subhead\" >WHITES</div>\n                                            <div class = \"subheadSuper\" >Tablas Creek Patelin de Tablas Blanc Rhone Blend ----- $34.5</div>\n                                            <div class = \"subheadSuper\" >Brundlmayer Guner Veltliner  ----- $25</div>\n                                            <div class = \"subheadSuper\" >Gros Ventre Vermentino ----- $30.5 </div>\n                                            <div class = \"subheadSuper\" >Zilliken Feinherb Riesling  ----- $22</div>\n                                    </div> \n                                </div> \n                                \n                                <div  class = \"block\" data-aos=\"fade-up\">\n                                    <div class = \"head\" >DRINKS</div>\n                                <div class = \"subBlock\" data-aos=\"fade-up\">\n                                    <div class = \"subhead\" >CLASSIC COCKTAILS</div>\n                                        <div class = \"subheadSuper\" >Pancho's Pride ----- $13</div>\n                                        <div class = \"subheadSuper\" >Macho Pisco ----- $16</div>\n                                        <div class = \"subheadSuper\" >Shiso Pretty  ----- $12</div>\n                                </div> \n                                <div class = \"subBlock\" data-aos=\"fade-up\">    \n                                    <div class = \"subhead\" >CANS & BOTTLES</div>\n                                        <div class = \"subheadSuper\" >Montucky Cold Snack  ----- $4</div>\n                                        <div class = \"subheadSuper\" >Tecate Mexican Lager ----- $4</div>\n                                </div> \n                                \n                                <div class = \"subBlock\" data-aos=\"fade-up\">\n                                    <div class = \"subhead\" >BEVERAGES</div>\n                                        <div class = \"subheadSuper\" >Garnet Story ----- $14.5</div>\n                                        <div class = \"subheadSuper\" >Bella Rosa French Press Coffee  ----- $5</div>\n                                        <div class = \"subheadSuper\" >The Giving Tree ----- $10.5 </div>\n                                        <div class = \"subheadSuper\" >Lemonade  ----- $3</div>\n                                </div> \n                                </div>\n                                `;\n};\n\nconst thirdSectionGenerate = () => {\n  let thirdSection = document.querySelector('.section-3');\n  let url = [__webpack_require__(/*! ../assets/images/feed (1).jpg */ \"./src/assets/images/feed (1).jpg\").default, __webpack_require__(/*! ../assets/images/feed (2).jpg */ \"./src/assets/images/feed (2).jpg\").default, __webpack_require__(/*! ../assets/images/feed (3).jpg */ \"./src/assets/images/feed (3).jpg\").default, __webpack_require__(/*! ../assets/images/feed (4).jpg */ \"./src/assets/images/feed (4).jpg\").default, __webpack_require__(/*! ../assets/images/feed (5).jpg */ \"./src/assets/images/feed (5).jpg\").default, __webpack_require__(/*! ../assets/images/feed (6).jpg */ \"./src/assets/images/feed (6).jpg\").default, __webpack_require__(/*! ../assets/images/feed (7).jpg */ \"./src/assets/images/feed (7).jpg\").default, __webpack_require__(/*! ../assets/images/feed (8).jpg */ \"./src/assets/images/feed (8).jpg\").default, __webpack_require__(/*! ../assets/images/feed (9).jpg */ \"./src/assets/images/feed (9).jpg\").default];\n  thirdSection.innerHTML = `<div data-aos = \"fade-up\" class = \"head\">THE FEED</div>`;\n  const imgFeed = document.createElement('div');\n  imgFeed.className = \"imgFeed\";\n  let imgRow = document.createElement('div');\n  imgRow.className = \"imgRow\";\n\n  for (let i = 0; i < url.length; i++) {\n    const img = document.createElement('img');\n    img.src = url[i];\n    img.className = \"imgTile\";\n    img.dataset.aos = \"fade-up\";\n    imgRow.appendChild(img);\n\n    if (i == 2 || i == 5 || i == 8) {\n      imgFeed.appendChild(imgRow);\n      imgRow = document.createElement('div');\n      imgRow.className = \"imgRow\";\n    }\n  }\n\n  thirdSection.appendChild(imgFeed);\n};\n\nconst menu = () => {\n  firstSectionGenerate();\n  secondSectionGenerate();\n  thirdSectionGenerate();\n  return;\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/menu.js?");

/***/ }),

/***/ "./src/assets/images/feed (1).jpg":
/*!****************************************!*\
  !*** ./src/assets/images/feed (1).jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/feed (1).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/feed_(1).jpg?");

/***/ }),

/***/ "./src/assets/images/feed (2).jpg":
/*!****************************************!*\
  !*** ./src/assets/images/feed (2).jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/feed (2).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/feed_(2).jpg?");

/***/ }),

/***/ "./src/assets/images/feed (3).jpg":
/*!****************************************!*\
  !*** ./src/assets/images/feed (3).jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/feed (3).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/feed_(3).jpg?");

/***/ }),

/***/ "./src/assets/images/feed (4).jpg":
/*!****************************************!*\
  !*** ./src/assets/images/feed (4).jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/feed (4).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/feed_(4).jpg?");

/***/ }),

/***/ "./src/assets/images/feed (5).jpg":
/*!****************************************!*\
  !*** ./src/assets/images/feed (5).jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/feed (5).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/feed_(5).jpg?");

/***/ }),

/***/ "./src/assets/images/feed (6).jpg":
/*!****************************************!*\
  !*** ./src/assets/images/feed (6).jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/feed (6).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/feed_(6).jpg?");

/***/ }),

/***/ "./src/assets/images/feed (7).jpg":
/*!****************************************!*\
  !*** ./src/assets/images/feed (7).jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/feed (7).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/feed_(7).jpg?");

/***/ }),

/***/ "./src/assets/images/feed (8).jpg":
/*!****************************************!*\
  !*** ./src/assets/images/feed (8).jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/feed (8).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/feed_(8).jpg?");

/***/ }),

/***/ "./src/assets/images/feed (9).jpg":
/*!****************************************!*\
  !*** ./src/assets/images/feed (9).jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"./assets/images/feed (9).jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/feed_(9).jpg?");

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