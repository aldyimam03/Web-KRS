// Package handler contains planning krs-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterPlanningKrsRoutes registers all planning-krs routes under /api/planning-krs.
func RegisterPlanningKrsRoutes(api *gin.RouterGroup) {
	planningKrs := api.Group("/planning-krs", middleware.ValidateToken("user"))
	{
		planningKrs.POST("", func(c *gin.Context) {
			r := &rest{}
			r.SuggestionKrs(c)
		})
	}
}
