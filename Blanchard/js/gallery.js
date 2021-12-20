/*
const path_1 = document.getElementById('choices--gallery__select-item-choice-1');
const path_2 = document.getElementById('choices--gallery__select-item-choice-2');

path_1.setAttribute('data-path', "gallery__swiper_1")
path_2.setAttribute('data-path', "gallery__swiper_2")



window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.choices__item').forEach(function(StepBtn) {
      StepBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;

        
        document.querySelectorAll('.gallery__swiper').forEach(function(StepBtn) {
          StepBtn.classList.remove('gallery__swiper_active')
        });
  
        document.querySelector(`[data-target="${path}"`).classList.add('gallery__swiper_active');
      });
    });
})*/