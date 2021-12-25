"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _config = _interopRequireDefault(require("../config/config"));

var _Image = _interopRequireDefault(require("../models/Image"));

// Import files
var imagesController = {}; // Configuration of the env endpoint

var spacesEndpoint = new _awsSdk.default.Endpoint(_config.default.Endpoint);
var s3 = new _awsSdk.default.S3({
  endpoint: spacesEndpoint
}); // Show all images

imagesController.getImages = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var images;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Image.default.find();

          case 2:
            images = _context.sent;
            return _context.abrupt("return", res.json(images));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Controller for upliad an image in Digital Ocean


imagesController.uploadImage = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var file, urlImage, image;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            file = req.files.file;
            _context2.prev = 1;
            _context2.next = 4;
            return s3.putObject({
              // ACL: permissions public o private
              ACL: 'public-read',
              // Where will be saved
              Bucket: _config.default.BucketName,
              Body: file.data,
              Key: file.name
            }).promise();

          case 4:
            urlImage = "https://".concat(_config.default.BucketName, ".").concat(_config.default.Endpoint, "/").concat(file.name);
            image = new _Image.default({
              url: urlImage,
              key: file.name,
              title: req.body.title
            });
            _context2.next = 8;
            return image.save();

          case 8:
            return _context2.abrupt("return", res.json(image));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.send('Error');

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Get one image for edit


imagesController.getOneImage = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(req, res) {
    var image;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Image.default.findById(req.params.id);

          case 2:
            image = _context3.sent;
            return _context3.abrupt("return", res.json(image));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); // Delete an image


imagesController.deleteImage = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(req, res) {
    var imageDeleted;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Image.default.findByIdAndDelete(req.params.id);

          case 2:
            imageDeleted = _context4.sent;
            _context4.next = 5;
            return s3.deleteObject({
              Bucket: _config.default.BucketName,
              Key: imageDeleted.key
            }).promise();

          case 5:
            res.json(imageDeleted);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var _default = imagesController;
exports.default = _default;