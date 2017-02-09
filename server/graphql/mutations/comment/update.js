import {
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
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
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
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
		return CommentModel.findByIdAndUpdate(params.id, { $set: { ...params.data } })
		.then(data => CommentModel.findById(data.id).exec())
		.catch(err => new Error('Couldn\'t Update Task data, ', err))
	}
}
