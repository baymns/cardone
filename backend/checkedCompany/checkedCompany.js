/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import mongoose from 'mongoose';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import Service from '../models/service.js';

dotenv.config();
mongoose.connect('mongodb://localhost:27017/services', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

(async () => {
  const latitude = 55.750625;
  const longitude = 37.626;
  const category = [
    'автозаправка',
    'автосервис',
    'автомойка',
    'автозапчасти',
    'шиномонтаж',
  ];
  // const week = 604800;

  category.map(async (service) => {
    const response = await fetch(
      encodeURI(
        `https://search-maps.yandex.ru/v1/?apikey=8fbe0a2c-1818-447d-bae8-98146681cb27&text=${service}&type=biz&lang=ru_RU&ll=${longitude},${latitude}&spn=0.052069,0.050552&results=5`,
      ),
    );
    const json = await response.json();
    console.log(json.features);
    const result = json.features.map((item) => {
      console.log(item);
      if (!Service.findOne({ name: item.properties.CompanyMetaData.name })) {
        console.log('item', item.properties.CompanyMetaData);
        return new Service({
          id: item.properties.CompanyMetaData.id,
          name: item.properties.CompanyMetaData.name,
          category,
          address: item.properties.CompanyMetaData.address,
          coordinates: item.properties.boundedBy[0],
          workingTime:
            (item.properties.CompanyMetaData.Hours
              && item.properties.CompanyMetaData.Hours.text)
            || 'нет данных о графике работы',
          tags: item.properties.CompanyMetaData.Categories,
          url: item.properties.CompanyMetaData.url,
          phone:
            (item.properties.CompanyMetaData.Phones
              && item.properties.CompanyMetaData.Phones[0].formatted)
            || 'номер не указан',
        });
      }
    });

    await Service.insertMany(result);
    await mongoose.disconnect();
  });
})();
