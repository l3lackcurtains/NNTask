'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _webpackDev = require('../webpack.dev.config');

var _webpackDev2 = _interopRequireDefault(_webpackDev);

var _graphql = require('./graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _config = require('./utils/config');

var _config2 = _interopRequireDefault(_config);

require('./utils/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Mongoose Database Connection
_mongoose2.default.connect(_config2.default.mdb);
var db = _mongoose2.default.connection;
db.on('error', function () {
	return console.log('Failed to connect to DB.');
}).once('open', function () {
	return console.log('Connected to DB. ');
});

// some middlewares
app.use(_passport2.default.initialize());
app.use(_bodyParser2.default.json());
app.use((0, _expressValidator2.default)());

// Login using passport
app.post('/login', function (req, res, next) {
	_passport2.default.authenticate('local', function (err, user, message) {
		if (user) return res.json(user);
		return res.json(_extends({ success: false, err: err }, message));
	})(req, res, next);
});

// Signup Using passport
app.post('/signup', function (req, res, next) {
	_passport2.default.authenticate('local.signup', function (err, user, message) {
		if (user) return res.json(user);
		return res.json(_extends({ success: false, err: err }, message));
	})(req, res, next);
});

// GraphQL Server
app.use('/graphql', (0, _expressGraphql2.default)(function () {
	return {
		schema: _graphql2.default,
		pretty: true,
		graphiql: true
	};
}));

// Setup for webpack and client render
if (process.env.NODE_ENV !== 'production') {
	(function () {
		var indexPath = _path2.default.join(__dirname, '../src/index.html');
		var compiler = (0, _webpack2.default)(_webpackDev2.default);
		var middleware = (0, _webpackDevMiddleware2.default)(compiler, {
			noInfo: true,
			publicPath: _webpackDev2.default.output.publicPath
		});
		app.use(middleware);
		app.use((0, _webpackHotMiddleware2.default)(compiler));
		app.get('*', function (req, res) {
			res.sendFile(indexPath);
		});
	})();
} else {
	(function () {
		var indexPath = _path2.default.join(__dirname, '../build/index.html');
		var publicPath = _express2.default.static(_path2.default.join(__dirname, '../build'));
		app.use(publicPath);
		app.get('*', function (req, res) {
			res.sendFile(indexPath);
		});
	})();
}

// Starting server
app.listen(9696, function () {
	console.log('GQL server running at port 9696!');
});
//# sourceMappingURL=index.js.map