import React from "react";

function Gallery() {
  return (
    <div>
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
            style={{ position: "relative", height: "1239.85px" }}
          >
            <div className="ltn__gallery-sizer col-1" />
            {/* gallery-item */}
            <div
              className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12"
              style={{ position: "absolute", left: "0%", top: 0 }}
            >
              <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                  <a href="img/gallery/1.jpg" data-rel="lightcase:myCollection">
                    <img src="img/gallery/1.jpg" alt="Image" />
                    <span className="ltn__gallery-action-icon">
                      <i className="fas fa-search" />
                    </span>
                  </a>
                </div>
                <div className="ltn__gallery-item-info">
                  {/* <h4><a href="portfolio-details.html">Lorem h3 </a></h4>
                      <p>lorem contnt</p> */}
                </div>
              </div>
            </div>
            {/* gallery-item */}
            <div
              className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12"
              style={{ position: "absolute", left: "33.3333%", top: 0 }}
            >
              <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                  <a
                    href=" img/gallery/2.jpg"
                    data-rel="lightcase:myCollection"
                  >
                    <img src="img/gallery/2.jpg" alt="Image" />
                    <span className="ltn__gallery-action-icon">
                      <i className="fas fa-search" />
                    </span>
                  </a>
                </div>
                <div className="ltn__gallery-item-info">
                  {/* <h4><a href="portfolio-details.html">Lorem h3 </a></h4>
                      <p>lorem contnt</p> */}
                </div>
              </div>
            </div>
            {/* gallery-item */}
            <div
              className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12"
              style={{ position: "absolute", left: "66.6667%", top: 0 }}
            >
              <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                  <a href="img/gallery/3.jpg" data-rel="lightcase:myCollection">
                    <img src="img/gallery/3.jpg" alt="Image" />
                    <span className="ltn__gallery-action-icon">
                      <i className="fas fa-search" />
                    </span>
                  </a>
                </div>
                <div className="ltn__gallery-item-info">
                  {/* <h4><a href="portfolio-details.html">Lorem h3 </a></h4>
                      <p>lorem contnt</p> */}
                </div>
              </div>
            </div>
            {/* gallery-item */}
            <div
              className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12"
              style={{ position: "absolute", left: "0%", top: 309 }}
            >
              <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                  <a href="img/gallery/4.jpg" data-rel="lightcase:myCollection">
                    <img src="img/gallery/4.jpg" alt="Image" />
                    <span className="ltn__gallery-action-icon">
                      <i className="fas fa-search" />
                    </span>
                  </a>
                </div>
                <div className="ltn__gallery-item-info">
                  {/* <h4><a href="portfolio-details.html">Lorem h3 </a></h4>
                      <p>lorem contnt</p> */}
                </div>
              </div>
            </div>
            {/* gallery-item */}
            <div
              className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12"
              style={{ position: "absolute", left: "33.3333%", top: 309 }}
            >
              <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                  <a href="img/gallery/5.jpg" data-rel="lightcase:myCollection">
                    <img src="img/gallery/5.jpg" alt="Image" />
                    <span className="ltn__gallery-action-icon">
                      <i className="fas fa-search" />
                    </span>
                  </a>
                </div>
                <div className="ltn__gallery-item-info">
                  {/* <h4><a href="portfolio-details.html">Lorem h3 </a></h4>
                      <p>lorem contnt</p> */}
                </div>
              </div>
            </div>
            {/* gallery-item */}
            <div
              className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12"
              style={{ position: "absolute", left: "66.6667%", top: 309 }}
            >
              <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                  <a href="img/gallery/6.jpg">
                    <img src="img/gallery/6.jpg" alt="Image" />
                    <span className="ltn__gallery-action-icon">
                      <i className="fas fa-search" />
                    </span>
                  </a>
                </div>
                <div className="ltn__gallery-item-info">
                  {/* <h4><a href="portfolio-details.html">Lorem h3 </a></h4>
                      <p>lorem contnt</p> */}
                </div>
              </div>
            </div>
            {/* gallery-item */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
