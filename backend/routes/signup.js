import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
  } catch (error) {
    return res.status(401).end();
  }
  req.session.user = user;
  res.json(user);
});

export default router;
