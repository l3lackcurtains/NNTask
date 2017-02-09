import { GraphQLID, GraphQLNonNull } from 'graphql'
import { usermetaType } from '../../types/usermeta'
import usermetaModel from '../../../models/usermeta'

export default {
	type: usermetaType,
	args: {
		uid: {
			name: 'UID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const usermeta = usermetaModel.findOne({ uid: params.uid }).exec()
		if (!usermeta) {
			throw new Error('Error getting usermeta')
		}
		return usermeta
	}
}
