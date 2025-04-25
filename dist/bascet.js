/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bascet.js":
/*!***********************!*\
  !*** ./src/bascet.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_bascet_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/bascet.scss */ "./src/scss/bascet.scss");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

__webpack_require__(/*! ./js/left-menu-clean */ "./src/js/left-menu-clean.js");
__webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");
__webpack_require__(/*! ./js/btnUp */ "./src/js/btnUp.js");

var stickyUp = {
  el: document.getElementById('sticky-pane'),
  scrolling: false,
  totalObject: {},
  show: function show() {
    var _this = this;
    if (this.el.classList.contains('sticky-up_hide') && !this.el.classList.contains('sticky-up_hiding')) {
      this.el.classList.remove('sticky-up_hide');
      this.el.classList.add('sticky-up_hiding');
      window.setTimeout(function () {
        _this.el.classList.remove('sticky-up_hiding');
      }, 300);
    }
  },
  hide: function hide() {
    var _this2 = this;
    if (!this.el.classList.contains('sticky-up_hide') && !this.el.classList.contains('sticky-up_hiding')) {
      this.el.classList.add('sticky-up_hiding');
      window.setTimeout(function () {
        _this2.el.classList.add('sticky-up_hide');
        _this2.el.classList.remove('sticky-up_hiding');
      }, 300);
    }
  },
  init: function init() {
    var total = document.getElementById('total');
    var totalY = total.getBoundingClientRect();
    var coords = getCoords(total);
    var diff = coords.top - totalY.height;
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    this.totalObject = {
      totalY: totalY,
      coords: coords,
      diff: diff,
      scrollY: scrollY
    };
    if (this.totalObject.scrollY < this.totalObject.diff) {
      stickyUp.show();
    } else {
      stickyUp.hide();
    }
    this.start();
  },
  start: function start() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', handler);
  }
};

// Функция для расчета координат блока
function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
// Функция обработчик которая решает показывать блок или нет
function handler() {
  var scrollY = window.scrollY || document.documentElement.scrollTop;

  // console.log('diff', stickyUp.totalObject.diff,'scrollY',scrollY)
  // console.log(stickyUp.totalObject)

  if (this.scrolling && scrollY < stickyUp.totalObject.diff) {
    stickyUp.show();
  }
  this.scrolling = false;
  // если пользователь скроллит страницу до кнопки
  if (scrollY < stickyUp.totalObject.diff) {
    // сделаем кнопку видимой
    stickyUp.show();
  } else {
    // иначе скроем кнопку
    stickyUp.hide();
  }
}
window.addEventListener("resize", function () {
  window.removeEventListener('scroll', handler);
  stickyUp.init();
}, false);
stickyUp.init();
var swiperCarousel = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-carousel', {
  slidesPerView: 2,
  spaceBetween: 6,
  loop: true,
  preloadImages: false,
  lazy: true,
  breakpoints: {
    667: {
      slidesPerView: 4
    }
  }
});

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

