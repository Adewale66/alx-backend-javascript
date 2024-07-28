const fs = require('node:fs/promises');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path)
      .then((res) => {
        const lines = res.toString('utf8').split('\n').slice(1);
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
        resolve({
          cs,
          swe,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default readDatabase;
