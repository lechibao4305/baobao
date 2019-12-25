import React, { Component } from "react";
import Title from "./Title";
import Search from "./Search";
import Sort from "./Sort";
import Form from "./Form";
import ListItem from "./ListItem";
import SweetAlert from "sweetalert-react";
import Table from "./Table";
import SideNav from "./SideNav";
import { Redirect, Router } from "react-router-dom";
import RouterAdmin from "./RouterAdmin";
class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let check = true;
    if (token == null) {
      check = false;
    }
    this.state = {
      check
    };
  }

  render() {
    if (this.state.check == false) {
      return <Redirect to="/Login" />;
    }
    return (
      <React.Fragment>
        <SideNav />
        <div className="flex-wrap">
          <RouterAdmin />
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;
