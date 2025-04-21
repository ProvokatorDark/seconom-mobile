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
      console.log(sliderElement.offsetLeft);
      var ind = targetElement.closest('[data-mousemove-swipe]').dataset.mousemoveSwipe;
      var sliderItem = swiper[ind];
      var sliderLength = sliderItem.slides.length;
      if (sliderLength > 1) {
        var sliderWidth = sliderItem.width;
        var sliderPath = Math.round(sliderWidth / sliderLength);
        var sliderMousePos = e.clientX - sliderElement.offsetLeft;
        // console.log(sliderMousePos)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2NhdGVnb3J5LWRlc2N0b3AuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9idG5VcC5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2pzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL3Njc3MvY2F0ZWdvcnktZGVzY3RvcC5zY3NzP2IwMWUiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc2Nzcy9jYXRlZ29yeS1kZXNjdG9wLnNjc3MnO1xucmVxdWlyZSgnLi9qcy9wcmVsb2FkZXInKVxucmVxdWlyZSgnLi9qcy9idG5VcCcpXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlci9idW5kbGUnO1xuXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcubXlTd2lwZXInLCB7XG4gIGxhenk6IHRydWUsXG4gIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxvb3A6IGZhbHNlLFxuICBwcmVsb2FkSW1hZ2VzOiBmYWxzZSxcbiAgLy8gIHBhZ2luYXRpb25cbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uLWNhdGVnb3J5JyxcbiAgICB0eXBlOididWxsZXRzJ1xuICB9LFxufSk7XG5cblxuY29uc3QgcGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhbmVsXCIpO1xuY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwXCIpO1xucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24gKGV2ZW50KXtcbiAgZ3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnbGl0dGxlLWdyaWQnLCdncmlkLXN0eWxlJywnbGlzdC1ncmlkJylcbiAgZ3JvdXAuY2xhc3NMaXN0LmFkZChldmVudC50YXJnZXQuY2xvc2VzdChcInNwYW5cIikuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSlcbiAgZm9yKGxldCBpID0gMDtpPHBhbmVsLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xuICAgIHBhbmVsLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG4gIGV2ZW50LnRhcmdldC5jbG9zZXN0KFwic3BhblwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pXG5cblxuXG5mdW5jdGlvbiBhZGRFdmVudCgpe1xuICBjb25zdCB0YXJnZXRJbWFnZSAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbdGFyZ2V0LWltYWdlXScpXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0YXJnZXRJbWFnZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHRhcmdldEltYWdlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHNldF9oYW5kbGVyKGkpLGZhbHNlKTtcbiAgfVxuICBmdW5jdGlvbiBzZXRfaGFuZGxlcihpKXtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiByZWFsX2hhbmRsZXIoZSxpKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHJlYWxfaGFuZGxlcihlLGkpIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50PWUudGFyZ2V0O1xuICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLW1vdXNlbW92ZS1zd2lwZV0nKSl7XG4gICAgICBjb25zdCBzbGlkZXJFbGVtZW50ID0gdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCdbZGF0YS1tb3VzZW1vdmUtc3dpcGVdJyk7XG4gICAgICBjb25zb2xlLmxvZyhzbGlkZXJFbGVtZW50Lm9mZnNldExlZnQpXG4gICAgICBjb25zdCBpbmQgPSB0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJ1tkYXRhLW1vdXNlbW92ZS1zd2lwZV0nKS5kYXRhc2V0Lm1vdXNlbW92ZVN3aXBlXG4gICAgICBjb25zdCBzbGlkZXJJdGVtID0gc3dpcGVyW2luZF07XG4gICAgICBjb25zdCBzbGlkZXJMZW5ndGggPSBzbGlkZXJJdGVtLnNsaWRlcy5sZW5ndGhcbiAgICAgIGlmKHNsaWRlckxlbmd0aD4xKXtcbiAgICAgICAgY29uc3Qgc2xpZGVyV2lkdGggPSBzbGlkZXJJdGVtLndpZHRoO1xuICAgICAgICBjb25zdCBzbGlkZXJQYXRoID0gTWF0aC5yb3VuZChzbGlkZXJXaWR0aC9zbGlkZXJMZW5ndGgpO1xuICAgICAgICBjb25zdCBzbGlkZXJNb3VzZVBvcz0gZS5jbGllbnRYIC0gc2xpZGVyRWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzbGlkZXJNb3VzZVBvcylcbiAgICAgICAgY29uc3Qgc2xpZGVyU2xpZGUgPSAgTWF0aC5mbG9vcihzbGlkZXJNb3VzZVBvcy9zbGlkZXJQYXRoKTtcbiAgICAgICAgc2xpZGVySXRlbS5zbGlkZVRvKHNsaWRlclNsaWRlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW1vdXNlbW92ZS1zd2lwZV1cIikpe1xuICBhZGRFdmVudCgpO1xufVxuXG5cblxuXG5cblxuXG4iLCJjb25zdCBidG5VcCA9IHtcbiAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXAnKSxcbiAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGUnKTtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBoaWRlKCkge1xuICAgIGlmICghdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi11cF9oaWRlJykgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkaW5nJykpIHtcbiAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRlJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLXVwX2hpZGluZycpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0sXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgLy8g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQvtC60L3QsCAod2luZG93KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLnNjcm9sbGluZyAmJiBzY3JvbGxZID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgLy8g0LXRgdC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINC/0YDQvtC60YDRg9GC0LjQuyDRgdGC0YDQsNC90LjRhtGDINCx0L7Qu9C10LUg0YfQtdC8INC90LAgMjAwcHhcbiAgICAgIGlmIChzY3JvbGxZID4gNDAwKSB7XG4gICAgICAgIC8vINGB0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwINCy0LjQtNC40LzQvtC5XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g0LjQvdCw0YfQtSDRgdC60YDQvtC10Lwg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8g0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LrQvdC+0L/QutGDIC5idG4tdXBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJykub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgLy8g0L/QtdGA0LXQvNC10YHRgtC40YLRjNGB0Y8g0LIg0LLQtdGA0YXQvdGO0Y4g0YfQsNGB0YLRjCDRgdGC0YDQsNC90LjRhtGLXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5idG5VcC5hZGRFdmVudExpc3RlbmVyKCk7XG4iLCIvLyBjb25zb2xlLmxvZyhcInByZWxvYWRlci5qcyBsb2FkaW5nXCIpXG4vLyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnNvbGUubG9nKFwid2luZG93Lm9ubG9hZCBzdGFydFwiKVxuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIik7XG4vLyB9O1xuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgc2V0VGltZW91dChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIiksIDIwMDApfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNhdGVnb3J5LWRlc2N0b3BcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9wdWdfdGFpbHdpbmRfd2VicGFja1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdGFydGVyX3B1Z190YWlsd2luZF93ZWJwYWNrXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19zd2lwZXJfc3dpcGVyLWJ1bmRsZV9taW5fY3NzLW5vZGVfbW9kdWxlc19zd2lwZXJfc3dpcGVyLWJ1bmRsZV9lc21fanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY2F0ZWdvcnktZGVzY3RvcC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJTd2lwZXIiLCJzd2lwZXIiLCJsYXp5IiwiZGlyZWN0aW9uIiwibG9vcCIsInByZWxvYWRJbWFnZXMiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwicGFuZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ3JvdXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZ2V0QXR0cmlidXRlIiwiaSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiYWRkRXZlbnQiLCJ0YXJnZXRJbWFnZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW4iLCJzZXRfaGFuZGxlciIsImUiLCJyZWFsX2hhbmRsZXIiLCJ0YXJnZXRFbGVtZW50Iiwic2xpZGVyRWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJvZmZzZXRMZWZ0IiwiaW5kIiwiZGF0YXNldCIsIm1vdXNlbW92ZVN3aXBlIiwic2xpZGVySXRlbSIsInNsaWRlckxlbmd0aCIsInNsaWRlcyIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJzbGlkZXJQYXRoIiwiTWF0aCIsInJvdW5kIiwic2xpZGVyTW91c2VQb3MiLCJjbGllbnRYIiwic2xpZGVyU2xpZGUiLCJmbG9vciIsInNsaWRlVG8iLCJxdWVyeVNlbGVjdG9yIiwiYnRuVXAiLCJzY3JvbGxpbmciLCJzaG93IiwiX3RoaXMiLCJjb250YWlucyIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJoaWRlIiwiX3RoaXMyIiwiX3RoaXMzIiwic2Nyb2xsWSIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsIm9uY2xpY2siLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsIm9ubG9hZCJdLCJzb3VyY2VSb290IjoiIn0=