/* import { useState } from "react"; */
import PlaySound from "./Music";
/* import OngletElixir from "./OngletElixir"; */

function NavBar() {
  /* const [isPlaying, setIsPlaying] = useState(false);
   const [elixir, setElixir] = useState();
  function clickOnglet() {
    <OngletElixir />;
  } */
  return (
    <nav>
      <div className="head">
        <img id="logo" src="../src/assets/LOGO_1.png" alt="logo" />
        <div className="title">
          <h1>Elixir Maker</h1>
          <p>TEST YOUR KNOWLEDGE</p>
        </div>
      </div>
      <ul className="leaderboard">
        <li>
          <button id="potionButton" type="button" /* onClick= {clickOnglet} */>
            <img id="potion" src="../src/assets/potion.svg" alt="potion" />
            <h1>Elixirs</h1>
          </button>
        </li>
        <li>
          <button id="trophyButton" type="button" /* onClick= {clickOnglet} */>
            <img id="trophy" src="../src/assets/trophy.svg" alt="trophy" />
            <h1>Leaderboard</h1>
          </button>
        </li>

        <PlaySound />
      </ul>
    </nav>
  );
}
export default NavBar;