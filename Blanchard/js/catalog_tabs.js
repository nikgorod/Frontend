window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.country__tabs_btn').forEach(function(StepBtn) {
      StepBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;
  
        document.querySelectorAll('.country__tabs_btn').forEach(function(btn) {
          btn.classList.remove('country__tabs_btn-active')
        });
  
        event.currentTarget.classList.add('country__tabs_btn-active');
  
        document.querySelectorAll('.catalog__country-container').forEach(function(StepBtn) {
          StepBtn.classList.remove('catalog__country-container_active')
        });
  
        document.querySelector(`[data-target="${path}"`).classList.add('catalog__country-container_active');
      });
    });
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.right__container_btn').forEach(function(StepBtn) {
      StepBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path;
  
        document.querySelectorAll('.right__container_btn').forEach(function(btn) {
          btn.classList.remove('right__container_btn-active')
        });
  
        event.currentTarget.classList.add('right__container_btn-active');
  
        document.querySelectorAll('.catalog__left_item').forEach(function(StepBtn) {
          StepBtn.classList.remove('catalog__left_item-active')
        });
  
        document.querySelector(`[data-target="${path}"`).classList.add('catalog__left_item-active');
      });
    });
})