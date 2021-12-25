"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var ImageSchema = new _mongoose.default.Schema({
  title: String,
  key: String,
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = _mongoose.default.model('Image', ImageSchema);

exports.default = _default;