/***
 * Monster Card UI
 */

Objects.MonsterCardUI = class MonsterCardUI extends Phaser.Button {
    constructor(game, x, y, key, type) {
        super(game, x, y, key)

        this.monsterType = type
        this.monsterClass = Factory.Monster.getMonsterClass(type)
        this.monsterCost = this.monsterClass.Cost

        // Handle Callback
        this.onInputUp.add(this.onClick, this)
    }

    update() {
        // TODO: Should switch to card UI
        if(Game.PlayerTower.Mana >= this.monsterCost) {
            this.alpha = 1
        } else {
            this.alpha = 0.5
        }
    }

    onClick() {
        //Command.Resolver.push(new Command.Spawn(this.game, Game.team, this.monsterType))
        Game.Socket.execCommand("Spawn", Game.team, {Type: this.monsterType})
    }

    checkMana() {

    }
}
