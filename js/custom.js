$(function(){

    //slick slider
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: true,
        speed: 2000,
        dots: true,
        prevArrow: '.left',
        nextArrow: '.right',
    });

    //slick slider1
    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false,
        speed: 2000,
    });

    //slick slider2
    $('.slider2-overlay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: false,
        arrows: false,
        speed: 1000,
    });

    //slick slider3
    $('.slider3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        fade: false,
        arrows: false,
        speed: 1000,
    });

});