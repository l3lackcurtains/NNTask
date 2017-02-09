import task from './task'
import comment from './comment'
import auth from './auth'
import usermeta from './usermeta'

export default {
	...auth,
	...usermeta,
  ...task,
  ...comment
}