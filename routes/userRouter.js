const userRouter = require('express').Router();
const authController = require('../services/auth/authController');
const userView = require('../controllers/userViewController');
const authView = require('../services/auth/authViewController');


userRouter.route('/profile')
.get(authController.loginRequired, userView.showUserProfile)
.delete(authController.logout, authView.redirectToLogin)


  module.exports = userRouter