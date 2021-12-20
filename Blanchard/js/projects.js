let projectsSlider = new Swiper('.projects__swiper', {
    navigation: {
      nextEl: ".projects__next",
      prevEl: ".projects__prev",
      centeredSlides:true,
    },
    loop:true,
    breakpoints: {

      320: {
        slidesPerView: 1,
        slidesPerGroup:1,

        spaceBetween: 3,
      },

      579: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      1015: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50
      },
  
      1025: {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 50,
      }
    },
  });