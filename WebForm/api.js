const bodyParser = require('body-parser');
const express = require('express');
const { copyFileSync } = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'start.html')));


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST /submit route
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  res.status(200).json({ message: 'Form data received' });
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
