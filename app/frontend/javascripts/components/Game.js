import React from 'react'
import PropTypes from 'prop-types'
import { AppContainer  } from 'react-hot-loader'

import { UP, LEFT, DOWN, RIGHT, W, A, S, D } from './Keys'

import {
  Loop,
  Stage,
  World,
  KeyListener,
} from 'react-game-kit'

import Willy from './Willy.js'

export default class Game extends React.Component {

  static contextTypes = {
    scale: PropTypes.number,
  }

  constructor(props) {
    super(props)

    this.keyListener = new KeyListener()
  }

  componentDidMount() {
    this.keyListener.subscribe([ LEFT, RIGHT, UP, DOWN, W, A, S, D ])
  }

  render() {
    return (
      <AppContainer>
        <Loop>
          <Stage>
            <World gravity={{
              x: 0,
              y: 0
            }}>
              <Willy
                keys={this.keyListener}
                movementSpeed={3}
                />
            </World>
          </Stage>
        </Loop>
      </AppContainer>
    )
  }
}
