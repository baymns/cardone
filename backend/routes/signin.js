import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await User.findOne({ email, password });
  } catch (error) {
    return res.status(500).end();
  }
  if (!user) {
    return res.status(401).end();
  }
  req.session.user = user;
  return res.json(user);
});

export default router;
