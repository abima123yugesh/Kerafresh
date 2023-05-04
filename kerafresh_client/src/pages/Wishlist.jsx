import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuickView from "../components/QuickView";
import { addToWishlist } from "../features/user/userSlice";
import { base_url } from "../utils/base_url";
import { useDispatch } from "react-redux";
import { message } from "antd";

function Wishlist() {
  const dispatch = useDispatch();
  const [Wishlist, setWishlist] = useState([]);
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const user = JSON.parse(localStorage.getItem("KeraFreshUser"));
  const id = user?._id;
  const getWishlist = () => {
    fetch(`${base_url}user/get-user-wishlist/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setWishlist(data.wishlist);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getWishlist();
  }, []);

  const handleQuickView = (e) => {
    setShowQuickView(true);
    setSelectedProduct(e);
  };

  const handleAddToWishlist = async (productId) => {
      await dispatch(addToWishlist(productId));
      message.success("Product removed from wishlist")
      setTimeout(() => {
        getWishlist();
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
                  <h1 className="section-title white-color">Wishlist</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <Link to="/" style={{ color: "#fff" }}>
                        Home
                      </Link>
                    </li>
                    <li style={{ color: "#fff" }}>Wishlist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="liton__wishlist-area mb-105">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
                <div className="shoping-cart-table table-responsive">
                  <table className="table">
                    <tbody>
                      {Wishlist.map((e, i) => {
                        return (
                          <>
                            <tr>
                              <td 
                              className="cart-product-remove"
                              onClick={() => {
                                handleAddToWishlist(e?._id)
                              }}
                              >x</td>
                              <td className="cart-product-image" key={i}>
                                <a href="product-details.html">
                                  <img src={e.images[0]} alt="#" />
                                </a>
                              </td>
                              <td className="cart-product-info">
                                <h4>
                                  <a href="product-details.html">{e.title}</a>
                                </h4>
                              </td>
                              <td className="cart-product-price">
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                {e.price}
                              </td>
                              <td className="cart-product-stock">In Stock</td>
                              <td className="cart-product-add-cart">
                                <Link
                                to="#"
                                  className="submit-button-1"
                                  
                                  title="Add to Cart"
                                  data-toggle="modal"
                                  data-target="#add_to_cart_modal"
                                  onClick={() => handleQuickView(e)}
                                >
                                  Add to Cart
                                </Link>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuickView
        visible={showQuickView}
        onClose={() => setShowQuickView(false)}
        product={selectedProduct}
        />
      </div>
    </>
  );
}

export default Wishlist;
