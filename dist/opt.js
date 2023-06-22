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

/***/ "./src/opt.js":
/*!********************!*\
  !*** ./src/opt.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_opt_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/opt.scss */ "./src/scss/opt.scss");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

__webpack_require__(/*! ./js/left-menu-clean */ "./src/js/left-menu-clean.js");
__webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");
__webpack_require__(/*! ./js/btnUp */ "./src/js/btnUp.js");

document.addEventListener("DOMContentLoaded", function (event) {
  var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    preloadImages: false,
    lazy: true,
    //  pagination
    pagination: {
      el: '.slide-pagination'
    },
    on: {
      slideChange: function slideChange(swiper) {
        if (swiper.slides[swiper.realIndex].classList.contains('youtube-slide')) {
          console.log('youtube');
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
                  var youtubeSlide = document.getElementsByClassName('youtube-slide')[0];
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
        }
      }
    }
  });
});

/***/ }),

/***/ "./src/scss/opt.scss":
/*!***************************!*\
  !*** ./src/scss/opt.scss ***!
  \***************************/
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
/******/ 			"opt": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js"], () => (__webpack_require__("./src/opt.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDSDtNQUNGO0lBQ0Y7RUFDRixDQUFDLENBQUM7QUFFSixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZERjs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9idG5VcC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2pzL2xlZnQtbWVudS1jbGVhbi5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2pzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL29wdC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL3Njc3Mvb3B0LnNjc3M/MGU4MSIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ0blVwID0ge1xuICBlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpLFxuICBzY3JvbGxpbmc6IGZhbHNlLFxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGUnKSAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRpbmcnKSkge1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkZScpO1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGUnKSAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRpbmcnKSkge1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGUnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAvLyDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC+0LrQvdCwICh3aW5kb3cpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsaW5nICYmIHNjcm9sbFkgPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAvLyDQtdGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L/RgNC+0LrRgNGD0YLQuNC7INGB0YLRgNCw0L3QuNGG0YMg0LHQvtC70LXQtSDRh9C10Lwg0L3QsCAyMDBweFxuICAgICAgaWYgKHNjcm9sbFkgPiA0MDApIHtcbiAgICAgICAgLy8g0YHQtNC10LvQsNC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXAg0LLQuNC00LjQvNC+0LlcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDQuNC90LDRh9C1INGB0LrRgNC+0LXQvCDQutC90L7Qv9C60YMgLmJ0bi11cFxuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMgLmJ0bi11cFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAvLyDQv9C10YDQtdC80LXRgdGC0LjRgtGM0YHRjyDQsiDQstC10YDRhdC90Y7RjiDRh9Cw0YHRgtGMINGB0YLRgNCw0L3QuNGG0YtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoKTtcbiIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtbWVudVwiKTtcbiAgbGVmdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tbWVudVwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIik7XG4gIGxlZnRNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIik7XG59KTtcbiIsIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpLmNsYXNzTGlzdC5hZGQoXCJwcmVsb2FkZXItcmVtb3ZlXCIpO1xufTtcbiIsImltcG9ydCAnLi9zY3NzL29wdC5zY3NzJztcbnJlcXVpcmUoJy4vanMvbGVmdC1tZW51LWNsZWFuJylcbnJlcXVpcmUoJy4vanMvcHJlbG9hZGVyJylcbnJlcXVpcmUoJy4vanMvYnRuVXAnKVxuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlci9idW5kbGUnO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG4gICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGxvb3A6IHRydWUsXG5cbiAgICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgICBsYXp5OiB0cnVlLFxuICAgIC8vICBwYWdpbmF0aW9uXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuc2xpZGUtcGFnaW5hdGlvbicsXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgc2xpZGVDaGFuZ2U6IGZ1bmN0aW9uIChzd2lwZXIpIHtcbiAgICAgICAgaWYgKHN3aXBlci5zbGlkZXNbc3dpcGVyLnJlYWxJbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCd5b3V0dWJlLXNsaWRlJykpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd5b3V0dWJlJylcbiAgICAgICAgICBjb25zdCB5b3V0dWJlU2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgeW91dHViZVNjcmlwdFRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh5b3V0dWJlU2NyaXB0VGFnKTtcbiAgICAgICAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKCdwbGF5ZXInLCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIHZpZGVvSWQ6ICdfVGRjVzFHeTRmVScsXG4gICAgICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgICAgICBjb250cm9sczogMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgICBvblJlYWR5OiAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHlvdXR1YmVTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3lvdXR1YmUtc2xpZGUnKVswXTtcbiAgICAgICAgICAgICAgICAgIGxldCBpc1ZpZGVvUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgeW91dHViZVNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWaWRlb1BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3RvcFZpZGVvKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlzVmlkZW9QbGF5aW5nID0gIWlzVmlkZW9QbGF5aW5nO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxufSk7XG5cblxuXG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm9wdFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX3B1Z190YWlsd2luZF93ZWJwYWNrXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfcHVnX3RhaWx3aW5kX3dlYnBhY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3N3aXBlcl9zd2lwZXItYnVuZGxlX21pbl9jc3Mtbm9kZV9tb2R1bGVzX3N3aXBlcl9zd2lwZXItYnVuZGxlX2VzbV9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9vcHQuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJidG5VcCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsaW5nIiwic2hvdyIsIl90aGlzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIl90aGlzMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpczMiLCJzY3JvbGxZIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwib25jbGljayIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxlZnRNZW51IiwidG9nZ2xlIiwib25sb2FkIiwicmVxdWlyZSIsIlN3aXBlciIsInN3aXBlciIsImRpcmVjdGlvbiIsImxvb3AiLCJwcmVsb2FkSW1hZ2VzIiwibGF6eSIsInBhZ2luYXRpb24iLCJvbiIsInNsaWRlQ2hhbmdlIiwic2xpZGVzIiwicmVhbEluZGV4IiwiY29uc29sZSIsImxvZyIsInlvdXR1YmVTY3JpcHRUYWciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYm9keSIsImFwcGVuZENoaWxkIiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJwbGF5ZXIiLCJZVCIsIlBsYXllciIsIndpZHRoIiwidmlkZW9JZCIsInBsYXllclZhcnMiLCJjb250cm9scyIsImV2ZW50cyIsIm9uUmVhZHkiLCJ5b3V0dWJlU2xpZGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaXNWaWRlb1BsYXlpbmciLCJ0YXJnZXQiLCJzdG9wVmlkZW8iLCJwbGF5VmlkZW8iXSwic291cmNlUm9vdCI6IiJ9