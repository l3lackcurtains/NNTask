import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from '../../components/header'
import Slider from '../../components/slider'

class home extends Component {
  render() {
    return (
    <div>
      <Header />
      <Slider />
    </div>
    )
  }
}

export default home
