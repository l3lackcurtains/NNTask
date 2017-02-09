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
		var cModel = new _comment3.default(params.data);
		var newComment = cModel.save();
		if (!newComment) {
			throw new Error('Error adding new blog post');
		}
		return newComment;
	}
};
//# sourceMappingURL=add.js.map