import React, { useEffect } from "react";
import InnerBanner from "../components/InnerBanner";
import videos from "../assets/promo.mp4";
import { Link } from "react-router-dom";
const WrapInMusic = () => {
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
                  src=${videos}
                  class="loaderVido aboutVideo"
                  />,
              `,
                  }}
                ></div>
                <h2 className="abotHead">About us</h2>
                <p className="aboutWrap">
                  Wrapped in music takes your message and places it into a
                  timeless classic to be shared with the ones that you love and
                  the ones that they love... forever. Our easy to use service
                  allows you to give a unique, one of a kind gift that will be
                  cherished for all time no matter what the occasion, event or
                  time of year.
                </p>
                <p className="aboutWrap">
                  Wrapped in Music has a collection of memorable, instantly
                  recognizable classics as well as original songs to enhance
                  your precious memories and messages. We can even create a
                  custom song from scratch. Just reach out to us.
                </p>
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
