import React, { Component } from 'react'
import styles from '../../../stylesheets/index.scss'
import TaskBox from '../../taskbox'

class BrowseTasks extends Component{
	render(){
		return(
				<div className={styles.tasksbox}>
					Browse tasks
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
					<TaskBox />
				</div>
			)
	}
}

export default BrowseTasks
