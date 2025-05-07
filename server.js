const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movies');
const uploadRoutes = require('./routes/upload');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);
app.use('/upload', uploadRoutes);

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://mdjasimm107:rsCioL4KMPdSISS0@movipro.cziuwhh.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});
