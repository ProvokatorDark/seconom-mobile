/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/home.scss */ "./src/scss/home.scss");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

__webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");
__webpack_require__(/*! ./js/btnUp */ "./src/js/btnUp.js");

var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  preloadImages: false,
  lazy: true,
  autoplay: {
    delay: 8000,
    pauseOnMouseEnter: true
  },
  //  pagination
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var swiperPromo = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-promo', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  preloadImages: false,
  lazy: true,
  //  pagination
  pagination: {
    el: '.swiper-pagination-category',
    type: 'bullets'
  }
});
var swiperCarousel = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-carousel', {
  slidesPerView: 2,
  spaceBetween: 6,
  loop: true,
  preloadImages: false,
  lazy: true,
  breakpoints: {
    667: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 6
    },
    1280: {
      slidesPerView: 8
    }
  },
  pagination: {
    el: '.carousel-pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
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

/***/ "./src/js/preloader.js":
/*!*****************************!*\
  !*** ./src/js/preloader.js ***!
  \*****************************/
/***/ (() => {

window.onload = function () {
  document.querySelector('.preloader').classList.add("preloader-remove");
};

/***/ }),

/***/ "./src/scss/home.scss":
/*!****************************!*\
  !*** ./src/scss/home.scss ***!
  \****************************/
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
/******/ 			"home": 0,
/******/ 			"src_scss_home_scss": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js","src_scss_home_scss"], () => (__webpack_require__("./src/home.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9idG5VcC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2pzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL3Njc3MvaG9tZS5zY3NzPzk0ZWIiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc2Nzcy9ob21lLnNjc3MnO1xucmVxdWlyZSgnLi9qcy9wcmVsb2FkZXInKVxucmVxdWlyZSgnLi9qcy9idG5VcCcpXG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyL2J1bmRsZSc7XG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBsb29wOnRydWUsXG4gIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICBsYXp5OiB0cnVlLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiA4MDAwLFxuICAgIHBhdXNlT25Nb3VzZUVudGVyOiB0cnVlLFxuICB9LFxuICAvLyAgcGFnaW5hdGlvblxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAoJy5zd2lwZXItYnV0dG9uLW5leHQnKSxcbiAgICBwcmV2RWw6ICgnLnN3aXBlci1idXR0b24tcHJldicpLFxuICB9LFxufSk7XG5cbmNvbnN0IHN3aXBlclByb21vID0gbmV3IFN3aXBlcignLnN3aXBlci1wcm9tbycsIHtcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogdHJ1ZSxcblxuICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgbGF6eTogdHJ1ZSxcblxuICAvLyAgcGFnaW5hdGlvblxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24tY2F0ZWdvcnknLFxuICAgIHR5cGU6J2J1bGxldHMnXG4gIH0sXG59KTtcblxuY29uc3Qgc3dpcGVyQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNhcm91c2VsJyx7XG4gIHNsaWRlc1BlclZpZXc6IDIsXG4gIHNwYWNlQmV0d2VlbjogNixcbiAgbG9vcDogdHJ1ZSxcblxuICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgbGF6eTogdHJ1ZSxcblxuICBicmVha3BvaW50czoge1xuICAgIDY2Nzoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNFxuICAgIH0sXG4gICAgMTAyNDp7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA2XG4gICAgfSxcbiAgICAxMjgwOntcbiAgICAgIHNsaWRlc1BlclZpZXc6IDhcbiAgICB9XG4gIH0sXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5jYXJvdXNlbC1wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAoJy5zd2lwZXItYnV0dG9uLW5leHQnKSxcbiAgICBwcmV2RWw6ICgnLnN3aXBlci1idXR0b24tcHJldicpLFxuICB9LFxuXG59KVxuXG5cblxuXG5cblxuIiwiY29uc3QgYnRuVXAgPSB7XG4gIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJyksXG4gIHNjcm9sbGluZzogZmFsc2UsXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRlJyk7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkZScpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIC8vINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0L7QutC90LAgKHdpbmRvdylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5zY3JvbGxpbmcgJiYgc2Nyb2xsWSA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIC8vINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQv9GA0L7QutGA0YPRgtC40Lsg0YHRgtGA0LDQvdC40YbRgyDQsdC+0LvQtdC1INGH0LXQvCDQvdCwIDIwMHB4XG4gICAgICBpZiAoc2Nyb2xsWSA+IDQwMCkge1xuICAgICAgICAvLyDRgdC00LXQu9Cw0LXQvCDQutC90L7Qv9C60YMgLmJ0bi11cCDQstC40LTQuNC80L7QuVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vINC40L3QsNGH0LUg0YHQutGA0L7QtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIC8vINC/0LXRgNC10LzQtdGB0YLQuNGC0YzRgdGPINCyINCy0LXRgNGF0L3RjtGOINGH0LDRgdGC0Ywg0YHRgtGA0LDQvdC40YbRi1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcigpO1xuIiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIik7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaG9tZVwiOiAwLFxuXHRcInNyY19zY3NzX2hvbWVfc2Nzc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX3B1Z190YWlsd2luZF93ZWJwYWNrXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfcHVnX3RhaWx3aW5kX3dlYnBhY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3N3aXBlcl9zd2lwZXItYnVuZGxlX21pbl9jc3Mtbm9kZV9tb2R1bGVzX3N3aXBlcl9zd2lwZXItYnVuZGxlX2VzbV9qc1wiLFwic3JjX3Njc3NfaG9tZV9zY3NzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2hvbWUuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiU3dpcGVyIiwic3dpcGVyIiwiZGlyZWN0aW9uIiwibG9vcCIsInByZWxvYWRJbWFnZXMiLCJsYXp5IiwiYXV0b3BsYXkiLCJkZWxheSIsInBhdXNlT25Nb3VzZUVudGVyIiwicGFnaW5hdGlvbiIsImVsIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInN3aXBlclByb21vIiwidHlwZSIsInN3aXBlckNhcm91c2VsIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImJyZWFrcG9pbnRzIiwiYnRuVXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxpbmciLCJzaG93IiwiX3RoaXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJoaWRlIiwiX3RoaXMyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzMyIsInNjcm9sbFkiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvbmNsaWNrIiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJvbmxvYWQiXSwic291cmNlUm9vdCI6IiJ9