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

/***/ "./src/scss/auxpage_ja-soglasena-s-uslovijami-dogovora.scss":
/*!******************************************************************!*\
  !*** ./src/scss/auxpage_ja-soglasena-s-uslovijami-dogovora.scss ***!
  \******************************************************************/
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************************************!*\
  !*** ./src/auxpage_ja-soglasena-s-uslovijami-dogovora.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_auxpage_ja_soglasena_s_uslovijami_dogovora_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/auxpage_ja-soglasena-s-uslovijami-dogovora.scss */ "./src/scss/auxpage_ja-soglasena-s-uslovijami-dogovora.scss");

__webpack_require__(/*! ./js/left-menu-clean */ "./src/js/left-menu-clean.js");
__webpack_require__(/*! ./js/preloader */ "./src/js/preloader.js");
__webpack_require__(/*! ./js/btnUp */ "./src/js/btnUp.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV4cGFnZV9qYS1zb2dsYXNlbmEtcy11c2xvdmlqYW1pLWRvZ292b3JhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBRztFQUNaQyxFQUFFLEVBQUVDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztFQUNyQ0MsU0FBUyxFQUFFLEtBQUs7RUFDaEJDLElBQUksV0FBQUEsS0FBQSxFQUFHO0lBQUEsSUFBQUMsS0FBQTtJQUNMLElBQUksSUFBSSxDQUFDTCxFQUFFLENBQUNNLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDUCxFQUFFLENBQUNNLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO01BQzdGLElBQUksQ0FBQ1AsRUFBRSxDQUFDTSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxhQUFhLENBQUM7TUFDdkMsSUFBSSxDQUFDUixFQUFFLENBQUNNLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGVBQWUsQ0FBQztNQUN0Q0MsTUFBTSxDQUFDQyxVQUFVLENBQUMsWUFBTTtRQUN0Qk4sS0FBSSxDQUFDTCxFQUFFLENBQUNNLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGVBQWUsQ0FBQztNQUMzQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1Q7RUFDRixDQUFDO0VBQ0RJLElBQUksV0FBQUEsS0FBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNMLElBQUksQ0FBQyxJQUFJLENBQUNiLEVBQUUsQ0FBQ00sU0FBUyxDQUFDQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUNQLEVBQUUsQ0FBQ00sU0FBUyxDQUFDQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7TUFDOUYsSUFBSSxDQUFDUCxFQUFFLENBQUNNLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGVBQWUsQ0FBQztNQUN0Q0MsTUFBTSxDQUFDQyxVQUFVLENBQUMsWUFBTTtRQUN0QkUsTUFBSSxDQUFDYixFQUFFLENBQUNNLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUNwQ0ksTUFBSSxDQUFDYixFQUFFLENBQUNNLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLGVBQWUsQ0FBQztNQUMzQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ1Q7RUFDRixDQUFDO0VBQ0RNLGdCQUFnQixXQUFBQSxpQkFBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNqQjtJQUNBTCxNQUFNLENBQUNJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO01BQ3RDLElBQU1FLE9BQU8sR0FBR04sTUFBTSxDQUFDTSxPQUFPLElBQUlmLFFBQVEsQ0FBQ2dCLGVBQWUsQ0FBQ0MsU0FBUztNQUNwRSxJQUFJSCxNQUFJLENBQUNaLFNBQVMsSUFBSWEsT0FBTyxHQUFHLENBQUMsRUFBRTtRQUNqQztNQUNGO01BQ0FELE1BQUksQ0FBQ1osU0FBUyxHQUFHLEtBQUs7TUFDdEI7TUFDQSxJQUFJYSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ2pCO1FBQ0FELE1BQUksQ0FBQ1gsSUFBSSxDQUFDLENBQUM7TUFDYixDQUFDLE1BQU07UUFDTDtRQUNBVyxNQUFJLENBQUNILElBQUksQ0FBQyxDQUFDO01BQ2I7SUFDRixDQUFDLENBQUM7SUFDRjtJQUNBWCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ2lCLE9BQU8sR0FBRyxZQUFNO01BQ2hESixNQUFJLENBQUNaLFNBQVMsR0FBRyxJQUFJO01BQ3JCWSxNQUFJLENBQUNILElBQUksQ0FBQyxDQUFDO01BQ1g7TUFDQUYsTUFBTSxDQUFDVSxRQUFRLENBQUM7UUFDZEMsR0FBRyxFQUFFLENBQUM7UUFDTkMsSUFBSSxFQUFFLENBQUM7UUFDUEMsUUFBUSxFQUFFO01BQ1osQ0FBQyxDQUFDO0lBQ0osQ0FBQztFQUNIO0FBQ0YsQ0FBQztBQUNEeEIsS0FBSyxDQUFDZSxnQkFBZ0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDbkR4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0FKLE1BQU0sQ0FBQ2MsTUFBTSxHQUFHLFlBQVc7RUFBRWIsVUFBVSxDQUFDVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ0ksU0FBUyxDQUFDRyxHQUFHLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLENBQUM7QUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNQdEg7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZ0U7QUFFaEVnQixtQkFBTyxDQUFDLHlEQUFzQixDQUFDO0FBQy9CQSxtQkFBTyxDQUFDLDZDQUFnQixDQUFDO0FBQ3pCQSxtQkFBTyxDQUFDLHFDQUFZLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9zcmMvanMvYnRuVXAuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9sZWZ0LW1lbnUtY2xlYW4uanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9wcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9zY3NzL2F1eHBhZ2VfamEtc29nbGFzZW5hLXMtdXNsb3ZpamFtaS1kb2dvdm9yYS5zY3NzPzVlYTMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9hdXhwYWdlX2phLXNvZ2xhc2VuYS1zLXVzbG92aWphbWktZG9nb3ZvcmEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnRuVXAgPSB7XG4gIGVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXVwJyksXG4gIHNjcm9sbGluZzogZmFsc2UsXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRlJyk7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tdXBfaGlkaW5nJyk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSxcbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tdXBfaGlkZScpICYmICF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYnRuLXVwX2hpZGluZycpKSB7XG4gICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdidG4tdXBfaGlkZScpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi11cF9oaWRpbmcnKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9LFxuICBhZGRFdmVudExpc3RlbmVyKCkge1xuICAgIC8vINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0L7QutC90LAgKHdpbmRvdylcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBpZiAodGhpcy5zY3JvbGxpbmcgJiYgc2Nyb2xsWSA+IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIC8vINC10YHQu9C4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQv9GA0L7QutGA0YPRgtC40Lsg0YHRgtGA0LDQvdC40YbRgyDQsdC+0LvQtdC1INGH0LXQvCDQvdCwIDIwMHB4XG4gICAgICBpZiAoc2Nyb2xsWSA+IDQwMCkge1xuICAgICAgICAvLyDRgdC00LXQu9Cw0LXQvCDQutC90L7Qv9C60YMgLmJ0bi11cCDQstC40LTQuNC80L7QuVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vINC40L3QsNGH0LUg0YHQutGA0L7QtdC8INC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vINC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwINC60L3QvtC/0LrRgyAuYnRuLXVwXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi11cCcpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIC8vINC/0LXRgNC10LzQtdGB0YLQuNGC0YzRgdGPINCyINCy0LXRgNGF0L3RjtGOINGH0LDRgdGC0Ywg0YHRgtGA0LDQvdC40YbRi1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuYnRuVXAuYWRkRXZlbnRMaXN0ZW5lcigpO1xuIiwiLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIHZhciBsZWZ0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1tZW51XCIpO1xuLy8gICBsZWZ0TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3Blbi1tZW51XCIpO1xuLy8gfSk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICB2YXIgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnQtbWVudVwiKTtcbi8vICAgbGVmdE1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW4tbWVudVwiKTtcbi8vIH0pO1xuIiwiLy8gY29uc29sZS5sb2coXCJwcmVsb2FkZXIuanMgbG9hZGluZ1wiKVxuLy8gd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuLy8gICBjb25zb2xlLmxvZyhcIndpbmRvdy5vbmxvYWQgc3RhcnRcIilcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpLmNsYXNzTGlzdC5hZGQoXCJwcmVsb2FkZXItcmVtb3ZlXCIpO1xuLy8gfTtcblxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7IHNldFRpbWVvdXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRlcicpLmNsYXNzTGlzdC5hZGQoXCJwcmVsb2FkZXItcmVtb3ZlXCIpLCAyMDAwKX07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3Njc3MvYXV4cGFnZV9qYS1zb2dsYXNlbmEtcy11c2xvdmlqYW1pLWRvZ292b3JhLnNjc3MnO1xuXG5yZXF1aXJlKCcuL2pzL2xlZnQtbWVudS1jbGVhbicpXG5yZXF1aXJlKCcuL2pzL3ByZWxvYWRlcicpXG5yZXF1aXJlKCcuL2pzL2J0blVwJylcbiJdLCJuYW1lcyI6WyJidG5VcCIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsaW5nIiwic2hvdyIsIl90aGlzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsIl90aGlzMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpczMiLCJzY3JvbGxZIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwib25jbGljayIsInNjcm9sbFRvIiwidG9wIiwibGVmdCIsImJlaGF2aW9yIiwib25sb2FkIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=