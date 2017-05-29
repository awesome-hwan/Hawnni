

var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var gray = document.querySelector(".gray");



// function <-> switch
$(red).on("mousewheel", function (event) {
  console.log('red');
  if( event.originalEvent.wheelDelta < 0 ) {

    red.classList.add( 'old-hat' );

    setTimeout(function() {
        blue.classList.add('completely');
    }, 1200);

  }

  });
$(blue).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0 && $(blue).hasClass('completely') === true ) {
    console.log('blue');
    blue.classList.add( 'old-hat' );
    blue.classList.remove( 'completely')
    setTimeout(function() {
        yellow.classList.add('completely');
    }, 1200);

  } else if ( event.originalEvent.wheelDelta > 0 && $(blue).hasClass('completely') === true ){
    red.classList.remove( 'old-hat' );
    blue.classList.remove( 'completely')

  }
  });

$(yellow).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0 && $(yellow).hasClass('completely') === true) {
    console.log("$(yellow).hasClass('completely') === true :", $(yellow).hasClass('completely') === true)
    yellow.classList.add( 'old-hat' );
    yellow.classList.remove( 'completely');
    setTimeout(function() {
        gray.classList.add('completely');
    }, 1200);

  } else if (event.originalEvent.wheelDelta > 0 && $(yellow).hasClass('completely') === true){
        blue.classList.remove( 'old-hat' );
        yellow.classList.remove( 'completely')
    setTimeout(function() {
      blue.classList.add('completely');
    }, 1200);
  }
  });

$(gray).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta > 0 && $(gray).hasClass('completely') === true) {
    yellow.classList.remove( 'old-hat' );
    gray.classList.remove('completely');

    setTimeout(function() {
      yellow.classList.add('completely');
    }, 1200);

    }
  });

//**********************경계선***********************


// var color = [red, blue, yellow, gray];
//
//
// for ( i = 0; i < color.length ; i++ ){
//
// switch ( color[i] ) {
//
//
//
// case red: $(red).on("mousewheel", function (event) {
//   if( event.originalEvent.wheelDelta < 0 ) {
//
//
// red.classList.add( 'old-hat' );
//
// setTimeout(function() {
//     blue.classList.add('completely');
// }, 700);
//
//
// }
//
//   });
//
//
//
// break;
//
//
// case blue: $(blue).on("mousewheel", function (event) {
//
//
//   if(event.originalEvent.wheelDelta < 0 && blue.hasClass("completely") === true)
//      event.preventDefault();
//
//     blue.classList.add( 'old-hat' );
//     blue.classList.remove('completely');
//     $(document).ready(function () {
//
//    setTimeout(function() {
//        yellow.classList.add("completely");
//    }, 700);
// })
//   } else {
//     red.classList.remove( 'old-hat' );
//   }
//
//   });
//
//   break;
//
// case yellow: $(yellow).on("mousewheel", function (event) {
//
//   if(event.originalEvent.wheelDelta < 0 && yellow.hasClass("completely") === true) {
//      event.preventDefault();
//
//
//     yellow.classList.add( 'old-hat' );
//     yellow.classList.remove('completely');
//     setTimeout(function() {
//         gary.classList.add("completely");
//     }, 700);
//  });
//
//
//
//   } else {
//     blue.classList.remove( 'old-hat' );
//
//    }
//
//   });
//   break;
//
// case gray: $(gray).on("mousewheel", function (event) {
//
//   if(event.originalEvent.wheelDelta > 0 && yellow.hasClass("completely") === true) {
//      event.preventDefault();
//
//     yellow.classList.remove( 'old-hat' );
//
//     }
//   });
//   break;
//
//  }
// }
