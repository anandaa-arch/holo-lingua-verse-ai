const express = require('express');
const router = express.Router();
// Placeholder controllers
router.get('/scenarios', (req, res) => res.status(200).json({ message: 'Get scenarios endpoint' }));
router.post('/conversation', (req, res) => res.status(200).json({ message: 'Start conversation endpoint' }));
router.post('/message', (req, res) => res.status(200).json({ message: 'Send message endpoint' }));

module.exports = router;