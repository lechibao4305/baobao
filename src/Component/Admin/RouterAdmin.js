import React, { Component } from "react";
import { Router } from "react-router-dom";
import AddProduct from "./AddProduct";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import Admin from "./Admin";
import Table from "./Table";
import EditProduct from "./EditProduct";
import ListItem from "./ListItem";
class RouterAdmin extends Component {
  render() {
    return (
      <Switch>
        <Route path="/Admin/Index" component={ListItem} />
        <Route path="/Admin/EditProduct:id" component={EditProduct} />
        <Route path="/Admin/AddProduct" component={AddProduct} />
        <Route path="/Admin" component={Table} />
      </Switch>
    );
  }
}

export default RouterAdmin;
