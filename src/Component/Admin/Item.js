import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Util from "./ManagerProduct/Util";
class Item extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {}
  sweetAlert() {}
  delete() {
    swal({
      title: "Bạn có chắc muốn xóa sản phẩm",
      text: "Nếu xóa sẽ không thể khôi phục",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        //Xoa san pham
        axios
          .get("http://localhost:3000/items/delete/" + this.props.item._id)
          .then(console.log("Deleted"))
          .catch(err => console.log(err));
        swal("Xóa sản phẩm thành công", {
          icon: "success"
        });
      } else {
        swal("Cancel success");
      }
    });
  }
  // EditProduct() {

  // }
  // DeleteProduct() {
  //     const { Item } = this.state;
  //     this.setState({
  //         Items: Items.fillter(Item => Item.index !== index)
  //     })
  // }

  render() {
    var a = "/images/img/";
    let { item, index } = this.props;
    let classNameLabel = "";
    let nameLabel = "";
    switch (this.props.item.trangthai) {
      case 1:
        classNameLabel = "label label-warning";
        nameLabel = "Còn Hàng";
        break;
      case 0:
        classNameLabel = "label label-danger";
        nameLabel = "Hết Hàng";
        break;
    }
    return (
      <tr style={{ textAlign: "center", width: "auto" }}>
        <td className="text-center">{index}</td>
        <td>
          <img
            style={{ width: 50, height: 50 }}
            src={a + this.props.item.hinh}
          />
        </td>
        <td>{this.props.item.ten}</td>
        <td>{this.props.item.hang}</td>
        <td>{Util.formatCurrency(this.props.item.gia)}</td>
        <td>{this.props.item.mota}</td>
        <td className="text-center">
          <span className={classNameLabel}>{nameLabel}</span>
        </td>
        <td>
          <Link to={"/Admin/EditProduct" + this.props.item._id}>
            <button type="button" className="btn btn-warning btn-sm">
              Edit
            </button>
          </Link>
          <button
            onClick={this.delete}
            type="button"
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
