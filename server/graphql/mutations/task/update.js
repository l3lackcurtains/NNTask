import {
	GraphQLNonNull,
	GraphQLID,
	GraphQLString
} from 'graphql'
import { taskType, taskInputType } from '../../types/task'
import TaskModel from '../../../models/task'
import { verifyToken } from '../../../utils'

export default {
	type: taskType,
	args: {
		token: {
			name: 'token',
			type: GraphQLString
		},
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(taskInputType)
		}
	},
	resolve(root, params) {
		const decoded = verifyToken(params.token)
		if (!decoded) {
			throw new Error('Invalid Token')
		}
		return TaskModel.findByIdAndUpdate(params.id, { $set: { ...params.data } })
		.then(data => TaskModel.findById(data.id).exec())
		.catch(err => new Error('Couldn\'t Update Task data, ', err))
	}
}
