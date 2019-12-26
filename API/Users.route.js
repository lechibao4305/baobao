var express = require("express");
var userRoutes = express.Router();
// Require Business model in our routes module
var User = require("./User.model");

userRoutes.route("/register").post(function(req, res) {
  let user = new User(req.body);
  user
    .save()
    .then(users => {
      res.status(200).json({ users: "user in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
userRoutes.post("/login", async (req, res, next) => {
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
    } else {
      res.send("Password wrong");
    }
  } else {
    res.send("account not found");
  }
});
module.exports = userRoutes;
