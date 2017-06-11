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

    setTimeout(function() {
        third.classList.add('completely');
    }, 1500);

  } else if ( event.originalEvent.wheelDelta > 0 && $(second).hasClass('completely') === true ){
    first.classList.remove( 'old-hat' );
    second.classList.remove( 'completely')

    dot[1].classList.remove('active');
    dot[0].classList.add('active');

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
    setTimeout(function() {
        four.classList.add('completely');
    }, 1500);

  } else if (event.originalEvent.wheelDelta > 0 && $(third).hasClass('completely') === true){
        second.classList.remove( 'old-hat' );
        third.classList.remove( 'completely');

        dot[2].classList.remove('active');
        dot[1].classList.add('active');
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
    setTimeout(function() {
        five.classList.add('completely');
    }, 1500);

  } else if (event.originalEvent.wheelDelta > 0 && $(four).hasClass('completely') === true){
        third.classList.remove( 'old-hat' );
        four.classList.remove( 'completely');

        dot[3].classList.remove('active');
        dot[2].classList.add('active');
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
    setTimeout(function() {
        six.classList.add('completely');
    }, 1500);

  } else if (event.originalEvent.wheelDelta > 0 && $(five).hasClass('completely') === true){
        four.classList.remove( 'old-hat' );
        five.classList.remove( 'completely');

        dot[4].classList.remove('active');
        dot[3].classList.add('active');
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
    setTimeout(function() {
      five.classList.add('completely');
    }, 1500);

    }
  });
