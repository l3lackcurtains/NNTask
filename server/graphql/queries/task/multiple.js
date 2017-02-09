import {
	GraphQLList
} from 'graphql'
import { taskType } from '../../types/task'
import taskModel from '../../../models/task'

export default {
	type: new GraphQLList(taskType),
	resolve() {
		const tasks = taskModel.find().exec()
		if (!tasks) {
			throw new Error('Error getting tasks')
		}
		return tasks
	}
}
