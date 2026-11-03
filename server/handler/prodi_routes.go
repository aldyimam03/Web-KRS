// Package handler contains program studi-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterProdiRoutes registers all program studi routes under /api/program-studi.
func RegisterProdiRoutes(api *gin.RouterGroup) {
	prodi := api.Group("/program-studi", middleware.ValidateToken("admin"))
	{
		prodi.POST("", func(c *gin.Context) {
			r := &rest{}
			r.StoreProdiHandler(c)
		})
		prodi.PATCH("/:id", func(c *gin.Context) {
			r := &rest{}
			r.EditProdiHandler(c)
		})
		prodi.GET("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DetailProdiHandler(c)
		})
		prodi.DELETE("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DeleteProdiHandler(c)
		})
		prodi.GET("", func(c *gin.Context) {
			r := &rest{}
			r.FetchProdiHandler(c)
		})
	}
}
