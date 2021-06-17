const { validationResult, check } = require("express-validator");


exports.categoryValidation = () => [
check("name", "name is required").not().isEmpty() ,
/* check("categoryImage", "categoryImage is required").not().isEmpty() */ ];


exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    next();
};