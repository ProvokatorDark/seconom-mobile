/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/btnUp.js":
/*!*************************!*\
  !*** ./src/js/btnUp.js ***!
  \*************************/
/***/ (() => {

var btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show: function show() {
    var _this = this;
    if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(function () {
        _this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide: function hide() {
    var _this2 = this;
    if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(function () {
        _this2.el.classList.add('btn-up_hide');
        _this2.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener: function addEventListener() {
    var _this3 = this;
    // при прокрутке окна (window)
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY || document.documentElement.scrollTop;
      if (_this3.scrolling && scrollY > 0) {
        return;
      }
      _this3.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        // сделаем кнопку .btn-up видимой
        _this3.show();
      } else {
        // иначе скроем кнопку .btn-up
        _this3.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = function () {
      _this3.scrolling = true;
      _this3.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
  }
};
btnUp.addEventListener();

/***/ }),

/***/ "./src/js/left-menu-clean.js":
/*!***********************************!*\
  !*** ./src/js/left-menu-clean.js ***!
  \***********************************/
/***/ (() => {

// document.querySelector(".top-menu").addEventListener("click", function (event) {
//   event.preventDefault();
//   var leftMenu = document.querySelector(".left-menu");
//   leftMenu.classList.toggle("open-menu");
// });
// document.querySelector(".close-menu").addEventListener("click", function (event) {
//   event.preventDefault();
//   var leftMenu = document.querySelector(".left-menu");
//   leftMenu.classList.toggle("open-menu");
// });

/***/ }),

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/***/ (() => {

window.onload = function () {
  document.querySelector('.preloader').classList.add("preloader-remove");
};

/***/ }),

/***/ "./src/scss/login.scss":
/*!*****************************!*\
  !*** ./src/scss/login.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _scss_login_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/login.scss */ "./src/scss/login.scss");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

__webpack_require__(/*! ./js/left-menu-clean */ "./src/js/left-menu-clean.js");
__webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");
__webpack_require__(/*! ./js/btnUp */ "./src/js/btnUp.js");

// Валидация телефона
document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function eventCalllback(e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
  };
  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  var _iterator = _createForOfIteratorHelper(phone_inputs),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      for (var _i = 0, _arr = ['input', 'blur', 'focus']; _i < _arr.length; _i++) {
        var ev = _arr[_i];
        elem.addEventListener(ev, eventCalllback);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
// Валидация Email
var validateEmail = function validateEmail(email) {
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
var validate = function validate() {
  var result = document.getElementById('result');
  var emailInput = document.getElementById('validation_email');
  var email = emailInput.value;
  result.textContent = '';
  if (validateEmail(email)) {
    result.textContent = email + ' email корректен';
    result.style.color = 'green';
  } else {
    result.textContent = email + ' email некорректен';
    result.style.color = 'red';
  }
  return false;
};
document.getElementById('validation_email').addEventListener('input', validate);
function show_hide_password(target) {
  var input = document.getElementById('password-input');
  var collectionIcons = document.querySelectorAll('.password-input>i');
  if (input.getAttribute('type') == 'password') {
    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(collectionIcons).forEach(function (item) {
      item.classList.toggle('hidden');
    });
    input.setAttribute('type', 'text');
  } else {
    (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(collectionIcons).forEach(function (item) {
      item.classList.toggle('hidden');
    });
    input.setAttribute('type', 'password');
  }
  return false;
}
window.show_hide_password = show_hide_password;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztJQUNGTixLQUFLLENBQUNPLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO0VBQ3hDO0VBQ0EsT0FBTyxLQUFLO0FBQ2Q7QUFFQXBFLE1BQU0sQ0FBQzRELGtCQUFrQixHQUFHQSxrQkFBa0IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvanMvYnRuVXAuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9sZWZ0LW1lbnUtY2xlYW4uanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9wcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9zY3NzL2xvZ2luLnNjc3M/ZDEwYyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidG5VcCA9IHtcbiAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKSxcbiAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGUnKTtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRlJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgLy8g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvtC60L3QsCAod2luZG93KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLnNjcm9sbGluZyAmJiBzY3JvbGxZID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgLy8g0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC/0YDQvtC60YDRg9GC0LjQuyDRgdGC0YDQsNC90LjRhtGDINCx0L7Qu9C10LUg0YfQtdC8INC90LAgMjAwcHhcbiAgICAgIGlmIChzY3JvbGxZID4gNDAwKSB7XG4gICAgICAgIC8vINGB0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwINCy0LjQtNC40LzQvtC5XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g0LjQvdCw0YfQtSDRgdC60YDQvtC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJykub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgLy8g0L/QtdGA0LXQvNC10YHRgtC40YLRjNGB0Y8g0LIg0LLQtdGA0YXQvdGO0Y4g0YfQsNGB0YLRjCDRgdGC0YDQsNC90LjRhtGLXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCk7XG4iLCIvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgdmFyIGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIik7XG4vLyAgIGxlZnRNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIik7XG4vLyB9KTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIHZhciBsZWZ0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1tZW51XCIpO1xuLy8gICBsZWZ0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3Blbi1tZW51XCIpO1xuLy8gfSk7XG4iLCJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKS5jbGFzc0xpc3QuYWRkKFwicHJlbG9hZGVyLXJlbW92ZVwiKTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9sb2dpbi5zY3NzJztcblxucmVxdWlyZSgnLi9qcy9sZWZ0LW1lbnUtY2xlYW4nKTtcbnJlcXVpcmUoJy4vanMvcHJlbG9hZGVyJyk7XG5yZXF1aXJlKCcuL2pzL2J0blVwJyk7XG5cbi8vINCS0LDQu9C40LTQsNGG0LjRjyDRgtC10LvQtdGE0L7QvdCwXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBldmVudENhbGxsYmFjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGVsID0gZS50YXJnZXQsXG4gICAgICBjbGVhclZhbCA9IGVsLmRhdGFzZXQucGhvbmVDbGVhcixcbiAgICAgIHBhdHRlcm4gPSBlbC5kYXRhc2V0LnBob25lUGF0dGVybixcbiAgICAgIG1hdHJpeF9kZWYgPSBcIis3KF9fXykgX19fLV9fLV9fXCIsXG4gICAgICBtYXRyaXggPSBwYXR0ZXJuID8gcGF0dGVybiA6IG1hdHJpeF9kZWYsXG4gICAgICBpID0gMCxcbiAgICAgIGRlZiA9IG1hdHJpeC5yZXBsYWNlKC9cXEQvZywgXCJcIiksXG4gICAgICB2YWwgPSBlLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgaWYgKGNsZWFyVmFsICE9PSAnZmFsc2UnICYmIGUudHlwZSA9PT0gJ2JsdXInKSB7XG4gICAgICBpZiAodmFsLmxlbmd0aCA8IG1hdHJpeC5tYXRjaCgvKFtcXF9cXGRdKS9nKS5sZW5ndGgpIHtcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZGVmLmxlbmd0aCA+PSB2YWwubGVuZ3RoKSB2YWwgPSBkZWY7XG4gICAgZS50YXJnZXQudmFsdWUgPSBtYXRyaXgucmVwbGFjZSgvLi9nLCBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIC9bX1xcZF0vLnRlc3QoYSkgJiYgaSA8IHZhbC5sZW5ndGggPyB2YWwuY2hhckF0KGkrKykgOiBpID49IHZhbC5sZW5ndGggPyBcIlwiIDogYVxuICAgIH0pO1xuICB9XG4gIHZhciBwaG9uZV9pbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1waG9uZS1wYXR0ZXJuXScpO1xuICBmb3IgKGxldCBlbGVtIG9mIHBob25lX2lucHV0cykge1xuICAgIGZvciAobGV0IGV2IG9mIFsnaW5wdXQnLCAnYmx1cicsICdmb2N1cyddKSB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGV2ZW50Q2FsbGxiYWNrKTtcbiAgICB9XG4gIH1cbn0pO1xuLy8g0JLQsNC70LjQtNCw0YbQuNGPIEVtYWlsXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XG4gIHJldHVybiBlbWFpbC5tYXRjaChcbiAgICAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuICApO1xufTtcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWxpZGF0aW9uX2VtYWlsJyk7XG4gIGNvbnN0IGVtYWlsID0gZW1haWxJbnB1dC52YWx1ZTtcbiAgcmVzdWx0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgaWYgKHZhbGlkYXRlRW1haWwoZW1haWwpKSB7XG4gICAgcmVzdWx0LnRleHRDb250ZW50ID0gZW1haWwgKyAnIGVtYWlsINC60L7RgNGA0LXQutGC0LXQvSc7XG4gICAgcmVzdWx0LnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQudGV4dENvbnRlbnQgPSBlbWFpbCArICcgZW1haWwg0L3QtdC60L7RgNGA0LXQutGC0LXQvSc7XG4gICAgcmVzdWx0LnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsaWRhdGlvbl9lbWFpbCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdmFsaWRhdGUpO1xuXG5cblxuZnVuY3Rpb24gc2hvd19oaWRlX3Bhc3N3b3JkKHRhcmdldCkge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtaW5wdXQnKTtcbiAgbGV0IGNvbGxlY3Rpb25JY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXNzd29yZC1pbnB1dD5pJylcblxuICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT0gJ3Bhc3N3b3JkJykge1xuICAgIFsuLi5jb2xsZWN0aW9uSWNvbnNdLmZvckVhY2goKGl0ZW0pPT57XG4gICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgfSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgfSBlbHNlIHtcbiAgICBbLi4uY29sbGVjdGlvbkljb25zXS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgfSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG53aW5kb3cuc2hvd19oaWRlX3Bhc3N3b3JkID0gc2hvd19oaWRlX3Bhc3N3b3JkO1xuXG4iXSwibmFtZXMiOlsiYnRuVXAiLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbGluZyIsInNob3ciLCJfdGhpcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsImhpZGUiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMzIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsIm9uY2xpY2siLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsIm9ubG9hZCIsInJlcXVpcmUiLCJldmVudENhbGxsYmFjayIsImUiLCJ0YXJnZXQiLCJjbGVhclZhbCIsImRhdGFzZXQiLCJwaG9uZUNsZWFyIiwicGF0dGVybiIsInBob25lUGF0dGVybiIsIm1hdHJpeF9kZWYiLCJtYXRyaXgiLCJpIiwiZGVmIiwicmVwbGFjZSIsInZhbCIsInZhbHVlIiwidHlwZSIsImxlbmd0aCIsIm1hdGNoIiwiYSIsInRlc3QiLCJjaGFyQXQiLCJwaG9uZV9pbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImVsZW0iLCJfaSIsIl9hcnIiLCJldiIsImVyciIsImYiLCJ2YWxpZGF0ZUVtYWlsIiwiZW1haWwiLCJ2YWxpZGF0ZSIsInJlc3VsdCIsImdldEVsZW1lbnRCeUlkIiwiZW1haWxJbnB1dCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJjb2xvciIsInNob3dfaGlkZV9wYXNzd29yZCIsImlucHV0IiwiY29sbGVjdGlvbkljb25zIiwiZ2V0QXR0cmlidXRlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZm9yRWFjaCIsIml0ZW0iLCJ0b2dnbGUiLCJzZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9