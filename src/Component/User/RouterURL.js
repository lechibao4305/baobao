import React from "react";
import { Switch, Route } from "react-router-dom";
import Error from "../ErrorPage/Error";
import HomePage from "./HomePage";
import Admin from "../Admin/Admin";
import Login from "../Login/Login";
import AddProduct from "../Admin/AddProduct";
import ListProduct from "../Admin/ManagerProduct/ListProduct";
import DetailProduct from "../Admin/ManagerProduct/DetailProduct";
import Cart from "../Admin/ManagerProduct/Cart";
import Register from "../Login/Register";
import ListProductContainer from "../../containers/ListProductContainer";
import CartContainer from "../../containers/CartContainer.js";
function RouterURL(params) {
  return (
    <Switch>
      <Route exact strict path="/" component={HomePage} />
      {/* <Route path="/dongho" component={DongHo} /> */}
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route path="/Admin" component={Admin} />
      <Route path="/Logout" component={Login} />
      <Route path="/DetailProduct" component={DetailProduct} />
      <Route path="/Cart" component={CartContainer} />
      <Route path="/ListProduct" component={ListProductContainer} />
      {/* <Route path="/addCart/:id" component={ListProduct} /> */}
      {/* <Route path="/cart" component={ShoppingCart} /> */}
      <Route component={Error} />
      <Route path="/Admin/AddProduct" component={AddProduct} />
    </Switch>
  );
}

export default RouterURL;
