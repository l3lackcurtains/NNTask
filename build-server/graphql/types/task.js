'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.taskInputType = exports.taskType = undefined;

var _graphql = require('graphql');

var _comment = require('./comment');

var _comment2 = require('../../models/comment');

var _comment3 = _interopRequireDefault(_comment2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var taskType = exports.taskType = new _graphql.GraphQLObjectType({
	name: 'Task',
	fields: function fields() {
		return {
			_id: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			uid: {
				type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
			},
			title: {
				type: _graphql.GraphQLString
			},
			description: {
				type: _graphql.GraphQLString
			},
			locationPlace: {
				type: _graphql.GraphQLString
			},
			locationLat: {
				type: _graphql.GraphQLString
			},
			locationLng: {
				type: _graphql.GraphQLString
			},
			status: {
				type: _graphql.GraphQLString
			},
			workers: {
				type: _graphql.GraphQLString
			},
			price: {
				type: _graphql.GraphQLString
			},
			dueDate: {
				type: _graphql.GraphQLString
			},
			comments: {
				type: new _graphql.GraphQLList(_comment.commentType),
				resolve: function resolve(task) {
					var _id = task._id;

					return _comment3.default.find({ tid: _id }).exec();
				}
			},
			createdAt: {
				type: _graphql.GraphQLString
			},
			updatedAt: {
				type: _graphql.GraphQLString
			}
		};
	}
});

var taskInputType = exports.taskInputType = new _graphql.GraphQLInputObjectType({
	name: 'TaskInput',
	fields: function fields() {
		return {
			uid: {
				type: _graphql.GraphQLID
			},
			title: {
				type: _graphql.GraphQLString
			},
			description: {
				type: _graphql.GraphQLString
			},
			locationPlace: {
				type: _graphql.GraphQLString
			},
			locationLat: {
				type: _graphql.GraphQLString
			},
			locationLng: {
				type: _graphql.GraphQLString
			},
			status: {
				type: _graphql.GraphQLString
			},
			workers: {
				type: _graphql.GraphQLString
			},
			price: {
				type: _graphql.GraphQLString
			},
			dueDate: {
				type: _graphql.GraphQLString
			}
		};
	}
});
//# sourceMappingURL=task.js.map