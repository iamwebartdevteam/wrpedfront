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
  const [songColm, setSongColm] = useState("");

  const [cataDrop, setCataDrop] = useState([]);
  const [selecteData, setSelecteData] = useState("");

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
      const Allresponse = await API.get_subCategory("0", header);
      console.log("get_categoryList000", Allresponse);
      if (Allresponse.data.data.success === 1) {
        setSongData(Allresponse.data.data.music);
        setCurrentTrack(Allresponse.data.data.music[trackIndex]);
      }
      const response = await API.subCategoryIdDetails(
        localStorage.getItem("subCataId"),
        header
      );
      // setCurrentTrack(Allresponse.data.data.music[trackIndex]);

      localStorage.setItem("_cataGorid", response.data.data.category_id);
      // setSongData(Allresponse.data.data.music);
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

  const subcataWaisSong = async (datas, title) => {
    const header = localStorage.getItem("_tokenCode");
    const data = datas;
    setSelecteData(title);
    try {
      const response = await API.getsubCategory_song(data, header);
      setSongData(response.data.data.music);
    } catch (error) {}
  };

  const get_categoryList = async (data, title) => {
    setSelecteData("");
    const header = localStorage.getItem("_tokenCode");
    setCataGoriData(title);
    setSongColm(data);
    try {
      const response = await API.get_subCategory(data, header);
      const dropResponse = await API.getsubCategory_drop(data, header);
      console.log("dropResponse", dropResponse);
      console.log("get_categoryList", response);
      if (response.data.data.success === 1) {
        setCataDrop(dropResponse.data.data);
        setSongData(response.data.data.music);
        setCurrentTrack(response.data.data.music[trackIndex]);
      } else {
      }
    } catch (error) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // get_categoryList("0");
    getVatagoriy_details("0");
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
                  class="nav nav-pills mb-3 justify-content-end"
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
                      onClick={() => get_categoryList("0", "Occasion")}
                    >
                      All
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
                <div
                  className={
                    songColm === "0" || songColm === "" ? "d-none" : "srhbyx"
                  }
                >
                  <div class="custom-select" tabindex="0">
                    <div class="select-selected">
                      {selecteData === "" ? "Select an option " : selecteData}
                    </div>
                    <ul class="select-items ">
                      {cataDrop.map((item, index) => (
                        <>
                          <li
                            key={index}
                            className="catagoriUl"
                            onClick={() => subcataWaisSong(item.id, item.name)}
                          >
                            <span>{item.name}</span>
                            <span className="countCata">({item.count}) </span>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>

                  <select
                    class="form-control catagori d-none"
                    onChange={subcataWaisSong}
                  >
                    <option> --- Select --- </option>
                    {cataDrop.map((item, index) => (
                      <>
                        <option key={index} value={item.id}>
                          <ul className="catagoriUl">
                            <li>{item.name}</li>
                            <li>{item.category}</li>
                          </ul>
                        </option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div class="album_inner_list songList">
              <div
                class={
                  songColm === "1" || songColm === "2" || songColm === "3"
                    ? "album_list_wrapper tablewidth"
                    : "album_list_wrapper"
                }
              >
                <ul class="album_list_name">
                  <li style={{ width: "8%" }}>Select</li>
                  <li style={{ width: "36%" }}>Song Title</li>
                  {songColm === "2" || songColm === "3" ? (
                    ""
                  ) : (
                    <>
                      <li>Occasion</li>
                    </>
                  )}
                  {songColm === "1" || songColm === "3" ? "" : <li>Genres</li>}
                  {songColm === "2" || songColm === "1" ? "" : <li>Moods</li>}

                  <li>Amount </li>
                </ul>
                {songData === "" ||
                songData.length === 0 ||
                songData === undefined ? (
                  <h1 className="noRechor">Data Not Found</h1>
                ) : (
                  songData.map((item, index) => (
                    <ul>
                      <li style={{ width: "8%" }}>
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

                      <li
                        style={{ width: "36%" }}
                        className={
                          musicIndex === item.id ? "songActive" : "calll"
                        }
                        onClick={() => musiaChoose(index, item.id)}
                      >
                        <span
                          className={
                            musicIndex === item.id
                              ? "songActive text-center"
                              : "calll text-center"
                          }
                          onClick={() => musiaChoose(index, item.id)}
                        >
                          <Link to="javascript:void(0)">
                            {musicIndex === item.id ? (
                              <img
                                className="playIcon"
                                src="https://m.media-amazon.com/images/G/01/digital/music/player/web/EQ_accent.gif"
                              />
                            ) : (
                              <span class="play_hover"></span>
                            )}
                          </Link>
                        </span>
                        <Link to="javascript:void(0)">{item.name}</Link>
                      </li>
                      {songColm === "2" || songColm === "3" ? (
                        ""
                      ) : (
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
                      )}
                      {songColm === "1" || songColm === "3" ? (
                        ""
                      ) : (
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
                      )}
                      {songColm === "1" || songColm === "2" ? (
                        ""
                      ) : (
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
                      )}

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
