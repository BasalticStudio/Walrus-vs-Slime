/**
 * Websocket Client
 */

(function() {

    window.Socket = window.Socket || {}

    var PacketTypes = {
        Command : 0,
        Status  : 1
    }

    class Socket {
        constructor(uri, game) {
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

            this.game = game

            this.socket = new WebSocket(uri)
            this.socket.binaryType = "arraybuffer"

            this.socket.onopen = () => { this.onOpen() }
            this.socket.onmessage = (ev) => {  this.onMessage(ev) }
            this.socket.onclose = () => { this.onClose() }
        }

        onOpen() {

        }

        onMessage(ev) {
            let data = new Uint8Array(ev.data)
            let packetObject = msgpack.unpack(data)

            // If data is not correctly
            if(packetObject == null || packetObject.Type == "undefined") {
                return
            }

            switch(packetObject.Type) {
                case PacketTypes.Command:
                    this.pushCommand(packetObject.Data)
                    break
                case PacketTypes.Status:

                    break
            }
        }

        send(type, data) {
            // Ignore send data if socket not open
            if(this.socket.readyState != WebSocket.OPEN) {
                return
            }

            let rawPacket = {
                Type: type,
                Data: data
            }

            // Should package as binary
            this.socket.send(new Uint8Array(msgpack.pack(rawPacket)))
        }

        execCommand(name, team, params) {
            params = params || {}
            this.send(
                PacketTypes.Command,
                {
                    Name: name,
                    Team: team,
                    Params: params
                }
            )
        }

        pushCommand(data) {
            let CommandClass = Command[data.Name]
            if(!CommandClass) { // Invalid command
                return
            }

            let CommandInstance = new CommandClass(this.game, data.Team)
            CommandInstance.deserialize(data.Params)

            // Send command
            Command.Resolver.push(CommandInstance)
        }

        onClose() {
        }
    }

    window.Socket = Socket
    window.PacketType = PacketTypes
}())

