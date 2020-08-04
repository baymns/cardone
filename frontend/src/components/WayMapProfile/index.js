import React from 'react';

function WayMapProfile({ coordinates, id ,address}) {
  const coord = coordinates.reverse()
    console.log(coord);
  (function handleLoad() {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      window.ymaps.ready(() => {
        function init() {
          var multiRoute = new window.ymaps.multiRouter.MultiRoute(
            {
              // Описание опорных точек мультимаршрута.
              referencePoints: [[latitude, longitude], address],
              // Параметры маршрутизации.
              params: {
                // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                results: 2,
              },
            },
            {
              // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
              boundsAutoApply: true,
            },
          );
          var trafficButton = new window.ymaps.control.Button({
              data: { content: 'Учитывать пробки' },
              options: { selectOnClick: true },
            }),
            viaPointButton = new window.ymaps.control.Button({
              data: { content: 'Добавить транзитную точку' },
              options: { selectOnClick: true },
            });

          // Объявляем обработчики для кнопок.
          trafficButton.events.add('select', function () {
            /**
             * Задаем параметры маршрутизации для модели мультимаршрута.
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml#setParams
             */
            multiRoute.model.setParams({ avoidTrafficJams: true }, true);
          });

          trafficButton.events.add('deselect', function () {
            multiRoute.model.setParams({ avoidTrafficJams: false }, true);
          });

          viaPointButton.events.add('select', function () {
            var referencePoints = multiRoute.model.getReferencePoints();
            referencePoints.splice(1, 0, 'Москва, ул. Солянка, 7');
            multiRoute.model.setReferencePoints(referencePoints, [1]);
          });

          viaPointButton.events.add('deselect', function () {
            var referencePoints = multiRoute.model.getReferencePoints();
            referencePoints.splice(1, 1);
            multiRoute.model.setReferencePoints(referencePoints, []);
          });
          // Создаем карту с добавленными на нее кнопками.
          var myMap = new window.ymaps.Map(
            'map',
            {
              center: [55.750625, 37.626],
              zoom: 7,
            },
            {
              buttonMaxWidth: 300,
            },
          );

          // Добавляем мультимаршрут на карту.
          myMap.geoObjects.add(multiRoute);
          // на всякий если своего не получиться 110-122
          window.ymaps.findOrganization(id).then(
            function (orgGeoObject) {
              myMap.geoObjects.add(orgGeoObject);
              orgGeoObject.balloon.open();
            },
            function (err) {
              console.log(err);
              // обработка ошибок
            },
          );
        }

        window.ymaps.ready(init);
      });
    }

    function error() {
      console.log('errr');
    }

    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  })();
  return (
    <div
      id="map"
      style={{ width: '320px', height: '400px' }}
    ></div>
  );
}

export default WayMapProfile;
