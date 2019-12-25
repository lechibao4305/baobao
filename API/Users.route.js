const express = require("express");
const users = express.Router();
// Load User model
const cors = require("cors");
const User = require("./User.model.js.js");
users.use(cors());
// const csrf = require("csurf");
// const csrfProtection = csrf();
// userRoutes.use(csrfProtection);
// userRoutes.get("/Login", function(req, res, next) {
//   res.render("Login", { csrfToken: req.csrfToken() });
// });
users.post("/register", (req, res) => {
  const today = new Date();
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  };
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + " registered!" });
            })
            .catch(err => {
              res.send("error: " + err);
            });
        });
      } else {
        res.json({
          error: "User already exists"
        });
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = users;
