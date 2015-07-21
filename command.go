package wvss

// Game Command
type Command struct {
	Name   string
	Team   int
	Params map[string]interface{}
}
