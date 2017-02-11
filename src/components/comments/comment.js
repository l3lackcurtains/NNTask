import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import styles from '../../stylesheets/index.scss'

class Comment extends Component{
  render(){
    return(
      <li className={styles.comment_box}>
        <div className={styles.comment_avatar}>
          <Avatar
            src="http://www.doulci.net/wp-content/uploads/avatar-1.png"
            size={50}
          />
        </div>
        <div className={styles.comment_content}>
          <div className={styles.comment_author}>Madhav Poudel</div>
          <p>consectetur adipisicing elit. Praesentium corporis, necessitatibus ipsa! Praesentium perspiciatis</p>
        </div>
      </li>
    )
  }
}

export default Comment
