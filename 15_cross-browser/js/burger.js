/*window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.menu-link').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.add('header__menu_active')
  });

  document.querySelector('.menu-link_alert').addEventListener('click', function() {
    document.querySelector('.header__menu').classList.remove('header__menu_active')
  });
})*/


$( ".menu-link" ).click(function() {
  $( ".header__menu" ).show( "fold", 500 );
});


$( ".menu-link_alert" ).click(function() {
  $( ".header__menu" ).hide( "fold", 500 );
});


$( ".search-link" ).click(function() {
  $( ".search__container" ).show( "fold", 500 );
});


$( ".search__cancel" ).click(function() {
  $( ".search__container" ).hide( "fold", 500 );
});
