import {
	GraphQLNonNull,
	GraphQLID,
	GraphQLString
} from 'graphql'

import { usermetaType } from '../../types/usermeta'
import UsermetaModel from '../../../models/usermeta'
import { verifyToken } from '../../../utils'

export default {
	type: usermetaType,
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
		const removedUsermeta = UsermetaModel.findByIdAndRemove(params.id).exec()
		if (!removedUsermeta) {
			throw new Error('Error removing blog post')
		}
		return removedUsermeta
	}
}
