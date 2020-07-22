import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  favourites: [{
    type: Schema.Types.ObjectId,
    ref: 'Service',
  }],
});

export default model('User', userSchema);
