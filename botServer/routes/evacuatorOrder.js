import express from 'express';
import mongoose from 'mongoose';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import EvacuatorOrder from '../models/evacuatorOrder.js';
import EvacuatorBotUser from '../models/evacuatorBotUser.js';
import userStartAdder from '../userStartAdder.js';

dotenv.config();
const router = express.Router();

const bot = new TelegramBot(`${process.env.TOKEN}`, {
  polling: true,
});

mongoose.connect(
  `mongodb+srv://Sergey:${process.env.MONGO_DB_KEY}@cluster0-aqh9k.mongodb.net/service?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
);

bot.on('message', userStartAdder);

router.post('/', async (req, res) => {
  const { numberOfOrder, username, phone, brand, model, address } = req.body;
  const allDrivers = await EvacuatorBotUser.find();
  allDrivers.map((person) =>
    bot.sendMessage(
      person.telegram_id,
      `Поступил новый заказ: Номер заказа: ${numberOfOrder} Имя заказчика: ${username}, Номер телефона: ${phone}, Автомобиль: ${brand} ${model}, Адрес: ${address}`,
    ),
  );
  return res.end();
});

bot.on('message', async (msg) => {
  if (msg.text.toLowerCase().match('принял заказ')) {
    const number = msg.text.match(/\d{4,7}/gm).join();
    const test = await EvacuatorOrder.findOne({
      numberOfOrder: number,
    });
    if (test.inProgress === false) {
      const driverId = await EvacuatorBotUser.findOne({
        telegram_id: msg.from.id,
      });
      await EvacuatorOrder.findOneAndUpdate(
        {
          numberOfOrder: number,
        },
        { $set: { inProgress: true, driver: driverId } },
      );
      bot.sendMessage(msg.from.id, '✅Отлично! Работаем!');
    } else {
      bot.sendMessage(msg.from.id, '❌Заказ уже в работе');
    }
  }
});

export default router;
