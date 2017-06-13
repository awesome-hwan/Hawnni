/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "./backGround"


var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");

// dot의 상태변경
var ulistChild = document.querySelector('.status');
var dot = ulistChild.children;

//회원 박스 컬러 바꾸기
var signup_color = document.querySelector('.signup__button')

//page의 흰부분을 보이지 않기위해서
//마우스가 화면을 끌어오면서 흰부분이 보임
$(window).on('mousewheel', function(event) {
   event.preventDefault();
   event.stopPropagation();

   return false;
});
dot[0].onclick = function () {
  dot[0].classList.add('active');
  first.classList.add('completely');

  dot[1].classList.remove('active');
  dot[2].classList.remove('active');
  dot[3].classList.remove('active');
  dot[4].classList.remove('active');
  dot[5].classList.remove('active');

  first.classList.remove('old-hat');
  second.classList.remove('old-hat');
  third.classList.remove('old-hat');
  four.classList.remove('old-hat');
  five.classList.remove('old-hat');
  six.classList.remove('old-hat');

  second.classList.remove('completely');
  third.classList.remove('completely');
  four.classList.remove('completely');
  five.classList.remove('completely');
  six.classList.remove('completely');

}
dot[1].onclick = function () {
  dot[1].classList.add('active');
  second.classList.add('completely');

  dot[0].classList.remove('active');
  dot[2].classList.remove('active');
  dot[3].classList.remove('active');
  dot[4].classList.remove('active');
  dot[5].classList.remove('active');
  //old-hat
  first.classList.add('old-hat');

  second.classList.remove('old-hat')
  third.classList.remove('old-hat')
  four.classList.remove('old-hat')
  five.classList.remove('old-hat')
  six.classList.remove('old-hat')

  first.classList.remove('completely');
  third.classList.remove('completely');
  four.classList.remove('completely');
  five.classList.remove('completely');
  six.classList.remove('completely');

  signup_color.setAttribute('style','color: #56bc8a')
}
dot[2].onclick = function () {
  dot[2].classList.add('active');
  third.classList.add('completely');

  dot[0].classList.remove('active');
  dot[1].classList.remove('active');
  dot[3].classList.remove('active');
  dot[4].classList.remove('active');
  dot[5].classList.remove('active');

  first.classList.add('old-hat');
  second.classList.add('old-hat');

  third.classList.remove('old-hat');
  four.classList.remove('old-hat');
  five.classList.remove('old-hat');
  six.classList.remove('old-hat');


  first.classList.remove('completely');
  second.classList.remove('completely');
  four.classList.remove('completely');
  five.classList.remove('completely');
  six.classList.remove('completely');

  signup_color.setAttribute('style','color: #a77dc2')
};
dot[3].onclick = function () {
  dot[3].classList.add('active');
  four.classList.add('completely');

  dot[0].classList.remove('active');
  dot[1].classList.remove('active');
  dot[2].classList.remove('active');
  dot[4].classList.remove('active');
  dot[5].classList.remove('active');

  first.classList.add('old-hat');
  second.classList.add('old-hat');
  third.classList.add('old-hat');

  four.classList.remove('old-hat');
  five.classList.remove('old-hat');
  six.classList.remove('old-hat');

  first.classList.remove('completely');
  second.classList.remove('completely');
  third.classList.remove('completely');
  five.classList.remove('completely');
  six.classList.remove('completely');

  signup_color.setAttribute('style','color: #36465d');
};
dot[4].onclick = function () {
  dot[4].classList.add('active');
  five.classList.add('completely');

  dot[0].classList.remove('active');
  dot[1].classList.remove('active');
  dot[2].classList.remove('active');
  dot[3].classList.remove('active');
  dot[5].classList.remove('active');

  first.classList.add('old-hat');
  second.classList.add('old-hat');
  third.classList.add('old-hat');
  four.classList.add('old-hat');


  five.classList.remove('old-hat');
  six.classList.remove('old-hat');

  first.classList.remove('completely');
  second.classList.remove('completely');
  third.classList.remove('completely');
  four.classList.remove('completely');
  six.classList.remove('completely');

  signup_color.setAttribute('style','color: #f2992e');
};
dot[5].onclick = function () {
  dot[5].classList.add('active');
  six.classList.add('completely');

  dot[0].classList.remove('active');
  dot[1].classList.remove('active');
  dot[2].classList.remove('active');
  dot[3].classList.remove('active');
  dot[4].classList.remove('active');

  first.classList.add('old-hat');
  second.classList.add('old-hat');
  third.classList.add('old-hat');
  four.classList.add('old-hat');
  five.classList.add('old-hat');

  six.classList.remove('old-hat');

  first.classList.remove('completely');
  second.classList.remove('completely');
  third.classList.remove('completely');
  four.classList.remove('completely');
  five.classList.remove('completely');

  signup_color.setAttribute('style','color: #36465d');
}



