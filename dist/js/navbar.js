/*! Main */
jQuery(document).ready(function($) {

  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
  //  space.height(originalheight + 'em');
    var navbarmain = $('#navbar-main'),
        distance = navbarmain.offset().top,
        $window = $(window);


    var navigation = $('#navbar-links'),
        navoffset = navigation.offset().top;

    distancebetween = navoffset - distance - navbarmain.height();


    $window.scroll(function() {
        if ($window.scrollTop() > distance) {
          //  $(".right").removeClass("rightundo");
          //  $(".left").removeClass("leftundo");
          //  $(".label").addClass('after');
            //$(".name").addClass('after');

        } else {
          //  $(".label").removeClass('after');
            //$(".name").removeClass('after');


           /* $(".label").removeClass('after');
            $(".navlist").removeClass('after');
            $("#main").removeClass('after');     */
        }

        console.log(distancebetween);
        if ($window.scrollTop() < distancebetween){
          navbarmain.addClass('fixed');
          navbarmain.removeClass('absolute');

        } else if ( $window.scrollTop() > distancebetween){
          navbarmain.removeClass('fixed');
          navbarmain.addClass('absolute');
          console.log("fix top");
        }

        if ($window.scrollTop() >= navoffset - navbarmain.height()){
            navbarmain.addClass('fixednav');
            var newtop =navbarmain.height();
            navigation.addClass('fixednav');
            navigation.css({top:newtop});


            //animations
            $(".name").addClass('after');
            $(".right").removeClass("rightundo");
            $(".left").removeClass("leftundo");
            $(".label").addClass('after');
        } else{
            navbarmain.removeClass('fixednav');
            navigation.removeClass('fixednav');
            navigation.css({top:''});

            //animations
            $(".name").removeClass('after');
            $(".label").removeClass('after');
             $(".navlist").removeClass('after');
             $("#main").removeClass('after');
        }



    });
});
