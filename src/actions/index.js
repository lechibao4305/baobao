import * as types from "../constants/ActionType";
export const actAddToCart = (item, quantity) => {
  return {
    type: types.actAddToCart,
    item,
    quantity
  };
};
