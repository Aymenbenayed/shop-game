const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
  try {
        
    // test token
    const token = req.headers["authorization"];
    // if the token is undefined =>
    if (!token) {
      return res.status(400).send({ errors: [{ msg: "Unauthorized" }] });
    }

    /* if(!User.role==="admin")
    { return res.status(400).send({errors : [{msg : 'you are  normal user '}]})} */
    // get the id from the token
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);

    // search the user
    const user = await User.findById(decoded.id).select("-password");

    // send not authorisation IF NOT USER
    if (!user) {
      return res.status(400).send({ errors: [{ msg: "Unauthorized" }] });
    }

    // if user exist
    req.user = user ;

    next();
  } catch (error) {
    return res.status(500).send({ error : `unauthorized ${error}`});
  }
};

module.exports = isAuth


