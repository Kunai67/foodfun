$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        slideTransition: `ease`,
        merge: true,
        rewind: true,
        responsive: {
            0: {
                items: 1,
            },

            768: {
                items: 2
            },
        },
    });
});