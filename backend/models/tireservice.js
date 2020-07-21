import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const tireserviceSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: String,
  coordinates: {
    type: Array,
    required: true,
  },
  workingTime: {
    type: String,
    required: true,
  },
  category: Array,
  url: String,
  phone: Array,
});

export default model('Tireservice', tireserviceSchema);
