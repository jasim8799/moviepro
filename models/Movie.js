const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String },
  tmdbId: { type: Number }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);
