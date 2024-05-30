const mongoose = require('mongoose')
const UserDB = require('./UserDB')
const ProductDB = require('./ProductDB')
const Schema = mongoose.Schema

const orderSchema = Schema({
    shipTo:[{
       address:{
        type:String,
        requied:true
       },
       etc:{
        type:String,
        required:true
       },
       zipCode:{
        type:Number,
        required:true
       },
       request:{
        type:String,
       }
    }],
    contact:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"prepare",
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
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
        price:{
            type: Number,
            required:true
        }
    }]
},{timestamps:true})
    
orderSchema.methods.toJSON = function () {
    const obj = this._doc
    delete obj.password
    delete obj.__v
    delete obj.updateAt
    delete obj.createAt
    return obj
}

const OrderDB = mongoose.model("OrderDB", orderSchema)

module.exports = OrderDB