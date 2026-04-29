const updateStudentGradeByCity = (array, city, newGrades) => array
  .filter((i) => i.location === city)
  .map((j) => {
    const updatedStudent = { ...j };

    const student = newGrades.find((k) => k.studentId === j.id);
    if (student) {
      updatedStudent.grade = student.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }
    return updatedStudent;
  });

export default updateStudentGradeByCity;
