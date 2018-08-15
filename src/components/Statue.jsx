import React from 'react'

import StatueImage from '../images/statue.png'

let canvas
let context

export default class Statue extends React.Component {
  state = {
    animated: false
  }
  
  componentDidUpdate () {
    if (this.state.animated === false) {
      if (this.props.fromCenter.x < -25) {
        this.animate()
        this.setState({
          animated: true
        })
      }
    }
  }

  componentDidMount () {
    // setup canvas
    canvas = document.getElementById('statue')
    context = canvas.getContext('2d')
    
    // setup statue
    const statue = new Image()
    context.scale(0.5, 0.5)
    statue.onload = this.drawOnLoad.bind(this, context, statue)
    statue.src = StatueImage
  }
  
  render () {
    const {
      fromCenter
    } = this.props
    
    return (
      <canvas
        id="statue"
        width="626"
        height="1698"
        style={{
          transform: `perspective(5px) translate3d(900px, 700px, 0px)`,
          opacity: fromCenter.x < 0 ? 0.4 : 0
        }}
      />
    )
  }

  drawOnLoad = (context, statue) => {
    context.drawImage(statue, 0, 0, 626, 1698)
  }

  animate = () => {
    let i = 0

    const lines = [300, 302, 310, 313, 315, 328, 374, 376, 379, 380, 384, 387, 396, 398]
    
    const blood = () => {
      const start = 175 + i
      const stop = start + 1
      
      for (let x in lines) {
        context.strokeStyle = '#f00'
        context.save()
        context.beginPath()
        context.moveTo(lines[x], start)
        context.lineTo(lines[x], stop)
        context.stroke()
      }

      if (i < 700) {
        i += 1
        requestAnimationFrame(blood)
      }
    }

    requestAnimationFrame(blood)
  }
}