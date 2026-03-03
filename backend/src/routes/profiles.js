const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');
const Match = require('../models/Match');

// Update/Create Profile
router.post('/update', auth, async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate(
      { userId: req.user.userId },
      { ...req.body, updatedAt: Date.now() },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

// Like a User
router.post('/like/:targetUserId', auth, async (req, res) => {
  const myId = req.user.userId;
  const targetId = req.params.targetUserId;

  try {
    // Check if a match record already exists between these two
    let match = await Match.findOne({
      users: { $all: [myId, targetId] }
    });

    if (!match) {
      match = new Match({ users: [myId, targetId], likes: [myId] });
      await match.save();
      return res.json({ status: 'liked' });
    }

    if (!match.likes.includes(myId)) {
      match.likes.push(myId);
      if (match.likes.length === 2) {
        match.status = 'matched';
      }
      await match.save();
    }

    res.json({ status: match.status });
  } catch (err) {
    res.status(500).json({ error: "Interaction failed" });
  }
});

module.exports = router;