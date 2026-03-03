const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'roomiez-secret-please-change-in-env');
    req.user = decoded; // Adds userId and email to the request
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};