const UserDB = require("../model/UserDB");
const bcrypt = require("bcryptjs")
const saltRound = 10

const userController = {};

userController.createUser = async (req,res) => {
    try {
        const {email,name,password} = req.body
        const user = await UserDB.findOne({email:email})
        if(user){
            throw new Error("이미 가입이 된 유저 입니다")
        }
        const salt = bcrypt.genSaltSync(saltRound)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = new UserDB({email,name,password:hash})
        await newUser.save()
        res.status(200).json({ status: "success" })
    } catch (error) {
        res.status(400).json({ status: "fail", message: error.message })
    }
}

userController.loginUser = async (req,res) => {
    try {
        const { email, password } = req.body
        const user = await UserDB.findOne({email:email})
        if(user){
            const isMatch = bcrypt.compareSync( password, user.password )
            if(isMatch){
                const token = user.generateToken();
                return res.status(200).json({ status: "success", user, token 
                })
            }
        }
        throw new Error ("아이디 혹은 비밀번호가 일치하지 않습니다")
    } catch (error) {
        res.status(400).json({ status: "fail",message: error.message })
    }
}

userController.getUser = async(req,res) => {
    try {
        const {userId} = req
        const user = await UserDB.findById(userId)
        if(!user){
            throw new Error("can not find user")
        }
        res.status(200).json({status:"success", user})
    } catch (error) {
        res.status(400).json({status:"fail",message: error.message})
    }
}



module.exports = userController;