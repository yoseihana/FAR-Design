(function ($) {
    var $slider = $('.slider figure');
    var $niveau = $('.niveau');
    var $submenu = $('.submenu');
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
    };

    //Show Thematique
    var showThematique = function(e) {
        $niveau.find('.year ol').hide();
        $(this).find('ol').show();
    }

    //Load de routine
    $(function () {
        $slider.not(":first").hide();
        $niveau.find('.year ol').hide();

        $niveau.find('.year').on('click', showThematique);

        setInterval(switchImg, delay);
                $('.precedent').on('click', previousImg);
                $('.suivant').on('click', switchImg);
    });

})(jQuery);