'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var usermetaSchema = new Schema({
	uid: {
		type: Schema.Types.ObjectId,
		required: true
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	phoneNumber: {
		type: String
	},
	bio: {
		type: String
	}
}, { collection: 'usermeta' });

exports.default = _mongoose2.default.model('usermeta', usermetaSchema);
//# sourceMappingURL=usermeta.js.map