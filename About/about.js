
var body = document.querySelector("body");
var wrapper = document.querySelector(".wrapper")
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var black = document.querySelector(".black");
var gray = document.querySelector(".gray");

// console.log('red :', red);

red.onclick = function () {
  wrapper.setAttribute("style", "transform: translateY(-100%)")
  console.log("red clicked")
};
blue.onclick = function () {
  wrapper.setAttribute("style", "transform: translateY(-200%)")
};
black.onclick = function () {
  wrapper.setAttribute("style", "transform: translateY(-300%)")
};
gray.onclick = function () {
  wrapper.setAttribute("style", "transform: translateY(-0%)")
};

//scroll Event
//
// document.body.onscroll = function () {
//   console.log('good')
// }
