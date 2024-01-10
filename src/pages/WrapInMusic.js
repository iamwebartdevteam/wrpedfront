import React, { useEffect } from "react";
import InnerBanner from "../components/InnerBanner";
import videos from "../assets/promo.mp4";
import { Link } from "react-router-dom";
import { IMG } from "../api/constant";
const WrapInMusic = ({ trackData }) => {
  console.log("trackData", trackData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="ms-banner">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="ms_banner_video">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                  <video
                  controls
                  src=${IMG + trackData.video}
                  class="loaderVido aboutVideo"
                  />,
              `,
                  }}
                ></div>
                <h2 className="abotHead">{trackData.title}</h2>
                <p className="aboutWrap">{trackData.message}</p>

                <div className="text-center">
                  <Link className="ms_btn" to="/contact-us">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ms_top_artist">
        <div class="row">
          <div class="col-md-12"></div>
        </div>
      </div>
    </>
  );
};

export default WrapInMusic;
