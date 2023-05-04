import React from "react";

function Footer() {
  return (
    <footer className="ltn__footer-area  ">
      <div className="footer-top-area  section-bg-2 plr--5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-about-widget">
                <div className="footer-logo">
                  <div className="site-logo" style={{ marginLeft: "0%" }}>
                    <img src="img/logo-2.png" alt="Logo" />
                  </div>
                </div>
                <p>
                  We are basically a Registered farmer producer company.To
                  promote traditionally value added products collected from our
                  farmers without any chemicals.
                </p>
                <div className="ltn__social-media mt-20">
                  <ul>
                    <li>
                      <a href="#" title="Facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Instagram">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Linkedin">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Whatsapp">
                        <i className="fa-brands fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">Quick Links</h4>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="shop.html">All Products</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">Services.</h4>
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="order-tracking.html">Order tracking</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wish List</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="account.html">My account</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-menu-widget clearfix">
                <h4 className="footer-title">Address</h4>
                <div className="footer-address">
                  <ul>
                    <li>
                      <div className="footer-address-icon">
                        <i className="fa-solid fa-location-dot" />
                      </div>
                      <div className="footer-address-info">
                        <p>
                          457/6, Karumanda Koundanoor,Vannamada Post, Kerala
                          678555
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <a href="tel:04923272003"> 04923 - 272003</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="fa-regular fa-envelope" />
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <a href="mailto:kerafresh@gmail.com">
                            {" "}
                            kerafresh@gmail.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12 col-12">
              <div className="footer-widget footer-newsletter-widget">
                <h4 className="footer-title">Newsletter</h4>
                <p>
                  Subscribe to our weekly Newsletter and receive updates via
                  email.
                </p>
                <div className="footer-newsletter">
                  <form action="#">
                    <input type="email" name="email" placeholder="Email*" />
                    <div className="btn-wrapper">
                      <button className="theme-btn-1 btn" type="submit">
                        <i className="fas fa-location-arrow" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__copyright-area ltn__copyright-2 section-bg-2 ltn__border-top-2 plr--5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="ltn__copyright-design clearfix">
                <p>
                  All Rights Reserved @ Kera-Fresh{" "}
                  <span className="current-year" />
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 align-self-center">
              <div className="ltn__copyright-menu text-right">
                <a href="https://brandingsparrow.com/">
                  <p className="priv position-relative">
                    Designed and Developed by Brandingsparrow.com
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
