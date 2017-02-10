import React, { Component } from 'react'
import styles from '../../stylesheets/index.scss'

const mapStyle = {
	height: window.innerHeight
}
class TasksMap extends Component{

	render(){
		return (
				<div className={styles.tmap} style={mapStyle}>
					this is a map
				</div>
			)
	}
}

export default TasksMap
