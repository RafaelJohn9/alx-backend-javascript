/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
export default class Currency {
  constructor(code, name) {
    this._code = this.validateString(code, 0);
    this._name = this.validateString(name, 1);
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = this.validateString(newCode, 0);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName, 1);
  }

  validateString(string, parameterNumber) {
    const parameterChecker = {
      0: 'Code',
      1: 'Name',
    };
    if (typeof string !== 'string') {
      throw new TypeError(`${parameterChecker.parameterNumber} must be a string`);
    } else {
      return (string);
    }
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
