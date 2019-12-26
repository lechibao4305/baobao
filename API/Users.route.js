var express = require("express");
var userRoutes = express.Router();
// Require Business model in our routes module
var User = require("./User.model");

userRoutes.route("/register").post(function(req, res) {
  let user = new Item(req.body);
  user
    .save()
    .then(user => {
      res.status(200).json({ user: "user register successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
userRoutes.route("/login").get(function(req, res) {
  let id = req.params.id;
  User.findById(id, function(err, business) {
    res.json(business);
  });
});
module.exports = userRoutes;
