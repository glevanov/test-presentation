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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/arrow-down.png":
/*!********************************!*\
  !*** ./src/img/arrow-down.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/arrow-down.png\";\n\n//# sourceURL=webpack:///./src/img/arrow-down.png?");

/***/ }),

/***/ "./src/js/carousel.js":
/*!****************************!*\
  !*** ./src/js/carousel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.removeCarouselHandlers = exports.addCarouselHandlers = undefined;\n\nvar _config = __webpack_require__(/*! ./config.js */ \"./src/js/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _state = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n\nvar _state2 = _interopRequireDefault(_state);\n\nvar _switchSlide = __webpack_require__(/*! ./switchSlide.js */ \"./src/js/switchSlide.js\");\n\nvar _switchSlide2 = _interopRequireDefault(_switchSlide);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar coordsOnYAxis = {\n  start: 0,\n  end: 0\n};\n\nvar MIN_SWIPE_LENGTH = _config2.default.MAX_VIEWPORT_Y / 100 * _config2.default.MIN_SLIDE_PERCENT;\n\n// Function receives touch coordinates from event and returns\n// 1 if swiped down, -1 if swiped up, 0 if swipe is too short\nvar calcSwipeDirection = function calcSwipeDirection(coords) {\n  var diff = coords.start - coords.end;\n  if (Math.abs(diff) < MIN_SWIPE_LENGTH) {\n    return 0;\n  }\n  if (diff < 0) {\n    return 1;\n  } else {\n    return -1;\n  }\n};\n\nvar validateSlideIndex = function validateSlideIndex(index) {\n  if (index < 0) {\n    return 0;\n  } else if (index > _config2.default.MAX_SLIDE_INDEX) {\n    return _config2.default.MAX_SLIDE_INDEX;\n  }\n  return index;\n};\n\nvar switchSlides = function switchSlides() {\n  switch (calcSwipeDirection(coordsOnYAxis)) {\n    case 0:\n      break;\n    case 1:\n      _state2.default.currentSlideIndex = validateSlideIndex(_state2.default.currentSlideIndex + 1);\n      (0, _switchSlide2.default)(_state2.default.currentSlideIndex);\n      break;\n    case -1:\n      _state2.default.currentSlideIndex = validateSlideIndex(_state2.default.currentSlideIndex - 1);\n      (0, _switchSlide2.default)(_state2.default.currentSlideIndex);\n      break;\n  }\n};\n\nvar onTouchStart = function onTouchStart(evt) {\n  coordsOnYAxis.start = evt.touches[0].clientY;\n};\n\nvar onTouchEnd = function onTouchEnd(evt) {\n  coordsOnYAxis.end = evt.changedTouches[0].clientY;\n  switchSlides();\n};\n\nvar addCarouselHandlers = function addCarouselHandlers() {\n  document.addEventListener(\"touchstart\", onTouchStart);\n  document.addEventListener(\"touchend\", onTouchEnd);\n};\n\nvar removeCarouselHandlers = function removeCarouselHandlers() {\n  document.removeEventListener(\"touchstart\", onTouchStart);\n  document.removeEventListener(\"touchend\", onTouchEnd);\n};\n\nexports.addCarouselHandlers = addCarouselHandlers;\nexports.removeCarouselHandlers = removeCarouselHandlers;\n\n//# sourceURL=webpack:///./src/js/carousel.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slidesList = __webpack_require__(/*! ./slidesList.js */ \"./src/js/slidesList.js\");\n\nvar _slidesList2 = _interopRequireDefault(_slidesList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  MAX_VIEWPORT_Y: 768,\n  MIN_SLIDE_PERCENT: 5,\n  MAX_SLIDE_INDEX: _slidesList2.default.length - 1\n};\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n\n__webpack_require__(/*! ../img/arrow-down.png */ \"./src/img/arrow-down.png\");\n\nvar _slider = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n\nvar _carousel = __webpack_require__(/*! ./carousel.js */ \"./src/js/carousel.js\");\n\nvar _modal = __webpack_require__(/*! ./modal.js */ \"./src/js/modal.js\");\n\n(0, _slider.addSliderHandlers)();\n(0, _carousel.addCarouselHandlers)();\n(0, _modal.addModalHandlers)();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addModalHandlers = undefined;\n\nvar _carousel = __webpack_require__(/*! ./carousel.js */ \"./src/js/carousel.js\");\n\nvar activationElement = document.querySelector(\".slide-3__image\");\nvar modalElement = document.querySelector(\".modal\");\n\nvar onActivationTouchHandler = function onActivationTouchHandler(evt) {\n  modalElement.classList.remove(\"visually-hidden\");\n  (0, _carousel.removeCarouselHandlers)();\n};\n\nvar onModalTouchHandler = function onModalTouchHandler() {\n  modalElement.classList.add(\"visually-hidden\");\n  (0, _carousel.addCarouselHandlers)();\n};\n\nvar addModalHandlers = function addModalHandlers() {\n  activationElement.addEventListener(\"touchstart\", onActivationTouchHandler);\n  modalElement.addEventListener(\"touchstart\", onModalTouchHandler);\n};\n\nexports.addModalHandlers = addModalHandlers;\n\n//# sourceURL=webpack:///./src/js/modal.js?");

