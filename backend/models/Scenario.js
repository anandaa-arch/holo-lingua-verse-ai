const mongoose = require('mongoose');

const scenarioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  language: { type: String, required: true },
  level: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Scenario', scenarioSchema);