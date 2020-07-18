import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: [
      (phone) => {
        const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return re.test(phone);
      },
      'Неправильный формат номера телефона. Введите заново.',
    ],
    match: [
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
      'Please fill a valid phone number',
    ],
  },
  brand: String,
  model: String,
});

export default model('EvacuatorOrder', orderSchema);
