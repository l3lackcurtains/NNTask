import React from 'react'
import styles from '../../stylesheets/index.scss'

const DialogBox = (props) => {
  return(
  <div className={styles.dialog}>
    <div className={styles.dialog_content}>
      <div className={styles.dialog_title}>
        Login
      </div>
      <div className={styles.dialog_close}>
        Close
      </div>
      {props.content}
    </div>
  </div>
  )
}
export default DialogBox
