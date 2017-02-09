import mongoose from 'mongoose'

const Schema = mongoose.Schema

const usermetaSchema = new Schema({
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
}, { collection: 'usermeta' })

export default mongoose.model('usermeta', usermetaSchema)
