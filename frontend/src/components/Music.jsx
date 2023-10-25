// eslint-disable-next-line import/no-extraneous-dependencies
import Sound from "react-sound";
import { useState } from "react";

function PlaySound(
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Sound
        url="../src/assets/is-halloween.mp3"
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300}
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
