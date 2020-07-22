import express from 'express';
import User from '../models/user.js';
import Service from '../models/service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  let service;
  try {
    service = await Service.findOneAndUpdate({ id }, { $push: { prefer: req.session.user.id } }, { new: true });
  } catch (error) {
    return error;
  }
  if (!service) {
    return res.status(406).end();
  }
  try {
    await User.findOneAndUpdate({ _id: req.session.user.id }, { $push: { favourites: service._id } }, { new: true });
  } catch (error) {
    return (error);
  }
  return res.end();
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  let service;
  try {
    service = await Service.findOneAndUpdate({ id }, { $pull: { prefer: req.session.user.id } }, { new: true });
  } catch (error) {
    return error;
  }
  if (!service) {
    return res.status(406).end();
  }
  try {
    await User.findOneAndUpdate({ _id: req.session.user.id }, { $pull: { favourites: service._id } }, { new: true });
  } catch (error) {
    return (error);
  }
  return res.end();
});

export default router;
