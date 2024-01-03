"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createReportObject;

function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: function getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    }
  };
}