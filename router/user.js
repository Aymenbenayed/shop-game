const express = require("express");
const passport = require('passport')

const router = express.Router();
const { Signup, SignIn ,getAllUsers,getUser,deleteUser,editUser } = require("../controllers/user");
const { registerValidation , signinValidation , validation } = require("../middlewares/validators/user");
const isAuth= require("../middlewares/auth_jwt");
/* const {adminMiddleware,userMiddleware} =require ('../common-middlewares/index') */



router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation ,SignIn);
router.get("/current", isAuth ,(req, res) =>{res.send(req.user);});



/**
 * @desc : get all users
 * @method : GET
 * @path : http://localhost:7000/api/user
 * @data : no data
 * @acess : public
 */
router.get('/', getAllUsers)


/**
  * @desc : get one user
  * @method : GET
  * @path : http://localhost:7000/api/user/:_id
  * @data : req.params
  * @acess : public
  */
router.get('/:_id', getUser)


/**
  * @desc : delete user
  * @method : DELETE
  * @path : http://localhost:7000/api/user/delete/:id
  * @data : req.params
  * @acess : public
  */

router.delete('/delete/:id', deleteUser)



/**
 * @desc : edit user
 * @method : PUT
 * @path : http://localhost:7000/api/users/:_id
 * @data : req.params & req.body
 * @acess : public
 */
router.put('/:_id', editUser)

module.exports = router;