import React from "react";
import bannerImg from "../../src/images/img2.png";
import img3 from "../../src/images/img3.png";
import img1 from "../../src/images/img1.png";
const Header = ({ isOpen }) => {
  return (
    <>
      <div class={isOpen ? "ms_headerPost ms_header" : "ms_header"}>
        <div class="ms_top_left">
          <div class="imgbanner">
            {/* <h1>WRAPPED IN MUSIC</h1> */}
            <img src={bannerImg} alt="" style={{ width: 100 }} />
            <img src={img3} alt="" style={{ width: " 45% " }} />
            <img src={img1} alt="" style={{ width: 100 }} />
          </div>
          <div class="ms_top_trend d-none">
            <span>
              <a href="#" class="ms_color">
                LOGO
              </a>
            </span>{" "}
            <span class="top_marquee">
              <a href="#"></a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
