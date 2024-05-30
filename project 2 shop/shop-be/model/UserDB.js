const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    email: { 
        type:String,
        required:true,
        unique:true
    },
    name: {
        type:String,
        require:true,
    },
    level: {
        type:String,
        default:"customer" // admin or customer
    }}
    ,{timestamps:true})
userSchema.methods.toJSON = function () {
    const obj = this._doc
    delete obj.password
    delete obj.__v
    delete obj.updateAt
    delete obj.createAt
    return obj
}

const UserDB = mongoose.model("UserDB", userSchema)

module.exports = UserDB