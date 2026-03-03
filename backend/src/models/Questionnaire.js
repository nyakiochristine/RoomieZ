const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  
  // 1. Cleanliness
  cleanliness: { 
    type: String, 
    enum: ['neat-freak', 'moderate', 'organized-chaos'], 
    required: true 
  },
  // 2. Sleep Schedule
  sleepSchedule: { 
    type: String, 
    enum: ['early-bird', 'night-owl', 'flexible'], 
    required: true 
  },
  // 3. Socializing in the Room
  socialLevel: { 
    type: String, 
    enum: ['frequent-guests', 'occasional', 'private-sanctuary'], 
    required: true 
  },
  // 4. Noise Tolerance
  noiseTolerance: { 
    type: String, 
    enum: ['silence-needed', 'moderate-noise', 'can-sleep-anywhere'], 
    required: true 
  },
  // 5. Study Habits
  studyEnvironment: { 
    type: String, 
    enum: ['study-at-home', 'study-at-library', 'mix'], 
    required: true 
  },
  // 6. Sharing Items
  sharingPolicy: { 
    type: String, 
    enum: ['share-everything', 'ask-first', 'do-not-share'], 
    required: true 
  },
  // 7. Smoking/Vaping
  smoking: { 
    type: Boolean, 
    default: false 
  },
  // 8. Personality
  introversion: { 
    type: String, 
    enum: ['introverted', 'extroverted', 'ambiverted'], 
    required: true 
  },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Questionnaire', questionnaireSchema);