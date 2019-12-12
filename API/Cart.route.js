var express = require("express");
var cartRoutes = express.Router();
// Require Business model in our routes module
var Item = require("./Item.model");
var Cart = require("./Cart.model");

cartRoutes.get("/add-to-cart/:id", function(req, res, next) {
  let id = req.params.id;
  console.log(id);
  let cart = new Cart(req.session.cart ? req.session.cart : {});
  Item.findById(id, function(err, item) {
    console.log(item);
    console.log(item.id);
    if (err) {
      return res.redirect("/ListProduct");
    }
    cart.add(item, item.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect("/ListProduct");
  });
});
module.exports = cartRoutes;
