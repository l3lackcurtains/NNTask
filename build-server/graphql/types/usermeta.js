'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.usermetaInputType = exports.usermetaType = undefined;

var _graphql = require('graphql');

var _task = require('./task');

var _task2 = require('../../models/task');

var _task3 = _interopRequireDefault(_task2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usermetaType = exports.usermetaType = new _graphql.GraphQLObjectType({
	name: 'Usermeta',
	description: 'Get Information of user profile',
	fields: function fields() {
		return {
			_id: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			uid: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			firstName: {
				type: _graphql.GraphQLString
			},
			lastName: {
				type: _graphql.GraphQLString
			},
			phoneNumber: {
				type: _graphql.GraphQLString
			},
			bio: {
				type: _graphql.GraphQLString
			},
			tasks: {
				type: new _graphql.GraphQLList(_task.taskType),
				resolve: function resolve(usermeta) {
					return _task3.default.find({ uid: usermeta.uid }).exec();
				}
			}
		};
	}
});

var usermetaInputType = exports.usermetaInputType = new _graphql.GraphQLInputObjectType({
	name: 'UsermetaInput',
	description: 'Post Information in user profile',
	fields: function fields() {
		return {
			uid: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			firstName: {
				type: _graphql.GraphQLString
			},
			lastName: {
				type: _graphql.GraphQLString
			},
			phoneNumber: {
				type: _graphql.GraphQLString
			},
			bio: {
				type: _graphql.GraphQLString
			}
		};
	}
});
//# sourceMappingURL=usermeta.js.map