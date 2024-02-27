#!/usr/bin/node
/**
 * used to create a http server
 */
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School');
});
const port = 1245;
server.listen(port);
