import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
class Search extends Component {
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search item name"
        />
        <span className="input-group-btn">
          <button className="btn btn-info" type="button">
            Clear
          </button>
        </span>
      </div>
    );
  }
}

export default Search;
