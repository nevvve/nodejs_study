const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
   sku: {
    type:String,
    requred:true,
    unique:true
   },
   name: {
    type:String,
    required:true
    },
   image:{
    type:String,
    required:true,
    },
   category:{
    type:Array,
    require:true
    },
   description:{
    type:String,
    required:true
    },
   price:{
    type:Number,
    requried:true
    },
   stock:{
    type:Object,
    required:true
    },
   status:{
    type:String,
    default:"active"
    },
    isDeleted:{
        type:Boolean,
        default:false
    },},{timestamps:true})
    
productSchema.methods.toJSON = function () {
    const obj = this._doc
    delete obj.password
    delete obj.__v
    delete obj.updateAt
    delete obj.createAt
    return obj
}

const ProductDB = mongoose.model("ProductDB", productSchema)

module.exports = ProductDB