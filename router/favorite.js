//require express
const express = require("express");
const { getFavorite, addFavorite, updateFavorite } = require("../controllers/favorite");

//reqquire router
const router = express.Router();

/**
 * @desc : Route Get All Favorites
 * @path : 'http://localhost:7000/api/favorite/'
 * @method : GET
 * @data : No Data
 */
router.get('/', getFavorite)

/**
 * @desc : Route Add New Favorite
 * @path : 'http://localhost:7000/api/favorite/add'
 * @method : POST
 * @data : req.body
 */
 router.post('/add',addFavorite)

 /**
 * @desc : Route Update Favorite
 * @path : 'http://localhost:7000/api/favorite/update'
 * @method : Put
 * @data : req.body , req.params
 */
  router.put('/update/:id',updateFavorite)



 module.exports = router;