import React, { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router";
import EditProfile from "./EditProfile";
import * as API from "../api/index";
import ChangesPassword from "./ChangesPassword";
import { Link } from "react-router-dom";
import DownloadMusic from "./DownloadMusic";
import { IMG } from "../api/constant";
import DownloadLink from "react-download-link";
import AudioPlayer from "react-h5-audio-player";
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
  const [histoySong, setHistoySong] = useState("");
  const [currentPlay, setCurrentPlay] = useState("");
  const [isPlaysong, setIsPlaysong] = useState("");

  const controlData = (data) => {
    console.log("data", data);
    setIsPlaysong(data);
    if (data.type === "play") {
    }
  };

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

  const handleDownloadClick = (downloadLink, name) => {
    fetch(downloadLink)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary anchor element
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        let formattedName = name.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "-");
        formattedName += ".mp3";
        link.setAttribute("download", formattedName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error downloading file:", error));
  };
  const historyMusicButton = (data, id) => {
    setHistoySong(data);
    console.log("idddddd", id);
    setCurrentPlay(id);
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
                              <li>Action</li>
                              <li>Song Title</li>
                              <li>Duration</li>

                              <li>Sharable Link</li>
                              <li>Status</li>
                            </ul>
                            {orderData.map((item, index) => (
                              <ul style={{ marginBottom: 20 }}>
                                {item.is_paid ? (
                                  <li>
                                    <Link
                                      to="#"
                                      onClick={() =>
                                        historyMusicButton(
                                          item.combined,
                                          item.id
                                        )
                                      }
                                    >
                                      {currentPlay === item.id ? (
                                        <img
                                          className="playIcon"
                                          src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif"
                                        />
                                      ) : (
                                        <span class="play_hover"></span>
                                      )}
                                    </Link>
                                  </li>
                                ) : (
                                  <li>N/A</li>
                                )}
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
                                    <a
                                      href="#!"
                                      className="ms_btn"
                                      style={{
                                        background: "green",
                                        color: "white",
                                        padding: " 0 15px",
                                        fontSize: "25px",
                                      }}
                                      onClick={(e) =>
                                        handleDownloadClick(
                                          IMG + item.combined,
                                          item.songname
                                        )
                                      }
                                    >
                                      <i class="bi bi-download"></i>
                                    </a>
                                  ) : (
                                    <button
                                      style={{
                                        background: "red",
                                        color: "white",
                                        padding: " 0 15px",
                                        fontSize: "25px",
                                      }}
                                      className="ms_btn"
                                    >
                                      <i class="bi bi-stopwatch"></i>
                                    </button>
                                  )}
                                </li>
                              </ul>
                            ))}
                          </div>
                        </div>
                        <div className={histoySong ? "row" : "d-none"}>
                          <div className="col-md-12 historyPlay">
                            <AudioPlayer
                              autoPlay={false}
                              src={IMG + histoySong}
                              onPlay={(e) => controlData(e)}
                              onPause={(e) => controlData(e)}

                              // other props here
                            />
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
