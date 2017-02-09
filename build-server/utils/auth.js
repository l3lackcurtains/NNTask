'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocalStrategy = _passportLocal2.default.Strategy;

// Sign Up using Passport Local strategy
_passport2.default.use('local.signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	session: false,
	passReqToCallback: true
}, function (req, username, password, done) {
	req.check('email', 'Invalid email').notEmpty().isEmail();
	req.check('password', 'Invalid Password').notEmpty().isLength({ min: 6 });
	var errors = req.validationErrors();
	if (errors) {
		var _ret = function () {
			var messages = [];
			errors.forEach(function (error) {
				messages.push(error.msg);
			});
			return {
				v: done(errors)
			};
		}();

		if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	}
	return _user2.default.findOne({ email: username }, function (err, user) {
		if (err) return done(err);
		if (user) return done(null, false, { success: false, message: 'Email Already exists' });
		var newUser = new _user2.default();
		newUser.email = username;
		newUser.password = password;
		return newUser.save(function (err, res) {
			if (err) return done(null, false, { success: false, message: 'error saving user' });
			var email = res.email,
			    _id = res._id,
			    createdAt = res.createdAt;

			return done(null, { success: true, message: 'successfully Registered', user: { _id: _id, email: email, createdAt: createdAt } });
		});
	});
}));

// LogIn using Passport Local strategy
_passport2.default.use('local', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	session: false,
	passReqToCallback: true
}, function (req, username, password, done) {
	req.check('email', 'Invalid email').notEmpty().isEmail();
	req.check('password', 'Invalid Password').notEmpty().isLength({ min: 6 });
	var errors = req.validationErrors();
	if (errors) {
		var _ret2 = function () {
			var messages = [];
			errors.forEach(function (error) {
				messages.push(error.msg);
			});
			return {
				v: done(errors)
			};
		}();

		if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	}
	return _user2.default.findOne({ email: username }, function (err, user) {
		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false, { success: false, message: 'Incorrect username.' });
		}
		if (!user.comparePassword(password)) {
			return done(null, false, { success: false, message: 'Incorrect password.' });
		}
		var _id = user._id,
		    email = user.email,
		    createdAt = user.createdAt;

		var token = (0, _index.createToken)({ _id: _id, email: email, createdAt: createdAt });
		return done(null, { success: true, message: 'Successfully Logged In', user: { _id: _id, email: email, createdAt: createdAt, token: token } });
	});
}));

_passport2.default.serializeUser(function (user, done) {
	done(null, user);
});

_passport2.default.deserializeUser(function (id, done) {
	_user2.default.findOne({
		_id: id
	}, '-password', function (err, user) {
		done(err, user);
	});
});
//# sourceMappingURL=auth.js.map