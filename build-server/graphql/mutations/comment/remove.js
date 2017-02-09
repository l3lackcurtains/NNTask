'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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
			name: 'id',
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
		}
	},
	resolve: function resolve(root, params) {
		var decoded = (0, _utils.verifyToken)(params.token);
		if (!decoded) {
			throw new Error('Invalid Token');
		}
		var removedComment = _comment3.default.findByIdAndRemove(params.id).exec();
		if (!removedComment) {
			throw new Error('Error removing blog post');
		}
		return removedComment;
	}
};
//# sourceMappingURL=remove.js.map