// index.js
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded(required=true))

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/Menu', (req, res) => {
    res.send('List of menu');
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
