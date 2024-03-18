namespace SpriteKind {
    export const chip = SpriteKind.create()
}
scene.onHitWall(SpriteKind.chip, function (sprite, location) {
    if (red_turn) {
    	
    } else {
    	
    }
})
// drops the chip. Used this from youtube video https://www.youtube.com/live/aum5VUMfeeg?si=Sjh828dOPgUOb2zT
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    generated_chip.vy = 150
    chip_being_placed = false
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (chip_being_placed) {
        if (most_left_column < tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column)) {
            tiles.placeOnTile(generated_chip, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column) - 1, tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.row)))
        }
    }
})
function Turn (reds_turn: boolean) {
    chip_being_placed = true
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
    for (let value of sprites.allOfKind(SpriteKind.chip)) {
        if (value.tilemapLocation() == generated_chip.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)) {
            break;
        }
    }
    tiles.placeOnTile(generated_chip, tiles.getTileLocation(7, 3))
}
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
let chip_being_placed = false
let generated_chip: Sprite = null
let red_turn = false
let most_right_column = 0
let most_left_column = 0
most_left_column = 4
most_right_column = 11
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 200
}
let maps = [tilemap`6X6map`, tilemap`7x7map`, tilemap`8x8map`]
tiles.setCurrentTilemap(maps._pickRandom())
scene.setBackgroundColor(4)
scene.centerCameraAt(15 * 15 / 2, 17 * 17 / 2)
red_turn = true
Turn(red_turn)
