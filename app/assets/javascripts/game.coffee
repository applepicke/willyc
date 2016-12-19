
sheetData =
  images: [
    'sprites/characters/willy/upward/walking1-sheet.png',
    'sprites/characters/willy/downward/walking1-sheet.png',
    'sprites/characters/willy/right/walking1-sheet.png'
  ]
  frames:
    width: 16
    height: 16
    regX: 8
    regY: 8
  animations:
    walk_up: [0, 7],
    walk_down: [8, 15],
    walk_right: [16, 23],
    stand: [0, 0]

keys = {}


class Animator

  constructor: (obj) ->
    @obj = obj
    @currentState = ''

  setState: (state) ->
    if @currentState != state
      @currentState = state
      @obj.gotoAndPlay(state)


getCenter = (el) ->
  canvas = el.get(0).getContext('2d').canvas
  return [canvas.width / 2, canvas.height / 1.5]


ns 'willy', (ns) ->
  ns.startGame = () ->
    stage = new createjs.Stage('game-area')
    sheet = new createjs.SpriteSheet(sheetData)

    willyObj = new createjs.Sprite(sheet)
    center = getCenter($('#game-area'))

    willyObj.x = center[0]
    willyObj.y = center[1]

    animator = new Animator(willyObj)

    stage.addChild(willyObj)
    createjs.Ticker.framerate = 15

    keydown = (e) ->
      keys[e.keyCode] = true

    keyup = (e) ->
      delete keys[e.keyCode]

    gameLoop = (e) ->
      speed = 4
      anim = 'stand'
      scale = 1

      if keys[65] or keys[37]
        anim = 'walk_right'
        scale = -1
        willyObj.x -= speed

      if keys[68] or keys[39]
        anim = 'walk_right'
        willyObj.x += speed

      if keys[87] or keys[38]
        anim = 'walk_up'
        willyObj.y -= speed

      if keys[83] or keys[40]
        anim = 'walk_down'
        willyObj.y += speed

      animator.setState(anim)
      willyObj.scaleX = scale

      stage.update(e)


    document.onkeydown = keydown
    document.onkeyup = keyup

    createjs.Ticker.addEventListener('tick', gameLoop)



