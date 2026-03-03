// backend/src/models/Questionnaire.js
const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  sleepHours: {
    type: Number,
    min: 0,
    max: 24,
  },
  cleanliness: {
    type: Number,
    min: 1,
    max: 5,
  },
  studyPercentage: {
    type: Number,
    min: 0,
    max: 100,
  },
  socialPercentage: {
    type: Number,
    min: 0,
    max: 100,
  },
  noiseTolerance: {
    type: Number,
    min: 1,
    max: 5,
  },
  // You can add all 20+ fields later
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Questionnaire', questionnaireSchema);
