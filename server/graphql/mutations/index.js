import task from './task'
import comment from './comment'
import usermeta from './usermeta'

export default {
	...usermeta,
	...task,
	...comment
}
