import React from "react";
import { IMG, NOIMG } from "../api/constant";

const Bestsellers = ({ title, seachData }) => {
  return (
    <>
      <div class="title">
        <div class="row">
          <div class="col-md-12">
            <div class="col-lg-12">
              <div class="ms_heading">
                <h1>{title ? title : "Top 15 Bestsellers"}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ms_weekly_wrapper">
        <div class="ms_weekly_inner">
          <div class="row">
            <div class="col-lg-4 col-md-12 padding_right40">
              {seachData.map((item, index) => (
                <>
                  <div class="ms_weekly_box" key={index}>
                    <div class="weekly_left">
                      {console.log("index", index)}
                      <span class="w_top_no">
                        {`${index}` < 10 ? `0${index + 1}` : `${index + 1}`}
                      </span>
                      <div class="w_top_song">
                        <div class="w_tp_song_img">
                          <img
                            src={item.image === "" ? NOIMG : IMG + item.image}
                            alt=""
                            class="img-fluid"
                          />
                          <div class="ms_song_overlay"></div>
                          <div class="ms_play_icon">
                            <img src="assets/images/svg/play.svg" alt="" />
                          </div>
                        </div>
                        <div class="w_tp_song_name">
                          <h3>
                            <a href="#">{item.name}</a>
                          </h3>
                          <p>{item.Songcategories[0].category.name}</p>
                        </div>
                      </div>
                    </div>
                    <div class="weekly_right">
                      <span class="w_song_time">$ {item.amount}:00</span>
                      <a href="#" class="cart_btn2">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  <div class="ms_divider"></div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestsellers;
