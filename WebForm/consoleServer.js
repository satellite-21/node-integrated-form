const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  const filePath = path.join(__dirname, pathname === '/' ? 'start.html' : pathname);

  if (req.method === 'GET') {
    // Render start.html on GET request
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading HTML file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else if (req.method === 'POST' && pathname === '/submit') {
    // Handle form submission on POST request
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      const formData = new URLSearchParams(data);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Form data received');
    });
  } else {
    // Handle other routes
    res.writeHead(404);
    res.end('Not Found');
  }
});

const port = 3000; // Choose any available port number
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
