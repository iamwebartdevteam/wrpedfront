import React, { useEffect } from "react";
import { useLocation } from "react-router";
import InnerBanner from "../components/InnerBanner";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import * as API from "../api/index";
import { Link } from "react-router-dom";
import { useState } from "react";
import ScriptRecord from "./ScriptRecord";
import { MESSAGE } from "../schemas/Validation";
import VoiceRecord from "../components/VoiceRecord";
const VoiceMess = () => {
  const [script, setScript] = useState([]);
  const [scriptId, setScriptId] = useState("");
  const [sortDec, setSortDec] = useState("");
  const [voiceMessage, setVoiceMessage] = useState("");
  const [extraAmount, setExtraAmount] = useState("");
  const [scriptvalue, setScriptvalue] = useState("");

  const voiceData = () => {
    if (scriptId === "") {
      MESSAGE("Please choose script");
    } else if (voiceMessage === "") {
      MESSAGE("Please record your voice");
    }
    const voiceObj = {
      recordMess: voiceMessage,
      add_amount: extraAmount,
      chooseTab: scriptvalue === "" ? "1" : scriptvalue,
      scriptId: scriptId,
    };
    localStorage.setItem("_voiceData", JSON.stringify(voiceObj));
  };

  const voiceData1 = () => {
    if (voiceMessage === "") {
      MESSAGE("Please record your voice");
    }
    const voiceObj = {
      recordMess: voiceMessage,
      add_amount: extraAmount,
      chooseTab: scriptvalue === "" ? "1" : scriptvalue,
      scriptId: scriptId,
    };
    localStorage.setItem("_voiceData", JSON.stringify(voiceObj));
  };

  const scriptHandaler = async (e) => {
    const header = localStorage.getItem("_tokenCode");
    setScriptId(e.target.value);
    try {
      const response = await API.scriptGuide_byId(e.target.value, header);
      setSortDec(response.data.data.description);
    } catch (error) {}
  };

  const guideneScrit = async () => {
    const header = localStorage.getItem("_tokenCode");
    try {
      const response = await API.scriptGuide(
        header,
        localStorage.getItem("_cataGorid")
      );
      setScript(response.data.data);
      console.log("response.data.data", response.data.data);
    } catch (error) {}
  };

  const location = useLocation();
  const recorderControls = useAudioRecorder();

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      //console.log(base64data);
      setVoiceMessage(base64data);
    };

    const audioTag = document.querySelector("#recordAudio");

    audioTag.appendChild(audio);
  };

  useEffect(() => {
    guideneScrit();
  }, []);

  return (
    <>
      {/* <InnerBanner /> */}
      <div className="voiceRecordSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div
                class="ms_profile_box"
                style={{ width: "100%", height: "100%" }}
              >
                <div class="ms_pro_form voiceForm">
                  <ul
                    class="nav nav-tabs justify-content-center"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        onClick={() => setScriptvalue("1")}
                      >
                        Record Starting Message
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        onClick={() => setScriptvalue("2")}
                      >
                        Record Middle Story
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="homend-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#homend"
                        type="button"
                        role="tab"
                        aria-controls="homend"
                        aria-selected="false"
                        onClick={() => setScriptvalue("2")}
                      >
                        Record Ending Message
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <VoiceRecord />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div class="form-group d-none">
                        <label>Select Script From list</label>
                        <select class="form-control" onChange={scriptHandaler}>
                          <option>--- Select ---</option>
                          {script.map((item, index) => (
                            <option
                              key={index}
                              value={item.id}
                              dataDec={item.description}
                            >
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {sortDec === "" ? null : (
                        <div className="decription">
                          <p>{sortDec}</p>
                        </div>
                      )}
                      <div id="recordAudioS"></div>
                      <VoiceRecord />
                      {/* <ScriptRecord setVoiceMessage={setVoiceMessage} />
                      {scriptId === "" ? (
                        <Link onClick={voiceData} className="ms_btn margin_top">
                          Confirm Audio
                        </Link>
                      ) : (
                        <Link
                          to="/message-placement"
                          onClick={voiceData}
                          className="ms_btn margin_top"
                        >
                          Confirm Audio
                        </Link>
                      )} */}
                    </div>
                    <div
                      class="tab-pane fade"
                      id="homend"
                      role="tabpanel"
                      aria-labelledby="homend-tab"
                    >
                      <VoiceRecord />
                      {/* <div id="recordAudio"></div>
                      <AudioRecorder
                        recorderControls={recorderControls}
                        onRecordingComplete={addAudioElement}
                        audioTrackConstraints={{
                          noiseSuppression: true,
                          echoCancellation: true,
                        }}
                        //downloadOnSavePress={false}
                        downloadFileExtension="mp4"
                      />
                      <div className="checkBok">
                        <input
                          type="checkbox"
                          id="fruit4"
                          name="fruit-4"
                          value="5"
                          onChange={(e) => setExtraAmount(e.target.value)}
                        />
                        <label for="fruit4" className="textHad">
                          Enhance my audio (Additional $5 Apply)
                        </label>
                      </div>
                      {voiceMessage === "" ? (
                        <Link
                          onClick={voiceData1}
                          className="ms_btn margin_top"
                        >
                          Confirm Audio
                        </Link>
                      ) : (
                        <Link
                          onClick={voiceData1}
                          to="/message-placement"
                          className="ms_btn margin_top"
                        >
                          Confirm Audio
                        </Link>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceMess;
