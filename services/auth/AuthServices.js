
// //bcrypt will be used to hash the plain text password (register phase) and compare password_digest (login phase)
// const bcrypt = require('bcrypt');

// //import User model functions, allowing us to crete User database and retrieve user from database
// const UserDb = require("../../models/User");

// function login(req, res, next) {
//     let user;
//     const loginAttempt = {
//         uname: req.body.uname,
//         email: req.body.email,
//         password: req.body.password
//       }
//   UserDb.findUser(loginAttempt.uname)
//     .then(userInfo => {
//       user = userInfo
//       return bcrypt.compareSync(loginAttempt.password, userInfo.password_digest)
//     })
//     .then(isValidPass => {
//         if (!isValidPass) {
//             throw {
//             message: 'Wrong log-in information'
//             }
//         }
//         // console.log(user)
//         req.session.user = user;
//         next();
//     })
//     .catch(err => {
//       next(err);
//     })
// }

// function logout(req, res, next) {
//   // destroy session
//   // next will be called with either an error or undefined.
//   // (negative or positive path)
//   req.session.destroy(err => next(err));
// }

// function register(req, res, next) {
//   const salt = parseInt(process.env.SALT)
//   const hash = bcrypt.hashSync(req.body.password, salt)
//   const user = {
//     uname: req.body.uname,
//     email: req.body.email,
//     password_digest: hash
//   }

//   UserDb.createUser(user)
//     .then(user => {
//       if (!user) {
//         throw {
//           message: 'Incorrect password'
//         }
//       }

//       req.session.user = user;
//       next();
//     })
//     .catch(err => {
//       next(err);
//     })
// }



// module.exports = {
//   login,
//   logout,
//   register,
//   loginRequired: [
//     /* this is either going to resolve to next(false) or next(null) */
//     (req, res, next) => next(!req.session.user || null),
//     (err, req, res, next) => res.sendStatus(401),
//   ]
// }
