export default function getStudentByLocation(studentList, city) {
  return studentList.filter((studentList) => studentList.location === city);
}
