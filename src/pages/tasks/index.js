import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import Header from '../../components/header'

class tasks extends Component {
	render() {
		console.log('xxx')
		return (
		<div>
			<Header />
				<Grid>
					<Row start="xs" middle="xs">
						<Col md={8}>
						</Col>
						<Col md={4}>
						</Col>
					</Row>
				</Grid>
		</div>
		)
	}
}

export default tasks
