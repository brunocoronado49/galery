"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var indexController = {};

indexController.index = function (req, res) {
  res.send('Hello World!');
};

indexController.about = function (req, res) {
  res.send('About!');
};

var _default = indexController;
exports.default = _default;