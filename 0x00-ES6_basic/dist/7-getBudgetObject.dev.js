"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getBudgetObject;

function getBudgetObject(income, gdp, capita) {
  var budget = {
    income: income,
    gdp: gdp,
    capita: capita
  };
  return budget;
}