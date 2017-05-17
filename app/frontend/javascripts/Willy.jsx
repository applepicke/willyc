import React from 'react'
import PropTypes from 'prop-types'

import { Body, Sprite } from 'react-game-kit'
import Matter from 'matter-js'

export default class Willy extends React.Component {

  static contextTypes = {
    engine: PropTypes.object,
    scale: PropTypes.number
  };

  move = (body, x, y) => {
    Matter.Body.setVelocity(body, { x: x, y: y })
  }

  checkKeys = () => {
    const { keys, movementSpeed } = this.props
    const { body } = this.body

    let x = 0
    let y = 0
    let anim = 3

    if (keys.isDown(keys.UP)) {
      y = -movementSpeed
      anim = 4
    }

    if (keys.isDown(keys.DOWN)) {
      y = movementSpeed
      anim = 0
    }

    if (keys.isDown(keys.LEFT)) {
      x = -movementSpeed
      anim = 1
    }

    if (keys.isDown(keys.RIGHT)) {
      x = movementSpeed
      anim = 2
    }

    this.move(body, x, y)
    this.setState({
      anim: anim
    })
  }

  update = () => {
    const { body } = this.body
    this.checkKeys()

    this.setState({
      position: body.position
    })

  }

  constructor(props) {
    super(props)

    this.state = {
      position: { x: 0, y: 0 },
      anim: 3
    }
  }

  componentDidMount() {
    Matter.Events.on(this.context.engine, 'afterUpdate', this.update)
  }

  componentWillUnmount() {
    Matter.Events.off(this.context.engine, 'afterUpdate', this.update)
  }

  getWrapperStyles() {
    const { x, y } = this.state.position
    const { scale } = this.context

    return {
      position: 'absolute',
      transform: `translate(${x * scale}px, ${y * scale}px)`,
      transformOrigin: 'left top',
    }
  }

  render() {
    const { x, y } = this.state.position
    const { scale } = this.context

    return (
      <div style={this.getWrapperStyles()}>
        <Body
          args={[x, y, 64, 64]}
          inertia={Infinity}
          ref={body => this.body = body} >
          <Sprite
            src="sprites/characters/willy/sheet.png"
            tileHeight={16}
            tileWidth={16}
            scale={5 * scale}
            state={this.state.anim}
            steps={[7, 7, 7, 0, 7]}
            />
        </Body>
      </div>
    )
  }
}
