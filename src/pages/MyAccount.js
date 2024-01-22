import React, { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router";
import EditProfile from "./EditProfile";
import * as API from "../api/index";
import ChangesPassword from "./ChangesPassword";
import { Link } from "react-router-dom";
import DownloadMusic from "./DownloadMusic";
const initialValues = {
  name: "",
  email: "",
  city: "",
  state: "",
  country: "",
  address: "",
  address1: "",
  phone: "",
};

const MyAccount = ({ setIsLogin }) => {
  const [formData, setFormData] = useState(initialValues);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("_tokenCode");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("__userId");
    setIsLogin(localStorage.removeItem("isLogin"));
    if (localStorage.getItem("isLogin") === null) {
      navigate("/login");
    }
  };

  const handalerChanges = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const userDataGetById = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const musicBoxresponse = await API.getmusicBox(
        localStorage.getItem("__userId"),
        header
      );
      console.log("musicBoxresponse", musicBoxresponse);
      const response = await API.getuserDataID(
        localStorage.getItem("__userId"),
        header
      );
      console.log("response", response);
      setFormData(response.data.data);
      if (response.data.is_login === false) {
        localStorage.removeItem("_tokenCode");
        localStorage.removeItem("isLogin");
        setIsLogin(localStorage.removeItem("isLogin"));
        if (localStorage.getItem("isLogin") === null) {
          navigate("/login");
        }
      }
    } catch (error) {}
  };
  useEffect(() => {
    userDataGetById();
  }, []);

  return (
    <>
      <div class="ms_genres_wrapper dashboard mbxy">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="profile-top">
              <div class="dashboard_img">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                  className="w-100"
                />
              </div>
            </div>
            <div class="profile-bottom">
              <div class="lgotbtn text-end">
                <span className="logout" onClick={logout}>
                  <i class="fa fa-sign-out"></i>
                </span>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <h1>{formData.name}</h1>
                  <p>
                    <i class="bi bi-globe"></i> {formData.city},{formData.state}{" "}
                    ,{formData.country}
                  </p>
                  {/* <h6>
                    <i class="bi bi-person-fill"></i> Lead Hip Hop Singer at
                    Lorem Ipsum
                  </h6> */}
                </div>
                <div class="col-md-6 text-end">
                  <div class="sclntwrk">
                    <ul>
                      {/* <li>
                        <a href="tel:+819 9876654352">
                          <i class="bi bi-telephone"></i> +819 9876654352
                        </a>
                      </li> */}
                      <li>
                        <Link to={`mailto:${formData.email}`}>
                          <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                          {formData.email}
                        </Link>
                      </li>
                      {/* <li>
                        <a href="#">
                          <i class="fa fa-twitter" aria-hidden="true"></i>
                          @Lisa_Smith
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="maindashboardbdy">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="dashboard-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#dashboard"
                          type="button"
                          role="tab"
                          aria-controls="dashboard"
                          aria-selected="true"
                        >
                          Dashboard
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Edit Profile
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="history-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#history"
                          type="button"
                          role="tab"
                          aria-controls="history"
                          aria-selected="false"
                        >
                          History
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="password-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#password"
                          type="button"
                          role="tab"
                          aria-controls="password"
                          aria-selected="false"
                        >
                          Change Password
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          id="songs-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#songs"
                          type="button"
                          role="tab"
                          aria-controls="songs"
                          aria-selected="false"
                        >
                          Music Box
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content text-center" id="myTabContent">
                      <div
                        class="tab-pane"
                        id="dashboard"
                        role="tabpanel"
                        aria-labelledby="dashboard-tab"
                      ></div>
                      <div
                        class="tab-pane fade show text-center active"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <EditProfile
                          handalerChanges={handalerChanges}
                          formData={formData}
                        />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="history"
                        role="tabpanel"
                        aria-labelledby="history-tab"
                      >
                        <div class="album_inner_list">
                          <div class="album_list_wrapper history_tab">
                            <ul class="album_list_name">
                              <li>ID</li>
                              <li>Song Title</li>
                              <li>Artist</li>
                              <li>Duration</li>
                              <li>Action</li>
                            </ul>
                            <ul>
                              <li>
                                <a href="#">
                                  <span class="play_no">01</span>
                                  <span class="play_hover"></span>
                                </a>
                              </li>
                              <li>
                                <a href="#">Bloodlust</a>
                              </li>
                              <li>
                                <a href="#">Ava Cornish &amp; Brian Hill</a>
                              </li>
                              <li>
                                <a href="#">5:26</a>
                              </li>
                              <li>
                                <a href="#" class="cart_btn">
                                  <i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <a href="#">
                                  <span class="play_no">02</span>
                                  <span class="play_hover"></span>
                                </a>
                              </li>
                              <li>
                                <a href="#">Desired Games</a>
                              </li>
                              <li>
                                <a href="#">Ava Cornish &amp; Brian Hill</a>
                              </li>
                              <li>
                                <a href="#">5:26</a>
                              </li>
                              <li>
                                <a href="#" class="cart_btn">
                                  <i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <a href="#">
                                  <span class="play_no">03</span>
                                  <span class="play_hover"></span>
                                </a>
                              </li>
                              <li>
                                <a href="#">Until I Met You</a>
                              </li>
                              <li>
                                <a href="#">Ava Cornish &amp; Brian Hill</a>
                              </li>
                              <li>
                                <a href="#">5:26</a>
                              </li>
                              <li>
                                <a href="#" class="cart_btn">
                                  <i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                            <ul class="play_active_song">
                              <li>
                                <a href="#">
                                  <span class="play_no">04</span>
                                  <span class="play_hover"></span>
                                </a>
                              </li>
                              <li>
                                <a href="#">Dark Alley Acoustic</a>
                              </li>
                              <li>
                                <a href="#">Ava Cornish &amp; Brian Hill</a>
                              </li>
                              <li>
                                <a href="#">5:26</a>
                              </li>
                              <li>
                                <a href="#" class="cart_btn">
                                  <i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <a href="#">
                                  <span class="play_no">05</span>
                                  <span class="play_hover"></span>
                                </a>
                              </li>
                              <li>
                                <a href="#">Cloud nine</a>
                              </li>
                              <li>
                                <a href="#">Ava Cornish &amp; Brian Hill</a>
                              </li>
                              <li>
                                <a href="#">5:26</a>
                              </li>
                              <li>
                                <a href="#" class="cart_btn">
                                  <i
                                    class="fa fa-shopping-cart"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="password"
                        role="tabpanel"
                        aria-labelledby="password-tab"
                      >
                        <ChangesPassword />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="songs"
                        role="tabpanel"
                        aria-labelledby="songs-tab"
                      >
                        <DownloadMusic />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
