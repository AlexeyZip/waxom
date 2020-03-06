$(function () {

    $('.header-slider').slick({
        dots: true,
        slidersToScroll: 5,
        infinite: false,
        nextArrow: '<button type="button" class ="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class ="slick-btn slick-prev"></button>',
    });

    $('.post-img1').slick({
        dots: true,
        slidersToScroll: 5,
        arrows: false,
        dotsClass: 'post-dots',

    });
    $('.slider-posts').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        nextArrow: '<button type="button" class ="slick-next1"></button>',
        prevArrow: '<button type="button" class ="slick-prev1"></button>',
    });



});