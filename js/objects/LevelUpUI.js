/***
 * Level UP
 */

Objects.LevelUpUI = class LevelUpUI extends Phaser.Button {
    constructor(game, x, y) {
        super(game, x, y, 'btn_LevelUP')

        this.rank = Game.PlayerTower.Rank
        this.cost = TowerData[this.rank + 1].Cost

        this.onInputUp.add(this.onClick, this)
        Game.PlayerTower.onRankChanged.add(this.onRankUp, this)
    }

    update() {
        if(Game.PlayerTower.Mana >= this.cost && this.rank != 6) {
            this.alpha = 1
        } else {
            this.alpha = 0.5
        }
    }

    onClick() {
        //Command.Resolver.push(new Command.RankUp(this.game, Game.team))
        Game.Socket.execCommand("RankUp", Game.team)
    }

    onRankUp(rank) {
        this.rank = rank
        if(this.rank < 6) {
            this.cost = TowerData[this.rank + 1].Cost
        }
    }
}
