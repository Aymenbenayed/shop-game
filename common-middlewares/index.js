const User =require('../models/User')

exports.userMiddleware = (req, res, next) => {
    if (User.role !== 0) {
        return res.status(400).send({ msg: `user access denied `});
    }
    next();
};


exports.adminMiddleware = (req, res, next) => {
  if (User.role !==1) {
      return res.status(401).send({ msg:'admin access denied' });
  }
  next();
};

