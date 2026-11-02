package config

import (
	"os"
	"strconv"
	"web-krs/config/mysql"

	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

type (
	Config interface {
		ServiceHost() string
		ServicePort() int
		Database() *gorm.DB
		ServiceDatabase() string
		ServiceUsername() string
		ServicePassword() string
	}

	config struct{}
)

func NewConfig() Config {
	_ = godotenv.Load(".env") // ignore error, fallback to OS env
	return &config{}
}

func(c *config) Database() *gorm.DB{
	return mysql.InitGorm(c.ServiceUsername(), c.ServicePassword(),c.ServiceHost(), c.ServiceDatabase(), c.ServicePort())
}

func(c *config) ServiceUsername() string {
	return os.Getenv("DB_USERNAME")
}

func(c *config) ServicePassword() string {
	return os.Getenv("DB_PASSWORD")
}

func(c *config) ServiceHost() string {

 return os.Getenv("DB_HOST")
}

func(c *config) ServicePort() int {
	getPort := os.Getenv("DB_PORT")
	if getPort == "" {
		return 3306 // default MySQL port
	}
	conv, _ := strconv.Atoi(getPort)

	return conv
}

func (c *config) ServiceDatabase() string  {
	return os.Getenv("DB_DATABASE")
}