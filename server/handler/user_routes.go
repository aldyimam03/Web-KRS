// Package handler contains user-related route registration.
package handler

import (
	"github.com/gin-gonic/gin"
	"web-krs/middleware"
)

// RegisterUserRoutes registers all user routes under /api/user.
func RegisterUserRoutes(api *gin.RouterGroup) {
	user := api.Group("/user")
	{
		user.POST("/register", func(c *gin.Context) {
			r := &rest{}
			r.CreateUser(c)
		})
		user.POST("/login", func(c *gin.Context) {
			r := &rest{}
			r.UserLogin(c)
		})
		user.POST("/matkul", middleware.ValidateToken("user"), func(c *gin.Context) {
			r := &rest{}
			r.HasMatkul(c)
		})
		user.GET("/matkul", middleware.ValidateToken("user"), func(c *gin.Context) {
			r := &rest{}
			r.MatkulUser(c)
		})
		user.PATCH("/forgot", func(c *gin.Context) {
			r := &rest{}
			r.ForgotPassword(c)
		})
		user.PATCH("/profile", middleware.ValidateToken("user"), func(c *gin.Context) {
			r := &rest{}
			r.UpdateProfile(c)
		})
		user.POST("/register/admin", middleware.ValidateToken("admin"), func(c *gin.Context) {
			r := &rest{}
			r.CreateAdmin(c)
		})
		user.GET("", middleware.ValidateToken("admin"), func(c *gin.Context) {
			r := &rest{}
			r.ReadAll(c)
		})
		user.GET("/:id", middleware.ValidateToken("admin"), func(c *gin.Context) {
			r := &rest{}
			r.ReadByID(c)
		})
		user.PATCH("/:id", middleware.ValidateToken("admin"), func(c *gin.Context) {
			r := &rest{}
			r.Update(c)
		})
		user.DELETE("/:id", middleware.ValidateToken("admin"), func(c *gin.Context) {
			r := &rest{}
			r.Delete(c)
		})
	}
}
