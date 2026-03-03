const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Array of 2 user IDs
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Who has liked whom
  status: { type: String, enum: ['pending', 'matched'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Match', matchSchema);