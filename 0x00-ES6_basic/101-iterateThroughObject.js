export default function iterateThroughObject(reportWithIterator) {
  let notFirstElement = false;
  let employeeString = '';

  for (const employee of reportWithIterator) {
    if (notFirstElement) {
      employeeString += ' | ';
    }
    notFirstElement = true;
    employeeString += employee;
  }
  return employeeString;
}
