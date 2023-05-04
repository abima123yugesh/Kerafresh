import { useDispatch, useSelector } from "react-redux";
import { getUserCart } from "../features/cart/cartSlice";
import { useEffect, useState } from "react";
import { base_url } from "../utils/base_url";

function Checkout() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("KeraFreshUser"));
  const id = user._id;
  let items = user.items;
  const [shipping, setShipping] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyAddress: "",
    district: "",
    houseNumber: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    paymentMode: "",
    amount: "",
    status: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setShipping({ ...shipping, [name]: value });
  };

  const OrderPlaced = async (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      phoneNumber,
      companyName,
      companyAddress,
      district,
      houseNumber,
      apartment,
      city,
      state,
      pincode,
    } = shipping;
    const res = await fetch(`${base_url}order/place-order/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phoneNumber: phoneNumber,
        companyName: companyName,
        companyAddress: companyAddress,
        district: district,
        houseNumber: houseNumber,
        apartment: apartment,
        city: city,
        state: state,
        pincode: pincode,
        paymentMode: "cod",
        amount: cartState.cartTotal + 60,
        status: "Processing",
        user_id: id,
        items: cartState.items,
      }),
    });
    const data = await res.json();
    if (!data) {
      window.alert("Invalid data");
    } else if (res.status === 422) {
      alert("Oh Sorry!! ..your cart is empty to place an order");
    } else {
      window.alert("success data");
    }
  };

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  const cartState = useSelector((state) => state.cart.cart);
  return (
    <>
      <div className="ltn__utilize-overlay" />
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
                  <h1 className="section-title white-color">Checkout</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html" style={{ color: "#fff" }}>
                        Home
                      </a>
                    </li>
                    <li style={{ color: "#fff" }}>Checkout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SLIDER AREA END */}
      <div className="ltn__checkout-area mb-105">
        <div className="container">
          <div className="row">
            {/* form starts from here  */}
            <form>
              <div className="col-lg-12">
                <div className="ltn__checkout-inner">
                  <div className="ltn__checkout-single-content mt-50">
                    <h4 className="title-2">Billing Details</h4>
                    <div className="ltn__checkout-single-content-info">
                      <h6>Personal Information</h6>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-item input-item-name ltn__custom-icon">
                            <input
                              type="text"
                              name="firstname"
                              placeholder="First name"
                              fdprocessedid="vmeg2"
                              value={shipping.firstname}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-name ltn__custom-icon">
                            <input
                              type="text"
                              name="lastname"
                              placeholder="Last name"
                              fdprocessedid="1grhz"
                              value={shipping.lastname}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-email ltn__custom-icon">
                            <input
                              type="email"
                              name="email"
                              placeholder="email address"
                              fdprocessedid="snw0sq"
                              value={shipping.email}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-phone ltn__custom-icon">
                            <input
                              type="text"
                              name="phoneNumber"
                              placeholder="phone number"
                              fdprocessedid="yjur7a"
                              value={shipping.phoneNumber}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-website ltn__custom-icon">
                            <input
                              type="text"
                              name="companyName"
                              placeholder="Company name (optional)"
                              fdprocessedid="2ivxeq"
                              value={shipping.companyName}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item input-item-website ltn__custom-icon">
                            <input
                              type="text"
                              name="companyAddress"
                              placeholder="Company address (optional)"
                              fdprocessedid="hf70kj"
                              value={shipping.companyAddress}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <h6>District</h6>
                          <div className="input-item">
                            <input
                              type="text"
                              name="district"
                              placeholder="District"
                              fdprocessedid="d336xq"
                              value={shipping.district}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <h6>Address</h6>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-item">
                                <input
                                  type="text"
                                  name="houseNumber"
                                  placeholder="House number and street name"
                                  fdprocessedid="d336xq"
                                  value={shipping.houseNumber}
                                  onChange={handleInputs}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-item">
                                <input
                                  type="text"
                                  name="apartment"
                                  placeholder="Apartment, suite, unit etc. (optional)"
                                  fdprocessedid="eq03h9"
                                  value={shipping.apartment}
                                  onChange={handleInputs}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <h6>Town / City</h6>
                          <div className="input-item">
                            <input
                              type="text"
                              name="city"
                              placeholder="City"
                              fdprocessedid="g83x5w"
                              value={shipping.city}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <h6>State </h6>
                          <div className="input-item">
                            <input
                              type="text"
                              name="state"
                              placeholder="State"
                              fdprocessedid="ub94ta"
                              value={shipping.state}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <h6>Pincode</h6>
                          <div className="input-item">
                            <input
                              type="text"
                              name="pincode"
                              placeholder="Pincode"
                              fdprocessedid="korpet"
                              value={shipping.pincode}
                              onChange={handleInputs}
                            />
                          </div>
                        </div>
                      </div>
                      <h6>Order Notes (optional)</h6>
                      <div className="input-item input-item-textarea ltn__custom-icon">
                        <input
                          type="text"
                          name="comment"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ltn__checkout-payment-method mt-50">
                  <h4 className="title-2">Payment Method</h4>

                  <div id="checkout_accordion_1">
                    <div className="card">
                      <div className="col-lg-12">
                        <div className="shoping-cart-total mt-8">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <strong>Order Total</strong>
                                </td>
                                <td>
                                  <strong>
                                    <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                    {cartState?.cartTotal + 60}
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <h5
                        className="ltn__card-title mt-8"
                        data-toggle="collapse"
                        data-target="#faq-item-2-2"
                        // aria-expanded="true"
                        name="paymentMode"
                        value={shipping.paymentMode}
                        onChange={handleInputs}
                      >
                        Cash on delivery
                      </h5>
                      <div
                        id="faq-item-2-2"
                        className="collapse show mt-8"
                        data-parent="#checkout_accordion_1"
                      >
                        <div className="card-body">
                          <p>Pay with cash upon delivery.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ltn__payment-note mt-30 mb-30">
                    <p>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                  </div>
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="button"
                    fdprocessedid="y3iptg"
                    onClick={OrderPlaced}
                  >
                    Place order
                  </button>
                </div>
              </div>
            </form>
            {/* form ends here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;