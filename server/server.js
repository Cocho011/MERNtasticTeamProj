const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/budget-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require('./models/User'); // Assuming you have a User model defined

// Signup
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
  res.json({ success: true, token });
});

// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.json({ success: false, message: 'User not found' });
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.json({ success: false, message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
  res.json({ success: true, token });
});

// Fetch User Data
app.get('/api/user', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, 'SECRET_KEY');
  const user = await User.findById(decoded.userId);
  res.json({ id: user._id, username: user.username, /* other user data */ });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
