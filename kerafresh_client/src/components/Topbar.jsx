import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div>
      <div className="ltn__header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="ltn__top-bar-menu">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa-solid fa-phone" /> 04923 - 272003
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:kerafresh@gmail.com">
                      <i className="fa-regular fa-envelope" />{" "}
                      kerafresh@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="top-bar-right text-right">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      {/* ltn__social-media */}
                      <div className="ltn__social-media">
                        <ul>
                          <li>
                            <Link to="#" title="Facebook">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="Instagram">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="Linkedin">
                              <i className="fa-brands fa-linkedin-in" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#" title="Whatsapp">
                              <i className="fa-brands fa-whatsapp" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
