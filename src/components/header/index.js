import React, { Component } from 'react'
import { Grid } from 'react-flexbox-grid/lib'
import styles from './styles.scss'
import NavBar from './navbar'
import NavBarMobile from './navbar-mobile'
class Header extends Component {
	render() {
		return (
		<div>
			<div className={styles.header_bg}>
				<Grid>
					<NavBar />
					<NavBarMobile />
				</Grid>
			</div>
			<div className={styles.header_below}>
			</div>
		</div>
		)
	}
}

export default Header
