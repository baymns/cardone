import express from 'express';
import Review from '../models/review.js';
import Service from '../models/service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { rating, comment, id, userId } = req.body;
  const feedback = new Review({ rating, comment, userId });
  await Service.findOneAndUpdate(
    { id },
    { $push: { reviews: feedback._id } },
    { new: true },
  );
  try {
    await feedback.save();
  } catch (error) {
    return res.status(401).end();
  }
  return res.json(feedback);
});

export default router;
