import React, { useEffect } from "react";
import InnerBanner from "../components/InnerBanner";

const WrapInMusic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InnerBanner />
      <div class="ms_top_artist">
        <div class="row">
          <div class="col-md-12">
            <div class="main-timeline">
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <div class="timeline-icon">
                    <span>
                      <i class="fa fa-globe"></i>
                    </span>
                  </div>
                  <h3 class="title">Lorem Ipsum Dolor</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer males uada tellus lorem, et condimentum neque
                    commodo Integer males uada tellus lorem, et condimentum
                    neque commodo
                  </p>
                </a>
              </div>
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <div class="timeline-icon">
                    <span>
                      <i class="fa fa-rocket"></i>
                    </span>
                  </div>
                  <h3 class="title">Lorem Ipsum Dolor</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer males uada tellus lorem, et condimentum neque
                    commodo Integer males uada tellus lorem, et condimentum
                    neque commodo
                  </p>
                </a>
              </div>
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <div class="timeline-icon">
                    <span>
                      <i class="fa fa-globe"></i>
                    </span>
                  </div>
                  <h3 class="title">Lorem Ipsum Dolor</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer males uada tellus lorem, et condimentum neque
                    commodo Integer males uada tellus lorem, et condimentum
                    neque commodo
                  </p>
                </a>
              </div>
              <div class="timeline">
                <a href="#" class="timeline-content">
                  <div class="timeline-icon">
                    <span>
                      <i class="fa fa-rocket"></i>
                    </span>
                  </div>
                  <h3 class="title">Lorem Ipsum Dolor</h3>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer males uada tellus lorem, et condimentum neque
                    commodo Integer males uada tellus lorem, et condimentum
                    neque commodo
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapInMusic;
