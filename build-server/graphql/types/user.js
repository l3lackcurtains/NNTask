'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.userInputType = exports.userType = undefined;

var _graphql = require('graphql');

var userType = exports.userType = new _graphql.GraphQLObjectType({
	name: 'User',
	fields: function fields() {
		return {
			_id: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			email: {
				type: _graphql.GraphQLString
			},
			createdAt: {
				type: _graphql.GraphQLString
			},
			token: {
				type: _graphql.GraphQLString
			}
		};
	}
});

var userInputType = exports.userInputType = new _graphql.GraphQLInputObjectType({
	name: 'UserInput',
	fields: function fields() {
		return {
			email: {
				type: _graphql.GraphQLString
			},
			password: {
				type: _graphql.GraphQLString
			}
		};
	}
});
//# sourceMappingURL=user.js.map