const express = require("express");
const { getOrder, addOrder, updateOrder, deleteProductOrder } = require("../controllers/order");
const router = express.Router();




router.get('/', getOrder)

router.post('/addOrder',addOrder)

router.put('/update/:id',updateOrder)

router.delete('/delete/:id',deleteProductOrder)

module.exports = router;