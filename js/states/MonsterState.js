/***
 * Monster State
 */

(function() {

    var State = {
        Move: 0,
        Attack: 1
    }

    var Events = {
        BeginContact: 0,
        EndContact: 1,
        Dead: 2
    }

    class Monster {
        static get MoveState() {
            return States.MonsterMove
        }

        static get AttackState() {
            return States.MonsterAttack
        }

        static get DeadState() {
            return States.DeadState
        }

        static get Events() {
            return Events
        }

        handleEvent(object, ev) {
            // Do nothing
            return object.SetState(Monster.MoveState)
        }

        update() {

        }
    }

    class Move extends Monster {
        handleEvent(object, ev) {
            switch(ev) {
                case Events.BeginContact:
                    object.setState(States.MonsterAttack)
                    break
            }
        }

        update(object) {
            object.move()
        }
    }

    class Attack extends Monster {
        handleEvent(object, ev) {
            switch(ev) {
                case Events.EndContact:
                    object.setState(States.MonsterMove)
                    break
            }
        }

        update(object) {
            object.tryAttack()
        }
    }

    class Dead extends Monster {
        handleEvent(object, ev) {

        }

        update(object) {

        }
    }

    States.Monster = Monster
    States.MonsterMove = new Move()
    States.MonsterAttack = new Attack()
    States.MonsterDead = new Dead()

}())
