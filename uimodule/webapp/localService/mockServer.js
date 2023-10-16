const express = require('express');
const app = express();
const port = 3000; // Set your desired port number

// Define your mock data
const startCheck = require('./mockData.json');

// Enable CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin (for development)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// configure delat for all requests
app.use((req, res, next) => {
  setTimeout(() => {
    next();
  }, 1000);
});

// Define your mock services
app.get('/startCheck', (req, res) => {
  res.json(startCheck);
});

// Start the server and make it listen to port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