/***/ }),

/***/ "./src/js/setSlideMod.js":
/*!*******************************!*\
  !*** ./src/js/setSlideMod.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar slide = document.querySelector(\".slide-3\");\nvar resetSlideMods = function resetSlideMods() {\n  slide.classList.remove(\"slide-3--bg-1\", \"slide-3--bg-2\", \"slide-3--bg-3\");\n};\nvar setSlideMod = function setSlideMod(modNumber) {\n  resetSlideMods();\n  slide.classList.add(\"slide-3--bg-\" + modNumber);\n};\n\nexports.default = setSlideMod;\n\n//# sourceURL=webpack:///./src/js/setSlideMod.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addSliderHandlers = undefined;\n\nvar _setSlideMod = __webpack_require__(/*! ./setSlideMod.js */ \"./src/js/setSlideMod.js\");\n\nvar _setSlideMod2 = _interopRequireDefault(_setSlideMod);\n\nvar _carousel = __webpack_require__(/*! ./carousel.js */ \"./src/js/carousel.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar sliderElement = document.querySelector(\".slider\");\nvar sliderScale = sliderElement.querySelector(\".slider__scale\");\nvar sliderFill = sliderElement.querySelector(\".slider__fill\");\nvar sliderPin = sliderElement.querySelector(\".slider__pin\");\n\nvar SCALE_LEFT_COORDINATE = sliderScale.getBoundingClientRect().left;\nvar SCALE_RIGHT_COORDINATE = sliderScale.getBoundingClientRect().right;\nvar SCALE_WIDTH = SCALE_RIGHT_COORDINATE - SCALE_LEFT_COORDINATE;\nvar SCALE_BREAKPOINTS = {\n  quarter1: SCALE_WIDTH / 4,\n  mid: SCALE_WIDTH / 2,\n  quarter3: SCALE_WIDTH / 4 * 3\n};\n\nvar PIN_WIDTH = 42.5;\nvar PIN_MIDPOINT = PIN_WIDTH / 2;\nvar PIN_START_COORDINATE = 0 - PIN_MIDPOINT;\nvar PIN_END_COODRINATE = SCALE_WIDTH - PIN_MIDPOINT;\n\nvar onSliderTouch = function onSliderTouch(evt) {\n  evt.preventDefault();\n  (0, _carousel.removeCarouselHandlers)();\n  var sliderXPosition = evt.touches[0].clientX;\n  var sliderRelativePosition = void 0;\n\n  var checkSliderBoundaries = function checkSliderBoundaries(sliderPosition) {\n    if (sliderPosition < PIN_START_COORDINATE) {\n      return PIN_START_COORDINATE;\n    } else if (sliderPosition > PIN_END_COODRINATE) {\n      return PIN_END_COODRINATE;\n    }\n    return sliderPosition;\n  };\n  var calculateSliderPosition = function calculateSliderPosition(moveEvt) {\n    var currentTouchX = moveEvt.touches[0].clientX;\n    var horizontalShift = sliderXPosition - currentTouchX;\n    sliderRelativePosition = checkSliderBoundaries(sliderPin.offsetLeft - horizontalShift);\n    sliderXPosition = currentTouchX;\n  };\n  var renderSliderPosition = function renderSliderPosition() {\n    sliderPin.style.left = sliderRelativePosition + \"px\";\n    sliderFill.style.width = sliderRelativePosition + PIN_MIDPOINT + \"px\";\n  };\n  var snapSliderPosition = function snapSliderPosition() {\n    if (sliderRelativePosition < SCALE_BREAKPOINTS.quarter1) {\n      sliderRelativePosition = PIN_START_COORDINATE;\n      (0, _setSlideMod2.default)(1);\n    } else if (sliderRelativePosition >= SCALE_BREAKPOINTS.quarter1 && sliderRelativePosition < SCALE_BREAKPOINTS.quarter3) {\n      sliderRelativePosition = SCALE_BREAKPOINTS.mid - PIN_MIDPOINT;\n      (0, _setSlideMod2.default)(2);\n    } else {\n      sliderRelativePosition = PIN_END_COODRINATE;\n      (0, _setSlideMod2.default)(3);\n    }\n    renderSliderPosition();\n  };\n\n  var onTouchMove = function onTouchMove(moveEvt) {\n    calculateSliderPosition(moveEvt);\n    renderSliderPosition();\n  };\n  var onTouchUp = function onTouchUp(upEvt) {\n    upEvt.preventDefault();\n    (0, _carousel.addCarouselHandlers)();\n    snapSliderPosition();\n    document.removeEventListener(\"touchmove\", onTouchMove);\n    document.removeEventListener(\"touchend\", onTouchUp);\n  };\n\n  document.addEventListener(\"touchmove\", onTouchMove);\n  document.addEventListener(\"touchend\", onTouchUp);\n};\n\nvar addSliderHandlers = function addSliderHandlers() {\n  sliderPin.addEventListener(\"touchstart\", function (evt) {\n    evt.preventDefault();\n    onSliderTouch(evt);\n  });\n};\n\nexports.addSliderHandlers = addSliderHandlers;\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ }),

