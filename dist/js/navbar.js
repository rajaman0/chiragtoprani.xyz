/*! Main */
jQuery(document).ready(function($) {
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main'),
        distance = 10,
        $window = $(window);


    $window.scroll(function() {
        if ($window.scrollTop() > distance) {
            $(".right").removeClass("rightundo");
            $(".left").removeClass("leftundo");
            $(".label").addClass('after');
            $(".name").addClass('after');
            $("body").addClass('after');
            /*$(".label").removeClass('after').addClass('after');
            $(".navlist").removeClass('after').addClass('after');
            $("#main").removeClass('after').addClass('after');*/

            //navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');


        } else {
            $(".label").removeClass('after');
            $(".name").removeClass('after');
            $("body").removeClass('after');


           /* $(".label").removeClass('after');
            $(".navlist").removeClass('after');
            $("#main").removeClass('after');     */      


        }
    });
});

