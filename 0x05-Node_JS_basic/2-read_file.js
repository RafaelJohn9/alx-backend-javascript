#!/usr/bin/node
const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = {};
    let firstLine = true;
    for (const line of lines) {
      if (firstLine) {
        firstLine = false;
        // eslint-disable-next-line no-continue
        continue;
      }
      if (line === '') {
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
