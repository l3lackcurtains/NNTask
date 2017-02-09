import {
	GraphQLID,
	GraphQLNonNull
} from 'graphql'

import { commentType } from '../../types/comment';
import commentModel from '../../../models/comment';

export default {
	type: commentType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return commentModel.findById(params.id).exec();
	}
}
