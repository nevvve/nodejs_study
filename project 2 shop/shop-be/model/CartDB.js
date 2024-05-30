const mongoose = require('mongoose')
const UserDB = require('./UserDB')
const ProductDB = require('./ProductDB')
const Schema = mongoose.Schema

const cartSchema = Schema({
    userId:{
        type:mongoose.ObjectId, ref:UserDB
    },
    items:[{
        productId:{
            type:mongoose.ObjectId, ref:ProductDB
        },
        size:{
            type:String,
            required:true
        },
        qty:{
          type: Number,
          default:1,
          required:true  
        },
    }]
},{timestamps:true})
    
cartSchema.methods.toJSON = function () {
    const obj = this._doc
    delete obj.password
    delete obj.__v
    delete obj.updateAt
    delete obj.createAt
    return obj
}

const CartDB = mongoose.model("CartDB", cartSchema)

module.exports = CartDB