const express =require("express")
const router =express.Router()
const loginController =require("../Controllers/adminControllers")


router.post("/signup",loginController.signUp)
router.post("/login",loginController.logIn)

module.exports =router

