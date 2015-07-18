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
    var key = ""
    aspect = aspect || 0
    for(key in list) {
        loader.image(key, "img/" + Helper.RetinaFilter(list[key], aspect))
    }
}
