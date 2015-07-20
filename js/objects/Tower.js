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

        this.initCollision()
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

    get Mana() {
        return this._mana
    }

    damage(damage) {
        this._health -= damage
        if(this._health <= 0) {
            // Dead event
            this.destroy()
        }
    }

    spawn(type) {
        let MonsterClass = Factory.Monster.getMonsterClass(type)
        if(this._mana >= MonsterClass.Cost) {
            this._mana -= MonsterClass.Cost
            this.parent.add(Factory.Monster.create(MonsterClass, this.game, this.x, this.team))
        }
    }

    recoverMana() {
        this._mana += this._manaRecover

        if(this._mana > this._maxMana) {
            this._mana = this._maxMana
        }
    }

}
