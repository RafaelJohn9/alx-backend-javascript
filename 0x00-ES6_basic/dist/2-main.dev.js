#!/usr/bin/node 
"use strict";

var _arrow = _interopRequireDefault(require("./2-arrow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var neighborhoodsList = new _arrow["default"]();
var res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);