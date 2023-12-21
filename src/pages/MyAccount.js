import React, { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router";
import EditProfile from "./EditProfile";
import * as API from "../api/index";
import ChangesPassword from "./ChangesPassword";
import { Link } from "react-router-dom";
const initialValues = {
  name: "",
  email: "",
  city: "",
  state: "",
  country: "",
  address: "",
  address1: "",
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
      const response = await API.getuserDataID(
        localStorage.getItem("__userId"),
        header
      );
      console.log("responseaa", response);
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
                        <div class="ms_weekly_wrapper ms_free_music songs_custom">
                          <div class="ms_weekly_inner">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="ms_heading">
                                  <h1>Download Trending Tracks</h1>
                                </div>
                              </div>
                              <div class="col-lg-4 col-md-12 padding_right40">
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song1.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Until I Met You</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song2.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Walking Promises</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song3.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Gimme Some Courage</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song4.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Desired Games</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song5.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Dark Alley Acoustic</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-lg-4 col-md-12 padding_right40">
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song6.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Walking Promises</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song7.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Endless Things</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box ms_active_play">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song8.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <div class="ms_bars">
                                            <div class="bar"></div>
                                            <div class="bar"></div>
                                            <div class="bar"></div>
                                            <div class="bar"></div>
                                            <div class="bar"></div>
                                            <div class="bar"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Dream Your Moments</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song9.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Until I Met You</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song5.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Gimme Some Courage</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-lg-4 col-md-12">
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song2.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Dark Alley Acoustic</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song11.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">The Heartbeat Stops</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song12.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">One More Stranger</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song13.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Walking Promises</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="ms_divider"></div>
                                <div class="ms_weekly_box">
                                  <div class="weekly_left">
                                    <div class="w_top_song">
                                      <div class="w_tp_song_img">
                                        <img
                                          src="assets/images/weekly/song14.jpg"
                                          alt=""
                                        />
                                        <div class="ms_song_overlay"></div>
                                        <div class="ms_play_icon">
                                          <img
                                            src="assets/images/svg/play.svg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div class="w_tp_song_name">
                                        <h3>
                                          <a href="#">Endless Things</a>
                                        </h3>
                                        <p>Ava Cornish</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="weekly_right">
                                    <span class="w_song_time">5:10</span>
                                    <span class="ms_more_icon" data-other="1">
                                      <img
                                        src="assets/images/svg/more.svg"
                                        alt=""
                                      />
                                    </span>
                                    <span class="w_song_dwnload">
                                      <i class="ms_icon1 dwnload_icon"></i>
                                    </span>
                                  </div>
                                  <ul class="more_option">
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_fav"></span>
                                        </span>
                                        Add To Favourites
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_queue"></span>
                                        </span>
                                        Add To Queue
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_dwn"></span>
                                        </span>
                                        Download Now
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_playlst"></span>
                                        </span>
                                        Add To Playlist
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <span class="opt_icon">
                                          <span class="icon icon_share"></span>
                                        </span>
                                        Share
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
