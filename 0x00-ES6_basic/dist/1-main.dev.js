#!/usr/bin/node
"use strict";

var _blockScoped = _interopRequireDefault(require("./1-block-scoped.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log((0, _blockScoped["default"])(true));
console.log((0, _blockScoped["default"])(false));