import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'
import bodyParser from 'body-parser'
import passport from 'passport'
import expressValidator from 'express-validator'
import wpconfig from '../webpack.dev.config'
import schema from './graphql'
import config from './utils/config'
import './utils/auth'

const app = express()

// Mongoose Database Connection
mongoose.connect(config.mdb)
const db = mongoose.connection
db.on('error', () => console.log('Failed to connect to DB.'))
	.once('open', () => console.log('Connected to DB. '))

// some middlewares
app.use(passport.initialize())
app.use(bodyParser.json())
app.use(expressValidator())

// Login using passport
app.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, message) => {
		if (user) return res.json(user)
		return res.json({ success: false, err, ...message })
	})(req, res, next)
})

// Signup Using passport
app.post('/signup', (req, res, next) => {
	passport.authenticate('local.signup', (err, user, message) => {
		if (user) return res.json(user)
		return res.json({ success: false, err, ...message })
	})(req, res, next)
})

// GraphQL Server
app.use('/graphql', graphqlHTTP(() =>
	({
		schema,
		pretty: true,
		graphiql: true
	})
))

// Setup for webpack and client render
if (process.env.NODE_ENV !== 'production') {
	const indexPath = path.join(__dirname, '../src/index.html')
	const compiler = webpack(wpconfig)
	const middleware = webpackDevMiddleware(compiler, {
		noInfo: true,
		publicPath: wpconfig.output.publicPath
	})
	app.use(middleware)
	app.use(webpackHotMiddleware(compiler))
	app.get('*', (req, res) => {
		res.sendFile(indexPath)
	})
} else {
	const indexPath = path.join(__dirname, '../build/index.html')
	const publicPath = express.static(path.join(__dirname, '../build'))
	app.use(publicPath)
	app.get('*', (req, res) => {
		res.sendFile(indexPath)
	})
}

// Starting server
app.listen(9696, () => {
	console.log('GQL server running at port 9696!')
})
