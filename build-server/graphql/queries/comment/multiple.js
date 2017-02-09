'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _comment = require('../../types/comment');

var _comment2 = require('../../../models/comment');

var _comment3 = _interopRequireDefault(_comment2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: new _graphql.GraphQLList(_comment.commentType),
	args: {
		tid: {
			name: 'TaskID',
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
		}
	},
	resolve: function resolve(root, params) {
		return _comment3.default.find({ tid: params.tid }).exec();
	}
};
//# sourceMappingURL=multiple.js.map