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
		data: {
			name: 'data',
			type: new _graphql.GraphQLNonNull(_task.taskInputType)
		}
	},
	resolve: function resolve(root, params) {
		var decoded = (0, _utils.verifyToken)(params.token);
		if (!decoded) {
			throw new Error('Invalid Token');
		}
		var tModel = new _task3.default(params.data);
		var newTask = tModel.save();
		if (!newTask) {
			throw new Error('Error adding new blog post');
		}
		return newTask;
	}
};
//# sourceMappingURL=add.js.map