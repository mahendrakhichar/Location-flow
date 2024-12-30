import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  houseNumber: { type: String, required: true },
  street: { type: String, required: true },
  category: { type: String, enum: ['Home', 'Office', 'Friends & Family'], required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
});

export default mongoose.model('Address', addressSchema);