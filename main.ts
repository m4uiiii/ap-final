namespace SpriteKind {
    export const chip = SpriteKind.create()
}
// Makes is so that the chips don't pass through each other and can stack.
scene.onHitWall(SpriteKind.chip, function (sprite, location) {
    tiles.setWallAt(sprite.tilemapLocation(), true)
})
// drops the chip. Used this from youtube video https://www.youtube.com/live/aum5VUMfeeg?si=Sjh828dOPgUOb2zT
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    red_turn = !(red_turn)
    Turn(red_turn)
})
// Allows the chip to move left.
//  Used this from youtube video https://www.youtube.com/live/aum5VUMfeeg?si=Sjh828dOPgUOb2zT
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (chip_being_placed) {
        if (most_left_column < tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column)) {
            tiles.placeOnTile(generated_chip, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column) - 1, tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.row)))
        }
    }
})
// Calls the generated chip so it can be placed in the game. It also decides whose turn it is or whose turn is next.
function Turn (reds_turn: boolean) {
    chip_being_placed = true
    for (let value of sprites.allOfKind(SpriteKind.chip)) {
        a = value.tilemapLocation().column == generated_chip.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).column
        b = value.tilemapLocation().row == generated_chip.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row
        if (a && b) {
            break;
        }
    }
    generated_chip.vy = 150
    if (reds_turn) {
        generated_chip = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 b b b 2 2 2 2 2 2 2 . . 
            . 2 2 b b b 2 2 2 2 2 2 2 2 2 . 
            . 2 2 b 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.chip)
    } else {
        generated_chip = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 1 1 1 5 5 5 5 5 5 5 . . 
            . 5 5 1 1 1 5 5 5 5 5 5 5 5 5 . 
            . 5 5 1 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.chip)
    }
    tiles.placeOnTile(generated_chip, tiles.getTileLocation(7, 3))
}
// Allows the chip to move right.
//  Used this from youtube video https://www.youtube.com/live/aum5VUMfeeg?si=Sjh828dOPgUOb2zT
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (chip_being_placed) {
        if (most_right_column > tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column)) {
            tiles.placeOnTile(generated_chip, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column) + 1, tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.row)))
        }
    }
})
// asks player to choose map
function askQuestion () {
    question = game.askForNumber("Which connect 4 map? Type1:6x6map Type2:7x7map Type3:8x8map", 1)
    if (true) {
        tiles.setCurrentTilemap(tilemap`7x7map`)
    } else if (0 == 0) {
        tiles.setCurrentTilemap(tilemap`6X6map`)
    } else {
        tiles.setCurrentTilemap(tilemap`8x8map`)
    }
}
let question = 0
let b = false
let a = false
let chip_being_placed = false
let generated_chip: Sprite = null
let red_turn = false
let most_right_column = 0
let most_left_column = 0
most_left_column = 4
most_right_column = 11
askQuestion()
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 200
}
let maps = [tilemap`6X6map`, tilemap`7x7map`, tilemap`8x8map`]
tiles.setCurrentTilemap(maps._pickRandom())
scene.setBackgroundColor(4)
scene.centerCameraAt(15 * 15 / 2, 17 * 17 / 2)
red_turn = true
generated_chip = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 b b b 2 2 2 2 2 2 2 . . 
    . 2 2 b b b 2 2 2 2 2 2 2 2 2 . 
    . 2 2 b 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.chip)
tiles.placeOnTile(generated_chip, tiles.getTileLocation(7, 3))
