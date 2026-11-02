package main

import (
	"web-krs/config"
	"web-krs/handler"
	"web-krs/repository"
	"web-krs/service"
)

func main() {

	config := config.NewConfig()

	// init repository
	repo := repository.Init(config.Database())

	// init service
	service := service.Init(repo)

	// init handler
	rest := handler.Init(service)
	rest.Run()
}
