import mongoose from 'mongoose';
import fetch from 'node-fetch';
import Autoservice from './autoservice.js';
import Tireservice from './tireservice.js';
import Autoparts from './autoparts.js';
import Carwash from './carwash.js';

mongoose.connect('mongodb://localhost:27017/cardone', {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

(async () => {
  const latitude = 55.750625;
  const longitude = 37.626;
  const response = await fetch(
    encodeURI(
      `https://search-maps.yandex.ru/v1/?apikey=8fbe0a2c-1818-447d-bae8-98146681cb27&text=автосервис&type=biz&lang=ru_RU&ll=${longitude},${latitude}&spn=0.052069,0.050552&results=30`,
    ),
  );
  const json = await response.json();
  const result = json.features.map((item) => new Autoservice({
    id: item.properties.CompanyMetaData.id,
    name: item.properties.CompanyMetaData.name,
    address: item.properties.CompanyMetaData.address,
    coordinates: item.properties.boundedBy[0],
    workingTime: (item.properties.CompanyMetaData.Hours && item.properties.CompanyMetaData.Hours.text) || 'нет данных о графике работы',
    category: item.properties.CompanyMetaData.Categories,
    url: item.properties.CompanyMetaData.url,
    phone: item.properties.CompanyMetaData.Phones,
  }));

  await Autoservice.insertMany(result);
  await mongoose.disconnect();
})();
