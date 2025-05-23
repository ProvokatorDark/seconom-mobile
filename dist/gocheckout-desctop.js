/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/maskPhone.js":
/*!*****************************!*\
  !*** ./src/js/maskPhone.js ***!
  \*****************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function maskPhone(selector) {
  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';
  var elems = document.querySelectorAll(selector);
  function mask(event) {
    var keyCode = event.keyCode;
    var template = masked,
      def = template.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    console.log(template);
    var i = 0,
      newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {
      return "\\d{1," + a.length + "}";
    }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }
    if (event.type === "blur" && this.value.length < 5) {
      this.value = "";
    }
  }
  var _iterator = _createForOfIteratorHelper(elems),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
maskPhone('.phonevalidation');

/***/ }),

/***/ "./src/scss/gocheckout-desctop.scss":
/*!******************************************!*\
  !*** ./src/scss/gocheckout-desctop.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!***********************************!*\
  !*** ./src/gocheckout-desctop.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_gocheckout_desctop_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/gocheckout-desctop.scss */ "./src/scss/gocheckout-desctop.scss");

// import '@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css'
// require('./js/preloader')
// require('./js/btnUp')

__webpack_require__(/*! ./js/maskPhone */ "./src/js/maskPhone.js");
// import autoComplete from '@tarekraafat/autocomplete.js';
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU1QixJQUFJLENBQUM7SUFDckM7RUFBQyxTQUFBNkIsR0FBQTtJQUFBUixTQUFBLENBQUFTLENBQUEsQ0FBQUQsR0FBQTtFQUFBO0lBQUFSLFNBQUEsQ0FBQVUsQ0FBQTtFQUFBO0FBRUg7QUFFQXhDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdkM3Qjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUN4QztBQUNBO0FBQ0E7O0FBRUF5QyxtQkFBTyxDQUFDLDZDQUFnQixDQUFDO0FBQ3pCLDJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9tYXNrUGhvbmUuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9zY3NzL2dvY2hlY2tvdXQtZGVzY3RvcC5zY3NzP2Y0OTkiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9nb2NoZWNrb3V0LWRlc2N0b3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWFza1Bob25lKHNlbGVjdG9yLCBtYXNrZWQgPSAnKzcgKF9fXykgX19fLV9fLV9fJykge1xuICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gIGZ1bmN0aW9uIG1hc2soZXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IG1hc2tlZCxcbiAgICAgIGRlZiA9IHRlbXBsYXRlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKSxcbiAgICAgIHZhbCA9IHRoaXMudmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgIGNvbnNvbGUubG9nKHRlbXBsYXRlKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICBuZXdWYWx1ZSA9IHRlbXBsYXRlLnJlcGxhY2UoL1tfXFxkXS9nLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gaSA8IHZhbC5sZW5ndGggPyB2YWwuY2hhckF0KGkrKykgfHwgZGVmLmNoYXJBdChpKSA6IGE7XG4gICAgICB9KTtcbiAgICBpID0gbmV3VmFsdWUuaW5kZXhPZihcIl9cIik7XG4gICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlLnNsaWNlKDAsIGkpO1xuICAgIH1cbiAgICBsZXQgcmVnID0gdGVtcGxhdGUuc3Vic3RyKDAsIHRoaXMudmFsdWUubGVuZ3RoKS5yZXBsYWNlKC9fKy9nLFxuICAgICAgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIFwiXFxcXGR7MSxcIiArIGEubGVuZ3RoICsgXCJ9XCI7XG4gICAgICB9KS5yZXBsYWNlKC9bKygpXS9nLCBcIlxcXFwkJlwiKTtcbiAgICByZWcgPSBuZXcgUmVnRXhwKFwiXlwiICsgcmVnICsgXCIkXCIpO1xuICAgIGlmICghcmVnLnRlc3QodGhpcy52YWx1ZSkgfHwgdGhpcy52YWx1ZS5sZW5ndGggPCA1IHx8IGtleUNvZGUgPiA0NyAmJiBrZXlDb2RlIDwgNTgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiYmx1clwiICYmIHRoaXMudmFsdWUubGVuZ3RoIDwgNSkge1xuICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgfVxuXG4gIH1cblxuICBmb3IgKGNvbnN0IGVsZW0gb2YgZWxlbXMpIHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBtYXNrKTtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBtYXNrKTtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIG1hc2spO1xuICB9XG5cbn1cblxubWFza1Bob25lKCcucGhvbmV2YWxpZGF0aW9uJylcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9nb2NoZWNrb3V0LWRlc2N0b3Auc2Nzcyc7XG4vLyBpbXBvcnQgJ0B0YXJla3JhYWZhdC9hdXRvY29tcGxldGUuanMvZGlzdC9jc3MvYXV0b0NvbXBsZXRlLjAyLmNzcydcbi8vIHJlcXVpcmUoJy4vanMvcHJlbG9hZGVyJylcbi8vIHJlcXVpcmUoJy4vanMvYnRuVXAnKVxuXG5yZXF1aXJlKCcuL2pzL21hc2tQaG9uZScpXG4vLyBpbXBvcnQgYXV0b0NvbXBsZXRlIGZyb20gJ0B0YXJla3JhYWZhdC9hdXRvY29tcGxldGUuanMnO1xuIl0sIm5hbWVzIjpbIm1hc2tQaG9uZSIsInNlbGVjdG9yIiwibWFza2VkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZWxlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXNrIiwiZXZlbnQiLCJrZXlDb2RlIiwidGVtcGxhdGUiLCJkZWYiLCJyZXBsYWNlIiwidmFsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaSIsIm5ld1ZhbHVlIiwiYSIsImNoYXJBdCIsImluZGV4T2YiLCJzbGljZSIsInJlZyIsInN1YnN0ciIsIlJlZ0V4cCIsInRlc3QiLCJ0eXBlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImVsZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXJyIiwiZSIsImYiLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==