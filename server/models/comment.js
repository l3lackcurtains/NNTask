import mongoose from 'mongoose'

let Schema = mongoose.Schema

var commentSchema = new mongoose.Schema({
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
}, {collection: "Comments"});

export default mongoose.model('Comment', commentSchema);