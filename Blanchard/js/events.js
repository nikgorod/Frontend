let btn = document.querySelector(".events__button");
const slider = document.querySelector('.events__swiper');
let allitems = document.querySelectorAll(".events__item");
btn.addEventListener("click", function() {
  allitems.forEach(item => {
    item.style.display = "block";
  })
  
  this.style.display = "none";
  
})

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 576 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			slideClass: 'events__item',
			pagination: {
				el: '.events__pagination',
				type: 'bullets',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 576 && slider.dataset.mobile == 'true') {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});