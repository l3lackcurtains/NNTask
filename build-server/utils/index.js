'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createToken = exports.verifyToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var verifyToken = exports.verifyToken = function verifyToken(token) {
	if (token) {
		return _jsonwebtoken2.default.verify(token, _config2.default.secret);
	}
	return null;
};

var createToken = exports.createToken = function createToken(user) {
	var token = _jsonwebtoken2.default.sign(user, _config2.default.secret, {
		expiresIn: 10080000
	});
	return token;
};
//# sourceMappingURL=index.js.map