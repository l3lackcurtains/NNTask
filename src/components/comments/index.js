import React, { Component } from 'react'
import Comment from './comment'
import styles from '../../stylesheets/index.scss'

class Comments extends Component{
  render(){
    return(
    <div className={styles.comments}>
      <h3>12 Comments:</h3>
      <ul className={styles.comments_box}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </ul>
    </div>
    )
  }
}

export default Comments
