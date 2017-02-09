'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _usermeta = require('../../types/usermeta');

var _usermeta2 = require('../../../models/usermeta');

var _usermeta3 = _interopRequireDefault(_usermeta2);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: _usermeta.usermetaType,
	args: {
		token: {
			name: 'token',
			type: _graphql.GraphQLString
		},
		id: {
			name: 'ID',
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
		},
		data: {
			name: 'data',
			type: new _graphql.GraphQLNonNull(_usermeta.usermetaInputType)
		}
	},
	resolve: function resolve(root, params) {
		var decoded = (0, _utils.verifyToken)(params.token);
		if (!decoded) {
			throw new Error('Invalid Token');
		}
		return _usermeta3.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (data) {
			return _usermeta3.default.findById(data.id).exec();
		}).catch(function (err) {
			return new Error('Couldn\'t Update Task data, ', err);
		});
	}
};
//# sourceMappingURL=update.js.map