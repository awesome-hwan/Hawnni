
var body = document.querySelector("body");
var wrapper = document.querySelector(".wrapper")
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var gray = document.querySelector(".gray");


// z-index 변경하여 색상 변경
// transition 적용 안됨
red.onmousewheel = function (e) {

console.log( "red.scrollHeight 1 :" , red.pageYOffset)
 if (red.getAttribute("style") > blue.getAttribute("style")) {
  red.classList.remove('active');
console.log( "red.scrollHeight 2 :" , red.scrollTop)
  red.classList.add( 'old-hat' );
  console.log( "red.scrollHeight 3 :" , red.scrollTop)
  blue.classList.add( 'active' )
console.log( "red.scrollTop 3 :" , red.scrollTop)
} else {

    red.classList.remove( 'old-hat' );
}



  // console.log("red")
};
blue.onmousewheel = function () {
    console.log( "red.scrollTop 4 :" , blue.scrollTop);
  if( blue.getAttribute("style") > yellow.getAttribute("style")){
console.log( "red.scrollTop 5 :" , blue.scrollTop);
  blue.classList.remove('active');
  blue.classList.add('old-hat');
  yellow.classList.add('active');
} else {
  blue.classList.remove( 'old-hat' );
}
};
yellow.onmousewheel = function () {
  if ( yellow.getAttribute("style") > gray.getAttribute("style")) {
  yellow.classList.remove('active');
  yellow.classList.add('old-hat');
  gray.classList.add('active');
} else {
    yellow.classList.remove('old-hat')
  }

}
gray.onmousewheel = function () {
  console.log("gray.classList.length :", gray.classList.length)
}


function yHandler () {

var contentHeight = wrapper.clientHeight;
console.log("contentHeight :",contentHeight);
var Yoffset = window.pageYOffset;

var y = Yoffset + window.innerHeight;
// console.log("y :", y )
if (contentHeight === y) {
  var red_index = red.getAttribute("style", "z-index")
  // console.log("z-index : ",red_index)
  red.classList.remove('active');
  red.classList.add( 'old-hat' );
  // blue.classList.add( 'active' );


}
 else if( y === "727") {
  //  console.log("blue에서 y" , y)
  blue.classList.remove( 'active' );
  blue.classList.add( 'old-hat' );
  yellow.classList.add('active');
  // return contentHeight + 2;
}
// else if ( contentHeight + 2 !== y ) {
//   yellow.classList.remove('active');
//   yellow.classList.add( 'old-hat' );
//   gray.classList.add('active');
//   return false;
// }

};

// window.onmousewheel = yHandler;
