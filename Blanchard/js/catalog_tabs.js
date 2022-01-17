window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__tabs-btn').forEach(function(StepBtn) {
      StepBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;
  
        document.querySelectorAll('.catalog__tabs-btn').forEach(function(btn) {
          btn.classList.remove('catalog__tabs-btn-active')
        });
  
        event.currentTarget.classList.add('catalog__tabs-btn-active');
  
        document.querySelectorAll('.catalog__country-container').forEach(function(StepBtn) {
          StepBtn.classList.remove('catalog__country-container_active')
        });
  
        document.querySelector(`[data-target="${path}"`).classList.add('catalog__country-container_active');
      });
    });
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.right-container__btn').forEach(function(StepBtn) {
      StepBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;
  
        document.querySelectorAll('.right-container__btn').forEach(function(btn) {
          btn.classList.remove('right-container__btn-active')
        });
  
        event.currentTarget.classList.add('right-container__btn-active');
  
        document.querySelectorAll('.catalog__left-item').forEach(function(StepBtn) {
          StepBtn.classList.remove('catalog__left-item-active')
        });
  
        document.querySelector(`[data-target="${path}"`).classList.add('catalog__left-item-active');
      });
    });
})