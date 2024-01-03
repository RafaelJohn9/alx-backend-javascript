"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNeighborhoodsList;

function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  var self = this;

  this.addNeighborhood = function (newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}