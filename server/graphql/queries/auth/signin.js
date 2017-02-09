import {
	GraphQLNonNull,
} from 'graphql'
import fetch from 'node-fetch'
import { userType, userInputType } from '../../types/user'

export default {
	type: userType,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(userInputType)
		}
	},
	resolve(root, params) {
		return fetch('http://localhost:1000/login', {
			method: 'POST',
			body: JSON.stringify(params.data),
			headers: { 'Content-Type': 'application/json' }
		})
		.then(res => res.json())
		.then((json) => {
			if (json.success) {
				return json.user
			}
			throw new Error(json.message)
		})
	}
}
