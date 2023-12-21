import React from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const ScriptRecord = ({ setVoiceMessage }) => {
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    console.log("url", url);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      var base64data = reader.result;
      setVoiceMessage(base64data);
      //console.log(base64data);
    };
    const audioTag = document.querySelector("#recordAudioS");
    audioTag.appendChild(audio);
  };
  return (
    <div>
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
  );
};

export default ScriptRecord;
