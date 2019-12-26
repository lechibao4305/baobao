import React, { Component } from "react";
// import Items from '../Admin/Items'
import Search from "./Search";
import Sort from "./Sort";
import Item from "./Item";
import axios from "axios";

class ListItem extends Component {
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
  }
  renderItem() {
    return this.state.items.map(function(item, index) {
      return (
        <Item
          key={index}
          index={index + 1}
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
        <div className="panel-heading"></div>
        <table
          style={{ marginTop: 25 }}
          ref="refresh"
          className="table table-hover"
        >
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
