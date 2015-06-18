'use strict';

var screenHeight;
var nav = $('.c-nav');
var logo = $('.c-logo');

renderScreens();
renderNav();
$(window)
    .on('scroll', renderNav)
    .on('resize', renderScreens);

$(document)
    .on('click', '.c-next', function() {
        $('html, body').animate({
            scrollTop: $(this).parent().next().offset().top
        }, 1000);
    });

function renderScreens() {
    if (!logo[0].complete || !logo[0].naturalWidth) {
        setTimeout(renderScreens, 100);
        return;
    }
    screenHeight = $(window).innerHeight();
    $('.c-screen').css('min-height', screenHeight);
    logo.css({
        top: screenHeight / 2 - logo.outerHeight() / 2,
        left: 'calc(50% - ' + logo.outerWidth() / 2 + 'px)'
    });
}

function renderNav() {
    if ($(window).scrollTop() > screenHeight - nav.outerHeight()) {
        nav.css({
            position: 'fixed',
            top: 0
        });
    }
    else {
        nav.css({
            top: screenHeight - nav.outerHeight(),
            position: 'absolute'
        });
    }
}
