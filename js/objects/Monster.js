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
        this.state = States.MonsterMove

        this.type = Types.Monster

        this.attackTarget = null

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

        this.body.onBeginContact.add(this.onBeginContact, this)
        this.body.onEndContact.add(this.onEndContact, this)
    }

    update() {
        this.state.update(this)
    }

    onBeginContact(other) {
        this.attackTarget = other.sprite
        this.state.handleEvent(this, States.Monster.Events.BeginContact)
    }

    onEndContact(other) {
        this.attackTarget = null
        this.state.handleEvent(this, States.Monster.Events.EndContact)
    }

    setState(newState) {
        this.state = newState
    }

    tryAttack() {
        if(this.attackTarget.type == Types.Tower) {
            if(this.attackTarget.team != this.team) {
                this.attackTarget.kill()
            }
        }
    }
}
