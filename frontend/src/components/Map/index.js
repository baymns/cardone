import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function MyMap({ boundedBy }) {
  const coordinate = boundedBy
  // console.log(coordinate);
  return (
    <YMaps query={{ lang: 'ru_RU' }}>
      <Map defaultState={{ center: [55.751574, 37.594856], zoom: 11 }}>
        <Placemark geometry={coordinate} />
      </Map>
    </YMaps>
  );
}

export default MyMap;
