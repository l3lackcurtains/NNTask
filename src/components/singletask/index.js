import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid/lib'
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import { blue300, indigo900 } from 'material-ui/styles/colors'
import SvgIconFace from 'material-ui/svg-icons/action/face'
import styles from '../../stylesheets/index.scss'
import Comments from '../comments'
import TaskMap from '../taskmap'

const style = {
	chip: {
		margin: 4
	},
	stask: {
		height: window.innerHeight-70
	}
}
class SingleTask extends Component{
	render(){
		return(
			<div className={styles.stask} style={style.stask}>
				<Row start="xs" middle="xs">
					<Col md={9} xs={12}>
						<h1 className={styles.stask_title}>Clean My House</h1>
						<div className={styles.stask_meta}>
							<div className={styles.stask_avatar}>
								<Avatar size={80} src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png" />
							</div>
							<div className={styles.stask_posted}>
								<p>Posted By Madhav Poudel about 1 hour ago</p>
							</div>
							<div className={styles.stasks_chips}>
								<Chip style={style.chip} backgroundColor={blue300}>
				          <Avatar color="#fff" icon={<SvgIconFace />} backgroundColor={indigo900}/>
				          Open
				        </Chip>
								<Chip style={style.chip}>
				          Due in 6 Days
				        </Chip>
								<Chip style={style.chip}>
				          Pay by Cash
				        </Chip>
							</div>
						</div>
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
						<div className={styles.stask_map}>
							<TaskMap />
						</div>
					</Col>
					<Col xs={12}>
						<Comments />
					</Col>
				</Row>
			</div>
		)
	}
}
export default SingleTask
