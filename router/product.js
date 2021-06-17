const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
const multer = require("multer");
const {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const {validation,productValidation} = require('../middlewares/validators/product')



var storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, 'uploads')
    },
    filename: function(req, file, callback) {
      console.log(file)
      var ext= file.originalname.substr(file.originalname.lastIndexOf('.'))
      callback(null, file.fieldname + '-' + Date.now() + ext)
    }
  })
const upload = multer({ storage: storage }); 


 /* router.post("/create", upload.single('productPicture') ,createProduct)  */

/**
 * @desc : add product
 * @method : POST
 * @path : http://localhost:7000/api/product/create
 * @data : req.body
 * @acess : public
 */
router.post("/",createProduct);


/**
 * @desc : get all products
 * @method : GET
 * @path : http://localhost:7000/api/product
 * @data : no data
 * @acess : public
 */
router.get("/", getAllProducts);

/**
 * @desc : get 1products
 * @method : GET
 * @path : http://localhost:7000/api/product/:_id
 * @data : no data
 * @acess : public
 */
router.get(`/:_id`, getProduct);

/**
 * @desc : Update product
 * @path : 'http://localhost:8000/api/product/update/:id'
 * @method : PUT
 * @data : req.params , req.body
 */

router.put("/update/:id", updateProduct);

/**
 * @desc :Delete product
 * @path : 'http://localhost:8000/api/product/delete/:id'
 * @method : DELETE
 * @data : req.params
 */
router.delete("/delete/:id", deleteProduct);

module.exports = router;
