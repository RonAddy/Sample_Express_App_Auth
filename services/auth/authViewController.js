module.exports = {
    /* Error handler */
loginError(req, res, next){
    if( !req.session.user){
        req.flash('error', 'Incorrect Login Information');
        res.redirect('/auth/login');
    }
    next();
  },

  registerError(req, res, next){
    if( !req.session.user){
        req.flash('error', 'Unable to register :(');
        res.redirect('/auth/register');
    }
    next();
  },

  showLoginForm(req, res) {
    res.render('auth/login', {
      messages: req.flash('error')
    });
  },

  showRegisterForm(req, res) {
    res.render('auth/register', {
      messages: req.flash('error')
    });
  },

  redirectToLogin(req,res ){
    res.redirect('/auth/login')
  }

}