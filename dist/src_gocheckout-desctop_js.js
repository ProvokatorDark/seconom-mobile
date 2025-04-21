(self["webpackChunkstarter_pug_tailwind_webpack"] = self["webpackChunkstarter_pug_tailwind_webpack"] || []).push([["src_gocheckout-desctop_js"],{

/***/ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js ***!
  \****************************************************************************/
/***/ (function(module) {

var t,e;t=this,e=function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(n){e(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}var u=function(t){return"string"==typeof t?document.querySelector(t):t()},a=function(t,e){var n="string"==typeof t?document.createElement(t):t;for(var r in e){var i=e[r];if("inside"===r)i.append(n);else if("dest"===r)u(i[0]).insertAdjacentElement(i[1],n);else if("around"===r){var o=i;o.parentNode.insertBefore(n,o),n.append(o),null!=o.getAttribute("autofocus")&&o.focus()}else r in n?n[r]=i:n.setAttribute(r,i)}return n},c=function(t,e){return t=String(t).toLowerCase(),e?t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").normalize("NFC"):t},l=function(t,e){return a("mark",r({innerHTML:t},"string"==typeof e&&{class:e})).outerHTML},f=function(t,e){e.input.dispatchEvent(new CustomEvent(t,{bubbles:!0,detail:e.feedback,cancelable:!0}))},p=function(t,e,n){var r=n||{},i=r.mode,o=r.diacritics,s=r.highlight,u=c(e,o);if(e=String(e),t=c(t,o),"loose"===i){var a=(t=t.replace(/ /g,"")).length,f=0,p=Array.from(e).map((function(e,n){return f<a&&u[n]===t[f]&&(e=s?l(e,s):e,f++),e})).join("");if(f===a)return p}else{var d=u.indexOf(t);if(~d)return t=e.substring(d,d+t.length),d=s?e.replace(t,l(t,s)):e}},d=function(t,e){return new Promise((function(n,r){var i;return(i=t.data).cache&&i.store?n():new Promise((function(t,n){return"function"==typeof i.src?new Promise((function(t,n){return"AsyncFunction"===i.src.constructor.name?i.src(e).then(t,n):t(i.src(e))})).then(t,n):t(i.src)})).then((function(e){try{return t.feedback=i.store=e,f("response",t),n()}catch(t){return r(t)}}),r)}))},h=function(t,e){var n=e.data,r=e.searchEngine,i=[];n.store.forEach((function(o,u){var a=function(n){var s=n?o[n]:o,u="function"==typeof r?r(t,s):p(t,s,{mode:r,diacritics:e.diacritics,highlight:e.resultItem.highlight});if(u){var a={match:u,value:o};n&&(a.key=n),i.push(a)}};if(n.keys){var c,l=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=s(t))||e){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){a=!0,o=t},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw o}}}}(n.keys);try{for(l.s();!(c=l.n()).done;)a(c.value)}catch(t){l.e(t)}finally{l.f()}}else a()})),n.filter&&(i=n.filter(i));var o=i.slice(0,e.resultsList.maxResults);e.feedback={query:t,matches:i,results:o},f("results",e)},m="aria-expanded",v="aria-activedescendant",y="aria-selected",b=function(t,e){t.feedback.selection=r({index:e},t.feedback.results[e])},g=function(t){t.isOpen||((t.wrapper||t.input).setAttribute(m,!0),t.list.removeAttribute("hidden"),t.isOpen=!0,f("open",t))},w=function(t){t.isOpen&&((t.wrapper||t.input).setAttribute(m,!1),t.input.setAttribute(v,""),t.list.setAttribute("hidden",""),t.isOpen=!1,f("close",t))},O=function(t,e){var n=e.resultItem,r=e.list.getElementsByTagName(n.tag),o=!!n.selected&&n.selected.split(" ");if(e.isOpen&&r.length){var s,u,a=e.cursor;t>=r.length&&(t=0),t<0&&(t=r.length-1),e.cursor=t,a>-1&&(r[a].removeAttribute(y),o&&(u=r[a].classList).remove.apply(u,i(o))),r[t].setAttribute(y,!0),o&&(s=r[t].classList).add.apply(s,i(o)),e.input.setAttribute(v,r[e.cursor].id),e.list.scrollTop=r[t].offsetTop-e.list.clientHeight+r[t].clientHeight+5,e.feedback.cursor=e.cursor,b(e,t),f("navigate",e)}},A=function(t){O(t.cursor+1,t)},S=function(t){O(t.cursor-1,t)},j=function(t,e,n){(n=n>=0?n:t.cursor)<0||(t.feedback.event=e,b(t,n),f("selection",t),w(t))};function k(t,e){var n=this;return new Promise((function(i,o){var s,u;return s=e||((u=t.input)instanceof HTMLInputElement||u instanceof HTMLTextAreaElement?u.value:u.innerHTML),function(t,e,n){return e?e(t):t.length>=n}(s=t.query?t.query(s):s,t.trigger,t.threshold)?d(t,s).then((function(e){try{return t.feedback instanceof Error?i():(h(s,t),t.resultsList&&function(t){var e=t.resultsList,n=t.list,i=t.resultItem,o=t.feedback,s=o.matches,u=o.results;if(t.cursor=-1,n.innerHTML="",s.length||e.noResults){var c=new DocumentFragment;u.forEach((function(t,e){var n=a(i.tag,r({id:"".concat(i.id,"_").concat(e),role:"option",innerHTML:t.match,inside:c},i.class&&{class:i.class}));i.element&&i.element(n,t)})),n.append(c),e.element&&e.element(n,o),g(t)}else w(t)}(t),c.call(n))}catch(t){return o(t)}}),o):(w(t),c.call(n));function c(){return i()}}))}var L=function(t,e){for(var n in t)for(var r in t[n])e(n,r)},T=function(t){var e,n,i,o=t.events,s=(e=function(){return k(t)},n=t.debounce,function(){clearTimeout(i),i=setTimeout((function(){return e()}),n)}),u=t.events=r({input:r({},o&&o.input)},t.resultsList&&{list:o?r({},o.list):{}}),a={input:{input:function(){s()},keydown:function(e){!function(t,e){switch(t.keyCode){case 40:case 38:t.preventDefault(),40===t.keyCode?A(e):S(e);break;case 13:e.submit||t.preventDefault(),e.cursor>=0&&j(e,t);break;case 9:e.resultsList.tabSelect&&e.cursor>=0&&j(e,t);break;case 27:e.input.value="",f("clear",e),w(e)}}(e,t)},blur:function(){w(t)}},list:{mousedown:function(t){t.preventDefault()},click:function(e){!function(t,e){var n=e.resultItem.tag.toUpperCase(),r=Array.from(e.list.querySelectorAll(n)),i=t.target.closest(n);i&&i.nodeName===n&&j(e,t,r.indexOf(i))}(e,t)}}};L(a,(function(e,n){(t.resultsList||"input"===n)&&(u[e][n]||(u[e][n]=a[e][n]))})),L(u,(function(e,n){t[e].addEventListener(n,u[e][n])}))};function E(t){var e=this;return new Promise((function(n,i){var o,s,u;if(o=t.placeHolder,u={role:"combobox","aria-owns":(s=t.resultsList).id,"aria-haspopup":!0,"aria-expanded":!1},a(t.input,r(r({"aria-controls":s.id,"aria-autocomplete":"both"},o&&{placeholder:o}),!t.wrapper&&r({},u))),t.wrapper&&(t.wrapper=a("div",r({around:t.input,class:t.name+"_wrapper"},u))),s&&(t.list=a(s.tag,r({dest:[s.destination,s.position],id:s.id,role:"listbox",hidden:"hidden"},s.class&&{class:s.class}))),T(t),t.data.cache)return d(t).then((function(t){try{return c.call(e)}catch(t){return i(t)}}),i);function c(){return f("init",t),n()}return c.call(e)}))}function P(t){var e=t.prototype;e.init=function(){E(this)},e.start=function(t){k(this,t)},e.unInit=function(){if(this.wrapper){var t=this.wrapper.parentNode;t.insertBefore(this.input,this.wrapper),t.removeChild(this.wrapper)}var e;L((e=this).events,(function(t,n){e[t].removeEventListener(n,e.events[t][n])}))},e.open=function(){g(this)},e.close=function(){w(this)},e.goTo=function(t){O(t,this)},e.next=function(){A(this)},e.previous=function(){S(this)},e.select=function(t){j(this,null,t)},e.search=function(t,e,n){return p(t,e,n)}}return function t(e){this.options=e,this.id=t.instances=(t.instances||0)+1,this.name="autoComplete",this.wrapper=1,this.threshold=1,this.debounce=0,this.resultsList={position:"afterend",tag:"ul",maxResults:5},this.resultItem={tag:"li"},function(t){var e=t.name,n=t.options,r=t.resultsList,i=t.resultItem;for(var s in n)if("object"===o(n[s]))for(var a in t[s]||(t[s]={}),n[s])t[s][a]=n[s][a];else t[s]=n[s];t.selector=t.selector||"#"+e,r.destination=r.destination||t.selector,r.id=r.id||e+"_list_"+t.id,i.id=i.id||e+"_result",t.input=u(t.selector)}(this),P.call(this,t),E(this)}}, true?module.exports=e():0;


/***/ }),

/***/ "./src/gocheckout-desctop.js":
/*!***********************************!*\
  !*** ./src/gocheckout-desctop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_gocheckout_desctop_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/gocheckout-desctop.scss */ "./src/scss/gocheckout-desctop.scss");
/* harmony import */ var _tarekraafat_autocomplete_js_dist_css_autoComplete_02_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarekraafat/autocomplete.js/dist/css/autoComplete.02.css */ "./node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css");
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarekraafat/autocomplete.js */ "./node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js");
/* harmony import */ var _tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarekraafat_autocomplete_js__WEBPACK_IMPORTED_MODULE_2__);


// require('./js/preloader')
// require('./js/btnUp')

__webpack_require__(/*! ./js/maskPhone */ "./src/js/maskPhone.js");


// const area = new autoComplete({
//   selector: "#area",
//   data: {
//     src: async (query) => {
//       try {
//         // Loading placeholder text
//         document
//           .getElementById("area")
//           .setAttribute("placeholder", "Loading...");
//         // Fetch External Data Source
//         const source = await fetch(
//           "https://seconom24.ru/preorder/?action=setRegion&test=1&query="+query
//         );
//         const data = await source.json();
//         // console.log(data);
//         // Post Loading placeholder text
//         document
//           .getElementById("area")
//           .setAttribute("placeholder", area.placeHolder);
//         // Returns Fetched data
//         return data;
//       } catch (error) {
//         return error;
//       }
//     },
//     keys: ["value"],
//     cache: false,
//     filter: (list) => {
//       // Filter duplicates
//       // incase of multiple data keys usage
//       const filteredResults = Array.from(
//         new Set(list.map((value) => value.match))
//       ).map((name) => {
//         return list.find((value) => value.match === name);
//       });
//
//       return filteredResults;
//     }
//   },
//   placeHolder: "Поиск области...",
//   threshold:3,
//   resultsList: {
//     element: (list, data) => {
//       const info = document.createElement("p");
//       if (data.results.length > 0) {
//         info.innerHTML = ``;
//       } else {
//         info.innerHTML = `Не найдено`;
//       }
//       list.prepend(info);
//     },
//     noResults: true,
//     maxResults: 15,
//     tabSelect: true
//   },
//   resultItem: {
//     element: (item, data) => {
//       // Modify Results Item Style
//       item.style = "display: flex; justify-content: space-between;";
//       // Modify Results Item Content
//       item.innerHTML = `
//       <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
//         ${data.match}
//       </span>
//       `;
//     },
//     highlight: true
//   },
//   events: {
//     input: {
//       focus: () => {
//         if (area.input.value.length) area.start();
//       }
//     }
//   }
// });
// document.getElementById("area").addEventListener("selection", function (event) {
//   const feedback = event.detail;
//   area.input.blur();
//   // Prepare User's Selected Value
//   const selection = feedback.selection.value[feedback.selection.key];
//   const selection2 = feedback.selection.value['id'];
//   // Render selected choice to selection div
//   document.querySelector(".areaSelection").innerHTML = selection2;
//   // Replace Input value with the selected value
//   area.input.value = selection;
//   // Console log autoComplete data feedback
//   console.log(feedback);
// });
// const town = new autoComplete({
//   selector: "#town",
//   data: {
//     src: async (query) => {
//       try {
//         // Loading placeholder text
//         document
//           .getElementById("town")
//           .setAttribute("placeholder", "Loading...");
//         // Fetch External Data Source
//
//         const source = await fetch(
//           "https://seconom24.ru/preorder/?action=setCity&query="+query+"&id=92b30014-4d52-4e2e-892d-928142b924bf"
//         );
//         const data = await source.json();
//         // console.log(isObject(data));
//         // Post Loading placeholder text
//         document
//           .getElementById("town")
//           .setAttribute("placeholder", town.placeHolder);
//         // Returns Fetched data
//         return data;
//       } catch (error) {
//         return error;
//       }
//     },
//     keys: ["value"],
//     cache: false,
//     filter: (list) => {
//       // Filter duplicates
//       // incase of multiple data keys usage
//       const filteredResults = Array.from(
//         new Set(list.map((value) => value.match))
//       ).map((name) => {
//         return list.find((value) => value.match === name);
//       });
//
//       return filteredResults;
//     }
//   },
//   placeHolder: "Поиск города...",
//   threshold:3,
//   resultsList: {
//     element: (list, data) => {
//       const info = document.createElement("p");
//       if (data.results.length > 0) {
//         info.innerHTML = ``;
//       } else {
//         info.innerHTML = `Не найдено`;
//       }
//       list.prepend(info);
//     },
//     noResults: true,
//     maxResults: 15,
//     tabSelect: true
//   },
//   resultItem: {
//     element: (item, data) => {
//       // Modify Results Item Style
//       item.style = "display: flex; justify-content: space-between;";
//       // Modify Results Item Content
//       item.innerHTML = `
//       <span style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
//         ${data.match}
//       </span>
//       `;
//     },
//     highlight: true
//   },
//   events: {
//     input: {
//       focus: () => {
//         if (town.input.value.length) town.start();
//       }
//     }
//   }
// });
// document.getElementById("town").addEventListener("selection", function (event) {
//   const feedback = event.detail;
//   town.input.blur();
//   // Prepare User's Selected Value
//   const selection = feedback.selection.value.value;
//   // console.log(selection)
//   // Render selected choice to selection div
//   document.querySelector(".townSelection").innerHTML = selection;
//   // Replace Input value with the selected value
//   town.input.value = selection;
//   // Console log autoComplete data feedback
//   console.log(feedback);
// });

/***/ }),

