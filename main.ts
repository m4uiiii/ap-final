namespace SpriteKind {
    export const chip = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    generated_chip.vy = 150
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (most_left_column < tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column)) {
        tiles.placeOnTile(generated_chip, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column) - 1, 3))
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
    tiles.placeOnTile(generated_chip, tiles.getTileLocation(7, 3))
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (most_left_column < tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column)) {
        tiles.placeOnTile(generated_chip, tiles.getTileLocation(tiles.locationXY(tiles.locationOfSprite(generated_chip), tiles.XY.column) + 1, 3))
    }
})
let chip_being_placed = false
let most_left_column = 0
let generated_chip: Sprite = null
namespace userconfig{
    export const ARCADE_SCREEN_WIDTH = 240
    export const ARCADE_SCREEN_HEIGHT = 200
}
let maps = [tilemap`6x6 connect 4`, tilemap`7x7 connect 4`, tilemap`7x7 connect 4`]
tiles.setCurrentTilemap(maps._pickRandom())
scene.setBackgroundColor(4)
scene.centerCameraAt(15 * 15 / 2, 16 * 16 / 2)
Turn(true)
forever(function () {
	
})
