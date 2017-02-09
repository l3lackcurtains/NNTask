import { GraphQLID, GraphQLNonNull } from 'graphql'
import { taskType } from '../../types/task'
import taskModel from '../../../models/task'

export default {
	type: taskType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return taskModel.findById(params.id).exec()
	}
}
