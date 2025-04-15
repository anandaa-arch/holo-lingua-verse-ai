const { register, login } = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await register(req.body);
    res.status(201).json({ message: 'User registered', user: { email: user.email, name: user.name } });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await login(req.body);
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};