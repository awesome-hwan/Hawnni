
var body = document.querySelector("body");
var wrapper = document.querySelector(".wrapper")
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var gray = document.querySelector(".gray");


// z-index 변경하여 색상 변경
// transition 적용 안됨
// red.onmousewheel = function (e) {
//
//
//  if ( red.getAttribute("style") === blue.getAttribute("style")) {
//   red.classList.remove('active');
//
//   red.classList.add( 'old-hat' );
//
//   blue.classList.add( 'active' )
//
// } else {
//
//     red.classList.remove( 'old-hat' );
// }
//
//
//
//   // console.log("red")
// };

$(red).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0) {
    red.classList.remove('active');
    red.classList.add( 'old-hat' );
    blue.classList.add( 'active' )
  }
  return false
  });
$(blue).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0) {
    blue.classList.remove('active');
    blue.classList.add( 'old-hat' );
    yellow.classList.add( 'active' )
  } else if ( event.originalEvent.wheelDelta > 0 ){
      blue.classList.remove( 'active' );
      blue.classList.add( 'old-hat' );
      red.classList.remove( 'old-hat' );
      red.classList.add('active');
  }
  return false
  });
$(yellow).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0) {
    yellow.classList.remove('active');
    yellow.classList.add( 'old-hat' );
    gray.classList.add( 'active' )
  } else if ( event.originalEvent.wheelDelta > 0 ){
      yellow.classList.remove( 'active' );
      blue.classList.add('active');
      console.log(event.originalEvent.wheelDelta)
  }
  return false
  });
$(red).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta > 0) {

      gray.classList.remove( 'active' );
  }
  return false
  });
//
// red.onmousewheel = function (e) {
//  if ( e.originalEvent.wheelDelta < 0 ) {
//   red.classList.remove('active');
//   red.classList.add( 'old-hat' );
//   blue.classList.add( 'active' )
// } else {
//     red.classList.remove( 'old-hat' );
// }
// return false
// };

//
// blue.onmousewheel = function (e) {
//   if( e.originalEvent.wheelDelta < 0){
//   blue.classList.remove('active');
//   blue.classList.add('old-hat');
//   yellow.classList.add('active');
// } else {
//   blue.classList.remove( 'old-hat' );
// }
// return false
// };
// yellow.onmousewheel = function (e) {
//   if ( e.originalEvent.wheelDelta < 0) {
//   yellow.classList.remove('active');
//   yellow.classList.add('old-hat');
//   gray.classList.add('active');
// } else {
//     yellow.classList.remove('old-hat');
//     return false;
//   }
// }
// gray.onmousewheel = function (e) {
//   if( e.originalEvent.wheelDelta > 0 ) {
//   }
// }

// $(red).on("mousewheel", function (event) { console.log(event.originalEvent.wheelDelta ) });
