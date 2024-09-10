(function ($) {
    "use strict";

    // Carousel Default sm
    $('.ltv-carousel-default').each(function(index, element) {
        // $(element).slick({
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     arrows: true,
        //     fade: false,
        //     dots: true,
        //     autoplay: false,
        //     autoplaySpeed: 5000,
        //     infinite: true,
        //     cssEase: 'linear',
        //     adaptiveHeight: true,
        //     // appendDots: $('.ltv-carousel-dots'),
        //     appendArrows: $('.ltv-carousel-buttons'),
        //     prevArrow: $('.ltv-prev'),
        //     nextArrow: $('.ltv-next'),
        //     responsive: [
        //         {
        //             breakpoint: 992,
        //             settings: {
        //                 slidesToShow: 3,
        //                 slidesToScroll: 1,
        //                 infinite: true,
        //             }
        //         },
        //         {
        //             breakpoint: 800,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 1,
        //                 infinite: true,
        //             }
        //         },
        //         {
        //             breakpoint: 400,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1,
        //                 infinite: true,
        //             }
        //         }
        //     ]
        // });
    });

    // $('.ltv-owl-carousel-default').each(function(index, element) {
    //     $(element).owlCarousel({
    //         items: 5,
    //         loop:true,
    //         margin:20,
    //         center: false,
    //         dots: false,
    //         nav:true,
    //         navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    //         responsiveClass: true,
    //             responsive:{
    //                 0:{
    //                     items:2,
    //                     nav:true,
    //                     loop:true,
    //                 },
    //                 600:{
    //                     items:3,
    //                     nav:true,
    //                     loop:true,
    //                 },
    //                 1000:{
    //                     items:5,
    //                     nav:true,
    //                     loop:true,
    //                     loop:true,
    //                 }
    //             }
    //     });
    // });

    $('.ltv-owl-carousel-default').each(function(index, element) {
        var $element = $(element);
        
        // Override options using data attributes
        var items = $element.data('items') || 5;
        var loop = $element.data('loop') !== undefined ? $element.data('loop') : true;
        var margin = $element.data('margin') || 15;
        var center = $element.data('center') || false;
        var dots = $element.data('dots') || false;
        var nav = $element.data('nav') !== undefined ? $element.data('nav') : true;
        var navText = $element.data('nav-text') || ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'];
    
        $element.owlCarousel({
            items: items,
            loop: loop,
            margin: margin,
            center: center,
            dots: dots,
            nav: nav,
            navText: navText,
            responsiveClass: true,
            responsive: {
                0: {
                    items: $element.data('responsive-0-items') || 2,
                    nav: $element.data('responsive-0-nav') !== undefined ? $element.data('responsive-0-nav') : nav,
                    loop: $element.data('responsive-0-loop') !== undefined ? $element.data('responsive-0-loop') : loop
                },
                600: {
                    items: $element.data('responsive-600-items') || 3,
                    nav: $element.data('responsive-600-nav') !== undefined ? $element.data('responsive-600-nav') : nav,
                    loop: $element.data('responsive-600-loop') !== undefined ? $element.data('responsive-600-loop') : loop
                },
                1000: {
                    items: $element.data('responsive-1000-items') || 5,
                    nav: $element.data('responsive-1000-nav') !== undefined ? $element.data('responsive-1000-nav') : nav,
                    loop: $element.data('responsive-1000-loop') !== undefined ? $element.data('responsive-1000-loop') : loop
                }
            }
        });
    });
    

    $('.ltv-whyus-owl-carousels').owlCarousel({
        items: 3,
        loop:true,
        margin:20,
        center: false,
        dots: false,
        nav:false,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        responsiveClass: true,
            responsive:{
                0:{
                    items:1,
                    loop:true,
                },
                600:{
                    items:2,
                    loop:true,
                },
                1000:{
                    items:3,
                    loop:true,
                }
            }
    });

})(jQuery);