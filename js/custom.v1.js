// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });


    var $container = $('.portfolio_container');
    $('.portfolio_filter li').click(function () {
        var selector = $(this).attr('data-filter');

        $('.portfolio_filter .active').removeClass('active');
        $(this).addClass('active');

        if (selector === '*') {
            $('.portfolio_container > div').fadeIn(1000);
        } else {
            $('.portfolio_container > div').fadeOut(0);
            $('.portfolio_container div.'+selector).fadeIn(1000);
        }
    });


    //animatedModal
    $("#demo01").animatedModal();
    $("#demo02").animatedModal();
    $("#demo03").animatedModal();
    $("#demo04").animatedModal();
    $("#demo05").animatedModal();
    $("#demo06").animatedModal();
    $("#demo07").animatedModal();
    $("#demo08").animatedModal();
    $("#demo09").animatedModal();
    $("#demo10").animatedModal();
    $("#demo11").animatedModal();
    $("#demo12").animatedModal();
    $("#demo13").animatedModal();
    $("#demo14").animatedModal();
    $("#demo15").animatedModal();
    $("#demo16").animatedModal();
    $("#demo17").animatedModal();
    $("#demo18").animatedModal();
    $("#demo19").animatedModal();
    $("#demo20").animatedModal();
    $("#demo21").animatedModal();
    $("#demo22").animatedModal();
    $("#demo23").animatedModal();
    $("#demo24").animatedModal();
    $("#demo25").animatedModal();
    $("#demo26").animatedModal();
    $("#demo27").animatedModal();
});