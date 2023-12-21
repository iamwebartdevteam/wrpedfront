import React from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import { Link } from "react-router-dom";

const VoiceRecord = ({
  recorderControls,
  addAudioElement,
  setExtraAmount,
  voiceData1,
  voiceMessage,
}) => {
  return (
    <>
      <div id="recordAudio"></div>
      <AudioRecorder
        recorderControls={recorderControls}
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={true}
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
        <Link onClick={voiceData1} className="ms_btn margin_top">
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
      )}
    </>
  );
};

export default VoiceRecord;
