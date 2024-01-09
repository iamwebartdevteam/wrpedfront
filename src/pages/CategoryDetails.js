import React, { useEffect, useState } from "react";
import InnerBanner from "../components/InnerBanner";
import * as API from "../api/index";
import { useLocation, useNavigate } from "react-router";
import { IMG, NOIMG } from "../api/constant";
import { Link } from "react-router-dom";
import { MESSAGE, TOKEN_CODE } from "../schemas/Validation";
import AudioTrack from "../components/AudioTrack";
import CommonCata from "../components/CommonCata";
import CataDetails from "./CataDetails";
const CategoryDetails = () => {
  const [musicIndex, setMusicIndex] = useState("");
  const [songData, setSongData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(songData[trackIndex]);

  const [cataGoriData, setCataGoriData] = useState("");

  const musiaChoose = (index, songid) => {
    setIsPlaying(true);
    setMusicIndex(songid);
    setCurrentTrack(songData[index]);
    setTrackIndex(index);
  };

  // ? First time data get api
  const getVatagoriy_details = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const Allresponse = await API.get_subCategory("1", header);
      console.log("get_categoryList", Allresponse);
      const response = await API.subCategoryIdDetails(
        localStorage.getItem("subCataId"),
        header
      );
      setCurrentTrack(Allresponse.data.data.music[trackIndex]);
      console.log("response", response);
      localStorage.setItem("_cataGorid", response.data.data.category_id);
      setSongData(Allresponse.data.data.music);
      // setCataGoriData(response.data.data);
    } catch (error) {}
  };

  const add_music_user = (songId, songAmount, title, decription, image) => {
    try {
      const songObj = {
        song_id: songId,
        song_amount: songAmount,
        title: title,
        decription: decription,
        image: image,
      };
      console.log("songObj", songObj);
      localStorage.setItem("__musicData", JSON.stringify(songObj));
    } catch (error) {}
  };

  const searchAllSong = async (e) => {
    const header = localStorage.getItem("_tokenCode");
    const data = e.target.value;
    console.log("data", data);
    try {
      const reqObj = {
        cataId: localStorage.getItem("subCataId"),
        queris: data === "" ? "asscx" : e.target.value,
      };
      const response = await API.search_song_lists(reqObj, header);
      console.log("response", response);
      setSongData(response.data.data);
    } catch (error) {}
  };
  const get_categoryList = async (data, title) => {
    const header = localStorage.getItem("_tokenCode");
    setCataGoriData(title);
    try {
      const response = await API.get_subCategory(data, header);
      console.log("get_categoryList", response);
      if (response.data.data.success === 1) {
        setSongData(response.data.data.music);
        setCurrentTrack(response.data.data.music[trackIndex]);
      } else {
      }
    } catch (error) {}
  };
  console.log("currentTrack", currentTrack);

  useEffect(() => {
    window.scrollTo(0, 0);
    //get_categoryList("2");
    getVatagoriy_details();
  }, []);

  return (
    <>
      {/* <InnerBanner /> */}
      {/* <CataDetails /> */}
      <div class="ms_genres_wrapper mt-0">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div class="album_single_data">
                  <div class="album_single_img">
                    <img
                      src={
                        currentTrack === undefined
                          ? NOIMG
                          : currentTrack.image === ""
                          ? NOIMG
                          : IMG + currentTrack.image
                      }
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                  <div class="album_single_text">
                    <h2>
                      {currentTrack === undefined ? "" : currentTrack.name}
                    </h2>
                    <p class="singer_name">
                      <span className="commonColor">
                        {cataGoriData === "" ? "Occasion" : cataGoriData}
                      </span>
                    </p>
                    <div class="about_artist">
                      {currentTrack === undefined
                        ? ""
                        : currentTrack.description}
                    </div>
                    <p class="singer_name">
                      <span className="commonColor" style={{ fontSize: 30 }}>
                        ${currentTrack === undefined ? "" : currentTrack.amount}
                        .00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 cataTeb">
                <ul
                  class="nav nav-pills mb-3 justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                      onClick={() => get_categoryList("1", "Occasion")}
                    >
                      All
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                      onClick={() => get_categoryList("2", "Genre")}
                    >
                      Genre
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                      onClick={() => get_categoryList("1", "Occasion")}
                    >
                      Occasion
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-mood-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-mood"
                      type="button"
                      role="tab"
                      aria-controls="pills-mood"
                      aria-selected="false"
                      onClick={() => get_categoryList("3", "Mood")}
                    >
                      Mood
                    </button>
                  </li>
                </ul>
                <div className="srhbyx d-none">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Songs"
                    onChange={searchAllSong}
                  />
                  <div class="icnprty">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="album_inner_list songList">
              <div class="album_list_wrapper">
                <ul class="album_list_name">
                  <li>ID</li>
                  <li>Song Title</li>
                  <li> Genres</li>
                  <li>Occasion</li>
                  <li>Moods</li>
                  <li>Amount </li>
                  <li>Action</li>
                </ul>
                {songData === "" ||
                songData.length === 0 ||
                songData === undefined ? (
                  <h1 className="noRechor">Data Not Found</h1>
                ) : (
                  songData.map((item, index) => (
                    <ul>
                      <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">
                          <span class="play_no">
                            {musicIndex === item.id ? "" : index + 1}
                          </span>
                          {musicIndex === item.id ? (
                            <img
                              className="playIcon"
                              src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif"
                            />
                          ) : (
                            <span class="play_hover"></span>
                          )}
                        </Link>
                      </li>
                      <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">{item.name}</Link>
                      </li>
                      <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">
                          {item.occasion === "" ? "N/A" : item.occasion}
                        </Link>
                      </li>
                      <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">
                          {item.genre === "" ? "N/A" : item.genre}
                        </Link>
                      </li>
                      <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">
                          {item.mood === "" ? "N/A" : item.mood}
                        </Link>
                      </li>
                      <li
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <Link to="javascript:void(0)">
                          $ {item.amount} : 00
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={() =>
                            add_music_user(
                              item.id,
                              item.amount,
                              item.name,
                              item.description,
                              item.image
                            )
                          }
                          to="/song-details"
                          class="cart_btn"
                          state={{ songId: item.id }}
                        >
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </Link>
                      </li>
                    </ul>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <div class="ms_view_more padder_bottom20">
          <a href="#" class="ms_btn">
            view more
          </a>
        </div> */}
      </div>
      {songData.length === 0 ? (
        ""
      ) : (
        <AudioTrack
          musiaChoose={musiaChoose}
          musicIndex={musicIndex}
          setMusicIndex={setMusicIndex}
          cataName={cataGoriData.category_name}
          tracks={songData}
          setTrackIndex={setTrackIndex}
          trackIndex={trackIndex}
          currentTrack={currentTrack}
          setCurrentTrack={setCurrentTrack}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        />
      )}
    </>
  );
};

export default CategoryDetails;
