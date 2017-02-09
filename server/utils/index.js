import jwt from 'jsonwebtoken'
import config from './config'

export const verifyToken = (token) => {
	if (token) {
		return jwt.verify(token, config.secret)
	}
	return null
}

export const createToken = (user) => {
	const token = jwt.sign(user, config.secret, {
		expiresIn: 10080000
	})
	return token
}
