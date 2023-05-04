import { getUserCart, removeProductFromCart } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { message, Skeleton } from "antd";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("KeraFreshUser"));
  const id = user?._id;
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <div className="ltn__utilize-overlay" />
      {/* SLIDER AREA START (slider-3) */}
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bg="img/bg/9.jpg"
        style={{ backgroundImage: 'url("img/bg/9.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                  <h6
                    className="section-subtitle ltn__secondary-color"
                    style={{ color: "#fff !important" }}
                  >
                    Welcome to Kera-Fresh
                  </h6>
                  <h1 className="section-title white-color">Cart</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html" style={{ color: "#fff" }}>
                        Home
                      </a>
                    </li>
                    <li style={{ color: "#fff" }}>Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="liton__shoping-cart-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
                <div className="shoping-cart-table table-responsive">
                  <table className="table">
                    <tbody>
                      {cartState?.products?.map((item, index) => (
                        <tr key={index}>
                          <td
                            className="cart-product-remove"
                            onClick={() => deleteCartItem(item?.product?._id)}
                          >
                            x
                          </td>
                          {loading ? (
                          <Skeleton loading={loading} avatar={{ size: 100 }} active paragraph={false} />
                          ) : (
                          <td className="cart-product-image">
                            <a href="product-details.html">
                              <img src={item?.product?.images[0]} alt="#" />
                            </a>
                          </td>
                          )
}

                          <td className="cart-product-info">
                            <h4>
                              <a href="product-details.html">{item?.title}</a>
                            </h4>
                          </td>

                          <td className="cart-product-price">
                            <i className="fa-solid fa-indian-rupee-sign" />{" "}
                            {item?.price}
                          </td>
                          <td className="cart-product-quantity">
                            <div className="cart-plus-minus">
                              <input
                                type="text"
                                defaultValue={item?.count}
                                name="qtybutton"
                                className="cart-plus-minus-box"
                                fdprocessedid="vqi3qd"
                              />
                            </div>
                          </td>
                          <td className="cart-product-subtotal">
                            <i className="fa-solid fa-indian-rupee-sign" />{" "}
                            {item?.product?.price * item?.count}
                          </td>
                        </tr>
                      ))}
                      <tr className="cart-coupon-row">
                        <td colSpan={6}>
                          <div className="cart-coupon">
                            <input
                              type="text"
                              name="cart-coupon"
                              placeholder="Coupon code"
                              fdprocessedid="n41yn"
                            />
                            <button
                              type="submit"
                              className="btn theme-btn-2 btn-effect-2"
                              fdprocessedid="gt3jdc"
                            >
                              Apply Coupon
                            </button>
                          </div>
                        </td>
                        <td>
                          <button
                            type="submit"
                            className="btn theme-btn-2 btn-effect-2-- disabled"
                            fdprocessedid="cifswc"
                          >
                            Update Cart
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="shoping-cart-total mt-50">
                  <h4>Cart Totals</h4>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>
                          <i className="fa-solid fa-indian-rupee-sign" />
                          {cartState?.cartTotal}
                        </td>
                      </tr>
                      <tr>
                        <td>Shipping and Handing</td>
                        <td>
                          <i className="fa-solid fa-indian-rupee-sign" /> 50.00
                        </td>
                      </tr>
                      <tr>
                        <td>Gst</td>
                        <td>
                          <i className="fa-solid fa-indian-rupee-sign" /> 10.00
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong>
                            <i className="fa-solid fa-indian-rupee-sign" />
                            {cartState?.cartTotal + 60}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn-wrapper text-right">
                    <Link
                      to= {`/checkout/${id}`}
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      Proceed to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