/***/ "./src/js/slidesList.js":
/*!******************************!*\
  !*** ./src/js/slidesList.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Array.from(document.querySelectorAll(\".js-slide\"));\n\n//# sourceURL=webpack:///./src/js/slidesList.js?");

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  currentSlideIndex: 0\n};\n\n//# sourceURL=webpack:///./src/js/state.js?");

/***/ }),

/***/ "./src/js/switchSlide.js":
/*!*******************************!*\
  !*** ./src/js/switchSlide.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slidesList = __webpack_require__(/*! ./slidesList.js */ \"./src/js/slidesList.js\");\n\nvar _slidesList2 = _interopRequireDefault(_slidesList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar slideMarkers = Array.from(document.querySelectorAll('.carousel__control'));\n\nvar hideSlides = function hideSlides() {\n  _slidesList2.default.forEach(function (it) {\n    return it.classList.add(\"visually-hidden\");\n  });\n};\n\nvar showSlide = function showSlide(index) {\n  _slidesList2.default[index].classList.remove(\"visually-hidden\");\n};\n\nvar resetSlideMarker = function resetSlideMarker() {\n  slideMarkers.forEach(function (it) {\n    return it.classList.remove(\"carousel__control--selected\");\n  });\n};\n\nvar setSlideMarker = function setSlideMarker(index) {\n  slideMarkers[index].classList.add(\"carousel__control--selected\");\n};\n\nvar switchSlide = function switchSlide(index) {\n  hideSlides();\n  showSlide(index);\n  resetSlideMarker();\n  setSlideMarker(index);\n};\n\nexports.default = switchSlide;\n\n//# sourceURL=webpack:///./src/js/switchSlide.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });