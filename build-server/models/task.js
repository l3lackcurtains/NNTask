'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var taskSchema = new Schema({
	uid: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	type: {
		type: String
	},
	locationPlace: {
		type: String
	},
	locationLat: {
		type: String
	},
	locationLng: {
		type: String
	},
	status: {
		type: String
	},
	workers: {
		type: String
	},
	price: {
		type: String
	},
	dueDate: {
		type: Date
	}
}, { collection: 'Tasks', timestamps: true });

exports.default = _mongoose2.default.model('Task', taskSchema);
//# sourceMappingURL=task.js.map