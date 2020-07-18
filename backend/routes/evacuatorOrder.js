import express from 'express';
import EvacuatorOrder from '../models/evacuatorOrder.js';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  const { username, phone, brand, model } = req.body;
  const order = new EvacuatorOrder({ username, phone, brand, model });
  try {
    await order.save();
  } catch (error) {
    return res.status(401).end();
  }
  res.json(order);
});

export default router;
