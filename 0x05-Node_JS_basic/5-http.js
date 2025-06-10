const http = require('http');
const countStudents = require('./3-read_file_async');

const DB = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(DB)
      .then((output) => {
        const fullOutput = `This is the list of our students\n${output}`;
        res.end(fullOutput);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.writeHead(404);
    res.end();
  }
});

app.listen(1245);

module.exports = app;
