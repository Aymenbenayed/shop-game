
const Favorite = require("../models/Favorite");
const User = require("../models/User");

//Add New Favorite
exports.addFavorite = async (req, res) => {
    try {
        const newFavorite = new Favorite({
            favoriteUser : req.body.favoriteUser,
            productFavorite : req.body.productFavorite
        })
        await newFavorite.save();
        res.status(200).send({msg : "Add New Favorite Success",newFavorite})
    } catch (error) {
        console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the Favorite" }] });
  }
}

//Get All Favorite
exports.getFavorite = async (req, res) => {
    try {
        const allFavorite = await Favorite.find().populate('favoriteUser', 'name', User)
        res.status(200).send({msg : "Get All Favorite Success",favorite : allFavorite})
    } catch (error) {
        console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get Favorite" }] });
  }
}


//update Favorite
exports.updateFavorite = async( req, res )=>{
    try {
        const result = await Favorite.updateOne({_id : req.params.id}, {$set : req.body})
        if(!result.nModified){
            res.status(400).send({msg : "Favorite Already Updated !!!", error})
            return;
        }
        res.status(200).send({msg : 'Favorite is Updated ...', result})
    } catch (error) {
        res.status(400).send({msg : "Can Not Updated Favorite with this id !!!", error})
    }
}