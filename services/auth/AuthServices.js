import {
  SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION
} from 'constants';

//bcrypt will be used to hash the plain text password (register phase) and compare password_digest (login phase)
const bcrypt = require('bcrypt');

//import User model functions, allowing us to crete User database and retrieve user from database
const UserDb = require("../../models/User");

function login (req, res, next) {

  const {uname, password} = req.body
  UserDb.findUserById(uname)
    .then(user => {
      bcrypt.compareSync(password, user.password_digest)
    })
    .then(isValidPass => {
      if (!isValidPass) {
        throw {
          message: 'Incorrect password'
        }
      }

      req.session.user = user;
    })
    .catch(err => {
      next(err);
    })
}

function logout (req, res, next){
    // destroy session
    // next will be called with either an error or undefined.
    // (negative or positive path)
    req.session.destroy(err => next(err));
}



module.exports = {
    login,
    logout
}