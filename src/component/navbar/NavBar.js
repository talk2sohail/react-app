import React, { Fragment, useState } from "react";
import WhatsApp from "../../component/WhatsApp.js";
import Menu from "./Menu";
import { BrowserRouter as Router, Link } from "react-router-dom";
function NavBar() {
  const [menu, setMenu] = useState([
    { key: 1, menu: "About", page: "about" },
    { key: 2, menu: "Repair", page: "repair" },
    { key: 3, menu: "Brands", page: "brands" },
    { key: 4, menu: "New Offers", page: "newOffer" },
    { key: 5, menu: "Our Stories", page: "ourStories" },
  ]);
  return (
    <Router>
      <Fragment>
        <header className="siteHeader">
          <div className="sectionWrapper">
            <div className="row align-items-center justify-content-between no-gutters">
              <div className="col-4 d-block d-lg-none">
                <a href="javascript:void(0)" className="mobileMenuTrigger">
                  <button type="button" className="">
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar m-0"></span>
                  </button>
                </a>
              </div>

              <div className="col-4 col-lg-2">
                <div className="logoWrapper">
                  <a href="index.html">
                    <img src="assets/images/logo.png" width="120" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-0 col-lg-10 containsBottomBar d-lg-block text-right">
                <div className="menuWrapper d-none d-lg-inline-block">
                  {menu.map((item) => (
                    <Menu key={item.key} item={item} />
                  ))}
                </div>
                <div className="iconsWrapper">
                  <div className="iconsItem d-inline-block d-md-block d-lg-none">
                    <a href="index.html" className="active">
                      <i className="glyph-icon flaticon-home-1"></i>
                    </a>
                  </div>
                  <div className="iconsItem d-inline-block d-md-block d-lg-none">
                    <a href="repair.html">
                      <i className="glyph-icon flaticon-settings"></i>
                    </a>
                  </div>
                  <div className="iconsItem d-lg-inline-block d-md-block">
                    <a
                      href="javascript:void(0)"
                      data-toggle="modal"
                      data-target="#loginModalCenter"
                      className="logInBtn"
                    >
                      <i className="glyph-icon flaticon-user"></i>
                    </a>
                    <ul className="subMenu">
                      <li>
                        <a href="profile.html">My Profile</a>
                      </li>

                      <li className="rule"></li>
                      <li>
                        <a href="address.html">Saved Address</a>
                      </li>

                      <li className="rule"></li>
                      <li>
                        <a href="repair.html">Repair Appointments</a>
                      </li>

                      <li className="rule"></li>

                      <li>
                        <a href="javascript:void(0)">Log Out</a>
                      </li>
                    </ul>
                  </div>
                  <div className="iconsItem d-none d-lg-inline-block">
                    <a href="faq.html">
                      <i className="glyph-icon flaticon-headphones"></i>
                    </a>
                  </div>
                  <div className="iconsItem d-lg-inline-block d-md-block hasItems">
                    <a href="checkout.html">
                      <i className="glyph-icon flaticon-note"></i>
                      <div className="circleWrapper">
                        <div className="circle"></div>
                      </div>
                    </a>
                    <ul className="subMenu">
                      <li>
                        <a className="d-flex justify-content-center product">
                          <div className="imgWrap">
                            <img
                              src="assets/images/mobiles/oneplus/oneplussixt.png"
                              height="60"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h3>OnePlus 6T</h3>
                            <p>Screen Repair, Mic Repair</p>
                            <p>
                              Total Price: <span>Rs 1399</span>
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <WhatsApp />
            </div>
          </div>
        </header>
      </Fragment>
    </Router>
  );
}

export default NavBar;
