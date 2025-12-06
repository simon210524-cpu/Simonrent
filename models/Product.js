const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  images: [String],
  dailyPrice: { type: Number, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: {
    address: String,
    lat: Number,
    lng: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
