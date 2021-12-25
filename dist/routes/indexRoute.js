"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _indexController = _interopRequireDefault(require("../controllers/indexController"));

var router = (0, _express.Router)();
router.get('/', _indexController.default.index);
router.get('/about', _indexController.default.about);
var _default = router;
exports.default = _default;