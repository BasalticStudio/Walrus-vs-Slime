/**
 * Game State
 */

(function() {
    class GameState {
        constructor() {
            this.team = Teams.Walrus
            this.PlayerTower = null
            this.EnemyTower = null
        }

        setTeam(team) {
            this.team = team
        }
    }

    Helper.ResetGame = function() {
        window.Game = new GameState()
    }
    Game = new GameState()
}())
