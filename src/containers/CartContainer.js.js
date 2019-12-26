import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Cart from "../Component/Admin/ManagerProduct/Cart";
import PropTypes from "prop-types";
import * as Message from "../constants/Message";
import CartItem from "../Component/Admin/ManagerProduct/CartItem";
import CartResult from "../Component/Admin/ManagerProduct/CartResult";
import { actDeleteItemInCart, actUpdateItemInCart } from "../actions/index";
class CartContainer extends Component {
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
    var { deleteItemInCart, updateItemInCart } = this.props;
    if (cart.length > 0) {
      // result = this.state.cart.map((item, index) => {
      //du lieu ao
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            deleteItemInCart={deleteItemInCart}
            updateItemInCart={updateItemInCart}
          />
        );
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
const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteItemInCart: item => {
      dispatch(actDeleteItemInCart(item));
    },
    updateItemInCart: (item, quantity) => {
      dispatch(actUpdateItemInCart(item, quantity));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
