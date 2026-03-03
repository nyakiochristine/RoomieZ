/**
 * Logic for Person 1 & 3: Compatibility Engine
 * Calculates a score from 0-100 based on questionnaire responses[cite: 78, 49].
 */

const computeCompatibility = (userA, userB) => {
  let score = 0;
  const totalWeight = 100;

  // 1. Cleanliness (Weight: 20%)
  if (userA.cleanliness === userB.cleanliness) {
    score += 20; 
  } else if (
    (userA.cleanliness === 'moderate' && userB.cleanliness === 'neat-freak') ||
    (userA.cleanliness === 'moderate' && userB.cleanliness === 'organized-chaos')
  ) {
    score += 10; // Partial match for "Moderate"
  }

  // 2. Sleep Schedule (Weight: 15%)
  if (userA.sleepSchedule === userB.sleepSchedule) score += 15;

  // 3. Social Level (Weight: 15%)
  if (userA.socialLevel === userB.socialLevel) score += 15;

  // 4. Noise Tolerance (Weight: 10%)
  if (userA.noiseTolerance === userB.noiseTolerance) score += 10;

  // 5. Budget Precision (Weight: 30%) 
  // Calculates overlap between KSh ranges 
  const overlap = Math.min(userA.budgetMax, userB.budgetMax) - Math.max(userA.budgetMin, userB.budgetMin);
  if (overlap > 0) {
    score += 30;
  }

  // 6. Personality/Smoking (Weight: 10%)
  if (userA.introversion === userB.introversion) score += 5;
  if (userA.smoking === userB.smoking) score += 5;

  return Math.min(score, totalWeight);
};

module.exports = { computeCompatibility };