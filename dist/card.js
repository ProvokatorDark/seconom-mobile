/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/card.scss */ "./src/scss/card.scss");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

__webpack_require__(/*! ./js/left-menu-clean */ "./src/js/left-menu-clean.js");
__webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");
__webpack_require__(/*! ./js/btnUp */ "./src/js/btnUp.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper', {
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
var swiperPromo = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-promo', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  preloadImages: false,
  lazy: true,
  //  pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  }
});
document.querySelectorAll('.swiper-carousel').forEach(function (value) {
  var swiperId = value.getAttribute('data-swiper-id'); // Получаем ID карусели из data-атрибута
  var swiperNav = document.querySelector('.swiper-navigation[data-swiper-id="' + swiperId + '"]'); // Находим контейнер навигации по ID карусели
  var swiperCarousel = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"](value, {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 6,
    loop: true,
    preloadImages: false,
    lazy: true,
    breakpoints: {
      667: {
        slidesPerView: 4
      }
    },
    //loop
    pagination: {
      //pagination(dots)
      el: '.carousel-pagination',
      type: 'progressbar'
    },
    navigation: {
      //navigation(arrows)
      nextEl: swiperNav.querySelector('.swiper-button-next'),
      prevEl: swiperNav.querySelector('.swiper-button-prev')
    }
  });
});

