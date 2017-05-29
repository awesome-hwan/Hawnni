(function() {
  var currentPanel = 1;
  var wrap = $('#wrap');
  var panelsize = 726;
  var step = 10;
  var interval = 1000;
  var direction = 1;

  var bAnimation = false;

  function animation() {
    setTimeout(function() {
      var currentTop = parseInt(wrap.css("top"));

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

  $(window).bind('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if (bAnimation) return;

    var currentTop = parseInt(wrap.css("top"));

    if (event.originalEvent.wheelDelta < 0) {
      //down scroll
      minValue = currentTop - panelsize;
      step = 10;
      direction = -1;
    } else {
      //up scroll
      minValue = currentTop + panelsize;
      step = -10;
      direction = 1;
    }

    console.log(minValue, bAnimation);
    bAnimation = true;
    animation();
  });
})();
