import React, { useEffect } from "react";
import InnerBanner from "../components/InnerBanner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMG } from "../api/constant";
import * as API from "../api/index";
import { MESSAGE } from "../schemas/Validation";
import { useState } from "react";
import AddToCart from "../components/AddToCart";
const MusicDetails = ({ rootApiData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [songDetails, setSongDetails] = useState([]);
  const [cartList, setCartList] = useState([]);

  console.log("cartList", cartList);
  const music_order = async (data) => {
    const header = localStorage.getItem("_tokenCode");
    if (localStorage.getItem("isLogin")) {
      try {
        const reqObj = {
          user: localStorage.getItem("__userId"),
          combined: location.state.mainId,
          amount:
            JSON.parse(localStorage.getItem("__template")).amount === ""
              ? songDetails.song_amount
              : parseInt(songDetails.song_amount) +
                parseInt(JSON.parse(localStorage.getItem("__template")).amount),
        };
        console.log("reqObj", reqObj);
        const response =
          data === "1"
            ? await API.add_order(reqObj, header)
            : await API.addToCart(reqObj, header);
        console.log("response", response);
        if (response.data.success === 1) {
          MESSAGE(response.data.msg, 1);
          if (data === "1") {
            window.open(response.data.url);
          } else {
            setCartList(response.data.data);
            rootApiData();
            navigate("/cart");
            localStorage.setItem("_cartItem", response.data.data[0]);
          }
        }
      } catch (error) {}
    } else {
      MESSAGE("Please Login To Continue");
      navigate("/login");
    }
  };
  console.log("Getcart", localStorage.getItem("_cartItem"));
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("__musicData"));

    window.scrollTo(0, 0);
    setSongDetails(data);
  }, []);

  return (
    <>
      {/* <InnerBanner /> */}

      <div className="row justify-content-center mttop">
        <div className="col-md-8">
          <div class="ms_profile_box messPlacement">
            <div class="ms_pro_form songDetais">
              {/* <h3 className="headingC">Song Order</h3> */}
              <div className="justify-content-center row justify-content-evenly">
                <div className="col-md-4">
                  <img
                    src={IMG + songDetails.image}
                    className="w-100 musiDetImg"
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="musicheading">{songDetails.title}</h2>
                  <p>{songDetails.decription}</p>
                  <strong className="musicPrice">
                    Price :{" "}
                    {JSON.parse(localStorage.getItem("__template")).amount ===
                    ""
                      ? songDetails.song_amount
                      : parseInt(songDetails.song_amount) +
                        parseInt(
                          JSON.parse(localStorage.getItem("__template")).amount
                        )}
                    {}
                    {/* {songDetails.length === ""
                      ? songDetails.song_amount
                      : songDetails.song_amount
                      ? songDetails.song_amount
                      : parseInt(songDetails.song_amount) +
                        parseInt(
                          JSON.parse(localStorage.getItem("__template")).amount
                        )} */}
                    .00
                  </strong>
                  {JSON.parse(localStorage.getItem("__template")).amount ===
                  "" ? (
                    ""
                  ) : (
                    <p>
                      Note: additional Price ${" "}
                      {JSON.parse(localStorage.getItem("__template")).amount}{" "}
                      For Template
                    </p>
                  )}

                  <span className="ownMusic">
                    Record Message : <i class="bi bi-music-note-beamed"></i>
                  </span>
                  {/* <p>{musicData.decription}</p> */}
                  <div className="d-flex justify-content-between">
                    <div class="marger_top15 pro-form-btn text-left text-start">
                      <button
                        onClick={() => music_order("1")}
                        class="ms_btn m-0 text-white"
                      >
                        Buy Now
                      </button>
                    </div>
                    <div class="marger_top15 pro-form-btn text-left text-start">
                      <button
                        onClick={() => music_order("2")}
                        class="ms_btn m-0 text-white"
                      >
                        <i class="bi bi-basket3-fill text-white"></i> Add To
                        Cart
                      </button>
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

export default MusicDetails;
