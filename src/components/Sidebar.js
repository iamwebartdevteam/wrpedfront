import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/wlogo.png";
import * as API from "../api/index";
import { IMG } from "../api/constant";

const Sidebar = ({ isOpen, sidebarOpen, isLogin, cartItem, trackData }) => {
  return (
    <>
      <div
        class={isOpen ? "ms_sidemenu_wrapper open_menu" : "ms_sidemenu_wrapper"}
      >
        <div class="ms_nav_close" onClick={sidebarOpen}>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        <div class="ms_sidemenu_inner">
          <div class="ms_logo_inner">
            <div class="ms_logo">
              <Link to="/">
                <img src={IMG + trackData.logo} alt="" class="img-fluid w-75" />
              </Link>
            </div>
            <div class="ms_logo_open">
              <Link to="/">
                <img src={IMG + trackData.logo} alt="" class="img-fluid" />
              </Link>
            </div>
          </div>
          <div class="ms_nav_wrapper">
            <ul>
              <li>
                <NavLink
                  to="/"
                  class="active"
                  title="Discover"
                  onClick={sidebarOpen}
                >
                  <span class="nav_icon">
                    <span class="icon icon_discover"></span>
                  </span>
                  <span class="nav_text">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/song-list" title="Songs" onClick={sidebarOpen}>
                  <span class="nav_icon">
                    <i class="bi bi-music-note"></i>
                  </span>
                  <span class="nav_text">Songs</span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="javascript:void(0)" title="Wrap In Music">
                  <span class="nav_icon">
                    <i class="bi bi-list-task"></i>
                  </span>
                  <span class="nav_text">How it Works</span>
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/wrapin-music"
                  title="Wrap In Music"
                  onClick={sidebarOpen}
                >
                  <span class="nav_icon">
                    <i class="bi bi-music-note-list"></i>
                  </span>
                  <span class="nav_text">Wrap In Music</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  title="Testimonials"
                  onClick={sidebarOpen}
                >
                  <span class="nav_icon">
                    <i class="bi bi-people"></i>
                  </span>
                  <span class="nav_text">Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  title="Contact Us"
                  onClick={sidebarOpen}
                >
                  <span class="nav_icon">
                    <i class="bi bi-telephone"></i>
                  </span>
                  <span class="nav_text">Contact Us</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={isLogin ? "/my-account" : "/login"}
                  title="Register/Login"
                  onClick={sidebarOpen}
                >
                  <span class="nav_icon">
                    <i class="bi bi-person-circle"></i>
                  </span>
                  <span class="nav_text">
                    {isLogin ? "My Account" : "Login"}{" "}
                  </span>
                </NavLink>
              </li>
              <li>
                <div className="floating" onClick={sidebarOpen}>
                  <Link to="/cart">
                    <i class="bi bi-cart3"></i>{" "}
                    <span class="nav_text">Cart</span>
                  </Link>
                  {isLogin ? (
                    <>
                      <span className="count">
                        {cartItem.length === 0 ? 0 : cartItem.length}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="count">0</span>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
