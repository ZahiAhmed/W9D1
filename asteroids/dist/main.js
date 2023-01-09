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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { inherits } = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nclass Asteroid {\n\n    constructor(object) {\n        this.pos = object.pos;\n        this.color = this.color || \"#00FF00\";\n        this.radius = this.radius || 8;\n        this.vel = randomVec();\n    }\n\n    \n\n}\n\ninherits(Asteroid, MovingObject)\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://w9d1/./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is good\");\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\nwindow.MovingObject = MovingObject;\n\nconst canvasEl = document.getElementById(\"canvas\");\nconst ctx = canvasEl.getContext(\"2d\");\n\n// const ast = new Asteroid({\n//     pos: [90, 90]\n// })\n\n// ast.draw(ctx);\n\nconst mo1 = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 10,\n    color: \"#FF0031\"\n});\n\nconst mo2 = new MovingObject({\n    pos: [50, 50],\n    vel: [20, 20],\n    radius: 8,\n    color: \"#FF0000\"\n});\n\nconst mo3 = new MovingObject({\n    pos: [60, 70],\n    vel: [20, 20],\n    radius: 8,\n    color: \"#FF0FFF\"\n});\n\nmo1.draw(ctx);\nmo2.draw(ctx);\nmo3.draw(ctx);\n\n\nmo1.move();\nmo2.move();\nmo3.move();\n\n//# sourceURL=webpack://w9d1/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("class MovingObject {\n    constructor(options) {\n        this.pos = options.pos;\n        this.vel = options.vel;\n        this.radius = options.radius;\n        this.color = options.color;\n    }\n\n    draw(ctx) {\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);\n        ctx.fill();\n        ctx.stroke();\n        ctx.fillStyle = `${this.color}`\n        ctx.strokeStyle = `${this.color}`\n    }\n\n    move() {\n        this.pos[0] = this.pos[0] + this.vel[0];\n        this.pos[1] = this.pos[1] + this.vel[1];\n    }\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://w9d1/./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("const Util = {\n    inherits: function inherits(childClass, parentClass){\n        function Surrogate(){};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://w9d1/./src/utils.js?");

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