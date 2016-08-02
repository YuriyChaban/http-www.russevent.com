// For lenguage list
$(function () {
    $('.lenguage-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
        $(this).addClass('lenguage-list-active');
        }
    });
});
// for main menu
$(function () {
    $('.list-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
        $(this).addClass('list-menu-active');
        }
    });
});

// for Russevent_bilet_more slider
var swiper_main = new Swiper('.swiper-container-bilet-more', {
    nextButton: '.swiper-button-bilet-more-next',
    prevButton: '.swiper-button-bilet-more-prev',
    paginationClickable: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    watchSlidesProgress: true,
    autoplayDisableOnInteraction: false
});