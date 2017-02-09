import {
	GraphQLNonNull,
	GraphQLID,
	GraphQLString
} from 'graphql'

import { taskType } from '../../types/task'
import taskModel from '../../../models/task'
import { verifyToken } from '../../../utils'

export default {
	type: taskType,
	args: {
		token: {
			name: 'token',
			type: GraphQLString
		},
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const decoded = verifyToken(params.token)
		if (!decoded) {
			throw new Error('Invalid Token')
		}
		const removedTask = taskModel.findByIdAndRemove(params.id).exec()
		if (!removedTask) {
			throw new Error('Error removing blog post')
		}
		return removedTask
	}
}
