import React from 'react'

import Layout from '../components/layout'
import Woods from '../components/Woods'
import Tree from '../components/Tree'

class IndexPage extends React.Component {
  state = {
    centerX: 0,
    centerY: 0,
    fromCenterX: 1,
    fromCenterY: 1
  }

  componentDidMount () {
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('resize', this.resizeHandler)
  }
  
  render () {
    const fromCenter = {
      x: this.state.fromCenterX,
      y: this.state.fromCenterY
    }

    return (
      <Layout>
        <Woods fromCenter={fromCenter} />
        {/* <Statue fromCenter={fromCenter} /> */}
        <Tree fromCenter={fromCenter} />
      </Layout>
    )
  }

  resizeHandler = () => {
    this.setState({
      centerX: window.innerWidth / 2,
      centerY: window.innerHeight / 2
    })
  }

  handleMouseMove = (e) => {
    const {
      centerX,
      centerY
    } = this.state

    const x = e.clientX
    const y = e.clientY

    this.setState({
      fromCenterX: -(centerX - x) / 10,
      fromCenterY: -(centerY - y) / 10
    })
  }
}

export default IndexPage
