import React, { useEffect } from "react";
import SongCarousal from "./SongCarousal";
import Genres from "./Genres";
import Bestsellers from "./Bestsellers";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import { Link } from "react-router-dom";

const Container = () => {
  const video = "assets/wrappervideo.mp4";
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
                  playsinline
                  src=${video}
                  class="loaderVido"
                  />,
              `,
                  }}
                ></div>
                <h2 class="abotHead">about us</h2>
                <p class="aboutWrap">
                  Wrapped in music takes your message and places it into a
                  timeless classic to be shared with the ones that you love and
                  the ones that they love... forever. Our easy to use service
                  allows you to give a unique, one of a kind gift that will be
                  cherished for all time no matter what the occasion, event or
                  time of year. Wrapped in Music has a collection of memorable,
                  instantly recognizable classics as well as original songs to
                  enhance your precious memories and messages. We can even
                  create a custom song from scratch. Just reach out to us.
                </p>
                <div class="text-center">
                  <Link class="ms_btn" to="/contact-us">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
