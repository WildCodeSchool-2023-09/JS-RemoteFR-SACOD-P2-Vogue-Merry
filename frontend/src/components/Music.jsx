import useSound from "use-sound";
import react from "react";
import Sound from "../assets/is-halloween.mp3";
import speack from "../assets/Speaker_Icon.svg";
import mute from "../assets/Mute_Icon.svg";

let src = mute;

function PlayingMusic() {
  const [isPlaying, setIsPLaying] = react.useState(false);
  const [play, { stop }] = useSound(Sound, { volume: 0.2 });
  const lunchMusic = () => {
    setIsPLaying(!isPlaying);
    if (isPlaying === false) {
      play();
      src = speack;
    } else {
      stop();
      src = mute;
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
        <img src={src} alt="speacker" className="w-16 pr-3 self-center" />
      </button>
    </div>
  );
}
export default PlayingMusic;
