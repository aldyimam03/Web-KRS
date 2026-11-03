// Package handler contains jam kelas-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterJamKelasRoutes registers all jam kelas routes under /api/jam-kelas.
func RegisterJamKelasRoutes(api *gin.RouterGroup) {
	jamKelas := api.Group("/jam-kelas", middleware.ValidateToken("admin"))
	{
		jamKelas.POST("", func(c *gin.Context) {
			r := &rest{}
			r.StoreJamKelasHandler(c)
		})
		jamKelas.GET("", func(c *gin.Context) {
			r := &rest{}
			r.FetchJamKelasHandler(c)
		})
		jamKelas.GET("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DetailJamKelasHandler(c)
		})
		jamKelas.PATCH("/:id", func(c *gin.Context) {
			r := &rest{}
			r.EditJamKelasHandler(c)
		})
		jamKelas.DELETE("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DeleteJamKelasHandler(c)
		})
	}
}
