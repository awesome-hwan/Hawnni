

var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var gray = document.querySelector(".gray");



// function <-> switch
// $(red).on("mousewheel", function (event) {
//   if( event.originalEvent.wheelDelta < 0 ) {
//     red.classList.add( 'old-hat' );
//     console.log("Time",(new Date()).getTime())
//   }
//
//   });
// $(blue).on("mousewheel", function (event) {
//   if(event.originalEvent.wheelDelta < 0) {
//     blue.classList.add( 'old-hat' );
//   } else {
//     red.classList.remove( 'old-hat' );
//   }
//   });
// $(yellow).on("mousewheel", function (event) {
//   if(event.originalEvent.wheelDelta < 0) {
//     yellow.classList.add( 'old-hat' );
//   } else {
//     blue.classList.remove( 'old-hat' );
//   }
//   });
//
// $(gray).on("mousewheel", function (event) {
//   if(event.originalEvent.wheelDelta > 0) {
//     yellow.classList.remove( 'old-hat' );
//     }
//   });

//**********************경계선***********************


var color = [red, blue, yellow, gray];
var wrap = $("body");
console.log(wrap)
var panelsize = 100;
var step = 10;
var interval = 1000;
var direction = 1;
var currentTop = parseInt(wrap.css("top"));
var bAnimation = false;
function animation() {
  setTimeout(function() {


    if (direction < 0) {
      if (currentTop <= minValue) {
        setTimeout(function() {
          bAnimation = false;
        }, interval);
        return;
      }
    } else {
      if (currentTop >= minValue) {
        setTimeout(function() {
          bAnimation = false;
        }, interval);
        return;
      }
    }

    wrap.css({
      "top": currentTop - step
    });
    animation();
  }, 16);
}

for ( i = 0; i < color.length ; i++ ){



switch ( color[i] ) {



case red: $(red).on("mousewheel DOMMouseScroll", function (event) {
  if( event.originalEvent.wheelDelta < 0 ) {
   event.preventDefault();
  minValue = currentTop - panelsize;
red.classList.add( 'old-hat' ); }
   animation()
console.log('hellow')

  });

  break;


case blue: $(blue).on("mousewheel DOMMouseScroll", function (event) {


  if(event.originalEvent.wheelDelta < 0 ) {
     event.preventDefault();
      minValue = currentTop - panelsize;
    blue.classList.add( 'old-hat' );

     animation()


  } else {
    red.classList.remove( 'old-hat' );
     animation()

  }
  });

  break;

case yellow: $(yellow).on("mousewheel DOMMouseScroll", function (event) {

  if(event.originalEvent.wheelDelta < 0 ) {
     event.preventDefault();
     minValue = currentTop - panelsize;

    yellow.classList.add( 'old-hat' );
     animation()


  } else {
    blue.classList.remove( 'old-hat' );
    animation()
   }

  });
  break;

case gray: $(gray).on("mousewheel DOMMouseScroll", function (event) {

  if(event.originalEvent.wheelDelta > 0) {
     event.preventDefault();
     minValue = currentTop - panelsize;
    yellow.classList.remove( 'old-hat' );
    animation();
    }
  });
  break;
  animation()
 }
}


//
//################################# 경계선 #############################
//
// (function() {
//   var currentPanel = 1;
//   var wrap = $('body');
//   var panelsize = 600;
//   var step = 10;
//   var interval = 1000;
//   var direction = 1;
//
//   var bAnimation = false;
//
//   function animation() {
//     setTimeout(function() {
//       var currentTop = parseInt(wrap.css("old-hat"));
//
//       if (direction < 0) {
//         if (currentTop <= minValue) {
//           setTimeout(function() {
//             bAnimation = false;
//           }, interval);
//           return;
//         }
//       } else {
//         if (currentTop >= minValue) {
//           setTimeout(function() {
//             bAnimation = false;
//           }, interval);
//           return;
//         }
//       }
//
//       wrap.css({
//         "old-hat": currentTop - step
//       });
//       animation();
//     }, 16);
//   }
//
//   $(window).bind('mousewheel DOMMouseScroll', function(event) {
//     event.preventDefault();
//     if (bAnimation) return;
//
//     var currentTop = parseInt(wrap.css("old-hat"));
//
//     if (event.originalEvent.wheelDelta < 0) {
//       //down scroll
//       minValue = currentTop - panelsize;
//       step = 10;
//       direction = -1;
//     } else {
//       //up scroll
//       minValue = currentTop + panelsize;
//       step = -10;
//       direction = 1;
//     }
//
//     console.log(minValue, bAnimation);
//     bAnimation = true;
//     animation();
//   });
// })();
