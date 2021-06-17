const express = require("express");
const router = express.Router();
const { Signup, SignIn ,SignOut,getAllAdmins } = require("../../controllers/admin/admin");
const { registerValidation , signinValidation , validation } = require("../../middlewares/validators/user");
const isAuth = require("../../middlewares/auth_jwt");


router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAuth, (req, res) => {
    res.send(req.user)  ;
});
router.post('/admin/signout', SignOut)


/**
 * @desc : get all admins
 * @method : GET
 * @path : http://localhost:7000/api/admin
 * @data : no data
 * @acess : public
 */
router.get('/', getAllAdmins)

module.exports = router;