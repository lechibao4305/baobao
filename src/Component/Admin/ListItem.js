import React, { Component } from "react";
// import Items from '../Admin/Items'
import Item from "./Item";
import axios from "axios";
class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: Items,
      // index: "",
      items: []
    };
  }
  // deleteProduct = (id) => {
  //     var arrProduct = this.state.items;
  //     arrProduct.splice(id, 1)
  //     this.setState({ items: arrProduct })
  //     console.log("delete success")
  // }
  // editProduct = (id, name) => {
  //     console.log("edit success")
  // }
  // addProduct = (id, name, level) => {
  //     var arrProduct = this.state.items
  //     arrProduct.push(id, name, level)
  //     this.setState({ items: arrProduct })
  //     console.log("add success");
  // }
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
  }
  renderItem() {
    return this.state.items.map(function(item, index) {
      return (
        <Item
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
    return (
      <div className="panel panel-success">
        <div className="panel-heading">Product</div>
        <table ref="refresh" className="table table-hover">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Hình</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Hãng</th>
              <th className="text-center">Giá</th>
              <th className="text-center">Mô tả</th>
              <th className="text-center">Trạng thái</th>
            </tr>
          </thead>
          <tbody>{this.renderItem()}</tbody>
        </table>
      </div>
    );
  }
}
export default ListItem;
