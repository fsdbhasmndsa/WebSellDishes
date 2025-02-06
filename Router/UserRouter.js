const express = require('express')
const router = express.Router();
const UserController = require("../Controller/UserController")


router.post("/login",UserController.Login)
router.post("/register",UserController.Register)
router.get("/forgotpassword",UserController.Fogotpassword)
router.get("/changepassword",UserController.Changepassword)

module.exports = router