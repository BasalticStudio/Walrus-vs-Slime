package wvss

import (
	"fmt"
	"github.com/labstack/echo"
	mw "github.com/labstack/echo/middleware"
	"golang.org/x/net/websocket"
)

var (
	server *echo.Echo
)

func New() *echo.Echo {
	server = echo.New()

	// Middleware
	server.Use(mw.Logger())
	server.Use(mw.Recover())
	server.Use(mw.Gzip())

	// Serve index
	server.Index("static/index.html")

	// Static Files
	server.Static("/js", "static/js")
	server.Static("/css", "static/css")
	server.Static("/img", "static/img")

	// Serve Websocket
	server.WebSocket("/ws", func(c *echo.Context) (err error) {
		ws := c.Socket()
		msg := ""

		for {
			if err = websocket.Message.Send(ws, "Hello Client!"); err != nil {
				return
			}
			if err = websocket.Message.Receive(ws, &msg); err != nil {
				return
			}
		}
		fmt.Println(msg)

		return
	})

	return server
}
