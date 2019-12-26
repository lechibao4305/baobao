var express = require("express");
var billRoutes = express.Router();
// Require Business model in our routes module
var Bill = require("./Bill.model");

billRoutes.route("/checkout").post(function(req, res) {
  let bill = new Bill(req.body);
  bill
    .save()
    .then(item => {
      res.status(200).json({ item: "item in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});
