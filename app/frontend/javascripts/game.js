import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'

import Game from './Game.jsx'

// for hot reloading
if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Game />,
  document.getElementById('game')
)
