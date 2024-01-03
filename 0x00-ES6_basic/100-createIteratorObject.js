export default function createIteratorObject(report) {
  const employees = [];
  for (const dept of Object.values(report.allEmployees)) {
    for (const employee of dept) {
      employees.push(employee);
    }
  }
  return employees;
}
