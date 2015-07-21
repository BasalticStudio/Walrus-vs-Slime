package wvss

import (
	"golang.org/x/net/websocket"
)

// Define player team
const (
	TeamWalrus int = iota
	TeamSlime
)

// Define player
type Player struct {
	Conn    *websocket.Conn
	Team    int
	Matched bool
	Room    *Room
}

// Define room
type Room struct {
	Player1 *Player
	Player2 *Player
}

func NewRoom(player1 *Player, player2 *Player) *Room {
	room := &Room{player1, player2}
	player1.Matched = true
	player1.Room = room

	player2.Matched = true
	player2.Room = room

	return room
}

func (r *Room) Broadcast(packet *Packet) (err error) {
	Msgpack.Send(r.Player1.Conn, packet)
	Msgpack.Send(r.Player2.Conn, packet)
	return
}

// Player List
type PlayerList []*Player

func (pl *PlayerList) UnmatchPlayer(team int) (list []*Player) {
	// Initialize empty list
	list = make([]*Player, 0)

	for _, v := range *pl {
		if v.Team == -1 { // Skip no register team's player
			continue
		}

		if v.Team != team && v.Matched == false {
			list = append(list, v)
		}
	}

	return
}

func (pl *PlayerList) Add(conn *websocket.Conn) *Player {
	player := Player{Conn: conn, Matched: false, Team: -1}
	*pl = append(*pl, &player)
	return &player
}
