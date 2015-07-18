package wvss

import (
	"github.com/labstack/echo"
	mw "github.com/labstack/echo/middleware"
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

	return server
}
