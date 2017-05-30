var inside3 = $(".inside-3");
var thing3 = $(".thing-3");
var count3 = $(".count-3");
inside3.on('scroll', $.debounce(function() {
  thing3.css("top", inside3[0].scrollTop);
  count3.html(parseInt(count3.html())+1);
}, 100));
