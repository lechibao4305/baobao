var express = require("express");
var router = express.Router();
// Require Business model in our routes module
var Item = require("./Item.model");
const Cart = require("./Cart.model");

router.get("/addCart/:id", function(req, res, next) {
  var id = req.params.id;
  console.log(id);
  var cart = new Cart(req.session.cart ? req.session.cart : {});
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

module.exports = router;
