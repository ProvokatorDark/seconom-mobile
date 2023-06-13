/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  server: {
    endpoints: {
      url: "".concat("http://localhost:9001")
    }
  }
});

/***/ }),

/***/ "./src/opt.js":
/*!********************!*\
  !*** ./src/opt.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_opt_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/opt.scss */ "./src/scss/opt.scss");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./src/config/index.js");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");


console.log(config__WEBPACK_IMPORTED_MODULE_1__["default"].server);

window.onload = function () {
  document.querySelector('.preloader').classList.add("preloader-remove");
};
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
document.querySelector(".top-menu").addEventListener("click", function (event) {
  event.preventDefault();
  var leftMenu = document.querySelector(".left-menu");
  leftMenu.classList.toggle("open-menu");
});
document.querySelector(".close-menu").addEventListener("click", function (event) {
  event.preventDefault();
  var leftMenu = document.querySelector(".left-menu");
  leftMenu.classList.toggle("open-menu");
});
document.addEventListener("DOMContentLoaded", function (event) {
  var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_2__["default"]('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    preloadImages: false,
    lazy: true,
    //  pagination
    pagination: {
      el: '.slide-pagination'
    }
  });
  var youtubeScriptTag = document.createElement('script');
  youtubeScriptTag.src = 'https://www.youtube.com/iframe_api';
  document.body.appendChild(youtubeScriptTag);
  window.onYouTubeIframeAPIReady = function () {
    var player = new YT.Player('player', {
      width: '100%',
      videoId: '_TdcW1Gy4fU',
      playerVars: {
        controls: 0
      },
      events: {
        onReady: function onReady(event) {
          var youtubeSlide = document.getElementById('youtube-slide');
          var isVideoPlaying = false;
          youtubeSlide.addEventListener('click', function () {
            if (isVideoPlaying) {
              event.target.stopVideo();
            } else {
              event.target.playVideo();
            }
            isVideoPlaying = !isVideoPlaying;
          });
        }
      }
    });
  };
});

/***/ }),

/***/ "./src/scss/opt.scss":
/*!***************************!*\
  !*** ./src/scss/opt.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 			"opt": 0,
/******/ 			"src_scss_opt_scss": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js","src_scss_opt_scss"], () => (__webpack_require__("./src/opt.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvb3B0LmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvc2Nzcy9vcHQuc2Nzcz8wZTgxIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBzZXJ2ZXI6IHtcbiAgICBlbmRwb2ludHM6IHtcbiAgICAgIHVybDogYCR7U0VSVkVSX0JBU0VfVVJMfWAsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgJy4vc2Nzcy9vcHQuc2Nzcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2NvbmZpZyc7XG5jb25zb2xlLmxvZyhjb25maWcuc2VydmVyKTtcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXIvYnVuZGxlJztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIik7XG59O1xuXG5jb25zdCBidG5VcCA9IHtcbiAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKSxcbiAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGUnKTtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRlJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgLy8g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvtC60L3QsCAod2luZG93KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLnNjcm9sbGluZyAmJiBzY3JvbGxZID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgLy8g0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC/0YDQvtC60YDRg9GC0LjQuyDRgdGC0YDQsNC90LjRhtGDINCx0L7Qu9C10LUg0YfQtdC8INC90LAgMjAwcHhcbiAgICAgIGlmIChzY3JvbGxZID4gNDAwKSB7XG4gICAgICAgIC8vINGB0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwINCy0LjQtNC40LzQvtC5XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g0LjQvdCw0YfQtSDRgdC60YDQvtC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJykub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgLy8g0L/QtdGA0LXQvNC10YHRgtC40YLRjNGB0Y8g0LIg0LLQtdGA0YXQvdGO0Y4g0YfQsNGB0YLRjCDRgdGC0YDQsNC90LjRhtGLXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIik7XG4gIGxlZnRNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciBsZWZ0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1tZW51XCIpO1xuICBsZWZ0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3Blbi1tZW51XCIpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGxvb3A6IHRydWUsXG5cbiAgICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgICBsYXp5OiB0cnVlLFxuICAgIC8vICBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc2xpZGUtcGFnaW5hdGlvbicsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgeW91dHViZVNjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICB5b3V0dWJlU2NyaXB0VGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh5b3V0dWJlU2NyaXB0VGFnKTtcbiAgd2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJ3BsYXllcicsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB2aWRlb0lkOiAnX1RkY1cxR3k0ZlUnLFxuICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICBjb250cm9sczogMFxuICAgICAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvblJlYWR5OiAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB5b3V0dWJlU2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91dHViZS1zbGlkZScpO1xuICAgICAgICAgIGxldCBpc1ZpZGVvUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgIHlvdXR1YmVTbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc1ZpZGVvUGxheWluZykge1xuICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3RvcFZpZGVvKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1ZpZGVvUGxheWluZyA9ICFpc1ZpZGVvUGxheWluZztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcblxuXG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm9wdFwiOiAwLFxuXHRcInNyY19zY3NzX29wdF9zY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfcHVnX3RhaWx3aW5kX3dlYnBhY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9wdWdfdGFpbHdpbmRfd2VicGFja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfc3dpcGVyX3N3aXBlci1idW5kbGVfbWluX2Nzcy1ub2RlX21vZHVsZXNfc3dpcGVyX3N3aXBlci1idW5kbGVfZXNtX2pzXCIsXCJzcmNfc2Nzc19vcHRfc2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9vcHQuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJlbmRwb2ludHMiLCJ1cmwiLCJjb25jYXQiLCJTRVJWRVJfQkFTRV9VUkwiLCJjb25maWciLCJjb25zb2xlIiwibG9nIiwiU3dpcGVyIiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYnRuVXAiLCJlbCIsInNjcm9sbGluZyIsInNob3ciLCJfdGhpcyIsImNvbnRhaW5zIiwicmVtb3ZlIiwic2V0VGltZW91dCIsImhpZGUiLCJfdGhpczIiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMzIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsIm9uY2xpY2siLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsZWZ0TWVudSIsInRvZ2dsZSIsInN3aXBlciIsImRpcmVjdGlvbiIsImxvb3AiLCJwcmVsb2FkSW1hZ2VzIiwibGF6eSIsInBhZ2luYXRpb24iLCJ5b3V0dWJlU2NyaXB0VGFnIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5IiwicGxheWVyIiwiWVQiLCJQbGF5ZXIiLCJ3aWR0aCIsInZpZGVvSWQiLCJwbGF5ZXJWYXJzIiwiY29udHJvbHMiLCJldmVudHMiLCJvblJlYWR5IiwieW91dHViZVNsaWRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1ZpZGVvUGxheWluZyIsInRhcmdldCIsInN0b3BWaWRlbyIsInBsYXlWaWRlbyJdLCJzb3VyY2VSb290IjoiIn0=