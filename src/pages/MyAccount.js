import React, { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router";
import EditProfile from "./EditProfile";
import * as API from "../api/index";
import ChangesPassword from "./ChangesPassword";
import { Link } from "react-router-dom";
import DownloadMusic from "./DownloadMusic";
import { IMG } from "../api/constant";
import DownloadLink from "react-download-link";
import { MESSAGE } from "../schemas/Validation";
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
  const [allCountryData, setAllCountryData] = useState([]);
  const [allStateData, setAllStateData] = useState([]);
  const [allCityData, setAllCityData] = useState([]);

  const [orderData, setOrderData] = useState([]);

  const navigate = useNavigate();
  const [getUserData, setGetUserData] = useState("");
  const [countryData, setCountryData] = useState("");
  const [stateData, setStateData] = useState("");
  const [cityData, setCityData] = useState("");

  const logout = () => {
    localStorage.removeItem("_tokenCode");
    localStorage.removeItem("isLogin");
    localStorage.removeItem("__userId");
    setIsLogin(localStorage.removeItem("isLogin"));
    if (localStorage.getItem("isLogin") === null) {
      navigate("/login");
    }
  };

  const handalerChanges = async (e) => {
    const { name, value } = e.target;
    const header = localStorage.getItem("_tokenCode");
    if (name === "country") {
      setCountryData(parseInt(e.target.value));
      const stateresponse = await API.allState(e.target.value, header);
      setAllStateData(stateresponse.data.data);
    }
    if (name === "state") {
      setStateData(parseInt(e.target.value));
      const cityresponse = await API.allCity(e.target.value, header);
      setAllCityData(cityresponse.data.data);
    }

    if (name === "city") {
      setCityData(parseInt(e.target.value));
    }

    setFormData({ ...formData, [name]: value });
  };

  const userDataGetById = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const cresponse = await API.allCountry(header);
      setAllCountryData(cresponse.data.data);
      const musicBoxresponse = await API.orderHistroy(
        localStorage.getItem("__userId"),
        header
      );
      setOrderData(musicBoxresponse.data.data);
      console.log("musicBoxresponse", musicBoxresponse);
      const response = await API.getuserDataID(
        localStorage.getItem("__userId"),
        header
      );
      console.log("response", response);
      setFormData(response.data.data);
      setGetUserData(response.data.data);
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

  const copyfile = (data) => {
    MESSAGE("Copied link", 1);
    navigator.clipboard.writeText(IMG + data);
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
                  {/* <p>
                    <i class="bi bi-globe"></i> {formData.city},{formData.state}{" "}
                    ,{formData.country}
                  </p> */}
                  {/* <h6>
                    <i class="bi bi-person-fill"></i> Lead Hip Hop Singer at
                    Lorem Ipsum
                  </h6> */}
                </div>
                <div class="col-md-6 text-end">
                  <div class="sclntwrk">
                    <ul>
                      <li>
                        <Link to={`mailto:${formData.email}`}>
                          <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                          {formData.email}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="maindashboardbdy">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
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
                          allCountryData={allCountryData}
                          allStateData={allStateData}
                          allCityData={allCityData}
                          getUserData={getUserData}
                          countryData={countryData}
                          stateData={stateData}
                          cityData={cityData}
                          userDataGetById={userDataGetById}
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
                              <li>Duration</li>

                              <li>Share</li>
                              <li>Status</li>
                            </ul>
                            {orderData.map((item, index) => (
                              <ul style={{ marginBottom: 20 }}>
                                <li>
                                  <a href="#">
                                    <span class="play_now">{index + 1}</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">{item.songname}</a>
                                </li>

                                <li>
                                  <a href="#">{item.combined_duration}</a>
                                </li>
                                {/* <li>
                                  <a href={IMG + item.combined} download>
                                    ddsds
                                  </a>
                                  <span class="cart_btn">
                                    <i class="bi bi-file-earmark-arrow-down-fill"></i>
                                  </span>
                                </li> */}
                                {item.is_paid ? (
                                  <>
                                    <li>
                                      <span
                                        onClick={() => copyfile(item.combined)}
                                        class="cart_btn"
                                      >
                                        <i class="bi bi-clipboard-fill"></i>
                                      </span>
                                    </li>
                                  </>
                                ) : (
                                  <li> N/A</li>
                                )}

                                <li>
                                  {item.is_paid ? (
                                    <button
                                      className="ms_btn"
                                      style={{
                                        background: "green",
                                        color: "white",
                                      }}
                                    >
                                      Success
                                    </button>
                                  ) : (
                                    <button className="ms_btn">Pending</button>
                                  )}
                                </li>
                              </ul>
                            ))}
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