/***/ "./src/scss/bascet.scss":
/*!******************************!*\
  !*** ./src/scss/bascet.scss ***!
  \******************************/
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bascet": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js"], () => (__webpack_require__("./src/bascet.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvYmFzY2V0LmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvanMvYnRuVXAuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9sZWZ0LW1lbnUtY2xlYW4uanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9wcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9zY3NzL2Jhc2NldC5zY3NzPzE3ODciLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc2Nzcy9iYXNjZXQuc2Nzcyc7XG5cbnJlcXVpcmUoJy4vanMvbGVmdC1tZW51LWNsZWFuJylcbnJlcXVpcmUoJy4vanMvcHJlbG9hZGVyJylcbnJlcXVpcmUoJy4vanMvYnRuVXAnKVxuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlci9idW5kbGUnO1xuXG5jb25zdCBzdGlja3lVcCA9IHtcbiAgZWw6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGlja3ktcGFuZScpLFxuICBzY3JvbGxpbmc6IGZhbHNlLFxuICB0b3RhbE9iamVjdDp7fSxcbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0aWNreS11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGlja3ktdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LXVwX2hpZGUnKTtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreS11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0aWNreS11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGlja3ktdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc3RpY2t5LXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3N0aWNreS11cF9oaWRlJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc3RpY2t5LXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGluaXQoKXtcbiAgICBjb25zdCB0b3RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbCcpXG4gICAgY29uc3QgdG90YWxZID0gdG90YWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGNvb3JkcyA9IGdldENvb3Jkcyh0b3RhbClcbiAgICBjb25zdCBkaWZmID0gY29vcmRzLnRvcCAtIHRvdGFsWS5oZWlnaHRcbiAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIHRoaXMudG90YWxPYmplY3Q9e1xuICAgICAgdG90YWxZLFxuICAgICAgY29vcmRzLFxuICAgICAgZGlmZixcbiAgICAgIHNjcm9sbFlcbiAgICB9XG4gICAgaWYgKHRoaXMudG90YWxPYmplY3Quc2Nyb2xsWSA8IHRoaXMudG90YWxPYmplY3QuZGlmZikge1xuICAgICAgc3RpY2t5VXAuc2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGlja3lVcC5oaWRlKCk7XG4gICAgfVxuICAgIHRoaXMuc3RhcnQoKTtcbiAgfSxcbiAgc3RhcnQoKSB7XG4gICAgLy8g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvtC60L3QsCAod2luZG93KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgfVxufVxuXG4vLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YDQsNGB0YfQtdGC0LAg0LrQvtC+0YDQtNC40L3QsNGCINCx0LvQvtC60LBcbmZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XG4gIGxldCBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHRvcDogYm94LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICByaWdodDogYm94LnJpZ2h0ICsgd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgIGJvdHRvbTogYm94LmJvdHRvbSArIHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICBsZWZ0OiBib3gubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldFxuICB9O1xufVxuLy8g0KTRg9C90LrRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQvtGC0L7RgNCw0Y8g0YDQtdGI0LDQtdGCINC/0L7QutCw0LfRi9Cy0LDRgtGMINCx0LvQvtC6INC40LvQuCDQvdC10YJcbmZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gIC8vIGNvbnNvbGUubG9nKCdkaWZmJywgc3RpY2t5VXAudG90YWxPYmplY3QuZGlmZiwnc2Nyb2xsWScsc2Nyb2xsWSlcbiAgLy8gY29uc29sZS5sb2coc3RpY2t5VXAudG90YWxPYmplY3QpXG5cbiAgaWYgKHRoaXMuc2Nyb2xsaW5nICYmIHNjcm9sbFkgPCAoc3RpY2t5VXAudG90YWxPYmplY3QuZGlmZikpIHtcbiAgICBzdGlja3lVcC5zaG93KCk7XG4gIH1cbiAgdGhpcy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgLy8g0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGB0LrRgNC+0LvQu9C40YIg0YHRgtGA0LDQvdC40YbRgyDQtNC+INC60L3QvtC/0LrQuFxuICBpZiAoc2Nyb2xsWSA8IChzdGlja3lVcC50b3RhbE9iamVjdC5kaWZmKSkge1xuICAgIC8vINGB0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyDQstC40LTQuNC80L7QuVxuICAgIHN0aWNreVVwLnNob3coKTtcbiAgfSBlbHNlIHtcbiAgICAvLyDQuNC90LDRh9C1INGB0LrRgNC+0LXQvCDQutC90L7Qv9C60YNcbiAgICBzdGlja3lVcC5oaWRlKCk7XG4gIH1cbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpXG4gIHN0aWNreVVwLmluaXQoKTtcbn0sIGZhbHNlKTtcbnN0aWNreVVwLmluaXQoKTtcblxuY29uc3Qgc3dpcGVyQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNhcm91c2VsJyx7XG4gIHNsaWRlc1BlclZpZXc6IDIsXG4gIHNwYWNlQmV0d2VlbjogNixcbiAgbG9vcDogdHJ1ZSxcblxuICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgbGF6eTogdHJ1ZSxcblxuICBicmVha3BvaW50czoge1xuICAgIDY2Nzoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNFxuICAgIH1cbiAgfVxufSlcbiIsImNvbnN0IGJ0blVwID0ge1xuICBlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpLFxuICBzY3JvbGxpbmc6IGZhbHNlLFxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGUnKSAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRpbmcnKSkge1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkZScpO1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGUnKSAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRpbmcnKSkge1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGUnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAvLyDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC+0LrQvdCwICh3aW5kb3cpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsaW5nICYmIHNjcm9sbFkgPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAvLyDQtdGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L/RgNC+0LrRgNGD0YLQuNC7INGB0YLRgNCw0L3QuNGG0YMg0LHQvtC70LXQtSDRh9C10Lwg0L3QsCAyMDBweFxuICAgICAgaWYgKHNjcm9sbFkgPiA0MDApIHtcbiAgICAgICAgLy8g0YHQtNC10LvQsNC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXAg0LLQuNC00LjQvNC+0LlcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDQuNC90LDRh9C1INGB0LrRgNC+0LXQvCDQutC90L7Qv9C60YMgLmJ0bi11cFxuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMgLmJ0bi11cFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAvLyDQv9C10YDQtdC80LXRgdGC0LjRgtGM0YHRjyDQsiDQstC10YDRhdC90Y7RjiDRh9Cw0YHRgtGMINGB0YLRgNCw0L3QuNGG0YtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoKTtcbiIsIi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICB2YXIgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtbWVudVwiKTtcbi8vICAgbGVmdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tbWVudVwiKTtcbi8vIH0pO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgdmFyIGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIik7XG4vLyAgIGxlZnRNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIik7XG4vLyB9KTtcbiIsIi8vIGNvbnNvbGUubG9nKFwicHJlbG9hZGVyLmpzIGxvYWRpbmdcIilcbi8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbi8vICAgY29uc29sZS5sb2coXCJ3aW5kb3cub25sb2FkIHN0YXJ0XCIpXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKS5jbGFzc0xpc3QuYWRkKFwicHJlbG9hZGVyLXJlbW92ZVwiKTtcbi8vIH07XG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyBzZXRUaW1lb3V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKS5jbGFzc0xpc3QuYWRkKFwicHJlbG9hZGVyLXJlbW92ZVwiKSwgMjAwMCl9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYmFzY2V0XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfcHVnX3RhaWx3aW5kX3dlYnBhY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9wdWdfdGFpbHdpbmRfd2VicGFja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfc3dpcGVyX3N3aXBlci1idW5kbGVfbWluX2Nzcy1ub2RlX21vZHVsZXNfc3dpcGVyX3N3aXBlci1idW5kbGVfZXNtX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Jhc2NldC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJTd2lwZXIiLCJzdGlja3lVcCIsImVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbGluZyIsInRvdGFsT2JqZWN0Iiwic2hvdyIsIl90aGlzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIl90aGlzMiIsImluaXQiLCJ0b3RhbCIsInRvdGFsWSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvb3JkcyIsImdldENvb3JkcyIsImRpZmYiLCJ0b3AiLCJoZWlnaHQiLCJzY3JvbGxZIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwic3RhcnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlciIsImVsZW0iLCJib3giLCJwYWdlWU9mZnNldCIsInJpZ2h0IiwicGFnZVhPZmZzZXQiLCJib3R0b20iLCJsZWZ0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN3aXBlckNhcm91c2VsIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJwcmVsb2FkSW1hZ2VzIiwibGF6eSIsImJyZWFrcG9pbnRzIiwiYnRuVXAiLCJxdWVyeVNlbGVjdG9yIiwiX3RoaXMzIiwib25jbGljayIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJvbmxvYWQiXSwic291cmNlUm9vdCI6IiJ9