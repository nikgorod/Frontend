const sliderEdit = document.querySelector('.editions__swiper');



editionSwiper = new Swiper(sliderEdit, {
    clickable: true,
    slideClass: 'editions__swiper-slide',
    centerSlides: true,
    pagination: {
        el: '.swiper-pagination--right',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    breakpoints: {

        684: {
            slidesPerView: 2,
            slidesPerGroup:2,
            spaceBetween: 34,
        },

        1020: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
        },

        1025: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
    }
});



























const editionSwiper = new Swiper('.editions__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: '.swiper-pagination--right',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
});



