// backend/src/routes/matches.js
const express = require('express');
const Profile = require('../models/Profile');
const Questionnaire = require('../models/Questionnaire');

const router = express.Router();

// For now, just return mock matches based on dummy scores
function computeCompatibility(userA, userB) {
  // This is a placeholder for later AI‑style logic
  const sleepDiff = Math.abs(userA.sleepHours - userB.sleepHours);
  const cleanDiff = Math.abs(userA.cleanliness - userB.cleanliness);
  const budgetOverlap =
    Math.min(userA.budgetMax, userB.budgetMax) - Math.max(userA.budgetMin, userB.budgetMin);
  const budgetFraction =
    budgetOverlap / Math.max(userA.budgetMax - userA.budgetMin, 1);

  let score = 0;
  score += 30 - sleepDiff * 3;        // 0–30
  score += 20 - cleanDiff * 4;        // 0–20
  score += budgetFraction * 30;       // 0–30
  score += 20 * Math.random();        // add some randomness

  return Math.min(100, Math.max(0, score));
}

// In real code, use real DB data instead of this mock
const mockMatches = [
  { id: '1', name: 'Samuel', compatibility: 88, budgetMin: 6000, budgetMax: 9000 },
  { id: '2', name: 'Linda', compatibility: 72, budgetMin: 5000, budgetMax: 8000 },
  { id: '3', name: 'Ben', compatibility: 91, budgetMin: 7000, budgetMax: 12000 },
];

router.get('/', async (req, res) => {
  const userId = req.query.userId;
  const budgetMin = Number(req.query.budgetMin) || 5000;
  const budgetMax = Number(req.query.budgetMax) || 15000;

  if (!userId) {
    return res.status(400).json({ error: 'userId required' });
  }

  // For now, filter by budget range
  const filtered = mockMatches.filter(
    (m) => m.budgetMin <= budgetMax && m.budgetMax >= budgetMin
  );

  // For now, just return as-is; later, sort by compatibility
  res.json({
    matches: filtered.sort((a, b) => b.compatibility - a.compatibility),
  });
});

module.exports = router;
