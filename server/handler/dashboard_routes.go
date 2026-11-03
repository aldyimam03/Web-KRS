// Package handler contains dashboard-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterDashboardRoutes registers all dashboard routes.
func RegisterDashboardRoutes(api *gin.RouterGroup) {
	dashboard := api.Group("/dashboard", middleware.ValidateToken("user"))
	{
		dashboard.GET("", func(c *gin.Context) {
			r := &rest{}
			r.DashboardUserHandler(c)
		})
	}

	dashboardAdmin := api.Group("/admin/dashboard", middleware.ValidateToken("admin"))
	{
		dashboardAdmin.GET("", func(c *gin.Context) {
			r := &rest{}
			r.DashboardAdminHandler(c)
		})
	}
}
