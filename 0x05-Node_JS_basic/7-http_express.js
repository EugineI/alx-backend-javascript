const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const DB = process.argv[2];

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  try {
    const output = await countStudents(DB);
    res.end(output);
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(1245);

module.exports = app;
