import React, { PropTypes } from 'react'

import { AppContainer  } from 'react-hot-loader'
import {
  Loop,
  Stage,
  World,
  Body,
  Sprite
} from 'react-game-kit'

export default class Game extends React.Component {

  static contextTypes = {
    scale: PropTypes.number,
  }

  render() {
    return (
      <AppContainer>
        <Loop>
          <Stage>
            <World>
              <Body args={{ x: 0, y: 0 }} ref={willy => this.willy = willy} >
                <Sprite
                  onPlayStateChanged={this.handlePlayStateChanged}
                  src="sprites/characters/willy/sheet.png"
                  tileHeight={16}
                  tileWidth={16}
                  scale={3}
                  state={0}
                  steps={[7, 7, 7]}
                  />
              </Body>
            </World>
          </Stage>
        </Loop>
      </AppContainer>
    )
  }
}
