const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

const dbname = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = countStudents(dbname);
    students.then((val) => {
      res..status(200).send(msg + val);
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.listen(port);

module.exports = app;
