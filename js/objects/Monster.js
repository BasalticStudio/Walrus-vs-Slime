/***
 * Monster
 *
 * The player's arm, send it to destroy enemy's tower
 */

Objects.Monster = class Monster extends Phaser.Sprite {
    constructor(game, key, x, team) {
        super(game, x, 668, key, '')
        game.physics.enable(this, Phaser.Physics.P2JS)

        this.team = team
        this.active = true

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
                this.body.collides(state.CollisionGroup.Slime, this.onCollision, this)
                break
            case Teams.Slime:
                this.body.setCollisionGroup(state.CollisionGroup.Slime)
                this.body.collides(state.CollisionGroup.Walrus, this.onCollision, this)
                break
        }
    }

    update() {
        this.body.setZeroVelocity()
        if(!this.active) { return } // Pause activity
        this.move()
    }

    move() {
        this.body.moveRight(500)
    }

    onCollision() {
        console.log("Collision!")
        this.active = false
    }
}
