import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql'

export const commentType = new GraphQLObjectType({
	name: 'Comment',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		tid: {
			type: new GraphQLNonNull(GraphQLID)
		},
		uid: {
			type: new GraphQLNonNull(GraphQLID)
		},
		content: {
			type: GraphQLString
		}
	})
})

export const commentInputType = new GraphQLInputObjectType({
	name: 'CommentInput',
	fields: () => ({
		tid: {
			type: new GraphQLNonNull(GraphQLID)
		},
		uid: {
			type: new GraphQLNonNull(GraphQLID)
		},
		content: {
			type: GraphQLString
		}
	})
})
