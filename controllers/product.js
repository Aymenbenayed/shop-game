const Product =require('../models/Product')
const Category = require("../models/Category");

const shortid = require('shortid')
const slugify = require('slugify')


exports.createProduct=(req,res)=>{

    
    //res.status(200).json({file: req.file , body: req.body})

    const {  name , marque , productImage, description , price , countInStock , category  } = req.body 
        const product = new Product({
        name ,
        //slug : slugify(name),
        marque,
        productImage, 
        description,
        price,
        /* offre, */
        countInStock,
        category,
       
        })
        product.save(((error, product)=>{
            if(error) return res.status(400).json({error});
            if(product){
                res.status(201).json({ product })
            }
        }))
}       

/** 
 * GET all
 *  */
exports.getAllProducts = async (req, res) => {
    try {
        const listProducts = await Product.find().populate('category','name id',Category);
        res.status(200).send({ msg: 'This is the list of products ...', listProducts })
    } catch (error) {
        res.status(400).send({ msg: `Can not get products!! ${error}`})
    }
    }

exports.getProduct = async (req, res) => {
    try {
            const { _id } = req.params
            const productToFind = await Product.findOne({ _id }).populate('category','name id',Category);
            res.status(200).send({ msg: 'I find the product...', productToFind })
    } catch (error) {
            res.status(400).send({ msg: 'Can not get product with this id !!', error })
        }
}

exports.updateProduct = async( req, res )=>{
    try {
        const result = await Product.updateOne({_id : req.params.id}, {$set : req.body})
        if(!result.nModified){
            res.status(400).send({msg : "Product Already Updated !!!", error})
            return;
        }
        res.status(200).send({msg : 'Product is Updated ...', result})
    } catch (error) {
        res.status(400).send({msg : "Can Not Updated Product with this id !!!", error})
    }
}


//Delete Product
exports.deleteProduct = async (req, res) =>{
try {
    const oldProduct = await Product.findById({_id : req.params.id});
    await Product.deleteOne({_id : req.params.id})
    res.status(200).send({msg : 'Product is Deleted ...'})
} catch (error) {
    res.status(400).send({msg : "Can Not Deleted Product with this id !!!", error})
}}