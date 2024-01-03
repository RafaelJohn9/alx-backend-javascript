"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createIteratorObject;

function createIteratorObject(report) {
  var employees = [];

  for (var _i = 0, _Object$values = Object.values(report.allEmployees); _i < _Object$values.length; _i++) {
    var dept = _Object$values[_i];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = dept[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var employee = _step.value;
        employees.push(employee);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return employees;
}