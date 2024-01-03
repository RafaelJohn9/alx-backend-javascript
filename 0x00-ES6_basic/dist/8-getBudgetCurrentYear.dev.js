"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getBudgetForCurrentYear;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getCurrentYear() {
  var date = new Date();
  return date.getFullYear();
}

function getBudgetForCurrentYear(income, gdp, capita) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "income-".concat(getCurrentYear()), income), _defineProperty(_ref, "gdp-".concat(getCurrentYear()), gdp), _defineProperty(_ref, "capita-".concat(getCurrentYear()), capita), _ref;
}