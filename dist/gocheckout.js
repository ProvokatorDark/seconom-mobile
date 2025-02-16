/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gocheckout.js":
/*!***************************!*\
  !*** ./src/gocheckout.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"gocheckout": 0,
/******/ 			"src_scss_gocheckout_scss": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstarter_pug_tailwind_webpack"] = self["webpackChunkstarter_pug_tailwind_webpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_scss_gocheckout_scss"], () => (__webpack_require__("./src/gocheckout.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9nb2NoZWNrb3V0LmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvanMvYnRuVXAuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9sZWZ0LW1lbnUtY2xlYW4uanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9tYXNrUGhvbmUuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9wcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9zY3NzL2dvY2hlY2tvdXQuc2Nzcz83YzlhIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Njc3MvZ29jaGVja291dC5zY3NzJztcblxuXG5yZXF1aXJlKCcuL2pzL2xlZnQtbWVudS1jbGVhbicpXG5yZXF1aXJlKCcuL2pzL3ByZWxvYWRlcicpXG5yZXF1aXJlKCcuL2pzL2J0blVwJylcbnJlcXVpcmUoJy4vanMvbWFza1Bob25lJylcblxuXG4vLyBmdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50KSB7XG4vLyAgIC8vINCf0YDQvtGB0LjQvCDRhNC+0YDQvNGDINC90LUg0L7RgtC/0YDQsNCy0LvRj9GC0Ywg0LTQsNC90L3Ri9C1INGB0LDQvNC+0YHRgtC+0Y/RgtC10LvRjNC90L5cbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuLy8gICBjb25zb2xlLmxvZygn0J7RgtC/0YDQsNCy0LrQsCEnKVxuLy8gfVxuLy8gY29uc3QgYXBwbGljYW50Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzb25lLW9uY2UnKVxuLy8gYXBwbGljYW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KVxuLy9cbi8vXG4vL1xuLy9cbi8vIGZ1bmN0aW9uIGNoZWNrVmFsaWRpdHkoZXZlbnQpIHtcbi8vICAgY29uc3QgZm9ybU5vZGUgPSBldmVudC50YXJnZXQuZm9ybVxuLy8gICBjb25zdCBpc1ZhbGlkID0gZm9ybU5vZGUuY2hlY2tWYWxpZGl0eSgpXG4vL1xuLy8gICBmb3JtTm9kZS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5kaXNhYmxlZCA9ICFpc1ZhbGlkXG4vLyB9XG4vL1xuLy8gYXBwbGljYW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrVmFsaWRpdHkpXG5cblxuXG5cbiIsImNvbnN0IGJ0blVwID0ge1xuICBlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpLFxuICBzY3JvbGxpbmc6IGZhbHNlLFxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGUnKSAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRpbmcnKSkge1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkZScpO1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGUnKSAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRpbmcnKSkge1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGUnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAvLyDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC+0LrQvdCwICh3aW5kb3cpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsaW5nICYmIHNjcm9sbFkgPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAvLyDQtdGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L/RgNC+0LrRgNGD0YLQuNC7INGB0YLRgNCw0L3QuNGG0YMg0LHQvtC70LXQtSDRh9C10Lwg0L3QsCAyMDBweFxuICAgICAgaWYgKHNjcm9sbFkgPiA0MDApIHtcbiAgICAgICAgLy8g0YHQtNC10LvQsNC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXAg0LLQuNC00LjQvNC+0LlcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDQuNC90LDRh9C1INGB0LrRgNC+0LXQvCDQutC90L7Qv9C60YMgLmJ0bi11cFxuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMgLmJ0bi11cFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAvLyDQv9C10YDQtdC80LXRgdGC0LjRgtGM0YHRjyDQsiDQstC10YDRhdC90Y7RjiDRh9Cw0YHRgtGMINGB0YLRgNCw0L3QuNGG0YtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoKTtcbiIsIi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICB2YXIgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtbWVudVwiKTtcbi8vICAgbGVmdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tbWVudVwiKTtcbi8vIH0pO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgdmFyIGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIik7XG4vLyAgIGxlZnRNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIik7XG4vLyB9KTtcbiIsImZ1bmN0aW9uIG1hc2tQaG9uZShzZWxlY3RvciwgbWFza2VkID0gJys3IChfX18pIF9fXy1fXy1fXycpIHtcbiAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICBmdW5jdGlvbiBtYXNrKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBtYXNrZWQsXG4gICAgICBkZWYgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXEQvZywgXCJcIiksXG4gICAgICB2YWwgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICBjb25zb2xlLmxvZyh0ZW1wbGF0ZSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgbmV3VmFsdWUgPSB0ZW1wbGF0ZS5yZXBsYWNlKC9bX1xcZF0vZywgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGkgPCB2YWwubGVuZ3RoID8gdmFsLmNoYXJBdChpKyspIHx8IGRlZi5jaGFyQXQoaSkgOiBhO1xuICAgICAgfSk7XG4gICAgaSA9IG5ld1ZhbHVlLmluZGV4T2YoXCJfXCIpO1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZS5zbGljZSgwLCBpKTtcbiAgICB9XG4gICAgbGV0IHJlZyA9IHRlbXBsYXRlLnN1YnN0cigwLCB0aGlzLnZhbHVlLmxlbmd0aCkucmVwbGFjZSgvXysvZyxcbiAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBcIlxcXFxkezEsXCIgKyBhLmxlbmd0aCArIFwifVwiO1xuICAgICAgfSkucmVwbGFjZSgvWysoKV0vZywgXCJcXFxcJCZcIik7XG4gICAgcmVnID0gbmV3IFJlZ0V4cChcIl5cIiArIHJlZyArIFwiJFwiKTtcbiAgICBpZiAoIXJlZy50ZXN0KHRoaXMudmFsdWUpIHx8IHRoaXMudmFsdWUubGVuZ3RoIDwgNSB8fCBrZXlDb2RlID4gNDcgJiYga2V5Q29kZSA8IDU4KSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxuICAgIGlmIChldmVudC50eXBlID09PSBcImJsdXJcIiAmJiB0aGlzLnZhbHVlLmxlbmd0aCA8IDUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgIH1cblxuICB9XG5cbiAgZm9yIChjb25zdCBlbGVtIG9mIGVsZW1zKSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgbWFzayk7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgbWFzayk7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBtYXNrKTtcbiAgfVxuXG59XG5cbm1hc2tQaG9uZSgnLnBob25ldmFsaWRhdGlvbicpXG4iLCIvLyBjb25zb2xlLmxvZyhcInByZWxvYWRlci5qcyBsb2FkaW5nXCIpXG4vLyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnNvbGUubG9nKFwid2luZG93Lm9ubG9hZCBzdGFydFwiKVxuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIik7XG4vLyB9O1xuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgc2V0VGltZW91dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIiksIDIwMDApfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImdvY2hlY2tvdXRcIjogMCxcblx0XCJzcmNfc2Nzc19nb2NoZWNrb3V0X3Njc3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9wdWdfdGFpbHdpbmRfd2VicGFja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX3B1Z190YWlsd2luZF93ZWJwYWNrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzcmNfc2Nzc19nb2NoZWNrb3V0X3Njc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ29jaGVja291dC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJidG5VcCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsaW5nIiwic2hvdyIsIl90aGlzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIl90aGlzMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpczMiLCJzY3JvbGxZIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwib25jbGljayIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwibWFza1Bob25lIiwic2VsZWN0b3IiLCJtYXNrZWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJlbGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXNrIiwiZXZlbnQiLCJrZXlDb2RlIiwidGVtcGxhdGUiLCJkZWYiLCJyZXBsYWNlIiwidmFsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiaSIsIm5ld1ZhbHVlIiwiYSIsImNoYXJBdCIsImluZGV4T2YiLCJzbGljZSIsInJlZyIsInN1YnN0ciIsIlJlZ0V4cCIsInRlc3QiLCJ0eXBlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImVsZW0iLCJlcnIiLCJlIiwiZiIsIm9ubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=