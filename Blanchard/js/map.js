ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.758032, 37.600613],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),
  
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #333333; font-weight: bold;">$[properties.iconContent]</div>'
        ),
  
        myPlacemarkWithContent = new ymaps.Placemark([55.758032, 37.600613], {
            hintContent: 'Адрес офиса',
            balloonContent: 'Леонтьевский пер.',
            iconContent: '',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'js/map-marker.svg',
            // Размеры метки.
            iconImageSize: [28, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout,
        });
  
    myMap.geoObjects.add(myPlacemarkWithContent); 
    myMap.behaviors.disable('multiTouch');
    myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom');
  });
  
