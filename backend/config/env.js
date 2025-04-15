require('dotenv').config();

const config = {
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'default-secret-key', // Fallback for development
  nodeEnv: process.env.NODE_ENV || 'development',
};

module.exports = config;