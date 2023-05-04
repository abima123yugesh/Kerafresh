import React from "react";
import Slider from "react-slick";

function Category() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title-area ltn__section-title-2 text-center">
            <h1 className="section-title white-color">Top Categories</h1>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div
            className="ltn__category-item ltn__category-item-3 text-center"
            style={{ marginRight: "20px" }}
          >
            <div className="ltn__category-item-img">
              <a href="/shop">
                <img src="img/icons/icon-img/category-1.png" alt="category" />
              </a>
            </div>
            <div className="ltn__category-item-name">
              <h5>
                <a href="/shop">Jaggery</a>
              </h5>{" "}
              <h6>(5 item)</h6>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="ltn__category-item ltn__category-item-3 text-center"
            style={{ marginRight: "20px" }}
          >
            <div className="ltn__category-item-img">
              <a href="/shop">
                <img src="img/icons/icon-img/category-2.png" alt="category" />
              </a>
            </div>
            <div className="ltn__category-item-name">
              <h5>
                <a href="/shop">Sugar</a>
              </h5>
              <h6>(6 item)</h6>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="ltn__category-item ltn__category-item-3 text-center"
            style={{ marginRight: "20px" }}
          >
            <div className="ltn__category-item-img">
              <a href="/shop">
                <img src="img/icons/icon-img/category-3.png" alt="category" />
              </a>
            </div>
            <div className="ltn__category-item-name">
              <h5>
                <a href="/shop">Honey</a>
              </h5>
              <h6>(5 item)</h6>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="ltn__category-item ltn__category-item-3 text-center"
            style={{ marginRight: "20px" }}
          >
            <div className="ltn__category-item-img">
              <a href="/shop">
                <img src="img/icons/icon-img/category-2.png" alt="category" />
              </a>
            </div>
            <div className="ltn__category-item-name">
              <h5>
                <a href="/shop">Sugar</a>
              </h5>
              <h6>(6 item)</h6>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="ltn__category-item ltn__category-item-3 text-center"
            style={{ marginRight: "20px" }}
          >
            <div className="ltn__category-item-img">
              <a href="shop.html">
                <img src="img/icons/icon-img/category-1.png" alt="category" />
              </a>
            </div>
            <div className="ltn__category-item-name">
              <h5>
                <a href="shop.html">Jaggery</a>
              </h5>
              <h6>(5 item)</h6>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className="ltn__category-item ltn__category-item-3 text-center"
            style={{ marginRight: "20px" }}
          >
            <div className="ltn__category-item-img">
              <a href="shop.html">
                <img src="img/icons/icon-img/category-3.png" alt="category" />
              </a>
            </div>
            <div className="ltn__category-item-name">
              <h5>
                <a href="shop.html">Honey</a>
              </h5>
              <h6>(5 item)</h6>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Category;
