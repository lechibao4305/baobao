import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Cart from "../Component/Admin/ManagerProduct/Cart";
import PropTypes from "prop-types";
import * as Message from "../constants/Message";
import CartItem from "../Component/Admin/ManagerProduct/CartItem";
import CartResult from "../Component/Admin/ManagerProduct/CartResult";
class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var { cart } = this.props;
    console.log(cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = cart => {
    var result = Message.MSG_EMPTY_CART_;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem key={index} item={item} index={index} />;
      });
    }
    return result;
  };
  showTotalAmount = cart => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}
// CartContainer.propTypes = {
//   cart: PropTypes.arrayOf(
//     PropTypes.shape({
//       item: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         ten: PropTypes.string.isRequired,
//         hinh: PropTypes.string.isRequired,
//         gia: PropTypes.number.isRequired,
//         mota: PropTypes.string.isRequired,
//         trangthai: PropTypes.string.isRequired
//       }).isRequired,
//       quantity: PropTypes.number.isRequired
//     })
//   ).isRequired
// };
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
export default connect(mapStateToProps, null)(CartContainer);
