export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name);
    this._length = this.validateNumber(length);
    this._students = this.validateArrayOfStrings(students);
  }

  // name getter and setter
  get name() {
    return (this._name);
  }

  set name(newName) {
    this._name = this.validateString(newName);
  }

  // length getter and setter
  get length() {
    return (this._length);
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength);
  }

  // students getter and setter
  get students() {
    return (this._students);
  }

  set students(newStudents) {
    this._students = this.validateArrayOfStrings(newStudents);
  }

  validateString(string) {
    if (typeof string !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      return (string);
    }
  }

  validateNumber(number) {
    if (typeof number !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      return (number);
    }
  }

  validateArrayOfStrings(array) {
    if (!Array.isArray(array) || !array.every((item) => typeof item === 'string')) {
      throw new TypeError('students must be a an array of strings');
    } else {
      return (array);
    }
  }
}
