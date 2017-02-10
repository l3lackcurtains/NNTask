import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import Header from '../../components/header'
import TasksMap from '../../components/tasksmap'
import SingleTask from '../../components/singletask'
import TasksMain from '../../components/tasksmain'
import styles from '../../stylesheets/index.scss'

class tasks extends Component {
	render() {
		return (
		<div>
			<Header />
				<div className={styles.tasks_bg}>
					<Grid>
						<Row start="xs">
							<Col xs={5}>
								<TasksMain />
							</Col>
							<Col xs={7}>
								<SingleTask />
							</Col>
						</Row>
					</Grid>
				</div>
		</div>
		)
	}
}

export default tasks
