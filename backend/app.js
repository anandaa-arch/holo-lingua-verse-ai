const express = require('express');
const cors = require('cors'); // Install if not done: npm install cors
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:8080' })); // Allow requests from frontend

// Custom Middleware
const { authMiddleware } = require('./middleware/auth');
const { errorHandler } = require('./middleware/errorHandler');

// Routes
const authRoutes = require('./routes/auth');
const pronunciationRoutes = require('./routes/pronunciation');
const roleplayRoutes = require('./routes/roleplay');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/pronunciation', authMiddleware, pronunciationRoutes);
app.use('/api/roleplay', authMiddleware, roleplayRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;