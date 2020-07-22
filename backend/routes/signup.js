import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    await user.save();
  } catch (error) {
    return res.status(401).end();
  }
  const filteredUser = {
    id: user._id, name: user.name, email: user.email, favourites: user.favourites,
  };
  req.session.user = filteredUser;
  return res.json(filteredUser);
});

export default router;
