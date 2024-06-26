import React, { useEffect, useState } from "react";
import InnerBanner from "../components/InnerBanner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MESSAGE } from "../schemas/Validation";
import VoiceRecord from "../components/VoiceRecord";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import * as API from "../api/index";
import { dataBas } from "../commonData/staticData";
import { IMG } from "../api/constant";
import Stopwatch from "../components/Stopwatch";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-countdown-circle-timer";

const MessagePlacePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [timerCount, setTimerCount] = useState(false);

  const [songDetails, setSongDetails] = useState([]);
  const [isPlay, setIsPlay] = useState(false);
  const [isPlaym, setIsPlaym] = useState(false);
  const [isPlaye, setIsPlaye] = useState(false);

  const [userMargi, setUserMargi] = useState("1");

  const [combineData, setCombineData] = useState("");

  const [mainSong, setMainSong] = useState(false);
  const [voiceRecordType, setVoiceRecordType] = useState("");
  const [loader, setLoader] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState("");
  const [voiceMessageMiddil, setVoiceMessageMiddil] = useState("");
  const [voiceMessageEnd, setVoiceMessageEnd] = useState("");

  // ? Start record
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    setVoiceRecordType("1");
    setIsPlay(!isPlay);
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      setVoiceMessage(base64data);
    };
    const audioTag = document.querySelector("#recordAudioss");

    audioTag.appendChild(audio);
  };

  // ? meddile record
  const recorderControlM = useAudioRecorder();
  const addAudioElementM = (blob) => {
    setVoiceRecordType("2");
    setIsPlaym(!isPlaym);
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      //console.log(base64data);
      setVoiceMessageMiddil(base64data);
    };
    const audioTag = document.querySelector("#recordAudiossM");
    audioTag.appendChild(audio);
  };

  // ? End record
  const recorderControlss = useAudioRecorder();
  const addAudioElements = (blob) => {
    setVoiceRecordType("3");
    setIsPlaye(!isPlaye);
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      //console.log(base64data);
      setVoiceMessageEnd(base64data);
    };
    const audioTag = document.querySelector("#recordAudio");
    audioTag.appendChild(audio);
  };

  //? SONG PROCESS COMBINE
  const songProcess = async () => {
    const header = localStorage.getItem("_tokenCode");
    setLoader(true);
    try {
      const reqObj = {
        template: location.state.tamId,
        intro: voiceMessage,
        middle: voiceMessageMiddil,
        outro: voiceMessageEnd,
        isRecord: userMargi,
      };
      console.log("reqObj", reqObj);
      const response = await API.audiomarge(reqObj, header);
      console.log("response", response);
      setCombineData(response.data.data);
      if (response.data.success === 1) {
        setLoader(false);
        setMainSong(true);
      } else {
        setLoader(false);
      }
      console.log("response", response);
    } catch (error) {}
  };

  const reloadAudio = () => {
    setIsPlay(!isPlay);
    setVoiceMessage(false);
    let parentElement = document.getElementById("recordAudioss");
    parentElement.innerHTML = "";
  };

  const reloadAudiom = () => {
    setIsPlaym(!isPlaym);
    setVoiceMessageMiddil(false);
    let middleElement = document.getElementById("recordAudiossM");
    middleElement.innerHTML = "";
  };

  const reloadAudioe = () => {
    setIsPlaye(!isPlaye);
    setVoiceMessageEnd(false);
    let lastElement = document.getElementById("recordAudio");
    lastElement.innerHTML = "";
  };

  const combineDelete = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.audiomarge_delete(combineData.id, header);
      if (response.data.success === 1) {
        setMainSong(false);
        // reloadAudio();
        // reloadAudiom();
        // reloadAudioe();
      }
      console.log("response", response);
    } catch (error) {}
  };

  const usermargitype = (e) => {
    setUserMargi(e.target.value);

    if (e.target.value === "1") {
      // songProcess();
    }
  };
  // if (timerCount) {
  //   recorderControls.stopRecording();
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = JSON.parse(localStorage.getItem("__musicData"));
    setSongDetails(data);
  }, []);

  const stopRecordeing = () => {
    var stop = recorderControls.stopRecording;
    stop = false;
  };

  return (
    <>
      {/* <InnerBanner /> */}
      <div className="row justify-content-center ms_genre">
        <div className="col-md-12">
          <div class="ms_profile_box messPlacement">
            <div class="ms_pro_form">
              <div className="countDowns">
                <div className="row">
                  <div className="col-md-2">
                    <Link className="ms_btn" to="/song-details">
                      Back
                    </Link>
                  </div>
                </div>
                {/* <CountdownCircleTimer
                  size={70}
                  isPlaying={recorderControls.isRecording}
                  //duration={parseInt(songDetails.messlength)}
                  duration={3}
                  colors={["#de9313", "#de9313", "#de9313", "#de9313"]}
                  colorsTime={[20, 15, 5, 0]}
                  onComplete={() => ({ shouldRepeat: false, delay: 5 })}
                >
                  {({ remainingTime }) => (
                    <>
                      {remainingTime === 0 ? setTimerCount(true) : ""}
                      <h3 className="remainTime">{remainingTime}</h3>
                    </>
                  )}
                </CountdownCircleTimer> */}
                <h3 className="headingC">
                  <i class="bi bi-music-note-beamed"></i> {songDetails.title}
                </h3>
                <p>
                  You can choose to record your voice at the begining and end of
                  the song and also use the prerecorded middle message or record
                  your own
                </p>
              </div>

              {JSON.parse(localStorage.getItem("__template")).temtype === 1 ? (
                <div className="row justify-content-center typeofPlase">
                  <div className="col-md-5">
                    <select className="form-control" onChange={usermargitype}>
                      <option value="1">Use Prerecorded</option>
                      <option value="0">Record My Own</option>
                    </select>
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div className="row align-items-center justify-content-center">
                <div className="col-md-4">
                  <h4 className="typeLabel">Intro</h4>
                  <p className="lablePara">
                    Record your own personal greeting up to 12 seconds long
                  </p>
                  <div class="form-groupd">
                    <div className={voiceMessage ? "d-none" : " form-groupd"}>
                      <AudioRecorder
                        recorderControls={recorderControls}
                        onRecordingComplete={addAudioElement}
                        audioTrackConstraints={{
                          noiseSuppression: true,
                          echoCancellation: true,
                        }}
                        downloadOnSavePress={false}
                        downloadFileExtension="mp3"
                      />
                    </div>
                    {timerCount ? (
                      <button
                        id="stopbutton"
                        // onClick={recorderControls.stopRecording}
                      >
                        stop
                      </button>
                    ) : (
                      ""
                    )}

                    <div id="recordAudioss"></div>

                    <div
                      className={
                        isPlay ? "d-flex justify-content-center" : "d-none"
                      }
                    >
                      <button
                        className="recmp"
                        id="removeSourceAttribute"
                        onClick={reloadAudio}
                      >
                        <i class="bi bi-arrow-clockwise"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {JSON.parse(localStorage.getItem("__template")).temtype ===
                1 ? (
                  <div className={userMargi === "0" ? "col-md-4" : "d-none"}>
                    <h4 className="typeLabel">Middle </h4>
                    <p className="lablePara">
                      You can keep the pre-recorded message or record your very
                      own message or story
                    </p>
                    <div class="form-groupd">
                      <div className={voiceMessageMiddil ? "d-none" : ""}>
                        <AudioRecorder
                          recorderControls={recorderControlM}
                          onRecordingComplete={addAudioElementM}
                          audioTrackConstraints={{
                            noiseSuppression: true,
                            echoCancellation: true,
                          }}
                          downloadOnSavePress={false}
                          downloadFileExtension="mp3"
                        />
                      </div>
                      <p
                        className="lablePara"
                        style={{ marginTop: 10, marginBottom: 0 }}
                      >
                        Maximum Length{" "}
                        {JSON.parse(localStorage.getItem("__template"))
                          .duration > 60 ? (
                          <>
                            {
                              JSON.parse(localStorage.getItem("__template"))
                                .duration
                            }
                            minutes
                          </>
                        ) : (
                          <>
                            {
                              JSON.parse(localStorage.getItem("__template"))
                                .duration
                            }{" "}
                            {}
                            seconds
                          </>
                        )}{" "}
                      </p>
                      <div id="recordAudiossM"></div>
                      <div
                        className={
                          isPlaym ? "d-flex justify-content-center" : "d-none"
                        }
                      >
                        <button
                          className="recmp"
                          id="removeSourceAttribute"
                          onClick={reloadAudiom}
                        >
                          <i class="bi bi-arrow-clockwise"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="col-md-4">
                  <h4 className="typeLabel">Outro</h4>
                  <p className="lablePara">
                    Your parting words up to 12 seconds long
                  </p>
                  <div class="form-groups">
                    <div className={voiceMessageEnd ? "d-none" : ""}>
                      <AudioRecorder
                        recorderControls={recorderControlss}
                        onRecordingComplete={addAudioElements}
                        audioTrackConstraints={{
                          noiseSuppression: true,
                          echoCancellation: true,
                        }}
                        downloadOnSavePress={false}
                        downloadFileExtension="mp4"
                      />
                    </div>
                    <div id="recordAudio"></div>
                    <div
                      className={
                        isPlaye ? "d-flex justify-content-center" : "d-none"
                      }
                    >
                      <button
                        className="recmp"
                        id="removeSourceAttribute"
                        onClick={reloadAudioe}
                      >
                        <i class="bi bi-arrow-clockwise"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {voiceMessage || voiceMessageMiddil || voiceMessageEnd ? (
                <div class="pro-form-btn text-center marger_top15">
                  {loader ? (
                    <button class="ms_btn process">Processing...</button>
                  ) : (
                    <button class="ms_btn" onClick={songProcess}>
                      Process Start
                    </button>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {mainSong ? (
        <>
          <div className="row">
            <div className="col-md-9">
              <AudioPlayer
                autoPlay={false}
                src={IMG + combineData.combined}
                onPlay={(e) => console.log("onPlay")}
                // other props here
              />
            </div>
            <div className="col-md-3">
              <div className="rightSide">
                <Link
                  state={{ mainId: combineData.id }}
                  className="ms_btn confrimorder"
                  to="/order-details"
                >
                  Confirm
                </Link>
                <span className="trashIcon" onClick={combineDelete}>
                  <i class="bi bi-trash3-fill"></i>
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MessagePlacePage;
