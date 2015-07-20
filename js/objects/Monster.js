/***
 * Monster
 *
 * The player's arm, send it to destroy enemy's tower
 */

Objects.Monster = class Monster extends Phaser.Sprite {
    constructor(game, key, x, team) {
        // Initialize Object
        super(game, x, 0, key, '')
        this.y = Helper.CalcLand(this.game, this)

        // Enable Physics
        game.physics.enable(this, Phaser.Physics.P2JS, Debug)

        // Setup Team
        this.team = team
        this.active = true
        this.state = States.MonsterMove

        // Setup Object Type
        this.type = Types.Monster

        // Initialize
        this._attackTarget = null
        this._speed = 300
        this._health = 500
        this._damage = 20
        this._minDamageRatio = 0.8
        this._maxDamageRatio = 1.2
        this._attackSpeed = 0.25
        this._coolDown = false

        this.initCollision()
    }

    static get cost() {
        return 50
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
        this.body.setZeroVelocity() // Force stop physics simulate
        this.body.setZeroRotation()
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

    move() {
        // Player team is "Move Right"
        if(this.team == Game.team) {
            this.body.moveRight(this._speed)
        } else {
            this.body.moveLeft(this._speed)
        }
    }

    tryAttack() {
        // Do nothing when meet same team
        if(this.attackTarget.team == this.team) {
            return
        }

        if(this._coolDown) { // Do nothing when cooldown
            return
        }

        switch(this.attackTarget.type) {
            case Types.Tower:
            case Types.Monster:
                this.attackTarget.damage(this.game.rnd.realInRange(this._damage * this._minDamageRatio, this._damage * this._maxDamageRatio))
                this.coolDown()
                break
        }
    }

    coolDown() {
        this._coolDown = true
        this.game.time.events.add(Phaser.Timer.SECOND * this._attackSpeed, () => { this._coolDown = false })
    }

    damage(damage) {
        // Be damagerd
        this._health -= damage

        if(this._health <= 0) {
            // Dead
            this.destroy()
        }
    }
}
