var selector = document.getElementById("phone");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.left__form', {
  colorWrong: '#FF5C00',

  rules: {
    name: {
      required: true,
      rule: 'String',
      errorMessage: 'Недопустимый формат',
      minLength: 3,
      maxLength: 15,
    },

    phone: {
      required: true,
      errorMessage: 'Недопустимый формат',
      function: (name,value) => {
        const tel = selector.inputmask.unmaskedvalue()

        return Number(tel) && tel.length == 10
      }
    },
  }
});