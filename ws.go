package wvss

import (
	"fmt"
	"github.com/labstack/echo"
	"golang.org/x/net/websocket"
	"gopkg.in/vmihailenco/msgpack.v2"
)

const (
	CommandPacket int = iota
	StatusPacket
)

type Packet struct {
	Type int
	Data interface{}
}

// Implement msgpack capable decoder
func MsgpackDecoder(msg []byte, payloadType byte, v interface{}) (err error) {
	switch data := v.(type) {
	case *string:
		*data = string(msg)
		return nil
	case *[]byte:
		*data = msg
		return nil
	}

	err = msgpack.Unmarshal(msg, v)
	if err == nil {
		return nil
	}

	fmt.Println(err.Error())

	return websocket.ErrNotSupported
}

// Implement msgpack capable encoder
func MsgpackEncoder(v interface{}) (msg []byte, payloadType byte, err error) {
	switch data := v.(type) {
	case string:
		return []byte(data), websocket.TextFrame, nil
	case []byte:
		return data, websocket.BinaryFrame, nil
	}

	msg, err = msgpack.Marshal(v)
	if err == nil {
		return msg, websocket.BinaryFrame, err
	}

	return msg, websocket.UnknownFrame, err
}

// Setup custom websocket codec
var Msgpack = websocket.Codec{
	MsgpackEncoder,
	MsgpackDecoder,
}

var players PlayerList

func WebsocketHandler(c *echo.Context) (err error) {
	ws := c.Socket()
	var packet Packet

	player := players.Add(ws)

	// TODO: Handle user close connection
	defer func() {
		// On player disconnection
		players.Remove(player)
		fmt.Println(len(players))
	}()

	for {
		if err = Msgpack.Receive(ws, &packet); err != nil {
			return
		}

		if err = ReslovePacket(packet, player); err != nil {
			fmt.Println(err.Error())
			return
		}
	}
}

func ReslovePacket(packet Packet, player *Player) (err error) {
	switch packet.Type {
	case CommandPacket:
		if player.Room != nil {
			player.Room.Broadcast(&packet)
		}

	case StatusPacket:
		// TODO: Redesign packet format
		data := ConvertStatus((packet.Data).(map[interface{}]interface{}))
		err = HandlePlayerStatus(player, data)
	}

	return
}

func HandlePlayerStatus(player *Player, status Status) (err error) {
	switch status.Name {
	case "Register":
		player.Team = status.Value
		err = Msgpack.Send(player.Conn, Packet{StatusPacket, Status{"Register", 1}})
	case "Match":
		matchedPlayer := FindMatch(player.Team)
		if matchedPlayer != nil {
			room := NewRoom(player, matchedPlayer)
			room.Broadcast(&Packet{StatusPacket, Status{"Match", 1}})
		} else {
			err = Msgpack.Send(player.Conn, Packet{StatusPacket, Status{"Match", 0}})
		}

	}
	return
}

func FindMatch(team int) *Player {
	matches := players.UnmatchPlayer(team)
	if len(matches) > 0 {
		return matches[0]
	}

	return nil
}
