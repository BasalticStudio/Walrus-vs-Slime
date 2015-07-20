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

        getTower() {
            if(Game.team == this.team) {
                return Game.PlayerTower
            } else {
                return Game.EnemyTower
            }
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
            this.getTower().spawn(this.type)
        }
    }

    class RankUpCommand extends Command {
        execute() {
            this.getTower().rankUp()
        }
    }

    window.Command = {
        Resolver: new CommandResolver(),
        Spawn: SpawnCommand,
        RankUp: RankUpCommand
    }
}())
