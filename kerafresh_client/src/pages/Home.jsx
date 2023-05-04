import { Link } from "react-router-dom";
import Category from "../components/Category";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Skeleton, message } from "antd";
import { FaEye } from "react-icons/fa";
import QuickView from "../components/QuickView";
import { getProducts } from "../features/product/productSlice";
import { getUserCart } from "../features/cart/cartSlice";
import { getUserfromLocalStorage } from "../utils/getUserFromLocalStorage";
import { addToWishlist } from "../features/user/userSlice";

function Home() {
  const [loading, setLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts()).then(() => setLoading(false));
    dispatch(getUserCart());
  }, [dispatch]);

  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const productState = useSelector((state) => state.product.products);
  const wishlistState = useSelector(
    (state) => state.user.createdWishlist?.wishlist
  );

  const handleQuickView = (product) => {
    setShowQuickView(true);
    setSelectedProduct(product);
  };

  const handleAddToWishlist = async (productId) => {
    if (!getUserfromLocalStorage) {
      message.warning("Please Log in to add products to your wishlist");
      return;
    } else {
      await dispatch(addToWishlist(productId));
    }
  };

  const showModal = (imageSrc) => {
    setIsModalVisible(true);
    setModalImageSrc(imageSrc);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleClicked = () => {
    setTimeout(() => {
      setIsClicked(!isClicked);
    }, 1000);
  };

  return (
    <div>
      <div>
        <div classname="ltn__utilize-overlay" style={{ display: "none" }}></div>
        {/* SLIDER AREA START (slider-3) */}
        <div className="ltn__slider-area ltn__slider-3  section-bg-1">
          <div
            className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 slick-initialized slick-slider slick-dotted"
            role="toolbar"
          >
            {/* ltn__slide-item  */}
            <div aria-live="polite" className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: "1",
                  width: "3040px",
                }}
                role="listbox"
              >
                <div
                  className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3 ltn__slide-item-3-normal slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  style={{
                    width: "1520px",
                    position: "relative",
                    left: "0px",
                    top: "0px",
                    zIndex: "999",
                    opacity: "1",
                  }}
                  tabindex="-1"
                  role="option"
                  aria-describedby="slick-slide00"
                >
                  <div className="ltn__slide-item-inner">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 align-self-center">
                          <div className="slide-item-info">
                            {isClicked ? (
                              <div className="slide-item-info-inner ltn__slide-animation">
                                <h6 className="slide-sub-title animated">
                                  <img src="img/icons/icon-img/1.png" alt="#" />{" "}
                                  100% genuine Products
                                </h6>
                                <h1 className="slide-title animated ">
                                  Kera Fresh gives you <br /> Chemical Free
                                  Products{" "}
                                </h1>
                                <div className="slide-brief animated">
                                  <p>
                                    We promote traditionally value added
                                    products collected from our farmers without
                                    any chemicals.
                                  </p>
                                </div>
                                <div className="btn-wrapper animated">
                                  <a
                                    href="shop"
                                    className="theme-btn-1 btn btn-effect-1 text-uppercase"
                                  >
                                    Explore Products
                                  </a>
                                  <a
                                    href="about"
                                    className="btn btn-transparent btn-effect-3"
                                  >
                                    LEARN MORE
                                  </a>
                                </div>
                              </div>
                            ) : (
                              <div className="slide-item-info-inner ltn__slide-animation">
                                <h6 className="slide-sub-title animated">
                                  <img src="img/icons/icon-img/1.png" alt="#" />{" "}
                                  100% genuine Products
                                </h6>
                                <h1 className="slide-title animated ">
                                  Kera Fresh gives you <br /> Chemical Free
                                  Products{" "}
                                </h1>
                                <div className="slide-brief animated">
                                  <p>
                                    We promote traditionally value added
                                    products collected from our farmers without
                                    any chemicals.
                                  </p>
                                </div>
                                <div className="btn-wrapper animated">
                                  <a
                                    href="shop"
                                    className="theme-btn-1 btn btn-effect-1 text-uppercase"
                                  >
                                    Explore Products
                                  </a>
                                  <a
                                    href="about"
                                    className="btn btn-transparent btn-effect-3"
                                  >
                                    LEARN MORE
                                  </a>
                                </div>
                              </div>
                            )}
                          </div>
                          {isClicked ? (
                            <div className="slide-item-img ">
                              <img src="img/slider/21.png" alt="#" />
                            </div>
                          ) : (
                            <div className="slide-item-img ">
                              <img src="img/slider/22.png" alt="#" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a className="slick-next slick-arrow" onClick={handleClicked}>
              <i className="fas fa-arrow-right" alt="Arrow Icon"></i>
            </a>
            <ul className="slick-dots" role="tablist">
              <li
                className=""
                aria-hidden="true"
                role="presentation"
                aria-selected="true"
                aria-controls="navigation00"
                id="slick-slide00"
              >
                <button
                  type="button"
                  data-role="none"
                  role="button"
                  tabIndex="0"
                >
                  1
                </button>
              </li>
              <li
                aria-hidden="false"
                role="presentation"
                aria-selected="false"
                aria-controls="navigation01"
                id="slick-slide01"
                className="slick-active"
              >
                <button
                  type="button"
                  data-role="none"
                  role="button"
                  tabIndex="0"
                >
                  2
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* SLIDER AREA END */}
        {/* FEATURE AREA START ( Feature - 3) */}
        <div className="ltn__feature-area mt-100 mt--65">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border section-bg-6">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/8-trolley.png" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Chemical Free</h4>
                      <p>Lorem ipsum dolor </p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/8-trolley2.png" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>100% Quality</h4>
                      <p>Lorem ipsum dolor</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/8-trolley.png" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Secure checkout</h4>
                      <p>Protected by Paypal</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/8-trolley2.png" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Offer &amp; gift here</h4>
                      <p>On all orders over</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FEATURE AREA END */}
        {/* ABOUT US AREA START */}
        <div className="ltn__about-us-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="about-us-img-wrap about-img-left">
                  <img src="img/other/6.png" alt="About Us " />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="about-us-info-wrap">
                  <div className="section-title-area ltn__section-title-2">
                    <h6 className="section-subtitle ltn__secondary-color">
                      Know More About Kera Fresh
                    </h6>
                    <h1 className="section-title">
                      Trusted Organic <br className="d-none d-md-block" /> Food
                      Store
                    </h1>
                    <p style={{ textAlign: "justify" }}>
                      Welcome to our website! We are a Registered Farmer
                      Producer Company dedicated to promoting traditionally
                      value-added products from our farms.
                    </p>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    We believe in developing unique products that supplement the
                    medicinal value in farm products. Our team of experts is
                    constantly exploring new ways to create products that not
                    only taste great but also offer health benefits. We are
                    committed to providing our customers with the best quality
                    products that promote a healthy lifestyle. We work closely
                    with our farmers to collect the best quality raw materials
                    to create our unique range of products that are rich in
                    flavor and nutritional value. Our products include jaggery,
                    sugar, honey, and brown sugar, all of which are made without
                    any chemical preservatives. We strongly believe in promoting
                    the use of natural and organic ingredients to ensure that
                    our products retain the rich flavor and nutritional value of
                    traditional farm produce. One of our core principles is to
                    retain the nutritional values of traditional farm products.
                    We understand the importance of preserving the natural
                    goodness of our products, which is why we use traditional
                    techniques to create our unique range of products. Our
                    jaggery, sugar, honey, and brown sugar are rich in essential
                    nutrients that are vital for a healthy lifestyle.
                  </p>
                  {/* <div className="about-author-info d-flex">
                    <div className="author-name-designation  align-self-center mr-30">
                      <h4 className="mb-0">Lorem Name </h4>
                      <small>/ Kera Fresh Director</small>
                    </div>
                    <div className="author-sign  align-self-center">
                      <img src="img/icons/icon-img/author-sign.png" alt="#" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT US AREA END */}
        {/* CATEGORY AREA START */}
        <div
          className="ltn__category-area section-bg-1-- ltn__primary-bg before-bg-1 bg-image bg-overlay-theme-black-5--0 pt-115 pb-90"
          style={{ backgroundImage: `url("img/icons/icon-img/5.jpg")` }}
        >
          <div className="container">
            {/* <div className="row">
        <div className="col-lg-12">
          <div className="section-title-area ltn__section-title-2 text-center">
            <h1 className="section-title white-color">Top Categories</h1>
          </div>
        </div>
      </div> */}
            <Category />
            {/* </div> */}
          </div>
        </div>
        {/* CATEGORY AREA END */}
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
                      <div className="row">
                        {/* ltn__product-item */}
                        {productState?.map((product, index) => (
                          <div className="col-lg-3" key={index}>
                            <div className="ltn__product-item ltn__product-item-3 text-center">
                              {loading ? (
                                <Skeleton
                                  loading={loading}
                                  avatar={{ size: 442 }}
                                  active
                                  paragraph={false}
                                />
                              ) : (
                                <div className="product-img">
                                  <a href="product-details.html">
                                    <img src={product?.images[0]} alt="#" />
                                  </a>
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
                                          onClick={() =>
                                            handleQuickView(product)
                                          }
                                        >
                                          <i className="far fa-eye" />
                                        </Link>
                                      </li>
                                      <li>
                                        {wishlistState?.includes(
                                          product?._id
                                        ) ? (
                                          <Link
                                            to="#"
                                            title="Wishlist"
                                            data-toggle="modal"
                                            data-target="#liton_wishlist_modal"
                                            onClick={() => {
                                              handleAddToWishlist(product?._id);
                                              message.error(
                                                "Product removed from wishlist"
                                              );
                                            }}
                                          >
                                            <i className="far fa-heart" />
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
                                                handleAddToWishlist(
                                                  product?._id
                                                );
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
                              )}
                              <div className="product-info">
                                <div className="product-ratting"></div>
                                <h2 className="product-title">
                                  {loading ? (
                                    <Skeleton
                                      loading={loading}
                                      title={false}
                                      paragraph={{ rows: 1 }}
                                    />
                                  ) : (
                                    <Link to="#">{product?.title}</Link>
                                  )}
                                </h2>
                                <div className="product-price">
                                  {loading ? (
                                    <Skeleton
                                      loading={loading}
                                      title={false}
                                      paragraph={{ rows: 1 }}
                                    />
                                  ) : (
                                    <span>
                                      <i className="fa-solid fa-indian-rupee-sign" />{" "}
                                      {product?.price}
                                    </span>
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
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PRODUCT TAB AREA END */}
        {/* CALL TO ACTION START (call-to-action-4) */}
        <div className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120 additional">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="call-to-action-inner call-to-action-inner-4 text-center">
                  <div className="section-title-area ltn__section-title-2">
                    <h6 className="section-subtitle ltn__secondary-color">
                      any question you have
                    </h6>
                    <h1 className="section-title white-color">
                      04923 - 272003
                    </h1>
                  </div>
                  <div className="btn-wrapper">
                    <a
                      href="tel:04923272003"
                      className="theme-btn-1 btn btn-effect-1"
                    >
                      MAKE A CALL
                    </a>
                    <a
                      href="/contact"
                      className="btn btn-transparent btn-effect-4 white-color"
                    >
                      CONTACT US
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ltn__call-to-4-img-1">
            <img src="img/bg/12.png" alt="#" />
          </div>
          <div className="ltn__call-to-4-img-2">
            <img src="img/bg/11.png" alt="#" />
          </div>
        </div>
        {/* CALL TO ACTION END */}
        <div className="ltn__gallery-area mb-120">
          <div className="container">
            <div
              className="section-title-area ltn__section-title-2 text-center"
              style={{ marginTop: "7%" }}
            >
              <h1 className="section-title">Our Gallery</h1>
              <h6 className="section-subtitle ltn__secondary-color">
                WELCOME TO OUR COMPANY
              </h6>
            </div>
            <div
              className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---"
              style={{ position: "relative", height: "650px" }}
            >
              <div className="ltn__gallery-sizer col-1" />
              {/* gallery-item */}
              <div
                className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12"
                style={{ position: "absolute", left: "0%", top: 0 }}
              >
                <div className="ltn__gallery-item-inner">
                  <div className="ltn__gallery-item-img">
                    <img src="img/gallery/1.jpg" alt="kerfreshgallery" />
                    <span className="ltn__gallery-action-icon">
                      <FaEye
                        style={{
                          color: "whitesmoke",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => showModal("img/gallery/1.jpg")}
                      />
                    </span>
                  </div>
                  <div className="ltn__gallery-item-info"></div>
                </div>
              </div>
              {/* gallery-item */}
              <div
                className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12"
                style={{ position: "absolute", left: "33.3333%", top: 0 }}
              >
                <div className="ltn__gallery-item-inner">
                  <div className="ltn__gallery-item-img">
                    <img src="img/gallery/2.jpg" alt="kerafreshgallery" />
                    <span className="ltn__gallery-action-icon">
                      <FaEye
                        style={{
                          color: "whitesmoke",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => showModal("img/gallery/2.jpg")}
                      />
                    </span>
                  </div>
                  <div className="ltn__gallery-item-info"></div>
                </div>
              </div>
              {/* gallery-item */}
              <div
                className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12"
                style={{ position: "absolute", left: "66.6667%", top: 0 }}
              >
                <div className="ltn__gallery-item-inner">
                  <div className="ltn__gallery-item-img">
                    <img src="img/gallery/3.jpg" alt="kerafreshgallery" />
                    <span className="ltn__gallery-action-icon">
                      <FaEye
                        style={{
                          color: "whitesmoke",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => showModal("img/gallery/3.jpg")}
                      />
                    </span>
                  </div>
                  <div className="ltn__gallery-item-info"></div>
                </div>
              </div>
              {/* gallery-item */}
              <div
                className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12"
                style={{ position: "absolute", left: "0%", top: 309 }}
              >
                <div className="ltn__gallery-item-inner">
                  <div className="ltn__gallery-item-img">
                    <img src="img/gallery/4.jpg" alt="kerafreshgallery" />
                    <span className="ltn__gallery-action-icon">
                      <FaEye
                        style={{
                          color: "whitesmoke",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => showModal("img/gallery/4.jpg")}
                      />
                    </span>
                  </div>
                  <div className="ltn__gallery-item-info"></div>
                </div>
              </div>
              {/* gallery-item */}
              <div
                className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12"
                style={{ position: "absolute", left: "33.3333%", top: 309 }}
              >
                <div className="ltn__gallery-item-inner">
                  <div className="ltn__gallery-item-img">
                    <img src="img/gallery/5.jpg" alt="kerafreshgallery" />
                    <span className="ltn__gallery-action-icon">
                      <FaEye
                        style={{
                          color: "whitesmoke",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => showModal("img/gallery/5.jpg")}
                      />
                    </span>
                  </div>
                  <div className="ltn__gallery-item-info"></div>
                </div>
              </div>
              {/* gallery-item */}
              <div
                className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12"
                style={{ position: "absolute", left: "66.6667%", top: 309 }}
              >
                <div className="ltn__gallery-item-inner">
                  <div className="ltn__gallery-item-img">
                    <img src="img/gallery/6.jpg" alt="kerafreshgallery" />
                    <span className="ltn__gallery-action-icon">
                      <FaEye
                        style={{
                          color: "whitesmoke",
                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => showModal("img/gallery/6.jpg")}
                      />
                    </span>
                  </div>
                  <div className="ltn__gallery-item-info"></div>
                </div>
              </div>
              {/* gallery-item */}
            </div>
          </div>
        </div>
      </div>
      <div>{/* MODAL AREA END */}</div>
      <div className="preloader d-none" id="preloader">
        <div className="preloader-inner">
          <div className="spinner">
            <div className="dot1" />
            <div className="dot2" />
          </div>
        </div>
        <QuickView
          visible={showQuickView}
          onClose={() => setShowQuickView(false)}
          product={selectedProduct}
        />
      </div>
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <img
          src={modalImageSrc}
          alt="kerafreshgallery"
          style={{ width: "100%" }}
        />
      </Modal>
    </div>
  );
}

export default Home;