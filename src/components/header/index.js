import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import { Link } from 'react-router'
import styles from '../../stylesheets/index.scss'
import Login from '../login'
import DialogBox from '../dialogbox'

class Header extends Component {
	render() {
		return (
		<div className={styles.header_bg}>
			<Grid>
				<Row start="xs" middle="xs">
					<Col xs={9}>
						<ul className={styles.navleft}>
							<li className={styles.logo}>
								<Link to="/">NNTask</Link>
							</li>
							<li><Link to="/tasks">Post a Task</Link></li>
							<li><Link to="/">Browse Tasks</Link></li>
							<li><Link to="/">How it Works</Link></li>
						</ul>
					</Col>
					<Col xs={3}>
						<ul className={styles.navright}>
							<li><Link to="/login">Sign Up</Link></li>
							<li><Link to="/login">Login</Link></li>
						</ul>
					</Col>
				</Row>
			</Grid>
			<DialogBox
				content={<Login />}
			/>
		</div>
		)
	}
}

export default Header
