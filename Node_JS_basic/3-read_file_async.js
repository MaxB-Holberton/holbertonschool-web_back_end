const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, file) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

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
      let newresponse = `Number of students: ${count}`;
      newresponse += `\nNumber of students in CS: ${csList.length}. List: ${csList.toString().split(',').join(', ')}`;
      newresponse += `\nNumber of students in SWE: ${sweList.length}. List: ${sweList.toString().split(',').join(', ')}`;
      resolve(newresponse);
      console.log(newresponse);
    });
  });
}
module.exports = countStudents;
