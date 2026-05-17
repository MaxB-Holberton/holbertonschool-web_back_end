const fs = require('node:fs');

function readDatabase(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, file) => {
			if (err) {
				console.log(err.message);
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
		const rtnObj = {
			CS: csList,
			SWE: sweList,
		};
		resolve(rtnObj);
		});
	});
};

module.exports = readDatabase;
