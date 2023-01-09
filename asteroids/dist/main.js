/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is good\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nwindow.MovingObject = MovingObject;\n\nconst canvasEl = document.getElementById(\"canvas\");\nconst ctx = canvasEl.getContext(\"2d\");\n\nconst mo1 = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 10,\n    color: \"#FF0031\"\n});\n\nconst mo2 = new MovingObject({\n    pos: [50, 50],\n    vel: [20, 20],\n    radius: 8,\n    color: \"#FF0000\"\n});\n\nconst mo3 = new MovingObject({\n    pos: [60, 70],\n    vel: [20, 20],\n    radius: 8,\n    color: \"#FF0FFF\"\n});\n\nmo1.draw(ctx);\nmo2.draw(ctx);\nmo3.draw(ctx);\n\n\nmo1.move()\n\n//# sourceURL=webpack://w9d1/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("class MovingObject {\n    constructor(options) {\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.radius = options.radius;\n        this.color = options.color;\n    }\n\n    draw(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.stroke();\n        ctx.fillStyle = `${this.color}`\n        ctx.strokeStyle = `${this.color}`\n    }\n\n    move() {\n        this.pos[0] = this.pos[0] + this.vel[0];\n        this.pos[1] = this.pos[1] + this.vel[1];\n    }\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://w9d1/./src/moving_object.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;