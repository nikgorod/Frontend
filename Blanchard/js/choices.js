const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  position: 'bottom',
});


const elem = document.querySelector('.categories__selection');

const Editchoices = new Choices(elem, {
  searchEnabled: false,
  shouldSort: false,
  position: 'bottom',
});
