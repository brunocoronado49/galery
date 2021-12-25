"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  Port: process.env.PORT || 3002,
  BucketName: process.env.BUCKET_NAME || '',
  Endpoint: process.env.ENDPOINT || '',
  MongoDb: process.env.MONGODB_DB || 'gallery-mern'
};
exports.default = _default;