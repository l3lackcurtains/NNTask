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
							<img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png" />
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
							backgroundColor="#ff5a5f"
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
