module.exports = function Cart(cart) {
  this.items = cart.items || {};
  this.totalQty = cart.totalQty || 0;
  this.totalPrice = cart.totalPrice || 0;
  this.add = function(item, id) {
    console.log(item);
    console.log(id);
    var storedItem = this.items[id];
    console.log(storedItem);
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
  };
  this.generateArray = function() {
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
