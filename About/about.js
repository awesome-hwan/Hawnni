
var windows = document.querySelector(".window");
var warpper = document.querySelector(".warpper")
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var black = document.querySelector(".black");
var gray = document.querySelector(".gray");
// console.log('red :', red);

red.onclick = function () {
  warpper.setAttribute("style", "transform: translateY(-100%)")
};
blue.onclick = function () {
  warpper.setAttribute("style", "transform: translateY(-200%)")
};
black.onclick = function () {
  warpper.setAttribute("style", "transform: translateY(-300%)")
};
gray.onclick = function () {
  warpper.setAttribute("style", "transform: translateY(-0%)")
};
