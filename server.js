require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rental')
  .then(() => console.log('✅ MongoDB OK'))
  .catch(err => console.log('❌ MongoDB:', err));

app.get('/api/health', (req, res) => res.json({ status: 'OK' }));

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, title: 'iPhone 15 Pro', category: 'telefon', dailyPrice: 5000 },
    { id: 2, title: 'MacBook Air M2', category: 'laptop', dailyPrice: 12000 },
    { id: 3, title: 'Sony A7IV', category: 'kamera', dailyPrice: 25000 }
  ]);
});

app.listen(PORT, () => console.log(`🚀 Server: port ${PORT}`));
