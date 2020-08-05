/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import express from 'express';
import Review from '../models/review.js';
import Service from '../models/service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    rating, comment, id, userId,
  } = req.body;
  const feedback = await new Review({ rating, comment, userId });
  await Service.findOneAndUpdate(
    { id },
    { $push: { reviews: feedback._id } },
    { new: true },
  );
  try {
    await feedback.save();
  } catch (error) {
    return res.status(406).end();
  }
  const fullFeedback = await Review.findOne({ _id: feedback._id }).populate('userId');
  return res.json(fullFeedback);
});

export default router;
