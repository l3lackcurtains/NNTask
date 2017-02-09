import axios from 'axios'
import A from './config'

const reqUsermeta = () => ({
	type: A.REQ_USERMETA
})

const recUsermeta = json => ({
	type: A.REC_USERMETA,
	data: json
})

const recErr = json => ({
	type: A.REC_ERR,
	data: json
})

// Fetch Usermeta by id / Error
const fetchUsermeta = id =>	(dispatch) => {
	dispatch(reqUsermeta())
	const url = '/'
	const res = axios({
		url,
		timeout: 20000,
		method: 'get',
		responseType: 'json'
	})
	.then((response) => {
		dispatch(recUsermeta(response.data.sources))
	})
	.catch((response) => {
		dispatch(recErr(response.data))
	})
	return res
}

export default fetchUsermeta
