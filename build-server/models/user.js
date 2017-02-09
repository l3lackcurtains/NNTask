'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
}, { collection: 'user', timestamps: true });

userSchema.pre('save', function (next) {
	var user = this;
	// If user is now yet created
	if (!user.isModified('password')) return next();
	_bcryptNodejs2.default.hash(user.password, null, null, function (err, hash) {
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

userSchema.methods.comparePassword = function (pass) {
	var user = this;
	return _bcryptNodejs2.default.compareSync(pass, user.password);
};

exports.default = _mongoose2.default.model('user', userSchema);
//# sourceMappingURL=user.js.map