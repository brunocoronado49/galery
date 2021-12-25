"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _indexRoute = _interopRequireDefault(require("./routes/indexRoute"));

var _imagesRoute = _interopRequireDefault(require("./routes/imagesRoute"));

require("./config/config");

// import the routes and files
// Instance of express
var app = (0, _express.default)(); // For uploadImage

app.use((0, _expressFileupload.default)({
  tempFileDir: '/temporal'
})); // Routes

app.use(_indexRoute.default);
app.use(_imagesRoute.default);
var _default = app;
exports.default = _default;