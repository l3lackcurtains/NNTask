import A from '../actions/config'

const initTasks = {
	isLoading: false,
	data: [],
	error: false
}

const initTask = {
	isLoading: false,
	data: {},
	error: false
}

const tasksReducer = (state = initTasks, action) => {
	switch (action.type) {
	case A.REC_TASK:
		return {
			...state,
			isLoading: false,
			data: action.data,
			error: false
		}
	case A.REC_ERR:
		return {
			...state,
			isLoading: false,
			data: action.data,
			error: true
		}
	case A.REQ_TASK:
		return {
			...state,
			isLoading: true,
			error: false
		}
	default:
		return state
	}
}

const taskReducer = (state = initTask, action) => {
	switch (action.type) {
	case A.REC_TASK:
		return {
			...state,
			isLoading: false,
			data: action.data,
			error: false
		}
	case A.REC_ERR:
		return {
			...state,
			isLoading: false,
			data: action.data,
			error: true
		}
	case A.REQ_TASK:
		return {
			...state,
			isLoading: true,
			error: false
		}
	default:
		return state
	}
}

export { tasksReducer, taskReducer }
