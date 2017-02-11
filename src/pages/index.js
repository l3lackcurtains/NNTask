import React, { Component } from 'react'
import '../stylesheets/index.scss'
import Footer from '../components/footer'

class main extends Component {
	render() {
		return (
		<div className="App">
		{ this.props.children }
		</div>
		)
	}
}

export default main
