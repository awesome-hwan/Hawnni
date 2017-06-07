

var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var four = document.querySelector(".four");

// dot의 상태변경
var ulistChild = document.querySelector('.status');
var dot = ulistChild.children


dot[0].onclick = function () {
  dot[0].classList.add('active');
  first.classList.add('completely');

  dot[1].classList.remove('active');
  dot[2].classList.remove('active');
  dot[3].classList.remove('active');

  first.classList.remove('old-hat');
  second.classList.remove('old-hat');

  second.classList.remove('completely');
  third.classList.remove('completely');
  four.classList.remove('completely');

}
dot[1].onclick = function () {
  dot[1].classList.add('active');
  second.classList.add('completely');

  dot[0].classList.remove('active');
  dot[2].classList.remove('active');
  dot[3].classList.remove('active');

  //old-hat
  first.classList.add('old-hat');

  second.classList.remove('old-hat')
  third.classList.remove('old-hat')

  first.classList.remove('completely');
  third.classList.remove('completely');
  four.classList.remove('completely');
}
dot[2].onclick = function () {
  dot[2].classList.add('active');
  third.classList.add('completely');

  dot[0].classList.remove('active');
  dot[1].classList.remove('active');
  dot[3].classList.remove('active');

  first.classList.add('old-hat');
  second.classList.add('old-hat');

  third.classList.remove('old-hat')

  first.classList.remove('completely');
  second.classList.remove('completely');
  four.classList.remove('completely');
}
dot[3].onclick = function () {
  dot[3].classList.add('active');
  four.classList.add('completely');

  dot[0].classList.remove('active');
  dot[1].classList.remove('active');
  dot[2].classList.remove('active');



  first.classList.add('old-hat');
  second.classList.add('old-hat');
  third.classList.add('old-hat');

  first.classList.remove('completely');
  second.classList.remove('completely');
  third.classList.remove('completely');
}

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
  if(event.originalEvent.wheelDelta > 0 && $(four).hasClass('completely') === true) {
    third.classList.remove( 'old-hat' );
    four.classList.remove('completely');

    dot[3].classList.remove('active');
    dot[2].classList.add('active');
    setTimeout(function() {
      third.classList.add('completely');
    }, 1500);

    }
  });
