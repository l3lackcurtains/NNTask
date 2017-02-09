import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers'

const middleware = applyMiddleware(thunk, logger() )

const store = createStore(rootReducer, middleware)

export default store
