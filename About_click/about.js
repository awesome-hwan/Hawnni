
var body = document.querySelector("body");
var wrapper = document.querySelector(".wrapper")
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var black = document.querySelector(".black");
var gray = document.querySelector(".gray");

// console.log('red :', red);

// red.onclick = function () {
//   wrapper.setAttribute("style", "transform: translateY(-100%)")
//   console.log("red clicked")
// };
// blue.onclick = function () {
//   wrapper.setAttribute("style", "transform: translateY(-200%)")
// };
// black.onclick = function () {
//   wrapper.setAttribute("style", "transform: translateY(-300%)")
// };
// gray.onclick = function () {
//   wrapper.setAttribute("style", "transform: translateY(-0%)")
// };

// z-index 변경하여 색상 변경
// transition 적용 안됨
red.onclick = function () {
  red.classList.remove('active');
  red.classList.add( 'old-hat' );
  blue.classList.add( 'active' );

  // console.log("red")
};
blue.onclick = function () {
  blue.classList.remove( 'active' );
  blue.classList.add( 'old-hat' );
  black.classList.add('active');

}
black.onclick = function () {
  black.classList.remove('active');
  black.classList.add( 'old-hat' );
  gray.classList.add('active');

}
