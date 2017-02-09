import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
	uid: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	type: {
		type: String
	},
	locationPlace: {
		type: String
	},
	locationLat: {
		type: String
	},
	locationLng: {
		type: String
	},
	status: {
		type: String
	},
	workers: {
		type: String
	},
	price: {
		type: String
	},
	dueDate: {
		type: Date
	},
}, { collection: 'Tasks', timestamps: true })

export default mongoose.model('Task', taskSchema)
