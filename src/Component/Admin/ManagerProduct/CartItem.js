import React, { Component } from "react";
import { Button } from "mdbreact";
import Util from "../ManagerProduct/Util";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  render() {
    var a = "/images/img/";
    var { item } = this.props;
    var { quantity } = item.quantity > 0 ? item : this.state;
    console.log(quantity);
    return (
      <tr className="table-row">
        <td className="column-1">
          <div className="cart-img-product b-rad-4 o-f-hidden">
            <img src={a + item.item.hinh} alt="IMG-PRODUCT" />
          </div>
        </td>
        <td className="column-2">{item.item.ten}</td>
        <td className="column-3">{Util.formatCurrency(item.item.gia)}</td>
        <td className="column-4">
          <div className="flex-w bo5 of-hidden w-size17">
            <button
              onClick={() =>
                this.onUpdateQuantity(item.item, item.quantity - 1)
              }
              className="btn-num-product-down color1 flex-c-m size7 bg8 eff2"
            >
              <i className="fs-12 fa fa-minus" aria-hidden="true" />
            </button>
            <input
              className="size8 m-text18 t-center num-product"
              type="number"
              name="num-product1"
              value={quantity}
            />
            <button
              onClick={() =>
                this.onUpdateQuantity(item.item, item.quantity + 1)
              }
              className="btn-num-product-up color1 flex-c-m size7 bg8 eff2"
            >
              <i className="fs-12 fa fa-plus" aria-hidden="true" />
            </button>
          </div>
        </td>
        <td className="column-5">
          {Util.formatCurrency(this.showTongTien(item.item.gia, item.quantity))}
        </td>
        <td>
          <Button
            onClick={() => this.deleteItemInCart(item.item)}
            className="btn-danger"
          >
            X
          </Button>
        </td>
      </tr>
    );
  }
  onUpdateQuantity = (item, quantity) => {
    if (quantity > 0) {
      this.setState({
        quantity: quantity
      });
      this.props.updateItemInCart(item, quantity);
    }
  };
  deleteItemInCart = item => {
    console.log(item);
    var { deleteItemInCart } = this.props;
    deleteItemInCart(item);
  };
  showTongTien = (gia, quantity) => {
    return gia * quantity;
  };
}

export default CartItem;
