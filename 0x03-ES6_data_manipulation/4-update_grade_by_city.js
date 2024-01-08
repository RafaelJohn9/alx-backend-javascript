export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentid === student.id);

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: matchingGrade ? matchingGrade.grade : 'N/A',
      };
    });
}
