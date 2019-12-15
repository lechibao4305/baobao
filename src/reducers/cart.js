import * as types from "../constants/ActionType";
var data = JSON.parse(localStorage.getItem("CART"));
// data ? data : [];
var initialState = [
  {
    item: {
      id: 1,
      ten: "abc",
      gia: 100,
      hang: "abc",
      mota: "abc",
      trangthai: "abc"
    },
    quantity: 5
  },
  {
    item: {
      id: 3,
      ten: "abc",
      gia: 100,
      hang: "abc",
      mota: "abc",
      trangthai: "abc"
    },
    quantity: 3
  }
];
const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default:
      return [...state];
  }
};
export default cart;
