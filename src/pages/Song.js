import React, { useEffect, useState } from "react";
import InnerBanner from "../components/InnerBanner";
import { Link, useNavigate } from "react-router-dom";
import * as API from "../api/index";
import { IMG, NOIMG } from "../api/constant";
import Bestsellers from "../components/Bestsellers";

import cataImg from "../assets/images/artist/artist2.jpg";
const Song = ({ setIsLogin }) => {
  const [catagoriMain, setCatagoriMain] = useState([]);
  const [seachData, setSeachData] = useState([]);
  const navigate = useNavigate();
  const get_categoryList = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.get_subCategory(header);
      console.log("get_categoryList", response);
      if (response.data.success === 1) {
        setCatagoriMain(response.data.data);
      } else {
        localStorage.removeItem("_tokenCode");
        localStorage.removeItem("isLogin");
        setIsLogin(localStorage.removeItem("isLogin"));
        if (localStorage.getItem("isLogin") === null) {
          navigate("/login");
        }
      }
    } catch (error) {}
  };
  const searchSearch = async (e) => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const reqObj = {
        searchterm: e.target.value,
      };
      const response = await API.search_song_list(reqObj, header);
      console.log("response.data.data", response.data.data);
      if (response.data.success) {
        setSeachData(response.data.data);
      } else {
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
    get_categoryList();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <InnerBanner /> */}
      <div class="ms_top_artist">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <div class="srhbyx">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Songs"
                  onChange={searchSearch}
                />
                <div class="icnprty">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          {seachData.length === 0 ? (
            <div class="row justify-content-center">
              {catagoriMain.map((item, index) => (
                <div class="col-lg-3 col-md-6 mx-7" key={index}>
                  <Link to="/songs/sub-category">
                    <div class="ms_rcnt_box marger_bottom30">
                      <div class="ms_rcnt_box_img bxyimg">
                        <img src={cataImg} alt="" class="img-fluid" />
                        <div class="ms_main_overlay">
                          <div class="ms_box_overlay"></div>
                        </div>
                      </div>
                      <div class="ms_rcnt_box_text text-center">
                        <h3>Songs By {item.name}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <Bestsellers seachData={seachData} title="All Songs" />
          )}
        </div>
      </div>
    </>
  );
};

export default Song;
