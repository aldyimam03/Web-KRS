// Package handler contains kelas-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterKelasRoutes registers all kelas routes under /api/kelas.
func RegisterKelasRoutes(api *gin.RouterGroup) {
	kelas := api.Group("/kelas", middleware.ValidateToken("admin"))
	{
		kelas.POST("", func(c *gin.Context) {
			r := &rest{}
			r.StoreKelasHandler(c)
		})
		kelas.PATCH("/:id_kelas/jadwal/:id_jadwal", func(c *gin.Context) {
			r := &rest{}
			r.EditKelasHandler(c)
		})
		kelas.GET("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DetailKelasHandler(c)
		})
		kelas.GET("/:id/jadwal/:id_jadwal", func(c *gin.Context) {
			r := &rest{}
			r.DetailJadwalKelasHandler(c)
		})
		kelas.DELETE("/:id", func(c *gin.Context) {
			r := &rest{}
			r.DeleteKelasHandler(c)
		})
		kelas.GET("", func(c *gin.Context) {
			r := &rest{}
			r.FetchKelasHandler(c)
		})
	}
}
