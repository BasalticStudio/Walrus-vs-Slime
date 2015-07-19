/***
 * Game Core
 */

window.States  = window.States  || {}
window.Scenes  = window.Scenes  || {}
window.Objects = window.Objects || {}
window.Input   = window.Input   || {}

// Define team enum list
window.Teams = {
    Walrus : 0,
    Slime  : 1
}

// Define custom game object type
window.Types = {
    // Start with 1000 to prevent conflict with Phaser
    Tower: 1000,
    Monster: 1001
}

