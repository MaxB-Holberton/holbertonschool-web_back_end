const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');

const dbname = process.argv[2];

const host = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = countStudents(dbname);
      students.then((val) => {
        res.write(val);
        res.end();
      });
    } catch (err) {
      res.end(err.message);
    }
  } else if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else {
    res.statusCode = 404;
    res.end('err');
  }
});

app.listen(port, host);

module.exports = app;
