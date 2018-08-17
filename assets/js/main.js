(function ($) {
    "use strict";


    //searcg-bar
    $("#click-search").on("click",function(){
       $("#search").toggle(1000); 
    });
    //active menu
    $(".navigation li a").on("click",function(){
        if($(this).hasClass("active-menu")){
            $(this).removeClass("active-menu");
        }else{
            $(this).addClass("active-menu");
            $(this).parent().siblings().find("a").removeClass("active-menu");
        }
    });
    //flickty
    $('.main-carousel').flickity({
        // options
        contain: true,
        freeScroll: true,
        wrapAround: true,
        prevNextButtons: false,
        autoPlay: true,
        autoPlay: 3000
    });
    //
    // mixItUp
    $('.container').imagesLoaded(function () {
        var containerEl = document.querySelector('#Container');
        var mixer = mixitup(containerEl);
    });
    // active button
    $('ul#mix-nav li').click(function () {
        if ($(this).hasClass('active-btn')) {
            $(this).removeClass('active-btn');
        } else {
            $(this).addClass('active-btn');
            $(this).siblings().removeClass('active-btn');
        }
    });
    //
    // wow js
    new WOW().init();
    //
    // magnific popup
    $(".light-box").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    //
    //slicknav
    $('ul#navbar').slicknav({
        prependTo: "#mobile-menu"
    });

}(jQuery));
