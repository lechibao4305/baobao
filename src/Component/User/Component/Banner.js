import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div>
                {/* Banner */}
                <section className="banner bgwhite p-t-40 p-b-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                                {/* block1 */}
                                <div className="block1 hov-img-zoom pos-relative m-b-30">
                                    <img src="images/banner-02.jpg" alt="IMG-BENNER" />
                                    <div className="block1-wrapbtn w-size2">
                                        {/* Button */}
                                        <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                            Dresses
                  </a>
                                    </div>
                                </div>
                                {/* block1 */}
                                <div className="block1 hov-img-zoom pos-relative m-b-30">
                                    <img src="images/banner-05.jpg" alt="IMG-BENNER" />
                                    <div className="block1-wrapbtn w-size2">
                                        {/* Button */}
                                        <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                            Sunglasses
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                                {/* block1 */}
                                <div className="block1 hov-img-zoom pos-relative m-b-30">
                                    <img src="images/banner-03.jpg" alt="IMG-BENNER" />
                                    <div className="block1-wrapbtn w-size2">
                                        {/* Button */}
                                        <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                            Watches
                  </a>
                                    </div>
                                </div>
                                {/* block1 */}
                                <div className="block1 hov-img-zoom pos-relative m-b-30">
                                    <img src="images/banner-07.jpg" alt="IMG-BENNER" />
                                    <div className="block1-wrapbtn w-size2">
                                        {/* Button */}
                                        <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                            Footerwear
                  </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                                {/* block1 */}
                                <div className="block1 hov-img-zoom pos-relative m-b-30">
                                    <img src="images/banner-04.jpg" alt="IMG-BENNER" />
                                    <div className="block1-wrapbtn w-size2">
                                        {/* Button */}
                                        <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                                            Bags
                  </a>
                                    </div>
                                </div>
                                {/* block2 */}
                                <div className="block2 wrap-pic-w pos-relative m-b-30">
                                    <img src="images/icons/bg-01.jpg" alt="IMG" />
                                    <div className="block2-content sizefull ab-t-l flex-col-c-m">
                                        <h4 className="m-text4 t-center w-size3 p-b-8">
                                            Sign up &amp; get 20% off
                  </h4>
                                        <p className="t-center w-size4">
                                            Be the frist to know about the latest fashion news and get exclu-sive offers
                  </p>
                                        <div className="w-size2 p-t-25">
                                            {/* Button */}
                                            <a href="#" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                                                Sign Up
                    </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Banner;