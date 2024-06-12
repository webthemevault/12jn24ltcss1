(function ($) {

	"use strict";

    $('.edt-news-ticker-horizontal').AcmeTicker({
        type:'marquee',/*horizontal/horizontal/Marquee/type*/
        direction: 'left',/*up/down/left/right*/
        speed: 0.055,/*true/false/number*/ /*For vertical/horizontal 600*//*For marquee 0.05*//*For typewriter 50*/
    });

})(jQuery);