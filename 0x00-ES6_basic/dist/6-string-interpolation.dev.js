"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSanFranciscoDescription;

function getSanFranciscoDescription() {
  var year = 2017;
  var budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479'
  };
  return "As of ".concat(year, ", it was the seventh-highest income county in the United States, with a per capita personal income of ").concat(budget.income, ". As of 2015, San Francisco proper had a GDP of ").concat(budget.gdp, ", and a GDP per capita of ").concat(budget.capita, ".");
}