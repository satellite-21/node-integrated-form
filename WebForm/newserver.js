const express = require('express');
const { copyFileSync } = require('fs');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'NodeJS')));

// Render style.html
app.post('/users', (req, res) => {
    console.log("--------------------------------------request---------------------------------------------");
    console.log(req.body);
    console.log(res);
    res.send(req);
});


//how does HTTP works
// how does REST API works


const port = 3000; // Choose any available port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
