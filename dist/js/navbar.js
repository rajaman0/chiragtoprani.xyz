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

    var paddT = $('.content').css('padding-top');
    console.log(paddT);

    var padding = false;
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

        if ($window.scrollTop() < distancebetween){
          $('section').removeClass('removeShadow')

          navbarmain.addClass('fixed');
          navbarmain.removeClass('absolute');
          $('.content').css("padding-top", paddT);
          $('#space').height(0);
        } else if ( $window.scrollTop() > distancebetween){
          //reached matching point
          $('section').addClass('removeShadow')
          navbarmain.removeClass('fixed');
          navbarmain.addClass('absolute');
          $('#space').height(0);

        }


        if ($window.scrollTop() >= navoffset - navbarmain.height()  ){
            navbarmain.addClass('fixednav');
            var newtop =navbarmain.height();;

            navbarmain.removeClass('absolute');

            $('.key').addClass('finalnav');

            navbarmain.addClass('fixednav');
            navigation.addClass('fixednav');
            navigation.css({top:newtop});

            if ($window.scrollTop() <= navoffset ){
              var height = $window.scrollTop() -  $('#space').offset().top +navbarmain.height() + navigation.height();
              $('#space').height(height);
            }

        } else{
            navbarmain.removeClass('fixednav');
            navigation.removeClass('fixednav');
            navigation.css({top:''});

          }

          if ($window.scrollTop() >= navoffset){
            //var newpadding = $window.scrollTop() - (navoffset - navbarmain.height() - navigation.height()) + paddT;
            //$('.content').css("padding-top", newpadding);
            //animations
             $(".name").addClass('after');
             $(".right").removeClass("rightundo");
             $(".left").removeClass("leftundo");
             $(".label").addClass('after');
             $(".navbar").addClass('next');
             $(".lower").addClass('move');
             $(".lower").addClass('movelower');
             $(".upper").addClass('moveupper');
             $(".display").addClass('after');
          }else {
           //animations
            $(".name").removeClass('after');
            $(".label").removeClass('after');
             $(".navlist").removeClass('after');
             $("#main").removeClass('after');
             $(".navbar").removeClass('next');
             $(".lower").removeClass('movelower');
             $(".upper").removeClass('moveupper');
             $(".display").removeClass('after');
        }



    });
});
