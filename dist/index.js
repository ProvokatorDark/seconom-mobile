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
// var $ = require( "jquery" );


var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper', {
  direction: 'horizontal',
  loop: true,
  preloadImages: false,
  lazy: true,
  autoHeight: true,
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.js");


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
/******/ 			"index": 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js","src_scss_card_scss"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvanMvYnRuVXAuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9sZWZ0LW1lbnUtY2xlYW4uanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9wcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9zY3NzL2NhcmQuc2Nzcz81MGY0Iiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Njc3MvY2FyZC5zY3NzJztcblxucmVxdWlyZSgnLi9qcy9sZWZ0LW1lbnUtY2xlYW4nKVxucmVxdWlyZSgnLi9qcy9wcmVsb2FkZXInKVxucmVxdWlyZSgnLi9qcy9idG5VcCcpXG4vLyB2YXIgJCA9IHJlcXVpcmUoIFwianF1ZXJ5XCIgKTtcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXIvYnVuZGxlJztcblxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IHRydWUsXG4gIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICBsYXp5OiB0cnVlLFxuICBhdXRvSGVpZ2h0OnRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5zbGlkZS1wYWdpbmF0aW9uJyxcbiAgfSxcblxufSk7XG5jb25zdCBzd2lwZXJQcm9tbyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItcHJvbW8nLCB7XG4gIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IHRydWUsXG5cbiAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gIGxhenk6IHRydWUsXG5cbiAgLy8gIHBhZ2luYXRpb25cbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnYnVsbGV0cycsXG5cbiAgfSxcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLWNhcm91c2VsJykuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICBjb25zdCBzd2lwZXJJZCA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItaWQnKTsgLy8g0J/QvtC70YPRh9Cw0LXQvCBJRCDQutCw0YDRg9GB0LXQu9C4INC40LcgZGF0YS3QsNGC0YDQuNCx0YPRgtCwXG4gIGNvbnN0IHN3aXBlck5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItbmF2aWdhdGlvbltkYXRhLXN3aXBlci1pZD1cIicgKyBzd2lwZXJJZCArICdcIl0nKTsgLy8g0J3QsNGF0L7QtNC40Lwg0LrQvtC90YLQtdC50L3QtdGAINC90LDQstC40LPQsNGG0LjQuCDQv9C+IElEINC60LDRgNGD0YHQtdC70LhcbiAgY29uc3Qgc3dpcGVyQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKHZhbHVlLCB7XG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgc2xpZGVzUGVyVmlldzogMixcbiAgICBzcGFjZUJldHdlZW46IDYsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgICBsYXp5OiB0cnVlLFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2Njc6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNFxuICAgICAgfVxuICAgIH0sICAgICAgICAgICAgICAgICAgICAgICAgLy9sb29wXG4gICAgcGFnaW5hdGlvbjogeyAgICAgICAgICAgICAgICAgICAgICAgLy9wYWdpbmF0aW9uKGRvdHMpXG4gICAgICBlbDogJy5jYXJvdXNlbC1wYWdpbmF0aW9uJyxcbiAgICAgIHR5cGU6ICdwcm9ncmVzc2JhcicsXG4gICAgfSxcbiAgICBuYXZpZ2F0aW9uOiB7ICAgICAgICAgICAgICAgICAgICAgICAvL25hdmlnYXRpb24oYXJyb3dzKVxuICAgICAgbmV4dEVsOiBzd2lwZXJOYXYucXVlcnlTZWxlY3RvcignLnN3aXBlci1idXR0b24tbmV4dCcpLFxuICAgICAgcHJldkVsOiBzd2lwZXJOYXYucXVlcnlTZWxlY3RvcignLnN3aXBlci1idXR0b24tcHJldicpLFxuICAgIH0sXG4gIH0pO1xufSk7XG5cbi8vINCd0LDQt9C90LDRh9C10L3QuNC1INGB0L7QsdGL0YLQuNC5INC90LAg0LrQvdC+0L/QutC4INC90LDQstC40LPQsNGG0LjQuFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1uYXZpZ2F0aW9uIC5zd2lwZXItYnV0dG9uLXByZXYnKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3dpcGVySWQgPSB0aGlzLmNsb3Nlc3QoJy5zd2lwZXItbmF2aWdhdGlvbicpLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItaWQnKTtcbiAgICBjb25zdCBzd2lwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNhcm91c2VsW2RhdGEtc3dpcGVyLWlkPVwiJyArIHN3aXBlcklkICsgJ1wiXScpLnN3aXBlcjtcbiAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItbmF2aWdhdGlvbiAuc3dpcGVyLWJ1dHRvbi1uZXh0JykuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHN3aXBlcklkID0gdGhpcy5jbG9zZXN0KCcuc3dpcGVyLW5hdmlnYXRpb24nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3dpcGVyLWlkJyk7XG4gICAgY29uc3Qgc3dpcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlci1jYXJvdXNlbFtkYXRhLXN3aXBlci1pZD1cIicgKyBzd2lwZXJJZCArICdcIl0nKS5zd2lwZXI7XG4gICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0ICcuL2NhcmQnXG4iLCJjb25zdCBidG5VcCA9IHtcbiAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKSxcbiAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGUnKTtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRlJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgLy8g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvtC60L3QsCAod2luZG93KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLnNjcm9sbGluZyAmJiBzY3JvbGxZID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgLy8g0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC/0YDQvtC60YDRg9GC0LjQuyDRgdGC0YDQsNC90LjRhtGDINCx0L7Qu9C10LUg0YfQtdC8INC90LAgMjAwcHhcbiAgICAgIGlmIChzY3JvbGxZID4gNDAwKSB7XG4gICAgICAgIC8vINGB0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwINCy0LjQtNC40LzQvtC5XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g0LjQvdCw0YfQtSDRgdC60YDQvtC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJykub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgLy8g0L/QtdGA0LXQvNC10YHRgtC40YLRjNGB0Y8g0LIg0LLQtdGA0YXQvdGO0Y4g0YfQsNGB0YLRjCDRgdGC0YDQsNC90LjRhtGLXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCk7XG4iLCIvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgdmFyIGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIik7XG4vLyAgIGxlZnRNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIik7XG4vLyB9KTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIHZhciBsZWZ0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1tZW51XCIpO1xuLy8gICBsZWZ0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3Blbi1tZW51XCIpO1xuLy8gfSk7XG4iLCIvLyBjb25zb2xlLmxvZyhcInByZWxvYWRlci5qcyBsb2FkaW5nXCIpXG4vLyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnNvbGUubG9nKFwid2luZG93Lm9ubG9hZCBzdGFydFwiKVxuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIik7XG4vLyB9O1xuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgc2V0VGltZW91dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIiksIDIwMDApfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3JjX3Njc3NfY2FyZF9zY3NzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfcHVnX3RhaWx3aW5kX3dlYnBhY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9wdWdfdGFpbHdpbmRfd2VicGFja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfc3dpcGVyX3N3aXBlci1idW5kbGVfbWluX2Nzcy1ub2RlX21vZHVsZXNfc3dpcGVyX3N3aXBlci1idW5kbGVfZXNtX2pzXCIsXCJzcmNfc2Nzc19jYXJkX3Njc3NcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiU3dpcGVyIiwic3dpcGVyIiwiZGlyZWN0aW9uIiwibG9vcCIsInByZWxvYWRJbWFnZXMiLCJsYXp5IiwiYXV0b0hlaWdodCIsInBhZ2luYXRpb24iLCJlbCIsInN3aXBlclByb21vIiwidHlwZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ2YWx1ZSIsInN3aXBlcklkIiwiZ2V0QXR0cmlidXRlIiwic3dpcGVyTmF2IiwicXVlcnlTZWxlY3RvciIsInN3aXBlckNhcm91c2VsIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImJyZWFrcG9pbnRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZXN0Iiwic2xpZGVQcmV2Iiwic2xpZGVOZXh0IiwiYnRuVXAiLCJzY3JvbGxpbmciLCJzaG93IiwiX3RoaXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJoaWRlIiwiX3RoaXMyIiwiX3RoaXMzIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsIm9uY2xpY2siLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsIm9ubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=