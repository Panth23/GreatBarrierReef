const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000; // You can change the port number if needed
const rootDirectory = 'src'; // Adjust this to the name of your source directory

const server = http.createServer((req, res) => {
  const filePath = req.url === '/' ? 'index.html' : req.url.slice(1);
  const fileExtension = path.extname(filePath);
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
  }[fileExtension] || 'text/plain';

  // Adjust the path to the src directory
  const file = path.join(rootDirectory, filePath);

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
