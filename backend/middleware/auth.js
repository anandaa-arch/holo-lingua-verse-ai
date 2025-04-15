const authMiddleware = (req, res, next) => {
    // Placeholder: Add JWT verification logic here
    // Example: Verify token from req.headers['authorization']
    // const token = req.headers['authorization']?.split(' ')[1];
    // if (!token) return res.status(401).json({ message: 'No token provided' });
    // // Add JWT verification logic with jsonwebtoken
    next(); // Allow all requests for now
  };
  
  module.exports = { authMiddleware };