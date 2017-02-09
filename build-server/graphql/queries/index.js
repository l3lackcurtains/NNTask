'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _comment = require('./comment');

var _comment2 = _interopRequireDefault(_comment);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _usermeta = require('./usermeta');

var _usermeta2 = _interopRequireDefault(_usermeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _auth2.default, _usermeta2.default, _task2.default, _comment2.default);
//# sourceMappingURL=index.js.map