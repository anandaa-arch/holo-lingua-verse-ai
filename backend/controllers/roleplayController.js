const { getScenarios, startConversation, sendMessage } = require('../services/roleplayService');

exports.getScenarios = async (req, res) => {
  try {
    const scenarios = await getScenarios();
    res.status(200).json(scenarios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.startConversation = async (req, res) => {
  try {
    const { scenarioId } = req.body;
    const conversation = await startConversation(req.user._id, scenarioId);
    res.status(201).json(conversation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const { conversationId, text } = req.body;
    const response = await sendMessage(req.user._id, conversationId, text);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};