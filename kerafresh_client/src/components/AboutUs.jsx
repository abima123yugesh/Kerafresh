import React from "react";

function AboutUs() {
  return (
    <div>
      {/* ABOUT US AREA START */}
      <div className="ltn__about-us-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img src="img/other/6.png" alt="About Us Image" />
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
          </div>
        </div>
      </div>
      {/* ABOUT US AREA END */}
    </div>
  );
}

export default AboutUs;
