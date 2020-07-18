import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function MyMap({ boundedBy }) {
  const coordinate = boundedBy
  console.log(coordinate);
  return (
    <YMaps query={{ lang: 'en_RU' }}>
      <Map defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}>
        <Placemark geometry={coordinate} />
      </Map>
    </YMaps>
  );
}

export default MyMap;
