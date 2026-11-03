// Package handler contains fakultas-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterFakultasRoutes registers all fakultas routes under /api/fakultas.
func RegisterFakultasRoutes(api *gin.RouterGroup) {
	fakultas := api.Group("/fakultas")
	{
		fakultasAdminGroup := fakultas.Group("", middleware.ValidateToken("admin"))
		fakultasUserGroup := fakultas.Group("", middleware.ValidateToken("user"))
		fakultasAdminGroup.POST("", func(c *gin.Context) {
			r := &rest{}
			r.StoreFakultasHandler(c)
		})
		fakultasAdminGroup.PATCH("/:id", func(c *gin.Context) {
			r := &rest{}
			r.EditFakultasHandler(c)
		})
		fakultasAdminGroup.GET("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DetailFakultasHandler(c)
		})
		fakultasUserGroup.GET("/:id/jam-kelas", func(c *gin.Context) {
			r := &rest{}
			r.DetailJamKelasFakultasHandler(c)
		})
		fakultasAdminGroup.DELETE("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DeleteFakultasHandler(c)
		})
		fakultasAdminGroup.GET("", func(c *gin.Context) {
			r := &rest{}
			r.FetchFakultasHandler(c)
		})
	}
}
