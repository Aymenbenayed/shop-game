const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
/**
 * register
 *  */
exports.Signup = async (req, res) => {
  try {
    //   req.body
    const { name, pseudo, email, phone, password , adress  } = req.body;

    // check if the email is not found in the database
    const FoundUser = await User.findOne({ email });

    if (FoundUser) {
      res.status(400).send({
        errors: [{ msg: "user already exist email should be unique" }],
      });
      return;
    }
    let role='admin'
    const newUser = new User({ name, pseudo, email, phone, password , adress , role });

    // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newUser.password = hashedpassword;

    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    //then we save it in the database
    await newUser.save();
    res.status(200).send({ msg: "user saved succ", user: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the user" }] });
  }
};
/**
 * connect
 *  */
exports.SignIn = async (req, res) => {
  try {
    // get the req.body
    const { email, password , role="admin" } = req.body;
    // seach if the user exist
    const searchUser = await User.findOne({ email,role });
      if (!searchUser ) {
            res.status(400).send({ errors: [{ msg: "you are not an admin " }] });
            return;
          }
    const hashedpass = searchUser.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
        res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
    return;}
    // else create a key
    const token = jwt.sign(
      {
        id: searchUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    // send the details + a key
    res.status(200).send({ msg: "admin auth success", user: searchUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentAdmin" }] });
  }
};

exports.SignOut = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout successfully...!",
  });
};

/**
 * GET all
 *  */
exports.getAllAdmins = async (req, res) => {
  try {   let role='admin'
          const listUsers= await User.find({role})
          res.status(200).send({ msg: 'This is the list of admins ...', listUsers })
  } catch (error) {
          res.status(400).send({ msg:`Can not get all admins !! ${error}` })
  }
  }
