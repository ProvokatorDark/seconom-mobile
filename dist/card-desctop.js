/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/card-desctop.js":
/*!*****************************!*\
  !*** ./src/card-desctop.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_card_desctop_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/card-desctop.scss */ "./src/scss/card-desctop.scss");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

__webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");
__webpack_require__(/*! ./js/btnUp */ "./src/js/btnUp.js");

var thumbsSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"](".thumbsSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",
  height: 48,
  width: 48
});
var cardSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"](".cardSwiper", {
  thumbs: {
    swiper: thumbsSwiper
  }
});
if (window.matchMedia("(min-width: 1024px)").matches) {
  var clickHandler = function clickHandler(event) {
    event.preventDefault();
    console.log('ClickHandler');
    popupMainSwiper.zoom.toggle();
  };
  var zoomToggle = function zoomToggle(scale) {
    if (scale === 3) {
      plus.classList.remove("active");
      minus.classList.add("active");
    } else if (scale === 1) {
      plus.classList.add("active");
      minus.classList.remove("active");
    }
  };
  // var swiper2 = new Swiper(".mainSwiper", {
  //   loop: false,
  //   spaceBetween: 10,
  //   navigation: false,
  //   lazy: true,
  //   thumbs: {
  //     swiper: swiper,
  //   },
  //   mousewheel: false,
  //   zoom: false,
  //   breakpoints: {
  //     1025: {}
  //   },
  // });
  var popupThumbsSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"](".popupThumbsSwiper", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    breakpoints: {
      1025: {
        direction: 'vertical'
      }
    }
  });
  var popupMainSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"](".popupMainSwiper", {
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    lazy: true,
    thumbs: {
      swiper: popupThumbsSwiper
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    mousewheel: true,
    zoom: true,
    breakpoints: {
      1025: {}
    }
  });
  popupMainSwiper.on('zoomChange', function (swiper, scale) {
    zoomToggle(scale);
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.pop-up-slider .swiper-block div.swiper-zoom-container').forEach(function (image) {
      image.onclick = function () {
        var mainImg = image.querySelector('img');
        document.querySelector('.popup-window').style.display = 'block';
        document.querySelector('.popup-window span').style.display = 'block';
      };
    });
    document.querySelector('.popup-window span').onclick = function () {
      document.querySelector('.popup-window').style.display = 'none';
      document.querySelector('.popup-window span').style.display = 'none';
    };
  });
  var swipeAllSliders = function swipeAllSliders(index) {
    cardSwiper.slideTo(index);
    popupMainSwiper.slideTo(index);
  };
  cardSwiper.on('slideChange', function () {
    return swipeAllSliders(cardSwiper.activeIndex);
  });
  popupMainSwiper.on('slideChange', function () {
    return swipeAllSliders(popupMainSwiper.activeIndex);
  });
  var faCollections = document.querySelectorAll(".icons .zoom .fa-solid"),
    index,
    item;
  for (index = 0; index < faCollections.length; index++) {
    item = faCollections[index];
    item.addEventListener('click', clickHandler);
  }
  var plus = document.querySelector('.fa-magnifying-glass-plus');
  var minus = document.querySelector('.fa-magnifying-glass-minus');
} else {
  // var swiper2 = new Swiper(".mainSwiper", {
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //   },
  // });
}
document.addEventListener("DOMContentLoaded", ready);
function ready() {
  // document.querySelector('.thumbsSwiper').style.display = 'block';
  // document.querySelector('.mainSwiper').style.display = 'block';
}
var swiperPromo1 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-promo-1', {
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
var swiperPromo2 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-promo-2', {
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
var swiperPromo3 = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-promo-3', {
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
    loop: false,
    preloadImages: false,
    lazy: true,
    breakpoints: {
      667: {
        slidesPerView: 6
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

////////////////////////////////////////////////////

function addEvent(prefix) {
  var selectors = '.swiper-promo-' + prefix + ' [target-image]';
  var targetImage = document.querySelectorAll(selectors);
  for (var i = 0, len = targetImage.length; i < len; i++) {
    targetImage[i].addEventListener('mousemove', set_handler(i));
  }
  function set_handler(i) {
    return function (e) {
      return real_handler(e, i);
    };
  }
  function real_handler(e, i) {
    var targetElement = e.target;
    if (targetElement.closest('[data-mousemove-swipe]')) {
      var sliderElement = targetElement.closest('[data-mousemove-swipe]');
      var ind = targetElement.closest('[data-mousemove-swipe]').dataset.mousemoveSwipe;
      if (prefix === 1) {
        var sliderItem = swiperPromo1[ind];
        var sliderLength = sliderItem.slides.length;
        if (sliderLength > 1) {
          var sliderWidth = sliderItem.width;
          var sliderPath = Math.round(sliderWidth / sliderLength);
          var sliderMousePos = e.clientX - sliderElement.getBoundingClientRect().x;
          var sliderSlide = Math.floor(sliderMousePos / sliderPath);
          sliderItem.slideTo(sliderSlide);
        }
      } else if (prefix === 2) {
        var _sliderItem = swiperPromo2[ind];
        var _sliderLength = _sliderItem.slides.length;
        if (_sliderLength > 1) {
          var _sliderWidth = _sliderItem.width;
          var _sliderPath = Math.round(_sliderWidth / _sliderLength);
          var _sliderMousePos = e.clientX - sliderElement.getBoundingClientRect().x;
          var _sliderSlide = Math.floor(_sliderMousePos / _sliderPath);
          _sliderItem.slideTo(_sliderSlide);
        }
      } else if (prefix === 3) {
        var _sliderItem2 = swiperPromo3[ind];
        var _sliderLength2 = _sliderItem2.slides.length;
        if (_sliderLength2 > 1) {
          var _sliderWidth2 = _sliderItem2.width;
          var _sliderPath2 = Math.round(_sliderWidth2 / _sliderLength2);
          var _sliderMousePos2 = e.clientX - sliderElement.getBoundingClientRect().x;
          var _sliderSlide2 = Math.floor(_sliderMousePos2 / _sliderPath2);
          _sliderItem2.slideTo(_sliderSlide2);
        }
      }
    }
  }
}
if (document.querySelector("[data-mousemove-swipe]")) {
  addEvent(1);
  addEvent(2);
  addEvent(3);
}

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

// console.log("preloader.js loading")
// window.onload = function() {
//   console.log("window.onload start")
//   document.querySelector('.preloader').classList.add("preloader-remove");
// };

window.onload = function () {
  setTimeout(document.querySelector('.preloader').classList.add("preloader-remove"), 2000);
};

/***/ }),

