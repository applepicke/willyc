import React from 'react'
import PropTypes from 'prop-types'
import { AppContainer  } from 'react-hot-loader'

import {
  Loop,
  Stage,
  World,
  KeyListener,
} from 'react-game-kit'

import Willy from './Willy.jsx'

export default class Game extends React.Component {

  static contextTypes = {
    scale: PropTypes.number,
  }

  constructor(props) {
    super(props)

    this.keyListener = new KeyListener()
  }

  componentDidMount() {
    let { LEFT, RIGHT, UP, DOWN } = this.keyListener

    this.keyListener.subscribe([ LEFT, RIGHT, UP, DOWN ])
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
                movementSpeed={5}
                />
            </World>
          </Stage>
        </Loop>
      </AppContainer>
    )
  }
}
