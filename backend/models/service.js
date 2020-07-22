import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const serviceSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  category: String,
  name: {
    type: String,
    required: true,
  },
  address: String,
  coordinates: {
    type: Array,
    required: true,
  },
  distance: {
    type: String,
    default: null,
  },
  workingTime: {
    type: String,
    required: true,
  },
  rating: {
    type: Schema.Types.ObjectId,
    ref: 'Rating',
  },
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review',
  }],
  prefer: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  tags: Array,
  url: String,
  phone: String,
});

export default model('Service', serviceSchema);
