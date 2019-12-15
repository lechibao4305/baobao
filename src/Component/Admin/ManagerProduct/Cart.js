import React, { Component } from "react";
import Header from "../../User/Header";
import Footer from "../../User/Footer";
import CartResult from "./CartResult";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  render() {
    var { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        <section
          className="bg-title-page p-t-40 p-b-50 flex-col-c-m"
          style={{ backgroundImage: "url(images/heading-pages-01.jpg)" }}
        >
          <h2 className="l-text2 t-center">Cart</h2>
        </section>
        {/* Cart */}
        <section className="cart bgwhite p-t-70 p-b-100">
          <div className="container">
            {/* Cart item */}
            <div className="container-table-cart pos-relative">
              <div className="wrap-table-shopping-cart bgwhite">
                <table className="table-shopping-cart">
                  <tbody>
                    <tr className="table-head">
                      <th className="column-1">Image</th>
                      <th className="column-2">Product</th>
                      <th className="column-3">Price</th>
                      <th className="column-4 p-l-70">Quantity</th>
                      <th className="column-5">Total</th>
                      <th className="column-6"></th>
                    </tr>
                  </tbody>
                  <tbody>{children}</tbody>
                </table>
              </div>
            </div>
            {/* Total */}
            <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
              <h5 className="m-text20 p-b-24">Cart Totals</h5>
              {/*  */}
              <div className="flex-w flex-sb-m p-b-12">
                <span className="s-text18 w-size19 w-full-sm">Subtotal:</span>
                <span className="m-text21 w-size20 w-full-sm">
                  {/* ${this.showTotalAmount(cart)} */}
                </span>
              </div>
              <div className="size15 trans-0-4">
                {/* Button */}
                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Cart;
