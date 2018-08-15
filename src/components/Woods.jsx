import React from 'react'
import { Motion, spring } from 'react-motion'

import WoodsImage from '../images/woods.jpg'
import Statue from './Statue'
import CCTV from './CCTV'

export default class Woods extends React.Component {
  state = {
    faded: ''
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        faded: 'faded'
      })
    }, 100)
  }

  render () {
    const {
      fromCenter
    } = this.props
    
    const config = {
      defaultStyle: {
        x: 0,
        opacity: 0
      },
      style: {
        x: spring(fromCenter.x),
        opacity: spring(1.4 - Math.abs(fromCenter.x / 75))
      }
    }
    
    return (
      <Motion {...config}>
        {value => (
          <>
            <div
              className={`Woods ${this.state.faded}`}
              style={{
                backgroundImage: `url('${WoodsImage}')`,
                transform: `translate3d(${-value.x}px, 0, 0)`
              }}
            >
              <Statue
                fromCenter={this.props.fromCenter}
              />
              <CCTV
                fromCenter={this.props.fromCenter}
              />
            </div>
            <div
              className={`Woods ${this.state.faded} blurred`}
              style={{
                backgroundImage: `url('${WoodsImage}')`,
                transform: `translate3d(${-value.x}px, 0, 0)`,
                opacity: value.opacity
              }}
            />
          </>
        )}
      </Motion>
    )
  }
}