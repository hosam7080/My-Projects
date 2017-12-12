/*global $, window*/

$(function() {
    'use strict';
    var winH = $(window).height(),
        winW = $(window).width(),
        upperH = $('div.upper-bar').innerHeight(),
        navH = $('nav.navbar').innerHeight();
    $('div.slider, div.carousel-item').height(winH - (upperH + navH));

    $('div.featured-work ul li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === "all")
        {
            $('div.featured-work div.shuffle div.col-md').css('opacity', '1');
        } else {
            $('div.featured-work div.shuffle div.col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    });

});
