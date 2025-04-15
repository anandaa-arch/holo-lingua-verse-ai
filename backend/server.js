require('dotenv').config(); // Still needed at the top
console.log('MONGO_URI:', process.env.MONGO_URI);
const app = require('./app');
const { connectDB } = require('./config/database');
const config = require('./config/env');

const PORT = config.port;

const startServer = async () => {
  try {
    await connectDB();
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

startServer();