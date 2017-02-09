'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.commentInputType = exports.commentType = undefined;

var _graphql = require('graphql');

var commentType = exports.commentType = new _graphql.GraphQLObjectType({
	name: 'Comment',
	fields: function fields() {
		return {
			_id: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			tid: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			uid: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			content: {
				type: _graphql.GraphQLString
			}
		};
	}
});

var commentInputType = exports.commentInputType = new _graphql.GraphQLInputObjectType({
	name: 'CommentInput',
	fields: function fields() {
		return {
			tid: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			uid: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			content: {
				type: _graphql.GraphQLString
			}
		};
	}
});
//# sourceMappingURL=comment.js.map