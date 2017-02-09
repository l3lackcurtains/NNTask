import {
	GraphQLNonNull,
	GraphQLString
} from 'graphql'

import { commentType, commentInputType } from '../../types/comment'
import CommentModel from '../../../models/comment'
import { verifyToken } from '../../../utils'

export default {
	type: commentType,
	args: {
		token: {
			name: 'token',
			type: GraphQLString
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(commentInputType)
		}
	},
	resolve(root, params) {
		const decoded = verifyToken(params.token)
		if (!decoded) {
			throw new Error('Invalid Token')
		}
		const cModel = new CommentModel(params.data)
		const newComment = cModel.save()
		if (!newComment) {
			throw new Error('Error adding new blog post')
		}
		return newComment
	}
}