/***/ "./src/js/maskPhone.js":
/*!*****************************!*\
  !*** ./src/js/maskPhone.js ***!
  \*****************************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function maskPhone(selector) {
  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '+7 (___) ___-__-__';
  var elems = document.querySelectorAll(selector);
  function mask(event) {
    var keyCode = event.keyCode;
    var template = masked,
      def = template.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    console.log(template);
    var i = 0,
      newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {
      return "\\d{1," + a.length + "}";
    }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }
    if (event.type === "blur" && this.value.length < 5) {
      this.value = "";
    }
  }
  var _iterator = _createForOfIteratorHelper(elems),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
maskPhone('.phonevalidation');

/***/ }),

/***/ "./node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css":
/*!********************************************************************************!*\
  !*** ./node_modules/@tarekraafat/autocomplete.js/dist/css/autoComplete.02.css ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/gocheckout-desctop.scss":
/*!******************************************!*\
  !*** ./src/scss/gocheckout-desctop.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFDLEVBQUU7TUFDbEQsSUFBSSxDQUFDWSxLQUFLLEdBQUcsRUFBRTtJQUNqQjtFQUVGO0VBQUMsSUFBQWMsU0FBQSxHQUFBQywwQkFBQSxDQUVrQnpCLEtBQUs7SUFBQTBCLEtBQUE7RUFBQTtJQUF4QixLQUFBRixTQUFBLENBQUFHLENBQUEsTUFBQUQsS0FBQSxHQUFBRixTQUFBLENBQUFJLENBQUEsSUFBQUMsSUFBQSxHQUEwQjtNQUFBLElBQWZDLElBQUksR0FBQUosS0FBQSxDQUFBaEIsS0FBQTtNQUNib0IsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU1QixJQUFJLENBQUM7TUFDcEMyQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTVCLElBQUksQ0FBQztNQUNwQzJCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsTUFBTSxFQUFFNUIsSUFBSSxDQUFDO0lBQ3JDO0VBQUMsU0FBQTZCLEdBQUE7SUFBQVIsU0FBQSxDQUFBUyxDQUFBLENBQUFELEdBQUE7RUFBQTtJQUFBUixTQUFBLENBQUFVLENBQUE7RUFBQTtBQUVIO0FBRUF4QyxTQUFTLENBQUMsa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7OztBQ3ZDN0I7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXItcHVnLXRhaWx3aW5kLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvQHRhcmVrcmFhZmF0L2F1dG9jb21wbGV0ZS5qcy9kaXN0L2F1dG9Db21wbGV0ZS5taW4uanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9nb2NoZWNrb3V0LWRlc2N0b3AuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL3NyYy9qcy9tYXNrUGhvbmUuanMiLCJ3ZWJwYWNrOi8vc3RhcnRlci1wdWctdGFpbHdpbmQtd2VicGFjay8uL25vZGVfbW9kdWxlcy9AdGFyZWtyYWFmYXQvYXV0b2NvbXBsZXRlLmpzL2Rpc3QvY3NzL2F1dG9Db21wbGV0ZS4wMi5jc3M/YjM5MiIsIndlYnBhY2s6Ly9zdGFydGVyLXB1Zy10YWlsd2luZC13ZWJwYWNrLy4vc3JjL3Njc3MvZ29jaGVja291dC1kZXNjdG9wLnNjc3M/ZjQ5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCxlO3Q9dGhpcyxlPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgbj0wLHI9QXJyYXkoZSk7bjxlO24rKylyW25dPXRbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gZSh0LGUsbil7cmV0dXJuKGU9ZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24odCxlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgdHx8IXQpcmV0dXJuIHQ7dmFyIG49dFtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PW4pe3ZhciByPW4uY2FsbCh0LGV8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcilyZXR1cm4gcjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT1lP1N0cmluZzpOdW1iZXIpKHQpfSh0LFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlP2U6ZStcIlwifShlKSlpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPW4sdH1mdW5jdGlvbiBuKHQsZSl7dmFyIG49T2JqZWN0LmtleXModCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KTtlJiYocj1yLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKS5lbnVtZXJhYmxlfSkpKSxuLnB1c2guYXBwbHkobixyKX1yZXR1cm4gbn1mdW5jdGlvbiByKHQpe2Zvcih2YXIgcj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspe3ZhciBpPW51bGwhPWFyZ3VtZW50c1tyXT9hcmd1bWVudHNbcl06e307ciUyP24oT2JqZWN0KGkpLCEwKS5mb3JFYWNoKChmdW5jdGlvbihuKXtlKHQsbixpW25dKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyh0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGkpKTpuKE9iamVjdChpKSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGksZSkpfSkpfXJldHVybiB0fWZ1bmN0aW9uIGkoZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIHQoZSl9KGUpfHxmdW5jdGlvbih0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZudWxsIT10W1N5bWJvbC5pdGVyYXRvcl18fG51bGwhPXRbXCJAQGl0ZXJhdG9yXCJdKXJldHVybiBBcnJheS5mcm9tKHQpfShlKXx8cyhlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBvKHQpe3JldHVybiBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9LG8odCl9ZnVuY3Rpb24gcyhlLG4pe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiB0KGUsbik7dmFyIHI9e30udG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09cnx8XCJTZXRcIj09PXI/QXJyYXkuZnJvbShlKTpcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qocik/dChlLG4pOnZvaWQgMH19dmFyIHU9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTp0KCl9LGE9ZnVuY3Rpb24odCxlKXt2YXIgbj1cInN0cmluZ1wiPT10eXBlb2YgdD9kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpOnQ7Zm9yKHZhciByIGluIGUpe3ZhciBpPWVbcl07aWYoXCJpbnNpZGVcIj09PXIpaS5hcHBlbmQobik7ZWxzZSBpZihcImRlc3RcIj09PXIpdShpWzBdKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoaVsxXSxuKTtlbHNlIGlmKFwiYXJvdW5kXCI9PT1yKXt2YXIgbz1pO28ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobixvKSxuLmFwcGVuZChvKSxudWxsIT1vLmdldEF0dHJpYnV0ZShcImF1dG9mb2N1c1wiKSYmby5mb2N1cygpfWVsc2UgciBpbiBuP25bcl09aTpuLnNldEF0dHJpYnV0ZShyLGkpfXJldHVybiBufSxjPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQ9U3RyaW5nKHQpLnRvTG93ZXJDYXNlKCksZT90Lm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLFwiXCIpLm5vcm1hbGl6ZShcIk5GQ1wiKTp0fSxsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGEoXCJtYXJrXCIscih7aW5uZXJIVE1MOnR9LFwic3RyaW5nXCI9PXR5cGVvZiBlJiZ7Y2xhc3M6ZX0pKS5vdXRlckhUTUx9LGY9ZnVuY3Rpb24odCxlKXtlLmlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KHQse2J1YmJsZXM6ITAsZGV0YWlsOmUuZmVlZGJhY2ssY2FuY2VsYWJsZTohMH0pKX0scD1mdW5jdGlvbih0LGUsbil7dmFyIHI9bnx8e30saT1yLm1vZGUsbz1yLmRpYWNyaXRpY3Mscz1yLmhpZ2hsaWdodCx1PWMoZSxvKTtpZihlPVN0cmluZyhlKSx0PWModCxvKSxcImxvb3NlXCI9PT1pKXt2YXIgYT0odD10LnJlcGxhY2UoLyAvZyxcIlwiKSkubGVuZ3RoLGY9MCxwPUFycmF5LmZyb20oZSkubWFwKChmdW5jdGlvbihlLG4pe3JldHVybiBmPGEmJnVbbl09PT10W2ZdJiYoZT1zP2woZSxzKTplLGYrKyksZX0pKS5qb2luKFwiXCIpO2lmKGY9PT1hKXJldHVybiBwfWVsc2V7dmFyIGQ9dS5pbmRleE9mKHQpO2lmKH5kKXJldHVybiB0PWUuc3Vic3RyaW5nKGQsZCt0Lmxlbmd0aCksZD1zP2UucmVwbGFjZSh0LGwodCxzKSk6ZX19LGQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4scil7dmFyIGk7cmV0dXJuKGk9dC5kYXRhKS5jYWNoZSYmaS5zdG9yZT9uKCk6bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQsbil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgaS5zcmM/bmV3IFByb21pc2UoKGZ1bmN0aW9uKHQsbil7cmV0dXJuXCJBc3luY0Z1bmN0aW9uXCI9PT1pLnNyYy5jb25zdHJ1Y3Rvci5uYW1lP2kuc3JjKGUpLnRoZW4odCxuKTp0KGkuc3JjKGUpKX0pKS50aGVuKHQsbik6dChpLnNyYyl9KSkudGhlbigoZnVuY3Rpb24oZSl7dHJ5e3JldHVybiB0LmZlZWRiYWNrPWkuc3RvcmU9ZSxmKFwicmVzcG9uc2VcIix0KSxuKCl9Y2F0Y2godCl7cmV0dXJuIHIodCl9fSkscil9KSl9LGg9ZnVuY3Rpb24odCxlKXt2YXIgbj1lLmRhdGEscj1lLnNlYXJjaEVuZ2luZSxpPVtdO24uc3RvcmUuZm9yRWFjaCgoZnVuY3Rpb24obyx1KXt2YXIgYT1mdW5jdGlvbihuKXt2YXIgcz1uP29bbl06byx1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHI/cih0LHMpOnAodCxzLHttb2RlOnIsZGlhY3JpdGljczplLmRpYWNyaXRpY3MsaGlnaGxpZ2h0OmUucmVzdWx0SXRlbS5oaWdobGlnaHR9KTtpZih1KXt2YXIgYT17bWF0Y2g6dSx2YWx1ZTpvfTtuJiYoYS5rZXk9biksaS5wdXNoKGEpfX07aWYobi5rZXlzKXt2YXIgYyxsPWZ1bmN0aW9uKHQsZSl7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdfHx0W1wiQEBpdGVyYXRvclwiXTtpZighbil7aWYoQXJyYXkuaXNBcnJheSh0KXx8KG49cyh0KSl8fGUpe24mJih0PW4pO3ZhciByPTAsaT1mdW5jdGlvbigpe307cmV0dXJue3M6aSxuOmZ1bmN0aW9uKCl7cmV0dXJuIHI+PXQubGVuZ3RoP3tkb25lOiEwfTp7ZG9uZTohMSx2YWx1ZTp0W3IrK119fSxlOmZ1bmN0aW9uKHQpe3Rocm93IHR9LGY6aX19dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfXZhciBvLHU9ITAsYT0hMTtyZXR1cm57czpmdW5jdGlvbigpe249bi5jYWxsKHQpfSxuOmZ1bmN0aW9uKCl7dmFyIHQ9bi5uZXh0KCk7cmV0dXJuIHU9dC5kb25lLHR9LGU6ZnVuY3Rpb24odCl7YT0hMCxvPXR9LGY6ZnVuY3Rpb24oKXt0cnl7dXx8bnVsbD09bi5yZXR1cm58fG4ucmV0dXJuKCl9ZmluYWxseXtpZihhKXRocm93IG99fX19KG4ua2V5cyk7dHJ5e2ZvcihsLnMoKTshKGM9bC5uKCkpLmRvbmU7KWEoYy52YWx1ZSl9Y2F0Y2godCl7bC5lKHQpfWZpbmFsbHl7bC5mKCl9fWVsc2UgYSgpfSkpLG4uZmlsdGVyJiYoaT1uLmZpbHRlcihpKSk7dmFyIG89aS5zbGljZSgwLGUucmVzdWx0c0xpc3QubWF4UmVzdWx0cyk7ZS5mZWVkYmFjaz17cXVlcnk6dCxtYXRjaGVzOmkscmVzdWx0czpvfSxmKFwicmVzdWx0c1wiLGUpfSxtPVwiYXJpYS1leHBhbmRlZFwiLHY9XCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIix5PVwiYXJpYS1zZWxlY3RlZFwiLGI9ZnVuY3Rpb24odCxlKXt0LmZlZWRiYWNrLnNlbGVjdGlvbj1yKHtpbmRleDplfSx0LmZlZWRiYWNrLnJlc3VsdHNbZV0pfSxnPWZ1bmN0aW9uKHQpe3QuaXNPcGVufHwoKHQud3JhcHBlcnx8dC5pbnB1dCkuc2V0QXR0cmlidXRlKG0sITApLHQubGlzdC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIiksdC5pc09wZW49ITAsZihcIm9wZW5cIix0KSl9LHc9ZnVuY3Rpb24odCl7dC5pc09wZW4mJigodC53cmFwcGVyfHx0LmlucHV0KS5zZXRBdHRyaWJ1dGUobSwhMSksdC5pbnB1dC5zZXRBdHRyaWJ1dGUodixcIlwiKSx0Lmxpc3Quc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsXCJcIiksdC5pc09wZW49ITEsZihcImNsb3NlXCIsdCkpfSxPPWZ1bmN0aW9uKHQsZSl7dmFyIG49ZS5yZXN1bHRJdGVtLHI9ZS5saXN0LmdldEVsZW1lbnRzQnlUYWdOYW1lKG4udGFnKSxvPSEhbi5zZWxlY3RlZCYmbi5zZWxlY3RlZC5zcGxpdChcIiBcIik7aWYoZS5pc09wZW4mJnIubGVuZ3RoKXt2YXIgcyx1LGE9ZS5jdXJzb3I7dD49ci5sZW5ndGgmJih0PTApLHQ8MCYmKHQ9ci5sZW5ndGgtMSksZS5jdXJzb3I9dCxhPi0xJiYoclthXS5yZW1vdmVBdHRyaWJ1dGUoeSksbyYmKHU9clthXS5jbGFzc0xpc3QpLnJlbW92ZS5hcHBseSh1LGkobykpKSxyW3RdLnNldEF0dHJpYnV0ZSh5LCEwKSxvJiYocz1yW3RdLmNsYXNzTGlzdCkuYWRkLmFwcGx5KHMsaShvKSksZS5pbnB1dC5zZXRBdHRyaWJ1dGUodixyW2UuY3Vyc29yXS5pZCksZS5saXN0LnNjcm9sbFRvcD1yW3RdLm9mZnNldFRvcC1lLmxpc3QuY2xpZW50SGVpZ2h0K3JbdF0uY2xpZW50SGVpZ2h0KzUsZS5mZWVkYmFjay5jdXJzb3I9ZS5jdXJzb3IsYihlLHQpLGYoXCJuYXZpZ2F0ZVwiLGUpfX0sQT1mdW5jdGlvbih0KXtPKHQuY3Vyc29yKzEsdCl9LFM9ZnVuY3Rpb24odCl7Tyh0LmN1cnNvci0xLHQpfSxqPWZ1bmN0aW9uKHQsZSxuKXsobj1uPj0wP246dC5jdXJzb3IpPDB8fCh0LmZlZWRiYWNrLmV2ZW50PWUsYih0LG4pLGYoXCJzZWxlY3Rpb25cIix0KSx3KHQpKX07ZnVuY3Rpb24gayh0LGUpe3ZhciBuPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihpLG8pe3ZhciBzLHU7cmV0dXJuIHM9ZXx8KCh1PXQuaW5wdXQpaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50fHx1IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudD91LnZhbHVlOnUuaW5uZXJIVE1MKSxmdW5jdGlvbih0LGUsbil7cmV0dXJuIGU/ZSh0KTp0Lmxlbmd0aD49bn0ocz10LnF1ZXJ5P3QucXVlcnkocyk6cyx0LnRyaWdnZXIsdC50aHJlc2hvbGQpP2QodCxzKS50aGVuKChmdW5jdGlvbihlKXt0cnl7cmV0dXJuIHQuZmVlZGJhY2sgaW5zdGFuY2VvZiBFcnJvcj9pKCk6KGgocyx0KSx0LnJlc3VsdHNMaXN0JiZmdW5jdGlvbih0KXt2YXIgZT10LnJlc3VsdHNMaXN0LG49dC5saXN0LGk9dC5yZXN1bHRJdGVtLG89dC5mZWVkYmFjayxzPW8ubWF0Y2hlcyx1PW8ucmVzdWx0cztpZih0LmN1cnNvcj0tMSxuLmlubmVySFRNTD1cIlwiLHMubGVuZ3RofHxlLm5vUmVzdWx0cyl7dmFyIGM9bmV3IERvY3VtZW50RnJhZ21lbnQ7dS5mb3JFYWNoKChmdW5jdGlvbih0LGUpe3ZhciBuPWEoaS50YWcscih7aWQ6XCJcIi5jb25jYXQoaS5pZCxcIl9cIikuY29uY2F0KGUpLHJvbGU6XCJvcHRpb25cIixpbm5lckhUTUw6dC5tYXRjaCxpbnNpZGU6Y30saS5jbGFzcyYme2NsYXNzOmkuY2xhc3N9KSk7aS5lbGVtZW50JiZpLmVsZW1lbnQobix0KX0pKSxuLmFwcGVuZChjKSxlLmVsZW1lbnQmJmUuZWxlbWVudChuLG8pLGcodCl9ZWxzZSB3KHQpfSh0KSxjLmNhbGwobikpfWNhdGNoKHQpe3JldHVybiBvKHQpfX0pLG8pOih3KHQpLGMuY2FsbChuKSk7ZnVuY3Rpb24gYygpe3JldHVybiBpKCl9fSkpfXZhciBMPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIHQpZm9yKHZhciByIGluIHRbbl0pZShuLHIpfSxUPWZ1bmN0aW9uKHQpe3ZhciBlLG4saSxvPXQuZXZlbnRzLHM9KGU9ZnVuY3Rpb24oKXtyZXR1cm4gayh0KX0sbj10LmRlYm91bmNlLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGkpLGk9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gZSgpfSksbil9KSx1PXQuZXZlbnRzPXIoe2lucHV0OnIoe30sbyYmby5pbnB1dCl9LHQucmVzdWx0c0xpc3QmJntsaXN0Om8/cih7fSxvLmxpc3QpOnt9fSksYT17aW5wdXQ6e2lucHV0OmZ1bmN0aW9uKCl7cygpfSxrZXlkb3duOmZ1bmN0aW9uKGUpeyFmdW5jdGlvbih0LGUpe3N3aXRjaCh0LmtleUNvZGUpe2Nhc2UgNDA6Y2FzZSAzODp0LnByZXZlbnREZWZhdWx0KCksNDA9PT10LmtleUNvZGU/QShlKTpTKGUpO2JyZWFrO2Nhc2UgMTM6ZS5zdWJtaXR8fHQucHJldmVudERlZmF1bHQoKSxlLmN1cnNvcj49MCYmaihlLHQpO2JyZWFrO2Nhc2UgOTplLnJlc3VsdHNMaXN0LnRhYlNlbGVjdCYmZS5jdXJzb3I+PTAmJmooZSx0KTticmVhaztjYXNlIDI3OmUuaW5wdXQudmFsdWU9XCJcIixmKFwiY2xlYXJcIixlKSx3KGUpfX0oZSx0KX0sYmx1cjpmdW5jdGlvbigpe3codCl9fSxsaXN0Onttb3VzZWRvd246ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpfSxjbGljazpmdW5jdGlvbihlKXshZnVuY3Rpb24odCxlKXt2YXIgbj1lLnJlc3VsdEl0ZW0udGFnLnRvVXBwZXJDYXNlKCkscj1BcnJheS5mcm9tKGUubGlzdC5xdWVyeVNlbGVjdG9yQWxsKG4pKSxpPXQudGFyZ2V0LmNsb3Nlc3Qobik7aSYmaS5ub2RlTmFtZT09PW4mJmooZSx0LHIuaW5kZXhPZihpKSl9KGUsdCl9fX07TChhLChmdW5jdGlvbihlLG4peyh0LnJlc3VsdHNMaXN0fHxcImlucHV0XCI9PT1uKSYmKHVbZV1bbl18fCh1W2VdW25dPWFbZV1bbl0pKX0pKSxMKHUsKGZ1bmN0aW9uKGUsbil7dFtlXS5hZGRFdmVudExpc3RlbmVyKG4sdVtlXVtuXSl9KSl9O2Z1bmN0aW9uIEUodCl7dmFyIGU9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4saSl7dmFyIG8scyx1O2lmKG89dC5wbGFjZUhvbGRlcix1PXtyb2xlOlwiY29tYm9ib3hcIixcImFyaWEtb3duc1wiOihzPXQucmVzdWx0c0xpc3QpLmlkLFwiYXJpYS1oYXNwb3B1cFwiOiEwLFwiYXJpYS1leHBhbmRlZFwiOiExfSxhKHQuaW5wdXQscihyKHtcImFyaWEtY29udHJvbHNcIjpzLmlkLFwiYXJpYS1hdXRvY29tcGxldGVcIjpcImJvdGhcIn0sbyYme3BsYWNlaG9sZGVyOm99KSwhdC53cmFwcGVyJiZyKHt9LHUpKSksdC53cmFwcGVyJiYodC53cmFwcGVyPWEoXCJkaXZcIixyKHthcm91bmQ6dC5pbnB1dCxjbGFzczp0Lm5hbWUrXCJfd3JhcHBlclwifSx1KSkpLHMmJih0Lmxpc3Q9YShzLnRhZyxyKHtkZXN0OltzLmRlc3RpbmF0aW9uLHMucG9zaXRpb25dLGlkOnMuaWQscm9sZTpcImxpc3Rib3hcIixoaWRkZW46XCJoaWRkZW5cIn0scy5jbGFzcyYme2NsYXNzOnMuY2xhc3N9KSkpLFQodCksdC5kYXRhLmNhY2hlKXJldHVybiBkKHQpLnRoZW4oKGZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gYy5jYWxsKGUpfWNhdGNoKHQpe3JldHVybiBpKHQpfX0pLGkpO2Z1bmN0aW9uIGMoKXtyZXR1cm4gZihcImluaXRcIix0KSxuKCl9cmV0dXJuIGMuY2FsbChlKX0pKX1mdW5jdGlvbiBQKHQpe3ZhciBlPXQucHJvdG90eXBlO2UuaW5pdD1mdW5jdGlvbigpe0UodGhpcyl9LGUuc3RhcnQ9ZnVuY3Rpb24odCl7ayh0aGlzLHQpfSxlLnVuSW5pdD1mdW5jdGlvbigpe2lmKHRoaXMud3JhcHBlcil7dmFyIHQ9dGhpcy53cmFwcGVyLnBhcmVudE5vZGU7dC5pbnNlcnRCZWZvcmUodGhpcy5pbnB1dCx0aGlzLndyYXBwZXIpLHQucmVtb3ZlQ2hpbGQodGhpcy53cmFwcGVyKX12YXIgZTtMKChlPXRoaXMpLmV2ZW50cywoZnVuY3Rpb24odCxuKXtlW3RdLnJlbW92ZUV2ZW50TGlzdGVuZXIobixlLmV2ZW50c1t0XVtuXSl9KSl9LGUub3Blbj1mdW5jdGlvbigpe2codGhpcyl9LGUuY2xvc2U9ZnVuY3Rpb24oKXt3KHRoaXMpfSxlLmdvVG89ZnVuY3Rpb24odCl7Tyh0LHRoaXMpfSxlLm5leHQ9ZnVuY3Rpb24oKXtBKHRoaXMpfSxlLnByZXZpb3VzPWZ1bmN0aW9uKCl7Uyh0aGlzKX0sZS5zZWxlY3Q9ZnVuY3Rpb24odCl7aih0aGlzLG51bGwsdCl9LGUuc2VhcmNoPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gcCh0LGUsbil9fXJldHVybiBmdW5jdGlvbiB0KGUpe3RoaXMub3B0aW9ucz1lLHRoaXMuaWQ9dC5pbnN0YW5jZXM9KHQuaW5zdGFuY2VzfHwwKSsxLHRoaXMubmFtZT1cImF1dG9Db21wbGV0ZVwiLHRoaXMud3JhcHBlcj0xLHRoaXMudGhyZXNob2xkPTEsdGhpcy5kZWJvdW5jZT0wLHRoaXMucmVzdWx0c0xpc3Q9e3Bvc2l0aW9uOlwiYWZ0ZXJlbmRcIix0YWc6XCJ1bFwiLG1heFJlc3VsdHM6NX0sdGhpcy5yZXN1bHRJdGVtPXt0YWc6XCJsaVwifSxmdW5jdGlvbih0KXt2YXIgZT10Lm5hbWUsbj10Lm9wdGlvbnMscj10LnJlc3VsdHNMaXN0LGk9dC5yZXN1bHRJdGVtO2Zvcih2YXIgcyBpbiBuKWlmKFwib2JqZWN0XCI9PT1vKG5bc10pKWZvcih2YXIgYSBpbiB0W3NdfHwodFtzXT17fSksbltzXSl0W3NdW2FdPW5bc11bYV07ZWxzZSB0W3NdPW5bc107dC5zZWxlY3Rvcj10LnNlbGVjdG9yfHxcIiNcIitlLHIuZGVzdGluYXRpb249ci5kZXN0aW5hdGlvbnx8dC5zZWxlY3RvcixyLmlkPXIuaWR8fGUrXCJfbGlzdF9cIit0LmlkLGkuaWQ9aS5pZHx8ZStcIl9yZXN1bHRcIix0LmlucHV0PXUodC5zZWxlY3Rvcil9KHRoaXMpLFAuY2FsbCh0aGlzLHQpLEUodGhpcyl9fSxcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmF1dG9Db21wbGV0ZT1lKCk7XG4iLCJpbXBvcnQgJy4vc2Nzcy9nb2NoZWNrb3V0LWRlc2N0b3Auc2Nzcyc7XG5pbXBvcnQgJ0B0YXJla3JhYWZhdC9hdXRvY29tcGxldGUuanMvZGlzdC9jc3MvYXV0b0NvbXBsZXRlLjAyLmNzcydcbi8vIHJlcXVpcmUoJy4vanMvcHJlbG9hZGVyJylcbi8vIHJlcXVpcmUoJy4vanMvYnRuVXAnKVxuXG5yZXF1aXJlKCcuL2pzL21hc2tQaG9uZScpXG5pbXBvcnQgYXV0b0NvbXBsZXRlIGZyb20gJ0B0YXJla3JhYWZhdC9hdXRvY29tcGxldGUuanMnO1xuXG4vLyBjb25zdCBhcmVhID0gbmV3IGF1dG9Db21wbGV0ZSh7XG4vLyAgIHNlbGVjdG9yOiBcIiNhcmVhXCIsXG4vLyAgIGRhdGE6IHtcbi8vICAgICBzcmM6IGFzeW5jIChxdWVyeSkgPT4ge1xuLy8gICAgICAgdHJ5IHtcbi8vICAgICAgICAgLy8gTG9hZGluZyBwbGFjZWhvbGRlciB0ZXh0XG4vLyAgICAgICAgIGRvY3VtZW50XG4vLyAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYXJlYVwiKVxuLy8gICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkxvYWRpbmcuLi5cIik7XG4vLyAgICAgICAgIC8vIEZldGNoIEV4dGVybmFsIERhdGEgU291cmNlXG4vLyAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGF3YWl0IGZldGNoKFxuLy8gICAgICAgICAgIFwiaHR0cHM6Ly9zZWNvbm9tMjQucnUvcHJlb3JkZXIvP2FjdGlvbj1zZXRSZWdpb24mdGVzdD0xJnF1ZXJ5PVwiK3F1ZXJ5XG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzb3VyY2UuanNvbigpO1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAgICAgLy8gUG9zdCBMb2FkaW5nIHBsYWNlaG9sZGVyIHRleHRcbi8vICAgICAgICAgZG9jdW1lbnRcbi8vICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJhcmVhXCIpXG4vLyAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIGFyZWEucGxhY2VIb2xkZXIpO1xuLy8gICAgICAgICAvLyBSZXR1cm5zIEZldGNoZWQgZGF0YVxuLy8gICAgICAgICByZXR1cm4gZGF0YTtcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIHJldHVybiBlcnJvcjtcbi8vICAgICAgIH1cbi8vICAgICB9LFxuLy8gICAgIGtleXM6IFtcInZhbHVlXCJdLFxuLy8gICAgIGNhY2hlOiBmYWxzZSxcbi8vICAgICBmaWx0ZXI6IChsaXN0KSA9PiB7XG4vLyAgICAgICAvLyBGaWx0ZXIgZHVwbGljYXRlc1xuLy8gICAgICAgLy8gaW5jYXNlIG9mIG11bHRpcGxlIGRhdGEga2V5cyB1c2FnZVxuLy8gICAgICAgY29uc3QgZmlsdGVyZWRSZXN1bHRzID0gQXJyYXkuZnJvbShcbi8vICAgICAgICAgbmV3IFNldChsaXN0Lm1hcCgodmFsdWUpID0+IHZhbHVlLm1hdGNoKSlcbi8vICAgICAgICkubWFwKChuYW1lKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBsaXN0LmZpbmQoKHZhbHVlKSA9PiB2YWx1ZS5tYXRjaCA9PT0gbmFtZSk7XG4vLyAgICAgICB9KTtcbi8vXG4vLyAgICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgcGxhY2VIb2xkZXI6IFwi0J/QvtC40YHQuiDQvtCx0LvQsNGB0YLQuC4uLlwiLFxuLy8gICB0aHJlc2hvbGQ6Myxcbi8vICAgcmVzdWx0c0xpc3Q6IHtcbi8vICAgICBlbGVtZW50OiAobGlzdCwgZGF0YSkgPT4ge1xuLy8gICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuLy8gICAgICAgaWYgKGRhdGEucmVzdWx0cy5sZW5ndGggPiAwKSB7XG4vLyAgICAgICAgIGluZm8uaW5uZXJIVE1MID0gYGA7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBpbmZvLmlubmVySFRNTCA9IGDQndC1INC90LDQudC00LXQvdC+YDtcbi8vICAgICAgIH1cbi8vICAgICAgIGxpc3QucHJlcGVuZChpbmZvKTtcbi8vICAgICB9LFxuLy8gICAgIG5vUmVzdWx0czogdHJ1ZSxcbi8vICAgICBtYXhSZXN1bHRzOiAxNSxcbi8vICAgICB0YWJTZWxlY3Q6IHRydWVcbi8vICAgfSxcbi8vICAgcmVzdWx0SXRlbToge1xuLy8gICAgIGVsZW1lbnQ6IChpdGVtLCBkYXRhKSA9PiB7XG4vLyAgICAgICAvLyBNb2RpZnkgUmVzdWx0cyBJdGVtIFN0eWxlXG4vLyAgICAgICBpdGVtLnN0eWxlID0gXCJkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XCI7XG4vLyAgICAgICAvLyBNb2RpZnkgUmVzdWx0cyBJdGVtIENvbnRlbnRcbi8vICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYFxuLy8gICAgICAgPHNwYW4gc3R5bGU9XCJ0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjtcIj5cbi8vICAgICAgICAgJHtkYXRhLm1hdGNofVxuLy8gICAgICAgPC9zcGFuPlxuLy8gICAgICAgYDtcbi8vICAgICB9LFxuLy8gICAgIGhpZ2hsaWdodDogdHJ1ZVxuLy8gICB9LFxuLy8gICBldmVudHM6IHtcbi8vICAgICBpbnB1dDoge1xuLy8gICAgICAgZm9jdXM6ICgpID0+IHtcbi8vICAgICAgICAgaWYgKGFyZWEuaW5wdXQudmFsdWUubGVuZ3RoKSBhcmVhLnN0YXJ0KCk7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9KTtcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJlYVwiKS5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0aW9uXCIsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICBjb25zdCBmZWVkYmFjayA9IGV2ZW50LmRldGFpbDtcbi8vICAgYXJlYS5pbnB1dC5ibHVyKCk7XG4vLyAgIC8vIFByZXBhcmUgVXNlcidzIFNlbGVjdGVkIFZhbHVlXG4vLyAgIGNvbnN0IHNlbGVjdGlvbiA9IGZlZWRiYWNrLnNlbGVjdGlvbi52YWx1ZVtmZWVkYmFjay5zZWxlY3Rpb24ua2V5XTtcbi8vICAgY29uc3Qgc2VsZWN0aW9uMiA9IGZlZWRiYWNrLnNlbGVjdGlvbi52YWx1ZVsnaWQnXTtcbi8vICAgLy8gUmVuZGVyIHNlbGVjdGVkIGNob2ljZSB0byBzZWxlY3Rpb24gZGl2XG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJlYVNlbGVjdGlvblwiKS5pbm5lckhUTUwgPSBzZWxlY3Rpb24yO1xuLy8gICAvLyBSZXBsYWNlIElucHV0IHZhbHVlIHdpdGggdGhlIHNlbGVjdGVkIHZhbHVlXG4vLyAgIGFyZWEuaW5wdXQudmFsdWUgPSBzZWxlY3Rpb247XG4vLyAgIC8vIENvbnNvbGUgbG9nIGF1dG9Db21wbGV0ZSBkYXRhIGZlZWRiYWNrXG4vLyAgIGNvbnNvbGUubG9nKGZlZWRiYWNrKTtcbi8vIH0pO1xuLy8gY29uc3QgdG93biA9IG5ldyBhdXRvQ29tcGxldGUoe1xuLy8gICBzZWxlY3RvcjogXCIjdG93blwiLFxuLy8gICBkYXRhOiB7XG4vLyAgICAgc3JjOiBhc3luYyAocXVlcnkpID0+IHtcbi8vICAgICAgIHRyeSB7XG4vLyAgICAgICAgIC8vIExvYWRpbmcgcGxhY2Vob2xkZXIgdGV4dFxuLy8gICAgICAgICBkb2N1bWVudFxuLy8gICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcInRvd25cIilcbi8vICAgICAgICAgICAuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJMb2FkaW5nLi4uXCIpO1xuLy8gICAgICAgICAvLyBGZXRjaCBFeHRlcm5hbCBEYXRhIFNvdXJjZVxuLy9cbi8vICAgICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgICAgICAgXCJodHRwczovL3NlY29ub20yNC5ydS9wcmVvcmRlci8/YWN0aW9uPXNldENpdHkmcXVlcnk9XCIrcXVlcnkrXCImaWQ9OTJiMzAwMTQtNGQ1Mi00ZTJlLTg5MmQtOTI4MTQyYjkyNGJmXCJcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHNvdXJjZS5qc29uKCk7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlzT2JqZWN0KGRhdGEpKTtcbi8vICAgICAgICAgLy8gUG9zdCBMb2FkaW5nIHBsYWNlaG9sZGVyIHRleHRcbi8vICAgICAgICAgZG9jdW1lbnRcbi8vICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJ0b3duXCIpXG4vLyAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHRvd24ucGxhY2VIb2xkZXIpO1xuLy8gICAgICAgICAvLyBSZXR1cm5zIEZldGNoZWQgZGF0YVxuLy8gICAgICAgICByZXR1cm4gZGF0YTtcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIHJldHVybiBlcnJvcjtcbi8vICAgICAgIH1cbi8vICAgICB9LFxuLy8gICAgIGtleXM6IFtcInZhbHVlXCJdLFxuLy8gICAgIGNhY2hlOiBmYWxzZSxcbi8vICAgICBmaWx0ZXI6IChsaXN0KSA9PiB7XG4vLyAgICAgICAvLyBGaWx0ZXIgZHVwbGljYXRlc1xuLy8gICAgICAgLy8gaW5jYXNlIG9mIG11bHRpcGxlIGRhdGEga2V5cyB1c2FnZVxuLy8gICAgICAgY29uc3QgZmlsdGVyZWRSZXN1bHRzID0gQXJyYXkuZnJvbShcbi8vICAgICAgICAgbmV3IFNldChsaXN0Lm1hcCgodmFsdWUpID0+IHZhbHVlLm1hdGNoKSlcbi8vICAgICAgICkubWFwKChuYW1lKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBsaXN0LmZpbmQoKHZhbHVlKSA9PiB2YWx1ZS5tYXRjaCA9PT0gbmFtZSk7XG4vLyAgICAgICB9KTtcbi8vXG4vLyAgICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuLy8gICAgIH1cbi8vICAgfSxcbi8vICAgcGxhY2VIb2xkZXI6IFwi0J/QvtC40YHQuiDQs9C+0YDQvtC00LAuLi5cIixcbi8vICAgdGhyZXNob2xkOjMsXG4vLyAgIHJlc3VsdHNMaXN0OiB7XG4vLyAgICAgZWxlbWVudDogKGxpc3QsIGRhdGEpID0+IHtcbi8vICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgICAgIGlmIChkYXRhLnJlc3VsdHMubGVuZ3RoID4gMCkge1xuLy8gICAgICAgICBpbmZvLmlubmVySFRNTCA9IGBgO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgaW5mby5pbm5lckhUTUwgPSBg0J3QtSDQvdCw0LnQtNC10L3QvmA7XG4vLyAgICAgICB9XG4vLyAgICAgICBsaXN0LnByZXBlbmQoaW5mbyk7XG4vLyAgICAgfSxcbi8vICAgICBub1Jlc3VsdHM6IHRydWUsXG4vLyAgICAgbWF4UmVzdWx0czogMTUsXG4vLyAgICAgdGFiU2VsZWN0OiB0cnVlXG4vLyAgIH0sXG4vLyAgIHJlc3VsdEl0ZW06IHtcbi8vICAgICBlbGVtZW50OiAoaXRlbSwgZGF0YSkgPT4ge1xuLy8gICAgICAgLy8gTW9kaWZ5IFJlc3VsdHMgSXRlbSBTdHlsZVxuLy8gICAgICAgaXRlbS5zdHlsZSA9IFwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1wiO1xuLy8gICAgICAgLy8gTW9kaWZ5IFJlc3VsdHMgSXRlbSBDb250ZW50XG4vLyAgICAgICBpdGVtLmlubmVySFRNTCA9IGBcbi8vICAgICAgIDxzcGFuIHN0eWxlPVwidGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47XCI+XG4vLyAgICAgICAgICR7ZGF0YS5tYXRjaH1cbi8vICAgICAgIDwvc3Bhbj5cbi8vICAgICAgIGA7XG4vLyAgICAgfSxcbi8vICAgICBoaWdobGlnaHQ6IHRydWVcbi8vICAgfSxcbi8vICAgZXZlbnRzOiB7XG4vLyAgICAgaW5wdXQ6IHtcbi8vICAgICAgIGZvY3VzOiAoKSA9PiB7XG4vLyAgICAgICAgIGlmICh0b3duLmlucHV0LnZhbHVlLmxlbmd0aCkgdG93bi5zdGFydCgpO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfSk7XG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvd25cIikuYWRkRXZlbnRMaXN0ZW5lcihcInNlbGVjdGlvblwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbi8vICAgY29uc3QgZmVlZGJhY2sgPSBldmVudC5kZXRhaWw7XG4vLyAgIHRvd24uaW5wdXQuYmx1cigpO1xuLy8gICAvLyBQcmVwYXJlIFVzZXIncyBTZWxlY3RlZCBWYWx1ZVxuLy8gICBjb25zdCBzZWxlY3Rpb24gPSBmZWVkYmFjay5zZWxlY3Rpb24udmFsdWUudmFsdWU7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGlvbilcbi8vICAgLy8gUmVuZGVyIHNlbGVjdGVkIGNob2ljZSB0byBzZWxlY3Rpb24gZGl2XG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG93blNlbGVjdGlvblwiKS5pbm5lckhUTUwgPSBzZWxlY3Rpb247XG4vLyAgIC8vIFJlcGxhY2UgSW5wdXQgdmFsdWUgd2l0aCB0aGUgc2VsZWN0ZWQgdmFsdWVcbi8vICAgdG93bi5pbnB1dC52YWx1ZSA9IHNlbGVjdGlvbjtcbi8vICAgLy8gQ29uc29sZSBsb2cgYXV0b0NvbXBsZXRlIGRhdGEgZmVlZGJhY2tcbi8vICAgY29uc29sZS5sb2coZmVlZGJhY2spO1xuLy8gfSk7XG4iLCJmdW5jdGlvbiBtYXNrUGhvbmUoc2VsZWN0b3IsIG1hc2tlZCA9ICcrNyAoX19fKSBfX18tX18tX18nKSB7XG4gIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgZnVuY3Rpb24gbWFzayhldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gbWFza2VkLFxuICAgICAgZGVmID0gdGVtcGxhdGUucmVwbGFjZSgvXFxEL2csIFwiXCIpLFxuICAgICAgdmFsID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgY29uc29sZS5sb2codGVtcGxhdGUpO1xuICAgIGxldCBpID0gMCxcbiAgICAgIG5ld1ZhbHVlID0gdGVtcGxhdGUucmVwbGFjZSgvW19cXGRdL2csIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBpIDwgdmFsLmxlbmd0aCA/IHZhbC5jaGFyQXQoaSsrKSB8fCBkZWYuY2hhckF0KGkpIDogYTtcbiAgICAgIH0pO1xuICAgIGkgPSBuZXdWYWx1ZS5pbmRleE9mKFwiX1wiKTtcbiAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUuc2xpY2UoMCwgaSk7XG4gICAgfVxuICAgIGxldCByZWcgPSB0ZW1wbGF0ZS5zdWJzdHIoMCwgdGhpcy52YWx1ZS5sZW5ndGgpLnJlcGxhY2UoL18rL2csXG4gICAgICBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gXCJcXFxcZHsxLFwiICsgYS5sZW5ndGggKyBcIn1cIjtcbiAgICAgIH0pLnJlcGxhY2UoL1srKCldL2csIFwiXFxcXCQmXCIpO1xuICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyByZWcgKyBcIiRcIik7XG4gICAgaWYgKCFyZWcudGVzdCh0aGlzLnZhbHVlKSB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8IDUgfHwga2V5Q29kZSA+IDQ3ICYmIGtleUNvZGUgPCA1OCkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH1cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJibHVyXCIgJiYgdGhpcy52YWx1ZS5sZW5ndGggPCA1KSB7XG4gICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICB9XG5cbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbSBvZiBlbGVtcykge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG1hc2spO1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIG1hc2spO1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgbWFzayk7XG4gIH1cblxufVxuXG5tYXNrUGhvbmUoJy5waG9uZXZhbGlkYXRpb24nKVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJhdXRvQ29tcGxldGUiLCJtYXNrUGhvbmUiLCJzZWxlY3RvciIsIm1hc2tlZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImVsZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFzayIsImV2ZW50Iiwia2V5Q29kZSIsInRlbXBsYXRlIiwiZGVmIiwicmVwbGFjZSIsInZhbCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImkiLCJuZXdWYWx1ZSIsImEiLCJjaGFyQXQiLCJpbmRleE9mIiwic2xpY2UiLCJyZWciLCJzdWJzdHIiLCJSZWdFeHAiLCJ0ZXN0IiwidHlwZSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJlbGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVyciIsImUiLCJmIl0sInNvdXJjZVJvb3QiOiIifQ==