//event.originalEvent.wheelDelta < 0 마우스휠 다운
//event.originalEvent.wheelDelta > 0 마우스휠 업
// function <-> switch
$(first).on("mousewheel", function (event) {

  if( event.originalEvent.wheelDelta < 0 && $(first).hasClass('completely') === true ) {

    first.classList.add( 'old-hat' );
    first.classList.remove('completely');


    dot[0].classList.remove('active');
    dot[1].classList.add('active');

    signup_color.setAttribute('style','color: #56bc8a');
    setTimeout(function() {
        second.classList.add('completely');

    }, 1500);

  }

  });
$(second).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0 && $(second).hasClass('completely') === true ) {

    second.classList.add( 'old-hat' );
    second.classList.remove( 'completely');

    dot[1].classList.remove('active');
    dot[2].classList.add('active');

    signup_color.setAttribute('style','color: #a77dc2');
    setTimeout(function() {
        third.classList.add('completely');

    }, 1500);

  } else if ( event.originalEvent.wheelDelta > 0 && $(second).hasClass('completely') === true ){
    first.classList.remove( 'old-hat' );
    second.classList.remove( 'completely')

    dot[1].classList.remove('active');
    dot[0].classList.add('active');

    signup_color.setAttribute('style','color: #56bc8a');
    setTimeout(function() {
        first.classList.add('completely');

    }, 1500);

  }
  });

$(third).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0 && $(third).hasClass('completely') === true) {

    third.classList.add( 'old-hat' );
    third.classList.remove( 'completely');

    dot[2].classList.remove('active');
    dot[3].classList.add('active');

    signup_color.setAttribute('style','color: #36465d');
    setTimeout(function() {
        four.classList.add('completely');

    }, 1500);

  } else if (event.originalEvent.wheelDelta > 0 && $(third).hasClass('completely') === true){
        second.classList.remove( 'old-hat' );
        third.classList.remove( 'completely');

        dot[2].classList.remove('active');
        dot[1].classList.add('active');

        signup_color.setAttribute('style','color: #56bc8a');
    setTimeout(function() {
      second.classList.add('completely');

    }, 1500);
  }
  });

$(four).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0 && $(four).hasClass('completely') === true) {

    four.classList.add( 'old-hat' );
    four.classList.remove( 'completely');

    dot[3].classList.remove('active');
    dot[4].classList.add('active');

    signup_color.setAttribute('style','color: #f2992e');
    setTimeout(function() {
        five.classList.add('completely');

    }, 1500);

  } else if (event.originalEvent.wheelDelta > 0 && $(four).hasClass('completely') === true){
        third.classList.remove( 'old-hat' );
        four.classList.remove( 'completely');

        dot[3].classList.remove('active');
        dot[2].classList.add('active');

        signup_color.setAttribute('style','color: #a77dc2');
    setTimeout(function() {
      third.classList.add('completely');

    }, 1500);
  }
  });

$(five).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0 && $(five).hasClass('completely') === true) {

    five.classList.add( 'old-hat' );
    five.classList.remove( 'completely');

    dot[4].classList.remove('active');
    dot[5].classList.add('active');

      signup_color.setAttribute('style','color: #36465d');
    setTimeout(function() {
        six.classList.add('completely');

    }, 1500);

  } else if (event.originalEvent.wheelDelta > 0 && $(five).hasClass('completely') === true){
        four.classList.remove( 'old-hat' );
        five.classList.remove( 'completely');

        dot[4].classList.remove('active');
        dot[3].classList.add('active');

          signup_color.setAttribute('style','color: #36465d');
    setTimeout(function() {
      four.classList.add('completely');

    }, 1500);
  }
  });



$(six).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta > 0 && $(six).hasClass('completely') === true) {
    five.classList.remove( 'old-hat' );
    six.classList.remove('completely');

    dot[5].classList.remove('active');
    dot[4].classList.add('active');

    signup_color.setAttribute('style','color: #f2992e');
    setTimeout(function() {
      five.classList.add('completely');

    }, 1500);

    }
  });

//loginbox 나타내기
var signbox = document.querySelector('.signbox');



  document.onmousewheel = function () {
    if ( $(first).hasClass('old-hat') === false) {
    signbox.style.opacity = '0';
  } else if( $(first).hasClass('old-hat') === true ){
    signbox.style.opacity = '1';
  }
};

  document.onclick = function () {
    if ( $(first).hasClass('old-hat') === false) {
    // signbox.style.opacity = '0';
     signbox.setAttribute('style', 'opacity:0');
  } else if( $(first).hasClass('old-hat') === true ){
    // signbox.style.opacity = '1';
    signbox.setAttribute('style', 'opacity:1');
  }
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__backGround__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__backGround___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__backGround__);



/***/ })
/******/ ]);