const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function getStudentsData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');

      if (lines.length <= 1) {
        resolve({ totalStudents: 0, details: {} });
        return;
      }

      const students = {};

      lines.slice(1).forEach((line) => {
        const fields = line.split(',');
        const field = fields[fields.length - 1].trim();

        if (!students[field]) {
          students[field] = [];
        }

        students[field].push(fields[0]);
      });

      let totalStudents = 0;

      Object.keys(students).forEach((field) => {
        totalStudents += students[field].length;
      });

      resolve({ totalStudents, details: students });
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  getStudentsData(process.argv[2])
    .then(({ totalStudents, details }) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${totalStudents}`);
      Object.keys(details).forEach((field) => {
        const numStudents = details[field].length;
        res.write(`\nNumber of students in ${field}: ${numStudents}. List: ${details[field].join(', ')}`);
      });
      res.end();
    })
    .catch((error) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`${error.message}\n`);
    });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
module.exports = app;
