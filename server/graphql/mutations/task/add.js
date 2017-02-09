import {
	GraphQLNonNull,
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
		const tModel = new TaskModel(params.data)
		const newTask = tModel.save()
		if (!newTask) {
			throw new Error('Error adding new blog post')
		}
		return newTask
	}
}
