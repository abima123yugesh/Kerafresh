import React from "react";

function CallToAction() {
  return (
    <div>
      {/* CALL TO ACTION START (call-to-action-4) */}
      <div
        className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120"
        data-bg="img/bg/6.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-4 text-center">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ltn__secondary-color">
                    // any question you have //
                  </h6>
                  <h1 className="section-title white-color">04923 - 272003</h1>
                </div>
                <div className="btn-wrapper">
                  <a
                    href="tel:04923272003"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    MAKE A CALL
                  </a>
                  <a
                    href="contact.html"
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
    </div>
  );
}

export default CallToAction;
