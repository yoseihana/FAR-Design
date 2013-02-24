(function ($) {
    var $slider = $('.slider figure');
    var $niveau = $('.niveau');
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
        console.log('test');
        $niveau.find('ol').hide();

        $niveau.on('click', showGrade);

        setInterval(switchImg, delay);
                $('.precedent').on('click', previousImg);
                $('.suivant').on('click', switchImg);
    });

})(jQuery);