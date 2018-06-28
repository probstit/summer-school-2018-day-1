const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`magic happens at http://${hostname}:${port}/`);
// });

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1 style="color: red"> Hello World </h1>');
// });

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  fs.readFile('./node-js-logo.png', (err, content) => {
    res.end(content);
  });
});

server.listen(port, hostname, () => {
  console.log(`magic happens at http://${hostname}:${port}/`);
});
