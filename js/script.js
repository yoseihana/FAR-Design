(function ($) {
    var $slider = $('.slider');
    var delay = 5000;

    //Slider accueil
    var switchImg = function () {

        var $nextImg = $slider.filter(':visible').next();

        if ($nextImg.size() == 0) {
            $nextImg = $slider.first();
        }

        $slider.filter(':visible').fadeOut('fast', function () {
            $nextImg.fadeIn('fast')
        });
    };

    //Load de routine
    $(function () {
        $slider.not(":first").hide();

        setInterval(switchImg, delay);
    });

})(jQuery);