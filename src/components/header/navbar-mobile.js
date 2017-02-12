import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-flexbox-grid/lib'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/svg-icons/navigation/menu'
import styles from './styles.scss'

class NavBarMobile extends Component{
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  render(){
    return(
    <div className={styles.navbar_mobile}>
      <Row start="xs" middle="xs">
        <Col xs={1}>
          <Menu
            onTouchTap={this.handleToggle}
            style={{ height: 36, width: 36, textAlign: "right", cursor: 'pointer' }}
            color="#191919"
            hoverColor="#000"
          />
        </Col>
        <Col xs={5}>
          <div className={styles.logo}>
            <Link to="/">NNTask</Link>
          </div>
        </Col>
        <Col xs={6}>
        </Col>
      </Row>
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({ open })}
      >
        <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
    )
  }
}

export default NavBarMobile
