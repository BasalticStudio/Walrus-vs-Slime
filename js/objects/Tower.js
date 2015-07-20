/***
 * Tower
 *
 * The tower, which is player base. Player shoul defeat enemy's tower
 */

Objects.Tower = class Tower extends Phaser.Sprite {
    constructor(game, key, x, team) {
        super(game, x, 0, key, '')
        this.y = Helper.CalcLand(this.game, this)

        game.physics.enable(this, Phaser.Physics.P2JS, Debug)
        this.body.kinematic = true

        this.team = team
        this.type = Types.Tower

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
}
