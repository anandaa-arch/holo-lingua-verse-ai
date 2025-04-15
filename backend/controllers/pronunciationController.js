const { analyzeSpeech, getFeedback } = require('../services/pronunciationService');

exports.analyzeSpeech = async (req, res) => {
  try {
    const { audio } = req.body;
    const result = await analyzeSpeech(audio);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const { accuracy } = req.body;
    const feedback = await getFeedback(accuracy);
    res.status(200).json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};