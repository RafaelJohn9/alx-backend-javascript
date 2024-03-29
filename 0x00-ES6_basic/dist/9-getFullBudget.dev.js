"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFullBudgetObject;

var _getBudgetObject = _interopRequireDefault(require("./7-getBudgetObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getFullBudgetObject(income, gdp, capita) {
  var budget = (0, _getBudgetObject["default"])(income, gdp, capita);

  var fullBudget = _objectSpread({}, budget, {
    getIncomeInDollars: function getIncomeInDollars(income) {
      return "$".concat(income);
    },
    getIncomeInEuros: function getIncomeInEuros(income) {
      return "".concat(income, " euros");
    }
  });

  return fullBudget;
}