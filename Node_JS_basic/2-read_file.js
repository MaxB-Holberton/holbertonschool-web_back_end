const fs = require('node:fs');

function countStudents(path) {
  try {
    const file = fs.readFileSync(path, 'utf8');
    const rows = file.split('\n');

    const csList = [];
    const sweList = [];
    let count = 0;
    rows.forEach((row) => {
      const item = row.split(',');
      if (item[3] === 'CS') {
        csList.push(item[0]);
        count += 1;
      } else if (item[3] === 'SWE') {
        sweList.push(item[0]);
        count += 1;
      }
    });
    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${csList.length}. List: ${csList.toString().split(',').join(', ')}`);
    console.log(`Number of students in SWE: ${sweList.length}. List: ${sweList.toString().split(',').join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