/***/ "./src/scss/card-desctop.scss":
/*!************************************!*\
  !*** ./src/scss/card-desctop.scss ***!
  \************************************/
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
/******/ 			"card-desctop": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js"], () => (__webpack_require__("./src/card-desctop.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2NhcmQtZGVzY3RvcC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2pzL2J0blVwLmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvanMvcHJlbG9hZGVyLmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvc2Nzcy9jYXJkLWRlc2N0b3Auc2Nzcz8yN2RkIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Njc3MvY2FyZC1kZXNjdG9wLnNjc3MnO1xuXG5yZXF1aXJlKCcuL2pzL3ByZWxvYWRlcicpXG5yZXF1aXJlKCcuL2pzL2J0blVwJylcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXIvYnVuZGxlJztcblxudmFyIHRodW1ic1N3aXBlciA9IG5ldyBTd2lwZXIoXCIudGh1bWJzU3dpcGVyXCIsIHtcbiAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgc2xpZGVzUGVyVmlldzogNCxcbiAgZnJlZU1vZGU6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICBoZWlnaHQ6IDQ4LFxuICB3aWR0aDogNDhcbn0pO1xudmFyIGNhcmRTd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmNhcmRTd2lwZXJcIiwge1xuICB0aHVtYnM6IHtcbiAgICBzd2lwZXI6IHRodW1ic1N3aXBlcixcbiAgfSxcblxufSk7XG5cbmlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDEwMjRweClcIikubWF0Y2hlcykge1xuICAvLyB2YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoXCIubWFpblN3aXBlclwiLCB7XG4gIC8vICAgbG9vcDogZmFsc2UsXG4gIC8vICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgLy8gICBuYXZpZ2F0aW9uOiBmYWxzZSxcbiAgLy8gICBsYXp5OiB0cnVlLFxuICAvLyAgIHRodW1iczoge1xuICAvLyAgICAgc3dpcGVyOiBzd2lwZXIsXG4gIC8vICAgfSxcbiAgLy8gICBtb3VzZXdoZWVsOiBmYWxzZSxcbiAgLy8gICB6b29tOiBmYWxzZSxcbiAgLy8gICBicmVha3BvaW50czoge1xuICAvLyAgICAgMTAyNToge31cbiAgLy8gICB9LFxuICAvLyB9KTtcbiAgdmFyIHBvcHVwVGh1bWJzU3dpcGVyID0gbmV3IFN3aXBlcihcIi5wb3B1cFRodW1ic1N3aXBlclwiLCB7XG4gICAgbG9vcDogZmFsc2UsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICBzbGlkZXNQZXJWaWV3OiA2LFxuICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDEwMjU6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgfVxuICAgIH1cblxuICB9KTtcbiAgdmFyIHBvcHVwTWFpblN3aXBlciA9IG5ldyBTd2lwZXIoXCIucG9wdXBNYWluU3dpcGVyXCIsIHtcblxuICAgIGxvb3A6IGZhbHNlLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuICAgIGxhenk6IHRydWUsXG4gICAgdGh1bWJzOiB7XG4gICAgICBzd2lwZXI6IHBvcHVwVGh1bWJzU3dpcGVyLFxuICAgIH0sXG4gICAga2V5Ym9hcmQ6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBvbmx5SW5WaWV3cG9ydDogZmFsc2UsXG4gICAgfSxcbiAgICBtb3VzZXdoZWVsOiB0cnVlLFxuICAgIHpvb206IHRydWUsXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDEwMjU6IHt9XG4gICAgfSxcbiAgfSk7XG4gIHBvcHVwTWFpblN3aXBlci5vbignem9vbUNoYW5nZScsIChzd2lwZXIsIHNjYWxlKSA9PiB7XG4gICAgem9vbVRvZ2dsZShzY2FsZSlcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wLXVwLXNsaWRlciAuc3dpcGVyLWJsb2NrIGRpdi5zd2lwZXItem9vbS1jb250YWluZXInKS5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgaW1hZ2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICBsZXQgbWFpbkltZyA9IChpbWFnZS5xdWVyeVNlbGVjdG9yKCdpbWcnKSlcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd2luZG93Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdpbmRvdyBzcGFuJykuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13aW5kb3cgc3BhbicpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13aW5kb3cnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd2luZG93IHNwYW4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cbiAgKTtcblxuXG4gIGNvbnN0IHN3aXBlQWxsU2xpZGVycyA9IChpbmRleCkgPT4ge1xuICAgIGNhcmRTd2lwZXIuc2xpZGVUbyhpbmRleCk7XG4gICAgcG9wdXBNYWluU3dpcGVyLnNsaWRlVG8oaW5kZXgpO1xuICB9XG5cbiAgY2FyZFN3aXBlci5vbignc2xpZGVDaGFuZ2UnLCAoKSA9PiBzd2lwZUFsbFNsaWRlcnMoY2FyZFN3aXBlci5hY3RpdmVJbmRleCkpO1xuICBwb3B1cE1haW5Td2lwZXIub24oJ3NsaWRlQ2hhbmdlJywgKCkgPT4gc3dpcGVBbGxTbGlkZXJzKHBvcHVwTWFpblN3aXBlci5hY3RpdmVJbmRleCkpO1xuXG4gIHZhciBmYUNvbGxlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pY29ucyAuem9vbSAuZmEtc29saWRcIiksIGluZGV4LCBpdGVtO1xuXG4gIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGZhQ29sbGVjdGlvbnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgaXRlbSA9IGZhQ29sbGVjdGlvbnNbaW5kZXhdO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnQ2xpY2tIYW5kbGVyJylcbiAgICBwb3B1cE1haW5Td2lwZXIuem9vbS50b2dnbGUoKVxuICB9XG5cbiAgY29uc3QgcGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1tYWduaWZ5aW5nLWdsYXNzLXBsdXMnKTtcbiAgY29uc3QgbWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtbWFnbmlmeWluZy1nbGFzcy1taW51cycpO1xuXG4gIGZ1bmN0aW9uIHpvb21Ub2dnbGUoc2NhbGUpIHtcbiAgICBpZiAoc2NhbGUgPT09IDMpIHtcbiAgICAgIHBsdXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIG1pbnVzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIGlmIChzY2FsZSA9PT0gMSkge1xuICAgICAgcGx1cy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgbWludXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH1cbn0gZWxzZSB7XG4gIC8vIHZhciBzd2lwZXIyID0gbmV3IFN3aXBlcihcIi5tYWluU3dpcGVyXCIsIHtcbiAgLy8gICBwYWdpbmF0aW9uOiB7XG4gIC8vICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgLy8gICAgIHR5cGU6IFwiYnVsbGV0c1wiLFxuICAvLyAgIH0sXG4gIC8vIH0pO1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlYWR5KTtcblxuZnVuY3Rpb24gcmVhZHkoKSB7XG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aHVtYnNTd2lwZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Td2lwZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuXG5jb25zdCBzd2lwZXJQcm9tbzEgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXByb21vLTEnLCB7XG4gIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IHRydWUsXG5cbiAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gIGxhenk6IHRydWUsXG5cbiAgLy8gIHBhZ2luYXRpb25cbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnYnVsbGV0cycsXG5cbiAgfSxcbn0pO1xuY29uc3Qgc3dpcGVyUHJvbW8yID0gbmV3IFN3aXBlcignLnN3aXBlci1wcm9tby0yJywge1xuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBsb29wOiB0cnVlLFxuXG4gIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICBsYXp5OiB0cnVlLFxuXG4gIC8vICBwYWdpbmF0aW9uXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2J1bGxldHMnLFxuXG4gIH0sXG59KTtcbmNvbnN0IHN3aXBlclByb21vMyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItcHJvbW8tMycsIHtcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogdHJ1ZSxcblxuICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgbGF6eTogdHJ1ZSxcblxuICAvLyAgcGFnaW5hdGlvblxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIHR5cGU6ICdidWxsZXRzJyxcblxuICB9LFxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY2Fyb3VzZWwnKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICBjb25zdCBzd2lwZXJJZCA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItaWQnKTsgLy8g0J/QvtC70YPRh9Cw0LXQvCBJRCDQutCw0YDRg9GB0LXQu9C4INC40LcgZGF0YS3QsNGC0YDQuNCx0YPRgtCwXG4gIGNvbnN0IHN3aXBlck5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItbmF2aWdhdGlvbltkYXRhLXN3aXBlci1pZD1cIicgKyBzd2lwZXJJZCArICdcIl0nKTsgLy8g0J3QsNGF0L7QtNC40Lwg0LrQvtC90YLQtdC50L3QtdGAINC90LDQstC40LPQsNGG0LjQuCDQv9C+IElEINC60LDRgNGD0YHQtdC70LhcbiAgY29uc3Qgc3dpcGVyQ2Fyb3VzZWwgPSBuZXcgU3dpcGVyKHZhbHVlLCB7XG4gICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgc2xpZGVzUGVyVmlldzogMixcbiAgICBzcGFjZUJldHdlZW46IDYsXG4gICAgbG9vcDogZmFsc2UsXG4gICAgcHJlbG9hZEltYWdlczogZmFsc2UsXG4gICAgbGF6eTogdHJ1ZSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNjY3OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDZcbiAgICAgIH1cbiAgICB9LCAgICAgICAgICAgICAgICAgICAgICAgIC8vbG9vcFxuICAgIHBhZ2luYXRpb246IHsgICAgICAgICAgICAgICAgICAgICAgIC8vcGFnaW5hdGlvbihkb3RzKVxuICAgICAgZWw6ICcuY2Fyb3VzZWwtcGFnaW5hdGlvbicsXG4gICAgICB0eXBlOiAncHJvZ3Jlc3NiYXInLFxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjogeyAgICAgICAgICAgICAgICAgICAgICAgLy9uYXZpZ2F0aW9uKGFycm93cylcbiAgICAgIG5leHRFbDogc3dpcGVyTmF2LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItYnV0dG9uLW5leHQnKSxcbiAgICAgIHByZXZFbDogc3dpcGVyTmF2LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItYnV0dG9uLXByZXYnKSxcbiAgICB9LFxuICB9KTtcbn0pO1xuXG4vLyDQndCw0LfQvdCw0YfQtdC90LjQtSDRgdC+0LHRi9GC0LjQuSDQvdCwINC60L3QvtC/0LrQuCDQvdCw0LLQuNCz0LDRhtC40LhcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItbmF2aWdhdGlvbiAuc3dpcGVyLWJ1dHRvbi1wcmV2JykuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc3dpcGVySWQgPSB0aGlzLmNsb3Nlc3QoJy5zd2lwZXItbmF2aWdhdGlvbicpLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItaWQnKTtcbiAgICBjb25zdCBzd2lwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNhcm91c2VsW2RhdGEtc3dpcGVyLWlkPVwiJyArIHN3aXBlcklkICsgJ1wiXScpLnN3aXBlcjtcbiAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItbmF2aWdhdGlvbiAuc3dpcGVyLWJ1dHRvbi1uZXh0JykuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc3dpcGVySWQgPSB0aGlzLmNsb3Nlc3QoJy5zd2lwZXItbmF2aWdhdGlvbicpLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItaWQnKTtcbiAgICBjb25zdCBzd2lwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNhcm91c2VsW2RhdGEtc3dpcGVyLWlkPVwiJyArIHN3aXBlcklkICsgJ1wiXScpLnN3aXBlcjtcbiAgICBzd2lwZXIuc2xpZGVOZXh0KCk7XG4gIH0pO1xufSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5mdW5jdGlvbiBhZGRFdmVudChwcmVmaXgpIHtcblxuICBjb25zdCBzZWxlY3RvcnMgPSAnLnN3aXBlci1wcm9tby0nICsgcHJlZml4ICsgJyBbdGFyZ2V0LWltYWdlXSdcbiAgY29uc3QgdGFyZ2V0SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycylcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRhcmdldEltYWdlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdGFyZ2V0SW1hZ2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc2V0X2hhbmRsZXIoaSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0X2hhbmRsZXIoaSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHJlYWxfaGFuZGxlcihlLCBpKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhbF9oYW5kbGVyKGUsIGkpIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtbW91c2Vtb3ZlLXN3aXBlXScpKSB7XG4gICAgICBjb25zdCBzbGlkZXJFbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCdbZGF0YS1tb3VzZW1vdmUtc3dpcGVdJyk7XG4gICAgICBjb25zdCBpbmQgPSB0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLW1vdXNlbW92ZS1zd2lwZV0nKS5kYXRhc2V0Lm1vdXNlbW92ZVN3aXBlXG4gICAgICBpZiAocHJlZml4ID09PSAxKSB7XG4gICAgICAgIGxldCBzbGlkZXJJdGVtID0gc3dpcGVyUHJvbW8xW2luZF07XG4gICAgICAgIGxldCBzbGlkZXJMZW5ndGggPSBzbGlkZXJJdGVtLnNsaWRlcy5sZW5ndGhcbiAgICAgICAgaWYgKHNsaWRlckxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQgc2xpZGVyV2lkdGggPSBzbGlkZXJJdGVtLndpZHRoO1xuICAgICAgICAgIGxldCBzbGlkZXJQYXRoID0gTWF0aC5yb3VuZChzbGlkZXJXaWR0aCAvIHNsaWRlckxlbmd0aCk7XG4gICAgICAgICAgbGV0IHNsaWRlck1vdXNlUG9zID0gZS5jbGllbnRYIC0gc2xpZGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54O1xuICAgICAgICAgIGxldCBzbGlkZXJTbGlkZSA9IE1hdGguZmxvb3Ioc2xpZGVyTW91c2VQb3MgLyBzbGlkZXJQYXRoKTtcbiAgICAgICAgICBzbGlkZXJJdGVtLnNsaWRlVG8oc2xpZGVyU2xpZGUpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJlZml4ID09PSAyKSB7XG4gICAgICAgIGxldCBzbGlkZXJJdGVtID0gc3dpcGVyUHJvbW8yW2luZF07XG4gICAgICAgIGxldCBzbGlkZXJMZW5ndGggPSBzbGlkZXJJdGVtLnNsaWRlcy5sZW5ndGhcbiAgICAgICAgaWYgKHNsaWRlckxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQgc2xpZGVyV2lkdGggPSBzbGlkZXJJdGVtLndpZHRoO1xuICAgICAgICAgIGxldCBzbGlkZXJQYXRoID0gTWF0aC5yb3VuZChzbGlkZXJXaWR0aCAvIHNsaWRlckxlbmd0aCk7XG4gICAgICAgICAgbGV0IHNsaWRlck1vdXNlUG9zID0gZS5jbGllbnRYIC0gc2xpZGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54O1xuICAgICAgICAgIGxldCBzbGlkZXJTbGlkZSA9IE1hdGguZmxvb3Ioc2xpZGVyTW91c2VQb3MgLyBzbGlkZXJQYXRoKTtcbiAgICAgICAgICBzbGlkZXJJdGVtLnNsaWRlVG8oc2xpZGVyU2xpZGUpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJlZml4ID09PSAzKSB7XG4gICAgICAgIGxldCBzbGlkZXJJdGVtID0gc3dpcGVyUHJvbW8zW2luZF07XG4gICAgICAgIGxldCBzbGlkZXJMZW5ndGggPSBzbGlkZXJJdGVtLnNsaWRlcy5sZW5ndGhcbiAgICAgICAgaWYgKHNsaWRlckxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBsZXQgc2xpZGVyV2lkdGggPSBzbGlkZXJJdGVtLndpZHRoO1xuICAgICAgICAgIGxldCBzbGlkZXJQYXRoID0gTWF0aC5yb3VuZChzbGlkZXJXaWR0aCAvIHNsaWRlckxlbmd0aCk7XG4gICAgICAgICAgbGV0IHNsaWRlck1vdXNlUG9zID0gZS5jbGllbnRYIC0gc2xpZGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54O1xuICAgICAgICAgIGxldCBzbGlkZXJTbGlkZSA9IE1hdGguZmxvb3Ioc2xpZGVyTW91c2VQb3MgLyBzbGlkZXJQYXRoKTtcbiAgICAgICAgICBzbGlkZXJJdGVtLnNsaWRlVG8oc2xpZGVyU2xpZGUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgfVxuICB9XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbW91c2Vtb3ZlLXN3aXBlXVwiKSkge1xuICBhZGRFdmVudCgxKTtcbiAgYWRkRXZlbnQoMik7XG4gIGFkZEV2ZW50KDMpO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiY29uc3QgYnRuVXAgPSB7XG4gIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJyksXG4gIHNjcm9sbGluZzogZmFsc2UsXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRlJyk7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkZScpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIC8vINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0L7QutC90LAgKHdpbmRvdylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5zY3JvbGxpbmcgJiYgc2Nyb2xsWSA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIC8vINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQv9GA0L7QutGA0YPRgtC40Lsg0YHRgtGA0LDQvdC40YbRgyDQsdC+0LvQtdC1INGH0LXQvCDQvdCwIDIwMHB4XG4gICAgICBpZiAoc2Nyb2xsWSA+IDQwMCkge1xuICAgICAgICAvLyDRgdC00LXQu9Cw0LXQvCDQutC90L7Qv9C60YMgLmJ0bi11cCDQstC40LTQuNC80L7QuVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vINC40L3QsNGH0LUg0YHQutGA0L7QtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIC8vINC/0LXRgNC10LzQtdGB0YLQuNGC0YzRgdGPINCyINCy0LXRgNGF0L3RjtGOINGH0LDRgdGC0Ywg0YHRgtGA0LDQvdC40YbRi1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcigpO1xuIiwiLy8gY29uc29sZS5sb2coXCJwcmVsb2FkZXIuanMgbG9hZGluZ1wiKVxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuLy8gICBjb25zb2xlLmxvZyhcIndpbmRvdy5vbmxvYWQgc3RhcnRcIilcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpLmNsYXNzTGlzdC5hZGQoXCJwcmVsb2FkZXItcmVtb3ZlXCIpO1xuLy8gfTtcblxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7IHNldFRpbWVvdXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpLmNsYXNzTGlzdC5hZGQoXCJwcmVsb2FkZXItcmVtb3ZlXCIpLCAyMDAwKX07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjYXJkLWRlc2N0b3BcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9wdWdfdGFpbHdpbmRfd2VicGFja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX3B1Z190YWlsd2luZF93ZWJwYWNrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19zd2lwZXJfc3dpcGVyLWJ1bmRsZV9taW5fY3NzLW5vZGVfbW9kdWxlc19zd2lwZXJfc3dpcGVyLWJ1bmRsZV9lc21fanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY2FyZC1kZXNjdG9wLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsicmVxdWlyZSIsIlN3aXBlciIsInRodW1ic1N3aXBlciIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJmcmVlTW9kZSIsIndhdGNoU2xpZGVzUHJvZ3Jlc3MiLCJkaXJlY3Rpb24iLCJoZWlnaHQiLCJ3aWR0aCIsImNhcmRTd2lwZXIiLCJ0aHVtYnMiLCJzd2lwZXIiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicG9wdXBNYWluU3dpcGVyIiwiem9vbSIsInRvZ2dsZSIsInpvb21Ub2dnbGUiLCJzY2FsZSIsInBsdXMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJtaW51cyIsImFkZCIsInBvcHVwVGh1bWJzU3dpcGVyIiwibG9vcCIsImJyZWFrcG9pbnRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImxhenkiLCJrZXlib2FyZCIsImVuYWJsZWQiLCJvbmx5SW5WaWV3cG9ydCIsIm1vdXNld2hlZWwiLCJvbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW1hZ2UiLCJvbmNsaWNrIiwibWFpbkltZyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJzd2lwZUFsbFNsaWRlcnMiLCJpbmRleCIsInNsaWRlVG8iLCJhY3RpdmVJbmRleCIsImZhQ29sbGVjdGlvbnMiLCJpdGVtIiwibGVuZ3RoIiwicmVhZHkiLCJzd2lwZXJQcm9tbzEiLCJwcmVsb2FkSW1hZ2VzIiwicGFnaW5hdGlvbiIsImVsIiwidHlwZSIsInN3aXBlclByb21vMiIsInN3aXBlclByb21vMyIsInZhbHVlIiwic3dpcGVySWQiLCJnZXRBdHRyaWJ1dGUiLCJzd2lwZXJOYXYiLCJzd2lwZXJDYXJvdXNlbCIsImNsb3Nlc3QiLCJzbGlkZVByZXYiLCJzbGlkZU5leHQiLCJhZGRFdmVudCIsInByZWZpeCIsInNlbGVjdG9ycyIsInRhcmdldEltYWdlIiwiaSIsImxlbiIsInNldF9oYW5kbGVyIiwiZSIsInJlYWxfaGFuZGxlciIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXQiLCJzbGlkZXJFbGVtZW50IiwiaW5kIiwiZGF0YXNldCIsIm1vdXNlbW92ZVN3aXBlIiwic2xpZGVySXRlbSIsInNsaWRlckxlbmd0aCIsInNsaWRlcyIsInNsaWRlcldpZHRoIiwic2xpZGVyUGF0aCIsIk1hdGgiLCJyb3VuZCIsInNsaWRlck1vdXNlUG9zIiwiY2xpZW50WCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJzbGlkZXJTbGlkZSIsImZsb29yIiwiYnRuVXAiLCJzY3JvbGxpbmciLCJzaG93IiwiX3RoaXMiLCJjb250YWlucyIsInNldFRpbWVvdXQiLCJoaWRlIiwiX3RoaXMyIiwiX3RoaXMzIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwib25sb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==