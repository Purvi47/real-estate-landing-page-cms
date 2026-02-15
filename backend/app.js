require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contentRoutes = require('./routes/contentRoutes');
const { seedContent } = require('./controllers/contentController');

const app = express();
app.use(cors());
app.use(express.json());

// Use the variable from .env
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(async () => {
    console.log('MongoDB connected');
    await seedContent();
  })
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/content', contentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));