import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import styles from './styles.scss'

class Signup extends Component{
  render() {
    return (
    <div className={styles.signup}>
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
          <RaisedButton
            label="Join NNTASK"
          />
          <FlatButton
            label="Login"
          />
        </li>
      </ul>
    </div>
    )
  }
}

export default Signup
