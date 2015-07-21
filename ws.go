package wvss

import (
	"fmt"
	"github.com/labstack/echo"
	"golang.org/x/net/websocket"
	"gopkg.in/vmihailenco/msgpack.v2"
)

const (
	CommandPacket int = iota
	CommandStatus
)

type Packet struct {
	Type int
	Data interface{}
}

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

// Implement Msgpack Encoder
func MsgpackEncoder(v interface{}) (msg []byte, payloadType byte, err error) {
	switch data := v.(type) {
	case string:
		return []byte(data), websocket.TextFrame, nil
	case []byte:
		return data, websocket.BinaryFrame, nil
	}
	msg, err = msgpack.Marshal(v)
	return msg, websocket.BinaryFrame, err
}

var Msgpack = websocket.Codec{
	MsgpackEncoder,
	MsgpackDecoder,
}

func WebsocketHandler(c *echo.Context) (err error) {
	ws := c.Socket()
	var packet []byte

	for {
		if err = Msgpack.Receive(ws, &packet); err != nil {
			return
		}

		fmt.Println(packet)

		if err = Msgpack.Send(ws, packet); err != nil {
			return
		}

	}
}
