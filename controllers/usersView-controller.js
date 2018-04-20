function showLoginForm(req, res) {
    console.log('Here is Login Form!');
    res.render('auth/login');
  };

function showRegisterForm(req, res) {
    res.render('auth/register');
  };

function  handleUserProfile(req, res) {
    res.redirect('/users/profile');
};

function handleLogout(req, res) {
    res.redirect('/');
};

module.exports = {
    showLoginForm,
    showRegisterForm,
    handleUserProfile,
    handleLogout
}