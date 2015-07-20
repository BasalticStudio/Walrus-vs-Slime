/***
 * Monster Card UI
 */

Objects.MonsterCardUI = class MonsterCardUI extends Phaser.Button {
    constructor(game, x, y, key, type) {
        super(game, x, y, key)

        this.monsterType = type

        // Handle Callback
        this.onInputUp.add(this.onClick, this)
    }

    onClick() {
        Command.Resolver.push(new Command.Spawn(this.game, Game.team, this.monsterType))
    }
}
