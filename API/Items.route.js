var express = require("express");
var itemRoutes = express.Router();
// Require Business model in our routes module
var Item = require("./Item.model");

// Defined store route
itemRoutes.route("/add").post(function(req, res) {
  let item = new Item(req.body);
  item
    .save()
    .then(item => {
      res.status(200).json({ item: "item in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
itemRoutes.route("/").get(function(req, res) {
  Item.find(function(err, items) {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
  });
});

// Defined edit route
itemRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Item.findById(id, function(err, business) {
    res.json(business);
  });
});

//  Defined update route
itemRoutes.route("/update/:id").post(function(req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item) res.status(404).send("data is not found");
    else {
      console.log(item);
      item.ten = req.body.ten;
      item.hinh = req.body.hinh;
      item.gia = req.body.gia;
      item.trangthai = req.body.trangthai;
      item.mota = req.body.mota;
      item.hang = req.body.hang;

      item
        .save()
        .then(business => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
itemRoutes.route("/delete/:id").get(function(req, res) {
  Item.findByIdAndRemove({ _id: req.params.id }, function(err, item) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = itemRoutes;
