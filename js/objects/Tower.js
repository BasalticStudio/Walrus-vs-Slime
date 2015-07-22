/***
 * Tower
 *
 * The tower, which is player base. Player shoul defeat enemy's tower
 */

Objects.Tower = class Tower extends Phaser.Sprite {
    constructor(game, key, x, team) {
        super(game, x, 0, key, '')
        this.y = Helper.CalcLand(this.game, this)

        // Enable physics
        game.physics.enable(this, Phaser.Physics.P2JS, Debug)
        this.body.kinematic = true

        // Setup object
        this.team = team
        this.type = Types.Tower

        // Initialize
        this._health = 1000
        this._mana = 500
        this._maxMana = 500
        this._manaRecover = 10
        this._rank = 1

        // Setup Timer
        this.game.time.events.loop(Phaser.Timer.SECOND * 0.5, this.recoverMana, this)

        // Signal
        this.onRankChanged = new Phaser.Signal()

        this.initCollision()
        this.initAnimation()
    }

    initCollision() {
        if(this.game.state.current != "BattleField") {
            // Do nothing when create outside BattleField
            return
        }

        let state = this.game.state.getCurrentState()

        switch(this.team) {
            case Teams.Walrus:
                this.body.setCollisionGroup(state.CollisionGroup.Walrus)
                this.body.collides(state.CollisionGroup.Slime)
                break
            case Teams.Slime:
                this.body.setCollisionGroup(state.CollisionGroup.Slime)
                this.body.collides(state.CollisionGroup.Walrus)
                break
        }
    }

    initAnimation() {
        this.animations.add('Rank1', [0])
        this.animations.add('Rank2', [1])
        this.animations.add('Rank3', [2])
    }

    get Mana() {
        return this._mana
    }

    get Rank() {
        return this._rank
    }

    damage(damage) {
        this._health -= damage
        if(this._health <= 0) {
            // Dead event
            Game.loser = this.team
            this.game.state.start('Result')
        }
    }

    spawn(type) {
        let MonsterClass = Factory.Monster.getMonsterClass(type)
        if(this._mana >= MonsterClass.Cost) {
            this._mana -= MonsterClass.Cost
            let monster = Factory.Monster.create(MonsterClass, this.game, this.x, this.team)
            let anchorY = 50
            if(monster.height > 200) {
                 anchorY = 0
            }
            let constraint = this.game.physics.p2.createPrismaticConstraint(this, monster, true, [0,anchorY], [0,0], [4500,0])
            constraint.lowerLimitEnabled = constraint.upperLimitEnabled = true
            constraint.upperLimit = 1;
            constraint.lowerLimit = -1;
            this.parent.add(monster)
        }
    }

    recoverMana() {
        this._mana += this._manaRecover

        if(this._mana > this._maxMana) {
            this._mana = this._maxMana
        }
    }

    rankUp() {
        // Max rank do nothing
        if(this._rank >= 6) {
            return
        }

        let nextRank = this._rank + 1
        if(this._mana >= TowerData[nextRank].Cost) {
            this._mana -= TowerData[nextRank].Cost
            this.refreshStatus(nextRank)
        }
    }

    refreshStatus(rank) {
        let newStatus = TowerData[rank]

        this._health = newStatus.Health
        this._maxMana = newStatus.Mana
        this._manaRecover = newStatus.ManaRecover
        this._rank = rank

        switch(this._rank) {
            case 1:
            case 2:
                this.animations.play('Rank1')
                break
            case 3:
            case 4:
                this.animations.play('Rank2')
                break
            case 5:
            case 6:
                this.animations.play('Rank3')
                break
        }

        this.onRankChanged.dispatch(rank)
    }

}
