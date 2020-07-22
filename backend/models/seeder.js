import mongoose from 'mongoose';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import Service from './service.js';

dotenv.config();

mongoose.connect(
  `mongodb+srv://Sergey:${process.env.MONGO_DB_KEY}@cluster0-aqh9k.mongodb.net/service?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
);

(async () => {
  const latitude = 55.750625;
  const longitude = 37.626;
  const category = 'шиномонтаж';
  try {
    const response = await fetch(
      encodeURI(
        `https://search-maps.yandex.ru/v1/?apikey=8fbe0a2c-1818-447d-bae8-98146681cb27&text=${category}&type=biz&lang=ru_RU&ll=${longitude},${latitude}&spn=0.052069,0.050552&results=500`,
      ),
    );
    const json = await response.json();
    const result = json.features.map((item) => new Service({
      id: item.properties.CompanyMetaData.id,
      name: item.properties.CompanyMetaData.name,
      category,
      address: item.properties.CompanyMetaData.address,
      coordinates: item.properties.boundedBy[0],
      workingTime: (item.properties.CompanyMetaData.Hours && item.properties.CompanyMetaData.Hours.text) || 'нет данных о графике работы',
      tags: item.properties.CompanyMetaData.Categories,
      url: item.properties.CompanyMetaData.url,
      phone: (item.properties.CompanyMetaData.Phones && item.properties.CompanyMetaData.Phones[0].formatted) || 'номер не указан',
    }));

    await Service.insertMany(result);
    await mongoose.disconnect();
  } catch (err) {
    return err;
  }
})();
