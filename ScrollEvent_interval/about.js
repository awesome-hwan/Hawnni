

var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var gray = document.querySelector(".gray");



// function <-> switch
$(red).on("mousewheel", function (event) {
  
  if( event.originalEvent.wheelDelta < 0 ) {

    red.classList.add( 'old-hat' );

    setTimeout(function() {
        blue.classList.add('completely');
    }, 1500);

  }

  });
$(blue).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0 && $(blue).hasClass('completely') === true ) {
    
    blue.classList.add( 'old-hat' );
    blue.classList.remove( 'completely')
    setTimeout(function() {
        yellow.classList.add('completely');
    }, 1500);

  } else if ( event.originalEvent.wheelDelta > 0 && $(blue).hasClass('completely') === true ){
    red.classList.remove( 'old-hat' );
    blue.classList.remove( 'completely')

  }
  });

$(yellow).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta < 0 && $(yellow).hasClass('completely') === true) {
    
    yellow.classList.add( 'old-hat' );
    yellow.classList.remove( 'completely');
    setTimeout(function() {
        gray.classList.add('completely');
    }, 1500);

  } else if (event.originalEvent.wheelDelta > 0 && $(yellow).hasClass('completely') === true){
        blue.classList.remove( 'old-hat' );
        yellow.classList.remove( 'completely')
    setTimeout(function() {
      blue.classList.add('completely');
    }, 1500);
  }
  });

$(gray).on("mousewheel", function (event) {
  if(event.originalEvent.wheelDelta > 0 && $(gray).hasClass('completely') === true) {
    yellow.classList.remove( 'old-hat' );
    gray.classList.remove('completely');

    setTimeout(function() {
      yellow.classList.add('completely');
    }, 1500);

    }
  });
