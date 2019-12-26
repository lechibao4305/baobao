import * as types from "../constants/ActionType";

export const actAddToCart = (item, quantity) => {
  return {
    type: types.ADD_TO_CART,
    item,
    quantity
  };
};