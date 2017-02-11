import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../stylesheets/index.scss'

class TaskBox extends Component{
	render(){
		return (
			<div className={styles.taskbox}>
				<Row start="xs" middle="xs">
					<Col xs={2}>
						<div className={styles.taskbox_avatar}>
							<img src="http://kingdom-doctors.com/images/img/avatar.png" />
						</div>
					</Col>
					<Col xs={8}>
						<p className={styles.taskbox_title}>Clean my house in no time otherwise go away you moroon</p>
						<p className={styles.taskbox_location}>Pokhara, Nepal</p>
					</Col>
					<Col xs={2}>
						<h2 className={styles.taskbox_price}>$199</h2>
						<RaisedButton
							label="Earn"
							backgroundColor="#51af33"
							labelColor="#fff"
							fullWidth={true}
						/>
					</Col>
				</Row>
			</div>
		)
	}
}

export default TaskBox
