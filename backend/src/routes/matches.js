const express = require('express');
const router = express.Router();
const Questionnaire = require('../models/Questionnaire');
const Profile = require('../models/Profile');
const { computeCompatibility } = require('../utils/matcher'); // Importing logic for Person 1 & 3 [cite: 147, 159]
const auth = require('../middleware/auth'); 

// GET /api/matches - Retrieve a ranked list of compatible roommates [cite: 28, 50]
router.get('/', auth, async (req, res) => {
  try {
    // 1. Fetch the current user's data [cite: 46]
    const myData = await Questionnaire.findOne({ userId: req.user.userId });
    const myProfile = await Profile.findOne({ userId: req.user.userId });

    // Ensure the user has completed the required steps before matching [cite: 26]
    if (!myData || !myProfile) {
      return res.status(400).json({ 
        error: "Please complete your profile and questionnaire before viewing matches." 
      });
    }

    // 2. Fetch all other users' data [cite: 28]
    // We populate 'userId' to include basic account info (like email) in the response
    const otherQuestionnaires = await Questionnaire.find({ userId: { $ne: req.user.userId } }).populate('userId', '-passwordHash');
    const allOtherProfiles = await Profile.find({ userId: { $ne: req.user.userId } });

    // 3. Calculate scores for each potential match [cite: 27, 49]
    const results = otherQuestionnaires.map(otherQuest => {
      // Find the corresponding profile for this specific user
      const otherProf = allOtherProfiles.find(p => p.userId.toString() === otherQuest.userId._id.toString());
      
      // If a user has a questionnaire but no profile, skip or return 0 score
      if (!otherProf) return null;

      // Prepare data for the compatibility algorithm
      const userA = { ...myData._doc, ...myProfile._doc };
      const userB = { ...otherQuest._doc, ...otherProf._doc };

      return {
        user: otherQuest.userId,
        profile: otherProf,
        compatibility: computeCompatibility(userA, userB) // Automated score calculation [cite: 27]
      };
    }).filter(match => match !== null); // Remove null entries

    // 4. Rank by compatibility and return results [cite: 28, 50, 78]
    const rankedMatches = results
      .filter(m => m.compatibility >= 40) // Threshold for "Must-Have" quality [cite: 78]
      .sort((a, b) => b.compatibility - a.compatibility);

    res.json({
      success: true,
      count: rankedMatches.length,
      matches: rankedMatches
    });

  } catch (err) {
    console.error('Matching Error:', err);
    res.status(500).json({ error: "Internal Server Error - Matching engine failed." });
  }
});

module.exports = router;