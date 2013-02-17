(function ($) {
    var $slider = $('.slider figure');
    var delay = 5000;

    //Slider accueil
    var switchImg = function () {

        var $nextImg = $slider.filter(':visible').next();

        if ($nextImg.size() == 0) {
            $nextImg = $slider.first();
        }

        $slider.filter(':visible').fadeOut('fast', function () {
            $nextImg.fadeIn('fast');
        });
    };

    var previousImg = function(e){
        var $nextImg = $slider.filter(':visible').prev();

           if ($nextImg.size() == 0) {
              $nextImg = $slider.first();
           }

           $slider.filter(':visible').fadeOut('fast', function () {
               $nextImg.fadeIn('fast')
           });
    }


    //Load de routine
    $(function () {
        $slider.not(":first").hide();

        setInterval(switchImg, delay);
                $('.precedent').on('click', previousImg);
                $('.suivant').on('click', switchImg);
    });

})(jQuery);