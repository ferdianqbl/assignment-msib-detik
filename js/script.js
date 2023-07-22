$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<i class='bi bi-chevron-left'></i>",
            "<i class='bi bi-chevron-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            768: {
                items: 2,
                nav: false,
            },
            992: {
                items: 3,
                loop: true,
            },
        },
    });
});
