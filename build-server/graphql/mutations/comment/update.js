'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _comment = require('../../types/comment');

var _comment2 = require('../../../models/comment');

var _comment3 = _interopRequireDefault(_comment2);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: _comment.commentType,
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
			type: new _graphql.GraphQLNonNull(_comment.commentInputType)
		}
	},
	resolve: function resolve(root, params) {
		var decoded = (0, _utils.verifyToken)(params.token);
		if (!decoded) {
			throw new Error('Invalid Token');
		}
		return _comment3.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (data) {
			return _comment3.default.findById(data.id).exec();
		}).catch(function (err) {
			return new Error('Couldn\'t Update Task data, ', err);
		});
	}
};
//# sourceMappingURL=update.js.map