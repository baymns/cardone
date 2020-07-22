import express from 'express';
import Review from '../models/review.js';
import Service from '../models/service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { rating, comment, id } = req.body;
  console.log(id);

  const feedback = new Review({ rating, comment });
  const service = await Service.findOneAndUpdate(
    { id },
    { $push: { reviews: feedback._id } },
    { new: true },
  );
  console.log(service);

  try {
    await feedback.save();
  } catch (error) {
    return res.status(401).end();
  }
  return res.end();
});

export default router;
