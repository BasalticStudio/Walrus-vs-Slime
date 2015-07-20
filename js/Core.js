/***
 * Game Core
 */

window.Debug   = window.Debug   || true
window.States  = window.States  || {}
window.Scenes  = window.Scenes  || {}
window.Objects = window.Objects || {}
window.Input   = window.Input   || {}
window.Game    = window.Input   || {}
window.Factory = window.Factory || {}
window.Command = window.Command || {}

// Define team enum list
window.Teams = {
    Walrus : 0,
    Slime  : 1
}

// Define custom game object type
window.Types = {
    // Start with 1000 to prevent conflict with Phaser
    Tower   : 1000,
    Monster : 1001
}

// Define Monsters
Objects.Monsters = {}

// Define monster types
window.MonsterType = {
    Normal      : 0,
    HighDamage  : 1,
    HighSpeed   : 2,
    HighDefense : 3,
    Ranger      : 4,
    Super       : 5
}

// Game Settings
window.Settings = {
    UI: {
        Height: 200
    }
}
