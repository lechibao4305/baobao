import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";


export default class Control extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Search />
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <Link to="/Admin/AddProduct">
            <button type="button" className="btn btn-info btn-block marginB10">
              Add Item
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
