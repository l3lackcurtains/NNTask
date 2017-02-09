import A from '../actions/config'

const initUsermeta = {
	isLoading: false,
	data: {},
	error: false
}

const usermetaReducer = (state = initUsermeta, action) => {
	switch (action.type) {
	case A.REC_SRC:
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
	case A.REQ_SRC:
		return {
			...state,
			isLoading: true,
			error: false
		}
	default:
		return state
	}
}

export default usermetaReducer
