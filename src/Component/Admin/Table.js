import React, { Component } from "react";
import Title from "./Title";
import Search from "./Search";
import Sort from "./Sort";
import Form from "./Form";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import { FormGroup, Label, Input } from "reactstrap";
import { Button } from "react-bootstrap";
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
          {/* <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Search />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Sort />
                    </div> */}
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <Link to="/Admin/AddProduct">
              <button
                type="button"
                className="btn btn-info btn-block marginB10"
              >
                Add Item
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="row marginB10">
                    <div className="col-md-offset-7 col-md-5">
                        <Form />
                    </div>
                </div> */}
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
