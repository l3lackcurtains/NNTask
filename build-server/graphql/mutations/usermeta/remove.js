'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _usermeta = require('../../types/usermeta');

var _usermeta2 = require('../../../models/usermeta');

var _usermeta3 = _interopRequireDefault(_usermeta2);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: _usermeta.usermetaType,
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
		var removedUsermeta = _usermeta3.default.findByIdAndRemove(params.id).exec();
		if (!removedUsermeta) {
			throw new Error('Error removing blog post');
		}
		return removedUsermeta;
	}
};
//# sourceMappingURL=remove.js.map