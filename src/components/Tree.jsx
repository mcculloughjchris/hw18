import React from 'react'
import { Motion, spring } from 'react-motion'

import TreeImage from '../images/tree.png'

export default class Tree extends React.Component {
  state = {
    faded: ''
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        faded: 'faded'
      })
    }, 400)
  }
  
  render () {
    const {
      fromCenter
    } = this.props

    const config = {
      defaultStyle: {
        x: 0,
        blurOpacity: 0,
        opacity: 1,
      },
      style: {
        x: spring(fromCenter.x / 6),
        blurOpacity: spring(Math.abs(fromCenter.x / 75)),
        opacity: spring(1.4 - Math.abs(fromCenter.x / 75))
      }
    }
    
    return (
      <Motion {...config}>
        {value => {
          return (
            <div
              className={`Tree ${this.state.faded}`}
              style={{
                transform: `perspective(50px) translate3d(${value.x}px, 0, 0)`,
              }}
            >
              <img
                alt=''
                src={TreeImage}
                style={{
                  opacity: value.opacity
                }}
              />
              <img
                alt=''
                src={TreeImage}
                className='blurred'
                style={{
                  opacity: value.blurOpacity
                }}
              />
            </div>
          )
        }}
      </Motion>
    )
  }
}