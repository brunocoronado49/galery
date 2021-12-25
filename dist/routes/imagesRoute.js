"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _imagesController = _interopRequireDefault(require("../controllers/imagesController"));

var router = (0, _express.Router)();
router.get('/API/all-images', _imagesController.default.getImages);
router.post('/API/upload-image', _imagesController.default.uploadImage);
router.get('/API/get-image/:id', _imagesController.default.getOneImage);
router.delete('/API/delete-image/:id', _imagesController.default.deleteImage);
var _default = router;
exports.default = _default;