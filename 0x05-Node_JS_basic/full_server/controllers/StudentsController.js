import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2];
    try {
      const fields = await readDatabase(dbPath);
      const msg = ['This is the list of our students'];
      const sortedFields = Object.keys(fields).sort(
        (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
      );

      for (const field of sortedFields) {
        const list = fields[field].join(', ');
        msg.push(
          `Number of students in ${field}: ${fields[field].length}. List: ${list}`,
        );
      }

      return res.status(200).send(msg.join('\n'));
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const allowed = ['CS', 'SWE'];
    if (!allowed.includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const dbPath = process.argv[2];
    try {
      const fields = await readDatabase(dbPath);
      const students = fields[major] || [];
      return res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
