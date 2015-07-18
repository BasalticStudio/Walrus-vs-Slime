/***
 * Monster
 *
 * The player's arm, send it to destroy enemy's tower
 */

Objects.Monster = class Monster extends Phaser.Sprite {
    constructor(game, key) {
        super(game, 0, 0, key, '')

        this.active = true
    }

    update() {
        if(!this.active) { return } // Pause activity
        console.log("Active")
        this.move()
    }

    move() {
        this.x += 10
    }
}
