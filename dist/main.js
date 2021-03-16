/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var sortJson = function sortJson() {
  var a = 2 + 2;
  return a;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sortJson);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/module.js");


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


console.log((0,_module__WEBPACK_IMPORTED_MODULE_0__.default)());
var a = 22;
console.log(a);
window.addEventListener('DOMContentLoaded', function () {
  var incomingDataField = document.querySelector('.enter-output'),
      resultDataField = document.querySelector('#result'),
      list = document.createElement('ul'),
      listRes = document.createElement('ul'),
      examplesDB = document.querySelectorAll('div[data-db]'),
      upload = document.querySelector('#upload'),
      saveBlock = document.querySelector('#saveBlock'),
      btnToJSON = document.querySelector('#toJSON'),
      btnReset = document.querySelector('#resetBtn');
  var mainSet = {},
      setToJSON = {},
      localDB,
      count;
  upload.addEventListener('change', function (e) {
    clearConditions();

    try {
      var _upload = e.target.files[0];
      var reader = new FileReader();
      _upload.value = '';
      reader.addEventListener('load', function () {
        return function (e) {
          mainSet = JSON.parse(e.target.result);
          unpackObject(mainSet);
        };
      }(_upload));
      reader.readAsText(_upload);
    } catch (ex) {
      console.log(ex);
    }
  });
  upload.addEventListener('click', function () {
    upload.value = '';
  });

  (function toSelectDB() {
    for (var i = 0; i < examplesDB.length; i++) {
      examplesDB[i].addEventListener('click', function (e) {
        var receivedPath = e.target.dataset.db;
        createPathToDB(receivedPath);
      });
    }
  })();

  btnReset.addEventListener('click', function () {
    clearConditions();
    localStorage.clear();
  });
  btnToJSON.addEventListener('click', function () {
    btnToJSON.classList.add('visited');
    var json = JSON.stringify(setToJSON);

    if (Object.keys(mainSet).length > 0) {
      addNoticeAfterConvert('filled');
      localStorage.setItem('json', json);
    } else {
      addNoticeAfterConvert('empty');
    }
  });

  function addNoticeAfterConvert(option) {
    var p = document.createElement('p');
    p.classList.add('to-json-prompt');

    if (option === 'filled') {
      p.innerHTML = 'Local storage has updated';
    } else {
      p.innerHTML = 'Select some JSON above';
      p.classList.add('error');
    }

    setTimeout(function () {
      saveBlock.appendChild(p);
    }, 600);
    setTimeout(function () {
      saveBlock.removeChild(p);
      btnToJSON.classList.remove('visited');
    }, 2500);
  }

  function createPathToDB(path) {
    localDB = "/db/".concat(path, ".json");
    getDataFetch(localDB);
  }

  function getDataFetch(_x) {
    return _getDataFetch.apply(this, arguments);
  }

  function _getDataFetch() {
    _getDataFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              clearConditions();
              _context.next = 3;
              return fetch(url);

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              mainSet = _context.sent;
              unpackObject(mainSet);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getDataFetch.apply(this, arguments);
  }

  function unpackObject(data) {
    Object.entries(data).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      if (value !== null && _typeof(value) === 'object') {
        renderIncomingData(value);
        unpackObject(value);
        convertData(value);
      } else {
        renderIncomingData(key, value);
      }
    });
  }

  function renderIncomingData(k, v) {
    incomingDataField.appendChild(list);

    if (_typeof(k) === 'object') {
      count++;
      list.innerHTML += "<h4>Set ".concat(count, ":</h4>");
    } else {
      list.innerHTML += "<li>".concat(k, ": &nbsp;").concat(v, "</li>");
    }
  }

  function clearConditions() {
    count = 0;
    list.innerHTML = '';
    listRes.innerHTML = '';
    deletePropsFromObj(mainSet);
  }

  function deletePropsFromObj(obj) {
    var props = Object.keys(obj);

    for (var i = 0; i < props.length; i++) {
      delete obj[props[i]];
    }
  }

  function renderResultData(resultObj) {
    var output;
    resultDataField.appendChild(listRes);

    for (var k in resultObj) {
      output = "<li>".concat(count, ") <strong>").concat(resultObj.convert_to, ":</strong> ").concat(resultObj.converted, "</li>");
    }

    listRes.innerHTML += output;
  }

  function convertData(set) {
    var inMetres,
        initialProp = set.unit,
        amountProp = set.value,
        requiredProp = set.convert_to,
        result,
        obj = {};

    if (initialProp === requiredProp) {
      set.converted = amountProp;
    } else if (initialProp !== 'm') {
      inMetres = convertInMetres(initialProp, amountProp);
      result = convertInRequiredProp(requiredProp, inMetres);
    } else {
      result = convertInRequiredProp(requiredProp, amountProp);
    }

    set.converted = Math.trunc(result * 100) / 100;
    renderResultData(set);
    obj.unit = requiredProp;
    obj.value = set.converted;
    setToJSON[count] = obj;
    return obj;
  }

  function convertInMetres(init, amount) {
    var end;

    switch (init) {
      case 'mm':
        end = amount / 1000;
        break;

      case 'cm':
        end = amount / 100;
        break;

      case 'km':
        end = amount * 1000;
        break;

      case 'inc':
        end = amount / 39.37;
        break;

      case 'ft':
        end = amount / 3.281;
        break;

      case 'yd':
        end = amount / 1.094;
        break;

      case 'mi':
        end = amount * 1609;
        break;
    }

    return end;
  }

  function convertInRequiredProp(prop, meters) {
    var endedProp;

    switch (prop) {
      case 'mm':
        endedProp = meters * 1000;
        break;

      case 'cm':
        endedProp = meters * 100;
        break;

      case 'm':
        endedProp = meters;
        break;

      case 'km':
        endedProp = meters / 1000;
        break;

      case 'inc':
        endedProp = meters * 39.37;
        break;

      case 'ft':
        endedProp = meters * 3.28;
        break;

      case 'yd':
        endedProp = meters * 1.094;
        break;

      case 'mi':
        endedProp = meters / 1609;
        break;
    }

    return endedProp;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map