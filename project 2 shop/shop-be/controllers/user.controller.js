const userController = {}
const UserDB = require("../models/UserDB")
const bcrypt = require("bcryptjs")
const saltRound = 10


userController.createUser= async (req,res) =>{
    try {
        let { email,password,name,level } = req.body
        const user = await UserDB.findOne( {email} )
        if(user){
            throw new Error("이미 존재하는 회원 혹은 이메일 입니다")
        }
        const salt = await bcrypt.genSaltSync(saltRound)
        password = await bcrypt.hash(password,salt)
        const newUser = new UserDB({ 
            email,
            password,
            name,
            level: level ? level:'customer',
        })
        await newUser.save()
        res.status(200).json({ status: "success" })
    } catch (error) {
        res.status(400).json({ status: "fail", error: error.message });       
    }
};

userController.getUser = async(req,res)=>{
    try {
        const { userId } = req;
        const user = await UserDB.findById(userId)
        if(user){
            res.status(200).json({status:"success",user})
        }
        throw new Error("invalid token")
    } catch (error) {
        res.status(400).json({ status: "fail", error: error.message });
    }
}

module.exports = userController