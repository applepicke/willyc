import React from 'react'

import { AppContainer  } from 'react-hot-loader'
import {
  Loop,
  Stage,
  World,
  Body,
  Sprite
} from 'react-game-kit'

export default class Game extends React.Component {

  render() {
    return (
      <AppContainer>
        <Loop>
          <Stage>
            <World>
              <Body args={[0, 0, 0, 0]} ref={willy => this.willy = willy} >
                <Sprite
                  onPlayStateChanged={this.handlePlayStateChanged}
                  src="sprites/characters/willy/sheet.png"
                  tileHeight={16}
                  tileWidth={16}
                  scale={this.context.scale * 3}
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
