import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import { Link } from 'react-router'
import Dialog from 'material-ui/Dialog'
import styles from '../../stylesheets/index.scss'
import Login from '../login'
import Signup from '../signup'

class Header extends Component {
	constructor(props){
		super(props)
		this.state = {
			openLogin: false,
			openSignup: false
		}
	}
	handleOpenLogin = () => {
    this.setState({openLogin: true, openSignup: false});
  }

  handleCloseLogin = () => {
    this.setState({openLogin: false});
  }

	handleOpenSignup = () => {
		this.setState({openSignup: true, openLogin: false});
	}

	handleCloseSignup = () => {
		this.setState({openSignup: false});
	}

	render() {
		return (
		<div>
			<div className={styles.header_bg}>
				<Grid>
					<Row start="xs" middle="xs">
						<Col xs={9}>
							<ul className={styles.navleft}>
								<li className={styles.logo}>
									<Link to="/">NNTask</Link>
								</li>
								<li><Link to="/post-task">Post a Task</Link></li>
								<li><Link to="/tasks">Browse Tasks</Link></li>
								<li><Link to="/">How it Works</Link></li>
							</ul>
						</Col>
						<Col xs={3}>
							<ul className={styles.navright}>
								<li><a href="#" onClick={this.handleOpenSignup}>Sign Up</a></li>
								<li><a href="#" onClick={this.handleOpenLogin}>Login</a></li>
							</ul>
						</Col>
					</Row>
				</Grid>
				<Dialog
	        title="Login"
	        modal={false}
	        open={this.state.openLogin}
	        onRequestClose={this.handleCloseLogin}
	      >
	        <Login />
	      </Dialog>

				<Dialog
	        title="Sign Up"
	        modal={false}
	        open={this.state.openSignup}
	        onRequestClose={this.handleCloseSignup}
	      >
	        <Signup />
	      </Dialog>
			</div>
			<div className={styles.header_below}>
			</div>
		</div>
		)
	}
}

export default Header
