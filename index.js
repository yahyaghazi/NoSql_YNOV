const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Import routes
const profileRoutes = require('./routes');

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use profile routes
app.use('/profiles', profileRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});