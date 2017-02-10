import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../stylesheets/index.scss'

class SingleTask extends Component{
	render(){
		return(
			<div className={styles.stask}>
				<Row start="xs" middle="xs">
					<Col md={9} xs={12}>
						<h1 className={styles.stask_title}>Clean My House</h1>
						<ul className={styles.stask_meta}>
							<li className={styles.stask_avatar}>
								<img src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png" />
							</li>
							<li className={styles.stask_posted}>
								<p>Posted By Madhav Poudel about 1 hour ago</p>
							</li>
						</ul>
						<h2>PUBLISHED</h2>
					</Col>
					<Col md={3} xs={12}>
						<h2 className={styles.stask_price}>$199</h2>
						<RaisedButton
							label="Earn"
							backgroundColor="#ff5a5f"
							labelColor="#fff"
							fullWidth={true}
						/>
					</Col>
				</Row>
				<Row start="xs">
					<Col xs={12}>
						<h3>Description: </h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium corporis, necessitatibus ipsa! Praesentium perspiciatis sapiente laborum sed dolore, provident magnam expedita et quaerat fugiat atque cumque cupiditate sint, odit ut.</p>
					</Col>
					<Col xs={12}>
						DUE IN 6 DAYS, PAY BY CASH
					</Col>
					<Col xs={12}>
						MAP
					</Col>
					<Col xs={12}>
						Comments
					</Col>
				</Row>
			</div>
		)
	}
}
export default SingleTask
