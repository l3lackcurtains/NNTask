import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLList
} from 'graphql'
import { commentType } from './comment'
import commentModel from '../../models/comment';

export const taskType = new GraphQLObjectType({
	name: 'Task',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		uid: {
			type: new GraphQLNonNull(GraphQLID)
		},
		title: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		},
		locationPlace: {
			type: GraphQLString
		},
		locationLat: {
			type: GraphQLString
		},
		locationLng: {
			type: GraphQLString
		},
		status: {
			type: GraphQLString
		},
		workers: {
			type: GraphQLString
		},
		price: {
			type: GraphQLString
		},
		dueDate: {
			type: GraphQLString
		},
		comments: {
			type: new GraphQLList(commentType),
			resolve(task) {
				const { _id } = task
				return commentModel.find({ tid: _id }).exec()
			}
		},
		createdAt: {
			type: GraphQLString
		},
		updatedAt: {
			type: GraphQLString
		}
	})
})

export const taskInputType = new GraphQLInputObjectType({
	name: 'TaskInput',
	fields: () => ({
		uid: {
			type: GraphQLID
		},
		title: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		},
		locationPlace: {
			type: GraphQLString
		},
		locationLat: {
			type: GraphQLString
		},
		locationLng: {
			type: GraphQLString
		},
		status: {
			type: GraphQLString
		},
		workers: {
			type: GraphQLString
		},
		price: {
			type: GraphQLString
		},
		dueDate: {
			type: GraphQLString
		}
	})
})

