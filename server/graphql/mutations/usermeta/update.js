import {
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
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
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
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
		return UsermetaModel.findByIdAndUpdate(params.id, { $set: { ...params.data } })
		.then(data => UsermetaModel.findById(data.id).exec())
		.catch(err => new Error('Couldn\'t Update Task data, ', err))
	}
}
