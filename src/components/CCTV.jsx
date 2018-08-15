import React from 'react'

import * as images from '../images/left-side-pictures/index.js'

export class CCTV extends React.Component {
  state = {
    cctv: null,
    context: null,
    index: 0
  }
  
  componentDidMount () {
    const cctv = document.getElementById('cctv-canvas')
    const context = cctv.getContext('2d')

    this.setState({
      cctv,
      context
    }, this.animate)
  }
  
  render () {
    const {
      fromCenter
    } = this.props
    
    // if (fromCenter > 0) {
      return (
        <canvas
          id='cctv-canvas'
          width={1200}
          height={1200}
        />
      )
    // }

    return null
  }

  animate = () => {
    setInterval(this.setIndex, 5000)
  }

  setIndex = () => {
    if (images[this.state.index + 1] !== undefined) {
      this.setState({
        index: this.state.index + 1
      }, this.renderImage)
    } else {
      this.setState({
        index: 0
      }, this.renderImage)
    }
  }

  renderImage = () => {
    const{
      context
    } = this.state

    const image = new Image()
    image.onLoad = this.handleImageLoad
    image.src = images[this.state.index]
  }

  handleImageLoad = (image) => {
    const {
      context
    } = this.state

    context.drawImage(image, 0, 0)
  }
}

export default CCTV