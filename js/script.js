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
    };

/*
    var showYear = function(e){
        $niveau.find('li').hide();
        $(this).find('.year').show();
        $(this).find('.year').on('click', showThematique);
    };

    var showThematique = function(e){
    console.log($(this).find('ol'));
        $(this).find('ol').show();
        //$(this).find('.thematique').on('click', showCours);

    };
*/
    /*var showCours = function(e){
        console.log('ok');
    };*/


    var toto = function(e)
    {
    console.log('toto:'+e);
    alert('toto:'+e);
    }

    // Toggle OLs
    var olToggler = function(e) {
        $(e).children('ol').toggle();
    }

    //Load de routine
    $(function () {
        $slider.not(":first").hide();
        $niveau.find('li').hide();

        //$niveau.on('click', showYear);

        setInterval(switchImg, delay);
                $('.precedent').on('click', previousImg);
                $('.suivant').on('click', switchImg);

        $('ol.tree#formation').find('li:has(ol)').each(function(i,li) { $(li).on('click', li, function(e) { olToggler(e.data); })});
    });

})(jQuery);