'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var commentSchema = new _mongoose2.default.Schema({
  tid: {
    type: Schema.Types.ObjectId,
    required: true
  },
  uid: {
    type: Schema.Types.ObjectId,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, { collection: "Comments" });

exports.default = _mongoose2.default.model('Comment', commentSchema);
//# sourceMappingURL=comment.js.map