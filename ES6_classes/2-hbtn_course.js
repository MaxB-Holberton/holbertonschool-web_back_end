export default class HolbertonCourse
{
	nameValid = function(name){
		if (typeof name !== "string"){
			throw new TypeError("Name must be a string");
		}
		return name;
	}

	lengthValid = function(length){
		if (typeof length !== "number"){
			throw new TypeError("Length must be a number");
		}
		return length;
	}

	studentsValid = function(students){
		if(!Array.isArray(students)){
			throw new TypeError("students must be an Array");
		}
		students.forEach((student) => {
			if (typeof student !== "string"){
				throw new TypeError("student must be a String");
			}
		});
		return students;
	}

	constructor(name, length, students){
		this._name = this.nameValid(name);
		this._length = this.lengthValid(length);
		this._students = this.studentsValid(students);
	}

	get name() {
		return this._name;
	}

	get length() {
		return this._length;
	}

	get students() {
		return this._students;
	}

	set name(name) {
		this._name = this.nameValid(name);
	}

	set length(length) {
		this._length = this.lengthValid(length);
	}

	set students(students) {
		this._students = this.studentsValid(students);
	}
}
