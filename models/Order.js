const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const orderSchema = new Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
        // required : true
    },
    product : {
        type : Array,
    },

    sum: {
        type: Number,
        default:0
    },
        qty: {
        type: Number,
        default:1
    }
},{ timestamps: true })


module.exports = Order = model("order", orderSchema);