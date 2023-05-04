import React from "react";

function SideCart() {
  return (
    <div>
      {/* Utilize Cart Menu Start */}
      <div
        id="ltn__utilize-cart-menu"
        className="ltn__utilize ltn__utilize-cart-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <span className="ltn__utilize-menu-title">Cart</span>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="mini-cart-product-area ltn__scrollbar">
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/3.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel">
                    <i className="fa-solid fa-xmark" />
                  </i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Jaggery</a>
                </h6>
                <span className="mini-cart-quantity">
                  1 x <i className="fa-solid fa-indian-rupee-sign" /> 120.00
                </span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/2.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel">
                    <i className="fa-solid fa-xmark" />
                  </i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Khandsari sugar</a>
                </h6>
                <span className="mini-cart-quantity">
                  1 x <i className="fa-solid fa-indian-rupee-sign" /> 130.00
                </span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/1.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel">
                    <i className="fa-solid fa-xmark" />
                  </i>
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Khandsari Brown Suger</a>
                </h6>
                <span className="mini-cart-quantity">
                  1 x <i className="fa-solid fa-indian-rupee-sign" /> 150.00
                </span>
              </div>
            </div>
            <div className="mini-cart-item clearfix">
              <div className="mini-cart-img">
                <a href="#">
                  <img src="img/product/4.png" alt="Image" />
                </a>
                <span className="mini-cart-item-delete">
                  <i className="icon-cancel" />
                </span>
              </div>
              <div className="mini-cart-info">
                <h6>
                  <a href="#">Honey</a>
                </h6>
                <span className="mini-cart-quantity">
                  1 x <i className="fa-solid fa-indian-rupee-sign" /> 120.00
                </span>
              </div>
            </div>
          </div>
          <div className="mini-cart-footer">
            <div className="mini-cart-sub-total">
              <h5>
                Subtotal:{" "}
                <span>
                  <i className="fa-solid fa-indian-rupee-sign" /> 520.00
                </span>
              </h5>
            </div>
            <div className="btn-wrapper">
              <a href="cart.html" className="theme-btn-1 btn btn-effect-1">
                View Cart
              </a>
              <a href="cart.html" className="theme-btn-2 btn btn-effect-2">
                Checkout
              </a>
            </div>
            <p>
              Free Shipping on All Orders Over{" "}
              <i className="fa-solid fa-indian-rupee-sign" /> 100!
            </p>
          </div>
        </div>
      </div>
      {/* Utilize Cart Menu End */}
    </div>
  );
}

export default SideCart;
