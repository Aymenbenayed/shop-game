const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Schema;

const favoriteSchema = new Schema({
    favoriteUser:{
        type : ObjectId,
        ref : "User",
        required : true
    },
    productFavorite : {
        type : Array ,
    }
})

module.exports = Favorite = model("favorite", favoriteSchema);