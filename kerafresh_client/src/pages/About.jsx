import React from "react";

function About() {
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
                    // Welcome to Kera-Fresh
                  </h6>
                  <h1 className="section-title white-color">Who We Are.?</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html" style={{ color: "#fff" }}>
                        Home
                      </a>
                    </li>
                    <li style={{ color: "#fff" }}>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT US AREA START */}
      <div className="ltn__about-us-area  pb-120">
        <div className="container">
          <div className="row">
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
                <p>
                  We are basically a Registered farmer producer company.To
                  promote traditionally value added products collected from our
                  farmers.To promote products without any chemical
                  preservatives,To retain nutritional values of traditional farm
                  products To develop unique products to suppliment the
                  medicinal value in farm products.
                </p>
                <div className="about-author-info d-flex">
                  <div className="author-name-designation  align-self-center mr-30">
                    <h4 className="mb-0">Lorem Name </h4>
                    <small>/ Kera Fresh Director</small>
                  </div>
                  <div className="author-sign  align-self-center">
                    <img src="img/icons/icon-img/author-sign.png" alt="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="img/other/6.png" alt="About Us Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT US AREA END */}
      <div className="ltn__feature-area section-bg-1 pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h6 className="section-subtitle ltn__secondary-color">
                  // features //
                </h6>
                <h1 className="section-title">
                  Why Choose Us<span>.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-7">
                <div className="ltn__feature-icon-title">
                  <div className="ltn__feature-icon">
                    <span>
                      <img src="img/icons/icon-img/21.png" alt="#" />
                    </span>
                  </div>
                  <h3 className="animated fadeIn">
                    <a href="service-details.html">Natural &amp; Organic</a>
                  </h3>
                </div>
                <div className="ltn__feature-info">
                  <p>
                    Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                    sed do eiusmod te mp or incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-7">
                <div className="ltn__feature-icon-title">
                  <div className="ltn__feature-icon">
                    <span>
                      <img src="img/icons/icon-img/23.png" alt="#" />
                    </span>
                  </div>
                  <h3 className="animated fadeIn">
                    <a href="service-details.html">Budget Friendly</a>
                  </h3>
                </div>
                <div className="ltn__feature-info">
                  <p>
                    Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                    sed do eiusmod te mp or incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-7">
                <div className="ltn__feature-icon-title">
                  <div className="ltn__feature-icon">
                    <span>
                      <img src="img/icons/icon-img/22.png" alt="#" />
                    </span>
                  </div>
                  <h3 className="animated fadeIn">
                    <a href="service-details.html">Chemical Free</a>
                  </h3>
                </div>
                <div className="ltn__feature-info">
                  <p>
                    Lorem ipsum dolor sit ame it, consectetur adipisicing elit,
                    sed do eiusmod te mp or incididunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
