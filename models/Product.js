const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, trim: true },
    marque: { 
      type: String,
      requried: false,
    },
    productImage: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: { 
      type: Number
     },
    rating: { type: Number, default: 0 },
    
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    reviews:{type: String},
  },
  { timestamps: true }
);

module.exports = Product = mongoose.model("Product", ProductSchema);

