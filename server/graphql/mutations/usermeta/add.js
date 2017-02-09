import {
	GraphQLNonNull,
	GraphQLString
} from 'graphql'

import { usermetaType, usermetaInputType } from '../../types/usermeta'
import UsermetaModel from '../../../models/usermeta'
import { verifyToken } from '../../../utils'

export default {
	type: usermetaType,
	args: {
		token: {
			name: 'token',
			type: GraphQLString
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(usermetaInputType)
		}
	},
	resolve(root, params) {
		const decoded = verifyToken(params.token)
		if (!decoded) {
			throw new Error('Invalid Token')
		}
		const umModel = new UsermetaModel(params.data)
		const newUsermeta = umModel.save()
		if (!newUsermeta) {
			throw new Error('Error adding new blog post')
		}
		return newUsermeta
	}
}
