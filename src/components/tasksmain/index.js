import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/tabs'
import SwipeableViews from 'react-swipeable-views'
import BrowseTasks from './browsetasks'
import MyTasks from './mytasks'
import styles from '../../stylesheets/index.scss'

const mainStyle = {
	height: window.innerHeight-70
}

class TasksMain extends Component{
	constructor(props){
		super(props)
		this.state = {
			slideIndex: 0
		}
	}

	handleTabChange = (val) => {
		this.setState({
			slideIndex: val
		})
	}
	render(){
		return (
				<div className={styles.tmain} style={mainStyle}>
					<Tabs
						onChange={this.handleTabChange}
						value={this.state.slideIndex}
					>
						<Tab
							label="Browse Tasks"
							value={0}
						/>
						<Tab
							label="My Tasks"
							value={1}
						/>
					</Tabs>
					<SwipeableViews
						index={this.state.slideIndex}
						onChangeIndex={this.handleTabChange}
					>
						<BrowseTasks />
						<MyTasks />
					</SwipeableViews>
				</div>
			)
	}
}

export default TasksMain
