import { BsMusicNoteBeamed } from "react-icons/bs";
import { IMG } from "../../api/constant";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
  cataName,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  //console.log("currentTrack", currentTrack);
  //const  music_file= "https://samplesongs.netlify.app/Death%20Bed.mp3";
  return (
    <div>
      <audio
        //src={currentTrack.url}
        src={IMG + currentTrack.music_file}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div class="ms_play_song">
        <div class="play_song_name">
          <a href="javascript:void(0);" id="playlist-text">
            <div class="jp-now-playing flex-item">
              <div class="jp-track-name">
                <span class="que_img">
                  {currentTrack.image ? (
                    <img src={IMG + currentTrack.image} alt="audio avatar" />
                  ) : (
                    <div className="icon-wrapper">
                      <span className="audio-icon">
                        <BsMusicNoteBeamed />
                      </span>
                    </div>
                  )}
                </span>
                <div class="que_data">
                  {currentTrack.name}
                  <div class="jp-artist-name">{currentTrack.description}</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="audio-info d-none">
        <div className="audio-image">
          {currentTrack.artwork ? (
            <img src={currentTrack.artwork} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="text">
          <p className="title">{currentTrack.name}</p>
          <p>{currentTrack.artist}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
