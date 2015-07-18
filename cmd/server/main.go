package main

import (
	wvss "github.com/BasalticStudio/Walrus-vs-Slime"
	"os"
)

var (
	Port string
)

func main() {

	Port := os.Getenv("PORT")
	if len(Port) <= 0 {
		Port = "5000"
	}

	server := wvss.New()
	server.Run(":" + Port)
}
