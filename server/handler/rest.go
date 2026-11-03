package handler

import (
	"log"
	"net/http"

	"web-krs/helper"
	"web-krs/service"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type (
	rest struct {
		httpServer *gin.Engine
		service    *service.Service
	}
)

func Init(service *service.Service) *rest {
	r := gin.Default()

	rest := &rest{
		httpServer: r,
		service:    service,
	}

	r.Use(cors.New(cors.Config{
		AllowAllOrigins:  true,
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	rest.RegisterMiddlewareAndRoutes()

	return rest
}

func (r *rest) RegisterMiddlewareAndRoutes() {
	api := r.httpServer.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "test success",
			})
		})

		api.GET("/seeder", func(ctx *gin.Context) {
			helper.SeederRefresh()

			helper.ResponseSuccessJson(ctx, "seeder success", "")
		})

		RegisterUserRoutes(api)
		RegisterFakultasRoutes(api)
		RegisterProdiRoutes(api)
		RegisterMatkulRoutes(api)
		RegisterKelasRoutes(api)
		RegisterJamKelasRoutes(api)
		RegisterPlanRoutes(api)
		RegisterRandomKrsRoutes(api)
		RegisterPlanningKrsRoutes(api)
		RegisterDashboardRoutes(api)
	}
}

func (r *rest) Run() {
	if err := r.httpServer.Run(); err != nil {
		log.Fatal(err)
	}
}
