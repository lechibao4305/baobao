import { combineReducers } from "redux";
import items from "./items";
import cart from "./cart";
const appReducers = combineReducers({
  items,
  cart
});
export default appReducers;
