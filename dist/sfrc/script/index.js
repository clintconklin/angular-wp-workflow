webpackJsonp([0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__less_styles_less__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__less_styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__less_styles_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__script_app__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__script_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__script_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__script_controller__ = __webpack_require__(7);



 // base app

console.log('hi from sfrc (default)!');

// a controller
__WEBPACK_IMPORTED_MODULE_3__script_app___default.a.controller('WreckedAngularController', ['$scope', function($scope) {
	$scope.greeting = 'Oh, why hullo there... from angular!';
}]);

// included controller

__WEBPACK_IMPORTED_MODULE_3__script_app___default.a.controller('WreckedAngularController2', [ '$scope', __WEBPACK_IMPORTED_MODULE_4__script_controller__["a" /* default */] ]);

__WEBPACK_IMPORTED_MODULE_1_jquery___default()(function() {
	__WEBPACK_IMPORTED_MODULE_1_jquery___default()('#wrecked-angular').before('<p>Hai sfrc, from jquery!</p>');
});



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

const angular = __webpack_require__(0);

module.exports = angular.module('WreckedApp',[]);



/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*WreckedApp.controller('WreckedAngularController2', ['$scope', function($scope) {
	$scope.greeting = 'sfrc custom controller!';
}]);*/

/* harmony default export */ __webpack_exports__["a"] = function($scope) {
	$scope.greeting = 'sfrc custom controller';
};


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[12]);