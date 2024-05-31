const express = require("express")
const userController = require("../controllers/user.controller")
const authController = require("../controllers/auth.controller")
const router = express.Router()



//회원가입
router.post("/",userController.createUser)
router.get("/me",authController.authenticate,userController.getUser)//토큰 검증, 토큰으로 user 찾아서 리턴


module.exports = router