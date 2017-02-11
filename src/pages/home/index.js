import React, { Component } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Slider from '../../components/slider'

class home extends Component {
  render() {
    return (
    <div>
      <Header />
      <Slider />
      <Footer />
    </div>
    )
  }
}

export default home
