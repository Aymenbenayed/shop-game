const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    /* required: true, */
  },
  pseudo: {
    type: String,
    /* required: true, */
  },
  email: { type: String,/*  required: true  */},
  password: { type: String },
  adress: { type: String },
  phone: String,
  role: {
    type: Number, 
    enum: [0,1],
    default: 0,
  },
  gender:{type:String},
  picture: {
    type: String,
    default:''
}});


module.exports = User = model("user", UserSchema);