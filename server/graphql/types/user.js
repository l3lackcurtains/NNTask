import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql'

export const userType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		email: {
			type: GraphQLString
		},
		createdAt: {
			type: GraphQLString
		},
		token: {
			type: GraphQLString
		}
	})
})

export const userInputType = new GraphQLInputObjectType({
	name: 'UserInput',
	fields: () => ({
		email: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
		}
	})
})
