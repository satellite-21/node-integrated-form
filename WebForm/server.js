const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'start.html');
  console.log(req.url);
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading HTML file');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      console.log(req.url);
      res.end(content);
    }
  });
});

const port = 3000; // Choose any available port number
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

