"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getResponseFromAPI() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var data = {
        message: 'Hello from the API!'
      };
      resolve(data);
    }, 1000);
  });
}

var _default = getResponseFromAPI;
exports["default"] = _default;