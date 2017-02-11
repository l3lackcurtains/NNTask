import React, { Component } from 'react'
import styles from '../../stylesheets/index.scss'

class DialogBox extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: this.props.show
    }
  }

  handleCloseDialog = () => {
    this.setState({
      show: false
    })
  }

  render(){
    return(
    <div className={styles.dialog} style={{visibility: this.state.show ? 'visible' : 'hidden'}}>
      <div className={styles.dialog_box}>
        <div className={styles.dialog_content}>
          <div className={styles.dialog_title}>
            <h2>{this.props.title}</h2>
          </div>
          <div className={styles.dialog_close} onClick={this.handleCloseDialog}>
            Close
          </div>
          {this.props.content}
        </div>
      </div>
    </div>
    )
  }
}
export default DialogBox
