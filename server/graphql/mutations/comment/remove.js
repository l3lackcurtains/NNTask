import {
	GraphQLNonNull,
	GraphQLID,
	GraphQLString
} from 'graphql'

import { commentType } from '../../types/comment'
import commentModel from '../../../models/comment'
import { verifyToken } from '../../../utils'

export default {
	type: commentType,
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
		const removedComment = commentModel.findByIdAndRemove(params.id).exec()
		if (!removedComment) {
			throw new Error('Error removing blog post')
		}
		return removedComment
	}
}
