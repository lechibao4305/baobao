import React, { Component } from "react";
import { Button } from "mdbreact";

class CartItem extends Component {
  render() {
    var a = "/images/img/";
    var { item } = this.props;
    return (
      <tr className="table-row">
        <td className="column-1">
          <div className="cart-img-product b-rad-4 o-f-hidden">
            <img src={a + item.item.hinh} alt="IMG-PRODUCT" />
          </div>
        </td>
        <td className="column-2">{item.item.ten}</td>
        <td className="column-3">{item.item.gia}</td>
        <td className="column-4">
          <div className="flex-w bo5 of-hidden w-size17">
            <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
              <i className="fs-12 fa fa-minus" aria-hidden="true" />
            </button>
            <input
              className="size8 m-text18 t-center num-product"
              type="number"
              name="num-product1"
              value={item.quantity}
            />
            <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
              <i className="fs-12 fa fa-plus" aria-hidden="true" />
            </button>
          </div>
        </td>
        <td className="column-5">
          {this.showTongTien(item.item.gia, item.quantity)}
        </td>
        <td>
          <Button className="btn-danger">X</Button>
        </td>
      </tr>
    );
  }
  showTongTien = (gia, quantity) => {
    return gia * quantity;
  };
}

export default CartItem;
