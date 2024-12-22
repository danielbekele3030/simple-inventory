import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export const login = async (req, res) => {
  const { username, password } = req.body;
  try { const user = await User.findOne({ username });
   if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
}
    const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) return res.status(400).json({ message: 'Invalid username or password' }); 
     const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' }); 
     res.json({ token });
 } catch (err) { res.status(400).json({ error: err.message }); }
  }
export default { register, login };