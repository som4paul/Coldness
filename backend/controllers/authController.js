import User from '../models/User.js';

export const register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = user.generateJWT();
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ message: 'Invalid' });
    const match = await user.comparePassword(req.body.password);
    if (!match) return res.status(401).json({ message: 'Invalid' });
    const token = user.generateJWT();
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
