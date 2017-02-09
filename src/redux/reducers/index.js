import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { tasksReducer, taskReducer } from './task'
import usermetaReducer from './usermeta'

const reducers = { task: taskReducer, tasks: tasksReducer, usermeta: usermetaReducer }

const rootReducer = combineReducers({ ...reducers, routing: routerReducer })

export default rootReducer
