import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const reviewSchema = new Schema({
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  comment: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
});

export default model('Review', reviewSchema);
