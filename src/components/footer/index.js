import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../stylesheets/index.scss'

class Footer extends Component {
	
	render() {
		return (
		<div className={styles.footer_bg}>
			<Grid>
				<Row center="xs" middle="xs" className={styles.footer_text}>
					<Col xs={8}>
						<p>Copyright &copy; NNTASK - 2017</p>
					</Col>
				</Row>
			</Grid>
		</div>
		)
	}
}

export default Footer
