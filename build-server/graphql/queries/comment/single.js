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
	type: _comment.commentType,
	args: {
		id: {
			name: 'ID',
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
		}
	},
	resolve: function resolve(root, params) {
		return _comment3.default.findById(params.id).exec();
	}
};
//# sourceMappingURL=single.js.map