import * as types from "../constants/ActionType";

export const actAddToCart = (item, quantity) => {
  return {
    type: types.ADD_TO_CART,
    item,
    quantity
  };
};
export const actDeleteItemInCart = item => {
  return { type: types.DELETE_ITEM_IN_CART, item };
};
//Can tham so quantity
export const actUpdateItemInCart = (item, quantity) => {
  return {
    type: types.UPDATE_ITEM_IN_CART,
    item,
    quantity
  };
};
