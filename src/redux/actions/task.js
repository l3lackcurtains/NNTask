import axios from 'axios'
import A from './config'
import C from '../../utils/config'

const reqTask = () => ({
	type: A.REQ_TASK
})

const recTask = json => ({
	type: A.REC_TASK,
	data: json
})

const recErr = json => {
	type: A.REC_ERR,
	data: json
})

// Fetch Tasks / Error
const fetchTasks = () => (dispatch) => {
	dispatch(reqTask())
	const url = '/'
	const res = axios({
		url,
		timeout: 20000,
		method: 'get',
		responseType: 'json'
	})
	.then((response) => {
		dispatch(recTask(response.data.articles))
	})
	.catch((response) => {
		dispatch(recErr(response.data))
	})
	return res
}

// Fetch Task by id / Error
const fetchTask = id =>	(dispatch) => {
	dispatch(reqTask())
	const url = '/'
	const res = axios({
		url,
		timeout: 20000,
		method: 'get',
		responseType: 'json'
	})
	.then((response) => {
		dispatch(recTask(response.data.articles))
	})
	.catch((response) => {
		dispatch(recErr(response.data))
	})
	return res
}

export { fetchTasks, fetchTask }
