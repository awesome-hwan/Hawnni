$(function(){
     //Keep track of last scroll
     var lastScroll = 0;
     $(window).scroll(function(event){
         //Sets the current scroll position
         var st = $(this).scrollTop();
         //Determines up-or-down scrolling
         if (st > lastScroll){
            //Replace this with your function call for downward-scrolling
            alert("DOWN");
            console.log("DOWN Scroll")
         }
         else {
            //Replace this with your function call for upward-scrolling
            alert("UP");
            console.log("UP Scroll")
         }
         //Updates scroll position
         lastScroll = st;
     });
   });
