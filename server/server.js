const express = require('express');
const connectDB = require('./config/connection');
const path = require('path');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));

