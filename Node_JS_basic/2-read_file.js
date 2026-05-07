const fs = require('node:fs');

function countStudents(path){
  try {
    const file = fs.readFileSync(path, 'utf8');
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
    console.log('Number of students: ' + count);
    console.log("Number of students in CS: " + cs_list.length + ". List: " + cs_list.toString().split(',').join(', '));
    console.log("Number of students in SWE: " + swe_list.length + ". List: " + swe_list.toString().split(',').join(', '));
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
