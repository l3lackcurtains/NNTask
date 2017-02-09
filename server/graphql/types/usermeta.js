import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
	GraphQLList
} from 'graphql'
import { taskType } from './task'
import taskModel from '../../models/task';

export const usermetaType = new GraphQLObjectType({
	name: 'Usermeta',
	description: 'Get Information of user profile',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		uid: {
			type: new GraphQLNonNull(GraphQLID)
		},
		firstName: {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		},
		phoneNumber: {
			type: GraphQLString
		},
		bio: {
			type: GraphQLString
		},
		tasks: {
			type: new GraphQLList(taskType),
			resolve(usermeta) {
				return taskModel.find({ uid: usermeta.uid }).exec()
			}
		}
	})
})

export const usermetaInputType = new GraphQLInputObjectType({
	name: 'UsermetaInput',
	description: 'Post Information in user profile',
	fields: () => ({
		uid: {
			type: new GraphQLNonNull(GraphQLID)
		},
		firstName: {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		},
		phoneNumber: {
			type: GraphQLString
		},
		bio: {
			type: GraphQLString
		}
	})
})
