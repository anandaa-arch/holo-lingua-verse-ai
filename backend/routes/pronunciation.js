const express = require('express');
const router = express.Router();
// Placeholder controllers
router.post('/analyze', (req, res) => res.status(200).json({ message: 'Analyze speech endpoint' }));
router.post('/feedback', (req, res) => res.status(200).json({ message: 'Get feedback endpoint' }));

module.exports = router;