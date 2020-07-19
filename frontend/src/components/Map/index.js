import React, { useEffect } from 'react';
//import { YMaps, Map, Placemark } from 'react-yandex-maps';

function MyMap({  description }) {
  useEffect(() => {
    window.addEventListener('load', handleLoad);
  }, []);

  function handleLoad() {
    window.ymaps.ready(() => {
      // const latitude = position.coords.latitude;
      // const longitude = position.coords.longitude;
      function init() {
        /**
         * Создаем мультимаршрут.
         * Первым аргументом передаем модель либо объект описания модели.
         * Вторым аргументом передаем опции отображения мультимаршрута.
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRoute.xml
         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml
         */
        var multiRoute = new window.ymaps.multiRouter.MultiRoute(
          {
            // Описание опорных точек мультимаршрута.
            referencePoints: [[55.712471799999996, 37.591137599999996], description],
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

        // Создаем кнопки для управления мультимаршрутом.
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

        // viaPointButton.events.add('select', function () {
        //   var referencePoints = multiRoute.model.getReferencePoints();
        //   referencePoints.splice(1, 0, 'Москва, ул. Солянка, 7');
        //   /**
        //    * Добавляем транзитную точку в модель мультимаршрута.
        //    * Обратите внимание, что транзитные точки могут находится только
        //    * между двумя путевыми точками, т.е. не могут быть крайними точками маршрута.
        //    * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/multiRouter.MultiRouteModel.xml#setReferencePoints
        //    */
        //   multiRoute.model.setReferencePoints(referencePoints, [1]);
        // });

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
            controls: [trafficButton, viaPointButton],
          },
          {
            buttonMaxWidth: 300,
          },
        );

        // Добавляем мультимаршрут на карту.
        myMap.geoObjects.add(multiRoute);
      }

      window.ymaps.ready(init);
    });
  }
  return <div id="map" style={{ width: '600px', height: '400px' }}></div>;
}

export default MyMap;


// function geoFindMe() {
//   const status = document.querySelector('#status');
//   const mapLink = document.querySelector('#map-link');
//   const map = document.querySelector('#map');

//   mapLink.href = '';
//   mapLink.textContent = '';

//   function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     function init() {
//       var myMap = new ymaps.Map('map', {
//         center: [latitude, longitude],
//         zoom: 13,
//         controls: [],
//       });
//       console.log('llll');
//       Создадим экземпляр элемента управления «поиск по карте»
//       с установленной опцией провайдера данных для поиска по организациям.
//       var searchControl = new ymaps.control.SearchControl({
//         options: {
//           provider: 'yandex#search',
//         },
//       });

//       myMap.controls.add(searchControl);

//       Программно выполним поиск определённых кафе в текущей
//       прямоугольной области карты.
//       console.log(searchControl.search('автосервисы'));
//       searchControl.search('автосервисы');
//     }

//     ymaps.ready(init);
//   }

//   function error() {
//     status.textContent = 'Unable to retrieve your location';
//   }

//   if (!navigator.geolocation) {
//     status.textContent = 'Geolocation is not supported by your browser';
//   } else {
//     status.textContent = 'Locating…';
//     navigator.geolocation.getCurrentPosition(success, error);
//   }
// }

// document.querySelector('#find-me').addEventListener('click', geoFindMe);


// <YMaps query={{ lang: 'ru_RU' }}>
    //   <Map defaultState={{ center: [55.751574, 37.573856], zoom: 14 }}>
    //     <Placemark geometry={coordinate} />
    //   </Map>
    // </YMaps>

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  //     // eslint-disable-next-line camelcase
  //     const { weight, sprites: { front_default } } = await response.json();
  //     setHookState({
  //       weight,
  //       image: front_default,
  //     });
  //   })();
  // }, []);

