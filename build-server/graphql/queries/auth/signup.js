'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _user = require('../../types/user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: _user.userType,
	args: {
		data: {
			name: 'data',
			type: new _graphql.GraphQLNonNull(_user.userInputType)
		}
	},
	resolve: function resolve(root, params) {
		return (0, _nodeFetch2.default)('http://localhost:1000/signup', {
			method: 'POST',
			body: JSON.stringify(params.data),
			headers: { 'Content-Type': 'application/json' }
		}).then(function (res) {
			return res.json();
		}).then(function (json) {
			if (json.success) {
				return json.user;
			}
			throw new Error(json.message);
		});
	}
};
//# sourceMappingURL=signup.js.map