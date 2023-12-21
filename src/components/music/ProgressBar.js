const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <>
      {/* <div class="jp-progress">
        <div class="jp-seek-bar">
          <div class="jp-play-bar">
            <div class="bullet"></div>
          </div>
        </div>
      </div> */}
      <div className="feds">
        <input
          type="range"
          ref={progressBarRef}
          className="playBar"
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <div class="jp-time-holder">
          <span class="jp-current-time" role="timer" aria-label="time">
            {formatTime(timeProgress)}
          </span>
          <span class="jp-duration" role="timer" aria-label="duration">
            {formatTime(duration)}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
