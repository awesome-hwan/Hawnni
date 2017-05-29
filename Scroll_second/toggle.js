$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    // $('a[href^="#"]').on('click', function (e) {
    $('.menu-center ul li a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.menu-center ul li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this;
            // menu = target;
        $target = $(this);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    // 현재 스크롤 위치
    var scrollPos = $(document).scrollTop();

    $('ul li a').each(function () {
        var currLink = $(this);
        console.log("currLink :", currLink)
        // refElement는 menu-center 안의 클릭 대상 <--> 배경화면 연결고리 설정이다.
        var refElement = $(currLink.attr("title"));
        console.log("refElement :", refElement)
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

};
