/*global $, alert, console*/

$(function () {

    'use strict';

    var header = $('.headerSection'),
        slider = $('.slider')
    
    header.height($(window).height());
    
    $(window).resize(function () {
        
        header.height($(window).height());

        // slider.each(function () {
        //     $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
        // });

    });
    
    $('.navLinks li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // slider.each(function () {
    //     $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);
    // });

    slider.bxSlider({
        // infiniteLoop: false
        pager: true,
        speed: 1000,
    });

});