// Назначение событий на кнопки навигации
document.querySelectorAll('.swiper-navigation .swiper-button-prev').forEach(function (value) {
  value.addEventListener('click', function () {
    var swiperId = this.closest('.swiper-navigation').getAttribute('data-swiper-id');
    var swiper = document.querySelector('.swiper-carousel[data-swiper-id="' + swiperId + '"]').swiper;
    swiper.slidePrev();
  });
});
document.querySelectorAll('.swiper-navigation .swiper-button-next').forEach(function (value) {
  value.addEventListener('click', function () {
    var swiperId = this.closest('.swiper-navigation').getAttribute('data-swiper-id');
    var swiper = document.querySelector('.swiper-carousel[data-swiper-id="' + swiperId + '"]').swiper;
    swiper.slideNext();
  });
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

/***/ "./src/scss/card.scss":
/*!****************************!*\
  !*** ./src/scss/card.scss ***!
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			"card": 0,
/******/ 			"src_scss_card_scss": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js","vendors-node_modules_jquery_dist_jquery_js","src_scss_card_scss"], () => (__webpack_require__("./src/card.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBRTFCQSxtQkFBTyxDQUFDLHlEQUFzQixDQUFDO0FBQy9CQSxtQkFBTyxDQUFDLDZDQUFnQixDQUFDO0FBQ3pCQSxtQkFBTyxDQUFDLHFDQUFZLENBQUM7QUFDckIsSUFBSUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFFLG9EQUFRLENBQUU7QUFFUTtBQUVuQyxJQUFNRyxNQUFNLEdBQUcsSUFBSUQscURBQU0sQ0FBQyxTQUFTLEVBQUU7RUFDbkM7RUFDQUUsU0FBUyxFQUFFLFlBQVk7RUFDdkJDLElBQUksRUFBRSxJQUFJO0VBRVZDLGFBQWEsRUFBRSxLQUFLO0VBQ3BCQyxJQUFJLEVBQUUsSUFBSTtFQUNWO0VBQ0FDLFVBQVUsRUFBRTtJQUNWQyxFQUFFLEVBQUU7RUFDTjtBQUNGLENBQUMsQ0FBQztBQUNGLElBQU1DLFdBQVcsR0FBRyxJQUFJUixxREFBTSxDQUFDLGVBQWUsRUFBRTtFQUM5QztFQUNBRSxTQUFTLEVBQUUsWUFBWTtFQUN2QkMsSUFBSSxFQUFFLElBQUk7RUFFVkMsYUFBYSxFQUFFLEtBQUs7RUFDcEJDLElBQUksRUFBRSxJQUFJO0VBRVY7RUFDQUMsVUFBVSxFQUFFO0lBQ1ZDLEVBQUUsRUFBRSxvQkFBb0I7SUFDeEJFLElBQUksRUFBRTtFQUVSO0FBQ0YsQ0FBQyxDQUFDO0FBRUZDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVNDLEtBQUssRUFBRTtFQUNwRSxJQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztFQUN2RCxJQUFNQyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLHFDQUFxQyxHQUFHSCxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNuRyxJQUFNSSxjQUFjLEdBQUcsSUFBSWxCLHFEQUFNLENBQUNhLEtBQUssRUFBRTtJQUN2Q1gsU0FBUyxFQUFFLFlBQVk7SUFDdkJpQixhQUFhLEVBQUUsQ0FBQztJQUNoQkMsWUFBWSxFQUFFLENBQUM7SUFDZmpCLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCQyxJQUFJLEVBQUUsSUFBSTtJQUNWZ0IsV0FBVyxFQUFFO01BQ1gsR0FBRyxFQUFFO1FBQ0hGLGFBQWEsRUFBRTtNQUNqQjtJQUNGLENBQUM7SUFBeUI7SUFDMUJiLFVBQVUsRUFBRTtNQUF3QjtNQUNsQ0MsRUFBRSxFQUFFLHNCQUFzQjtNQUMxQkUsSUFBSSxFQUFFO0lBQ1IsQ0FBQztJQUNEYSxVQUFVLEVBQUU7TUFBd0I7TUFDbENDLE1BQU0sRUFBRVAsU0FBUyxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7TUFDdERPLE1BQU0sRUFBRVIsU0FBUyxDQUFDQyxhQUFhLENBQUMscUJBQXFCO0lBQ3ZEO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0FQLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsd0NBQXdDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVNDLEtBQUssRUFBRTtFQUMxRkEsS0FBSyxDQUFDWSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUN6QyxJQUFNWCxRQUFRLEdBQUcsSUFBSSxDQUFDWSxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQ1gsWUFBWSxDQUFDLGdCQUFnQixDQUFDO0lBQ2xGLElBQU1kLE1BQU0sR0FBR1MsUUFBUSxDQUFDTyxhQUFhLENBQUMsbUNBQW1DLEdBQUdILFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQ2IsTUFBTTtJQUNuR0EsTUFBTSxDQUFDMEIsU0FBUyxFQUFFO0VBQ3BCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGakIsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBU0MsS0FBSyxFQUFFO0VBQzFGQSxLQUFLLENBQUNZLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFXO0lBQ3pDLElBQU1YLFFBQVEsR0FBRyxJQUFJLENBQUNZLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDWCxZQUFZLENBQUMsZ0JBQWdCLENBQUM7SUFDbEYsSUFBTWQsTUFBTSxHQUFHUyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxtQ0FBbUMsR0FBR0gsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDYixNQUFNO0lBQ25HQSxNQUFNLENBQUMyQixTQUFTLEVBQUU7RUFDcEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDOUVGLElBQU1DLEtBQUssR0FBRztFQUNadEIsRUFBRSxFQUFFRyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxTQUFTLENBQUM7RUFDckNhLFNBQVMsRUFBRSxLQUFLO0VBQ2hCQyxJQUFJLFdBQUFBLEtBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDTCxJQUFJLElBQUksQ0FBQ3pCLEVBQUUsQ0FBQzBCLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDM0IsRUFBRSxDQUFDMEIsU0FBUyxDQUFDQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7TUFDN0YsSUFBSSxDQUFDM0IsRUFBRSxDQUFDMEIsU0FBUyxDQUFDRSxNQUFNLENBQUMsYUFBYSxDQUFDO01BQ3ZDLElBQUksQ0FBQzVCLEVBQUUsQ0FBQzBCLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGVBQWUsQ0FBQztNQUN0Q0MsTUFBTSxDQUFDQyxVQUFVLENBQUMsWUFBTTtRQUN0Qk4sS0FBSSxDQUFDekIsRUFBRSxDQUFDMEIsU0FBUyxDQUFDRSxNQUFNLENBQUMsZUFBZSxDQUFDO01BQzNDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDVDtFQUNGLENBQUM7RUFDREksSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQ2pDLEVBQUUsQ0FBQzBCLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDM0IsRUFBRSxDQUFDMEIsU0FBUyxDQUFDQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7TUFDOUYsSUFBSSxDQUFDM0IsRUFBRSxDQUFDMEIsU0FBUyxDQUFDRyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQ3RDQyxNQUFNLENBQUNDLFVBQVUsQ0FBQyxZQUFNO1FBQ3RCRSxNQUFJLENBQUNqQyxFQUFFLENBQUMwQixTQUFTLENBQUNHLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDcENJLE1BQUksQ0FBQ2pDLEVBQUUsQ0FBQzBCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGVBQWUsQ0FBQztNQUMzQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1Q7RUFDRixDQUFDO0VBQ0RWLGdCQUFnQixXQUFBQSxpQkFBQSxFQUFHO0lBQUEsSUFBQWdCLE1BQUE7SUFDakI7SUFDQUosTUFBTSxDQUFDWixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtNQUN0QyxJQUFNaUIsT0FBTyxHQUFHTCxNQUFNLENBQUNLLE9BQU8sSUFBSWhDLFFBQVEsQ0FBQ2lDLGVBQWUsQ0FBQ0MsU0FBUztNQUNwRSxJQUFJSCxNQUFJLENBQUNYLFNBQVMsSUFBSVksT0FBTyxHQUFHLENBQUMsRUFBRTtRQUNqQztNQUNGO01BQ0FELE1BQUksQ0FBQ1gsU0FBUyxHQUFHLEtBQUs7TUFDdEI7TUFDQSxJQUFJWSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2pCO1FBQ0FELE1BQUksQ0FBQ1YsSUFBSSxFQUFFO01BQ2IsQ0FBQyxNQUFNO1FBQ0w7UUFDQVUsTUFBSSxDQUFDRixJQUFJLEVBQUU7TUFDYjtJQUNGLENBQUMsQ0FBQztJQUNGO0lBQ0E3QixRQUFRLENBQUNPLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQzRCLE9BQU8sR0FBRyxZQUFNO01BQ2hESixNQUFJLENBQUNYLFNBQVMsR0FBRyxJQUFJO01BQ3JCVyxNQUFJLENBQUNGLElBQUksRUFBRTtNQUNYO01BQ0FGLE1BQU0sQ0FBQ1MsUUFBUSxDQUFDO1FBQ2RDLEdBQUcsRUFBRSxDQUFDO1FBQ05DLElBQUksRUFBRSxDQUFDO1FBQ1BDLFFBQVEsRUFBRTtNQUNaLENBQUMsQ0FBQztJQUNKLENBQUM7RUFDSDtBQUNGLENBQUM7QUFDRHBCLEtBQUssQ0FBQ0osZ0JBQWdCLEVBQUU7Ozs7Ozs7Ozs7QUNuRHhCZixRQUFRLENBQUNPLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVV5QixLQUFLLEVBQUU7RUFDN0VBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0VBQ3RCLElBQUlDLFFBQVEsR0FBRzFDLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFlBQVksQ0FBQztFQUNuRG1DLFFBQVEsQ0FBQ25CLFNBQVMsQ0FBQ29CLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBQ0YzQyxRQUFRLENBQUNPLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVV5QixLQUFLLEVBQUU7RUFDL0VBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0VBQ3RCLElBQUlDLFFBQVEsR0FBRzFDLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFlBQVksQ0FBQztFQUNuRG1DLFFBQVEsQ0FBQ25CLFNBQVMsQ0FBQ29CLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDeEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDVEZoQixNQUFNLENBQUNpQixNQUFNLEdBQUcsWUFBVztFQUN6QjVDLFFBQVEsQ0FBQ08sYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDZ0IsU0FBUyxDQUFDRyxHQUFHLENBQUMsa0JBQWtCLENBQUM7QUFDeEUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDRkQ7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvanMvYnRuVXAuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9sZWZ0LW1lbnUtY2xlYW4uanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9wcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9zY3NzL2NhcmQuc2Nzcz81MGY0Iiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Njc3MvY2FyZC5zY3NzJztcblxucmVxdWlyZSgnLi9qcy9sZWZ0LW1lbnUtY2xlYW4nKVxucmVxdWlyZSgnLi9qcy9wcmVsb2FkZXInKVxucmVxdWlyZSgnLi9qcy9idG5VcCcpXG52YXIgJCA9IHJlcXVpcmUoIFwianF1ZXJ5XCIgKTtcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXIvYnVuZGxlJztcblxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogdHJ1ZSxcblxuICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgbGF6eTogdHJ1ZSxcbiAgLy8gIHBhZ2luYXRpb25cbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnNsaWRlLXBhZ2luYXRpb24nLFxuICB9LFxufSk7XG5jb25zdCBzd2lwZXJQcm9tbyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItcHJvbW8nLCB7XG4gIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IHRydWUsXG5cbiAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gIGxhenk6IHRydWUsXG5cbiAgLy8gIHBhZ2luYXRpb25cbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnYnVsbGV0cycsXG5cbiAgfSxcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNhcm91c2VsJykuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICBjb25zdCBzd2lwZXJJZCA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItaWQnKTsgLy8g0J/QvtC70YPRh9Cw0LXQvCBJRCDQutCw0YDRg9GB0LXQu9C4INC40LcgZGF0YS3QsNGC0YDQuNCx0YPRgtCwXG4gIGNvbnN0IHN3aXBlck5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItbmF2aWdhdGlvbltkYXRhLXN3aXBlci1pZD1cIicgKyBzd2lwZXJJZCArICdcIl0nKTsgLy8g0J3QsNGF0L7QtNC40Lwg0LrQvtC90YLQtdC50L3QtdGAINC90LDQstC40LPQsNGG0LjQuCDQv9C+IElEINC60LDRgNGD0YHQtdC70LhcbiAgY29uc3Qgc3dpcGVyQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKHZhbHVlLCB7XG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgc2xpZGVzUGVyVmlldzogMixcbiAgICBzcGFjZUJldHdlZW46IDYsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgICBsYXp5OiB0cnVlLFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2Njc6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNFxuICAgICAgfVxuICAgIH0sICAgICAgICAgICAgICAgICAgICAgICAgLy9sb29wXG4gICAgcGFnaW5hdGlvbjogeyAgICAgICAgICAgICAgICAgICAgICAgLy9wYWdpbmF0aW9uKGRvdHMpXG4gICAgICBlbDogJy5jYXJvdXNlbC1wYWdpbmF0aW9uJyxcbiAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7ICAgICAgICAgICAgICAgICAgICAgICAvL25hdmlnYXRpb24oYXJyb3dzKVxuICAgICAgbmV4dEVsOiBzd2lwZXJOYXYucXVlcnlTZWxlY3RvcignLnN3aXBlci1idXR0b24tbmV4dCcpLFxuICAgICAgcHJldkVsOiBzd2lwZXJOYXYucXVlcnlTZWxlY3RvcignLnN3aXBlci1idXR0b24tcHJldicpLFxuICAgIH0sXG4gIH0pO1xufSk7XG5cbi8vINCd0LDQt9C90LDRh9C10L3QuNC1INGB0L7QsdGL0YLQuNC5INC90LAg0LrQvdC+0L/QutC4INC90LDQstC40LPQsNGG0LjQuFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1uYXZpZ2F0aW9uIC5zd2lwZXItYnV0dG9uLXByZXYnKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3dpcGVySWQgPSB0aGlzLmNsb3Nlc3QoJy5zd2lwZXItbmF2aWdhdGlvbicpLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItaWQnKTtcbiAgICBjb25zdCBzd2lwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNhcm91c2VsW2RhdGEtc3dpcGVyLWlkPVwiJyArIHN3aXBlcklkICsgJ1wiXScpLnN3aXBlcjtcbiAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItbmF2aWdhdGlvbiAuc3dpcGVyLWJ1dHRvbi1uZXh0JykuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHN3aXBlcklkID0gdGhpcy5jbG9zZXN0KCcuc3dpcGVyLW5hdmlnYXRpb24nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLWlkJyk7XG4gICAgY29uc3Qgc3dpcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlci1jYXJvdXNlbFtkYXRhLXN3aXBlci1pZD1cIicgKyBzd2lwZXJJZCArICdcIl0nKS5zd2lwZXI7XG4gICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICB9KTtcbn0pO1xuIiwiY29uc3QgYnRuVXAgPSB7XG4gIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJyksXG4gIHNjcm9sbGluZzogZmFsc2UsXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRlJyk7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkZScpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIC8vINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0L7QutC90LAgKHdpbmRvdylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5zY3JvbGxpbmcgJiYgc2Nyb2xsWSA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIC8vINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQv9GA0L7QutGA0YPRgtC40Lsg0YHRgtGA0LDQvdC40YbRgyDQsdC+0LvQtdC1INGH0LXQvCDQvdCwIDIwMHB4XG4gICAgICBpZiAoc2Nyb2xsWSA+IDQwMCkge1xuICAgICAgICAvLyDRgdC00LXQu9Cw0LXQvCDQutC90L7Qv9C60YMgLmJ0bi11cCDQstC40LTQuNC80L7QuVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vINC40L3QsNGH0LUg0YHQutGA0L7QtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIC8vINC/0LXRgNC10LzQtdGB0YLQuNGC0YzRgdGPINCyINCy0LXRgNGF0L3RjtGOINGH0LDRgdGC0Ywg0YHRgtGA0LDQvdC40YbRi1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcigpO1xuIiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHZhciBsZWZ0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1tZW51XCIpO1xuICBsZWZ0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3Blbi1tZW51XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtbWVudVwiKTtcbiAgbGVmdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tbWVudVwiKTtcbn0pO1xuIiwid2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIik7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY2FyZFwiOiAwLFxuXHRcInNyY19zY3NzX2NhcmRfc2Nzc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX3B1Z190YWlsd2luZF93ZWJwYWNrXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfcHVnX3RhaWx3aW5kX3dlYnBhY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3N3aXBlcl9zd2lwZXItYnVuZGxlX21pbl9jc3Mtbm9kZV9tb2R1bGVzX3N3aXBlcl9zd2lwZXItYnVuZGxlX2VzbV9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfanF1ZXJ5X2Rpc3RfanF1ZXJ5X2pzXCIsXCJzcmNfc2Nzc19jYXJkX3Njc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY2FyZC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiU3dpcGVyIiwic3dpcGVyIiwiZGlyZWN0aW9uIiwibG9vcCIsInByZWxvYWRJbWFnZXMiLCJsYXp5IiwicGFnaW5hdGlvbiIsImVsIiwic3dpcGVyUHJvbW8iLCJ0eXBlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInZhbHVlIiwic3dpcGVySWQiLCJnZXRBdHRyaWJ1dGUiLCJzd2lwZXJOYXYiLCJxdWVyeVNlbGVjdG9yIiwic3dpcGVyQ2Fyb3VzZWwiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3Nlc3QiLCJzbGlkZVByZXYiLCJzbGlkZU5leHQiLCJidG5VcCIsInNjcm9sbGluZyIsInNob3ciLCJfdGhpcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwid2luZG93Iiwic2V0VGltZW91dCIsImhpZGUiLCJfdGhpczIiLCJfdGhpczMiLCJzY3JvbGxZIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwib25jbGljayIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxlZnRNZW51IiwidG9nZ2xlIiwib25sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==