import React, { Component } from "react";
import ListProduct from "../Component/Admin/ManagerProduct/ListProduct";
import axios from "axios";
import Product from "../Component/Admin/ManagerProduct/Product";
import { connect } from "react-redux";
class ListProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/items/")
      .then(response => {
        console.log(response.data);
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.props.name);
  }
  renderProduct() {
    return this.state.items.map(function(item, index) {
      return (
        <Product
          key={index}
          item={item}
          ten={item.ten}
          hinh={item.hinh}
          hang={item.hang}
          gia={item.gia}
          mota={item.mota}
          trangthai={item.trangthai}
        />
      );
    });
  }

  render() {
    var { items } = this.props;
    return <ListProduct>{this.showItems(items)}</ListProduct>;
  }
  showItems(items) {
    var result = null;
    if (items.length > 0) {
      result = items.map((item, index) => {
        return (
          <Product
            key={index}
            item={item}
            ten={item.ten}
            hinh={item.hinh}
            hang={item.hang}
            gia={item.gia}
            mota={item.mota}
            trangthai={item.trangthai}
          />
        );
      });
    }
    return result;
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
export default connect(mapStateToProps, null)(ListProductContainer);
