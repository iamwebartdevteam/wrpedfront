import React from "react";
import { Link } from "react-router-dom";

const SongDetails = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div class="ms_profile_box messPlacement marginyTpp">
            <div class="ms_pro_form songDetais">
              <h3 className="headingC">Song details</h3>
              <div className="justify-content-center row justify-content-evenly">
                <div className="col-md-4">
                  <img
                    src="https://i.pinimg.com/736x/f5/cd/3a/f5cd3a26c9577e91004c20c919c6b14f.jpg"
                    className="w-100 musiDetImg"
                  />
                </div>
                <div className="col-md-6">
                  <h2 className="musicheading">Dirty Little Secret</h2>
                  <strong className="musicPrice">Price : $ 25 :00</strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam perspiciatis voluptatem
                  </p>
                </div>
                <div className="col-md-12 marging">
                  <div class="album_inner_list">
                    <div class="album_list_wrapper">
                      <ul class="album_list_name">
                        <li>Place</li>
                        <li>Duration</li>
                        <li>Play</li>
                      </ul>
                      <ul>
                        <li class="calll">
                          <a href="javascript:void(0)">
                            <span class="play_no">Starting</span>
                            <span class="play_hover"></span>
                          </a>
                        </li>
                        <li class="calll">
                          <a href="javascript:void(0)">3 : 00</a>
                        </li>
                        <li>
                          <a class="cart_btn" href="#">
                            <i class="fa fa-play" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li class="calll">
                          <a href="javascript:void(0)">
                            <span class="play_no">Ending</span>
                            <span class="play_hover"></span>
                          </a>
                        </li>
                        <li class="calll">
                          <a href="javascript:void(0)">3 : 00</a>
                        </li>
                        <li>
                          <a class="cart_btn" href="#">
                            <i class="fa fa-play" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="marger_top15 text-center pro-form-btn text-left text-start">
                    <Link class="ms_btn m-0">Order Now</Link>
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

export default SongDetails;
