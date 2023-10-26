import Sound from "react-sound";
import { useState } from "react";
import Halloween from "../assets/is-halloween.mp3";

function PlaySound(
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Sound
        url={Halloween}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={500} /* a definir */
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

export default PlaySound;
