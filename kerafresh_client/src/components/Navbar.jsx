import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/userSlice";
import { getUserCart, removeProductFromCart } from "../features/cart/cartSlice";
import { message } from "antd";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("KeraFreshUser"));
  const id = user?._id;

  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setIsCartMenuOpen(true);
  };

  const kfUser = useSelector((state) => state.user.KeraFreshUser);

  const toggleCartMenu = () => {
    setIsCartMenuOpen(true);
  };
  const clickAction = () => {
    overlayRef.current.style.display = "none";
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const cartState = useSelector((state) => state.cart.cart);
  const deleteCartItem = (e) => {
    dispatch(removeProductFromCart(e));
    setTimeout(() => {
      dispatch(getUserCart());
      message.success("Product removed successfully from your cart");
    }, 300);
  };

  const overlayRef = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
  };
  const Cartclose = () => {
    setIsCartMenuOpen(false);
  };

  return (
    <div>
      <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white plr--9---">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="site-logo-wrap">
                <div className="site-logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="Logo" width="80%" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col header-menu-column menu-color-white---">
              <div className="header-menu d-none d-xl-block">
                <nav>
                  <div className="ltn__main-menu">
                    <ul>
                      <li className="menu-icon">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="menu-icon">
                        <Link to="/about">About</Link>
                      </li>
                      <li className="menu-icon">
                        <Link to="shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="contact">Contact</Link>
                      </li>
                      <li className="special-link">
                        <Link to="contact">GET A QUOTE</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="ltn__header-options ltn__header-options-2 mb-sm-20">
              {/* header-search-1 */}
              <div className="header-search-wrap">
                <div className="header-search-1">
                  <div className="search-icon">
                    <i className="icon-search for-search-show">
                      <i className="fa-solid fa-magnifying-glass" />
                    </i>
                    <i className="icon-cancel  for-search-close">
                      <i className="fa-solid fa-xmark" />
                    </i>
                  </div>
                </div>
                <div className="header-search-1-form">
                  <form id="#" method="get" action="#">
                    <input
                      type="text"
                      name="search"
                      defaultValue=""
                      placeholder="Search here..."
                    />
                    <button type="submit">
                      <span>
                        <i className="icon-search" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
              {/* user-menu */}
              <div className="ltn__drop-menu user-menu">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa-solid fa-user" />
                    </Link>
                    <ul>
                      <li>
                        {kfUser ? (
                          <a href="/" onClick={handleLogout}>
                            Sign Out
                          </a>
                        ) : (
                          <Link to="login">Sign in</Link>
                        )}
                      </li>
                      <li>
                        <Link to="register">Register</Link>
                      </li>
                      <li>
                        <Link to="account">My Account</Link>
                      </li>
                      <li>
                        <Link to="cart">My Cart</Link>
                      </li>
                      <li>
                        <Link to={`/wishlist/${id}`}>Wishlist</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* mini-cart */}
              <div className="mini-cart-icon">
                <a
                  href="#ltn__utilize-cart-menu"
                  className="ltn__utilize-toggle"
                  onClick={toggleCartMenu}
                >
                  <i className="fa-solid fa-cart-plus" />
                  <sup>{cartState?.products?.length}</sup>
                </a>
              </div>
              {/* mini-cart */}
              {/* Mobile Menu Button */}
              <div className="mobile-menu-toggle d-xl-none">
                <a
                  href="#ltn__utilize-mobile-menu"
                  className="ltn__utilize-toggle"
                  onClick={toggleMobileMenu}
                >
                  <svg viewBox="0 0 800 600">
                    <path
                      d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                      id="top"
                    />
                    <path d="M300,320 L540,320" id="middle" />
                    <path
                      d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                      id="bottom"
                      transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {isCartMenuOpen && ( */}
      {isCartMenuOpen ? (
        <div
          id="ltn__utilize-cart-menu"
          className="ltn__utilize ltn__utilize-cart-menu ltn__utilize-open"
        >
          <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
              <span className="ltn__utilize-menu-title">Cart</span>
              <button className="ltn__utilize-close" onClick={Cartclose}>
                ×
              </button>
            </div>
            <div className="mini-cart-product-area ltn__scrollbar">
              {cartState?.products?.map((item, index) => (
                <div className="mini-cart-item clearfix" key={index}>
                  <div className="mini-cart-img">
                    <a href="#">
                      <img src={item?.product?.images[0]} alt="img" />
                    </a>
                    <span className="mini-cart-item-delete">
                      <i
                        className="icon-cancel"
                        onClick={() => deleteCartItem(item?.product?._id)}
                      >
                        <i className="fa-solid fa-xmark" />
                      </i>
                    </span>
                  </div>
                  <div className="mini-cart-info">
                    <h6>
                      <a href="#">{item?.title}</a>
                    </h6>
                    <span className="mini-cart-quantity">
                      {item?.count} x{" "}
                      <i className="fa-solid fa-indian-rupee-sign" />{" "}
                      {item?.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mini-cart-footer">
              <div className="mini-cart-sub-total">
                <h5>
                  Subtotal:{" "}
                  <span>
                    <i className="fa-solid fa-indian-rupee-sign" />{" "}
                    {cartState?.cartTotal}
                  </span>
                </h5>
              </div>
              <div className="btn-wrapper">
                <a href="cart" className="theme-btn-1 btn btn-effect-1">
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
      ) : (
        ""
      )}

      {/* )} */}
      {/* sidecart start*/}

      {/* sidecart end */}
      <div
        id="ltn__utilize-mobile-menu"
        className={`ltn__utilize ltn__utilize-mobile-menu ${
          isMobileMenuOpen ? "ltn__utilize-open" : ""
        }`}
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <div className="site-logo">
              <a href="index.html">
                <img src="../../img/logo-2.png" alt="Logo" />
              </a>
            </div>
            <button
              className="ltn__utilize-close"
              ref={overlayRef}
              onClick={clickAction}
            >
              ×
            </button>
          </div>
          <div className="ltn__utilize-menu-search-form">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button>
                <i className="fas fa-search" />
              </button>
            </form>
          </div>
          <div className="ltn__utilize-menu">
            <ul>
              <li>
                <a href="index">Home</a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li>
                <a href="shop">Shop</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
            <ul>
              <li>
                <a href="account" title="My Account">
                  <span className="utilize-btn-icon">
                    <i className="far fa-user" />
                  </span>
                  My Account
                </a>
              </li>
              <li>
                <a href="wishlist.html" title="Wishlist">
                  <span className="utilize-btn-icon">
                    <i className="far fa-heart" />
                    <sup>3</sup>
                  </span>
                  Wishlist
                </a>
              </li>
              <li>
                <a href="cart" title="Shoping Cart">
                  <span className="utilize-btn-icon">
                    <i className="fas fa-shopping-cart" />
                    <sup>5</sup>
                  </span>
                  Shopping Cart
                </a>
              </li>
            </ul>
          </div>
          <div className="ltn__social-media-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;