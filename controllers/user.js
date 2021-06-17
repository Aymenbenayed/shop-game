const User = require("../models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");


const passport = require("passport");
const GooleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose')



passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
})















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
    let role=0
    const newUser = new User({ name, pseudo, email, phone, password , adress , role });

    // hash the password
    const hashedpassword = await bcrypt.hashSync(password, salt);
    newUser.password = await  hashedpassword;

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
    const { email, password } = req.body;
    // seach if the user exist
    const searchUser = await User.findOne({ email  });
    
    // send an error if he didnt exist
    if (!searchUser) {
      res.status(400).send({ errors: [{ msg: "you are not user" }] });
      return;
    }  
    
    // check if the send it password is equal to the current Password
    const hashedpass = searchUser.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Wrong Password" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", user: searchUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};

/**
 * change info in account
 *  */
exports.editUser = async (req, res) => {
  // const { name, email, phone } = req.body
  const { _id } = req.params
  try {
  /*   // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newUser.password = hashedpassword; */

      const userToEdit = await User.updateOne({ _id }, { $set: { ...req.body } })
    // console.log(userToEdit)
      if (!userToEdit.nModified) {
      res.status(400).send({ msg: 'User already updated ..', userToEdit })
      return
      }
      res.status(200).send({ msg: 'User updated ..', userToEdit })
  } catch (error) {
      res.status(400).send({ msg: 'Can not edit user with this id !!', error })
  }
}


/**
 * GET all
 *  */
exports.getAllUsers = async (req, res) => {
try {  
        const listUsers = await User.find()
        res.status(200).send({ msg: 'This is the list of users ...', listUsers })
} catch (error) {
        res.status(400).send({ msg: 'Can not get all users !!', error })
}
}


/**
* GET one contact
*  */
exports.getUser = async (req, res) => {
try {
        const { _id } = req.params
        const userToFind = await User.findOne({ _id })
        console.log(userToFind)
        res.status(200).send({ msg: 'I find the user ...', userToFind })
} catch (error) {
        res.status(400).send({ msg: 'Can not get user with this id !!', error })
    }
}


/**
* delete user
*  */

//Delete Product
exports.deleteUser = async (req, res) =>{
try {
    const oldUser = await User.findById({_id : req.params.id});
    await User.deleteOne({_id : req.params.id})
    res.status(200).send({msg : 'User is Deleted ...' , oldUser})
} catch (error) {
    res.status(400).send({msg : "Can Not Deleted Product with this id !!!", error})
}}