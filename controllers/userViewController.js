module.exports = {
  handleUserProfile(req, res) {
    res.redirect('/users/profile');
  },

  handleLogout(req, res) {
    res.redirect('/');
  },
  
  showUserProfile(req, res) {
    console.log(req.session);
    res.render('users/profile', {
      user: req.session.user
    })
  }

}