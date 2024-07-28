import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((result) => {
        const { cs, swe } = result;
        res
          .status(200)
          .send(
            `This is the list of out students\nNumber of students in CS: ${
              cs.length
            }. List: ${cs.join(', ')}\nNumber of students in SWE: ${
              swe.length
            }. List: ${swe.join(', ')}`,
          );
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    if (req.url === '/students/SWE') {
      readDatabase(process.argv[2])
        .then((result) => {
          const { swe } = result;
          res.status(200).send(`List: ${swe.join(', ')}`);
        })
        .catch(() => {
          res.status(500).send('Cannot load the database');
        });
    } else if (req.url === '/students/CS') {
      readDatabase('database.csv')
        .then((result) => {
          const { cs } = result;
          console.log('her');
          res.status(200).send(`List: ${cs.join(', ')}`);
        })
        .catch(() => {
          res.status(500).send('Cannot load the database');
        });
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
