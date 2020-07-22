import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.js';
import checkedEmail from '../middleware/checkedEmail.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json('Все поля обязательны к заполнению');
  }
  if (!checkedEmail(email)) {
    return res.json('Недопустимый формат email');
  }

  try {
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.json('Пользователь с таким email уже существует');
    }

    const user = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });
    await user.save();
    const filteredUser = { id: user._id, name: user.name, email: user.email };
    req.session.user = filteredUser;
    return res.json(filteredUser);
  } catch (error) {
    return res.status(401).end();
  }
});

export default router;
