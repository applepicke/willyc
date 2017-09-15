import React from 'react'
import PropTypes from 'prop-types'

import { Body } from 'react-game-kit'
import Sprite from './Sprite'

import Matter from 'matter-js'

import { UP, DOWN, LEFT, RIGHT, W, A, S, D } from './Keys'

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
    const { scale } = this.context
    const { body } = this.body

    const speed = movementSpeed * scale
    const diagSpeed = speed * 0.7

    let x = 0
    let y = 0
    let flipX = false
    let anim = 3

    const isUp = keys.isDown(UP) || keys.isDown(W)
    const isDown = keys.isDown(DOWN) || keys.isDown(S)
    const isLeft = keys.isDown(LEFT) || keys.isDown(A)
    const isRight = keys.isDown(RIGHT) || keys.isDown(D)

    if (isUp && isLeft) {
      x = -diagSpeed
      y = -diagSpeed
      flipX = true
      anim = 4
    }
    else if (isUp && isRight) {
      x = diagSpeed
      y = -diagSpeed
      anim = 4
    }
    else if (isDown && isLeft) {
      x = -diagSpeed
      y = diagSpeed
      flipX = true
      anim = 0
    }
    else if (isDown && isRight) {
      x = diagSpeed
      y = diagSpeed
      anim = 0
    }
    else if (isUp) {
      y = -speed
      anim = 4
    }
    else if (isDown) {
      y = speed
      anim = 0
    }
    else if (isLeft) {
      x = -speed
      anim = 1
    }
    else if (isRight) {
      x = speed
      anim = 2
    }

    this.move(body, x, y)
    this.setState({
      anim,
      flipX
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
      anim: 3,
      flipX: false
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
    const { flipX } = this.state
    const { scale } = this.context

    const flipXcss = flipX ? 'scaleX(-1)' : ''

    return {
      position: 'absolute',
      transform: `translate(${x * scale}px, ${y * scale}px) ${flipXcss}`,
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
            scale={2 * scale}
            state={this.state.anim}
            steps={[7, 7, 7, 0, 7]}
            />
        </Body>
      </div>
    )
  }
}
