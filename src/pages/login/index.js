import React, { Component } from 'react'
import Header from '../../components/header'
import Login from '../../components/login'
import Signup from '../../components/signup'

class login extends Component {
  render() {
    return (
    <div className="Login">
      <Header />
      <Login />
      <Signup />
    </div>
    )
  }
}

export default login
