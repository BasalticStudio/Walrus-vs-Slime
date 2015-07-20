/**
 * Commands
 */

(function(){

    class Command {
        constructor(game, team) {
            this.game = game
            this.team = team
        }

        execute() {

        }
    }

    class CommandResolver {
        constructor() {
            this.commands = []
        }

        push(command) {
            // Only accept valid command
            if(command instanceof Command) {
                this.commands.push(command)
            }
        }

        resolve() {
            if(this.commands.length <= 0) {
                return
            }
            this.commands.shift().execute()
        }
    }

    class SpawnCommand extends Command {
        constructor(game, team, type) {
            super(game, team)

            this.type = type
        }

        execute() {
            let Tower = null
            if(Game.team == this.team) {
                Tower = Game.PlayerTower
            } else {
                Tower = Game.EnemyTower
            }

            Tower.spawn(this.type)
        }
    }

    window.Command = {
        Resolver: new CommandResolver(),
        Spawn: SpawnCommand
    }
}())
