import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './styles.scss'

class Slider extends Component {

	navigateToTasks = () => browserHistory.push({ pathname: '/tasks' })

	render() {
		return (
		<div className={styles.slider_bg}>
			<Grid>
				<Row center="xs" middle="xs" className={styles.slider_text}>
					<Col xs={8}>
						<h1><span>Find Peoples</span><br /> around you to get your work done.</h1>
						<RaisedButton
						label="Get Started"
						backgroundColor="#ff5a5f"
						labelColor="#fff"
						onTouchTap={this.navigateToTasks}
						/>
					</Col>
				</Row>
			</Grid>
		</div>
		)
	}
}

export default Slider
