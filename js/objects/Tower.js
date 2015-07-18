/***
 * Tower
 *
 * The tower, which is player base. Player shoul defeat enemy's tower
 */

Objects.Tower = class Tower extends Phaser.Sprite {
    constructor(game, key, team) {
        super(game, 0, 0, key, '')
        this.team = team
    }
}
