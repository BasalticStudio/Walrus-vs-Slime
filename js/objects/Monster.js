/***
* Monster
*
* The player's arm, send it to destroy enemy's tower
*/

(function() {

    Objects.Monsters = {}

    // Helper
    var MonsterSpriteKey = function(team, type) {
        return team == Teams.Walrus ? "Walrus_" + type : "Slime_" + type
    }

    class Monster extends Phaser.Sprite {
        constructor(game, key, x, team) {
            // Initialize Object
            super(game, x, 0, key, '')
            this.y = Helper.CalcLand(this.game, this)
            this.checkWorldBonuds = true

            // Enable Physics
            game.physics.enable(this, Phaser.Physics.P2JS, Debug)
            this.body.collideWorldBonuds = true

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
            this._cost = 100
            this._dead = false
            this._deadCollision = null

            this._coolDown = false

            this.initCollision()
            this.setupAnimation(key)

            this.animations.play('Walk')
        }

        static get Cost() {
            return 100
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

            this._deadCollision = state.CollisionGroup.Dead

            this.body.onBeginContact.add(this.onBeginContact, this)
            this.body.onEndContact.add(this.onEndContact, this)
            this.body.mass = 10000
        }

        setupAnimation(key) {
            let AnimationConfig = Animation[key]
            this.animations.add('Walk', AnimationConfig.Walk, 4, true)
            this.animations.add('Attack', AnimationConfig.Attack, 4)
            this.animations.add('Dead', AnimationConfig.Dead, 4)
        }

        update() {
            this.body.setZeroVelocity() // Force stop physics simulate
            this.body.setZeroRotation()
            this.body.setZeroDamping()
            this.body.setZeroForce()

            this.state.update(this)
        }

        onBeginContact(other) {
            if(other && other.sprite) {
                this.attackTarget = other.sprite
            }
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
            if(this._dead) { return }
            // Player team is "Move Right"
            if(this.team == Game.team) {
                this.body.moveRight(this._speed)
            } else {
                this.body.moveLeft(this._speed)
                this.scale.x = -1
            }
        }

        tryAttack() {
            // Do nothing when no target
            if(!this.attackTarget) {
                return
            }
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
                    this.animations.play('Attack')
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

            if(this._health <= 0 && !this._dead) {
                this._dead = true
                this.body.clearCollision()
                this.state.handleEvent(this, States.Monster.Events.Dead)
                // Fade out
                this.game.add.tween(this).to( {alpha: 0}, 0.5, Phaser.Easing.Cubic.Out).start()
                // Remove objects
                this.game.time.events.add(Phaser.Timer.SECOND * 0.5, () => { this.destroy() })
            }
        }

        setupStatus(status) {
            this._damage = status.Attack
            this._speed = status.Speed
            this._health = status.Health
            this._attackSpeed = status.AttackSpeed

            this._minDamageRatio = status.MinDamageRatio
            this._maxDamageRatio = status.MaxDamageRatio

        }
    }

    // Monster Type : Normal
    Objects.Monsters.Normal = class NormalMonster extends Monster {
        constructor(game, x, team) {
            super(game, MonsterSpriteKey(team, "Normal"), x, team)

            let Status = MonsterData[team][MonsterType.Normal]
            this.setupStatus(Status)
        }

        static get Cost() {
            return 100
        }
    }

    // Monster Type : High Attack
    Objects.Monsters.Attack = class AttackMonster extends Monster {
        constructor(game, x, team) {
            super(game, MonsterSpriteKey(team, "Attack"), x, team)

            let Status = MonsterData[team][MonsterType.HighAttack]
            this.setupStatus(Status)
        }

        static get Cost() {
            return 250
        }
    }

    // Monster Type : High Defense
    Objects.Monsters.Defense = class DefenseMonster extends Monster {
        constructor(game, x, team) {
            super(game, MonsterSpriteKey(team, "Defense"), x, team)

            let Status = MonsterData[team][MonsterType.HighDefense]
            this.setupStatus(Status)
        }

        static get Cost() {
            return 250
        }
    }

    // Monster Type : High Speed
    Objects.Monsters.Speed = class SpeedMonster extends Monster {
        constructor(game, x, team) {
            super(game, MonsterSpriteKey(team, "Speed"), x, team)

            let Status = MonsterData[team][MonsterType.HighSpeed]
            this.setupStatus(Status)
        }

        static get Cost() {
            return 250
        }
    }

    // Monster Type : Ranger
    Objects.Monsters.Ranger = class RangerMonster extends Monster {
        constructor(game, x, team) {
            super(game, MonsterSpriteKey(team, "Ranger"), x, team)

            this.body.setRectangle(200, 100, 50)
            this.initCollision() // Reconfig collision group

            let Status = MonsterData[team][MonsterType.Ranger]
            this.setupStatus(Status)
        }

        static get Cost() {
            return 200
        }
    }

    // Monster Type : Super
    Objects.Monsters.Super = class SuperMonster extends Monster {
        constructor(game, x, team) {
            super(game, MonsterSpriteKey(team, "Super"), x, team)

            let Status = MonsterData[team][MonsterType.Super]
            this.setupStatus(Status)
        }

        static get Cost() {
            return 1000
        }
    }
}())
