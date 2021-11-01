window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.step__btn').forEach(function(StepBtn) {
    StepBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.step__btn').forEach(function(btn) {
        btn.classList.remove('step__btn_active')
      });

      event.currentTarget.classList.add('step__btn_active');

      document.querySelectorAll('.do-work__info-container').forEach(function(StepBtn) {
        StepBtn.classList.remove('do-work__info-container_active')
      });

      document.querySelector(`[data-target="${path}"`).classList.add('do-work__info-container_active');
    });
  });
})
