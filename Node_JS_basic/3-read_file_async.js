const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, file) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const rows = file.split('\n');
      const cs_list = [];
      const swe_list = [];
      let count = 0;
      rows.forEach(row => {
        const item = row.split(",");
        if (item[3] === "CS") {
          cs_list.push(item[0]);
          count++;
        }
        else if (item[3] === "SWE") {
          swe_list.push(item[0]);
          count++;
        }
      });
      let newresponse = 'Number of students: ' + count;
      newresponse += "\nNumber of students in CS: " + cs_list.length + ". List: " + cs_list.toString().split(',').join(', ');
      newresponse += "\nNumber of students in SWE: " + swe_list.length + ". List: " + swe_list.toString().split(',').join(', ');
      resolve(newresponse);
      console.log(newresponse);
    });
  });
}
module.exports = countStudents;
