import CircularSlider from "@fseehawer/react-circular-slider";
import { useState, useEffect, useRef, useCallback } from "react";

import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from "react-icons/io";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  currentTrack,
  handleNext,
  isPlaying,
  setIsPlaying,
  setMusicIndex,
  musiaChoose,
}) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const [isDragging, setIsDragging] = useState("");

  const togglePlayPause = () => {
    setMusicIndex(currentTrack.id);
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    var currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
      musiaChoose(lastTrackIndex, tracks[lastTrackIndex].id);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
      musiaChoose(trackIndex - 1, tracks[trackIndex - 1].id);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <>
      <div className="controls">
        <div class="align-items-center d-flex flex-item jp-controls">
          <button onClick={handlePrevious} class="jp-previous" tabindex="0">
            <i class="ms_play_control"></i>
          </button>
          <button onClick={skipBackward}>
            <img className="skippe" src="assets/images/prev.png" />
          </button>
          <button onClick={togglePlayPause} class="jp-play" tabindex="0">
            {isPlaying ? (
              <i class="ms_play_control isPaly"></i>
            ) : (
              <i class="ms_play_control"></i>
            )}
          </button>

          <button onClick={skipForward}>
            <img className="skippe" src="assets/images/next.png" />
          </button>
          <button onClick={handleNext} class="jp-next" tabindex="0">
            <i class="ms_play_control"></i>
          </button>
        </div>
      </div>
      <div className="volume">
        <button
          className="soundOr"
          onClick={() => setMuteVolume((prev) => !prev)}
        >
          {muteVolume || volume < 5 ? (
            <IoMdVolumeOff />
          ) : volume < 40 ? (
            <IoMdVolumeLow />
          ) : (
            <IoMdVolumeHigh />
          )}
        </button>
        <input
          type="range"
          className="vlum"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          style={{
            background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
          }}
        />
      </div>
    </>
  );
};

export default Controls;
