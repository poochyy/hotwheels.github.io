document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}
$(document).ready(function () {
    $('.btn').click(function () {
        var name = $(this).attr('data-filter');
        if (name == 'all') {
            $('.product__store-stock-card').show("2000");
        } else {
            $('.product__store-stock-card').not('.' + name).hide('2000');
            $('.product__store-stock-card').filter('.' + name).show('2000');
        }
    });
    $('.product__store-categories-link').click(function () {
        $(this).addClass('active').siblings().removeClass();
    });
    const scrollBtn = $('.scroll-to-top');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            scrollBtn.fadeIn();
        } else {
            scrollBtn.fadeOut();
        }
    })

    scrollBtn.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 360);
        return false;
    })
});