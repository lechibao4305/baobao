import React, { Component } from "react";
import Util from "./Util";
import { Link } from "react-router-dom";
import axios from "axios";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.addtocart = this.addtocart.bind(this);
  }
  onSubmit() {
    axios.post("http://localhost:4000/paypal/pay");
  }
  // addtocart() {
  //   axios
  //     .get("http://localhost:3000/cart/addCart/" + this.props.item._id)
  //     .then(console.log("AddCart success"))
  //     .catch(err => console.log(err));
  // }
  render() {
    var { item } = this.props;
    return (
      <React.Fragment>
        <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
          {/* Block2 */}
          <div className="block2">
            <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
              <img src="images/dh-1.jpg" alt="IMG-PRODUCT" />
              <div className="block2-overlay trans-0-4">
                <a
                  href="#"
                  className="block2-btn-addwishlist hov-pointer trans-0-4"
                >
                  <i
                    className="icon-wishlist icon_heart_alt"
                    aria-hidden="true"
                  />
                  <i
                    className="icon-wishlist icon_heart dis-none"
                    aria-hidden="true"
                  />
                </a>
                <div className="block2-btn-addcart w-size1 trans-0-4">
                  {/* Button */}
                  {/* onClick={(e) => this.props.handleAddToCart(e, product)} */}

                  <button
                    onClick={() => this.onAddToCart(item)}
                    className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="block2-txt p-t-20">
              <a
                href="product-detail.html"
                className="block2-name dis-block s-text3 p-b-5"
              >
                {this.props.item.ten}
              </a>
              <span className="block2-price m-text6 p-r-5">
                {Util.formatCurrency(this.props.item.gia)}
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  onAddToCart = item => {
    this.props.onAddToCart(item);
  };
}
export default Product;
