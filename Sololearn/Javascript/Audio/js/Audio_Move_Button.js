var play_window,previous, next ;

previous = document.querySelector('.previous');
next = document.querySelector('.next');
play_window = document.querySelector('.play-window');
  // console.log('pre', previous);
  //   console.log('next', next);


(function (global) {
  previous.onclick = function() {
    // console.log(previous);
    play_window.style.transform += "translateX(50%)"
  }
  next.onclick = function() {
    // console.log(next);
    play_window.style.transform += "translateX(-50%)"
  }
})(window)

// previous.onclick = function() {
//   // console.log(previous);
//   coverlist.style.transform = "translateX(200%)"
// }
// next.onclick = function() {
//   // console.log(next);
//   coverlist.style.transform = "translateX(-200%)"
// }
// console.log(coverlist);
