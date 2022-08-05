const express =require("express")
const router =express.Router()
const loginController =require("../Controllers/adminControllers")


router.post("/login",loginController.loginPost)

module.exports =router

