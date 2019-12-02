import React, { Component } from 'react';
import Shipping from './Component/Shipping';
import SlideArea from './Component/SlideArea';
import Instagram from './Component/Instagram';
import Blog from './Component/Blog';
import Banner from './Component/Banner';
import NewProduct from './Component/NewProduct';
import Banner2 from './Component/Banner2';
import Header from './Header';
import Footer from './Footer';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <SlideArea />
                <Banner />
                {/* <NewProduct /> */}
                <Banner2 />
                <Blog />
                <Instagram />
                <Shipping />
                <Footer />
            </React.Fragment>
        );
    }
}
export default HomePage;