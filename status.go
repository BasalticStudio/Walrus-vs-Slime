package wvss

type Status struct {
	Name  string
	Value int
}

func ConvertStatus(data map[interface{}]interface{}) Status {
	name := data["Name"].(string)
	value := 0
	if val, ok := data["Value"].(int64); ok {
		value = int(val)
	}

	return Status{name, value}
}
