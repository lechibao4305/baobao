import React, { Component } from "react";
import Title from "./Title";
import Search from "./Search";
import Sort from "./Sort";
import Form from "./Form";
import ListItem from "./ListItem";
import { FormGroup, Label, Input } from "reactstrap";
import { Button } from "react-bootstrap";
import Control from "./Control";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }
  //Con ben duoi
  // timKiem = e => {
  //   var target = e.target;
  //   var name = target.name;
  //   var value = target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  // onSearch = () => {
  //   console.log(this.state);
  // };
  render() {
    var { keyword } = this.state;
    return (
      <div className="container">
        <Title />
        <div className="row">
          <Control />
        </div>
        <ListItem />
      </div>
    );
  }
}

export default Table;
{
  /* <div className="row">
              <div className="col-md-6">
                <Sort />
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <Label for="exampleSearch">Search</Label>
                  <Input
                    type="search"
                    name="keyword"
                    id="exampleSearch"
                    value={keyword}
                    onChange={this.timKiem}
                    placeholder="search placeholder"
                  />
                  <span className="input-group-btn">
                    <button
                      onClick={this.onSearch}
                      className="btn btn-info"
                      type="button"
                    >
                      Search
                    </button>
                  </span>
                </FormGroup>
              </div>
            </div> */
}
