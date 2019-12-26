import * as types from "../constants/ActionType";
import swal from "sweetalert";

var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
  var { item, quantity } = action;
  var index = -1; //Khong thay
  //State :gio hang
  switch (action.type) {
    case types.ADD_TO_CART:
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
      swal("Thêm vào giỏ hàng thành công", "", "success");
      return [...state];

    case types.DELETE_ITEM_IN_CART:
      index = findItemInCart(state, item);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      swal("Xóa sản phẩm trong giỏ hàng thành công", "", "success");
      return [...state];
    case types.UPDATE_ITEM_IN_CART:
      index = findItemInCart(state, item);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));

      return [...state];
    default:
      return [...state];
  }
};

const findItemInCart = (cart, item) => {
  var index = -1;
  // console.log(cart.length);
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].item._id == item._id) {
      index = i;
      // console.log(cart[i].item._id);
      break;
    }
  }
  return index;
};
export default cart;
