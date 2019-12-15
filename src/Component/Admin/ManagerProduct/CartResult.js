import React, { Component } from "react";

export default class CartResult extends Component {
  render() {
    var { cart } = this.props;
    return (
      <React.Fragment>
        <tr className="table-row">
          <td className="column-1"></td>
          <td className="column-2"></td>
          <td className="column-3"></td>
          <td className="column-4"></td>
          <td className="column-5">
            <span
              style={{ marginRight: 20, fontSize: 20 }}
              className="s-text18 w-size19 w-full-sm"
            >
              Subtotal:
            </span>
            <span
              style={{ fontSize: 20 }}
              className="m-text21 w-size20 w-full-sm"
            >
              <strong>${this.showToltalAmount(cart)}</strong>
            </span>
          </td>
        </tr>
      </React.Fragment>
    );
  }
  showToltalAmount = cart => {
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].item.gia * cart[i].quantity;
      }
    }
    return total;
  };
}
