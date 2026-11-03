package main

import (
	"log"

	"web-krs/config"
	"web-krs/handler"
	"web-krs/repository"
	"web-krs/service"
)

func main() {
	cfg := config.NewConfig()

	// init repository
	db := cfg.Database()
	repo := repository.Init(db)

	// run migrations
	if err := config.RunMigrations(db, config.GetMigrationsPath()); err != nil {
		log.Printf("Migration notice: %v", err)
	}

	// init service
	service := service.Init(repo)

	// init handler
	rest := handler.Init(service)
	rest.Run()
}
