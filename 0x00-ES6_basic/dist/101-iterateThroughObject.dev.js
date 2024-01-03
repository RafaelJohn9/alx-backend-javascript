"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = iterateThroughObject;

function iterateThroughObject(reportWithIterator) {
  var notFirstElement = false;
  var employeeString = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = reportWithIterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var employee = _step.value;

      if (notFirstElement) {
        employeeString += ' | ';
      }

      notFirstElement = true;
      employeeString += employee;
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

  return employeeString;
}