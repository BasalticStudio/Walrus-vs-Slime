/**
 * Retina Helper
 *
 */

window.Helper = window.Helper || {}

Helper.RetinaFilter = function(filename, aspect) {
    // No retina image now
    /*
    if(aspect > 1) {
       return filename.replace(/(.+)\.(\w+)/, '$1@2x.$2')
    }
    */

    return filename
}

Helper.LoadImages = function(loader, list, aspect) {
    let key = ""
    let data = null
    aspect = aspect || 0
    for(key in list) {
        data = list[key]
        if(data instanceof Array) {
            loader.spritesheet(key, "img/" + Helper.RetinaFilter(data[0], aspect), data[1], data[2], data[3])
        } else {
            loader.image(key, "img/" + Helper.RetinaFilter(data, aspect))
        }
    }
}

Helper.CalcLand = function(game, object) {
    let gameHeight = game.height
    let halfHeight = object.height / 2
    return gameHeight - Settings.UI.Height - halfHeight
}
