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
	type: _task.taskType,
	args: {
		id: {
			name: 'ID',
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
		}
	},
	resolve: function resolve(root, params) {
		return _task3.default.findById(params.id).exec();
	}
};
//# sourceMappingURL=single.js.map