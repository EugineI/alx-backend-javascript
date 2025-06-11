import { promises as fs } from 'fs';

async function readDatabase(path) {
  const data = await fs.readFile(path, 'utf8');
  const lines = data.split('\n').filter((line) => line.trim());
  const students = lines.map((l) => l.split(',')).filter((c) => c.length >= 4);
  const fields = {};
  for (const [firstname, , , field] of students) {
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  }
  return fields;
}
export default readDatabase;
