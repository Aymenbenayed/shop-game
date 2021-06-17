const mongoose = require("mongoose");
const { Schema, model } = mongoose;
//const SousCatSchema = require("./SousCat")

const CategorySchema = new Schema({
name: {
    type: String,
    required: true,
    unique:true
},slug: {
    type:String,
    required:true,
    unique:true
},
categoryImage: { 
    type: String 
},
parentId:{
    type:String 
},
},{ timestamps: true });

module.exports = Category = model('Category', CategorySchema);