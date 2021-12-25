"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database/database");

// Instance of PORT
_app.default.set('port', process.env.PORT); // Listening the PORT


_app.default.listen(_app.default.get('port'));

console.log("Server on port: ".concat(_app.default.get('port')));