/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const candidate = await User.findOne({ email }).populate('favourites');
    if (candidate) {
      const checkPassword = await bcrypt.compare(password, candidate.password);
      if (checkPassword) {
        const filteredUser = {
          id: candidate._id,
          name: candidate.name,
          email: candidate.email,
          favourites: candidate.favourites,
        };
        req.session.user = filteredUser;
        return res.json(filteredUser);
      }
      return res.json('Пароли не сопадают');
    }
    return res.json('Пользователя не существует');
  } catch (error) {
    return res.status(500).end();
  }
});

export default router;
