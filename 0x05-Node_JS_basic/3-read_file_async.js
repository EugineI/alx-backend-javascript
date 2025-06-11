const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));

      const fields = {};
      for (const student of students) {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      }

      const outputLines = [];
      outputLines.push(`Number of students: ${students.length}`);

      for (const [field, names] of Object.entries(fields)) {
        outputLines.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      const result = outputLines.join('\n');
      console.log(result);
      resolve(result);
    });
  });
}

module.exports = countStudents;
