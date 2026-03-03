
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  uniIdImage: {
    type: String,
  },
  budgetMin: {
    type: Number,
    required: true, 
  },
  budgetMax: {
    type: Number,
    required: true, 
  },
  roomType: {
    type: String,
    enum: ['single', 'double', 'apartment', 'shared'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Profile', profileSchema);
