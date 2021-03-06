import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                  <img src="images/dh-2.jpg" alt="IMG-BENNER" />
                  <div className="block1-wrapbtn w-size2">
                    {/* Button */}
                    <Link
                      to="/ListProduct"
                      className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                    >
                      Citizen
                    </Link>
                  </div>
                </div>
                {/* block1 */}
                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="images/dh-3.jpg" alt="IMG-BENNER" />
                  <div className="block1-wrapbtn w-size2">
                    {/* Button */}
                    <Link
                      to="/ListProduct"
                      className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                    >
                      Seiko
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                {/* block1 */}
                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="images/dh-4.jpg" alt="IMG-BENNER" />
                  <div className="block1-wrapbtn w-size2">
                    {/* Button */}
                    <Link
                      to="/ListProduct"
                      className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                    >
                      D&G
                    </Link>
                  </div>
                </div>
                {/* block1 */}
                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="images/dh-5.jpg" alt="IMG-BENNER" />
                  <div className="block1-wrapbtn w-size2">
                    {/* Button */}
                    <Link
                      to="/ListProduct"
                      className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                    >
                      CalvinKlein
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
                {/* block1 */}
                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="images/dh-1.jpg" alt="IMG-BENNER" />
                  <div className="block1-wrapbtn w-size2">
                    {/* Button */}
                    <Link
                      to="/ListProduct"
                      className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4"
                    >
                      Rolex
                    </Link>
                  </div>
                </div>
                {/* block2 */}
                <div className="block2 wrap-pic-w pos-relative m-b-30"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Banner;
