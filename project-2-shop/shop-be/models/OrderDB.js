const mongoose = require("mongoose");
const UserDB = require("./Userdb.js");
const ProductDB = require("./ProductDB");
const Schema = mongoose.Schema;
const orderSchema = Schema(
  {
    userId:{
        type:mongoose.ObjectId,
        ref: UserDB
    },
    status:{
        type: String,
        default:"preparing"
    },
    totalPrice:{
        type: Number,
        required:true,
        default:0
    },
    shipTo:{
        type:Object,
        required:true
    },
    contact:{
        type:Object,
        required:true
    },
    orderNum:{
        type:String
    },
    items:[
      {
        productId:{
            type:mongoose.ObjectId,
            ref: ProductDB
        },
        price:{
            type: Number,
            required:true
        },
        qty:{
            type:Number,
            required:true,
            default:1
        },
        size:{
            type:String,
            required:true
        },
      },
    ],
},{ timestamps: true }
);

orderSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.__v;
  delete obj.updatedAt;
  return obj;
};

const OrderDB = mongoose.model("OrderDB", orderSchema);
module.exports = OrderDB;