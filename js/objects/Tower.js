/***
 * Tower
 *
 * The tower, which is player base. Player shoul defeat enemy's tower
 */

Objects.Tower = class Tower extends Phaser.Sprite {
    constructor(game, key, x, team) {
        super(game, x, 0, key, '')
        this.team = team
    }
}
