let swiper = new Swiper(".gellery-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});