import React from "react";
import Carousel from "react-multi-carousel";

const SongCarousal = ({ title, ftitle, cateTitle }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div class="ms_heading">
        <h1>
          {title} {ftitle} {cateTitle}
        </h1>
        <span class="veiw_all">
          <a href="#">view more</a>
        </span>
      </div>
      <div className="commonCarousl">
        <Carousel responsive={responsive}>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music1.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <a href="category.html">
                      <img src="assets/images/svg/play.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="category.html">Dream Your Moments (Duet)</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music2.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <a href="category.html">
                      <img src="assets/images/svg/play.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="category.html">Until I Met You</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music3.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <a href="category.html">
                      <img src="assets/images/svg/play.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="category.html">Gimme Some Courage</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music4.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <a href="category.html">
                      <img src="assets/images/svg/play.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="category.html">Dark Alley Acoustic</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music5.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <a href="category.html">
                      <img src="assets/images/svg/play.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="#">Walking Promises</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music6.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <a href="category.html">
                      <img src="assets/images/svg/play.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="#">Desired Games</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music1.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <a href="category.html">
                      <img src="assets/images/svg/play.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="#">Dream Your Moments (Duet)</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music2.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <a href="category.html">
                      <img src="assets/images/svg/play.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="#">Until I Met You</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music3.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <img src="assets/images/svg/play.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="#">Gimme Some Courage</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="ms_rcnt_box">
              <div class="ms_rcnt_box_img">
                <img src="assets/images/music/r_music4.jpg" alt="" />
                <div class="ms_main_overlay">
                  <div class="ms_box_overlay"></div>
                  <div class="ms_more_icon">
                    <img src="assets/images/svg/more.svg" alt="" />
                  </div>
                  <ul class="more_option">
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_fav"></span>
                        </span>
                        Add To Favourites
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_queue"></span>
                        </span>
                        Add To Queue
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_dwn"></span>
                        </span>
                        Download Now
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_playlst"></span>
                        </span>
                        Add To Playlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="opt_icon">
                          <span class="icon icon_share"></span>
                        </span>
                        Share
                      </a>
                    </li>
                  </ul>
                  <div class="ms_play_icon">
                    <img src="assets/images/svg/play.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="ms_rcnt_box_text">
                <h3>
                  <a href="#">Dark Alley Acoustic</a>
                </h3>
                <p>Ava Cornish & Brian Hill</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default SongCarousal;
