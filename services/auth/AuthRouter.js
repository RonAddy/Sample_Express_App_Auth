const authRouter = require('express').Router();
const AuthServices = require('../auth/AuthServices');
const usersViewController  = require("../../controllers/usersView-controller");


authRouter.get('/login', usersViewController.showLoginForm)
authRouter.post('/login', AuthServices.login, usersViewController.handleUserProfile)

authRouter.get('/register', usersViewController.showRegisterForm)
authRouter.post('/register',AuthServices.register, usersViewController.handleUserProfile)

/* Error handler */
authRouter.use((err, req, res, next) => {
    console.error(err);
    res.json({ error: err });
  });

  module.exports = authRouter