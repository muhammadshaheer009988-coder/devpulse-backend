const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check check karein ke Bearer Token header me hai ya nahi
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: "Unauthorized! Token missing hai." });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Token verify karein
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'devpulse_super_secret_jwt_key_2026');
    req.user = decoded; // req.user me userId aur role save ho jayega
    next(); // Agle step par jane ki ijazat dein
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid ya expired token!" });
  }
};

module.exports = { authenticateUser };