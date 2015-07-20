/**
 * Game State
 */

(function() {
    class GameState {
        constructor() {
            this.team = Teams.Walrus
        }

        setTeam(team) {
            this.team = team
        }
    }

    Game = new GameState()
}())
