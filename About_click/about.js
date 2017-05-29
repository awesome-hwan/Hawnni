
var body = document.querySelector("body");
var wrapper = document.querySelector(".wrapper")
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var gray = document.querySelector(".gray");

// console.log('red :', red);

// red.onclick = function () {
//   wrapper.setAttribute("style", "transform: translateY(-100%)")
//   console.log("red clicked")
// };
// blue.onclick = function () {
//   wrapper.setAttribute("style", "transform: translateY(-200%)")
// };
// yellow.onclick = function () {
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
  yellow.classList.add('active');

}
yellow.onclick = function () {
  yellow.classList.remove('active');
  yellow.classList.add( 'old-hat' );
  gray.classList.add('active');

}

gray.ondblclick = function () {
  gray.classList.remove('active');
  gray.classList.add('new-hat')
  yellow.classList.remove('old-hat');
  yellow.classList.add('active')
}

yellow.ondblclick = function () {
  yellow.classList.remove('active');
  yellow.classList.add('new-hat')
  blue.classList.remove('old-hat');
  blue.classList.add('active')
}
blue.ondblclick = function () {
  blue.classList.remove('active');
  blue.classList.add('new-hat')
  red.classList.remove('old-hat');
  red.classList.add('active')
}
