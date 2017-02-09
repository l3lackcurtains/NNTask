'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _usermeta = require('../../types/usermeta');

var _usermeta2 = require('../../../models/usermeta');

var _usermeta3 = _interopRequireDefault(_usermeta2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: _usermeta.usermetaType,
	args: {
		uid: {
			name: 'UID',
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
		}
	},
	resolve: function resolve(root, params) {
		var usermeta = _usermeta3.default.findOne({ uid: params.uid }).exec();
		if (!usermeta) {
			throw new Error('Error getting usermeta');
		}
		return usermeta;
	}
};
//# sourceMappingURL=single.js.map