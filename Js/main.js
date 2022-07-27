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

    $('.allTestimonials .slider').bxSlider({
        pager: false,
        speed: 1000,
        auto: true,
        controls: false,
        // mode: 'vertical',
        // easing: 'linear',
        randomStart: true,
        // ticker: true,
        // tickerHover: true
    });
    
    slider.bxSlider({
        // infiniteLoop: false,
        // hideControlOnEnd: true,
        pager: true,
        speed: 1000,
        auto: true,
    });

    var mixer = mixitup('.products');

    $('.productsButtons li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected')
    })

    let spanTop = document.querySelector(".top");
    window.onscroll = function () {
        // console.log(this.scrollY);
        if (this.scrollY >= 625) {
            spanTop.classList.add("show");
        } else {
            spanTop.classList.remove("show");
        };
    };

    spanTop.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    var loader = document.querySelector(".loader");

    window.addEventListener("load", vanish);

    function vanish() {
        loader.classList.add("disappear")
    }

});