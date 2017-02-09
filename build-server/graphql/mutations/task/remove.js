'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _task = require('../../types/task');

var _task2 = require('../../../models/task');

var _task3 = _interopRequireDefault(_task2);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: _task.taskType,
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
		var removedTask = _task3.default.findByIdAndRemove(params.id).exec();
		if (!removedTask) {
			throw new Error('Error removing blog post');
		}
		return removedTask;
	}
};
//# sourceMappingURL=remove.js.map