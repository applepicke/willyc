import React from 'react'
import { Sprite as OldSprite } from 'react-game-kit'

class Sprite extends OldSprite {

  getWrapperStyles() {
    return {
      height: this.props.tileHeight,
      width: this.props.tileWidth,
      overflow: 'hidden',
      position: 'relative',
      transform: `scale(${this.props.scale || this.context.scale})`,
      imageRendering: 'pixelated',
    };
  }

}

export default Sprite
