/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/category-desctop.js":
/*!*********************************!*\
  !*** ./src/category-desctop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_category_desctop_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/category-desctop.scss */ "./src/scss/category-desctop.scss");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");

__webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");
__webpack_require__(/*! ./js/btnUp */ "./src/js/btnUp.js");

var panel = document.getElementById("panel");
var group = document.getElementById("group");
panel.addEventListener("click", function (event) {
  group.classList.remove('little-grid', 'grid-style', 'list-grid');
  group.classList.add(event.target.closest("span").getAttribute('data-view'));
  for (var i = 0; i < panel.children.length; i++) {
    panel.children[i].classList.remove('active');
  }
  event.target.closest("span").classList.add('active');
});
var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_1__["default"]('.mySwiper', {
  lazy: true,
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  preloadImages: false,
  //  pagination
  pagination: {
    el: '.swiper-pagination-category',
    type: 'bullets'
  }
});
function addEvent() {
  var targetImage = document.querySelectorAll('[target-image]');
  for (var i = 0, len = targetImage.length; i < len; i++) {
    targetImage[i].addEventListener('mousemove', set_handler(i), false);
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
      var sliderItem = swiper[ind];
      var sliderLength = sliderItem.slides.length;
      if (sliderLength > 1) {
        var sliderWidth = sliderItem.width;
        var sliderPath = Math.round(sliderWidth / sliderLength);
        var sliderMousePos = e.clientX - sliderElement.offsetLeft;
        var sliderSlide = Math.floor(sliderMousePos / sliderPath);
        sliderItem.slideTo(sliderSlide);
      }
    }
  }
}
if (document.querySelector("[data-mousemove-swipe]")) {
  addEvent();
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

/***/ "./src/scss/category-desctop.scss":
/*!****************************************!*\
  !*** ./src/scss/category-desctop.scss ***!
  \****************************************/
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
/******/ 			"category-desctop": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js"], () => (__webpack_require__("./src/category-desctop.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvY2F0ZWdvcnktZGVzY3RvcC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2pzL2J0blVwLmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvanMvcHJlbG9hZGVyLmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvc2Nzcy9jYXRlZ29yeS1kZXNjdG9wLnNjc3M/YjAxZSIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zY3NzL2NhdGVnb3J5LWRlc2N0b3Auc2Nzcyc7XG5yZXF1aXJlKCcuL2pzL3ByZWxvYWRlcicpXG5yZXF1aXJlKCcuL2pzL2J0blVwJylcblxuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlci9idW5kbGUnO1xuXG5jb25zdCBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFuZWxcIik7XG5jb25zdCBncm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBcIik7XG5wYW5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbiAoZXZlbnQpe1xuICBncm91cC5jbGFzc0xpc3QucmVtb3ZlKCdsaXR0bGUtZ3JpZCcsJ2dyaWQtc3R5bGUnLCdsaXN0LWdyaWQnKVxuICBncm91cC5jbGFzc0xpc3QuYWRkKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwic3BhblwiKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpKVxuICBmb3IobGV0IGkgPSAwO2k8cGFuZWwuY2hpbGRyZW4ubGVuZ3RoO2krKyl7XG4gICAgcGFuZWwuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cbiAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJzcGFuXCIpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSlcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5teVN3aXBlcicsIHtcbiAgbGF6eTogdHJ1ZSxcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgbG9vcDogZmFsc2UsXG4gIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICAvLyAgcGFnaW5hdGlvblxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24tY2F0ZWdvcnknLFxuICAgIHR5cGU6J2J1bGxldHMnXG4gIH0sXG5cbn0pO1xuXG5cbmZ1bmN0aW9uIGFkZEV2ZW50KCl7XG4gIGNvbnN0IHRhcmdldEltYWdlICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YXJnZXQtaW1hZ2VdJylcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRhcmdldEltYWdlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdGFyZ2V0SW1hZ2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc2V0X2hhbmRsZXIoaSksZmFsc2UpO1xuICB9XG4gIGZ1bmN0aW9uIHNldF9oYW5kbGVyKGkpe1xuICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHJlYWxfaGFuZGxlcihlLGkpO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gcmVhbF9oYW5kbGVyKGUsaSkge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQ9ZS50YXJnZXQ7XG4gICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtbW91c2Vtb3ZlLXN3aXBlXScpKXtcbiAgICAgIGNvbnN0IHNsaWRlckVsZW1lbnQgPSB0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLW1vdXNlbW92ZS1zd2lwZV0nKTtcbiAgICAgIGNvbnN0IGluZCA9IHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnW2RhdGEtbW91c2Vtb3ZlLXN3aXBlXScpLmRhdGFzZXQubW91c2Vtb3ZlU3dpcGVcbiAgICAgIGNvbnN0IHNsaWRlckl0ZW0gPSBzd2lwZXJbaW5kXTtcbiAgICAgIGNvbnN0IHNsaWRlckxlbmd0aCA9IHNsaWRlckl0ZW0uc2xpZGVzLmxlbmd0aFxuICAgICAgaWYoc2xpZGVyTGVuZ3RoPjEpe1xuICAgICAgICBjb25zdCBzbGlkZXJXaWR0aCA9IHNsaWRlckl0ZW0ud2lkdGg7XG4gICAgICAgIGNvbnN0IHNsaWRlclBhdGggPSBNYXRoLnJvdW5kKHNsaWRlcldpZHRoL3NsaWRlckxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHNsaWRlck1vdXNlUG9zPSBlLmNsaWVudFggLSBzbGlkZXJFbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgIGNvbnN0IHNsaWRlclNsaWRlID0gIE1hdGguZmxvb3Ioc2xpZGVyTW91c2VQb3Mvc2xpZGVyUGF0aCk7XG4gICAgICAgIHNsaWRlckl0ZW0uc2xpZGVUbyhzbGlkZXJTbGlkZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbW91c2Vtb3ZlLXN3aXBlXVwiKSl7XG4gIGFkZEV2ZW50KCk7XG59XG5cblxuXG5cblxuXG5cbiIsImNvbnN0IGJ0blVwID0ge1xuICBlbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpLFxuICBzY3JvbGxpbmc6IGZhbHNlLFxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGUnKSAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRpbmcnKSkge1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkZScpO1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGUnKSAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRpbmcnKSkge1xuICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGUnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcbiAgYWRkRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAvLyDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INC+0LrQvdCwICh3aW5kb3cpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsaW5nICYmIHNjcm9sbFkgPiAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAvLyDQtdGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0L/RgNC+0LrRgNGD0YLQuNC7INGB0YLRgNCw0L3QuNGG0YMg0LHQvtC70LXQtSDRh9C10Lwg0L3QsCAyMDBweFxuICAgICAgaWYgKHNjcm9sbFkgPiA0MDApIHtcbiAgICAgICAgLy8g0YHQtNC10LvQsNC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXAg0LLQuNC00LjQvNC+0LlcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDQuNC90LDRh9C1INGB0LrRgNC+0LXQvCDQutC90L7Qv9C60YMgLmJ0bi11cFxuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQutC90L7Qv9C60YMgLmJ0bi11cFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAvLyDQv9C10YDQtdC80LXRgdGC0LjRgtGM0YHRjyDQsiDQstC10YDRhdC90Y7RjiDRh9Cw0YHRgtGMINGB0YLRgNCw0L3QuNGG0YtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmJ0blVwLmFkZEV2ZW50TGlzdGVuZXIoKTtcbiIsIi8vIGNvbnNvbGUubG9nKFwicHJlbG9hZGVyLmpzIGxvYWRpbmdcIilcbi8vIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbi8vICAgY29uc29sZS5sb2coXCJ3aW5kb3cub25sb2FkIHN0YXJ0XCIpXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKS5jbGFzc0xpc3QuYWRkKFwicHJlbG9hZGVyLXJlbW92ZVwiKTtcbi8vIH07XG5cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyBzZXRUaW1lb3V0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkZXInKS5jbGFzc0xpc3QuYWRkKFwicHJlbG9hZGVyLXJlbW92ZVwiKSwgMjAwMCl9O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY2F0ZWdvcnktZGVzY3RvcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX3B1Z190YWlsd2luZF93ZWJwYWNrXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfcHVnX3RhaWx3aW5kX3dlYnBhY2tcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3N3aXBlcl9zd2lwZXItYnVuZGxlX21pbl9jc3Mtbm9kZV9tb2R1bGVzX3N3aXBlcl9zd2lwZXItYnVuZGxlX2VzbV9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jYXRlZ29yeS1kZXNjdG9wLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsicmVxdWlyZSIsIlN3aXBlciIsInBhbmVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdyb3VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGFyZ2V0IiwiY2xvc2VzdCIsImdldEF0dHJpYnV0ZSIsImkiLCJjaGlsZHJlbiIsImxlbmd0aCIsInN3aXBlciIsImxhenkiLCJkaXJlY3Rpb24iLCJsb29wIiwicHJlbG9hZEltYWdlcyIsInBhZ2luYXRpb24iLCJlbCIsInR5cGUiLCJhZGRFdmVudCIsInRhcmdldEltYWdlIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbiIsInNldF9oYW5kbGVyIiwiZSIsInJlYWxfaGFuZGxlciIsInRhcmdldEVsZW1lbnQiLCJzbGlkZXJFbGVtZW50IiwiaW5kIiwiZGF0YXNldCIsIm1vdXNlbW92ZVN3aXBlIiwic2xpZGVySXRlbSIsInNsaWRlckxlbmd0aCIsInNsaWRlcyIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJzbGlkZXJQYXRoIiwiTWF0aCIsInJvdW5kIiwic2xpZGVyTW91c2VQb3MiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsInNsaWRlclNsaWRlIiwiZmxvb3IiLCJzbGlkZVRvIiwicXVlcnlTZWxlY3RvciIsImJ0blVwIiwic2Nyb2xsaW5nIiwic2hvdyIsIl90aGlzIiwiY29udGFpbnMiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIl90aGlzMiIsIl90aGlzMyIsInNjcm9sbFkiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvbmNsaWNrIiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJvbmxvYWQiXSwic291cmNlUm9vdCI6IiJ9