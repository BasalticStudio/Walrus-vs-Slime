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
        this._rank = 1

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

    damage(damage) {
        this._health -= damage
        if(this._health <= 0) {
            // Dead event
            this.destroy()
        }
    }

}
