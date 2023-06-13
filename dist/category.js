/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_category_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/category.scss */ "./src/scss/category.scss");
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config */ "./src/config/index.js");
// import 'tailwindcss/tailwind.css';



console.log(config__WEBPACK_IMPORTED_MODULE_2__["default"].server);
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
document.addEventListener("click", function (event) {
  if (event.target.matches(".aside-menu .fa-angle-right")) {
    event.preventDefault();
    var closestLi = event.target.closest("li");
    if (closestLi.classList.contains("aside-menu-close")) {
      closestLi.classList.remove("aside-menu-close");
    } else {
      closestLi.classList.add("aside-menu-close", "fix-menu");
    }
  }
});
document.addEventListener("click", function (event) {
  if (event.target.matches(".aside-menu .open-catalog")) {
    var closestLi = event.target.closest("li");
    if (closestLi.classList.contains("aside-menu-close") && !closestLi.classList.contains("fix-menu")) {
      event.preventDefault();
      closestLi.classList.remove("aside-menu-close");
    }
    if (closestLi.classList.contains("fix-menu")) {
      closestLi.classList.remove("fix-menu");
    }
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

/***/ }),

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

/***/ "./src/scss/category.scss":
/*!********************************!*\
  !*** ./src/scss/category.scss ***!
  \********************************/
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
/******/ 			"category": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_swiper-bundle_min_css-node_modules_swiper_swiper-bundle_esm_js"], () => (__webpack_require__("./src/category.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM4QjtBQUNLO0FBRVA7QUFDNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixxREFBYSxDQUFDO0FBQzFCSSxNQUFNLENBQUNDLE1BQU0sR0FBRyxZQUFXO0VBQ3pCQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7QUFDeEUsQ0FBQztBQUNELElBQU1DLEtBQUssR0FBRztFQUNaQyxFQUFFLEVBQUVMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNyQ0ssU0FBUyxFQUFFLEtBQUs7RUFDaEJDLElBQUksV0FBQUEsS0FBQSxFQUFHO0lBQUEsSUFBQUMsS0FBQTtJQUNMLElBQUksSUFBSSxDQUFDSCxFQUFFLENBQUNILFNBQVMsQ0FBQ08sUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDSixFQUFFLENBQUNILFNBQVMsQ0FBQ08sUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO01BQzdGLElBQUksQ0FBQ0osRUFBRSxDQUFDSCxTQUFTLENBQUNRLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDdkMsSUFBSSxDQUFDTCxFQUFFLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztNQUN0Q0wsTUFBTSxDQUFDYSxVQUFVLENBQUMsWUFBTTtRQUN0QkgsS0FBSSxDQUFDSCxFQUFFLENBQUNILFNBQVMsQ0FBQ1EsTUFBTSxDQUFDLGVBQWUsQ0FBQztNQUMzQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1Q7RUFDRixDQUFDO0VBQ0RFLElBQUksV0FBQUEsS0FBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNMLElBQUksQ0FBQyxJQUFJLENBQUNSLEVBQUUsQ0FBQ0gsU0FBUyxDQUFDTyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUNKLEVBQUUsQ0FBQ0gsU0FBUyxDQUFDTyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7TUFDOUYsSUFBSSxDQUFDSixFQUFFLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztNQUN0Q0wsTUFBTSxDQUFDYSxVQUFVLENBQUMsWUFBTTtRQUN0QkUsTUFBSSxDQUFDUixFQUFFLENBQUNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNwQ1UsTUFBSSxDQUFDUixFQUFFLENBQUNILFNBQVMsQ0FBQ1EsTUFBTSxDQUFDLGVBQWUsQ0FBQztNQUMzQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1Q7RUFDRixDQUFDO0VBQ0RJLGdCQUFnQixXQUFBQSxpQkFBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNqQjtJQUNBakIsTUFBTSxDQUFDZ0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07TUFDdEMsSUFBTUUsT0FBTyxHQUFHbEIsTUFBTSxDQUFDa0IsT0FBTyxJQUFJaEIsUUFBUSxDQUFDaUIsZUFBZSxDQUFDQyxTQUFTO01BQ3BFLElBQUlILE1BQUksQ0FBQ1QsU0FBUyxJQUFJVSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ2pDO01BQ0Y7TUFDQUQsTUFBSSxDQUFDVCxTQUFTLEdBQUcsS0FBSztNQUN0QjtNQUNBLElBQUlVLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDakI7UUFDQUQsTUFBSSxDQUFDUixJQUFJLEVBQUU7TUFDYixDQUFDLE1BQU07UUFDTDtRQUNBUSxNQUFJLENBQUNILElBQUksRUFBRTtNQUNiO0lBQ0YsQ0FBQyxDQUFDO0lBQ0Y7SUFDQVosUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUNrQixPQUFPLEdBQUcsWUFBTTtNQUNoREosTUFBSSxDQUFDVCxTQUFTLEdBQUcsSUFBSTtNQUNyQlMsTUFBSSxDQUFDSCxJQUFJLEVBQUU7TUFDWDtNQUNBZCxNQUFNLENBQUNzQixRQUFRLENBQUM7UUFDZEMsR0FBRyxFQUFFLENBQUM7UUFDTkMsSUFBSSxFQUFFLENBQUM7UUFDUEMsUUFBUSxFQUFFO01BQ1osQ0FBQyxDQUFDO0lBQ0osQ0FBQztFQUNIO0FBQ0YsQ0FBQztBQUNEbkIsS0FBSyxDQUFDVSxnQkFBZ0IsRUFBRTtBQUd4QixJQUFNVSxLQUFLLEdBQUd4QixRQUFRLENBQUN5QixjQUFjLENBQUMsT0FBTyxDQUFDO0FBQzlDLElBQU1DLEtBQUssR0FBRzFCLFFBQVEsQ0FBQ3lCLGNBQWMsQ0FBQyxPQUFPLENBQUM7QUFFOUNELEtBQUssQ0FBQ1YsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLFVBQVVhLEtBQUssRUFBQztFQUM3Q0QsS0FBSyxDQUFDeEIsU0FBUyxDQUFDUSxNQUFNLENBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxXQUFXLENBQUM7RUFDOURnQixLQUFLLENBQUN4QixTQUFTLENBQUNDLEdBQUcsQ0FBQ3dCLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUNDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUMzRSxLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUNBLENBQUMsR0FBQ1AsS0FBSyxDQUFDUSxRQUFRLENBQUNDLE1BQU0sRUFBQ0YsQ0FBQyxFQUFFLEVBQUM7SUFDeENQLEtBQUssQ0FBQ1EsUUFBUSxDQUFDRCxDQUFDLENBQUMsQ0FBQzdCLFNBQVMsQ0FBQ1EsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUM5QztFQUNBaUIsS0FBSyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzNCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUN0RCxDQUFDLENBQUM7QUFFRkgsUUFBUSxDQUFDQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUNhLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVYSxLQUFLLEVBQUU7RUFDN0VBLEtBQUssQ0FBQ08sY0FBYyxFQUFFO0VBQ3RCLElBQUlDLFFBQVEsR0FBR25DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztFQUNuRGtDLFFBQVEsQ0FBQ2pDLFNBQVMsQ0FBQ2tDLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBQ0ZwQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ2EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVhLEtBQUssRUFBRTtFQUMvRUEsS0FBSyxDQUFDTyxjQUFjLEVBQUU7RUFDdEIsSUFBSUMsUUFBUSxHQUFHbkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0VBQ25Ea0MsUUFBUSxDQUFDakMsU0FBUyxDQUFDa0MsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUN4QyxDQUFDLENBQUM7QUFDRnBDLFFBQVEsQ0FBQ2MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVhLEtBQUssRUFBRTtFQUNsRCxJQUFJQSxLQUFLLENBQUNDLE1BQU0sQ0FBQ1MsT0FBTyxDQUFDLDZCQUE2QixDQUFDLEVBQUU7SUFDdkRWLEtBQUssQ0FBQ08sY0FBYyxFQUFFO0lBQ3RCLElBQUlJLFNBQVMsR0FBR1gsS0FBSyxDQUFDQyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDMUMsSUFBSVMsU0FBUyxDQUFDcEMsU0FBUyxDQUFDTyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtNQUNwRDZCLFNBQVMsQ0FBQ3BDLFNBQVMsQ0FBQ1EsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hELENBQUMsTUFBTTtNQUNMNEIsU0FBUyxDQUFDcEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDO0lBQ3pEO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFDRkgsUUFBUSxDQUFDYyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVWEsS0FBSyxFQUFFO0VBQ2xELElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDUyxPQUFPLENBQUMsMkJBQTJCLENBQUMsRUFBRTtJQUNyRCxJQUFJQyxTQUFTLEdBQUdYLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzFDLElBQUlTLFNBQVMsQ0FBQ3BDLFNBQVMsQ0FBQ08sUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQzZCLFNBQVMsQ0FBQ3BDLFNBQVMsQ0FBQ08sUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ2pHa0IsS0FBSyxDQUFDTyxjQUFjLEVBQUU7TUFDdEJJLFNBQVMsQ0FBQ3BDLFNBQVMsQ0FBQ1EsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQ2hEO0lBQ0EsSUFBSTRCLFNBQVMsQ0FBQ3BDLFNBQVMsQ0FBQ08sUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQzVDNkIsU0FBUyxDQUFDcEMsU0FBUyxDQUFDUSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3hDO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFHRixJQUFNNkIsV0FBVyxHQUFHLElBQUk5QyxxREFBTSxDQUFDLGVBQWUsRUFBRTtFQUM5QztFQUNBK0MsU0FBUyxFQUFFLFlBQVk7RUFDdkJDLElBQUksRUFBRSxJQUFJO0VBRVZDLGFBQWEsRUFBRSxLQUFLO0VBQ3BCQyxJQUFJLEVBQUUsSUFBSTtFQUVWO0VBQ0FDLFVBQVUsRUFBRTtJQUNWdkMsRUFBRSxFQUFFLDZCQUE2QjtJQUNqQ3dDLElBQUksRUFBQztFQUNQO0FBQ0YsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzNIRixpRUFBZTtFQUNiaEQsTUFBTSxFQUFFO0lBQ05pRCxTQUFTLEVBQUU7TUFDVEMsR0FBRyxLQUFBQyxNQUFBLENBQUtDLHVCQUFlO0lBQ3pCO0VBQ0Y7QUFDRixDQUFDOzs7Ozs7Ozs7OztBQ05EOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvc2Nzcy9jYXRlZ29yeS5zY3NzPzA4ZGQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJ3RhaWx3aW5kY3NzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgJy4vc2Nzcy9jYXRlZ29yeS5zY3NzJztcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyL2J1bmRsZSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnY29uZmlnJztcbmNvbnNvbGUubG9nKGNvbmZpZy5zZXJ2ZXIpO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZGVyJykuY2xhc3NMaXN0LmFkZChcInByZWxvYWRlci1yZW1vdmVcIik7XG59O1xuY29uc3QgYnRuVXAgPSB7XG4gIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJyksXG4gIHNjcm9sbGluZzogZmFsc2UsXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRlJyk7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkZScpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIC8vINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0L7QutC90LAgKHdpbmRvdylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5zY3JvbGxpbmcgJiYgc2Nyb2xsWSA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIC8vINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQv9GA0L7QutGA0YPRgtC40Lsg0YHRgtGA0LDQvdC40YbRgyDQsdC+0LvQtdC1INGH0LXQvCDQvdCwIDIwMHB4XG4gICAgICBpZiAoc2Nyb2xsWSA+IDQwMCkge1xuICAgICAgICAvLyDRgdC00LXQu9Cw0LXQvCDQutC90L7Qv9C60YMgLmJ0bi11cCDQstC40LTQuNC80L7QuVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vINC40L3QsNGH0LUg0YHQutGA0L7QtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIC8vINC/0LXRgNC10LzQtdGB0YLQuNGC0YzRgdGPINCyINCy0LXRgNGF0L3RjtGOINGH0LDRgdGC0Ywg0YHRgtGA0LDQvdC40YbRi1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcigpO1xuXG5cbmNvbnN0IHBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYW5lbFwiKTtcbmNvbnN0IGdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cFwiKTtcblxucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24gKGV2ZW50KXtcbiAgZ3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnbGl0dGxlLWdyaWQnLCdncmlkLXN0eWxlJywnbGlzdC1ncmlkJylcbiAgZ3JvdXAuY2xhc3NMaXN0LmFkZChldmVudC50YXJnZXQuY2xvc2VzdChcInNwYW5cIikuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSlcbiAgZm9yKGxldCBpID0gMDtpPHBhbmVsLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xuICAgIHBhbmVsLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG4gIGV2ZW50LnRhcmdldC5jbG9zZXN0KFwic3BhblwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0pXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB2YXIgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtbWVudVwiKTtcbiAgbGVmdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tbWVudVwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdmFyIGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LW1lbnVcIik7XG4gIGxlZnRNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuLW1lbnVcIik7XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLmFzaWRlLW1lbnUgLmZhLWFuZ2xlLXJpZ2h0XCIpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgY2xvc2VzdExpID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKTtcbiAgICBpZiAoY2xvc2VzdExpLmNsYXNzTGlzdC5jb250YWlucyhcImFzaWRlLW1lbnUtY2xvc2VcIikpIHtcbiAgICAgIGNsb3Nlc3RMaS5jbGFzc0xpc3QucmVtb3ZlKFwiYXNpZGUtbWVudS1jbG9zZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VzdExpLmNsYXNzTGlzdC5hZGQoXCJhc2lkZS1tZW51LWNsb3NlXCIsIFwiZml4LW1lbnVcIik7XG4gICAgfVxuICB9XG59KTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKFwiLmFzaWRlLW1lbnUgLm9wZW4tY2F0YWxvZ1wiKSkge1xuICAgIHZhciBjbG9zZXN0TGkgPSBldmVudC50YXJnZXQuY2xvc2VzdChcImxpXCIpO1xuICAgIGlmIChjbG9zZXN0TGkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXNpZGUtbWVudS1jbG9zZVwiKSAmJiAhY2xvc2VzdExpLmNsYXNzTGlzdC5jb250YWlucyhcImZpeC1tZW51XCIpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xvc2VzdExpLmNsYXNzTGlzdC5yZW1vdmUoXCJhc2lkZS1tZW51LWNsb3NlXCIpO1xuICAgIH1cbiAgICBpZiAoY2xvc2VzdExpLmNsYXNzTGlzdC5jb250YWlucyhcImZpeC1tZW51XCIpKSB7XG4gICAgICBjbG9zZXN0TGkuY2xhc3NMaXN0LnJlbW92ZShcImZpeC1tZW51XCIpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuY29uc3Qgc3dpcGVyUHJvbW8gPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXByb21vJywge1xuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICBsb29wOiB0cnVlLFxuXG4gIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxuICBsYXp5OiB0cnVlLFxuXG4gIC8vICBwYWdpbmF0aW9uXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbi1jYXRlZ29yeScsXG4gICAgdHlwZTonYnVsbGV0cydcbiAgfSxcbn0pO1xuXG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNlcnZlcjoge1xuICAgIGVuZHBvaW50czoge1xuICAgICAgdXJsOiBgJHtTRVJWRVJfQkFTRV9VUkx9YCxcbiAgICB9LFxuICB9LFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNhdGVnb3J5XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N0YXJ0ZXJfcHVnX3RhaWx3aW5kX3dlYnBhY2tcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3RhcnRlcl9wdWdfdGFpbHdpbmRfd2VicGFja1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfc3dpcGVyX3N3aXBlci1idW5kbGVfbWluX2Nzcy1ub2RlX21vZHVsZXNfc3dpcGVyX3N3aXBlci1idW5kbGVfZXNtX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NhdGVnb3J5LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiU3dpcGVyIiwiY29uZmlnIiwiY29uc29sZSIsImxvZyIsInNlcnZlciIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImJ0blVwIiwiZWwiLCJzY3JvbGxpbmciLCJzaG93IiwiX3RoaXMiLCJjb250YWlucyIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJoaWRlIiwiX3RoaXMyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzMyIsInNjcm9sbFkiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJvbmNsaWNrIiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJwYW5lbCIsImdldEVsZW1lbnRCeUlkIiwiZ3JvdXAiLCJldmVudCIsInRhcmdldCIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJpIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsImxlZnRNZW51IiwidG9nZ2xlIiwibWF0Y2hlcyIsImNsb3Nlc3RMaSIsInN3aXBlclByb21vIiwiZGlyZWN0aW9uIiwibG9vcCIsInByZWxvYWRJbWFnZXMiLCJsYXp5IiwicGFnaW5hdGlvbiIsInR5cGUiLCJlbmRwb2ludHMiLCJ1cmwiLCJjb25jYXQiLCJTRVJWRVJfQkFTRV9VUkwiXSwic291cmNlUm9vdCI6IiJ9