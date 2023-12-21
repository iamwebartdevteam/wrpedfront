import React, { useEffect } from "react";
import SongCarousal from "./SongCarousal";
import Genres from "./Genres";
import Bestsellers from "./Bestsellers";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

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
                  loop
                  muted
                  autoplay
                  playsinline
                  src=${video}
                  class="loaderVido"
                  />,
              `,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SongCarousal ftitle="Trending Songs" />
      {/* <Genres /> */}
      {/* <Bestsellers /> */}
      <HowItWorks />
      <SongCarousal title="Custom Messages For Any Occasion" />
      <Testimonials />
      <Faq />
    </>
  );
};

export default Container;
