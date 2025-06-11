const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/test') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello ALX!');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
