import React, { Component } from 'react';
import Header from '../../User/Header';
import Footer from '../../User/Footer';
import CartItem from './CartItem';
class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <section className="bg-title-page p-t-40 p-b-50 flex-col-c-m" style={{ backgroundImage: 'url(images/heading-pages-01.jpg)' }}>
                    <h2 className="l-text2 t-center">
                        Cart
          </h2>
                </section>
                {/* Cart */}
                <section className="cart bgwhite p-t-70 p-b-100">
                    <div className="container">
                        {/* Cart item */}
                        <div className="container-table-cart pos-relative">
                            <div className="wrap-table-shopping-cart bgwhite">
                                <table className="table-shopping-cart">
                                    <tbody><tr className="table-head">
                                        <th className="column-1" />
                                        <th className="column-2">Product</th>
                                        <th className="column-3">Price</th>
                                        <th className="column-4 p-l-70">Quantity</th>
                                        <th className="column-5">Total</th>
                                        <th className="column-6"></th>
                                    </tr>
                                        <CartItem />
                                    </tbody></table>
                            </div>
                        </div>
                        <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
                            <div className="flex-w flex-m w-full-sm">
                                <div className="size11 bo4 m-r-10">
                                    <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="coupon-code" placeholder="Coupon Code" />
                                </div>
                                <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                                    {/* Button */}
                                    <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                        Apply coupon
                  </button>
                                </div>
                            </div>
                            <div className="size10 trans-0-4 m-t-10 m-b-10">
                                {/* Button */}
                                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                    CHECK OUT
                </button>
                            </div>
                        </div>
                        {/* Total */}
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Cart;