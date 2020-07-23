/* eslint-disable import/extensions */
import express from 'express';
import fetch from 'node-fetch';
import EvacuatorOrder from '../models/evacuatorOrder.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    username, phone, brand, model, address,
  } = req.body;
  const order = new EvacuatorOrder({
    username, phone, brand, model, address,
  });
  try {
    await order.save();
  } catch (error) {
    return res.status(401).end();
  }
  try {
    await fetch('http://localhost:3005/api/tginfobot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
  } catch (error) {
    return res.status(406).end();
  }
  return res.end();
});

export default router;
