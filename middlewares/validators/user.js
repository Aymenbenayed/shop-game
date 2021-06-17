const { check,validationResult  } = require("express-validator");

exports.registerValidation = () => [
  check("name", " Fullname is required").not().isEmpty(),
  check("pseudo", "pseudo is required").not().isEmpty(),
  check("email", "enter a valid email").isEmail(),
  check("password", "Password must be at least 6 character long").isLength({ min: 6 }),
  check("phone","enter a valid phone").not().isEmpty(),
  /* check("adresse","enter a valid adresse").not().isEmpty(), */
];

exports.signinValidation = () => [
  check("email", "enter a valid email").isEmail().withMessage('Valid Email is required'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long')
];

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};