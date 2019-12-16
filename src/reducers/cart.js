import * as types from "../constants/ActionType";
var data = JSON.parse(localStorage.getItem("CART"));
// data ? data : [];
var initialState = data ? data : [];
const cart = (state = initialState, action) => {
  var { item, quantity } = action;
  var index = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      index = findItemInCart(state, item);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          item,
          quantity
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
var findItemInCart = (cart, item) => {
  var index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].item.id === item.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
export default cart;
