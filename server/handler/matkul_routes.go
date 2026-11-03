// Package handler contains mata kuliah-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterMatkulRoutes registers all mata kuliah routes under /api/matkul.
func RegisterMatkulRoutes(api *gin.RouterGroup) {
	matkul := api.Group("/matkul", middleware.ValidateToken("admin"))
	{
		matkul.POST("", func(c *gin.Context) {
			r := &rest{}
			r.StoreMatkulHandler(c)
		})
		matkul.PATCH("/:id", func(c *gin.Context) {
			r := &rest{}
			r.EditMatkulHandler(c)
		})
		matkul.GET("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DetailMatkulHandler(c)
		})
		matkul.DELETE("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DeleteMatkulHandler(c)
		})
		matkul.GET("", func(c *gin.Context) {
			r := &rest{}
			r.FetchMatkulHandler(c)
		})
	}
}
