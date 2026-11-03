// Package handler contains random krs-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterRandomKrsRoutes registers all random-krs routes under /api/random-krs.
func RegisterRandomKrsRoutes(api *gin.RouterGroup) {
	randomKrs := api.Group("/random-krs", middleware.ValidateToken("user"))
	{
		randomKrs.GET("", func(c *gin.Context) {
			r := &rest{}
			r.FilterRandomKrsHandler(c)
		})
	}
}
