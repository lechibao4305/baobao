const express = require('express');
const router = express.Router();
// Load User model
const User = require('./User.model.js');

// Login Page
//router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page

// Register
router.post('/register', (req, res) => {
  let users = new User(req.body);
  users.save()
    .then(users => {
      res.status(200).json({ 'users': 'user in added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });

});

// Login
router.post('/login', async (req, res, next) => {
  var email = req.body.email;
  var pass = req.body.password;
  if (email == null || pass == null) {
    res.send("vui long nhap email ,pass");
    return;
  }
  const acc = await User.findOne({ email: email });
  if (acc != null) {
    if (acc.password == pass) {
      res.json({ stt: "Loging", tk: acc });
    }
    else {
      res.send("Password wrong")
    }
  }
  else {
    res.send("account not found")
  }

})

// res.send({asd:req.body.user})

// // Logout
// router.get('/logout', (req, res) => {
//   req.logout();
//   req.flash('success_msg', 'You are logged out');
//   res.redirect('/users/login');
// });

module.exports = router;