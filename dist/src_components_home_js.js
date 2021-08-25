/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["src_components_home_js"],{

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst firstSectionGenerate = () => {\n  let firstSection = document.querySelector('.section-1');\n  firstSection.innerHTML = `<img class = \"logoImg\" src =\"${__webpack_require__(/*! ../assets/images/logo.png */ \"./src/assets/images/logo.png\").default}\">\n                        <div data-aos = \"fade-up\" class = \"head\">WE'RE OPEN  </div>\n                        <div data-aos = \"fade-up\" class =\"subhead\">FOR INDOOR DINING, PATIO DINING & TAKEOUT!</div>`;\n};\n\nconst secondSectionGenerate = () => {\n  let secondSection = document.querySelector('.section-2');\n  secondSection.innerHTML = `<div class = \"block\" data-aos=\"fade-up\">\n                                <div  class = \"subhead\">RESERVATIONS</div>\n                                <div class = \"subheadSuper\">Dinner for Two Options Available for To Go Service</div>\n                                    <button  >RESERVE YOUR TABLE</button>\n                                </div> \n                                <div data-aos=\"fade-up\" class = \"block\">\n                                    <div  class = \"subhead\">TAKEOUT</div>\n                                    <div  class = \"subheadSuper\">Order Online or Call Us (964) 9824-40704</div>\n                                    <button >ORDER TAKEOUT</button>\n                                </div> \n                                <div data-aos=\"fade-up\" class = \"block\">\n                                    <div  class = \"head\">HOURS</div>\n                                    <div  class = \"subhead\">MONDAY - SUNDAY</div>\n                                    <div  class = \"subheadSuper\">11:30am - 9:00pm</div>\n                                </div>\n                                <div class = \"block\" data-aos=\"fade-up\">\n                                    <div  class = \"head\">VISIT</div>\n                                    <div  class = \"subheadSuper\">7023th 8th St.</div>\n                                    <div  class = \"subheadSuper\">3428 Big Elm, Lenexa 09612</div>\n                                    <button >GET DIRECTIONS</button>\n                                    <div  class = \"subheadSuper\">964.9824.40704</div>\n                                    <button >GIVE US A CALL</button>\n                                </div>\n\n                                `;\n};\n\nconst thirdSectionGenerate = () => {\n  let thirdSection = document.querySelector('.section-3');\n  thirdSection.innerHTML = ` <div class \"block\" data-aos=\"fade-up\">\n                                    <div class = \"head\">YOUR SAFETY</div>\n                                    <div  class = \"subheadSuper\">We follow FDA’s Best Practices for Retail Food Stores,<br> Restaurants, and Food Pick-Up/Delivery Services During the<br> COVID-19 Pandemic.<br>\n                                    We do require masks to enter the restaurant, but don’t worry <br> we've got you covered if you forget yours.</div><br>\n                                    <button  target=\"_blank\">MORE INFO</button>\n                                </div>`;\n};\n\nconst home = () => {\n  firstSectionGenerate();\n  secondSectionGenerate();\n  thirdSectionGenerate();\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/home.js?");

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