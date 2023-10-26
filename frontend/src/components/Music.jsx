import useSound from "use-sound";
import { useState } from "react";
import Sound from "../assets/is-halloween.mp3";
import speack from "../assets/Speaker_Icon.svg";
import mute from "../assets/Mute_Icon.svg";

let src = speack;

function PlayingMusic() {
  const [isPlaying, setIsPLaying] = useState(false);
  const [play, { stop }] = useSound(Sound, { volume: 0.2 });
  const lunchMusic = () => {
    setIsPLaying(!isPlaying);
    if (isPlaying === false) {
      play();
      src = mute;
    } else {
      stop();
      src = speack;
    }
  };

  return (
    <div>
      <button
        id="music"
        type="button"
        onClick={() => {
          lunchMusic();
        }}
      >
        <img src={src} alt="speacker" className="w-12 h-12 pr-3" />
      </button>
    </div>
  );
}
export default PlayingMusic;
