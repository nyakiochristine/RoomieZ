const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Message = require('../models/Message');
const Match = require('../models/Match');

// Get all messages for a specific match
router.get('/:matchId', auth, async (req, res) => {
  try {
    // Security check: Ensure the user belongs to this match
    const match = await Match.findById(req.params.matchId);
    if (!match || !match.users.includes(req.user.userId)) {
      return res.status(403).json({ error: "Unauthorized access to chat" });
    }

    const messages = await Message.find({ matchId: req.params.matchId })
      .sort({ createdAt: 1 }); // Oldest first
    
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Could not retrieve messages" });
  }
});

module.exports = router;