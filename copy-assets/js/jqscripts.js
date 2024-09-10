(function ($) {
    "use strict";

    // Init Nav Menu
    $(document).ready(function () {
        $('.tx-initialize-menu').each(function (index, element) {
            $(element).smartmenus();
        });
    });


    // // Main Banner Slider
    // $(document).ready(function () {
    //     $('.edt-banner-sliders').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         dots: true,
    //         arrows: true,
    //         fade: true,
    //         speed: 800,
    //         autoplay: true,
    //         autoplaySpeed: 8000,
    //         infinite: true,
    //         cssEase: 'linear',
    //         // adaptiveHeight: true,
    //         appendArrows: $('.edt-banner-sliders-buttons'),
    //         prevArrow: $('.prev-banner'),
    //         nextArrow: $('.next-banner'),
    //     });
    // });

    // $('.edt-testimonial-carousels').each(function(index, element) {
    //     $(element).slick({
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         fade: false,
    //         dots: true,
    //         autoplay: false,
    //         autoplaySpeed: 5000,
    //         infinite: true,
    //         cssEase: 'linear',
    //         adaptiveHeight: true,
    //         responsive: [
    //             {
    //                 breakpoint: 1000,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 800,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 600,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     dots: false
    //                 }
    //             }
    //         ]
    //     });
    // });

    // $('.edt-hero-carousels-sm').each(function(index, element) {
    //     $(element).slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         fade: false,
    //         dots: false,
    //         autoplay: false,
    //         autoplaySpeed: 5000,
    //         infinite: true,
    //         cssEase: 'linear',
    //         adaptiveHeight: true,
    //         appendArrows: $('.edt-hero-carousel-buttons'),
    //         prevArrow: $('.prev'),
    //         nextArrow: $('.next'),
    //         responsive: [
    //             {
    //                 breakpoint: 1000,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 800,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 600,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     dots: false
    //                 }
    //             }
    //         ]
    //     });
    // });

    // // Carousel Default sm
    // $('.edt-carousel-default').each(function(index, element) {
    //     $(element).slick({
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         arrows: true,
    //         fade: false,
    //         dots: true,
    //         autoplay: false,
    //         autoplaySpeed: 5000,
    //         infinite: true,
    //         cssEase: 'linear',
    //         adaptiveHeight: true,
    //         // appendDots: $('.edt-carousel-dots'),
    //         appendArrows: $('.edt-carousel-buttons'),
    //         prevArrow: $('.prev'),
    //         nextArrow: $('.next'),
    //         responsive: [
    //             {
    //                 breakpoint: 1000,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 800,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 600,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     dots: false
    //                 }
    //             }
    //         ]
    //     });
    // });

})(jQuery);