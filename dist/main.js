/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.hits = 0;\n        this.position = [];\n    }\n\n    hit() {\n        if (this.hits < this.length) {\n            this.hits = this.hits + 1;\n        }\n    }\n\n\n    get isSunk() {\n        if (this.hits < this.length) {\n            return false;\n        } else if (this.hits >= this.length) {\n            return true;\n        }\n    }\n}\n\nclass Gameboard {\n    constructor() {\n        this.carrier = new Ship(5);\n        this.battleship = new Ship(4);\n        this.cruiser = new Ship(3);\n        this.submarine = new Ship(3);\n        this.destroyer = new Ship(2);\n        this.board = [];\n        for (let letter of ['A','B','C','D','E','F','G','H','I','J']) {\n            for (let number of ['1','2','3','4','5','6','7','8','9','10']) {\n                this.board.push([letter, number, null]);\n            }\n        }\n        \n    }\n    findRandomFreePosition(shipLength) {\n        function getRandomInt(min, max) {\n            min = Math.ceil(min);\n            max = Math.floor(max);\n            return Math.floor(Math.random() * (max - min + 1)) + min;\n        }\n        const possibleLetters = ['A','B','C','D','E','F','G','H','I','J']\n        const xPosition = possibleLetters[getRandomInt(1,10)]\n        const yPosition = getRandomInt(1,10)\n\n        \n        /* Select random coordinate\n        If coordinate taken, return false\n        If coordinate free, pick random direction (store in variable)\n        Check (length of ship)-1 places in that direction\n        If any coordinate taken, start again\n        If no coordinates taken, set ship.position to coordinates\n        Return length of ship, coordinates, and direction\n         */\n        return {xPosition: xPosition, yPosition: yPosition}\n    }\n\n    placeShip(shipObj, x, y, direction) {\n\n    }\n\n    get allSunk() {\n        if (this.carrier.isSunk === true\n            && this.battleship.isSunk === true\n            && this.cruiser.isSunk === true\n            && this.destroyer.isSunk === true\n            && this.submarine.isSunk === true\n        ) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n}\n\nclass Player {\n    constructor() {\n        \n    }\n}\n\nclass HumanPlayer extends Player {\n\n}\n\nclass ComputerPlayer extends Player {\n\n}\n\nconst gb = new Gameboard()\n\n\n\n\n//# sourceURL=webpack://battleships/./src/game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/game.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;