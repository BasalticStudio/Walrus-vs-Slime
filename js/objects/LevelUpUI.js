/***
 * Level UP
 */

Objects.LevelUpUI = class LevelUpUI extends Phaser.Button {
    constructor(game, x, y) {
        super(game, x, y, 'btn_LevelUP')

        this.onInputUp.add(this.onClick, this)
    }

    onClick() {

    }
}
