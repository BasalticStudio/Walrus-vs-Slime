/**
 * Websocket Client
 */

(function() {

    window.Socket = window.Socket || {}

    class Socket {
        constructor(uri) {
            uri  = uri || ""
            if(uri.length <= 0) {
                let loc = window.location
                uri = 'ws:'

                if(loc.protocol ===  'https:') {
                    uri = 'wss:'
                }

                uri += '//' + loc.host
                uri += loc.pathname + 'ws'
            }

            this.socket = new WebSocket(uri)
            this.socket.onopen = this.onOpen
            this.socket.onmessage = this.onMessage
        }

        onOpen() {
        }

        onMessage(ev) {
        }
    }

    window.Socket = Socket
}())

