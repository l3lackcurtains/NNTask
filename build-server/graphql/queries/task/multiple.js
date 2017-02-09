'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _task = require('../../types/task');

var _task2 = require('../../../models/task');

var _task3 = _interopRequireDefault(_task2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: new _graphql.GraphQLList(_task.taskType),
	resolve: function resolve() {
		var tasks = _task3.default.find().exec();
		if (!tasks) {
			throw new Error('Error getting tasks');
		}
		return tasks;
	}
};
//# sourceMappingURL=multiple.js.map