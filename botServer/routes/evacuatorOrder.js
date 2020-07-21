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

mongoose.connect('mongodb://localhost:27017/cardone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

bot.on('message', userStartAdder);

router.post('/', async (req, res) => {
  console.log(req.body);
  const { username, phone, brand, model, address } = req.body;
  const allDrivers = await EvacuatorBotUser.find();
  allDrivers.map((person) =>
    bot.sendMessage(
      person.telegram_id,
      `Поступил новый заказ: Имя заказчика: ${username}, Номер телефона: ${phone}, Автомобиль: ${brand} ${model}, Адрес: ${address}`,
    ),
  );
  return res.json('Заявка на эвакуацию поступила исполнителям');
});

export default router;
