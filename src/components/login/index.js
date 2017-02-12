import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import styles from './styles.scss'

class Login extends Component{
  render() {
    return (
    <div className={styles.login}>
      <ul>
        <li>
          <TextField
            hintText="Email"
          />
        </li>
        <li>
          <TextField
            hintText="Password"
          />
        </li>
        <li>
          <p>Forgot Password ?</p>
        </li>
        <li>
          <RaisedButton
            label="Login"
          />
          <FlatButton
            label="Sign Up"
          />
        </li>
      </ul>
    </div>
    )
  }
}

export default Login
