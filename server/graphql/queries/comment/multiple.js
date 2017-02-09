import {
	GraphQLList,
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { commentType } from '../../types/comment'
import commentModel from '../../../models/comment'

export default {
	type: new GraphQLList(commentType),
	args: {
		tid: {
			name: 'TaskID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return commentModel.find({ tid: params.tid }).exec()
	}
}

