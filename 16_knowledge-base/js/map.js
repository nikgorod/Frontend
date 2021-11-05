ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [48.872185073737896,2.354223999999991],
          zoom: 13
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemarkWithContent = new ymaps.Placemark([48.872185073737896,2.354223999999991], {
          hintContent: 'Адрес офиса',
          balloonContent: 'Округ Парижа, улица дю Фобур Сен Дени  54',
          iconContent: ''
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img\\map-sign.svg',
          // Размеры метки.
          iconImageSize: [28, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-24, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
  .add(myPlacemarkWithContent);
});
