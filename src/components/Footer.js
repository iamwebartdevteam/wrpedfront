import React from "react";
import { Link } from "react-router-dom";
import { IMG } from "../api/constant";

const Footer = ({ isOpen, trackData }) => {
  return (
    <>
      <div class="ms_footer_wrapper">
        <div class={isOpen ? "ms_footer_inner footer_padd" : "ms_footer_inner"}>
          {/* <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer_box">
                <h1 class="footer_title"> music station</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat duis aute
                  irure dolor.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer_box footer_app">
                <h1 class="footer_title">Download our App</h1>
                <p>
                  Go Mobile with our app.
                  <br /> Listen to your favourite songs at just one click.
                  Download Now !
                </p>
                <a href="#" class="foo_app_btn">
                  <img
                    src="assets/images/google_play.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
                <a href="#" class="foo_app_btn">
                  <img
                    src="assets/images/app_store.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
                <a href="#" class="foo_app_btn">
                  <img
                    src="assets/images/windows.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer_box footer_subscribe">
                <h1 class="footer_title">subscribe</h1>
                <p>
                  Subscribe to our newsletter and get latest updates and offers.
                </p>
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div class="form-group">
                    <a href="#" class="ms_btn">
                      sign me up
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="footer_box footer_contacts">
                <h1 class="footer_title">contact us</h1>
                <ul class="foo_con_info">
                  <li>
                    <div class="foo_con_icon">
                      <img src="assets/images/svg/phone.svg" alt="" />
                    </div>
                    <div class="foo_con_data">
                      <span class="con-title">Call us :</span>
                      <span>(+1) 202-555-0176, (+1) 2025-5501</span>
                    </div>
                  </li>
                  <li>
                    <div class="foo_con_icon">
                      <img src="assets/images/svg/message.svg" alt="" />
                    </div>
                    <div class="foo_con_data">
                      <span class="con-title">email us :</span>
                      <span>
                        <a href="#">demo@mail.com </a>,{" "}
                        <a href="#">dummy@mail.com</a>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="foo_con_icon">
                      <img src="assets/images/svg/add.svg" alt="" />
                    </div>
                    <div class="foo_con_data">
                      <span class="con-title">walk in :</span>
                      <span>598 Old House Drive, London</span>
                    </div>
                  </li>
                </ul>
                <div class="foo_sharing">
                  <div class="share_title">follow us :</div>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div class="col-lg-5">
              <div class="ms_copyright" style={{ padding: 0 }}>
                <ul>
                  <li>
                    <Link to="/wrapin-music">About Us </Link>
                  </li>
                  <li>
                    <Link to="/song-list">Songs</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 text-center">
              <img className="flogo" src={IMG + trackData.logo} />
            </div>
            <div class="col-lg-5">
              <div class="ms_copyright" style={{ display: "flex" }}>
                <ul>
                  <li>
                    <Link to="/#">Privacy Policy </Link>
                  </li>
                  <li>
                    <Link to="/#">T&C</Link>
                  </li>
                </ul>
                <p>
                  Copyright &copy; 2024-25
                  <a href="#"></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
