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

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/***/ (() => {

// console.log("preloader.js loading")
// window.onload = function() {
//   console.log("window.onload start")
//   document.querySelector('.preloader').classList.add("preloader-remove");
// };

window.onload = function () {
  setTimeout(document.querySelector('.preloader').classList.add("preloader-remove"), 2000);
};

/***/ }),

/***/ "./src/scss/gocheckout.scss":
/*!**********************************!*\
  !*** ./src/scss/gocheckout.scss ***!
  \**********************************/
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
/*!***************************!*\
  !*** ./src/gocheckout.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_gocheckout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/gocheckout.scss */ "./src/scss/gocheckout.scss");

__webpack_require__(/*! ./js/left-menu-clean */ "./src/js/left-menu-clean.js");
__webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");
__webpack_require__(/*! ./js/btnUp */ "./src/js/btnUp.js");
__webpack_require__(/*! ./js/maskPhone */ "./src/js/maskPhone.js");

// function handleFormSubmit(event) {
//   // Просим форму не отправлять данные самостоятельно
//   event.preventDefault()
//   console.log('Отправка!')
// }
// const applicantForm = document.getElementById('persone-once')
// applicantForm.addEventListener('submit', handleFormSubmit)
//
//
//
//
// function checkValidity(event) {
//   const formNode = event.target.form
//   const isValid = formNode.checkValidity()
//
//   formNode.querySelector('button').disabled = !isValid
// }
//
// applicantForm.addEventListener('input', checkValidity)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUEsQ0FBQUQsR0FBQTtFQUFBO0lBQUFQLFNBQUEsQ0FBQVMsQ0FBQTtFQUFBO0FBRUg7QUFFQXRDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7OztBQ3ZDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQWQsTUFBTSxDQUFDcUQsTUFBTSxHQUFHLFlBQVc7RUFBRXBELFVBQVUsQ0FBQ1YsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNJLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxDQUFDO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUHRIOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdDO0FBR2hDdUQsbUJBQU8sQ0FBQyx5REFBc0IsQ0FBQztBQUMvQkEsbUJBQU8sQ0FBQyw2Q0FBZ0IsQ0FBQztBQUN6QkEsbUJBQU8sQ0FBQyxxQ0FBWSxDQUFDO0FBQ3JCQSxtQkFBTyxDQUFDLDZDQUFnQixDQUFDOztBQUd6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvanMvYnRuVXAuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9sZWZ0LW1lbnUtY2xlYW4uanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9tYXNrUGhvbmUuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9wcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9zY3NzL2dvY2hlY2tvdXQuc2Nzcz83YzlhIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvZ29jaGVja291dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidG5VcCA9IHtcbiAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKSxcbiAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGUnKTtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRlJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgLy8g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvtC60L3QsCAod2luZG93KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLnNjcm9sbGluZyAmJiBzY3JvbGxZID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgLy8g0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC/0YDQvtC60YDRg9GC0LjQuyDRgdGC0YDQsNC90LjRhtGDINCx0L7Qu9C10LUg0YfQtdC8INC90LAgMjAwcHhcbiAgICAgIGlmIChzY3JvbGxZID4gNDAwKSB7XG4gICAgICAgIC8vINGB0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwINCy0LjQtNC40LzQvtC5XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g0LjQvdCw0YfQtSDRgdC60YDQvtC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJykub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgLy8g0L/QtdGA0LXQvNC10YHRgtC40YLRjNGB0Y8g0LIg0LLQtdGA0YXQvdGO0Y4g0YfQsNGB0YLRjCDRgdGC0YDQsNC90LjRhtGLXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCk7XG4iLCIvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgdmFyIGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIik7XG4vLyAgIGxlZnRNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIik7XG4vLyB9KTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIHZhciBsZWZ0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1tZW51XCIpO1xuLy8gICBsZWZ0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3Blbi1tZW51XCIpO1xuLy8gfSk7XG4iLCJmdW5jdGlvbiBtYXNrUGhvbmUoc2VsZWN0b3IsIG1hc2tlZCA9ICcrNyAoX19fKSBfX18tX18tX18nKSB7XG4gIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgZnVuY3Rpb24gbWFzayhldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gbWFza2VkLFxuICAgICAgZGVmID0gdGVtcGxhdGUucmVwbGFjZSgvXFxEL2csIFwiXCIpLFxuICAgICAgdmFsID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgY29uc29sZS5sb2codGVtcGxhdGUpO1xuICAgIGxldCBpID0gMCxcbiAgICAgIG5ld1ZhbHVlID0gdGVtcGxhdGUucmVwbGFjZSgvW19cXGRdL2csIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBpIDwgdmFsLmxlbmd0aCA/IHZhbC5jaGFyQXQoaSsrKSB8fCBkZWYuY2hhckF0KGkpIDogYTtcbiAgICAgIH0pO1xuICAgIGkgPSBuZXdWYWx1ZS5pbmRleE9mKFwiX1wiKTtcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUuc2xpY2UoMCwgaSk7XG4gICAgfVxuICAgIGxldCByZWcgPSB0ZW1wbGF0ZS5zdWJzdHIoMCwgdGhpcy52YWx1ZS5sZW5ndGgpLnJlcGxhY2UoL18rL2csXG4gICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gXCJcXFxcZHsxLFwiICsgYS5sZW5ndGggKyBcIn1cIjtcbiAgICAgIH0pLnJlcGxhY2UoL1srKCldL2csIFwiXFxcXCQmXCIpO1xuICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyByZWcgKyBcIiRcIik7XG4gICAgaWYgKCFyZWcudGVzdCh0aGlzLnZhbHVlKSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8IDUgfHwga2V5Q29kZSA+IDQ3ICYmIGtleUNvZGUgPCA1OCkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJibHVyXCIgJiYgdGhpcy52YWx1ZS5sZW5ndGggPCA1KSB7XG4gICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICB9XG5cbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbSBvZiBlbGVtcykge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG1hc2spO1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIG1hc2spO1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgbWFzayk7XG4gIH1cblxufVxuXG5tYXNrUGhvbmUoJy5waG9uZXZhbGlkYXRpb24nKVxuIiwiLy8gY29uc29sZS5sb2coXCJwcmVsb2FkZXIuanMgbG9hZGluZ1wiKVxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuLy8gICBjb25zb2xlLmxvZyhcIndpbmRvdy5vbmxvYWQgc3RhcnRcIilcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpLmNsYXNzTGlzdC5hZGQoXCJwcmVsb2FkZXItcmVtb3ZlXCIpO1xuLy8gfTtcblxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7IHNldFRpbWVvdXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpLmNsYXNzTGlzdC5hZGQoXCJwcmVsb2FkZXItcmVtb3ZlXCIpLCAyMDAwKX07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Njc3MvZ29jaGVja291dC5zY3NzJztcblxuXG5yZXF1aXJlKCcuL2pzL2xlZnQtbWVudS1jbGVhbicpXG5yZXF1aXJlKCcuL2pzL3ByZWxvYWRlcicpXG5yZXF1aXJlKCcuL2pzL2J0blVwJylcbnJlcXVpcmUoJy4vanMvbWFza1Bob25lJylcblxuXG4vLyBmdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50KSB7XG4vLyAgIC8vINCf0YDQvtGB0LjQvCDRhNC+0YDQvNGDINC90LUg0L7RgtC/0YDQsNCy0LvRj9GC0Ywg0LTQsNC90L3Ri9C1INGB0LDQvNC+0YHRgtC+0Y/RgtC10LvRjNC90L5cbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuLy8gICBjb25zb2xlLmxvZygn0J7RgtC/0YDQsNCy0LrQsCEnKVxuLy8gfVxuLy8gY29uc3QgYXBwbGljYW50Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzb25lLW9uY2UnKVxuLy8gYXBwbGljYW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KVxuLy9cbi8vXG4vL1xuLy9cbi8vIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHkoZXZlbnQpIHtcbi8vICAgY29uc3QgZm9ybU5vZGUgPSBldmVudC50YXJnZXQuZm9ybVxuLy8gICBjb25zdCBpc1ZhbGlkID0gZm9ybU5vZGUuY2hlY2tWYWxpZGl0eSgpXG4vL1xuLy8gICBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5kaXNhYmxlZCA9ICFpc1ZhbGlkXG4vLyB9XG4vL1xuLy8gYXBwbGljYW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrVmFsaWRpdHkpXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJidG5VcCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsaW5nIiwic2hvdyIsIl90aGlzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIl90aGlzMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpczMiLCJzY3JvbGxZIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwib25jbGljayIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwibWFza1Bob25lIiwic2VsZWN0b3IiLCJtYXNrZWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJlbGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXNrIiwiZXZlbnQiLCJrZXlDb2RlIiwidGVtcGxhdGUiLCJkZWYiLCJyZXBsYWNlIiwidmFsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaSIsIm5ld1ZhbHVlIiwiYSIsImNoYXJBdCIsImluZGV4T2YiLCJzbGljZSIsInJlZyIsInN1YnN0ciIsIlJlZ0V4cCIsInRlc3QiLCJ0eXBlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImVsZW0iLCJlcnIiLCJlIiwiZiIsIm9ubG9hZCIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9