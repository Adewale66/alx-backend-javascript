const http = require('node:http');
const fs = require('node:fs/promises');

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

const proxy = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents('database.csv').then((response) => {
      res.end(response);
    });
  }
});

proxy.listen(1245);
