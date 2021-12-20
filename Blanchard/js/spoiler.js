let btnCheck = document.querySelector(".categories__title");
let checklist = document.querySelector(".categories__checkbox");
btnCheck.addEventListener("click", function() {
  btnCheck.classList.toggle('title-active')
  checklist.classList.toggle("checklist__active");
  document.querySelectorAll(".categories__label").forEach(el => {
    el.classList.toggle("label-active");
    let checkbox = el.querySelector(".checkbox");
 
    if (checkbox.checked) {
      el.classList.add("label-active");
      el.classList.add("x-span");
    } 
  })
});

document.querySelectorAll(".categories__label").forEach(el => {
  el.addEventListener("click", function() {
    let label = this;
    if (!checklist.classList.contains("checklist__active")) {
      label.classList.remove("label-active");
      label.classList.remove("x-span");
      el.style.color = "#C283F3";

    } 
  });
})