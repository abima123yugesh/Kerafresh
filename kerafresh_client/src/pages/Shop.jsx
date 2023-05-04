import { message, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QuickView from "../components/QuickView";
import { getUserCart } from "../features/cart/cartSlice";
import { getProducts } from "../features/product/productSlice";
import { addToWishlist } from "../features/user/userSlice";

import { getUserfromLocalStorage } from "../utils/getUserFromLocalStorage";

function Shop() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts()).then(() => setLoading(false));
    dispatch(getUserCart());
  }, [dispatch]);

  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [sortedProducts, setSortedProducts] = useState([]);

  const productState = useSelector((state) => state.product.products);
  const wishlistState = useSelector((state) => state.user?.createdWishlist?.wishlist);

  useEffect(() => {
    setSortedProducts(productState);
  }, [productState]);

  const handleQuickView = (product) => {
    setShowQuickView(true);
    setSelectedProduct(product);
  };
  

  const handleSort = (value) => {
    let sorted = [...productState];
    if (value === "lowPrice") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "highPrice") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  };

  const handleAddToWishlist = async (productId) => {
    if (!getUserfromLocalStorage) {
      message.warning("Please Log in to add products to your wishlist");
      return;
    } else {
      await dispatch(addToWishlist(productId));
      
    }
  };
  return (
    <div>
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
                  <h1 className="section-title white-color">
                    Explore Our Products
                  </h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html" style={{ color: "#fff" }}>
                        Home
                      </a>
                    </li>
                    <li style={{ color: "#fff" }}>Shop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ltn__product-area ltn__product-gutter mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__shop-options">
                <ul>
                  <li>
                    <div className="ltn__grid-list-tab-menu ">
                      <div className="nav">
                        <a
                          className="show active"
                          data-toggle="tab"
                          href="#liton_product_grid"
                        >
                          <i className="fas fa-th-large" />
                        </a>
                        <a
                          data-toggle="tab"
                          href="#liton_product_list"
                          className=""
                        >
                          <i className="fas fa-list" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select
                        className="nice-select"
                        onChange={(e) => handleSort(e.target.value)}
                      >
                        <option value="default">Default sorting</option>
                        <option value="lowPrice">Sort by price: low to high</option>
                        <option value="highPrice">Sort by price: high to low</option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="liton_product_grid"
                >

                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      {/* ltn__product-item */}
                      {sortedProducts?.map((product, index) => (
                        <div
                          className="col-xl-3 col-lg-4 col-sm-6 col-6"
                          key={index}
                        >
                          <div className="ltn__product-item ltn__product-item-3 text-center">
                          {loading ? (
                          <Skeleton loading={loading} avatar={{ size: 267 }} active paragraph={false} />
                            ) : (
                            <div className="product-img">
                              <Link 
                              to="#"
                              onClick={() => handleQuickView(product)}
                              >
                                <img src={product?.images[0]} alt="#" />
                              </Link>
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badge">New</li>
                                </ul>
                              </div>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                      onClick={() => handleQuickView(product)}
                                    >
                                      <i className="far fa-eye" />
                                    </Link>
                                  </li>

                                  <li>
                                  {wishlistState?.includes(product?._id)
                                    ? (
                                      <Link
                                      className="text-danger"
                                        onClick={() => {
                                          handleAddToWishlist(product?._id);
                                          message.error(
                                            "Product removed from wishlist"
                                          );
                                        }}
                                      >
                                        <i className="fas fa-heart" />
                                      </Link>
                                    ) : (
                                      <Link
                                        title="Wishlist"
                                        data-toggle="modal"
                                        data-target="#liton_wishlist_modal"
                                        onClick={() => {
                                          if (!getUserfromLocalStorage) {
                                            message.error("Please Log In");
                                          } else {
                                            handleAddToWishlist(product?._id);
                                            message.success(
                                              "Product added to Wishlist"
                                            );
                                          }
                                        }}
                                      >
                                        <i className="far fa-heart" />
                                      </Link>
                                    )}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            )
                                      }
                          
                            <div className="product-info">
                              <div className="product-ratting">
                              </div>
                              <h2 className="product-title">
                                {loading ? (
                                  <Skeleton loading={loading} title={false} paragraph={{ rows: 1 }} />
                                ) : (
                                <Link 
                                to="#"
                                >
                                  {product?.title}
                                </Link>
                                )}
                              </h2>
                              <div className="product-price">
                                {loading ? (
                                  <Skeleton loading={loading} title={false} paragraph={{ rows: 1 }} />
                                ) : (
                                <span>{product?.price}</span>
                                )}
                              </div>

                            </div>
                          </div>
                        </div>
                      ))}
                      {/* ltn__product-item */}

                      {/* ltn__product-item */}

                      {/* ltn__product-item */}

                      {/* ltn__product-item */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_product_list">
                  <div className="ltn__product-tab-content-inner ltn__product-list-view">
                    <div className="row">
                      {/* ltn__product-item */}
                      {sortedProducts?.map((product, index) => (
                        <div className="col-lg-12" key={index}>
                          <div className="ltn__product-item ltn__product-item-3">
                            <div className="product-img">
                              <Link 
                              to="#"
                              onClick={() => handleQuickView(product)}
                              >
                                <img src={product?.images[0]} alt="#" />
                              </Link>
                              <div className="product-badge">
                                <ul>
                                  <li className="sale-badge">New</li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-info">
                              <h2 className="product-title">
                                <Link to="#">
                                  {product?.title}
                                </Link>
                              </h2>
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star" />
                                  </li>
                                  <li>
                                    <i className="fas fa-star-half-alt" />
                                  </li>
                                  <li>
                                    <i className="far fa-star" />
                                  </li>
                                </ul>
                              </div>
                              <div className="product-price">
                                <span>
                                  <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                  {product?.price}
                                </span>
                                <del>
                                  <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                  170.00
                                </del>
                              </div>
                              <div className="product-brief">
                                <p>{product?.description}</p>
                              </div>
                              <div className="product-hover-action">
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      title="Quick View"
                                      data-toggle="modal"
                                      data-target="#quick_view_modal"
                                      onClick={() => handleQuickView(product)}
                                    >
                                      <i className="far fa-eye" />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      title="Wishlist"
                                      data-toggle="modal"
                                      data-target="#liton_wishlist_modal"
                                    >
                                      <i className="far fa-heart" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* ltn__product-item */}

                      {/* ltn__product-item */}

                      {/* ltn__product-item */}

                      {/*  */}
                    </div>
                  </div>
                </div>
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
  );
}

export default Shop;
