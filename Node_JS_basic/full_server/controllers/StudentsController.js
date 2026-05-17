const readDatabase = require('../utils');

const file = process.argv[2];
export default class StudentsController {
	static getAllStudents(request, response) {
		readDatabase(file).then((data) => {
			let dataReturn = 'This is the list of our students \n';
			const keys = Object.keys(data).sort();
			keys.forEach((listItem) => {
				dataReturn += `Number of students in ${listItem}: `;
				dataReturn += `${data[listItem].length}. List: ${data[listItem].join(', ')}`;
			});
			response.status(200).send(dataReturn);
		}).catch((err) => {
			response.status(500).send('Cannot load the database');
		});
	}
	static getAllStudentByMajor(request, response) {
		const major = request.params.major;
		if (major !== 'CS' && major !== 'SWE') {
			response.status(500).send('Major parameter must be CS or SWE');
			return;
		}
		readDatabase(file).then((data) => {
			response.status(200).send(`List: ${data[major].join(', ')}`);
		}).catch((err) => {
			response.status(500).send('Cannot load the database');
		});
	}
}
