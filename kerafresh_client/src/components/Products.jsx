import React from "react";

function Products() {
  return (
    <div>
      {/* PRODUCT TAB AREA START (product-item-3) */}
      <div className="ltn__product-tab-area ltn__product-gutter pt-115 pb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Our Products</h1>
                <h6 className="section-subtitle ltn__secondary-color">
                  Explore the Collection
                </h6>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_tab_3_1">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row ltn__tab-product-slider-one-active slick-arrow-1">
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/1.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">
                                Khandsari Brown Suger
                              </a>
                            </h2>
                            <div className="product-price">
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                150.00
                              </span>
                              <del>
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                170.00
                              </del>
                            </div>
                            {/*      <a href="#" class="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-toggle="modal" data-target="#add_to_cart_modal">
                                                      <i class="fas fa-shopping-cart"></i>
                                                      <span>ADD TO CART</span>
                                                  </a> */}
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/2.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">-19%</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> (24)</a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">Khandsari sugar</a>
                            </h2>
                            <div className="product-price">
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                130.00
                              </span>
                              <del>
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                150.00
                              </del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/3.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">Jaggery</a>
                            </h2>
                            <div className="product-price">
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                120.00
                              </span>
                              <del>
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                140.00
                              </del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      <div className="col-lg-12">
                        <div className="ltn__product-item ltn__product-item-3 text-center">
                          <div className="product-img">
                            <a href="product-details.html">
                              <img src="img/product/4.png" alt="#" />
                            </a>
                            <div className="product-badge">
                              <ul>
                                <li className="sale-badge">New</li>
                              </ul>
                            </div>
                            <div className="product-hover-action">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    title="Quick View"
                                    data-toggle="modal"
                                    data-target="#quick_view_modal"
                                  >
                                    <i className="far fa-eye" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Add to Cart"
                                    data-toggle="modal"
                                    data-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    title="Wishlist"
                                    data-toggle="modal"
                                    data-target="#liton_wishlist_modal"
                                  >
                                    <i className="far fa-heart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h2 className="product-title">
                              <a href="product-details.html">Honey</a>
                            </h2>
                            <div className="product-price">
                              <span>
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                120.00
                              </span>
                              <del>
                                <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                150.00
                              </del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* ltn__product-item */}
                      {/*  */}
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT TAB AREA END */}
    </div>
  );
}

export default Products;
