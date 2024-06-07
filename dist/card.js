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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js","src_scss_card_scss"], () => (__webpack_require__("./src/card.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9idG5VcC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2pzL2xlZnQtbWVudS1jbGVhbi5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2pzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL3Njc3MvY2FyZC5zY3NzPzUwZjQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc2Nzcy9jYXJkLnNjc3MnO1xuXG5yZXF1aXJlKCcuL2pzL2xlZnQtbWVudS1jbGVhbicpXG5yZXF1aXJlKCcuL2pzL3ByZWxvYWRlcicpXG5yZXF1aXJlKCcuL2pzL2J0blVwJylcbi8vIHZhciAkID0gcmVxdWlyZSggXCJqcXVlcnlcIiApO1xuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlci9idW5kbGUnO1xuXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogdHJ1ZSxcbiAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gIGxhenk6IHRydWUsXG4gIGF1dG9IZWlnaHQ6dHJ1ZSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnNsaWRlLXBhZ2luYXRpb24nLFxuICB9LFxuXG59KTtcbmNvbnN0IHN3aXBlclByb21vID0gbmV3IFN3aXBlcignLnN3aXBlci1wcm9tbycsIHtcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogdHJ1ZSxcblxuICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgbGF6eTogdHJ1ZSxcblxuICAvLyAgcGFnaW5hdGlvblxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIHR5cGU6ICdidWxsZXRzJyxcblxuICB9LFxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY2Fyb3VzZWwnKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGNvbnN0IHN3aXBlcklkID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1pZCcpOyAvLyDQn9C+0LvRg9GH0LDQtdC8IElEINC60LDRgNGD0YHQtdC70Lgg0LjQtyBkYXRhLdCw0YLRgNC40LHRg9GC0LBcbiAgY29uc3Qgc3dpcGVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlci1uYXZpZ2F0aW9uW2RhdGEtc3dpcGVyLWlkPVwiJyArIHN3aXBlcklkICsgJ1wiXScpOyAvLyDQndCw0YXQvtC00LjQvCDQutC+0L3RgtC10LnQvdC10YAg0L3QsNCy0LjQs9Cw0YbQuNC4INC/0L4gSUQg0LrQsNGA0YPRgdC10LvQuFxuICBjb25zdCBzd2lwZXJDYXJvdXNlbCA9IG5ldyBTd2lwZXIodmFsdWUsIHtcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIHNwYWNlQmV0d2VlbjogNixcbiAgICBsb29wOiB0cnVlLFxuICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAgIGxhenk6IHRydWUsXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDY2Nzoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0XG4gICAgICB9XG4gICAgfSwgICAgICAgICAgICAgICAgICAgICAgICAvL2xvb3BcbiAgICBwYWdpbmF0aW9uOiB7ICAgICAgICAgICAgICAgICAgICAgICAvL3BhZ2luYXRpb24oZG90cylcbiAgICAgIGVsOiAnLmNhcm91c2VsLXBhZ2luYXRpb24nLFxuICAgICAgdHlwZTogJ3Byb2dyZXNzYmFyJyxcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHsgICAgICAgICAgICAgICAgICAgICAgIC8vbmF2aWdhdGlvbihhcnJvd3MpXG4gICAgICBuZXh0RWw6IHN3aXBlck5hdi5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWJ1dHRvbi1uZXh0JyksXG4gICAgICBwcmV2RWw6IHN3aXBlck5hdi5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWJ1dHRvbi1wcmV2JyksXG4gICAgfSxcbiAgfSk7XG59KTtcblxuLy8g0J3QsNC30L3QsNGH0LXQvdC40LUg0YHQvtCx0YvRgtC40Lkg0L3QsCDQutC90L7Qv9C60Lgg0L3QsNCy0LjQs9Cw0YbQuNC4XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLW5hdmlnYXRpb24gLnN3aXBlci1idXR0b24tcHJldicpLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzd2lwZXJJZCA9IHRoaXMuY2xvc2VzdCgnLnN3aXBlci1uYXZpZ2F0aW9uJykuZ2V0QXR0cmlidXRlKCdkYXRhLXN3aXBlci1pZCcpO1xuICAgIGNvbnN0IHN3aXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY2Fyb3VzZWxbZGF0YS1zd2lwZXItaWQ9XCInICsgc3dpcGVySWQgKyAnXCJdJykuc3dpcGVyO1xuICAgIHN3aXBlci5zbGlkZVByZXYoKTtcbiAgfSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1uYXZpZ2F0aW9uIC5zd2lwZXItYnV0dG9uLW5leHQnKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3dpcGVySWQgPSB0aGlzLmNsb3Nlc3QoJy5zd2lwZXItbmF2aWdhdGlvbicpLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItaWQnKTtcbiAgICBjb25zdCBzd2lwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNhcm91c2VsW2RhdGEtc3dpcGVyLWlkPVwiJyArIHN3aXBlcklkICsgJ1wiXScpLnN3aXBlcjtcbiAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gIH0pO1xufSk7XG4iLCJjb25zdCBidG5VcCA9IHtcbiAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKSxcbiAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGUnKTtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRlJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgLy8g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvtC60L3QsCAod2luZG93KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLnNjcm9sbGluZyAmJiBzY3JvbGxZID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgLy8g0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC/0YDQvtC60YDRg9GC0LjQuyDRgdGC0YDQsNC90LjRhtGDINCx0L7Qu9C10LUg0YfQtdC8INC90LAgMjAwcHhcbiAgICAgIGlmIChzY3JvbGxZID4gNDAwKSB7XG4gICAgICAgIC8vINGB0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwINCy0LjQtNC40LzQvtC5XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g0LjQvdCw0YfQtSDRgdC60YDQvtC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJykub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgLy8g0L/QtdGA0LXQvNC10YHRgtC40YLRjNGB0Y8g0LIg0LLQtdGA0YXQvdGO0Y4g0YfQsNGB0YLRjCDRgdGC0YDQsNC90LjRhtGLXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCk7XG4iLCIvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvcC1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgdmFyIGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIik7XG4vLyAgIGxlZnRNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIik7XG4vLyB9KTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIHZhciBsZWZ0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1tZW51XCIpO1xuLy8gICBsZWZ0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3Blbi1tZW51XCIpO1xuLy8gfSk7XG4iLCIvLyBjb25zb2xlLmxvZyhcInByZWxvYWRlci5qcyBsb2FkaW5nXCIpXG4vLyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnNvbGUubG9nKFwid2luZG93Lm9ubG9hZCBzdGFydFwiKVxuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIik7XG4vLyB9O1xuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgc2V0VGltZW91dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIiksIDIwMDApfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNhcmRcIjogMCxcblx0XCJzcmNfc2Nzc19jYXJkX3Njc3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9wdWdfdGFpbHdpbmRfd2VicGFja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX3B1Z190YWlsd2luZF93ZWJwYWNrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19zd2lwZXJfc3dpcGVyLWJ1bmRsZV9taW5fY3NzLW5vZGVfbW9kdWxlc19zd2lwZXJfc3dpcGVyLWJ1bmRsZV9lc21fanNcIixcInNyY19zY3NzX2NhcmRfc2Nzc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jYXJkLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsicmVxdWlyZSIsIlN3aXBlciIsInN3aXBlciIsImRpcmVjdGlvbiIsImxvb3AiLCJwcmVsb2FkSW1hZ2VzIiwibGF6eSIsImF1dG9IZWlnaHQiLCJwYWdpbmF0aW9uIiwiZWwiLCJzd2lwZXJQcm9tbyIsInR5cGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidmFsdWUiLCJzd2lwZXJJZCIsImdldEF0dHJpYnV0ZSIsInN3aXBlck5hdiIsInF1ZXJ5U2VsZWN0b3IiLCJzd2lwZXJDYXJvdXNlbCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJicmVha3BvaW50cyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VzdCIsInNsaWRlUHJldiIsInNsaWRlTmV4dCIsImJ0blVwIiwic2Nyb2xsaW5nIiwic2hvdyIsIl90aGlzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIl90aGlzMiIsIl90aGlzMyIsInNjcm9sbFkiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvbmNsaWNrIiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJvbmxvYWQiXSwic291cmNlUm9vdCI6IiJ9