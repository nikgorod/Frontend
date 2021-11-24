let gallerySlider = new Swiper('.gallery__swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
        rows: 2
    },
    spaceBetween:50,
    pagination: {
        el: ".swiper-pagination--right",
        type: "fraction",
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {

      320: {
        slidesPerView: 1,
        slidesPerGroup:1,
        grid: {
          rows: 1
        },
        spaceBetween: 3,
      },

      577: {
        slidesPerView: 2,
        slidesPerGroup: 3,
        grid: {
          rows: 2
        },
        spaceBetween: 34
      },
  
      1450: {
        slidesPerView: 3,
        slidesPerGroup:6,
        grid: {
          rows: 2
        },
        spaceBetween: 50
      }
    },
  });