import Sound from "react-sound";
import { useState } from "react";
import PropTypes from "prop-types";
import Halloween from "../assets/is-halloween.mp3";

function PlaySound({
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Sound
        url={Halloween}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={400}
        onloading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
      <button type="button" onClick={() => setIsPlaying(!isPlaying)}>
        <img id="muteButton" src="../src/assets/Speaker_Icon.svg" alt="mute" />
      </button>
    </div>
  );
}
PlaySound.propTypes = {
  handleSongLoading: PropTypes.bool.isRequired,
  handleSongPlaying: PropTypes.bool.isRequired,
  handleSongFinishedPlaying: PropTypes.bool.isRequired,
};

export default PlaySound;
