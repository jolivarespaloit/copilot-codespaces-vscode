// Create web server
// Create a route for comments
// Send a response with a list of comments
// Start the web server

// Import the express module
const express = require('express');

// Create a new express application
const app = express();

// Create a route for comments
app.get('/comments', (req, res) => {
  // Send a response with a list of comments
  res.send([
    'This is my first comment!',
    'This is my second comment!',
  ]);
});

// Start the web server
app.listen(4001, () => {
  console.log('Web server is listening on port 4001');
});