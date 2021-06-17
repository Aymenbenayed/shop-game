const { validationResult, check } = require("express-validator");


exports.productValidation = () => [
check("name", "Name of Product is required").not().isEmpty() ,
check("productImage", "productImage is required").not().isEmpty() ,  
check("category", "category of Product is required").not().isEmpty(),
check("price", "price of Product is required").not().isEmpty(),
check("description ", "description of Product  is required").not().isEmpty(),
check("countInStock", "countInStock of Product is required").not().isEmpty(),
check("marque", "marque  of Product is required").not().isEmpty()
];



exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });}
    next();
};