/* eslint-disable import/extensions */
import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.patch('/', async (req, res) => {
  const { userId, avatar } = req.body;
  try {
    await User.findByIdAndUpdate(userId, { avatar }, { new: true });
    return res.end();
  } catch (error) {
    return res.status(500).end();
  }
});
export default router;
