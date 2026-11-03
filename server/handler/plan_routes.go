// Package handler contains plan-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterPlanRoutes registers all my-plan routes under /api/my-plan.
func RegisterPlanRoutes(api *gin.RouterGroup) {
	myPlan := api.Group("/my-plan", middleware.ValidateToken("user"))
	{
		myPlan.POST("", func(c *gin.Context) {
			r := &rest{}
			r.StorePlanHandler(c)
		})
		myPlan.GET("", func(c *gin.Context) {
			r := &rest{}
			r.FetchPlanHandler(c)
		})
		myPlan.PATCH("/:id_plan", func(c *gin.Context) {
			r := &rest{}
			r.EditPlanHandler(c)
		})
		myPlan.DELETE("/:id_plan", func(c *gin.Context) {
			r := &rest{}
			r.DeletePlanHandler(c)
		})
	}
}
