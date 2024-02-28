#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  return (
    new Promise(((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(Error('Cannot load the database'));
        } else {
          const lines = data.split('\n');
          const students = {};
          let firstLine = true;
          for (const line of lines) {
            if (firstLine) {
              firstLine = false;
              // eslint-disable-next-line no-continue
              continue;
            }
            if (line.trim() === '') {
              lines.pop(line);
            } else {
              const student = line.split(',');
              if (!students[student[3]]) {
                students[student[3]] = [];
              }
              students[student[3]].push(student[0]);
            }
          }
          console.log(`Number of students: ${lines.length - 1}`);
          for (const field in students) {
            if (field) {
              console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
            }
          }
          resolve();
        }
      });
    }))
  );
}

module.exports = countStudents;
