const express = require('express');
const fs = require('node:fs/promises');

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const lines = (await fs.readFile(path))
      .toString('utf8')
      .split('\n')
      .slice(1);
    let count = 0;
    for (const line of lines) {
      if (line) {
        count += 1;
      }
    }
    const swe = [];
    const cs = [];

    lines.forEach((line) => {
      if (line.includes('CS')) {
        cs.push(line.split(',')[0]);
      }
      if (line.includes('SWE')) {
        swe.push(line.split(',')[0]);
      }
    });
    return `Number of students: ${count}\nNumber of students in CS: ${
      cs.length
    }. List: ${cs.join(', ')}\nNumber of students in SWE: ${
      swe.length
    }. List: ${swe.join(', ')}`;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv').then((result) => {
    res.send(result);
  });
});

app.listen(port);

module.exports = app;
