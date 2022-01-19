
new JustValidate('.left__form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true,
      rule: 'String',
      minLength: 3,
      maxLength: 15,
      
    },

    phone: {
      required: true,
      function: (name,value) => {
        const tel = selector.inputmask.unmaskedvalue()
        return Number(tel) && tel.length == 10
      }
    },
  },

  messages: {
    name : "Недопустимый формат",
    phone: "Недопустимый формат",
  }
});

var selector = document.getElementById("phone");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);