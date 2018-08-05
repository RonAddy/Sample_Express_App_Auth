const authRouter = require('express').Router();
const authController = require('./authController');
const userView = require("../../controllers/userViewController");
const authView = require('./authViewController');

authRouter.route('/login')
  .get(authView.showLoginForm)
  .post(authController.login, userView.handleUserProfile )

 console.log(authView.loginError); 

authRouter.route('/register')
  .get(authView.showRegisterForm)
  .post(authController.register, userView.handleUserProfile, authView.registerError)


module.exports = authRouter